var ne=Object.defineProperty;var ie=(e,r,t)=>r in e?ne(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var p=(e,r,t)=>(ie(e,typeof r!="symbol"?r+"":r,t),t),T=(e,r,t)=>{if(!r.has(e))throw TypeError("Cannot "+t)};var O=(e,r,t)=>(T(e,r,"read from private field"),t?t.call(e):r.get(e)),R=(e,r,t)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,t)},V=(e,r,t,n)=>(T(e,r,"write to private field"),n?n.call(e,t):r.set(e,t),t);var F=(e,r,t)=>(T(e,r,"access private method"),t);import{_ as se,k as E,l as P,m as A,n as K,o as N}from"./index-Di4F1x74.js";import{S as oe}from"./base-80a1f760-BEr0-viG.js";import{c as ae,g as z,r as U,f as ce,w as W,a as de,b as le,E as ue}from"./consoleHook-59e792cb-BZChVaIc.js";var he=Object.create,q=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,X=Object.getOwnPropertyNames,pe=Object.getPrototypeOf,me=Object.prototype.hasOwnProperty,ve=(e,r,t)=>r in e?q(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>function(){return r||(0,e[X(e)[0]])((r={exports:{}}).exports,r),r.exports},we=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of X(r))!me.call(e,s)&&s!==t&&q(e,s,{get:()=>r[s],enumerable:!(n=fe(r,s))||n.enumerable});return e},k=(e,r,t)=>(t=e!=null?he(pe(e)):{},we(!e||!e.__esModule?q(t,"default",{value:e,enumerable:!0}):t,e)),ge=(e,r,t)=>(ve(e,r+"",t),t),H=(e,r,t)=>{if(!r.has(e))throw TypeError("Cannot "+t)},y=(e,r,t)=>(H(e,r,"read from private field"),t?t.call(e):r.get(e)),j=(e,r,t)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,t)},C=(e,r,t,n)=>(H(e,r,"write to private field"),r.set(e,t),t),_=(e,r,t)=>(H(e,r,"access private method"),t),Q=b({"../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/pad.js"(e,r){r.exports=function(n,s){var i="000000000"+n;return i.substr(i.length-s)}}}),ye=b({"../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/fingerprint.browser.js"(e,r){var t=Q(),n=typeof window=="object"?window:self,s=Object.keys(n).length,i=navigator.mimeTypes?navigator.mimeTypes.length:0,o=t((i+navigator.userAgent.length).toString(36)+s.toString(36),4);r.exports=function(){return o}}}),_e=b({"../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/getRandomValue.browser.js"(e,r){var t,n=typeof window<"u"&&(window.crypto||window.msCrypto)||typeof self<"u"&&self.crypto;n?(s=Math.pow(2,32)-1,t=function(){return Math.abs(n.getRandomValues(new Uint32Array(1))[0]/s)}):t=Math.random;var s;r.exports=t}}),Z=b({"../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/index.js"(e,r){var t=ye(),n=Q(),s=_e(),i=0,o=4,a=36,c=Math.pow(a,o);function l(){return n((s()*c<<0).toString(a),o)}function h(){return i=i<c?i:0,i++,i-1}function f(){var v="c",w=new Date().getTime().toString(a),S=n(h().toString(a),o),d=t(),u=l()+l();return v+w+S+d+u}f.slug=function(){var w=new Date().getTime().toString(36),S=h().toString(36).slice(-4),d=t().slice(0,1)+t().slice(-1),u=l().slice(-2);return w.slice(-2)+S+d+u},f.isCuid=function(w){return typeof w!="string"?!1:!!w.startsWith("c")},f.isSlug=function(w){if(typeof w!="string")return!1;var S=w.length;return S>=7&&S<=10},f.fingerprint=t,r.exports=f}}),ee=b({"../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/createDeferredExecutor.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.createDeferredExecutor=void 0;function r(){const t=(n,s)=>{t.state="pending",t.resolve=i=>{if(t.state!=="pending")return;t.result=i;const o=a=>(t.state="fulfilled",a);return n(i instanceof Promise?i:Promise.resolve(i).then(o))},t.reject=i=>{if(t.state==="pending")return queueMicrotask(()=>{t.state="rejected"}),s(t.rejectionReason=i)}};return t}e.createDeferredExecutor=r}}),Ee=b({"../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/DeferredPromise.js"(e){var n,s,D,o;Object.defineProperty(e,"__esModule",{value:!0}),e.DeferredPromise=void 0;var r=ee(),t=(o=class extends Promise{constructor(c=null){const l=(0,r.createDeferredExecutor)();super((h,f)=>{l(h,f),c==null||c(l.resolve,l.reject)});R(this,s);R(this,n,void 0);p(this,"resolve");p(this,"reject");V(this,n,l),this.resolve=O(this,n).resolve,this.reject=O(this,n).reject}get state(){return O(this,n).state}get rejectionReason(){return O(this,n).rejectionReason}then(c,l){return F(this,s,D).call(this,super.then(c,l))}catch(c){return F(this,s,D).call(this,super.catch(c))}finally(c){return F(this,s,D).call(this,super.finally(c))}},n=new WeakMap,s=new WeakSet,D=function(c){return Object.defineProperties(c,{resolve:{configurable:!0,value:this.resolve},reject:{configurable:!0,value:this.reject}})},o);e.DeferredPromise=t}}),$=b({"../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/index.js"(e){var r=e&&e.__createBinding||(Object.create?function(n,s,i,o){o===void 0&&(o=i);var a=Object.getOwnPropertyDescriptor(s,i);(!a||("get"in a?!s.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(n,o,a)}:function(n,s,i,o){o===void 0&&(o=i),n[o]=s[i]}),t=e&&e.__exportStar||function(n,s){for(var i in n)i!=="default"&&!Object.prototype.hasOwnProperty.call(s,i)&&r(s,n,i)};Object.defineProperty(e,"__esModule",{value:!0}),t(ee(),e),t(Ee(),e)}}),te=b({"../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/MemoryLeakError.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.MemoryLeakError=void 0;var r=class extends Error{constructor(n,s,i){super(`Possible EventEmitter memory leak detected. ${i} ${s.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`);p(this,"emitter");p(this,"type");p(this,"count");this.emitter=n,this.type=s,this.count=i,this.name="MaxListenersExceededWarning"}};e.MemoryLeakError=r}}),Pe=b({"../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/Emitter.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Emitter=void 0;var r=te(),t,n,s,i,o,a,c,l,h,f,v,w=class{constructor(){j(this,i),j(this,a),j(this,l),j(this,f),j(this,t,void 0),j(this,n,void 0),j(this,s,void 0),C(this,t,new Map),C(this,n,w.defaultMaxListeners),C(this,s,!1)}static listenerCount(d,u){return d.listenerCount(u)}setMaxListeners(d){return C(this,n,d),this}getMaxListeners(){return y(this,n)}eventNames(){return Array.from(y(this,t).keys())}emit(d,...u){const m=_(this,i,o).call(this,d);return m.forEach(M=>{M.apply(this,u)}),m.length>0}addListener(d,u){_(this,f,v).call(this,"newListener",d,u);const m=_(this,i,o).call(this,d).concat(u);if(y(this,t).set(d,m),y(this,n)>0&&this.listenerCount(d)>y(this,n)&&!y(this,s)){C(this,s,!0);const M=new r.MemoryLeakError(this,d,this.listenerCount(d));console.warn(M)}return this}on(d,u){return this.addListener(d,u)}once(d,u){return this.addListener(d,_(this,l,h).call(this,d,u))}prependListener(d,u){const m=_(this,i,o).call(this,d);if(m.length>0){const M=[u].concat(m);y(this,t).set(d,M)}else y(this,t).set(d,m.concat(u));return this}prependOnceListener(d,u){return this.prependListener(d,_(this,l,h).call(this,d,u))}removeListener(d,u){const m=_(this,i,o).call(this,d);return m.length>0&&(_(this,a,c).call(this,m,u),y(this,t).set(d,m),_(this,f,v).call(this,"removeListener",d,u)),this}off(d,u){return this.removeListener(d,u)}removeAllListeners(d){return d?y(this,t).delete(d):y(this,t).clear(),this}listeners(d){return Array.from(_(this,i,o).call(this,d))}listenerCount(d){return _(this,i,o).call(this,d).length}rawListeners(d){return this.listeners(d)}},S=w;t=new WeakMap,n=new WeakMap,s=new WeakMap,i=new WeakSet,o=function(d){return y(this,t).get(d)||[]},a=new WeakSet,c=function(d,u){const m=d.indexOf(u);return m>-1&&d.splice(m,1),[]},l=new WeakSet,h=function(d,u){const m=(...M)=>{this.removeListener(d,m),u.apply(this,M)};return m},f=new WeakSet,v=function(d,u,m){this.emit(d,u,m)},ge(S,"defaultMaxListeners",10),e.Emitter=S}}),be=b({"../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/index.js"(e){var r=e&&e.__createBinding||(Object.create?function(n,s,i,o){o===void 0&&(o=i);var a=Object.getOwnPropertyDescriptor(s,i);(!a||("get"in a?!s.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(n,o,a)}:function(n,s,i,o){o===void 0&&(o=i),n[o]=s[i]}),t=e&&e.__exportStar||function(n,s){for(var i in n)i!=="default"&&!Object.prototype.hasOwnProperty.call(s,i)&&r(s,n,i)};Object.defineProperty(e,"__esModule",{value:!0}),t(Pe(),e),t(te(),e)}}),Se=k(Z()),Le=/(%?)(%([sdjo]))/g;function Ie(e,r){switch(r){case"s":return e;case"d":case"i":return Number(e);case"j":return JSON.stringify(e);case"o":{if(typeof e=="string")return e;const t=JSON.stringify(e);return t==="{}"||t==="[]"||/^\[object .+?\]$/.test(t)?e:t}}}function g(e,...r){if(r.length===0)return e;let t=0,n=e.replace(Le,(s,i,o,a)=>{const c=r[t],l=Ie(c,a);return i?s:(t++,l)});return t<r.length&&(n+=` ${r.slice(t).join(" ")}`),n=n.replace(/%{2,2}/g,"%"),n}var Me=2;function je(e){if(!e.stack)return;const r=e.stack.split(`
`);r.splice(1,Me),e.stack=r.join(`
`)}var ke=class extends Error{constructor(e,...r){super(e),this.message=e,this.name="Invariant Violation",this.message=g(e,...r),je(this)}},L=(e,r,...t)=>{if(!e)throw new ke(r,...t)};L.as=(e,r,t,...n)=>{if(!r)throw e.prototype.name!=null?new e(g(t,n)):e(g(t,n))};var B=k($()),Oe=window.localStorage.CSB_EMULATOR_DEBUG,Ce="\x1B[0m",Fe="\x1B[32;1m",Ae="\x1B[31m",xe="\x1B[34m",De="\x1B[33;1m",Te="\x1B[35;1m",G="\x1B[36;1m",Re={preview:De,emulator:Te,runtime:G,bridge:xe,"runtime:worker":G};function re(e){return function(t,...n){if(Oe==="true"){const s=()=>t.includes("sender")?`${Fe}sender`:t.includes("receiver")?`${Ae}receiver`:"",i=t.replace(/\[.+\]:/,"");console.debug(`${Re[e]}${e}:${s()}${Ce}:${i}`,...n)}}}var I=re("emulator"),Ue=class{constructor(e){p(this,"emitter");p(this,"channel");p(this,"receiverPort");p(this,"receiverReadyPromise");this.target=e,this.emitter=new EventTarget,this.channel=new MessageChannel,this.receiverPort=this.channel.port1;const r=new B.DeferredPromise,t=n=>{n.data.type==="internal/ready"&&(I("[message-sender]: runtime is ready"),r.resolve())};window.addEventListener("message",t),r.then(()=>{window.removeEventListener("message",t)}),this.receiverReadyPromise=r,this.receiverPort.onmessage=n=>{const s=n.data;s.type!=null&&(I('[message-sender]: emitting "%s" event...',s.type,s.payload),this.emitter.dispatchEvent(new MessageEvent(s.type,{data:s.payload})))}}async handshake(){const e=new B.DeferredPromise;await this.receiverReadyPromise,I("[message-sender]: sending handshake"),this.target.postMessage({type:"internal/handshake"},"*",[this.channel.port2]),this.on("internal/handshake/done",()=>{e.resolve(),clearTimeout(r)});const r=setTimeout(()=>{e.reject(new Error("MessageSender: Handshake timeout"))},5e3);return e}on(e,r,t){I('[message-sender]: add listener "%s"',e),this.emitter.addEventListener(e,n=>{n instanceof MessageEvent&&r(n)},t)}off(e,r,t){this.emitter.removeEventListener(e,r,t)}async send(e,...r){const t=new B.DeferredPromise,n=(0,Se.default)(),s=r[0]||{};I('[message-sender]: send "%s" (%s)',e,n,s),this.receiverPort.postMessage({type:e,payload:{operationId:n,payload:s}}),I('[message-sender]: adding done listener for "%s" (%s)',e,n);const i=a=>{const{data:c}=a;if(c.operationId===n){const l=c.listenerPayload||{};I('[message-sender]: resolving "%s (%s) promise!',e,n),t.resolve({...l,operationId:c.operationId})}},o=a=>{const{data:c}=a;c.operationId===n&&(I('[message-sender]: rejecting "%s (%s) promise!',e,n),t.reject(c.error))};return this.on("internal/operation/done",i),this.on("internal/operation/failed",o),t.finally(()=>{this.emitter.removeEventListener("internal/operation/done",i),this.emitter.removeEventListener("internal/operation/failed",o)})}},J=k($()),We=k(Z()),Be=class{constructor(e){this.channel=e}async init(e){await this.channel.send("fs/init",{files:e})}async readFile(e,r){const t=await this.channel.send("fs/readFile",{path:e,encoding:r}).catch(n=>{throw new Error(g('Failed to read file at path "%s"',e),{cause:n})});if(!t)throw new Error("File not found");return t.data}async writeFile(e,r,t){let n,s=!1;typeof t=="object"?(n=t.encoding,s=!!t.recursive):typeof t=="string"&&(n=t),await this.channel.send("fs/writeFile",{path:e,content:r,encoding:n,recursive:s}).catch(i=>{throw new Error(g('Failed to write file at path "%s"',e),{cause:i})})}async readdir(e){const r=await this.channel.send("fs/readdir",{path:e}).catch(t=>{throw new Error(g('Failed to read directory at path "%s"',e),{cause:t})});if(!r)throw new Error("Directory not found");return r.data}async mkdir(e,r){const t=!!(r!=null&&r.recursive);await this.channel.send("fs/mkdir",{path:e,recursive:t}).catch(n=>{throw new Error(g('Failed to make directory at path "%s"',e),{cause:n})})}async stat(e){const r=await this.channel.send("fs/stat",{path:e}).catch(t=>{throw new Error(g('Failed to stat file at path "%s"',e),{cause:t})});if(!r)throw new Error("File not found");return r.data}async rm(e,r){const{force:t,recursive:n}=r||{};await this.channel.send("fs/rm",{path:e,force:t,recursive:n}).catch(s=>{throw new Error(g('Failed to remove file at path "%s"',e),{cause:s})})}async watch(e,r,t){const n=(0,We.default)();return await this.channel.send("fs/watch",{watcherId:n,includes:e,excludes:r}),this.channel.on("fs/watch-event",({data:s})=>{if(s.watcherId===n&&t){const i={...s};delete i.watcherId,t(i)}}),{dispose:()=>this.channel.send("fs/unwatch",{watcherId:n})}}},Y=k(be()),Ne=class{constructor(e){this.channel=e}create(){return new qe(this.channel)}},qe=class{constructor(e){p(this,"id");p(this,"state");p(this,"stdout");p(this,"stderr");p(this,"stdin");this.channel=e,this.state="running",this.stdout=new Y.Emitter,this.stderr=new Y.Emitter,this.stdin={write:r=>{if(!this.id)throw new Error("Failed to write to stdin, no process is currently running");return this.channel.send("shell/stdin",{data:r,workerId:this.id})}},this.forwardStdEvents()}forwardStdEvents(){this.channel.on("worker/tty",e=>{const{data:r}=e;if(r.workerId===this.id)switch(r.payload.type){case"out":{this.stdout.emit("data",r.payload.data);break}case"err":{this.stderr.emit("data",r.payload.data);break}}})}async runCommand(e,r,t={}){L(!this.id,'Failed to run "runCommand" on a ShellProcess: there is already a process running.');const n=await this.channel.send("shell/runCommand",{command:e,args:r,options:t});return L(n,'Failed to run "runCommand" on a ShellProcess: was not able to retrieve a running process.'),this.id=n.id,this.state="running",n}async on(e,r){switch(e){case"progress":{this.channel.on("worker/progress",({data:t})=>{r(t.status)});return}case"exit":{this.channel.on("worker/exit",({data:t})=>{t.workerId===this.id&&r(t.exitCode,t.error)});return}}}async kill(){L(this.id,'Failed to run "kill" on a ShellProcess: there is no process running. Did you forget to run it?'),this.state="idle",await this.channel.send("shell/exit",{id:this.id}).catch(e=>{throw new Error(g('Failed to kill shell with ID "%s"',this.id),{cause:e})}),this.id=void 0}},He=k($()),$e=2e4,Ve=class{constructor(e){this.channel=e}async waitFor(e,r,t=$e){const n=new He.DeferredPromise,s=setTimeout(()=>{n.reject()},t),i=await this.channel.send("preview/get/info",e).catch(a=>{n.reject(new Error(g('Failed to look up preview information for shell ID "%s" (port: %d)',e.sourceShellId,e.port)))}),o=i&&r(i);return o&&n.resolve({url:i.url,port:i.port,sourceShellId:i.sourceShellId}),this.channel.on("preview/port/ready",({data:a})=>{!o&&r(a)&&n.resolve({url:a.url,port:a.port,sourceShellId:a.sourceShellId})}),n.finally(()=>{clearTimeout(s)})}async getByShellId(e,r){return this.waitFor({sourceShellId:e},t=>t.sourceShellId===e,r).catch(t=>{throw new Error(g('Failed to get shell by ID "%s"',e),{cause:t})})}async waitForPort(e,r){return this.waitFor({port:e},t=>t.port===e,r).catch(t=>{throw new Error(g("Failed to await port %d",e),{cause:t})})}},ze="https://nodebox-runtime.codesandbox.io",x=re("emulator"),Ge=class{constructor(e){p(this,"channel",null);p(this,"isConnected");p(this,"url");p(this,"fileSystemApi",null);p(this,"shellApi",null);p(this,"previewApi",null);this.options=e,L(this.options.iframe,'Failed to create a Nodebox: expected "iframe" argument to be a reference to an <iframe> element but got %j',this.options.iframe),this.url=this.options.runtimeUrl||ze,this.isConnected=!1}async connect(){const{iframe:e,cdnUrl:r}=this.options;x("[message-sender]: Connecting to node emulator...");const t=new J.DeferredPromise;this.url||t.reject(new Error("Nodebox URL is missing. Did you forget to provide it when creating this Nodebox instance?")),L(e.contentWindow,"Failed to create a MessageChannel with the Nodebox iframe: no content window found"),this.channel=new Ue(e.contentWindow);const n=new J.DeferredPromise;return e.setAttribute("src",this.url),e.addEventListener("load",()=>{n.resolve()},{once:!0}),e.addEventListener("error",s=>{n.reject(s.error)},{once:!0}),await n,x("[message-sender]: IFrame loaded..."),await this.channel.handshake(),x("[message-sender]: Handshake completed..."),this.channel.send("connect",{cdnUrl:r}),this.channel.on("runtime/ready",()=>{t.resolve()}),t.then(()=>{x("[message-sender]: Connected to runtime..."),this.isConnected=!0})}get fs(){return L(this.isConnected,'Failed to access the File System API: consumer is not connected. Did you forget to run "connect()"?'),this.fileSystemApi?this.fileSystemApi:(this.fileSystemApi=new Be(this.channel),this.fileSystemApi)}get shell(){return L(this.isConnected,'Failed to access the Shell API: consumer is not connected. Did you forget to run "connect()"?'),this.shellApi?this.shellApi:(this.shellApi=new Ne(this.channel),this.shellApi)}get preview(){return L(this.isConnected,'Failed to access the Preview API: consumer is not connected. Did you forget to run "connect()"?'),this.previewApi?this.previewApi:(this.previewApi=new Ve(this.channel),this.previewApi)}},Je="INJECT_AND_INVOKE",Ye="PREVIEW_LOADED";function Ke(e,r){return E(this,void 0,void 0,function(){var t,n,s,i,o;return P(this,function(a){return t=e.contentWindow,N(t,"Failed to await preview iframe: no content window found"),n=9e4,s=20,i=0,[2,new Promise(function(c,l){var h=function(){var f=function(){clearTimeout(o),i=s,c(),e.removeEventListener("load",f)};if(i>=s){l(K("Could not able to connect to preview."));return}e.setAttribute("src",r),o=setTimeout(function(){h(),e.removeEventListener("load",f)},n),i=i+1,e.addEventListener("load",f)};e.addEventListener("error",function(){return l(new Error("Iframe error"))}),e.addEventListener("abort",function(){return l(new Error("Aborted"))}),h()})]})})}var Xe=function(e,r){e.style.border="0",e.style.width=r.width||"100%",e.style.height=r.height||"100%",e.style.overflow="hidden",e.allow="cross-origin-isolated"};function Qe(e){var r=e.scope,t=window.history.__proto__,n=[],s=0,i=function(c){parent.postMessage({type:"urlchange",url:c,back:s>0,forward:s<n.length-1,channelId:r.channelId},"*")};function o(c,l){n.splice(s+1),n.push({url:c,state:l}),s=n.length-1}Object.assign(window.history,{go:function(c){var l=s+c;if(l>=0&&l<=n.length-1){s=l;var h=n[s],f=h.url,v=h.state;t.replaceState.call(window.history,v,"",f);var w=document.location.href;i(w),window.dispatchEvent(new PopStateEvent("popstate",{state:v}))}},back:function(){window.history.go(-1)},forward:function(){window.history.go(1)},pushState:function(c,l,h){t.replaceState.call(window.history,c,l,h),o(h,c),i(document.location.href)},replaceState:function(c,l,h){t.replaceState.call(window.history,c,l,h),n[s]={state:c,url:h},i(document.location.href)}});function a(c){var l=c.data;l.type==="urlback"?history.back():l.type==="urlforward"?history.forward():l.type==="refresh"&&document.location.reload()}window.addEventListener("message",a)}function Ze(e){var r=e.scope,t=0;function n(){if(typeof window>"u")return 0;var a=document.body,c=document.documentElement;return Math.max(a.scrollHeight,a.offsetHeight,c.offsetHeight)}function s(){var a=n();t!==a&&window.parent.postMessage({type:"resize",height:a,codesandbox:!0,channelId:r.channelId},"*"),t=a}s();var i,o=new MutationObserver(function(){i===void 0&&(s(),i=setTimeout(function(){i=void 0},300))});o.observe(document,{attributes:!0,childList:!0,subtree:!0}),setInterval(s,300)}var et=[{code:Qe.toString(),id:"historyListener"},{code:"function consoleHook({ scope }) {"+ae+`
};`,id:"consoleHook"},{code:Ze.toString(),id:"watchResize"}],tt=function(e,r){et.forEach(function(t){var n,s=t.code,i=t.id,o={uid:i,type:Je,code:"exports.activate = ".concat(s),scope:{channelId:r}};(n=e.contentWindow)===null||n===void 0||n.postMessage(o,"*")})},ot=function(e){se(r,e);function r(t,n,s){s===void 0&&(s={});var i=e.call(this,t,n,A(A({},s),{bundlerURL:s.bundlerURL}))||this;return i._modulesCache=new Map,i.messageChannelId=le(),i._initPromise=null,i.emitter=new ue,i.manageIframes(t),i.emulator=new Ge({iframe:i.emulatorIframe,runtimeUrl:i.options.bundlerURL}),i.updateSandbox(n),i}return r.prototype._init=function(t){return E(this,void 0,void 0,function(){return P(this,function(n){switch(n.label){case 0:return[4,this.emulator.connect()];case 1:return n.sent(),[4,this.emulator.fs.init(t)];case 2:return n.sent(),[4,this.globalListeners()];case 3:return n.sent(),[2]}})})},r.prototype.compile=function(t){return E(this,void 0,void 0,function(){var n,s;return P(this,function(i){switch(i.label){case 0:return i.trys.push([0,5,,6]),this.status="initializing",this.dispatch({type:"start",firstLoad:!0}),this._initPromise||(this._initPromise=this._init(t)),[4,this._initPromise];case 1:return i.sent(),this.dispatch({type:"connected"}),[4,this.createShellProcessFromTask(t)];case 2:return n=i.sent().id,[4,this.createPreviewURLFromId(n)];case 3:return i.sent(),[4,this.setLocationURLIntoIFrame()];case 4:return i.sent(),this.dispatchDoneMessage(),[3,6];case 5:return s=i.sent(),this.dispatch({type:"action",action:"notification",notificationType:"error",title:z(s)}),this.dispatch({type:"done",compilatonError:!0}),[3,6];case 6:return[2]}})})},r.prototype.createShellProcessFromTask=function(t){return E(this,void 0,void 0,function(){var n,s,i=this;return P(this,function(o){switch(o.label){case 0:return n=U(t["/package.json"]),this.emulatorCommand=ce(n),this.emulatorShellProcess=this.emulator.shell.create(),[4,this.emulatorShellProcess.on("exit",function(a){i.dispatch({type:"action",action:"notification",notificationType:"error",title:K("Error: process.exit(".concat(a,") called."))})})];case 1:return o.sent(),[4,this.emulatorShellProcess.on("progress",function(a){var c,l;if(a.state==="command_running"||a.state==="starting_command"){i.dispatch({type:"shell/progress",data:A(A({},a),{command:[(c=i.emulatorCommand)===null||c===void 0?void 0:c[0],(l=i.emulatorCommand)===null||l===void 0?void 0:l[1].join(" ")].join(" ")})}),i.status="installing-dependencies";return}i.dispatch({type:"shell/progress",data:a})})];case 2:return o.sent(),this.emulatorShellProcess.stdout.on("data",function(a){i.dispatch({type:"stdout",payload:{data:a,type:"out"}})}),this.emulatorShellProcess.stderr.on("data",function(a){i.dispatch({type:"stdout",payload:{data:a,type:"err"}})}),[4,(s=this.emulatorShellProcess).runCommand.apply(s,this.emulatorCommand)];case 3:return[2,o.sent()]}})})},r.prototype.createPreviewURLFromId=function(t){var n;return E(this,void 0,void 0,function(){var s;return P(this,function(i){switch(i.label){case 0:return this.iframePreviewUrl=void 0,[4,this.emulator.preview.getByShellId(t)];case 1:return s=i.sent().url,this.iframePreviewUrl=s+((n=this.options.startRoute)!==null&&n!==void 0?n:""),[2]}})})},r.prototype.manageIframes=function(t){var n;if(typeof t=="string"){var s=document.querySelector(t);N(s,"The element '".concat(t,"' was not found")),this.iframe=document.createElement("iframe"),s==null||s.appendChild(this.iframe)}else this.iframe=t;Xe(this.iframe,this.options),N(this.iframe.parentNode,"The given iframe does not have a parent."),this.emulatorIframe=document.createElement("iframe"),this.emulatorIframe.classList.add("sp-bridge-frame"),(n=this.iframe.parentNode)===null||n===void 0||n.appendChild(this.emulatorIframe)},r.prototype.setLocationURLIntoIFrame=function(){return E(this,void 0,void 0,function(){return P(this,function(t){switch(t.label){case 0:return this.iframePreviewUrl?[4,Ke(this.iframe,this.iframePreviewUrl)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},r.prototype.dispatchDoneMessage=function(){this.status="done",this.dispatch({type:"done",compilatonError:!1}),this.iframePreviewUrl&&this.dispatch({type:"urlchange",url:this.iframePreviewUrl,back:!1,forward:!1})},r.prototype.globalListeners=function(){return E(this,void 0,void 0,function(){var t=this;return P(this,function(n){switch(n.label){case 0:return window.addEventListener("message",function(s){s.data.type===Ye&&tt(t.iframe,t.messageChannelId),s.data.type==="urlchange"&&s.data.channelId===t.messageChannelId?t.dispatch({type:"urlchange",url:s.data.url,back:s.data.back,forward:s.data.forward}):s.data.channelId===t.messageChannelId&&t.dispatch(s.data)}),[4,this.emulator.fs.watch(["*"],[".next","node_modules","build","dist","vendor",".config",".vuepress"],function(s){return E(t,void 0,void 0,function(){var i,o,a,c,l,h,f;return P(this,function(v){switch(v.label){case 0:return s?(i=s,o="newPath"in i?i.newPath:"path"in i?i.path:"",[4,this.emulator.fs.stat(o)]):[2];case 1:if(a=v.sent().type,a!=="file")return[2,null];v.label=2;case 2:switch(v.trys.push([2,10,,11]),c=i.type,c){case"change":return[3,3];case"create":return[3,3];case"remove":return[3,5];case"rename":return[3,6];case"close":return[3,8]}return[3,9];case 3:return[4,this.emulator.fs.readFile(i.path,"utf8")];case 4:return l=v.sent(),this.dispatch({type:"fs/change",path:i.path,content:l}),this._modulesCache.set(i.path,W(l)),[3,9];case 5:return this.dispatch({type:"fs/remove",path:i.path}),this._modulesCache.delete(i.path),[3,9];case 6:return this.dispatch({type:"fs/remove",path:i.oldPath}),this._modulesCache.delete(i.oldPath),[4,this.emulator.fs.readFile(i.newPath,"utf8")];case 7:return h=v.sent(),this.dispatch({type:"fs/change",path:i.newPath,content:h}),this._modulesCache.set(i.newPath,W(h)),[3,9];case 8:return[3,9];case 9:return[3,11];case 10:return f=v.sent(),this.dispatch({type:"action",action:"notification",notificationType:"error",title:z(f)}),[3,11];case 11:return[2]}})})})];case 1:return n.sent(),[2]}})})},r.prototype.restartShellProcess=function(){var t;return E(this,void 0,void 0,function(){return P(this,function(n){switch(n.label){case 0:return this.emulatorShellProcess&&this.emulatorCommand?(this.dispatch({type:"start",firstLoad:!0}),this.status="initializing",[4,this.emulatorShellProcess.kill()]):[3,3];case 1:return n.sent(),(t=this.iframe)===null||t===void 0||t.removeAttribute("attr"),this.emulator.fs.rm("/node_modules/.vite",{recursive:!0,force:!0}),[4,this.compile(Object.fromEntries(this._modulesCache))];case 2:n.sent(),n.label=3;case 3:return[2]}})})},r.prototype.updateSandbox=function(t){var n=this,s,i=de(t.files);if(((s=this.emulatorShellProcess)===null||s===void 0?void 0:s.state)==="running"){Object.entries(i).forEach(function(o){var a=o[0],c=o[1];(!n._modulesCache.get(a)||U(c)!==U(n._modulesCache.get(a)))&&n.emulator.fs.writeFile(a,c,{recursive:!0})});return}this.dispatch({codesandbox:!0,modules:i,template:t.template,type:"compile"}),Object.entries(i).forEach(function(o){var a=o[0],c=o[1];n._modulesCache.set(a,W(c))})},r.prototype.dispatch=function(t){var n,s;return E(this,void 0,void 0,function(){var i;return P(this,function(o){switch(o.label){case 0:switch(i=t.type,i){case"compile":return[3,1];case"refresh":return[3,2];case"urlback":return[3,4];case"urlforward":return[3,4];case"shell/restart":return[3,5];case"shell/openPreview":return[3,6]}return[3,7];case 1:return this.compile(t.modules),[3,8];case 2:return[4,this.setLocationURLIntoIFrame()];case 3:return o.sent(),[3,8];case 4:return(s=(n=this.iframe)===null||n===void 0?void 0:n.contentWindow)===null||s===void 0||s.postMessage(t,"*"),[3,8];case 5:return this.restartShellProcess(),[3,8];case 6:return window.open(this.iframePreviewUrl,"_blank"),[3,8];case 7:this.emitter.dispatch(t),o.label=8;case 8:return[2]}})})},r.prototype.listen=function(t){return this.emitter.listener(t)},r.prototype.destroy=function(){this.emulatorIframe.remove(),this.emitter.cleanup()},r}(oe);export{ot as SandpackNode};
