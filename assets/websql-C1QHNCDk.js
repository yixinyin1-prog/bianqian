var fr=Object.defineProperty;var Er=(m,w,T)=>w in m?fr(m,w,{enumerable:!0,configurable:!0,writable:!0,value:T}):m[w]=T;var $=(m,w,T)=>Er(m,typeof w!="symbol"?w+"":w,T);import{g as hr}from"./main-nXfQ0NwX.js";var le={exports:{}},fn;function dr(){return fn||(fn=1,(function(m,w){var T=void 0,g=function(Y){return T||(T=new Promise(function(k,_t){var Ze,Je;var G=typeof Y<"u"?Y:{},de=G.onAbort;G.onAbort=function(t){_t(new Error(t)),de&&de(t)},G.postRun=G.postRun||[],G.postRun.push(function(){k(G)}),m=void 0;var s;s||(s=typeof G<"u"?G:{});var cn=!!globalThis.window,Xt=!!globalThis.WorkerGlobalScope;s.onRuntimeInitialized=function(){function t(o,l){switch(typeof l){case"boolean":ur(o,l?1:0);break;case"number":or(o,l);break;case"string":ar(o,l,-1,-1);break;case"object":if(l===null)an(o);else if(l.length!=null){var E=Dt(l.length);O.set(l,E),sr(o,E,l.length,-1),Tt(E)}else qt(o,"Wrong API use : tried to return a value of an unknown type ("+l+").",-1);break;default:an(o)}}function e(o,l){for(var E=[],h=0;h<o;h+=1){var b=W(l+4*h,"i32"),_=tr(b);if(_===1||_===2)b=ir(b);else if(_===3)b=nr(b);else if(_===4){_=b,b=er(_),_=rr(_);for(var X=new Uint8Array(b),q=0;q<b;q+=1)X[q]=O[_+q];b=X}else b=null;E.push(b)}return E}function n(o,l){this.Qa=o,this.db=l,this.Oa=1,this.yb=[]}function r(o,l){if(this.db=l,this.ob=Ut(o),this.ob===null)throw Error("Unable to allocate memory for the SQL string");this.ub=this.ob,this.gb=this.Fb=null}function i(o){if(this.filename="dbfile_"+(4294967295*Math.random()>>>0),o!=null){var l=this.filename,E="/",h=l;if(E&&(E=typeof E=="string"?E:$t(E),h=l?Ht(E+"/"+l):E),l=Ie(!0,!0),h=In(h,l),o){if(typeof o=="string"){E=Array(o.length);for(var b=0,_=o.length;b<_;++b)E[b]=o.charCodeAt(b);o=E}Rt(h,l|146),E=st(h,577),We(E,o,0,o.length,0),ee(E),Rt(h,l)}}this.handleError(d(this.filename,a)),this.db=W(a,"i32"),un(this.db),this.pb={},this.Sa={}}var a=nt(4),u=s.cwrap,d=u("sqlite3_open","number",["string","number"]),N=u("sqlite3_close_v2","number",["number"]),p=u("sqlite3_exec","number",["number","string","number","number","number"]),L=u("sqlite3_changes","number",["number"]),I=u("sqlite3_prepare_v2","number",["number","string","number","number","number"]),tn=u("sqlite3_sql","string",["number"]),Fn=u("sqlite3_normalized_sql","string",["number"]),en=u("sqlite3_prepare_v2","number",["number","number","number","number","number"]),Xn=u("sqlite3_bind_text","number",["number","number","number","number","number"]),nn=u("sqlite3_bind_blob","number",["number","number","number","number","number"]),xn=u("sqlite3_bind_double","number",["number","number","number"]),Pn=u("sqlite3_bind_int","number",["number","number","number"]),Bn=u("sqlite3_bind_parameter_index","number",["number","string"]),Yn=u("sqlite3_step","number",["number"]),Gn=u("sqlite3_errmsg","string",["number"]),Wn=u("sqlite3_column_count","number",["number"]),Qn=u("sqlite3_data_count","number",["number"]),Hn=u("sqlite3_column_double","number",["number","number"]),rn=u("sqlite3_column_text","string",["number","number"]),jn=u("sqlite3_column_blob","number",["number","number"]),zn=u("sqlite3_column_bytes","number",["number","number"]),$n=u("sqlite3_column_type","number",["number","number"]),Kn=u("sqlite3_column_name","string",["number","number"]),Vn=u("sqlite3_reset","number",["number"]),Zn=u("sqlite3_clear_bindings","number",["number"]),Jn=u("sqlite3_finalize","number",["number"]),on=u("sqlite3_create_function_v2","number","number string number number number number number number number".split(" ")),tr=u("sqlite3_value_type","number",["number"]),er=u("sqlite3_value_bytes","number",["number"]),nr=u("sqlite3_value_text","string",["number"]),rr=u("sqlite3_value_blob","number",["number"]),ir=u("sqlite3_value_double","number",["number"]),or=u("sqlite3_result_double","",["number","number"]),an=u("sqlite3_result_null","",["number"]),ar=u("sqlite3_result_text","",["number","string","number","number"]),sr=u("sqlite3_result_blob","",["number","number","number","number"]),ur=u("sqlite3_result_int","",["number","number"]),qt=u("sqlite3_result_error","",["number","string","number"]),sn=u("sqlite3_aggregate_context","number",["number","number"]),un=u("RegisterExtensionFunctions","number",["number"]),ln=u("sqlite3_update_hook","number",["number","number","number"]);n.prototype.bind=function(o){if(!this.Qa)throw"Statement closed";return this.reset(),Array.isArray(o)?this.Wb(o):o!=null&&typeof o=="object"?this.Xb(o):!0},n.prototype.step=function(){if(!this.Qa)throw"Statement closed";this.Oa=1;var o=Yn(this.Qa);switch(o){case 100:return!0;case 101:return!1;default:throw this.db.handleError(o)}},n.prototype.Pb=function(o){return o==null&&(o=this.Oa,this.Oa+=1),Hn(this.Qa,o)},n.prototype.hc=function(o){if(o==null&&(o=this.Oa,this.Oa+=1),o=rn(this.Qa,o),typeof BigInt!="function")throw Error("BigInt is not supported");return BigInt(o)},n.prototype.mc=function(o){return o==null&&(o=this.Oa,this.Oa+=1),rn(this.Qa,o)},n.prototype.getBlob=function(o){o==null&&(o=this.Oa,this.Oa+=1);var l=zn(this.Qa,o);o=jn(this.Qa,o);for(var E=new Uint8Array(l),h=0;h<l;h+=1)E[h]=O[o+h];return E},n.prototype.get=function(o,l){l=l||{},o!=null&&this.bind(o)&&this.step(),o=[];for(var E=Qn(this.Qa),h=0;h<E;h+=1)switch($n(this.Qa,h)){case 1:var b=l.useBigInt?this.hc(h):this.Pb(h);o.push(b);break;case 2:o.push(this.Pb(h));break;case 3:o.push(this.mc(h));break;case 4:o.push(this.getBlob(h));break;default:o.push(null)}return o},n.prototype.Db=function(){for(var o=[],l=Wn(this.Qa),E=0;E<l;E+=1)o.push(Kn(this.Qa,E));return o},n.prototype.Ob=function(o,l){o=this.get(o,l),l=this.Db();for(var E={},h=0;h<l.length;h+=1)E[l[h]]=o[h];return E},n.prototype.lc=function(){return tn(this.Qa)},n.prototype.ic=function(){return Fn(this.Qa)},n.prototype.Jb=function(o){return o!=null&&this.bind(o),this.step(),this.reset()},n.prototype.Lb=function(o,l){l==null&&(l=this.Oa,this.Oa+=1),o=Ut(o),this.yb.push(o),this.db.handleError(Xn(this.Qa,l,o,-1,0))},n.prototype.Vb=function(o,l){l==null&&(l=this.Oa,this.Oa+=1);var E=Dt(o.length);O.set(o,E),this.yb.push(E),this.db.handleError(nn(this.Qa,l,E,o.length,0))},n.prototype.Kb=function(o,l){l==null&&(l=this.Oa,this.Oa+=1),this.db.handleError((o===(o|0)?Pn:xn)(this.Qa,l,o))},n.prototype.Yb=function(o){o==null&&(o=this.Oa,this.Oa+=1),nn(this.Qa,o,0,0,0)},n.prototype.Mb=function(o,l){switch(l==null&&(l=this.Oa,this.Oa+=1),typeof o){case"string":this.Lb(o,l);return;case"number":this.Kb(o,l);return;case"bigint":this.Lb(o.toString(),l);return;case"boolean":this.Kb(o+0,l);return;case"object":if(o===null){this.Yb(l);return}if(o.length!=null){this.Vb(o,l);return}}throw"Wrong API use : tried to bind a value of an unknown type ("+o+")."},n.prototype.Xb=function(o){var l=this;return Object.keys(o).forEach(function(E){var h=Bn(l.Qa,E);h!==0&&l.Mb(o[E],h)}),!0},n.prototype.Wb=function(o){for(var l=0;l<o.length;l+=1)this.Mb(o[l],l+1);return!0},n.prototype.reset=function(){return this.Cb(),Zn(this.Qa)===0&&Vn(this.Qa)===0},n.prototype.Cb=function(){for(var o;(o=this.yb.pop())!==void 0;)Tt(o)},n.prototype.cb=function(){this.Cb();var o=Jn(this.Qa)===0;return delete this.db.pb[this.Qa],this.Qa=0,o},r.prototype.next=function(){if(this.ob===null)return{done:!0};if(this.gb!==null&&(this.gb.cb(),this.gb=null),!this.db.db)throw this.Ab(),Error("Database closed");var o=Ct(),l=nt(4);ct(a),ct(l);try{this.db.handleError(en(this.db.db,this.ub,-1,a,l)),this.ub=W(l,"i32");var E=W(a,"i32");return E===0?(this.Ab(),{done:!0}):(this.gb=new n(E,this.db),this.db.pb[E]=this.gb,{value:this.gb,done:!1})}catch(h){throw this.Fb=R(this.ub),this.Ab(),h}finally{kt(o)}},r.prototype.Ab=function(){Tt(this.ob),this.ob=null},r.prototype.jc=function(){return this.Fb!==null?this.Fb:R(this.ub)},typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"&&(r.prototype[Symbol.iterator]=function(){return this}),i.prototype.Jb=function(o,l){if(!this.db)throw"Database closed";if(l){o=this.Gb(o,l);try{o.step()}finally{o.cb()}}else this.handleError(p(this.db,o,0,0,a));return this},i.prototype.exec=function(o,l,E){if(!this.db)throw"Database closed";var h=null,b=null,_=null;try{_=b=Ut(o);var X=nt(4);for(o=[];W(_,"i8")!==0;){ct(a),ct(X),this.handleError(en(this.db,_,-1,a,X));var q=W(a,"i32");if(_=W(X,"i32"),q!==0){var C=null;for(h=new n(q,this),l!=null&&h.bind(l);h.step();)C===null&&(C={columns:h.Db(),values:[]},o.push(C)),C.values.push(h.get(null,E));h.cb()}}return o}catch(x){throw h&&h.cb(),x}finally{b&&Tt(b)}},i.prototype.ec=function(o,l,E,h,b){typeof l=="function"&&(h=E,E=l,l=void 0),o=this.Gb(o,l);try{for(;o.step();)E(o.Ob(null,b))}finally{o.cb()}if(typeof h=="function")return h()},i.prototype.Gb=function(o,l){if(ct(a),this.handleError(I(this.db,o,-1,a,0)),o=W(a,"i32"),o===0)throw"Nothing to prepare";var E=new n(o,this);return l!=null&&E.bind(l),this.pb[o]=E},i.prototype.pc=function(o){return new r(o,this)},i.prototype.fc=function(){Object.values(this.pb).forEach(function(l){l.cb()}),Object.values(this.Sa).forEach(j),this.Sa={},this.handleError(N(this.db));var o=Sn(this.filename);return this.handleError(d(this.filename,a)),this.db=W(a,"i32"),un(this.db),o},i.prototype.close=function(){this.db!==null&&(Object.values(this.pb).forEach(function(o){o.cb()}),Object.values(this.Sa).forEach(j),this.Sa={},this.fb&&(j(this.fb),this.fb=void 0),this.handleError(N(this.db)),xe("/"+this.filename),this.db=null)},i.prototype.handleError=function(o){if(o===0)return null;throw o=Gn(this.db),Error(o)},i.prototype.kc=function(){return L(this.db)},i.prototype.bc=function(o,l){Object.prototype.hasOwnProperty.call(this.Sa,o)&&(j(this.Sa[o]),delete this.Sa[o]);var E=bt(function(h,b,_){b=e(b,_);try{var X=l.apply(null,b)}catch(q){qt(h,q,-1);return}t(h,X)},"viii");return this.Sa[o]=E,this.handleError(on(this.db,o,l.length,1,0,E,0,0,0)),this},i.prototype.ac=function(o,l){var E=l.init||function(){return null},h=l.finalize||function(C){return C},b=l.step;if(!b)throw"An aggregate function must have a step function in "+o;var _={};Object.hasOwnProperty.call(this.Sa,o)&&(j(this.Sa[o]),delete this.Sa[o]),l=o+"__finalize",Object.hasOwnProperty.call(this.Sa,l)&&(j(this.Sa[l]),delete this.Sa[l]);var X=bt(function(C,x,ue){var rt=sn(C,1);Object.hasOwnProperty.call(_,rt)||(_[rt]=E()),x=e(x,ue),x=[_[rt]].concat(x);try{_[rt]=b.apply(null,x)}catch(lr){delete _[rt],qt(C,lr,-1)}},"viii"),q=bt(function(C){var x=sn(C,1);try{var ue=h(_[x])}catch(rt){delete _[x],qt(C,rt,-1);return}t(C,ue),delete _[x]},"vi");return this.Sa[o]=X,this.Sa[l]=q,this.handleError(on(this.db,o,b.length-1,1,0,0,X,q,0)),this},i.prototype.vc=function(o){return this.fb&&(ln(this.db,0,0),j(this.fb),this.fb=void 0),o?(this.fb=bt(function(l,E,h,b,_){switch(E){case 18:l="insert";break;case 23:l="update";break;case 9:l="delete";break;default:throw"unknown operationCode in updateHook callback: "+E}if(h=R(h),b=R(b),_>Number.MAX_SAFE_INTEGER)throw"rowId too big to fit inside a Number";o(l,h,b,Number(_))},"viiiij"),ln(this.db,this.fb,0),this):this},n.prototype.bind=n.prototype.bind,n.prototype.step=n.prototype.step,n.prototype.get=n.prototype.get,n.prototype.getColumnNames=n.prototype.Db,n.prototype.getAsObject=n.prototype.Ob,n.prototype.getSQL=n.prototype.lc,n.prototype.getNormalizedSQL=n.prototype.ic,n.prototype.run=n.prototype.Jb,n.prototype.reset=n.prototype.reset,n.prototype.freemem=n.prototype.Cb,n.prototype.free=n.prototype.cb,r.prototype.next=r.prototype.next,r.prototype.getRemainingSQL=r.prototype.jc,i.prototype.run=i.prototype.Jb,i.prototype.exec=i.prototype.exec,i.prototype.each=i.prototype.ec,i.prototype.prepare=i.prototype.Gb,i.prototype.iterateStatements=i.prototype.pc,i.prototype.export=i.prototype.fc,i.prototype.close=i.prototype.close,i.prototype.handleError=i.prototype.handleError,i.prototype.getRowsModified=i.prototype.kc,i.prototype.create_function=i.prototype.bc,i.prototype.create_aggregate=i.prototype.ac,i.prototype.updateHook=i.prototype.vc,s.Database=i};var ce="./this.program",pe=(Je=(Ze=globalThis.document)==null?void 0:Ze.currentScript)==null?void 0:Je.src;Xt&&(pe=self.location.href);var xt="",me,Pt;if(cn||Xt){try{xt=new URL(".",pe).href}catch{}Xt&&(Pt=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),me=async t=>{if(t=await fetch(t,{credentials:"same-origin"}),t.ok)return t.arrayBuffer();throw Error(t.status+" : "+t.url)}}var Bt=console.log.bind(console),V=console.error.bind(console),ft,wt=!1,Yt,O,S,Et,A,y,Gt,Wt,F;function be(){var t=Mt.buffer;O=new Int8Array(t),Et=new Int16Array(t),S=new Uint8Array(t),A=new Int32Array(t),y=new Uint32Array(t),Gt=new Float32Array(t),Wt=new Float64Array(t),F=new BigInt64Array(t),new BigUint64Array(t)}function ht(t){var e;throw(e=s.onAbort)==null||e.call(s,t),t="Aborted("+t+")",V(t),wt=!0,new WebAssembly.RuntimeError(t+". Build with -sASSERTIONS for more info.")}var Qt;async function pn(t){if(!ft)try{var e=await me(t);return new Uint8Array(e)}catch{}if(t==Qt&&ft)t=new Uint8Array(ft);else if(Pt)t=Pt(t);else throw"both async and sync fetching of the wasm failed";return t}async function mn(t,e){try{var n=await pn(t);return await WebAssembly.instantiate(n,e)}catch(r){V(`failed to asynchronously prepare wasm: ${r}`),ht(r)}}async function bn(t){var e=Qt;if(!ft)try{var n=fetch(e,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(n,t)}catch(r){V(`wasm streaming compile failed: ${r}`),V("falling back to ArrayBuffer instantiation")}return mn(e,t)}class Te{constructor(e){$(this,"name","ExitStatus");this.message=`Program terminated with exit(${e})`,this.status=e}}var _e=t=>{for(;0<t.length;)t.shift()(s)},we=[],Ne=[],Tn=()=>{var t=s.preRun.shift();Ne.push(t)},Z=0,dt=null;function W(t,e="i8"){switch(e.endsWith("*")&&(e="*"),e){case"i1":return O[t];case"i8":return O[t];case"i16":return Et[t>>1];case"i32":return A[t>>2];case"i64":return F[t>>3];case"float":return Gt[t>>2];case"double":return Wt[t>>3];case"*":return y[t>>2];default:ht(`invalid type for getValue: ${e}`)}}var Nt=!0;function ct(t){var e="i32";switch(e.endsWith("*")&&(e="*"),e){case"i1":O[t]=0;break;case"i8":O[t]=0;break;case"i16":Et[t>>1]=0;break;case"i32":A[t>>2]=0;break;case"i64":F[t>>3]=BigInt(0);break;case"float":Gt[t>>2]=0;break;case"double":Wt[t>>3]=0;break;case"*":y[t>>2]=0;break;default:ht(`invalid type for setValue: ${e}`)}}var ye=new TextDecoder,ve=(t,e,n,r)=>{if(n=e+n,r)return n;for(;t[e]&&!(e>=n);)++e;return e},R=(t,e,n)=>t?ye.decode(S.subarray(t,ve(S,t,e,n))):"",Le=(t,e)=>{for(var n=0,r=t.length-1;0<=r;r--){var i=t[r];i==="."?t.splice(r,1):i===".."?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n;n--)t.unshift("..");return t},Ht=t=>{var e=t.charAt(0)==="/",n=t.slice(-1)==="/";return(t=Le(t.split("/").filter(r=>!!r),!e).join("/"))||e||(t="."),t&&n&&(t+="/"),(e?"/":"")+t},ge=t=>{var e=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(t).slice(1);return t=e[0],e=e[1],!t&&!e?".":(e&&(e=e.slice(0,-1)),t+e)},yt=t=>t&&t.match(/([^\/]+|\/)\/*$/)[1],_n=()=>t=>crypto.getRandomValues(t),Ae=t=>{(Ae=_n())(t)},wn=(...t)=>{for(var e="",n=!1,r=t.length-1;-1<=r&&!n;r--){if(n=0<=r?t[r]:"/",typeof n!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!n)return"";e=n+"/"+e,n=n.charAt(0)==="/"}return e=Le(e.split("/").filter(i=>!!i),!n).join("/"),(n?"/":"")+e||"."},vt=t=>{var e=ve(t,0);return ye.decode(t.buffer?t.subarray(0,e):new Uint8Array(t.slice(0,e)))},jt=[],it=t=>{for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);127>=r?e++:2047>=r?e+=2:55296<=r&&57343>=r?(e+=4,++n):e+=3}return e},P=(t,e,n,r)=>{if(!(0<r))return 0;var i=n;r=n+r-1;for(var a=0;a<t.length;++a){var u=t.codePointAt(a);if(127>=u){if(n>=r)break;e[n++]=u}else if(2047>=u){if(n+1>=r)break;e[n++]=192|u>>6,e[n++]=128|u&63}else if(65535>=u){if(n+2>=r)break;e[n++]=224|u>>12,e[n++]=128|u>>6&63,e[n++]=128|u&63}else{if(n+3>=r)break;e[n++]=240|u>>18,e[n++]=128|u>>12&63,e[n++]=128|u>>6&63,e[n++]=128|u&63,a++}}return e[n]=0,n-i},Re=[];function Oe(t,e){Re[t]={input:[],output:[],kb:e},Jt(t,Nn)}var Nn={open(t){var e=Re[t.node.nb];if(!e)throw new f(43);t.Va=e,t.seekable=!1},close(t){t.Va.kb.lb(t.Va)},lb(t){t.Va.kb.lb(t.Va)},read(t,e,n,r){if(!t.Va||!t.Va.kb.Qb)throw new f(60);for(var i=0,a=0;a<r;a++){try{var u=t.Va.kb.Qb(t.Va)}catch{throw new f(29)}if(u===void 0&&i===0)throw new f(6);if(u==null)break;i++,e[n+a]=u}return i&&(t.node.$a=Date.now()),i},write(t,e,n,r){if(!t.Va||!t.Va.kb.Hb)throw new f(60);try{for(var i=0;i<r;i++)t.Va.kb.Hb(t.Va,e[n+i])}catch{throw new f(29)}return r&&(t.node.Ua=t.node.Ta=Date.now()),i}},yn={Qb(){var n;t:{if(!jt.length){var t=null;if((n=globalThis.window)!=null&&n.prompt&&(t=window.prompt("Input: "),t!==null&&(t+=`
`)),!t){var e=null;break t}e=Array(it(t)+1),t=P(t,e,0,e.length),e.length=t,jt=e}e=jt.shift()}return e},Hb(t,e){e===null||e===10?(Bt(vt(t.output)),t.output=[]):e!=0&&t.output.push(e)},lb(t){var e;0<((e=t.output)==null?void 0:e.length)&&(Bt(vt(t.output)),t.output=[])},Dc(){return{yc:25856,Ac:5,xc:191,zc:35387,wc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Ec(){return 0},Fc(){return[24,80]}},vn={Hb(t,e){e===null||e===10?(V(vt(t.output)),t.output=[]):e!=0&&t.output.push(e)},lb(t){var e;0<((e=t.output)==null?void 0:e.length)&&(V(vt(t.output)),t.output=[])}},c={Za:null,ab(){return c.createNode(null,"/",16895,0)},createNode(t,e,n,r){if((n&61440)===24576||(n&61440)===4096)throw new f(63);return c.Za||(c.Za={dir:{node:{Wa:c.La.Wa,Xa:c.La.Xa,mb:c.La.mb,rb:c.La.rb,Tb:c.La.Tb,xb:c.La.xb,vb:c.La.vb,Ib:c.La.Ib,wb:c.La.wb},stream:{Ya:c.Ma.Ya}},file:{node:{Wa:c.La.Wa,Xa:c.La.Xa},stream:{Ya:c.Ma.Ya,read:c.Ma.read,write:c.Ma.write,sb:c.Ma.sb,tb:c.Ma.tb}},link:{node:{Wa:c.La.Wa,Xa:c.La.Xa,eb:c.La.eb},stream:{}},Nb:{node:{Wa:c.La.Wa,Xa:c.La.Xa},stream:On}}),n=ke(t,e,n,r),D(n.mode)?(n.La=c.Za.dir.node,n.Ma=c.Za.dir.stream,n.Na={}):(n.mode&61440)===32768?(n.La=c.Za.file.node,n.Ma=c.Za.file.stream,n.Ra=0,n.Na=null):(n.mode&61440)===40960?(n.La=c.Za.link.node,n.Ma=c.Za.link.stream):(n.mode&61440)===8192&&(n.La=c.Za.Nb.node,n.Ma=c.Za.Nb.stream),n.$a=n.Ua=n.Ta=Date.now(),t&&(t.Na[e]=n,t.$a=t.Ua=t.Ta=n.$a),n},Cc(t){return t.Na?t.Na.subarray?t.Na.subarray(0,t.Ra):new Uint8Array(t.Na):new Uint8Array(0)},La:{Wa(t){var e={};return e.cc=(t.mode&61440)===8192?t.id:1,e.oc=t.id,e.mode=t.mode,e.rc=1,e.uid=0,e.nc=0,e.nb=t.nb,D(t.mode)?e.size=4096:(t.mode&61440)===32768?e.size=t.Ra:(t.mode&61440)===40960?e.size=t.link.length:e.size=0,e.$a=new Date(t.$a),e.Ua=new Date(t.Ua),e.Ta=new Date(t.Ta),e.Zb=4096,e.$b=Math.ceil(e.size/e.Zb),e},Xa(t,e){for(var n of["mode","atime","mtime","ctime"])e[n]!=null&&(t[n]=e[n]);e.size!==void 0&&(e=e.size,t.Ra!=e&&(e==0?(t.Na=null,t.Ra=0):(n=t.Na,t.Na=new Uint8Array(e),n&&t.Na.set(n.subarray(0,Math.min(e,t.Ra))),t.Ra=e)))},mb(){throw c.zb||(c.zb=new f(44),c.zb.stack="<generic error, no stack>"),c.zb},rb(t,e,n,r){return c.createNode(t,e,n,r)},Tb(t,e,n){try{var r=J(e,n)}catch{}if(r){if(D(t.mode))for(var i in r.Na)throw new f(55);Vt(r)}delete t.parent.Na[t.name],e.Na[n]=t,t.name=n,e.Ta=e.Ua=t.parent.Ta=t.parent.Ua=Date.now()},xb(t,e){delete t.Na[e],t.Ta=t.Ua=Date.now()},vb(t,e){var n=J(t,e),r;for(r in n.Na)throw new f(55);delete t.Na[e],t.Ta=t.Ua=Date.now()},Ib(t){return[".","..",...Object.keys(t.Na)]},wb(t,e,n){return t=c.createNode(t,e,41471,0),t.link=n,t},eb(t){if((t.mode&61440)!==40960)throw new f(28);return t.link}},Ma:{read(t,e,n,r,i){var a=t.node.Na;if(i>=t.node.Ra)return 0;if(t=Math.min(t.node.Ra-i,r),8<t&&a.subarray)e.set(a.subarray(i,i+t),n);else for(r=0;r<t;r++)e[n+r]=a[i+r];return t},write(t,e,n,r,i,a){if(e.buffer===O.buffer&&(a=!1),!r)return 0;if(t=t.node,t.Ua=t.Ta=Date.now(),e.subarray&&(!t.Na||t.Na.subarray)){if(a)return t.Na=e.subarray(n,n+r),t.Ra=r;if(t.Ra===0&&i===0)return t.Na=e.slice(n,n+r),t.Ra=r;if(i+r<=t.Ra)return t.Na.set(e.subarray(n,n+r),i),r}a=i+r;var u=t.Na?t.Na.length:0;if(u>=a||(a=Math.max(a,u*(1048576>u?2:1.125)>>>0),u!=0&&(a=Math.max(a,256)),u=t.Na,t.Na=new Uint8Array(a),0<t.Ra&&t.Na.set(u.subarray(0,t.Ra),0)),t.Na.subarray&&e.subarray)t.Na.set(e.subarray(n,n+r),i);else for(a=0;a<r;a++)t.Na[i+a]=e[n+a];return t.Ra=Math.max(t.Ra,i+r),r},Ya(t,e,n){if(n===1?e+=t.position:n===2&&(t.node.mode&61440)===32768&&(e+=t.node.Ra),0>e)throw new f(28);return e},sb(t,e,n,r,i){if((t.node.mode&61440)!==32768)throw new f(43);if(t=t.node.Na,i&2||!t||t.buffer!==O.buffer){i=!0,r=65536*Math.ceil(e/65536);var a=Ke(65536,r);if(a&&S.fill(0,a,a+r),r=a,!r)throw new f(48);t&&((0<n||n+e<t.length)&&(t.subarray?t=t.subarray(n,n+e):t=Array.prototype.slice.call(t,n,n+e)),O.set(t,r))}else i=!1,r=t.byteOffset;return{tc:r,Ub:i}},tb(t,e,n,r){return c.Ma.write(t,e,0,r,n,!1),0}}},Ie=(t,e)=>{var n=0;return t&&(n|=365),e&&(n|=146),n},zt=null,Se={},ot=[],Ln=1,Q=null,Ue=!1,De=!0,f=class{constructor(t){$(this,"name","ErrnoError");this.Pa=t}},gn=class{constructor(){$(this,"qb",{});$(this,"node",null)}get flags(){return this.qb.flags}set flags(t){this.qb.flags=t}get position(){return this.qb.position}set position(t){this.qb.position=t}},An=class{constructor(t,e,n,r){$(this,"La",{});$(this,"Ma",{});$(this,"ib",null);t||(t=this),this.parent=t,this.ab=t.ab,this.id=Ln++,this.name=e,this.mode=n,this.nb=r,this.$a=this.Ua=this.Ta=Date.now()}get read(){return(this.mode&365)===365}set read(t){t?this.mode|=365:this.mode&=-366}get write(){return(this.mode&146)===146}set write(t){t?this.mode|=146:this.mode&=-147}};function M(t,e={}){if(!t)throw new f(44);e.Bb??(e.Bb=!0),t.charAt(0)==="/"||(t="//"+t);var n=0;t:for(;40>n;n++){t=t.split("/").filter(d=>!!d);for(var r=zt,i="/",a=0;a<t.length;a++){var u=a===t.length-1;if(u&&e.parent)break;if(t[a]!==".")if(t[a]==="..")if(i=ge(i),r===r.parent){t=i+"/"+t.slice(a+1).join("/"),n--;continue t}else r=r.parent;else{i=Ht(i+"/"+t[a]);try{r=J(r,t[a])}catch(d){if((d==null?void 0:d.Pa)===44&&u&&e.sc)return{path:i};throw d}if(!r.ib||u&&!e.Bb||(r=r.ib.root),(r.mode&61440)===40960&&(!u||e.hb)){if(!r.La.eb)throw new f(52);r=r.La.eb(r),r.charAt(0)==="/"||(r=ge(i)+"/"+r),t=r+"/"+t.slice(a+1).join("/");continue t}}}return{path:i,node:r}}throw new f(32)}function $t(t){for(var e;;){if(t===t.parent)return t=t.ab.Sb,e?t[t.length-1]!=="/"?`${t}/${e}`:t+e:t;e=e?`${t.name}/${e}`:t.name,t=t.parent}}function Kt(t,e){for(var n=0,r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r)|0;return(t+n>>>0)%Q.length}function Vt(t){var e=Kt(t.parent.id,t.name);if(Q[e]===t)Q[e]=t.jb;else for(e=Q[e];e;){if(e.jb===t){e.jb=t.jb;break}e=e.jb}}function J(t,e){var n=D(t.mode)?(n=at(t,"x"))?n:t.La.mb?0:2:54;if(n)throw new f(n);for(n=Q[Kt(t.id,e)];n;n=n.jb){var r=n.name;if(n.parent.id===t.id&&r===e)return n}return t.La.mb(t,e)}function ke(t,e,n,r){return t=new An(t,e,n,r),e=Kt(t.parent.id,t.name),t.jb=Q[e],Q[e]=t}function D(t){return(t&61440)===16384}function at(t,e){return De?0:e.includes("r")&&!(t.mode&292)||e.includes("w")&&!(t.mode&146)||e.includes("x")&&!(t.mode&73)?2:0}function Ce(t,e){if(!D(t.mode))return 54;try{return J(t,e),20}catch{}return at(t,"wx")}function Me(t,e,n){try{var r=J(t,e)}catch(i){return i.Pa}if(t=at(t,"wx"))return t;if(n){if(!D(r.mode))return 54;if(r===r.parent||$t(r)==="/")return 10}else if(D(r.mode))return 31;return 0}function Lt(t){if(!t)throw new f(63);return t}function U(t){if(t=ot[t],!t)throw new f(8);return t}function qe(t,e=-1){if(t=Object.assign(new gn,t),e==-1)t:{for(e=0;4096>=e;e++)if(!ot[e])break t;throw new f(33)}return t.bb=e,ot[e]=t}function Rn(t,e=-1){var n,r;return t=qe(t,e),(r=(n=t.Ma)==null?void 0:n.Bc)==null||r.call(n,t),t}function Zt(t,e,n){var r=t==null?void 0:t.Ma.Xa;t=r?t:e,r??(r=e.La.Xa),Lt(r),r(t,n)}var On={open(t){var e,n;t.Ma=Se[t.node.nb].Ma,(n=(e=t.Ma).open)==null||n.call(e,t)},Ya(){throw new f(70)}};function Jt(t,e){Se[t]={Ma:e}}function Fe(t,e){var n=e==="/";if(n&&zt)throw new f(10);if(!n&&e){var r=M(e,{Bb:!1});if(e=r.path,r=r.node,r.ib)throw new f(10);if(!D(r.mode))throw new f(54)}e={type:t,Gc:{},Sb:e,qc:[]},t=t.ab(e),t.ab=e,e.root=t,n?zt=t:r&&(r.ib=e,r.ab&&r.ab.qc.push(e))}function gt(t,e,n){var r=M(t,{parent:!0}).node;if(t=yt(t),!t)throw new f(28);if(t==="."||t==="..")throw new f(20);var i=Ce(r,t);if(i)throw new f(i);if(!r.La.rb)throw new f(63);return r.La.rb(r,t,e,n)}function In(t,e=438){return gt(t,e&4095|32768,0)}function B(t,e=511){return gt(t,e&1023|16384,0)}function At(t,e,n){typeof n>"u"&&(n=e,e=438),gt(t,e|8192,n)}function te(t,e){if(!wn(t))throw new f(44);var n=M(e,{parent:!0}).node;if(!n)throw new f(44);e=yt(e);var r=Ce(n,e);if(r)throw new f(r);if(!n.La.wb)throw new f(63);n.La.wb(n,e,t)}function Xe(t){var e=M(t,{parent:!0}).node;t=yt(t);var n=J(e,t),r=Me(e,t,!0);if(r)throw new f(r);if(!e.La.vb)throw new f(63);if(n.ib)throw new f(10);e.La.vb(e,t),Vt(n)}function xe(t){var e=M(t,{parent:!0}).node;if(!e)throw new f(44);t=yt(t);var n=J(e,t),r=Me(e,t,!1);if(r)throw new f(r);if(!e.La.xb)throw new f(63);if(n.ib)throw new f(10);e.La.xb(e,t),Vt(n)}function pt(t,e){return t=M(t,{hb:!e}).node,Lt(t.La.Wa)(t)}function Pe(t,e,n,r){Zt(t,e,{mode:n&4095|e.mode&-4096,Ta:Date.now(),dc:r})}function Rt(t,e){t=typeof t=="string"?M(t,{hb:!0}).node:t,Pe(null,t,e)}function Be(t,e,n){if(D(e.mode))throw new f(31);if((e.mode&61440)!==32768)throw new f(28);var r=at(e,"w");if(r)throw new f(r);Zt(t,e,{size:n,timestamp:Date.now()})}function st(t,e,n=438){if(t==="")throw new f(44);if(typeof e=="string"){var r={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[e];if(typeof r>"u")throw Error(`Unknown file open mode: ${e}`);e=r}if(n=e&64?n&4095|32768:0,typeof t=="object")r=t;else{var i=t.endsWith("/"),a=M(t,{hb:!(e&131072),sc:!0});r=a.node,t=a.path}if(a=!1,e&64)if(r){if(e&128)throw new f(20)}else{if(i)throw new f(31);r=gt(t,n|511,0),a=!0}if(!r)throw new f(44);if((r.mode&61440)===8192&&(e&=-513),e&65536&&!D(r.mode))throw new f(54);if(!a&&(r?(r.mode&61440)===40960?i=32:(i=["r","w","rw"][e&3],e&512&&(i+="w"),i=D(r.mode)&&(i!=="r"||e&576)?31:at(r,i)):i=44,i))throw new f(i);return e&512&&!a&&(i=r,i=typeof i=="string"?M(i,{hb:!0}).node:i,Be(null,i,0)),e=qe({node:r,path:$t(r),flags:e&-131713,seekable:!0,position:0,Ma:r.Ma,uc:[],error:!1}),e.Ma.open&&e.Ma.open(e),a&&Rt(r,n&511),e}function ee(t){if(t.bb===null)throw new f(8);t.Eb&&(t.Eb=null);try{t.Ma.close&&t.Ma.close(t)}catch(e){throw e}finally{ot[t.bb]=null}t.bb=null}function Ye(t,e,n){if(t.bb===null)throw new f(8);if(!t.seekable||!t.Ma.Ya)throw new f(70);if(n!=0&&n!=1&&n!=2)throw new f(28);t.position=t.Ma.Ya(t,e,n),t.uc=[]}function Ge(t,e,n,r,i){if(0>r||0>i)throw new f(28);if(t.bb===null)throw new f(8);if((t.flags&2097155)===1)throw new f(8);if(D(t.node.mode))throw new f(31);if(!t.Ma.read)throw new f(28);var a=typeof i<"u";if(!a)i=t.position;else if(!t.seekable)throw new f(70);return e=t.Ma.read(t,e,n,r,i),a||(t.position+=e),e}function We(t,e,n,r,i){if(0>r||0>i)throw new f(28);if(t.bb===null)throw new f(8);if((t.flags&2097155)===0)throw new f(8);if(D(t.node.mode))throw new f(31);if(!t.Ma.write)throw new f(28);t.seekable&&t.flags&1024&&Ye(t,0,2);var a=typeof i<"u";if(!a)i=t.position;else if(!t.seekable)throw new f(70);return e=t.Ma.write(t,e,n,r,i,void 0),a||(t.position+=e),e}function Sn(t){var e=e||0;e=st(t,e),t=pt(t).size;var n=new Uint8Array(t);return Ge(e,n,0,t,0),ee(e),n}function H(t,e,n){t=Ht("/dev/"+t);var r=Ie(!!e,!!n);H.Rb??(H.Rb=64);var i=H.Rb++<<8|0;Jt(i,{open(a){a.seekable=!1},close(){var a;(a=n==null?void 0:n.buffer)!=null&&a.length&&n(10)},read(a,u,d,N){for(var p=0,L=0;L<N;L++){try{var I=e()}catch{throw new f(29)}if(I===void 0&&p===0)throw new f(6);if(I==null)break;p++,u[d+L]=I}return p&&(a.node.$a=Date.now()),p},write(a,u,d,N){for(var p=0;p<N;p++)try{n(u[d+p])}catch{throw new f(29)}return N&&(a.node.Ua=a.node.Ta=Date.now()),p}}),At(t,r,i)}var v={};function tt(t,e,n){if(e.charAt(0)==="/")return e;if(t=t===-100?"/":U(t).path,e.length==0){if(!n)throw new f(44);return t}return t+"/"+e}function Ot(t,e){y[t>>2]=e.cc,y[t+4>>2]=e.mode,y[t+8>>2]=e.rc,y[t+12>>2]=e.uid,y[t+16>>2]=e.nc,y[t+20>>2]=e.nb,F[t+24>>3]=BigInt(e.size),A[t+32>>2]=4096,A[t+36>>2]=e.$b;var n=e.$a.getTime(),r=e.Ua.getTime(),i=e.Ta.getTime();return F[t+40>>3]=BigInt(Math.floor(n/1e3)),y[t+48>>2]=n%1e3*1e6,F[t+56>>3]=BigInt(Math.floor(r/1e3)),y[t+64>>2]=r%1e3*1e6,F[t+72>>3]=BigInt(Math.floor(i/1e3)),y[t+80>>2]=i%1e3*1e6,F[t+88>>3]=BigInt(e.oc),0}var It=void 0,St=()=>{var t=A[+It>>2];return It+=4,t},ne=0,Un=[0,31,60,91,121,152,182,213,244,274,305,335],Dn=[0,31,59,90,120,151,181,212,243,273,304,334],mt={},Qe=t=>{if(!(t instanceof Te||t=="unwind"))throw t},He=t=>{var e;throw Yt=t,Nt||0<ne||((e=s.onExit)==null||e.call(s,t),wt=!0),new Te(t)},kn=t=>{if(!wt)try{t()}catch(e){Qe(e)}finally{if(!(Nt||0<ne))try{Yt=t=Yt,He(t)}catch(e){Qe(e)}}},re={},je=()=>{var r;if(!ie){var t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((r=globalThis.navigator)==null?void 0:r.language)??"C").replace("-","_")+".UTF-8",_:ce||"./this.program"},e;for(e in re)re[e]===void 0?delete t[e]:t[e]=re[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);ie=n}return ie},ie,Cn=(t,e,n,r)=>{var i={string:p=>{var L=0;if(p!=null&&p!==0){L=it(p)+1;var I=nt(L);P(p,S,I,L),L=I}return L},array:p=>{var L=nt(p.length);return O.set(p,L),L}};t=s["_"+t];var a=[],u=0;if(r)for(var d=0;d<r.length;d++){var N=i[n[d]];N?(u===0&&(u=Ct()),a[d]=N(r[d])):a[d]=r[d]}return n=t(...a),n=(function(p){return u!==0&&kt(u),e==="string"?R(p):e==="boolean"?!!p:p})(n)},Ut=t=>{var e=it(t)+1,n=Dt(e);return n&&P(t,S,n,e),n},et,oe=[],j=t=>{et.delete(z.get(t)),z.set(t,null),oe.push(t)},ze=t=>{const e=t.length;return[e%128|128,e>>7,...t]},Mn={i:127,p:127,j:126,f:125,d:124,e:111},$e=t=>ze(Array.from(t,e=>Mn[e])),bt=(t,e)=>{if(!et){et=new WeakMap;var n=z.length;if(et)for(var r=0;r<0+n;r++){var i=z.get(r);i&&et.set(i,r)}}if(n=et.get(t)||0)return n;n=oe.length?oe.pop():z.grow(1);try{z.set(n,t)}catch(a){if(!(a instanceof TypeError))throw a;e=Uint8Array.of(0,97,115,109,1,0,0,0,1,...ze([1,96,...$e(e.slice(1)),...$e(e[0]==="v"?"":e[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),e=new WebAssembly.Module(e),e=new WebAssembly.Instance(e,{e:{f:t}}).exports.f,z.set(n,e)}return et.set(t,n),n};if(Q=Array(4096),Fe(c,"/"),B("/tmp"),B("/home"),B("/home/web_user"),(function(){B("/dev"),Jt(259,{read:()=>0,write:(r,i,a,u)=>u,Ya:()=>0}),At("/dev/null",259),Oe(1280,yn),Oe(1536,vn),At("/dev/tty",1280),At("/dev/tty1",1536);var t=new Uint8Array(1024),e=0,n=()=>(e===0&&(Ae(t),e=t.byteLength),t[--e]);H("random",n),H("urandom",n),B("/dev/shm"),B("/dev/shm/tmp")})(),(function(){B("/proc");var t=B("/proc/self");B("/proc/self/fd"),Fe({ab(){var e=ke(t,"fd",16895,73);return e.Ma={Ya:c.Ma.Ya},e.La={mb(n,r){n=+r;var i=U(n);return n={parent:null,ab:{Sb:"fake"},La:{eb:()=>i.path},id:n+1},n.parent=n},Ib(){return Array.from(ot.entries()).filter(([,n])=>n).map(([n])=>n.toString())}},e}},"/proc/self/fd")})(),s.noExitRuntime&&(Nt=s.noExitRuntime),s.print&&(Bt=s.print),s.printErr&&(V=s.printErr),s.wasmBinary&&(ft=s.wasmBinary),s.thisProgram&&(ce=s.thisProgram),s.preInit)for(typeof s.preInit=="function"&&(s.preInit=[s.preInit]);0<s.preInit.length;)s.preInit.shift()();s.stackSave=()=>Ct(),s.stackRestore=t=>kt(t),s.stackAlloc=t=>nt(t),s.cwrap=(t,e,n,r)=>{var i=!n||n.every(a=>a==="number"||a==="boolean");return e!=="string"&&i&&!r?s["_"+t]:(...a)=>Cn(t,e,n,a)},s.addFunction=bt,s.removeFunction=j,s.UTF8ToString=R,s.stringToNewUTF8=Ut,s.writeArrayToMemory=(t,e)=>{O.set(t,e)};var Dt,Tt,Ke,Ve,kt,nt,Ct,Mt,z,qn={a:(t,e,n,r)=>ht(`Assertion failed: ${R(t)}, at: `+[e?R(e):"unknown filename",n,r?R(r):"unknown function"]),i:function(t,e){try{return t=R(t),Rt(t,e),0}catch(n){if(typeof v>"u"||n.name!=="ErrnoError")throw n;return-n.Pa}},L:function(t,e,n){try{if(e=R(e),e=tt(t,e),n&-8)return-28;var r=M(e,{hb:!0}).node;return r?(t="",n&4&&(t+="r"),n&2&&(t+="w"),n&1&&(t+="x"),t&&at(r,t)?-2:0):-44}catch(i){if(typeof v>"u"||i.name!=="ErrnoError")throw i;return-i.Pa}},j:function(t,e){try{var n=U(t);return Pe(n,n.node,e,!1),0}catch(r){if(typeof v>"u"||r.name!=="ErrnoError")throw r;return-r.Pa}},h:function(t){try{var e=U(t);return Zt(e,e.node,{timestamp:Date.now(),dc:!1}),0}catch(n){if(typeof v>"u"||n.name!=="ErrnoError")throw n;return-n.Pa}},b:function(t,e,n){It=n;try{var r=U(t);switch(e){case 0:var i=St();if(0>i)break;for(;ot[i];)i++;return Rn(r,i).bb;case 1:case 2:return 0;case 3:return r.flags;case 4:return i=St(),r.flags|=i,0;case 12:return i=St(),Et[i+0>>1]=2,0;case 13:case 14:return 0}return-28}catch(a){if(typeof v>"u"||a.name!=="ErrnoError")throw a;return-a.Pa}},g:function(t,e){try{var n=U(t),r=n.node,i=n.Ma.Wa;t=i?n:r,i??(i=r.La.Wa),Lt(i);var a=i(t);return Ot(e,a)}catch(u){if(typeof v>"u"||u.name!=="ErrnoError")throw u;return-u.Pa}},H:function(t,e){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e);try{if(isNaN(e))return-61;var n=U(t);if(0>e||(n.flags&2097155)===0)throw new f(28);return Be(n,n.node,e),0}catch(r){if(typeof v>"u"||r.name!=="ErrnoError")throw r;return-r.Pa}},G:function(t,e){try{if(e===0)return-28;var n=it("/")+1;return e<n?-68:(P("/",S,t,e),n)}catch(r){if(typeof v>"u"||r.name!=="ErrnoError")throw r;return-r.Pa}},K:function(t,e){try{return t=R(t),Ot(e,pt(t,!0))}catch(n){if(typeof v>"u"||n.name!=="ErrnoError")throw n;return-n.Pa}},C:function(t,e,n){try{return e=R(e),e=tt(t,e),B(e,n),0}catch(r){if(typeof v>"u"||r.name!=="ErrnoError")throw r;return-r.Pa}},J:function(t,e,n,r){try{e=R(e);var i=r&256;return e=tt(t,e,r&4096),Ot(n,i?pt(e,!0):pt(e))}catch(a){if(typeof v>"u"||a.name!=="ErrnoError")throw a;return-a.Pa}},x:function(t,e,n,r){It=r;try{e=R(e),e=tt(t,e);var i=r?St():0;return st(e,n,i).bb}catch(a){if(typeof v>"u"||a.name!=="ErrnoError")throw a;return-a.Pa}},v:function(t,e,n,r){try{if(e=R(e),e=tt(t,e),0>=r)return-28;var i=M(e).node;if(!i)throw new f(44);if(!i.La.eb)throw new f(28);var a=i.La.eb(i),u=Math.min(r,it(a)),d=O[n+u];return P(a,S,n,r+1),O[n+u]=d,u}catch(N){if(typeof v>"u"||N.name!=="ErrnoError")throw N;return-N.Pa}},u:function(t){try{return t=R(t),Xe(t),0}catch(e){if(typeof v>"u"||e.name!=="ErrnoError")throw e;return-e.Pa}},f:function(t,e){try{return t=R(t),Ot(e,pt(t))}catch(n){if(typeof v>"u"||n.name!=="ErrnoError")throw n;return-n.Pa}},r:function(t,e,n){try{if(e=R(e),e=tt(t,e),n)if(n===512)Xe(e);else return-28;else xe(e);return 0}catch(r){if(typeof v>"u"||r.name!=="ErrnoError")throw r;return-r.Pa}},q:function(t,e,n){try{e=R(e),e=tt(t,e,!0);var r=Date.now(),i,a;if(n){var u=y[n>>2]+4294967296*A[n+4>>2],d=A[n+8>>2];d==1073741823?i=r:d==1073741822?i=null:i=1e3*u+d/1e6,n+=16,u=y[n>>2]+4294967296*A[n+4>>2],d=A[n+8>>2],d==1073741823?a=r:d==1073741822?a=null:a=1e3*u+d/1e6}else a=i=r;if((a??i)!==null){t=i;var N=M(e,{hb:!0}).node;Lt(N.La.Xa)(N,{$a:t,Ua:a})}return 0}catch(p){if(typeof v>"u"||p.name!=="ErrnoError")throw p;return-p.Pa}},m:()=>ht(""),l:()=>{Nt=!1,ne=0},A:function(t,e){t=-9007199254740992>t||9007199254740992<t?NaN:Number(t),t=new Date(1e3*t),A[e>>2]=t.getSeconds(),A[e+4>>2]=t.getMinutes(),A[e+8>>2]=t.getHours(),A[e+12>>2]=t.getDate(),A[e+16>>2]=t.getMonth(),A[e+20>>2]=t.getFullYear()-1900,A[e+24>>2]=t.getDay();var n=t.getFullYear();A[e+28>>2]=(n%4!==0||n%100===0&&n%400!==0?Dn:Un)[t.getMonth()]+t.getDate()-1|0,A[e+36>>2]=-(60*t.getTimezoneOffset()),n=new Date(t.getFullYear(),6,1).getTimezoneOffset();var r=new Date(t.getFullYear(),0,1).getTimezoneOffset();A[e+32>>2]=(n!=r&&t.getTimezoneOffset()==Math.min(r,n))|0},y:function(t,e,n,r,i,a,u){i=-9007199254740992>i||9007199254740992<i?NaN:Number(i);try{var d=U(r);if((e&2)!==0&&(n&2)===0&&(d.flags&2097155)!==2)throw new f(2);if((d.flags&2097155)===1)throw new f(2);if(!d.Ma.sb)throw new f(43);if(!t)throw new f(28);var N=d.Ma.sb(d,t,i,e,n),p=N.tc;return A[a>>2]=N.Ub,y[u>>2]=p,0}catch(L){if(typeof v>"u"||L.name!=="ErrnoError")throw L;return-L.Pa}},z:function(t,e,n,r,i,a){a=-9007199254740992>a||9007199254740992<a?NaN:Number(a);try{var u=U(i);if(n&2){if((u.node.mode&61440)!==32768)throw new f(43);r&2||u.Ma.tb&&u.Ma.tb(u,S.slice(t,t+e),a,e,r)}}catch(d){if(typeof v>"u"||d.name!=="ErrnoError")throw d;return-d.Pa}},n:(t,e)=>{if(mt[t]&&(clearTimeout(mt[t].id),delete mt[t]),!e)return 0;var n=setTimeout(()=>{delete mt[t],kn(()=>Ve(t,performance.now()))},e);return mt[t]={id:n,Hc:e},0},B:(t,e,n,r)=>{var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset(),y[t>>2]=60*Math.max(a,i),A[e>>2]=+(a!=i),e=u=>{var d=Math.abs(u);return`UTC${0<=u?"-":"+"}${String(Math.floor(d/60)).padStart(2,"0")}${String(d%60).padStart(2,"0")}`},t=e(a),e=e(i),i<a?(P(t,S,n,17),P(e,S,r,17)):(P(t,S,r,17),P(e,S,n,17))},d:()=>Date.now(),s:()=>2147483648,c:()=>performance.now(),o:t=>{var e=S.length;if(t>>>=0,2147483648<t)return!1;for(var n=1;4>=n;n*=2){var r=e*(1+.2/n);r=Math.min(r,t+100663296);t:{r=(Math.min(2147483648,65536*Math.ceil(Math.max(t,r)/65536))-Mt.buffer.byteLength+65535)/65536|0;try{Mt.grow(r),be();var i=1;break t}catch{}i=void 0}if(i)return!0}return!1},E:(t,e)=>{var n=0,r=0,i;for(i of je()){var a=e+n;y[t+r>>2]=a,n+=P(i,S,a,1/0)+1,r+=4}return 0},F:(t,e)=>{var n=je();y[t>>2]=n.length,t=0;for(var r of n)t+=it(r)+1;return y[e>>2]=t,0},e:function(t){try{var e=U(t);return ee(e),0}catch(n){if(typeof v>"u"||n.name!=="ErrnoError")throw n;return n.Pa}},p:function(t,e){try{var n=U(t);return O[e]=n.Va?2:D(n.mode)?3:(n.mode&61440)===40960?7:4,Et[e+2>>1]=0,F[e+8>>3]=BigInt(0),F[e+16>>3]=BigInt(0),0}catch(r){if(typeof v>"u"||r.name!=="ErrnoError")throw r;return r.Pa}},w:function(t,e,n,r){try{t:{var i=U(t);t=e;for(var a,u=e=0;u<n;u++){var d=y[t>>2],N=y[t+4>>2];t+=8;var p=Ge(i,O,d,N,a);if(0>p){var L=-1;break t}if(e+=p,p<N)break;typeof a<"u"&&(a+=p)}L=e}return y[r>>2]=L,0}catch(I){if(typeof v>"u"||I.name!=="ErrnoError")throw I;return I.Pa}},D:function(t,e,n,r){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e);try{if(isNaN(e))return 61;var i=U(t);return Ye(i,e,n),F[r>>3]=BigInt(i.position),i.Eb&&e===0&&n===0&&(i.Eb=null),0}catch(a){if(typeof v>"u"||a.name!=="ErrnoError")throw a;return a.Pa}},I:function(t){var n,r;try{var e=U(t);return(r=(n=e.Ma)==null?void 0:n.lb)==null?void 0:r.call(n,e)}catch(i){if(typeof v>"u"||i.name!=="ErrnoError")throw i;return i.Pa}},t:function(t,e,n,r){try{t:{var i=U(t);t=e;for(var a,u=e=0;u<n;u++){var d=y[t>>2],N=y[t+4>>2];t+=8;var p=We(i,O,d,N,a);if(0>p){var L=-1;break t}if(e+=p,p<N)break;typeof a<"u"&&(a+=p)}L=e}return y[r>>2]=L,0}catch(I){if(typeof v>"u"||I.name!=="ErrnoError")throw I;return I.Pa}},k:He};function ae(){function t(){var i;if(s.calledRun=!0,!wt){if(!s.noFSInit&&!Ue){var e,n;Ue=!0,e??(e=s.stdin),n??(n=s.stdout),r??(r=s.stderr),e?H("stdin",e):te("/dev/tty","/dev/stdin"),n?H("stdout",null,n):te("/dev/tty","/dev/stdout"),r?H("stderr",null,r):te("/dev/tty1","/dev/stderr"),st("/dev/stdin",0),st("/dev/stdout",1),st("/dev/stderr",1)}if(se.N(),De=!1,(i=s.onRuntimeInitialized)==null||i.call(s),s.postRun)for(typeof s.postRun=="function"&&(s.postRun=[s.postRun]);s.postRun.length;){var r=s.postRun.shift();we.push(r)}_e(we)}}if(0<Z)dt=ae;else{if(s.preRun)for(typeof s.preRun=="function"&&(s.preRun=[s.preRun]);s.preRun.length;)Tn();_e(Ne),0<Z?dt=ae:s.setStatus?(s.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>s.setStatus(""),1),t()},1)):t()}}var se;return(async function(){var n;function t(r){var i;return r=se=r.exports,s._sqlite3_free=r.P,s._sqlite3_value_text=r.Q,s._sqlite3_prepare_v2=r.R,s._sqlite3_step=r.S,s._sqlite3_reset=r.T,s._sqlite3_exec=r.U,s._sqlite3_finalize=r.V,s._sqlite3_column_name=r.W,s._sqlite3_column_text=r.X,s._sqlite3_column_type=r.Y,s._sqlite3_errmsg=r.Z,s._sqlite3_clear_bindings=r._,s._sqlite3_value_blob=r.$,s._sqlite3_value_bytes=r.aa,s._sqlite3_value_double=r.ba,s._sqlite3_value_int=r.ca,s._sqlite3_value_type=r.da,s._sqlite3_result_blob=r.ea,s._sqlite3_result_double=r.fa,s._sqlite3_result_error=r.ga,s._sqlite3_result_int=r.ha,s._sqlite3_result_int64=r.ia,s._sqlite3_result_null=r.ja,s._sqlite3_result_text=r.ka,s._sqlite3_aggregate_context=r.la,s._sqlite3_column_count=r.ma,s._sqlite3_data_count=r.na,s._sqlite3_column_blob=r.oa,s._sqlite3_column_bytes=r.pa,s._sqlite3_column_double=r.qa,s._sqlite3_bind_blob=r.ra,s._sqlite3_bind_double=r.sa,s._sqlite3_bind_int=r.ta,s._sqlite3_bind_text=r.ua,s._sqlite3_bind_parameter_index=r.va,s._sqlite3_sql=r.wa,s._sqlite3_normalized_sql=r.xa,s._sqlite3_changes=r.ya,s._sqlite3_close_v2=r.za,s._sqlite3_create_function_v2=r.Aa,s._sqlite3_update_hook=r.Ba,s._sqlite3_open=r.Ca,Dt=s._malloc=r.Da,Tt=s._free=r.Ea,s._RegisterExtensionFunctions=r.Fa,Ke=r.Ga,Ve=r.Ha,kt=r.Ia,nt=r.Ja,Ct=r.Ka,Mt=r.M,z=r.O,be(),Z--,(i=s.monitorRunDependencies)==null||i.call(s,Z),Z==0&&dt&&(r=dt,dt=null,r()),se}Z++,(n=s.monitorRunDependencies)==null||n.call(s,Z);var e={a:qn};return s.instantiateWasm?new Promise(r=>{s.instantiateWasm(e,(i,a)=>{r(t(i))})}):(Qt??(Qt=s.locateFile?s.locateFile("sql-wasm-browser.wasm",xt):xt+"sql-wasm-browser.wasm"),t((await bn(e)).instance))})(),ae(),G}),T)};m.exports=g,m.exports.default=g})(le)),le.exports}var cr=dr();const pr=hr(cr),mr=`-- 分类：一个任务/计划只属于一个分类（如「工作」「健身」「副业」）
CREATE TABLE IF NOT EXISTS categories (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT NOT NULL UNIQUE,
  color      TEXT NOT NULL DEFAULT '#6b7280',
  sort_order INTEGER NOT NULL DEFAULT 0
);

-- 标签：多对多，用于横切筛选（如「对外」「深度工作」「等回复」）
CREATE TABLE IF NOT EXISTS tags (
  id    INTEGER PRIMARY KEY AUTOINCREMENT,
  name  TEXT NOT NULL UNIQUE,
  color TEXT NOT NULL DEFAULT '#6b7280'
);

-- 计划：年/月/周三层，靠 parent_id 自引用挂靠（周挂月、月挂年）
CREATE TABLE IF NOT EXISTS plans (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  level          TEXT NOT NULL CHECK (level IN ('year', 'month', 'week')),
  -- 归属周期：year='2026' / month='2026-07' / week='2026-W29'(ISO 周)
  period_key     TEXT NOT NULL,
  title          TEXT NOT NULL,
  detail         TEXT NOT NULL DEFAULT '',
  parent_id      INTEGER REFERENCES plans (id) ON DELETE SET NULL,
  category_id    INTEGER REFERENCES categories (id) ON DELETE SET NULL,
  -- 预计投入分钟数，用于「剩余时间 vs 总时间」图的分母
  target_minutes INTEGER NOT NULL DEFAULT 0,
  status         TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'done', 'archived')),
  sort_order     INTEGER NOT NULL DEFAULT 0,
  created_at     TEXT NOT NULL,
  done_at        TEXT
);

CREATE INDEX IF NOT EXISTS idx_plans_period ON plans (level, period_key);
CREATE INDEX IF NOT EXISTS idx_plans_parent ON plans (parent_id);

-- 日任务（待办事项）
CREATE TABLE IF NOT EXISTS tasks (
  id               INTEGER PRIMARY KEY AUTOINCREMENT,
  date             TEXT NOT NULL,  -- 归属日 'YYYY-MM-DD'
  title            TEXT NOT NULL,
  note             TEXT NOT NULL DEFAULT '',
  -- 四类：flow=流程化任务 adhoc=临时新增(紧急) urgent_important=重要紧急 important_later=重要不紧急
  kind             TEXT NOT NULL DEFAULT 'flow'
                     CHECK (kind IN ('flow', 'adhoc', 'urgent_important', 'important_later')),
  plan_id          INTEGER REFERENCES plans (id) ON DELETE SET NULL,
  category_id      INTEGER REFERENCES categories (id) ON DELETE SET NULL,
  estimate_minutes INTEGER NOT NULL DEFAULT 0,
  -- 累计实际耗时，由 time_logs 汇总回写，避免每次画图都做聚合
  spent_minutes    INTEGER NOT NULL DEFAULT 0,
  done             INTEGER NOT NULL DEFAULT 0 CHECK (done IN (0, 1)),
  done_at          TEXT,           -- 勾选那一刻的本地时间，用于「几点完成的」
  remind_at        TEXT,           -- 到点提醒时刻（本地时间）
  remind_fired     INTEGER NOT NULL DEFAULT 0 CHECK (remind_fired IN (0, 1)),
  sort_order       INTEGER NOT NULL DEFAULT 0,
  created_at       TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_tasks_date ON tasks (date);
CREATE INDEX IF NOT EXISTS idx_tasks_plan ON tasks (plan_id);
CREATE INDEX IF NOT EXISTS idx_tasks_remind ON tasks (remind_at) WHERE remind_fired = 0;

CREATE TABLE IF NOT EXISTS task_tags (
  task_id INTEGER NOT NULL REFERENCES tasks (id) ON DELETE CASCADE,
  tag_id  INTEGER NOT NULL REFERENCES tags (id) ON DELETE CASCADE,
  PRIMARY KEY (task_id, tag_id)
);

CREATE TABLE IF NOT EXISTS plan_tags (
  plan_id INTEGER NOT NULL REFERENCES plans (id) ON DELETE CASCADE,
  tag_id  INTEGER NOT NULL REFERENCES tags (id) ON DELETE CASCADE,
  PRIMARY KEY (plan_id, tag_id)
);

-- 计时流水：每段专注一条，spent_minutes 由此汇总
CREATE TABLE IF NOT EXISTS time_logs (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  task_id  INTEGER NOT NULL REFERENCES tasks (id) ON DELETE CASCADE,
  start_at TEXT NOT NULL,
  end_at   TEXT,
  minutes  INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_timelogs_task ON time_logs (task_id);

-- 日总结：一天一条
CREATE TABLE IF NOT EXISTS day_summaries (
  date       TEXT PRIMARY KEY,
  content    TEXT NOT NULL DEFAULT '',
  mood       INTEGER,  -- 1..5，可空
  updated_at TEXT NOT NULL
);

-- 应用设置的通用键值表
CREATE TABLE IF NOT EXISTS settings (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

-- 配色取自校验过的分类调色板（见 src/lib/palette.ts）：
-- 这个顺序的相邻色盲分离度最好，别按「好看」随手改
INSERT OR IGNORE INTO categories (name, color, sort_order) VALUES
  ('工作', '#3987e5', 0),
  ('学习', '#c98500', 1),
  ('生活', '#9085e9', 2),
  ('健康', '#199e70', 3);
`,br=`-- 需求5：标签成为分类下的子集。
--
-- 001 里 tags.name 是全局 UNIQUE。归到分类下之后，「工作/紧急」和「生活/紧急」
-- 应该能共存，所以唯一性要从「全局唯一」降为「同分类内唯一」。
-- SQLite 无法删除列上的 UNIQUE 约束，只能重建表。
--
-- 重建的坑：task_tags / plan_tags 的 tag_id 是 ON DELETE CASCADE，
-- 而 DROP TABLE 会执行隐式 DELETE 并触发级联，直接清空这两张关联表。
-- 所以顺序必须是「先把关联表挪走 → 再重建 tags → 最后原样灌回」，
-- 让 DROP tags 发生时级联无表可清。

CREATE TABLE _tt_bak AS SELECT * FROM task_tags;
CREATE TABLE _pt_bak AS SELECT * FROM plan_tags;

DROP TABLE task_tags;
DROP TABLE plan_tags;

-- 到这里级联已经没有目标，可以安全重建 tags
CREATE TABLE tags_new (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT NOT NULL,
  color       TEXT NOT NULL DEFAULT '#6b7280',
  -- 允许为空：老库里已有的标签没有归属，落到 UI 的「未归类」里，
  -- 不设 NOT NULL 是为了让存量数据能平滑升级而不是迁移失败
  category_id INTEGER REFERENCES categories (id) ON DELETE CASCADE
);

INSERT INTO tags_new (id, name, color, category_id)
  SELECT id, name, color, NULL FROM tags;

DROP TABLE tags;
ALTER TABLE tags_new RENAME TO tags;

-- 同分类内不重名。category_id 为 NULL 的行不参与唯一性判断（SQLite 的 NULL 语义），
-- 未归类标签因此不受约束——正是想要的行为。
CREATE UNIQUE INDEX IF NOT EXISTS idx_tags_name_in_category ON tags (category_id, name);
CREATE INDEX IF NOT EXISTS idx_tags_category ON tags (category_id);

-- 原样重建关联表并灌回数据
CREATE TABLE task_tags (
  task_id INTEGER NOT NULL REFERENCES tasks (id) ON DELETE CASCADE,
  tag_id  INTEGER NOT NULL REFERENCES tags (id) ON DELETE CASCADE,
  PRIMARY KEY (task_id, tag_id)
);

CREATE TABLE plan_tags (
  plan_id INTEGER NOT NULL REFERENCES plans (id) ON DELETE CASCADE,
  tag_id  INTEGER NOT NULL REFERENCES tags (id) ON DELETE CASCADE,
  PRIMARY KEY (plan_id, tag_id)
);

INSERT INTO task_tags (task_id, tag_id) SELECT task_id, tag_id FROM _tt_bak;
INSERT INTO plan_tags (plan_id, tag_id) SELECT plan_id, tag_id FROM _pt_bak;

DROP TABLE _tt_bak;
DROP TABLE _pt_bak;

-- 需求7：日总结配图。图片文件落在 appdata 的 summary_images/ 目录下，
-- 库里只存文件名，不存二进制——避免 db 膨胀、备份困难。
CREATE TABLE IF NOT EXISTS summary_images (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  date       TEXT NOT NULL,
  file       TEXT NOT NULL,
  caption    TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_summary_images_date ON summary_images (date);
`,Tr=`-- 需求3：计划也要能按四象限归类与筛选。
--
-- 默认值取 important_later（重要不紧急）而不是 flow：
-- 年/月/周计划按定义就是「重要但不紧急」的事——提前规划正是为了不让它们变紧急。
-- 存量计划一律落到这一类，语义上也站得住。
ALTER TABLE plans ADD COLUMN kind TEXT NOT NULL DEFAULT 'important_later'
  CHECK (kind IN ('flow', 'adhoc', 'urgent_important', 'important_later'));

CREATE INDEX IF NOT EXISTS idx_plans_kind ON plans (kind);
`,_r=`-- 计划也要能定到具体日期时间并到点提醒。
--
-- 原本 plans 只有 period_key（'2026' / '2026-07' / '2026-W29'）——
-- 那是「归属哪个周期」，粒度到周为止，没法表达「7月20号下午3点」。
-- 所以另加 due_at 存精确时刻，两者并存：period_key 决定它归在哪一页，
-- due_at 决定它什么时候该提醒。两者都可以为空。
--
-- 字段命名对齐 tasks 的 remind_at / remind_fired，提醒循环才能一视同仁地扫。
--
-- 附带说明（001 里的注释已过时）：kind='flow' 现在显示为「常规日常任务」，
-- 枚举值保持 flow 不动，改的只是界面 label。

ALTER TABLE plans ADD COLUMN due_at TEXT;         -- 截止/执行时刻 'YYYY-MM-DD HH:mm:ss'
ALTER TABLE plans ADD COLUMN remind_at TEXT;      -- 提醒时刻，可以早于 due_at
ALTER TABLE plans ADD COLUMN remind_fired INTEGER NOT NULL DEFAULT 0
  CHECK (remind_fired IN (0, 1));

-- 和 tasks 上的同类索引一致：只索引「还没响过的」，绝大多数行不进索引
CREATE INDEX IF NOT EXISTS idx_plans_remind ON plans (remind_at) WHERE remind_fired = 0;
CREATE INDEX IF NOT EXISTS idx_plans_due ON plans (due_at);
`,wr=`-- 需求：年/月/周计划也各自有一个「周期总结」，和日总结平级。
--
-- 单独一张表而不是塞进 day_summaries：day_summaries 以 date 为主键、还带 mood，
-- 被热力图/统计/配图一堆地方按天引用，硬改成通用表风险大。
-- 周期总结按 (level, period_key) 定位，period_key 与 plans 表同源：
--   year='2026' / month='2026-07' / week='2026-W29'(ISO 周)
-- 不带 mood——心情是「一天」的粒度，按周期打分没意义。
CREATE TABLE IF NOT EXISTS period_summaries (
  level      TEXT NOT NULL CHECK (level IN ('year', 'month', 'week')),
  period_key TEXT NOT NULL,
  content    TEXT NOT NULL DEFAULT '',
  updated_at TEXT NOT NULL,
  PRIMARY KEY (level, period_key)
);
`,Nr=`-- 常规日常任务改成「例行任务」：每天自动出现一份，可「当日完成」（次日再现）
-- 或「彻底完成」（从此不再出现）。
--
-- 模型：一条例行 = 一个「头」（第一天那份实例），头的 routine_id 指向自己；
-- 之后每天在 tasks 里生成一份实例，实例的 routine_id 都指向这个头。
-- recur_active 只在头上有意义：1=每天继续生成，0=彻底完成、停止生成。
-- 非例行任务（临时/重要紧急/重要不紧急）routine_id 为空，行为完全不变。
ALTER TABLE tasks ADD COLUMN routine_id INTEGER;
ALTER TABLE tasks ADD COLUMN recur_active INTEGER NOT NULL DEFAULT 1;

-- 同一条例行每天至多一份实例。挡住「主窗口 + 桌面便签窗」并发物化时的重复插入，
-- 配合 INSERT OR IGNORE 用。部分索引只约束例行实例，不影响普通任务。
CREATE UNIQUE INDEX IF NOT EXISTS ux_tasks_routine_day
  ON tasks (routine_id, date) WHERE routine_id IS NOT NULL;
`,yr=`-- 配图从「只有日总结能配」扩到「年/月/周总结也能配」。
--
-- 复用 summary_images 表，加一列 scope 区分归属：
--   scope='day'   时，date 存日期 '2026-07-17'
--   scope='week'  时，date 存周期键 '2026-W29'
--   scope='month' 时，date 存 '2026-07'
--   scope='year'  时，date 存 '2026'
--
-- 为什么必须加 scope、不能只靠 date 复用：
-- 日总结的时光机是按日期区间查的（date >= '2026-01-01' AND date <= '2026-12-31'），
-- 而 '2026-07' 按字符串比较正好落在这个区间里，月总结的图会混进某一天的图里。
-- 加一列把两者彻底分开。
ALTER TABLE summary_images ADD COLUMN scope TEXT NOT NULL DEFAULT 'day'
  CHECK (scope IN ('day', 'year', 'month', 'week'));

CREATE INDEX IF NOT EXISTS idx_summary_images_scope ON summary_images (scope, date);
`,vr=`-- 修数据：非「常规日常任务」不该带例行身份。
--
-- 起因：createTask 只给 kind='flow' 设 routine_id，但 updateTask 改类型时
-- 没同步清理。用户把任务从「常规日常」改成「重要且紧急」后，routine_id 仍在，
-- 于是界面上错误地显示 ↻ 和「彻底完成」按钮，而且每天还会被自动重新生成一份。
--
-- 顺序要紧：先把「头是非 flow」的例行停掉，再摘 routine_id。
-- 反过来做的话，routine_id 一旦清空就再也定位不到这些头了。

-- 1) 非 flow 的例行「头」：停止继续生成后续实例
UPDATE tasks SET recur_active = 0
 WHERE routine_id = id AND kind <> 'flow';

-- 2) 所有非 flow 任务：摘掉例行身份
UPDATE tasks SET routine_id = NULL
 WHERE kind <> 'flow' AND routine_id IS NOT NULL;
`,Lr=`-- 任务的时段归类：上午 / 下午 / 晚上。
-- 列表视图不再按四象限分组，而是按这三个时段分段，段内可拖动排序。
-- 四象限（kind）依旧保留，只是换了一种日内组织方式。

ALTER TABLE tasks ADD COLUMN phase TEXT NOT NULL DEFAULT 'morning'
  CHECK (phase IN ('morning', 'afternoon', 'evening'));

-- 存量任务按「创建时刻的钟点」归段，尽量还原它当初被记下的时间段，
-- 而不是一股脑堆进上午。created_at 形如 'YYYY-MM-DD HH:MM:SS'，
-- 用 substr 取 HH（比 strftime 稳，不掺时区换算）。
UPDATE tasks
SET phase = CASE
  WHEN created_at IS NULL OR length(created_at) < 13 THEN 'morning'
  WHEN CAST(substr(created_at, 12, 2) AS INTEGER) < 12 THEN 'morning'
  WHEN CAST(substr(created_at, 12, 2) AS INTEGER) < 18 THEN 'afternoon'
  ELSE 'evening'
END;
`,gr=`-- 第四个区间「不分区」。
--
-- 上一版的 phase 列带了 3 值 CHECK (morning/afternoon/evening)，塞不进 'none'。
-- 而 SQLite 改不了 CHECK，只能重建整张表；但 tasks 被 time_logs、task_tags
-- 以 ON DELETE CASCADE 引用，重建时 DROP TABLE 的隐式删除会连它们一起清掉（丢数据）。
-- 加上已应用的迁移不能改内容（sqlx 校验和会对不上）。
--
-- 于是不动旧表结构：新开一列 slot（不加 CHECK，四个值随便存），把旧 phase 的
-- 归段搬过来，之后前端只读写 slot。旧 phase 列成了死列，留着不管，无副作用。

ALTER TABLE tasks ADD COLUMN slot TEXT NOT NULL DEFAULT 'none';

-- 存量任务沿用它在上一版里已归好的时段
UPDATE tasks SET slot = phase;
`,Ar=`-- 修复：例行任务每天生成新实例时漏写 slot 列，落到默认 'none'——
-- 用户摆在上午的例行任务，隔天全「自己跑」进了不分区。
-- 生成语句已改为继承最近一次实例的时段；这里把已经生成错的修回来：
-- 只动「例行实例且当前在不分区」的行，且此前确实有过非不分区的实例，
-- 跟着最近那次走。用户手动拖进不分区的普通任务不受影响（routine_id 为空）。

UPDATE tasks SET slot = (
  SELECT t2.slot FROM tasks t2
   WHERE t2.routine_id = tasks.routine_id
     AND t2.date < tasks.date
     AND t2.slot <> 'none'
   ORDER BY t2.date DESC LIMIT 1
)
WHERE routine_id IS NOT NULL
  AND slot = 'none'
  AND EXISTS (
    SELECT 1 FROM tasks t2
     WHERE t2.routine_id = tasks.routine_id
       AND t2.date < tasks.date
       AND t2.slot <> 'none'
  );
`,Rr="desknotes",lt="kv",fe="db";function hn(){return new Promise((m,w)=>{const T=indexedDB.open(Rr,1);T.onupgradeneeded=()=>{const g=T.result;g.objectStoreNames.contains(lt)||g.createObjectStore(lt)},T.onsuccess=()=>m(T.result),T.onerror=()=>w(T.error)})}async function Or(m){const w=await hn();return new Promise((T,g)=>{const k=w.transaction(lt,"readonly").objectStore(lt).get(m);k.onsuccess=()=>T(k.result??null),k.onerror=()=>g(k.error)})}async function dn(m,w){const T=await hn();return new Promise((g,Y)=>{const k=T.transaction(lt,"readwrite");k.objectStore(lt).put(w,m),k.oncomplete=()=>g(),k.onerror=()=>Y(k.error)})}const Ir=[{version:1,sql:mr},{version:2,sql:br},{version:3,sql:Tr},{version:4,sql:_r},{version:5,sql:wr},{version:6,sql:Nr},{version:7,sql:yr},{version:8,sql:vr},{version:9,sql:Lr},{version:10,sql:gr},{version:11,sql:Ar}];function Sr(m){var T;const w=(T=m.exec("PRAGMA user_version")[0])==null?void 0:T.values[0][0];for(const g of Ir)g.version<=w||(m.run(g.sql),m.run(`PRAGMA user_version = ${g.version}`))}let Ft=null,K=null,ut=null,Ee=!1;function Ur(){Ee=!0,ut!==null&&window.clearTimeout(ut),ut=window.setTimeout(()=>void he(),300)}async function he(){!K||!Ee||(Ee=!1,ut!==null&&(window.clearTimeout(ut),ut=null),await dn(fe,K.export()))}function En(m){const w={};return m.forEach((T,g)=>{w[`$${g+1}`]=Dr(T)}),w}function Dr(m){return m==null?null:typeof m=="boolean"?m?1:0:typeof m=="number"||typeof m=="string"||m instanceof Uint8Array?m:String(m)}async function Mr(){if(!Ft){const w=new URL("../assets/sql-wasm.wasm",import.meta.url).href;Ft=await pr({locateFile:()=>w})}if(!K){const w=await Or(fe);K=w?new Ft.Database(w):new Ft.Database,K.run("PRAGMA foreign_keys = ON"),Sr(K),await dn(fe,K.export()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&he()}),window.addEventListener("pagehide",()=>void he())}const m=K;return{async select(w,T=[]){const g=m.prepare(w);try{T.length&&g.bind(En(T));const Y=[];for(;g.step();)Y.push(g.getAsObject());return Y}finally{g.free()}},async execute(w,T=[]){var _t;m.run(w,T.length?En(T):void 0);const g=m.getRowsModified(),k=((_t=m.exec("SELECT last_insert_rowid() AS id")[0])==null?void 0:_t.values[0][0])??0;return Ur(),{lastInsertId:k,rowsAffected:g}}}}export{he as flush,Mr as openWebDb};
