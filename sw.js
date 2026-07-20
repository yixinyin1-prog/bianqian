/**
 * Service Worker：让 PWA 离线可用。
 *
 * 缓存策略是「网络优先，失败回落缓存」，不是常见的「缓存优先」——
 * 缓存优先会让用户装完之后一直卡在旧版本上，我改了代码重新部署，
 * 他刷新八百次看到的还是老的。这个 App 的资源就一两 MB，
 * 有网时多走一次网络的代价，远小于「更新不了」的代价。
 *
 * 用户数据一个字节都不在这里——数据在 IndexedDB，
 * 清缓存不会碰它。但清「网站数据」会两个一起清掉，这点得在界面上讲明白。
 */

// 改动这个版本号会让旧缓存整个作废。每次部署都应该变，
// 构建时会把 20260720104824 替换成真实的构建时间戳
const CACHE = 'desknotes-20260720104824'

/**
 * 必须预缓存的资源清单，构建时由 vite 插件注入真实文件名（带 hash）。
 *
 * 为什么不能「按需缓存」：SW 首次注册时，页面的 JS/CSS/wasm 请求
 * 早在它接管之前就发出去了，fetch 事件根本收不到，于是永远进不了缓存——
 * 断网时打开就是白屏。这是实测出来的：第一版只预缓存了 index.html，
 * 停掉服务器后页面全白，缓存里只有 5 个无关紧要的文件。
 */
const PRECACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./assets/main-74f2EA3T.js",
  "./assets/main-BsUoHQYG.css",
  "./assets/sql-wasm.wasm",
  "./assets/webimages-C2Ox3bgK.js",
  "./assets/websql-wdtrvhqn.js"
]

self.addEventListener('install', (e) => {
  // 新 SW 立刻接管，不等所有旧标签页关掉——
  // 否则用户得把 App 完全杀掉再开才能拿到新版本
  self.skipWaiting()
  e.waitUntil(
    (async () => {
      const c = await caches.open(CACHE)
      // 逐个加而不是 addAll：addAll 是全或无，任何一个 404
      // 都会让整个安装失败，结果是一个字节都没缓存上
      await Promise.all(
        PRECACHE.map((u) =>
          c.add(u).catch((err) => console.warn('[sw] 预缓存失败:', u, err)),
        ),
      )
    })(),
  )
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    (async () => {
      // 清掉上个版本的缓存
      const keys = await caches.keys()
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      await self.clients.claim()
    })(),
  )
})

self.addEventListener('fetch', (e) => {
  const req = e.request

  // 只管自己域下的 GET。跨域请求和 POST 直接放过，
  // 拦下来除了出错没有任何好处
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return

  e.respondWith(
    (async () => {
      try {
        const fresh = await fetch(req)
        // 只缓存成功的响应。把 404 或 opaque 响应存进去，
        // 断网时会拿它当正常内容回给页面，比直接失败更难查
        if (fresh.ok && fresh.type === 'basic') {
          const c = await caches.open(CACHE)
          c.put(req, fresh.clone())
        }
        return fresh
      } catch {
        // 断网：回落到缓存
        const hit = await caches.match(req)
        if (hit) return hit
        // 页面导航请求没命中就给入口页——SPA 的路由由前端自己管
        if (req.mode === 'navigate') {
          const shell = await caches.match('./index.html')
          if (shell) return shell
        }
        throw new Error('离线且没有缓存')
      }
    })(),
  )
})
