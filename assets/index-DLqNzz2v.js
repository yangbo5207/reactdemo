function I1(n,e){for(var s=0;s<e.length;s++){const r=e[s];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in n)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(n,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}})();function hh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var fh={exports:{}},Xl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F1=Symbol.for("react.transitional.element"),P1=Symbol.for("react.fragment");function xh(n,e,s){var r=null;if(s!==void 0&&(r=""+s),e.key!==void 0&&(r=""+e.key),"key"in e){s={};for(var a in e)a!=="key"&&(s[a]=e[a])}else s=e;return e=s.ref,{$$typeof:F1,type:n,key:r,ref:e!==void 0?e:null,props:s}}Xl.Fragment=P1;Xl.jsx=xh;Xl.jsxs=xh;fh.exports=Xl;var t=fh.exports,gh={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.transitional.element"),Q1=Symbol.for("react.portal"),J1=Symbol.for("react.fragment"),W1=Symbol.for("react.strict_mode"),K1=Symbol.for("react.profiler"),eg=Symbol.for("react.consumer"),ng=Symbol.for("react.context"),tg=Symbol.for("react.forward_ref"),sg=Symbol.for("react.suspense"),rg=Symbol.for("react.memo"),jh=Symbol.for("react.lazy"),Gd=Symbol.iterator;function ag(n){return n===null||typeof n!="object"?null:(n=Gd&&n[Gd]||n["@@iterator"],typeof n=="function"?n:null)}var vh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bh=Object.assign,yh={};function Ks(n,e,s){this.props=n,this.context=e,this.refs=yh,this.updater=s||vh}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ks.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Nh(){}Nh.prototype=Ks.prototype;function go(n,e,s){this.props=n,this.context=e,this.refs=yh,this.updater=s||vh}var jo=go.prototype=new Nh;jo.constructor=go;bh(jo,Ks.prototype);jo.isPureReactComponent=!0;var Yd=Array.isArray,fe={H:null,A:null,T:null},wh=Object.prototype.hasOwnProperty;function vo(n,e,s,r,a,l,i){return s=i.ref,{$$typeof:xo,type:n,key:e,ref:s!==void 0?s:null,props:i}}function lg(n,e){return vo(n.type,e,null,void 0,void 0,void 0,n.props)}function bo(n){return typeof n=="object"&&n!==null&&n.$$typeof===xo}function ig(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(s){return e[s]})}var Id=/\/+/g;function hi(n,e){return typeof n=="object"&&n!==null&&n.key!=null?ig(""+n.key):e.toString(36)}function Fd(){}function cg(n){switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:switch(typeof n.status=="string"?n.then(Fd,Fd):(n.status="pending",n.then(function(e){n.status==="pending"&&(n.status="fulfilled",n.value=e)},function(e){n.status==="pending"&&(n.status="rejected",n.reason=e)})),n.status){case"fulfilled":return n.value;case"rejected":throw n.reason}}throw n}function xs(n,e,s,r,a){var l=typeof n;(l==="undefined"||l==="boolean")&&(n=null);var i=!1;if(n===null)i=!0;else switch(l){case"bigint":case"string":case"number":i=!0;break;case"object":switch(n.$$typeof){case xo:case Q1:i=!0;break;case jh:return i=n._init,xs(i(n._payload),e,s,r,a)}}if(i)return a=a(n),i=r===""?"."+hi(n,0):r,Yd(a)?(s="",i!=null&&(s=i.replace(Id,"$&/")+"/"),xs(a,e,s,"",function(d){return d})):a!=null&&(bo(a)&&(a=lg(a,s+(!a.key||n&&n.key===a.key?"":(""+a.key).replace(Id,"$&/")+"/")+i)),e.push(a)),1;i=0;var c=r===""?".":r+":";if(Yd(n))for(var o=0;o<n.length;o++)r=n[o],l=c+hi(r,o),i+=xs(r,e,s,l,a);else if(o=ag(n),typeof o=="function")for(n=o.call(n),o=0;!(r=n.next()).done;)r=r.value,l=c+hi(r,o++),i+=xs(r,e,s,l,a);else if(l==="object"){if(typeof n.then=="function")return xs(cg(n),e,s,r,a);throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return i}function _a(n,e,s){if(n==null)return n;var r=[],a=0;return xs(n,r,"","",function(l){return e.call(s,l,a++)}),r}function og(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(s){(n._status===0||n._status===-1)&&(n._status=1,n._result=s)},function(s){(n._status===0||n._status===-1)&&(n._status=2,n._result=s)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Pd=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function dg(){}Z.Children={map:_a,forEach:function(n,e,s){_a(n,function(){e.apply(this,arguments)},s)},count:function(n){var e=0;return _a(n,function(){e++}),e},toArray:function(n){return _a(n,function(e){return e})||[]},only:function(n){if(!bo(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Z.Component=Ks;Z.Fragment=J1;Z.Profiler=K1;Z.PureComponent=go;Z.StrictMode=W1;Z.Suspense=sg;Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fe;Z.act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.cache=function(n){return function(){return n.apply(null,arguments)}};Z.cloneElement=function(n,e,s){if(n==null)throw Error("The argument must be a React element, but you passed "+n+".");var r=bh({},n.props),a=n.key,l=void 0;if(e!=null)for(i in e.ref!==void 0&&(l=void 0),e.key!==void 0&&(a=""+e.key),e)!wh.call(e,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&e.ref===void 0||(r[i]=e[i]);var i=arguments.length-2;if(i===1)r.children=s;else if(1<i){for(var c=Array(i),o=0;o<i;o++)c[o]=arguments[o+2];r.children=c}return vo(n.type,a,null,void 0,void 0,l,r)};Z.createContext=function(n){return n={$$typeof:ng,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null},n.Provider=n,n.Consumer={$$typeof:eg,_context:n},n};Z.createElement=function(n,e,s){var r,a={},l=null;if(e!=null)for(r in e.key!==void 0&&(l=""+e.key),e)wh.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(a[r]=e[r]);var i=arguments.length-2;if(i===1)a.children=s;else if(1<i){for(var c=Array(i),o=0;o<i;o++)c[o]=arguments[o+2];a.children=c}if(n&&n.defaultProps)for(r in i=n.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return vo(n,l,null,void 0,void 0,null,a)};Z.createRef=function(){return{current:null}};Z.forwardRef=function(n){return{$$typeof:tg,render:n}};Z.isValidElement=bo;Z.lazy=function(n){return{$$typeof:jh,_payload:{_status:-1,_result:n},_init:og}};Z.memo=function(n,e){return{$$typeof:rg,type:n,compare:e===void 0?null:e}};Z.startTransition=function(n){var e=fe.T,s=new Set;fe.T={_callbacks:s};var r=fe.T;try{var a=n();typeof a=="object"&&a!==null&&typeof a.then=="function"&&(s.forEach(function(l){return l(r,a)}),a.then(dg,Pd))}catch(l){Pd(l)}finally{fe.T=e}};Z.unstable_useCacheRefresh=function(){return fe.H.useCacheRefresh()};Z.use=function(n){return fe.H.use(n)};Z.useActionState=function(n,e,s){return fe.H.useActionState(n,e,s)};Z.useCallback=function(n,e){return fe.H.useCallback(n,e)};Z.useContext=function(n){return fe.H.useContext(n)};Z.useDebugValue=function(){};Z.useDeferredValue=function(n,e){return fe.H.useDeferredValue(n,e)};Z.useEffect=function(n,e){return fe.H.useEffect(n,e)};Z.useId=function(){return fe.H.useId()};Z.useImperativeHandle=function(n,e,s){return fe.H.useImperativeHandle(n,e,s)};Z.useInsertionEffect=function(n,e){return fe.H.useInsertionEffect(n,e)};Z.useLayoutEffect=function(n,e){return fe.H.useLayoutEffect(n,e)};Z.useMemo=function(n,e){return fe.H.useMemo(n,e)};Z.useOptimistic=function(n,e){return fe.H.useOptimistic(n,e)};Z.useReducer=function(n,e,s){return fe.H.useReducer(n,e,s)};Z.useRef=function(n){return fe.H.useRef(n)};Z.useState=function(n){return fe.H.useState(n)};Z.useSyncExternalStore=function(n,e,s){return fe.H.useSyncExternalStore(n,e,s)};Z.useTransition=function(){return fe.H.useTransition()};Z.version="19.0.0-rc-915b914b3a-20240515";gh.exports=Z;var u=gh.exports;const Pn=hh(u),ug=I1({__proto__:null,default:Pn},[u]);var Sh={exports:{}},Zl={},kh={exports:{}},Ch={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(A,O){var T=A.length;A.push(O);e:for(;0<T;){var G=T-1>>>1,J=A[G];if(0<a(J,O))A[G]=O,A[T]=J,T=G;else break e}}function s(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var O=A[0],T=A.pop();if(T!==O){A[0]=T;e:for(var G=0,J=A.length,Le=J>>>1;G<Le;){var Ve=2*(G+1)-1,S=A[Ve],M=Ve+1,H=A[M];if(0>a(S,T))M<J&&0>a(H,S)?(A[G]=H,A[M]=T,G=M):(A[G]=S,A[Ve]=T,G=Ve);else if(M<J&&0>a(H,T))A[G]=H,A[M]=T,G=M;else break e}}return O}function a(A,O){var T=A.sortIndex-O.sortIndex;return T!==0?T:A.id-O.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var i=Date,c=i.now();n.unstable_now=function(){return i.now()-c}}var o=[],d=[],m=1,h=null,p=3,j=!1,y=!1,b=!1,N=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;function g(A){for(var O=s(d);O!==null;){if(O.callback===null)r(d);else if(O.startTime<=A)r(d),O.sortIndex=O.expirationTime,e(o,O);else break;O=s(d)}}function v(A){if(b=!1,g(A),!y)if(s(o)!==null)y=!0,qe();else{var O=s(d);O!==null&&je(v,O.startTime-A)}}var k=!1,C=-1,$=5,R=-1;function P(){return!(n.unstable_now()-R<$)}function B(){if(k){var A=n.unstable_now();R=A;var O=!0;try{e:{y=!1,b&&(b=!1,x(C),C=-1),j=!0;var T=p;try{n:{for(g(A),h=s(o);h!==null&&!(h.expirationTime>A&&P());){var G=h.callback;if(typeof G=="function"){h.callback=null,p=h.priorityLevel;var J=G(h.expirationTime<=A);if(A=n.unstable_now(),typeof J=="function"){h.callback=J,g(A),O=!0;break n}h===s(o)&&r(o),g(A)}else r(o);h=s(o)}if(h!==null)O=!0;else{var Le=s(d);Le!==null&&je(v,Le.startTime-A),O=!1}}break e}finally{h=null,p=T,j=!1}O=void 0}}finally{O?ce():k=!1}}}var ce;if(typeof f=="function")ce=function(){f(B)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,sn=V.port2;V.port1.onmessage=B,ce=function(){sn.postMessage(null)}}else ce=function(){N(B,0)};function qe(){k||(k=!0,ce())}function je(A,O){C=N(function(){A(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(A){A.callback=null},n.unstable_continueExecution=function(){y||j||(y=!0,qe())},n.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<A?Math.floor(1e3/A):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return s(o)},n.unstable_next=function(A){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var T=p;p=O;try{return A()}finally{p=T}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(A,O){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var T=p;p=A;try{return O()}finally{p=T}},n.unstable_scheduleCallback=function(A,O,T){var G=n.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?G+T:G):T=G,A){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=T+J,A={id:m++,callback:O,priorityLevel:A,startTime:T,expirationTime:J,sortIndex:-1},T>G?(A.sortIndex=T,e(d,A),s(o)===null&&A===s(d)&&(b?(x(C),C=-1):b=!0,je(v,T-G))):(A.sortIndex=J,e(o,A),y||j||(y=!0,qe())),A},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(A){var O=p;return function(){var T=p;p=O;try{return A.apply(this,arguments)}finally{p=T}}}})(Ch);kh.exports=Ch;var mg=kh.exports,_h={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Ah(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)e+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ar=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function dt(){}var Ge={d:{f:dt,r:function(){throw Error(Ah(522))},D:dt,C:dt,L:dt,m:dt,X:dt,S:dt,M:dt},p:0,findDOMNode:null},pg=Symbol.for("react.portal");function hg(n,e,s){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pg,key:r==null?null:""+r,children:n,containerInfo:e,implementation:s}}function Gl(n,e){if(n==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ge;Fe.createPortal=function(n,e){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Ah(299));return hg(n,e,null,s)};Fe.flushSync=function(n){var e=Ar.T,s=Ge.p;try{if(Ar.T=null,Ge.p=2,n)return n()}finally{Ar.T=e,Ge.p=s,Ge.d.f()}};Fe.preconnect=function(n,e){typeof n=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Ge.d.C(n,e))};Fe.prefetchDNS=function(n){typeof n=="string"&&Ge.d.D(n)};Fe.preinit=function(n,e){if(typeof n=="string"&&e&&typeof e.as=="string"){var s=e.as,r=Gl(s,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,l=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;s==="style"?Ge.d.S(n,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:l}):s==="script"&&Ge.d.X(n,{crossOrigin:r,integrity:a,fetchPriority:l,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Fe.preinitModule=function(n,e){if(typeof n=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var s=Gl(e.as,e.crossOrigin);Ge.d.M(n,{crossOrigin:s,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Ge.d.M(n)};Fe.preload=function(n,e){if(typeof n=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var s=e.as,r=Gl(s,e.crossOrigin);Ge.d.L(n,s,{crossOrigin:r,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Fe.preloadModule=function(n,e){if(typeof n=="string")if(e){var s=Gl(e.as,e.crossOrigin);Ge.d.m(n,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:s,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Ge.d.m(n)};Fe.requestFormReset=function(n){Ge.d.r(n)};Fe.unstable_batchedUpdates=function(n,e){return n(e)};Fe.useFormState=function(n,e,s){return Ar.H.useFormState(n,e,s)};Fe.useFormStatus=function(){return Ar.H.useHostTransitionStatus()};Fe.version="19.0.0-rc-915b914b3a-20240515";function $h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($h)}catch(n){console.error(n)}}$h(),_h.exports=Fe;var ua=_h.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=mg,fg=u,xg=ua;function w(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)e+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Mh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var gg=Symbol.for("react.element"),Aa=Symbol.for("react.transitional.element"),$a=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),jg=Symbol.for("react.strict_mode"),Qd=Symbol.for("react.profiler"),vg=Symbol.for("react.provider"),bg=Symbol.for("react.consumer"),bt=Symbol.for("react.context"),Rh=Symbol.for("react.forward_ref"),Jd=Symbol.for("react.suspense"),Wd=Symbol.for("react.suspense_list"),Lh=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Eh=Symbol.for("react.offscreen"),yg=Symbol.for("react.memo_cache_sentinel"),Kd=Symbol.iterator;function ur(n){return n===null||typeof n!="object"?null:(n=Kd&&n[Kd]||n["@@iterator"],typeof n=="function"?n:null)}function er(n){var e=n,s=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(s=e.return),n=e.return;while(n)}return e.tag===3?s:null}function Th(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function eu(n){if(er(n)!==n)throw Error(w(188))}function Ng(n){var e=n.alternate;if(!e){if(e=er(n),e===null)throw Error(w(188));return e!==n?null:n}for(var s=n,r=e;;){var a=s.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){s=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===s)return eu(a),n;if(l===r)return eu(a),e;l=l.sibling}throw Error(w(188))}if(s.return!==r.return)s=a,r=l;else{for(var i=!1,c=a.child;c;){if(c===s){i=!0,s=a,r=l;break}if(c===r){i=!0,r=a,s=l;break}c=c.sibling}if(!i){for(c=l.child;c;){if(c===s){i=!0,s=l,r=a;break}if(c===r){i=!0,r=l,s=a;break}c=c.sibling}if(!i)throw Error(w(189))}}if(s.alternate!==r)throw Error(w(190))}if(s.tag!==3)throw Error(w(188));return s.stateNode.current===s?n:e}function Dh(n){return n=Ng(n),n!==null?Oh(n):null}function Oh(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=Oh(n),e!==null)return e;n=n.sibling}return null}var pe=Object.assign,Nr=Array.isArray,F=fg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=xg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$r={pending:!1,data:null,method:null,action:null},hc=[],bs=-1;function qn(n){return{current:n}}function Re(n){0>bs||(n.current=hc[bs],hc[bs]=null,bs--)}function me(n,e){bs++,hc[bs]=n.current,n.current=e}var Dn=qn(null),Zr=qn(null),kt=qn(null),fc=qn(null),ol={$$typeof:bt,Provider:null,Consumer:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dl(n,e){switch(me(kt,e),me(Zr,n),me(Dn,null),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?Ju(e):0;break;default:if(n=n===8?e.parentNode:e,e=n.tagName,n=n.namespaceURI)n=Ju(n),e=Qx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Re(Dn),me(Dn,e)}function qs(){Re(Dn),Re(Zr),Re(kt)}function xc(n){n.memoizedState!==null&&me(fc,n);var e=Dn.current,s=Qx(e,n.type);e!==s&&(me(Zr,n),me(Dn,s))}function ul(n){Zr.current===n&&(Re(Dn),Re(Zr)),fc.current===n&&(Re(fc),ol._currentValue=null)}var gc=Object.prototype.hasOwnProperty,yo=Ae.unstable_scheduleCallback,fi=Ae.unstable_cancelCallback,wg=Ae.unstable_shouldYield,Sg=Ae.unstable_requestPaint,On=Ae.unstable_now,kg=Ae.unstable_getCurrentPriorityLevel,No=Ae.unstable_ImmediatePriority,Bh=Ae.unstable_UserBlockingPriority,ml=Ae.unstable_NormalPriority,Cg=Ae.unstable_LowPriority,zh=Ae.unstable_IdlePriority,_g=Ae.log,Ag=Ae.unstable_setDisableYieldValue,ma=null,nn=null;function $g(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(ma,n,void 0,(n.current.flags&128)===128)}catch{}}function yt(n){if(typeof _g=="function"&&Ag(n),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(ma,n)}catch{}}var pn=Math.clz32?Math.clz32:Lg,Mg=Math.log,Rg=Math.LN2;function Lg(n){return n>>>=0,n===0?32:31-(Mg(n)/Rg|0)|0}var Ma=128,Ra=4194304;function wr(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function pl(n,e){var s=n.pendingLanes;if(s===0)return 0;var r=0,a=n.suspendedLanes;n=n.pingedLanes;var l=s&134217727;return l!==0?(s=l&~a,s!==0?r=wr(s):(n&=l,n!==0&&(r=wr(n)))):(s&=~a,s!==0?r=wr(s):n!==0&&(r=wr(n))),r===0?0:e!==0&&e!==r&&!(e&a)&&(a=r&-r,n=e&-e,a>=n||a===32&&(n&4194176)!==0)?e:r}function Eg(n,e){switch(n){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uh(n,e){return n.errorRecoveryDisabledLanes&e?0:(n=n.pendingLanes&-536870913,n!==0?n:n&536870912?536870912:0)}function Hh(){var n=Ma;return Ma<<=1,!(Ma&4194176)&&(Ma=128),n}function qh(){var n=Ra;return Ra<<=1,!(Ra&62914560)&&(Ra=4194304),n}function xi(n){for(var e=[],s=0;31>s;s++)e.push(n);return e}function Tg(n,e,s){var r=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0,e=n.entanglements;for(var a=n.expirationTimes,l=n.hiddenUpdates;0<r;){var i=31-pn(r),c=1<<i;e[i]=0,a[i]=-1;var o=l[i];if(o!==null)for(l[i]=null,i=0;i<o.length;i++){var d=o[i];d!==null&&(d.lane&=-536870913)}r&=~c}s!==0&&Vh(n,s,0)}function Vh(n,e,s){n.pendingLanes|=e,n.suspendedLanes&=~e;var r=31-pn(e);n.entangledLanes|=e,n.entanglements[r]=n.entanglements[r]|1073741824|s&4194218}function Xh(n,e){var s=n.entangledLanes|=e;for(n=n.entanglements;s;){var r=31-pn(s),a=1<<r;a&e|n[r]&e&&(n[r]|=e),s&=~a}}function Zh(n){return n&=-n,2<n?8<n?n&134217727?32:268435456:8:2}function Gh(){var n=ue.p;return n!==0?n:(n=window.event,n===void 0?32:a0(n.type))}function Dg(n,e){var s=ue.p;try{return ue.p=n,e()}finally{ue.p=s}}var Dt=Math.random().toString(36).slice(2),ze="__reactFiber$"+Dt,Ye="__reactProps$"+Dt,nr="__reactContainer$"+Dt,jc="__reactEvents$"+Dt,Og="__reactListeners$"+Dt,Bg="__reactHandles$"+Dt,nu="__reactResources$"+Dt,Gr="__reactMarker$"+Dt;function wo(n){delete n[ze],delete n[Ye],delete n[jc],delete n[Og],delete n[Bg]}function Zt(n){var e=n[ze];if(e)return e;for(var s=n.parentNode;s;){if(e=s[nr]||s[ze]){if(s=e.alternate,e.child!==null||s!==null&&s.child!==null)for(n=Ku(n);n!==null;){if(s=n[ze])return s;n=Ku(n)}return e}n=s,s=n.parentNode}return null}function tr(n){if(n=n[ze]||n[nr]){var e=n.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return n}return null}function Sr(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(w(33))}function Rs(n){var e=n[nu];return e||(e=n[nu]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Me(n){n[Gr]=!0}var Yh=new Set,Ih={};function ts(n,e){Vs(n,e),Vs(n+"Capture",e)}function Vs(n,e){for(Ih[n]=e,n=0;n<e.length;n++)Yh.add(e[n])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tu={},su={};function Ug(n){return gc.call(su,n)?!0:gc.call(tu,n)?!1:zg.test(n)?su[n]=!0:(tu[n]=!0,!1)}function vc(n,e,s){if(Ug(e))if(s===null)n.removeAttribute(e);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+s)}}function gi(n,e,s){if(s===null)n.removeAttribute(e);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+s)}}function Zn(n,e,s,r){if(r===null)n.removeAttribute(s);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(e,s,""+r)}}var ji;function kr(n){if(ji===void 0)try{throw Error()}catch(s){var e=s.stack.trim().match(/\n( *(at )?)/);ji=e&&e[1]||""}return`
`+ji+n}var vi=!1;function bi(n,e){if(!n||vi)return"";vi=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var r={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(j){var p=j}Reflect.construct(n,[],h)}else{try{h.call()}catch(j){p=j}n.call(h.prototype)}}else{try{throw Error()}catch(j){p=j}(h=n())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(j){if(j&&p&&typeof j.stack=="string")return[j.stack,p.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});try{var l=r.DetermineComponentFrameRoot(),i=l[0],c=l[1];if(i&&c){var o=i.split(`
`),d=c.split(`
`);for(a=r=0;r<o.length&&!o[r].includes("DetermineComponentFrameRoot");)r++;for(;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;if(r===o.length||a===d.length)for(r=o.length-1,a=d.length-1;1<=r&&0<=a&&o[r]!==d[a];)a--;for(;1<=r&&0<=a;r--,a--)if(o[r]!==d[a]){if(r!==1||a!==1)do if(r--,a--,0>a||o[r]!==d[a]){var m=`
`+o[r].replace(" at new "," at ");return n.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",n.displayName)),m}while(1<=r&&0<=a);break}}}finally{vi=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?kr(s):""}function Hg(n){switch(n.tag){case 26:case 27:case 5:return kr(n.type);case 16:return kr("Lazy");case 13:return kr("Suspense");case 19:return kr("SuspenseList");case 0:case 15:return n=bi(n.type,!1),n;case 11:return n=bi(n.type.render,!1),n;case 1:return n=bi(n.type,!0),n;default:return""}}function ru(n){try{var e="";do e+=Hg(n),n=n.return;while(n);return e}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function cn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fh(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qg(n){var e=Fh(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,l=s.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(n,e,{enumerable:s.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function hl(n){n._valueTracker||(n._valueTracker=qg(n))}function Ph(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var s=e.getValue(),r="";return n&&(r=Fh(n)?n.checked?"true":"false":n.value),n=r,n!==s?(e.setValue(n),!0):!1}function fl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Vg=/[\n"\\]/g;function un(n){return n.replace(Vg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bc(n,e,s,r,a,l,i,c){n.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?n.type=i:n.removeAttribute("type"),e!=null?i==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+cn(e)):n.value!==""+cn(e)&&(n.value=""+cn(e)):i!=="submit"&&i!=="reset"||n.removeAttribute("value"),e!=null?yc(n,i,cn(e)):s!=null?yc(n,i,cn(s)):r!=null&&n.removeAttribute("value"),a==null&&l!=null&&(n.defaultChecked=!!l),a!=null&&(n.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+cn(c):n.removeAttribute("name")}function Qh(n,e,s,r,a,l,i,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||s!=null){if(!(l!=="submit"&&l!=="reset"||e!=null))return;s=s!=null?""+cn(s):"",e=e!=null?""+cn(e):s,c||e===n.value||(n.value=e),n.defaultValue=e}r=r??a,r=typeof r!="function"&&typeof r!="symbol"&&!!r,n.checked=c?n.checked:!!r,n.defaultChecked=!!r,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.name=i)}function yc(n,e,s){e==="number"&&fl(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Ls(n,e,s,r){if(n=n.options,e){e={};for(var a=0;a<s.length;a++)e["$"+s[a]]=!0;for(s=0;s<n.length;s++)a=e.hasOwnProperty("$"+n[s].value),n[s].selected!==a&&(n[s].selected=a),a&&r&&(n[s].defaultSelected=!0)}else{for(s=""+cn(s),e=null,a=0;a<n.length;a++){if(n[a].value===s){n[a].selected=!0,r&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function Jh(n,e,s){if(e!=null&&(e=""+cn(e),e!==n.value&&(n.value=e),s==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=s!=null?""+cn(s):""}function Wh(n,e,s,r){if(e==null){if(r!=null){if(s!=null)throw Error(w(92));if(Nr(r)){if(1<r.length)throw Error(w(93));r=r[0]}s=r}s==null&&(s=""),e=s}s=cn(e),n.defaultValue=s,r=n.textContent,r===s&&r!==""&&r!==null&&(n.value=r)}function Xs(n,e){if(e){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=e;return}}n.textContent=e}var Xg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function au(n,e,s){var r=e.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?r?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":r?n.setProperty(e,s):typeof s!="number"||s===0||Xg.has(e)?e==="float"?n.cssFloat=s:n[e]=(""+s).trim():n[e]=s+"px"}function Kh(n,e,s){if(e!=null&&typeof e!="object")throw Error(w(62));if(n=n.style,s!=null){for(var r in s)!s.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="");for(var a in e)r=e[a],e.hasOwnProperty(a)&&s[a]!==r&&au(n,a,r)}else for(var l in e)e.hasOwnProperty(l)&&au(n,l,e[l])}function So(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pa(n){return Gg.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Nc=null;function ko(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ys=null,Es=null;function lu(n){var e=tr(n);if(e&&(n=e.stateNode)){var s=n[Ye]||null;e:switch(n=e.stateNode,e.type){case"input":if(bc(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),e=s.name,s.type==="radio"&&e!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+un(""+e)+'"][type="radio"]'),e=0;e<s.length;e++){var r=s[e];if(r!==n&&r.form===n.form){var a=r[Ye]||null;if(!a)throw Error(w(90));bc(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<s.length;e++)r=s[e],r.form===n.form&&Ph(r)}break e;case"textarea":Jh(n,s.value,s.defaultValue);break e;case"select":e=s.value,e!=null&&Ls(n,!!s.multiple,e,!1)}}}var yi=!1;function ef(n,e,s){if(yi)return n(e,s);yi=!0;try{var r=n(e);return r}finally{if(yi=!1,(ys!==null||Es!==null)&&(si(),ys&&(e=ys,n=Es,Es=ys=null,lu(e),n)))for(e=0;e<n.length;e++)lu(n[e])}}function Yr(n,e){var s=n.stateNode;if(s===null)return null;var r=s[Ye]||null;if(r===null)return null;s=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(w(231,e,typeof s));return s}var wc=!1;if(st)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){wc=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{wc=!1}var Nt=null,Co=null,Qa=null;function nf(){if(Qa)return Qa;var n,e=Co,s=e.length,r,a="value"in Nt?Nt.value:Nt.textContent,l=a.length;for(n=0;n<s&&e[n]===a[n];n++);var i=s-n;for(r=1;r<=i&&e[s-r]===a[l-r];r++);return Qa=a.slice(n,1<r?1-r:void 0)}function Ja(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function La(){return!0}function iu(){return!1}function tn(n){function e(s,r,a,l,i){this._reactName=s,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(s=n[c],this[c]=s?s(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?La:iu,this.isPropagationStopped=iu,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=tn(sr),pa=pe({},sr,{view:0,detail:0}),Yg=tn(pa),Ni,wi,pr,Il=pe({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_o,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==pr&&(pr&&n.type==="mousemove"?(Ni=n.screenX-pr.screenX,wi=n.screenY-pr.screenY):wi=Ni=0,pr=n),Ni)},movementY:function(n){return"movementY"in n?n.movementY:wi}}),cu=tn(Il),Ig=pe({},Il,{dataTransfer:0}),Fg=tn(Ig),Pg=pe({},pa,{relatedTarget:0}),Si=tn(Pg),Qg=pe({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=tn(Qg),Wg=pe({},sr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Kg=tn(Wg),ej=pe({},sr,{data:0}),ou=tn(ej),nj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rj(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=sj[n])?!!e[n]:!1}function _o(){return rj}var aj=pe({},pa,{key:function(n){if(n.key){var e=nj[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ja(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?tj[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_o,charCode:function(n){return n.type==="keypress"?Ja(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ja(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),lj=tn(aj),ij=pe({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),du=tn(ij),cj=pe({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_o}),oj=tn(cj),dj=pe({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uj=tn(dj),mj=pe({},Il,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),pj=tn(mj),hj=[9,13,27,32],Ao=st&&"CompositionEvent"in window,Mr=null;st&&"documentMode"in document&&(Mr=document.documentMode);var fj=st&&"TextEvent"in window&&!Mr,tf=st&&(!Ao||Mr&&8<Mr&&11>=Mr),uu=" ",mu=!1;function sf(n,e){switch(n){case"keyup":return hj.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ns=!1;function xj(n,e){switch(n){case"compositionend":return rf(e);case"keypress":return e.which!==32?null:(mu=!0,uu);case"textInput":return n=e.data,n===uu&&mu?null:n;default:return null}}function gj(n,e){if(Ns)return n==="compositionend"||!Ao&&sf(n,e)?(n=nf(),Qa=Co=Nt=null,Ns=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tf&&e.locale!=="ko"?null:e.data;default:return null}}var jj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pu(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!jj[n.type]:e==="textarea"}function af(n,e,s,r){ys?Es?Es.push(r):Es=[r]:ys=r,e=Rl(e,"onChange"),0<e.length&&(s=new Yl("onChange","change",null,s,r),n.push({event:s,listeners:e}))}var Rr=null,Ir=null;function vj(n){Ix(n,0)}function Fl(n){var e=Sr(n);if(Ph(e))return n}function hu(n,e){if(n==="change")return e}var lf=!1;if(st){var ki;if(st){var Ci="oninput"in document;if(!Ci){var fu=document.createElement("div");fu.setAttribute("oninput","return;"),Ci=typeof fu.oninput=="function"}ki=Ci}else ki=!1;lf=ki&&(!document.documentMode||9<document.documentMode)}function xu(){Rr&&(Rr.detachEvent("onpropertychange",cf),Ir=Rr=null)}function cf(n){if(n.propertyName==="value"&&Fl(Ir)){var e=[];af(e,Ir,n,ko(n)),ef(vj,e)}}function bj(n,e,s){n==="focusin"?(xu(),Rr=e,Ir=s,Rr.attachEvent("onpropertychange",cf)):n==="focusout"&&xu()}function yj(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fl(Ir)}function Nj(n,e){if(n==="click")return Fl(e)}function wj(n,e){if(n==="input"||n==="change")return Fl(e)}function Sj(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var hn=typeof Object.is=="function"?Object.is:Sj;function Fr(n,e){if(hn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var s=Object.keys(n),r=Object.keys(e);if(s.length!==r.length)return!1;for(r=0;r<s.length;r++){var a=s[r];if(!gc.call(e,a)||!hn(n[a],e[a]))return!1}return!0}function gu(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ju(n,e){var s=gu(n);n=0;for(var r;s;){if(s.nodeType===3){if(r=n+s.textContent.length,n<=e&&r>=e)return{node:s,offset:e-n};n=r}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=gu(s)}}function of(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?of(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function df(){for(var n=window,e=fl();e instanceof n.HTMLIFrameElement;){try{var s=typeof e.contentWindow.location.href=="string"}catch{s=!1}if(s)n=e.contentWindow;else break;e=fl(n.document)}return e}function $o(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function kj(n){var e=df(),s=n.focusedElem,r=n.selectionRange;if(e!==s&&s&&s.ownerDocument&&of(s.ownerDocument.documentElement,s)){if(r!==null&&$o(s)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in s)s.selectionStart=e,s.selectionEnd=Math.min(n,s.value.length);else if(n=(e=s.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var a=s.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!n.extend&&l>r&&(a=r,r=l,l=a),a=ju(s,l);var i=ju(s,r);a&&i&&(n.rangeCount!==1||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==i.node||n.focusOffset!==i.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),n.removeAllRanges(),l>r?(n.addRange(e),n.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),n.addRange(e)))}}for(e=[],n=s;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<e.length;s++)n=e[s],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Cj=st&&"documentMode"in document&&11>=document.documentMode,ws=null,Sc=null,Lr=null,kc=!1;function vu(n,e,s){var r=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;kc||ws==null||ws!==fl(r)||(r=ws,"selectionStart"in r&&$o(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Fr(Lr,r)||(Lr=r,r=Rl(Sc,"onSelect"),0<r.length&&(e=new Yl("onSelect","select",null,e,s),n.push({event:e,listeners:r}),e.target=ws)))}function Ht(n,e){var s={};return s[n.toLowerCase()]=e.toLowerCase(),s["Webkit"+n]="webkit"+e,s["Moz"+n]="moz"+e,s}var Ss={animationend:Ht("Animation","AnimationEnd"),animationiteration:Ht("Animation","AnimationIteration"),animationstart:Ht("Animation","AnimationStart"),transitionrun:Ht("Transition","TransitionRun"),transitionstart:Ht("Transition","TransitionStart"),transitioncancel:Ht("Transition","TransitionCancel"),transitionend:Ht("Transition","TransitionEnd")},_i={},uf={};st&&(uf=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function ss(n){if(_i[n])return _i[n];if(!Ss[n])return n;var e=Ss[n],s;for(s in e)if(e.hasOwnProperty(s)&&s in uf)return _i[n]=e[s];return n}var mf=ss("animationend"),pf=ss("animationiteration"),hf=ss("animationstart"),_j=ss("transitionrun"),Aj=ss("transitionstart"),$j=ss("transitioncancel"),ff=ss("transitionend"),xf=new Map,bu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function _n(n,e){xf.set(n,e),ts(e,[n])}var an=[],ks=0,Mo=0;function Pl(){for(var n=ks,e=Mo=ks=0;e<n;){var s=an[e];an[e++]=null;var r=an[e];an[e++]=null;var a=an[e];an[e++]=null;var l=an[e];if(an[e++]=null,r!==null&&a!==null){var i=r.pending;i===null?a.next=a:(a.next=i.next,i.next=a),r.pending=a}l!==0&&gf(s,a,l)}}function Ql(n,e,s,r){an[ks++]=n,an[ks++]=e,an[ks++]=s,an[ks++]=r,Mo|=r,n.lanes|=r,n=n.alternate,n!==null&&(n.lanes|=r)}function Ro(n,e,s,r){return Ql(n,e,s,r),xl(n)}function Et(n,e){return Ql(n,null,null,e),xl(n)}function gf(n,e,s){n.lanes|=s;var r=n.alternate;r!==null&&(r.lanes|=s);for(var a=!1,l=n.return;l!==null;)l.childLanes|=s,r=l.alternate,r!==null&&(r.childLanes|=s),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(a=!0)),n=l,l=l.return;a&&e!==null&&n.tag===3&&(l=n.stateNode,a=31-pn(s),l=l.hiddenUpdates,n=l[a],n===null?l[a]=[e]:n.push(e),e.lane=s|536870912)}function xl(n){ld();for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Cs={},yu=new WeakMap;function mn(n,e){if(typeof n=="object"&&n!==null){var s=yu.get(n);typeof s!="string"&&(s=ru(e),yu.set(n,s))}else s=ru(e);return{value:n,source:e,stack:s}}var _s=[],As=0,gl=null,jl=0,on=[],dn=0,It=null,Jn=1,Wn="";function Vt(n,e){_s[As++]=jl,_s[As++]=gl,gl=n,jl=e}function jf(n,e,s){on[dn++]=Jn,on[dn++]=Wn,on[dn++]=It,It=n;var r=Jn;n=Wn;var a=32-pn(r)-1;r&=~(1<<a),s+=1;var l=32-pn(e)+a;if(30<l){var i=a-a%5;l=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Jn=1<<32-pn(e)+a|s<<a|r,Wn=l+n}else Jn=1<<l|s<<a|r,Wn=n}function Lo(n){n.return!==null&&(Vt(n,1),jf(n,1,0))}function Eo(n){for(;n===gl;)gl=_s[--As],_s[As]=null,jl=_s[--As],_s[As]=null;for(;n===It;)It=on[--dn],on[dn]=null,Wn=on[--dn],on[dn]=null,Jn=on[--dn],on[dn]=null}var Ze=null,Te=null,ee=!1,bn=null,Ln=!1,Cc=Error(w(519));function Jt(n){var e=Error(w(418,""));throw Pr(mn(e,n)),Cc}function Nu(n){var e=n.stateNode,s=n.type,r=n.memoizedProps;switch(e[ze]=n,e[Ye]=r,s){case"dialog":ne("cancel",e),ne("close",e);break;case"iframe":case"object":case"embed":ne("load",e);break;case"video":case"audio":for(s=0;s<Kr.length;s++)ne(Kr[s],e);break;case"source":ne("error",e);break;case"img":case"image":case"link":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"input":ne("invalid",e),Qh(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),hl(e);break;case"select":ne("invalid",e);break;case"textarea":ne("invalid",e),Wh(e,r.value,r.defaultValue,r.children),hl(e)}s=r.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||e.textContent===""+s||r.suppressHydrationWarning===!0||Px(e.textContent,s)?(r.onScroll!=null&&ne("scroll",e),r.onScrollEnd!=null&&ne("scrollend",e),r.onClick!=null&&(e.onclick=ai),e=!0):e=!1,e||Jt(n)}function wu(n){for(Ze=n.return;Ze;)switch(Ze.tag){case 3:case 27:Ln=!0;return;case 5:case 13:Ln=!1;return;default:Ze=Ze.return}}function hr(n){if(n!==Ze)return!1;if(!ee)return wu(n),ee=!0,!1;var e=!1,s;if((s=n.tag!==3&&n.tag!==27)&&((s=n.tag===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Kc(n.type,n.memoizedProps)),s=!s),s&&(e=!0),e&&Te&&Jt(n),wu(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(w(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(e===0){Te=kn(n.nextSibling);break e}e--}else s!=="$"&&s!=="$!"&&s!=="$?"||e++;n=n.nextSibling}Te=null}}else Te=Ze?kn(n.stateNode.nextSibling):null;return!0}function ha(){Te=Ze=null,ee=!1}function Pr(n){bn===null?bn=[n]:bn.push(n)}var Wa=Error(w(460)),vf=Error(w(474)),_c={then:function(){}};function Su(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ea(){}function bf(n,e,s){switch(s=n[s],s===void 0?n.push(e):s!==e&&(e.then(Ea,Ea),e=s),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,n===Wa?Error(w(483)):n;default:if(typeof e.status=="string")e.then(Ea,Ea);else{if(n=ae,n!==null&&100<n.shellSuspendCounter)throw Error(w(482));n=e,n.status="pending",n.then(function(r){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=r}},function(r){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,n===Wa?Error(w(483)):n}throw Er=e,Wa}}var Er=null;function ku(){if(Er===null)throw Error(w(459));var n=Er;return Er=null,n}var Ts=null,Qr=0;function Ta(n){var e=Qr;return Qr+=1,Ts===null&&(Ts=[]),bf(Ts,n,e)}function fr(n,e,s,r){n=r.props.ref,s.ref=n!==void 0?n:null}function Da(n,e){throw e.$$typeof===gg?Error(w(525)):(n=Object.prototype.toString.call(e),Error(w(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function Cu(n){var e=n._init;return e(n._payload)}function yf(n){function e(x,f){if(n){var g=x.deletions;g===null?(x.deletions=[f],x.flags|=16):g.push(f)}}function s(x,f){if(!n)return null;for(;f!==null;)e(x,f),f=f.sibling;return null}function r(x){for(var f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function a(x,f){return x=_t(x,f),x.index=0,x.sibling=null,x}function l(x,f,g){return x.index=g,n?(g=x.alternate,g!==null?(g=g.index,g<f?(x.flags|=33554434,f):g):(x.flags|=33554434,f)):(x.flags|=1048576,f)}function i(x){return n&&x.alternate===null&&(x.flags|=33554434),x}function c(x,f,g,v){return f===null||f.tag!==6?(f=Hi(g,x.mode,v),f.return=x,f):(f=a(f,g),f.return=x,f)}function o(x,f,g,v){var k=g.type;return k===yr?m(x,f,g.props.children,v,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qt&&Cu(k)===f.type)?(v=a(f,g.props),fr(x,f,v,g),v.return=x,v):(v=sl(g.type,g.key,g.props,null,x.mode,v),fr(x,f,v,g),v.return=x,v)}function d(x,f,g,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=qi(g,x.mode,v),f.return=x,f):(f=a(f,g.children||[]),f.return=x,f)}function m(x,f,g,v,k){return f===null||f.tag!==7?(f=Pt(g,x.mode,v,k),f.return=x,f):(f=a(f,g),f.return=x,f)}function h(x,f,g){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Hi(""+f,x.mode,g),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Aa:return g=sl(f.type,f.key,f.props,null,x.mode,g),fr(x,null,g,f),g.return=x,g;case $a:return f=qi(f,x.mode,g),f.return=x,f;case qt:var v=f._init;return h(x,v(f._payload),g)}if(Nr(f)||ur(f))return f=Pt(f,x.mode,g,null),f.return=x,f;if(typeof f.then=="function")return h(x,Ta(f),g);if(f.$$typeof===bt)return h(x,za(x,f,g),g);Da(x,f)}return null}function p(x,f,g,v){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return k!==null?null:c(x,f,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Aa:return g.key===k?o(x,f,g,v):null;case $a:return g.key===k?d(x,f,g,v):null;case qt:return k=g._init,p(x,f,k(g._payload),v)}if(Nr(g)||ur(g))return k!==null?null:m(x,f,g,v,null);if(typeof g.then=="function")return p(x,f,Ta(g),v);if(g.$$typeof===bt)return p(x,f,za(x,g,v),v);Da(x,g)}return null}function j(x,f,g,v,k){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return x=x.get(g)||null,c(f,x,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Aa:return x=x.get(v.key===null?g:v.key)||null,o(f,x,v,k);case $a:return x=x.get(v.key===null?g:v.key)||null,d(f,x,v,k);case qt:var C=v._init;return j(x,f,g,C(v._payload),k)}if(Nr(v)||ur(v))return x=x.get(g)||null,m(f,x,v,k,null);if(typeof v.then=="function")return j(x,f,g,Ta(v),k);if(v.$$typeof===bt)return j(x,f,g,za(f,v,k),k);Da(f,v)}return null}function y(x,f,g,v){for(var k=null,C=null,$=f,R=f=0,P=null;$!==null&&R<g.length;R++){$.index>R?(P=$,$=null):P=$.sibling;var B=p(x,$,g[R],v);if(B===null){$===null&&($=P);break}n&&$&&B.alternate===null&&e(x,$),f=l(B,f,R),C===null?k=B:C.sibling=B,C=B,$=P}if(R===g.length)return s(x,$),ee&&Vt(x,R),k;if($===null){for(;R<g.length;R++)$=h(x,g[R],v),$!==null&&(f=l($,f,R),C===null?k=$:C.sibling=$,C=$);return ee&&Vt(x,R),k}for($=r($);R<g.length;R++)P=j($,x,R,g[R],v),P!==null&&(n&&P.alternate!==null&&$.delete(P.key===null?R:P.key),f=l(P,f,R),C===null?k=P:C.sibling=P,C=P);return n&&$.forEach(function(ce){return e(x,ce)}),ee&&Vt(x,R),k}function b(x,f,g,v){if(g==null)throw Error(w(151));for(var k=null,C=null,$=f,R=f=0,P=null,B=g.next();$!==null&&!B.done;R++,B=g.next(),null){$.index>R?(P=$,$=null):P=$.sibling;var ce=p(x,$,B.value,v);if(ce===null){$===null&&($=P);break}n&&$&&ce.alternate===null&&e(x,$),f=l(ce,f,R),C===null?k=ce:C.sibling=ce,C=ce,$=P}if(B.done)return s(x,$),ee&&Vt(x,R),k;if($===null){for(;!B.done;R++,B=g.next(),null)B=h(x,B.value,v),B!==null&&(f=l(B,f,R),C===null?k=B:C.sibling=B,C=B);return ee&&Vt(x,R),k}for($=r($);!B.done;R++,B=g.next(),null)B=j($,x,R,B.value,v),B!==null&&(n&&B.alternate!==null&&$.delete(B.key===null?R:B.key),f=l(B,f,R),C===null?k=B:C.sibling=B,C=B);return n&&$.forEach(function(V){return e(x,V)}),ee&&Vt(x,R),k}function N(x,f,g,v){if(typeof g=="object"&&g!==null&&g.type===yr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Aa:e:{for(var k=g.key,C=f;C!==null;){if(C.key===k){if(k=g.type,k===yr){if(C.tag===7){s(x,C.sibling),f=a(C,g.props.children),f.return=x,x=f;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qt&&Cu(k)===C.type){s(x,C.sibling),f=a(C,g.props),fr(x,C,f,g),f.return=x,x=f;break e}s(x,C);break}else e(x,C);C=C.sibling}g.type===yr?(f=Pt(g.props.children,x.mode,v,g.key),f.return=x,x=f):(v=sl(g.type,g.key,g.props,null,x.mode,v),fr(x,f,v,g),v.return=x,x=v)}return i(x);case $a:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){s(x,f.sibling),f=a(f,g.children||[]),f.return=x,x=f;break e}else{s(x,f);break}else e(x,f);f=f.sibling}f=qi(g,x.mode,v),f.return=x,x=f}return i(x);case qt:return C=g._init,N(x,f,C(g._payload),v)}if(Nr(g))return y(x,f,g,v);if(ur(g)){if(C=ur(g),typeof C!="function")throw Error(w(150));return g=C.call(g),b(x,f,g,v)}if(typeof g.then=="function")return N(x,f,Ta(g),v);if(g.$$typeof===bt)return N(x,f,za(x,g,v),v);Da(x,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,f!==null&&f.tag===6?(s(x,f.sibling),f=a(f,g),f.return=x,x=f):(s(x,f),f=Hi(g,x.mode,v),f.return=x,x=f),i(x)):s(x,f)}return function(x,f,g,v){return Qr=0,x=N(x,f,g,v),Ts=null,x}}var Wt=yf(!0),Nf=yf(!1),Zs=qn(null),vl=qn(0);function _u(n,e){n=at,me(vl,n),me(Zs,e),at=n|e.baseLanes}function Ac(){me(vl,at),me(Zs,Zs.current)}function To(){at=vl.current,Re(Zs),Re(vl)}var zn=qn(null),Bn=null;function xt(n){var e=n.alternate;me(_e,_e.current&1),me(zn,n),Bn===null&&(e===null||Zs.current!==null||e.memoizedState!==null)&&(Bn=n)}function wf(n){if(n.tag===22){if(me(_e,_e.current),me(zn,n),Bn===null){var e=n.alternate;e!==null&&e.memoizedState!==null&&(Bn=n)}}else gt()}function gt(){me(_e,_e.current),me(zn,zn.current)}function Kn(n){Re(zn),Bn===n&&(Bn=null),Re(_e)}var _e=qn(0);function bl(n){for(var e=n;e!==null;){if(e.tag===13){var s=e.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mj=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(s,r){n.push(r)}};this.abort=function(){e.aborted=!0,n.forEach(function(s){return s()})}},Rj=Ae.unstable_scheduleCallback,Lj=Ae.unstable_NormalPriority,Ce={$$typeof:bt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Do(){return{controller:new Mj,data:new Map,refCount:0}}function fa(n){n.refCount--,n.refCount===0&&Rj(Lj,function(){n.controller.abort()})}var Tr=null,$c=0,Gs=0,Ds=null;function Ej(n,e){if(Tr===null){var s=Tr=[];$c=0,Gs=id(),Ds={status:"pending",value:void 0,then:function(r){s.push(r)}}}return $c++,e.then(Au,Au),e}function Au(){if(Tr!==null&&--$c===0){Ds!==null&&(Ds.status="fulfilled");var n=Tr;Tr=null,Gs=0,Ds=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Tj(n,e){var s=[],r={status:"pending",value:null,reason:null,then:function(a){s.push(a)}};return n.then(function(){r.status="fulfilled",r.value=e;for(var a=0;a<s.length;a++)(0,s[a])(e)},function(a){for(r.status="rejected",r.reason=a,a=0;a<s.length;a++)(0,s[a])(void 0)}),r}function Oo(){var n=F.T;return n!==null&&n._callbacks.add(Dj),n}function Dj(n,e){Ej(n,e)}function Sf(n,e){n._callbacks.forEach(function(s){return s(n,e)})}var Ft=qn(null);function Bo(){var n=Ft.current;return n!==null?n:ae.pooledCache}function Ka(n,e){e===null?me(Ft,Ft.current):me(Ft,e.pool)}function kf(){var n=Bo();return n===null?null:{parent:Ce._currentValue,pool:n}}var Tt=0,X=null,re=null,Se=null,yl=!1,Os=!1,Kt=!1,Nl=0,Jr=0,Bs=null,Oj=0;function ve(){throw Error(w(321))}function zo(n,e){if(e===null)return!1;for(var s=0;s<e.length&&s<n.length;s++)if(!hn(n[s],e[s]))return!1;return!0}function Uo(n,e,s,r,a,l){return Tt=l,X=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,F.H=n===null||n.memoizedState===null?rs:as,Kt=!1,n=s(r,a),Kt=!1,Os&&(n=_f(e,s,r,a)),Cf(),n}function Cf(){F.H=Un;var n=re!==null&&re.next!==null;if(Tt=0,Se=re=X=null,yl=!1,Jr=0,Bs=null,n)throw Error(w(300))}function _f(n,e,s,r){X=n;var a=0;do{if(Os&&(Bs=null),Jr=0,Os=!1,25<=a)throw Error(w(301));a+=1,Se=re=null,n.updateQueue=null,F.H=ls;var l=e(s,r)}while(Os);return l}function Bj(){var n=F.H,e=n.useState()[0];return e=typeof e.then=="function"?xa(e):e,n=n.useState()[0],(re!==null?re.memoizedState:null)!==n&&(X.flags|=1024),e}function Ho(){var n=Nl!==0;return Nl=0,n}function qo(n,e,s){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~s}function Vo(n){if(yl){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}yl=!1}Tt=0,Se=re=X=null,Os=!1,Jr=Nl=0,Bs=null}function Qe(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?X.memoizedState=Se=n:Se=Se.next=n,Se}function ke(){if(re===null){var n=X.alternate;n=n!==null?n.memoizedState:null}else n=re.next;var e=Se===null?X.memoizedState:Se.next;if(e!==null)Se=e,re=n;else{if(n===null)throw X.alternate===null?Error(w(467)):Error(w(310));re=n,n={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Se===null?X.memoizedState=Se=n:Se=Se.next=n}return Se}var Jl;Jl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function xa(n){var e=Jr;return Jr+=1,Bs===null&&(Bs=[]),n=bf(Bs,n,e),X.alternate===null&&(Se===null?X.memoizedState===null:Se.next===null)&&(F.H=rs),n}function Wl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return xa(n);if(n.$$typeof===bt)return Ue(n)}throw Error(w(438,String(n)))}function Xo(n){var e=null,s=X.updateQueue;if(s!==null&&(e=s.memoCache),e==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),s===null&&(s=Jl(),X.updateQueue=s),s.memoCache=e,s=e.data[e.index],s===void 0)for(s=e.data[e.index]=Array(n),r=0;r<n;r++)s[r]=yg;return e.index++,s}function rt(n,e){return typeof e=="function"?e(n):e}function el(n){var e=ke();return Zo(e,re,n)}function Zo(n,e,s){var r=n.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=s;var a=n.baseQueue,l=r.pending;if(l!==null){if(a!==null){var i=a.next;a.next=l.next,l.next=i}e.baseQueue=a=l,r.pending=null}if(l=n.baseState,a===null)n.memoizedState=l;else{e=a.next;var c=i=null,o=null,d=e,m=!1;do{var h=d.lane&-536870913;if(h!==d.lane?(W&h)===h:(Tt&h)===h){var p=d.revertLane;if(p===0)o!==null&&(o=o.next={lane:0,revertLane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),h===Gs&&(m=!0);else if((Tt&p)===p){d=d.next,p===Gs&&(m=!0);continue}else h={lane:0,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(c=o=h,i=l):o=o.next=h,X.lanes|=p,lt|=p;h=d.action,Kt&&s(l,h),l=d.hasEagerState?d.eagerState:s(l,h)}else p={lane:h,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(c=o=p,i=l):o=o.next=p,X.lanes|=h,lt|=h;d=d.next}while(d!==null&&d!==e);if(o===null?i=l:o.next=c,!hn(l,n.memoizedState)&&(De=!0,m&&(s=Ds,s!==null)))throw s;n.memoizedState=l,n.baseState=i,n.baseQueue=o,r.lastRenderedState=l}return a===null&&(r.lanes=0),[n.memoizedState,r.dispatch]}function Ai(n){var e=ke(),s=e.queue;if(s===null)throw Error(w(311));s.lastRenderedReducer=n;var r=s.dispatch,a=s.pending,l=e.memoizedState;if(a!==null){s.pending=null;var i=a=a.next;do l=n(l,i.action),i=i.next;while(i!==a);hn(l,e.memoizedState)||(De=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),s.lastRenderedState=l}return[l,r]}function Af(n,e,s){var r=X,a=ke(),l=ee;if(l){if(s===void 0)throw Error(w(407));s=s()}else s=e();var i=!hn((re||a).memoizedState,s);if(i&&(a.memoizedState=s,De=!0),a=a.queue,Go(Rf.bind(null,r,a,n),[n]),a.getSnapshot!==e||i||Se!==null&&Se.memoizedState.tag&1){if(r.flags|=2048,Ys(9,Mf.bind(null,r,a,s,e),{destroy:void 0},null),ae===null)throw Error(w(349));l||Tt&60||$f(r,e,s)}return s}function $f(n,e,s){n.flags|=16384,n={getSnapshot:e,value:s},e=X.updateQueue,e===null?(e=Jl(),X.updateQueue=e,e.stores=[n]):(s=e.stores,s===null?e.stores=[n]:s.push(n))}function Mf(n,e,s,r){e.value=s,e.getSnapshot=r,Lf(e)&&Ef(n)}function Rf(n,e,s){return s(function(){Lf(e)&&Ef(n)})}function Lf(n){var e=n.getSnapshot;n=n.value;try{var s=e();return!hn(n,s)}catch{return!0}}function Ef(n){var e=Et(n,2);e!==null&&Ie(e,n,2)}function Mc(n){var e=Qe();if(typeof n=="function"){var s=n;n=s(),Kt&&(yt(!0),s(),yt(!1))}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rt,lastRenderedState:n},e}function Tf(n,e,s,r){return n.baseState=s,Zo(n,re,typeof r=="function"?r:rt)}function zj(n,e,s,r,a){if(ei(n))throw Error(w(485));n=e.pending,n===null?(n={payload:a,next:null},n.next=e.pending=n,Df(e,s,r,a)):e.pending=n.next={payload:a,next:n.next}}function Df(n,e,s,r){var a=n.action,l=n.state,i=F.T,c={_callbacks:new Set};F.T=c,e(!0);try{var o=a(l,r);o!==null&&typeof o=="object"&&typeof o.then=="function"?(Sf(c,o),o.then(function(d){n.state=d,Oa(n,e,s)},function(){return Oa(n,e,s)}),s(o)):(s(o),n.state=o,Oa(n,e,s))}catch(d){s({then:function(){},status:"rejected",reason:d}),Oa(n,e,s)}finally{F.T=i}}function Oa(n,e,s){var r=n.pending;if(r!==null){var a=r.next;a===r?n.pending=null:(a=a.next,r.next=a,Df(n,e,s,a.payload))}}function Of(n,e){return e}function Bf(n,e){if(ee){var s=ae.formState;if(s!==null){e:{var r=X;if(ee){if(Te){n:{for(var a=Te,l=Ln;a.nodeType!==8;){if(!l){a=null;break n}if(a=kn(a.nextSibling),a===null){a=null;break n}}l=a.data,a=l==="F!"||l==="F"?a:null}if(a){Te=kn(a.nextSibling),r=a.data==="F!";break e}}Jt(r)}r=!1}r&&(e=s[0])}}return s=Qe(),s.memoizedState=s.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Of,lastRenderedState:e},s.queue=r,s=zs.bind(null,X,r),r.dispatch=s,r=Mc(!1),l=Po.bind(null,X,!1,r.queue),r=Qe(),a={state:e,dispatch:null,action:n,pending:null},r.queue=a,s=zj.bind(null,X,a,l,s),a.dispatch=s,r.memoizedState=n,[e,s,!1]}function zf(n){var e=ke();return Uf(e,re,n)}function Uf(n,e,s){e=Zo(n,e,Of)[0],n=el(rt)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?xa(e):e;var r=ke(),a=r.queue,l=a.dispatch;return s!==r.memoizedState&&(X.flags|=2048,Ys(9,Uj.bind(null,a,s),{destroy:void 0},null)),[e,l,n]}function Uj(n,e){n.action=e}function Hf(n){var e=ke(),s=re;if(s!==null)return Uf(e,s,n);ke(),e=e.memoizedState,s=ke();var r=s.queue.dispatch;return s.memoizedState=n,[e,r,!1]}function Ys(n,e,s,r){return n={tag:n,create:e,inst:s,deps:r,next:null},e=X.updateQueue,e===null?(e=Jl(),X.updateQueue=e,e.lastEffect=n.next=n):(s=e.lastEffect,s===null?e.lastEffect=n.next=n:(r=s.next,s.next=n,n.next=r,e.lastEffect=n)),n}function qf(){return ke().memoizedState}function nl(n,e,s,r){var a=Qe();X.flags|=n,a.memoizedState=Ys(1|e,s,{destroy:void 0},r===void 0?null:r)}function Kl(n,e,s,r){var a=ke();r=r===void 0?null:r;var l=a.memoizedState.inst;re!==null&&r!==null&&zo(r,re.memoizedState.deps)?a.memoizedState=Ys(e,s,l,r):(X.flags|=n,a.memoizedState=Ys(1|e,s,l,r))}function $u(n,e){nl(8390656,8,n,e)}function Go(n,e){Kl(2048,8,n,e)}function Vf(n,e){return Kl(4,2,n,e)}function Xf(n,e){return Kl(4,4,n,e)}function Zf(n,e){if(typeof e=="function"){n=n();var s=e(n);return function(){typeof s=="function"?s():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Gf(n,e,s){s=s!=null?s.concat([n]):null,Kl(4,4,Zf.bind(null,e,n),s)}function Yo(){}function Yf(n,e){var s=ke();e=e===void 0?null:e;var r=s.memoizedState;return e!==null&&zo(e,r[1])?r[0]:(s.memoizedState=[n,e],n)}function If(n,e){var s=ke();e=e===void 0?null:e;var r=s.memoizedState;return e!==null&&zo(e,r[1])?r[0]:(r=n(),Kt&&(yt(!0),n(),yt(!1)),s.memoizedState=[r,e],r)}function Io(n,e,s){return s===void 0||Tt&1073741824?n.memoizedState=e:(n.memoizedState=s,n=Ox(),X.lanes|=n,lt|=n,s)}function Ff(n,e,s,r){return hn(s,e)?s:Zs.current!==null?(n=Io(n,s,r),hn(n,e)||(De=!0),n):Tt&42?(n=Ox(),X.lanes|=n,lt|=n,e):(De=!0,n.memoizedState=s)}function Pf(n,e,s,r,a){var l=ue.p;ue.p=l!==0&&8>l?l:8;var i=F.T,c={_callbacks:new Set};F.T=c,Po(n,!1,e,s);try{var o=a();if(o!==null&&typeof o=="object"&&typeof o.then=="function"){Sf(c,o);var d=Tj(o,r);zs(n,e,d)}else zs(n,e,r)}catch(m){zs(n,e,{then:function(){},status:"rejected",reason:m})}finally{ue.p=l,F.T=i}}function Hj(){}function Rc(n,e,s,r){if(n.tag!==5)throw Error(w(476));var a=Qf(n).queue;Pf(n,a,e,$r,s===null?Hj:function(){return Jf(n),s(r)})}function Qf(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:$r,baseState:$r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rt,lastRenderedState:$r},next:null};var s={};return e.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rt,lastRenderedState:s},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Jf(n){Oo();var e=Qf(n).next.queue;zs(n,e,{})}function Fo(){var n=Ue(ol);return n!==null?n:$r}function Wf(){return ke().memoizedState}function Kf(){return ke().memoizedState}function qj(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var s=tt();n=nt(s);var r=Ct(e,n,s);r!==null&&(Ie(r,e,s),Or(r,e,s)),e={cache:Do()},n.payload=e;return}e=e.return}}function Vj(n,e,s){var r=tt();s={lane:r,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ei(n)?ex(e,s):(s=Ro(n,e,s,r),s!==null&&(Ie(s,n,r),nx(s,e,r)))}function zs(n,e,s){var r=tt(),a={lane:r,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ei(n))ex(e,a);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var i=e.lastRenderedState,c=l(i,s);if(a.hasEagerState=!0,a.eagerState=c,hn(c,i)){Ql(n,e,a,0),ae===null&&Pl();return}}catch{}finally{}s=Ro(n,e,a,r),s!==null&&(Ie(s,n,r),nx(s,e,r))}}function Po(n,e,s,r){if(Oo(),r={lane:2,revertLane:id(),action:r,hasEagerState:!1,eagerState:null,next:null},ei(n)){if(e)throw Error(w(479))}else e=Ro(n,s,r,2),e!==null&&Ie(e,n,2)}function ei(n){var e=n.alternate;return n===X||e!==null&&e===X}function ex(n,e){Os=yl=!0;var s=n.pending;s===null?e.next=e:(e.next=s.next,s.next=e),n.pending=e}function nx(n,e,s){if(s&4194176){var r=e.lanes;r&=n.pendingLanes,s|=r,e.lanes=s,Xh(n,s)}}var Un={readContext:Ue,use:Wl,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve};Un.useCacheRefresh=ve;Un.useMemoCache=ve;Un.useHostTransitionStatus=ve;Un.useFormState=ve;Un.useActionState=ve;Un.useOptimistic=ve;var rs={readContext:Ue,use:Wl,useCallback:function(n,e){return Qe().memoizedState=[n,e===void 0?null:e],n},useContext:Ue,useEffect:$u,useImperativeHandle:function(n,e,s){s=s!=null?s.concat([n]):null,nl(4194308,4,Zf.bind(null,e,n),s)},useLayoutEffect:function(n,e){return nl(4194308,4,n,e)},useInsertionEffect:function(n,e){nl(4,2,n,e)},useMemo:function(n,e){var s=Qe();e=e===void 0?null:e;var r=n();return Kt&&(yt(!0),n(),yt(!1)),s.memoizedState=[r,e],r},useReducer:function(n,e,s){var r=Qe();if(s!==void 0){var a=s(e);Kt&&(yt(!0),s(e),yt(!1))}else a=e;return r.memoizedState=r.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},r.queue=n,n=n.dispatch=Vj.bind(null,X,n),[r.memoizedState,n]},useRef:function(n){var e=Qe();return n={current:n},e.memoizedState=n},useState:function(n){n=Mc(n);var e=n.queue,s=zs.bind(null,X,e);return e.dispatch=s,[n.memoizedState,s]},useDebugValue:Yo,useDeferredValue:function(n,e){var s=Qe();return Io(s,n,e)},useTransition:function(){var n=Mc(!1);return n=Pf.bind(null,X,n.queue,!0,!1),Qe().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,s){var r=X,a=Qe();if(ee){if(s===void 0)throw Error(w(407));s=s()}else{if(s=e(),ae===null)throw Error(w(349));W&60||$f(r,e,s)}a.memoizedState=s;var l={value:s,getSnapshot:e};return a.queue=l,$u(Rf.bind(null,r,l,n),[n]),r.flags|=2048,Ys(9,Mf.bind(null,r,l,s,e),{destroy:void 0},null),s},useId:function(){var n=Qe(),e=ae.identifierPrefix;if(ee){var s=Wn,r=Jn;s=(r&~(1<<32-pn(r)-1)).toString(32)+s,e=":"+e+"R"+s,s=Nl++,0<s&&(e+="H"+s.toString(32)),e+=":"}else s=Oj++,e=":"+e+"r"+s.toString(32)+":";return n.memoizedState=e},useCacheRefresh:function(){return Qe().memoizedState=qj.bind(null,X)}};rs.useMemoCache=Xo;rs.useHostTransitionStatus=Fo;rs.useFormState=Bf;rs.useActionState=Bf;rs.useOptimistic=function(n){var e=Qe();e.memoizedState=e.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=s,e=Po.bind(null,X,!0,s),s.dispatch=e,[n,e]};var as={readContext:Ue,use:Wl,useCallback:Yf,useContext:Ue,useEffect:Go,useImperativeHandle:Gf,useInsertionEffect:Vf,useLayoutEffect:Xf,useMemo:If,useReducer:el,useRef:qf,useState:function(){return el(rt)},useDebugValue:Yo,useDeferredValue:function(n,e){var s=ke();return Ff(s,re.memoizedState,n,e)},useTransition:function(){var n=el(rt)[0],e=ke().memoizedState;return[typeof n=="boolean"?n:xa(n),e]},useSyncExternalStore:Af,useId:Wf};as.useCacheRefresh=Kf;as.useMemoCache=Xo;as.useHostTransitionStatus=Fo;as.useFormState=zf;as.useActionState=zf;as.useOptimistic=function(n,e){var s=ke();return Tf(s,re,n,e)};var ls={readContext:Ue,use:Wl,useCallback:Yf,useContext:Ue,useEffect:Go,useImperativeHandle:Gf,useInsertionEffect:Vf,useLayoutEffect:Xf,useMemo:If,useReducer:Ai,useRef:qf,useState:function(){return Ai(rt)},useDebugValue:Yo,useDeferredValue:function(n,e){var s=ke();return re===null?Io(s,n,e):Ff(s,re.memoizedState,n,e)},useTransition:function(){var n=Ai(rt)[0],e=ke().memoizedState;return[typeof n=="boolean"?n:xa(n),e]},useSyncExternalStore:Af,useId:Wf};ls.useCacheRefresh=Kf;ls.useMemoCache=Xo;ls.useHostTransitionStatus=Fo;ls.useFormState=Hf;ls.useActionState=Hf;ls.useOptimistic=function(n,e){var s=ke();return re!==null?Tf(s,re,n,e):(s.baseState=n,[n,s.queue.dispatch])};var wl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function tx(n){wl(n)}function sx(n){console.error(n)}function rx(n){wl(n)}function Sl(n,e){try{var s=n.onUncaughtError;s(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Mu(n,e,s){try{var r=n.onCaughtError;r(s.value,{componentStack:s.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Lc(n,e,s){return s=nt(s),s.tag=3,s.payload={element:null},s.callback=function(){Sl(n,e)},s}function ax(n){return n=nt(n),n.tag=3,n}function lx(n,e,s,r){var a=s.type.getDerivedStateFromError;if(typeof a=="function"){var l=r.value;n.payload=function(){return a(l)},n.callback=function(){Mu(e,s,r)}}var i=s.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Mu(e,s,r),typeof a!="function"&&(At===null?At=new Set([this]):At.add(this));var c=r.stack;this.componentDidCatch(r.value,{componentStack:c!==null?c:""})})}function Xj(n,e,s,r,a){if(s.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=zn.current,s!==null){switch(s.tag){case 13:return Bn===null?Ic():s.alternate===null&&ge===0&&(ge=3),s.flags&=-257,s.flags|=65536,s.lanes=a,r===_c?s.flags|=16384:(e=s.updateQueue,e===null?s.updateQueue=new Set([r]):e.add(r),Vi(n,r,a)),!1;case 22:return s.flags|=65536,r===_c?s.flags|=16384:(e=s.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},s.updateQueue=e):(s=e.retryQueue,s===null?e.retryQueue=new Set([r]):s.add(r)),Vi(n,r,a)),!1}throw Error(w(435,s.tag))}return Vi(n,r,a),Ic(),!1}if(ee)return e=zn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,r!==Cc&&(n=Error(w(422),{cause:r}),Pr(mn(n,s)))):(r!==Cc&&(e=Error(w(423),{cause:r}),Pr(mn(e,s))),n=n.current.alternate,n.flags|=65536,a&=-a,n.lanes|=a,r=mn(r,s),a=Lc(n.stateNode,r,a),Ti(n,a),ge!==4&&(ge=2)),!1;var l=Error(w(520),{cause:r});if(l=mn(l,s),Hr===null?Hr=[l]:Hr.push(l),ge!==4&&(ge=2),e===null)return!0;r=mn(r,s),s=e;do{switch(s.tag){case 3:return s.flags|=65536,n=a&-a,s.lanes|=n,n=Lc(s.stateNode,r,n),Ti(s,n),!1;case 1:if(e=s.type,l=s.stateNode,(s.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(At===null||!At.has(l))))return s.flags|=65536,a&=-a,s.lanes|=a,a=ax(a),lx(a,n,s,r),Ti(s,a),!1}s=s.return}while(s!==null);return!1}var ix=Error(w(461)),De=!1;function Ee(n,e,s,r){e.child=n===null?Nf(e,null,s,r):Wt(e,n.child,s,r)}function Ru(n,e,s,r,a){s=s.render;var l=e.ref;if("ref"in r){var i={};for(var c in r)c!=="ref"&&(i[c]=r[c])}else i=r;return es(e,a),r=Uo(n,e,s,i,l,a),c=Ho(),n!==null&&!De?(qo(n,e,a),Hn(n,e,a)):(ee&&c&&Lo(e),e.flags|=1,Ee(n,e,r,a),e.child)}function Lu(n,e,s,r,a){if(n===null){var l=s.type;return typeof l=="function"&&!nd(l)&&l.defaultProps===void 0&&s.compare===null?(e.tag=15,e.type=l,cx(n,e,l,r,a)):(n=sl(s.type,null,r,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!(n.lanes&a)){var i=l.memoizedProps;if(s=s.compare,s=s!==null?s:Fr,s(i,r)&&n.ref===e.ref)return Hn(n,e,a)}return e.flags|=1,n=_t(l,r),n.ref=e.ref,n.return=e,e.child=n}function cx(n,e,s,r,a){if(n!==null){var l=n.memoizedProps;if(Fr(l,r)&&n.ref===e.ref)if(De=!1,e.pendingProps=r=l,(n.lanes&a)!==0)n.flags&131072&&(De=!0);else return e.lanes=n.lanes,Hn(n,e,a)}return Ec(n,e,s,r,a)}function ox(n,e,s){var r=e.pendingProps,a=r.children,l=(e.stateNode._pendingVisibility&2)!==0,i=n!==null?n.memoizedState:null;if(Dr(n,e),r.mode==="hidden"||l){if(e.flags&128){if(s=i!==null?i.baseLanes|s:s,n!==null){for(r=e.child=n.child,a=0;r!==null;)a=a|r.lanes|r.childLanes,r=r.sibling;e.childLanes=a&~s}else e.childLanes=0,e.child=null;return Eu(n,e,s)}if(s&536870912)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ka(e,i!==null?i.cachePool:null),i!==null?_u(e,i):Ac(),wf(e);else return e.lanes=e.childLanes=536870912,Eu(n,e,i!==null?i.baseLanes|s:s)}else i!==null?(Ka(e,i.cachePool),_u(e,i),gt(),e.memoizedState=null):(n!==null&&Ka(e,null),Ac(),gt());return Ee(n,e,a,s),e.child}function Eu(n,e,s){var r=Bo();return r=r===null?null:{parent:Ce._currentValue,pool:r},e.memoizedState={baseLanes:s,cachePool:r},n!==null&&Ka(e,null),Ac(),wf(e),null}function Dr(n,e){var s=e.ref;if(s===null)n!==null&&n.ref!==null&&(e.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(w(284));(n===null||n.ref!==s)&&(e.flags|=2097664)}}function Ec(n,e,s,r,a){return es(e,a),s=Uo(n,e,s,r,void 0,a),r=Ho(),n!==null&&!De?(qo(n,e,a),Hn(n,e,a)):(ee&&r&&Lo(e),e.flags|=1,Ee(n,e,s,a),e.child)}function Tu(n,e,s,r,a,l){return es(e,l),s=_f(e,r,s,a),Cf(),r=Ho(),n!==null&&!De?(qo(n,e,l),Hn(n,e,l)):(ee&&r&&Lo(e),e.flags|=1,Ee(n,e,s,l),e.child)}function Du(n,e,s,r,a){if(es(e,a),e.stateNode===null){var l=Cs,i=s.contextType;typeof i=="object"&&i!==null&&(l=Ue(i)),l=new s(r,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Hc,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=r,l.state=e.memoizedState,l.refs={},Jo(e),i=s.contextType,l.context=typeof i=="object"&&i!==null?Ue(i):Cs,l.state=e.memoizedState,i=s.getDerivedStateFromProps,typeof i=="function"&&(Di(e,s,i,r),l.state=e.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(i=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),i!==l.state&&Hc.enqueueReplaceState(l,l.state,null),zr(e,r,l,a),Br(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(n===null){l=e.stateNode;var c=e.memoizedProps,o=ns(s,c);l.props=o;var d=l.context,m=s.contextType;i=Cs,typeof m=="object"&&m!==null&&(i=Ue(m));var h=s.getDerivedStateFromProps;m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||d!==i)&&Uu(e,l,r,i),ft=!1;var p=e.memoizedState;l.state=p,zr(e,r,l,a),Br(),d=e.memoizedState,c||p!==d||ft?(typeof h=="function"&&(Di(e,s,h,r),d=e.memoizedState),(o=ft||zu(e,s,o,r,p,d,i))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=d),l.props=r,l.state=d,l.context=i,r=o):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{l=e.stateNode,zc(n,e),i=e.memoizedProps,m=ns(s,i),l.props=m,h=e.pendingProps,p=l.context,d=s.contextType,o=Cs,typeof d=="object"&&d!==null&&(o=Ue(d)),c=s.getDerivedStateFromProps,(d=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==h||p!==o)&&Uu(e,l,r,o),ft=!1,p=e.memoizedState,l.state=p,zr(e,r,l,a),Br();var j=e.memoizedState;i!==h||p!==j||ft?(typeof c=="function"&&(Di(e,s,c,r),j=e.memoizedState),(m=ft||zu(e,s,m,r,p,j,o)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,j,o),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,j,o)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=j),l.props=r,l.state=j,l.context=o,r=m):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),r=!1)}return l=r,Dr(n,e),r=(e.flags&128)!==0,l||r?(l=e.stateNode,s=r&&typeof s.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&r?(e.child=Wt(e,n.child,null,a),e.child=Wt(e,null,s,a)):Ee(n,e,s,a),e.memoizedState=l.state,n=e.child):n=Hn(n,e,a),n}function Ou(n,e,s,r){return ha(),e.flags|=256,Ee(n,e,s,r),e.child}var $i={dehydrated:null,treeContext:null,retryLane:0};function Mi(n){return{baseLanes:n,cachePool:kf()}}function Ri(n,e,s){return n=n!==null?n.childLanes&~s:0,e&&(n|=Je),n}function dx(n,e,s){var r=e.pendingProps,a=!1,l=(e.flags&128)!==0,i;if((i=l)||(i=n!==null&&n.memoizedState===null?!1:(_e.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,n===null){if(ee){if(a?xt(e):gt(),ee){var c=Te,o;if(o=c){e:{for(o=c,c=Ln;o.nodeType!==8;){if(!c){c=null;break e}if(o=kn(o.nextSibling),o===null){c=null;break e}}c=o}c!==null?(e.memoizedState={dehydrated:c,treeContext:It!==null?{id:Jn,overflow:Wn}:null,retryLane:536870912},o=Nn(18,null,null,0),o.stateNode=c,o.return=e,e.child=o,Ze=e,Te=null,o=!0):o=!1}o||Jt(e)}if(c=e.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return c.data==="$!"?e.lanes=16:e.lanes=536870912,null;Kn(e)}return c=r.children,r=r.fallback,a?(gt(),a=e.mode,c=Dc({mode:"hidden",children:c},a),r=Pt(r,a,s,null),c.return=e,r.return=e,c.sibling=r,e.child=c,a=e.child,a.memoizedState=Mi(s),a.childLanes=Ri(n,i,s),e.memoizedState=$i,r):(xt(e),Tc(e,c))}if(o=n.memoizedState,o!==null&&(c=o.dehydrated,c!==null)){if(l)e.flags&256?(xt(e),e.flags&=-257,e=Li(n,e,s)):e.memoizedState!==null?(gt(),e.child=n.child,e.flags|=128,e=null):(gt(),a=r.fallback,c=e.mode,r=Dc({mode:"visible",children:r.children},c),a=Pt(a,c,s,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,Wt(e,n.child,null,s),r=e.child,r.memoizedState=Mi(s),r.childLanes=Ri(n,i,s),e.memoizedState=$i,e=a);else if(xt(e),c.data==="$!"){if(i=c.nextSibling&&c.nextSibling.dataset,i)var d=i.dgst;i=d,r=Error(w(419)),r.stack="",r.digest=i,Pr({value:r,source:null,stack:null}),e=Li(n,e,s)}else if(i=(s&n.childLanes)!==0,De||i){if(i=ae,i!==null){if(r=s&-s,r&42)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane)throw o.retryLane=r,Et(n,r),Ie(i,n,r),ix}c.data==="$?"||Ic(),e=Li(n,e,s)}else c.data==="$?"?(e.flags|=128,e.child=n.child,e=av.bind(null,n),c._reactRetry=e,e=null):(n=o.treeContext,Te=kn(c.nextSibling),Ze=e,ee=!0,bn=null,Ln=!1,n!==null&&(on[dn++]=Jn,on[dn++]=Wn,on[dn++]=It,Jn=n.id,Wn=n.overflow,It=e),e=Tc(e,r.children),e.flags|=4096);return e}return a?(gt(),a=r.fallback,c=e.mode,o=n.child,d=o.sibling,r=_t(o,{mode:"hidden",children:r.children}),r.subtreeFlags=o.subtreeFlags&31457280,d!==null?a=_t(d,a):(a=Pt(a,c,s,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,c=n.child.memoizedState,c===null?c=Mi(s):(o=c.cachePool,o!==null?(d=Ce._currentValue,o=o.parent!==d?{parent:d,pool:d}:o):o=kf(),c={baseLanes:c.baseLanes|s,cachePool:o}),a.memoizedState=c,a.childLanes=Ri(n,i,s),e.memoizedState=$i,r):(xt(e),s=n.child,n=s.sibling,s=_t(s,{mode:"visible",children:r.children}),s.return=e,s.sibling=null,n!==null&&(i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)),e.child=s,e.memoizedState=null,s)}function Tc(n,e){return e=Dc({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Dc(n,e){return Tx(n,e,0,null)}function Li(n,e,s){return Wt(e,n.child,null,s),n=Tc(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Bu(n,e,s){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Bc(n.return,e,s)}function Ei(n,e,s,r,a){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:s,tailMode:a}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=s,l.tailMode=a)}function ux(n,e,s){var r=e.pendingProps,a=r.revealOrder,l=r.tail;if(Ee(n,e,r.children,s),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bu(n,s,e);else if(n.tag===19)Bu(n,s,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}switch(me(_e,r),a){case"forwards":for(s=e.child,a=null;s!==null;)n=s.alternate,n!==null&&bl(n)===null&&(a=s),s=s.sibling;s=a,s===null?(a=e.child,e.child=null):(a=s.sibling,s.sibling=null),Ei(e,!1,a,s,l);break;case"backwards":for(s=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&bl(n)===null){e.child=a;break}n=a.sibling,a.sibling=s,s=a,a=n}Ei(e,!0,s,null,l);break;case"together":Ei(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hn(n,e,s){if(n!==null&&(e.dependencies=n.dependencies),lt|=e.lanes,!(s&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(w(153));if(e.child!==null){for(n=e.child,s=_t(n,n.pendingProps),e.child=s,s.return=e;n.sibling!==null;)n=n.sibling,s=s.sibling=_t(n,n.pendingProps),s.return=e;s.sibling=null}return e.child}function Zj(n,e,s){switch(e.tag){case 3:dl(e,e.stateNode.containerInfo),jt(e,Ce,n.memoizedState.cache),ha();break;case 27:case 5:xc(e);break;case 4:dl(e,e.stateNode.containerInfo);break;case 10:jt(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(xt(e),e.flags|=128,null):s&e.child.childLanes?dx(n,e,s):(xt(e),n=Hn(n,e,s),n!==null?n.sibling:null);xt(e);break;case 19:if(r=(s&e.childLanes)!==0,n.flags&128){if(r)return ux(n,e,s);e.flags|=128}var a=e.memoizedState;if(a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),me(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,ox(n,e,s);case 24:jt(e,Ce,n.memoizedState.cache)}return Hn(n,e,s)}function mx(n,e,s){if(n!==null)if(n.memoizedProps!==e.pendingProps)De=!0;else{if(!(n.lanes&s)&&!(e.flags&128))return De=!1,Zj(n,e,s);De=!!(n.flags&131072)}else De=!1,ee&&e.flags&1048576&&jf(e,jl,e.index);switch(e.lanes=0,e.tag){case 16:e:{n=e.pendingProps;var r=e.elementType,a=r._init;if(r=a(r._payload),e.type=r,typeof r=="function")nd(r)?(n=ns(r,n),e.tag=1,e=Du(null,e,r,n,s)):(e.tag=0,e=Ec(null,e,r,n,s));else{if(r!=null){if(a=r.$$typeof,a===Rh){e.tag=11,e=Ru(null,e,r,n,s);break e}else if(a===Lh){e.tag=14,e=Lu(null,e,r,n,s);break e}}throw Error(w(306,r,""))}}return e;case 0:return Ec(n,e,e.type,e.pendingProps,s);case 1:return r=e.type,a=ns(r,e.pendingProps),Du(n,e,r,a,s);case 3:e:{if(dl(e,e.stateNode.containerInfo),n===null)throw Error(w(387));var l=e.pendingProps;a=e.memoizedState,r=a.element,zc(n,e),zr(e,l,null,s);var i=e.memoizedState;if(l=i.cache,jt(e,Ce,l),l!==a.cache&&Ba(e,Ce,s),Br(),l=i.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){e=Ou(n,e,l,s);break e}else if(l!==r){r=mn(Error(w(424)),e),Pr(r),e=Ou(n,e,l,s);break e}else for(Te=kn(e.stateNode.containerInfo.firstChild),Ze=e,ee=!0,bn=null,Ln=!0,s=Nf(e,null,l,s),e.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ha(),l===r){e=Hn(n,e,s);break e}Ee(n,e,l,s)}e=e.child}return e;case 26:return Dr(n,e),s=e.memoizedState=Rv(e.type,n===null?null:n.memoizedProps,e.pendingProps),n!==null||ee||s!==null||(s=e.type,n=e.pendingProps,r=Ll(kt.current).createElement(s),r[ze]=e,r[Ye]=n,Oe(r,s,n),Me(r),e.stateNode=r),null;case 27:return xc(e),n===null&&ee&&(r=e.stateNode=Wx(e.type,e.pendingProps,kt.current),Ze=e,Ln=!0,Te=kn(r.firstChild)),r=e.pendingProps.children,n!==null||ee?Ee(n,e,r,s):e.child=Wt(e,null,r,s),Dr(n,e),e.child;case 5:return n===null&&ee&&((a=r=Te)&&(r=bv(r,e.type,e.pendingProps,Ln),r!==null?(e.stateNode=r,Ze=e,Te=kn(r.firstChild),Ln=!1,a=!0):a=!1),a||Jt(e)),xc(e),a=e.type,l=e.pendingProps,i=n!==null?n.memoizedProps:null,r=l.children,Kc(a,l)?r=null:i!==null&&Kc(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=Uo(n,e,Bj,null,null,s),ol._currentValue=a,De&&n!==null&&n.memoizedState.memoizedState!==a&&Ba(e,ol,s)),Dr(n,e),Ee(n,e,r,s),e.child;case 6:return n===null&&ee&&((n=s=Te)&&(s=yv(s,e.pendingProps,Ln),s!==null?(e.stateNode=s,Ze=e,Te=null,n=!0):n=!1),n||Jt(e)),null;case 13:return dx(n,e,s);case 4:return dl(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=Wt(e,null,r,s):Ee(n,e,r,s),e.child;case 11:return Ru(n,e,e.type,e.pendingProps,s);case 7:return Ee(n,e,e.pendingProps,s),e.child;case 8:return Ee(n,e,e.pendingProps.children,s),e.child;case 12:return Ee(n,e,e.pendingProps.children,s),e.child;case 10:e:{if(r=e.type,a=e.pendingProps,l=e.memoizedProps,i=a.value,jt(e,r,i),l!==null)if(hn(l.value,i)){if(l.children===a.children){e=Hn(n,e,s);break e}}else Ba(e,r,s);Ee(n,e,a.children,s),e=e.child}return e;case 9:return a=e.type._context,r=e.pendingProps.children,es(e,s),a=Ue(a),r=r(a),e.flags|=1,Ee(n,e,r,s),e.child;case 14:return Lu(n,e,e.type,e.pendingProps,s);case 15:return cx(n,e,e.type,e.pendingProps,s);case 19:return ux(n,e,s);case 22:return ox(n,e,s);case 24:return es(e,s),r=Ue(Ce),n===null?(a=Bo(),a===null&&(a=ae,l=Do(),a.pooledCache=l,l.refCount++,l!==null&&(a.pooledCacheLanes|=s),a=l),e.memoizedState={parent:r,cache:a},Jo(e),jt(e,Ce,a)):(n.lanes&s&&(zc(n,e),zr(e,null,null,s),Br()),a=n.memoizedState,l=e.memoizedState,a.parent!==r?(a={parent:r,cache:r},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),jt(e,Ce,r)):(r=l.cache,jt(e,Ce,r),r!==a.cache&&Ba(e,Ce,s))),Ee(n,e,e.pendingProps.children,s),e.child}throw Error(w(156,e.tag))}var Oc=qn(null),ni=null,$s=null,Qo=null;function ti(){Qo=$s=ni=null}function jt(n,e,s){me(Oc,e._currentValue),e._currentValue=s}function et(n){n._currentValue=Oc.current,Re(Oc)}function Bc(n,e,s){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===s)break;n=n.return}}function Ba(n,e,s){var r=n.child;for(r!==null&&(r.return=n);r!==null;){var a=r.dependencies;if(a!==null)for(var l=r.child,i=a.firstContext;i!==null;){if(i.context===e){if(r.tag===1){i=nt(s&-s),i.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var o=c.pending;o===null?i.next=i:(i.next=o.next,o.next=i),c.pending=i}}r.lanes|=s,i=r.alternate,i!==null&&(i.lanes|=s),Bc(r.return,s,n),a.lanes|=s;break}i=i.next}else if(r.tag===10)l=r.type===n.type?null:r.child;else if(r.tag===18){if(l=r.return,l===null)throw Error(w(341));l.lanes|=s,a=l.alternate,a!==null&&(a.lanes|=s),Bc(l,s,n),l=r.sibling}else l=r.child;if(l!==null)l.return=r;else for(l=r;l!==null;){if(l===n){l=null;break}if(r=l.sibling,r!==null){r.return=l.return,l=r;break}l=l.return}r=l}}function es(n,e){ni=n,Qo=$s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(De=!0),n.firstContext=null)}function Ue(n){return px(ni,n)}function za(n,e,s){return ni===null&&es(n,s),px(n,e)}function px(n,e){var s=e._currentValue;if(Qo!==e)if(e={context:e,memoizedValue:s,next:null},$s===null){if(n===null)throw Error(w(308));$s=e,n.dependencies={lanes:0,firstContext:e}}else $s=$s.next=e;return s}var ft=!1;function Jo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function nt(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ct(n,e,s){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var a=r.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),r.pending=e,e=xl(n),gf(n,null,s),e}return Ql(n,r,e,s),xl(n)}function Or(n,e,s){if(e=e.updateQueue,e!==null&&(e=e.shared,(s&4194176)!==0)){var r=e.lanes;r&=n.pendingLanes,s|=r,e.lanes=s,Xh(n,s)}}function Ti(n,e){var s=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,s===r)){var a=null,l=null;if(s=s.firstBaseUpdate,s!==null){do{var i={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};l===null?a=l=i:l=l.next=i,s=s.next}while(s!==null);l===null?a=l=e:l=l.next=e}else a=l=e;s={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,callbacks:r.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=e:n.next=e,s.lastBaseUpdate=e}var Uc=!1;function Br(){if(Uc){var n=Ds;if(n!==null)throw n}}function zr(n,e,s,r){Uc=!1;var a=n.updateQueue;ft=!1;var l=a.firstBaseUpdate,i=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var o=c,d=o.next;o.next=null,i===null?l=d:i.next=d,i=o;var m=n.alternate;m!==null&&(m=m.updateQueue,c=m.lastBaseUpdate,c!==i&&(c===null?m.firstBaseUpdate=d:c.next=d,m.lastBaseUpdate=o))}if(l!==null){var h=a.baseState;i=0,m=d=o=null,c=l;do{var p=c.lane&-536870913,j=p!==c.lane;if(j?(W&p)===p:(r&p)===p){p!==0&&p===Gs&&(Uc=!0),m!==null&&(m=m.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var y=n,b=c;p=e;var N=s;switch(b.tag){case 1:if(y=b.payload,typeof y=="function"){h=y.call(N,h,p);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,p=typeof y=="function"?y.call(N,h,p):y,p==null)break e;h=pe({},h,p);break e;case 2:ft=!0}}p=c.callback,p!==null&&(n.flags|=64,j&&(n.flags|=8192),j=a.callbacks,j===null?a.callbacks=[p]:j.push(p))}else j={lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},m===null?(d=m=j,o=h):m=m.next=j,i|=p;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;j=c,c=j.next,j.next=null,a.lastBaseUpdate=j,a.shared.pending=null}}while(!0);m===null&&(o=h),a.baseState=o,a.firstBaseUpdate=d,a.lastBaseUpdate=m,l===null&&(a.shared.lanes=0),lt|=i,n.lanes=i,n.memoizedState=h}}function hx(n,e){if(typeof n!="function")throw Error(w(191,n));n.call(e)}function fx(n,e){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)hx(s[n],e)}function Di(n,e,s,r){e=n.memoizedState,s=s(r,e),s=s==null?e:pe({},e,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Hc={isMounted:function(n){return(n=n._reactInternals)?er(n)===n:!1},enqueueSetState:function(n,e,s){n=n._reactInternals;var r=tt(),a=nt(r);a.payload=e,s!=null&&(a.callback=s),e=Ct(n,a,r),e!==null&&(Ie(e,n,r),Or(e,n,r))},enqueueReplaceState:function(n,e,s){n=n._reactInternals;var r=tt(),a=nt(r);a.tag=1,a.payload=e,s!=null&&(a.callback=s),e=Ct(n,a,r),e!==null&&(Ie(e,n,r),Or(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var s=tt(),r=nt(s);r.tag=2,e!=null&&(r.callback=e),e=Ct(n,r,s),e!==null&&(Ie(e,n,s),Or(e,n,s))}};function zu(n,e,s,r,a,l,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,l,i):e.prototype&&e.prototype.isPureReactComponent?!Fr(s,r)||!Fr(a,l):!0}function Uu(n,e,s,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(s,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(s,r),e.state!==n&&Hc.enqueueReplaceState(e,e.state,null)}function ns(n,e){var s=e;if("ref"in e){s={};for(var r in e)r!=="ref"&&(s[r]=e[r])}if(n=n.defaultProps){s===e&&(s=pe({},s));for(var a in n)s[a]===void 0&&(s[a]=n[a])}return s}var Qn=!1,Be=!1,Oi=!1,Hu=typeof WeakSet=="function"?WeakSet:Set,$e=null;function xx(n,e){e.props=ns(n.type,n.memoizedProps),e.state=n.memoizedState,e.componentWillUnmount()}function Gt(n,e){try{var s=n.ref;if(s!==null){var r=n.stateNode;switch(n.tag){case 26:case 27:case 5:var a=r;break;default:a=r}typeof s=="function"?n.refCleanup=s(a):s.current=a}}catch(l){le(n,e,l)}}function en(n,e){var s=n.ref,r=n.refCleanup;if(s!==null)if(typeof r=="function")try{r()}catch(a){le(n,e,a)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(a){le(n,e,a)}else s.current=null}function qc(n,e,s){try{s()}catch(r){le(n,e,r)}}var qu=!1;function Gj(n,e){if(Jc=Ol,n=df(),$o(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{s.nodeType,l.nodeType}catch{s=null;break e}var i=0,c=-1,o=-1,d=0,m=0,h=n,p=null;n:for(;;){for(var j;h!==s||a!==0&&h.nodeType!==3||(c=i+a),h!==l||r!==0&&h.nodeType!==3||(o=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(j=h.firstChild)!==null;)p=h,h=j;for(;;){if(h===n)break n;if(p===s&&++d===a&&(c=i),p===l&&++m===r&&(o=i),(j=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=j}s=c===-1||o===-1?null:{start:c,end:o}}else s=null}s=s||{start:0,end:0}}else s=null;for(Wc={focusedElem:n,selectionRange:s},Ol=!1,$e=e;$e!==null;)if(e=$e,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,$e=n;else for(;$e!==null;){e=$e;try{var y=e.alternate,b=e.flags;switch(e.tag){case 0:break;case 11:case 15:break;case 1:if(b&1024&&y!==null){var N=y.memoizedState,x=e.stateNode,f=x.getSnapshotBeforeUpdate(ns(e.type,y.memoizedProps),N);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:if(b&1024){var g=e.stateNode.containerInfo,v=g.nodeType;if(v===9)eo(g);else if(v===1)switch(g.nodeName){case"HEAD":case"HTML":case"BODY":eo(g);break;default:g.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(b&1024)throw Error(w(163))}}catch(k){le(e,e.return,k)}if(n=e.sibling,n!==null){n.return=e.return,$e=n;break}$e=e.return}return y=qu,qu=!1,y}function Is(n,e,s){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var l=a.inst,i=l.destroy;i!==void 0&&(l.destroy=void 0,qc(e,s,i))}a=a.next}while(a!==r)}}function Wo(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var s=e=e.next;do{if((s.tag&n)===n){var r=s.create,a=s.inst;r=r(),a.destroy=r}s=s.next}while(s!==e)}}function gx(n,e){try{Wo(e,n)}catch(s){le(n,n.return,s)}}function jx(n){var e=n.updateQueue;if(e!==null){var s=n.stateNode;try{fx(e,s)}catch(r){le(n,n.return,r)}}}function vx(n){var e=n.type,s=n.memoizedProps,r=n.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break e;case"img":s.src&&(r.src=s.src)}}catch(a){le(n,n.return,a)}}function bx(n,e,s){var r=s.flags;switch(s.tag){case 0:case 11:case 15:Yn(n,s),r&4&&gx(s,5);break;case 1:if(Yn(n,s),r&4)if(n=s.stateNode,e===null)try{n.componentDidMount()}catch(c){le(s,s.return,c)}else{var a=ns(s.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(a,e,n.__reactInternalSnapshotBeforeUpdate)}catch(c){le(s,s.return,c)}}r&64&&jx(s),r&512&&Gt(s,s.return);break;case 3:if(Yn(n,s),r&64&&(r=s.updateQueue,r!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{fx(r,n)}catch(c){le(s,s.return,c)}}break;case 26:Yn(n,s),r&512&&Gt(s,s.return);break;case 27:case 5:Yn(n,s),e===null&&r&4&&vx(s),r&512&&Gt(s,s.return);break;case 12:Yn(n,s);break;case 13:Yn(n,s),r&4&&Sx(n,s);break;case 22:if(a=s.memoizedState!==null||Qn,!a){e=e!==null&&e.memoizedState!==null||Be;var l=Qn,i=Be;Qn=a,(Be=e)&&!i?ht(n,s,(s.subtreeFlags&8772)!==0):Yn(n,s),Qn=l,Be=i}r&512&&(s.memoizedProps.mode==="manual"?Gt(s,s.return):en(s,s.return));break;default:Yn(n,s)}}function yx(n){var e=n.alternate;e!==null&&(n.alternate=null,yx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&wo(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Nx(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function Bi(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Nx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vc(n,e,s){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?s.nodeType===8?s.parentNode.insertBefore(n,e):s.insertBefore(n,e):(s.nodeType===8?(e=s.parentNode,e.insertBefore(n,s)):(e=s,e.appendChild(n)),s=s._reactRootContainer,s!=null||e.onclick!==null||(e.onclick=ai));else if(r!==4&&r!==27&&(n=n.child,n!==null))for(Vc(n,e,s),n=n.sibling;n!==null;)Vc(n,e,s),n=n.sibling}function kl(n,e,s){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?s.insertBefore(n,e):s.appendChild(n);else if(r!==4&&r!==27&&(n=n.child,n!==null))for(kl(n,e,s),n=n.sibling;n!==null;)kl(n,e,s),n=n.sibling}var we=null,Ke=!1;function Gn(n,e,s){for(s=s.child;s!==null;)wx(n,e,s),s=s.sibling}function wx(n,e,s){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(ma,s)}catch{}switch(s.tag){case 26:Be||en(s,e),Gn(n,e,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Be||en(s,e);var r=we,a=Ke;for(we=s.stateNode,Gn(n,e,s),s=s.stateNode,n=s.attributes;n.length;)s.removeAttributeNode(n[0]);wo(s),we=r,Ke=a;break;case 5:Be||en(s,e);case 6:r=we,a=Ke,we=null,Gn(n,e,s),we=r,Ke=a,we!==null&&(Ke?(n=we,s=s.stateNode,n.nodeType===8?n.parentNode.removeChild(s):n.removeChild(s)):we.removeChild(s.stateNode));break;case 18:we!==null&&(Ke?(n=we,s=s.stateNode,n.nodeType===8?Pi(n.parentNode,s):n.nodeType===1&&Pi(n,s),ra(n)):Pi(we,s.stateNode));break;case 4:r=we,a=Ke,we=s.stateNode.containerInfo,Ke=!0,Gn(n,e,s),we=r,Ke=a;break;case 0:case 11:case 14:case 15:if(!Be&&(r=s.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a.tag,i=a.inst,c=i.destroy;c!==void 0&&(l&2||l&4)&&(i.destroy=void 0,qc(s,e,c)),a=a.next}while(a!==r)}Gn(n,e,s);break;case 1:if(!Be&&(en(s,e),r=s.stateNode,typeof r.componentWillUnmount=="function"))try{xx(s,r)}catch(o){le(s,e,o)}Gn(n,e,s);break;case 21:Gn(n,e,s);break;case 22:en(s,e),Be=(r=Be)||s.memoizedState!==null,Gn(n,e,s),Be=r;break;default:Gn(n,e,s)}}function Sx(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ra(n)}catch(s){le(e,e.return,s)}}function Yj(n){switch(n.tag){case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Hu),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Hu),e;default:throw Error(w(435,n.tag))}}function zi(n,e){var s=Yj(n);e.forEach(function(r){var a=lv.bind(null,n,r);s.has(r)||(s.add(r),r.then(a,a))})}function xn(n,e){var s=e.deletions;if(s!==null)for(var r=0;r<s.length;r++){var a=s[r];try{var l=n,i=e,c=i;e:for(;c!==null;){switch(c.tag){case 27:case 5:we=c.stateNode,Ke=!1;break e;case 3:we=c.stateNode.containerInfo,Ke=!0;break e;case 4:we=c.stateNode.containerInfo,Ke=!0;break e}c=c.return}if(we===null)throw Error(w(160));wx(l,i,a),we=null,Ke=!1;var o=a.alternate;o!==null&&(o.return=null),a.return=null}catch(d){le(a,e,d)}}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)kx(e,n),e=e.sibling}var vn=null;function kx(n,e){var s=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xn(e,n),gn(n),r&4){try{Is(3,n,n.return),Wo(3,n)}catch(j){le(n,n.return,j)}try{Is(5,n,n.return)}catch(j){le(n,n.return,j)}}break;case 1:xn(e,n),gn(n),r&512&&s!==null&&en(s,s.return),r&64&&Qn&&(n=n.updateQueue,n!==null&&(r=n.callbacks,r!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?r:s.concat(r))));break;case 26:var a=vn;if(xn(e,n),gn(n),r&512&&s!==null&&en(s,s.return),r&4){if(e=s!==null?s.memoizedState:null,r=n.memoizedState,s===null)if(r===null)if(n.stateNode===null){e:{r=n.type,s=n.memoizedProps,e=a.ownerDocument||a;n:switch(r){case"title":a=e.getElementsByTagName("title")[0],(!a||a[Gr]||a[ze]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=e.createElement(r),e.head.insertBefore(a,e.querySelector("head > title"))),Oe(a,r,s),a[ze]=n,Me(a),r=a;break e;case"link":var l=tm("link","href",e).get(r+(s.href||""));if(l){for(var i=0;i<l.length;i++)if(a=l[i],a.getAttribute("href")===(s.href==null?null:s.href)&&a.getAttribute("rel")===(s.rel==null?null:s.rel)&&a.getAttribute("title")===(s.title==null?null:s.title)&&a.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){l.splice(i,1);break n}}a=e.createElement(r),Oe(a,r,s),e.head.appendChild(a);break;case"meta":if(l=tm("meta","content",e).get(r+(s.content||""))){for(i=0;i<l.length;i++)if(a=l[i],a.getAttribute("content")===(s.content==null?null:""+s.content)&&a.getAttribute("name")===(s.name==null?null:s.name)&&a.getAttribute("property")===(s.property==null?null:s.property)&&a.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&a.getAttribute("charset")===(s.charSet==null?null:s.charSet)){l.splice(i,1);break n}}a=e.createElement(r),Oe(a,r,s),e.head.appendChild(a);break;default:throw Error(w(468,r))}a[ze]=n,Me(a),r=a}n.stateNode=r}else sm(a,n.type,n.stateNode);else n.stateNode=nm(a,r,n.memoizedProps);else if(e!==r)e===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):e.count--,r===null?sm(a,n.type,n.stateNode):nm(a,r,n.memoizedProps);else if(r===null&&n.stateNode!==null)try{var c=n.stateNode,o=n.memoizedProps;Qu(c,n.type,s.memoizedProps,o),c[Ye]=o}catch(j){le(n,n.return,j)}}break;case 27:if(r&4&&n.alternate===null){for(a=n.stateNode,l=n.memoizedProps,i=a.firstChild;i;){var d=i.nextSibling,m=i.nodeName;i[Gr]||m==="HEAD"||m==="BODY"||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=d}for(i=n.type,d=a.attributes;d.length;)a.removeAttributeNode(d[0]);Oe(a,i,l),a[ze]=n,a[Ye]=l}case 5:if(xn(e,n),gn(n),r&512&&s!==null&&en(s,s.return),n.flags&32){e=n.stateNode;try{Xs(e,"")}catch(j){le(n,n.return,j)}}if(r&4&&(e=n.stateNode,e!=null)){a=n.memoizedProps,s=s!==null?s.memoizedProps:a,l=n.type;try{Qu(e,l,s,a),e[Ye]=a}catch(j){le(n,n.return,j)}}r&1024&&(Oi=!0);break;case 6:if(xn(e,n),gn(n),r&4){if(n.stateNode===null)throw Error(w(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(j){le(n,n.return,j)}}break;case 3:if(al=null,a=vn,vn=El(e.containerInfo),xn(e,n),vn=a,gn(n),r&4&&s!==null&&s.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(j){le(n,n.return,j)}Oi&&(Oi=!1,Cx(n));break;case 4:r=vn,vn=El(n.stateNode.containerInfo),xn(e,n),gn(n),vn=r;break;case 13:xn(e,n),gn(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(rd=On()),r&4&&(r=n.updateQueue,r!==null&&(n.updateQueue=null,zi(n,r)));break;case 22:r&512&&s!==null&&en(s,s.return),c=n.memoizedState!==null,o=s!==null&&s.memoizedState!==null;var h=Qn,p=Be;if(Qn=h||c,Be=p||o,xn(e,n),Be=p,Qn=h,gn(n),e=n.stateNode,e._current=n,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,r&8192&&(e._visibility=c?e._visibility&-2:e._visibility|1,c&&(e=Qn||Be,s===null||o||e||gs(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(s=null,e=n;;){if(e.tag===5||e.tag===26||e.tag===27){if(s===null){s=e;try{a=e.stateNode,c?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=e.stateNode,d=e.memoizedProps.style,m=d!=null&&d.hasOwnProperty("display")?d.display:null,i.style.display=m==null||typeof m=="boolean"?"":(""+m).trim())}catch(j){le(n,n.return,j)}}}else if(e.tag===6){if(s===null)try{e.stateNode.nodeValue=c?"":e.memoizedProps}catch(j){le(n,n.return,j)}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;s===e&&(s=null),e=e.return}s===e&&(s=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=n.updateQueue,r!==null&&(s=r.retryQueue,s!==null&&(r.retryQueue=null,zi(n,s))));break;case 19:xn(e,n),gn(n),r&4&&(r=n.updateQueue,r!==null&&(n.updateQueue=null,zi(n,r)));break;case 21:break;default:xn(e,n),gn(n)}}function gn(n){var e=n.flags;if(e&2){try{if(n.tag!==27){e:{for(var s=n.return;s!==null;){if(Nx(s)){var r=s;break e}s=s.return}throw Error(w(160))}switch(r.tag){case 27:var a=r.stateNode,l=Bi(n);kl(n,l,a);break;case 5:var i=r.stateNode;r.flags&32&&(Xs(i,""),r.flags&=-33);var c=Bi(n);kl(n,c,i);break;case 3:case 4:var o=r.stateNode.containerInfo,d=Bi(n);Vc(n,d,o);break;default:throw Error(w(161))}}}catch(m){le(n,n.return,m)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Cx(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Cx(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function Yn(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)bx(n,e.alternate,e),e=e.sibling}function gs(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:Is(4,e,e.return),gs(e);break;case 1:en(e,e.return);var s=e.stateNode;if(typeof s.componentWillUnmount=="function"){var r=e,a=e.return;try{xx(r,s)}catch(l){le(r,a,l)}}gs(e);break;case 26:case 27:case 5:en(e,e.return),gs(e);break;case 22:en(e,e.return),e.memoizedState===null&&gs(e);break;default:gs(e)}n=n.sibling}}function ht(n,e,s){for(s=s&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,a=n,l=e,i=l.flags;switch(l.tag){case 0:case 11:case 15:ht(a,l,s),gx(l,4);break;case 1:if(ht(a,l,s),a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(o){le(l,l.return,o)}if(r=l.updateQueue,r!==null){var c=r.shared.hiddenCallbacks;if(c!==null)for(r.shared.hiddenCallbacks=null,r=0;r<c.length;r++)hx(c[r],a)}s&&i&64&&jx(l),Gt(l,l.return);break;case 26:case 27:case 5:ht(a,l,s),s&&r===null&&i&4&&vx(l),Gt(l,l.return);break;case 12:ht(a,l,s);break;case 13:ht(a,l,s),s&&i&4&&Sx(a,l);break;case 22:l.memoizedState===null&&ht(a,l,s),Gt(l,l.return);break;default:ht(a,l,s)}e=e.sibling}}function _x(n,e){try{Wo(e,n)}catch(s){le(n,n.return,s)}}function Ko(n,e){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&fa(s))}function ed(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&fa(n))}function ps(n,e,s,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ax(n,e,s,r),e=e.sibling}function Ax(n,e,s,r){var a=e.flags;switch(e.tag){case 0:case 11:case 15:ps(n,e,s,r),a&2048&&_x(e,9);break;case 3:ps(n,e,s,r),a&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&fa(n)));break;case 23:break;case 22:var l=e.stateNode;e.memoizedState!==null?l._visibility&4?ps(n,e,s,r):Ur(n,e):l._visibility&4?ps(n,e,s,r):(l._visibility|=4,js(n,e,s,r,(e.subtreeFlags&10256)!==0)),a&2048&&Ko(e.alternate,e);break;case 24:ps(n,e,s,r),a&2048&&ed(e.alternate,e);break;default:ps(n,e,s,r)}}function js(n,e,s,r,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var l=n,i=e,c=s,o=r,d=i.flags;switch(i.tag){case 0:case 11:case 15:js(l,i,c,o,a),_x(i,8);break;case 23:break;case 22:var m=i.stateNode;i.memoizedState!==null?m._visibility&4?js(l,i,c,o,a):Ur(l,i):(m._visibility|=4,js(l,i,c,o,a)),a&&d&2048&&Ko(i.alternate,i);break;case 24:js(l,i,c,o,a),a&&d&2048&&ed(i.alternate,i);break;default:js(l,i,c,o,a)}e=e.sibling}}function Ur(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var s=n,r=e,a=r.flags;switch(r.tag){case 22:Ur(s,r),a&2048&&Ko(r.alternate,r);break;case 24:Ur(s,r),a&2048&&ed(r.alternate,r);break;default:Ur(s,r)}e=e.sibling}}var Cr=8192;function hs(n){if(n.subtreeFlags&Cr)for(n=n.child;n!==null;)$x(n),n=n.sibling}function $x(n){switch(n.tag){case 26:hs(n),n.flags&Cr&&n.memoizedState!==null&&Dv(vn,n.memoizedState,n.memoizedProps);break;case 5:hs(n);break;case 3:case 4:var e=vn;vn=El(n.stateNode.containerInfo),hs(n),vn=e;break;case 22:n.memoizedState===null&&(e=n.alternate,e!==null&&e.memoizedState!==null?(e=Cr,Cr=16777216,hs(n),Cr=e):hs(n));break;default:hs(n)}}function Mx(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function Ui(n){var e=n.deletions;if(n.flags&16){if(e!==null)for(var s=0;s<e.length;s++){var r=e[s];$e=r,Lx(r,n)}Mx(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Rx(n),n=n.sibling}function Rx(n){switch(n.tag){case 0:case 11:case 15:Ui(n),n.flags&2048&&Is(9,n,n.return);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&4&&(n.return===null||n.return.tag!==13)?(e._visibility&=-5,tl(n)):Ui(n);break;default:Ui(n)}}function tl(n){var e=n.deletions;if(n.flags&16){if(e!==null)for(var s=0;s<e.length;s++){var r=e[s];$e=r,Lx(r,n)}Mx(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:Is(8,e,e.return),tl(e);break;case 22:s=e.stateNode,s._visibility&4&&(s._visibility&=-5,tl(e));break;default:tl(e)}n=n.sibling}}function Lx(n,e){for(;$e!==null;){var s=$e;switch(s.tag){case 0:case 11:case 15:Is(8,s,e);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var r=s.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(s.memoizedState.cache)}if(r=s.child,r!==null)r.return=s,$e=r;else e:for(s=n;$e!==null;){r=$e;var a=r.sibling,l=r.return;if(yx(r),r===s){$e=null;break e}if(a!==null){a.return=l,$e=a;break e}$e=l}}}function Ij(n,e,s,r){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(n,e,s,r){return new Ij(n,e,s,r)}function nd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _t(n,e){var s=n.alternate;return s===null?(s=Nn(n.tag,e,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=e,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&31457280,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,e=n.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function Ex(n,e){n.flags&=31457282;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,e=s.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function sl(n,e,s,r,a,l){var i=0;if(r=n,typeof n=="function")nd(n)&&(i=1);else if(typeof n=="string")i=Ev(n,s,Dn.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case yr:return Pt(s.children,a,l,e);case jg:i=8,a|=24;break;case Qd:return n=Nn(12,s,e,a|2),n.elementType=Qd,n.lanes=l,n;case Jd:return n=Nn(13,s,e,a),n.elementType=Jd,n.lanes=l,n;case Wd:return n=Nn(19,s,e,a),n.elementType=Wd,n.lanes=l,n;case Eh:return Tx(s,a,l,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case vg:case bt:i=10;break e;case bg:i=9;break e;case Rh:i=11;break e;case Lh:i=14;break e;case qt:i=16,r=null;break e}throw Error(w(130,n==null?n:typeof n,""))}return e=Nn(i,s,e,a),e.elementType=n,e.type=r,e.lanes=l,e}function Pt(n,e,s,r){return n=Nn(7,n,r,e),n.lanes=s,n}function Tx(n,e,s,r){n=Nn(22,n,r,e),n.elementType=Eh,n.lanes=s;var a={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var l=a._current;if(l===null)throw Error(w(456));if(!(a._pendingVisibility&2)){var i=Et(l,2);i!==null&&(a._pendingVisibility|=2,Ie(i,l,2))}},attach:function(){var l=a._current;if(l===null)throw Error(w(456));if(a._pendingVisibility&2){var i=Et(l,2);i!==null&&(a._pendingVisibility&=-3,Ie(i,l,2))}}};return n.stateNode=a,n}function Hi(n,e,s){return n=Nn(6,n,null,e),n.lanes=s,n}function qi(n,e,s){return e=Nn(4,n.children!==null?n.children:[],n.key,e),e.lanes=s,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function In(n){n.flags|=4}function Vu(n,e){if(e.type!=="stylesheet"||e.state.loading&4)n.flags&=-16777217;else if(n.flags|=16777216,(W&42)===0&&(e=!(e.type==="stylesheet"&&!(e.state.loading&3)),!e))if(Hx())n.flags|=8192;else throw Er=_c,vf}function Ua(n,e){e!==null?n.flags|=4:n.flags&16384&&(e=n.tag!==22?qh():536870912,n.lanes|=e)}function xr(n,e){if(!ee)switch(n.tailMode){case"hidden":e=n.tail;for(var s=null;e!==null;)e.alternate!==null&&(s=e),e=e.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function xe(n){var e=n.alternate!==null&&n.alternate.child===n.child,s=0,r=0;if(e)for(var a=n.child;a!==null;)s|=a.lanes|a.childLanes,r|=a.subtreeFlags&31457280,r|=a.flags&31457280,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)s|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=r,n.childLanes=s,e}function Fj(n,e,s){var r=e.pendingProps;switch(Eo(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(e),null;case 1:return xe(e),null;case 3:return s=e.stateNode,r=null,n!==null&&(r=n.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),et(Ce),qs(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(hr(e)?In(e):n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bn!==null&&(Yc(bn),bn=null))),xe(e),null;case 26:if(s=e.memoizedState,n===null)In(e),s!==null?(xe(e),Vu(e,s)):(xe(e),e.flags&=-16777217);else{var a=n.memoizedState;s!==a&&In(e),s!==null?(xe(e),s===a?e.flags&=-16777217:Vu(e,s)):(n.memoizedProps!==r&&In(e),xe(e),e.flags&=-16777217)}return null;case 27:if(ul(e),s=kt.current,a=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==r&&In(e);else{if(!r){if(e.stateNode===null)throw Error(w(166));return xe(e),null}n=Dn.current,hr(e)?Nu(e):(n=Wx(a,r,s),e.stateNode=n,In(e))}return xe(e),null;case 5:if(ul(e),s=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==r&&In(e);else{if(!r){if(e.stateNode===null)throw Error(w(166));return xe(e),null}if(n=Dn.current,hr(e))Nu(e);else{switch(a=Ll(kt.current),n){case 1:n=a.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=a.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof r.is=="string"?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?n.multiple=!0:r.size&&(n.size=r.size);break;default:n=typeof r.is=="string"?a.createElement(s,{is:r.is}):a.createElement(s)}}n[ze]=e,n[Ye]=r;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=n;e:switch(Oe(n,s,r),s){case"button":case"input":case"select":case"textarea":n=!!r.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&In(e)}}return xe(e),e.flags&=-16777217,null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==r&&In(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=kt.current,hr(e)){if(n=e.stateNode,s=e.memoizedProps,r=null,a=Ze,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}n[ze]=e,n=!!(n.nodeValue===s||r!==null&&r.suppressHydrationWarning===!0||Px(n.nodeValue,s)),n||Jt(e)}else n=Ll(n).createTextNode(r),n[ze]=e,e.stateNode=n}return xe(e),null;case 13:if(r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(a=hr(e),r!==null&&r.dehydrated!==null){if(n===null){if(!a)throw Error(w(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(w(317));a[ze]=e}else ha(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xe(e),a=!1}else bn!==null&&(Yc(bn),bn=null),a=!0;if(!a)return e.flags&256?(Kn(e),e):(Kn(e),null)}if(Kn(e),e.flags&128)return e.lanes=s,e;if(s=r!==null,n=n!==null&&n.memoizedState!==null,s){r=e.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool);var l=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048)}return s!==n&&s&&(e.child.flags|=8192),Ua(e,e.updateQueue),xe(e),null;case 4:return qs(),n===null&&cd(e.stateNode.containerInfo),xe(e),null;case 10:return et(e.type),xe(e),null;case 19:if(Re(_e),a=e.memoizedState,a===null)return xe(e),null;if(r=(e.flags&128)!==0,l=a.rendering,l===null)if(r)xr(a,!1);else{if(ge!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(l=bl(n),l!==null){for(e.flags|=128,xr(a,!1),n=l.updateQueue,e.updateQueue=n,Ua(e,n),e.subtreeFlags=0,n=s,s=e.child;s!==null;)Ex(s,n),s=s.sibling;return me(_e,_e.current&1|2),e.child}n=n.sibling}a.tail!==null&&On()>_l&&(e.flags|=128,r=!0,xr(a,!1),e.lanes=4194304)}else{if(!r)if(n=bl(l),n!==null){if(e.flags|=128,r=!0,n=n.updateQueue,e.updateQueue=n,Ua(e,n),xr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!ee)return xe(e),null}else 2*On()-a.renderingStartTime>_l&&s!==536870912&&(e.flags|=128,r=!0,xr(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=On(),e.sibling=null,n=_e.current,me(_e,r?n&1|2:n&1),e):(xe(e),null);case 22:case 23:return Kn(e),To(),r=e.memoizedState!==null,n!==null?n.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?s&536870912&&!(e.flags&128)&&(xe(e),e.subtreeFlags&6&&(e.flags|=8192)):xe(e),s=e.updateQueue,s!==null&&Ua(e,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==s&&(e.flags|=2048),n!==null&&Re(Ft),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),e.memoizedState.cache!==s&&(e.flags|=2048),et(Ce),xe(e),null;case 25:return null}throw Error(w(156,e.tag))}function Pj(n,e){switch(Eo(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return et(Ce),qs(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return ul(e),null;case 13:if(Kn(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(w(340));ha()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Re(_e),null;case 4:return qs(),null;case 10:return et(e.type),null;case 22:case 23:return Kn(e),To(),n!==null&&Re(Ft),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return et(Ce),null;case 25:return null;default:return null}}function Dx(n,e){switch(Eo(e),e.tag){case 3:et(Ce),qs();break;case 26:case 27:case 5:ul(e);break;case 4:qs();break;case 13:Kn(e);break;case 19:Re(_e);break;case 10:et(e.type);break;case 22:case 23:Kn(e),To(),n!==null&&Re(Ft);break;case 24:et(Ce)}}var Qj={getCacheForType:function(n){var e=Ue(Ce),s=e.data.get(n);return s===void 0&&(s=n(),e.data.set(n,s)),s}},Jj=typeof WeakMap=="function"?WeakMap:Map,te=0,ae=null,Q=null,W=0,he=0,ln=null,td=!1,at=0,ge=0,lt=0,rr=0,sd=0,Je=0,Hr=null,wn=null,Fs=!1,Cl=!1,rd=0,_l=1/0,Wr=null,At=null,Ha=!1,Xt=null,qr=0,Xc=0,Zc=null,Vr=0,Gc=null;function tt(){if(te&2&&W!==0)return W&-W;if(Oo()!==null){var n=Gs;return n!==0?n:id()}return Gh()}function Ox(){Je===0&&(Je=!(W&536870912)||ee?Hh():536870912);var n=zn.current;return n!==null&&(n.flags|=32),Je}function Ie(n,e,s){(n===ae&&he===2||n.cancelPendingCommit!==null)&&(is(n,0),Tn(n,W,Je)),ga(n,s),(!(te&2)||n!==ae)&&(n===ae&&(!(te&2)&&(rr|=s),ge===4&&Tn(n,W,Je)),We(n))}function Bx(n,e){if(te&6)throw Error(w(327));var s=n.callbackNode;if(Us()&&n.callbackNode!==s)return null;var r=pl(n,n===ae?W:0);if(r===0)return null;var a=(r&60)===0&&(r&n.expiredLanes)===0&&!e;if(e=a?nv(n,r):Al(n,r),e!==0){var l=a;do{if(e===6)Tn(n,r,0);else{if(a=n.current.alternate,l&&!Wj(a)){e=Al(n,r),l=!1;continue}if(e===2){l=r;var i=Uh(n,l);if(i!==0&&(r=i,e=zx(n,l,i),l=!1,e!==2))continue}if(e===1){is(n,0),Tn(n,r,0);break}n.finishedWork=a,n.finishedLanes=r;e:{switch(l=n,e){case 0:case 1:throw Error(w(345));case 4:if((r&4194176)===r){Tn(l,r,Je);break e}break;case 2:wn=null;break;case 3:case 5:break;default:throw Error(w(329))}if((r&62914560)===r&&(e=rd+300-On(),10<e)){if(Tn(l,r,Je),pl(l,0)!==0)break e;l.timeoutHandle=Jx(Xu.bind(null,l,a,wn,Wr,Fs,r,Je),e);break e}Xu(l,a,wn,Wr,Fs,r,Je)}}break}while(!0)}return We(n),Yx(n,On()),n=n.callbackNode===s?Bx.bind(null,n):null,n}function zx(n,e,s){var r=Hr,a=n.current.memoizedState.isDehydrated;if(a&&(is(n,s).flags|=256),s=Al(n,s),s!==2){if(td&&!a)return n.errorRecoveryDisabledLanes|=e,rr|=e,4;n=wn,wn=r,n!==null&&Yc(n)}return s}function Yc(n){wn===null?wn=n:wn.push.apply(wn,n)}function Xu(n,e,s,r,a,l,i){if(!(l&42)&&(na={stylesheets:null,count:0,unsuspend:Tv},$x(e),e=Ov(),e!==null)){n.cancelPendingCommit=e(Fc.bind(null,n,s,r,a)),Tn(n,l,i);return}Fc(n,s,r,a,i)}function Wj(n){for(var e=n;;){if(e.flags&16384){var s=e.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var r=0;r<s.length;r++){var a=s[r],l=a.getSnapshot;a=a.value;try{if(!hn(l(),a))return!1}catch{return!1}}}if(s=e.child,e.subtreeFlags&16384&&s!==null)s.return=e,e=s;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ga(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0),te&2?Fs=!0:te&4&&(Cl=!0),ld()}function Tn(n,e,s){e&=~sd,e&=~rr,n.suspendedLanes|=e,n.pingedLanes&=~e;for(var r=n.expirationTimes,a=e;0<a;){var l=31-pn(a),i=1<<l;r[l]=-1,a&=~i}s!==0&&Vh(n,s,e)}function Kj(n,e){if(te&6)throw Error(w(327));if(Us())return We(n),null;var s=Al(n,e);if(s===2){var r=e,a=Uh(n,r);a!==0&&(e=a,s=zx(n,r,a))}return s===1?(is(n,0),Tn(n,e,0),We(n),null):s===6?(Tn(n,e,Je),We(n),null):(n.finishedWork=n.current.alternate,n.finishedLanes=e,Fc(n,wn,Wr,Fs,Je),We(n),null)}function si(){return te&6?!0:(ja(),!1)}function ad(){if(Q!==null){if(he===0)var n=Q.return;else n=Q,ti(),Vo(n),Ts=null,Qr=0,n=Q;for(;n!==null;)Dx(n.alternate,n),n=n.return;Q=null}}function is(n,e){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,gv(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),ad(),ae=n,Q=s=_t(n.current,null),W=e,he=0,ln=null,td=!1,Je=sd=rr=lt=ge=0,wn=Hr=null,Fs=!1,e&8&&(e|=e&32);var r=n.entangledLanes;if(r!==0)for(n=n.entanglements,r&=e;0<r;){var a=31-pn(r),l=1<<a;e|=n[a],r&=~l}return at=e,Pl(),s}function Ux(n,e){X=null,F.H=Un,e===Wa?(e=ku(),he=Hx()&&!(lt&134217727)&&!(rr&134217727)?2:3):e===vf?(e=ku(),he=4):he=e===ix?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ln=e,Q===null&&(ge=1,Sl(n,mn(e,n.current)))}function Hx(){var n=zn.current;return n===null?!0:(W&4194176)===W?Bn===null:(W&62914560)===W||W&536870912?n===Bn:!1}function qx(){var n=F.H;return F.H=Un,n===null?Un:n}function Vx(){var n=F.A;return F.A=Qj,n}function Ic(){ge=4,!(lt&134217727)&&!(rr&134217727)||ae===null||Tn(ae,W,Je)}function Al(n,e){var s=te;te|=2;var r=qx(),a=Vx();(ae!==n||W!==e)&&(Wr=null,is(n,e)),e=!1;e:do try{if(he!==0&&Q!==null){var l=Q,i=ln;switch(he){case 8:ad(),ge=6;break e;case 3:case 2:e||zn.current!==null||(e=!0);default:he=0,ln=null,_r(n,l,i)}}ev();break}catch(c){Ux(n,c)}while(!0);if(e&&n.shellSuspendCounter++,ti(),te=s,F.H=r,F.A=a,Q!==null)throw Error(w(261));return ae=null,W=0,Pl(),ge}function ev(){for(;Q!==null;)Xx(Q)}function nv(n,e){var s=te;te|=2;var r=qx(),a=Vx();(ae!==n||W!==e)&&(Wr=null,_l=On()+500,is(n,e));e:do try{if(he!==0&&Q!==null){e=Q;var l=ln;n:switch(he){case 1:he=0,ln=null,_r(n,e,l);break;case 2:if(Su(l)){he=0,ln=null,Zu(e);break}e=function(){he===2&&ae===n&&(he=7),We(n)},l.then(e,e);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:Su(l)?(he=0,ln=null,Zu(e)):(he=0,ln=null,_r(n,e,l));break;case 5:switch(Q.tag){case 5:case 26:case 27:e=Q,he=0,ln=null;var i=e.sibling;if(i!==null)Q=i;else{var c=e.return;c!==null?(Q=c,ri(c)):Q=null}break n}he=0,ln=null,_r(n,e,l);break;case 6:he=0,ln=null,_r(n,e,l);break;case 8:ad(),ge=6;break e;default:throw Error(w(462))}}tv();break}catch(o){Ux(n,o)}while(!0);return ti(),F.H=r,F.A=a,te=s,Q!==null?0:(ae=null,W=0,Pl(),ge)}function tv(){for(;Q!==null&&!wg();)Xx(Q)}function Xx(n){var e=mx(n.alternate,n,at);n.memoizedProps=n.pendingProps,e===null?ri(n):Q=e}function Zu(n){var e=n.alternate;switch(n.tag){case 15:case 0:e=Tu(e,n,n.pendingProps,n.type,void 0,W);break;case 11:e=Tu(e,n,n.pendingProps,n.type.render,n.ref,W);break;case 5:Vo(n);default:Dx(e,n),n=Q=Ex(n,at),e=mx(e,n,at)}n.memoizedProps=n.pendingProps,e===null?ri(n):Q=e}function _r(n,e,s){ti(),Vo(e),Ts=null,Qr=0;var r=e.return;try{if(Xj(n,r,e,s,W)){ge=1,Sl(n,mn(s,n.current)),Q=null;return}}catch(a){if(r!==null)throw Q=r,a;ge=1,Sl(n,mn(s,n.current)),Q=null;return}if(e.flags&32768)e:{n=e;do{if(e=Pj(n.alternate,n),e!==null){e.flags&=32767,Q=e;break e}n=n.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),Q=n}while(n!==null);ge=6,Q=null}else ri(e)}function ri(n){var e=n;do{n=e.return;var s=Fj(e.alternate,e,at);if(s!==null){Q=s;return}if(e=e.sibling,e!==null){Q=e;return}Q=e=n}while(e!==null);ge===0&&(ge=5)}function Fc(n,e,s,r,a){var l=F.T,i=ue.p;try{ue.p=2,F.T=null,sv(n,e,s,r,i,a)}finally{F.T=l,ue.p=i}return null}function sv(n,e,s,r,a,l){do Us();while(Xt!==null);if(te&6)throw Error(w(327));var i=n.finishedWork,c=n.finishedLanes;if(i===null)return null;if(n.finishedWork=null,n.finishedLanes=0,i===n.current)throw Error(w(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var o=i.lanes|i.childLanes;if(o|=Mo,Tg(n,o,l),Cl=!1,n===ae&&(Q=ae=null,W=0),!(i.subtreeFlags&10256)&&!(i.flags&10256)||Ha||(Ha=!0,Xc=o,Zc=s,iv(ml,function(){return Us(),null})),s=(i.flags&15990)!==0,i.subtreeFlags&15990||s){s=F.T,F.T=null,l=ue.p,ue.p=2;var d=te;te|=4,Gj(n,i),kx(i,n),kj(Wc),Ol=!!Jc,Wc=Jc=null,n.current=i,bx(n,i.alternate,i),Sg(),te=d,ue.p=l,F.T=s}else n.current=i;if(Ha?(Ha=!1,Xt=n,qr=c):Zx(n,o),o=n.pendingLanes,o===0&&(At=null),$g(i.stateNode),We(n),e!==null)for(a=n.onRecoverableError,i=0;i<e.length;i++)o=e[i],a(o.value,{componentStack:o.stack});return qr&3&&Us(),o=n.pendingLanes,r||Cl||c&4194218&&o&42?n===Gc?Vr++:(Vr=0,Gc=n):Vr=0,ja(),null}function Zx(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,fa(e)))}function Us(){if(Xt!==null){var n=Xt,e=Xc;Xc=0;var s=Zh(qr),r=F.T,a=ue.p;try{if(ue.p=32>s?32:s,F.T=null,Xt===null)var l=!1;else{s=Zc,Zc=null;var i=Xt,c=qr;if(Xt=null,qr=0,te&6)throw Error(w(331));var o=te;if(te|=4,Rx(i.current),Ax(i,i.current,c,s),te=o,ja(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(ma,i)}catch{}l=!0}return l}finally{ue.p=a,F.T=r,Zx(n,e)}}return!1}function Gu(n,e,s){e=mn(s,e),e=Lc(n.stateNode,e,2),n=Ct(n,e,2),n!==null&&(ga(n,2),We(n))}function le(n,e,s){if(n.tag===3)Gu(n,n,s);else for(;e!==null;){if(e.tag===3){Gu(e,n,s);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){n=mn(s,n),s=ax(2),r=Ct(e,s,2),r!==null&&(lx(s,r,e,n),ga(r,2),We(r));break}}e=e.return}}function Vi(n,e,s){var r=n.pingCache;if(r===null){r=n.pingCache=new Jj;var a=new Set;r.set(e,a)}else a=r.get(e),a===void 0&&(a=new Set,r.set(e,a));a.has(s)||(td=!0,a.add(s),n=rv.bind(null,n,e,s),e.then(n,n))}function rv(n,e,s){var r=n.pingCache;r!==null&&r.delete(e),n.pingedLanes|=n.suspendedLanes&s,te&2?Fs=!0:te&4&&(Cl=!0),ld(),ae===n&&(W&s)===s&&(ge===4||ge===3&&(W&62914560)===W&&300>On()-rd?!(te&2)&&is(n,0):sd|=s),We(n)}function Gx(n,e){e===0&&(e=qh()),n=Et(n,e),n!==null&&(ga(n,e),We(n))}function av(n){var e=n.memoizedState,s=0;e!==null&&(s=e.retryLane),Gx(n,s)}function lv(n,e){var s=0;switch(n.tag){case 13:var r=n.stateNode,a=n.memoizedState;a!==null&&(s=a.retryLane);break;case 19:r=n.stateNode;break;case 22:r=n.stateNode._retryCache;break;default:throw Error(w(314))}r!==null&&r.delete(e),Gx(n,s)}function ld(){if(50<Vr)throw Vr=0,Gc=null,te&2&&ae!==null&&(ae.errorRecoveryDisabledLanes|=W),Error(w(185))}function iv(n,e){return yo(n,e)}var $l=null,vs=null,Pc=!1,Ml=!1,Xi=!1,Qt=0;function We(n){n!==vs&&n.next===null&&(vs===null?$l=vs=n:vs=vs.next=n),Ml=!0,Pc||(Pc=!0,ov(cv))}function ja(){if(!Xi&&Ml){Xi=!0;do for(var n=!1,e=$l;e!==null;){var s=W;s=pl(e,e===ae?s:0),s&3&&(n=!0,Kj(e,s)),e=e.next}while(n);Xi=!1}}function cv(){Ml=Pc=!1;for(var n=On(),e=null,s=$l;s!==null;){var r=s.next;if(Qt!==0&&xv()){var a=s,l=Qt;a.pendingLanes|=2,a.entangledLanes|=2,a.entanglements[1]|=l}a=Yx(s,n),a===0?(s.next=null,e===null?$l=r:e.next=r,r===null&&(vs=e)):(e=s,a&3&&(Ml=!0)),s=r}Qt=0,ja()}function Yx(n,e){for(var s=n.suspendedLanes,r=n.pingedLanes,a=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var i=31-pn(l),c=1<<i,o=a[i];o===-1?(!(c&s)||c&r)&&(a[i]=Eg(c,e)):o<=e&&(n.expiredLanes|=c),l&=~c}if(e=ae,s=W,s=pl(n,n===e?s:0),r=n.callbackNode,s===0||n===e&&he===2||n.cancelPendingCommit!==null)return r!==null&&r!==null&&fi(r),n.callbackNode=null,n.callbackPriority=0;if(s&3)return r!==null&&r!==null&&fi(r),n.callbackPriority=2,n.callbackNode=null,2;if(e=s&-s,e===n.callbackPriority)return e;switch(r!==null&&fi(r),Zh(s)){case 2:s=No;break;case 8:s=Bh;break;case 32:s=ml;break;case 268435456:s=zh;break;default:s=ml}return r=Bx.bind(null,n),s=yo(s,r),n.callbackPriority=e,n.callbackNode=s,e}function ov(n){jv(function(){te&6?yo(No,n):n()})}function id(){return Qt===0&&(Qt=Hh()),Qt}function Yu(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Pa(""+n)}function Iu(n,e){var s=e.ownerDocument.createElement("input");return s.name=e.name,s.value=e.value,n.id&&s.setAttribute("form",n.id),e.parentNode.insertBefore(s,e),n=new FormData(n),s.parentNode.removeChild(s),n}function dv(n,e,s,r,a){if(e==="submit"&&s&&s.stateNode===a){var l=Yu((a[Ye]||null).action),i=r.submitter;i&&(e=(e=i[Ye]||null)?Yu(e.formAction):i.getAttribute("formAction"),e!==null&&(l=e,i=null));var c=new Yl("action","action",null,r,a);n.push({event:c,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Qt!==0){var o=i?Iu(a,i):new FormData(a);Rc(s,{pending:!0,data:o,method:a.method,action:l},null,o)}}else typeof l=="function"&&(c.preventDefault(),o=i?Iu(a,i):new FormData(a),Rc(s,{pending:!0,data:o,method:a.method,action:l},l,o))},currentTarget:a}]})}}for(var Zi=0;Zi<bu.length;Zi++){var Gi=bu[Zi],uv=Gi.toLowerCase(),mv=Gi[0].toUpperCase()+Gi.slice(1);_n(uv,"on"+mv)}_n(mf,"onAnimationEnd");_n(pf,"onAnimationIteration");_n(hf,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(_j,"onTransitionRun");_n(Aj,"onTransitionStart");_n($j,"onTransitionCancel");_n(ff,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pv=new Set("cancel close invalid load scroll scrollend toggle".split(" ").concat(Kr));function Ix(n,e){e=(e&4)!==0;for(var s=0;s<n.length;s++){var r=n[s],a=r.event;r=r.listeners;e:{var l=void 0;if(e)for(var i=r.length-1;0<=i;i--){var c=r[i],o=c.instance,d=c.currentTarget;if(c=c.listener,o!==l&&a.isPropagationStopped())break e;l=c,a.currentTarget=d;try{l(a)}catch(m){wl(m)}a.currentTarget=null,l=o}else for(i=0;i<r.length;i++){if(c=r[i],o=c.instance,d=c.currentTarget,c=c.listener,o!==l&&a.isPropagationStopped())break e;l=c,a.currentTarget=d;try{l(a)}catch(m){wl(m)}a.currentTarget=null,l=o}}}}function ne(n,e){var s=e[jc];s===void 0&&(s=e[jc]=new Set);var r=n+"__bubble";s.has(r)||(Fx(e,n,2,!1),s.add(r))}function Yi(n,e,s){var r=0;e&&(r|=4),Fx(s,n,r,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function cd(n){if(!n[qa]){n[qa]=!0,Yh.forEach(function(s){s!=="selectionchange"&&(pv.has(s)||Yi(s,!1,n),Yi(s,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[qa]||(e[qa]=!0,Yi("selectionchange",!1,e))}}function Fx(n,e,s,r){switch(a0(e)){case 2:var a=Hv;break;case 8:a=qv;break;default:a=md}s=a.bind(null,e,s,n),a=void 0,!wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),r?a!==void 0?n.addEventListener(e,s,{capture:!0,passive:a}):n.addEventListener(e,s,!0):a!==void 0?n.addEventListener(e,s,{passive:a}):n.addEventListener(e,s,!1)}function Ii(n,e,s,r,a){var l=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var c=r.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var o=i.tag;if((o===3||o===4)&&(o=i.stateNode.containerInfo,o===a||o.nodeType===8&&o.parentNode===a))return;i=i.return}for(;c!==null;){if(i=Zt(c),i===null)return;if(o=i.tag,o===5||o===6||o===26||o===27){r=l=i;continue e}c=c.parentNode}}r=r.return}ef(function(){var d=l,m=ko(s),h=[];e:{var p=xf.get(n);if(p!==void 0){var j=Yl,y=n;switch(n){case"keypress":if(Ja(s)===0)break e;case"keydown":case"keyup":j=lj;break;case"focusin":y="focus",j=Si;break;case"focusout":y="blur",j=Si;break;case"beforeblur":case"afterblur":j=Si;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=oj;break;case mf:case pf:case hf:j=Jg;break;case ff:j=uj;break;case"scroll":case"scrollend":j=Yg;break;case"wheel":j=pj;break;case"copy":case"cut":case"paste":j=Kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=du}var b=(e&4)!==0,N=!b&&(n==="scroll"||n==="scrollend"),x=b?p!==null?p+"Capture":null:p;b=[];for(var f=d,g;f!==null;){var v=f;if(g=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||g===null||x===null||(v=Yr(f,x),v!=null&&b.push(ea(f,v,g))),N)break;f=f.return}0<b.length&&(p=new j(p,y,null,s,m),h.push({event:p,listeners:b}))}}if(!(e&7)){e:{if(p=n==="mouseover"||n==="pointerover",j=n==="mouseout"||n==="pointerout",p&&s!==Nc&&(y=s.relatedTarget||s.fromElement)&&(Zt(y)||y[nr]))break e;if((j||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,j?(y=s.relatedTarget||s.toElement,j=d,y=y?Zt(y):null,y!==null&&(N=er(y),b=y.tag,y!==N||b!==5&&b!==27&&b!==6)&&(y=null)):(j=null,y=d),j!==y)){if(b=cu,v="onMouseLeave",x="onMouseEnter",f="mouse",(n==="pointerout"||n==="pointerover")&&(b=du,v="onPointerLeave",x="onPointerEnter",f="pointer"),N=j==null?p:Sr(j),g=y==null?p:Sr(y),p=new b(v,f+"leave",j,s,m),p.target=N,p.relatedTarget=g,v=null,Zt(m)===d&&(b=new b(x,f+"enter",y,s,m),b.target=g,b.relatedTarget=N,v=b),N=v,j&&y)n:{for(b=j,x=y,f=0,g=b;g;g=fs(g))f++;for(g=0,v=x;v;v=fs(v))g++;for(;0<f-g;)b=fs(b),f--;for(;0<g-f;)x=fs(x),g--;for(;f--;){if(b===x||x!==null&&b===x.alternate)break n;b=fs(b),x=fs(x)}b=null}else b=null;j!==null&&Fu(h,p,j,b,!1),y!==null&&N!==null&&Fu(h,N,y,b,!0)}}e:{if(p=d?Sr(d):window,j=p.nodeName&&p.nodeName.toLowerCase(),j==="select"||j==="input"&&p.type==="file")var k=hu;else if(pu(p))if(lf)k=wj;else{k=yj;var C=bj}else j=p.nodeName,!j||j.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?d&&So(d.elementType)&&(k=hu):k=Nj;if(k&&(k=k(n,d))){af(h,k,s,m);break e}C&&C(n,p,d),n==="focusout"&&d&&p.type==="number"&&d.memoizedProps.value!=null&&yc(p,"number",p.value)}switch(C=d?Sr(d):window,n){case"focusin":(pu(C)||C.contentEditable==="true")&&(ws=C,Sc=d,Lr=null);break;case"focusout":Lr=Sc=ws=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,vu(h,s,m);break;case"selectionchange":if(Cj)break;case"keydown":case"keyup":vu(h,s,m)}var $;if(Ao)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ns?sf(n,s)&&(R="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(R="onCompositionStart");R&&(tf&&s.locale!=="ko"&&(Ns||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ns&&($=nf()):(Nt=m,Co="value"in Nt?Nt.value:Nt.textContent,Ns=!0)),C=Rl(d,R),0<C.length&&(R=new ou(R,n,null,s,m),h.push({event:R,listeners:C}),$?R.data=$:($=rf(s),$!==null&&(R.data=$)))),($=fj?xj(n,s):gj(n,s))&&(R=Rl(d,"onBeforeInput"),0<R.length&&(C=new ou("onBeforeInput","beforeinput",null,s,m),h.push({event:C,listeners:R}),C.data=$)),dv(h,n,d,s,m)}Ix(h,e)})}function ea(n,e,s){return{instance:n,listener:e,currentTarget:s}}function Rl(n,e){for(var s=e+"Capture",r=[];n!==null;){var a=n,l=a.stateNode;a=a.tag,a!==5&&a!==26&&a!==27||l===null||(a=Yr(n,s),a!=null&&r.unshift(ea(n,a,l)),a=Yr(n,e),a!=null&&r.push(ea(n,a,l))),n=n.return}return r}function fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Fu(n,e,s,r,a){for(var l=e._reactName,i=[];s!==null&&s!==r;){var c=s,o=c.alternate,d=c.stateNode;if(c=c.tag,o!==null&&o===r)break;c!==5&&c!==26&&c!==27||d===null||(o=d,a?(d=Yr(s,l),d!=null&&i.unshift(ea(s,d,o))):a||(d=Yr(s,l),d!=null&&i.push(ea(s,d,o)))),s=s.return}i.length!==0&&n.push({event:e,listeners:i})}var hv=/\r\n?/g,fv=/\u0000|\uFFFD/g;function Pu(n){return(typeof n=="string"?n:""+n).replace(hv,`
`).replace(fv,"")}function Px(n,e){return e=Pu(e),Pu(n)===e}function ai(){}function de(n,e,s,r,a,l){switch(s){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Xs(n,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Xs(n,""+r);break;case"className":gi(n,"class",r);break;case"tabIndex":gi(n,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":gi(n,s,r);break;case"style":Kh(n,r,l);break;case"src":case"href":if(r===""&&(e!=="a"||s!=="href")){n.removeAttribute(s);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){n.removeAttribute(s);break}r=Pa(""+r),n.setAttribute(s,r);break;case"action":case"formAction":if(typeof r=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(s==="formAction"?(e!=="input"&&de(n,e,"name",a.name,a,null),de(n,e,"formEncType",a.formEncType,a,null),de(n,e,"formMethod",a.formMethod,a,null),de(n,e,"formTarget",a.formTarget,a,null)):(de(n,e,"encType",a.encType,a,null),de(n,e,"method",a.method,a,null),de(n,e,"target",a.target,a,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){n.removeAttribute(s);break}r=Pa(""+r),n.setAttribute(s,r);break;case"onClick":r!=null&&(n.onclick=ai);break;case"onScroll":r!=null&&ne("scroll",n);break;case"onScrollEnd":r!=null&&ne("scrollend",n);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(w(61));if(s=r.__html,s!=null){if(a.children!=null)throw Error(w(60));n.innerHTML=s}}break;case"multiple":n.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":n.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){n.removeAttribute("xlink:href");break}s=Pa(""+r),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(s,""+r):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":r===!0?n.setAttribute(s,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(s,r):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?n.setAttribute(s,r):n.removeAttribute(s);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?n.removeAttribute(s):n.setAttribute(s,r);break;case"xlinkActuate":Zn(n,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Zn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Zn(n,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Zn(n,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Zn(n,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Zn(n,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Zn(n,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Zn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Zn(n,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":vc(n,"is",r);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Zg.get(s)||s,vc(n,s,r))}}function Qc(n,e,s,r,a,l){switch(s){case"style":Kh(n,r,l);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(w(61));if(s=r.__html,s!=null){if(a.children!=null)throw Error(w(60));n.innerHTML=s}}break;case"children":typeof r=="string"?Xs(n,r):(typeof r=="number"||typeof r=="bigint")&&Xs(n,""+r);break;case"onScroll":r!=null&&ne("scroll",n);break;case"onScrollEnd":r!=null&&ne("scrollend",n);break;case"onClick":r!=null&&(n.onclick=ai);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ih.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(a=s.endsWith("Capture"),e=s.slice(2,a?s.length-7:void 0),l=n[Ye]||null,l=l!=null?l[s]:null,typeof l=="function"&&n.removeEventListener(e,l,a),typeof r=="function")){typeof l!="function"&&l!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(e,r,a);break e}s in n?n[s]=r:r===!0?n.setAttribute(s,""):vc(n,s,r)}}}function Oe(n,e,s){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":ne("invalid",n);var r=null,a=null,l=null,i=null,c=null,o=null;for(m in s)if(s.hasOwnProperty(m)){var d=s[m];if(d!=null)switch(m){case"name":r=d;break;case"type":a=d;break;case"checked":c=d;break;case"defaultChecked":o=d;break;case"value":l=d;break;case"defaultValue":i=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(w(137,e));break;default:de(n,e,m,d,s,null)}}Qh(n,l,i,c,o,a,r,!1),hl(n);return;case"select":ne("invalid",n);var m=a=l=null;for(r in s)if(s.hasOwnProperty(r)&&(i=s[r],i!=null))switch(r){case"value":l=i;break;case"defaultValue":a=i;break;case"multiple":m=i;default:de(n,e,r,i,s,null)}e=l,s=a,n.multiple=!!m,e!=null?Ls(n,!!m,e,!1):s!=null&&Ls(n,!!m,s,!0);return;case"textarea":ne("invalid",n),l=r=m=null;for(a in s)if(s.hasOwnProperty(a)&&(i=s[a],i!=null))switch(a){case"value":m=i;break;case"defaultValue":r=i;break;case"children":l=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(w(91));break;default:de(n,e,a,i,s,null)}Wh(n,m,r,l),hl(n);return;case"option":for(i in s)if(s.hasOwnProperty(i)&&(m=s[i],m!=null))switch(i){case"selected":n.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:de(n,e,i,m,s,null)}return;case"dialog":ne("cancel",n),ne("close",n);break;case"iframe":case"object":ne("load",n);break;case"video":case"audio":for(m=0;m<Kr.length;m++)ne(Kr[m],n);break;case"image":ne("error",n),ne("load",n);break;case"details":ne("toggle",n);break;case"embed":case"source":case"img":case"link":ne("error",n),ne("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in s)if(s.hasOwnProperty(c)&&(m=s[c],m!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(w(137,e));default:de(n,e,c,m,s,null)}return;default:if(So(e)){for(o in s)s.hasOwnProperty(o)&&(m=s[o],m!==void 0&&Qc(n,e,o,m,s,void 0));return}}for(l in s)s.hasOwnProperty(l)&&(m=s[l],m!=null&&de(n,e,l,m,s,null))}function Qu(n,e,s,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,i=null,c=null,o=null,d=null,m=null;for(j in s){var h=s[j];if(s.hasOwnProperty(j)&&h!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":o=h;default:r.hasOwnProperty(j)||de(n,e,j,null,r,h)}}for(var p in r){var j=r[p];if(h=s[p],r.hasOwnProperty(p)&&(j!=null||h!=null))switch(p){case"type":l=j;break;case"name":a=j;break;case"checked":d=j;break;case"defaultChecked":m=j;break;case"value":i=j;break;case"defaultValue":c=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(w(137,e));break;default:j!==h&&de(n,e,p,j,r,h)}}bc(n,i,c,o,d,m,l,a);return;case"select":j=i=c=p=null;for(l in s)if(o=s[l],s.hasOwnProperty(l)&&o!=null)switch(l){case"value":break;case"multiple":j=o;default:r.hasOwnProperty(l)||de(n,e,l,null,r,o)}for(a in r)if(l=r[a],o=s[a],r.hasOwnProperty(a)&&(l!=null||o!=null))switch(a){case"value":p=l;break;case"defaultValue":c=l;break;case"multiple":i=l;default:l!==o&&de(n,e,a,l,r,o)}e=c,s=i,r=j,p!=null?Ls(n,!!s,p,!1):!!r!=!!s&&(e!=null?Ls(n,!!s,e,!0):Ls(n,!!s,s?[]:"",!1));return;case"textarea":j=p=null;for(c in s)if(a=s[c],s.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:de(n,e,c,null,r,a)}for(i in r)if(a=r[i],l=s[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case"value":p=a;break;case"defaultValue":j=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(w(91));break;default:a!==l&&de(n,e,i,a,r,l)}Jh(n,p,j);return;case"option":for(var y in s)if(p=s[y],s.hasOwnProperty(y)&&p!=null&&!r.hasOwnProperty(y))switch(y){case"selected":n.selected=!1;break;default:de(n,e,y,null,r,p)}for(o in r)if(p=r[o],j=s[o],r.hasOwnProperty(o)&&p!==j&&(p!=null||j!=null))switch(o){case"selected":n.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:de(n,e,o,p,r,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in s)p=s[b],s.hasOwnProperty(b)&&p!=null&&!r.hasOwnProperty(b)&&de(n,e,b,null,r,p);for(d in r)if(p=r[d],j=s[d],r.hasOwnProperty(d)&&p!==j&&(p!=null||j!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(w(137,e));break;default:de(n,e,d,p,r,j)}return;default:if(So(e)){for(var N in s)p=s[N],s.hasOwnProperty(N)&&p!==void 0&&!r.hasOwnProperty(N)&&Qc(n,e,N,void 0,r,p);for(m in r)p=r[m],j=s[m],!r.hasOwnProperty(m)||p===j||p===void 0&&j===void 0||Qc(n,e,m,p,r,j);return}}for(var x in s)p=s[x],s.hasOwnProperty(x)&&p!=null&&!r.hasOwnProperty(x)&&de(n,e,x,null,r,p);for(h in r)p=r[h],j=s[h],!r.hasOwnProperty(h)||p===j||p==null&&j==null||de(n,e,h,p,r,j)}var Jc=null,Wc=null;function Ll(n){return n.nodeType===9?n:n.ownerDocument}function Ju(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qx(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Kc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fi=null;function xv(){var n=window.event;return n&&n.type==="popstate"?n===Fi?!1:(Fi=n,!0):(Fi=null,!1)}var Jx=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,Wu=typeof Promise=="function"?Promise:void 0,jv=typeof queueMicrotask=="function"?queueMicrotask:typeof Wu<"u"?function(n){return Wu.resolve(null).then(n).catch(vv)}:Jx;function vv(n){setTimeout(function(){throw n})}function Pi(n,e){var s=e,r=0;do{var a=s.nextSibling;if(n.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(r===0){n.removeChild(a),ra(e);return}r--}else s!=="$"&&s!=="$?"&&s!=="$!"||r++;s=a}while(s);ra(e)}function eo(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var s=e;switch(e=e.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":eo(s),wo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function bv(n,e,s,r){for(;n.nodeType===1;){var a=s;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(r){if(!n[Gr])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==a.rel||n.getAttribute("href")!==(a.href==null?null:a.href)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||n.getAttribute("title")!==(a.title==null?null:a.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(a.src==null?null:a.src)||n.getAttribute("type")!==(a.type==null?null:a.type)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=a.name==null?null:""+a.name;if(a.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=kn(n.nextSibling),n===null)break}return null}function yv(n,e,s){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=kn(n.nextSibling),n===null))return null;return n}function kn(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return n}function Ku(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(e===0)return n;e--}else s==="/$"&&e++}n=n.previousSibling}return null}function Wx(n,e,s){switch(e=Ll(s),n){case"html":if(n=e.documentElement,!n)throw Error(w(452));return n;case"head":if(n=e.head,!n)throw Error(w(453));return n;case"body":if(n=e.body,!n)throw Error(w(454));return n;default:throw Error(w(451))}}var fn=new Map,em=new Set;function El(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var it=ue.d;ue.d={f:Nv,r:wv,D:Sv,C:kv,L:Cv,m:_v,X:$v,S:Av,M:Mv};function Nv(){var n=it.f(),e=si();return n||e}function wv(n){var e=tr(n);e!==null&&e.tag===5&&e.type==="form"?Jf(e):it.r(n)}var ar=typeof document>"u"?null:document;function Kx(n,e,s){var r=ar;if(r&&typeof e=="string"&&e){var a=un(e);a='link[rel="'+n+'"][href="'+a+'"]',typeof s=="string"&&(a+='[crossorigin="'+s+'"]'),em.has(a)||(em.add(a),n={rel:n,crossOrigin:s,href:e},r.querySelector(a)===null&&(e=r.createElement("link"),Oe(e,"link",n),Me(e),r.head.appendChild(e)))}}function Sv(n){it.D(n),Kx("dns-prefetch",n,null)}function kv(n,e){it.C(n,e),Kx("preconnect",n,e)}function Cv(n,e,s){it.L(n,e,s);var r=ar;if(r&&n&&e){var a='link[rel="preload"][as="'+un(e)+'"]';e==="image"&&s&&s.imageSrcSet?(a+='[imagesrcset="'+un(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(a+='[imagesizes="'+un(s.imageSizes)+'"]')):a+='[href="'+un(n)+'"]';var l=a;switch(e){case"style":l=Ps(n);break;case"script":l=lr(n)}fn.has(l)||(n=pe({rel:"preload",href:e==="image"&&s&&s.imageSrcSet?void 0:n,as:e},s),fn.set(l,n),r.querySelector(a)!==null||e==="style"&&r.querySelector(va(l))||e==="script"&&r.querySelector(ba(l))||(e=r.createElement("link"),Oe(e,"link",n),Me(e),r.head.appendChild(e)))}}function _v(n,e){it.m(n,e);var s=ar;if(s&&n){var r=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+un(r)+'"][href="'+un(n)+'"]',l=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=lr(n)}if(!fn.has(l)&&(n=pe({rel:"modulepreload",href:n},e),fn.set(l,n),s.querySelector(a)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ba(l)))return}r=s.createElement("link"),Oe(r,"link",n),Me(r),s.head.appendChild(r)}}}function Av(n,e,s){it.S(n,e,s);var r=ar;if(r&&n){var a=Rs(r).hoistableStyles,l=Ps(n);e=e||"default";var i=a.get(l);if(!i){var c={loading:0,preload:null};if(i=r.querySelector(va(l)))c.loading=5;else{n=pe({rel:"stylesheet",href:n,"data-precedence":e},s),(s=fn.get(l))&&od(n,s);var o=i=r.createElement("link");Me(o),Oe(o,"link",n),o._p=new Promise(function(d,m){o.onload=d,o.onerror=m}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,rl(i,e,r)}i={type:"stylesheet",instance:i,count:1,state:c},a.set(l,i)}}}function $v(n,e){it.X(n,e);var s=ar;if(s&&n){var r=Rs(s).hoistableScripts,a=lr(n),l=r.get(a);l||(l=s.querySelector(ba(a)),l||(n=pe({src:n,async:!0},e),(e=fn.get(a))&&dd(n,e),l=s.createElement("script"),Me(l),Oe(l,"link",n),s.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}}function Mv(n,e){it.M(n,e);var s=ar;if(s&&n){var r=Rs(s).hoistableScripts,a=lr(n),l=r.get(a);l||(l=s.querySelector(ba(a)),l||(n=pe({src:n,async:!0,type:"module"},e),(e=fn.get(a))&&dd(n,e),l=s.createElement("script"),Me(l),Oe(l,"link",n),s.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}}function Rv(n,e,s){if(e=(e=kt.current)?El(e):null,!e)throw Error(w(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(s=Ps(s.href),e=Rs(e).hoistableStyles,n=e.get(s),n||(n={type:"style",instance:null,count:0,state:null},e.set(s,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=Ps(s.href);var r=Rs(e).hoistableStyles,a=r.get(n);return a||(e=e.ownerDocument||e,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(n,a),fn.has(n)||Lv(e,n,{rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},a.state)),a}return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(s=lr(s),e=Rs(e).hoistableScripts,n=e.get(s),n||(n={type:"script",instance:null,count:0,state:null},e.set(s,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(w(444,n))}}function Ps(n){return'href="'+un(n)+'"'}function va(n){return'link[rel="stylesheet"]['+n+"]"}function e0(n){return pe({},n,{"data-precedence":n.precedence,precedence:null})}function Lv(n,e,s,r){fn.set(e,s),n.querySelector(va(e))||(n.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=n.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),Oe(e,"link",s),Me(e),n.head.appendChild(e)))}function lr(n){return'[src="'+un(n)+'"]'}function ba(n){return"script[async]"+n}function nm(n,e,s){if(e.count++,e.instance===null)switch(e.type){case"style":var r=n.querySelector('style[data-href~="'+un(s.href)+'"]');if(r)return e.instance=r,Me(r),r;var a=pe({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return r=(n.ownerDocument||n).createElement("style"),Me(r),Oe(r,"style",a),rl(r,s.precedence,n),e.instance=r;case"stylesheet":a=Ps(s.href);var l=n.querySelector(va(a));if(l)return e.state.loading|=4,e.instance=l,Me(l),l;r=e0(s),(a=fn.get(a))&&od(r,a),l=(n.ownerDocument||n).createElement("link"),Me(l);var i=l;return i._p=new Promise(function(c,o){i.onload=c,i.onerror=o}),Oe(l,"link",r),e.state.loading|=4,rl(l,s.precedence,n),e.instance=l;case"script":return l=lr(s.src),(a=n.querySelector(ba(l)))?(e.instance=a,Me(a),a):(r=s,(a=fn.get(l))&&(r=pe({},s),dd(r,a)),n=n.ownerDocument||n,a=n.createElement("script"),Me(a),Oe(a,"link",r),n.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(w(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(r=e.instance,e.state.loading|=4,rl(r,s.precedence,n));return e.instance}function rl(n,e,s){for(var r=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,l=a,i=0;i<r.length;i++){var c=r[i];if(c.dataset.precedence===e)l=c;else if(l!==a)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=s.nodeType===9?s.head:s,e.insertBefore(n,e.firstChild))}function od(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function dd(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var al=null;function tm(n,e,s){if(al===null){var r=new Map,a=al=new Map;a.set(s,r)}else a=al,r=a.get(s),r||(r=new Map,a.set(s,r));if(r.has(n))return r;for(r.set(n,null),s=s.getElementsByTagName(n),a=0;a<s.length;a++){var l=s[a];if(!(l[Gr]||l[ze]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var i=l.getAttribute(e)||"";i=n+i;var c=r.get(i);c?c.push(l):r.set(i,[l])}}return r}function sm(n,e,s){n=n.ownerDocument||n,n.head.insertBefore(s,e==="title"?n.querySelector("head > title"):null)}function Ev(n,e,s){if(s===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}var na=null;function Tv(){}function Dv(n,e,s){if(na===null)throw Error(w(475));var r=na;if(e.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var a=Ps(s.href),l=n.querySelector(va(a));if(l){n=l._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(r.count++,r=Tl.bind(r),n.then(r,r)),e.state.loading|=4,e.instance=l,Me(l);return}l=n.ownerDocument||n,s=e0(s),(a=fn.get(a))&&od(s,a),l=l.createElement("link"),Me(l);var i=l;i._p=new Promise(function(c,o){i.onload=c,i.onerror=o}),Oe(l,"link",s),e.instance=l}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,n),(n=e.state.preload)&&!(e.state.loading&3)&&(r.count++,e=Tl.bind(r),n.addEventListener("load",e),n.addEventListener("error",e))}}function Ov(){if(na===null)throw Error(w(475));var n=na;return n.stylesheets&&n.count===0&&no(n,n.stylesheets),0<n.count?function(e){var s=setTimeout(function(){if(n.stylesheets&&no(n,n.stylesheets),n.unsuspend){var r=n.unsuspend;n.unsuspend=null,r()}},6e4);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Tl(){if(this.count--,this.count===0){if(this.stylesheets)no(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Dl=null;function no(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Dl=new Map,e.forEach(Bv,n),Dl=null,Tl.call(n))}function Bv(n,e){if(!(e.state.loading&4)){var s=Dl.get(n);if(s)var r=s.get(null);else{s=new Map,Dl.set(n,s);for(var a=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var i=a[l];(i.nodeName==="link"||i.getAttribute("media")!=="not all")&&(s.set(i.dataset.precedence,i),r=i)}r&&s.set(null,r)}a=e.instance,i=a.getAttribute("data-precedence"),l=s.get(i)||r,l===r&&s.set(null,a),s.set(i,a),this.count++,r=Tl.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),l?l.parentNode.insertBefore(a,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(a,n.firstChild)),e.state.loading|=4}}function zv(n,e,s,r,a,l,i,c){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xi(0),this.hiddenUpdates=xi(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function n0(n,e,s,r,a,l,i,c,o,d,m,h,p){return n=new zv(n,e,s,c,o,d,m,p),e=1,l===!0&&(e|=24),l=Nn(3,null,null,e),n.current=l,l.stateNode=n,e=Do(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:r,isDehydrated:s,cache:e},Jo(l),n}function t0(n){return n?(n=Cs,n):Cs}function s0(n,e,s,r,a,l){a=t0(a),r.context===null?r.context=a:r.pendingContext=a,r=nt(e),r.payload={element:s},l=l===void 0?null:l,l!==null&&(r.callback=l),s=Ct(n,r,e),s!==null&&(Ie(s,n,e),Or(s,n,e))}function rm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<e?s:e}}function ud(n,e){rm(n,e),(n=n.alternate)&&rm(n,e)}function r0(n){if(n.tag===13){var e=Et(n,67108864);e!==null&&Ie(e,n,67108864),ud(n,67108864)}}function Uv(){return null}var Ol=!0;function Hv(n,e,s,r){var a=F.T;F.T=null;var l=ue.p;try{ue.p=2,md(n,e,s,r)}finally{ue.p=l,F.T=a}}function qv(n,e,s,r){var a=F.T;F.T=null;var l=ue.p;try{ue.p=8,md(n,e,s,r)}finally{ue.p=l,F.T=a}}function md(n,e,s,r){if(Ol){var a=to(r);if(a===null)Ii(n,e,r,Bl,s),am(n,r);else if(Xv(a,n,e,s,r))r.stopPropagation();else if(am(n,r),e&4&&-1<Vv.indexOf(n)){for(;a!==null;){var l=tr(a);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var i=wr(l.pendingLanes);if(i!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var o=1<<31-pn(i);c.entanglements[1]|=o,i&=~o}We(l),!(te&6)&&(_l=On()+500,ja())}}break;case 13:c=Et(l,2),c!==null&&Ie(c,l,2),si(),ud(l,2)}if(l=to(r),l===null&&Ii(n,e,r,Bl,s),l===a)break;a=l}a!==null&&r.stopPropagation()}else Ii(n,e,r,null,s)}}function to(n){return n=ko(n),pd(n)}var Bl=null;function pd(n){if(Bl=null,n=Zt(n),n!==null){var e=er(n);if(e===null)n=null;else{var s=e.tag;if(s===13){if(n=Th(e),n!==null)return n;n=null}else if(s===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Bl=n,null}function a0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kg()){case No:return 2;case Bh:return 8;case ml:case Cg:return 32;case zh:return 268435456;default:return 32}default:return 32}}var so=!1,$t=null,Mt=null,Rt=null,ta=new Map,sa=new Map,vt=[],Vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function am(n,e){switch(n){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function gr(n,e,s,r,a,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:s,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},e!==null&&(e=tr(e),e!==null&&r0(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function Xv(n,e,s,r,a){switch(e){case"focusin":return $t=gr($t,n,e,s,r,a),!0;case"dragenter":return Mt=gr(Mt,n,e,s,r,a),!0;case"mouseover":return Rt=gr(Rt,n,e,s,r,a),!0;case"pointerover":var l=a.pointerId;return ta.set(l,gr(ta.get(l)||null,n,e,s,r,a)),!0;case"gotpointercapture":return l=a.pointerId,sa.set(l,gr(sa.get(l)||null,n,e,s,r,a)),!0}return!1}function l0(n){var e=Zt(n.target);if(e!==null){var s=er(e);if(s!==null){if(e=s.tag,e===13){if(e=Th(s),e!==null){n.blockedOn=e,Dg(n.priority,function(){if(s.tag===13){var r=tt(),a=Et(s,r);a!==null&&Ie(a,s,r),ud(s,r)}});return}}else if(e===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ll(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var s=to(n.nativeEvent);if(s===null){s=n.nativeEvent;var r=new s.constructor(s.type,s);Nc=r,s.target.dispatchEvent(r),Nc=null}else return e=tr(s),e!==null&&r0(e),n.blockedOn=s,!1;e.shift()}return!0}function lm(n,e,s){ll(n)&&s.delete(e)}function Zv(){so=!1,$t!==null&&ll($t)&&($t=null),Mt!==null&&ll(Mt)&&(Mt=null),Rt!==null&&ll(Rt)&&(Rt=null),ta.forEach(lm),sa.forEach(lm)}function Va(n,e){n.blockedOn===e&&(n.blockedOn=null,so||(so=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Zv)))}var Xa=null;function im(n){Xa!==n&&(Xa=n,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,function(){Xa===n&&(Xa=null);for(var e=0;e<n.length;e+=3){var s=n[e],r=n[e+1],a=n[e+2];if(typeof r!="function"){if(pd(r||s)===null)continue;break}var l=tr(s);l!==null&&(n.splice(e,3),e-=3,Rc(l,{pending:!0,data:a,method:s.method,action:r},r,a))}}))}function ra(n){function e(o){return Va(o,n)}$t!==null&&Va($t,n),Mt!==null&&Va(Mt,n),Rt!==null&&Va(Rt,n),ta.forEach(e),sa.forEach(e);for(var s=0;s<vt.length;s++){var r=vt[s];r.blockedOn===n&&(r.blockedOn=null)}for(;0<vt.length&&(s=vt[0],s.blockedOn===null);)l0(s),s.blockedOn===null&&vt.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(r=0;r<s.length;r+=3){var a=s[r],l=s[r+1],i=a[Ye]||null;if(typeof l=="function")i||im(s);else if(i){var c=null;if(l&&l.hasAttribute("formAction")){if(a=l,i=l[Ye]||null)c=i.formAction;else if(pd(a)!==null)continue}else c=i.action;typeof c=="function"?s[r+1]=c:(s.splice(r,3),r-=3),im(s)}}}function hd(n){this._internalRoot=n}li.prototype.render=hd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(w(409));var s=e.current,r=tt();s0(s,r,n,e,null,null)};li.prototype.unmount=hd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;n.tag===0&&Us(),s0(n.current,2,null,n,null,null),si(),e[nr]=null}};function li(n){this._internalRoot=n}li.prototype.unstable_scheduleHydration=function(n){if(n){var e=Gh();n={blockedOn:null,target:n,priority:e};for(var s=0;s<vt.length&&e!==0&&e<vt[s].priority;s++);vt.splice(s,0,n),s===0&&l0(n)}};ue.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(w(188)):(n=Object.keys(n).join(","),Error(w(268,n)));return n=Dh(e),n=n===null?null:n.stateNode,n};var jr={findFiberByHostInstance:Zt,bundleType:0,version:"19.0.0-rc-915b914b3a-20240515",rendererPackageName:"react-dom"},Gv={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F,findHostInstanceByFiber:function(n){return n=Dh(n),n===null?null:n.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Uv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"19.0.0-rc-915b914b3a-20240515"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{ma=Za.inject(Gv),nn=Za}catch{}}Zl.createRoot=function(n,e){if(!Mh(n))throw Error(w(299));var s=!1,r="",a=tx,l=sx,i=rx,c=null;return e!=null&&(e.unstable_strictMode===!0&&(s=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(c=e.unstable_transitionCallbacks)),e=n0(n,1,!1,null,null,s,!1,r,a,l,i,c,null),n[nr]=e.current,cd(n.nodeType===8?n.parentNode:n),new hd(e)};Zl.hydrateRoot=function(n,e,s){if(!Mh(n))throw Error(w(299));var r=!1,a="",l=tx,i=sx,c=rx,o=null,d=null;return s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(a=s.identifierPrefix),s.onUncaughtError!==void 0&&(l=s.onUncaughtError),s.onCaughtError!==void 0&&(i=s.onCaughtError),s.onRecoverableError!==void 0&&(c=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(o=s.unstable_transitionCallbacks),s.formState!==void 0&&(d=s.formState)),e=n0(n,1,!0,e,s??null,r,!1,a,l,i,c,o,d),e.context=t0(null),s=e.current,r=tt(),a=nt(r),a.callback=null,Ct(s,a,r),e.current.lanes=r,ga(e,r),We(e),n[nr]=e.current,cd(n),new li(e)};Zl.version="19.0.0-rc-915b914b3a-20240515";function i0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i0)}catch(n){console.error(n)}}i0(),Sh.exports=Zl;var Yv=Sh.exports;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},aa.apply(this,arguments)}var wt;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(wt||(wt={}));const cm="popstate";function Iv(n){n===void 0&&(n={});function e(r,a){let{pathname:l,search:i,hash:c}=r.location;return ro("",{pathname:l,search:i,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function s(r,a){return typeof a=="string"?a:zl(a)}return Pv(e,s,null,n)}function be(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function c0(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Fv(){return Math.random().toString(36).substr(2,8)}function om(n,e){return{usr:n.state,key:n.key,idx:e}}function ro(n,e,s,r){return s===void 0&&(s=null),aa({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?ir(e):e,{state:s,key:e&&e.key||r||Fv()})}function zl(n){let{pathname:e="/",search:s="",hash:r=""}=n;return s&&s!=="?"&&(e+=s.charAt(0)==="?"?s:"?"+s),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ir(n){let e={};if(n){let s=n.indexOf("#");s>=0&&(e.hash=n.substr(s),n=n.substr(0,s));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function Pv(n,e,s,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,i=a.history,c=wt.Pop,o=null,d=m();d==null&&(d=0,i.replaceState(aa({},i.state,{idx:d}),""));function m(){return(i.state||{idx:null}).idx}function h(){c=wt.Pop;let N=m(),x=N==null?null:N-d;d=N,o&&o({action:c,location:b.location,delta:x})}function p(N,x){c=wt.Push;let f=ro(b.location,N,x);d=m()+1;let g=om(f,d),v=b.createHref(f);try{i.pushState(g,"",v)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(v)}l&&o&&o({action:c,location:b.location,delta:1})}function j(N,x){c=wt.Replace;let f=ro(b.location,N,x);d=m();let g=om(f,d),v=b.createHref(f);i.replaceState(g,"",v),l&&o&&o({action:c,location:b.location,delta:0})}function y(N){let x=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof N=="string"?N:zl(N);return f=f.replace(/ $/,"%20"),be(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let b={get action(){return c},get location(){return n(a,i)},listen(N){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(cm,h),o=N,()=>{a.removeEventListener(cm,h),o=null}},createHref(N){return e(a,N)},createURL:y,encodeLocation(N){let x=y(N);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:j,go(N){return i.go(N)}};return b}var dm;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(dm||(dm={}));function Qv(n,e,s){s===void 0&&(s="/");let r=typeof e=="string"?ir(e):e,a=fd(r.pathname||"/",s);if(a==null)return null;let l=o0(n);Jv(l);let i=null;for(let c=0;i==null&&c<l.length;++c){let o=c2(a);i=l2(l[c],o)}return i}function o0(n,e,s,r){e===void 0&&(e=[]),s===void 0&&(s=[]),r===void 0&&(r="");let a=(l,i,c)=>{let o={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};o.relativePath.startsWith("/")&&(be(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let d=Lt([r,o.relativePath]),m=s.concat(o);l.children&&l.children.length>0&&(be(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),o0(l.children,e,m,d)),!(l.path==null&&!l.index)&&e.push({path:d,score:r2(d,l.index),routesMeta:m})};return n.forEach((l,i)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))a(l,i);else for(let o of d0(l.path))a(l,i,o)}),e}function d0(n){let e=n.split("/");if(e.length===0)return[];let[s,...r]=e,a=s.endsWith("?"),l=s.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let i=d0(r.join("/")),c=[];return c.push(...i.map(o=>o===""?l:[l,o].join("/"))),a&&c.push(...i),c.map(o=>n.startsWith("/")&&o===""?"/":o)}function Jv(n){n.sort((e,s)=>e.score!==s.score?s.score-e.score:a2(e.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}const Wv=/^:[\w-]+$/,Kv=3,e2=2,n2=1,t2=10,s2=-2,um=n=>n==="*";function r2(n,e){let s=n.split("/"),r=s.length;return s.some(um)&&(r+=s2),e&&(r+=e2),s.filter(a=>!um(a)).reduce((a,l)=>a+(Wv.test(l)?Kv:l===""?n2:t2),r)}function a2(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function l2(n,e){let{routesMeta:s}=n,r={},a="/",l=[];for(let i=0;i<s.length;++i){let c=s[i],o=i===s.length-1,d=a==="/"?e:e.slice(a.length)||"/",m=u0({path:c.relativePath,caseSensitive:c.caseSensitive,end:o},d);if(!m)return null;Object.assign(r,m.params);let h=c.route;l.push({params:r,pathname:Lt([a,m.pathname]),pathnameBase:m2(Lt([a,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(a=Lt([a,m.pathnameBase]))}return l}function u0(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,r]=i2(n.path,n.caseSensitive,n.end),a=e.match(s);if(!a)return null;let l=a[0],i=l.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:r.reduce((d,m,h)=>{let{paramName:p,isOptional:j}=m;if(p==="*"){let b=c[h]||"";i=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const y=c[h];return j&&!y?d[p]=void 0:d[p]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:i,pattern:n}}function i2(n,e,s){e===void 0&&(e=!1),s===void 0&&(s=!0),c0(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,c,o)=>(r.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function c2(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return c0(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function fd(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let s=e.endsWith("/")?e.length-1:e.length,r=n.charAt(s);return r&&r!=="/"?null:n.slice(s)||"/"}function o2(n,e){e===void 0&&(e="/");let{pathname:s,search:r="",hash:a=""}=typeof n=="string"?ir(n):n;return{pathname:s?s.startsWith("/")?s:d2(s,e):e,search:p2(r),hash:h2(a)}}function d2(n,e){let s=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?s.length>1&&s.pop():a!=="."&&s.push(a)}),s.length>1?s.join("/"):"/"}function Qi(n,e,s,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function u2(n){return n.filter((e,s)=>s===0||e.route.path&&e.route.path.length>0)}function m0(n,e){let s=u2(n);return e?s.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):s.map(r=>r.pathnameBase)}function p0(n,e,s,r){r===void 0&&(r=!1);let a;typeof n=="string"?a=ir(n):(a=aa({},n),be(!a.pathname||!a.pathname.includes("?"),Qi("?","pathname","search",a)),be(!a.pathname||!a.pathname.includes("#"),Qi("#","pathname","hash",a)),be(!a.search||!a.search.includes("#"),Qi("#","search","hash",a)));let l=n===""||a.pathname==="",i=l?"/":a.pathname,c;if(i==null)c=s;else{let h=e.length-1;if(!r&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),h-=1;a.pathname=p.join("/")}c=h>=0?e[h]:"/"}let o=o2(a,c),d=i&&i!=="/"&&i.endsWith("/"),m=(l||i===".")&&s.endsWith("/");return!o.pathname.endsWith("/")&&(d||m)&&(o.pathname+="/"),o}const Lt=n=>n.join("/").replace(/\/\/+/g,"/"),m2=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),p2=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,h2=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function f2(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const h0=["post","put","patch","delete"];new Set(h0);const x2=["get",...h0];new Set(x2);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function la(){return la=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},la.apply(this,arguments)}const xd=u.createContext(null),g2=u.createContext(null),cs=u.createContext(null),ii=u.createContext(null),Ot=u.createContext({outlet:null,matches:[],isDataRoute:!1}),f0=u.createContext(null);function j2(n,e){let{relative:s}=e===void 0?{}:e;cr()||be(!1);let{basename:r,navigator:a}=u.useContext(cs),{hash:l,pathname:i,search:c}=gd(n,{relative:s}),o=i;return r!=="/"&&(o=i==="/"?r:Lt([r,i])),a.createHref({pathname:o,search:c,hash:l})}function cr(){return u.useContext(ii)!=null}function Bt(){return cr()||be(!1),u.useContext(ii).location}function v2(n){cr()||be(!1);let{pathname:e}=Bt();return u.useMemo(()=>u0(n,e),[e,n])}function x0(n){u.useContext(cs).static||u.useLayoutEffect(n)}function ci(){let{isDataRoute:n}=u.useContext(Ot);return n?E2():b2()}function b2(){cr()||be(!1);let n=u.useContext(xd),{basename:e,future:s,navigator:r}=u.useContext(cs),{matches:a}=u.useContext(Ot),{pathname:l}=Bt(),i=JSON.stringify(m0(a,s.v7_relativeSplatPath)),c=u.useRef(!1);return x0(()=>{c.current=!0}),u.useCallback(function(d,m){if(m===void 0&&(m={}),!c.current)return;if(typeof d=="number"){r.go(d);return}let h=p0(d,JSON.parse(i),l,m.relative==="path");n==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Lt([e,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[e,r,i,l,n])}const y2=u.createContext(null);function oi(n){let e=u.useContext(Ot).outlet;return e&&u.createElement(y2.Provider,{value:n},e)}function gd(n,e){let{relative:s}=e===void 0?{}:e,{future:r}=u.useContext(cs),{matches:a}=u.useContext(Ot),{pathname:l}=Bt(),i=JSON.stringify(m0(a,r.v7_relativeSplatPath));return u.useMemo(()=>p0(n,JSON.parse(i),l,s==="path"),[n,i,l,s])}function N2(n,e){return w2(n,e)}function w2(n,e,s,r){cr()||be(!1);let{navigator:a}=u.useContext(cs),{matches:l}=u.useContext(Ot),i=l[l.length-1],c=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let d=Bt(),m;if(e){var h;let N=typeof e=="string"?ir(e):e;o==="/"||(h=N.pathname)!=null&&h.startsWith(o)||be(!1),m=N}else m=d;let p=m.pathname||"/",j=p;if(o!=="/"){let N=o.replace(/^\//,"").split("/");j="/"+p.replace(/^\//,"").split("/").slice(N.length).join("/")}let y=Qv(n,{pathname:j}),b=A2(y&&y.map(N=>Object.assign({},N,{params:Object.assign({},c,N.params),pathname:Lt([o,a.encodeLocation?a.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?o:Lt([o,a.encodeLocation?a.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),l,s,r);return e&&b?u.createElement(ii.Provider,{value:{location:la({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:wt.Pop}},b):b}function S2(){let n=L2(),e=f2(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},e),s?u.createElement("pre",{style:a},s):null,null)}const k2=u.createElement(S2,null);class C2 extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,s){return s.location!==e.location||s.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:s.error,location:s.location,revalidation:e.revalidation||s.revalidation}}componentDidCatch(e,s){console.error("React Router caught the following error during render",e,s)}render(){return this.state.error!==void 0?u.createElement(Ot.Provider,{value:this.props.routeContext},u.createElement(f0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _2(n){let{routeContext:e,match:s,children:r}=n,a=u.useContext(xd);return a&&a.static&&a.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=s.route.id),u.createElement(Ot.Provider,{value:e},r)}function A2(n,e,s,r){var a;if(e===void 0&&(e=[]),s===void 0&&(s=null),r===void 0&&(r=null),n==null){var l;if((l=s)!=null&&l.errors)n=s.matches;else return null}let i=n,c=(a=s)==null?void 0:a.errors;if(c!=null){let m=i.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);m>=0||be(!1),i=i.slice(0,Math.min(i.length,m+1))}let o=!1,d=-1;if(s&&r&&r.v7_partialHydration)for(let m=0;m<i.length;m++){let h=i[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=m),h.route.id){let{loaderData:p,errors:j}=s,y=h.route.loader&&p[h.route.id]===void 0&&(!j||j[h.route.id]===void 0);if(h.route.lazy||y){o=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((m,h,p)=>{let j,y=!1,b=null,N=null;s&&(j=c&&h.route.id?c[h.route.id]:void 0,b=h.route.errorElement||k2,o&&(d<0&&p===0?(y=!0,N=null):d===p&&(y=!0,N=h.route.hydrateFallbackElement||null)));let x=e.concat(i.slice(0,p+1)),f=()=>{let g;return j?g=b:y?g=N:h.route.Component?g=u.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=m,u.createElement(_2,{match:h,routeContext:{outlet:m,matches:x,isDataRoute:s!=null},children:g})};return s&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?u.createElement(C2,{location:s.location,revalidation:s.revalidation,component:b,error:j,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var g0=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(g0||{}),Ul=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Ul||{});function $2(n){let e=u.useContext(xd);return e||be(!1),e}function M2(n){let e=u.useContext(g2);return e||be(!1),e}function R2(n){let e=u.useContext(Ot);return e||be(!1),e}function j0(n){let e=R2(),s=e.matches[e.matches.length-1];return s.route.id||be(!1),s.route.id}function L2(){var n;let e=u.useContext(f0),s=M2(Ul.UseRouteError),r=j0(Ul.UseRouteError);return e!==void 0?e:(n=s.errors)==null?void 0:n[r]}function E2(){let{router:n}=$2(g0.UseNavigateStable),e=j0(Ul.UseNavigateStable),s=u.useRef(!1);return x0(()=>{s.current=!0}),u.useCallback(function(a,l){l===void 0&&(l={}),s.current&&(typeof a=="number"?n.navigate(a):n.navigate(a,la({fromRouteId:e},l)))},[n,e])}function T2(n){return oi(n.context)}function jn(n){be(!1)}function D2(n){let{basename:e="/",children:s=null,location:r,navigationType:a=wt.Pop,navigator:l,static:i=!1,future:c}=n;cr()&&be(!1);let o=e.replace(/^\/*/,"/"),d=u.useMemo(()=>({basename:o,navigator:l,static:i,future:la({v7_relativeSplatPath:!1},c)}),[o,c,l,i]);typeof r=="string"&&(r=ir(r));let{pathname:m="/",search:h="",hash:p="",state:j=null,key:y="default"}=r,b=u.useMemo(()=>{let N=fd(m,o);return N==null?null:{location:{pathname:N,search:h,hash:p,state:j,key:y},navigationType:a}},[o,m,h,p,j,y,a]);return b==null?null:u.createElement(cs.Provider,{value:d},u.createElement(ii.Provider,{children:s,value:b}))}function O2(n){let{children:e,location:s}=n;return N2(ao(e),s)}new Promise(()=>{});function ao(n,e){e===void 0&&(e=[]);let s=[];return u.Children.forEach(n,(r,a)=>{if(!u.isValidElement(r))return;let l=[...e,a];if(r.type===u.Fragment){s.push.apply(s,ao(r.props.children,l));return}r.type!==jn&&be(!1),!r.props.index||!r.props.children||be(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=ao(r.props.children,l)),s.push(i)}),s}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},lo.apply(this,arguments)}function B2(n,e){if(n==null)return{};var s={},r=Object.keys(n),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(s[a]=n[a]);return s}function z2(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function U2(n,e){return n.button===0&&(!e||e==="_self")&&!z2(n)}const H2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],q2="6";try{window.__reactRouterVersion=q2}catch{}const V2="startTransition",mm=ug[V2];function X2(n){let{basename:e,children:s,future:r,window:a}=n,l=u.useRef();l.current==null&&(l.current=Iv({window:a,v5Compat:!0}));let i=l.current,[c,o]=u.useState({action:i.action,location:i.location}),{v7_startTransition:d}=r||{},m=u.useCallback(h=>{d&&mm?mm(()=>o(h)):o(h)},[o,d]);return u.useLayoutEffect(()=>i.listen(m),[i,m]),u.createElement(D2,{basename:e,children:s,location:c.location,navigationType:c.action,navigator:i,future:r})}const Z2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jd=u.forwardRef(function(e,s){let{onClick:r,relative:a,reloadDocument:l,replace:i,state:c,target:o,to:d,preventScrollReset:m,unstable_viewTransition:h}=e,p=B2(e,H2),{basename:j}=u.useContext(cs),y,b=!1;if(typeof d=="string"&&G2.test(d)&&(y=d,Z2))try{let g=new URL(window.location.href),v=d.startsWith("//")?new URL(g.protocol+d):new URL(d),k=fd(v.pathname,j);v.origin===g.origin&&k!=null?d=k+v.search+v.hash:b=!0}catch{}let N=j2(d,{relative:a}),x=Y2(d,{replace:i,state:c,target:o,preventScrollReset:m,relative:a,unstable_viewTransition:h});function f(g){r&&r(g),g.defaultPrevented||x(g)}return u.createElement("a",lo({},p,{href:y||N,onClick:b||l?r:f,ref:s,target:o}))});var pm;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(pm||(pm={}));var hm;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(hm||(hm={}));function Y2(n,e){let{target:s,replace:r,state:a,preventScrollReset:l,relative:i,unstable_viewTransition:c}=e===void 0?{}:e,o=ci(),d=Bt(),m=gd(n,{relative:i});return u.useCallback(h=>{if(U2(h,s)){h.preventDefault();let p=r!==void 0?r:zl(d)===zl(m);o(n,{replace:p,state:a,preventScrollReset:l,relative:i,unstable_viewTransition:c})}},[d,o,m,r,a,s,n,l,i,c])}function Ji(){return t.jsxs("div",{className:"w-full h-64 flex flex-col items-center justify-center",children:[t.jsx("div",{className:"loader"}),t.jsx("div",{className:"text-sm text-blue-500 mt-3",children:"page loading..."})]})}function v0(n){var e,s,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var a=n.length;for(e=0;e<a;e++)n[e]&&(s=v0(n[e]))&&(r&&(r+=" "),r+=s)}else for(s in n)n[s]&&(r&&(r+=" "),r+=s);return r}function U(){for(var n,e,s=0,r="",a=arguments.length;s<a;s++)(n=arguments[s])&&(e=v0(n))&&(r&&(r+=" "),r+=e);return r}const vd="-";function I2(n){const e=P2(n),{conflictingClassGroups:s,conflictingClassGroupModifiers:r}=n;function a(i){const c=i.split(vd);return c[0]===""&&c.length!==1&&c.shift(),b0(c,e)||F2(i)}function l(i,c){const o=s[i]||[];return c&&r[i]?[...o,...r[i]]:o}return{getClassGroupId:a,getConflictingClassGroupIds:l}}function b0(n,e){var i;if(n.length===0)return e.classGroupId;const s=n[0],r=e.nextPart.get(s),a=r?b0(n.slice(1),r):void 0;if(a)return a;if(e.validators.length===0)return;const l=n.join(vd);return(i=e.validators.find(({validator:c})=>c(l)))==null?void 0:i.classGroupId}const fm=/^\[(.+)\]$/;function F2(n){if(fm.test(n)){const e=fm.exec(n)[1],s=e==null?void 0:e.substring(0,e.indexOf(":"));if(s)return"arbitrary.."+s}}function P2(n){const{theme:e,prefix:s}=n,r={nextPart:new Map,validators:[]};return J2(Object.entries(n.classGroups),s).forEach(([l,i])=>{io(i,r,l,e)}),r}function io(n,e,s,r){n.forEach(a=>{if(typeof a=="string"){const l=a===""?e:xm(e,a);l.classGroupId=s;return}if(typeof a=="function"){if(Q2(a)){io(a(r),e,s,r);return}e.validators.push({validator:a,classGroupId:s});return}Object.entries(a).forEach(([l,i])=>{io(i,xm(e,l),s,r)})})}function xm(n,e){let s=n;return e.split(vd).forEach(r=>{s.nextPart.has(r)||s.nextPart.set(r,{nextPart:new Map,validators:[]}),s=s.nextPart.get(r)}),s}function Q2(n){return n.isThemeGetter}function J2(n,e){return e?n.map(([s,r])=>{const a=r.map(l=>typeof l=="string"?e+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([i,c])=>[e+i,c])):l);return[s,a]}):n}function W2(n){if(n<1)return{get:()=>{},set:()=>{}};let e=0,s=new Map,r=new Map;function a(l,i){s.set(l,i),e++,e>n&&(e=0,r=s,s=new Map)}return{get(l){let i=s.get(l);if(i!==void 0)return i;if((i=r.get(l))!==void 0)return a(l,i),i},set(l,i){s.has(l)?s.set(l,i):a(l,i)}}}const y0="!";function K2(n){const e=n.separator,s=e.length===1,r=e[0],a=e.length;return function(i){const c=[];let o=0,d=0,m;for(let b=0;b<i.length;b++){let N=i[b];if(o===0){if(N===r&&(s||i.slice(b,b+a)===e)){c.push(i.slice(d,b)),d=b+a;continue}if(N==="/"){m=b;continue}}N==="["?o++:N==="]"&&o--}const h=c.length===0?i:i.substring(d),p=h.startsWith(y0),j=p?h.substring(1):h,y=m&&m>d?m-d:void 0;return{modifiers:c,hasImportantModifier:p,baseClassName:j,maybePostfixModifierPosition:y}}}function eb(n){if(n.length<=1)return n;const e=[];let s=[];return n.forEach(r=>{r[0]==="["?(e.push(...s.sort(),r),s=[]):s.push(r)}),e.push(...s.sort()),e}function nb(n){return{cache:W2(n.cacheSize),splitModifiers:K2(n),...I2(n)}}const tb=/\s+/;function sb(n,e){const{splitModifiers:s,getClassGroupId:r,getConflictingClassGroupIds:a}=e,l=new Set;return n.trim().split(tb).map(i=>{const{modifiers:c,hasImportantModifier:o,baseClassName:d,maybePostfixModifierPosition:m}=s(i);let h=r(m?d.substring(0,m):d),p=!!m;if(!h){if(!m)return{isTailwindClass:!1,originalClassName:i};if(h=r(d),!h)return{isTailwindClass:!1,originalClassName:i};p=!1}const j=eb(c).join(":");return{isTailwindClass:!0,modifierId:o?j+y0:j,classGroupId:h,originalClassName:i,hasPostfixModifier:p}}).reverse().filter(i=>{if(!i.isTailwindClass)return!0;const{modifierId:c,classGroupId:o,hasPostfixModifier:d}=i,m=c+o;return l.has(m)?!1:(l.add(m),a(o,d).forEach(h=>l.add(c+h)),!0)}).reverse().map(i=>i.originalClassName).join(" ")}function rb(){let n=0,e,s,r="";for(;n<arguments.length;)(e=arguments[n++])&&(s=N0(e))&&(r&&(r+=" "),r+=s);return r}function N0(n){if(typeof n=="string")return n;let e,s="";for(let r=0;r<n.length;r++)n[r]&&(e=N0(n[r]))&&(s&&(s+=" "),s+=e);return s}function ab(n,...e){let s,r,a,l=i;function i(o){const d=e.reduce((m,h)=>h(m),n());return s=nb(d),r=s.cache.get,a=s.cache.set,l=c,c(o)}function c(o){const d=r(o);if(d)return d;const m=sb(o,s);return a(o,m),m}return function(){return l(rb.apply(null,arguments))}}function oe(n){const e=s=>s[n]||[];return e.isThemeGetter=!0,e}const w0=/^\[(?:([a-z-]+):)?(.+)\]$/i,lb=/^\d+\/\d+$/,ib=new Set(["px","full","screen"]),cb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ob=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,db=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ub=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,mb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function Fn(n){return Yt(n)||ib.has(n)||lb.test(n)}function ut(n){return or(n,"length",bb)}function Yt(n){return!!n&&!Number.isNaN(Number(n))}function Ga(n){return or(n,"number",Yt)}function vr(n){return!!n&&Number.isInteger(Number(n))}function pb(n){return n.endsWith("%")&&Yt(n.slice(0,-1))}function q(n){return w0.test(n)}function mt(n){return cb.test(n)}const hb=new Set(["length","size","percentage"]);function fb(n){return or(n,hb,S0)}function xb(n){return or(n,"position",S0)}const gb=new Set(["image","url"]);function jb(n){return or(n,gb,Nb)}function vb(n){return or(n,"",yb)}function br(){return!0}function or(n,e,s){const r=w0.exec(n);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):s(r[2]):!1}function bb(n){return ob.test(n)&&!db.test(n)}function S0(){return!1}function yb(n){return ub.test(n)}function Nb(n){return mb.test(n)}function wb(){const n=oe("colors"),e=oe("spacing"),s=oe("blur"),r=oe("brightness"),a=oe("borderColor"),l=oe("borderRadius"),i=oe("borderSpacing"),c=oe("borderWidth"),o=oe("contrast"),d=oe("grayscale"),m=oe("hueRotate"),h=oe("invert"),p=oe("gap"),j=oe("gradientColorStops"),y=oe("gradientColorStopPositions"),b=oe("inset"),N=oe("margin"),x=oe("opacity"),f=oe("padding"),g=oe("saturate"),v=oe("scale"),k=oe("sepia"),C=oe("skew"),$=oe("space"),R=oe("translate"),P=()=>["auto","contain","none"],B=()=>["auto","hidden","clip","visible","scroll"],ce=()=>["auto",q,e],V=()=>[q,e],sn=()=>["",Fn,ut],qe=()=>["auto",Yt,q],je=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],A=()=>["solid","dashed","dotted","double","none"],O=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],T=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",q],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Le=()=>[Yt,Ga],Ve=()=>[Yt,q];return{cacheSize:500,separator:":",theme:{colors:[br],spacing:[Fn,ut],blur:["none","",mt,q],brightness:Le(),borderColor:[n],borderRadius:["none","","full",mt,q],borderSpacing:V(),borderWidth:sn(),contrast:Le(),grayscale:G(),hueRotate:Ve(),invert:G(),gap:V(),gradientColorStops:[n],gradientColorStopPositions:[pb,ut],inset:ce(),margin:ce(),opacity:Le(),padding:V(),saturate:Le(),scale:Le(),sepia:G(),skew:Ve(),space:V(),translate:V()},classGroups:{aspect:[{aspect:["auto","square","video",q]}],container:["container"],columns:[{columns:[mt]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...je(),q]}],overflow:[{overflow:B()}],"overflow-x":[{"overflow-x":B()}],"overflow-y":[{"overflow-y":B()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",vr,q]}],basis:[{basis:ce()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",q]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",vr,q]}],"grid-cols":[{"grid-cols":[br]}],"col-start-end":[{col:["auto",{span:["full",vr,q]},q]}],"col-start":[{"col-start":qe()}],"col-end":[{"col-end":qe()}],"grid-rows":[{"grid-rows":[br]}],"row-start-end":[{row:["auto",{span:[vr,q]},q]}],"row-start":[{"row-start":qe()}],"row-end":[{"row-end":qe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",q]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",q]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...T()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...T(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...T(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[f]}],px:[{px:[f]}],py:[{py:[f]}],ps:[{ps:[f]}],pe:[{pe:[f]}],pt:[{pt:[f]}],pr:[{pr:[f]}],pb:[{pb:[f]}],pl:[{pl:[f]}],m:[{m:[N]}],mx:[{mx:[N]}],my:[{my:[N]}],ms:[{ms:[N]}],me:[{me:[N]}],mt:[{mt:[N]}],mr:[{mr:[N]}],mb:[{mb:[N]}],ml:[{ml:[N]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",q,e]}],"min-w":[{"min-w":[q,e,"min","max","fit"]}],"max-w":[{"max-w":[q,e,"none","full","min","max","fit","prose",{screen:[mt]},mt]}],h:[{h:[q,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[q,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[q,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[q,e,"auto","min","max","fit"]}],"font-size":[{text:["base",mt,ut]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ga]}],"font-family":[{font:[br]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",q]}],"line-clamp":[{"line-clamp":["none",Yt,Ga]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Fn,q]}],"list-image":[{"list-image":["none",q]}],"list-style-type":[{list:["none","disc","decimal",q]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...A(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Fn,ut]}],"underline-offset":[{"underline-offset":["auto",Fn,q]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:V()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...je(),xb]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",fb]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},jb]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[j]}],"gradient-via":[{via:[j]}],"gradient-to":[{to:[j]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...A(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:A()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...A()]}],"outline-offset":[{"outline-offset":[Fn,q]}],"outline-w":[{outline:[Fn,ut]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:sn()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[Fn,ut]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",mt,vb]}],"shadow-color":[{shadow:[br]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...O(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":O()}],filter:[{filter:["","none"]}],blur:[{blur:[s]}],brightness:[{brightness:[r]}],contrast:[{contrast:[o]}],"drop-shadow":[{"drop-shadow":["","none",mt,q]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[h]}],saturate:[{saturate:[g]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[s]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[o]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[g]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",q]}],duration:[{duration:Ve()}],ease:[{ease:["linear","in","out","in-out",q]}],delay:[{delay:Ve()}],animate:[{animate:["none","spin","ping","pulse","bounce",q]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[vr,q]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",q]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",q]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":V()}],"scroll-mx":[{"scroll-mx":V()}],"scroll-my":[{"scroll-my":V()}],"scroll-ms":[{"scroll-ms":V()}],"scroll-me":[{"scroll-me":V()}],"scroll-mt":[{"scroll-mt":V()}],"scroll-mr":[{"scroll-mr":V()}],"scroll-mb":[{"scroll-mb":V()}],"scroll-ml":[{"scroll-ml":V()}],"scroll-p":[{"scroll-p":V()}],"scroll-px":[{"scroll-px":V()}],"scroll-py":[{"scroll-py":V()}],"scroll-ps":[{"scroll-ps":V()}],"scroll-pe":[{"scroll-pe":V()}],"scroll-pt":[{"scroll-pt":V()}],"scroll-pr":[{"scroll-pr":V()}],"scroll-pb":[{"scroll-pb":V()}],"scroll-pl":[{"scroll-pl":V()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",q]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[Fn,ut,Ga]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const He=ab(wb);function yn(n){const{children:e,className:s="",end:r=!0,activeName:a,to:l,onClick:i,...c}=n,o=gd(l);let d=v2({path:o.pathname,end:r});const m=He(U(s,"transition cursor-pointer",{[a]:!!d}));function h(p){d&&p.preventDefault(),i&&i(p)}return t.jsx(jd,{className:m,to:l,...c,onClick:h,children:e})}const Sb="_modal_fd6cp_1",kb="_show_fd6cp_1",Cb="_hide_fd6cp_1",_b="_out_fd6cp_16",Wi={modal:Sb,show:kb,hide:Cb,in:"_in_fd6cp_12",out:_b};function ya(n){const{onClose:e,children:s,ref:r}=n,[a,l]=u.useState(!1),[i,c]=u.useState(!1);u.useImperativeHandle(r,()=>({show:()=>{l(!0),document.body.style.overflow="hidden",c(!0)},close:()=>{document.body.style.overflow="visible",l(!1)}}));const o=U(Wi.modal,{[Wi.in]:a,[Wi.out]:!a});function d(){a||c(!1)}function m(){l(!1),e&&e()}return i?t.jsx(t.Fragment,{children:ua.createPortal(t.jsx("div",{className:o,onAnimationEnd:d,onClick:m,children:s}),document.body)}):null}function Ab(){return t.jsx("div",{className:"w-10 h-10 ml-4 border rounded-full overflow-hidden relative",children:t.jsx("div",{className:"pyramid-loader",children:t.jsxs("div",{className:"wrapper",children:[t.jsx("span",{className:"side side1"}),t.jsx("span",{className:"side side2"}),t.jsx("span",{className:"side side3"}),t.jsx("span",{className:"side side4"}),t.jsx("span",{className:"shadow"})]})})})}function $b(){const[n,e]=u.useState(!0),[s,r]=u.useState({});return u.useEffect(()=>{function a(l){if(l.origin!=="https://giscus.app")return;e(!1);let i=l.data.giscus;i.viewer&&r(i.viewer)}window.addEventListener("message",a,!1)},[]),n?t.jsx(Ab,{}):t.jsx("div",{className:"w-10 h-10 ml-4 border rounded-full overflow-hidden",children:t.jsx("img",{className:"w-full h-full",src:s.avatarUrl,alt:""})})}function Hl(n){const{when:e,fallback:s=null,children:r}=n;return e?r:s}function Mb(n,e){let s="bg-gray-100 text-gray-500",r="hover:bg-gray-200 active:bg-gray-300";return e&&(s="bg-transparent text-gray-500",r="hover:bg-gray-50 active:bg-gray-100 hover:text-gray-600 active:text-gray-700"),n?U("opacity-70 cursor-not-allowed",s):U(s,r)}function Rb(n,e){let s="bg-blue-500 text-white",r="hover:bg-blue-600 active:bg-blue-700";return e&&(s="bg-transparent text-blue-500",r="hover:bg-blue-50 active:bg-blue-100 hover:text-blue-600 active:text-blue-700"),n?U("opacity-70 cursor-not-allowed",s):U(s,r)}function Lb(n,e){let s="bg-red-500 text-white",r="hover:bg-red-600 active:bg-red-700";return e&&(s="bg-transparent text-red-500",r="hover:bg-red-50 active:bg-red-100 hover:text-red-600 active:text-red-700"),n?U("opacity-70 cursor-not-allowed",s):U(s,r)}function Eb(n,e){let s="bg-green-500 text-white",r="hover:bg-green-600 active:bg-green-700";return e&&(s="bg-transparent text-green-500",r="hover:bg-green-50 active:bg-green-100 hover:text-green-600 active:text-green-700"),n?U("opacity-70 cursor-not-allowed",s):U(s,r)}function Tb(n){let e="bg-white border-sky-300 text-sky-500",s="hover:border-sky-400 active:bg-sky-500 hover:text-sky-600 active:text-sky-700 hover:bg-sky-50 active:bg-sky-100";return n?U("opacity-70 cursor-not-allowed",e):U(e,s)}function L(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,ghost:o,rect:d,disabled:m,...h}=n,p="rounded-md border border-transparent font-medium cursor-pointer transition relative text-gray-600 hover:bg-transparent",j="text-xs py-2 px-4",y=!s&&!r&&!c&&!i,b=He(U(p,j,{[Mb(m,o)]:y,[Rb(m,o)]:s,[Lb(m,o)]:r,[Eb(m,o)]:c,[Tb(m)]:i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l,"p-2":d},e));return t.jsxs("button",{className:b,...h,disabled:m,children:[n.children,t.jsx(Hl,{when:i,children:t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})})]})}let Xr;const Db=n=>{Xr={x:n.pageX,y:n.pageY},setTimeout(()=>{Xr=null},100)};document.documentElement.addEventListener("click",Db,!0);function Ob(n,e){var s=n.style;["Webkit","Moz","Ms","ms"].forEach(function(r){s[r+"TransformOrigin"]=e}),s.transformOrigin=e}function Bb(n){const e=n.getBoundingClientRect(),s={left:e.left,top:e.top},a=n.ownerDocument.defaultView;return s.left+=gm(a),s.top+=gm(a,1),s}function gm(n,e){var s=n["page"+(e?"Y":"X")+"Offset"],r="scroll"+(e?"Top":"Left");if(typeof s!="number"){var a=n.document;s=a.documentElement[r],typeof s!="number"&&(s=a.body[r])}return s}function dr(n){const{title:e,onClose:s,children:r,onSure:a,onCancel:l,ref:i,footer:c}=n,[o,d]=u.useState(!1),[m,h]=u.useState(!1),p=u.useRef(null),j=u.useRef(null);u.useImperativeHandle(i,()=>({show:()=>{j.current.show(),document.body.style.overflow="hidden",d(!0),h(!0)},close:y}));function y(){d(!1),j.current.close(),document.body.style.overflow="visible"}function b(){y(),s&&s()}function N(v){v.stopPropagation()}function x(v){v.stopPropagation(),a&&a()}function f(){o||h(!1)}const g=U("dialog-wrapper",{in:o,out:!o});return u.useEffect(()=>{const v=p.current;if(m&&v){const k=Bb(v);Xr&&Ob(v,Xr.x-k.left+"px "+(Xr.y-k.top)+"px")}},[m]),t.jsx(ya,{ref:j,onClose:b,children:m?t.jsxs("div",{ref:p,className:g,onClick:N,onAnimationEnd:f,children:[t.jsxs("header",{className:"flex justify-between items-center mb-2",children:[t.jsx("div",{className:"font-bold text-lg leading-6",children:e}),t.jsx("div",{onClick:b,className:"p-2 rounded-md cursor-pointer transition hover:bg-gray-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})})]}),t.jsx("section",{className:"leading-6",children:r}),c||t.jsx("footer",{className:"text-end mt-4",children:t.jsx(L,{primary:!0,onClick:x,children:"确认"})})]}):null})}function zb(){const n=u.useRef(null);function e(s){s.preventDefault(),n.current.show()}return t.jsxs(t.Fragment,{children:[t.jsxs(yn,{className:"flex items-center",onClick:e,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"})}),t.jsx("div",{className:"ml-1 text-sm",children:"交流群"})]}),t.jsxs(dr,{ref:n,title:"Message",onSure:()=>n.current.close(),children:["添加我的微信：",t.jsx("span",{className:"text-red-500 text-xl",children:"icanmeetu"}),"， 注明：添加 react19 付费交流群"]})]})}function Sn(n){const{type:e="text",className:s,required:r,label:a,help:l="此项规则不匹配",pattern:i,...c}=n,{pending:o}=ua.useFormStatus(),d=U("flex items-center my-10",s);return t.jsxs("div",{className:d,children:[a&&t.jsxs("label",{className:"w-20 text-right font-bold",children:[a,"："]}),t.jsx("div",{className:"input flex-1",children:t.jsx("input",{type:e,required:r,pattern:i,...c,disabled:o})})]})}function Ub(){const n=u.useRef(null);function e(s){s.preventDefault(),n.current.show()}return t.jsxs(t.Fragment,{children:[t.jsxs(yn,{className:"flex items-center ml-4 bg-gray-900 px-4 py-2 rounded-full",to:"/",onClick:e,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 text-blue-50",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})}),t.jsx("div",{className:"ml-1 text-sm text-blue-50",children:"激活码"})]}),t.jsxs(dr,{ref:n,title:"Message",onSure:()=>n.current.close(),children:["请添加交流群获得激活码，或者联系网站开发者这波能反杀获得激活码，联系方式如下",t.jsxs("div",{className:"flex my-4",children:[t.jsx("div",{className:"w-8",children:"wx:"}),t.jsx("div",{className:"text-red-500",children:"icanmeetu"})]})]})]})}const jm=[{path:"tutorial",text:"基础版"},{path:"component",text:"组件"},{path:"advance",text:"尊享版"}];function Hb(){const n=u.useRef(null);return t.jsxs("header",{className:"fixed z-50 top-0 flex justify-between border-b border-slate-200 min-w-[320px] bg-white bg-opacity-70 backdrop-blur-sm w-full",children:[t.jsxs("div",{className:"pl-6 h-16 flex items-center md:pl-10 transition-all",children:[t.jsxs(yn,{className:"flex items-center",to:"/",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})}),t.jsx("div",{className:"font-bold ml-2",children:"React 19"})]}),t.jsx("div",{className:"hidden md:block",children:jm.map((e,s)=>t.jsx(yn,{to:e.path,className:"ml-8 text-gray-500",end:!1,activeName:"text-gray-900",children:e.text},e.path))}),t.jsxs("a",{className:"hidden md:flex text-xs m-8 rounded-full bg-red-100 py-2 px-4 text-red-400 transition hover:bg-red-300 hover:text-red-700 cursor-pointer",href:"https://appxw863qeq2150.h5.xiaoeknow.com/p/decorate/homepage?entry=2&entry_type=2002&share_user_id=u_626bf7dfafe72_zLCXc4Qr0O&wework_share_customer_id=u_626bf7dfafe72_zLCXc4Qr0O",target:"_blank",children:["推荐：JavaScript 核心进阶",t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4 ml-2",children:t.jsx("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",clipRule:"evenodd"})})]})]}),t.jsxs("div",{className:"hidden md:flex h-16 items-center pr-6 text-gray-500",children:[t.jsx(zb,{alt:"交流群"}),t.jsx(Ub,{alt:"激活码"}),t.jsx($b,{})]}),t.jsx("div",{className:"md:hidden flex items-center pr-6 text-gray-700",onClick:()=>n.current.show(),children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"})})}),t.jsxs(ya,{ref:n,onClose:()=>n.current.close(),children:[t.jsxs("header",{className:"sticky top-0 flex justify-between border-b border-amber-50 bg-amber-50",children:[t.jsx("div",{className:"pl-6 h-16 flex items-center md:pl-10 transition-all",children:t.jsxs(yn,{className:"flex items-center",to:"/",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})}),t.jsx("div",{className:"font-bold ml-2",children:"React 19"})]})}),t.jsx("div",{className:"flex h-16 items-center pr-6 text-gray-500",children:t.jsx("div",{className:"flex items-center text-gray-700",onClick:()=>n.current.show(),children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})})]}),jm.map((e,s)=>t.jsx("div",{className:"flex items-center text-gray-700 bg-white px-8 py-5 transition hover:bg-amber-100",children:t.jsxs(yn,{className:"flex items-center justify-between w-full",to:e.path,children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5",children:t.jsx("path",{fillRule:"evenodd",d:"M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})}),t.jsx("div",{className:"ml-2 text-sm",children:e.text})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})},e.path)),t.jsx("div",{className:"flex items-center text-red-500 bg-red-50 px-8 py-5 transition hover:text-red-700 hover:bg-red-200",children:t.jsxs("a",{className:"flex items-center justify-between w-full",href:"https://appxw863qeq2150.h5.xiaoeknow.com/p/decorate/homepage?entry=2&entry_type=2002&share_user_id=u_626bf7dfafe72_zLCXc4Qr0O&wework_share_customer_id=u_626bf7dfafe72_zLCXc4Qr0O",children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5",children:t.jsx("path",{fillRule:"evenodd",d:"M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z",clipRule:"evenodd"})}),t.jsx("div",{className:"ml-2 text-sm",children:"推荐：JavaScript 核心进阶"})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})}),t.jsx("div",{className:"flex items-center text-gray-700 bg-white px-8 py-5 transition hover:bg-amber-100",children:t.jsxs(yn,{className:"flex items-center justify-between w-full",to:"/",children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"})}),t.jsx("div",{className:"ml-2 text-sm",children:"交流群"})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})}),t.jsx("div",{className:"flex items-center text-gray-700 bg-white px-8 py-5 transition hover:bg-amber-100",children:t.jsxs(yn,{className:"flex items-center justify-between w-full",to:"/",children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})}),t.jsx("div",{className:"ml-2 text-sm",children:"激活码"})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})})]})]})}function qb(){const[n,e]=u.useState(""),s=`relative ${n} bg-skin-fill overflow-hidden rounded`;return t.jsxs("div",{className:"my-8 border border-gray-150 rounded px-8 pb-8",children:[t.jsxs("div",{className:"flex justify-center",children:[t.jsx("div",{onClick:()=>e(""),className:"my-6 mx-2 h-6 w-6 rounded bg-indigo-500 cursor-pointer"}),t.jsx("div",{onClick:()=>e("theme-swiss"),className:"my-6 mx-2 h-6 w-6 rounded bg-red-600 cursor-pointer"}),t.jsx("div",{onClick:()=>e("theme-neon"),className:"my-6 mx-2 h-6 w-6 rounded bg-green-400 cursor-pointer"})]}),t.jsxs("div",{className:s,children:[t.jsx("img",{className:"absolute inset-0 h-full w-full object-cover opacity-30",src:"https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90 transition"}),t.jsxs("div",{className:"relative max-w-2xl mx-auto text-center py-16 px-8",children:[t.jsx("h2",{className:"font-extrabold text-skin-base text-4xl transition",children:t.jsx("span",{children:"极客时间、掘金买课优惠"})}),t.jsx("p",{className:"mt-4 text-md text-left text-skin-muted transition",children:"官方的课程返现全部归还，需要从网站 coursesub.top 或者公众号「课程减减」通过邀请链接进行下单，购买后添加客服微信发送课程名确认后即可收到红包，可正常使用极客时间的优惠券或者学生半价优惠。"}),t.jsx("div",{className:"mt-10 max-w-sm mx-auto sm:max-w-one sm:flex sm:justify-center",children:t.jsxs("div",{className:"space-y-0 mx-auto inline-grid grid-cols-2 gap-5",children:[t.jsx("a",{target:"_blank",className:"transition text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md shadow-lg px-8",href:"https://coursesub.top/?key=react",children:"去选课"}),t.jsx("a",{target:"_blank",className:"transition text-skin-base bg-skin-button-muted hover:bg-opacity-70 flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-lg shadow-sm px-8",href:"https://mp.weixin.qq.com/s?__biz=MzUyMjkwNTgwOA==&mid=2247485923&idx=1&sn=0710d33fd1e1287e10f88bd4139e0a0e&chksm=f9c5f85cceb2714a585567f21751ae703f8ba80519a7a089746079a05c4f916c962fe81332d1#rd",children:"详细规则"})]})})]})]})]})}function Vb(){return t.jsx("div",{className:"fixed top-0 inset-0 -z-10 mx-0 max-w-none overflow-hidden",children:t.jsxs("div",{className:"absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100",children:t.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5",children:[t.jsx("defs",{children:t.jsx("pattern",{id:":S1:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"-12",y:"4",children:t.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),t.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:S1:)"}),t.jsxs("svg",{x:"-12",y:"4",className:"overflow-visible",children:[t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"288",y:"168"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"144",y:"56"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"504",y:"168"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"720",y:"336"})]})]})}),t.jsx("svg",{viewBox:"0 0 1113 440","aria-hidden":"true",className:"absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden",children:t.jsx("path",{d:"M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"})})]})})}function Ki({title:n,desc:e="",path:s,icon:r,className:a}){const[l,i]=u.useState({x:0,y:0}),c=u.useRef(null),o=unescape(n.replace(/\\u/gi,"%u")),d=unescape(e.replace(/\\u/gi,"%u"));u.useEffect(()=>{const j=c.current.getBoundingClientRect();function y(b){i({x:b.x-j.left,y:b.y+document.documentElement.scrollTop-j.top})}c.current.addEventListener("mouseenter",b=>{document.addEventListener("mousemove",y,!1)},!1),c.current.addEventListener("mouseleave",b=>{document.removeEventListener("mousemove",y,!1)},!1)},[]);const m=`radial-gradient(180px at ${l.x}px ${l.y}px, white, transparent)`,p=U("group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5",a);return t.jsxs("div",{ref:c,className:p,children:[t.jsxs("div",{className:"pointer-events-none",children:[t.jsx("div",{className:"absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50",children:t.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5",children:[t.jsx("defs",{children:t.jsx("pattern",{id:":Rkq5jsqja:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"50%",y:"16",children:t.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),t.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:Rkq5jsqja:)"}),t.jsxs("svg",{x:"50%",y:"16",className:"overflow-visible",children:[t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"0",y:"56"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"72",y:"168"})]})]})}),t.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]",style:{maskImage:m}}),t.jsx("div",{className:"absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100",style:{maskImage:m},children:t.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10",children:[t.jsx("defs",{children:t.jsx("pattern",{id:":R5kq5jsqja:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"50%",y:"16",children:t.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),t.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:R5kq5jsqja:)"}),t.jsxs("svg",{x:"50%",y:"16",className:"overflow-visible",children:[t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"0",y:"56"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"72",y:"168"})]})]})})]}),t.jsx("div",{className:"absolute inset-0 rounded-2xl ring-1 ring-gray-200 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"}),t.jsxs("div",{className:"relative rounded-2xl px-4 pb-4 pt-16",children:[t.jsx("div",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400",children:t.jsxs("svg",{viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400",children:[t.jsx("path",{strokeWidth:"0",fillRule:"evenodd",clipRule:"evenodd",d:"M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"}),t.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",d:"M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"}),t.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",d:"M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"})]})}),t.jsx("h3",{className:"mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white",children:t.jsxs("a",{href:s,children:[t.jsx("span",{className:"absolute inset-0 rounded-2xl"}),o]})}),t.jsx("p",{className:"mt-1 text-sm text-zinc-600 dark:text-zinc-400",children:d})]})]})}function Ya(n){const{className:e,primary:s,danger:r,sm:a,lg:l,success:i,...c}=n,h=He(U("rounded-md border border-transparent font-medium cursor-pointer transition","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l}));return t.jsx("button",{className:h,...c,children:n.children})}function Xb(){return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"min-w-[400px] mx-auto px-16 h-[300px] flex flex-col justify-center",children:[t.jsx("div",{className:"my-2",children:t.jsx("div",{className:"font-bold",children:"按钮类型"})}),t.jsxs("div",{className:"flex items-center justify-between my-4",children:[t.jsx(Ya,{children:"Normal"}),t.jsx(Ya,{danger:!0,children:"Danger"}),t.jsx(Ya,{primary:!0,children:"Primary"}),t.jsx(Ya,{success:!0,children:"Success"})]})]})})}const Zb=`import Button from './Button.jsx'

export default function ButtonCase() {
  return (
    <>
      <div className='min-w-[400px] mx-auto px-16 h-[300px] flex flex-col justify-center'>
        <div className='my-2'>
          <div className='font-bold'>按钮类型</div>
        </div>
        <div className='flex items-center justify-between my-4'>
          <Button>Normal</Button>
          <Button danger>Danger</Button>
          <Button primary>Primary</Button>
          <Button success>Success</Button>
        </div>
      </div>
    </>
  )
}
`,Na=`import {twMerge} from 'tailwind-merge'
import Show from '../Show'
import clsx from 'clsx'


function generatorDefault(disabled, ghost) {
  let base = 'bg-gray-100 text-gray-500'
  let inter = 'hover:bg-gray-200 active:bg-gray-300'

  if (ghost) {
    base = 'bg-transparent text-gray-500'
    inter = 'hover:bg-gray-50 active:bg-gray-100 hover:text-gray-600 active:text-gray-700'
  }
  if (disabled) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

function generatorPrimary(disable, ghost) {
  let base = 'bg-blue-500 text-white'
  let inter = 'hover:bg-blue-600 active:bg-blue-700'
  if (ghost) {
    base = 'bg-transparent text-blue-500'
    inter = 'hover:bg-blue-50 active:bg-blue-100 hover:text-blue-600 active:text-blue-700'
  }
  if (disable) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

function generatorDanger(disabled, ghost) {
  let base = 'bg-red-500 text-white'
  let inter = 'hover:bg-red-600 active:bg-red-700'

  if (ghost) {
    base = 'bg-transparent text-red-500'
    inter = 'hover:bg-red-50 active:bg-red-100 hover:text-red-600 active:text-red-700'
  }
  if (disabled) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

function generatorSucess(disabled, ghost) {
  let base = 'bg-green-500 text-white'
  let inter = 'hover:bg-green-600 active:bg-green-700'

  if (ghost) {
    base = 'bg-transparent text-green-500'
    inter = 'hover:bg-green-50 active:bg-green-100 hover:text-green-600 active:text-green-700'
  }
  if (disabled) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

function generatorSignal(disabled) {
  let base = 'bg-white border-sky-300 text-sky-500'
  let inter = 'hover:border-sky-400 active:bg-sky-500 hover:text-sky-600 active:text-sky-700 hover:bg-sky-50 active:bg-sky-100'

  if (disabled) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

export default function Button(props) {
  const {className, primary, danger, sm, lg, signal, success, ghost, rect, disabled, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition relative text-gray-600 hover:bg-transparent'

  // size
  const md = 'text-xs py-2 px-4'

  const def = !primary && !danger && !success && !signal

  const cls = twMerge(clsx(base, md, {
    // type
    [generatorDefault(disabled, ghost)]: def,
    [generatorPrimary(disabled, ghost)]: primary,
    [generatorDanger(disabled, ghost)]: danger,
    [generatorSucess(disabled, ghost)]: success,
    [generatorSignal(disabled)]: signal,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
    ['p-2']: rect,
  }, className))

  return (
    <button className={cls} {...other} disabled={disabled}>
      {props.children}
      <Show when={signal}>
        <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </Show>
    </button>
  )
}
`;function Gb(n,e){if(n==null)return{};var s={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;s[r]=n[r]}return s}function Yb(n,e){if(n==null)return{};var s,r,a=Gb(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)s=l[r],e.indexOf(s)>=0||{}.propertyIsEnumerable.call(n,s)&&(a[s]=n[s])}return a}function co(n,e){(e==null||e>n.length)&&(e=n.length);for(var s=0,r=Array(e);s<e;s++)r[s]=n[s];return r}function Ib(n){if(Array.isArray(n))return co(n)}function Fb(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Pb(n,e){if(n){if(typeof n=="string")return co(n,e);var s={}.toString.call(n).slice(8,-1);return s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set"?Array.from(n):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?co(n,e):void 0}}function Qb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jb(n){return Ib(n)||Fb(n)||Pb(n)||Qb()}function ia(n){"@babel/helpers - typeof";return ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ia(n)}function Wb(n,e){if(ia(n)!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var r=s.call(n,e||"default");if(ia(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Kb(n){var e=Wb(n,"string");return ia(e)=="symbol"?e:e+""}function k0(n,e,s){return(e=Kb(e))in n?Object.defineProperty(n,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[e]=s,n}function oo(){return oo=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)({}).hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},oo.apply(null,arguments)}function vm(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),s.push.apply(s,r)}return s}function Ms(n){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?vm(Object(s),!0).forEach(function(r){k0(n,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):vm(Object(s)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(s,r))})}return n}function e5(n){var e=n.length;if(e===0||e===1)return n;if(e===2)return[n[0],n[1],"".concat(n[0],".").concat(n[1]),"".concat(n[1],".").concat(n[0])];if(e===3)return[n[0],n[1],n[2],"".concat(n[0],".").concat(n[1]),"".concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[0]),"".concat(n[1],".").concat(n[2]),"".concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[1]),"".concat(n[0],".").concat(n[1],".").concat(n[2]),"".concat(n[0],".").concat(n[2],".").concat(n[1]),"".concat(n[1],".").concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[0],".").concat(n[1]),"".concat(n[2],".").concat(n[1],".").concat(n[0])];if(e>=4)return[n[0],n[1],n[2],n[3],"".concat(n[0],".").concat(n[1]),"".concat(n[0],".").concat(n[2]),"".concat(n[0],".").concat(n[3]),"".concat(n[1],".").concat(n[0]),"".concat(n[1],".").concat(n[2]),"".concat(n[1],".").concat(n[3]),"".concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[1]),"".concat(n[2],".").concat(n[3]),"".concat(n[3],".").concat(n[0]),"".concat(n[3],".").concat(n[1]),"".concat(n[3],".").concat(n[2]),"".concat(n[0],".").concat(n[1],".").concat(n[2]),"".concat(n[0],".").concat(n[1],".").concat(n[3]),"".concat(n[0],".").concat(n[2],".").concat(n[1]),"".concat(n[0],".").concat(n[2],".").concat(n[3]),"".concat(n[0],".").concat(n[3],".").concat(n[1]),"".concat(n[0],".").concat(n[3],".").concat(n[2]),"".concat(n[1],".").concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[0],".").concat(n[3]),"".concat(n[1],".").concat(n[2],".").concat(n[0]),"".concat(n[1],".").concat(n[2],".").concat(n[3]),"".concat(n[1],".").concat(n[3],".").concat(n[0]),"".concat(n[1],".").concat(n[3],".").concat(n[2]),"".concat(n[2],".").concat(n[0],".").concat(n[1]),"".concat(n[2],".").concat(n[0],".").concat(n[3]),"".concat(n[2],".").concat(n[1],".").concat(n[0]),"".concat(n[2],".").concat(n[1],".").concat(n[3]),"".concat(n[2],".").concat(n[3],".").concat(n[0]),"".concat(n[2],".").concat(n[3],".").concat(n[1]),"".concat(n[3],".").concat(n[0],".").concat(n[1]),"".concat(n[3],".").concat(n[0],".").concat(n[2]),"".concat(n[3],".").concat(n[1],".").concat(n[0]),"".concat(n[3],".").concat(n[1],".").concat(n[2]),"".concat(n[3],".").concat(n[2],".").concat(n[0]),"".concat(n[3],".").concat(n[2],".").concat(n[1]),"".concat(n[0],".").concat(n[1],".").concat(n[2],".").concat(n[3]),"".concat(n[0],".").concat(n[1],".").concat(n[3],".").concat(n[2]),"".concat(n[0],".").concat(n[2],".").concat(n[1],".").concat(n[3]),"".concat(n[0],".").concat(n[2],".").concat(n[3],".").concat(n[1]),"".concat(n[0],".").concat(n[3],".").concat(n[1],".").concat(n[2]),"".concat(n[0],".").concat(n[3],".").concat(n[2],".").concat(n[1]),"".concat(n[1],".").concat(n[0],".").concat(n[2],".").concat(n[3]),"".concat(n[1],".").concat(n[0],".").concat(n[3],".").concat(n[2]),"".concat(n[1],".").concat(n[2],".").concat(n[0],".").concat(n[3]),"".concat(n[1],".").concat(n[2],".").concat(n[3],".").concat(n[0]),"".concat(n[1],".").concat(n[3],".").concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[3],".").concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[0],".").concat(n[1],".").concat(n[3]),"".concat(n[2],".").concat(n[0],".").concat(n[3],".").concat(n[1]),"".concat(n[2],".").concat(n[1],".").concat(n[0],".").concat(n[3]),"".concat(n[2],".").concat(n[1],".").concat(n[3],".").concat(n[0]),"".concat(n[2],".").concat(n[3],".").concat(n[0],".").concat(n[1]),"".concat(n[2],".").concat(n[3],".").concat(n[1],".").concat(n[0]),"".concat(n[3],".").concat(n[0],".").concat(n[1],".").concat(n[2]),"".concat(n[3],".").concat(n[0],".").concat(n[2],".").concat(n[1]),"".concat(n[3],".").concat(n[1],".").concat(n[0],".").concat(n[2]),"".concat(n[3],".").concat(n[1],".").concat(n[2],".").concat(n[0]),"".concat(n[3],".").concat(n[2],".").concat(n[0],".").concat(n[1]),"".concat(n[3],".").concat(n[2],".").concat(n[1],".").concat(n[0])]}var ec={};function n5(n){if(n.length===0||n.length===1)return n;var e=n.join(".");return ec[e]||(ec[e]=e5(n)),ec[e]}function t5(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,r=n.filter(function(l){return l!=="token"}),a=n5(r);return a.reduce(function(l,i){return Ms(Ms({},l),s[i])},e)}function bm(n){return n.join(" ")}function s5(n,e){var s=0;return function(r){return s+=1,r.map(function(a,l){return C0({node:a,stylesheet:n,useInlineStyles:e,key:"code-segment-".concat(s,"-").concat(l)})})}}function C0(n){var e=n.node,s=n.stylesheet,r=n.style,a=r===void 0?{}:r,l=n.useInlineStyles,i=n.key,c=e.properties,o=e.type,d=e.tagName,m=e.value;if(o==="text")return m;if(d){var h=s5(s,l),p;if(!l)p=Ms(Ms({},c),{},{className:bm(c.className)});else{var j=Object.keys(s).reduce(function(x,f){return f.split(".").forEach(function(g){x.includes(g)||x.push(g)}),x},[]),y=c.className&&c.className.includes("token")?["token"]:[],b=c.className&&y.concat(c.className.filter(function(x){return!j.includes(x)}));p=Ms(Ms({},c),{},{className:bm(b)||void 0,style:t5(c.className,Object.assign({},c.style,a),s)})}var N=h(e.children);return Pn.createElement(d,oo({key:i},p),N)}}const r5=function(n,e){var s=n.listLanguages();return s.indexOf(e)!==-1};var a5=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function ym(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),s.push.apply(s,r)}return s}function Rn(n){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?ym(Object(s),!0).forEach(function(r){k0(n,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):ym(Object(s)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(s,r))})}return n}var l5=/\n/g;function i5(n){return n.match(l5)}function c5(n){var e=n.lines,s=n.startingLineNumber,r=n.style;return e.map(function(a,l){var i=l+s;return Pn.createElement("span",{key:"line-".concat(l),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(i):r},"".concat(i,`
`))})}function o5(n){var e=n.codeString,s=n.codeStyle,r=n.containerStyle,a=r===void 0?{float:"left",paddingRight:"10px"}:r,l=n.numberStyle,i=l===void 0?{}:l,c=n.startingLineNumber;return Pn.createElement("code",{style:Object.assign({},s,a)},c5({lines:e.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:c}))}function d5(n){return"".concat(n.toString().length,".25em")}function _0(n,e){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(n),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:e},children:[{type:"text",value:n}]}}function A0(n,e,s){var r={display:"inline-block",minWidth:d5(s),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof n=="function"?n(e):n,l=Rn(Rn({},r),a);return l}function il(n){var e=n.children,s=n.lineNumber,r=n.lineNumberStyle,a=n.largestLineNumber,l=n.showInlineLineNumbers,i=n.lineProps,c=i===void 0?{}:i,o=n.className,d=o===void 0?[]:o,m=n.showLineNumbers,h=n.wrapLongLines,p=typeof c=="function"?c(s):c;if(p.className=d,s&&l){var j=A0(r,s,a);e.unshift(_0(s,j))}return h&m&&(p.style=Rn(Rn({},p.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:p,children:e}}function $0(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<n.length;r++){var a=n[r];if(a.type==="text")s.push(il({children:[a],className:Jb(new Set(e))}));else if(a.children){var l=e.concat(a.properties.className);$0(a.children,l).forEach(function(i){return s.push(i)})}}return s}function u5(n,e,s,r,a,l,i,c,o){var d,m=$0(n.value),h=[],p=-1,j=0;function y(k,C){var $=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return il({children:k,lineNumber:C,lineNumberStyle:c,largestLineNumber:i,showInlineLineNumbers:a,lineProps:s,className:$,showLineNumbers:r,wrapLongLines:o})}function b(k,C){if(r&&C&&a){var $=A0(c,C,i);k.unshift(_0(C,$))}return k}function N(k,C){var $=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return e||$.length>0?y(k,C,$):b(k,C)}for(var x=function(){var C=m[j],$=C.children[0].value,R=i5($);if(R){var P=$.split(`
`);P.forEach(function(B,ce){var V=r&&h.length+l,sn={type:"text",value:"".concat(B,`
`)};if(ce===0){var qe=m.slice(p+1,j).concat(il({children:[sn],className:C.properties.className})),je=N(qe,V);h.push(je)}else if(ce===P.length-1){var A=m[j+1]&&m[j+1].children&&m[j+1].children[0],O={type:"text",value:"".concat(B)};if(A){var T=il({children:[O],className:C.properties.className});m.splice(j+1,0,T)}else{var G=[O],J=N(G,V,C.properties.className);h.push(J)}}else{var Le=[sn],Ve=N(Le,V,C.properties.className);h.push(Ve)}}),p=j}j++};j<m.length;)x();if(p!==m.length-1){var f=m.slice(p+1,m.length);if(f&&f.length){var g=r&&h.length+l,v=N(f,g);h.push(v)}}return e?h:(d=[]).concat.apply(d,h)}function m5(n){var e=n.rows,s=n.stylesheet,r=n.useInlineStyles;return e.map(function(a,l){return C0({node:a,stylesheet:s,useInlineStyles:r,key:"code-segement".concat(l)})})}function M0(n){return n&&typeof n.highlightAuto<"u"}function p5(n){var e=n.astGenerator,s=n.language,r=n.code,a=n.defaultCodeValue;if(M0(e)){var l=r5(e,s);return s==="text"?{value:a,language:"text"}:l?e.highlight(s,r):e.highlightAuto(r)}try{return s&&s!=="text"?{value:e.highlight(r,s)}:{value:a}}catch{return{value:a}}}function h5(n,e){return function(r){var a=r.language,l=r.children,i=r.style,c=i===void 0?e:i,o=r.customStyle,d=o===void 0?{}:o,m=r.codeTagProps,h=m===void 0?{className:a?"language-".concat(a):void 0,style:Rn(Rn({},c['code[class*="language-"]']),c['code[class*="language-'.concat(a,'"]')])}:m,p=r.useInlineStyles,j=p===void 0?!0:p,y=r.showLineNumbers,b=y===void 0?!1:y,N=r.showInlineLineNumbers,x=N===void 0?!0:N,f=r.startingLineNumber,g=f===void 0?1:f,v=r.lineNumberContainerStyle,k=r.lineNumberStyle,C=k===void 0?{}:k,$=r.wrapLines,R=r.wrapLongLines,P=R===void 0?!1:R,B=r.lineProps,ce=B===void 0?{}:B,V=r.renderer,sn=r.PreTag,qe=sn===void 0?"pre":sn,je=r.CodeTag,A=je===void 0?"code":je,O=r.code,T=O===void 0?(Array.isArray(l)?l[0]:l)||"":O,G=r.astGenerator,J=Yb(r,a5);G=G||n;var Le=b?Pn.createElement(o5,{containerStyle:v,codeStyle:h.style||{},numberStyle:C,startingLineNumber:g,codeString:T}):null,Ve=c.hljs||c['pre[class*="language-"]']||{backgroundColor:"#fff"},S=M0(G)?"hljs":"prismjs",M=j?Object.assign({},J,{style:Object.assign({},Ve,d)}):Object.assign({},J,{className:J.className?"".concat(S," ").concat(J.className):S,style:Object.assign({},d)});if(P?h.style=Rn(Rn({},h.style),{},{whiteSpace:"pre-wrap"}):h.style=Rn(Rn({},h.style),{},{whiteSpace:"pre"}),!G)return Pn.createElement(qe,M,Le,Pn.createElement(A,h,T));($===void 0&&V||P)&&($=!0),V=V||m5;var H=[{type:"text",value:T}],K=p5({astGenerator:G,language:a,code:T,defaultCodeValue:H});K.language===null&&(K.value=H);var ye=K.value.length+g,Xn=u5(K,$,ce,b,x,g,ye,C,P);return Pn.createElement(qe,M,Pn.createElement(A,h,!x&&Le,V({rows:Xn,stylesheet:c,useInlineStyles:j})))}}var os={};function bd(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(function(e){var s=n[e];typeof s=="object"&&!Object.isFrozen(s)&&bd(s)}),n}var R0=bd,f5=bd;R0.default=f5;class Nm{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Hs(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function St(n,...e){const s=Object.create(null);for(const r in n)s[r]=n[r];return e.forEach(function(r){for(const a in r)s[a]=r[a]}),s}const x5="</span>",wm=n=>!!n.kind;class g5{constructor(e,s){this.buffer="",this.classPrefix=s.classPrefix,e.walk(this)}addText(e){this.buffer+=Hs(e)}openNode(e){if(!wm(e))return;let s=e.kind;e.sublanguage||(s=`${this.classPrefix}${s}`),this.span(s)}closeNode(e){wm(e)&&(this.buffer+=x5)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class yd{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const s={kind:e,children:[]};this.add(s),this.stack.push(s)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,s){return typeof s=="string"?e.addText(s):s.children&&(e.openNode(s),s.children.forEach(r=>this._walk(e,r)),e.closeNode(s)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(s=>typeof s=="string")?e.children=[e.children.join("")]:e.children.forEach(s=>{yd._collapse(s)}))}}class j5 extends yd{constructor(e){super(),this.options=e}addKeyword(e,s){e!==""&&(this.openNode(s),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,s){const r=e.root;r.kind=s,r.sublanguage=!0,this.add(r)}toHTML(){return new g5(this,this.options).value()}finalize(){return!0}}function v5(n){return new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function ca(n){return n?typeof n=="string"?n:n.source:null}function b5(...n){return n.map(s=>ca(s)).join("")}function y5(...n){return"("+n.map(s=>ca(s)).join("|")+")"}function N5(n){return new RegExp(n.toString()+"|").exec("").length-1}function w5(n,e){const s=n&&n.exec(e);return s&&s.index===0}const S5=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function k5(n,e="|"){let s=0;return n.map(r=>{s+=1;const a=s;let l=ca(r),i="";for(;l.length>0;){const c=S5.exec(l);if(!c){i+=l;break}i+=l.substring(0,c.index),l=l.substring(c.index+c[0].length),c[0][0]==="\\"&&c[1]?i+="\\"+String(Number(c[1])+a):(i+=c[0],c[0]==="("&&s++)}return i}).map(r=>`(${r})`).join(e)}const C5=/\b\B/,L0="[a-zA-Z]\\w*",Nd="[a-zA-Z_]\\w*",wd="\\b\\d+(\\.\\d+)?",E0="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",T0="\\b(0b[01]+)",_5="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",A5=(n={})=>{const e=/^#![ ]*\//;return n.binary&&(n.begin=b5(e,/.*\b/,n.binary,/\b.*/)),St({className:"meta",begin:e,end:/$/,relevance:0,"on:begin":(s,r)=>{s.index!==0&&r.ignoreMatch()}},n)},oa={begin:"\\\\[\\s\\S]",relevance:0},$5={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[oa]},M5={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[oa]},D0={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},di=function(n,e,s={}){const r=St({className:"comment",begin:n,end:e,contains:[]},s);return r.contains.push(D0),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},R5=di("//","$"),L5=di("/\\*","\\*/"),E5=di("#","$"),T5={className:"number",begin:wd,relevance:0},D5={className:"number",begin:E0,relevance:0},O5={className:"number",begin:T0,relevance:0},B5={className:"number",begin:wd+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},z5={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[oa,{begin:/\[/,end:/\]/,relevance:0,contains:[oa]}]}]},U5={className:"title",begin:L0,relevance:0},H5={className:"title",begin:Nd,relevance:0},q5={begin:"\\.\\s*"+Nd,relevance:0},V5=function(n){return Object.assign(n,{"on:begin":(e,s)=>{s.data._beginMatch=e[1]},"on:end":(e,s)=>{s.data._beginMatch!==e[1]&&s.ignoreMatch()}})};var Ia=Object.freeze({__proto__:null,MATCH_NOTHING_RE:C5,IDENT_RE:L0,UNDERSCORE_IDENT_RE:Nd,NUMBER_RE:wd,C_NUMBER_RE:E0,BINARY_NUMBER_RE:T0,RE_STARTERS_RE:_5,SHEBANG:A5,BACKSLASH_ESCAPE:oa,APOS_STRING_MODE:$5,QUOTE_STRING_MODE:M5,PHRASAL_WORDS_MODE:D0,COMMENT:di,C_LINE_COMMENT_MODE:R5,C_BLOCK_COMMENT_MODE:L5,HASH_COMMENT_MODE:E5,NUMBER_MODE:T5,C_NUMBER_MODE:D5,BINARY_NUMBER_MODE:O5,CSS_NUMBER_MODE:B5,REGEXP_MODE:z5,TITLE_MODE:U5,UNDERSCORE_TITLE_MODE:H5,METHOD_GUARD:q5,END_SAME_AS_BEGIN:V5});function X5(n,e){n.input[n.index-1]==="."&&e.ignoreMatch()}function Z5(n,e){e&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=X5,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function G5(n,e){Array.isArray(n.illegal)&&(n.illegal=y5(...n.illegal))}function Y5(n,e){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function I5(n,e){n.relevance===void 0&&(n.relevance=1)}const F5=["of","and","for","in","not","or","if","then","parent","list","value"],P5="keyword";function O0(n,e,s=P5){const r={};return typeof n=="string"?a(s,n.split(" ")):Array.isArray(n)?a(s,n):Object.keys(n).forEach(function(l){Object.assign(r,O0(n[l],e,l))}),r;function a(l,i){e&&(i=i.map(c=>c.toLowerCase())),i.forEach(function(c){const o=c.split("|");r[o[0]]=[l,Q5(o[0],o[1])]})}}function Q5(n,e){return e?Number(e):J5(n)?0:1}function J5(n){return F5.includes(n.toLowerCase())}function W5(n,{plugins:e}){function s(c,o){return new RegExp(ca(c),"m"+(n.case_insensitive?"i":"")+(o?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(o,d){d.position=this.position++,this.matchIndexes[this.matchAt]=d,this.regexes.push([d,o]),this.matchAt+=N5(o)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const o=this.regexes.map(d=>d[1]);this.matcherRe=s(k5(o),!0),this.lastIndex=0}exec(o){this.matcherRe.lastIndex=this.lastIndex;const d=this.matcherRe.exec(o);if(!d)return null;const m=d.findIndex((p,j)=>j>0&&p!==void 0),h=this.matchIndexes[m];return d.splice(0,m),Object.assign(d,h)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(o){if(this.multiRegexes[o])return this.multiRegexes[o];const d=new r;return this.rules.slice(o).forEach(([m,h])=>d.addRule(m,h)),d.compile(),this.multiRegexes[o]=d,d}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(o,d){this.rules.push([o,d]),d.type==="begin"&&this.count++}exec(o){const d=this.getMatcher(this.regexIndex);d.lastIndex=this.lastIndex;let m=d.exec(o);if(this.resumingScanAtSamePosition()&&!(m&&m.index===this.lastIndex)){const h=this.getMatcher(0);h.lastIndex=this.lastIndex+1,m=h.exec(o)}return m&&(this.regexIndex+=m.position+1,this.regexIndex===this.count&&this.considerAll()),m}}function l(c){const o=new a;return c.contains.forEach(d=>o.addRule(d.begin,{rule:d,type:"begin"})),c.terminatorEnd&&o.addRule(c.terminatorEnd,{type:"end"}),c.illegal&&o.addRule(c.illegal,{type:"illegal"}),o}function i(c,o){const d=c;if(c.isCompiled)return d;[Y5].forEach(h=>h(c,o)),n.compilerExtensions.forEach(h=>h(c,o)),c.__beforeBegin=null,[Z5,G5,I5].forEach(h=>h(c,o)),c.isCompiled=!0;let m=null;if(typeof c.keywords=="object"&&(m=c.keywords.$pattern,delete c.keywords.$pattern),c.keywords&&(c.keywords=O0(c.keywords,n.case_insensitive)),c.lexemes&&m)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return m=m||c.lexemes||/\w+/,d.keywordPatternRe=s(m,!0),o&&(c.begin||(c.begin=/\B|\b/),d.beginRe=s(c.begin),c.endSameAsBegin&&(c.end=c.begin),!c.end&&!c.endsWithParent&&(c.end=/\B|\b/),c.end&&(d.endRe=s(c.end)),d.terminatorEnd=ca(c.end)||"",c.endsWithParent&&o.terminatorEnd&&(d.terminatorEnd+=(c.end?"|":"")+o.terminatorEnd)),c.illegal&&(d.illegalRe=s(c.illegal)),c.contains||(c.contains=[]),c.contains=[].concat(...c.contains.map(function(h){return K5(h==="self"?c:h)})),c.contains.forEach(function(h){i(h,d)}),c.starts&&i(c.starts,o),d.matcher=l(d),d}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=St(n.classNameAliases||{}),i(n)}function B0(n){return n?n.endsWithParent||B0(n.starts):!1}function K5(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return St(n,{variants:null},e)})),n.cachedVariants?n.cachedVariants:B0(n)?St(n,{starts:n.starts?St(n.starts):null}):Object.isFrozen(n)?St(n):n}var e4="10.7.3";function n4(n){return!!(n||n==="")}function t4(n){const e={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!n.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,Hs(this.code);let r={};return this.autoDetect?(r=n.highlightAuto(this.code),this.detectedLanguage=r.language):(r=n.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),r.value},autoDetect(){return!this.language||n4(this.autodetect)},ignoreIllegals(){return!0}},render(r){return r("pre",{},[r("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:e,VuePlugin:{install(r){r.component("highlightjs",e)}}}}const s4={"after:highlightElement":({el:n,result:e,text:s})=>{const r=Sm(n);if(!r.length)return;const a=document.createElement("div");a.innerHTML=e.value,e.value=r4(r,Sm(a),s)}};function uo(n){return n.nodeName.toLowerCase()}function Sm(n){const e=[];return function s(r,a){for(let l=r.firstChild;l;l=l.nextSibling)l.nodeType===3?a+=l.nodeValue.length:l.nodeType===1&&(e.push({event:"start",offset:a,node:l}),a=s(l,a),uo(l).match(/br|hr|img|input/)||e.push({event:"stop",offset:a,node:l}));return a}(n,0),e}function r4(n,e,s){let r=0,a="";const l=[];function i(){return!n.length||!e.length?n.length?n:e:n[0].offset!==e[0].offset?n[0].offset<e[0].offset?n:e:e[0].event==="start"?n:e}function c(m){function h(p){return" "+p.nodeName+'="'+Hs(p.value)+'"'}a+="<"+uo(m)+[].map.call(m.attributes,h).join("")+">"}function o(m){a+="</"+uo(m)+">"}function d(m){(m.event==="start"?c:o)(m.node)}for(;n.length||e.length;){let m=i();if(a+=Hs(s.substring(r,m[0].offset)),r=m[0].offset,m===n){l.reverse().forEach(o);do d(m.splice(0,1)[0]),m=i();while(m===n&&m.length&&m[0].offset===r);l.reverse().forEach(c)}else m[0].event==="start"?l.push(m[0].node):l.pop(),d(m.splice(0,1)[0])}return a+Hs(s.substr(r))}const km={},nc=n=>{console.error(n)},Cm=(n,...e)=>{console.log(`WARN: ${n}`,...e)},rn=(n,e)=>{km[`${n}/${e}`]||(console.log(`Deprecated as of ${n}. ${e}`),km[`${n}/${e}`]=!0)},tc=Hs,_m=St,Am=Symbol("nomatch"),a4=function(n){const e=Object.create(null),s=Object.create(null),r=[];let a=!0;const l=/(^(<[^>]+>|\t|)+|\n)/gm,i="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let o={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:j5};function d(S){return o.noHighlightRe.test(S)}function m(S){let M=S.className+" ";M+=S.parentNode?S.parentNode.className:"";const H=o.languageDetectRe.exec(M);if(H){const K=je(H[1]);return K||(Cm(i.replace("{}",H[1])),Cm("Falling back to no-highlight mode for this block.",S)),K?H[1]:"no-highlight"}return M.split(/\s+/).find(K=>d(K)||je(K))}function h(S,M,H,K){let ye="",Xn="";typeof M=="object"?(ye=S,H=M.ignoreIllegals,Xn=M.language,K=void 0):(rn("10.7.0","highlight(lang, code, ...args) has been deprecated."),rn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Xn=S,ye=M);const An={code:ye,language:Xn};J("before:highlight",An);const $n=An.result?An.result:p(An.language,An.code,H,K);return $n.code=An.code,J("after:highlight",$n),$n}function p(S,M,H,K){function ye(E,D){const I=us.case_insensitive?D[0].toLowerCase():D[0];return Object.prototype.hasOwnProperty.call(E.keywords,I)&&E.keywords[I]}function Xn(){if(!Y.keywords){Xe.addText(Ne);return}let E=0;Y.keywordPatternRe.lastIndex=0;let D=Y.keywordPatternRe.exec(Ne),I="";for(;D;){I+=Ne.substring(E,D.index);const se=ye(Y,D);if(se){const[Pe,Ca]=se;if(Xe.addText(I),I="",ka+=Ca,Pe.startsWith("_"))I+=D[0];else{const Y1=us.classNameAliases[Pe]||Pe;Xe.addKeyword(D[0],Y1)}}else I+=D[0];E=Y.keywordPatternRe.lastIndex,D=Y.keywordPatternRe.exec(Ne)}I+=Ne.substr(E),Xe.addText(I)}function An(){if(Ne==="")return;let E=null;if(typeof Y.subLanguage=="string"){if(!e[Y.subLanguage]){Xe.addText(Ne);return}E=p(Y.subLanguage,Ne,!0,Zd[Y.subLanguage]),Zd[Y.subLanguage]=E.top}else E=y(Ne,Y.subLanguage.length?Y.subLanguage:null);Y.relevance>0&&(ka+=E.relevance),Xe.addSublanguage(E.emitter,E.language)}function $n(){Y.subLanguage!=null?An():Xn(),Ne=""}function Mn(E){return E.className&&Xe.openNode(us.classNameAliases[E.className]||E.className),Y=Object.create(E,{parent:{value:Y}}),Y}function ot(E,D,I){let se=w5(E.endRe,I);if(se){if(E["on:end"]){const Pe=new Nm(E);E["on:end"](D,Pe),Pe.isMatchIgnored&&(se=!1)}if(se){for(;E.endsParent&&E.parent;)E=E.parent;return E}}if(E.endsWithParent)return ot(E.parent,D,I)}function q1(E){return Y.matcher.regexIndex===0?(Ne+=E[0],1):(pi=!0,0)}function V1(E){const D=E[0],I=E.rule,se=new Nm(I),Pe=[I.__beforeBegin,I["on:begin"]];for(const Ca of Pe)if(Ca&&(Ca(E,se),se.isMatchIgnored))return q1(D);return I&&I.endSameAsBegin&&(I.endRe=v5(D)),I.skip?Ne+=D:(I.excludeBegin&&(Ne+=D),$n(),!I.returnBegin&&!I.excludeBegin&&(Ne=D)),Mn(I),I.returnBegin?0:D.length}function X1(E){const D=E[0],I=M.substr(E.index),se=ot(Y,E,I);if(!se)return Am;const Pe=Y;Pe.skip?Ne+=D:(Pe.returnEnd||Pe.excludeEnd||(Ne+=D),$n(),Pe.excludeEnd&&(Ne=D));do Y.className&&Xe.closeNode(),!Y.skip&&!Y.subLanguage&&(ka+=Y.relevance),Y=Y.parent;while(Y!==se.parent);return se.starts&&(se.endSameAsBegin&&(se.starts.endRe=se.endRe),Mn(se.starts)),Pe.returnEnd?0:D.length}function Z1(){const E=[];for(let D=Y;D!==us;D=D.parent)D.className&&E.unshift(D.className);E.forEach(D=>Xe.openNode(D))}let Sa={};function Xd(E,D){const I=D&&D[0];if(Ne+=E,I==null)return $n(),0;if(Sa.type==="begin"&&D.type==="end"&&Sa.index===D.index&&I===""){if(Ne+=M.slice(D.index,D.index+1),!a){const se=new Error("0 width match regex");throw se.languageName=S,se.badRule=Sa.rule,se}return 1}if(Sa=D,D.type==="begin")return V1(D);if(D.type==="illegal"&&!H){const se=new Error('Illegal lexeme "'+I+'" for mode "'+(Y.className||"<unnamed>")+'"');throw se.mode=Y,se}else if(D.type==="end"){const se=X1(D);if(se!==Am)return se}if(D.type==="illegal"&&I==="")return 1;if(mi>1e5&&mi>D.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Ne+=I,I.length}const us=je(S);if(!us)throw nc(i.replace("{}",S)),new Error('Unknown language: "'+S+'"');const G1=W5(us,{plugins:r});let ui="",Y=K||G1;const Zd={},Xe=new o.__emitter(o);Z1();let Ne="",ka=0,ms=0,mi=0,pi=!1;try{for(Y.matcher.considerAll();;){mi++,pi?pi=!1:Y.matcher.considerAll(),Y.matcher.lastIndex=ms;const E=Y.matcher.exec(M);if(!E)break;const D=M.substring(ms,E.index),I=Xd(D,E);ms=E.index+I}return Xd(M.substr(ms)),Xe.closeAllNodes(),Xe.finalize(),ui=Xe.toHTML(),{relevance:Math.floor(ka),value:ui,language:S,illegal:!1,emitter:Xe,top:Y}}catch(E){if(E.message&&E.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:E.message,context:M.slice(ms-100,ms+100),mode:E.mode},sofar:ui,relevance:0,value:tc(M),emitter:Xe};if(a)return{illegal:!1,relevance:0,value:tc(M),emitter:Xe,language:S,top:Y,errorRaised:E};throw E}}function j(S){const M={relevance:0,emitter:new o.__emitter(o),value:tc(S),illegal:!1,top:c};return M.emitter.addText(S),M}function y(S,M){M=M||o.languages||Object.keys(e);const H=j(S),K=M.filter(je).filter(O).map(Mn=>p(Mn,S,!1));K.unshift(H);const ye=K.sort((Mn,ot)=>{if(Mn.relevance!==ot.relevance)return ot.relevance-Mn.relevance;if(Mn.language&&ot.language){if(je(Mn.language).supersetOf===ot.language)return 1;if(je(ot.language).supersetOf===Mn.language)return-1}return 0}),[Xn,An]=ye,$n=Xn;return $n.second_best=An,$n}function b(S){return o.tabReplace||o.useBR?S.replace(l,M=>M===`
`?o.useBR?"<br>":M:o.tabReplace?M.replace(/\t/g,o.tabReplace):M):S}function N(S,M,H){const K=M?s[M]:H;S.classList.add("hljs"),K&&S.classList.add(K)}const x={"before:highlightElement":({el:S})=>{o.useBR&&(S.innerHTML=S.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,`
`))},"after:highlightElement":({result:S})=>{o.useBR&&(S.value=S.value.replace(/\n/g,"<br>"))}},f=/^(<[^>]+>|\t)+/gm,g={"after:highlightElement":({result:S})=>{o.tabReplace&&(S.value=S.value.replace(f,M=>M.replace(/\t/g,o.tabReplace)))}};function v(S){let M=null;const H=m(S);if(d(H))return;J("before:highlightElement",{el:S,language:H}),M=S;const K=M.textContent,ye=H?h(K,{language:H,ignoreIllegals:!0}):y(K);J("after:highlightElement",{el:S,result:ye,text:K}),S.innerHTML=ye.value,N(S,H,ye.language),S.result={language:ye.language,re:ye.relevance,relavance:ye.relevance},ye.second_best&&(S.second_best={language:ye.second_best.language,re:ye.second_best.relevance,relavance:ye.second_best.relevance})}function k(S){S.useBR&&(rn("10.3.0","'useBR' will be removed entirely in v11.0"),rn("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),o=_m(o,S)}const C=()=>{if(C.called)return;C.called=!0,rn("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(v)};function $(){rn("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),R=!0}let R=!1;function P(){if(document.readyState==="loading"){R=!0;return}document.querySelectorAll("pre code").forEach(v)}function B(){R&&P()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",B,!1);function ce(S,M){let H=null;try{H=M(n)}catch(K){if(nc("Language definition for '{}' could not be registered.".replace("{}",S)),a)nc(K);else throw K;H=c}H.name||(H.name=S),e[S]=H,H.rawDefinition=M.bind(null,n),H.aliases&&A(H.aliases,{languageName:S})}function V(S){delete e[S];for(const M of Object.keys(s))s[M]===S&&delete s[M]}function sn(){return Object.keys(e)}function qe(S){rn("10.4.0","requireLanguage will be removed entirely in v11."),rn("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const M=je(S);if(M)return M;throw new Error("The '{}' language is required, but not loaded.".replace("{}",S))}function je(S){return S=(S||"").toLowerCase(),e[S]||e[s[S]]}function A(S,{languageName:M}){typeof S=="string"&&(S=[S]),S.forEach(H=>{s[H.toLowerCase()]=M})}function O(S){const M=je(S);return M&&!M.disableAutodetect}function T(S){S["before:highlightBlock"]&&!S["before:highlightElement"]&&(S["before:highlightElement"]=M=>{S["before:highlightBlock"](Object.assign({block:M.el},M))}),S["after:highlightBlock"]&&!S["after:highlightElement"]&&(S["after:highlightElement"]=M=>{S["after:highlightBlock"](Object.assign({block:M.el},M))})}function G(S){T(S),r.push(S)}function J(S,M){const H=S;r.forEach(function(K){K[H]&&K[H](M)})}function Le(S){return rn("10.2.0","fixMarkup will be removed entirely in v11.0"),rn("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),b(S)}function Ve(S){return rn("10.7.0","highlightBlock will be removed entirely in v12.0"),rn("10.7.0","Please use highlightElement now."),v(S)}Object.assign(n,{highlight:h,highlightAuto:y,highlightAll:P,fixMarkup:Le,highlightElement:v,highlightBlock:Ve,configure:k,initHighlighting:C,initHighlightingOnLoad:$,registerLanguage:ce,unregisterLanguage:V,listLanguages:sn,getLanguage:je,registerAliases:A,requireLanguage:qe,autoDetection:O,inherit:_m,addPlugin:G,vuePlugin:t4(n).VuePlugin}),n.debugMode=function(){a=!1},n.safeMode=function(){a=!0},n.versionString=e4;for(const S in Ia)typeof Ia[S]=="object"&&R0(Ia[S]);return Object.assign(n,Ia),n.addPlugin(x),n.addPlugin(s4),n.addPlugin(g),n};var l4=a4({}),i4=l4,z0={exports:{}};(function(n){(function(){var e;e=n.exports=a,e.format=a,e.vsprintf=r,typeof console<"u"&&typeof console.log=="function"&&(e.printf=s);function s(){console.log(a.apply(null,arguments))}function r(l,i){return a.apply(null,[l].concat(i))}function a(l){for(var i=1,c=[].slice.call(arguments),o=0,d=l.length,m="",h,p=!1,j,y,b=!1,N,x=function(){return c[i++]},f=function(){for(var g="";/\d/.test(l[o]);)g+=l[o++],h=l[o];return g.length>0?parseInt(g):null};o<d;++o)if(h=l[o],p)switch(p=!1,h=="."?(b=!1,h=l[++o]):h=="0"&&l[o+1]=="."?(b=!0,o+=2,h=l[o]):b=!0,N=f(),h){case"b":m+=parseInt(x(),10).toString(2);break;case"c":j=x(),typeof j=="string"||j instanceof String?m+=j:m+=String.fromCharCode(parseInt(j,10));break;case"d":m+=parseInt(x(),10);break;case"f":y=String(parseFloat(x()).toFixed(N||6)),m+=b?y:y.replace(/^0/,"");break;case"j":m+=JSON.stringify(x());break;case"o":m+="0"+parseInt(x(),10).toString(8);break;case"s":m+=x();break;case"x":m+="0x"+parseInt(x(),10).toString(16);break;case"X":m+="0x"+parseInt(x(),10).toString(16).toUpperCase();break;default:m+=h;break}else h==="%"?p=!0:m+=h;return m}})()})(z0);var c4=z0.exports,o4=c4,zt=Ut(Error),d4=zt;zt.eval=Ut(EvalError);zt.range=Ut(RangeError);zt.reference=Ut(ReferenceError);zt.syntax=Ut(SyntaxError);zt.type=Ut(TypeError);zt.uri=Ut(URIError);zt.create=Ut;function Ut(n){return e.displayName=n.displayName||n.name,e;function e(s){return s&&(s=o4.apply(null,arguments)),new n(s)}}var En=i4,cl=d4;os.highlight=U0;os.highlightAuto=m4;os.registerLanguage=p4;os.listLanguages=h4;os.registerAlias=f4;ct.prototype.addText=j4;ct.prototype.addKeyword=x4;ct.prototype.addSublanguage=g4;ct.prototype.openNode=v4;ct.prototype.closeNode=b4;ct.prototype.closeAllNodes=H0;ct.prototype.finalize=H0;ct.prototype.toHTML=y4;var u4="hljs-";function U0(n,e,s){var r=En.configure({}),a=s||{},l=a.prefix,i;if(typeof n!="string")throw cl("Expected `string` for name, got `%s`",n);if(!En.getLanguage(n))throw cl("Unknown language: `%s` is not registered",n);if(typeof e!="string")throw cl("Expected `string` for value, got `%s`",e);if(l==null&&(l=u4),En.configure({__emitter:ct,classPrefix:l}),i=En.highlight(e,{language:n,ignoreIllegals:!0}),En.configure(r||{}),i.errorRaised)throw i.errorRaised;return{relevance:i.relevance,language:i.language,value:i.emitter.rootNode.children}}function m4(n,e){var s=e||{},r=s.subset||En.listLanguages();s.prefix;var a=r.length,l=-1,i,c,o,d;if(typeof n!="string")throw cl("Expected `string` for value, got `%s`",n);for(c={relevance:0,language:null,value:[]},i={relevance:0,language:null,value:[]};++l<a;)d=r[l],En.getLanguage(d)&&(o=U0(d,n,e),o.language=d,o.relevance>c.relevance&&(c=o),o.relevance>i.relevance&&(c=i,i=o));return c.language&&(i.secondBest=c),i}function p4(n,e){En.registerLanguage(n,e)}function h4(){return En.listLanguages()}function f4(n,e){var s=n,r;e&&(s={},s[n]=e);for(r in s)En.registerAliases(s[r],{languageName:r})}function ct(n){this.options=n,this.rootNode={children:[]},this.stack=[this.rootNode]}function x4(n,e){this.openNode(e),this.addText(n),this.closeNode()}function g4(n,e){var s=this.stack,r=s[s.length-1],a=n.rootNode.children,l=e?{type:"element",tagName:"span",properties:{className:[e]},children:a}:a;r.children=r.children.concat(l)}function j4(n){var e=this.stack,s,r;n!==""&&(s=e[e.length-1],r=s.children[s.children.length-1],r&&r.type==="text"?r.value+=n:s.children.push({type:"text",value:n}))}function v4(n){var e=this.stack,s=this.options.classPrefix+n,r=e[e.length-1],a={type:"element",tagName:"span",properties:{className:[s]},children:[]};r.children.push(a),e.push(a)}function b4(){this.stack.pop()}function y4(){return""}function H0(){}const $m="[A-Za-z$_][0-9A-Za-z$_]*",N4=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],w4=["true","false","null","undefined","NaN","Infinity"],S4=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],k4=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],C4=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],_4=["arguments","this","super","console","window","document","localStorage","module","global"],A4=[].concat(C4,_4,S4,k4);function $4(n){return n?typeof n=="string"?n:n.source:null}function Mm(n){return mo("(?=",n,")")}function mo(...n){return n.map(s=>$4(s)).join("")}function M4(n){const e=(v,{after:k})=>{const C="</"+v[0].slice(1);return v.input.indexOf(C,k)!==-1},s=$m,r={begin:"<>",end:"</>"},a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(v,k)=>{const C=v[0].length+v.index,$=v.input[C];if($==="<"){k.ignoreMatch();return}$===">"&&(e(v,{after:C})||k.ignoreMatch())}},l={$pattern:$m,keyword:N4,literal:w4,built_in:A4},i="[0-9](_?[0-9])*",c=`\\.(${i})`,o="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${o})((${c})|\\.)?|(${c}))[eE][+-]?(${i})\\b`},{begin:`\\b(${o})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},m={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},h={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},p={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,m],subLanguage:"css"}},j={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,m]},b={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},N=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,h,p,j,d,n.REGEXP_MODE];m.contains=N.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(N)});const x=[].concat(b,m.contains),f=x.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(x)}]),g={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:f};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:f},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,h,p,j,b,d,{begin:mo(/[{,\n]\s*/,Mm(mo(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,s+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:s+Mm("\\s*:"),relevance:0}]},{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[b,n.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:f}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:r.begin,end:r.end},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:l,contains:["self",n.inherit(n.TITLE_MODE,{begin:s}),g],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[g,n.inherit(n.TITLE_MODE,{begin:s})]},{variants:[{begin:"\\."+s},{begin:"\\$"+s}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},n.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[n.inherit(n.TITLE_MODE,{begin:s}),"self",g]},{begin:"(get|set)\\s+(?="+s+"\\()",end:/\{/,keywords:"get set",contains:[n.inherit(n.TITLE_MODE,{begin:s}),{begin:/\(\)/},g]},{begin:/\$[(.]/}]}}var R4=M4;const Sd=hh(R4),L4="modulepreload",E4=function(n){return"/"+n},Rm={},T4=function(e,s,r){let a=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),i=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=Promise.all(s.map(c=>{if(c=E4(c),c in Rm)return;Rm[c]=!0;const o=c.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const m=document.createElement("link");if(m.rel=o?"stylesheet":L4,o||(m.as="script",m.crossOrigin=""),m.href=c,i&&m.setAttribute("nonce",i),document.head.appendChild(m),o)return new Promise((h,p)=>{m.addEventListener("load",h),m.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}return a.then(()=>e()).catch(l=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l})};var ds=h5(os,{});ds.registerLanguage=os.registerLanguage;const kd={hljs:{display:"block",overflowX:"auto",padding:"0.5em",color:"#383a42",background:"#fafafa"},"hljs-comment":{color:"#a0a1a7",fontStyle:"italic"},"hljs-quote":{color:"#a0a1a7",fontStyle:"italic"},"hljs-doctag":{color:"#a626a4"},"hljs-keyword":{color:"#a626a4"},"hljs-formula":{color:"#a626a4"},"hljs-section":{color:"#e45649"},"hljs-name":{color:"#e45649"},"hljs-selector-tag":{color:"#e45649"},"hljs-deletion":{color:"#e45649"},"hljs-subst":{color:"#e45649"},"hljs-literal":{color:"#0184bb"},"hljs-string":{color:"#50a14f"},"hljs-regexp":{color:"#50a14f"},"hljs-addition":{color:"#50a14f"},"hljs-attribute":{color:"#50a14f"},"hljs-meta-string":{color:"#50a14f"},"hljs-built_in":{color:"#c18401"},"hljs-class .hljs-title":{color:"#c18401"},"hljs-attr":{color:"#986801"},"hljs-variable":{color:"#986801"},"hljs-template-variable":{color:"#986801"},"hljs-type":{color:"#986801"},"hljs-selector-class":{color:"#986801"},"hljs-selector-attr":{color:"#986801"},"hljs-selector-pseudo":{color:"#986801"},"hljs-number":{color:"#986801"},"hljs-symbol":{color:"#4078f2"},"hljs-bullet":{color:"#4078f2"},"hljs-link":{color:"#4078f2",textDecoration:"underline"},"hljs-meta":{color:"#4078f2"},"hljs-selector-id":{color:"#4078f2"},"hljs-title":{color:"#4078f2"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}},D4=`import Button from 'components/Button'

export default function ButtonCase() {
  return (
    <>
      <div className='min-w-[400px] mx-auto px-16 h-[300px] flex flex-col justify-center'>
        <div className='my-2'>
          <div className='font-bold'>按钮类型</div>
        </div>
        <div className='flex items-center justify-between my-4'>
          <Button>Normal</Button>
          <Button danger>Danger</Button>
          <Button primary>Primary</Button>
          <Button success>Success</Button>
        </div>
      </div>
    </>
  )
}`;ds.registerLanguage("javascript",Sd);const O4={ButtonCase:D4,Button:Na};function Cn(n){const{files:e=O4,caseRender:s,active:r=0,className:a,auth:l}=n,i=Object.keys(e),[c,o]=u.useState(i[r]);function d(p){o(i[p])}const h=U("border border-gray-100 flex bg-white keepx flex-col-reverse sm:flex-row overflow-hidden",a);return t.jsxs("div",{className:h,children:[t.jsxs("div",{className:"overflow-scroll flex-1 relative",children:[t.jsx("div",{className:"flex border-b border-gray-100 sticky top-0 bg-white",children:i.map((p,j)=>t.jsx(L,{ghost:!0,onClick:()=>d(j),className:c===p?"text-green-500":"",children:p},p))}),t.jsx("pre",{className:"text-sm leading-6",children:t.jsx(ds,{language:"javascript",PreTag:"div",style:kd,children:l?e[c]:"未获得阅读权限"})})]}),t.jsxs(Hl,{when:s,children:[t.jsx("div",{className:"sm:w-[1px] h-[1px] sm:h-auto bg-gray-100"}),t.jsxs("div",{className:"flex-1 overflow-hidden",children:[t.jsxs("div",{className:"flex border-b border-gray-100 items-center pl-3",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"})}),t.jsx(L,{ghost:!0,className:"px-2",children:"预览"})]}),s]})]})]})}function B4(){return t.jsx(Cn,{files:{ButtonCase:Zb,Button:Na},caseRender:t.jsx(Xb,{})})}function Cd({id:n,host:e,repo:s,repoId:r,category:a,categoryId:l,mapping:i,term:c,strict:o,reactionsEnabled:d,emitMetadata:m,inputPosition:h,theme:p,lang:j,loading:y}){const[b,N]=u.useState(!1);return u.useEffect(()=>{b||(T4(()=>import("./giscus-BNK3dBIH-B_EkeIy7.js"),[]),N(!0))},[]),b?t.jsx("giscus-widget",{id:n,host:e,repo:s,repoid:r,category:a,categoryid:l,mapping:i,term:c,strict:o,reactionsenabled:d,emitmetadata:m,inputposition:h,theme:p,lang:j,loading:y}):null}const z4="/assets/ercode-w1g_eexN.png";function sc(n){const{title:e,desc:s,href:r,className:a}=n,i=U("block border rounded-xl p-4 bg-slate-50 border-slate-300 hover:shadow cursor-pointer",a);return t.jsxs("a",{href:r,target:"_blank",className:i,children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-blue-500",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"})}),t.jsx("div",{className:"font-bold ml-2",children:e})]}),t.jsx("div",{className:"mt-3 text-slate-600 leading-8",children:s}),t.jsx("div",{className:"block text-end mt-4 text-blue-500",href:r,target:"_blank",children:"点击了解详情"})]})}function rc(...n){return n.filter(Boolean).join(" ")}const U4=["学习方法之如何理解体系化","架构思维总览","BFF架构与运用","组件拆分原则","解耦与嵌套","流式渲染","复杂接口请求处理方式","其他大量实践案例","性能优化方案","项目亮点表达方式","视频讲解","本项目中组件源码"],Lm={frequencies:[{value:"monthly",label:"Monthly",priceSuffix:"/终身制"},{value:"annually",label:"Annually",priceSuffix:"/year"}],tiers:[{name:"基础版",id:"tier-hobby",href:"./pay?price=30",price:{monthly:"￥30",annually:"$144"},description:"大量可演示实践案例，帮助学习者轻松掌握 React 19.",features:["基础理论","use promise","Suspense","低版本兼容方案","use context","并发 api","React Compiler","Compiler 低版本引入","Form Action","乐观更新","直播课录屏"],mostPopular:!1},{name:"尊享版",id:"tier-freelancer",href:"./pay?price=400",price:{monthly:"￥400",annually:"$288"},description:"严格践行一套架构思维扩展复杂场景的使用",features:U4,mostPopular:!1},{name:"KeepCoder",id:"tier-enterprise",href:"https://www.yuque.com/coreadvance/ar2my1/apk8cr",price:{monthly:"￥2W",annually:"$864"},description:"1V1 顶级私人辅导，构建核心竞争力，全方面助你提高",features:["1V1服务","终身制服务","量身定制学习方式","顶级的前端技术能力","学霸级学习方法","全方位认知升级","构建完善的知识体系","全面的职场综合能力","顶尖的团队管理能力","完整的产品思维","完整的全栈思维"],mostPopular:!1}]};function H4(){const[n,e]=u.useState(Lm.frequencies[0]);return t.jsx("main",{children:t.jsxs("div",{className:"mx-auto mt-16 max-w-7xl sm:mt-32",children:[t.jsx("div",{className:"mx-auto max-w-4xl text-center",children:t.jsx("p",{className:"mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-5xl",children:"价格"})}),t.jsx("p",{className:"mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600",children:"请根据自己的学习意愿和经济能力综合考虑，理性消费，选择一种适合自己的学习方式。我确保提供过硬的学习质量，确保每一位认真投入的同学都能学有所得"}),t.jsx("div",{className:"isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3",children:Lm.tiers.map((s,r)=>t.jsxs("div",{className:rc(s.mostPopular?"ring-2 ring-indigo-600":"ring-1 ring-gray-200","rounded-3xl p-8"),children:[t.jsx("h2",{id:s.id,className:rc(s.mostPopular?"text-indigo-600":"text-gray-900","text-lg font-semibold leading-8"),children:s.name}),t.jsx("p",{className:"mt-4 text-sm leading-6 text-gray-600",children:s.description}),t.jsxs("p",{className:"mt-6 flex items-baseline gap-x-1",children:[t.jsx("span",{className:"text-4xl font-bold tracking-tight text-gray-900",children:s.price[n.value]}),t.jsx("span",{className:"text-sm font-semibold leading-6 text-gray-600",children:n.priceSuffix})]}),t.jsx(jd,{to:s.href,"aria-describedby":s.id,target:r===3?"_blank":"",className:rc(s.mostPopular?"bg-indigo-600 text-white shadow-sm hover:bg-indigo-500":"text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300","mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"),children:r<3?"点击购买":"了解详情"}),t.jsx("ul",{role:"list",className:"mt-8 space-y-3 text-sm leading-6 text-gray-600",children:s.features.map((a,l)=>t.jsxs("li",{className:"flex gap-x-3 items-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:l<11?"size-4":"size-4 text-red-500",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),l<11?a:t.jsx("div",{className:"text-red-500",children:a})]},a))})]},s.id))})]})})}function q4(){const n=u.useRef(null);function e(s){s.preventDefault(),n.current.show()}return t.jsxs("div",{className:"relative pt-16",children:[t.jsx(Vb,{}),t.jsxs("div",{className:"max-w-[1050px] mx-auto px-4",children:[t.jsxs("div",{className:"mt-20 max-w-[750px]",children:[t.jsx("h2",{className:"text-lg font-bold",children:"React 19 全解"}),t.jsx("p",{className:"mt-4 text-gray-500 leading-8 text-md",children:"全网第一本系统学习 React 19 的专栏。本专栏在公众号「这波能反杀」首发，受到了大量粉丝的喜爱。专栏中包含大量实践案例，深入简出，理论结合实践为大家分享 React19 的学习。"}),t.jsx("p",{className:"text-md mt-4 text-gray-500 leading-8",children:"React19 为开发者带来了新的开发理念，这又是一次开发方式上的一次变革。并且在开发体验和性能上都有大幅度的提升，值得每一位 React 开发者学习，赶紧行动吧。"}),t.jsxs("div",{className:"mt-8",children:[t.jsxs(jd,{to:"tutorial/index",className:"inline-flex items-center px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-full",children:[t.jsx("span",{className:"mr-2",children:"快速开始"}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"})})]}),t.jsx("a",{onClick:e,href:"",className:"inline-flex px-4 py-2 text-gray-600 ring-1 ring-gray-200 text-sm rounded-full ml-4",children:t.jsx("span",{children:"关注公众号"})}),t.jsx(dr,{ref:n,title:"Follow me!",children:t.jsx("img",{src:z4,alt:""})})]})]}),t.jsxs("div",{className:"mt-20 max-w-[750px]",children:[t.jsx("h2",{className:"text-lg font-bold",children:"学前准备"}),t.jsxs("div",{className:"flex items-center text-gray-600 mt-8",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),t.jsx("div",{className:"ml-2",children:"具备一定的 JavaScript 基础"})]}),t.jsxs("div",{className:"flex items-center text-gray-600 mt-4",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),t.jsx("div",{className:"ml-2",children:"熟悉异步请求，熟悉 fetch 与 Promise"})]}),t.jsxs("div",{className:"flex items-center text-gray-600 mt-4",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),t.jsx("div",{className:"ml-2",children:"熟悉 React 之前的版本的使用"})]})]}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsx(H4,{}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3",children:"主要内容"}),t.jsxs("div",{className:"flex items-stretch md:justify-between flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0",children:[t.jsx(Ki,{title:"Compiler",path:"./tutorial/use/importwith19",desc:"你可以不再使用 memo、useMemo、useCallback 来优化你的项目性能，大幅度提高开发体验",className:"flex-1"}),t.jsx(Ki,{title:"新的架构思路",path:"./tutorial/index",desc:"并发模式变得更加实用，得益于并发模式的成熟，我们将可以使用新的架构思路构思我的项目",className:"flex-1"}),t.jsx(Ki,{title:"新的交互方式",path:"./tutorial/use/base",desc:"React 在人机交互的开发体验上做了很多努力和尝试，他们将在这个版本中得以体现",className:"flex-1"})]}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3",children:"案例展示方式"}),t.jsxs("p",{className:"mt-10 flex items-center",children:["所见即所得。所有案例直接渲染，可操作、可交互。例如：点击按钮，切换皮肤",t.jsx("span",{className:"animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center ml-4",children:t.jsx("svg",{className:"w-6 h-6 text-violet-500",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})]}),t.jsx(qb,{}),t.jsx("p",{className:"mb-4",children:"沉浸式学习体验。通过可在线编辑的案例，你能获得沉浸式的学习体验"}),t.jsx(B4,{}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3",children:"其他课程"}),t.jsxs("div",{className:"flex justify-between flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6",children:[t.jsx(sc,{title:"私人面试指导",desc:"前端专家：这波能反杀，为您提供全网最专业的面试辅导，结合个人目标与工作经验，时长 2 ~ 3 小时，一次沟通，解决所有问题",href:"https://appxw863qeq2150.h5.xiaoeknow.com/v1/goods/goods_detail/course_2YWwycNZDt3u59naEs57g0gGa0H?",className:"flex-1"}),t.jsx(sc,{title:"keepCoder",desc:"资深前端进阶通道，1V1深度沟通辅导，聚焦学习方法，深挖知识体系，深挖应用场景，凝聚核心竞争力",href:"https://www.yuque.com/coreadvance/ar2my1/apk8cr",className:"flex-1 bg-orange-100 border-orange-300"}),t.jsx(sc,{title:"keepCharts",desc:"聚焦技术深度，手写基于 Canvas 的渲染引擎，并在此基础之上实现可视化图表等应用层库，打造自己牢不可破的核心竞争力",href:"https://www.yuque.com/coreadvance/ar2my1/em5rrk6p1umptsxw",className:"flex-1 bg-green-200 border-green-600"})]}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsx(Cd,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",loading:"lazy",crossorigin:"anonymous",async:!0}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsxs("div",{className:"flex justify-between pb-10",children:[t.jsxs("span",{className:"text-gray-400",children:["© Copyright 2024.",t.jsx("a",{href:"https://beian.miit.gov.cn/",target:"_blank",children:"这波能反杀."}),t.jsx("a",{href:"https://beian.miit.gov.cn/",target:"_blank",children:"粤ICP备2024222174号"})]}),t.jsxs("div",{className:"flex",children:[t.jsx("div",{className:"ml-3",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})})}),t.jsx("div",{className:"ml-3",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"})})}),t.jsx("div",{className:"ml-3",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})})})]})]})]})]})}function _d(n){const{label:e,type:s,primary:r,warning:a,danger:l,newer:i,hard:c,className:o}=n,m=U("text-sm text-gray-500 border px-3 rounded-full",{"bg-blue-100 text-blue-500 border-blue-500":!!r,"bg-green-100 text-green-500 border-green-500":!!i,"bg-red-100 text-red-500 border-red-500":!!l,"bg-orange-100-100 text-orange-500 border-orange-500":!!l,"bg-fuchsia-100 text-fuchsia-500 border-fuchsia-500":!!c},o);return t.jsx("label",{className:He(m),children:e})}const V4=`import {Suspense, useState, useTransition} from 'react'
import Message from './Message'
import Button from './Button'
import Skeleton from './Skeleton'
import {getApi} from './api'

export default function App() {
  const [response, setApi] = useState(getApi)
  const [isPending, startTransition] = useTransition()

  function __clickToGetMessage() {
    startTransition(() => {
      setApi(getApi())
    })
  }

  return (
    <div>
      <Button onClick={__clickToGetMessage} disabled={isPending}>
        点击更新
      </Button>

      <Suspense fallback={<Skeleton />}>
        <Message response={response} isPending={isPending} />
      </Suspense>
    </div>
  )
}
`,X4=`const random = [
  'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  'Whether you work on your own or with thousands of other developers, using React feels the same.',
  'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
  'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

export const getApi = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
}
`,Z4=`import { use } from 'react'

const Message = (props) => {
  const {isPending, response} = props
  const content = use(response)
  return (
    <div className='text-sm leading-6 transition border border-blue-100 shadow rounded-md p-4 w-full mt-4' style={{opacity: isPending ? 0.5 : 1}}>
      {content.value}
    </div>
  )
}
export default Message
`,G4=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse">
        <div className="flex-1 space-y-3 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,Y4=`import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

// 本组件只是一个简单的 UI 组件，学习时无需多过关注

export default function Button(props) {
  const {className, primary, danger, sm, lg, success, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-2 px-4'

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }))

  return (
    <button className={cls} {...other}>{props.children}</button>
  )
}
`;function _(n){const{reload:e,className:s}=n,[r,a]=u.useState(!0),l=u.useRef(null);function i(){const d=l.current.getBoundingClientRect().height;l.current.style.minHeight=`${d}px`,a(!1),setTimeout(()=>{a(!0)},200)}const o=U("border rounded-md my-4",s);return t.jsxs("div",{className:o,children:[t.jsxs("div",{className:"flex border-b border-gray-200 bg-gray-100 items-center px-3 py-2 text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"})}),t.jsx("div",{className:"ml-2 text-sm",children:"预览"})]}),t.jsx("div",{className:"p-4",ref:l,children:r?n.children:null}),e?t.jsx("div",{className:"mx-4 mb-4 text-right",children:t.jsx(L,{signal:!0,onClick:i,children:"reload"})}):null]})}const q0=n=>{const{isPending:e,response:s}=n,r=u.use(s);return t.jsx("div",{className:"text-sm leading-6 transition border border-blue-100 shadow rounded-md p-4 w-full mt-4",style:{opacity:e?.5:1},children:r.value})};document.documentElement.style.fontSize="14px";function V0(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsx("div",{className:"animate-pulse",children:t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})})})}const I4=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var X0=new Headers;X0.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var F4={method:"GET",headers:X0,redirect:"follow",data:"hex"};const P4="https://echo.apifox.com/delay/1",po=async()=>{await fetch(P4,F4);const n=Math.floor(Math.random()*10)%5;return{value:I4[n]}};function Q4(){const n=po();return t.jsx(u.Suspense,{fallback:t.jsx(V0,{}),children:t.jsx(q0,{response:n})})}function Em(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"序"})}),`
`,t.jsx(e.p,{children:"目前写 React 19 的文章已经有很多很多了，但是，写到点子上的并不多。包括官方文档，只是简单的罗列出了它新增了一些 hook，一些特性，却并没有进一步说明这些 hook 背后所代表的含义，它们的最佳实践是什么。"}),`
`,t.jsx(e.p,{children:"以至于，在这个时间节点，期待 React 19 的人也并不是很多。"}),`
`,t.jsxs(e.p,{children:["但是，我要告诉大家的是，",t.jsx(e.strong,{children:"我们都严重低估了 React 19"}),"。"]}),`
`,t.jsx(e.p,{children:"经过我长达两个月的使用体验，我的感受就是："}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"我们的开发方式，又要迎来一次重大升级了。"})," 因为新的 hook 真的太好用了。"]}),`
`,t.jsx(e.p,{children:"所以我准备写一系列合集，为大家完整、详细的介绍 React 19 的新的最佳实践。在后续的文章中，我会详细分析新的开发方式的思考。相关的实践案例我已经写完，后续的二十多篇文章预计会在 React19 正式发布之前完成。大家可以保持持续关注。"}),`
`,t.jsx(e.p,{children:"和过去的 React 版本相比，React 19 主要从如下两个方面带来了显著的提升。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"性能"})}),`
`,t.jsx(e.p,{children:"最近几年，许多其他前端框架纷纷拥抱基于 Signal 的细粒度更新，在特定场景有接近原生开发的性能体验，把前端框架的性能问题推上了风口浪尖。而 React 基于 Fiber 的 Diff 更新则自然而然的成为了最大的缺陷与短板。大量冗余 re-render 造成的性能损耗，是 React 不得不面对的挑战。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注：细粒度更新并非所有场景都具有明显的优势，也不要完全相信框架而忽视掌握性能优化技能的重要性"}),`
`]}),`
`,t.jsxs(e.p,{children:["虽然 React 提供了 ",t.jsx(e.code,{children:"memo/useMemo/useCallback"})," 来帮助开发者优化项目性能。但是他们的学习成本并不低，想要在项目中得心应手的使用他们更是不易。这就造成了许多团队在没有完全消化他们的情况下，对他们的使用存在滥用的情况。"]}),`
`,t.jsxs(e.p,{children:["在这样的背景之下，React 19 将会推出 ",t.jsx(e.strong,{children:"React Compiler"}),"，在开发者不调整任何代码的情况下，自动优化项目性能。"]}),`
`,t.jsxs(e.p,{children:["React Compiler 能够帮助我们在不使用 ",t.jsx(e.code,{children:"memo/useMemo/useCallback"})," 的情况下，方便得处理好项目 re-render 的问题。你的项目最终只会在需要更新的地方 re-render。"]}),`
`,t.jsx(e.p,{children:"并且最重要的是，React Compiler 编译之后，你的代码并不会改变现有渲染机制，而是在已有机制下完成对项目的优化。React Compiler 的愿景非常庞大，他需要在兼顾大量老项目的情况下，做到对项目的性能优化。因此与提出一个新的解决方案相比，他的开发难度要高出很多。破坏性更新显得更加容易，但是对于开发者和大量老项目而言，这是一种严重的伤害。React Compiler 则选择了最难搞的一种更新方式。"}),`
`,t.jsx(e.p,{children:"与依赖追踪的细粒度更新不同，React Compiler 通过记忆的方式，让组件更新只发生在需要更新的组件，从而减少大量 re-render 的组件，我会在后续的章节中详细介绍他的使用原理。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"但是请注意，React Compiler 并非全能，如果你写的代码过于灵活，无法被提前预判执行行为，那么 React Compiler 将会跳过这一部分的优化。因此好的方式是在项目中引入严格模式，在严格模式的指导下完成的开发，基本都在 React Compiler 的辐射范围之内"}),`
`]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"2"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"开发体验"})}),`
`,t.jsxs(e.p,{children:["与性能带来的提升相比，真正令我非常期待的是，React 19 将会迎来一次",t.jsx(e.strong,{children:"开发体验的重大提升"}),"。毕竟没有 React Compiler，我自己也能优化好我的项目性能。"]}),`
`,t.jsxs(e.p,{children:["开发体验的提升主要体现在，",t.jsxs(e.strong,{children:["React 19 之后，我们可能不再那么需要 ",t.jsx(e.code,{children:"useEffect"})]})," 了。"]}),`
`,t.jsx(e.p,{children:"useEffect 是一个功能强大的 hook，但他又是最难驾驭的一个 hook，理解不够的开发者可能会由于滥用它而导致项目失控。包括被讨论最多的闭包问题，也往往跟它有关。其中最考验开发者水平的，是对于 useEffect 依赖项的正确处理。"}),`
`,t.jsxs(e.p,{children:["React19 的 大部分更新，几乎都是围绕如何在开发中尽量不用或者少用 useEffect 来展开。在之前的项目开发中，",t.jsx(e.code,{children:"useEffect"})," 是我们处理异步问题必须使用的重要 hook 之一，他几乎存在于每一个页面组件之中。"]}),`
`,t.jsxs(e.p,{children:["React 19 则引入了新的 hook，让我们",t.jsx(e.strong,{children:"处理异步开发时，不再需要"})," ",t.jsx(e.code,{children:"useEffect"}),"，从而极大的改变我们的开发方式。我会在后续的章节中，结合",t.jsx(e.strong,{children:"大量实践案例"}),"，一一介绍这些 API 的详细使用方法，确保每个读者都能彻底掌握他。"]}),`
`,t.jsxs(e.p,{children:["除此之外，React19 想要彻底改变我们在项目开发中的 UI 交互方式。因此对于 React19 而言，",t.jsx(e.code,{children:"Suspense、Action"})," 的重要性将会变得越来越高。"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"Suspense"})," 虽然早在 React18 中都能够被正常使用，但是由于异步请求方案的不成熟，它们并没有被普及开，包括 React 官方文档也并没有进一步说明如何触发 ",t.jsx(e.code,{children:"Suspense"})," 的回调机制。因此它们只是小范围的被一些顶尖的前端开发所使用。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Suspense fallback={<div>loading...</div>}>
  <List api={__api} />
</Suspense>
`})}),`
`,t.jsxs(e.p,{children:["React19 之后，",t.jsx(e.strong,{children:"它们将会得到普及"}),"。这将会进一步深化组件解释一切的开发思想。"]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"3"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"新的架构思维"})}),`
`,t.jsx(e.p,{children:"React 19 之前，React 高手与普通开发者之间，开发的项目无论是从性能上、还是从代码优雅上差距都非常大。因此不同的人对于 React 的感受完全不一样。"}),`
`,t.jsxs(e.p,{children:["而 React 19 则借由推出一些新的 hook，暗中传递一种",t.jsx(e.strong,{children:"框架思维"}),"「最佳实践」，这将会极大的拉进普通开发者与顶尖高手之间的差距。对于大多数 React 开发者而言，这会是一个极大的提升。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"这一意图在 React 新的官方文档与 Next.js 中体现得非常明显"}),`
`]}),`
`,t.jsxs(e.p,{children:["这一最佳实践主要围绕如何改进异步编程的开发体验而展开。在后续的章节中大家可以自行感受。我也会在后续的实践案例中弱化对 ",t.jsx(e.code,{children:"useEffect"})," 的使用。"]}),`
`,t.jsx(e.p,{children:"例如，当我想要实现如下效果时。"}),`
`,t.jsx(e.p,{children:"在项目开发中，新页面渲染时请求一个接口的场景非常常见。新的架构思维的开发代码如下所示。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"该案例没有引入任何三方库"}),`
`]}),`
`,t.jsx(e.p,{children:"首先我们需要定义一个 API 用于请求数据。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`export const getApi = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
}
`})}),`
`,t.jsx(e.p,{children:"需要注意的是，本案例中的 api 都使用的是模拟接口，许多数据无任何业务描述，仅用于呈现 UI 的显示和变化。因此写法会与实际开发过程中稍有差异。"}),`
`,t.jsx(e.p,{children:"然后创建一个函数组件，并执行该 api"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`export default function App() {
  const promise = getApi()

  return (
    <Suspense fallback={<Skeleton />}>
      <Message response={promise} />
    </Suspense>
  )
}
`})}),`
`,t.jsx(e.p,{children:"最后在子组件中，获取 api 执行之后得到的数据"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const Message = (props) => {
  const {response} = props
  const content = use(response)
  return (
    <div className='text-sm leading-6 transition border border-blue-100 shadow rounded-md p-4 w-full mt-4'>
      {content.value}
    </div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"演示效果如下"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(Q4,{})}),`
`,t.jsxs(e.p,{children:["大家可以自行感受一下新的开发方式与以前基于 ",t.jsx(e.code,{children:"useEffect"})," 请求数据有什么不同之处。我在右侧案例演示中，还提供了更完整更具代表性的案例。大家可以先瞄一眼体会一下。案例代码有对应的完整演示效果，你可以通过修改代码观察案例的变化。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注意：一套成熟架构思维，不是使用一个简单的方案解决某一个问题，而是要基于这套思维去解决项目中的绝大多数场景。因此我们一定要结合大量的场景去理解一套项目架构思维。"}),`
`]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"5"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"合集介绍"})}),`
`,t.jsxs(e.p,{children:["本合集名为：",t.jsx(e.strong,{children:"「React19 全解」"})," ，是 ",t.jsx(e.strong,{children:"「React 知命境」"})," 的续集。首发与公众号",t.jsx(e.a,{href:"",children:"这波能反杀"}),"。后为了提高大家的学习体验，迁移至此处。在这里我基于",t.jsx(e.strong,{children:"沉浸式"}),"的学习体验，内置了大量可操作可交互的真实案例。摒弃了使用截图演示案例的方式。除此之外，为了让大家能够获得更好的学习效果，每一个案例都精心设计了 UI。在细节上精心打磨，争取让大家能够所学即所得。快速掌握 React19."]}),`
`,t.jsx(e.p,{children:"希望大家能够在这里获得全网最好的学习体验！Let's go."})]})}function J4(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Em,{...n})}):Em(n)}const Ad=["UxFs","GVkX3xOPhN322"].join("d"),W4=["pxFs","GVkX3xOPhN323"].join("d");function Z0(n){return n?W4:Ad}function K4(n){const{advance:e}=n,s=e?"active_code_adv":"active_code";function r(a){if(a.get("code")!==Z0(e))return alert("请输入正确的激活码");localStorage.setItem(s,a.get("code")),location.reload()}return t.jsxs("div",{className:"pt-4",children:[t.jsx("div",{className:"rounded-md bg-yellow-50 p-4 border border-yellow-400",children:t.jsxs("div",{className:"flex",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-yellow-700",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),t.jsxs("div",{className:"ml-3",children:[t.jsx("h3",{className:"text-sm font-medium text-yellow-800",children:"Attention needed"}),t.jsx("div",{className:"mt-2 text-sm text-yellow-700",children:t.jsx("p",{children:"你还未输入激活码，或者激活码已过期，请重新输入即可访问"})})]})]})}),t.jsxs("form",{action:r,className:"flex items-center justify-between",children:[t.jsx(Sn,{name:"code",placeholder:"Please input your active code",className:"flex-1 mr-4"}),t.jsx("button",{type:"submit",children:"确认"})]})]})}ds.registerLanguage("javascript",Sd);function e3({className:n,...e}){const s=/language-(\w+)/.exec(n||"");return s?t.jsx(ds,{language:s[1],PreTag:"div",...e,style:kd}):t.jsx("code",{className:n,...e})}function z(n){const{renderArticle:e,files:s,caseRender:r,isAuth:a=!0,advance:l=!1}=n,i=l?"active_code_adv":"active_code",c=localStorage.getItem(i),o=a?c===Z0(l):!0;let d=t.jsx(K4,{advance:l});return o&&(d=t.jsxs(t.Fragment,{children:[r?t.jsx(_,{reload:!0,className:"mt-0",children:r}):null,t.jsx("div",{className:"md:hidden",children:t.jsx(Cn,{files:s,className:"h-full rounded-md border-gray-200"})}),e(e3)]})),t.jsxs("div",{className:"md:flex h-[calc(100vh_-_8rem)] overflow-hidden mx-auto w-full max-w-[1244px]",children:[t.jsxs("div",{className:"md:flex-1 h-full overflow-scroll md:pr-4 keep w-full max-w-[768px]",children:[d,t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3 border-dashed"}),t.jsx(Cd,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]}),t.jsx("div",{className:"hidden md:block md:flex-1 top-[8rem] h-full overflow-y-auto max-w-[768px]",children:t.jsx(Cn,{auth:o,files:s,className:"h-full rounded-md border-gray-200"})})]})}function n3(n){const{className:e,primary:s,danger:r,sm:a,lg:l,success:i,...c}=n,h=He(U("rounded-md border border-transparent font-medium cursor-pointer transition","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l}));return t.jsx("button",{className:h,...c,children:n.children})}function t3(){const[n,e]=u.useState(po),[s,r]=u.useTransition();function a(){r(()=>{e(po())})}return t.jsxs("div",{children:[t.jsx(n3,{onClick:a,disabled:s,children:"点击更新"}),t.jsx(u.Suspense,{fallback:t.jsx(V0,{}),children:t.jsx(q0,{response:n,isPending:s})})]})}const s3={"App.js":V4,"api.js":X4,"Message.jsx":Z4,"Skeleton.jsx":G4,"Button.jsx":Y4};function r3(){return t.jsx(z,{files:s3,renderArticle:n=>t.jsx(J4,{components:{code:n}}),caseRender:t.jsx(t3,{})})}const a3=`import React, { useEffect, useState, Suspense, use } from 'react';
import Button from './Button'
import Skeleton from './Skeleton'
import {fetchList} from './api'

const Index = () => {
  const [promises, increasePromise] = useState(() => [fetchList()])

  const onLoadMore = () => {
    promises.push(fetchList())
    increasePromise([...promises])
  };

  return (
    <>
      {promises.map((promise, i) => (
        <Suspense fallback={<Skeleton />} key={\`hello \${i}\`}>
          <CurrentList promise={promise} />
        </Suspense>
      ))}
      <div className='text-center my-4'>
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    </>
  );
};
export default Index;

function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={item.name.last} className='border-b border-dashed py-4 mx-4 items-center flex'>
          <img className='w-14 h-14 rounded-full' src={item.picture.large} alt=''/>
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>
              a design language for background applications, is refined by Ant UED Team
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,l3=`import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

document.documentElement.style.fontSize = '14px'
// 本组件只是一个简单的 UI 组件，学习时无需多过关注

export default function Button(props) {
  const {className, primary, danger, sm, lg, success, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-2 px-4'

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }))

  return (
    <button className={cls} {...other}>{props.children}</button>
  )
}
`,i3=`const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}
`,c3=`// header
export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4 items-center">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-3 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
`;function Tm(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"这篇文章文字内容不会很多，但是是整个专栏最重要的部分之一。"}),`
`,t.jsx(e.p,{children:"本专栏会围绕如下三个层次逐渐为大家由浅入深分析 React19 的学习，他们确保了我们的学习方向的正确性与难度的循序渐进。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"初级版：优化异步开发体验"})}),`
`,t.jsx(e.p,{children:"React 19 引入了好几个新的 hook 用于优化异步开发体验。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`use
useActionState
useFormStatus
useOptimistic
`})}),`
`,t.jsx(e.p,{children:"他们的主要目的是试图在项目开发中，引导开发者削弱 useEffect 的使用。因此我们在实践案例中，需要谨记这个核心思想，不至于在开发中偏离轨迹，而忽视了新 hook 的强大能力。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注：并非完全不用 useEffect"}),`
`]}),`
`,t.jsx(e.p,{children:"如果你只是专注于项目开发，学习到这里基本上已经可以了。因为大多数项目涉及不到更高的理解层次。大多数 React 开发者也很难通过自学有更强的理解。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"进阶版：强化并发模式"})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"只有少部分顶级前端开发需要关注并发模式。"})," 他的理解难度并不低。充分消化并发模式并运用于实践能够让一个前端程序员完成蜕变，你可以很容易突破前端开发的瓶颈。"]}),`
`,t.jsx(e.p,{children:"在 React 中，并发模式并非是一个新概念。在 React Fiber 架构提出之初，我们就陆陆续续的听说了它。"}),`
`,t.jsx(e.p,{children:"但是经过好几个大版本的迭代，并发模式在开发者中的感受并不深刻。甚至由于之前设计的几个并发模式的 API 不好用，导致很多开发者也对 React 的并发模式并不感兴趣。"}),`
`,t.jsx(e.p,{children:"React 19 简化和改进了并发模式，让并发模式更加易于使用。例如，React 19 重新设计并改进了 Suspense，它支持更好的代码逻辑拆分，我们就可以在普通的页面开发中轻松的使用它。"}),`
`,t.jsx(e.p,{children:"因此，我认为，我们是时候拥抱并发模式了。我专门为并发模式设计了一个完整的模块，供大家学习。我们会经历从理论到实践的一个完整学习过程。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"2"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"顶级版：深入理解 React Compiler"})}),`
`,t.jsxs(e.p,{children:["毫无疑问，React Compiler 的使用一定是简单的，但是对于其原理的透彻理解，就需要一点底子了。很显然，这",t.jsx(e.strong,{children:"必定会称为面试中的常客"}),"。因此，如果你希望在面试中有一个更好的表现，对其实现原理如数家珍会为你",t.jsx(e.strong,{children:"上大分"}),"。"]}),`
`,t.jsx(e.p,{children:"当然，如果你并不需要在面试中通过表达自己对 Compiler 的理解来加分，那么这一部分也是可以不需要学习的。"}),`
`,t.jsx(e.p,{children:"正是由于他的必要性不是很高，我才把这一部分内容放到专栏的最后一个部分。理解它在项目开发中的实用价值并不高。"}),`
`,t.jsx(e.p,{children:"透彻理解 React Compiler 的原理，需要对现有 React 的底层原理有一个大概的了解，这样我们才能形成一个完整的知识体系闭环。学习之前，做好这个心理准备和知识铺垫即可。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["在 隔壁的合集 ",t.jsx(e.strong,{children:"React 知命境"})," 中，我有几篇高质量的文章介绍了 React 的底层原理，读者朋友们可以去看看。"]}),`
`]})]})}function o3(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Tm,{...n})}):Tm(n)}document.documentElement.style.fontSize="14px";function d3(n){const{className:e,primary:s,danger:r,sm:a,lg:l,success:i,...c}=n,h=He(U("rounded-md border border-transparent font-medium cursor-pointer transition","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l}));return t.jsx("button",{className:h,...c,children:n.children})}function u3(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})})}const m3=3,p3=`https://randomuser.me/api/?results=${m3}&inc=name,gender,email,nat,picture&noinfo`,Dm=async()=>(await fetch(p3)).json(),h3=()=>{const[n,e]=u.useState(()=>[Dm()]),s=()=>{n.push(Dm()),e([...n])};return t.jsxs(t.Fragment,{children:[n.map((r,a)=>t.jsx(u.Suspense,{fallback:t.jsx(u3,{}),children:t.jsx(f3,{promise:r})},`hello ${a}`)),t.jsx("div",{className:"text-center my-4",children:t.jsx(d3,{onClick:s,children:"loading more"})})]})};function f3({promise:n}){const{results:e}=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"border-b border-dashed py-4 mx-4 items-center flex",children:[t.jsx("img",{className:"w-14 h-14 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"a design language for background applications, is refined by Ant UED Team"})]})]},s.name.last))})}const x3={"App.js":a3,"api.js":i3,"Button.jsx":l3,"Skeleton.jsx":c3};function g3(){return t.jsx(z,{files:x3,renderArticle:n=>t.jsx(o3,{components:{code:n}}),caseRender:t.jsx(h3,{})})}function Om(n){const e={blockquote:"blockquote",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:t.jsx(e.img,{src:"https://files.mdnice.com/user/3925/b4869674-83ae-4ed2-a70d-34574d4451da.png",alt:""})}),`
`,t.jsx(e.p,{children:"首先，我们使用 vite 创建一个 React 项目"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`npm create vite
`})}),`
`,t.jsxs(e.p,{children:["上面的命令执行完成之后，会引导你输入项目名称，我们将项目名称取为：",t.jsx(e.code,{children:"react19feature"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`✔ Project name: react19feature
`})}),`
`,t.jsx(e.p,{children:"输入之后，按下回车，选择前端框架"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`    vanilla
    vue
 >  react
    react-ts
    preact
    lit
    svelte
`})}),`
`,t.jsxs(e.p,{children:["我们选择 ",t.jsx(e.code,{children:"react"}),"，执行完毕之后，vite 会在当前目录中创建项目 ",t.jsx(e.code,{children:"react19feature"}),"，我们通过如下指令进入到项目文件"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`cd react19feature
`})}),`
`,t.jsxs(e.p,{children:["然后用编辑器打开项目文件，在根目录的 ",t.jsx(e.code,{children:"package.json"})," 文件中修改 ",t.jsx(e.code,{children:"react"})," 与 ",t.jsx(e.code,{children:"react-dom"})," 的依赖版本为 react 19 rc."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`"dependencies": {
  "react": "19.0.0-rc-dfd30974ab-20240613",
  "react-dom": "19.0.0-rc-dfd30974ab-20240613",
  "react-router-dom": "^6.23.0"
},
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注意：如果已经正式发版，那么vite 创建的版本可能会直接更新为最新版而不需要我们手动修改"}),`
`]}),`
`,t.jsx(e.p,{children:"修改完成之后，执行如下指令安装依赖"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`npm i
`})}),`
`,t.jsx(e.p,{children:"然后执行如下指令运行项目"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`npm run dev
`})}),`
`,t.jsxs(e.p,{children:["成功启动之后，我们可以在浏览器中输入 ",t.jsx(e.code,{children:"http://localhost:5173"})," 访问到项目，初始页面如右侧案例所示。"]}),`
`,t.jsxs(e.p,{children:["由于我们项目需要用到 ",t.jsx(e.code,{children:"require"}),"，但是 vite 中使用 ES module 作为模块方案，因此并没有内置对 CommonJS 的支持，如果你需要在项目中支持 ",t.jsx(e.code,{children:"require"})," 语法引入模块，则需要做点其他的操作"]}),`
`,t.jsxs(e.p,{children:["首先，我们需要",t.jsx(e.strong,{children:"安装如下依赖"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`npm i vite-plugin-require-transform --save-dev
`})}),`
`,t.jsxs(e.p,{children:["然后，在 ",t.jsx(e.code,{children:"vite.config.js"})," 中新增如下配置"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-diff",children:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
+ import requireTransform from 'vite-plugin-require-transform'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
+   requireTransform({
+     fileRegex: /.js$|.jsx$/,
+   }),
  ],
})
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["如果你需要支持更多的文件后缀，则需要在 ",t.jsx(e.code,{children:"fileRegex"})," 中添加，本项目仅支持 ",t.jsx(e.code,{children:".js"})," 与 ",t.jsx(e.code,{children:".jsx"})]}),`
`]}),`
`,t.jsx(e.p,{children:"最后重启项目即可。"})]})}function j3(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Om,{...n})}):Om(n)}const v3=`import { useState } from 'react'
import reactLogo from './react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
`,b3=`#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
`,y3=`:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
`,N3=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
`,w3=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
`,S3={"App.js":v3,"App.css":b3,"index.css":y3,"vite.svg":N3,"react.svg":w3};function k3(){return t.jsx(z,{files:S3,renderArticle:n=>t.jsx(j3,{components:{code:n}})})}const C3=`import React, { useEffect, useState, Suspense, use } from 'react';
import Button from './Button'
import Skeleton from './Skeleton'
import {getMessage} from './api'

export default function Index() {
  const promise = getMessage()
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Message promise={promise} />
      </Suspense>

      <div className='mt-8 text-center'>
        <Button signal>点击下方刷新按钮可重置演示</Button>
      </div>
    </>
  )
}

const Message = (props) => {
  const content = use(props.promise)
  return (
    <div className='flex border border-blue-100 p-4 rounded-md shadow'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='text-sm mt-1 text-gray-600'>{content.value}</div>
      </div>
    </div>
  )
}
`,_3=`import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

document.documentElement.style.fontSize = '14px'
// 本组件只是一个简单的 UI 组件，学习时无需多过关注

export default function Button(props) {
  const {className, primary, danger, sm, lg, signal, success, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition relative'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-2 px-4'

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,
    ['text-sky-500 bg-white border border-sky-300 hover:bg-sky-50']: signal,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }, className))

  return (
    <button className={cls} {...other}>
      {props.children}
      {signal && (
        <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      )}
    </button>
  )
}
`,A3=`const random = [
  'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  'Whether you work on your own or with thousands of other developers, using React feels the same.',
  'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
  'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
}
`,$3=`export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,$d=n=>{const e=n.message;return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},M3=new Promise(n=>{n({value:"Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook."})});function R3(){const n=u.use(M3);return t.jsx($d,{message:n.value})}document.documentElement.style.fontSize="14px";function G0(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,p=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}function Md(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const L3=new Promise(n=>{n({value:"Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook."})});function E3(){const[n,e]=u.useState(!1);let s={value:""};return n||(s=u.use(L3)),t.jsxs(t.Fragment,{children:[n?t.jsx(Md,{}):t.jsx($d,{message:s.value}),t.jsx("div",{className:"mt-4 text-right",children:t.jsx(G0,{signal:!0,onClick:()=>e(!n),children:"切换"})})]})}const T3=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var Y0=new Headers;Y0.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var D3={method:"GET",headers:Y0,redirect:"follow",data:"hex"};const O3="https://echo.apifox.com/delay/1",I0=async()=>{await fetch(O3,D3);const n=Math.floor(Math.random()*10)%5;return{value:T3[n]}};function B3(){return t.jsx(u.Suspense,{fallback:t.jsx("div",{}),children:t.jsx(z3,{})})}function z3(){let[n,e]=u.useState(!0);const s=u.useRef(I0().then(a=>(e(!1),a)));let r={value:"",icon_url:""};return n?t.jsx(Md,{}):(r=u.use(s.current),t.jsx($d,{message:r.value}))}function Bm(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:[t.jsx(e.code,{children:"use()"})," 是 React19 提升异步开发体验最重要的 hook。也是让 useEffect 重要性大幅度削弱的主要原因。"]}),`
`,t.jsxs(e.p,{children:["我们可以利用 use 读取 ",t.jsx(e.code,{children:"Promise"})," 中的值。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"也可以使用 use 读取 context 中的资源，后续详细介绍该能力"}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`const value = use(promise)
`})}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"正确理解 promise"})}),`
`,t.jsxs(e.p,{children:["这里我们需要特别注意的是，",t.jsx(e.strong,{children:"Promise"})," 是指的一个已经创建好的 Promise 对象，并且，在该 promise 对象中已经有了确定的 ",t.jsx(e.code,{children:"resolve"})," 的结果，use 读取的是 resolve 的值。"]}),`
`,t.jsx(e.p,{children:"注意观察一下下面两种写法"}),`
`,t.jsx(e.p,{children:"第一种是已经有了结果状态的 Promise 对象"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const _api2 = new Promise((resolve) => {
  resolve({ value: '_api2' })
})

// good
const result = use(_api2)
`})}),`
`,t.jsx(e.p,{children:"第二种是函数运行创建 Promise 对象，此时我们需要注意，虽然 _api3 执行之后会立即返回一个带有 resolve 结果状态的 Promise，但是 use 并不能第一时间读取到其值。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`const _api3 = () => {
  return new Promise(resolve => {
    resolve({ value: '_api3' })
  })
}

// bad: get an error
const result = use(_api3())
`})}),`
`,t.jsx(e.p,{children:"如果我们按照以往的习惯，直接使用第二种，那么运行之后，React19 会给你如下一个报错。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-error",children:"async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.\n"})}),`
`,t.jsx(e.p,{children:"一个完整的案例代码以及演示效果如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import {use} from 'react'
import Message from './Message'

const _api2 = new Promise((resolve) => {
  resolve({ value: 'Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook.' })
})

export default function Demo01() {
  const result = use(_api2)
  return (
    <Message message={result.value} />
  )
}
`})}),`
`,t.jsx(_,{children:t.jsx(R3,{})}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"在条件判断中使用"})}),`
`,t.jsxs(e.p,{children:["和其他 hook 一样，",t.jsx(e.code,{children:"use()"})," 必须在函数组件中使用。但是很不一样的是，use 可以在循环和条件判断语句中使用。我们这里如下案例来演示这个结论。"]}),`
`,t.jsxs(e.p,{children:["在这个例子中，",t.jsx(e.code,{children:"use"})," 被使用在 ",t.jsx(e.code,{children:"if(!loading)"})," 条件判断中来获取 result 的值。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`if (!loading) {
  result = use(_api2)
}
`})}),`
`,t.jsx(e.p,{children:"完整的代码与最终的演示效果如下，你可以在演示案例中多次点击切换按钮查看交互效果。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import {use, useState} from 'react'
import Message from './Message'
import Button from './Button'
import Skeleton from './Skeleton'

const _api2 = new Promise((resolve) => {
  resolve({ value: 'Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook.' })
})

export default function Demo01() {
  const [loading, setLoading] = useState(false)
  let result = {value: ''}
  if (!loading) {
    result = use(_api2)
  }

  return (
    <>
      {loading ? <Skeleton /> : <Message message={result.value} />}
      <div className='mt-4 text-right'>
        <Button signal onClick={() => setLoading(!loading)}>切换</Button>
      </div>
    </>
  )
}
`})}),`
`,t.jsx(_,{children:t.jsx(E3,{})}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"2"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"在异步请求中使用"})}),`
`,t.jsx(e.p,{children:"通常，我们在处理异步请求时，也会结合 promise 来使用。但是我们并不能直接使用 use 来读取异步请求中的 promise，因为我们已经非常明确，use 只能读取有确定 resolve 结果的 promise 中的值。但是有可能第一时间异步请求包装的 promise 状态为 pending。因此在这种情况下，我们必须结合 Suspense 来使用。"}),`
`,t.jsx(e.p,{children:"当然，为了加强对 use 的理解，我们也准备了一个不顾任何风险提示，强行等 promise 请求完成之后使用 use 去读取它的值的案例。代码与演示效果如下。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`function Demo03() {
  let [loading, setLoading] = useState(true)

  const promise = useRef(getMessage().then(res => {
    setLoading(false)
    return res
  }))
  
  
  let result = {value: '', icon_url: ''}

  if (!loading) {
    result = use(promise.current)
    return <Message message={result.value} />
  }

  return <Skeleton /> 
}
`})}),`
`,t.jsx(_,{reload:!0,children:t.jsx(B3,{})}),`
`,t.jsx(e.p,{children:"点击按钮可以重新加载执行该组件。我们可以观察一下效果，在目前的 React 版本中，并不能合理的处理好这种存在风险的读取方式，虽然我们最终读取到了 promise 中的值，内容也顺利渲染出来了，但是中间存在一次明显的闪烁。表现为包括按钮在内的内容全部消失，这种体验非常的糟糕。"}),`
`,t.jsx(e.p,{children:"因此，在实践中，如果我们要读取异步请求的 promise 中的值，必须结合 Suspense 来处理。在右侧的案例中，我们列举了一个 use + Suspense 合理处理异步请求的案例，大家可以先暂时了解一下，在后续的章节中，我们详细学习了 Suspense 之后再来进行案例分析。"})]})}function U3(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Bm,{...n})}):Bm(n)}function H3(){const n=I0();return t.jsxs(t.Fragment,{children:[t.jsx(u.Suspense,{fallback:t.jsx(Md,{}),children:t.jsx(q3,{promise:n})}),t.jsx("div",{className:"mt-8 text-center",children:t.jsx(G0,{signal:!0,children:"点击下方刷新按钮可重置演示"})})]})}const q3=n=>{const e=u.use(n.promise);return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e.value})]})]})},V3={"App.js":C3,"api.js":A3,"Button.jsx":_3,"Skeleton.jsx":$3};function X3(){return t.jsx(z,{files:V3,renderArticle:n=>t.jsx(U3,{components:{code:n}}),caseRender:t.jsx(H3,{})})}const Z3=`import React, { useEffect, useState, Suspense, use } from 'react';
import Button from './Button'
import Skeleton from './Skeleton'
import {getMessage} from './api'

export default function Index() {
  const [content, update] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }, []);

  if (loading) {
    return <Skeleton />
  }

  return (
    <>
      <Message message={content.value} />
      <div className='mt-8 text-center'>
        <Button signal>点击下方刷新按钮可重置演示</Button>
      </div>
    </>
  )
}

const Message = (props) => {
  const message = props.message
  return (
    <div className='flex border border-blue-100 p-4 rounded-md shadow'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
      <div className='flex-1 ml-3'>
        <div>a new message!</div>
        <div className='text-sm mt-1 text-gray-600'>{message}</div>
      </div>
    </div>
  )
}
`,G3=`import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

document.documentElement.style.fontSize = '14px'
// 本组件只是一个简单的 UI 组件，学习时无需多过关注

export default function Button(props) {
  const {className, primary, danger, sm, lg, signal, success, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition relative'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-2 px-4'

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,
    ['text-sky-500 bg-white border border-sky-300 hover:bg-sky-50']: signal,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }, className))

  return (
    <button className={cls} {...other}>
      {props.children}
      {signal && (
        <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      )}
    </button>
  )
}
`,Y3=`const random = [
  'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  'Whether you work on your own or with thousands of other developers, using React feels the same.',
  'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
  'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
}
`,I3=`export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,F0=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},F3=()=>new Promise(n=>{n({value:"React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch."})});function P3(){const n=F3();return t.jsx(u.Suspense,{fallback:"",children:t.jsx(Q3,{promise:n})})}function Q3(n){const{value:e}=u.use(n.promise);return t.jsx(F0,{message:e})}document.documentElement.style.fontSize="14px";function J3(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,p=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}function Rd(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const W3=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var P0=new Headers;P0.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var K3={method:"GET",headers:P0,redirect:"follow",data:"hex"};const ey="https://echo.apifox.com/delay/1",Q0=async()=>{await fetch(ey,K3);const n=Math.floor(Math.random()*10)%5;return{value:W3[n]}};function zm(){const n=Q0();return t.jsx(u.Suspense,{fallback:t.jsx(Rd,{}),children:t.jsx(ny,{promise:n})})}const ny=n=>{const e=u.use(n.promise);return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e.value})]})]})};function ty(){return t.jsx(u.Suspense,{fallback:t.jsx(Rd,{}),children:t.jsx(F0,{message:"这是一个普通的 UI 组件，Skeleton 组件不会有任何渲染机会，直接渲染 Message 组件",title:"Primary"})})}function Um(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Suspense"})}),`
`,t.jsx(e.p,{children:"先来回顾一下这段代码。在前面一篇文中，我们知道，如果直接使用 use 获取未直接创建的 Promise 中的值，会抛出一个异常。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const _api3 = () => {
  return new Promise(resolve => {
    resolve({ value: '_api3' })
  })
}

// bad: get an error
const result = use(_api3())
`})}),`
`,t.jsx(e.p,{children:"但是实际上在开发过程中，大多数情况都是这种并没有直接得到 Promise resolve 的结果状态，那我们应该怎么办呢？这个时候我们可以利用 Suspense 来解决这个问题。"}),`
`,t.jsx(e.p,{children:"Suspense 可以捕获这种异常。我们来看一下这段代码"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {use, Suspense} from 'react'
import Message from './Message'

const _api3 = () => {
  return new Promise(resolve => {
    resolve({ value: 'React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch.' })
  })
}

export default function Demo01() {
  const promise = _api3()
  return (
    <Suspense fallback=''>
      <Content promise={promise} />
    </Suspense>
  )
}

function Content(props) {
  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,t.jsxs(e.p,{children:["在这段代码中，为了让 Suspense 捕获更小范围的组件，我们单独定义了一个子组件 ",t.jsx(e.code,{children:"Content"})," 来使用 use 获取 promise 中的数据。这也是未来使用的比较常规的思路和手段。案例预览效果如下所示。"]}),`
`,t.jsx(_,{reload:!0,children:t.jsx(P3,{})}),`
`,t.jsx(e.p,{children:"当然，在开发中更常见的效果是使用 use 读取异步 promise，主要的场景就是接口请求。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Suspense fallback={<Loading />}>
  <Albums />
</Suspense>
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"Suspense"})," 能够捕获到子组件首次渲染的异常。因此我们常常将 ",t.jsx(e.code,{children:"Suspense"})," 当成一种组件错误边界来处理。"]}),`
`,t.jsxs(e.p,{children:["但是需要注意的是，传递给 ",t.jsx(e.code,{children:"Suspense"})," 的异步组件必须在报错时返回一个 Promise 对象，它才能正常工作。在 React 19 中，",t.jsx(e.code,{children:"use(promise)"})," 被设计成完全符合 Suspense 规范的 hook，因此我们可以轻松的结合他们两者来完成页面开发。"]}),`
`,t.jsx(e.p,{children:"我们来分析一下上一章最后的例子。"}),`
`,t.jsx(e.p,{children:"首先，我们定义好一个用于接口请求的函数，该函数执行返回 promise"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`export const getMessage = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}
`})}),`
`,t.jsx(e.p,{children:"然后我们定义一个子组件 Message，该子组件接受一个 promise 作为参数。然后在子组件内部，我们使用 use 读取该 promise 中的值。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const Message = (props) => {
  const content = use(props.promise)
  return (
    <div className='flex border border-blue-100 p-4 rounded-md shadow'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='text-sm mt-1 text-gray-600'>{content.value}</div>
      </div>
    </div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"有了这个子组件之后，我们使用 Suspense 包裹捕获该组件的错误，防止错误溢出到更高层级的组件。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`export default function Index() {
  const promise = getMessage()
  return (
    <Suspense fallback={<Skeleton />}>
      <Message promise={promise} />
    </Suspense>
  )
}
`})}),`
`,t.jsxs(e.p,{children:["当 Message 组件首次渲染时，由于直接读取 promise 导致报错，Suspense 捕获到该异常后，会渲染 ",t.jsx(e.code,{children:"fallback"})," 中设置的组件。此时我们设置了一个骨架屏 Skeleton 组件，大家可以多次点击 reload 按钮查看演示效果。"]}),`
`,t.jsx(e.p,{children:"因此，这个案例的视觉表现应该为：1. 首先渲染 Skeleton 组件。然后请求成功之后，use 渲染 Message 组件。"}),`
`,t.jsx(e.p,{children:"演示案例运行结果如下"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(zm,{})}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Suspense 工作原理"})}),`
`,t.jsxs(e.p,{children:["Suspense 提供了一个加载数据的标准。在源码中，Suspense 的子组件被称为 ",t.jsx(e.code,{children:"primary"}),"。"]}),`
`,t.jsxs(e.p,{children:["当 react 在 beginWork 的过程中（diff 过程），遇到 ",t.jsx(e.code,{children:"Suspense"})," 时，首先会尝试加载 ",t.jsx(e.code,{children:"primary"})," 组件。如果 ",t.jsx(e.code,{children:"primary"})," 组件只是一个普通组件，那么就顺利渲染完成。"]}),`
`,t.jsxs(e.p,{children:["如果 ",t.jsx(e.code,{children:"primary"})," 组件是一个包含了 use 读取异步 promise 的组件，它会在首次渲染时，",t.jsx(e.strong,{children:"抛出一个异常"}),"。react 捕获到该异常之后，发现是一个我们在语法中约定好的 promise，那么就会将其 ",t.jsx(e.code,{children:"then"})," 的回调函数保存下来，并将下一个 ",t.jsx(e.code,{children:"next"})," beginWork 的组件重新指定为 ",t.jsx(e.code,{children:"Suspense"}),"。"]}),`
`,t.jsxs(e.p,{children:["此时 promise 在请求阶段，因此再次 beginWork Suspense 组件时，会跳过 ",t.jsx(e.code,{children:"primary"})," 的执行而直接渲染 ",t.jsx(e.code,{children:"fallback"})]}),`
`,t.jsxs(e.p,{children:["当 ",t.jsx(e.code,{children:"primary"})," 中的 promise 执行完成时「resolve」，会执行刚才保存的 ",t.jsx(e.code,{children:"then"})," 方法，此时会触发 ",t.jsx(e.code,{children:"Suspense"})," 再次执行「调度一个更新任务」。由于此时 ",t.jsx(e.code,{children:"primary"})," 中的 promise 已经 resolve，因此此时就可以拿到数据直接渲染 ",t.jsx(e.code,{children:"primary"})," 组件。"]}),`
`,t.jsx(e.p,{children:"整个流程可以简单表示为："}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`Suspense ->
primary -> 
Suspense -> 
fallback -> 
waiting -> resolve() -> 
Suspense -> 
primary -> 
`})}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"2"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"primary 为普通组件时"})}),`
`,t.jsxs(e.p,{children:["当 ",t.jsx(e.code,{children:"primary"})," 为普通组件时，会直接渲染普通组件，如下案例所示。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import React, { Suspense } from 'react';
import Message from './Message'
import Skeleton from './Skeleton'

export default function Index() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Message
        message='这是一个普通的 UI 组件，Skeleton 组件不会有任何渲染机会，直接渲染 Message 组件'
        title='Primary'
      />
    </Suspense>
  )
}
`})}),`
`,t.jsx(e.p,{children:"渲染结果如下"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(ty,{})}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"3"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"新旧实现对比"})}),`
`,t.jsx(e.p,{children:"在前面我们 结合 use 与 Suspense 实现了一个初始化加载的案例。该案例的视觉表现是在初始化时，首先显示 Skeleton 组件，请求成功之后，显示 Message 组件。"}),`
`,t.jsx(e.p,{children:"核心代码与演示效果如下，点击 reload 按钮可重复观察执行过程"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`export default function Index() {
  const promise = getMessage()
  return (
    <Suspense fallback={<Skeleton />}>
      <Message promise={promise} />
    </Suspense>
  )
}
`})}),`
`,t.jsx(e.p,{children:"刷新页面时重新请求数据渲染，请求过程中显示骨架屏组件 Skeleton"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(zm,{})}),`
`,t.jsxs(e.p,{children:["这里我们需要关注的是，对比以前必须要借助 ",t.jsx(e.code,{children:"state"})," ",t.jsx(e.code,{children:"useEffect"})," 的实现方式，体会一下差别。核心逻辑如下"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// 之前的实现方式
export default function Index() {
  const [content, update] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }, []);

  if (loading) {
    return <Skeleton />
  }

  return (
    <Message message={content.value} />
  )
}
`})}),`
`,t.jsx(e.p,{children:"我们可以在右侧演练场中观察完整的演示效果。"}),`
`,t.jsx(e.p,{children:"可以很明显的看出，新的方式使用 use + Suspense ，代码更加简洁。"}),`
`,t.jsxs(e.p,{children:["除此之外，由于在严格模式下，组件首次加载会执行两次，因此我们还需要想额外的办法防止重复执行，代码会变得更加冗余。一个很明显的差别就是 ",t.jsx(e.code,{children:"Suspense + use"})," 的方式会自动帮助我们弃用第二次的请求数据。从视觉上的效果就是，右侧使用 useEffect 实现的结果，UI 会更新两次。"]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"4"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"总结"})}),`
`,t.jsxs(e.p,{children:["与老版本使用 ",t.jsx(e.code,{children:"state"})," + ",t.jsx(e.code,{children:"useEffect"})," 完成首页初始化的需求相比，新的开发方式更加的简洁，代码舒适度更高。"]}),`
`,t.jsxs(e.p,{children:["需要注意区分的是，在以前的开发方式中，我们可以通过自定义 hook 的方式，把状态与 ",t.jsx(e.code,{children:"useEffect"})," 封装成自定义 hook."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function useFetch() {
  const [content, update] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api().then(res => {
      setLoading(false)
      update(res)
    })
  }, [])

  return {content, loading}
}
`})}),`
`,t.jsx(e.p,{children:"最终在应用组件中也可以写出非常类似的非常简洁的代码。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function Index2() {
  const {content, loading} =  useFetch()

  if (loading) {
    return <Skeleton />
  }

  return (
    <Message message={content.value} />
  )
}
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"Vue3 也是这种类似自定义 hook 的方式。但是这两种开发方式是有本质区别的。"}),`
`]}),`
`,t.jsx(e.p,{children:"这是我们之前版本的最佳实践。注意体会他们之间的区别。相似，但却不同。我们后续会列举更多案例，尽可能用新的开发思路去复现开发过程中会出现的场景。"})]})}function sy(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Um,{...n})}):Um(n)}function ry(){const[n,e]=u.useState({value:""}),[s,r]=u.useState(!0);return u.useEffect(()=>{Q0().then(a=>{e(a),r(!1)})},[]),s?t.jsx(Rd,{}):t.jsxs(t.Fragment,{children:[t.jsx(ay,{message:n.value}),t.jsx("div",{className:"mt-8 text-center",children:t.jsx(J3,{signal:!0,children:"点击下方刷新按钮可重置演示"})})]})}const ay=n=>{const e=n.message;return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"a new message!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},ly={"App.js":Z3,"api.js":Y3,"Button.jsx":G3,"Skeleton.jsx":I3};function iy(){return t.jsx(z,{files:ly,renderArticle:n=>t.jsx(sy,{components:{code:n}}),caseRender:t.jsx(ry,{})})}const cy=`import {use, useState, Suspense} from 'react'
import Message from './Message'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo01() {
  const [promise, update] = useState(null)

  function __handler() {
    update(getMessage())
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>更新数据</Button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Content promise={promise} />
      </Suspense>
    </>
  )
}

function Content(props) {
  if (!props.promise) {
    return <Message message='' />
  }

  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`,oy=`import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

document.documentElement.style.fontSize = '14px'
// 本组件只是一个简单的 UI 组件，学习时无需多过关注

export default function Button(props) {
  const {className, primary, danger, sm, lg, signal, success, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition relative'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-2 px-4'

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,
    ['text-sky-500 bg-white border border-sky-300 hover:bg-sky-50']: signal,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }, className))

  return (
    <button className={cls} {...other}>
      {props.children}
      {signal && (
        <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      )}
    </button>
  )
}
`,dy=`const random = [
  'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  'Whether you work on your own or with thousands of other developers, using React feels the same.',
  'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
  'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
}
`,uy=`export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,my=`const Message = (props) => {
  const message = unescape(props.message.replace(/\\\\u/gi,'%u'));
  const title = unescape((props.title || '').replace(/\\\\u/gi,'%u'));

  let base = 'flex border border-blue-100 p-4 rounded-md shadow'


  if (!message) {
    return (
      <div className={\`\${base} justify-center items-center flex-col text-gray-500\`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
        </svg>

        <div className='mt-2'>no data.</div>
      </div>
    )
  }

  return (
    <div className={base}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
      <div className='flex-1 ml-3'>
        <div>{title || 'Heads Up!'}</div>
        <div className='text-sm mt-1 text-gray-600'>{message}</div>
      </div>
    </div>
  )
}

export default Message
`,da=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));let r="flex border border-blue-100 p-4 rounded-md shadow";return e?t.jsxs("div",{className:r,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]}):t.jsxs("div",{className:`${r} justify-center items-center flex-col text-gray-500`,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),t.jsx("div",{className:"mt-2",children:"no data."})]})};function Ld(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function Ed(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,p=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const py=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var J0=new Headers;J0.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var hy={method:"GET",headers:J0,redirect:"follow",data:"hex"};const fy="https://echo.apifox.com/delay/1",Td=async()=>{await fetch(fy,hy);const n=Math.floor(Math.random()*10)%5;return{value:py[n]}};function xy(){const[n,e]=u.useState(null);function s(){e(Td())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(Ed,{onClick:s,children:"更新数据"})}),t.jsx(u.Suspense,{fallback:t.jsx(Ld,{}),children:t.jsx(gy,{promise:n})})]})}function gy(n){if(!n.promise)return t.jsx(da,{message:""});const{value:e}=u.use(n.promise);return t.jsx(da,{message:e})}function jy(){const[n,e]=u.useState(Promise.resolve({value:""}));function s(){e(Td())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(Ed,{onClick:s,children:"更新数据"})}),t.jsx(u.Suspense,{fallback:t.jsx(Ld,{}),children:t.jsx(vy,{promise:n})})]})}function vy(n){const{value:e}=u.use(n.promise);return t.jsx(da,{message:e})}function Hm(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"接下来，我们将会以大量的实践案例来展开 React 19 新 hook 的运用。"}),`
`,t.jsxs(e.p,{children:["本文模拟的实践案例为",t.jsx(e.strong,{children:"点击按钮更新数据"}),"。这在开发中是一个非常常见的场景。"]}),`
`,t.jsx(e.p,{children:"案例完成之后的最终演示效果图如下。案例的视觉表现为：初始化时没有请求，所以组件显示为空数据样式。当我们点击按钮时请求一条数据，数据更新，请求成功之后显示更新之后的内容。"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(xy,{})}),`
`,t.jsx(e.p,{children:"接下来，我们直接用 React 19 新的开发方式来完成这个需求。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"基础实现"})}),`
`,t.jsx(e.p,{children:"首先创建一个方法用于请求数据，请确保该方法执行会返回一个 promise 对象。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const getApi = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}
`})}),`
`,t.jsxs(e.p,{children:["这里一个非常关键的地方就在于，当我们要更新的数据时，我们不再需要设计一个 ",t.jsx(e.code,{children:"loading"})," 状态去记录数据是否正在发生请求行为，因为 ",t.jsx(e.code,{children:"Suspense"})," 帮助我们解决了 Loading 组件的显示问题。"]}),`
`,t.jsxs(e.p,{children:["与此同时，",t.jsx(e.code,{children:"use()"})," 又帮助我们解决了数据获取的问题。那么问题就来了，这个时候，好像我们也不需要设计一个状态去存储数据。"]}),`
`,t.jsx(e.p,{children:"那么我们应该怎么办呢？"}),`
`,t.jsxs(e.p,{children:["这里有一个",t.jsx(e.strong,{children:"非常巧妙"}),"的方式，就是把",t.jsx(e.strong,{children:"创建的 promise 作为状态值"}),"来触发组件的重新执行。每次点击，我们都需要创建新的 promise"]}),`
`,t.jsx(e.p,{children:"代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`// 记住这个初始值
const [promise, update] = useState(null)
`})}),`
`,t.jsx(e.p,{children:"这个时候，当我们点击事件执行时，则只需要执行如下代码去触发组件的更新即可。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function __handler() {
  // 每次点击，都会创建新的 promise 对象
  update(getMessage())
}
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"getApi()"})," 执行，新的请求会发生。他的执行结果，又返回了一个新的 promise."]}),`
`,t.jsx(e.p,{children:"因此，点击之后会创建的新 promise 值，promise 此时就会作为状态更改触发组件的更新。"}),`
`,t.jsx(e.p,{children:"完整代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import {use, useState, Suspense} from 'react'
import Message from './Message'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo01() {
  const [promise, update] = useState(null)

  function __handler() {
    update(getMessage())
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>更新数据</Button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Content promise={promise} />
      </Suspense>
    </>
  )
}

function Content(props) {
  if (!props.promise) {
    return <Message message='' />
  }

  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,t.jsx(e.p,{children:"案例写完之后。我们基本上就能够实现最开始案例中的交互效果了。完整的代码在右侧查看。"}),`
`,t.jsx(e.p,{children:"但是现别急，还没有完。我们还需要进一步分析一下这个案例。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"案例分析"})}),`
`,t.jsx(e.p,{children:"这里我们需要注意观察两个事情。"}),`
`,t.jsxs(e.p,{children:["一个是观察当前组件更新，更上层的父组件是否发生了变化。我们可以在 ",t.jsx(e.code,{children:"App"})," 组件中执行一次打印。"]}),`
`,t.jsx(e.p,{children:"发现，当我们重新请求时，当前组件更新，但是上层组件并不会重新执行。"}),`
`,t.jsxs(e.p,{children:["我们可以出得结论：",t.jsx(e.strong,{children:"更简洁的状态设计，有利于命中 React 默认的性能优化规则"}),"。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"具体的规则请在 React 知命境合集中查看。"}),`
`]}),`
`,t.jsx(e.p,{children:"更简洁的状态设计，也是 React 19 所倡导的开发思路。我们需要尽可能少的使用 useState，例如，这里借助了 Suspense 减少了 loading 状态的维护。"}),`
`,t.jsxs(e.p,{children:["另外一个事情，是我们要特别特别注意观察子组件 ",t.jsx(e.code,{children:"Content"})," 的实现。"]}),`
`,t.jsxs(e.p,{children:["首先因为我们初始化时，给状态 ",t.jsx(e.code,{children:"promise"})," 赋予的默认值是 ",t.jsx(e.code,{children:"null"}),"。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`// 记住这个初始值
const [promise, update] = useState(null)
`})}),`
`,t.jsxs(e.p,{children:["之后，我们就将状态 promise 传给了子组件 ",t.jsx(e.code,{children:"Content"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`<Suspense fallback={<Skeleton />}>
  <Content promise={promise} />
</Suspense>
`})}),`
`,t.jsxs(e.p,{children:["然后在 Content 组件的内部实现中，因为我们直接把 promise 传给了 ",t.jsx(e.code,{children:"use"}),"，那么此时直接执行肯定会报错"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const {value} = use(props.promise)
`})}),`
`,t.jsxs(e.p,{children:["要注意的是，我们刚才说，使用 ",t.jsx(e.code,{children:"Suspense"})," 会捕获子组件的异常，但是不是捕获所有异常，它只能识别 promise 的异常。因此，这里的报错会直接影响到整个页面。"]}),`
`,t.jsxs(e.p,{children:["所以，为了处理好初始化时传入 ",t.jsx(e.code,{children:"api"})," 值为 null，我在内部实现代码逻辑中，使用了 ",t.jsx(e.code,{children:"if"})," 判断该条件，然后执行了一次 ",t.jsx(e.code,{children:"return"}),"。我试图让 ",t.jsx(e.code,{children:"use(null)"})," 得不到执行的时机。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function Content(props) {
  if (!props.promise) {
    return <Message message='' />
  }

  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,t.jsx(e.p,{children:"当然，我们还可以给状态 promise 一个默认的，自带 resolve 值的 Promise 对象作为初始值，这样可以在子组件中避免这个异常判断。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const [promise, update] = useState(Promise.resolve({value: ''}))
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function Content(props) {
  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,t.jsx(e.p,{children:"演示效果如下图所示"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(jy,{})}),`
`,t.jsx(e.p,{children:"这种写法有一个很小的瑕疵，就是在初始化时，也不可避免的显示了 Skeleton 组件，实际上是不需要的。因此具体采用哪种写法，要依据实践中的需求而定。"})]})}function by(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Hm,{...n})}):Hm(n)}function yy(){const[n,e]=u.useState(null);function s(){e(Td())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(Ed,{onClick:s,children:"更新数据"})}),t.jsx(u.Suspense,{fallback:t.jsx(Ld,{}),children:t.jsx(Ny,{promise:n})})]})}function Ny(n){if(!n.promise)return t.jsx(da,{message:""});const{value:e}=u.use(n.promise);return t.jsx(da,{message:e})}const wy={"App.js":cy,"api.js":dy,"Message.jsx":my,"Button.jsx":oy,"Skeleton.jsx":uy};function Sy(){return t.jsx(z,{files:wy,renderArticle:n=>t.jsx(by,{components:{code:n}}),caseRender:t.jsx(yy,{})})}const ky=`import {use, useState, Suspense} from 'react'
import Message from './Message'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo01() {
  const [promise, update] = useState(getMessage)

  function __handler() {
    update(getMessage())
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>更新数据</Button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Content promise={promise} />
      </Suspense>
    </>
  )
}

function Content(props) {
  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`,Cy=`import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

document.documentElement.style.fontSize = '14px'
// 本组件只是一个简单的 UI 组件，学习时无需多过关注

export default function Button(props) {
  const {className, primary, danger, sm, lg, signal, success, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition relative'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-2 px-4'

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,
    ['text-sky-500 bg-white border border-sky-300 hover:bg-sky-50']: signal,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }, className))

  return (
    <button className={cls} {...other}>
      {props.children}
      {signal && (
        <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      )}
    </button>
  )
}
`,_y=`const random = [
  'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  'Whether you work on your own or with thousands of other developers, using React feels the same.',
  'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
  'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
}
`,Ay=`export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,$y=`const Message = (props) => {
  const message = unescape(props.message.replace(/\\\\u/gi,'%u'));
  const title = unescape((props.title || '').replace(/\\\\u/gi,'%u'));

  let base = 'flex border border-blue-100 p-4 rounded-md shadow'


  if (!message) {
    return (
      <div className={\`\${base} justify-center items-center flex-col text-gray-500\`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
        </svg>

        <div className='mt-2'>no data.</div>
      </div>
    )
  }

  return (
    <div className={base}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
      <div className='flex-1 ml-3'>
        <div>{title || 'Heads Up!'}</div>
        <div className='text-sm mt-1 text-gray-600'>{message}</div>
      </div>
    </div>
  )
}

export default Message
`,Dd=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));let r="flex border border-blue-100 p-4 rounded-md shadow";return e?t.jsxs("div",{className:r,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]}):t.jsxs("div",{className:`${r} justify-center items-center flex-col text-gray-500`,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),t.jsx("div",{className:"mt-2",children:"no data."})]})};function Od(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function Bd(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,p=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const My=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var W0=new Headers;W0.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var Ry={method:"GET",headers:W0,redirect:"follow",data:"hex"};const Ly="https://echo.apifox.com/delay/1",Qs=async()=>{await fetch(Ly,Ry);const n=Math.floor(Math.random()*10)%5;return{value:My[n]}};function Ey(){const[n,e]=u.useState({value:""}),[s,r]=u.useState(!0);u.useEffect(()=>{Qs().then(l=>{e(l),r(!1)})},[]);function a(){r(!0),Qs().then(l=>{e(l),r(!1)})}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(Bd,{onClick:a,children:"更新数据"})}),s?t.jsx(Od,{}):t.jsx(Dd,{message:n.value})]})}function Ty(){const[n,e]=u.useState(Qs());function s(){e(Qs())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(Bd,{onClick:s,children:"更新数据"})}),t.jsx(u.Suspense,{fallback:t.jsx(Od,{}),children:t.jsx(Dy,{promise:n})})]})}function Dy(n){const{value:e}=u.use(n.promise);return t.jsx(Dd,{message:e})}function qm(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:["在上一章的基础之上，我们做一个小的需求变动。上一章的案例要求我们不要初始化时请求一条数据，因此，默认渲染结果是 ",t.jsx(e.code,{children:"no data"})]}),`
`,t.jsx(e.p,{children:"这一章的案例则不同，我们需要在初始化时请求数据。也就是说，我们此时同时需要初始化和更新的逻辑"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"需求变动之后的思考"})}),`
`,t.jsx(e.p,{children:"在以前版本的实现中，接口数据的触发方式不同，因此我们需要分别处理这两种触发时机。"}),`
`,t.jsx(e.p,{children:"首先，我们需要定义两个状态来管理数据结果和 loading 状态"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const [content, update] = useState({value: ''})
const [loading, setLoading] = useState(true)
`})}),`
`,t.jsxs(e.p,{children:["然后，我们利用 ",t.jsx(e.code,{children:"useEffect"})," 来实现初始化时的数据请求逻辑"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`useEffect(() => {
  getMessage().then(res => {
    update(res)
    setLoading(false)
  })
}, []);
`})}),`
`,t.jsx(e.p,{children:"按钮点击事件触发时，我们通过回调函数来实现数据的更新"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`function __handler() {
  setLoading(true)
  getMessage().then(res => {
    update(res)
    setLoading(false)
  })
}
`})}),`
`,t.jsx(e.p,{children:"完整代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {use, useState, Suspense, useEffect} from 'react'
import Message from './Message'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo01() {
  const [content, update] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }, []);

  function __handler() {
    setLoading(true)
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>更新数据</Button>
      </div>
      {loading ? <Skeleton /> : <Message message={content.value} />}
    </>
  )
}
`})}),`
`,t.jsx(e.p,{children:"演示效果如下案例所示"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(Ey,{})}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"新的实现方式"})}),`
`,t.jsx(e.p,{children:"与之前版本的实现方式相比，新的开发方式就简单了许多。"}),`
`,t.jsx(e.p,{children:"我们只需要在上一章的案例中，做一个小的修改即可满足需求。那就是在给状态 promise 的初始值做一个小小的变动即可。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-diff",children:`- const [promise, update] = useState(null)
// 只需要改这一点代码
+ const [promise, update] = useState(getMessage())
`})}),`
`,t.jsx(e.p,{children:"这里的思路就是给状态 promise 赋值一个 Promise 对象作为初始值。修改之后的完整代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {use, useState, Suspense} from 'react'
import Message from './Message'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo02() {
  const [promise, update] = useState(getMessage())

  function __handler() {
    update(getMessage())
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>更新数据</Button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Content promise={promise} />
      </Suspense>
    </>
  )
}

function Content(props) {
  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,t.jsx(e.p,{children:"演示效果如下所示"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(Ty,{})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"非常的方便省事。"})}),`
`,t.jsxs(e.p,{children:["最后需要注意的是一个小的细节，如果不考虑 Compiler 编译之后的代码去缓存初始化时的 ",t.jsx(e.code,{children:"getMessage()"}),"，那么每次更新组件时，该方法都会执行一次，因此，会导致冗余的接口请求。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"使用 Compiler 编译之后，这段代码会被缓存下来而不会重复执行"}),`
`]}),`
`,t.jsx(e.p,{children:"因此，最好的方式是进一步调整一下，利用 useState 的初始化机制修改如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-diff",children:`- const [promise, update] = useState(getMessage())
+ const [promise, update] = useState(getMessage)
`})}),`
`,t.jsx(e.p,{children:"这样，即使不用 Compiler 编译缓存，也不会出现冗余请求的情况。完整的代码和演示案例请在右侧模块中查看。"})]})}function Oy(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(qm,{...n})}):qm(n)}function K0(){const[n,e]=u.useState(Qs);function s(){e(Qs())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(Bd,{onClick:s,children:"更新数据"})}),t.jsx(u.Suspense,{fallback:t.jsx(Od,{}),children:t.jsx(By,{promise:n})})]})}function By(n){const{value:e}=u.use(n.promise);return t.jsx(Dd,{message:e})}const zy={"App.js":ky,"api.js":_y,"Message.jsx":$y,"Button.jsx":Cy,"Skeleton.jsx":Ay};function Uy(){return t.jsx(z,{files:zy,renderArticle:n=>t.jsx(Oy,{components:{code:n}}),caseRender:t.jsx(K0,{})})}const Hy=`import {use, useState, Suspense, useEffect} from 'react'
import Userinfo from './Userinfo'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo01() {
  const [promise, updatePromise] = useState(() => [getMessage()])

  function __handler() {
    updatePromise([...promise, getMessage()])
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>新增数据</Button>
      </div>
      {promise.map((item, index) => (
        <Suspense fallback={<Skeleton />} key={\`hello \${index}\`}>
          <User promise={item} index={index} />
        </Suspense>
      ))}
    </>
  )
}

function User(props) {
  const result = use(props.promise)
  return (
    <Userinfo index={props.index} username={result.id} message={result.value} />
  )
}
`,qy=`import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

document.documentElement.style.fontSize = '14px'
// 本组件只是一个简单的 UI 组件，学习时无需多过关注

export default function Button(props) {
  const {className, primary, danger, sm, lg, signal, success, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition relative'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-2 px-4'

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,
    ['text-sky-500 bg-white border border-sky-300 hover:bg-sky-50']: signal,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }, className))

  return (
    <button className={cls} {...other}>
      {props.children}
      {signal && (
        <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      )}
    </button>
  )
}
`,Vy=`const random = [
  'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  'Whether you work on your own or with thousands of other developers, using React feels the same.',
  'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
  'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i],
    id: getUuid()
  }
}

function getUuid() {
  var s = [];
  var hexDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (var i = 0; i < 16; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }

  s[8] = "-"
  let uuid = s.join("")
  return uuid
}
`,Xy=`export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,Zy=`const Userinfo = (props) => {
  const message = unescape(props.message.replace(/\\\\u/gi,'%u'));
  const username = unescape((props.username || '').replace(/\\\\u/gi,'%u'));
  const index = props.index || 0;

  let base = 'flex border border-blue-100 p-4 rounded-md my-4 items-start'

  return (
    <div className={base}>
      <img className='w-10' src={\`https://api.dicebear.com/7.x/miniavs/svg?seed=\${index}\`} alt='' />
      <div className='flex-1 ml-3'>
        <div>{username || 'no name'}</div>
        <div className='text-sm mt-1 text-gray-600'>{message}</div>
      </div>
    </div>
  )
}

export default Userinfo
`,e1=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.username||"").replace(/\\u/gi,"%u")),r=n.index||0;return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md my-4 items-start",children:[t.jsx("img",{className:"w-10",src:`https://api.dicebear.com/7.x/miniavs/svg?seed=${r}`,alt:""}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"no name"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})};function n1(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function t1(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,p=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const Gy=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var s1=new Headers;s1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var Yy={method:"GET",headers:s1,redirect:"follow",data:"hex"};const Iy="https://echo.apifox.com/delay/1",ql=async()=>{await fetch(Iy,Yy);const n=Math.floor(Math.random()*10)%5;return{value:Gy[n],id:Fy()}};function Fy(){for(var n=[],e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=0;s<16;s++)n[s]=e.substr(Math.floor(Math.random()*16),1);return n[8]="-",n.join("")}function Py(){const[n,e]=u.useState([]);u.useEffect(()=>{e([...n,{type:"loading"}]),ql().then(r=>{e([...n,r])})},[]);function s(){e([...n,{type:"loading"}]),ql().then(r=>{e([...n,r])})}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(t1,{onClick:s,children:"新增数据"})}),t.jsx(Qy,{list:n})]})}function Qy(n){const e=n.list;return t.jsx(t.Fragment,{children:e.map((s,r)=>s.type==="loading"?t.jsx(n1,{},`hello ${r}`):t.jsx(e1,{index:r,username:s.id,message:s.value},`h${r}`))})}function Vm(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"这一章我们要学习的是一个新增加载项到列表的案例。首先我们会通过接口获取到一条数据，然后将该数据渲染到列表中。你可以先通过右侧预览查看最终演示效果。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"使用旧的方案实现"})}),`
`,t.jsx(e.p,{children:"首先，先定义请求数据的 promise"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// api.js
export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {value: random[i], id: getUuid()}
}
`})}),`
`,t.jsx(e.p,{children:"然后需要定义一个状态用于存储列表。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const [list, updateList] = useState([])
`})}),`
`,t.jsxs(e.p,{children:["由于每一项在请求时，都需要显示一个 Loading 状态，此时我们可以使用一个巧妙的方式来解决这个问题。那就是暂时往 list 中新增一条 ",t.jsx(e.code,{children:"type: loading"})," 的数据。在遍历的时候判断出该数据渲染成 ",t.jsx(e.code,{children:"Skeleton"})," 组件。"]}),`
`,t.jsxs(e.p,{children:["因此，我们单独声明一个列表组件 List，该组件接收 ",t.jsx(e.code,{children:"list"})," 作为参数"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function List(props) {
  const list = props.list
  return (
    <>
      {list.map((item, index) => {
        if (item.type === 'loading') {
          return <Skeleton />
        }
        return <Userinfo index={index} username={item.id} message={item.value} />
      })}
    </>
  )
}
`})}),`
`,t.jsxs(e.p,{children:["当我们在发送请求时，先往 list 中新增一条 ",t.jsx(e.code,{children:"type: loading"})," 的数据。此时我们利用 list 的特性与闭包的缓存特性，在接口请求成功之后再把请求过来的有效数据更新到 list 中即可。"]}),`
`,t.jsx(e.p,{children:"代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`useEffect(() => {
  updateList([...list, {type: 'loading'}])
  getMessage().then(res => {
    updateList([...list, res])
  })
}, []);
`})}),`
`,t.jsx(e.p,{children:"完整代码如下："}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {use, useState, Suspense, useEffect} from 'react'
import Userinfo from './Userinfo'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo01() {
  const [list, updateList] = useState([])

  useEffect(() => {
    updateList([...list, {type: 'loading'}])
    getMessage().then(res => {
      updateList([...list, res])
    })
  }, []);

  function __handler() {
    updateList([...list, {type: 'loading'}])
    getMessage().then(res => {
      updateList([...list, res])
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>新增数据</Button>
      </div>
      <List list={list} />
    </>
  )
}

function List(props) {
  const list = props.list
  return (
    <>
      {list.map((item, index) => {
        if (item.type === 'loading') {
          return <Skeleton />
        }
        return <Userinfo index={index} username={item.id} message={item.value} />
      })}
    </>
  )
}
`})}),`
`,t.jsx(e.p,{children:"案例演示效果如下所示"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(Py,{})}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"新的思路"})}),`
`,t.jsx(e.p,{children:"旧的思路在实现上非常巧妙。但是简洁度依然弱于新的实现方案。除此之外，旧的实现思路还有许多问题需要处理，例如初始化时请求了两次，我们要考虑接口防重的问题。以及当我们多次连续点击按钮时，会出现竞态问题而导致渲染结果出现混乱。"}),`
`,t.jsx(e.p,{children:"我们基于 use + Suspense 的思路来考虑新的方案。"}),`
`,t.jsx(e.p,{children:"首先，我们应该将数据存储在 promise 中，因此很自然就能想到，多个数据，那么我们应该需要维护多个 promise，因此，我们需要定义一个由 promise 组成的数组。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const [promise, updatePromise] = useState(() => [getMessage()])
`})}),`
`,t.jsxs(e.p,{children:["由于初始化时，我们需要自动请求一条数据，因此我们给该数组的初始值为 ",t.jsx(e.code,{children:"[getMessage()]"})]}),`
`,t.jsx(e.p,{children:"点击时，需要新增一个数据，那么其实就是新增一个 promise，所以代码也非常简单，就是如下所示"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function __handler() {
  updatePromise([...promise, getMessage()])
}
`})}),`
`,t.jsx(e.p,{children:"处理好之后，我们只需要使用 map 遍历该数组即可。在遍历逻辑中，每一项都返回 Suspense 包裹的子组件。我们将 promise 传递给该子组件，并在子组件中使用 use 读取 promise 中的值。"}),`
`,t.jsx(e.p,{children:"最终的完整代码与演示结果请在右侧案例中查看。"}),`
`,t.jsx(e.p,{children:"此时通过案例演示结果可以观察到，初始化时的接口重复问题被解决掉了，并且当我们多次连续点击新增时，也不会出现接口竞态混乱的问题。"}),`
`,t.jsx(e.p,{children:"希望大家能够通过这个案例，进一步感受到新的开发思维的强大之处。"})]})}function Jy(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Vm,{...n})}):Vm(n)}function Wy(){const[n,e]=u.useState(()=>[ql()]);function s(){e([...n,ql()])}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(t1,{onClick:s,children:"新增数据"})}),n.map((r,a)=>t.jsx(u.Suspense,{fallback:t.jsx(n1,{}),children:t.jsx(Ky,{promise:r,index:a})},`hello ${a}`))]})}function Ky(n){const e=u.use(n.promise);return t.jsx(e1,{index:n.index,username:e.id,message:e.value})}const e7={"App.js":Hy,"api.js":Vy,"Userinfo.jsx":Zy,"Button.jsx":qy,"Skeleton.jsx":Xy};function n7(){return t.jsx(z,{files:e7,renderArticle:n=>t.jsx(Jy,{components:{code:n}}),caseRender:t.jsx(Wy,{})})}const t7=`import { useState, Suspense } from 'react';
import List from './List'
import Button from './Button'
import Skeleton from './Skeleton'
import {fetchList} from './api.js'

const Index = () => {
  const [promises, increasePromise] = useState(() => [fetchList()])

  const onLoadMore = () => {
    increasePromise([...promises, fetchList()])
  };

  return (
    <>
      {promises.map((promise, i) => (
        <Suspense fallback={<Skeleton />} key={\`hello \${i}\`}>
          <List promise={promise} />
        </Suspense>
      ))}
      <div className='text-center my-4'>
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    </>
  );
};
export default Index;
`,s7=`import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

document.documentElement.style.fontSize = '14px'
// 本组件只是一个简单的 UI 组件，学习时无需多过关注

export default function Button(props) {
  const {className, primary, danger, sm, lg, signal, success, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition relative'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-2 px-4'

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,
    ['text-sky-500 bg-white border border-sky-300 hover:bg-sky-50']: signal,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }, className))

  return (
    <button className={cls} {...other}>
      {props.children}
      {signal && (
        <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      )}
    </button>
  )
}
`,r7=`const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}
`,a7=`// header
export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4 items-center">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-3 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,l7=`import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={item.name.last} className='flex border-b py-4 mx-4 items-center border-dashed'>
          <img className='w-14 h-14 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 repo, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`;function Xm(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"我们可以在思维上将上一节课的解决方案扩展到分页列表中，加载更多的场景。"}),`
`,t.jsx(e.p,{children:"这里唯一的一个小区别就是，上一章中，我们只在 promise 中存储了一条数据。如果我们将一页数据也存在 promise 中呢？"}),`
`,t.jsx(e.p,{children:"加载更多的分页逻辑就会变得非常简单。为了方便演示，我们这里以一页数据只有三条为例。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"大多数情况是一页 10 条，这个可根据具体的实践需求随时改动"}),`
`]}),`
`,t.jsxs(e.p,{children:["首先简单约定接口，该接口返回一页数据。",t.jsx(e.code,{children:"3条"})]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["你也可以在右侧演示案例的 ",t.jsx(e.code,{children:"api.js"})," 中，修改 count = 10 查看一页数据 10 条的演示效果"]}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// api.js
const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}
`})}),`
`,t.jsx(e.p,{children:"然后定义一个可以遍历显示一页数据的组件。该组件接收一个 promise，并使用 use 读取请求结果。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// List.jsx
import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={item.name.last} className='flex border-b py-4 mx-4 items-center'>
          <div className='flex-1'>
            <div className='flex'>
              <img className='w-14 h-14 rounded-full' src={item.picture.large} alt='' />
              <div className='flex-1 ml-4'>
                <div className='font-bold'>{item.name.last}</div>
                <div className='text-gray-400 mt-3 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
              </div>
            </div>

            <div className='mt-4 line-clamp-2 text-sm'>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</div>
          </div>

          <img
            className='w-52 ml-2'
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        </div>
      ))}
    </div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"此时我们稍微梳理一下逻辑，首先我们有多个 promise，然后每个 promise 中有一页数据，因此，我们可以遍历 promise，并在遍历中渲染能显示一页数据的 List 组件。"}),`
`,t.jsx(e.p,{children:"因此，我们首先要定义一个状态用于保存 promise 数组"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const [promises, increasePromise] = useState(() => [fetchList()])
`})}),`
`,t.jsxs(e.p,{children:["初始化时需要渲染一页数据，所以我们设置该数组的默认值为 ",t.jsx(e.code,{children:"[fetchList()]"})]}),`
`,t.jsx(e.p,{children:"loadmore 事件触发之后，我们只需要往该数组中新增一个 promise 即可"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const onLoadMore = () => {
  increasePromise([...promises, fetchList()])
};
`})}),`
`,t.jsxs(e.p,{children:["然后遍历 promises，在遍历中使用 ",t.jsx(e.code,{children:"Suspense"})," 包裹内部有 use 逻辑的 List 组件"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`{promises.map((promise, i) => (
  <Suspense fallback={<Skeleton />} key={\`hello \${i}\`}>
    <List promise={promise} />
  </Suspense>
))}
`})}),`
`,t.jsx(e.p,{children:"完整的代码与演示效果请查看右侧案例。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"分页参数的维护、最后一页的判断，大家在实践中要自行维护，这里只做方案的演示，没有考虑所有边界情况"}),`
`]})]})}function i7(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Xm,{...n})}):Xm(n)}function c7({promise:n}){const{results:e}=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border-b py-4 mx-4 items-center border-dashed",children:[t.jsx("img",{className:"w-14 h-14 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 repo, a design language for background applications"})]})]},s.name.last))})}document.documentElement.style.fontSize="14px";function o7(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,p=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}function d7(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})})}const u7=3,m7=`https://randomuser.me/api/?results=${u7}&inc=name,gender,email,nat,picture&noinfo`,Zm=async()=>(await fetch(m7)).json(),p7=()=>{const[n,e]=u.useState(()=>[Zm()]),s=()=>{e([...n,Zm()])};return t.jsxs(t.Fragment,{children:[n.map((r,a)=>t.jsx(u.Suspense,{fallback:t.jsx(d7,{}),children:t.jsx(c7,{promise:r})},`hello ${a}`)),t.jsx("div",{className:"text-center my-4",children:t.jsx(o7,{onClick:s,children:"loading more"})})]})},h7={"App.js":t7,"api.js":r7,"List.jsx":l7,"Button.jsx":s7,"Skeleton.jsx":a7};function f7(){return t.jsx(z,{files:h7,renderArticle:n=>t.jsx(i7,{components:{code:n}}),caseRender:t.jsx(p7,{})})}const x7=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(() => fetchListWithCancel(10))

  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 10
    update(fetchListWithCancel(len))
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,g7=`export const fetchList = async (number) => {
  const res = await fetch(\`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,j7=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,v7=`import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('我会执行几次呢')
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,b7=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`;document.documentElement.style.fontSize="14px";function y7(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Gm=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json();function N7({promise:n}){const{results:e}=u.use(n);return console.log("我会执行几次呢"),t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function w7(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function S7(){const[n,e]=u.useState(()=>Gm(5));function s(r){const a=r.target.value.length%10;e(Gm(a))}return t.jsxs("div",{children:[t.jsx(w7,{onChange:s,placeholder:"Enter something"}),t.jsx(u.Suspense,{fallback:t.jsx(y7,{}),children:t.jsx(N7,{promise:n})})]})}function Ym(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(S7,{})}),`
`,t.jsx(e.p,{children:"这是一个搜索的案例。当我们学会把数据存放在 promise 中时，实现这个案例的代码将会非常简单。案例演示如上面所示。"}),`
`,t.jsx(e.p,{children:"首先，我们需要定义一个 List 组件，用于显示列表数据。我们计划将列表数据存放在一个 promise 中，然后使用 use 从该 promise 中读取列表然后渲染。"}),`
`,t.jsx(e.p,{children:"因此，该 List 组件的代码如下所示"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"然后，我们只需要在 useState 中存储一个 promise 即可"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const [promise, update] = useState(() => fetchList(10))
`})}),`
`,t.jsx(e.p,{children:"更新时，更改该 promise"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function __inputChange(e) {
  const len = e.target.value.length % 10
  update(fetchList(len))
}
`})}),`
`,t.jsx(e.p,{children:"最后结合 Suspense，完整代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchList} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(() => fetchList(10))

  function __inputChange(e) {
    const len = e.target.value.length % 10
    update(fetchList(len))
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"在演示这个例子时，我们要结合 chrome 开发者工具一起查看。观察接口请求的情况。我们发现，当我们快速输入时，此时会发起多个接口请求。React 会帮助我们解决竞态的问题，将接口任务依次排列好执行。"}),`
`,t.jsx(e.p,{children:"但是在请求结果的获取上，反馈到页面上只会获取最后一次请求的结果。这一点非常舒适。"}),`
`,t.jsx(e.p,{children:"与此同时，本次案例演示了一个需要传入参数的接口应该如何处理。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"取消上一次请求"})}),`
`,t.jsx(e.p,{children:"由于上面的实现方式，每次都会发送接口请求，因此在耗时上可能会比较久，所以我们可以使用防抖或者节流的方式减少请求次数。这两个也是面试中比较常见的需要考察的小知识点。"}),`
`,t.jsx(e.p,{children:"除此之外，我们这里介绍一种新的方案来解决这个问题，那就是在新的请求发生时，取消上一次还未完成的请求。我们一起来学习一下"}),`
`,t.jsxs(e.p,{children:["在 JavaScript 中，有一个特殊的内建对象 ",t.jsx(e.code,{children:"AbortController"})," 可以终止异步任务。我们可以利用该对象实例来终止 ",t.jsx(e.code,{children:"fetch"})," 请求。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`let controller = new AbortController();
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"controller"})," 具有单个属性 ",t.jsx(e.code,{children:"signal"}),"，我们可以在这个属性上设置事件监听。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`let signal = controller.signal
signal.addEventListener('abort', () => alert("abort!"));
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"controller"})," 具有单个方法：",t.jsx(e.code,{children:"abort()"}),"，当 ",t.jsx(e.code,{children:"abort()"})," 调用时，signal 的事件监听就会执行。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`controller.abort();

// 事件触发，signal.aborted 变为 true
alert(signal.aborted); // true
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"fetch"})," 中封装了 ",t.jsx(e.code,{children:"signal"})," 的事件监听，因此它可以很好的与 ",t.jsx(e.code,{children:"AbortController"})," 对象一起工作。"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"fetch"})," 的第二个参数 option 可以接收 ",t.jsx(e.code,{children:"signal"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`fetch(url, {
  signal: controller.signal
});
`})}),`
`,t.jsxs(e.p,{children:["当我们在任意地方调用 ",t.jsx(e.code,{children:"abort"})," 时，对应的请求就会被取消"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`controller.abort();
`})}),`
`,t.jsx(e.p,{children:"借助这些基础知识，我们就可以封装一个可以被取消的 promise。"}),`
`,t.jsx(e.h2,{children:"2"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"封装一个新的 api 函数"})}),`
`,t.jsx(e.p,{children:"封装代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`})}),`
`,t.jsxs(e.p,{children:["我这里使用了一个返回结果是一个列表的案例接口。然后将 ",t.jsx(e.code,{children:"abort"})," 函数挂载到返回的 ",t.jsx(e.code,{children:"promise"})," 中"]}),`
`,t.jsxs(e.p,{children:["使用时，只需要调用 ",t.jsx(e.code,{children:"promise.cancel()"})," 就可以取消对应的请求了。"]}),`
`,t.jsx(e.h2,{children:"3"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"结合 react 19 使用"})}),`
`,t.jsx(e.p,{children:"我们接下来要完成右侧案例的演示效果。注意仔细感受一下代码的简洁性。逻辑和之前没有发生任何明显的变化，只是我们需要切换我们新封装的 api 来发送请求。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const [promise, update] = useState(() => fetchListWithCancel(10))
`})}),`
`,t.jsx(e.p,{children:"然后在新的请求发生之前，取消还未完成的请求"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function __inputChange(e) {
  promise.cancel()
  const len = e.target.value.length % 10
  update(fetchListWithCancel(len))
}
`})}),`
`,t.jsx(e.p,{children:"其他的逻辑基本保持不变，完整代码和演示效果请在右侧区域查看。请务必结合调试工具中的网络请求一起观察演示效果。"})]})}function k7(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Ym,{...n})}):Ym(n)}const C7={"App.js":x7,"api.js":g7,"List.jsx":v7,"Input.jsx":b7,"Skeleton.jsx":j7};function _7(){return t.jsx(z,{files:C7,renderArticle:n=>t.jsx(k7,{components:{code:n}})})}const r1=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import Tabs from './Tabs'
import List from './List'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]


export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(() => fetchListWithCancel(5))

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)

    promise.cancel()
    const len = Math.floor(Math.random() * 10)
    update(fetchListWithCancel(len))
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,a1=`export const fetchList = async (number) => {
  const res = await fetch(\`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,l1=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,i1=`import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('我会执行几次呢')
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,c1=`function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({tabs, onSwitch}) {
  return (
    <div>
      <div className="hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
          onChange={(e) => onSwitch(e.target.selectedIndex)}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab, i) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                onSwitch(i)
              }}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`;function A7(...n){return n.filter(Boolean).join(" ")}function o1({tabs:n,onSwitch:e}){return t.jsxs("div",{children:[t.jsxs("div",{className:"hidden",children:[t.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),t.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:n.find(s=>s.current).name,onChange:s=>e(s.target.selectedIndex),children:n.map(s=>t.jsx("option",{children:s.name},s.name))})]}),t.jsx("div",{className:"block",children:t.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:n.map((s,r)=>t.jsx("a",{href:s.href,className:A7(s.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":s.current?"page":void 0,onClick:a=>{a.preventDefault(),e(r)},children:s.name},s.name))})})]})}const Fa=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function $7(){const[n,e]=u.useState(0);function s(r){Fa[n].current=!1,Fa[r].current=!0,e(r)}return t.jsxs("div",{children:[t.jsx(o1,{tabs:Fa,onSwitch:s}),t.jsxs("div",{className:"mt-4 text-gray-500",children:["当前选中：",Fa[n].name]})]})}function Im(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"Tab 切换的过程中，请求接口也是日常开发中非常常见的交互方式。不过 tabs 切换的情况比较多，很考验开发者的个人能力。我们准备了三个不同的场景以供大家直接学习。"}),`
`,t.jsxs(e.p,{children:["第一个案例比较简单。是",t.jsx(e.strong,{children:"多对一"}),"：多个 tab 按钮，对应一个组件。具体表现为按钮切换时，该组件本身重新获取数据渲染。演示效果如右侧案例所示。"]}),`
`,t.jsxs(e.p,{children:["首先，我们需要先封装一个 Tab 切换按钮。具体的封装代码可以查看右面的 ",t.jsx(e.code,{children:"Tabs.jsx"})," 文件。"]}),`
`,t.jsx(e.p,{children:"然后使用一下，检测一下效果"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {useState, Suspense} from 'react'
import Tabs from './Tabs'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]

export default function Example() {
  const [current, switchToSelected] = useState(0)

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />
      <div className='mt-4 text-gray-500'>
        当前选中：{tabs[current].name}
      </div>
    </div>
  )
}
`})}),`
`,t.jsx(_,{children:t.jsx($7,{})}),`
`,t.jsx(e.p,{children:"这里需要注意观察的是，案例中我们对 tabs 数据和 current 当前选中项的一个管理方式。在使用过程中，我们可以尽量减少对于 state 的使用，能不用就不用。但是许多人在开发过程中会非常依赖于 state，管理不善时，可能会导致数据的大量冗余 re-render 产生。这里当我们切换点击时，会修改两个数据，但是最终只有一个 state 变化。"}),`
`,t.jsx(e.p,{children:"接下来的事情就比较简单了，跟之前的案例一样，只需要在切换时，通过改变 promise 的方式请求接口即可。"}),`
`,t.jsx(e.p,{children:"所以我们需要声明一个新的状态 promise"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const [promise, update] = useState(() => fetchListWithCancel(5))
`})}),`
`,t.jsx(e.p,{children:"然后再点击时重新请求并修改 state promise 即可。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-diff",children:`function __handler(index) {
  tabs[current].current = false
  tabs[index].current = true
  switchToSelected(index)

+ promise.cancel()
+ const len = Math.floor(Math.random() * 10)
+ update(fetchListWithCancel(len))
}
`})}),`
`,t.jsx(e.p,{children:"这里我们依然需要取消上一次请求是因为可能有的使用者会连续快速切换，我们可以通过取消为完成请求的方式让页面响应变得合理与流畅。完整的案例请看右侧区域。"})]})}function M7(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Im,{...n})}):Im(n)}document.documentElement.style.fontSize="14px";function R7(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Fm=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function L7({promise:n}){const{results:e}=u.use(n);return console.log("我会执行几次呢"),t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}const ac=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function d1(){const[n,e]=u.useState(0),[s,r]=u.useState(()=>Fm(5));function a(l){ac[n].current=!1,ac[l].current=!0,e(l),s.cancel();const i=Math.floor(Math.random()*10);r(Fm(i))}return t.jsxs("div",{children:[t.jsx(o1,{tabs:ac,onSwitch:a}),t.jsx(u.Suspense,{fallback:t.jsx(R7,{}),children:t.jsx(L7,{promise:s})})]})}const E7={"App.js":r1,"api.js":a1,"List.jsx":i1,"Tabs.jsx":c1,"Skeleton.jsx":l1};function T7(){return t.jsx(z,{files:E7,renderArticle:n=>t.jsx(M7,{components:{code:n}}),caseRender:t.jsx(d1,{})})}const D7=`import {useState, Suspense, useRef} from 'react'
import Tabs from './Tabs'

import Account from './Account'
import Search from './Search'

const tabs = [
  { name: 'My Account', href: '#', current: true, element: Account },
  { name: 'Company', href: '#', current: false, element: Account },
  { name: 'Team Members', href: '#', current: false, element: Account },
  { name: 'Billing', href: '#', current: false, element: Search },
]

export default function Example() {
  const [current, switchToSelected] = useState(0)
  const map = useRef(new Set([tabs[current]]))

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true

    const item = tabs[index]
    if (!map.current.has(item)) {
      map.current.add(item)
    }

    switchToSelected(index)
  }

  let arr = Array.from(map.current)

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      {arr.map((item, index) => (
        <item.element selected={item.current} key={\`z-\${index}\`}/>
      ))}
    </div>
  )
}
`,O7=`export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,B7=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,z7=`import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,U7=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,H7=`import clsx from 'clsx'
import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'

export default function Account(props) {
  const [promise, update] = useState(() => fetchListWithCancel(5))

  const cls = clsx({
    ['hidden']: !props.selected
  })

  return (
    <div className={cls}>
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,q7=`import clsx from 'clsx'
import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function Search(props) {
  const [promise, update] = useState(() => fetchListWithCancel(10))

  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 10
    update(fetchListWithCancel(len))
  }

  const cls = clsx('pt-4', {
    ['hidden']: !props.selected
  })

  return (
    <div className={cls}>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,V7=`function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({tabs, onSwitch}) {
  return (
    <div>
      <div className="hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
          onChange={(e) => onSwitch(e.target.selectedIndex)}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab, i) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={() => onSwitch(i)}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`;function X7(...n){return n.filter(Boolean).join(" ")}function Z7({tabs:n,onSwitch:e}){return t.jsxs("div",{children:[t.jsxs("div",{className:"hidden",children:[t.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),t.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:n.find(s=>s.current).name,onChange:s=>e(s.target.selectedIndex),children:n.map(s=>t.jsx("option",{children:s.name},s.name))})]}),t.jsx("div",{className:"block",children:t.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:n.map((s,r)=>t.jsx("a",{href:s.href,className:X7(s.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":s.current?"page":void 0,onClick:()=>e(r),children:s.name},s.name))})})]})}document.documentElement.style.fontSize="14px";function u1(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const ho=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function m1({promise:n}){const{results:e}=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function lc(n){const[e,s]=u.useState(()=>ho(5)),r=U({hidden:!n.selected});return t.jsx("div",{className:r,children:t.jsx(u.Suspense,{fallback:t.jsx(u1,{}),children:t.jsx(m1,{promise:e})})})}function G7(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function Y7(n){const[e,s]=u.useState(()=>ho(10));function r(l){e.cancel();const i=l.target.value.length%10;s(ho(i))}const a=U("pt-4",{hidden:!n.selected});return t.jsxs("div",{className:a,children:[t.jsx(G7,{onChange:r,placeholder:"Enter something"}),t.jsx(u.Suspense,{fallback:t.jsx(u1,{}),children:t.jsx(m1,{promise:e})})]})}function I7(){const[n,e]=u.useState(0),s=u.useRef([{name:"My Account",href:"#",current:!0,element:lc},{name:"Company",href:"#",current:!1,element:lc},{name:"Team Members",href:"#",current:!1,element:lc},{name:"Billing",href:"#",current:!1,element:Y7}]),r=u.useRef(new Set([s.current[n]]));function a(i){s.current[n].current=!1,s.current[i].current=!0;const c=s.current[i];r.current.has(c)||r.current.add(c),e(i)}let l=Array.from(r.current);return t.jsxs("div",{children:[t.jsx(Z7,{tabs:s.current,onSwitch:a}),l.map((i,c)=>t.jsx(i.element,{selected:i.current},`z-${c}`))]})}function Pm(n){const e={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(I7,{})}),`
`,t.jsx(e.p,{children:"这个案例的实现就稍微有点难度了。我们需要满足如下条件"}),`
`,t.jsxs(e.ol,{children:[`
`,t.jsx(e.li,{children:"1、初始化时，只渲染默认的当前列页，而不会渲染其他任何未被点击过的页面/组件。"}),`
`,t.jsx(e.li,{children:"2、渲染过的页面，在切换离开之后，需要缓存下来，下一次切换回事来直接显示即可，效果类似于 keep-alive"}),`
`,t.jsx(e.li,{children:"3、每个 tab 按钮，对应一个页面，按钮与页面之间应该是 1 对 1 的关系"}),`
`]}),`
`,t.jsx(e.p,{children:"首先，我们应该设计 tabs 的格式如下。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const tabs = [
  { name: 'My Account', href: '#', current: true, element: Account },
  { name: 'Company', href: '#', current: false, element: Account },
  { name: 'Team Members', href: '#', current: false, element: Account },
  { name: 'Billing', href: '#', current: false, element: Search },
]
`})}),`
`,t.jsx(e.p,{children:"由于是一对一的关系，因此每个项可以自由对应需求所需要的页面组件"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"这里需要注意的是，虽然有几个对应的组件名是一样的，但是他们最终的实例是不同的"}),`
`]}),`
`,t.jsx(e.p,{children:"接下来比较难的是，如何设计数据来确保同时满足上面的几个需求。"}),`
`,t.jsx(e.p,{children:"我的方案如下"}),`
`,t.jsx(e.p,{children:"首先，定义一个 map 对象，用于存储已经渲染过的页面。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const map = useRef(new Set([tabs[current]]))
`})}),`
`,t.jsx(e.p,{children:"每次点击时，将页面案例加进来，但是在这之前，需要判断是否已经存在"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function __handler(index) {
  tabs[current].current = false
  tabs[index].current = true

  const item = tabs[index]
  if (!map.current.has(item)) {
    map.current.add(item)
  }

  switchToSelected(index)
}
`})}),`
`,t.jsx(e.p,{children:"最后遍历 map 中的数据将页面渲染出来即可。"}),`
`,t.jsx(e.p,{children:"这里需要注意的是，由于页面是 1 对 1 的关系，因此，每个页面的数据单独维护即可。"}),`
`,t.jsx(e.p,{children:"例如其中一个组件代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import clsx from 'clsx'
import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'

export default function Account(props) {
  const [promise, update] = useState(() => fetchListWithCancel(5))

  const cls = clsx({
    ['hidden']: !props.selected
  })

  return (
    <div className={cls}>
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`})}),`
`,t.jsxs(e.p,{children:["这里我们还要考虑一个布局的问题。只能当前选中的页面显示出来。因此我们这里通过利用 ",t.jsx(e.code,{children:"display"})," 的值来控制。传入一个 ",t.jsx(e.code,{children:"selected"})," 来判断是否需要将其值从 ",t.jsx(e.code,{children:"block"})," 改变为 ",t.jsx(e.code,{children:"none"})]}),`
`,t.jsx(e.p,{children:"完整代码与案例演示请看右侧区域。"})]})}function F7(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Pm,{...n})}):Pm(n)}const P7={"App.js":D7,"Account.jsx":H7,"Search.jsx":q7,"api.js":O7,"Tabs.jsx":V7,"List.jsx":z7,"Input.jsx":U7,"Skeleton.jsx":B7};function Q7(){return t.jsx(z,{files:P7,renderArticle:n=>t.jsx(F7,{components:{code:n}})})}const J7=`import {useState, Suspense, useCallback} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import Tabs from './Tabs'
import List from './List'

const config = [
  { name: 'Applied', href: '#', count: 0, current: true },
  { name: 'Phone Screening', href: '#', count: 0, current: false },
  { name: 'Interview', href: '#', count: 0, current: false }
]

export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const [tabs, changeTabs] = useState(config)

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)
    changeTabs([...tabs])

    promise.cancel()
    const len = Math.floor(Math.random() * 10)
    update(fetchListWithCancel(len))
  }

  function __complete(number) {
    tabs[current].count = number
    changeTabs([...tabs])
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <List promise={promise} onComplete={__complete} />
      </Suspense>
    </div>
  )
}
`,W7=`export const fetchList = async (number) => {
  const res = await fetch(\`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      localStorage.setItem('modal', 'xxx')
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}

`,K7=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,e6=`import { use, useEffect } from 'react';

function CurrentList({promise, onComplete}) {
  const {results} = use(promise)

  useEffect(() => {
    onComplete && onComplete(results.length)
  }, [results.length]);

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CurrentList
`,n6=`function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({tabs, onSwitch}) {
  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <a
              key={tab.name}
              href="#"
              onClick={() => onSwitch(index)}
              className={classNames(
                tab.current
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                'flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
              {tab.count ? (
                <span
                  className={classNames(
                    tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
                    'ml-3 rounded-full px-2.5 py-0.5 text-xs font-medium inline-block',
                  )}
                >
                  {tab.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`;document.documentElement.style.fontSize="14px";function t6(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Qm=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{localStorage.setItem("modal","xxx"),a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function Jm(...n){return n.filter(Boolean).join(" ")}function s6({tabs:n,onSwitch:e}){return t.jsx("div",{children:t.jsx("div",{className:"border-b border-gray-200",children:t.jsx("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:n.map((s,r)=>t.jsxs("a",{href:"#",onClick:()=>e(r),className:Jm(s.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700","flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"),"aria-current":s.current?"page":void 0,children:[s.name,s.count?t.jsx("span",{className:Jm(s.current?"bg-indigo-100 text-indigo-600":"bg-gray-100 text-gray-900","ml-3 rounded-full px-2.5 py-0.5 text-xs font-medium inline-block"),children:s.count}):null]},s.name))})})})}function r6({promise:n,onComplete:e}){const{results:s}=u.use(n);return u.useEffect(()=>{e&&e(s.length)},[s.length]),t.jsx("div",{children:s.map((r,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:r.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:r.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}const a6=[{name:"Applied",href:"#",count:0,current:!0},{name:"Phone Screening",href:"#",count:0,current:!1},{name:"Interview",href:"#",count:0,current:!1},{name:"Offer",href:"#",count:0,current:!1},{name:"Disqualified",href:"#",count:0,current:!1}];function l6(){const[n,e]=u.useState(0),[s,r]=u.useState(()=>Qm(5)),[a,l]=u.useState(a6);function i(o){a.forEach(m=>{m.current=!1}),a[o].current=!0,e(o),l([...a]),s.cancel();const d=Math.floor(Math.random()*10);r(Qm(d))}function c(o){a[n].count=o,l([...a])}return t.jsxs("div",{children:[t.jsx(s6,{tabs:a,onSwitch:i}),t.jsx(u.Suspense,{fallback:t.jsx(t6,{}),children:t.jsx(r6,{promise:s,onComplete:c})})]})}function Wm(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(l6,{})}),`
`,t.jsx(e.p,{children:"有的时候我们需要从 Suspense 包裹的子组件中获取数据。"}),`
`,t.jsx(e.p,{children:"注意看这个案例。我设计了一个随机数量的请求，每一次请求返回随机数量的列表，Tabs 中的按钮旁边需要显示当前列表的长度。"}),`
`,t.jsx(e.p,{children:"但是此时，和将列表数据直接维护到 state 中不同，此时我们在 state 中维护的是 promise ，然后我们使用 use 从 promise 中读取数据。所以只有子组件使用 use 读取才能获得列表的长度。这个时候，我们如何在保持现有解决方案的前提之下，在父组件中拿到列表的数据呢？"}),`
`,t.jsx(e.p,{children:"首先父组件要拿到子组件的数据，我们可以给子组件传一个事件进去，让子组件在得到数据时，执行这个事件回调。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`<Suspense fallback={<Skeleton />}>
  <List promise={promise} onComplete={__complete} />
</Suspense>
`})}),`
`,t.jsxs(e.p,{children:["子组件在执行 ",t.jsx(e.code,{children:"onComplete"})," 的时候，把父组件需要的数据作为参数返回出来即可"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function CurrentList({promise, onComplete}) {
  const {results} = use(promise)
  onComplete && onComplete(results.length)

  return (...)
}
`})}),`
`,t.jsxs(e.p,{children:["这里我们需要考虑的一个问题就是 ",t.jsx(e.code,{children:"onComplete"})," 的执行时机要怎么比较合适。因为如果 onComplete 中执行逻辑在父组件中，子组件无法控制，因此父组件的执行逻辑有可能会导致子组件re-render，因此我们可以简单使用 useEffect 来防止 onComplete 反复执行"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-diff",children:`function CurrentList({promise, onComplete}) {
  const {results} = use(promise)
+ useEffect(() => {
    onComplete && onComplete(results.length)
+ }, [results.length]);

  return (...)
}
`})}),`
`,t.jsx(e.p,{children:"这样处理之后，我们就可以轻松在父组件中，无压力拿到子组件中的数据了。父组件的代码示例如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function __complete(number) {
  tabs[current].count = number
  changeTabs([...tabs])
}
`})}),`
`,t.jsx(e.p,{children:"完整代码与案例演示查看右侧区域。"})]})}function i6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Wm,{...n})}):Wm(n)}const c6={"App.js":J7,"api.js":W7,"List.jsx":e6,"Tabs.jsx":n6,"Skeleton.jsx":K7};function o6(){return t.jsx(z,{files:c6,renderArticle:n=>t.jsx(i6,{components:{code:n}})})}const d6=`import {use, useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchList} from './api'
import List from './List'

export default function Example() {
  const [promise, update] = useState(() => fetchList(3))
  return (
    <div>
      <Suspense fallback={<Skeleton type='card' />}>
        <AccountUse promise={promise} />
      </Suspense>
    </div>
  )
}

function AccountUse(props) {
  const {results} = use(props.promise)
  const [promise, update] = useState(() => fetchList(5))
  return (
    <div className='border border-blue-100 shadow rounded-md p-4 w-full mt-4'>
      <div className='flex space-x-4'>
        {results.map((item, index) => (
          <div className="flex-1 overflow-hidden" key={\`z-\${index}\`}>
            <div className='rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center' style={{backgroundImage: \`url(\${item.picture.large})\`}}></div>
            <div className="mt-4 font-bold">{item.name.last}</div>
            <div className="mt-1 text-gray-400 text-sm">{item.email}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-gray-400 text-sm">Account users</div>
      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}
`,u6=`export const fetchList = async (number) => {
  const res = await fetch(\`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,m6=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  if (props.type === 'card') {
    return (
      <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
        <div className="animate-pulse flex space-x-4 items-center">
          {[1, 2, 3].map((_, i) => (
            <div className="flex-1" key={\`z-\${i}\`}>
              <div className='rounded-md bg-slate-200  h-32'></div>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-2">
                <div className="h-2 bg-slate-200 rounded col-span-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (props.type === 'header') {
    return (
      <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
        <div className="animate-pulse flex space-x-4 items-center">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,p6=`import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`;document.documentElement.style.fontSize="14px";function p1(n){return n.type==="card"?t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsx("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3].map((e,s)=>t.jsxs("div",{className:"flex-1",children:[t.jsx("div",{className:"rounded-md bg-slate-200  h-32"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"grid grid-cols-4 gap-4 mt-2",children:t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-3"})})]},`z-${s}`))})}):n.type==="header"?t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})}):t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const h1=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json();function h6({promise:n}){const{results:e}=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function f6(){const[n,e]=u.useState(()=>h1(3));return t.jsx("div",{children:t.jsx(u.Suspense,{fallback:t.jsx(p1,{type:"card"}),children:t.jsx(x6,{promise:n})})})}function x6(n){const{results:e}=u.use(n.promise),[s,r]=u.useState(()=>h1(5));return t.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[t.jsx("div",{className:"flex space-x-4",children:e.map((a,l)=>t.jsxs("div",{className:"flex-1 overflow-hidden",children:[t.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${a.picture.large})`}}),t.jsx("div",{className:"mt-4 font-bold",children:a.name.last}),t.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:a.email})]},`z-${l}`))}),t.jsx("div",{className:"mt-8 text-gray-400 text-sm",children:"Account users"}),t.jsx(u.Suspense,{fallback:t.jsx(p1,{}),children:t.jsx(h6,{promise:s})})]})}function g6(){return t.jsx("div",{children:t.jsx(f6,{})})}function Km(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(g6,{})}),`
`,t.jsxs(e.p,{children:["如案例演示的这样，有的时候，我们需要这种",t.jsx(e.strong,{children:"瀑布流式"}),"的接口请求交互方式。也就是上一个模块请求成功之后，再请求下一个模块。"]}),`
`,t.jsx(e.p,{children:"我们可以利用 Suspense 的嵌套来轻松做到这个事情。"}),`
`,t.jsx(e.p,{children:"我们可以在父组件中，通过一个 promise 向子组件传递数据"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`export default function Example() {
  const [promise, update] = useState(() => fetchList(3))
  return (
    <div>

      <Suspense fallback={<Skeleton type='card' />}>
        <AccountUse promise={promise} />
      </Suspense>
    </div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"然后在子组件 AccountUse 中，使用同样的方式向它的子组件传递数据"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function AccountUse(props) {
  const {results} = use(props.promise)
  const [promise, update] = useState(() => fetchList(5))
  return (
    <div className='border border-blue-100 shadow rounded-md p-4 w-full mt-4'>
      <div>...</div>

      <div className="mt-8 text-gray-400 text-sm">Account users</div>
      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"最后在之后的子组件 List 中仅使用 use 获取数据即可"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          ...
        </div>
      ))}
    </div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"这里需要注意的是，当你决定这样用时，往往后请求的接口都会依赖先请求的结果，如果并没有明确的先后依赖关系，我们并不建议采用这种交互方案。"}),`
`,t.jsx(e.p,{children:"完整的代码和案例演示看右侧区域。"})]})}function j6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Km,{...n})}):Km(n)}const v6={"App.js":d6,"api.js":u6,"List.jsx":p6,"Skeleton.jsx":m6};function b6(){return t.jsx(z,{files:v6,renderArticle:n=>t.jsx(j6,{components:{code:n}})})}const y6=`import React, {useState, Suspense} from 'react'
import Userinfo from './Userinfo'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'
import use from './use'

export default function Demo01() {
  const [promise, updatePromise] = useState(() => [getMessage()])

  function __handler() {
    updatePromise([...promise, getMessage()])
  }

  return (
    <>
      <div className='text-right mb-4 flex justify-between items-center'>
        <div className='text-sm text-gray-400'>当前运行案例版本：react@16.14.0</div>
        <Button onClick={__handler}>新增数据</Button>
      </div>
      {promise.map((item, index) => (
        <Suspense fallback={<Skeleton />} key={\`hello \${index}\`}>
          <User promise={item} index={index} />
        </Suspense>
      ))}
    </>
  )
}

function User(props) {
  const result = use(props.promise)
  return (
    <Userinfo index={props.index} username={result.id} message={result.value} />
  )
}
`,N6=`import React from 'react';
import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

document.documentElement.style.fontSize = '14px'
// 本组件只是一个简单的 UI 组件，学习时无需多过关注

export default function Button(props) {
  const {className, primary, danger, sm, lg, signal, success, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition relative'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-2 px-4'

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,
    ['text-sky-500 bg-white border border-sky-300 hover:bg-sky-50']: signal,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }, className))

  return (
    <button className={cls} {...other}>
      {props.children}
      {signal && (
        <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      )}
    </button>
  )
}
`,w6=`const random = [
  'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  'Whether you work on your own or with thousands of other developers, using React feels the same.',
  'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
  'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i],
    id: getUuid()
  }
}

function getUuid() {
  var s = [];
  var hexDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (var i = 0; i < 16; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }

  s[8] = "-"
  let uuid = s.join("")
  return uuid
}
`,S6=`import React from 'react';
export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full my-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,k6=`import React from 'react'

const Userinfo = (props) => {
  const message = unescape(props.message.replace(/\\\\u/gi,'%u'));
  const username = unescape((props.username || '').replace(/\\\\u/gi,'%u'));
  const index = props.index || 0;

  let base = 'flex border border-blue-100 p-4 rounded-md my-4 items-start'

  return (
    <div className={base}>
      <img className='w-10' src={\`https://api.dicebear.com/7.x/miniavs/svg?seed=\${index}\`} alt='' />
      <div className='flex-1 ml-3'>
        <div>{username || 'no name'}</div>
        <div className='text-sm mt-1 text-gray-600'>{message}</div>
      </div>
    </div>
  )
}

export default Userinfo
`,C6=`import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
`,_6=`export default function use(promise) {
  if (promise.status === 'fulfilled') {
    return promise.value
  } else if (promise.status === 'rejected') {
    throw promise.reason
  } else if (promise.status === 'pending') {
    throw promise
  } else {
    promise.status = 'pending'
    promise.then(result => {
      promise.status = 'fulfilled'
      promise.value = result
    }, reason => {
      promise.status = 'rejected'
      promise.reason = reason
    })
    throw promise
  }
}
`;function ep(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"可以看到，use + Suspense 的结合，可以极大的简化我们的开发代码，在开发体验上的提升是非常明显的。但是，如果由于客观原因，我们的项目无法升级到 React 19，那么我们就无法享受这种开发体验带来的提升了吗？"}),`
`,t.jsx(e.p,{children:"当然不是。早在 React 16 的后期版本中，就提供了对 Suspense 的支持，因此，我们只需要在这个基础之上，自己定义一个 use 方法，去读取 promise 中的值就可以实现我们前面所有章节的效果了。"}),`
`,t.jsx(e.p,{children:"自定义的代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`export default function use(promise) {
  if (promise.status === 'fulfilled') {
    return promise.value
  } else if (promise.status === 'rejected') {
    throw promise.reason
  } else if (promise.status === 'pending') {
    throw promise
  } else {
    promise.status = 'pending'
    promise.then(result => {
      promise.status = 'fulfilled'
      promise.value = result
    }, reason => {
      promise.status = 'rejected'
      promise.reason = reason
    })
    throw promise
  }
}
`})}),`
`,t.jsx(e.p,{children:"如果你要理解这段代码，可以结合我们前面专门分析过的 Suspense 的运行原理来理解。"}),`
`,t.jsx(e.p,{children:"定义好之后，我们原本需要从 React 中引入的 use 方法，从这个模块里引入就可以了"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-diff",children:`- import React, {use} from 'react'
+ import use from './use'
`})}),`
`,t.jsxs(e.p,{children:["在右侧代码中，我提供了一个完整的案例来使用 use，右侧案例的 React 运行版本是 ",t.jsx(e.code,{children:"react@16.14.0"})]})]})}function A6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ep,{...n})}):ep(n)}document.documentElement.style.fontSize="14px";var $6=new Headers;$6.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");const M6={"App.js":y6,"index.js":C6,"api.js":w6,"use.js":_6,"Userinfo.jsx":k6,"Button.jsx":N6,"Skeleton.jsx":S6};function R6(){return t.jsx(z,{files:M6,renderArticle:n=>t.jsx(A6,{components:{code:n}})})}const L6=`import { useRef } from 'react';
import Button from 'components/Button'
import Post from './Post'

export default function App() {
  const post = useRef(null);

  function handleClick() {
    post.current.scrollAndFocusAddComment();
  }

  return (
    <>
      <Button onClick={handleClick} primary>Write a comment</Button>
      <Post ref={post} />
    </>
  );
}

`,E6=`import { useRef, useImperativeHandle } from 'react';
import Input from './Input'

export default function Post({ref}) {
  const commentsRef = useRef(null);
  const addCommentRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollAndFocusAddComment() {
        commentsRef.current.scrollToBottom();
        addCommentRef.current.focus();
      }
    };
  }, []);

  return (
    <>
      <article>
        <p className='my-5'>Welcome to my Blog!</p>
      </article>
      <CommentList ref={commentsRef} />
      <AddComment ref={addCommentRef} />
    </>
  );
}


const CommentList = ({ref}) => {
  const divRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollToBottom() {
        const node = divRef.current;
        node.scrollTop = node.scrollHeight;
      }
    };
  }, []);

  let comments = [];
  for (let i = 0; i < 50; i++) {
    comments.push(<p key={i}>Comment #{i}</p>);
  }

  return (
    <div className="border p-4 rounded h-32 overflow-y-auto" ref={divRef}>
      {comments}
    </div>
  );
};


function AddComment(props) {
  return (
    <Input placeholder="Add comment..." ref={props.ref} className="mt-4" />
  )
}
`,T6=`import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

export default function Input(props) {
  const {ref, className, ...other} = props
  const base = 'flex items-center border px-2 rounded-md text-gray-500'
  const cls = clsx(base, className)
  return (
    <div className={twMerge(cls)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        ref={ref}
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`;function D6(){const n=u.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx("input",{ref:n,type:"text",className:"border p-2 rounded-md flex-1"}),t.jsx("button",{onClick:()=>n.current.focus(),className:"ml-3",children:"点击获取焦"})]})}function zd(n){const{ref:e,className:s,...r}=n,l=U("flex items-center border px-2 rounded-md text-gray-500",s);return t.jsxs("div",{className:He(l),children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{ref:e,className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...r})]})}function O6(){const n=u.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx(zd,{ref:n,type:"text",className:"flex-1"}),t.jsx("button",{onClick:()=>n.current.focus(),className:"ml-3",children:"点击获取焦"})]})}function B6(){const n=u.useRef(null);function e(){n.current.scrollAndFocusAddComment()}return t.jsxs(t.Fragment,{children:[t.jsx(L,{onClick:e,primary:!0,children:"Write a comment"}),t.jsx(z6,{ref:n})]})}const z6=({ref:n})=>{const e=u.useRef(null),s=u.useRef(null);return u.useImperativeHandle(n,()=>({scrollAndFocusAddComment(){e.current.scrollToBottom(),s.current.focus()}}),[]),t.jsxs(t.Fragment,{children:[t.jsx("article",{children:t.jsx("p",{children:"Welcome to my Blog!"})}),t.jsx(U6,{ref:e}),t.jsx(H6,{ref:s})]})},U6=({ref:n})=>{const e=u.useRef(null);u.useImperativeHandle(n,()=>({scrollToBottom(){const r=e.current;r.scrollTop=r.scrollHeight}}),[]);let s=[];for(let r=0;r<50;r++)s.push(t.jsxs("p",{children:["Comment #",r]},r));return t.jsx("div",{className:"border p-4 rounded h-32 overflow-y-auto",ref:e,children:s})};function H6(n){return t.jsx(zd,{placeholder:"Add comment...",ref:n.ref,className:"mt-4"})}function np(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"React 中的控制反转"})}),`
`,t.jsx(e.p,{children:"在面向对象编程中，IOC (Inversion of Control) 控制反转是一个非常高级的概念。它是一种设计理念，在减少对象之间的耦合关系上有非常重要的作用。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"许多前端虽然对其有所耳闻，但说实话，能理解的并不多。甚至很多前端对解耦这个概念都是一头雾水。"}),`
`]}),`
`,t.jsxs(e.p,{children:["IOC 的设计理念里，有三个角色，一个角色是",t.jsx(e.strong,{children:"容器 C"}),"，一个角色是",t.jsx(e.strong,{children:"被控制者 B"}),"，一个角色是",t.jsx(e.strong,{children:"控制者 A"}),"，许多时候，在代码开发中，控制者 A 直接去控制对象 B，会导致 B 被多次实例化而从让代码逻辑变得更加复杂。因此 IOC 的理念是让 控制者 A 失去对 B 的直接控制权，它只能与容器交互。从而将 A 与 B 的直接联系隔离开。"]}),`
`,t.jsx(e.p,{children:"这样说可能会有点绕，但是呢，我们使用一个大家经常使用的代码来说明一下，你一下就能明白。"}),`
`,t.jsxs(e.p,{children:["在实践中，我们可以通过 ref 直接拿到 input 的对象，然后通过调用 ",t.jsx(e.code,{children:".focus"})," 让输入框获取焦点。代码如下"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import { useRef } from 'react'

export default function Demo01() {
  const input = useRef(null)
  return (
    <div className='flex justify-between'>
      <input ref={input} type='text' className='border p-2 rounded-md flex-1' />
      <button
        onClick={() => input.current.focus()}
        className='ml-3'
      >点击获取焦</button>
    </div>
  )
}
`})}),`
`,t.jsx(_,{reload:!0,children:t.jsx(D6,{})}),`
`,t.jsxs(e.p,{children:["但是许多时候，直接使用 ",t.jsx(e.code,{children:"input"})," 标签并不能满足我们的需求，我们需要基于 input 做额外的封装。但是封装之后，我们还是希望能通过调用 ",t.jsx(e.code,{children:".focus"})," 让输入框获取焦点。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const input = useRef(null)
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<Input ref={input} type='text' />
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`input.current.focus()
`})}),`
`,t.jsx(e.p,{children:"封装之后的区别就在于，我们使用封装之后的 Input，就无法直接拿到内部的 input 对象了，但是我们的目标依然是获取 input 对象，然后调用 focus"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`var input = document.getElementById('input')
input.focus()
`})}),`
`,t.jsx(e.p,{children:"但是在模块的划分上，input 元素本身并不属于当前模块/组件，因此，调用 input 方法的行为，其实是属于一种混乱。除非我们不做解耦和封装。"}),`
`,t.jsx(e.p,{children:"因此，在 React 的组件封装中，并不支持直接获取到 input 的引用，而是以一种传入控制器的方式来调用它。在这个场景里:"}),`
`,t.jsx(e.p,{children:`input 对象本身是被调用者
Input 组件是容器
ref 是控制器`}),`
`,t.jsx(e.p,{children:"当前组件利用 ref 来调用 input。从而让代码的解耦变得非常合理。可扩展性也很强。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import { useRef } from 'react'
import Input from './Input'

export default function Demo02() {
  const input = useRef(null)
  return (
    <div className='flex justify-between'>
      <Input ref={input} type='text' className='flex-1' />
      <button
        onClick={() => input.current.focus()}
        className='ml-3'
      >点击获取焦</button>
    </div>
  )
}
`})}),`
`,t.jsx(_,{reload:!0,children:t.jsx(O6,{})}),`
`,t.jsx(e.p,{children:"这个案例中 Input 代码封装逻辑如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

export default function Input(props) {
  const {ref, className, ...other} = props
  const base = 'flex items-center border px-2 rounded-md text-gray-500'
  const cls = clsx(base, className)
  return (
    <div className={twMerge(cls)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        ref={ref}
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["注意一些概念上的区分：",t.jsx(e.strong,{children:"控制反转是一种设计思维"}),"，依赖注入是控制反转的一种具体实现，在 React 中，ref 也是一种控制反转的具体实现"]}),`
`]}),`
`,t.jsx(e.p,{children:"所以不要听着别人吹控制反转就觉得牛，你可能也天天在用"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"2"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"forwardRef 基础知识"})}),`
`,t.jsx(e.p,{children:"forwardRef 能够帮助 React 组件传递 ref。或者说是内部对象控制权的转移与转发。它接收一个组件作为参数"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { forwardRef } from 'react';

function MyInput(props, ref) {
  // ...
}

const InputNumber = forwardRef(MyInput);
`})}),`
`,t.jsx(e.p,{children:"这里需要注意的是，我们需要把 ref 放在自定义组件的参数中"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function MyInput(props, ref) {
  // ...
}
`})}),`
`,t.jsx(e.p,{children:"forwardRef 返回一个可渲染的函数组件。因此，我们可以通过一个简单的案例完善上面的代码"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function MyInput(props, ref) {
  return (
    <label>
      {props.label}
      <input ref={ref} />
    </label>
  );
}

const InputNumber = forwardRef(MyInput)
`})}),`
`,t.jsx(e.p,{children:"所以呢，在 React 的开发中，forwardRef 能够帮助我们实现更良好的解耦，这也是我一直非常喜欢使用 forwardRef 的原因。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"3"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"React19 中，ref 机制更改，forwardRef 被无情抛弃"})}),`
`,t.jsx(e.p,{children:"但是，在 React 19 中，forwardRef 被直接背刺，由于 ref 传递机制的更改，我们可以不用 forwardRef 也能做到同样的事情了。"}),`
`,t.jsx(e.p,{children:"首先，在声明组件时，ref 不再独立成为一个参数，而是作为 props 属性中的一个属性。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`function MyInput(props) {
  return (
    <label>
      {props.label}
      <input ref={props.ref} />
    </label>
  );
}
`})}),`
`,t.jsx(e.p,{children:"其次，代码这样写了之后，就可以直接在父组件中，通过 ref 拿到 input 的控制权"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function Index() {
  const input = useRef(null)

  function __clickHandler() {
    input.current.focus()
  }

  return (
    <div>
      <button onClick={__clickHandler}>
        点击获取焦点
      </button>
      <MyInput ref={input} />
    </div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"在父组件中的使用与以前一样，但是子组件由于不再需要 forwardRef，变得更加简单了。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import { useRef } from 'react'

export default function Demo02() {
  const input = useRef(null)
  return (
    <div className='flex justify-between'>
      <input ref={input} type='text' className='border p-2 rounded-md flex-1' />
      <button
        onClick={() => input.current.focus()}
        className='ml-3'
      >点击获取焦</button>
    </div>
  )
}
`})}),`
`,t.jsx(e.h2,{children:"4"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"useImperativeHandle 与 ref 的新配合"})}),`
`,t.jsx(e.p,{children:"除了直接拿到元素对象本身就已经存在的 ref，我们还可以通过 useImperativeHandle 来自定义 ref 控制器能执行哪些方法"}),`
`,t.jsx(e.p,{children:"useImperativeHandle 接收三个参数，分别是"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"ref:"})," 组件声明时传入的 ref"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"createHandle:"})," 回调函数，需要返回 ref 引用的对象，我们也是在这里重写 ref 引用"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"deps:"})," 依赖项数组，可选。state，props 以及内部定义的其他变量都可以作为依赖项，React 内部会使用 Object.is 来对比依赖项是否发生了变化。依赖项发生变化时，createHandle 会重新执行，ref 引用会更新。如果不传入依赖项，那么每次更新 createHandle 都会重新执行"]}),`
`]}),`
`,t.jsx(e.p,{children:"在官方文档中，有这样一个案例，演示效果如图所示，当我点击按钮时，下方的 input 自动获取焦点，并且中间的滚动条滚动到最底部。"}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"https://files.mdnice.com/user/3925/5454bbf2-46c4-43b8-b3ff-d71e23ad31b0.png",alt:""})}),`
`,t.jsx(e.p,{children:"我们结合新的 ref 传递机制和 useImperativeHandle 一起来分析一下这个案例应该怎么实现。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"思考时，请一定要把封装的思维带入进来，否则可能很难感受到这样做在解耦上的具体好处"}),`
`]}),`
`,t.jsx(e.p,{children:"首先我们先进行组件拆分，将整个内容拆分为按钮部分与信息部分，信息部分主要负责信息的展示与输入，因此页面组件大概长这样"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<>
  <button>Write a comment</button>
  <Post />
</>
`})}),`
`,t.jsx(e.p,{children:"我们期望点击按钮时，信息部分的输入框自动获取焦点，信息部分的信息展示区域能滚动到最底部，因此整个页面组件的代码可以表示为如下："}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { useRef } from 'react';
import Post from './Post.js';

export default function Page() {
  const postRef = useRef(null);

  function handleClick() {
    postRef.current.scrollAndFocusAddComment();
  }

  return (
    <>
      <button onClick={handleClick}>
        Write a comment
      </button>
      <Post ref={postRef} />
    </>
  );
}
`})}),`
`,t.jsx(e.p,{children:"再来思考信息部分。"}),`
`,t.jsx(e.p,{children:"信息部分 Post 又分为两个部分，分别是信息展示部分与信息输入部分。此时这两个部分的 ref 要透传给 Post，并最终再次透传给页面组件。因此他们的组件结构应该长这样"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<>
  <article>
    <p>Welcome to my blog!</p>
  </article>
  <CommentList ref={commentsRef} />
  <AddComment ref={addCommentRef} />
</>
`})}),`
`,t.jsx(e.p,{children:"这个时候，有一个需要考虑的点就是，有两个对象需要被控制，因此我们需要借助 useImperativeHandle 来自定义控制器，并在控制的方法中，整合他们"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`useImperativeHandle(ref, () => {
  return {
    scrollAndFocusAddComment() {
      commentsRef.current.scrollToBottom();
      addCommentRef.current.focus();
    }
  };
}, []);
`})}),`
`,t.jsxs(e.p,{children:["ref 的传递，只需要把它看成是一个普通的 props 即可，因此，",t.jsx(e.code,{children:"Post"})," 组件完整代码如下"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const Post = ({ref}) => {
  const commentsRef = useRef(null);
  const addCommentRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollAndFocusAddComment() {
        commentsRef.current.scrollToBottom();
        addCommentRef.current.focus();
      }
    };
  }, []);

  return (
    <>
      <article>
        <p>Welcome to my blog!</p>
      </article>
      <CommentList ref={commentsRef} />
      <AddComment ref={addCommentRef} />
    </>
  );
}
`})}),`
`,t.jsx(e.p,{children:"同样的道理，我们只需要把 CommentList 与 AddComment 的 ref 传递出来就可以了。"}),`
`,t.jsx(e.p,{children:"所以信息展示部分 CommentList 组件的代码为"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { useRef, useImperativeHandle } from 'react';

const CommentList = ({ref}) => {
  const divRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollToBottom() {
        const node = divRef.current;
        node.scrollTop = node.scrollHeight;
      }
    };
  }, []);

  let comments = [];
  for (let i = 0; i < 50; i++) {
    comments.push(<p key={i}>Comment #{i}</p>);
  }

  return (
    <div className="CommentList" ref={divRef}>
      {comments}
    </div>
  );
};

export default CommentList;
`})}),`
`,t.jsx(e.p,{children:"信息输入部分 AddComment 的代码为"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`function AddComment(props) {
  return (
    <input
      placeholder="Add comment..."
      ref={props.ref}
    />
  )
};

export default AddComment;
`})}),`
`,t.jsx(e.p,{children:"与之前相比，确实要简单了许多。完整的代码与案例演示请戳右侧区域。"}),`
`,t.jsx(e.h2,{children:"5"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"总结"})}),`
`,t.jsx(e.p,{children:"如果你对封装解耦比较重视，那么你一定能明显感受到，ref 与 useImperativeHandle 的结合能发挥的想象空间远不止于此，这种方式给 React 提供了一种扩展 React 能力的重要手段，因此，当你成为 React 高手之后，你一定会非常喜欢使用它们，他们的组合能让 React 项目变得更加多样化。"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(B6,{})})]})}function q6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(np,{...n})}):np(n)}function V6({ref:n}){const e=u.useRef(null),s=u.useRef(null);return u.useImperativeHandle(n,()=>({scrollAndFocusAddComment(){e.current.scrollToBottom(),s.current.focus()}}),[]),t.jsxs(t.Fragment,{children:[t.jsx("article",{children:t.jsx("p",{className:"my-5",children:"Welcome to my Blog!"})}),t.jsx(X6,{ref:e}),t.jsx(Z6,{ref:s})]})}const X6=({ref:n})=>{const e=u.useRef(null);u.useImperativeHandle(n,()=>({scrollToBottom(){const r=e.current;r.scrollTop=r.scrollHeight}}),[]);let s=[];for(let r=0;r<50;r++)s.push(t.jsxs("p",{children:["Comment #",r]},r));return t.jsx("div",{className:"border p-4 rounded h-32 overflow-y-auto",ref:e,children:s})};function Z6(n){return t.jsx(zd,{placeholder:"Add comment...",ref:n.ref,className:"mt-4"})}function G6(){const n=u.useRef(null);function e(){n.current.scrollAndFocusAddComment()}return t.jsxs(t.Fragment,{children:[t.jsx(L,{onClick:e,primary:!0,children:"Write a comment"}),t.jsx(V6,{ref:n})]})}const Y6={"App.js":L6,"Post.jsx":E6,"Button.jsx":Na,"Input.jsx":T6};function I6(){return t.jsx(z,{files:Y6,renderArticle:n=>t.jsx(q6,{components:{code:n}}),caseRender:t.jsx(G6,{})})}const F6=`import { useRef } from 'react'
import Dialog from 'components/Dialog'

export default function App() {
  const dialog = useRef(null)
  return (
    <div className='flex justify-between'>
      <button
        onClick={() => dialog.current.show()}
        className='ml-3'
      >点击我，显示对话框组件</button>
      <Dialog ref={dialog} title='Message For You' onSure={() => dialog.current.close()}>
        <strong className='text-red-500'>React 19</strong> 是全网学习体验最好的小册，没有之一。它能帮助你快速领悟到 React 的独特的开发魅力，你将会感受到更快的学习速度，更高效的开发速度，更专业的开发思维。
        <div className='mt-4'>
          <img src='https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </div>

      </Dialog>
    </div>
  )
}
`,P6=`import { useEffect, useRef, useState, useImperativeHandle } from 'react';
import Modal from '../Modal'
import Button from "components/Button";
import clsx from 'clsx'
import './index.css'

let mousePosition

const getClickPosition = (e) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }
  setTimeout(() => {
    mousePosition = null
  }, 100)
}

document.documentElement.addEventListener('click', getClickPosition, true)

function setTransformOrigin(node, value) {
  var style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
    style[prefix + 'TransformOrigin'] = value;
  });
  style['transformOrigin'] = value;
}

function offset(el) {
  const rect = el.getBoundingClientRect()
  const pos = {
    left: rect.left,
    top: rect.top
  }
  const doc = el.ownerDocument
  const w = doc.defaultView
  pos.left += getScroll(w)
  pos.top += getScroll(w, 1)
  return pos
}

// 1st use window.pageXOffset and window.pageYOffset
// 2nd use window.document.documentElement.scrollLeft/scrollTop
// 3rd use window.document.body.scrollLeft/scrollTop
function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
}

export default function Dialog(props) {
  const {title, onClose, children, onSure, onCancel, ref, footer} = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)
  const wrapperRef = useRef(null)
  const modal = useRef(null)

  useImperativeHandle(ref, () => ({
    show: () => {
      modal.current.show()
      document.body.style.overflow = 'hidden'
      setShow(true)
      setDisplay(true)
    },
    close
  }))

  function close() {
    setShow(false)
    modal.current.close()
    document.body.style.overflow = 'visible'
  }

  function closeHandler() {
    close()
    onClose && onClose()
  }

  function clickHander(e) {
    e.stopPropagation()
  }

  function sureClickHander(e) {
    e.stopPropagation()
    onSure && onSure()
  }

  function animationendHandler() {
    if (!show) {
      setDisplay(false)
    }
  }

  const cls = clsx('dialog-wrapper', {
    in: show,
    out: !show
  })

  useEffect(() => {
    const node = wrapperRef.current
    if (display && node) {
      const elOffset = offset(node)

      if (mousePosition)
        setTransformOrigin(node, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px')
    }
  }, [display])

  return (
    <Modal ref={modal} onClose={closeHandler}>
      {display ? (
        <div ref={wrapperRef} className={cls} onClick={clickHander} onAnimationEnd={animationendHandler}>
          <header className="flex justify-between items-center mb-2">
            <div className="font-bold text-lg leading-6">
              {title}
            </div>
            <div onClick={closeHandler} className='p-2 rounded-md cursor-pointer transition hover:bg-gray-200'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
              </svg>
            </div>
          </header>
          <section className="leading-6">
            {children}
          </section>
          {footer || (
            <footer className="text-end mt-4">
              <Button primary onClick={sureClickHander}>确认</Button>
            </footer>
          )}

        </div>
      ) : null}
    </Modal>
  )
}
`,Q6=`import { useState, useImperativeHandle} from "react";
import s from './index.module.css'
import {createPortal} from 'react-dom'
import clsx from 'clsx'

export default function Modal(props) {
  const {onClose, children, ref} = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)

  useImperativeHandle(ref, () => ({
    show: () => {
      setShow(true);
      document.body.style.overflow = 'hidden'
      setDisplay(true)
    },
    close: () => {
      document.body.style.overflow = 'visible'
      setShow(false)
    }
  }))

  const cls = clsx(s.modal, {
    [s.in]: show,
    [s.out]: !show
  })

  function __animationendHandler() {
    if (!show) setDisplay(false)
  }

  function __closeHandler() {
    setShow(false)
    onClose && onClose()
  }

  if (!display) { return null }

  return (
    <>
      {
        createPortal(
          <div
            className={cls}
            onAnimationEnd={__animationendHandler}
            onClick={__closeHandler}
          >{children}</div>, document.body
        )
      }
    </>
  )
}
`;function J6(){const n=u.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"点击弹窗显示"}),t.jsx(ya,{ref:n,children:t.jsx("div",{className:"bg-white p-4 max-w-xl mt-48 mx-auto rounded",children:"这是一个小弹窗"})})]})}function tp(){const n=u.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"点击我，显示对话框组件"}),t.jsxs(dr,{ref:n,title:"Message For You",onSure:()=>n.current.close(),children:[t.jsx("strong",{className:"text-red-500",children:"React 19"})," 是全网学习体验最好的小册，没有之一。它能帮助你快速领悟到 React 的独特的开发魅力，你将会感受到更快的学习速度，更高效的开发速度，更专业的开发思维。",t.jsx("div",{className:"mt-4",children:t.jsx("img",{src:"https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""})})]})]})}function sp(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(tp,{})}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"基于 ref 封装一个 Madal 组件"})}),`
`,t.jsxs(e.p,{children:["我们的目标是封装一个 Modal 组件，但是我并不需要传入 ",t.jsx(e.code,{children:"show"})," 等状态来控制 Modal 的显示与隐藏。而是使用 ref 来控制。目标代码如下"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import { useRef } from 'react'
import Modal from 'components/Modal'

export default function Task() {
  const modal = useRef(null)
  return (
    <div className='flex justify-between'>
      <button
        onClick={() => modal.current.show()}
        className='ml-3'
      >点击弹窗显示</button>
      <Modal ref={modal}>
        <div className='bg-white p-4 max-w-xl mt-48 mx-auto rounded'>
          这是一个小弹窗
        </div>
      </Modal>
    </div>
  )
}
`})}),`
`,t.jsxs(e.p,{children:["这里的核心是，当我想要让弹窗显示时，只需要调用 ",t.jsx(e.code,{children:"modal.current.show()"})," 即可。这种方式可以有效避免在应用层组件中声明过多的状态来控制一切。"]}),`
`,t.jsx(e.p,{children:"演示案例如下："}),`
`,t.jsx(_,{children:t.jsx(J6,{})}),`
`,t.jsx(e.p,{children:"对于刚接触 React 的新人来说，要实现这种带有动画的显示隐藏效果比较困难。我们这里就简单来拆解一下实现思路。"}),`
`,t.jsxs(e.p,{children:["首先，基于数据驱动 UI 的思路，那么在弹窗组件内部，我们肯定要首先定义一个状态 ",t.jsx(e.code,{children:"show"}),"， 用于控制弹窗的显示与隐藏。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function Modal() {
  const [show, setShow] = useState(false)
  ...
}
`})}),`
`,t.jsx(e.p,{children:"接下来估计部分道友就比较懵了，因为如果只是靠 show 的话，如何与动画结合起来考虑呢？很显然，隐藏的时候，我们最终要删除节点，但是节点删除之后，动画就直接消失了。因此在这个逻辑里，我们要分成两个步骤来处理动画的执行与节点的删除。"}),`
`,t.jsx(e.p,{children:"首先，在弹窗显示时，应该是先将 DOM 节点加入进来，然后再执行入场动画"}),`
`,t.jsx(e.p,{children:"在弹窗消失时，应该是先执行退场动画，然后再将 DOM 节点删除。"}),`
`,t.jsx(e.p,{children:"因此，这个时候，我们还需要引入另外一个状态用于分别控制动画的执行。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function Modal() {
  // 控制动画的执行
  const [show, setShow] = useState(false)
  // 控制节点的增删
  const [display, setDisplay] = useState(false)
  ...
}
`})}),`
`,t.jsxs(e.p,{children:["由于 show 我们约定是用来控制动画的执行，因此，在 css 上，我们根据 ",t.jsx(e.code,{children:"show"})," 的值来确定在 class 中加入入场动画还是退场动画"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const cls = clsx(s.modal, {
  [s.in]: show,
  [s.out]: !show
})
`})}),`
`,t.jsx(e.p,{children:"然后在入场时，首先要新增节点，并且立即执行动画"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`show: () => { setShow(true); setDisplay(true) }
`})}),`
`,t.jsx(e.p,{children:"在退场时，首先要执行动画，并在动画执行结束之后，再执行删除节点的操作"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`close: () => { setShow(false) }

...

function __animationendHandler() {
  if (!show) setDisplay(false)
}
`})}),`
`,t.jsx(e.p,{children:"这样，把逻辑稍微再整理一下，就能够实现动画效果了。"}),`
`,t.jsxs(e.p,{children:["当然，本次案例最核心的重点，还是使用 ",t.jsx(e.code,{children:"useImperativeHandle"})," 把内部的操作提供给外部的控制器 ref"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`useImperativeHandle(ref, () => ({
  show: () => { setShow(true); setDisplay(true) },
  close: () => { setShow(false) }
}))
`})}),`
`,t.jsxs(e.p,{children:["完整代码请看右侧案例中的 ",t.jsx(e.code,{children:"Modal.jsx"})]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"基于 Modal 封装 Dialog 组件"})}),`
`,t.jsx(e.p,{children:"先来点击按钮感受一下演示效果。"}),`
`,t.jsx(_,{children:t.jsx(tp,{})}),`
`,t.jsx(e.p,{children:"这个案例中，比较有难度的是我们记录了鼠标的点击位置，并基于该位置对内部元素进行放大显示。退场时，还要往这个位置进行缩小隐藏。原理并不复杂，只是如果自己实现的话，要稍微花点时间调一下位置的计算。大家在使用时可以直接 copy 这段代码就行，我在兼容性上也做了完整的处理。"}),`
`,t.jsx(e.p,{children:"动画是基于缩放 scale 来实现，这里我们只需要基于鼠标点击的位置和目标位置更改变换中心即可，具体的计算细节请看右侧代码。动画 css 代码如下所示。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`.dialog.in {
  animation-name: dialog-show;
}
.dialog.out {
  animation-name: dialog-hide;
}

@keyframes dialog-show {
  0% {transform: scale(1); opacity: 0;}
  1% { transform: scale(0);}
  100% { transform: scale(1); opacity: 1; }
}
@keyframes dialog-hide {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
}
`})}),`
`,t.jsxs(e.p,{children:["这里我们需要观察的是，ref 的多层传递和使用。在我们使用 ",t.jsx(e.code,{children:"Modal"})," 时，并不需要特别关注 ref 在内部是如何处理的，只需要知道如何使用它即可。我们可以利用这种思维把类似的嵌套逻辑简化成单一逻辑。"]}),`
`,t.jsxs(e.p,{children:["最终的代码请看右侧案例中的 ",t.jsx(e.code,{children:"Dialog.jsx"})]})]})}function W6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(sp,{...n})}):sp(n)}const K6={"App.js":F6,"Dialog.jsx":P6,"Modal.jsx":Q6};function eN(){return t.jsx(z,{files:K6,hidePreview:!0,renderArticle:n=>t.jsx(W6,{components:{code:n}})})}const nN=`import Provider from './context'
import Task from './task'

export default function App() {
  return (
    <Provider>
      <h3 className='font-bold'>Your Task</h3>
      <p className='!text-gray-400'>Here's a task for you!</p>
      <Task />
    </Provider>
  )
}
`,tN=`import {createContext, useState} from 'react'

const def = {
  task: 'TASK-8878',
  content: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
  status: 'Progress',
  priority: 'Medium'
}

export const Context = createContext({})

export default function Provider({ children }) {
  const [task, updateTask] = useState(def)

  return (
    <Context value={{task, updateTask}}>{children}</Context>
  )
}
`,sN=`import { useRef, use } from 'react'
import Editor from './editor'
import {Context} from './context'

export default function Demo03() {
  const editor = useRef(null)
  const {task} = use(Context)

  return (
    <div className='flex items-center border-t pt-4'>
      <div className='font-bold'>{task.task}</div>
      <div className='flex-1 mx-3 line-clamp-1'>{task.content}</div>
      <div className='text-green-500'>{task.status}</div>

      <button
        onClick={() => editor.current.show()}
        className='ml-3'
      >edit</button>
      <Editor ref={editor} title='Editor' />
    </div>
  )
}
`,rN=`import { use } from 'react'
import Dialog from 'components/Dialog'
import {Context} from './context.jsx'

export default function Editor(props) {
  const {ref, ...other} = props
  const {task, updateTask} = use(Context)

  function __inputchange(e) {
    updateTask({
      ...task,
      content: e.target.value,
    })
  }

  return (
    <Dialog ref={ref} {...other} onSure={() => ref.current.close()}>
      <div className='flex items-center'>
        <div className='w-20'>name</div>
        <div className='flex-1 p-2 text-sm font-bold'>{task.task}</div>
      </div>

      <div className='flex items-center mt-4'>
        <div className='w-20'>content</div>
        <input
          value={task.content}
          className='flex-1 border rounded-md p-2 text-sm'
          onChange={__inputchange}
        />
      </div>

      <div className='flex items-center mt-4'>
        <div className='w-20'>status</div>
        <div className='flex-1 p-2 text-sm text-green-500'>{task.status}</div>
      </div>

      <div className='flex items-center mt-4'>
        <div className='w-20'>Priority</div>
        <div className='flex-1 p-2 text-sm text-red-500'>{task.priority}</div>
      </div>
    </Dialog>
  )
}
`,aN={task:"TASK-8878",content:"Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",status:"Progress",priority:"Medium"},Ud=u.createContext({});function lN({children:n}){const[e,s]=u.useState(aN);return t.jsx(Ud,{value:{task:e,updateTask:s},children:n})}function iN(n){const{ref:e,...s}=n,{task:r,updateTask:a}=u.use(Ud);function l(i){a({...r,content:i.target.value})}return t.jsxs(dr,{ref:e,...s,onSure:()=>e.current.close(),children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-20",children:"name"}),t.jsx("div",{className:"flex-1 p-2 text-sm font-bold",children:r.task})]}),t.jsxs("div",{className:"flex items-center mt-4",children:[t.jsx("div",{className:"w-20",children:"content"}),t.jsx("input",{value:r.content,className:"flex-1 border rounded-md p-2 text-sm",onChange:l})]}),t.jsxs("div",{className:"flex items-center mt-4",children:[t.jsx("div",{className:"w-20",children:"status"}),t.jsx("div",{className:"flex-1 p-2 text-sm text-green-500",children:r.status})]}),t.jsxs("div",{className:"flex items-center mt-4",children:[t.jsx("div",{className:"w-20",children:"Priority"}),t.jsx("div",{className:"flex-1 p-2 text-sm text-red-500",children:r.priority})]})]})}function cN(){const n=u.useRef(null),{task:e}=u.use(Ud);return t.jsxs("div",{className:"flex items-center border-t pt-4",children:[t.jsx("div",{className:"font-bold",children:e.task}),t.jsx("div",{className:"flex-1 mx-3 line-clamp-1",children:e.content}),t.jsx("div",{className:"text-green-500",children:e.status}),t.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"edit"}),t.jsx(iN,{ref:n,title:"Editor"})]})}function rp(){return t.jsxs(lN,{children:[t.jsx("h3",{className:"font-bold",children:"Your Task"}),t.jsx("p",{className:"!text-gray-400",children:"Here's a task for you!"}),t.jsx(cN,{})]})}function ap(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(rp,{})}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"改动"})}),`
`,t.jsx(e.p,{children:"与之前的版本相比，在 React19 中，context 有一些细微的变化。主要体现在如下三个方面。"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"1、删除旧版 Context"})}),`
`,t.jsx(e.p,{children:"旧版本的 Context 在 2018 年 10 月（v16.6.0）被废弃。但是为了保证平滑的升级，旧版代码一直沿用到了现在。在 React 19 中，这些代码会正式被删除。旧版本的 Context 仅在使用 contextTypes 和 getChildContext API 的类组件中可用。因此它的删除对现在的项目应该只会造成很小的影响。"}),`
`,t.jsx(e.p,{children:"如果你在项目中仍然使用了旧版 Context，你可以参考下面新旧版本的对比写法进行调整升级。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// 之前
import PropTypes from 'prop-types';

class Parent extends React.Component {
  static childContextTypes = {
    foo: PropTypes.string.isRequired,
  };

  getChildContext() {
    return { foo: 'bar' };
  }

  render() {
    return <Child />;
  }
}

class Child extends React.Component {
  static contextTypes = {
    foo: PropTypes.string.isRequired,
  };

  render() {
    return <div>{this.context.foo}</div>;
  }
}
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// 之后
const FooContext = React.createContext();

class Parent extends React.Component {
  render() {
    return (
      <FooContext value='bar'>
        <Child />
      </FooContext>
    );
  }
}

class Child extends React.Component {
  static contextType = FooContext;

  render() {
    return <div>{this.context}</div>;
  }
}
`})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"2、简化 Provider 的使用"})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const Context = createContext({})
`})}),`
`,t.jsx(e.p,{children:"在以前的使用中，我们需要使用 Context.Provider 来包裹子组件。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`<Context.Provider value={value}>
  {props.children}
</Context.Provider>
`})}),`
`,t.jsx(e.p,{children:"在 React19 中，我们可以直接使用 Context 来代替 Provider，从而让代表变得更加简洁。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`<Context value={value}>
  {props.children}
</Context>
`})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"3、可以使用 use 获取 context"})}),`
`,t.jsx(e.p,{children:"以前的版本中，在组件内部我们使用 useContext 来获取 context 中的状态。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// after
import { use } from 'react';

function MyComponent() {
  const theme = use(ThemeContext);
  // ...
`})}),`
`,t.jsx(e.h2,{children:"2"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"重学一次 context"})}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"https://files.mdnice.com/user/3925/9cb65ddb-71ee-42c2-8062-347ca8312b92.png",alt:""})}),`
`,t.jsxs(e.p,{children:["在 React 中，props 能够帮助我们将数据层层往下传递。但是，当数据传递太多层之后，不仅代码上比较繁琐，理解上也容易混乱不清。因此，我们需要一种能够",t.jsx(e.strong,{children:"跨越组件层级"}),"让直达子组件的数据传递方式，这就是 context."]}),`
`,t.jsxs(e.p,{children:["context 表示组件实例在运行期间能够",t.jsx(e.strong,{children:"直接读取"}),"的状态和内容。他记录了内存中的活跃数据。我们可以将这些数据使用 ",t.jsx(e.code,{children:"useState"})," 来定义。那么，context 中的数据更改，就会驱动所有使用到该数据的 UI 发生变化。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"context 的学习主要分为如下三个部分"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"一、"})," 如何创建 context"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"二、"})," 顶层组件中如何传递数据"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"三、"})," 子组件中如何获取数据"]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"一、如何创建 context"})}),`
`,t.jsxs(e.p,{children:["我们可以使用 ",t.jsx(e.code,{children:"createContext"})," 来创建 context."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const SomeContext = createContext(defaultValue)
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"defaultValue"})," 表示默认值。他可以作为数据的兜底结果。当你无法从 ",t.jsx(e.code,{children:"value"})," 中读取具体的值时，则会使用 ",t.jsx(e.code,{children:"defaultValue"})," 中的值。在代码运行过程中，默认值始终保持不变。如果没有默认值，我们至少需要传入一个 ",t.jsx(e.code,{children:"null"}),"。"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"createContext"})," 执行之后的返回值，就是我们需要的 ",t.jsx(e.code,{children:"context"}),"。"]}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"二、如何传递 context"})}),`
`,t.jsx(e.p,{children:"返回的 context 通常是一系列组件的顶层父组件。因此，在使用时，我们通常会首先定义该顶层父组件。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function Provider(props) {
  const value = {...}
  return (
    <SomeContext value={value}>
      {props.children}
    </SomeContext>
  )
}
export default Provider
`})}),`
`,t.jsxs(e.p,{children:["在该顶层父组件中，我们使用刚才创建的 ",t.jsx(e.code,{children:"context"})," 作为父级标签，把子组件包起来。并作为渲染内容返回。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<SomeContext value={value}>
  {props.children}
</SomeContext>
`})}),`
`,t.jsxs(e.p,{children:["此处的 ",t.jsx(e.code,{children:"value"})," 表示我们在上下文中定义好的值。我们可以自己随意定义你想要传递给子组件的所有数据/方法。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"这些数据/方法通常被多个不同的子组件共同使用。否则我们没必要将数据/方法存储在 context 中。"}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { createContext } from 'react';

const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  // ...
  return (
    <ThemeContext value={theme}>
      <Page />
    </ThemeContext>
  );
}
`})}),`
`,t.jsxs(e.p,{children:["此时，案例中 ",t.jsx(e.code,{children:"Page"})," 组件的所有后代子组件，都可以直接获取 context 中的值，不管层级有多深。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"value 可以是任何类型，你可以根据自己的项目需要设计合适的数据类型。"}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"三、如何获取 context 中的值"})}),`
`,t.jsxs(e.p,{children:["在任意被包裹的子组件中，我们可以使用 ",t.jsx(e.code,{children:"use"})," 来获取 context 中的值。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function Button() {
  // ✅ Recommended way
  const theme = use(ThemeContext);
  return <button className={theme} />;
}
`})}),`
`,t.jsx(e.p,{children:"获取方法非常简单，接下来，我们使用具体的实践案例来分享 context 的使用。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["需要注意，多个 Context ",t.jsx(e.strong,{children:"可以嵌套使用"}),"，只是在实践中，这种场景不算多见。"]}),`
`]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"3"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"案例：在弹窗中更改页面的值"})}),`
`,t.jsx(e.p,{children:"学习了 context 的知识之后，我们来结合之前自定义的弹窗组件，一起来实现一下页面最开始的那个案例。"}),`
`,t.jsx(_,{children:t.jsx(rp,{})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"由于是演示案例，所以数据比较简单，组件层级也不够深，所以大家把重点关注在 context 的技术学习上即可。并非代表真实实践中需要这样使用。"}),`
`]}),`
`,t.jsx(e.p,{children:"首先，我们创建一个 context 文件，该文件中，我们会创建 Context，并在其中定义好需要传递到各子组件中的去的数据和方法"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const def = {
  task: 'TASK-8878',
  content: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
  status: 'Progress',
  priority: 'Medium'
}

export const Context = createContext({})

export default function Provider({ children }) {
  const [task, updateTask] = useState(def)

  return (
    <Context value={{task, updateTask}}>{children}</Context>
  )
}
`})}),`
`,t.jsx(e.p,{children:"然后在父组件中，使用 Provider 包裹需要用到的子组件。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import Provider from './context'
import Task from './task'

export default function App() {
  return (
    <Provider>
      <h3 className='font-bold'>Your Task</h3>
      <p className='!text-gray-400'>Here's a task for you!</p>
      <Task />
    </Provider>
  )
}
`})}),`
`,t.jsxs(e.p,{children:["然后在各子组件中，使用 ",t.jsx(e.code,{children:"use(Context)"})," 获取当前组件需要的数据和方法即可"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import { use } from 'react'
import {Context} from './context.jsx'

export default function Editor(props) {
  const {ref, ...other} = props
  const {task, updateTask} = use(Context)
  ...
`})}),`
`,t.jsx(e.p,{children:"完整的代码请查看右侧代码。"}),`
`,t.jsxs(e.p,{children:["这里比较有意思的一个地方是在 ",t.jsx(e.code,{children:"editor.jsx"})," 文件中，对于 ref 的使用和处理，大家可以留心观察一下。"]})]})}function oN(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ap,{...n})}):ap(n)}const dN={"App.js":nN,"context.jsx":tN,"task.jsx":sN,"editor.jsx":rN};function uN(){return t.jsx(z,{files:dN,hidePreview:!0,renderArticle:n=>t.jsx(oN,{components:{code:n}})})}const mN=`import Provider from './context'
import Total from './Total'
import Card from './Card.jsx'
import './skin.css'

export default function App() {
  return (
    <Provider>
      <Total />
      <Card />
      <Card />
      <Card />
    </Provider>
  )
}
`,pN=`import {createContext, useState} from 'react'

export const Context = createContext({})

export default function Provider({ children }) {
  const [count, incrementer] = useState(0)

  const value = {
    count,
    incrementer
  }

  return (
    <Context value={value}>{children}</Context>
  )
}
`,hN=`import {use, useState} from 'react'
import {Context} from './context.jsx'

export default function Total() {
  const {count} = use(Context)
  return (
    <div>
      <h3 className='font-bold'>Total Switch Count</h3>
      <p className='!text-gray-400'>这里统计的是所有组件的切换次数: {count}</p>
    </div>
  )
}
`,fN=`import {use, useState} from 'react'
import {Context} from './context.jsx'
import Switch from 'components/Switch'

export default function Card() {
  const {count, incrementer} = use(Context)
  const [theme, setTheme] = useState('theme-light')
  const [number, setNumber] = useState(0)

  function onSwitch(bool) {
    setTheme(bool ? 'theme-dark' : 'theme-light')
    setNumber(number + 1)
    incrementer(count + 1)
  }

  return (
    <div className={theme}>
      <div className='context-card p-4 rounded transition'>
        <div className="title font-bold">Canary</div>
        <div className='mt-4'>The useActionState Hook is currently only available in React’s Canary and experimental channels. Learn more about release channels here. </div>
      </div>

      <div className='flex justify-between py-4 items-center'>
        <div className='mr-4 text-green-500'>当前组件切换次数: {number}</div>
        <Switch onChange={onSwitch} />
      </div>
    </div>
  )
}
`,xN=`@layer context_count {
  .theme-dark {
    --text-color: rgba(255, 255, 255, 0.8);
    --bg-color: rgba(0, 0, 0, 0.8);
    --border-color: rgba(0, 0, 0, 0.1);
  }
  .theme-light {
    --text-color: rgba(0, 0, 0, 0.88);
    --bg-color: rgba(0, 0, 0, 0.02);
    --border-color: rgba(0, 0, 0, 0.1);
  }
}
.context-card {
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
}
`,Hd=u.createContext({});function gN({children:n}){const[e,s]=u.useState(0),r={count:e,incrementer:s};return t.jsx(Hd,{value:r,children:n})}function jN(){const{count:n}=u.use(Hd);return t.jsxs("div",{children:[t.jsx("h3",{className:"font-bold",children:"Total Switch Count"}),t.jsxs("p",{className:"!text-gray-400",children:["这里统计的是所有组件的切换次数: ",n]})]})}function vN(n){const{value:e=!1,onChange:s}=n,[r,a]=u.useState(e),l=r?"switch right":"switch left";function i(c){a(c),s&&s(c)}return t.jsx("div",{className:l,onClick:()=>i(!r),children:t.jsx("div",{className:"circle"})})}function ic(){const{count:n,incrementer:e}=u.use(Hd),[s,r]=u.useState("theme-light"),[a,l]=u.useState(0);function i(c){r(c?"theme-dark":"theme-light"),l(a+1),e(n+1)}return t.jsxs("div",{className:s,children:[t.jsxs("div",{className:"context-card p-4 rounded transition",children:[t.jsx("div",{className:"title font-bold",children:"Canary"}),t.jsx("div",{className:"mt-4",children:"The useActionState Hook is currently only available in React’s Canary and experimental channels. Learn more about release channels here. "})]}),t.jsxs("div",{className:"flex justify-between py-4 items-center",children:[t.jsxs("div",{className:"mr-4 text-green-500",children:["当前组件切换次数: ",a]}),t.jsx(vN,{onChange:i})]})]})}function lp(){return t.jsxs(gN,{children:[t.jsx(jN,{}),t.jsx(ic,{}),t.jsx(ic,{}),t.jsx(ic,{})]})}function ip(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(lp,{})}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"皮肤切换方案"})}),`
`,t.jsx(e.p,{children:"利用 CSS 变量来实现皮肤切换，是目前最简单优雅的方案，也是最流行的方案。"}),`
`,t.jsxs(e.p,{children:["CSS 变量又称之为",t.jsx(e.strong,{children:"自定义属性"}),"。他已经在主流浏览器中被普遍支持，我们可以在许多项目中使用该特性。我们熟知的 antd 中就大量运用了自定义属性。"]}),`
`,t.jsxs(e.p,{children:["声明一个自定义属性，需要以 ",t.jsx(e.code,{children:"--"})," 开头，属性值可以是任何有效的 CSS 值。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`element {
  --main-bg-color: brown;
}
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["注意理解这句话：",t.jsx(e.strong,{children:"自定义属性和其他属性一样，是写在规则集之内的。"})," 因此，它的改变，也能触发 transition 动画的执行"]}),`
`]}),`
`,t.jsx(e.p,{children:"并且要注意的是，规则集所指定的选择器定义了自定义属性的可见作用域。通常的最佳实践是定义在根伪类 :root 下，这样就可以在 HTML 文档的任何地方访问到它了"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`:root {
  --main-bg-color: brown;
}
`})}),`
`,t.jsx(e.p,{children:"当然，我也应该根据实践运用灵活选择作用域。"}),`
`,t.jsx(e.p,{children:"在本案例中，我们仅定义一个对当前代码生效的自定义属性。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`@layer context_count {
  .theme-dark {
    --text-color: rgba(255, 255, 255, 0.8);
    --bg-color: rgba(0, 0, 0, 0.8);
    --border-color: rgba(0, 0, 0, 0.1);
  }
  .theme-light {
    --text-color: rgba(0, 0, 0, 0.88);
    --bg-color: rgba(0, 0, 0, 0.02);
    --border-color: rgba(0, 0, 0, 0.1);
  }
}
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"@layer"})," 表示降低当前属性的优先级，从而不影响其他任何元素的样式。哪怕是同名的也不会受到影响，此时我们将与皮肤属性相关的都自定义在主题中，不同的主题对应不同的属性。"]}),`
`,t.jsx(e.p,{children:"然后运用到具体的元素上"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`.context-card {
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
}
`})}),`
`,t.jsx(e.p,{children:"此时，我们只需要构建如下所示的父子关系，然后更改父元素的 className，就可以轻松做到主题切换"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<!-- 所有使用了主题自定义变量的元素，是 \`.theme-light\` 的子元素 -->
<div class='theme-light'>
  <div class='context-card'></div>
</div>
`})}),`
`,t.jsx(e.p,{children:"切换主题时，只需要更改父元素的 class 即可。将其修改成另外一个配置好的主题。"}),`
`,t.jsx(e.p,{children:"有了这些皮肤切换的基础知识之后，我们来结合 context 实现一个皮肤切换并统计切换总次数的案例。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"多个模块皮肤切换总次数统计"})}),`
`,t.jsx(e.p,{children:"首先，我们要创建一个 context，并在 context 中准备好可能会用到的全局数据。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {createContext, useState} from 'react'

export const Context = createContext({})

export default function Provider({ children }) {
  const [count, incrementer] = useState(0)

  const value = {
    count,
    incrementer
  }

  return (
    <Context value={value}>{children}</Context>
  )
}
`})}),`
`,t.jsx(e.p,{children:"然后，我们要在顶层父组件中，使用 Provider 将所有的子组件包裹起来，这里也顺带引入皮肤切换相关的 css 文件"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import Provider from './context'
import Total from './Total'
import Card from './Card.jsx'
import './skin.css'

export default function App() {
  return (
    <Provider>
      <Total />
      <Card />
      <Card />
      <Card />
    </Provider>
  )
}
`})}),`
`,t.jsx(e.p,{children:"最后，我们只需要在子组件中，使用 use 读取对应的数据和方法"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {use, useState} from 'react'
import {Context} from './context.jsx'

export default function Total() {
  const {count} = use(Context)
  return (
    <div>
      <h3 className='font-bold'>Total Switch Count</h3>
      <p className='!text-gray-400'>这里统计的是所有组件的切换次数: {count}</p>
    </div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"演示效果如下，完整代码，请看右侧代码区域。"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(lp,{})}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"2"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"皮肤切换思路的扩展"})}),`
`,t.jsx(e.p,{children:"我们可以把皮肤切换的方案，扩展到类似于 Switch 组件的实现上。在 Switch 组件中，当我们点击时，除了有颜色相关的样式切换之外，还有元素的位置要发生变化，因此，我们只需要额外多设计一个自定义属性就可以用完全一样的思路来实现这个组件了。"}),`
`,t.jsx(e.p,{children:"代码如下，非常的简洁。演示效果请看上面的皮肤切换案例。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`@layer switch {
  .left {
    --bg-color: rgba(0, 0, 0, 0.1);
    --x: 0;
  }

  .right {
    --bg-color: rgba(0, 0, 0, 0.9);
    --x: 24px;
  }
}

.switch {
  @apply p-[1px] border w-14 rounded-full cursor-pointer transition;
  background-color: var(--bg-color);
}

.switch .circle {
  @apply rounded-full w-6 h-6 transition;
  background-color: white;
  transform: translateX(var(--x));
}
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {useState} from 'react'
import './index.css'

export default function Switch(props) {
  const {value = false, onChange} = props
  const [checked, toggle] = useState(value)

  const cls = checked ? 'switch right' : 'switch left'

  function __click(value) {
    toggle(value)
    onChange && onChange(value)
  }

  return (
    <div className={cls} onClick={() => __click(!checked)}>
      <div className='circle'></div>
    </div>
  )
}
`})})]})}function bN(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ip,{...n})}):ip(n)}const yN={"App.js":mN,"context.jsx":pN,"Total.jsx":hN,"Card.jsx":fN,"skin.css":xN};function NN(){return t.jsx(z,{files:yN,hidePreview:!0,renderArticle:n=>t.jsx(bN,{components:{code:n}})})}const wN=`import {useState, Suspense, useDeferredValue} from 'react'
import Spin from './Spin'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function App() {
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const deferred = useDeferredValue(promise)


  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 5
    update(fetchListWithCancel(len))
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <Spin loading={deferred !== promise} type='mask'>
          <List promise={deferred} />
        </Spin>
      </Suspense>
    </div>
  )
}
`,SN=`export const fetchList = async (number) => {
  const res = await fetch(\`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,kN=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,CN=`import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('我会执行几次呢')
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,_N=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,f1=`import {useState, useEffect} from 'react'
import clsx from 'clsx'
import './index.css'

export default function Index(props) {
  const {loading, type = 'icon'} = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    if (loading) { setShow(true); setDisplay(true)
    } else { setShow(false) }
  }, [loading]);

  const base = 'spin flex items-center justify-center top-0 bg-white bg-opacity-50'
  const cls = clsx(base, {
    in: show,
    out: !show
  })

  function __animationendHandler() {
    if (!show) setDisplay(false)
  }

  return (
    <div className='relative'>
      {props.children}
      {display ? (
        <div className={cls} onAnimationEnd={__animationendHandler}>
          {type === 'icon' && (
            <svg className="animate-spin" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24">
              <path d="M249.836 210.77c5.558-3.827 10.73-7.527 15.812-10.695 4.967-3.314 9.807-6.121 14.208-8.785 2.18-1.362 4.374-2.515 6.425-3.673l5.873-3.281c0.945-0.551 1.789-0.953 2.625-1.377l2.425-1.226 4.381-2.233 1.954-1.004 2.219-1.093 3.918-1.924 7.184-3.527c2.883-1.44 5.996-3.272 8.694-5.22 26.969-19.458 33.057-57.094 13.599-84.063-19.458-26.968-57.094-33.057-84.063-13.599l-6.49 4.682-3.54 2.554-2.071 1.499-2.62 1.947-5.824 4.351a7267.87 7267.87 0 0 0-3.193 2.399c-1.091 0.824-2.25 1.676-3.282 2.533a33346.62 33346.62 0 0 1-6.735 5.441c-2.343 1.915-4.833 3.859-7.308 6.046-4.991 4.313-10.423 8.905-15.952 14.121-5.645 5.071-11.353 10.792-17.394 16.739-5.886 6.125-12.079 12.515-18.185 19.505-12.303 13.875-24.827 29.53-36.839 46.835a494.61 494.61 0 0 0-33.896 56.497 491.342 491.342 0 0 0-27.329 64.159c-1.02 2.77-1.888 5.605-2.789 8.428l-2.688 8.477c-1.692 5.691-3.266 11.429-4.857 17.152l-2.135 8.669c-0.683 2.896-1.479 5.756-2.051 8.682l-1.84 8.729-0.914 4.358-0.785 4.387a479.254 479.254 0 0 0-7.583 69.967c-0.302 5.759-0.239 11.514-0.279 17.214l-0.017 4.267c-0.001 1.42 0.069 2.841 0.101 4.257l0.25 8.464 0.127 4.204 0.264 4.188 0.531 8.317 0.278 4.451 0.399 3.933 0.792 7.821c0.14 1.313 0.244 2.561 0.412 3.918l0.527 4.098 1.056 8.115c0.185 1.337 0.33 2.695 0.549 4.002l0.648 3.91 1.289 7.744c1.825 10.246 3.911 20.188 6.263 29.766a463.195 463.195 0 0 0 16.342 52.81l2.255 5.904 1.108 2.899 1.186 2.836 4.611 10.976c3.247 7.033 6.19 13.723 9.353 19.831 6.048 12.328 12.043 22.661 17.007 31.096 5.121 8.359 9.212 14.84 12.197 19.141l4.472 6.638-3.293-7.292c-2.209-4.713-5.148-11.776-8.748-20.761-3.443-9.059-7.545-20.055-11.346-32.919-2.041-6.376-3.771-13.301-5.726-20.516l-2.612-11.204-0.667-2.878-0.583-2.935-1.183-5.957c-3.105-16.055-5.568-33.549-6.889-52.052-0.668-9.251-1.027-18.753-1.1-28.437l0.03-7.3 0.014-3.67c0.002-1.227 0.084-2.416 0.122-3.629l0.284-7.263 0.139-3.644c0.053-1.229 0.166-2.577 0.247-3.863a35704.717 35704.717 0 0 1 0.798-11.787l0.017-0.247c0.013 0.588 0.018 0.028 0.027 0.098l0.05-0.472 0.101-0.945 0.2-1.891 0.8-7.581 0.4-3.801 0.535-3.801 1.069-7.62c0.187-1.271 0.335-2.545 0.555-3.815l0.67-3.811c0.909-5.082 1.708-10.185 2.859-15.253a424.734 424.734 0 0 1 17.057-60.03l1.316-3.663 1.437-3.623 2.859-7.225c0.907-2.417 2.03-4.761 3.033-7.135l3.079-7.082c2.208-4.653 4.37-9.295 6.624-13.867l3.508-6.783c1.167-2.252 2.294-4.513 3.565-6.702a414.503 414.503 0 0 1 31.89-49.502 407.116 407.116 0 0 1 35.476-41.25 406.598 406.598 0 0 1 35.793-32.288c5.751-4.687 11.515-8.857 16.918-12.861zM1023.966 510.486l-0.001-0.005-0.875-7.954-1.051-9.554-0.687-6.125-1.153-8.152c-0.828-5.729-1.741-12.089-2.813-18.907l-4.259-20.887c-0.691-3.726-1.738-7.517-2.729-11.425l-3.102-12.024c-0.558-2.048-1.019-4.142-1.677-6.221l-1.958-6.314-4.07-13.021-1.049-3.333-1.211-3.324c-0.814-2.223-1.638-4.467-2.469-6.732-1.673-4.522-3.34-9.131-5.115-13.781l-5.938-13.981-3.046-7.123c-1.037-2.384-2.247-4.72-3.375-7.102l-6.997-14.388c-0.569-1.22-1.222-2.408-1.877-3.598l-1.958-3.583-3.95-7.211-3.995-7.265c-1.354-2.422-2.881-4.773-4.324-7.175l-8.875-14.427c-12.567-18.998-26.533-37.793-42.018-55.643-15.662-17.71-32.638-34.534-50.581-50.045a527.617 527.617 0 0 0-56.726-41.602c-19.622-12.201-39.702-22.647-59.484-31.64l-14.925-6.188c-2.47-0.995-4.881-2.072-7.356-2.979l-7.402-2.651-7.306-2.609-3.615-1.289c-1.198-0.434-2.394-0.863-3.618-1.21l-14.37-4.353c-2.366-0.691-4.68-1.466-7.035-2.069l-7.02-1.754-13.669-3.402c-4.524-0.941-8.985-1.788-13.341-2.655l-6.47-1.271-3.184-0.621-3.186-0.465-12.373-1.797-5.96-0.862c-1.957-0.298-3.928-0.403-5.85-0.61l-11.239-1.057c-3.638-0.329-7.151-0.735-10.598-0.81l-19.18-0.823-16.258 0.11-6.935 0.057c-2.177 0.091-4.219 0.237-6.115 0.34l-9.619 0.566-7.982 0.472 7.959 0.875 9.529 1.05c1.872 0.215 3.884 0.411 6.023 0.683l6.797 1.101 15.801 2.578 18.393 3.951c3.283 0.628 6.614 1.603 10.051 2.514l10.571 2.838c1.801 0.509 3.644 0.92 5.469 1.526l5.542 1.793 11.432 3.697 2.927 0.946 2.914 1.104 5.902 2.242c3.965 1.517 8.007 3.017 12.084 4.613l12.243 5.366 6.241 2.733c2.088 0.929 4.128 2.029 6.212 3.044l12.59 6.277c1.068 0.506 2.106 1.094 3.145 1.685l3.131 1.761 6.302 3.542 6.353 3.568c2.118 1.209 4.165 2.586 6.263 3.878l12.601 7.922c16.565 11.247 32.949 23.681 48.48 37.44a473.639 473.639 0 0 1 43.435 44.87 467.917 467.917 0 0 1 35.892 50.115c10.476 17.304 19.389 34.971 27.062 52.322 1.761 4.404 3.506 8.772 5.234 13.098 0.843 2.166 1.771 4.273 2.532 6.444l2.224 6.49 2.201 6.396 1.093 3.162c0.368 1.047 0.734 2.092 1.019 3.166l3.633 12.572c0.578 2.068 1.242 4.086 1.738 6.146l1.441 6.137 2.829 11.931 2.152 11.645 1.045 5.64 0.514 2.772 0.362 2.779 1.423 10.784 0.697 5.188c0.245 1.704 0.3 3.423 0.458 5.098l0.794 9.786c0.249 3.167 0.584 6.22 0.595 9.223l0.516 16.686-0.346 13.152-0.109 5.579-0.343 6.014-0.567 9.595-0.472 7.988c-0.169 3.219-0.107 6.829 0.256 10.138 3.638 33.056 33.383 56.904 66.438 53.267 33.056-3.637 56.905-33.382 53.268-66.438zM885.176 762.451l-4.868 5.897c-1.711 2.052-3.44 4.238-5.4 6.399-3.858 4.365-7.946 9.128-12.608 13.957-4.517 4.944-9.632 9.919-14.922 15.205-5.467 5.131-11.147 10.547-17.374 15.864-12.349 10.726-26.262 21.624-41.613 32.046a434.435 434.435 0 0 1-50.026 29.303 431.157 431.157 0 0 1-56.59 23.39c-2.436 0.874-4.935 1.6-7.419 2.361l-7.455 2.279c-5.006 1.425-10.053 2.742-15.078 4.091-2.536 0.593-5.075 1.187-7.617 1.78-2.545 0.566-5.051 1.25-7.622 1.714l-7.663 1.523-3.822 0.763-3.851 0.64a419.278 419.278 0 0 1-61.304 5.938c-5.039 0.219-10.081 0.088-15.068 0.072l-3.733-0.022c-1.238-0.012-2.392-0.1-3.587-0.145l-7.067-0.313-3.505-0.146-3.997-0.27-7.961-0.537-1.981-0.133-0.989-0.067-0.494-0.033c0.221-0.008-0.844-0.005 0.433-0.022l-0.226-0.025-3.593-0.396-7.127-0.78a406.62 406.62 0 0 1-53.494-10.013 402.48 402.48 0 0 1-45.808-14.792l-5.111-2.022-2.511-0.99-2.452-1.066-9.494-4.124c-6.074-2.917-11.861-5.522-17.131-8.352-10.648-5.379-19.552-10.718-26.826-15.11l-1.338-0.807a1085.391 1085.391 0 0 0-3.457-2.276l-4.116-2.687c-0.638-0.414-1.252-0.813-1.842-1.194l-2.021-1.354-3.621-2.439-6.637-4.472c-2.685-1.782-5.825-3.567-8.857-4.938-30.307-13.689-65.973-0.218-79.662 30.089-13.689 30.308-0.218 65.974 30.089 79.663l7.293 3.294 3.979 1.797 2.369 1.063 2.994 1.302c2.073 0.896 4.3 1.857 6.676 2.885l3.672 1.574 1.917 0.819 1.9 0.745c10.22 4.014 22.646 8.772 37.189 13.242 7.215 2.375 15.042 4.443 23.216 6.727l12.687 3.1 3.261 0.787 3.325 0.701 6.75 1.415c18.195 3.715 38.044 6.719 59.054 8.439a494.284 494.284 0 0 0 65.863 0.997l8.535-0.519 4.285-0.266 0.268-0.017c1.44-0.02 0.541-0.02 0.927-0.03l0.492-0.051 0.986-0.1 1.977-0.201 7.938-0.807 3.991-0.406 4.502-0.554 9.015-1.133c1.492-0.2 3.034-0.365 4.486-0.598l4.344-0.709c5.795-0.965 11.61-1.832 17.399-3.066a485.178 485.178 0 0 0 68.692-18.701l4.2-1.463 4.157-1.588 8.292-3.176c2.771-1.016 5.468-2.251 8.194-3.37l8.134-3.434c5.351-2.451 10.685-4.869 15.941-7.39l7.805-3.918c2.591-1.307 5.188-2.576 7.712-3.991a474.344 474.344 0 0 0 57.071-35.83 467.174 467.174 0 0 0 47.72-40.068 466.596 466.596 0 0 0 37.51-40.586c5.455-6.542 10.335-13.082 14.998-19.24 4.483-6.313 8.789-12.218 12.512-18 3.868-5.667 7.179-11.177 10.297-16.204 1.589-2.492 2.957-4.989 4.318-7.332 1.349-2.348 2.635-4.586 3.854-6.711 4.686-8.611 8.271-15.384 10.509-20.116l3.527-7.185-4.682 6.489c-2.985 4.266-7.65 10.33-13.635 17.935z"></path>
            </svg>
          )}
        </div>
      ) : null}
    </div>
  )
}
`,x1=`.spin {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  
  animation-duration: 400ms;
  z-index: 1000;
}
.spin.in {
  animation-name: show;
}

.spin.out {
  animation-name: hide;
  animation-fill-mode: forwards;
}

@keyframes show {
  0% { opacity: 0 }
  100% { opacity: 1 }
}
@keyframes hide {
  0% { opacity: 1 }
  100% { opacity: 0 }
}
`;function qd(n){const{loading:e,type:s="icon"}=n,[r,a]=u.useState(!1),[l,i]=u.useState(!1);u.useEffect(()=>{e?(a(!0),i(!0)):a(!1)},[e]);const o=U("spin flex items-center justify-center top-0 bg-white bg-opacity-50",{in:r,out:!r});function d(){r||i(!1)}return t.jsxs("div",{className:"relative",children:[n.children,l?t.jsx("div",{className:o,onAnimationEnd:d,children:s==="icon"&&t.jsx("svg",{className:"animate-spin",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"24",height:"24",children:t.jsx("path",{d:"M249.836 210.77c5.558-3.827 10.73-7.527 15.812-10.695 4.967-3.314 9.807-6.121 14.208-8.785 2.18-1.362 4.374-2.515 6.425-3.673l5.873-3.281c0.945-0.551 1.789-0.953 2.625-1.377l2.425-1.226 4.381-2.233 1.954-1.004 2.219-1.093 3.918-1.924 7.184-3.527c2.883-1.44 5.996-3.272 8.694-5.22 26.969-19.458 33.057-57.094 13.599-84.063-19.458-26.968-57.094-33.057-84.063-13.599l-6.49 4.682-3.54 2.554-2.071 1.499-2.62 1.947-5.824 4.351a7267.87 7267.87 0 0 0-3.193 2.399c-1.091 0.824-2.25 1.676-3.282 2.533a33346.62 33346.62 0 0 1-6.735 5.441c-2.343 1.915-4.833 3.859-7.308 6.046-4.991 4.313-10.423 8.905-15.952 14.121-5.645 5.071-11.353 10.792-17.394 16.739-5.886 6.125-12.079 12.515-18.185 19.505-12.303 13.875-24.827 29.53-36.839 46.835a494.61 494.61 0 0 0-33.896 56.497 491.342 491.342 0 0 0-27.329 64.159c-1.02 2.77-1.888 5.605-2.789 8.428l-2.688 8.477c-1.692 5.691-3.266 11.429-4.857 17.152l-2.135 8.669c-0.683 2.896-1.479 5.756-2.051 8.682l-1.84 8.729-0.914 4.358-0.785 4.387a479.254 479.254 0 0 0-7.583 69.967c-0.302 5.759-0.239 11.514-0.279 17.214l-0.017 4.267c-0.001 1.42 0.069 2.841 0.101 4.257l0.25 8.464 0.127 4.204 0.264 4.188 0.531 8.317 0.278 4.451 0.399 3.933 0.792 7.821c0.14 1.313 0.244 2.561 0.412 3.918l0.527 4.098 1.056 8.115c0.185 1.337 0.33 2.695 0.549 4.002l0.648 3.91 1.289 7.744c1.825 10.246 3.911 20.188 6.263 29.766a463.195 463.195 0 0 0 16.342 52.81l2.255 5.904 1.108 2.899 1.186 2.836 4.611 10.976c3.247 7.033 6.19 13.723 9.353 19.831 6.048 12.328 12.043 22.661 17.007 31.096 5.121 8.359 9.212 14.84 12.197 19.141l4.472 6.638-3.293-7.292c-2.209-4.713-5.148-11.776-8.748-20.761-3.443-9.059-7.545-20.055-11.346-32.919-2.041-6.376-3.771-13.301-5.726-20.516l-2.612-11.204-0.667-2.878-0.583-2.935-1.183-5.957c-3.105-16.055-5.568-33.549-6.889-52.052-0.668-9.251-1.027-18.753-1.1-28.437l0.03-7.3 0.014-3.67c0.002-1.227 0.084-2.416 0.122-3.629l0.284-7.263 0.139-3.644c0.053-1.229 0.166-2.577 0.247-3.863a35704.717 35704.717 0 0 1 0.798-11.787l0.017-0.247c0.013 0.588 0.018 0.028 0.027 0.098l0.05-0.472 0.101-0.945 0.2-1.891 0.8-7.581 0.4-3.801 0.535-3.801 1.069-7.62c0.187-1.271 0.335-2.545 0.555-3.815l0.67-3.811c0.909-5.082 1.708-10.185 2.859-15.253a424.734 424.734 0 0 1 17.057-60.03l1.316-3.663 1.437-3.623 2.859-7.225c0.907-2.417 2.03-4.761 3.033-7.135l3.079-7.082c2.208-4.653 4.37-9.295 6.624-13.867l3.508-6.783c1.167-2.252 2.294-4.513 3.565-6.702a414.503 414.503 0 0 1 31.89-49.502 407.116 407.116 0 0 1 35.476-41.25 406.598 406.598 0 0 1 35.793-32.288c5.751-4.687 11.515-8.857 16.918-12.861zM1023.966 510.486l-0.001-0.005-0.875-7.954-1.051-9.554-0.687-6.125-1.153-8.152c-0.828-5.729-1.741-12.089-2.813-18.907l-4.259-20.887c-0.691-3.726-1.738-7.517-2.729-11.425l-3.102-12.024c-0.558-2.048-1.019-4.142-1.677-6.221l-1.958-6.314-4.07-13.021-1.049-3.333-1.211-3.324c-0.814-2.223-1.638-4.467-2.469-6.732-1.673-4.522-3.34-9.131-5.115-13.781l-5.938-13.981-3.046-7.123c-1.037-2.384-2.247-4.72-3.375-7.102l-6.997-14.388c-0.569-1.22-1.222-2.408-1.877-3.598l-1.958-3.583-3.95-7.211-3.995-7.265c-1.354-2.422-2.881-4.773-4.324-7.175l-8.875-14.427c-12.567-18.998-26.533-37.793-42.018-55.643-15.662-17.71-32.638-34.534-50.581-50.045a527.617 527.617 0 0 0-56.726-41.602c-19.622-12.201-39.702-22.647-59.484-31.64l-14.925-6.188c-2.47-0.995-4.881-2.072-7.356-2.979l-7.402-2.651-7.306-2.609-3.615-1.289c-1.198-0.434-2.394-0.863-3.618-1.21l-14.37-4.353c-2.366-0.691-4.68-1.466-7.035-2.069l-7.02-1.754-13.669-3.402c-4.524-0.941-8.985-1.788-13.341-2.655l-6.47-1.271-3.184-0.621-3.186-0.465-12.373-1.797-5.96-0.862c-1.957-0.298-3.928-0.403-5.85-0.61l-11.239-1.057c-3.638-0.329-7.151-0.735-10.598-0.81l-19.18-0.823-16.258 0.11-6.935 0.057c-2.177 0.091-4.219 0.237-6.115 0.34l-9.619 0.566-7.982 0.472 7.959 0.875 9.529 1.05c1.872 0.215 3.884 0.411 6.023 0.683l6.797 1.101 15.801 2.578 18.393 3.951c3.283 0.628 6.614 1.603 10.051 2.514l10.571 2.838c1.801 0.509 3.644 0.92 5.469 1.526l5.542 1.793 11.432 3.697 2.927 0.946 2.914 1.104 5.902 2.242c3.965 1.517 8.007 3.017 12.084 4.613l12.243 5.366 6.241 2.733c2.088 0.929 4.128 2.029 6.212 3.044l12.59 6.277c1.068 0.506 2.106 1.094 3.145 1.685l3.131 1.761 6.302 3.542 6.353 3.568c2.118 1.209 4.165 2.586 6.263 3.878l12.601 7.922c16.565 11.247 32.949 23.681 48.48 37.44a473.639 473.639 0 0 1 43.435 44.87 467.917 467.917 0 0 1 35.892 50.115c10.476 17.304 19.389 34.971 27.062 52.322 1.761 4.404 3.506 8.772 5.234 13.098 0.843 2.166 1.771 4.273 2.532 6.444l2.224 6.49 2.201 6.396 1.093 3.162c0.368 1.047 0.734 2.092 1.019 3.166l3.633 12.572c0.578 2.068 1.242 4.086 1.738 6.146l1.441 6.137 2.829 11.931 2.152 11.645 1.045 5.64 0.514 2.772 0.362 2.779 1.423 10.784 0.697 5.188c0.245 1.704 0.3 3.423 0.458 5.098l0.794 9.786c0.249 3.167 0.584 6.22 0.595 9.223l0.516 16.686-0.346 13.152-0.109 5.579-0.343 6.014-0.567 9.595-0.472 7.988c-0.169 3.219-0.107 6.829 0.256 10.138 3.638 33.056 33.383 56.904 66.438 53.267 33.056-3.637 56.905-33.382 53.268-66.438zM885.176 762.451l-4.868 5.897c-1.711 2.052-3.44 4.238-5.4 6.399-3.858 4.365-7.946 9.128-12.608 13.957-4.517 4.944-9.632 9.919-14.922 15.205-5.467 5.131-11.147 10.547-17.374 15.864-12.349 10.726-26.262 21.624-41.613 32.046a434.435 434.435 0 0 1-50.026 29.303 431.157 431.157 0 0 1-56.59 23.39c-2.436 0.874-4.935 1.6-7.419 2.361l-7.455 2.279c-5.006 1.425-10.053 2.742-15.078 4.091-2.536 0.593-5.075 1.187-7.617 1.78-2.545 0.566-5.051 1.25-7.622 1.714l-7.663 1.523-3.822 0.763-3.851 0.64a419.278 419.278 0 0 1-61.304 5.938c-5.039 0.219-10.081 0.088-15.068 0.072l-3.733-0.022c-1.238-0.012-2.392-0.1-3.587-0.145l-7.067-0.313-3.505-0.146-3.997-0.27-7.961-0.537-1.981-0.133-0.989-0.067-0.494-0.033c0.221-0.008-0.844-0.005 0.433-0.022l-0.226-0.025-3.593-0.396-7.127-0.78a406.62 406.62 0 0 1-53.494-10.013 402.48 402.48 0 0 1-45.808-14.792l-5.111-2.022-2.511-0.99-2.452-1.066-9.494-4.124c-6.074-2.917-11.861-5.522-17.131-8.352-10.648-5.379-19.552-10.718-26.826-15.11l-1.338-0.807a1085.391 1085.391 0 0 0-3.457-2.276l-4.116-2.687c-0.638-0.414-1.252-0.813-1.842-1.194l-2.021-1.354-3.621-2.439-6.637-4.472c-2.685-1.782-5.825-3.567-8.857-4.938-30.307-13.689-65.973-0.218-79.662 30.089-13.689 30.308-0.218 65.974 30.089 79.663l7.293 3.294 3.979 1.797 2.369 1.063 2.994 1.302c2.073 0.896 4.3 1.857 6.676 2.885l3.672 1.574 1.917 0.819 1.9 0.745c10.22 4.014 22.646 8.772 37.189 13.242 7.215 2.375 15.042 4.443 23.216 6.727l12.687 3.1 3.261 0.787 3.325 0.701 6.75 1.415c18.195 3.715 38.044 6.719 59.054 8.439a494.284 494.284 0 0 0 65.863 0.997l8.535-0.519 4.285-0.266 0.268-0.017c1.44-0.02 0.541-0.02 0.927-0.03l0.492-0.051 0.986-0.1 1.977-0.201 7.938-0.807 3.991-0.406 4.502-0.554 9.015-1.133c1.492-0.2 3.034-0.365 4.486-0.598l4.344-0.709c5.795-0.965 11.61-1.832 17.399-3.066a485.178 485.178 0 0 0 68.692-18.701l4.2-1.463 4.157-1.588 8.292-3.176c2.771-1.016 5.468-2.251 8.194-3.37l8.134-3.434c5.351-2.451 10.685-4.869 15.941-7.39l7.805-3.918c2.591-1.307 5.188-2.576 7.712-3.991a474.344 474.344 0 0 0 57.071-35.83 467.174 467.174 0 0 0 47.72-40.068 466.596 466.596 0 0 0 37.51-40.586c5.455-6.542 10.335-13.082 14.998-19.24 4.483-6.313 8.789-12.218 12.512-18 3.868-5.667 7.179-11.177 10.297-16.204 1.589-2.492 2.957-4.989 4.318-7.332 1.349-2.348 2.635-4.586 3.854-6.711 4.686-8.611 8.271-15.384 10.509-20.116l3.527-7.185-4.682 6.489c-2.985 4.266-7.65 10.33-13.635 17.935z"})})}):null]})}document.documentElement.style.fontSize="14px";function g1(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Vl=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function j1({promise:n}){const{results:e}=u.use(n);return console.log("我会执行几次呢"),t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function v1(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function AN(){const[n,e]=u.useState(()=>Vl(5)),s=u.useDeferredValue(n);function r(a){n.cancel();const l=a.target.value.length%5;e(Vl(l))}return t.jsxs("div",{children:[t.jsx(v1,{onChange:r,placeholder:"Enter something"}),t.jsx(u.Suspense,{fallback:t.jsx(g1,{}),children:t.jsx(qd,{loading:s!==n,type:"mask",children:t.jsx(j1,{promise:s})})})]})}function $N(){const[n,e]=u.useState(()=>Vl(5));function s(r){n.cancel();const a=r.target.value.length%5;e(Vl(a))}return t.jsxs("div",{children:[t.jsx(v1,{onChange:s,placeholder:"Enter something"}),t.jsx(u.Suspense,{fallback:t.jsx(g1,{}),children:t.jsx(j1,{promise:n})})]})}function MN(){const[n,e]=u.useState(0);function s(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsxs("div",{className:"mt-4",children:["counter: ",n]})]}),t.jsx("button",{onClick:s,children:"counter++"})]})}function RN(){const[n,e]=u.useState(0),s=u.useDeferredValue(n);function r(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsxs("div",{className:"mt-4",children:["counter: ",s]})]}),t.jsx("button",{onClick:r,children:"counter++"})]})}function LN(){const[n,e]=u.useState(0),s=u.useDeferredValue(n,0);function r(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsx(EN,{counter:s})]}),t.jsx("button",{onClick:r,children:"counter++"})]})}const EN=({counter:n})=>{const e=performance.now();for(;performance.now()-e<200;);return t.jsxs("div",{className:"mt-4",children:["Deferred: ",n]})};function TN(){const[n,e]=u.useState(0),s=u.useDeferredValue(n);function r(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsx(DN,{counter:s})]}),t.jsx("button",{onClick:r,children:"counter++"})]})}const DN=({counter:n})=>{let e=[];for(let s=0;s<200;s++)e.push(t.jsx(ON,{counter:n},s));return t.jsxs("div",{className:"mt-4 text-green-500",children:[t.jsxs("div",{children:["Deferred: ",n]}),t.jsx("ul",{className:"h-32 hidden",children:e})]})};function ON({counter:n}){let e=performance.now();for(;performance.now()-e<1;);return t.jsx("li",{children:n})}function cp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"重头戏来了！"}),`
`,t.jsx(e.p,{children:"在进一步学习之前，道友们先操作感受一下这个案例中，搜索时 loading 的交互状态。在输入框中，快速输入任意内容。"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(AN,{})}),`
`,t.jsx(e.p,{children:"然后再对比一下前后两种 Loading 交互方式的区别。"}),`
`,t.jsx(_,{children:t.jsx($N,{})}),`
`,t.jsx(e.p,{children:"很显然，大多数时候，第一种 Loading 交互方案的体验是更好的。他的具体表现为："}),`
`,t.jsx(e.p,{children:"初始化时，显示 Skeleton 组件，表示此时列表中没有内容，即将加载新的内容进来。"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"更新时，保持现有列表"}),"，可在此的基础之上显示 Loading/蒙层/透明度，如果你确定接口请求的时间非常短，也可以没有任何 Loading 显示"]}),`
`,t.jsx(e.p,{children:"在前面的学习中，我们利用 Suspense 与 use 轻松做到了第二种交互方案，这种交互方案无论是在初始化还是在更新时，都是通过显示 Skeleton 来表示请求正在发生。接下来，我们需要学习如何利用新的知识，来做到第一种交互方案。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"useDeferredValue"})}),`
`,t.jsx(e.p,{children:"在 React 并发模式的基础之上，我们可以利用 useDeferredValue 在不变动代码顺序的情况之下，推迟指定 UI 更新任务的执行。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"并发模式的基础理论详细学习，你需要关注我的 React 知命境"}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const deferredValue = useDeferredValue(value, initialValue?)
`})}),`
`,t.jsx(e.p,{children:"对于刚接触的道友们来说，useDeferredValue 理解起来比较困难，我们循序渐进的用 4 个案例来理解一下。"}),`
`,t.jsx(e.p,{children:"首先，在正常情况下，一个 state 的变化，会导致 UI 发生变化。例如下面这个案例"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {useState} from 'react'

export default function Index() {
  const [counter, setCounter] = useState(0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <div>counter: {counter}</div>
        <div className="mt-4">counter: {counter}</div>
      </div>
      <button onClick={__clickHanler}>counter++</button>
    </div>
  )
}
`})}),`
`,t.jsxs(e.p,{children:["这里需要注意的是，状态 ",t.jsx(e.code,{children:"counter"})," 被两个元素使用，因此，这两个元素的更改，实际上是",t.jsx(e.strong,{children:"一个任务"}),"。他们必定会同时响应 counter 的变化。"]}),`
`,t.jsx(e.p,{children:"因此，当你快速点击按钮时，两个元素的变化是快速同时响应"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(MN,{})}),`
`,t.jsx(e.p,{children:"这个时候，我们可以利用 useDeferredValue，把他们拆分成两个任务。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {useState, useDeferredValue} from 'react'

export default function Index() {
  const [counter, setCounter] = useState(0)
  const deferred = useDeferredValue(counter)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <div>counter: {counter}</div>
        <div className='mt-4'>counter: {deferred}</div>
      </div>
      <button onClick={__clickHanler}>counter++</button>
    </div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"注意看，我们使用 counter 作为 useDeferredValue 的初始值，并将其返回值替换第二个元素"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const deferred = useDeferredValue(counter)
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<div className='mt-4'>counter: {deferred}</div>
`})}),`
`,t.jsx(e.p,{children:"此时，第二个元素的更新，就不再与第一个元素同步。它更新的优先级被降低。这个时候它的执行在理论上是可以被更高的优先级插队和中断的。"}),`
`,t.jsx(e.p,{children:"但是由于渲染都太短了，我们肉眼无法区分出来两个任务已经被分开了，因此，从视觉上的表现结果和刚才的案例没啥区别。"}),`
`,t.jsx(e.p,{children:"快速点击按钮查看一下演示效果"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(RN,{})}),`
`,t.jsx(e.p,{children:"为了看出区别，我们把第二个元素重构成一个子组件，并模拟成一个耗时组件"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {useState, useDeferredValue} from 'react'

export default function Index() {
  const [counter, setCounter] = useState(0)
  const deferred = useDeferredValue(counter, 0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <div>counter: {counter}</div>
        <Expensive counter={deferred} />
      </div>
      <button onClick={__clickHanler}>counter++</button>
    </div>
  )
}

const Expensive = ({counter}) => {
  const start = performance.now()
  while (performance.now() - start < 200) {}
  return (
    <div className="mt-4">Deferred: {counter}</div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"快速点击按钮，此时我们发现，两个按钮的更新可以区分开了。并且在快速点击时，第二个 counter 的更新，会落后于第一个 counter，此时表示，我们可以利用 useDeferredValue 推迟 UI 的更新。将对应任务的优先级降低，使其可以被插队与中断。"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(LN,{})}),`
`,t.jsxs(e.p,{children:["此时我们也发现另外一个情况，那就是 counter 直接对应的高优先级执行也没有那么流畅，这是为什么呢？其实很简单，因为在我们的模拟案例中，",t.jsx(e.strong,{children:"并没有把耗时定位在渲染上"}),"。这就和实际的情况不太一样了。我们把耗时写在了 Expensive 函数里，而这个函数每次都会执行，它的执行阻塞了渲染。所以我们会觉得第一个 counter 的更新变得比较卡顿"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"所以这里我们一定要区分开渲染任务和 Expensive 函数，他们是不同的，UI 渲染是一个异步任务，而 Expensive 函数是同步执行的。useDeferredValue 推迟的是 UI 渲染任务。因此，我们需要特别注意的是，不要在同步逻辑上执行过多的耗时任务。"}),`
`]}),`
`,t.jsx(e.p,{children:"这里我们可以通过任务拆分的方式，把执行耗时时间分散到更多的子组件中去，这样 React 就可以利用任务中断的机制，在不阻塞渲染的情况下，中断低优先级的任务。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {useState, useDeferredValue} from 'react'

export default function Index() {
  const [counter, setCounter] = useState(0)
  const deferred = useDeferredValue(counter)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <div>counter: {counter}</div>
        <Expensive counter={deferred} />
      </div>
      <button onClick={__clickHanler}>counter++</button>
    </div>
  )
}

const Expensive = ({counter}) => {
  let items = []
  for (let i = 0; i < 200; i++) {
    items.push(<SlowItem key={i} counter={counter} />);
  }

  return (
    <div className='mt-4 text-green-500'>
      <div>Deferred: {counter}</div>
      <ul className='h-32 hidden'>
        {items}
      </ul>
    </div>
  );
}

function SlowItem({counter}) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li>{counter}</li>
  )
}
`})}),`
`,t.jsx(e.p,{children:"再来感受一下演示结果，我们就发现，第一个 counter 的更新也变得非常流畅了。"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(TN,{})}),`
`,t.jsx(e.p,{children:"此时我们注意观察，不要错漏这个细节。slowList 中包含了 250 个子组件。每个子组件都渲染 1ms，那么整个组件渲染就需要耗时至少 250ms."}),`
`,t.jsx(e.p,{children:"在父组件中，我们把 deferred 传递给 Expensive"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Expensive counter={deferred} />
`})}),`
`,t.jsx(e.p,{children:"那么此时表示，Expensive 的 UI 更新任务是低优先级。counter 对应的任务可以中断它的执行。"}),`
`,t.jsx(e.p,{children:"此时一个很明显的区别就是，counter 的 UI 变化变得更加流畅了。这是因为耗时被拆分到了多个子组件中，React 就有机会中断这些函数的执行，并执行优先级更高的任务，以确保高优先级任务的流畅。"}),`
`,t.jsxs(e.p,{children:["如果你没有使用 React Compiler，你需要使用 memo 手动缓存 ",t.jsx(e.code,{children:"Expensive"}),"。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`export default memo(function Expensive({ text }) {
  // ...
});
`})}),`
`,t.jsx(e.p,{children:"当更新发生时，useDefferdValue 会首先使用旧值传递给组件。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Expensive counter={deferred} />
`})}),`
`,t.jsx(e.p,{children:"因此，当 counter 发生变化时，deferred 依然是旧值，那么此时，如果我们使用 memo 包裹，Expensive 的 props 就没有发生变化，我们可以跳过此次针对 Expensive 的更新。所以当我们快速点击时，Expensive 总是接受到旧值，它本身的渲染也会被中断，因此最终的表现结果是，当我们连续点击 7 次，counter 从 0 依次变成 7，而 deferred 会直接从 0 变成 7."}),`
`,t.jsx(e.p,{children:"这跟 React 的性能优化策略有关。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"2"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"运行原理"})}),`
`,t.jsx(e.p,{children:"看了上面两个例子，肯定还是有一部分人会觉得很懵，不要急，接下来我们把运行原理分析一下，整个情况就清晰了。"}),`
`,t.jsx(e.p,{children:"useDeferredValue 会尝试将 UI 任务更新两次。"}),`
`,t.jsxs(e.p,{children:["第一次，会给子组件传递旧值。此时 ",t.jsx(e.code,{children:"Expensive"})," 接收到的 props 会与上一次完全相同。如果结合了 React.memo，那么该组件就不会重新渲染。该组件可以重复使用之前的渲染结果"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"Compiler 编译之后不需要 memo"}),`
`]}),`
`,t.jsxs(e.p,{children:["此时，高优先级的任务渲染会发生，渲染完成之后，将会开始第二次渲染。此时，将会传入刚才更新之后的新值。对于 ",t.jsx(e.code,{children:"Expensive"})," 而言，props 发生了变化，整个组件会重新渲染。"]}),`
`,t.jsx(e.p,{children:"我们通常会将已经非常明确的耗时任务标记为 deferred，因此，这些任务都被视为低优先级。当重要的高优先级更新已经完成，低优先级任务在第二次渲染时尝试更新..."}),`
`,t.jsx(e.p,{children:"在它第二次更新的过程中，如果又有新的高优先级任务进来，那么 React 就会中断并放弃第二次更新，去执行高优先级的任务。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注意：是中断，并放弃这次更新，所以表现出来的结果就是，中间会漏掉许多任务的执行"}),`
`]}),`
`,t.jsx(e.p,{children:"这样的运行机制有一个非常重要的好处。"}),`
`,t.jsx(e.p,{children:"那就是，如果你的电脑性能足够强悍，那么第二次的更新可能会快速完成，高优先级的任务来不及中断，那么我们的页面响应就是非常理想的。"}),`
`,t.jsx(e.p,{children:"但是如果我们的电脑性能比较差，第二次更新还没完成，新的高优先级任务又来了，那么就可以通过中断的方式，降级处理，保证重要 UI 的流畅，放弃低优先级任务。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"在不同性能的设备上，有不同的反应，这个是跟防抖、节流的最重要的区别"}),`
`]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"3"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"重新分析取消请求案例"})}),`
`,t.jsx(e.p,{children:"那我们回过头来，分析一下最开始的那个案例，重新看一眼代码"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`export default function Search() {
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const deferred = useDeferredValue(promise)


  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 5
    update(fetchListWithCancel(len))
  }
  ...
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Suspense fallback={<Skeleton />}>
  <Spin loading={deferred !== promise} type='mask'>
    <List promise={deferred} />
  </Spin>
</Suspense>
`})}),`
`,t.jsx(e.p,{children:"这里我们将 promise 做为 state，当 promise 被重新赋值时，List 会经历两次更新。"}),`
`,t.jsx(e.p,{children:"首先点击事件触发，请求立即发生。promise 被改变。触发组件更新。"}),`
`,t.jsx(e.p,{children:"第一次更新时，deferred 使用旧值传参，此时对于 List 而言，api 没有发生变化。因此，利用这个机制，我们可以阻止 Suspense 直接渲染成 fallback."}),`
`,t.jsx(e.p,{children:"在 Suspense 包裹之下，只有当接口请求成功之后，deferred 的第二次更新才会发生，因此，在这个过程中，如果我们快速进行第二次点击，可以直接取消上一次请求，让第二次更新来不及执行。此时新的请求发生。"}),`
`,t.jsx(e.p,{children:"最终案例的完整代码与演示效果请看右侧区域。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"4"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"总结"})}),`
`,t.jsx(e.p,{children:"这种场景的最佳实践代码非常的简洁和优雅。写起来也很舒服，性能也非常强悍。但是理解起来会比较困难。因此想要做到灵活运用，还需要多多消化。"}),`
`,t.jsx(e.p,{children:"但是，等你彻底掌握它之后，你就会发现 React 19 在异步交互上真的太优雅了。这样的开发体验，是依赖 useEffect 完全比不了的。"})]})}function BN(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(cp,{...n})}):cp(n)}const zN={"App.js":wN,"api.js":SN,"List.jsx":CN,"Input.jsx":_N,"Skeleton.jsx":kN,"Spin.jsx":f1,"index.css":x1};function UN(){return t.jsx(z,{files:zN,renderArticle:n=>t.jsx(BN,{components:{code:n}})})}const HN=`import {useState, Suspense, useDeferredValue} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import Tabs from './Tabs'
import List from './List'
import Spin from './Spin'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]

export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const deferred = useDeferredValue(promise)

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)

    promise.cancel()
    update(fetchListWithCancel(5))
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <Spin loading={deferred !== promise} type='mask'>
          <List promise={deferred} />
        </Spin>
      </Suspense>
    </div>
  )
}
`,qN=`const random = [
  'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  'Whether you work on your own or with thousands of other developers, using React feels the same.',
  'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
  'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
}

export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,VN=`export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,XN=`import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,ZN=`function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({tabs, onSwitch}) {
  return (
    <div>
      <div className="hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
          onChange={(e) => onSwitch(e.target.selectedIndex)}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab, i) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                onSwitch(i)
              }}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`,GN=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));let r="flex border border-blue-100 p-4 rounded-md shadow";return e?t.jsxs("div",{className:r,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]}):t.jsxs("div",{className:`${r} justify-center items-center flex-col text-gray-500`,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),t.jsx("div",{className:"mt-2",children:"no data."})]})};function b1(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function YN(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,p=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const IN=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var y1=new Headers;y1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var FN={method:"GET",headers:y1,redirect:"follow",data:"hex"};const PN="https://echo.apifox.com/delay/1",op=async()=>{await fetch(PN,FN);const n=Math.floor(Math.random()*10)%5;return{value:IN[n]}},dp=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function QN(){const[n,e]=u.useState(op()),[s,r]=u.useTransition();function a(){console.log("click"),r(()=>{console.log("transition"),e(op())})}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(YN,{onClick:a,children:"更新数据"})}),t.jsx(u.Suspense,{fallback:t.jsx(b1,{}),children:t.jsx(qd,{loading:s,children:t.jsx(JN,{promise:n})})})]})}function JN(n){const{value:e}=u.use(n.promise);return t.jsx(GN,{message:e})}function WN(...n){return n.filter(Boolean).join(" ")}function KN({tabs:n,onSwitch:e}){return t.jsxs("div",{children:[t.jsxs("div",{className:"hidden",children:[t.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),t.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:n.find(s=>s.current).name,onChange:s=>e(s.target.selectedIndex),children:n.map(s=>t.jsx("option",{children:s.name},s.name))})]}),t.jsx("div",{className:"block",children:t.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:n.map((s,r)=>t.jsx("a",{href:s.href,className:WN(s.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":s.current?"page":void 0,onClick:a=>{a.preventDefault(),e(r)},children:s.name},s.name))})})]})}function ew({promise:n}){const{results:e}=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}const cc=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function nw(){const[n,e]=u.useState(0),[s,r]=u.useState(()=>dp(5)),[a,l]=u.useTransition();function i(c){cc[n].current=!1,cc[c].current=!0,e(c),s.cancel(),l(()=>{r(dp(5))})}return t.jsxs("div",{children:[t.jsx(KN,{tabs:cc,onSwitch:i}),t.jsx(u.Suspense,{fallback:t.jsx(b1,{}),children:t.jsx(qd,{loading:a,type:"mask",children:t.jsx(ew,{promise:s})})})]})}function up(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(QN,{})}),`
`,t.jsx(e.p,{children:"useTransition 与 useDeferredValue 有几乎一致的作用。他们都可以降低 UI 任务更新的优先级。只是在语法上有一些不太一样。因此这一章我们主要重点是介绍 useTransition 的语法，以及它与 useDeferredValue 的细微差异。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const [isPending, startTransition] = useTransition()
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"startTransition"})," 可以标记一个或者多个状态的 ",t.jsx(e.code,{children:"set"})," 方法，将他们标记为 ",t.jsx(e.code,{children:"transition"}),"，也就是调低他们更新的优先级。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"但是这里需要注意的是，被调低的不是 set 方法本身的执行，而是其对应的 UI 更新。"}),`
`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"isPending"})," 表示是否还有未完成的 UI 更新任务。我们可以利用这个状态来判断请求是否正在发生。"]}),`
`,t.jsx(e.p,{children:"上面的演示代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {use, useState, Suspense, useTransition} from 'react'
import Message from './Message'
import Skeleton from './Skeleton'
import Button from './Button'
import Spin from 'components/Spin'
import {getMessage} from './api'

export default function Demo01() {
  const [promise, update] = useState(getMessage)
  const [isPending, startTransition] = useTransition()

  function __handler() {
    startTransition(() => {
      update(getMessage())
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button disabled={isPending} onClick={__handler}>更新数据</Button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Spin loading={isPending}>
          <Content promise={promise} />
        </Spin>
      </Suspense>
    </>
  )
}

function Content(props) {
  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,t.jsx(e.p,{children:"但是这里需要注意的是，被调低的不是 set 方法本身的执行，而是其对应的 UI 更新。因此当我们连续点击 10 次按钮时，update 就紧跟着会执行 10 次。只是在目前的 Suspense 的机制中，会将 10 次接口请求串行执行"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"这个机制目前存在争议，可能会在未来发生改变"}),`
`]}),`
`,t.jsx(e.p,{children:"当我试图使用这种方案取消上一次请求时，我们会发生并没有效果，这里的原因是因为状态 promise 在 update 执行完之后，就已经交给 Suspense 的机制去处理了，React 并没有支持这种中断机制。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function __handler() {
  startTransition(() => {
    promise.cancel()
    update(getMessage())
  })
}
`})}),`
`,t.jsx(e.p,{children:"因此，我们可以想办法在 promise 交给 Suspense 处理之前中断请求，在上一章中，我们使用了 useDeferredValue 的机制做到了这个事情。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`export default function App() {
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const deferred = useDeferredValue(promise)


  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 5
    update(fetchListWithCancel(len))
  }
  ...
`})}),`
`,t.jsx(e.p,{children:"这里我们发现，我们第一时间交给 Suspense 的处理的并不是 promise，而是 deferred，因此我们可以在这之前，中断请求。"}),`
`,t.jsx(e.p,{children:"除了这个区别之外，useTransition 可以在组件顶层同时将多个 state 的 set 方法设置为低优先级。这一点是 useDeferredValue 做不到的。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');
  const [other, setOther] = useState(false);

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
      setOther(true)
    });
  }
  // ...
}
`})}),`
`,t.jsx(e.p,{children:"useDeferredValue 可以在子组件中，设置来自 props 的状态延迟。这个也是 useTransition 不方便做到的"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`export default function Ex(props) {
  const deferred = useDeferredValue(props.value)
  ...
}
`})}),`
`,t.jsx(e.p,{children:"最后，大家可以通过连续快速点击多次 Tab 按钮，观察一下下面这种写法，与右侧区域案例的区别。这里我们使用 useTransition，右侧案例使用 useDeferredValue。两个案例在视觉上的表现是几乎一样的。区别就是，这个案例并没有成功取消上一次请求，而右侧案例取消成功了。大家可以查看接口请求验证一下结果"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"未来这种情况的区别，可能会因为 Suspense 机制的变化而发生变化"}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {useState, Suspense, useTransition} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import Tabs from './Tabs'
import List from './List'
import Spin from 'components/Spin'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]


export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const [isPending, startTransition] = useTransition()

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)

    promise.cancel()
    startTransition(() => {
      update(fetchListWithCancel(5))
    })
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <Spin loading={isPending} type='mask'>
          <List promise={promise} />
        </Spin>
      </Suspense>
    </div>
  )
}
`})}),`
`,t.jsx(_,{reload:!0,children:t.jsx(nw,{})})]})}function tw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(up,{...n})}):up(n)}const sw={"App.js":HN,"api.js":qN,"Tabs.jsx":ZN,"List.jsx":XN,"Skeleton.jsx":VN,"Spin.jsx":f1,"index.css":x1};function rw(){return t.jsx(z,{files:sw,renderArticle:n=>t.jsx(tw,{components:{code:n}})})}const aw=`function Layou2t() {
  const $ = _c(3);
  if ($[0] !== "af424edd0cc2f0a8b6bcc96ea18b6e0ad26e18b67ffafe80bf321ad9ef551a1f") {
    for (let $i = 0; $i < 3; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "af424edd0cc2f0a8b6bcc96ea18b6e0ad26e18b67ffafe80bf321ad9ef551a1f";
  }
  let t0;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxDEV(NavHeader, {}, void 0, false, {
      fileName: "/Users/yangbo/develop/react19feature/src/App.jsx",
      lineNumber: 20,
      columnNumber: 10
    }, this);
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxDEV("div", { children: [
        t0,
        /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
          fileName: "/Users/xxx/develop/xxx/src/App.jsx",
          lineNumber: 27,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
      fileName: "/Users/xxx/develop/xxx/src/App.jsx",
      lineNumber: 27,
      columnNumber: 10
    }, this);
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  return t1;
}
`;function mp(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"我们对 React Compiler 期待已久。"}),`
`,t.jsx(e.p,{children:"自从从它第一次在 React Conf 2021 亮相。到现在 React Conf 2024 正式开源，已经过去了三年之久。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"以前叫 React Forget，现改名为 React Compiler"}),`
`]}),`
`,t.jsx(e.h3,{children:"背景"}),`
`,t.jsxs(e.p,{children:["要了解 React Compiler，这还需要从 React 的更新机制说起。",t.jsx(e.strong,{children:"React 项目中的任何一个组件发生 state 状态的变更，React 更新机制都会从最顶层的根节点开始往下递归对比，通过双缓存机制判断出哪些节点发生了变化，然后更新节点"}),"。这样的更新机制成本并不小，因为在判断过程中，如果 React 发现 ",t.jsx(e.code,{children:"props、state、context"})," 任意一个不同，那么就认为该节点被更新了。因此，冗余的 ",t.jsx(e.code,{children:"re-render"})," 在这个过程中会",t.jsx(e.strong,{children:"大量发生"}),"。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"对比的成本非常小，但是 re-render 的成本较高"}),"，当我们在短时间之内快速更改 state 时，程序大概率会存在性能问题。因此在以往的开发方式中，掌握性能优化的手段是高级 React 开发者的必备能力"]}),`
`]}),`
`,t.jsx(e.p,{children:"一个组件节点在 React 中很难被判断为没有发生过更新。因为 props 的比较总是不同的。它的比较方式如下。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`{} === {} // false
`})}),`
`,t.jsx(e.p,{children:"因此，高级 React 开发者需要非常了解 React 的默认优化机制，让 props 的比较不发生，因为一旦发生，那么结果必定是 false。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"事实上，对 React 默认优化机制了解的开发者非常少，我们在开发过程中也不会为了优化这个性能去重新调整组件的分布。更多的还是使用 memo 与 useMemo/useCallback 暴力缓存节点"}),`
`]}),`
`,t.jsxs(e.p,{children:["在这样的背景之下，冗余的 ",t.jsx(e.code,{children:"re-render"})," 在大量的项目中发生。这也是为什么 React 总是呗吐槽性能不好的主要原因。当然，大多数项目并没有频繁更新 state 的需求，因此这一点性能问题表现得并不是很明显。"]}),`
`,t.jsxs(e.p,{children:["如果我们要解决冗余 re-render 的问题，需要对 React 默认优化技能有非常深刻的理解，需要对 ",t.jsx(e.code,{children:"memo、useCallback、useMemo"})," 有准确的理解。但是普通的 React 开发者很难理解他们，有的开发者虽然在项目中大量使用了，但是未必就达到了理想的效果。React Compiler 则是为了解决这个问题，它可以自动帮助我们记忆已经存在、并且没有发生更新的组件，从而解决组件冗余 ",t.jsx(e.code,{children:"re-render"})," 的问题。"]}),`
`,t.jsxs(e.p,{children:["从使用结果的体验来看，React Compiler 被集成在代码自动编译中，因此只要我们在项目中引入成功，就不再需要关注它的存在。",t.jsx(e.strong,{children:"我们的开发方式不会发生任何改变。"})," 它不会更改 React 现有的开发范式和更新方式，侵入性非常弱。这一点对于老项目来说，非常非常重要。"]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"检测"})}),`
`,t.jsxs(e.p,{children:["并非所有的组件都能被优化。因此早在 React 18 的版本中，React 官方团队就提前发布了严格模式。在顶层根节点中，套一层 ",t.jsx(e.code,{children:"StrictMode"})," 即可。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</StrictMode>
`})}),`
`,t.jsx(e.p,{children:"遵循严格模式的规范，我们的组件更容易符合 React Compiler 的优化规则。"}),`
`,t.jsx(e.p,{children:"我们可以使用如下方式首先检测代码库是否兼容。在项目根目录下执行如下指令。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`npx react-compiler-healthcheck
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"该脚本主要用于检测"}),`
`,t.jsx(e.p,{children:"1、项目中有多少组件可以成功优化**：越多越好**"}),`
`,t.jsx(e.p,{children:"2、是否使用严格模式，使用了优化成功率更高"}),`
`,t.jsx(e.p,{children:"3、是否使用了与 Compiler 不兼容的三方库"}),`
`]}),`
`,t.jsx(e.p,{children:"例如，我的其中一个项目，检测结果如下"}),`
`,t.jsxs("div",{style:{color:"rgb(23, 163, 74)"},children:[t.jsx("div",{children:"Successfully compiled 38 out of 40 components. "}),t.jsx("div",{children:"StrictMode usage found."}),t.jsx("div",{children:"Found no usage of incompatible libraries."})]}),`
`,t.jsx(e.p,{children:"每一项都基本上通过了，那我就可以放心的在项目中引入对应的插件开始体验了。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"2"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"在项目中引入"})}),`
`,t.jsx(e.p,{children:"官方文档中已经明确表示，由于 JavaScript 的灵活性，Compiler 无法捕获所有可能的意外行为，甚至编译之后还会出现错误。因此，目前而言，Compiler 依然可能会有他粗糙的一面。因此，我们可以通过配置，在具体的某一个小目录中运行 Compiler。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const ReactCompilerConfig = {
  sources: (filename) => {
    return filename.indexOf('src/path/to/dir') !== -1;
  },
};
`})}),`
`,t.jsx(e.p,{children:"React Compiler 还支持对应的 eslint 插件。该插件可以独立运行。不用非得与 Compiler 一起运行。"}),`
`,t.jsx(e.p,{children:"可以使用如下指令安装该插件"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`npm i eslint-plugin-react-compiler
`})}),`
`,t.jsx(e.p,{children:"然后在 eslint 的配置中添加"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`module.exports = {
  plugins: [
    'eslint-plugin-react-compiler',
  ],
  rules: {
    'react-compiler/react-compiler': 2,
  },
}
`})}),`
`,t.jsx(e.p,{children:"Compiler 目前结合 Babel 插件一起使用，因此，我们首先需要在项目中引入该插件"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`npm i babel-plugin-react-compiler
`})}),`
`,t.jsx(e.p,{children:"然后，在不同的项目中，有不同的配置。"}),`
`,t.jsxs(e.p,{children:[t.jsxs(e.strong,{children:["添加到 ",t.jsx(e.code,{children:"Babel"})," 的配置中"]}),"，如下所示"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`module.exports = function () {
  return {
    plugins: [
      ['babel-plugin-react-compiler', ReactCompilerConfig], // must run first!
      // ...
    ],
  };
};
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注意，该插件应该在其他 Babel 插件之前运行"}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"在 vite 中使用"})}),`
`,t.jsxs(e.p,{children:["首先，我们需要安装 ",t.jsx(e.code,{children:"vite-plugin-react"}),"，注意不用搞错了，群里有的同学使用了 ",t.jsx(e.code,{children:"vite-plugin-react-swc"})," 结果搞了很久没配置成功。然后在 vite.config.js 中，添加如下配置"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`export default defineConfig(() => {
  return {
    plugins: [
      react({
        babel: {
          plugins: [
            ["babel-plugin-react-compiler", ReactCompilerConfig],
          ],
        },
      }),
    ],
    // ...
  };
});
`})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"在 Next.js 中使用"})}),`
`,t.jsxs(e.p,{children:["创建 ",t.jsx(e.code,{children:"babel.config.js"})," 并添加上面 Babel 同样的配置即可。"]}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"在 Remix 中使用"})}),`
`,t.jsx(e.p,{children:"安装如下插件，并且添加对应的配置项目。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`npm i vite-plugin-babel
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// vite.config.js
import babel from "vite-plugin-babel";

const ReactCompilerConfig = { /* ... */ };

export default defineConfig({
  plugins: [
    remix({ /* ... */}),
    babel({
      filter: /\\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"], // if you use TypeScript
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
  ],
});
`})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"在 Webpack 中使用"})}),`
`,t.jsx(e.p,{children:"我们可以单独为 Compiler 创建一个 Loader. 代码如下所示。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const ReactCompilerConfig = { /* ... */ };
const BabelPluginReactCompiler = require('babel-plugin-react-compiler');

function reactCompilerLoader(sourceCode, sourceMap) {
  // ...
  const result = transformSync(sourceCode, {
    // ...
    plugins: [
      [BabelPluginReactCompiler, ReactCompilerConfig],
    ],
  // ...
  });

  if (result === null) {
    this.callback(
      Error(
        \`Failed to transform "\${options.filename}"\`
      )
    );
    return;
  }

  this.callback(
    null,
    result.code,
    result.map === null ? undefined : result.map
  );
}

module.exports = reactCompilerLoader;
`})}),`
`,t.jsx(e.p,{children:"我们可以在 React 官方了解到更多关于 React Compiler 的介绍与注意事项。具体地址如下"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://react.dev/learn/react-compiler",children:"https://react.dev/learn/react-compiler"})}),`
`,t.jsxs(e.p,{children:["引入成功之后，我们可以在开发者工具中的 ",t.jsx(e.code,{children:"Sources"})," 面板的 ",t.jsx(e.code,{children:"Page"})," 目录中查看编译之后的代码，长得跟右侧代码差不多就表示编译成功了。"]})]})}function lw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(mp,{...n})}):mp(n)}const iw={"App.js":aw};function cw(){return t.jsx(z,{files:iw,hidePreview:!0,renderArticle:n=>t.jsx(lw,{components:{code:n}})})}const ow=`import { c as _c } from "/src/mycache.js";
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=f1f30d19"; const useState = __vite__cjsImport4_react["useState"];
import reactLogo from "/src/assets/react.svg?import";
import viteLogo from "/vite.svg?import";
import "/src/App.css";
function App() {
  _s();
  const $ = _c(13);
  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 13; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }
  const [count, setCount] = useState(0);
  let t0;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxDEV("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ jsxDEV("img", { src: viteLogo, className: "logo", alt: "Vite logo" }, void 0, false, {
        fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
        lineNumber: 19,
        columnNumber: 55
      }, this) }, void 0, false, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 19,
      columnNumber: 10
    }, this);
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxDEV("div", { children: [
        t0,
        /* @__PURE__ */ jsxDEV("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ jsxDEV("img", { src: reactLogo, className: "logo react", alt: "React logo" }, void 0, false, {
            fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
            lineNumber: 27,
            columnNumber: 63
          }, this) }, void 0, false, {
          fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
          lineNumber: 27,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 27,
      columnNumber: 10
    }, this);
    t2 = /* @__PURE__ */ jsxDEV("h1", { children: "Vite + React" }, void 0, false, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 28,
      columnNumber: 10
    }, this);
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => setCount((count_0) => count_0 + 1);
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== count) {
    t4 = /* @__PURE__ */ jsxDEV("button", { onClick: t3, children: [
        "count is ",
        count
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 44,
      columnNumber: 10
    }, this);
    $[5] = count;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxDEV("p", { children: [
        "Edit ",
        /* @__PURE__ */ jsxDEV("code", { children: "src/App.jsx" }, void 0, false, {
          fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
          lineNumber: 52,
          columnNumber: 18
        }, this),
        " and save to test HMR"
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 52,
      columnNumber: 10
    }, this);
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== t4) {
    t6 = /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        t4,
        t5
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 59,
      columnNumber: 10
    }, this);
    $[8] = t4;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxDEV("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" }, void 0, false, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 67,
      columnNumber: 10
    }, this);
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  let t8;
  if ($[11] !== t6) {
    t8 = /* @__PURE__ */ jsxDEV(Fragment, { children: [
        t1,
        t2,
        t6,
        t7
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 74,
      columnNumber: 10
    }, this);
    $[11] = t6;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  return t8;
}
_s(App, "7rNyFrw5FVpFFCFYkWAjQci0NUk=");
_c2 = App;
export default App;
var _c2;
$RefreshReg$(_c2, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/yangbo/develop/r18-with-compiler/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
`,dw=`import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
`;function pp(n){const e={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"非常的 nice，经过几天的尝试和研究，我在低版本中成功引入了 Compiler，目前已经在 vite 中运行起来了。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["我的思考过程，你可以",t.jsx(e.a,{href:"https://mp.weixin.qq.com/s/RQ1c6YdNgyG-vCCPQBFMjw",children:"点击这篇文章阅读"}),"，其他脚手架暂时还没试过，不过基本原理应该都是一致的，大家可以自己按照我的思路尝试一下"]}),`
`]}),`
`,t.jsxs(e.p,{children:["这里的关键就是在低版本中，缓存 hook ",t.jsx(e.code,{children:"useCacheMemo"})," 的缺失，当然这个名字只是一个语义化的称呼，在底层可能不一定是这个名字，我们只需要找个地方自定义这个 hook 即可。代码如下，非常的简单。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import { useState } from "react";

export function c(size) {
  return useState(() => new Array(size))[0];
}
`})}),`
`,t.jsxs(e.p,{children:["我们将其存储在某一个文件中，并取名为 ",t.jsx(e.code,{children:"usecache.js"})]}),`
`,t.jsxs(e.p,{children:["接下来要在 ",t.jsx(e.code,{children:"vite.config.js"})," 中，配置具体的 ReactCompilerConfig，让 ",t.jsx(e.code,{children:"runtimeModule"})," 指向我们刚才的 usecache.js。这里的目的是重新改写 ",t.jsx(e.code,{children:"react-compiler-runtime"})," 的引用路径。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const ReactCompilerConfig = {
  runtimeModule: "@/usecache",
};
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"@/*"})," 是在 vite 中配置的路径别名，完整的配置文件如下"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const ReactCompilerConfig = {
  runtimeModule: "@/usecache",
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      }
    })
  ],
})
`})}),`
`,t.jsx(e.p,{children:"配置搞好之后，我们再引入 babel 插件，就可以正常运行了。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`yarn add babel-plugin-react-compiler
`})}),`
`,t.jsx(e.p,{children:"运行项目，查看开发者工具的 Sources 面板中的 Page 目录，我们发现 App.jsx 已经被编译成了右侧代码的样子。搞定。"})]})}function uw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(pp,{...n})}):pp(n)}const mw={"App.js":ow,原代码:dw};function pw(){return t.jsx(z,{files:mw,hidePreview:!0,renderArticle:n=>t.jsx(uw,{components:{code:n}})})}const hw=`import { c as _c } from "/src/mycache.js";
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=f1f30d19"; const useState = __vite__cjsImport4_react["useState"];
import reactLogo from "/src/assets/react.svg?import";
import viteLogo from "/vite.svg?import";
import "/src/App.css";
function App() {
  _s();
  const $ = _c(13);
  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 13; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }
  const [count, setCount] = useState(0);
  let t0;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxDEV("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ jsxDEV("img", { src: viteLogo, className: "logo", alt: "Vite logo" }, void 0, false, {
        fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
        lineNumber: 19,
        columnNumber: 55
      }, this) }, void 0, false, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 19,
      columnNumber: 10
    }, this);
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxDEV("div", { children: [
        t0,
        /* @__PURE__ */ jsxDEV("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ jsxDEV("img", { src: reactLogo, className: "logo react", alt: "React logo" }, void 0, false, {
            fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
            lineNumber: 27,
            columnNumber: 63
          }, this) }, void 0, false, {
          fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
          lineNumber: 27,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 27,
      columnNumber: 10
    }, this);
    t2 = /* @__PURE__ */ jsxDEV("h1", { children: "Vite + React" }, void 0, false, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 28,
      columnNumber: 10
    }, this);
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => setCount((count_0) => count_0 + 1);
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== count) {
    t4 = /* @__PURE__ */ jsxDEV("button", { onClick: t3, children: [
        "count is ",
        count
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 44,
      columnNumber: 10
    }, this);
    $[5] = count;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxDEV("p", { children: [
        "Edit ",
        /* @__PURE__ */ jsxDEV("code", { children: "src/App.jsx" }, void 0, false, {
          fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
          lineNumber: 52,
          columnNumber: 18
        }, this),
        " and save to test HMR"
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 52,
      columnNumber: 10
    }, this);
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== t4) {
    t6 = /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        t4,
        t5
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 59,
      columnNumber: 10
    }, this);
    $[8] = t4;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxDEV("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" }, void 0, false, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 67,
      columnNumber: 10
    }, this);
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  let t8;
  if ($[11] !== t6) {
    t8 = /* @__PURE__ */ jsxDEV(Fragment, { children: [
        t1,
        t2,
        t6,
        t7
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 74,
      columnNumber: 10
    }, this);
    $[11] = t6;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  return t8;
}
_s(App, "7rNyFrw5FVpFFCFYkWAjQci0NUk=");
_c2 = App;
export default App;
var _c2;
$RefreshReg$(_c2, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/yangbo/develop/r18-with-compiler/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
`,fw=`import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
`;function hp(n){const e={a:"a",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"在 webpack 中引入会稍微麻烦一点，因为我们要自己定义一个 Loader，许多小伙伴对于 webpack 自定义 loader 比较陌生，因此我这里直接放了一个比较完整的代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const babel = require('@babel/core')


const ReactCompilerConfig = {
  // 这里是针对 react 低版本的配置，务必要按需使用
  // runtimeModule: "src/hooks/useMemoCache",
};

const BabelPluginReactCompiler = require('babel-plugin-react-compiler');

function reactCompilerLoader(sourceCode, sourceMap) {
  // ...
  const result = babel.transformSync(sourceCode, {
    // ...
    sourceFileName: this.resourcePath,
    filename: this.resourcePath,
    plugins: [
      [BabelPluginReactCompiler, ReactCompilerConfig],
    ],
    // ...
  });

  if (result === null) {
    this.callback(
      Error(
        \`Failed to transform "\${options.filename}"\`
      )
    );
    return;
  }

  this.callback(
    null,
    result.code,
    result.map === null ? undefined : result.map
  );
}

module.exports = reactCompilerLoader;
`})}),`
`,t.jsxs(e.p,{children:["定义好了这个 loader 之后，这里我们需要注意，如果你是 React 低版本，那么就需要使用我们自己定义一个 ",t.jsx(e.code,{children:"react-compiler-runtime"}),"，这里需要注意的是，与 vite 中低版本使用的项目的细微差异。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// src/hooks/useMemoCache
const React = require('react');
const $empty = Symbol.for("react.memo_cache_sentinel");
/**
 * DANGER: this hook is NEVER meant to be called directly!
 *
 * Note that this is a temporary userspace implementation of this function
 * from React 19. It is not as efficient and may invalidate more frequently
 * than the official API. Please upgrade to React 19 as soon as you can.
 **/
export function c(size: number) {
  return React.useState(() => {
    const $ = new Array(size);
    for (let ii = 0; ii < size; ii++) {
      $[ii] = $empty;
    }
    // @ts-ignore
    $[$empty] = true;
    return $;
  })[0];
}
`})}),`
`,t.jsx(e.p,{children:"然后在 Loader 中修改 ReactCompilerConfig 的配置，植入到你自己的项目中时，请一定要注意路径要对应上"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const ReactCompilerConfig = {
  runtimeModule: "src/hooks/useMemoCache",
};
`})}),`
`,t.jsx(e.p,{children:"然后在 webpack 的 Loader 配置中引入即可。"}),`
`,t.jsxs(e.p,{children:["你也可以使用 ",t.jsx(e.code,{children:"react-compiler-webpack"})," 这个插件使用。具体的使用方式请结合",t.jsx(e.a,{href:"https://github.com/SukkaW/react-compiler-webpack",children:"它的github说明使用"}),"。"]}),`
`,t.jsx(e.p,{children:"只是需要注意的是，在低版本中，我们需要额外配置 runtime 的指向"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`{
  test: /\\.[mc]?[jt]sx$/i,
  exclude: /node_modules/,
  use: [
    // babel-loader, swc-loader, esbuild-loader, or anything you like to transpile JSX should go here.
    // If you are using rspack, the rspack's buiilt-in react transformation is sufficient.
    // { loader: 'swc-loader' },
    // Now add forgetti-loader
    {
      loader: reactCompilerLoader,
      options: defineReactCompilerLoaderOption({
        runtimeModule: "src/hooks/useMemoCache"
      })
    }
  ]
}
`})})]})}function xw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(hp,{...n})}):hp(n)}const gw={"App.js":hw,原代码:fw};function jw(){return t.jsx(z,{files:gw,hidePreview:!0,renderArticle:n=>t.jsx(xw,{components:{code:n}})})}const vw=`import {useState} from 'react'
import Button from './Button'
import {_c} from './useCache.js'

export default function Counter() {
  const $ = _c(10);

  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 10; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }

  const [count, setCount] = useState(0);
  let t0;

  if ($[0] !== count) {
    t0 = function __clickHanler() {
      setCount(count + 1);
    };

    $[0] = count;
    $[1] = t0;
  } else {
    t0 = $[1];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div>A Base Case</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== count) {
    t2 = <div>currnt count is: {count}</div>;
    $[3] = count;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== __clickHanler) {
    t3 = <Button onClick={__clickHanler}>Increment</Button>;
    $[5] = __clickHanler;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div>
        {t1}
        <div className="flex items-center justify-between">
          {t2}
          {t3}
        </div>
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  return t4;
}
`,bw=`import {useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function __clickHanler() {
    setCount(count + 1)
  }

  return (
    <div>
      <div>A Base Case</div>
      <div className="flex items-center justify-between">
        <div>currnt count is: {count}</div>
        <button onClick={__clickHanler}>Increment</button>
      </div>
    </div>
  )
}
`;function yw(){const[n,e]=u.useState(0);function s(){e(n+1)}return t.jsxs("div",{children:[t.jsx("div",{children:"A Base Case"}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:["currnt count is: ",n]}),t.jsx("button",{onClick:s,children:"Increment"})]})]})}function fp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"如何查看编译之后的代码"})}),`
`,t.jsxs(e.p,{children:["通常情况下，你只需要在合适的位置打印一个 log。然后我们就可以通过下图所示的位置，在 ",t.jsx(e.code,{children:"console"})," 面板中，点击跳转到编译之后的代码。"]}),`
`,t.jsx(e.p,{children:"当然，我们可以直接在 Sources 面板中查看。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`Chrome 开发者工具 -> Sources -> Page -> src
`})}),`
`,t.jsxs(e.p,{children:["除此之外，你也可以把代码拷贝到 ",t.jsx("a",{href:"https://playground.react.dev/",target:"_blank",children:t.jsx(e.strong,{children:"React Compiler Playground"})})," 。这是一个在线的代码编译转换工具。我们可以利用这个工具方便的将代码转换成 Compiler 编译之后的代码，学习非常方便。"]}),`
`,t.jsx(e.p,{children:"如果你存在任何疑问，完整的链接可以包含你的具体案例，在沟通和交流上非常方便。你可以在 react 的 issue 里看到大量 Compiler 不支持的骚操作。"}),`
`,t.jsx(e.p,{children:"知道了怎么查看编译之后的代码之后，那我们就需要看得懂才行。因此接下来"}),`
`,t.jsx(e.h2,{children:"2"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Symbol.for"})}),`
`,t.jsx(e.p,{children:"我本来最初的想法是看懂编译之后的代码不是很有必要。但是偶尔会出现一些情况，程序运行的结果跟我预想的不一样。"}),`
`,t.jsx(e.p,{children:"出现这种迷惑行为的时候就感觉贼困惑，为啥会这样呢？布吉岛 ～，如何调整我自己的写法呢？也不知道。我很不喜欢这种一脸懵逼的感觉。"}),`
`,t.jsx(e.p,{children:"看是得看懂才行。虽然这个代码很不像是正常人应该去阅读的代码。先来感受一下编译之后的代码长什么样，下面是一个案例的运行结果与其对应的代码。"}),`
`,t.jsx(_,{children:t.jsx(yw,{})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function Counter() {
  const $ = _c(10);

  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 10; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }

  const [count, setCount] = useState(0);
  let t0;

  if ($[0] !== count) {
    t0 = function __clickHanler() {
      setCount(count + 1);
    };

    $[0] = count;
    $[1] = t0;
  } else {
    t0 = $[1];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div>A Base Case</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== count) {
    t2 = <div>currnt count is: {count}</div>;
    $[3] = count;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== __clickHanler) {
    t3 = <button onClick={__clickHanler}>Increment</button>;
    $[5] = __clickHanler;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div>
        {t1}
        <div className="flex items-center justify-between">
          {t2}
          {t3}
        </div>
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  return t4;
}
`})}),`
`,t.jsxs(e.p,{children:["在 Compiler 编译后的代码中，有一个比较少见的语法会频繁出现：",t.jsx(e.code,{children:"Symbol.for"}),"，我先把这个知识点科普一下。"]}),`
`,t.jsx(e.p,{children:"Symbol 在 JavaScript 中，是一种基础数据类型。我们常常用 Symbol 来创建全局唯一值。例如，下面两个变量，虽然写法是一样的，但是他们的比较结果并不相等"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`var a = Symbol('hello')
var b = Symbol('hello')

a === b // false
`})}),`
`,t.jsx(e.p,{children:"Symbol.for 则不同，Symbol.for 传入相同字符串时，它不会重复创建不同的值。而是在后续的调用中，读取之前已经创建好的值。因此下面的代码对比结果为 true"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`var a = Symbol.for('for')
var b = Symbol.for('for')

a === b // true
`})}),`
`,t.jsxs(e.p,{children:["或者我们用另外一种说法来表达这种",t.jsx(e.strong,{children:"创建 -> 读取"}),"的过程。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`// 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"
Symbol.for("foo");

// 从 symbol 注册表中读取键为"foo"的 symbol
Symbol.for("foo"); 
`})}),`
`,t.jsxs(e.p,{children:["在 Compiler 编译后的代码中，组件依赖 ",t.jsx(e.code,{children:"useMemoCache"})," 来缓存所有运算表达式，包括组件、函数等。在下面的例子中，",t.jsx(e.code,{children:"useMemoCache"})," 传入参数为 12，说明在该组件中，有 12 个单位需要被缓存。"]}),`
`,t.jsx(e.p,{children:"在初始化时，会默认给所有的缓存变量初始一个值。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`$ = useMemoCache(12)

for (let $i = 0; $i < 12; $i += 1) {
  $[$i] = Symbol.for("react.memo_cache_sentinel");
}
`})}),`
`,t.jsxs(e.p,{children:["那么，组件就可以根据缓存值是否等于 ",t.jsx(e.code,{children:"Symbol.for"})," 的初始值，来判断某一段内容是否被初始化过。",t.jsx(e.strong,{children:"如果相等，则没有被初始化。"})]}),`
`,t.jsx(e.p,{children:"如下："}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`let t1;

if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
  t1 = <div id="tips">Tab 切换</div>;
  $[1] = t1;
} else {
  t1 = $[1];
}
`})}),`
`,t.jsx(e.h2,{children:"3"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"缓存原理详细分析"})}),`
`,t.jsx(e.p,{children:"我们需要重新详细解读一下上面那段代码。这是整个编译原理的核心理论。对于每一段可缓存内容，这里以一个元素为例，"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`<div>A Base Case</div>
`})}),`
`,t.jsx(e.p,{children:"我们会先声明一个中间变量，用于接收元素对象。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`let t1
`})}),`
`,t.jsxs(e.p,{children:["但是在接收之前，我们需要判断一下是否已经初始化过。如果没有初始化，那么则执行如下逻辑，创建该元素对象。创建完成之后，赋值给 t1，并缓存在 ",t.jsx(e.code,{children:"$[1]"})," 中。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
  t1 = <div>A Base Case</div>;
  $[2] = t1;
}
`})}),`
`,t.jsxs(e.p,{children:["如果已经初始化过，那么就直接读取之前缓存在 ",t.jsx(e.code,{children:"$[1]"})," 中的值即可。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`...
} else {
  t1 = $[2];
}
`})}),`
`,t.jsx(e.p,{children:"这样，当函数组件多次执行时，该元素组件就永远只会创建一次，而不会多次创建。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["这里需要注意的是，",t.jsx(e.strong,{children:"判断成本非常低"}),"，但是创建元素的成本会偏高，因此这种置换是非常划算的，我们后续会明确用数据告诉大家判断的成本"]}),`
`]}),`
`,t.jsx(e.p,{children:"对于一个函数组件中声明的函数而言，缓存的逻辑会根据情况不同有所变化。这里主要分为两种情况，一种情况是函数内部不依赖外部状态，例如"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function __clickHanler(index) {
  tabRef.current[index].appeared = true
  setCurrent(index)
}
`})}),`
`,t.jsx(e.p,{children:"那么编译缓存逻辑与上面的元素是完全一致的，代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`let t0;

if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
  t0 = function __clickHanler(index) {
    tabRef.current[index].appeared = true;
    setCurrent(index);
  };

  $[0] = t0;
} else {
  t0 = $[0];
}
`})}),`
`,t.jsx(e.p,{children:"另外一种情况是有依赖外部状态，例如"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const [count, setCount] = useState(0)

// 此时依赖 counter，注意区分他们的细微差别
function __clickHanler() {
  setCount(count + 1)
}
`})}),`
`,t.jsx(e.p,{children:"那么编译结果，则只需要把是否重新初始化的判断条件调整一下即可"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`let t0;

if ($[0] !== count) {
  t0 = function __clickHanler() {
    setCount(count + 1);
  };

  $[0] = count;
  $[1] = t0;
} else {
  t0 = $[1];
}
`})}),`
`,t.jsx(e.p,{children:"这样，当 count 发生变化，t0 就会重新赋值，而不会采用缓存值，从而完美的绕开了闭包问题。"}),`
`,t.jsxs(e.p,{children:["除此在外，无论是函数、还是组件元素的缓存判断条件，都会优先考虑外部条件，使用 ",t.jsx(e.code,{children:"Symbol.for"})," 来判断时，则表示没有其他任何值的变化会影响到该缓存结果。"]}),`
`,t.jsx(e.p,{children:"例如，一个组件元素如下所示"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`<button onClick={__clickHanler}>counter++</button>
`})}),`
`,t.jsxs(e.p,{children:["此时它的渲染结果受到 ",t.jsx(e.code,{children:"__clickHanler"})," 的影响，因此，判断条件则不会使用 ",t.jsx(e.code,{children:"Symbol.for"}),"，编译结果如下"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`let t3;

if ($[5] !== __clickHanler) {
  t3 = <button onClick={__clickHanler}>Increment</button>;
  $[5] = __clickHanler;
  $[6] = t3;
} else {
  t3 = $[6];
}
`})}),`
`,t.jsxs(e.p,{children:["又例如下面这个元素组件，他的渲染结果受到 ",t.jsx(e.code,{children:"counter"})," 的影响。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<div>currnt count is: {count}</div>
`})}),`
`,t.jsx(e.p,{children:"因此，它的编译结果为："}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`let t2;

if ($[3] !== count) {
  t2 = <div>currnt count is: {count}</div>;
  $[3] = count;
  $[4] = t2;
} else {
  t2 = $[4];
}
`})}),`
`,t.jsx(e.p,{children:"对与这样的编译细节的理解至关重要。在以后的开发中，我们就可以完全不用担心闭包问题而导致程序出现你意想不到的结果了。"}),`
`,t.jsx(e.p,{children:"所有的可缓存对象，全部都是这个类似的逻辑。他的粒度细到每一个函数，每一个元素。这一点意义非凡，他具体代表着什么，我们在后续聊性能优化的时候再来明确。"}),`
`,t.jsx(e.p,{children:"不过需要注意的是，对于 map 的循环语法，在编译结果中，缓存的是整个结果，而不是渲染出来的每一个元素。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`{tabs.map((item, index) => {
  return (
    <item.component
      appearder={item.appeared}
      key={item.title}
      selected={current === index}
    />
  )
})}
`})}),`
`,t.jsx(e.p,{children:"编译结果表现如下："}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`let t4;

if ($[7] !== current) {
  t4 = tabs.map((item_0, index_1) => (
    <item_0.component
      appearder={item_0.appeared}
      key={item_0.title}
      selected={current === index_1}
    />
  ));
  $[7] = current;
  $[8] = t4;
} else {
  t4 = $[8];
}
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"对这种情况的了解非常重要，因为有的时候我们需要做更极限的性能优化时，map 循环可能无法满足我们的需求。因为此时循环依然在执行，后面的案例中我们会更具体的分析 Map 的表现"}),`
`]}),`
`,t.jsx(e.p,{children:"目前这个阶段，我们最主要的是关心程序执行逻辑与预想的要保持一致，因此接下来，我们利用三个案例，来分析编译之后的执行过程。"}),`
`,t.jsx(e.h2,{children:"4"}),`
`,t.jsx(e.p,{children:"实践案例一：counter 递增"}),`
`,t.jsxs(e.p,{children:["通过上面对 Compiler 渲染结果的理解，我们应该已经大概知道下面这段代码最终会渲染成什么样。我们目前要思考的问题就是，这个例子，编译之后，",t.jsx(e.strong,{children:"收益表现在哪里？"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function Index() {
  const [counter, setCounter] = useState(0)

  function __clickHanler() {
    console.log(counter)
    setCounter(counter + 1)
  }

  return (
    <div>
      <div id='tips'>基础案例，state 递增</div>
      <button onClick={__clickHanler}>counter++</button>
      <div className="counter">counter: {counter}</div>
    </div>
  )
}
`})}),`
`,t.jsxs(e.p,{children:["一起来分析一下，当我们点击按钮时，此时 ",t.jsx(e.code,{children:"counter"})," 增加，因此 ",t.jsx(e.code,{children:"__clickHanler"})," 无法缓存，需要重新创建，那么 button 按钮和 counter 标签都无法缓存。"]}),`
`,t.jsxs(e.p,{children:["此时，只有 ",t.jsx(e.code,{children:"tips"})," 元素可以被缓存。但是 ",t.jsx(e.code,{children:"tips"})," 元素本身是一个基础元素，在原本的逻辑中，经历一个简单的判断就能知道不需要重新创建节点因此本案例的编译之后收益非常效果。"]}),`
`,t.jsx(e.p,{children:"编译代码结果如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function Index() {
  const $ = _c(10);

  const [counter, setCounter] = useState(0);
  let t0;

  if ($[0] !== counter) {
    t0 = function __clickHanler() {
      console.log(counter);
      setCounter(counter + 1);
    };

    $[0] = counter;
    $[1] = t0;
  } else {
    t0 = $[1];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div id="tips">基础案例，state 递增</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== __clickHanler) {
    t2 = <button onClick={__clickHanler}>counter++</button>;
    $[3] = __clickHanler;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== counter) {
    t3 = <div className="counter">counter: {counter}</div>;
    $[5] = counter;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div>
        {t1}
        {t2}
        {t3}
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  return t4;
}
`})}),`
`,t.jsx(e.h2,{children:"5"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"实践案例二：昂贵的子组件"})}),`
`,t.jsx(e.p,{children:"在上面一个例子的基础之上，我们新增一个子组件。该子组件的渲染非常耗时。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function Expensive() {
  var cur = performance.now()
  while (performance.now() - cur < 1000) {
    // block 1000ms
  }
  console.log('hellow')
  return (
    <div>我是一个耗时组件</div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"父组件中引入该子组件，其他逻辑完全一致。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-diff",children:`function Index() {
  const [counter, setCounter] = useState(0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div id='tips'>基础案例，state 递增</div>
      <button onClick={__clickHanler}>counter++</button>
      <div className="counter">counter: {counter}</div>
+      <Expensive />
    </div>
  )
}
`})}),`
`,t.jsxs(e.p,{children:["我们在之前「React 知命境」的学习中，对于性能优化已经有非常深厚的积累。因此我们知道，在这种情况之下，由于父组件的状态发生了变化，导致子组件 ",t.jsx(e.code,{children:"Expensive"})," 会在 counter 递增时重复执行。从而导致页面渲染时非常卡顿。"]}),`
`,t.jsx(e.p,{children:"编译之后，针对这一段逻辑的优化代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`let t4;

if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
  t4 = <Expensive />;
  $[7] = t4;
} else {
  t4 = $[7];
}
`})}),`
`,t.jsx(e.p,{children:"正如代码所表达的一样，由于这一个组件，并没有依赖任何外部状态，因此只需要在初始化时赋值一次即可。后续直接使用缓存值。"}),`
`,t.jsxs(e.p,{children:["因此，在这个案例中，Compiler 编译之后的",t.jsx(e.strong,{children:"优化效果非常明显，收益巨大"}),"。"]}),`
`,t.jsx(e.h2,{children:"6"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"实践案例三：Tab 切换"})}),`
`,t.jsx(e.p,{children:"这个案例会非常的复杂，经验稍微欠缺一点的前端开发可能都实现不了。我们先来看一下我想要实现的演示效果。"}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"https://files.mdnice.com/user/3925/551a8f32-866d-4155-881a-5e3bce0d38ff.gif",alt:""})}),`
`,t.jsx(e.p,{children:"从演示效果上来看，这是一个普通的 tab 切换。但是先别急，我还有要求。我希望能实现极限的性能优化。"}),`
`,t.jsx(e.p,{children:"1、我希望首次渲染时，页面渲染更少的内容，因此此时，只能先渲染默认的 Panel。其他 Panel 需要在点击对应的按钮时，才渲染出来。"}),`
`,t.jsx(e.p,{children:"2、在切换过程中，我希望能够缓存已经渲染好的 Panel，只需要在样式上做隐藏，而不需要在后续的交互中重复渲染内容"}),`
`,t.jsx(e.p,{children:"3、当四个页面都渲染出来之后，再做切换时，此时只会有两个页面会发生变化，上一个选中的页面与下一个选中的页面。另外的页面不参与交互，则不应该 re-render。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"这个案例和要求不算特别难，但是对综合能力的要求还是蛮高的，大家有空可以自己尝试实现一下，看看能不能完全达到要求"}),`
`]}),`
`,t.jsx(e.p,{children:"具体的完整实现我们会在后续的直播中跟大家分享。大家可以加我好友然后进 React19 讨论群，React19 相关的直播消息会第一时间在群内公布。"}),`
`,t.jsx(e.p,{children:"这里，我主要想跟大家分享的就是 map 方法的小细节。有如下代码"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`{tabs.map((item, index) => {
  return (
    <item.component
      appearder={item.appeared}
      key={item.title}
      selected={current === index}
    />
  )
})}
`})}),`
`,t.jsx(e.p,{children:"它的编译结果表现如下："}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`let t4;

if ($[7] !== current) {
  t4 = tabs.map((item_0, index_1) => (
    <item_0.component
      appearder={item_0.appeared}
      key={item_0.title}
      selected={current === index_1}
    />
  ));
  $[7] = current;
  $[8] = t4;
} else {
  t4 = $[8];
}
`})}),`
`,t.jsxs(e.p,{children:["我们会发现，此时编译缓存的是整个 map 表达式，但是由于 map 表达式又依赖于 ",t.jsx(e.code,{children:"current"}),"，因此，在我们点击切换的交互过程中，每一次的 current 都会发生变化，那么这里针对 map 表达式的缓存就没有了任何意义。"]}),`
`,t.jsxs(e.p,{children:["但是实际上，我们可以观察到，我们有 4 个 Panel，点击切换的交互发生时，实际上只有两个 Pannel 发生了变化。因此，最极限的优化是，只有这两个组件对应的函数需要重新 ",t.jsx(e.code,{children:"re-render"}),"，那么我们的代码应该怎么写呢？"]}),`
`,t.jsx(e.p,{children:"其实非常简单，那就是不用 map，将数组拆开直接手写，代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`let c1 = tabRef.current[0]
let c2 = tabRef.current[1]
let c3 = tabRef.current[2]
let c4 = tabRef.current[3]
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<c1.component appearder={c1.appeared} selected={current === 0}/>
<c2.component appearder={c2.appeared} selected={current === 1}/>
<c3.component appearder={c3.appeared} selected={current === 2}/>
<c4.component appearder={c4.appeared} selected={current === 3}/>
`})}),`
`,t.jsx(e.p,{children:"然后，我们就会发现，在编译结果中，不再缓存 map 表达式的结果，而是缓存每一个组件"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`let t5;

if ($[7] !== c1.component || $[8] !== c1.appeared || $[9] !== t4) {
  t5 = <c1.component appearder={c1.appeared} selected={t4} />;
  $[7] = c1.component;
  $[8] = c1.appeared;
  $[9] = t4;
  $[10] = t5;
} else {
  t5 = $[10];
}
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"这样做的收益在特定场景下的收益将会非常高。"}),`
`]}),`
`,t.jsx(e.h2,{children:"7"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"强悍的性能：细粒度记忆化更新"})}),`
`,t.jsx(e.p,{children:"经过上面的学习，想必各位道友对 React Compiler 的工作机制已经有了非常深刻的理解。此时，我们就需要分析一下，这样的记忆化更新机制，到底有多强。"}),`
`,t.jsx(e.p,{children:"首先明确一点，和 Vue 等其他框架的依赖收集不同，React Compiler 依然不做依赖收集。"}),`
`,t.jsx(e.p,{children:"React 依然通过从根节点自上而下的 diff 来找出需要更新的节点。在这个过程中，我们会通过大量的判断来决定使用缓存值。可以明确的是，Compiler 编译之后的代码，缓存命中的概率非常高，几乎所有应该缓存的元素和函数都会被缓存起来。"}),`
`,t.jsx(e.p,{children:"**因此，React Compiler 也能够在不做依赖收集的情况下，做到元素级别的超级细粒度更细。**但是，这样做的代价就是，React 需要经历大量的判断来决定是否需要更新。"}),`
`,t.jsx(e.p,{children:"所以这个时候，我们就需要明确，我所谓的大量判断的时间成本，到底有多少？它会不会导致新的性能问题？"}),`
`,t.jsx(e.p,{children:"可以看到，几乎所有的比较都是使用了全等比较，因此，我们可以写一个例子来感知一下，超大量的全等比较到底需要花费多少时间。"}),`
`,t.jsx(e.p,{children:"测试代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`var cur = performance.now()

for(let i = 0; i < 1000000; i++) {
  'xxx' == 'xx'
}
var now = performance.now()
console.log(now - cur)
`})}),`
`,t.jsxs(e.p,{children:["执行结果，比较 100 万次，只需要花费不到 ",t.jsx(e.strong,{children:"1.3 毫秒"}),"。卧槽(¬д¬。)，这太强了啊。我们很难有项目能够达到 1000,000 次的比较级别，甚至许多达到 10000 都难。那也就意味着，这里大量的比较成本，几乎可以忽略不计。"]}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"https://files.mdnice.com/user/3925/c7215fd7-c92d-4aaa-8433-8b93be700fa7.png",alt:""})}),`
`,t.jsx(e.p,{children:"为了对比具体的效果，我们可以判断一下依赖收集的时间成本。"}),`
`,t.jsx(e.p,{children:"首先是使用数组来收集依赖。依然是 100 万次，具体执行结果如下。耗时 8 毫秒。"}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"https://files.mdnice.com/user/3925/8c8d4d13-dc2f-4855-a709-36811a895ba4.png",alt:""})}),`
`,t.jsx(e.p,{children:"使用 Map 来收集依赖。100 万次依赖收集耗时 54 ms。"}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"https://files.mdnice.com/user/3925/7d78bae3-15cd-48cb-aeda-46250e404ddf.png",alt:""})}),`
`,t.jsx(e.p,{children:"使用 WeakMap 来收集依赖，那就更慢了。100万次依赖收集耗时 200 毫秒。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"WeakMap 的 key 不能是一个 number 类型"}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"https://files.mdnice.com/user/3925/f140d968-30ef-42c9-961a-f8fcb8e1cbf0.png",alt:""})}),`
`,t.jsx(e.p,{children:"数据展示给大家了，具体强不强，大家自行判断。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["这里我要明确的是，这样的性能表现，在之前版本的项目中，合理运用 ",t.jsx(e.code,{children:"useCallback/memo"})," 也能做到。只是由于对 React 底层默认命中规则不理解，导致大多数人不知道如何优化到这种程度。React Compiler 简化了这个过程"]}),`
`]}),`
`,t.jsx(e.h2,{children:"8"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"React Compiler 最佳实践"})}),`
`,t.jsx(e.p,{children:"有许多骚操作，React Compiler 并不支持，例如下面这种写法。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`{[1, 2, 3, 4, 5].map((counter) => {
  const [number, setNumber] = useState(0)
  return (
    <div key={\`hello\${counter}\`} onClick={() => setNumber(number + 1)}>
      number: {number}
    </div>
  )
})}
`})}),`
`,t.jsx(e.p,{children:"这个操作骚归骚，但是真的有大佬想要这样写。React 之前的版本依然不支持这种写法。不过好消息是，React 19 支持了..."}),`
`,t.jsx(e.p,{children:"但是 React Compiler 并不支持。对于这些不支持的语法，React Compiler 的做法就是直接跳过不编译，而直接沿用原组件写法。"}),`
`,t.jsx(e.p,{children:"因此，React Compiler 的最佳实践我总结了几条"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"1、不再使用 useCallback、useMemo、Memo 等缓存函数"}),`
`,t.jsx(e.li,{children:"2、丢掉闭包的心智负担，放心使用即可"}),`
`,t.jsx(e.li,{children:"3、引入严格模式"}),`
`,t.jsx(e.li,{children:"4、在你不熟悉的时候引入 eslint-plugin-react-compiler"}),`
`,t.jsx(e.li,{children:"5、当你熟练之后，弃用它，因为有的时候我们就是不想让它编译我们的组件"}),`
`,t.jsx(e.li,{children:"6、更多的使用 use 与 Action 来处理异步逻辑"}),`
`,t.jsx(e.li,{children:"7、尽可能少的使用 useEffect"}),`
`]}),`
`,t.jsxs(e.p,{children:["因此，一个小小的彩蛋就是，当你不希望你的组件被 Compiler 编译时，你只需要使用 ",t.jsx(e.code,{children:"var"})," 来声明状态即可。因为这不符合它的语法规范"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`var [counter, setCounter] = useState(0)
`})}),`
`,t.jsxs(e.p,{children:["而你改成 ",t.jsx(e.code,{children:"const/let"}),"，它就会又重新编译该组件。可控性与自由度非常高。"]}),`
`,t.jsx(e.h2,{children:"9"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"总结"})}),`
`,t.jsx(e.p,{children:"React Compiler 在保持了函数式编程的开发范式的同时，弥补了之前可能存在性能问题的缺陷，这无疑是进一步确认了 React 在前端框架方向都领先地位。"}),`
`,t.jsx(e.p,{children:"并且 React Compiler 上手成本低，理解起来也不难，未来肯定会快速被开发者所接受。作为开发者我们只需要耐心等待整个生态的跟进，目前从 npm 下载数据上来看，整个生态适配 React19 的积极性非常高。因此距离能成熟使用的时间肯定是不会太长。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"顶尖前端都在关注我，就差你啦，右下角"}),`
`,t.jsx(e.p,{children:"成为 React 高手，推荐阅读 React 哲学"}),`
`]})]})}function Nw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(fp,{...n})}):fp(n)}const ww={"App.js":vw,原代码:bw};function Sw(){return t.jsx(z,{files:ww,renderArticle:n=>t.jsx(Nw,{components:{code:n}})})}const kw=`import {useState} from 'react'
import Button from './Button'
import {_c} from './useCache.js'

export default function Counter() {
  const $ = _c(10);

  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 10; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }

  const [count, setCount] = useState(0);
  let t0;

  if ($[0] !== count) {
    t0 = function __clickHanler() {
      setCount(count + 1);
    };

    $[0] = count;
    $[1] = t0;
  } else {
    t0 = $[1];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div>A Base Case</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== count) {
    t2 = <div>currnt count is: {count}</div>;
    $[3] = count;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== __clickHanler) {
    t3 = <Button onClick={__clickHanler}>Increment</Button>;
    $[5] = __clickHanler;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div>
        {t1}
        <div className="flex items-center justify-between">
          {t2}
          {t3}
        </div>
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  return t4;
}
`,Cw=`import {useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function __clickHanler() {
    setCount(count + 1)
  }

  return (
    <div>
      <div>A Base Case</div>
      <div className="flex items-center justify-between">
        <div>currnt count is: {count}</div>
        <button onClick={__clickHanler}>Increment</button>
      </div>
    </div>
  )
}
`;function _w(){const[n,e]=u.useState(0);function s(){e(n+1)}return t.jsxs("div",{children:[t.jsx("div",{children:"A Base Case"}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:["currnt count is: ",n]}),t.jsx("button",{onClick:s,children:"Increment"})]})]})}function xp(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:["通过上面对 Compiler 渲染结果的理解，我们应该已经大概知道我们的 React 代码最终会渲染成什么样。我们目前要思考的问题就是，我们的代码通过 Compiler 编译之后，",t.jsx(e.strong,{children:"收益表现在哪里？"})]}),`
`,t.jsx(e.p,{children:"接下来我们要分析三个不同的案例，来思考这个问题。这篇文章先分析第一个出现在上一章中，最简单的基础案例"}),`
`,t.jsx(_,{children:t.jsx(_w,{})}),`
`,t.jsx(e.p,{children:"完整的源代码与编译之后的代码在右侧可以看到。"}),`
`,t.jsxs(e.p,{children:["本文的这个案例中，当我们点击按钮时，此时 ",t.jsx(e.code,{children:"count"})," 增加，"]}),`
`,t.jsxs(e.p,{children:["由于 ",t.jsx(e.code,{children:"__clickHandler"})," 函数内部使用了外部的 ",t.jsx(e.code,{children:"count"})," 状态，因此 ",t.jsx(e.code,{children:"__clickHanler"})," 无法缓存，需要重新创建，"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function __clickHanler() {
  setCount(count + 1)
}
`})}),`
`,t.jsx(e.p,{children:"那么很显然的， button 按钮也就无法缓存"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// 无法缓存
<button onClick={__clickHanler}>Increment</button>
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// 无法缓存
<div>currnt count is: {count}</div>
`})}),`
`,t.jsxs(e.p,{children:["最终，只有 ",t.jsx(e.code,{children:"A Base Case"})," 标签可以被缓存"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`<div>A Base Case</div>
`})}),`
`,t.jsxs(e.p,{children:["因此，在组件由于 count 的增加而反复重新执行的过程中，大多数元素都无法被缓存，需要重新创建，那么也就意味着，这个案例的编译之后的收益为",t.jsx(e.strong,{children:"负收益"}),"。因此，如果你经验比较丰富的话，你可以快速判断你写的当前的组件是否具备明确的正向收益，从而选择是否需要编译当前组件。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"我们可以通过有意违背规则的方式让编译不发生"}),`
`]}),`
`,t.jsx(e.p,{children:"当然，这里多执行的逻辑也并不是很多，我们也可以选择无视。"})]})}function Aw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(xp,{...n})}):xp(n)}const $w={"App.js":kw,原代码:Cw};function Mw(){return t.jsx(z,{files:$w,renderArticle:n=>t.jsx(Aw,{components:{code:n}})})}const Rw=`import {useState} from 'react'
import Button from './Button'
import {_c} from './useCache.js'

export default function App() {
  const $ = _c(13);

  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 13; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }

  const [counter, setCounter] = useState(0);
  let t0;

  if ($[0] !== counter) {
    t0 = function __clickHanler() {
      setCounter(counter + 1);
    };

    $[0] = counter;
    $[1] = t0;
  } else {
    t0 = $[1];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div>A Expensive Case</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== counter) {
    t2 = <div className="counter">current counter is: {counter}</div>;
    $[3] = counter;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== __clickHanler) {
    t3 = <Button onClick={__clickHanler}>counter++</Button>;
    $[5] = __clickHanler;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div className="flex items-center justify-between mt-4">
        {t2}
        {t3}
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  let t5;

  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = <Expensive />;
    $[10] = t5;
  } else {
    t5 = $[10];
  }

  let t6;

  if ($[11] !== t4) {
    t6 = (
      <div>
        {t1}
        {t4}
        {t5}
      </div>
    );
    $[11] = t4;
    $[12] = t6;
  } else {
    t6 = $[12];
  }

  return t6;
}

function Expensive() {
  var cur = performance.now()
  try {
    while (performance.now() - cur < 100) {
      // block 100ms
    }
  } catch (e) {}


  return (
    <div className='border border-red-600 rounded p-4 mt-4 text-red-500 text-sm leading-6'>
      这是模拟的一个耗时子组件，我的渲染至少要损耗 100ms 的时间，因此如果不做任何优化的情况下，当你快速点击按钮时，你会感受到 counter 的递增会有明显的掉帧。
    </div>
  )
}
`,Lw=`import { useState } from 'react'

function App() {
  var [counter, setCounter] = useState(0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div>A Expensive Case</div>
      <div className="flex items-center justify-between mt-4">
        <div className="counter">current counter is: {counter}</div>
        <button onClick={__clickHanler}>counter++</button>
      </div>
      <Expensive/>
    </div>
  )
}

export default App


function Expensive() {
  var cur = performance.now()
  while (performance.now() - cur < 100) {
    // block 100ms
  }

  return (
    <div className='border border-red-500 rounded p-4 mt-4 text-red-500 text-sm leading-6'>
      这是模拟的一个耗时子组件，我的渲染至少要损耗 100ms 的时间，因此如果不做任何优化的情况下，当你快速点击按钮时，你会感受到 counter 的递增会有明显的掉帧。
    </div>
  )
}
`;function Ew(){var[n,e]=u.useState(0);function s(){e(n+1)}return t.jsxs("div",{children:[t.jsx("div",{children:"A Expensive Case"}),t.jsxs("div",{className:"flex items-center justify-between mt-4",children:[t.jsxs("div",{className:"counter",children:["current counter is: ",n]}),t.jsx("button",{onClick:s,children:"counter++"})]}),t.jsx(Tw,{})]})}function Tw(){for(var n=performance.now();performance.now()-n<100;);return t.jsx("div",{className:"border border-red-500 rounded p-4 mt-4 text-red-500 text-sm leading-6",children:"这是模拟的一个耗时子组件，我的渲染至少要损耗 100ms 的时间，因此如果不做任何优化的情况下，当你快速点击按钮时，你会感受到 counter 的递增会有明显的掉帧。"})}function gp(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(Ew,{})}),`
`,t.jsx(e.p,{children:"这里是未被编译优化的案例。右侧区域渲染的是已经被编译优化之后的案例。他们的初始代码都一模一样。大家可以通过快速点击按钮感受一下编译之后的优化提升。"}),`
`,t.jsx(e.p,{children:"完整的源代码与编译之后的代码在右侧可以看到。"}),`
`,t.jsx(e.p,{children:"我们来分析一下这段代码所带来的提升具体表现在什么地方。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function App() {
  var [counter, setCounter] = useState(0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div>A Expensive Case</div>
      <div className="flex items-center justify-between mt-4">
        <div className="counter">current counter is: {counter}</div>
        <button onClick={__clickHanler}>counter++</button>
      </div>
      <Expensive/>
    </div>
  )
}
`})}),`
`,t.jsxs(e.p,{children:["可以看到，这段代码和上一章的例子中的代码大多数都是一样的，唯一的区别就是这里多一个耗时的子任务 ",t.jsx(e.code,{children:"Expensive"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`<Expensive/>
`})}),`
`,t.jsx(e.p,{children:"由于该任务在渲染时，并未有入参依赖其他任何状态或者变量，因此，在初始化之后的更新中，我们可以将其缓存起来，当 counter 不停发生变化导致组件 re-render 时，这个耗时的子任务可以被缓存，它的编译代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`let t5;

if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
  t5 = <Expensive />;
  $[10] = t5;
} else {
  t5 = $[10];
}
`})}),`
`,t.jsxs(e.p,{children:["因此，编译优化之后，我们能够非常明显的感受到",t.jsx(e.strong,{children:"掉帧的现象"}),"消失了。在优化之前，由于 counter 导致组件 re-render，所以该子组件虽然没有任何参数传递进去，但是依然不可避免的需要重新执行，从而导致每次更新的耗时都非常大。"]})]})}function Dw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(gp,{...n})}):gp(n)}const Ow={"App.js":Rw,原代码:Lw};function Bw(){return t.jsx(z,{files:Ow,renderArticle:n=>t.jsx(Dw,{components:{code:n}})})}const zw=`import { useState, useEffect, useRef } from 'react'
import Panel1 from "./Panel1";
import Panel2 from "./Panel2";
import Panel3 from "./Panel3";
import Panel4 from "./Panel4";

const tabs = [
  { title: 'Tailwindcss', component: Panel1, appeared: false },
  { title: 'React', component: Panel2, appeared: false },
  { title: 'Unocss', component: Panel3, appeared: false },
  { title: 'Compiler', component: Panel4, appeared: false }
]

function App() {
  const [current, setCurrent] = useState(0)
  const tabsconfig = useRef([...tabs])

  function __clickHanler(index) {
    tabsconfig.current[index].appeared = true
    setCurrent(index)
  }

  let c1 = tabsconfig.current[0]
  let c2 = tabsconfig.current[1]
  let c3 = tabsconfig.current[2]
  let c4 = tabsconfig.current[3]

  return (
    <div className='bg-gray-100 p-8 rounded-md border border-gray-200'>
      <div>
        {tabs.map((item, index) => (
          <button className={index === current ? 'text-blue-500' : 'text-gray-500'} key={item.title} onClick={() => __clickHanler(index)}>
            {item.title}
          </button>
        ))}
      </div>

      <c1.component appearder={c1.appeared} selected={current === 0}/>
      <c2.component appearder={c2.appeared} selected={current === 1}/>
      <c3.component appearder={c3.appeared} selected={current === 2}/>
      <c4.component appearder={c4.appeared} selected={current === 3}/>
    </div>
  )
}

export default App
`,Uw=`import clsx from 'clsx'

function Panel({selected, appeared}) {
  // 这里是会执行的
  // console.log('panel 1 re-render')
  if (!selected && !appeared) {
    return null
  }

  const cls = clsx('border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8', {
    hidden: !selected
  })

  return (
    <div className={cls}>
      A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
    </div>
  )
}

export default Panel;
`,Hw=`import clsx from 'clsx'

function Panel({selected, appeared}) {
  // 这里是会执行的
  // console.log('panel 1 re-render')
  if (!selected && !appeared) {
    return null
  }

  const cls = clsx('border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8', {
    hidden: !selected
  })

  return (
    <div className={cls}>
      React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
    </div>
  )
}

export default Panel;
`,qw=`import clsx from 'clsx'

function Panel({selected, appeared}) {
  // 这里是会执行的
  // console.log('panel 1 re-render')
  if (!selected && !appeared) {
    return null
  }

  const cls = clsx('border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8', {
    hidden: !selected
  })

  return (
    <div className={cls}>
      UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets.
    </div>
  )
}

export default Panel;
`,Vw=`import clsx from 'clsx'

function Panel({selected, appeared}) {
  // 这里是会执行的
  // console.log('panel 1 re-render')
  if (!selected && !appeared) {
    return null
  }

  const cls = clsx('border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8', {
    hidden: !selected
  })

  return (
    <div className={cls}>
      React Compiler is a new experimental compiler that we’ve open sourced to get early feedback from the community. It still has rough edges and is not yet fully ready for production.
    </div>
  )
}

export default Panel;
`;function Xw({selected:n,appeared:e}){if(!n&&!e)return null;const s=U("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."})}function Zw({selected:n,appeared:e}){if(!n&&!e)return null;const s=U("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."})}function Gw({selected:n,appeared:e}){if(!n&&!e)return null;const s=U("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets."})}function Yw({selected:n,appeared:e}){if(!n&&!e)return null;const s=U("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"React Compiler is a new experimental compiler that we’ve open sourced to get early feedback from the community. It still has rough edges and is not yet fully ready for production."})}const jp=[{title:"Tailwindcss",component:Xw,appeared:!1},{title:"React",component:Zw,appeared:!1},{title:"Unocss",component:Gw,appeared:!1},{title:"Compiler",component:Yw,appeared:!1}];function Iw(){const[n,e]=u.useState(0),s=u.useRef([...jp]);function r(o){s.current[o].appeared=!0,e(o)}let a=s.current[0],l=s.current[1],i=s.current[2],c=s.current[3];return t.jsxs("div",{className:"bg-gray-100 p-8 rounded-md border border-gray-200",children:[t.jsx("div",{children:jp.map((o,d)=>t.jsx("button",{className:d===n?"text-blue-500":"text-gray-500",onClick:()=>r(d),children:o.title},o.title))}),t.jsx(a.component,{appearder:a.appeared,selected:n===0}),t.jsx(l.component,{appearder:l.appeared,selected:n===1}),t.jsx(i.component,{appearder:i.appeared,selected:n===2}),t.jsx(c.component,{appearder:c.appeared,selected:n===3})]})}function Fw(){return t.jsxs("div",{children:[t.jsx(Pw,{}),t.jsx(Qw,{})]})}function Pw(){var n=performance.now();return t.jsxs("div",{className:"mt-4",children:["仅执行 1000,000 次耗时 for 循环耗时：",t.jsxs("span",{className:"text-red-500",children:[performance.now()-n," ms"]})]})}function Qw(){var n=performance.now();return t.jsxs("div",{className:"mt-4",children:["for 循环中，比较 1000,000 次耗时：",t.jsxs("span",{className:"text-red-500",children:[performance.now()-n," ms"]})]})}function vp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(Iw,{})}),`
`,t.jsx(e.p,{children:"这个案例会非常的复杂，经验稍微欠缺一点的前端开发可能都实现不了。我们可以先操作一下上面的按钮，看一下我想要实现的演示效果。"}),`
`,t.jsx(e.p,{children:"从演示效果上来看，这是一个普通的 tab 切换。但是先别急，我还有要求。我希望能实现极限的性能优化。"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"1、我希望首次渲染时，页面渲染更少的内容，因此此时，只能先渲染默认的 Panel。其他 Panel 需要在点击对应的按钮时，才渲染出来。"}),`
`,t.jsx(e.li,{children:"2、在切换过程中，我希望能够缓存已经渲染好的 Panel，只需要在样式上做隐藏，而不需要在后续的交互中重复渲染内容"}),`
`,t.jsx(e.li,{children:"3、当四个页面都渲染出来之后，再做切换时，此时只会有两个页面会发生变化，上一个选中的页面与下一个选中的页面。另外的页面不参与交互，则不应该 re-render。"}),`
`]}),`
`,t.jsx(e.p,{children:"这个案例和要求不算特别难，但是对综合能力的要求还是蛮高的，大家可以自己动手尝试一下试试看。"}),`
`,t.jsx(e.p,{children:"具体的完整实现请看右侧代码。"}),`
`,t.jsx(e.p,{children:"这里，我主要想跟大家分享的就是 map 方法的小细节。有如下代码"}),`
`,t.jsxs(e.p,{children:["因为在本案例中， 4 个按钮对应 4 个页面，因此我们通常会使用 ",t.jsx(e.code,{children:".map"})," 方法来渲染他们。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`{tabs.map((item, index) => {
  return (
    <item.component
      appearder={item.appeared}
      key={item.title}
      selected={current === index}
    />
  )
})}
`})}),`
`,t.jsx(e.p,{children:"它的编译结果表现如下："}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`let t4;

if ($[7] !== current) {
  t4 = tabs.map((item_0, index_1) => (
    <item_0.component
      appearder={item_0.appeared}
      key={item_0.title}
      selected={current === index_1}
    />
  ));
  $[7] = current;
  $[8] = t4;
} else {
  t4 = $[8];
}
`})}),`
`,t.jsxs(e.p,{children:["我们会发现，此时编译缓存的是整个 map 表达式，但是由于 map 表达式又依赖于 ",t.jsx(e.code,{children:"current"}),"，因此，在我们点击切换的交互过程中，每一次的 current 都会发生变化，那么这里针对 map 表达式的缓存就没有了任何意义。"]}),`
`,t.jsxs(e.p,{children:["但是实际上，我们可以观察到，我们有 4 个 Panel，点击切换的交互发生时，实际上只有两个 Pannel 发生了变化。因此，最极限的优化是，只有这两个组件对应的函数需要重新 ",t.jsx(e.code,{children:"re-render"}),"，那么我们的代码应该怎么写呢？"]}),`
`,t.jsx(e.p,{children:"其实非常简单，那就是不用 map，将数组拆开直接手写，代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`let c1 = tabsconfig.current[0]
let c2 = tabsconfig.current[1]
let c3 = tabsconfig.current[2]
let c4 = tabsconfig.current[3]
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c1.component appearder={c1.appeared} selected={current === 0}/>
<c2.component appearder={c2.appeared} selected={current === 1}/>
<c3.component appearder={c3.appeared} selected={current === 2}/>
<c4.component appearder={c4.appeared} selected={current === 3}/>
`})}),`
`,t.jsx(e.p,{children:"然后，我们就会发现，在编译结果中，不再缓存 map 表达式的结果，而是缓存每一个组件"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`let t5;

if ($[7] !== c1.component || $[8] !== c1.appeared || $[9] !== t4) {
  t5 = <c1.component appearder={c1.appeared} selected={t4} />;
  $[7] = c1.component;
  $[8] = c1.appeared;
  $[9] = t4;
  $[10] = t5;
} else {
  t5 = $[10];
}
`})}),`
`,t.jsx(e.p,{children:"这样做的收益在特定场景下的收益将会非常高。因为我们这里省掉了其他页面的 re-render，有的时候，我们的 tab 页面可能有十多个。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"总结一下：强悍的性能：细粒度记忆化更新"})}),`
`,t.jsx(e.p,{children:"经过前面原理的分析与多个案例的分析，想必各位道友对 React Compiler 的工作机制已经有了非常深刻的理解。此时，我们就需要分析一下，这样的记忆化更新机制，到底有多强。"}),`
`,t.jsx(e.p,{children:"首先明确一点，和 Vue 等其他框架的依赖收集不同，React Compiler 依然不做依赖收集。"}),`
`,t.jsx(e.p,{children:"React 依然通过从根节点自上而下的 diff 来找出需要更新的节点。在这个过程中，我们会通过大量的判断来决定使用缓存值。可以明确的是，Compiler 编译之后的代码，缓存命中的概率非常高，几乎所有应该缓存的元素和函数都会被缓存起来。"}),`
`,t.jsx(e.p,{children:"**因此，React Compiler 也能够在不做依赖收集的情况下，做到元素级别的超级细粒度更细。**但是，这样做的代价就是，React 需要经历大量的判断来决定是否需要更新。"}),`
`,t.jsx(e.p,{children:"所以这个时候，我们就需要明确，我所谓的大量判断的时间成本，到底有多少？它会不会导致新的性能问题？"}),`
`,t.jsx(e.p,{children:"可以看到，几乎所有的比较都是使用了全等比较，因此，我们可以写一个例子来感知一下，超大量的全等比较到底需要花费多少时间。"}),`
`,t.jsx(e.p,{children:"测试代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`export default function Demo02() {
  return (
    <div>
      <OnlyFor />
      <ForAndJudge />
    </div>
  )
}

function OnlyFor() {
  var cur = performance.now()

  for(let i = 0; i < 1000000; i++) {}

  return (
    <div className='mt-4'>
      仅执行 1000,000 次耗时 for 循环耗时：
      <span className='text-red-500'>{performance.now() - cur} ms</span>
    </div>
  )
}


function ForAndJudge() {
  var cur = performance.now()

  for(let i = 0; i < 1000000; i++) {
    'xxx' === 'xx'
  }

  return (
    <div className='mt-4'>
      for 循环中，比较 1000,000 次耗时：
      <span className='text-red-500'>{performance.now() - cur} ms</span>
    </div>
  )
}
`})}),`
`,t.jsx(_,{reload:!0,children:t.jsx(Fw,{})}),`
`,t.jsxs(e.p,{children:["由于 for 循环本身也会消耗一点时间，因此我这里单独列出来了 for 循环中不执行任何逻辑的耗时结果。我们可以多次点击 ",t.jsx(e.code,{children:"reload"})," 按钮查看耗时波动。"]}),`
`,t.jsx(e.p,{children:"执行结果发现，在我的设备上，在 for 循环中比较 100 万次，总花费时间在 0.5ms 到 1.5ms 之间波动，而且通过对比我们可以知道，这里边的耗时的一大部分是 for 循环的逻辑。如果去除 for 循环的耗时，我们会发现，纯粹的比较耗时可能仅 0.1ms 到 0.5ms 之间。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"由于执行耗时有小范围的波动，因此有的时候下面的执行时间反而更短这是正常的"}),`
`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"卧槽(¬д¬。)，这太强了啊"}),"。"]}),`
`,t.jsxs(e.p,{children:["我们很难有项目能够达到 1000,000 次的比较级别，甚至许多达到 10000 都难。那也就意味着，",t.jsx(e.strong,{children:"这里大量比较的时间成本，几乎可以忽略不计"}),"。因此，在执行速度上，Compiler 的之后性能表现将会非常强悍。"]}),`
`,t.jsxs(e.p,{children:["由此我们可以得出结论，",t.jsx(e.strong,{children:"经过 Compiler 优化的项目，可以以极低的时间成本，做到元素级别的细粒度更新。"})]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["这里我要明确的是，这样的性能表现，在之前版本的项目中，合理运用 ",t.jsx(e.code,{children:"useCallback/memo"})," 也能做到。只是由于对 React 底层默认命中规则不理解，导致大多数人不知道如何优化到这种程度。React Compiler 简化了这个过程"]}),`
`]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"2"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"React Compiler 最佳实践"})}),`
`,t.jsx(e.p,{children:"有许多骚操作，React Compiler 并不支持，例如下面这种写法。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`{[1, 2, 3, 4, 5].map((counter) => {
  const [number, setNumber] = useState(0)
  return (
    <div key={\`hello\${counter}\`} onClick={() => setNumber(number + 1)}>
      number: {number}
    </div>
  )
})}
`})}),`
`,t.jsx(e.p,{children:"这个操作骚归骚，但是真的有大佬想要这样写。React 之前的版本依然不支持这种写法。不过好消息是，React 19 支持了..."}),`
`,t.jsx(e.p,{children:"但是 React Compiler 并不支持。对于这些不支持的语法，React Compiler 的做法就是直接跳过不编译，而直接沿用原组件写法。"}),`
`,t.jsx(e.p,{children:"因此，React Compiler 的最佳实践我总结了几条"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"1、不再使用 useCallback、useMemo、Memo 等缓存函数"}),`
`,t.jsx(e.li,{children:"2、丢掉闭包的心智负担，放心使用即可"}),`
`,t.jsx(e.li,{children:"3、引入严格模式"}),`
`,t.jsx(e.li,{children:"4、在你不熟悉的时候引入 eslint-plugin-react-compiler"}),`
`,t.jsx(e.li,{children:"5、当你熟练之后，弃用它，因为有的时候我们就是不想让它编译我们的组件"}),`
`,t.jsx(e.li,{children:"6、更多的使用 use 与 Action 来处理异步逻辑"}),`
`,t.jsx(e.li,{children:"7、尽可能少的使用 useEffect"}),`
`]}),`
`,t.jsxs(e.p,{children:["因此，一个小小的彩蛋就是，当你不希望你的组件被 Compiler 编译时，你只需要使用 ",t.jsx(e.code,{children:"var"})," 来声明状态即可。因为这不符合严格模式的语法规范"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`var [counter, setCounter] = useState(0)
`})}),`
`,t.jsxs(e.p,{children:["而你改成 ",t.jsx(e.code,{children:"const/let"}),"，它就会又重新编译该组件。可控性与自由度非常高。"]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"3"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"总结"})}),`
`,t.jsx(e.p,{children:"React Compiler 在保持了对原有语法的弱侵入性的同时，又做到了保持了函数式编程的开发范式，并且弥补了之前可能存在性能问题的缺陷，这无疑是进一步确认了 React 在前端框架方向都领先地位。React Compiler 把虚拟 DOM 的性能表现推向了极致。和进几年声望比较大的 signal 相比，将不会存在性能短板，甚至由于并发模式的存在，React 项目的上限将会比其他前端框架更高。"}),`
`,t.jsx(e.p,{children:"并且 React Compiler 上手成本低，理解起来也不难，未来肯定会快速被大量开发者所接受。作为开发者我们只需要放心使用即可。"})]})}function Jw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(vp,{...n})}):vp(n)}const Ww={"App.js":zw,"Panel1.jsx":Uw,"Panel2.jsx":Hw,"Panel3.jsx":qw,"Panel4.jsx":Vw,"Button.jsx":Na};function Kw(){return t.jsx(z,{files:Ww,renderArticle:n=>t.jsx(Jw,{components:{code:n}})})}function e8(){return t.jsxs("form",{id:"form",method:"get",className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"First name: "}),t.jsx("input",{type:"text",defaultValue:"Jake",name:"fname"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"Last name: "}),t.jsx("input",{type:"text",defaultValue:"Ma",name:"lname"})]}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"提交"})})]})}function bp(n){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"在 html 的基础知识中，表单是很重要的一个环节"}),"，但是由于前端框架的盛行，原生表单开发方式相关的知识被部分前端框架所遗忘，很多人对 form action，formdata 很陌生。因此，当看到有消息称 React 19 支持了 form action 之后，许多前端感觉有点懵。这是啥？"]}),`
`,t.jsxs(e.p,{children:["React 19 在开发方式的引导上，意图非常明显，那就是希望开发者能尽量减少对 useState 与 useEffect 的使用。因此，在获取数据时，提供了 ",t.jsx(e.code,{children:"use(promise)"})," 开发方式，在提交数据时，则提供了 ",t.jsx(e.code,{children:"formaction"})," 的方式，这实际上是更加靠近原生 html 的思路。因此在学习 form action 时，需要道友们对 html 中的表单元素，有一个基础的认识。"]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"HTML form action"}),`
`,t.jsx(e.p,{children:"先来看一段简单的代码"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<form id="form" method="get">
  First name:
  <input type="text" value="Jake" name="fname">
  Last name:
  <input type="text" value="Ma" name="lname">
  <input type="submit" value="提交">
</form>
`})}),`
`,t.jsx(_,{reload:!0,children:t.jsx(e8,{})}),`
`,t.jsx(e.p,{children:"大家可以在 input 中修改输入内容，然后点击提高，此时页面会刷新，然后观察 url 中参数的变化。"}),`
`,t.jsxs(e.p,{children:["当我们使用表单 form 元素时，内部的表单元素可以根据 ",t.jsx(e.code,{children:"name"})," 属性与 ",t.jsx(e.code,{children:"value | defaultValue"})," 值自动组合成一个完整的序列化表单对象。我们不再需要额外去拼接他们。"]}),`
`,t.jsx(e.p,{children:"合成的序列化对象，我们称之为 FormData， 这是一个特殊的对象。我们可以直接通过如下方式获取到该对象"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`let formdata = new FormData(form)

formdata.get('fname')
formdata.get('lname')
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["我们无法直接观察到 FormData 的值，需要使用 ",t.jsx(e.code,{children:".get"})," 方法来获取。"]}),`
`]}),`
`,t.jsxs(e.p,{children:["FormData 也可以被网络请求支持，例如我们可以把 ",t.jsx(e.code,{children:"FormData"})," 对象作为 fetch 请求的 ",t.jsx(e.code,{children:"body"}),"，直接发送"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`form.onsubmit = async e => {
  e.preventDefault()

  const response = await fetch('/post/user', {
    method: 'POST',
    body: new FormData(form)
  })
  let res = await response.json()
  // do something
}
`})}),`
`,t.jsxs(e.p,{children:["在这个案例中，当 ",t.jsx(e.code,{children:"type='submit'"})," 的按钮点击提交时，",t.jsx(e.code,{children:"onsubmit"})," 就会触发，我们可以在这个回调函数里执行自己的提交逻辑。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"HTTP 中 content-type 字段有专门支持 FormData 的值，如下所示"}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`Content-Type: multipart/form-data
`})}),`
`,t.jsxs(e.p,{children:["除此之外，我们可以使用 form 元素的 ",t.jsx(e.code,{children:"action"})," 属性来简化提交。不过它的表现会不太一样。"]}),`
`,t.jsxs(e.p,{children:["action 接收一个 ",t.jsx(e.code,{children:"URL"})," 作为参数，可以是绝对路径，也是可以相对路径。它表示携带表单数据向该地址发送请求。默认情况下页面会跳转到指定的 URL 地址。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<form id="form" action="xx.html" method="post">
  First name:
  <input type="text" value="Jake" name="fname">
  Last name:
  <input type="text" value="Ma" name="lname">
  <input type="submit" value="提交">
</form>
`})}),`
`,t.jsx(e.p,{children:"服务端可以拦截该地址，并定义响应行为。"}),`
`,t.jsx(e.p,{children:"这样做的好处就是我们可以简化提交行为的代码。无需使用 JavaScript 对逻辑进行任何额外的处理，就能完成一次提交操作。在没有额外要求的情况下，我们可以非常方便的使用这种方式来提交表单数据，上传文件等。"}),`
`,t.jsx(e.p,{children:"了解了这些html form 元素中的基础知识之后，我们下一章再来详细的学习一下 FormData 的基础知识。"})]})}function n8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(bp,{...n})}):bp(n)}function t8(){function n(e){localStorage.setItem("active_code",e.get("code")),location.reload()}return t.jsxs("div",{className:"pt-4",children:[t.jsx("div",{className:"rounded-md bg-yellow-50 p-4 border border-yellow-400",children:t.jsxs("div",{className:"flex",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-yellow-700",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),t.jsxs("div",{className:"ml-3",children:[t.jsx("h3",{className:"text-sm font-medium text-yellow-800",children:"Attention needed"}),t.jsx("div",{className:"mt-2 text-sm text-yellow-700",children:t.jsx("p",{children:"你还未输入激活码，或者激活码已过期，请重新输入即可访问"})})]})]})}),t.jsxs("form",{action:n,className:"flex items-center justify-between",children:[t.jsx(Sn,{name:"code",placeholder:"Please input your active code",className:"flex-1 mr-4",pattern:Ad}),t.jsx("button",{type:"submit",children:"确认"})]})]})}ds.registerLanguage("javascript",Sd);function s8({className:n,...e}){const s=/language-(\w+)/.exec(n||"");return s?t.jsx(ds,{language:s[1],PreTag:"div",...e,style:kd}):t.jsx("code",{className:n,...e})}function Vn(n){const{renderArticle:e,isAuth:s=!0,isGiscus:r=!0}=n,a=localStorage.getItem("active_code"),l=s?a===Ad:!0;return t.jsxs("div",{className:"keep max-w-[700px] mx-auto",children:[t.jsx(Hl,{when:l,fallback:t.jsx(t8,{}),children:e(s8)}),t.jsxs(Hl,{when:r,children:[t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsx(Cd,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]})]})}function r8(){return t.jsx(Vn,{renderArticle:n=>t.jsx(n8,{components:{code:n}})})}function yp(n){const e={code:"code",h3:"h3",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:"FormData 使用详解"}),`
`,t.jsx(e.p,{children:"FormData API 如下所示。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-c++",children:`FormData
  [[Prototype]]
    .append: f append()
    .delete: f delete()
    .entries: f entries()
    .forEach: f forEach()
    .get: f ()
    .getAll: f getAll()
    .has: f has()
    .keys: f keys()
    .set: f ()
    .values: f values()
`})}),`
`,t.jsxs(e.p,{children:["我们可以先创建一个空的 FormData 对象，然后通过 ",t.jsx(e.code,{children:"append"})," 方法来添加属性。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const formdata = new FormData()
formdata.append('title', 'hello world')
`})}),`
`,t.jsx(e.p,{children:"也可以直接使用 form 元素对象进行初始化。并在子表单元素中合并具体的字段和值。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<form id="form" method="post">
  First name:
  <input type="text" value="Jake" name="fname">
  Last name:
  <input type="text" value="Ma" name="lname">
  <input type="submit" value="提交">
</form>
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const formdata = new FormData(form)
`})}),`
`,t.jsxs(e.p,{children:["我们可以通过 ",t.jsx(e.code,{children:".get"})," 方法获取具体字段的值。在表单元素中，",t.jsx(e.code,{children:"name"})," 属性表示字段名。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`formdata.get('fname')
`})}),`
`,t.jsxs(e.p,{children:["可以有多个同名的 name，因此 ",t.jsx(e.code,{children:".get()"})," 表示获取第一个，",t.jsx(e.code,{children:".getAll()"})," 表示获取所有"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// 获取所有 name 为 age 的字段，返回数组
formdata.getAll('age')
`})}),`
`,t.jsxs(e.p,{children:["我们可以通过 ",t.jsx(e.code,{children:".set"})," 方法设置对应字段的值。如果字段名不存在，则添加该字段。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`formdata.set('fname', 'Jake')
`})}),`
`,t.jsxs(e.p,{children:["可以通过 ",t.jsx(e.code,{children:".has(key)"})," 来判断是否存在某个字段。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`formdata.has('fname') // true
`})}),`
`,t.jsxs(e.p,{children:["可以通过 ",t.jsx(e.code,{children:".delete(key)"})," 删除某一个字段。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`formdata.delete('fname')
`})}),`
`,t.jsx(e.p,{children:"我们可以使用 formdata 来实现一个上传文件的功能。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<form id="form">
  <input type="text" name="firstName" value="John">
  Picture:
  <input type="file" name="picture" accept="image/*">
  <input type="submit">
</form>
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`form.onsubmit = async e => {
  e.preventDefault()

  const response = await fetch('/post/file', {
    method: 'POST',
    body: new FormData(form)
  })
  let res = await response.json()
  // do something
}
`})}),`
`,t.jsx(e.p,{children:"OK，简单了解了 FormData 的常用方式之后，有了这个基础，我们再来学习 react 中的 form action."})]})}function a8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(yp,{...n})}):yp(n)}function l8(){return t.jsx(Vn,{renderArticle:n=>t.jsx(a8,{components:{code:n}})})}function i8(){function n(e){const s=e.get("fname"),r=e.get("lname");alert(`输入内容：FirstName: ${s}, LastName: ${r}`)}return t.jsxs("form",{action:n,className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"First name: "}),t.jsx("input",{type:"text",defaultValue:"Jake",name:"fname"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"Last name: "}),t.jsx("input",{type:"text",defaultValue:"Ma",name:"lname"})]}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"提交"})})]})}function N1(){for(var n=[],e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=0;s<16;s++)n[s]=e.substr(Math.floor(Math.random()*16),1);return n[8]="-",n.join("")}function c8(n){const{ref:e,onChange:s}=n;function r(a){const l={id:N1(),name:a.get("name"),desc:a.get("desc"),hours:a.get("hours"),rate:a.get("rate"),price:a.get("price")};e.current.close(),s&&s(l)}return t.jsx(dr,{ref:e,footer:!0,children:t.jsxs("form",{action:r,children:[t.jsx(Sn,{label:"Name",name:"name",placeholder:"Plase input your project name.",required:!0}),t.jsx(Sn,{label:"Desc",name:"desc",placeholder:"please input your project description.",required:!0}),t.jsx(Sn,{label:"Hours",name:"hours",type:"number",placeholder:"please input hours.",required:!0}),t.jsx(Sn,{label:"Rate",name:"rate",type:"number",placeholder:"please input rate.",required:!0}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"Submit"})})]})})}function o8(){const n=u.useRef(null),[e,s]=u.useState([{id:N1(),name:"Logo redesign",desc:"New logo and digital asset playbook.",hours:"20.0",rate:"100.00"}]);function r(l){s([...e,l])}const a=e.reduce((l,i)=>l+i.hours*i.rate,0);return t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold leading-6 text-gray-900",children:"Invoice"}),t.jsxs("p",{className:"mt-2 text-sm text-gray-700",children:["For work completed from ",t.jsx("time",{dateTime:"2022-08-01",children:"August 1, 2022"})," to"," ",t.jsx("time",{dateTime:"2022-08-31",children:"August 31, 2022"}),"."]})]}),t.jsx("div",{className:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:t.jsx("button",{className:"primary",onClick:()=>n.current.show(),children:"Add"})})]}),t.jsx(c8,{ref:n,onChange:r}),t.jsx("div",{className:"-mx-4 mt-8 flow-root sm:mx-0",children:t.jsxs("table",{className:"min-w-full",children:[t.jsxs("colgroup",{children:[t.jsx("col",{className:"w-full sm:w-1/2"}),t.jsx("col",{className:"sm:w-1/6"}),t.jsx("col",{className:"sm:w-1/6"}),t.jsx("col",{className:"sm:w-1/6"})]}),t.jsx("thead",{className:"border-b border-gray-300 text-gray-900",children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Project"}),t.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Hours"}),t.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Rate"}),t.jsx("th",{scope:"col",className:"py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:"Price"})]})}),t.jsx("tbody",{children:e.map(l=>t.jsxs("tr",{className:"border-b border-gray-200",children:[t.jsxs("td",{className:"max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0",children:[t.jsx("div",{className:"font-medium text-gray-900",children:l.name}),t.jsx("div",{className:"mt-1 truncate text-gray-500",children:l.desc})]}),t.jsx("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:l.hours}),t.jsxs("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:["$",l.rate]}),t.jsxs("td",{className:"py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0",children:["$",l.hours*l.rate]})]},l.id))}),t.jsxs("tfoot",{children:[t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Subtotal"}),t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Subtotal"}),t.jsxs("td",{className:"pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0",children:["$",a]})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Tax"}),t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Tax"}),t.jsx("td",{className:"pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0",children:"$1760.00"})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0",children:"Total"}),t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden",children:"Total"}),t.jsxs("td",{className:"pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:["$",a-1760]})]})]})]})})]})}const d8=`import Dialog from 'components/Dialog'
import Input from "components/Input";
import getUuid from "@/utils/uuid";

export default function Modal(props) {
  const {ref, onChange} = props

  function action(f) {
    const item = {
      id: getUuid(),
      name: f.get('name'),
      desc: f.get('desc'),
      hours: f.get('hours'),
      rate: f.get('rate'),
      price: f.get('price'),
    }
    ref.current.close()
    onChange && onChange(item)
  }

  return (
    <Dialog ref={ref} footer>
      <form action={action}>
        <Input label='Name' name='name' placeholder='Plase input your project name.' required />
        <Input label='Desc' name='desc' placeholder='please input your project description.' required/>
        <Input label='Hours' name='hours' type='number' placeholder='please input hours.' required/>
        <Input label='Rate' name='rate' type='number' placeholder='please input rate.' required/>

        <div className='flex justify-end'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </Dialog>
  )
}`,u8=`import { useState, useRef } from 'react'
import Modal from './Modal'
import getUuid from "@/utils/uuid.js";


export default function Table() {
  const modal = useRef(null)

  const [revenues, setRevenues] = useState([{
    id: getUuid(),
    name: 'Logo redesign',
    desc: 'New logo and digital asset playbook.',
    hours: '20.0',
    rate: '100.00',
  }])

  function __onChange(data) {
    setRevenues([...revenues, data])
  }

  const subtotal = revenues.reduce((pre, cur) => {
    return pre + cur.hours * cur.rate
  }, 0)

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Invoice</h1>
          <p className="mt-2 text-sm text-gray-700">
            For work completed from <time dateTime="2022-08-01">August 1, 2022</time> to{' '}
            <time dateTime="2022-08-31">August 31, 2022</time>.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button className='primary' onClick={() => modal.current.show()}>Add</button>
        </div>
      </div>
      <Modal ref={modal} onChange={__onChange} />

      <div className="-mx-4 mt-8 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/2" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Project
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Hours
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Rate
            </th>
            <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
              Price
            </th>
          </tr>
          </thead>
          <tbody>
          {revenues.map((project) => (
            <tr key={project.id} className="border-b border-gray-200">
              <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                <div className="font-medium text-gray-900">{project.name}</div>
                <div className="mt-1 truncate text-gray-500">{project.desc}</div>
              </td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{project.hours}</td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">\${project.rate}</td>
              <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">\${project.hours * project.rate}</td>
            </tr>
          ))}
          </tbody>
          <tfoot>
          <tr>
            <th
              scope="row"
              colSpan={3}
              className="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
            >
              Subtotal
            </th>
            <th scope="row" className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">
              Subtotal
            </th>
            <td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0">\${subtotal}</td>
          </tr>
          <tr>
            <th
              scope="row"
              colSpan={3}
              className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
            >
              Tax
            </th>
            <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden">
              Tax
            </th>
            <td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0">$1760.00</td>
          </tr>
          <tr>
            <th
              scope="row"
              colSpan={3}
              className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
            >
              Total
            </th>
            <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">
              Total
            </th>
            <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">\${subtotal - 1760}</td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}`;function Np(n){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"React 19 在表单上提供了更多充满想象空间的 API，它们用好了非常爽，不过一个麻烦的事情是如果你通过自学，想要透彻理解并找到最佳实践可能会非常困难。"}),`
`,t.jsx(e.p,{children:"这里最核心的原因是因为开发思维发生了比较彻底的变化，主要体现在 React19 在尝试弱化受控组件的概念，尝试引导开发者尽可能少的使用 useEffect，并且尽可能少的使用 useState 存储数据。"}),`
`,t.jsx(e.p,{children:"抛开学习成本不谈，我个人认为这是一个非常好的变化，新的开发方式上在开发体验和性能表现上都有非常大的提升。它充分利用了 HTML 中表单元素本身已经支持的能力，例如表单验证，自定义异常样式，自定义错误信息等。"}),`
`,t.jsx(e.p,{children:"不过没关系，我会尽量拆分去学习。确保大家都能读有所得。这一章节就先简单给大家介绍一下 React 在表单上的基础表现。"}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"action 基础"}),`
`,t.jsxs(e.p,{children:["在 HTML 的表单元素中，我们可以通过监听 form 对象的 onsubmit 来回调函数的执行。也可以通过 ",t.jsx(e.code,{children:"action"})," 属性来直接向服务端发送请求。"]}),`
`,t.jsx(e.p,{children:"在 React 19 中，form 元素支持的 action 在这个基础之上发生了一些变化。它支持给 action 传递一个回调函数以供我们使用。该回调函数会将 FormData 作为参数传入。我们可以通过这种方式拿到表单里的所有数据。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"这个变化主要是 React 中并不提倡直接获取元素对象，以及直接往后端发送请求的方式并不常用"}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`export default function Demo01() {
  function __formAction(formData) {
    const fname = formData.get('fname')
    const lname = formData.get('lname')
    alert(\`输入内容：FirstName: \${fname}, LastName: \${lname}\`)
  }
  return (
    <form action={__formAction} className='space-y-3'>
      <div className='flex items-center'>
        <label className='w-[100px]'>First name: </label>
        <input type="text" defaultValue="Jake" name="fname" />
      </div>
      <div className='flex items-center'>
        <label className='w-[100px]'>Last name: </label>
        <input type="text" defaultValue="Ma" name="lname" />
      </div>
      <div className='flex justify-end'>
        <button type='submit'>提交</button>
      </div>
    </form>
  )
}
`})}),`
`,t.jsx(_,{children:t.jsx(i8,{})}),`
`,t.jsxs(e.p,{children:["当我们点击提交按钮时，action 方法就会触发执行。当然，我们也可以给 ",t.jsx(e.code,{children:"submit"})," 一个 ",t.jsx(e.code,{children:"formAction"})," 属性来达到同样的效果"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`<form>
  ...
  <button formAction={__formAction} type='submit'>提交</button>
</form>
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["默认情况下，当我们点击提交之后，form 会自动清空内部的所有数据，或者重置回  ",t.jsx(e.code,{children:"defaultValue"})]}),`
`,t.jsxs(e.p,{children:["如果你在设置了 action 的同时，又设置了 onSubmit 回调，那么 onSubmit 会优先执行，我们可以通过在 onSbumit 中执行 ",t.jsx(e.code,{children:"e.preventDefault()"})," 来阻止 action 回调的执行"]}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function __onSubmit(e) {
  e.preventDefault()
  ...
}
`})}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"案例"}),`
`,t.jsx(e.p,{children:"学习了这些基础知识之后，我们来完成一个比较简单的案例。我们在表单中输入信息，并把信息记录展示在一个列表中。案例演示效果如下"}),`
`,t.jsx(_,{children:t.jsx(o8,{})}),`
`,t.jsxs(e.p,{children:["在这个案例中，我们提供了一个 ",t.jsx(e.code,{children:"Add"})," 按钮，点击该按钮之后，会出现一个弹窗。在弹窗中，我们可以输入每一条信息。输入完成之后，点击提交，输入的信息就会展示在列表中。"]}),`
`,t.jsx(e.p,{children:"完整代码如下"}),`
`,t.jsx(Cn,{files:{"index.jsx":u8,"Modal.jsx":d8}})]})}function m8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Np,{...n})}):Np(n)}function p8(){return t.jsx(Vn,{renderArticle:n=>t.jsx(m8,{components:{code:n}})})}async function w1(n){const e=n.get("title"),s=n.get("content");if(!e||!s)return alert("Miss");await new Promise(r=>setTimeout(r,1e3)),alert(`Title: ${e}, Content: ${s}`)}function h8(){return t.jsxs("form",{action:w1,children:[t.jsx(Sn,{label:"Title",name:"title"}),t.jsx(Sn,{label:"content",name:"content"}),t.jsx(L,{children:"Submit"})]})}function f8({children:n}){const{pending:e}=ua.useFormStatus();return t.jsx(L,{primary:!0,disabled:e,children:e?"loading...":n})}function wp(){return t.jsxs("form",{action:w1,children:[t.jsx(Sn,{label:"Title",name:"title"}),t.jsx(Sn,{label:"content",name:"content"}),t.jsx(f8,{children:"Submit"})]})}const oc=`export async function formAction(fd) {
  const title = fd.get('title')
  const content = fd.get('content')
  if (!title || !content) {
    return alert('Miss')
  }
  await new Promise(resolve => setTimeout(resolve, 1000))
  alert(\`Title: \${title}, Content: \${content}\`)
}
`,x8=`import Input from 'components/Input'
import Button from 'components/Button'
import {formAction} from './actions'

export default function Demo01() {
  return (
    <form action={formAction}>
      <Input label='Title' name='title' />
      <Input label='content' name='content' />
      <Button>Submit</Button>
    </form>
  )
}
`,Sp=`import Input from 'components/Input'
import {formAction} from './actions'
import SubmitButton from './SubmitButton'

export default function Demo01() {
  return (
    <form action={formAction}>
      <Input label='Title' name='title' />
      <Input label='content' name='content' />
      <SubmitButton>Submit</SubmitButton>
    </form>
  )
}
`,kp=`import {useFormStatus} from 'react-dom'
import Button from "components/Button";

export default function SubmitButton({children}) {
  const {pending} = useFormStatus()
  return (
    <Button primary disabled={pending}>
      {pending ? 'loading...' : children}
    </Button>
  )
}
`,g8=`import {useState} from 'react'
import { useFormStatus } from 'react-dom'
import clsx from 'clsx'
import './index.css'

export default function Input(props) {
  const {type = 'text', className, required, label, help = '此项规则不匹配', pattern, ...other} = props
  const { pending } = useFormStatus()

  const pclsx = clsx('flex items-center my-10', className)

  return (
    <div className={pclsx}>
      {label && <label className="w-20 text-right font-bold">{label}：</label>}
      <div className='input flex-1'>
        <input type={type} required={required} pattern={pattern} {...other} disabled={pending} />
      </div>
    </div>
  )
}
`;function Cp(n){const e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注：由于 FormAction 在 next.js 中的表现暂时还不稳定，因此，本文以及后续文章的探讨全部都是基于他们在客户端的交互与表现"}),`
`]}),`
`,t.jsx(_,{children:t.jsx(h8,{})}),`
`,t.jsx(e.h2,{children:"1"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"action 支持异步回调"})}),`
`,t.jsx(e.p,{children:"一个令人振奋的特性就是，在 React19 中，action 支持传入异步回调函数。我们可以在上面的案例中，输入内容，然后点击提交按钮，你会发现弹窗会在延迟一秒之后展示。"}),`
`,t.jsx(e.p,{children:"案例完整代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`export default function Demo01() {
  async function formAction(fd) {
    const title = fd.get('title')
    const content = fd.get('content')
    if (!title || !content) {
      alert('Miss')
    }
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert(\`Title: \${title}, Content: \${content}\`)
  }
  return (
    <form action={formAction}>
      <Input label='Title' name='title' />
      <Input label='content' name='content' />
      <Button>Submit</Button>
    </form>
  )
}
`})}),`
`,t.jsxs(e.p,{children:["这里一个比较好玩的事情是，我们可以把 ",t.jsx(e.code,{children:"formAction"})," 函数定义到组件外面去。"]}),`
`,t.jsx(Cn,{files:{Demo01:x8,"actions.js":oc}}),`
`,t.jsx(e.p,{children:"有了这个特性的支持，我们就可以非常方便的利用它来实现一些上传逻辑。不过一个小小的需求就是，点击提交之后，接口请求的过程中，我们希望按钮处于禁用状态，那应该怎么办呢？"}),`
`,t.jsxs(e.p,{children:["React 19 提供了名为 ",t.jsx(e.code,{children:"useFormStatus"})," 的 hook 来帮助我们做到这个事情。"]}),`
`,t.jsx(e.h2,{children:"2"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"useFormStatus"})}),`
`,t.jsxs(e.p,{children:["和别的 hook 不同的是，我们需要从 ",t.jsx(e.code,{children:"react-dom"})," 中获取到它的引用"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { useFormStatus } from "react-dom";
`})}),`
`,t.jsx(e.p,{children:"useFormStatus 能够在 form 元素的子组件中，获取到表单提交时的 pending 状态和表单内容。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"与 form 同属于一个组件，获取不到，只能是封装后的子组件才能获取到"}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const { pending, data, method, action } = useFormStatus();
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"pending"})," 为 true 时，表示请求正在进行。我们可以利用这个值的变化在提交按钮上设置 Loading 样式"]}),`
`,t.jsx(e.p,{children:"data 格式为 FormData，表示此次提交里表单的所有内容。"}),`
`,t.jsxs(e.p,{children:["method 表示我们在提交时，所采用的请求方式，默认值为 ",t.jsx(e.code,{children:"get"}),"。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"需要注意的是，提交方式并不需要通过如下方式设置，这样做会报错。"}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<form method="post">

</form>
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"action"})," 就是在 form 元素中的 action 回调函数的引用。"]}),`
`,t.jsx(e.h2,{children:"3"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"案例一：提交时设置禁用按钮"})}),`
`,t.jsx(e.p,{children:"为了防止重复提交，我们希望在提交之后就马上禁用按钮，等到提交完成之后再恢复按钮的点击。与此同时，我们可能还需要在 UI 交互上做出一些提示，让用户知道当前正在发送请求"}),`
`,t.jsx(e.p,{children:"交互效果如如下，大家可以自行操作感受一下"}),`
`,t.jsx(_,{children:t.jsx(wp,{})}),`
`,t.jsxs(e.p,{children:["这里主要是针对提交按钮做的操作，因此我们需要单独将提交按钮相关的部分拿出来封装成为一个子组件，并在子组件中利用 ",t.jsx(e.code,{children:"useFormStatus"})," 获取异步 action 的 pending 状态。"]}),`
`,t.jsx(e.p,{children:"代码非常的简单，如下所示"}),`
`,t.jsx(Cn,{files:{Demo02:Sp,SubmitButton:kp,"actions.js":oc},active:"1"}),`
`,t.jsx(e.h2,{children:"4"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"案例二：提交时禁止输入内容"})}),`
`,t.jsx(e.p,{children:"通常情况下，我们也希望在表单提交时，不允许输入内容。useFormStatus 可以很容易帮我们做到这一点。"}),`
`,t.jsx(e.p,{children:"实现非常简单，我们将某一个字段单独封装到子组件中，利用 useFormStatus 提供的 pending 状态来判断是否禁用输入，代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function Input2({required, name}) {
  const {pending} = useFormStatus()

  return (
    <div className="form_item">
      <div className="label">Name</div>
      <input
        name={name}
        type="text"
        placeholder='Enter you name'
        disabled={pending}
      />
    </div>
  )
}
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<form action={formAction}>
  <div className="form_item">
    <div className="label">Title</div>
    <input name='title' type="text" placeholder='Enter title' />
  </div>

  <Input2 required name='content' />

  <SubmitButton />
</form>
`})}),`
`,t.jsxs(e.p,{children:["我们还可以更激进一点，将其逻辑下层到 ",t.jsx(e.code,{children:"Input"})," 基础组件的封装，演示效果与代码如下"]}),`
`,t.jsx(_,{children:t.jsx(wp,{})}),`
`,t.jsx(Cn,{files:{Demo03:Sp,Input:g8,SubmitButton:kp,"actions.js":oc},active:"1"}),`
`,t.jsx(e.h2,{children:"5"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"总结"})}),`
`,t.jsx(e.p,{children:"useFormStatus 是结合 action 异步请求时使用的 hook，它们是对 HTML 表单能力的增强。因此我们可以借助他们与 HTML 表单元素自身支持的特性实现更复杂的表单交互逻辑。"}),`
`,t.jsxs(e.p,{children:["这里我们需要注意的是 action 与 onSubmit 的区别。onSubmit 会优先于 action 执行。并且，如果我们在 onSubmit 的回调函数中，使用了 ",t.jsx(e.code,{children:"preventDefault"}),"，action 回调将不会执行"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function onSubmit(e) {
  e.preventDefault()
  // ...
}
`})}),`
`,t.jsx(e.p,{children:"在 onSubmit 中，我们可以结合 state，通过控制数据的行为来自定义表单行为，而无需过多依赖 HTML 表单元素本身的能力。具体如何抉择大家需要根据自身项目的需求情况来定。"})]})}function j8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Cp,{...n})}):Cp(n)}function v8(){return t.jsx(Vn,{renderArticle:n=>t.jsx(j8,{components:{code:n}})})}async function b8(n){return n+1}function y8(){const[n,e]=u.useActionState(b8,0);return t.jsxs("form",{action:e,className:"flex items-center",children:[t.jsx("button",{children:"count++"}),t.jsx("div",{className:"ml-4",children:n})]})}function N8({cart:n=[]}){return t.jsx("div",{children:n.map((e,s)=>t.jsxs("div",{className:"border border-yellow-400 p-4 rounded my-4",children:[t.jsxs("div",{className:"font-bold",children:["title: ",e.title]}),t.jsxs("div",{children:["id: ",e.id]}),t.jsxs("div",{children:["count: ",e.count||0]})]},`cart_${s}`))})}async function w8(n,e,s){const r=e.get("id"),a=e.get("title");return await new Promise(l=>{setTimeout(()=>{s({id:r,title:a,count:n+1}),l()},300)}),n+1}function S8({children:n}){const{pending:e}=ua.useFormStatus();return t.jsxs(L,{primary:!0,disabled:e,children:[n,e?"...":""]})}function _p({id:n,title:e,onSubmit:s}){const[r,a]=u.useActionState((l,i)=>w8(l,i,s),0);return t.jsxs("form",{action:a,className:"border p-4 my-3 rounded",children:[t.jsxs("h1",{className:"!my-2",children:["book name: ",e]}),t.jsx("input",{type:"hidden",name:"title",value:e}),t.jsx("input",{type:"hidden",name:"id",value:n}),t.jsxs("div",{style:{marginBottom:"20px"},children:["cart count: ",r]}),t.jsx(S8,{children:"ADD TO CART"})]})}function k8(){const[n,e]=u.useState([]);function s(r){const a=n.find(l=>l.id===r.id);if(a)return a.count+=1,e([...n]);e(l=>[...l,r])}return t.jsxs("div",{children:[t.jsx(_p,{id:"001",title:"JavaScript Core advance",onSubmit:s}),t.jsx(_p,{id:"002",title:"React19 all solution",onSubmit:s}),t.jsx(N8,{cart:n})]})}const C8=`export async function submit(cur, formData, onSubmit) {
  const id = formData.get('id')
  const title = formData.get('title')
  await new Promise((resolve) => {
    setTimeout(() => {
      onSubmit({id, title, count: cur + 1})
      resolve()
    }, 300)
  })
  return cur + 1
}
`,_8=`import { useState } from 'react'

import List from './List'
import BookItem from './BookItem'

export default function Demo02() {
  const [carts, updateCarts] = useState([])

  function addToCart(book) {
    const target = carts.find(cart => cart.id === book.id)
    if (target) {
      target.count += 1
      return updateCarts([...carts])
    }
    updateCarts(carts => [...carts, book])
  }

  return (
    <div>
      <BookItem id='001' title='JavaScript Core advance' onSubmit={addToCart} />
      <BookItem id='002' title='React19 all solution' onSubmit={addToCart} />
      <List cart={carts} />
    </div>
  )
}
`,A8=`import {useFormStatus} from 'react-dom'
import Button from "components/Button";

export default function SubmitButton({children}) {
  const {pending} = useFormStatus()
  return (
    <Button primary disabled={pending}>
      {children}{pending ? '...' : ''}
    </Button>
  )
}
`,$8=`import {useActionState} from 'react'
import {submit} from './actions.js'
import SubmitButton from './SubmitButton'

function BookItem({id, title, onSubmit}) {
  const [count, formAction] = useActionState((cur, formData) => submit(cur, formData, onSubmit), 0)

  return (
    <form action={formAction} className='border p-4 my-3 rounded'>
      <h1 className='!my-2'>book name: {title}</h1>
      <input type="hidden" name='title' value={title} />
      <input type="hidden" name='id' value={id} />
      <div style={{marginBottom: '20px'}}>cart count: {count}</div>
      <SubmitButton>ADD TO CART</SubmitButton>
    </form>
  )
}

export default BookItem;
`,M8=`function CartList({cart = []}) {
  return (
    <div>
      {cart.map((item, index) => (
        <div key={\`cart_\${index}\`} className='border border-yellow-400 p-4 rounded my-4'>
          <div className='font-bold'>title: {item.title}</div>
          <div>id: {item.id}</div>
          <div>count: {item.count || 0}</div>
        </div>
      ))}
    </div>
  )
}

export default CartList
`;function Ap(n){const e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注：由于 FormAction 在 next.js 中的表现暂时还不稳定，因此，本文以及后续文章的探讨全部都是基于他们在客户端的交互与表现"}),`
`]}),`
`,t.jsx(_,{children:t.jsx(y8,{})}),`
`,t.jsx(e.h2,{children:"1"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"useActionState"})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"useActionState"})," 与 useState 的使用基本上是一致的。它同样可以用来定义一个",t.jsx(e.strong,{children:"状态"}),"。他和 useState 不一样的是，",t.jsx(e.code,{children:"useActionState"})," 需要结合 form action 使用，它的更新机制依赖于 action。实例代码如下所示。"]}),`
`,t.jsx(e.p,{children:"useActionState 接收两个参数，第一个参数是一个回调函数，用于获取 action 传递过来的值。第二个参数表示定义状态的初始值。"}),`
`,t.jsx(e.p,{children:"回调函数中，也接收两个参数，第一个参数表示当前状态值。第二参数表示表单 action 提交传递过来的 FormData 值。"}),`
`,t.jsx(e.p,{children:"简单的代码如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import { useActionState } from 'react'

async function increment(cur) {
  return cur + 1
}

export default function Demo01() {
  const [state, action] = useActionState(increment, 0)
  return (
    <form action={action} className='flex items-center'>
      <button>count++</button>
      <div className='ml-4'>{state}</div>
    </form>
  )
}
`})}),`
`,t.jsxs(e.p,{children:["这里需要特别注意的是，我们可以轻松将 useActionAtate 的更新方法 ",t.jsx(e.code,{children:"increment"})," 放到函数之外去。这里的一个好处是更利于与其他组件或者 server 进行交互。在解耦上非常有用。"]}),`
`,t.jsx(e.h2,{children:"2"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"复杂案例"})}),`
`,t.jsx(e.p,{children:"大家先来看一下演示效果。然后再根据代码学习，这是一个比较复杂的案例。"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(k8,{})}),`
`,t.jsx(Cn,{files:{Demo02:_8,BookItem:$8,"actions.js":C8,SubmitButton:A8,List:M8}}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["在 next.js 中使用时，我们可以把 action 单独执行服务端的逻辑，从而轻松做到客户端组件与服务端组件的交互。上面案例中的 ",t.jsx(e.code,{children:"actions.js"})," 则表示服务端的代码"]}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`"use server";

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get('itemID');
  if (itemID === "1") {
    return {
      success: true,
      cartSize: 12,
    };
  } else {
    return {
      success: false,
      message: "The item is sold out.",
    };
  }
}
`})})]})}function R8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Ap,{...n})}):Ap(n)}function L8(){return t.jsx(Vn,{renderArticle:n=>t.jsx(R8,{components:{code:n}})})}const E8=`import { useOptimistic, useState, useRef } from "react";
import { getMessage } from "./api";
import {reducer} from './reducer'

export default function Index() {
  const [messages, setMessages] = useState([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, reducer);

  const form = useRef(null);

  async function formAction(formData) {
    let newMessage = formData.get("message")
    addOptimisticMessage(newMessage);
    form.current.reset();
    let message = await getMessage(newMessage);
    setMessages([...messages, {text: message}])
  }

  return (
    <>
      <form action={formAction} ref={form} className='flex'>
        <input
          type="text"
          name="message"
          placeholder="enter your message"
        />
        <button type="submit" className='ml-2'>Send</button>
      </form>

      {optimisticMessages.map((message, index) => (
        <div key={index} className='indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded'>
          {message.text} {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
    </>
  );
}

`,T8=`const random = [
  'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  'Whether you work on your own or with thousands of other developers, using React feels the same.',
  'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
  'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

export const getMessage = async (message) => {
  await fetch(url, requestOptions)
  return message
}
`,D8=`export function reducer(state, newMessage) {
  let newItem = {
    text: newMessage,
    sending: true
  }
  return [...state, newItem]
}`;var S1=new Headers;S1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var O8={method:"GET",headers:S1,redirect:"follow",data:"hex"};const B8="https://echo.apifox.com/delay/1",z8=async n=>(await fetch(B8,O8),n);function U8(n,e){let s={text:e,sending:!0};return[...n,s]}function fo(){const[n,e]=u.useState([]),[s,r]=u.useOptimistic(n,U8),a=u.useRef(null);async function l(i){let c=i.get("message");r(c),a.current.reset();let o=await z8(c);e([...n,{text:o}])}return t.jsxs(t.Fragment,{children:[t.jsxs("form",{action:l,ref:a,className:"flex",children:[t.jsx("input",{type:"text",name:"message",placeholder:"enter your message"}),t.jsx("button",{type:"submit",className:"ml-2",children:"Send"})]}),s.map((i,c)=>t.jsxs("div",{className:"indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded",children:[i.text," ",!!i.sending&&t.jsx("small",{children:" (Sending...)"})]},c))]})}function $p(n){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:t.jsx(e.strong,{children:"useOptimistic"})}),`
`,t.jsxs(e.p,{children:["如果你在之前的项目开发过程中，被乐观更新的需求折磨过，那么你一定会喜欢这个新 hook：",t.jsx(e.code,{children:"useOptimistic"}),"。它让原本实现起来比较困难的乐观更新，变得非常简单。"]}),`
`,t.jsx(e.p,{children:"通常是指在提交数据时，乐观估计请求结果，不等待真实的请求结果，而直接基于乐观结果修改页面状态的交互方式。例如，我们在聊天软件中，发送一条消息时，当我们点击发送之后，消息就会立即出现在聊天界面。而不会等待发送成功之后再更新页面 UI"}),`
`,t.jsx(e.p,{children:"普通的逻辑为"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`1、事件触发
2、发起请求，等待请求成功 Loading
3、请求成功
4、更新 UI 为正确结果
`})}),`
`,t.jsx(e.p,{children:"乐观更新的执行过程为"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`1、事件触发 -> 直接更新 UI
2、更新 UI 的同时发起请求 Loading
3、请求成功 -> 保持UI 不变
4、若请求失败 -> 则回退 UI
`})}),`
`,t.jsx(e.p,{children:"乐观更新在合适的场景之下，能够更加快速的响应用户交互，在体验上更好一些，因此这是许多项目都想要追求的交互结果。"}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"适用场景"}),`
`,t.jsx(e.p,{children:"并不是所有的操作都适合乐观更新，这需要一些明确的前提条件"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"1、请求成功的概率非常大，几乎不会失败"}),`
`,t.jsx(e.li,{children:"2、不涉及到频繁的，密集的 UI 变化"}),`
`,t.jsx(e.li,{children:"3、可撤回的 UI 变化"}),`
`,t.jsx(e.li,{children:"4、与服务端的反馈时间短，不是一个长期的持续的响应过程"}),`
`]}),`
`,t.jsx(e.p,{children:"例如，在聊天软件中，发送一条消息，在阅读文章时，点赞收藏按钮的交互，给文章发送一条评论，删除一条评论等都非常适合乐观更新。"}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"实现乐观更新需要具备的技术条件"}),`
`,t.jsxs(e.p,{children:["由于乐观更新是一种在",t.jsx(e.strong,{children:"低概率"}),"的情况下，需要撤回更新状态的交互机制，因此，我们在第一时间更新到最新状态时，需要保留上一次的更新状态以便撤回。"]}),`
`,t.jsxs(e.p,{children:["这样的场景与 ",t.jsx(e.code,{children:"redux/useReducer"})," 需要的技术架构非常类似。因此，每一次的更新我们都可以将其设计为一次 action，通过 reducer 的方式将其合并到完整数据中去"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`interface Action {
  // 操作方式
  type: string,
  // 乐观更新的数据结构
  state: {
    id: 'xxx',
    text: 'xxx'
  }
}
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`// 假设 state 是一个列表
reducer(state, action) {
  return [...state, action.state]
}
`})}),`
`,t.jsx(e.p,{children:"如果保留了上一次的更新状态，我们也可以非常方便的还原数据。"}),`
`,t.jsxs(e.p,{children:["除此之外，乐观更新的数据结构是我们在客户端根据预估情况生成的，因此不能直接存储在服务端，有的数据需要按照服务端的逻辑来创建，例如一条数据包含了 ",t.jsx(e.code,{children:"id"}),"，那么我们就不能按照客户端的逻辑来创建 id，这个时候，需要我们",t.jsx(e.strong,{children:"在接口请求成功之后，完整的完成一次数据的替换"}),"。"]}),`
`,t.jsx(e.p,{children:"最后，还有一个非常重要的问题。那就是更新快速重复的发生时如何处理。这是乐观更新最考验开发者技术能力的地方。"}),`
`,t.jsx(e.p,{children:"当第一次请求还没结束的时候，但是此时当乐观更新重复发生，就会引发一系列不合理的问题。因此，什么时候将 action 合并到真实数据中去，就需要反正斟酌。"}),`
`,t.jsx(e.p,{children:"这里不仅要考虑更新失败时我们应该如何处理，更需要考虑竞态的顺序问题，我们必须以 action 创建的顺序将 action 合并到数据中。"}),`
`,t.jsx(e.p,{children:"在保证顺序的这个基础之上，我们还需要考虑前面如果某个 action 迟迟得不到响应，会阻塞后面 action 的合并。因此，我们还需要设计一个合理的超时机制。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"所以，如果我们自己来设计一套完善的乐观更新机制，对开发者开发能力的要求非常高，我们可以将其作为项目亮点在面试中去介绍"}),`
`]}),`
`,t.jsx(e.p,{children:"因此，显而易见的是，基于并发模式的 React，解决乐观更新这类交互问题非常的适合，接下来我们就一起来学习一下 React 19 中，针对乐观更新提出来的解决方案"}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"React 19 是如何实现乐观更新的"}),`
`,t.jsx(e.p,{children:"React 19 针对乐观更新，提出了一个新的 hook，useOptimistic"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注意，乐观更新完整的技术实现一定要结合我们刚才所提到的技术基础来理解，单独只学习一个 hook，无法构成乐观更新的完整方案"}),`
`]}),`
`,t.jsx(e.p,{children:"它的基础语法如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
`})}),`
`,t.jsxs(e.p,{children:["注意看，useOptimistic 接收两个参数，其实这两个参数与 ",t.jsx(e.code,{children:"reducer"})," 的参数非常相似。"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"state"})," 表示当前状态，",t.jsx(e.code,{children:"updateFn"})," 表示我们如何将新的 action 合并到 ",t.jsx(e.code,{children:"state"})," 中去"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`updateFn = (currentState, value) => {
  // 根据上一次状态与新的 value 合并
  // merge and return new state
}
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"optimisticState"})," 表示合并之后的新状态。但是这里我们需要特别注意的是，它是一个临时状态，并非最终状态。通常情况下，我们会使用该临时状态渲染 UI，以便 UI 能够得到最快速的响应。"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"addOptimistic"})," 是一次操作行为，类似于 dispatch，它会将参数传递给 ",t.jsx(e.code,{children:"updateFn"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`addOptimistic({a: 1})

-> 

// 此时 value = {a: 1}
updateFn = (currentState, value) => {
  return [...currentState, value]
}
`})}),`
`,t.jsx(e.p,{children:"因此，在使用 useOptimistic 之前，我们还需要借助 useState 创造一个状态，该状态为更新的真实状态。我们通过 useOptimistic 得到的状态是一个副本，它通过 useState 的状态来初始化，在接口请求成功之后，真实状态才会得到更新。"}),`
`,t.jsx(e.p,{children:"接下来，我们来实现一个简单的案例。"}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"案例一：消息发送"}),`
`,t.jsx(_,{children:t.jsx(fo,{})}),`
`,t.jsx(e.p,{children:"我们要实现的效果案例如上。"}),`
`,t.jsxs(e.p,{children:["首先明确一点，消息发送是一个异步过程，因此我们把这个过程使用 ",t.jsx(e.code,{children:"Sending..."})," 字符来表示，当每条消息的 ",t.jsx(e.code,{children:"Sending..."})," 消失，才表示数据更新成功。"]}),`
`,t.jsx(e.p,{children:"先来考虑布局。"}),`
`,t.jsx(e.p,{children:"首先我们需要一个 form 表单来处理输入的交互"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<form id={s.form} action={formAction}>
  <input
    type="text"
    name="message"
    placeholder="enter your message"
  />
  <button type="submit">Send</button>
</form>
`})}),`
`,t.jsxs(e.p,{children:["然后我们需要一个列表来渲染输出之后的结果。根据我们之前的学习结果，该列表需要用 ",t.jsx(e.code,{children:"useOptimistic"})," 返回的临时状态来处理，这样我们才能够第一时间在 UI 上看到反馈结果"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`{optimisticMessages.map((message, index) => (
  <div key={index}>
    {message.text}
    {!!message.sending && <small> (Sending...)</small>}
  </div>
))}
`})}),`
`,t.jsx(e.p,{children:"再来思考状态如何设计。"}),`
`,t.jsx(e.p,{children:"首先我们需要使用 useState 来设计一个状态，用于存储真实的状态结果"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const [messages, setMessages] = useState([]);
`})}),`
`,t.jsxs(e.p,{children:["然后我们需要使用 ",t.jsx(e.code,{children:"useOptimistic"})," 来设计临时状态，这里需要注意的是，我们可以把它当成一个 reducer 来看待，第一个参数表示当前状态，第二参数表示一个合并方式"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const [optimisticMessages, addOptimisticMessage] = useOptimistic(
  messages,
  (state, newMessage) => [
    ...state,
    {
      text: newMessage,
      sending: true
    }
  ]
);
`})}),`
`,t.jsxs(e.p,{children:["临时状态中包含一个 ",t.jsx(e.code,{children:"sending: true"}),"，用于标识当前请求正在发生。"]}),`
`,t.jsxs(e.p,{children:["在 ",t.jsx(e.code,{children:"formAction"})," 回调函数中，我们会调用 ",t.jsx(e.code,{children:"addOptimisticMessage"})," 立即更新临时状态，并发送请求，我们提前把发送请求的接口写好"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`// actions.js
export async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}
`})}),`
`,t.jsxs(e.p,{children:["那么，",t.jsx(e.code,{children:"formAction"})," 的完整逻辑为"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`async function formAction(formData) {
  let newMessage = formData.get("message")
  addOptimisticMessage(newMessage);
  let message = await deliverMessage(newMessage);
  setMessages([...messages, {text: message}])
}
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"请求发送成功之后，更新真实状态"}),`
`]}),`
`,t.jsx(e.p,{children:"这样，一个简单的乐观更新交互，我们就完成了，该案例的完整代码右侧所示。"}),`
`,t.jsx(_,{children:t.jsx(fo,{})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"reset() 用于立即重置表单内容，可进行下一次输入。默认行为是接口请求成功之后才会重置"}),`
`]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"问题"}),`
`,t.jsxs(e.p,{children:["尝试一下快速连续输入内容并 ",t.jsx(e.code,{children:"Send"}),"，我们会发现，最终的效果并非我们所愿，此时会有多条内容同时正在 ",t.jsx(e.code,{children:"Sending"}),"，但是最终请求成功之后，这些同时的 ",t.jsx(e.code,{children:"Sending"})," 内容仅有一条信息被合并到最终结果中，其他的内容会消失。那么在此基础之上，我们需要如何来解决这个问题呢？下一章我们继续学习。"]})]})}function H8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx($p,{...n})}):$p(n)}const q8={"App.js":E8,"api.js":T8,"reducer.js":D8};function V8(){return t.jsx(z,{files:q8,renderArticle:n=>t.jsx(H8,{components:{code:n}}),caseRender:t.jsx(fo,{})})}const X8=`import { useOptimistic, useState, useRef, useTransition } from "react";
import { getMessage } from "./api";
import {reducer} from './reducer'

export default function Index() {
  const [messages, setMessages] = useState([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, reducer);
  const [isPending, startTransition] = useTransition()

  const form = useRef(null);

  async function formAction(formData) {
    let newMessage = formData.get("message")
    form.current.reset();
    startTransition(async () => {
      addOptimisticMessage(newMessage);
      let message = await getMessage(newMessage);
      setMessages([...messages, {text: message}])
    })
  }

  return (
    <>
      <form action={formAction} ref={form} className='flex'>
        <input
          type="text"
          name="message"
          placeholder="enter your message"
          disabled={isPending}
        />
        <button type="submit" className='ml-2' disabled={isPending}>Send</button>
      </form>

      {optimisticMessages.map((message, index) => (
        <div key={index} className='indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded'>
          {message.text} {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
    </>
  );
}

`,Z8=`const random = [
  'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  'Whether you work on your own or with thousands of other developers, using React feels the same.',
  'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
  'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

export const getMessage = async (message) => {
  await fetch(url, requestOptions)
  return message
}
`,G8=`export function reducer(state, newMessage) {
  let newItem = {
    text: newMessage,
    sending: true
  }
  return [...state, newItem]
}`;var k1=new Headers;k1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var Y8={method:"GET",headers:k1,redirect:"follow",data:"hex"};const I8="https://echo.apifox.com/delay/1",F8=async n=>(await fetch(I8,Y8),n);function P8(n,e){let s={text:e,sending:!0};return[...n,s]}function C1(){const[n,e]=u.useState([]),[s,r]=u.useOptimistic(n,P8),[a,l]=u.useTransition(),i=u.useRef(null);async function c(o){let d=o.get("message");i.current.reset(),l(async()=>{r(d);let m=await F8(d);e([...n,{text:m}])})}return t.jsxs(t.Fragment,{children:[t.jsxs("form",{action:c,ref:i,className:"flex",children:[t.jsx("input",{type:"text",name:"message",placeholder:"enter your message",disabled:a}),t.jsx("button",{type:"submit",className:"ml-2",disabled:a,children:"Send"})]}),s.map((o,d)=>t.jsxs("div",{className:"indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded",children:[o.text," ",!!o.sending&&t.jsx("small",{children:" (Sending...)"})]},d))]})}function Mp(n){const e={code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:"案例二：结合 useTransition"}),`
`,t.jsx(e.p,{children:"在上一章的案例中，当我们快速发送多条信息时，我们发现，并不是每一条消息都被成功合并到真实状态中了。最终结果是有的消息不见了。那如何解决这个问题呢？"}),`
`,t.jsxs(e.p,{children:["我们可以结合 ",t.jsx(e.code,{children:"useTransition"})," 来防止用户连续触发 ",t.jsx(e.code,{children:"formAction"})," 的执行"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const [isPending, startTransition] = useTransition()
`})}),`
`,t.jsx(e.p,{children:"formAction 的定义调整为："}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`async function formAction(formData) {
  let newMessage = formData.get("message")
  form.current.reset()
  startTransition(async () => {
    addOptimisticMessage(newMessage);
    let message = await deliverMessage(newMessage);
    setMessages((messages) => [...messages, {text: message}])
  })
}
`})}),`
`,t.jsxs(e.p,{children:["然后使用 ",t.jsx(e.code,{children:"isPending"})," 来控制输入的禁用状态"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<form id={s.form} action={formAction} ref={form}>
  <input
    type="text"
    name="message"
    placeholder="Hello!"
    disabled={isPending}
  />
  <button
    type="submit"
    disabled={isPending}
    style={{marginLeft: '10px'}}
  >Send</button>
</form>
`})}),`
`,t.jsx(e.p,{children:"感受一下最终演示效果"}),`
`,t.jsx(_,{children:t.jsx(C1,{})}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"问题"}),`
`,t.jsxs(e.p,{children:["很明显，这并不是最合理的交互方案。我们期望的是，",t.jsx(e.strong,{children:"连续输入依然能够发生"}),"，在这个基础之上我们可以控制好数据的合并逻辑，那么借助 react 19 的机制，我们可以如何实现呢？"]})]})}function Q8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Mp,{...n})}):Mp(n)}const J8={"App.js":X8,"api.js":Z8,"reducer.js":G8};function W8(){return t.jsx(z,{files:J8,renderArticle:n=>t.jsx(Q8,{components:{code:n}}),caseRender:t.jsx(C1,{})})}const K8=`import { useState, useRef, use, Suspense } from "react";
import { getMessage } from "./api";

export default function Index() {
  const [actions, updateActions] = useState([]);
  const form = useRef(null);

  function formAction(formData) {
    let newMessage = formData.get("message")
    form.current.reset();
    let action = {
      newMessage,
      promise: getMessage(newMessage)
    }
    updateActions((actions) => [...actions, action])
  }

  return (
    <>
      <form action={formAction} ref={form} className='flex'>
        <input
          type="text"
          name="message"
          placeholder="enter your message"
        />
        <button type="submit" className='ml-2'>Send</button>
      </form>

      {actions.map((action, index) => (
        <Suspense key={\`h-\${index}\`} fallback={<Message>{action.newMessage}(Seding...)</Message>}>
          <ListItem promise={action.promise} />
        </Suspense>
      ))}
    </>
  );
}

function Message({children}) {
  return (
    <div className='indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded'>
      {children}
    </div>
  )
}

function ListItem(props) {
  const msg = use(props.promise)
  return (
    <Message>{msg}</Message>
  )
}`,e9=`const random = [
  'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  'Whether you work on your own or with thousands of other developers, using React feels the same.',
  'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
  'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

export const getMessage = async (message) => {
  await fetch(url, requestOptions)
  return message
}
`;var _1=new Headers;_1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var n9={method:"GET",headers:_1,redirect:"follow",data:"hex"};const t9="https://echo.apifox.com/delay/1",s9=async n=>(await fetch(t9,n9),n);function A1(){const[n,e]=u.useState([]),s=u.useRef(null);function r(a){let l=a.get("message");s.current.reset();let i={newMessage:l,promise:s9(l)};e(c=>[...c,i])}return t.jsxs(t.Fragment,{children:[t.jsxs("form",{action:r,ref:s,className:"flex",children:[t.jsx("input",{type:"text",name:"message",placeholder:"enter your message"}),t.jsx("button",{type:"submit",className:"ml-2",children:"Send"})]}),n.map((a,l)=>t.jsx(u.Suspense,{fallback:t.jsxs($1,{children:[a.newMessage,"(Seding...)"]}),children:t.jsx(r9,{promise:a.promise})},`h-${l}`))]})}function $1({children:n}){return t.jsx("div",{className:"indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded",children:n})}function r9(n){const e=u.use(n.promise);return t.jsx($1,{children:e})}function Rp(n){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:t.jsx(e.strong,{children:"解决上一章的问题"})}),`
`,t.jsx(e.p,{children:"我们这一章要解决的问题是，如果我要连续快速输入，内容，又不想多个 Sending 中的信息被合并，同时呢，我们又不想使用一些方式限制用户的输入，那么我们应该怎么做？"}),`
`,t.jsx(e.p,{children:"我们在解决问题时，一定要对问题做出精准的分析，从而找到合适的解决方案。这里需求发生了一点变动，这里的变动就是，我不希望多个同时处于发送状态中的信息被回退重置。因此，我们要把状态拆分开，每一条信息各自维护自己的状态。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"因此，通常情况下，我们会把需求进一步调整成为请求失败也不回退，而是给出重试按钮或者异常状态，这种情况下，就和乐观更新的需求产生了一点微妙的差异。基于这个基础，我们来重新思考实现方案"}),`
`]}),`
`,t.jsx(e.p,{children:"即然已经跟乐观更新产生了差异，那么我们就只需要借助常规的手段来实现即可。这里需要注意的是，虽然从需求上来说，我们可以不再思考回退，但是还需要保持乐观更新的 UI 特性。因此，在数据结构的设计上就需要有一些技巧。"}),`
`,t.jsx(e.p,{children:"UI 需求的步骤为"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`1、事件触发 -> UI 立即更新
2、UI 更新的同时，发送请求，此时可以显示 Loading 状态
3、请求成功之后，UI 确定更新，Loading 状态小时
4、请求失败，显示失败状态
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"我们注意看，这里虽然与我们之前描述的乐观更新有所差异，但是保留了大部分乐观更新的核心特征，只是没有失败回退的效果，而是失败重置或者显示失败状态"}),`
`]}),`
`,t.jsxs(e.p,{children:["首先，我们设计一个状态数据结构，该状态将要保留了乐观更新时提前展示的消息，以及一个 promise 用于请求。我们准备结合 ",t.jsx(e.code,{children:"use"})," + ",t.jsx(e.code,{children:"Suspense"})," 共同完成这个事情。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`action = {
  newMessage: 'hello world',
  promise: getMessage(newMessage)
}
`})}),`
`,t.jsx(e.p,{children:"我们将会维护一个 action 组成的数组作为状态"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const [actions, updateActions] = useState([]);
`})}),`
`,t.jsxs(e.p,{children:["我们将结合 Suspense fallback 的特性，请求过程中通过 fallback 展示 ",t.jsx(e.code,{children:"newMessage"}),"，然后请求成功之后再使用 promise 的请求结果来替换"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`{actions.map((action, index) => (
  <Suspense key={\`h-\${index}\`} fallback={<Message>{action.newMessage}(Seding...)</Message>}>
    <ListItem promise={action.promise} />
  </Suspense>
))}
`})}),`
`,t.jsx(e.p,{children:"然后在 form 的 action 回调中，新增新的 action"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function formAction(formData) {
  let newMessage = formData.get("message")
  form.current.reset();
  let action = {
    newMessage,
    promise: getMessage(newMessage)
  }
  updateActions((actions) => [...actions, action])
}
`})}),`
`,t.jsx(e.p,{children:"完整代码请看右侧展示区域，代码演示如下"}),`
`,t.jsx(_,{children:t.jsx(A1,{})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"剩下一个需求，是请求失败展示错误或者重试，留一个小挑战，大家可以自行扩展一下"}),`
`]})]})}function a9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Rp,{...n})}):Rp(n)}const l9={"App.js":K8,"api.js":e9};function i9(){return t.jsx(z,{files:l9,renderArticle:n=>t.jsx(a9,{components:{code:n}}),caseRender:t.jsx(A1,{})})}const c9=`import { useOptimistic, useState, useTransition } from "react";
import {reducer} from './reducer'
import { likeApi } from "./api";
import s from './index.module.css'

export default function Index() {
  const [like, setLike] = useState(false);
  const [optimisticLike, dispatch] = useOptimistic(like, reducer);
  const [isPending, startTransition] = useTransition()
  const [end, setEnd] = useState()

  function __clickHandler() {
    if (isPending) return
    let newState = !like;
    startTransition(async () => {
      dispatch(newState)
      try {
        let state = await likeApi(newState)
        setLike(state)
        setEnd(true)
      } catch (e) {
        setEnd(false)
      }
    })
  }

  let __cls = optimisticLike ? \`\${s.cen} \${s.active}\` : s.cen

  return (
    <div>
      <div className={s.star} onClick={__clickHandler}>
        <div id={s.lef} className={__cls}></div>
        <div id={s.c} className={__cls}></div>
        <div id={s.rig} className={__cls}></div>
      </div>
      <div className={s.loading}>
        状态：
        {isPending && '请求中...'}
        {!isPending && end === true && '请求成功'}
        {!isPending && end === false && '请求失败'}
      </div>
    </div>
  );
}

`,o9=`export async function likeApi(message) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(message)
      } else {
        reject(message)
      }
    }, 1000)
  });
  return message;
}
`,d9=`export function reducer(state, newState) {
  return newState
}
`,u9=`.star {
  position: relative;
  transform: scale(0.2);
  height: 200px;
  --active-color: #d5093c;
  --normal-color: #cdcdcd;
}
.cen {
  width: 200px;
  height: 200px;
  background-color: var(--normal-color);
}
.cen.active {
  background-color: var(--active-color);
  animation: 1s aj;
}

#lef {
  border-radius: 100px;
  position: absolute;
  top:200px;
  left: 300px;
}
#c {
  transform: rotate(45deg);
  position: absolute;
  top:275px;
  left: 375px;
}
#rig {
  border-radius: 100px;
  position: absolute;
  top:200px;
  left: 450px;
}

.loading {
  text-align: center;
}

@keyframes aj {
  0%{transform: scale(1)rotate(45deg);}
  50%{transform: scale(1.1)rotate(45deg);}
  100%{transform: scale(1)rotate(45deg);}
}
`;function m9(n,e){return e}async function p9(n){return await new Promise((e,s)=>{setTimeout(()=>{Math.random()>.1?e(n):s(n)},1e3)}),n}const h9="_star_1fvk4_1",f9="_cen_1fvk4_8",x9="_active_1fvk4_13",g9="_aj_1fvk4_1",j9="_lef_1fvk4_1",v9="_c_1fvk4_8",b9="_rig_1fvk4_1",y9="_loading_1fvk4_37",pt={star:h9,cen:f9,active:x9,aj:g9,lef:j9,c:v9,rig:b9,loading:y9};function N9(){const[n,e]=u.useState(!1),[s,r]=u.useOptimistic(n,m9),[a,l]=u.useTransition(),[i,c]=u.useState();function o(){if(a)return;let m=!n;l(async()=>{r(m);try{let h=await p9(m);e(h),c(!0)}catch{c(!1)}})}let d=s?`${pt.cen} ${pt.active}`:pt.cen;return t.jsxs("div",{children:[t.jsxs("div",{className:pt.star,onClick:o,children:[t.jsx("div",{id:pt.lef,className:d}),t.jsx("div",{id:pt.c,className:d}),t.jsx("div",{id:pt.rig,className:d})]}),t.jsxs("div",{className:pt.loading,children:["状态：",a&&"请求中...",!a&&i===!0&&"请求成功",!a&&i===!1&&"请求失败"]})]})}function Lp(n){const e={code:"code",h3:"h3",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:"一个复杂的案例"}),`
`,t.jsx(e.p,{children:"再来实现一个比较常见的点赞按钮的交互逻辑。演示效果如上图所示。具体需求如下："}),`
`,t.jsx(e.p,{children:"当按钮处于灰色状态时，表示用户还未点赞该文章。点击之后，变成红色，表示点赞。"}),`
`,t.jsx(e.p,{children:"当按钮处于红色状态时，表示用户已经点赞该文章。点击之后变成灰色，表示取消点赞。"}),`
`,t.jsxs(e.p,{children:["解决方案与前面提到的完全一致，同时也结合了 ",t.jsx(e.code,{children:"useTransition"})," ，我们就不再一一分析步骤，直接展示完整代码"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { useOptimistic, useState, useTransition } from "react";
import { likeApi } from "./api.js";
import s from './index.module.css'

export default function Index() {
  const [like, setLike] = useState(false);
  const [optimisticLike, updateLike] = useOptimistic(
    like,
    (state, newState) => newState
  );
  const [isPending, startTransition] = useTransition()
  const [end, setEnd] = useState()

  function __clickHandler() {
    if (isPending) return
    let newState = !like;
    startTransition(async () => {
      updateLike(newState)
      try {
        let state = await likeApi(newState)
        setLike(state)
        setEnd(true)
      } catch (e) {
        setEnd(false)
      }
    })
  }

  let __cls = optimisticLike ? \`\${s.cen} \${s.active}\` : s.cen

  return (
    <div>
      <div className={s.star} onClick={__clickHandler}>
        <div id={s.lef} className={__cls}></div>
        <div id={s.c} className={__cls}></div>
        <div id={s.rig} className={__cls}></div>
      </div>
      <div className={s.loading}>
        状态：
        {isPending && '请求中...'}
        {!isPending && end === true && '请求成功'}
        {!isPending && end === false && '请求失败'}
      </div>
    </div>
  );
}
`})}),`
`,t.jsx(e.p,{children:"在 api 的请求中，我们可以通过判断随机数的大小来模拟请求失败时的表现。目前请求失败的概率是 10%"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`// api.js
export async function likeApi(message) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(message)
      } else {
        reject(message)
      }
    }, 1000)
  });
  return message;
}
`})}),`
`,t.jsx(e.p,{children:"由于逻辑与之前几乎保持一致，因此本案例主要通过代码学习，未做详细讲解，完整代码如右侧所示。"})]})}function w9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Lp,{...n})}):Lp(n)}const S9={"App.js":c9,"api.js":o9,"reducer.js":d9,"index.module.css":u9};function k9(){return t.jsx(z,{files:S9,renderArticle:n=>t.jsx(w9,{components:{code:n}}),caseRender:t.jsx(N9,{})})}function Ep(n){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:"完结感言"}),`
`,t.jsxs(e.p,{children:["从 5 月 18 号左右，萌生了要写一本这样的付费小册，到现在 7 月 27 号，历时两个多月，",t.jsx(e.strong,{children:"这本小册终于正式完结啦。"}),"  ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡ 由于我没有上班，几乎可以说是全职投入这本小册，因此看上去历时并不久，但是我经历的东西和过程确实非常多。"]}),`
`,t.jsx(e.p,{children:"当我看着付费群里的 300 多人，从盈利的角度来说，在没有经历过大面积长时间的宣传，这本小册无疑是非常非常成功的。"}),`
`,t.jsx(e.p,{children:"但是除此之外，在这本小册里，我还投入了对于新的学习方式和商业模式的探索，是对于我学习能力的一次重要考验，是对于我综合能力的一次有力验证，因此这本小册对我个人而言，意义非凡，它可能是一个重要的转折点。"}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"学习方法上的探索"}),`
`,t.jsxs(e.p,{children:["大约从 2017 年开始，我就在",t.jsx(e.a,{href:"https://www.yuque.com/coreadvance/ar2my1/apk8cr",children:"从事 1V1 帮助别人提高前端技术能力的副业"}),"，在这个长达 7 年的教学生涯中，我接触到了大量的形形色色的人。在学习的基础能力上，每个人都各不相同。有的人本身就具备较强的基础学习能力，稍加指点，就能够在职场中获得巨大的蜕变。而更多的却是连最基础的学习方法都没有掌握的人。"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"因此他们的一个共同的表现就是，他们在学习新知识的时候非常吃力。"})," 甚至还有很多人长时间不得其法。所以在这个过程中，我慢慢变得擅长为每个人量身定做适合的学习方法，并且在教学的过程中，把学习方法的培养变成重中之重。在这个基础之上，他们在跟我学习一段时间之后，就能够自己有足够的学习能力学习新的知识，从而具备自我成长的潜力。一个很好的结果就是，",t.jsx(e.strong,{children:"有好些人在技术方面的成就已经在我之上。"})]}),`
`,t.jsxs(e.p,{children:["但是一个很大的问题就是，这样量身定做学习方法的方式并",t.jsx(e.strong,{children:"不具备普适价值"}),"。我有一个很大的感受就是，",t.jsx(e.strong,{children:"学霸的学习方法往往都是共通的，但是学霸之外，大家在学习上的痛，就长得奇形怪状，千奇百怪。"})," 同样的学习方法，在一个人身上闪闪发光，但是在另外一个人的身上，甚至毫无作用。甚至有的人由于自律的问题，需要在沟通的过程中不停的给他施加压力，否则就是长时间的自我懈怠。"]}),`
`,t.jsx(e.p,{children:"更多的时候，还需要在学习过程中进行大量的心理辅导，帮助它解决各种原因导致的心里内耗。"}),`
`,t.jsxs(e.p,{children:["因此我一直在思考，如何找到一种适合更多人的学习方式。虽然这种学习方法效果不如学霸级学习方法那么立竿见影，但是至少能够保证大多数人都学有所得。经过很多次思考、探索、实践，后来我才发现被广为病垢的",t.jsx(e.strong,{children:"填鸭式学习法"}),"可能才是我想要找的内容。"]}),`
`,t.jsx(e.p,{children:"因为我在很长一段时间里，都一直认为填鸭式学习法是一种落后的，低效的学习方式，但是在带过很多学生之后发现，这可能是大多数人更愿意接受、并且效果性价比最高的一种学习方式。这样的思维转变对我来说非常困难。但是后来我重新审视了我自己长期以来带有偏见的观念。"}),`
`,t.jsx(e.p,{children:"这个思考的灵感来源于付费群里的同学有人跟我说，很多时候不用非得彻底理解，先知道怎么用，用多了自然就理解了。因此在这个基础之上，我在文章内容中，内置了大量的实战案例，以及对应的，原样的代码。大概如下所示。"}),`
`,t.jsx(_,{children:t.jsx(Cn,{files:{App:r1,"api.js":a1,List:i1,Tabs:c1,Skeleton:l1},caseRender:t.jsx(d1,{})})}),`
`,t.jsx(e.p,{children:"在大量这样的案例的支撑之下，有可能读者无法快速理解我想要传达的开发思维与架构思维，但是现成的案例可以让他快速将其运用到项目实践中。大量的运用实践可以帮助读者在实践中消化，在实践中理解与感悟，这样的障碍和瓶颈会降低很多。学习推进的进度可能会比较慢，但不会让人感觉窒息，不得其法。"}),`
`,t.jsx(e.p,{children:"有真实案例运行的呈现方式，和只是贴代码或者截图很不一样。"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"这里的不同则来源于很多时候，贴的代码可能会存在缺少部分细节从而导致代码压根无法正确运行的情况，给学习者带来巨大的困扰。"}),`
`,t.jsx(e.li,{children:"另外一方面则是排版的不规则和零散，会让学习者不得其法。"}),`
`,t.jsx(e.li,{children:"真实案例能够更加直观的展示出来一篇文章的目标，在理解成本上也会降低很多。"}),`
`,t.jsx(e.li,{children:"除此之外，很多只贴代码的表达，是可以不用经过验证的，许多人的文章虽然写出来了，但是并没有真的运行成功过，因此真实案例也是一次有效的验证成功，学习者不用担心这样的代码是无法运行的，减少了很多心里负担。"}),`
`]}),`
`,t.jsxs(e.p,{children:["也是到了后来，群友的正向学习反馈，让我更加理解了",t.jsx(e.strong,{children:"书读百遍，其义自现"}),"的含义。因此实际上这本小册很早就已经写完了，大概是 6 月 27 号发布了第一个版本。这一个月时间里，经历了许多群友的学习验证之后，我才敢写这篇完结感言，因为从大家的反馈中，我感受到了我的这一次探索是达到了我的预期成效的。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["我写的每一本付费小册，都会深度践行我在学习方法上的思考和感悟，因此在小册开头，我都会花费大量的篇幅为大家讲解在学习方法上我是如何思考的，以便于大家能够快速明确应该以什么样的心态和理念去学习它，例如之前的",t.jsx(e.a,{href:"https://mp.weixin.qq.com/s?__biz=MzI4NjE3MzQzNg==&mid=2649867007&idx=1&sn=6443ff970cd077bbb50de74ce84afa06",children:"《React 哲学》"}),"、",t.jsx(e.a,{href:"https://appxw863qeq2150.h5.xiaoeknow.com/v1/goods/goods_detail/course_2Y46vk3Fhd2CF4CrB5qSNjW6A9R?",children:"《JavaScript 核心进阶》"}),"，这本小册也是这样，可能未来我会将这些学习理念融合到一起，那么我的小册质量会越来越高"]}),`
`]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"商业模式上的思考"}),`
`,t.jsxs(e.p,{children:["这本付费小册，是在我",t.jsx(e.a,{href:"https://mp.weixin.qq.com/s/W7jb77rSzML9vUbF-G0cPg",children:"探索微信小程序流量主模式失败"}),"之后的另外一种尝试。我希望能够在我获得收益的同时能够真实的帮助到他人，从而达到一种",t.jsx(e.strong,{children:"互利共赢"}),"的局面。"]}),`
`,t.jsxs(e.p,{children:["因此，在付费群里面我多次与大家分享了这本小册可以使用在什么地方。首先要明确的一个就是，React 19 代表了一种新的开发方式，",t.jsx(e.strong,{children:"它本身在架构思维上是具有很强的先进性的"}),"。因此我们可以"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"1、在面试中表达自己对 React19 的学习成果，从而展示自己对于新知识的热情"}),`
`,t.jsx(e.li,{children:"2、在团队中做相关的技术分享，为年底绩效等铺垫内容"}),`
`,t.jsx(e.li,{children:"3、彻底掌握 React19 的架构思维，重构团队中已经负重前行的项目，从而体现自己的团队贡献，为晋升打好基础，并且在这个过程中提升自己的项目架构能力"}),`
`]}),`
`,t.jsx(e.p,{children:"值得高兴的是，在这个一个月的时间里，确实有少数几位同学按照我的推荐去认真执行了，并且取得了不错的成效。因此，我希望这种商业模式能够健康的持续下去，以帮助到更多的人。"}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"技术方案上的思考"}),`
`,t.jsx(e.p,{children:"从最开始萌生一个简单的想法，到最终将这个想法落地，其实中间还需要走很长的路。因此制作一本这样的付费小册的想法只需要一个一瞬间，但是真实要落地下来，面临的困难却非常多。如何实现它成为了一个难题。"}),`
`,t.jsxs(e.p,{children:["这其中比较困难的就在于，如何让演示案例与演示代码",t.jsx(e.strong,{children:"共存"}),"，并且案例运行的代码与展示的代码是同一份。这样就极大程度的确保了",t.jsx(e.strong,{children:"一致性"}),"。"]}),`
`,t.jsx(e.p,{children:"为了解决这个难题，我做了一些尝试"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"一、调研现有成熟的技术网站"})}),`
`,t.jsx(e.p,{children:"我调研了大多数常用的技术博客论坛，例如大家熟知的知乎、掘金、语雀、以及国外的一些平台，Medium，github 等，但是他们都无法支持我的想法，当然，我本身对我的想法能够被满足也不报太大的希望。"}),`
`,t.jsx(e.p,{children:t.jsxs(e.strong,{children:["二、与 ",t.jsx(e.code,{children:"mdnice"})," 核心开发大鹏沟通，是否能够新增一些需求满足我的想法"]})}),`
`,t.jsxs(e.p,{children:["大鹏是我在做自由职业时认识的一位大佬，他的个人作品 ",t.jsx(e.code,{children:"mdnice"})," 在 md 编辑器上的积累已经非常成熟，因此，因此我第二个想到的是看看能不能在这个基础之上做一些扩展，来满足我的需求，不过后续我们相互沟通之后发现我的这种需求放到他现有的体系里不是很合适，因为 ",t.jsx(e.code,{children:"mdnice"})," 主要面向的是针对公众号的布局开发。"]}),`
`,t.jsx(e.p,{children:"不过在后续的沟通过程中，我们又迸发了许多新的想法，并且后续我可能也会参与 mdnice 的一些开发工作，发挥我的独特优势进一步补全我们的想法，让 mdnice 在商业化的道路上变得更加完善。"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"三、调研现有的博客系统，例如 dumi、vitepress、Rspress"})}),`
`,t.jsx(e.p,{children:"这些都是非常成熟的解决方案。并且内置的 mdx 可以比较轻松的完成我的构想。但是由于我的设想中，定制化程度太高，在花费了俩三天时间学习 vitepress 的使用过程中，感觉有一些想要的东西还是实现不了，因此最终决定放弃使用别人现有的方案，而是基于 mdx 自己组装一套方案出来。"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"四、调研现有的技术方案"})}),`
`,t.jsx(e.p,{children:"得益于 React 生态的强大，我原本认为会很困难的事情，没想到都有好几种对应的解决方案。"}),`
`,t.jsx(e.p,{children:"这里边需要解决问题包括"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"1、md 文件格式的渲染。可选的方案有 react-markdown、mdx 等"}),`
`,t.jsx(e.li,{children:"2、代码高亮 可选的方案有 react-syntax-highlighter、remarkjs、highlight 等"}),`
`,t.jsx(e.li,{children:"3、内置编辑器有 Monaco Editor、Mirror Editor 等"}),`
`,t.jsx(e.li,{children:"4、案例热更新方案 Sandpack"}),`
`]}),`
`,t.jsx(e.p,{children:"我花了很大的精力去分别验证这些解决方案的可行性，最终经过试用淘汰，演变成目前的状态，虽然有的方案最终我并没有采用，但是在这个过程中我对他们的运用已经非常熟练。"}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"对我综合能力的考验"}),`
`,t.jsx(e.p,{children:"自己开发一个网站，很多时候最考验我的，反而是综合能力。例如在做这个网站的过程中，我自己为整个网站摸索了 UI 风格，并且为每一个案例都精心准备了视觉效果良好的 UI 设计。例如这个案例"}),`
`,t.jsx(_,{children:t.jsx(K0,{})}),`
`,t.jsx(e.p,{children:"我自己设计并实现了常用的 UI 组件。"}),`
`,t.jsx(e.p,{children:"我自己从零到一完成了移动端的适配。"}),`
`,t.jsx(e.p,{children:"我自己重新设计了整个网站的架构，以便于扩展到下一份付费小册中去。"}),`
`,t.jsx(e.p,{children:"我自己招商引资，寻找了几个赞助商进行合作。"}),`
`,t.jsx(e.p,{children:"我自己负责宣传，虽然目前宣传力度很微弱，但是也在某种程度上让几百位同学认同了我的这本小册的价值。"}),`
`,t.jsx(e.p,{children:"所有的事情从头到尾都需要一个人来做，这对于我综合能力的要求是非常高的。事实上在刚开始的时候，我并没有很大的预期他能够取得成功，包括现在我也没有很大的底气能够得到更多人的认可。每一次的宣传都是小心翼翼的试探，很担心最终的结果是无人理会，只是我单方面的自娱自乐。"}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"对于最佳实践的探索"}),`
`,t.jsxs(e.p,{children:["很显然，React 19 的出现，意味着一种",t.jsx(e.strong,{children:"新的开发思维"}),"被正式抬到了大众眼前。在这种新的开发思维之下，我也是从头开始尝试与学习，那么如何找到最佳实践本身就是一件充满挑战的事情。"]}),`
`,t.jsx(e.p,{children:"因此，在写每一个案例时，我都会非常小心的去求证和对比，感受每一种写法在开发思维上所带来的提升。这是最难的一个方向。因此在写这本小册之前，我会把每一个知识点我的学习体会、过程、疑问都放到公众号中与大家进行探讨，在多方求证之后，确定了这样的做法是目前的最佳实践之后，才形成完整的教学文章。"}),`
`,t.jsxs(e.p,{children:["因此，在我的个人公众号",t.jsx(e.code,{children:"这波能反杀"}),"中，你能看到一系列关于 React 19 的文章。幸运的是，在公众号中，我遇到了很多顶尖的大佬跟我探讨学习心得。这才确保了这本付费小册的质量是非常高的。感谢每一位参与过探讨帮助我成长的大佬。"]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"最后"}),`
`,t.jsxs(e.p,{children:["学习与进步是一个需要持续不断做下去的事情。在写这本小册的过程中，我也收获了大量的新的知识。我的进步非常大。很庆幸我自己可以",t.jsx(e.strong,{children:"很纯粹"}),"的做完这个事情。也希望自己能够长期保持下去，摈弃掉一些外界乱七八糟的杂念与内耗，持续学习，持续进步，以此与大家共勉。"]}),`
`,t.jsxs(e.p,{children:["小册目前价格：",t.jsx(e.strong,{children:"30 元"})]}),`
`,t.jsxs(e.p,{children:["购买方式：添加我的微信 ",t.jsx(e.code,{children:"icanmeetu"})," 微信转账即可，获得激活码即可阅读所有内容"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"为了大家能够更加快速的消化本文内容，后续我会在付费群中，直播为大家讲解本小册的内容，欢迎大家进群关注。后进群的朋友可以在群公告中看到录播视频"}),`
`]})]})}function C9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Ep,{...n})}):Ep(n)}function Tp(){return t.jsx(Vn,{isAuth:!1,renderArticle:n=>t.jsx(C9,{components:{code:n}})})}const M1=[{path:"formaction/end",name:"附录：完结感言",component:Tp},{type:"tip",name:"前言"},{path:"index",name:"1、开发方式变革",component:r3},{path:"layers",name:"2、学习的三个层次",component:g3},{path:"create",name:"3、创建项目",component:k3},{type:"tip",name:"use(promise)"},{path:"use/base",name:"3、use 基础知识",component:X3},{path:"use/suspense",name:"4、Suspense",component:iy},{path:"use/update",name:"5、点击更新数据",component:Sy},{path:"use/initialize",name:"6、初始化请求并更新",component:Uy},{path:"use/updatetolist",name:"7、请求并新增到列表",component:n7},{path:"use/loadmore",name:"8、分页列表加载更多",component:f7},{path:"use/search",name:"9、搜索",component:_7},{path:"use/tabs",name:"10、tab 简单切换",component:T7,label:"1"},{path:"use/tabshard",name:"11、tab 缓存切换",component:Q7,label:"2"},{path:"use/fromchildren",name:"12、父级获取数据",component:o6,label:"3"},{path:"use/nest",name:"13、Suspense 嵌套",component:b6},{path:"use/react16",name:"14、在低版本中使用",component:R6},{type:"tip",name:"use(context)"},{path:"use/ref",name:"15、ref 调整",component:I6},{path:"use/modal",name:"16、自定义弹窗组件",component:eN},{path:"use/contextmodify",name:"17、弹窗中更改内容",component:uN},{path:"use/skinswitch",name:"18、皮肤切换次数",component:NN},{type:"tip",name:"并发 API"},{path:"use/deferred",name:"19、useDeferredValue",component:UN},{path:"use/transition",name:"20、useTransition",component:rw},{type:"tip",name:"Compiler"},{path:"use/importwith19",name:"21、React 19 中引入",component:cw},{path:"use/importwithlower",name:"22、低版本中引入",component:pw},{path:"use/importwithwebpack",name:"23、webpack中引入",component:jw},{path:"use/compilerbase",name:"24、Compiler 编译原理",component:Sw},{path:"use/compilercount",name:"25、收益分析-递增",component:Mw},{path:"use/compilerexpensive",name:"26、收益分析-耗时子组件",component:Bw},{path:"use/compilertabs",name:"27、收益分析-tabs",component:Kw},{type:"tip",name:"form action"},{path:"formaction/base",name:"28、form 基础",component:r8},{path:"formaction/formdata",name:"29、FormData 基础",component:l8},{path:"formaction/action",name:"30、form action",component:p8},{path:"formaction/useformstatus",name:"31、useFormStatus",component:v8},{path:"formaction/useactionstate",name:"32、useActionState",component:L8},{path:"formaction/useoptimistic",name:"33、useOptimistic",component:V8,label:"1"},{path:"formaction/useoptimistic2",name:"33、useOptimistic",component:W8,label:"2"},{path:"formaction/useoptimistic3",name:"33、useOptimistic",component:i9,label:"3"},{path:"formaction/useoptimistic4",name:"34、复杂案例",component:k9,label:"4"},{type:"tip",name:"后续闲谈"},{path:"formaction/end",name:"35、完结感言",component:Tp}];function Dp(){return t.jsx("div",{children:M1.map((n,e)=>n.type==="tip"?t.jsx("div",{className:"mx-2 text-sm px-4 text-gray-400 first:pt-0 pb-4 pt-8",children:n.name},`z-${e}`):t.jsx(yn,{className:"text-gray-700",activeName:"text-blue-700",to:n.path,children:t.jsxs("li",{className:"mx-2 px-4 py-3 transition hover:bg-blue-100 text-sm flex items-center justify-between hover:text-blue-700 rounded",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})}),t.jsx("div",{className:"ml-2 line-clamp-1",children:n.name})]}),n.label?t.jsx(_d,{label:n.label,primary:!0,className:"ml-2"}):null]},n.path)},n.path))})}function _9(){const n=ci(),e=u.useRef(new Map),s=oi(),{pathname:r}=Bt();u.useReducer(l=>!l)[1];const a=u.useRef(null);return e.current.has(r)||e.current.set(r,s),u.useEffect(()=>{location.pathname==="/tutorial"&&n("index")},[r]),t.jsxs("div",{className:"pt-16 md:flex",children:[t.jsx(L,{signal:!0,className:"fixed bottom-6 right-6 z-40 md:hidden",onClick:()=>a.current.show(),children:"目录"}),t.jsx(ya,{ref:a,onClose:()=>a.current.close(),children:t.jsx("div",{className:"bg-white h-full py-4 overflow-scroll",children:t.jsx(Dp,{})})}),t.jsxs("nav",{className:"hidden md:block w-60 sticky top-16 h-[calc(100vh_-_5rem)] overflow-y-auto bg-hei",children:[t.jsxs("div",{className:"flex items-center px-4 py-8",children:[t.jsx("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-cyan-500",children:t.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})})}),t.jsxs("div",{className:"text-sm",children:[t.jsx("div",{children:"当前版本"}),t.jsx("div",{className:"text-gray-500",children:"React@19.0.0-rc"})]})]}),t.jsx("ul",{className:"border-r h-[calc(100vh_-_9rem_-_35px)] overflow-y-auto pb-8",children:t.jsx(Dp,{})})]}),t.jsx("div",{className:"md:flex-1 md:w-[calc(100vw_-_15rem)] p-4 md:p-8 min-h-[calc(100vh_-_5rem)] box-border",children:Array.from(e.current).map(([l,i])=>t.jsx("div",{style:{display:r===l?"block":"none"},children:i},l))})]})}function ie(n){const{children:e,start:s,end:r,around:a,between:l,className:i,center:c,col:o,...d}=n,h=U("flex items-center flex-row",{"flex-col":o,"justify-start":s,"justify-end":r,"justify-around":a,"justify-between":l,"justify-center":c},i);return t.jsx(A9,{className:He(h),...d,children:e})}function A9(n){const{className:e,children:s,...r}=n;let a="",l="",i="";Object.keys(r).forEach(o=>{o.indexOf("bg-")===0&&(a+=`${o} `),o.indexOf("border-")===0&&(l+=` ${o} `),o.indexOf("rounded-")===0&&(i+=` ${o} `)});const c=U(a,l,i,e);return t.jsx("div",{className:He(c),...r,children:s})}function Op(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"基础使用"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Button>hello button</Button>
`})}),`
`,t.jsx("div",{children:t.jsx(L,{children:"hello button"})}),`
`,t.jsx(e.p,{children:"类型"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Button danger>Danger</Button>
<Button primary>Primary</Button>
<Button success>Success</Button>
<Button signal>Signal</Button>
`})}),`
`,t.jsx(_,{children:t.jsxs("div",{className:"mt-4 flex justify-around",children:[t.jsx(L,{children:"Default"}),t.jsx(L,{danger:!0,children:"Danger"}),t.jsx(L,{success:!0,children:"Success"}),t.jsx(L,{primary:!0,children:"Primary"}),t.jsx(L,{signal:!0,children:"Signal"}),t.jsx(L,{ghost:!0,children:"ghost"})]})}),`
`,t.jsx(e.p,{children:"ghost 变体"}),`
`,t.jsx(_,{children:t.jsxs("div",{className:"mt-4 flex justify-around",children:[t.jsx(L,{ghost:!0,children:"Default"}),t.jsx(L,{ghost:!0,primary:!0,children:"primary"}),t.jsx(L,{ghost:!0,danger:!0,children:"Danger"}),t.jsx(L,{ghost:!0,success:!0,children:"Success"}),t.jsx(L,{ghost:!0,signal:!0,children:"Signal"})]})}),`
`,t.jsx(e.p,{children:"disabled 变体"}),`
`,t.jsx(_,{children:t.jsxs("div",{className:"mt-4 flex justify-around",children:[t.jsx(L,{ghost:!0,disabled:!0,children:"Default"}),t.jsx(L,{ghost:!0,disabled:!0,primary:!0,children:"primary"}),t.jsx(L,{ghost:!0,disabled:!0,danger:!0,children:"Danger"}),t.jsx(L,{ghost:!0,disabled:!0,success:!0,children:"Success"}),t.jsx(L,{ghost:!0,disabled:!0,signal:!0,children:"Signal"})]})}),`
`,t.jsx(e.p,{children:"大小"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Button danger sm className="mr-4">Danger</Button>
<Button danger className="mr-4">Danger</Button>
<Button danger lg>Danger</Button>
`})}),`
`,t.jsxs(_,{children:[t.jsxs("div",{className:"mt-4",children:[t.jsx(L,{danger:!0,sm:!0,className:"mr-4",children:"Danger"}),t.jsx(L,{danger:!0,className:"mr-4",children:"Danger"}),t.jsx(L,{danger:!0,lg:!0,children:"Danger"}),t.jsxs(L,{primary:!0,className:"flex justify-center items-center space-x-2",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5",children:t.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})}),t.jsx("span",{children:"File"})]})]}),t.jsxs("div",{className:"mt-4",children:[t.jsx(L,{success:!0,lg:!0,className:"mr-4",children:"Success"}),t.jsx(L,{success:!0,className:"mr-4",children:"Success"}),t.jsx(L,{success:!0,sm:!0,children:"Success"})]}),t.jsxs("div",{className:"mt-4",children:[t.jsx(L,{primary:!0,sm:!0,className:"mr-4",children:"Primary"}),t.jsx(L,{primary:!0,className:"mr-4",children:"Primary"}),t.jsx(L,{primary:!0,lg:!0,children:"Primary"})]}),t.jsxs("div",{className:"mt-4",children:[t.jsx(L,{signal:!0,lg:!0,className:"mr-4",children:"Signal"}),t.jsx(L,{signal:!0,className:"mr-4",children:"Signal"}),t.jsx(L,{signal:!0,sm:!0,children:"Signal"})]})]}),`
`,t.jsx(e.p,{children:"子组件变体"}),`
`,t.jsx(_,{children:t.jsxs("div",{className:"mt-4 flex items-center justify-around",children:[t.jsx(L,{primary:!0,children:t.jsxs(ie,{className:"space-x-2",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:t.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})}),t.jsx("span",{children:"Primary File"})]})}),t.jsx(L,{danger:!0,children:t.jsxs(ie,{className:"space-x-2",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:t.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})}),t.jsx("span",{children:"Danger File"})]})}),t.jsx(L,{default:!0,rect:!0,children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:t.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})})}),t.jsx(L,{success:!0,rect:!0,children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:t.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})})}),t.jsx(L,{rect:!0,signal:!0,children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"})})}),t.jsx(L,{rect:!0,children:t.jsxs(ie,{className:"space-x-2",children:[t.jsx("span",{children:"Default File"}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:t.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})})]})}),t.jsx(L,{success:!0,rect:!0,children:t.jsxs(ie,{className:"space-x-2",children:[t.jsx("span",{children:"Success File"}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:t.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})})]})})]})}),`
`,t.jsx(e.p,{children:"上下结构按钮"}),`
`,t.jsxs(_,{children:[t.jsx(L,{success:!0,ghost:!0,children:t.jsxs(ie,{col:!0,className:"space-y-2",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:t.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})}),t.jsx("span",{children:"File"})]})}),t.jsx(L,{signal:!0,ghost:!0,children:t.jsxs(ie,{col:!0,className:"space-y-2",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"})}),t.jsx("span",{children:"bell"})]})}),t.jsx(L,{primary:!0,ghost:!0,children:t.jsxs(ie,{col:!0,className:"space-y-2",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"})}),t.jsx("span",{children:"bolt"})]})})]}),`
`,t.jsx(e.p,{children:"利用 className 增强 Button 能力"}),`
`,t.jsx(_,{children:t.jsxs(ie,{className:"space-x-2",children:[t.jsx(L,{primary:!0,ghost:!0,className:"border-blue-500",children:t.jsxs(ie,{col:!0,className:"space-y-2",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:t.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})}),t.jsx("span",{children:"File"})]})}),t.jsx(L,{success:!0,ghost:!0,rect:!0,className:"rounded-full border-green-500",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})})})]})}),`
`,t.jsx(e.p,{children:"完整源码"}),`
`,t.jsx(Cn,{files:{"index.jsx":Na}})]})}function $9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Op,{...n})}):Op(n)}function M9(){return t.jsx(Vn,{renderArticle:n=>t.jsx($9,{components:{code:n}}),isGiscus:!1})}function Bp(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"Input 基础使用"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Input placeholder="请输入任意内容" />
`})}),`
`,t.jsx(_,{children:t.jsx(Sn,{placeholder:"请输入任意内容"})})]})}function R9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Bp,{...n})}):Bp(n)}function L9(){return t.jsx(Vn,{renderArticle:n=>t.jsx(R9,{components:{code:n}}),isGiscus:!1})}function wa(n){return n.type==="card"?t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsx("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3].map((e,s)=>t.jsxs("div",{className:"flex-1",children:[t.jsx("div",{className:"rounded-md bg-slate-200  h-32"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"grid grid-cols-4 gap-4 mt-2",children:t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-3"})})]},`z-${s}`))})}):n.type==="header"?t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})}):t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function zp(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"基础使用"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`<Skeleton />
`})}),`
`,t.jsx(wa,{})]})}function E9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(zp,{...n})}):zp(n)}function T9(){return t.jsx(Vn,{renderArticle:n=>t.jsx(E9,{components:{code:n}}),isGiscus:!1})}function dc(n){const{total:s=8,current:r=1,onChange:a}=n,l=u.useRef(Math.ceil(r/8)),i=u.useRef(r),[c,o]=u.useState((r-1)%8),d=[],m=l.current===Math.ceil(s/8)?s%8===0?8:s%8:8;for(let v=0;v<m;v++)d.push(8*(l.current-1)+v+1);const h="border border-blue-600";function p(v){o(v),i.current=8*(l.current-1)+v+1,a&&a(i.current)}function j(){let v=c+1;i.current+=1,v>=8&&(v=0,l.current+=1),o(v),a&&a(i.current)}function y(){let v=c-1;i.current-=1,v<0&&(v=7,l.current-=1),o(v),a&&a(i.current)}const b=i.current===1,N=i.current===s,x="flex items-center justify-center",f=U(x,{"cursor-not-allowed":b}),g=U(x,{"cursor-not-allowed":N});return t.jsxs("div",{className:"flex space-x-2",children:[t.jsx(L,{disabled:b,rect:!0,className:f,onClick:y,children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"})})}),d.map((v,k)=>t.jsx(L,{onClick:()=>p(k),ghost:!0,rect:!0,className:U("w-10",{[h]:c===k}),children:v},v)),t.jsx(L,{disabled:N,rect:!0,className:g,onClick:j,children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})})})]})}function Up(n){const e={code:"code",h3:"h3",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:"Pagination"}),`
`,t.jsx(e.p,{children:"默认用法"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`<Pagination />
`})}),`
`,t.jsx(_,{children:t.jsx(dc,{})}),`
`,t.jsx(e.p,{children:"传入参数"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`<Pagination total={22} current={18} />
`})}),`
`,t.jsx(_,{children:t.jsx(dc,{total:22,current:18})}),`
`,t.jsx(e.p,{children:"onChange 事件获取 current"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`<Pagination total={22} current={18} onChange={(i) => {console.log(i)}} />
`})}),`
`,t.jsx(_,{reload:!0,children:t.jsx(dc,{total:22,current:18,onChange:s=>{console.log(s)}})})]})}function D9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Up,{...n})}):Up(n)}function O9(){return t.jsx(Vn,{renderArticle:n=>t.jsx(D9,{components:{code:n}}),isGiscus:!1})}const R1=[{type:"tip",name:"基础组件"},{path:"button",name:"1、按钮 Button",component:M9},{path:"input",name:"2、输入框 Input",component:L9},{path:"skeleton",name:"2、骨架屏 Skeleton",component:T9},{path:"pagination",name:"3、分页器 Pagination",component:O9}];function B9(){const n=ci(),e=u.useRef(new Map),s=oi(),{pathname:r}=Bt(),a=u.useReducer(l=>!l)[1];return e.current.has(r)||e.current.set(r,s),u.useEffect(()=>{location.pathname==="/component"&&n("button")},[r]),t.jsxs("div",{className:"pt-16 flex",children:[t.jsxs("nav",{className:"hidden md:block w-60 sticky top-16 h-[calc(100vh_-_5rem)] overflow-y-auto bg-hei",children:[t.jsxs("div",{className:"flex items-center px-4 py-8",children:[t.jsx("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-cyan-500",children:t.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})})}),t.jsxs("div",{className:"text-sm",children:[t.jsx("div",{children:"当前版本"}),t.jsx("div",{className:"text-gray-500",children:"React@19.0.0-rc"})]})]}),t.jsx("ul",{className:"border-r h-[calc(100vh_-_9rem_-_35px)] overflow-y-auto pb-8",children:R1.map((l,i)=>l.type==="tip"?t.jsx("div",{className:"mx-2 text-sm px-4 text-gray-400 first:pt-0 pb-4 pt-8",children:l.name},`z-${i}`):t.jsx(yn,{className:"text-gray-700",activeName:"text-blue-700",to:l.path,onClick:a,children:t.jsxs("li",{className:"mx-2 px-4 py-3 transition hover:bg-blue-100 text-sm flex items-center justify-between hover:text-blue-700 rounded",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})}),t.jsx("div",{className:"ml-2 line-clamp-1",children:l.name})]}),l.label?t.jsx(_d,{label:l.label,primary:!0,className:"ml-2"}):null]},l.path)},l.path))})]}),t.jsx("div",{className:"w-full md:w-[calc(100vw_-_15rem)] p-8 min-h-[calc(100vh_-_5rem)] box-border",children:Array.from(e.current).map(([l,i])=>t.jsx("div",{style:{display:r===l?"block":"none"},children:i},l))})]})}const z9=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(() => fetchListWithCancel(5))

  function __inputChange(e) {
    promise.cancel()
    update(fetchListWithCancel(5))
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,U9=`export const fetchList = async (number) => {
  const res = await fetch(\`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,H9=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,q9=`import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,V9=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`;function Hp(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:["从这一章开始，我们将要进入体系化的",t.jsx(e.strong,{children:"架构层面"}),"的学习。"]}),`
`,t.jsxs(e.p,{children:["在这之前，我需要跟大家分享一下，在学习方法这个层面，我是如何理解",t.jsx(e.strong,{children:"体系化"}),"的。消化这个概念，对于提高我们的学习能力和构建完整的知识体系有非常大的帮助。"]}),`
`,t.jsxs(e.p,{children:["我把",t.jsx(e.strong,{children:"理论结合实践"}),"抽象成一个简单的四象限。如下图所示"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`               结合实践
                  ^
                  |
              2   |   1
忽视理论 ---------------------> 重视理论
              4   |   3
                  |
               脱离实践
`})}),`
`,t.jsxs(e.p,{children:["单从结果上来说，大家当然知道",t.jsx(e.strong,{children:"理论结合实践"}),"是最好的方式，但是在真实的学习过程中，大多数人都会陷入到其他象限中而不自知。从而导致不理想的学习结果。"]}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"一、经验主义"})}),`
`,t.jsx(e.p,{children:"陷入第二象限我们称之为经验主义。陷入经验主义的人往往重视个人实践经验，但是忽视理论和逻辑。"}),`
`,t.jsxs(e.p,{children:["在学习前端技术上的体现就是，有的人会带着最开始学到的开发模式一直搞下去。很难理解和接受新的开发思维和模式。因此，在你最初进入到这个行业时，所接触到的开发方式会影响你很长时间。甚至有的人会影响自己的整个职业生涯。陷入经验主义的人具备非常显著的",t.jsx(e.strong,{children:"路径依赖"}),"。"]}),`
`,t.jsx(e.p,{children:"这里有一个很明显的问题是，由于缺乏理论依据，因此无法敏锐的发现表面上不同方案的共通性，因此学习能力会比较弱，很难具备举一反三的能力。例如，虽然你学会了 react，并能够熟练的开发项目，但是依然对自己掌握客户端开发没有什么底气。"}),`
`,t.jsx(e.p,{children:"当然，由于前端是一门非常重视技术实现的行业，因此在平时大家很难发觉自己陷入了经验主义，但是在面试时，这就会体现得比较明显。例如，你无法准确的表达出自己所做过的项目，觉得自己的项目没有亮点等。这都是平时忽视理论带来的不良影响。"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"二、教条主义"})}),`
`,t.jsxs(e.p,{children:["陷入第三象限，我们称之为教条主义。陷入教条主义的人，往往重视理论，但是脱离实践，许多方案无法落地，比较容易",t.jsx(e.strong,{children:"纸上谈兵"}),"。"]}),`
`,t.jsx(e.p,{children:"例如，某些大厂管理者，很难在小团队里干出成绩。因为他刻板的把大厂的管理模式、流程、制度、生搬硬套搞到小团队里。这一套理论是正确的，成功的，但是他们忽视了小团队里的人员配置和时间等因素与打团队完全不一样，因此，最终的结果就是很难有符合预期的产出。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"从另外一个层面上来说，这种情况也属于经验主义错误，依赖于之前的成功案例，但是由于条件发生了变化，这套理论无法成功落地。"}),`
`]}),`
`,t.jsxs(e.p,{children:["体现在前端这个行业里的现象就是许多老油条、学院派等比较喜欢夸夸而谈。但是具体落地实践却表现平平。在学习中的体现，就是比较容易觉得别人做出来的东西这个也很简单，那个也很简单，无法感受到实践落地时的具体困境。因此对于面试官来说，学会如何识别教条主义的候选人是非常重要的。如果公司计划裁员，优先要考虑的也是这种人。",t.jsx(e.strong,{children:"对于个人来说，长期处于脱离开发的管理岗，也很容易陷入到教条主义中去"}),"。"]}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"三、机会主义"})}),`
`,t.jsx(e.p,{children:"机会主义是指不重视理论，也不重视实践。全凭幻想和自我安慰。"}),`
`,t.jsx(e.p,{children:"比较经典的学习误区就是：跟着敲一遍，等于学会了！"}),`
`,t.jsx(e.p,{children:"但是脱离了一些必要依赖之后，代码就敲不出来了。时间久了之后，会在焦虑中变得非常痛苦。甚至对自己能够在这个行业持续的走下去失去信心。"}),`
`,t.jsx(e.p,{children:"在工作中的体现就是，会议讨论时，你可能会提出一个方案，但是你说不出来这个方案为什么更好。只是一种感觉，因此在工作沟通中会比较被动，或者陷入奇怪的争吵中去，或者会被同事轻视。"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"四、理论结合实践"})}),`
`,t.jsx(e.p,{children:"学习过程一定要理论结合实践。"}),`
`,t.jsx(e.p,{children:"否则，你的学习结果大概率会是：无法输出、很难表达、容易忘记、表达的内容经不起推敲，无法形成完整的逻辑闭环、无法具备举一反三的能力。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"我想这肯定是一个所有人都知道的结果。但是知道结果不代表自己能做到，本文之所以要单独的提出来，就是在学习之前，我们要做好这样的心里准备，能够在正确的学习方式的指导之下开始我们更高质量的学习。"}),`
`]}),`
`,t.jsx(e.p,{children:"没有理论，就不能解决普遍的问题。"}),`
`,t.jsx(e.p,{children:"没有实践，就不能解决特定的问题。"}),`
`,t.jsxs(e.p,{children:["在前端开发中，掌握一套架构理论，是每个高级开发者必备的",t.jsx(e.strong,{children:"基础能力"}),"。但是这套架构理论，运用到不同的场景中是如何体现的，就需要我们在实践中去感受。"]}),`
`,t.jsx(e.p,{children:"我们的现状就是，理论的结果，大家其实都是知道的。但是这套理论，是如何体现在我们的项目开发中的？许多人就说不清楚了。做不到理论结合实践，那么就表示并没有理解这套架构理论。"}),`
`,t.jsxs(e.p,{children:["很多人错误的把",t.jsx(e.strong,{children:"我知道了结果"}),"，当成了",t.jsx(e.strong,{children:"我掌握了结果"}),"。从而对某些知识产生轻视的情绪和态度，最终学习结果并不理想。实际上，这又是一种机会幻想主义思想，因此，我需要专门写一篇这样的序章，用于纠结部分同学的这种错误认知。"]}),`
`,t.jsx(e.p,{children:"在接下来的内容中，我会先讲理论，再讲实践。内容以理论结合实践的方式共同呈现。以提供最佳的学习效果。我们的目的是：不仅要会实现功能，还要会系统的表达，能够理论结合实践的想别人传达你的开发思想，从而达到一个很高的水平。"}),`
`,t.jsx(e.p,{children:"理想的学习情况是，当你掌握了理论知识，再结合少许几个实践，你就能应对或者自然掌握大多数实践场景。如果你之前有丰富的开发经验，那么这套理论也可以帮助你轻松优化自己的项目。而不一定非要完整的学习后续的实践部分。"}),`
`,t.jsx(e.p,{children:"因此，后续的章节学习速度会越来越快，你甚至能感受到似曾相识，变化的只是一些很小的细节。如果你有这样的感觉，那么，就表示我们的学习过程是成功的。"}),`
`,t.jsx(e.p,{children:"说明你已经达到了举一反三、化繁为简的学习效果。"})]})}function X9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Hp,{...n})}):Hp(n)}const Z9={"App.js":z9,"api.js":U9,"List.jsx":q9,"Input.jsx":V9,"Skeleton.jsx":H9};function G9(){return t.jsx(z,{files:Z9,renderArticle:n=>t.jsx(X9,{components:{code:n}}),advance:!0})}const L1=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(() => fetchListWithCancel(5))

  function __inputChange(e) {
    promise.cancel()
    update(fetchListWithCancel(5))
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,E1=`export const fetchList = async (number) => {
  const res = await fetch(\`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,Y9=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,T1=`import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,I9=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`;document.documentElement.style.fontSize="14px";function F9(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const qp=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function P9({promise:n}){const{results:e}=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function Q9(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function J9(){const[n,e]=u.useState(()=>qp(5));function s(r){n.cancel(),e(qp(5))}return t.jsxs("div",{children:[t.jsx(Q9,{onChange:s,placeholder:"Enter something"}),t.jsx(u.Suspense,{fallback:t.jsx(F9,{}),children:t.jsx(P9,{promise:n})})]})}function Vp(n){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(J9,{})}),`
`,t.jsx(e.p,{children:"接下来，我们正式开始学习 React 19 的进阶内容。"}),`
`,t.jsx(e.p,{children:"基本思路会以架构思维出发，然后基于这个架构思维，用大量实践按钮覆盖更多的业务场景。本文先讲理论，后续的文章以实践为主实践。"}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"一、项目结构设计"}),`
`,t.jsx(e.p,{children:"语义结构"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`+ src
  - main.tsx // 表示项目入口文件
  + pages  // 表示页面
  + components // 表示共用基础组件，可复用
  + utils  // 表示共用工具方法
  + hooks  // 表示公用 hook 方法，与 utils 类似
  + other // 根据项目需求自行添加
`})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"组件化内聚"})}),`
`,t.jsxs(e.p,{children:["例如一个页面组件，对外是一个完整的 Home 组件，与 Home 组件相关的内容都尽量放置在 home 文件之内，对内再进行职能和角色的拆分。这是一种",t.jsx(e.strong,{children:"高内聚的组件化思维"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`+ pages
  + home
    - index.tsx
    - index.d.ts
    - index.css
    - api.ts
    - model.ts   // Modal 数据层
    + components // 可能存在的子组件
`})}),`
`,t.jsx(e.h3,{children:"二、组件内的 MVC 模式"}),`
`,t.jsxs(e.p,{children:["在",t.jsx(e.strong,{children:"对内"}),"进行职能和角色的拆分时，我们要追求的目标就是",t.jsx(e.strong,{children:"低耦合"}),"。每个模块都有自己独立的语义，然后模块之间再通过特地语法规范或者接口进行组合与交互。"]}),`
`,t.jsx(e.p,{children:"通常情况下，前端项目都遵循传统的 MVC 设计模式进行拆分。"}),`
`,t.jsx(e.p,{children:"MVC 大家都不陌生，但这里对于前端开发来说，比较困难的是如何对号入座与融汇贯通。"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"M，Model"})}),"，数据模型，表示一个处理数据的对象或者模块，是一个数据模型。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"在 React 的架构模型中，数据模型是最难理解的一个部分。也是我们需要特别学习和关注的一个模块"}),`
`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"V, View"})}),"，视图，在前端通俗称之为 UI 层，在 React 组件内部，我们可以将 JSX 部分看成是 View 层。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"但是从底层实现上来说，这里的 View 层实际上指的是整个虚拟 DOM 树。React 的每一次更新，都是从根节点从上往下深度遍历 diff 的过程。不过本文探讨的 View 层只涉及到应用层面，不涉及到底层逻辑实现"}),`
`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"C，Controller"})}),"，控制器，数据变化时控制 UI 变化，在 React 中，定义在 useState 中的数据，自带控制器能力。当 state 中的数据发生了变化，UI 会自动变化，因此我们不会特别强调它，而是直接说：数据驱动 UI。"]}),`
`,t.jsx(e.p,{children:"但是在 React 19 中，控制器会稍微有一些不同。我们要分享的架构模式，是将数据存储在 promise 中，然后将 promise 存储在 state 中，因此，此时控制器将由 promise 的变化来承担。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"我们也可以把 setState 理解为控制器，它直接控制数据的变化，间接控制 UI 的变化"}),`
`]}),`
`,t.jsx(e.h3,{children:"三、结合案例来理解"}),`
`,t.jsx(e.p,{children:"例如本文顶部的那个案例，我们用代码实现大概如下。其中"}),`
`,t.jsx(Cn,{files:{"index.jsx":L1,"api.js":E1,List:T1},auth:!0}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"index.jsx"})," 表示 View 层"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"api.js"})," 表示 Model 层"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"update"})," 表示控制器。"]}),`
`,t.jsx(e.p,{children:"案例比较简单，所以大家理解起来应该不难。"}),`
`,t.jsx(e.p,{children:"但普通的开发在复杂场景中，有的同学没有足够的能力支撑他严格践行 MVC 模式，经常会把数据与 UI 耦合在一起编写。从而导致了代码的可维护性变得非常低。"}),`
`,t.jsx(e.p,{children:"因此，在后续的实践案例中，我们需要进一步学习如何在各类复杂场景中践行 MVC 的设计模式。"}),`
`,t.jsx(e.h3,{children:"三、在 promise 中存储数据"}),`
`,t.jsxs(e.p,{children:["在学习时，我们需要花更多的精力放在 Model 层的思考上。在 React 19 中，由于提供了 ",t.jsx(e.code,{children:"use + Suspense"})," 的语法方式，我们可以将数据存放在 promise 中，从而弱化副作用的语法表现，也因此，",t.jsxs(e.strong,{children:["我们可以不用在代码中依赖 ",t.jsx(e.code,{children:"useEffect"})," 来实现异步逻辑"]})]}),`
`,t.jsxs(e.p,{children:["因此，本小册在 Model 层的思考，都会依赖于 ",t.jsx(e.code,{children:"use + Suspense"})," 的思路来实现，我们会优先将数据存储在 promise 中，然后通过 use 来获取数据。"]}),`
`,t.jsx(e.p,{children:"基于以上架构思维原则，在同一个组件中，我们需要明确的是"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"1、View 层只应该有一个入口获取数据，而不是多个"}),`
`,t.jsx(e.li,{children:"2、如果你确实觉得需要多个入口，需要优先考虑拆分组件，然后满足第一条"}),`
`,t.jsxs(e.li,{children:["3、View 层不处理数据相关的任何逻辑，例如过滤数据，修改数据结构等，都应该在数据层处理好，View 层的数据应该是",t.jsx(e.strong,{children:"拿来即用"}),"的"]}),`
`]})]})}function W9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Vp,{...n})}):Vp(n)}const K9={"App.js":L1,"api.js":E1,"List.jsx":T1,"Input.jsx":I9,"Skeleton.jsx":Y9};function eS(){return t.jsx(z,{files:K9,renderArticle:n=>t.jsx(W9,{components:{code:n}}),advance:!0})}const nS=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise, update] = useState(fetchListController)

  function __inputChange(e) {
    promise.cancel()
    update(fetchListController())
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,tS=`// API 应该与服务端提供的接口文档严格保持一致
export const prevListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const nextListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}
`,sS=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,rS=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,aS=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,lS=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = async () => {
  const list = await fetchList()
  return list.map((item, index) => {
    item.desc = \`\${index}、react 19 arch, a design language for background applications\`
    item.name = item.name.first + ' ' + item.name.last
    item.thumbnail = item.picture.thumbnail
    return item
  })
}
`,iS=`import {prevListApi, nextListApi} from './api'

export const fetchList = async () => {
  return Promise.all([prevListApi(), nextListApi()]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
}
`;document.documentElement.style.fontSize="14px";function cS(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function oS({promise:n}){const e=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function dS(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}const uS=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),mS=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),pS=async()=>Promise.all([uS(),mS()]).then(n=>n.reduce((e,s)=>e.concat(s.results),[])),Xp=async()=>(await pS()).map((e,s)=>(e.desc=`${s}、react 19 arch, a design language for background applications`,e.name=e.name.first+" "+e.name.last,e.thumbnail=e.picture.thumbnail,e));function hS(){const[n,e]=u.useState(Xp);function s(r){n.cancel(),e(Xp())}return t.jsxs("div",{children:[t.jsx(dS,{onChange:s,placeholder:"Enter something"}),t.jsx(u.Suspense,{fallback:t.jsx(cS,{}),children:t.jsx(oS,{promise:n})})]})}function Zp(n){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(hS,{})}),`
`,t.jsx(e.h3,{children:"一、前置场景"}),`
`,t.jsx(e.p,{children:"在前面一章，我们基于项目架构整体，为大家分享了 MVC 模式的学习。但是我们知道，在 MVC 模式中，由于 M 数据模型层常常会由于需求的复杂性高、后端的配合度低等实际情况而变得非常复杂。在数据层，我们要处理的数据包括但不限于"}),`
`,t.jsx(e.p,{children:"1、定义应用层需要使用的数据类型"}),`
`,t.jsx(e.p,{children:"2、向服务端请求数据结果"}),`
`,t.jsx(e.p,{children:"3、验证返回的数据类型是否符合要求，例如，我们通常会使用 zod 进行类型判断"}),`
`,t.jsx(e.p,{children:"4、对接口返回的数据进行二次处理，以达到应用层的使用需求。这种情况是造成数据模型层复杂度非常高的主要原因。例如，我们前端封装好的一个 UI 组件需要的数据格式是一个树形结构。但是后端返回的接口却是一个扁平化的数组结构。那么此时，我们就需要针对该数组结构做二次处理以达到 View 层的使用标准。"}),`
`,t.jsx(e.p,{children:"因此，单独的只考虑 MVC 架构，还无法非常完整的处理好我们的项目架构。在此基础之上，我们还需要 BFF 架构理念来帮助我们进一步解耦数据层的复杂情况。"}),`
`,t.jsx(e.h3,{children:"二、BFF 架构"}),`
`,t.jsxs(e.p,{children:["BFF 架构是 Backend For Frontend 的简称。通常情况下指的是在前端与后端之间设计一个",t.jsx(e.strong,{children:"中间层"}),"，用于处理前后端之间数据的差异。例如，对于一个前端页面而言，需要的数据分别来自两个接口，如果把这个逻辑交给前端来处理，前端的场景就变得复杂了，我们需要思考如何在初始化直接请求两个接口的情况。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"由于缺乏架构思维的加持，许多自学成才的程序员就很难优雅的处理这种情况"}),`
`]}),`
`,t.jsx(e.p,{children:"那么此时，一个比较好的做法，就是在前端与后端之间，设计一个 node 服务，专门用于聚合处理后端多个接口的逻辑。然后对于前端来说，一个页面，或者一个组件单位，永远只有一个接口，这样处理起来就非常简单了。"}),`
`,t.jsx(e.p,{children:"这种解耦的做法，是把数据都处理从前端页面应用层剥离出去，后置于中间层。而这种加一个中间层的架构思维，就是 BFF 架构。"}),`
`,t.jsx(e.p,{children:"在一些比较大的团队中，经常会使用这种方案，在前端与后端之间还有一个中间层 node 端。在后端的项目全局架构思维中，BFF 架构思维多用于微服务架构。"}),`
`,t.jsx(e.p,{children:"但是这种做法，却并不是最完美的解决方案。主要的缺点表现如下"}),`
`,t.jsx(e.p,{children:"1、沟通成本高，团队沟通过程中方案的争议点比较多。通常情况下，中间层的逻辑职责划分并不明确，可以前端做，也可以后端做，也可以中间层做，因此，由于 node 中间层的存在，在项目管能力理薄弱的团队，往往会因此产生大量的争吵、甩锅、推诿等现象"}),`
`,t.jsx(e.p,{children:"2、维护成本更高。单独起一个 node 中间层服务，那么就需要专门针对 node 做更多的维护工作，包括日志、异常监控、稳定性维护、问题排查方案等等"}),`
`,t.jsx(e.p,{children:"3、进一步低智化、边缘化前端开发。在管理良好的 BFF 项目架构模式之下，前端开发所涉及的业务问题会更少，因此长期处于这种情况之下，普通前端开发会对项目整体架构的理解几乎一无所知，项目复杂度不够，从而缺乏核心能力的沉淀。"}),`
`,t.jsx(e.p,{children:"4、灵活性不足。如果中间层开发组与前端业务层开发组，不是同一波人，那么一些更具体的方案选择，灵活性会大打折扣。通常会遵循更为死板的架构标准，从而让简单的问题复杂化。例如：有的页面，如果本身只需要一个接口，但是由于 node 中间层的存在，及时本身就不需要进行额外的处理，但是也依然需要按照架构规范从 node 服务走一边。"}),`
`,t.jsx(e.h3,{children:"二、BFF 在前端项目中的运用"}),`
`,t.jsxs(e.p,{children:["我们可以脱离服务端，仅在单独的 react 前端项目中运用 ",t.jsx(e.code,{children:"BFF + MVC"})," 架构来解决数据层比较复杂的问题。"]}),`
`,t.jsxs(e.p,{children:["理念依旧是一样的，只是换了一个场景。我们只需要把 ",t.jsx(e.code,{children:"MVC"})," 模式中的 M 作为中间层来理解即可。核心的代码请看右侧案例演示"]}),`
`,t.jsx(e.p,{children:"我们预设一个场景，前端页面要展示一个列表中的数据，由于后端技术方案的问题，导致了该列表是由两个接口返回两个数组拼接而成。此时，我们要如何做呢？"}),`
`,t.jsxs(e.p,{children:["在非 TS 的项目中，第一步，我们需要有一个 ",t.jsx(e.code,{children:"api.js"})," 的文件，该文件主要用于编写两个请求函数，该请求需要与接口文档保持完全一致，在前端项目中，接口的形式需要返回 Promise。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`// API 应该与服务端提供的接口文档严格保持一致
export const prevListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const nextListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"在 MVC 模式下，UI 层被成为 View 层，在 BFF 模式下，UI 层被称为应用层，由于前端的项目通常是 MVC 与 BFF 混合使用，因此后续的文章可能会随机用到某一个表述，我们明白表达的是什么就行了"}),`
`]}),`
`,t.jsx(e.p,{children:"正常情况下，如果应用层只需要一个接口，并且接口的返回类型与 View 层需要的数据类型完全一致，那么我们就可以在 View 层中使用"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`// index.js
import {nextListApi} from './api'
`})}),`
`,t.jsxs(e.p,{children:["但是此时，API 只是为了与后端接口保持一致，方便可读性，我们能够从代码结构中清晰快速的明确当前接口是怎么回事。情况的混乱导致我们并不能在应用层直接使用 ",t.jsx(e.code,{children:"api"}),"。此时应用层需要的是两个接口返回的数组合并成为一个数组，因此，这个时候，我们需要抽象出来一个 ",t.jsx(e.code,{children:"service"})," 层，用于处理数据的请求"]}),`
`,t.jsxs(e.p,{children:["在当前文件夹下，定义一个 ",t.jsx(e.code,{children:"service.js"}),"，编写代码如下"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import {prevListApi, nextListApi} from './api'

export const fetchList = async () => {
  return Promise.all([prevListApi(), nextListApi()]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
}
`})}),`
`,t.jsxs(e.p,{children:["如果数组的合并前后顺序无所谓，我们可以使用 ",t.jsx(e.code,{children:"Promise.all"}),"，如果有先后关系要求，则可以使用 ",t.jsx(e.code,{children:"await"}),"。极少数的情况下可能会存在竞争关系，则使用 ",t.jsx(e.code,{children:"Promise.race"})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"service"})," 层通常用来处理一个组件需要多个接口才能完成初始化的情况，并最终向应用层或者 ",t.jsx(e.code,{children:"controller"})," 层",t.jsx(e.strong,{children:"提供一个唯一数据源"}),"。如果该页面的接口本身就只有一个，那么则可以不需要它。或者不需要 ",t.jsx(e.code,{children:"api"})," 层，此时可以由你自己根据偏好来决定。"]}),`
`,t.jsxs(e.p,{children:["此时，我们发现，接口返回的数据格式中，缺乏一个描述字段，",t.jsx(e.code,{children:".desc"}),"，当前完整的格式如下"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`{
  gender: 'female',
  email: 'clementine.lambert@example.com',
  name: {
    title: 'Miss',
    first: 'Clémentine',
    last: 'Lambert'
  },
  nat: 'FR',
  picture: {
    large: 'https://randomuser.me/api/portraits/women/15.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/15.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/15.jpg'
  }
}
`})}),`
`,t.jsx(e.p,{children:"针对这个数据格式，我们前端有额外的几个需求要调整，以简化应用层的使用"}),`
`,t.jsxs(e.p,{children:["1、需要补充一个字段 ",t.jsx(e.code,{children:".desc"})]}),`
`,t.jsxs(e.p,{children:["2、name 我希望是完整的名称，JSX 中使用 ",t.jsx(e.code,{children:".name"})," 即可渲染"]}),`
`,t.jsxs(e.p,{children:["3、我已经明确知道此时我仅需要缩略图，不需要大图和中图，因此数据格式调整为 ",t.jsx(e.code,{children:".thumbnail"})]}),`
`,t.jsxs(e.p,{children:["此时我们发现，虽然通过 ",t.jsx(e.code,{children:"service"})," 的组合，我们得到了一个完整的数组结构，但是由于字段不满足需求，因此我们需要额外对该数组进行二次处理，此时，我们需要抽象出来一个 ",t.jsx(e.code,{children:"controller"})," 层，用于处理这些数据。"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"controller"})," 层通常用于处理以下逻辑"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"1、验证数据字段内容与类型是否符合预期"}),`
`,t.jsx(e.li,{children:"2、验证安全性等其他额外逻辑"}),`
`,t.jsx(e.li,{children:"3、二次处理，整理成为应用层需要的结构"}),`
`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"controller"})," 在不同的场景中，通常用于直接与 ",t.jsx(e.code,{children:"应用层/View层"})," 对接。例如，在 ",t.jsx(e.code,{children:"nest.js"})," 中，",t.jsx(e.code,{children:"controller"})," 负责处理来自前端的请求，然后将结果返回给前端。"]}),`
`,t.jsxs(e.p,{children:["在我们这个场景，可以直接定义一个 ",t.jsx(e.code,{children:"controller.js"})," 文件，然后编写如下代码完成逻辑"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import {fetchList} from './service'

export const fetchListController = async () => {
  const list = await fetchList()
  return list.map((item, index) => {
    item.desc = \`\${index}、react 19 arch, a design language for background applications\`
    item.name = item.name.first + ' ' + item.name.last
    item.thumbnail = item.picture.thumbnail
    return item
  })
}
`})}),`
`,t.jsxs(e.p,{children:["那么在应用层中，则直接使用 ",t.jsx(e.code,{children:"controller"})," 返回的 Promise 来获取数据"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import {fetchListController} from './controller'
`})}),`
`,t.jsx(e.p,{children:"此时的组件文件结构为"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`+ home // 表示页面
  - index.jsx
  - controller.js
  - service.js
  - api.js
  + components  // 表示子组件文件夹，如果子组件简单也可以展开组织
`})}),`
`,t.jsxs(e.p,{children:["通常情况下，",t.jsx(e.code,{children:"controller"})," 层是必须要存在的，因为一个成熟的架构需要对后端返回的数据结果做类型验证、安全性验证等工作，这是每个接口都必须要做的事情。当我们确保返回给应用层的数据是安全可用的之后，那么在应用层中，则可以简单很多，在 ",t.jsx(e.code,{children:"use + Suspense"})," 的场景下，我们可以不用在 JSX 中做数据安全性验证，我们的代码可以直接这样写."]}),`
`,t.jsxs(e.p,{children:["注意看我在 map 中对 ",t.jsx(e.code,{children:"item"})," 的运用方式。 直接使用 ",t.jsx(e.code,{children:"item.desc"}),"，而不是 ",t.jsx(e.code,{children:"item.desc || ''"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["数据校验的方式不是本小册要分享的内容。但是我们可以自己封装，也可以使用 ",t.jsx(e.a,{href:"https://zod.dev/README_ZH",children:"zod"})," 这个工具。数据校验通常包括的逻辑有类型校验、缺省值补充、其他额外需求校验、小团队的项目可以简化这一过程，大型团队一般都比较重视。"]}),`
`]}),`
`,t.jsx(e.p,{children:"完整代码在右侧暂时，大家可以详细看一下"}),`
`,t.jsx(e.h3,{children:"四、总结"}),`
`,t.jsxs(e.p,{children:["在 ",t.jsx(e.code,{children:"MVC"})," + ",t.jsx(e.code,{children:"BFF"})," 混合的架构模式中，我们一定要做到的是，确保 ",t.jsx(e.code,{children:"View"})," 的简洁性，无论情况如何复杂，我们都要做到",t.jsx(e.strong,{children:"数据是唯一来源的、数据是拿来即用的"}),"。而不要把数据的额外处理放到应用层中来处理。导致代码逻辑混乱，维护困难。"]}),`
`,t.jsxs(e.p,{children:["在前端开发中，由于直接以文件作为模块，并不需要像 ",t.jsx(e.code,{children:"nest.js"})," 那种需要额外单独构建一套模块系统，因此，BFF 在前端项目中的运用非常灵活。我们可以非常自由的在每个组件中，根据具体场景决定自己是否需要使用 ",t.jsx(e.code,{children:"service、api、controller"}),"，或者仅使用他们中的一个。因此，这样的灵活性就确保了我们即可以以最简单的模块结构应对简单的后端接口，也可以以标准的文件结构应对不规范的后端接口。这样的灵活性是 node 中间层服务所不具备的。因此，直接在前端项目中使用 BFF 是一种开发成本与维护成本更低的方式"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"根据我的实践经验，大多数接口都可以通过沟通的方式简化大部分 service 与 controller 的逻辑。如果沟通失败，我们也有巧妙的方式来应对，从而在工作谈判中为自己争取更多有利的团队贡献素材。"}),`
`]}),`
`,t.jsxs(e.p,{children:["由于本项目并没有采用 ",t.jsx(e.code,{children:"TS"}),"，因此类型相关的逻辑没有额外描述。如果你有相关的疑问，可以在尊享群或者直播里跟我探讨。"]})]})}function fS(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Zp,{...n})}):Zp(n)}const xS={"App.js":nS,"controller.js":lS,"service.js":iS,"api.js":tS,"List.jsx":rS,"Input.jsx":aS,"Skeleton.jsx":sS};function gS(){return t.jsx(z,{files:xS,renderArticle:n=>t.jsx(fS,{components:{code:n}}),advance:!0})}const jS=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import List from './List'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise,] = useState(fetchListController)

  return (
    <Suspense fallback={<Skeleton />}>
      <List promise={promise} />
    </Suspense>
  )
}

`,vS=`// API 应该与服务端提供的接口文档严格保持一致
export const prevListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const nextListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}
`,bS=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,yS=`import { use } from 'react';
import Flex from "components/Flex";
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <Flex between>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='w-[20%] rounded-2xl overflow-hidden my-4 relative'>
          <img className='w-full' src={item.large} alt='' />
          <div className='flex-1 absolute bottom-0 bg-black w-full left-0 opacity-60 text-center text-white'>
            {item.name}
          </div>
        </div>
      ))}
    </Flex>
  )
}
`,NS=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = async () => {
  const list = await fetchList()
  return list.map((item, index) => {
    item.desc = \`\${index}、react 19 arch, a design language for background applications\`
    item.name = item.name.first
    item.large = item.picture.large
    return item
  })
}
`,wS=`import {prevListApi, nextListApi} from './api'

export const fetchList = async () => {
  return Promise.all([prevListApi(), nextListApi()]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
}
`;document.documentElement.style.fontSize="14px";function SS(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function kS({promise:n}){const e=u.use(n);return t.jsx(ie,{between:!0,children:e.map((s,r)=>t.jsxs("div",{className:"w-[20%] rounded-2xl overflow-hidden my-4 relative",children:[t.jsx("img",{className:"w-full",src:s.large,alt:""}),t.jsx("div",{className:"flex-1 absolute bottom-0 bg-black w-full left-0 opacity-60 text-center text-white",children:s.name})]},`h${r}`))})}const CS=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),_S=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),AS=async()=>Promise.all([CS(),_S()]).then(n=>n.reduce((e,s)=>e.concat(s.results),[])),$S=async()=>(await AS()).map((e,s)=>(e.desc=`${s}、react 19 arch, a design language for background applications`,e.name=e.name.first,e.large=e.picture.large,e));function MS(){const[n]=u.useState($S);return t.jsx(u.Suspense,{fallback:t.jsx(SS,{}),children:t.jsx(kS,{promise:n})})}function Gp(n){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"学习了架构思维之后，我们也必须要重视一个问题，那就是要做到合理的拆分组件。"}),`
`,t.jsx(e.p,{children:"合理拆分组件是我们能够正确践行架构思维的前提条件。很多同学往往没有理论依据，把场景变得更加复杂，从而脱离了架构思维的覆盖范围。自己的工作也变得更加困难。"}),`
`,t.jsx(e.p,{children:"因此，这篇文章，需要跟大家分享一下在异步请求逻辑中，合理拆分组件的一些重要标准。"}),`
`,t.jsx(e.h3,{children:"一、总分总原则"}),`
`,t.jsx(e.p,{children:"我们在开发一个页面之前，首先会看到该页面的设计稿或者原型图。因此，这个页面要做成什么样子，是我们需要提前知道的。这里的完整的页面包括：布局、交互、数据逻辑。如果在开发之前，你仍然对这个页面的成品有疑问，那么就应该把这些疑问先搞清楚，而不是直接动手开发。"}),`
`,t.jsx(e.p,{children:"搞清楚了完整的页面应该长什么样子之后，我们再基于合理的开发的需求，去把这个页面拆分成为多个组件。"}),`
`,t.jsx(e.p,{children:"最后，这些组件会组合成为一个整体，形成最终的可运行的页面成品。"}),`
`,t.jsx(e.p,{children:"这就是我们在写页面的总分总原则。"}),`
`,t.jsxs(e.p,{children:["总分总原则给我们的开发最直观的指导就是：先思考整体，再思考细节。许多同学喜欢一上来就开始写页面，",t.jsx(e.strong,{children:"凭感觉"}),"对页面进行拆分。写到一半发现写不下去了，又回过头来思考发现页面组件拆分不合理，于是就陷入了开发困境。",t.jsx(e.strong,{children:"先思考整体"}),"是非常容易被忽略的。"]}),`
`,t.jsx(e.h3,{children:"二、拆分目的：提高可读性和可维护性"}),`
`,t.jsxs(e.p,{children:["许多人错误的把拆分与封装的目的理解为",t.jsx(e.strong,{children:"仅复用"}),"。因此，在组件拆分时，往往会存在许多不知道怎么办的情况。因为很多时候一个子组件拆分出来，也没别的地方会复用它。所以，这里我们，我们要正确的理解拆分的目的：是为了提高可读性和可维护性，而复用，是提高可维护性的一种情况。"]}),`
`,t.jsx(e.p,{children:"在组件拆分的过程中，有许多组件单独拆分出来，单纯是因为代码太多、或者逻辑稍微复杂了一点。拆分的标准就是：这一段逻辑/代码在后期维护时，是可以不用过多关注从而简化重新阅读难度，从而快速定位问题。"}),`
`,t.jsx(e.p,{children:"例如，我们可以使用一个简单的逻辑表示一个列表的渲染"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`{list.map((item) => (
  <div key={item.id}>{item.name}</div>
))}
`})}),`
`,t.jsx(e.p,{children:"但是，很多时候，列表中的其中一项，涉及到的代码比较复杂，比较多，于是，我们就可以单独把每一项拆出来"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`<div>
  {list.map((item) => (
    <User key={item.id} data={item} />
  ))}
</div>
`})}),`
`,t.jsx(e.p,{children:"有的开发者有良好的封装思维。但是也存在过度封装的时候。因此，我们在封装的时候，需要注意一个标准：那就是如果你觉得足够复杂才需要考虑封装，如果复杂度不是很高，就不需要拆出来封装一个子组件。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"刚开始，如果你还无法把控是否复杂的具体粒度，可以通过一个简单的规定来约束：一个文件的代码不能超过 200 行，如果超过了，就需要考虑拆分"}),`
`]}),`
`,t.jsx(e.h3,{children:"三、拆分单位：需要能提炼出明确的语义"}),`
`,t.jsxs(e.p,{children:["无论是封装函数，还是抽象一个架构层级，或者是拆分一个组件出来，我们都需要重视",t.jsx(e.strong,{children:"语义化"}),"。也就是说，你拆分出来的任何模块、函数，你都能够提炼出来明确的语义。用来表示他的职能。这跟设计模式中的单一原则有一点类似，但是更宽泛一点。"]}),`
`,t.jsx(e.p,{children:"在组件拆分中，列举一个常见的语义：列表的子项、导航栏、新闻/xxxx模块、头图、推荐列表、评论列表..."}),`
`,t.jsx(e.p,{children:"如果你发现，你想要拆分出来的某一个逻辑，你无法提炼出明确的语义，那么就有可能存在拆分不合理的情况，以这个标准可以锻炼自己的封装能力。"}),`
`,t.jsx(e.h3,{children:"四、异步组件基础标准：Loading 与 组件是一对一的关系"}),`
`,t.jsx(e.p,{children:"一个异步逻辑所对应的接口情况多种多样，比较复杂，但..."}),`
`,t.jsxs(e.p,{children:["我们设计在页面上的每一个 Loading 组件，都代表了一个完整的异步逻辑：初始化中 loading -> 初始化完成 -> 更新中 loading -> 更新完成。因此，设计 Loading 时，往往不会考虑接口请求的具体情况。而是考虑将具有统一更新逻辑的区域设计为一个独立的组件。在实际情况中，初学者很难自己从",t.jsx(e.strong,{children:"一致的更新逻辑"}),"这个角度去思考自己的组件拆分，从而导致了某些情况下处理起来比较混乱。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"Loading 个数是基于交互设计而言，与接口个数无关，我们只需要通过中间层来抹平差异即可"}),`
`]}),`
`,t.jsx(e.p,{children:"例如下面这个例子，一个列表中的数据，由两个 api 的返回结果组合而成。但是很明显只设计一个 Loading 是比较合理的。那么，我们就将其看成是一个组件，该案例的完整代码在右侧代码区。点击 reload 按钮可重新初始化观察 loading 效果。"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(MS,{})})]})}function RS(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Gp,{...n})}):Gp(n)}const LS={"App.js":jS,"controller.js":NS,"service.js":wS,"api.js":vS,"List.jsx":yS,"Skeleton.jsx":bS};function ES(){return t.jsx(z,{files:LS,renderArticle:n=>t.jsx(RS,{components:{code:n}}),advance:!0})}const TS=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise, update] = useState(fetchListController)

  function __inputChange(e) {
    promise.cancel()
    update(fetchListController())
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,DS=`// API 应该与服务端提供的接口文档严格保持一致
export const prevListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const nextListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}
`,OS=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,BS=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,zS=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,US=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = async () => {
  const list = await fetchList()
  return list.map((item, index) => {
    item.desc = \`\${index}、react 19 arch, a design language for background applications\`
    item.name = item.name.first + ' ' + item.name.last
    item.thumbnail = item.picture.thumbnail
    return item
  })
}
`,HS=`import {prevListApi, nextListApi} from './api'

export const fetchList = async () => {
  return Promise.all([prevListApi(), nextListApi()]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
}
`;document.documentElement.style.fontSize="14px";function qS(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function VS({promise:n}){const e=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function XS(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}const ZS=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),GS=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),YS=async()=>Promise.all([ZS(),GS()]).then(n=>n.reduce((e,s)=>e.concat(s.results),[])),Yp=async()=>(await YS()).map((e,s)=>(e.desc=`${s}、react 19 arch, a design language for background applications`,e.name=e.name.first+" "+e.name.last,e.thumbnail=e.picture.thumbnail,e));function IS(){const[n,e]=u.useState(Yp);function s(r){n.cancel(),e(Yp())}return t.jsxs("div",{children:[t.jsx(XS,{onChange:s,placeholder:"Enter something"}),t.jsx(u.Suspense,{fallback:t.jsx(qS,{}),children:t.jsx(VS,{promise:n})})]})}function Ip(n){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(IS,{})}),`
`,t.jsx(e.h3,{children:"一、解耦"}),`
`,t.jsxs(e.p,{children:["解耦实际上是一个非常抽象的说法，理解起来比较困难。",t.jsx(e.strong,{children:"他建立在你对于语义化的掌握基础之上。"})]}),`
`,t.jsx(e.p,{children:"当我们有能力，非常清晰的把某个逻辑片段赋予准确的语义，做逻辑解耦就是一个非常轻松的事情。"}),`
`,t.jsxs(e.p,{children:["解耦之所以难，是因为当语义不明时，很多逻辑的边界非常模糊。本文中的案例，演示的是之前章节中，两个接口合并成一个列表的情况。我们在实现该逻辑时，分别抽象出来了 ",t.jsx(e.code,{children:"controller"})," 层与 ",t.jsx(e.code,{children:"service"})," 层。"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"service"})," 层做的事情用语义表达出来的结果是：请求两个接口并将其返回的结果合并成一个列表。"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"controller"})," 层做的事情是：将 ",t.jsx(e.code,{children:"service"})," 层合并的列表，进行二次结构整理，补全与调整字段。"]}),`
`,t.jsx(e.p,{children:"对于初学者而言，这里很容易引发的一个问题就是，这有必要吗？逻辑其实也不复杂，为什么要单独拆出来呢？我合在一起写可以不可以？"}),`
`,t.jsx(e.p,{children:"从功能上来说，肯定是可以的。你甚至也可以在架构中这样干"}),`
`,t.jsx(e.p,{children:"但是，这里需要注意的是，当你合在一起写之后，那么，这个专门针理数据的请求与处理的模块，我们就必须单独给他定义一个合理的语义：例如：数据层。"}),`
`,t.jsxs(e.p,{children:["因此，我们发现，当 ",t.jsx(e.code,{children:"service"})," 与 ",t.jsx(e.code,{children:"controller"})," 层比较复杂，我们可以通过明确语义的方式，把他们解耦开来处理，从而降低开发难度。合在一起之后，变复杂的可能不是代码，而是你思考问题的复杂度。许多人觉得自己面临的问题很困难的根源就在这里。"]}),`
`,t.jsx(e.p,{children:"正确的思考方式是基于语义化的理解，利用嵌套思维简化问题的复杂度，一层一层的去解决问题。"}),`
`,t.jsx(e.h3,{children:"二、嵌套思维"}),`
`,t.jsx(e.p,{children:"在解决困难问题时，嵌套思维是一个必备的思维方式。也是架构师必须要具备的能力。我们以前面思考过的架构举例。"}),`
`,t.jsxs(e.p,{children:["在之前我们介绍的是 ",t.jsx(e.code,{children:"MVC + BFF"})," 混合的架构模式。但是有一个比较奇怪的地方，就是，当我们在单独思考数据层时，又划分了几个角色出来：",t.jsx(e.code,{children:"service"}),"、",t.jsx(e.code,{children:"controller"}),"、",t.jsx(e.code,{children:"model"})]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["如果我们需要约定数据类型，那么我们可以把类型定义在 ",t.jsx(e.code,{children:"model.d.ts"})," 中，来表示数据模型。"]}),`
`]}),`
`,t.jsx(e.p,{children:"实际上，这就是嵌套思维。"}),`
`,t.jsxs(e.p,{children:["当我们在思考整个组件时，我们需要考虑的是 ",t.jsx(e.code,{children:"数据驱动 UI"})," 的角色如何处理。但是这个时候，我们并不会去考虑，如果数据太复杂了应该怎么办的问题。很多人在学习的时候，往往会觉得学习起来困难，就是因为他在这个时候，就已经开始超前思考数据太复杂了应该怎么办。有的人想了几年想不出答案，于是就自我评价说：我没有天赋。实际上情况并非如此，因为超前思考本身就是一件难度很大的事情。"]}),`
`,t.jsx(e.p,{children:"在嵌套思维的指导下，此时我们应该模糊化数据层的复杂度。先把第一层的情况搞情况再说，然后再单独思考数据层。"}),`
`,t.jsxs(e.p,{children:["当我们单独思考数据层时，这个时候的问题，就变成了：",t.jsx(e.strong,{children:"如何给应用层提高一个它需要的数据。"})," 这个时候问题就简单了，因为应用层始终只需要一个数据。很多人会耦合接口个数的逻辑，在应用层中去处理多个请求结果，那么难度自然是很高的，写出来的代码也不优雅。"]}),`
`,t.jsx(e.p,{children:"嵌套思维运用得好，你会发现他无处不在。例如函数中也能执行函数，div 也能成为一个父级元素，队列中可以包含队列，数组中也能包含数组。利用嵌套思维去解决这些问题，都会被你拆解得很简单。"})]})}function FS(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Ip,{...n})}):Ip(n)}const PS={"App.js":TS,"controller.js":US,"service.js":HS,"api.js":DS,"List.jsx":BS,"Input.jsx":zS,"Skeleton.jsx":OS};function QS(){return t.jsx(z,{files:PS,renderArticle:n=>t.jsx(FS,{components:{code:n}}),advance:!0})}const JS=`import {use, useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchList} from './api'
import List from './List'

export default function Example() {
  const banners = fetchList(3)
  return (
    <div>
      <Suspense fallback={<Skeleton type='card' />}>
        <UseAccount promise={banners} />
      </Suspense>
    </div>
  )
}

function UseAccount(props) {
  const {results} = use(props.promise)

  return (
    <div className='border border-blue-100 shadow rounded-md p-4 w-full mt-4'>
      <div className='flex space-x-4'>
        {results.map((item, index) => (
          <div className="flex-1 overflow-hidden" key={\`z-\${index}\`}>
            <div className='rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center' style={{backgroundImage: \`url(\${item.picture.large})\`}}></div>
            <div className="mt-4 font-bold">{item.name.last}</div>
            <div className="mt-1 text-gray-400 text-sm">{item.email}</div>
          </div>
        ))}
      </div>

      <List />
    </div>
  )
}
`,WS=`export const fetchList = async (number) => {
  const res = await fetch(\`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}
`,KS=`import { use, Suspense, useState } from 'react';
import {fetchListWithCancel} from './service'
import Skeleton from 'components/Skeleton'
import Flex from 'components/Flex'
import Button from "components/Button";

export default function List() {
  const [promise, update] = useState(() => fetchListWithCancel(5))

  function clickhandler() {
    promise.cancel()
    update(fetchListWithCancel(5))
  }

  return (
    <>
      <Flex between justify className='mt-8'>
        <div className="text-gray-400 text-sm">Account users</div>
        <Button onClick={clickhandler}>update</Button>
      </Flex>

      <Suspense fallback={<Skeleton/>}>
        <UseList promise={promise}/>
      </Suspense>
    </>
  )
}

function UseList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,ek=`export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,nk=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json(),Fp=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function tk(){const[n,e]=u.useState(()=>Fp(5));function s(){n.cancel(),e(Fp(5))}return t.jsxs(t.Fragment,{children:[t.jsxs(ie,{between:!0,justify:!0,className:"mt-8",children:[t.jsx("div",{className:"text-gray-400 text-sm",children:"Account users"}),t.jsx(L,{onClick:s,children:"update"})]}),t.jsx(u.Suspense,{fallback:t.jsx(wa,{}),children:t.jsx(sk,{promise:n})})]})}function sk({promise:n}){const{results:e}=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function rk(){const n=nk(3);return t.jsx("div",{children:t.jsx(u.Suspense,{fallback:t.jsx(wa,{type:"card"}),children:t.jsx(ak,{promise:n})})})}function ak(n){const{results:e}=u.use(n.promise);return t.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[t.jsx("div",{className:"flex space-x-4",children:e.map((s,r)=>t.jsxs("div",{className:"flex-1 overflow-hidden",children:[t.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${s.picture.large})`}}),t.jsx("div",{className:"mt-4 font-bold",children:s.name.last}),t.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:s.email})]},`z-${r}`))}),t.jsx(tk,{})]})}function Pp(n){const e={code:"code",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(rk,{})}),`
`,t.jsx(e.p,{children:"场景：上一个模块请求成功之后，再请求下一个模块。"}),`
`,t.jsx(e.p,{children:"该场景在之前的基础版中出现，但是我严格按照 MVC 架构重新组织了代码逻辑。主要看代码学习。"}),`
`,t.jsx(e.p,{children:"1、支持单独更新列表"}),`
`,t.jsxs(e.p,{children:["2、可快速点击 ",t.jsx(e.code,{children:"update"})," 按钮，会取消上一次请求"]})]})}function lk(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Pp,{...n})}):Pp(n)}const ik={"App.js":JS,"api.js":WS,"List/index.jsx":KS,"List/service.js":ek};function ck(){return t.jsx(z,{files:ik,renderArticle:n=>t.jsx(lk,{components:{code:n}}),advance:!0})}const ok=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise, update] = useState(fetchListController)

  function __inputChange(e) {
    promise.cancel()
    update(fetchListController())
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,dk=`import {get} from './http'

// API 应该与服务端提供的接口文档严格保持一致
// export const prevListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }
//
// export const nextListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }

export const prevListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}

export const nextListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,uk=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,mk=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = () => {
  const p = fetchList()

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、react 19 arch, a design language for background applications\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      return item
    })
  })

  return p
}
`,pk=`import {prevListApi, nextListApi} from './api'

export const fetchList = () => {
  const prev = prevListApi()
  const next = nextListApi()
  const promise = Promise.all([prev, next]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
  promise.cancel = () => {
    prev.cancel()
    next.cancel()
  }
  return promise
}
`,hk=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;document.documentElement.style.fontSize="14px";function fk(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function xk({promise:n}){const e=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function gk(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function D1(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const jk=()=>D1("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),vk=()=>D1("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),bk=()=>{const n=jk(),e=vk(),s=Promise.all([n,e]).then(r=>r.reduce((a,l)=>a.concat(l.results),[]));return s.cancel=()=>{n.cancel(),e.cancel()},s},Qp=()=>{const n=bk();return n.then(e=>e.map((s,r)=>(s.desc=`${r}、react 19 arch, a design language for background applications`,s.name=s.name.first+" "+s.name.last,s.thumbnail=s.picture.thumbnail,s))),n};function yk(){const[n,e]=u.useState(Qp);function s(r){n.cancel(),e(Qp())}return t.jsxs("div",{children:[t.jsx(gk,{onChange:s,placeholder:"Enter something"}),t.jsx(u.Suspense,{fallback:t.jsx(fk,{}),children:t.jsx(xk,{promise:n})})]})}function Jp(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(yk,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"组件初始化时，需要请求多个接口。此时接口不分先后顺序，只需要将返回结果按照需求组合在一起。"}),`
`,t.jsx(e.p,{children:"1、支持快速输入时，取消上一次的两次请求"})]})}function Nk(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Jp,{...n})}):Jp(n)}const wk={"App.js":ok,"controller.js":mk,"service.js":pk,"api.js":dk,"List.jsx":uk,"http.js":hk};function Sk(){return t.jsx(z,{files:wk,renderArticle:n=>t.jsx(Nk,{components:{code:n}}),advance:!0})}const kk=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise, update] = useState(fetchListController)

  function __inputChange(e) {
    promise.cancel()
    update(fetchListController())
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,Ck=`import {get} from './http'

// API 应该与服务端提供的接口文档严格保持一致
// export const prevListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }
//
// export const nextListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }

export const prevListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}

export const nextListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,_k=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,Ak=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = () => {
  const p = fetchList()

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、react 19 arch, a design language for background applications\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      return item
    })
  })

  return p
}
`,$k=`import {prevListApi, nextListApi} from './api'

export const fetchList =  () => {
  const prev = prevListApi()

  const p = new Promise((resolve) => {
    prev.then(res => {
      nextListApi().then(res2 => {
        resolve(res.results.concat(res2.results))
      })
    })
  })

  p.cancel = prev.cancel

  return p
}
`,Mk=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;document.documentElement.style.fontSize="14px";function Rk(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function Lk({promise:n}){const e=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function Ek(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function O1(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const Tk=()=>O1("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),Dk=()=>O1("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),Ok=()=>{const n=Tk(),e=new Promise(s=>{n.then(r=>{Dk().then(a=>{s(r.results.concat(a.results))})})});return e.cancel=n.cancel,e},Wp=()=>{const n=Ok();return n.then(e=>e.map((s,r)=>(s.desc=`${r}、react 19 arch, a design language for background applications`,s.name=s.name.first+" "+s.name.last,s.thumbnail=s.picture.thumbnail,s))),n};function Bk(){const[n,e]=u.useState(Wp);function s(r){n.cancel(),e(Wp())}return t.jsxs("div",{children:[t.jsx(Ek,{onChange:s,placeholder:"Enter something"}),t.jsx(u.Suspense,{fallback:t.jsx(Rk,{}),children:t.jsx(Lk,{promise:n})})]})}function Kp(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(Bk,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"1、组件初始化时，需要请求多个接口。此时接口有先后依赖关系，上一个请求完成之后，才能请求下一个接口。"}),`
`,t.jsx(e.p,{children:"2、更新时，支持取消上一次请求"})]})}function zk(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Kp,{...n})}):Kp(n)}const Uk={"App.js":kk,"controller.js":Ak,"service.js":$k,"api.js":Ck,"List.jsx":_k,"http.js":Mk};function Hk(){return t.jsx(z,{files:Uk,renderArticle:n=>t.jsx(zk,{components:{code:n}}),advance:!0})}const qk=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise, update] = useState(fetchListController)

  function __inputChange(e) {
    promise.cancel()
    update(fetchListController(e.target.value))
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,Vk=`import {get} from './http'

// API 应该与服务端提供的接口文档严格保持一致
// export const prevListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }
//
// export const nextListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }

export const prevListApi = () => {
  return get('https://randomuser.me/api', {
    results: 4,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,Xk=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,Zk=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = (search) => {
  const p = fetchList(search)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、react 19 arch, a design language for background applications\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      return item
    })
  })

  return p
}
`,Gk=`import {prevListApi} from './api'

export const fetchList = (search) => {
  const cacheArr = localStorage.getItem(search)

  if (cacheArr) {
    let p = new Promise((resolve) => {
      resolve(JSON.parse(cacheArr))
    })
    p.cancel = () => {}
    return p
  }

  let prev = prevListApi()

  let p1 = prev.then((res) => {
    localStorage.setItem(search, JSON.stringify(res.results))
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}
`,Yk=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;document.documentElement.style.fontSize="14px";function Ik(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function Fk({promise:n}){const e=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function Pk(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function Qk(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const Jk=()=>Qk("https://randomuser.me/api",{results:4,inc:"name,gender,email,nat,picture&noinfo"}),Wk=n=>{const e=localStorage.getItem(n);if(e){let a=new Promise(l=>{l(JSON.parse(e))});return a.cancel=()=>{},a}let s=Jk(),r=s.then(a=>(localStorage.setItem(n,JSON.stringify(a.results)),a.results));return r.cancel=s.cancel,r},eh=n=>{const e=Wk(n);return e.then(s=>s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.name=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r))),e};function Kk(){const[n,e]=u.useState(eh);function s(r){n.cancel(),e(eh(r.target.value))}return t.jsxs("div",{children:[t.jsx(Pk,{onChange:s,placeholder:"Enter something"}),t.jsx(u.Suspense,{fallback:t.jsx(Ik,{}),children:t.jsx(Fk,{promise:n})})]})}function nh(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(Kk,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"1、根据参数缓存数据结果，如果有缓存，则获取缓存中的结果"}),`
`,t.jsx(e.p,{children:"2、如果没有缓存，则发起请求"}),`
`,t.jsx(e.p,{children:"3、支持取消，缓存时无需这段逻辑"})]})}function eC(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(nh,{...n})}):nh(n)}const nC={"App.js":qk,"controller.js":Zk,"service.js":Gk,"api.js":Vk,"List.jsx":Xk,"http.js":Yk};function tC(){return t.jsx(z,{files:nC,renderArticle:n=>t.jsx(eC,{components:{code:n}}),advance:!0})}const sC=`import {useState, Suspense, useRef} from 'react'
import Skeleton from './Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'
import Flex from "components/Flex";

export default function Demo01() {
  const [promise, update] = useState(fetchListController)
  const parameter = useRef({
    search: '',
    number: 4
  })

  function __inputChange(e) {
    promise.cancel()
    parameter.current.search = e.target.value
    update(fetchListController(parameter.current))
  }

  function __selected(e) {
    parameter.current.number = e.target.value
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Flex between>
        <Input onChange={__inputChange} placeholder='Enter something' />
        <Flex>
          <label htmlFor='cars' className='mr-8'>每一页个数</label>
          <select id='cars' className='border rounded px-3 py-1' onChange={__selected}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </Flex>
      </Flex>

      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}
`,rC=`import {get} from './http'

// API 应该与服务端提供的接口文档严格保持一致
// export const prevListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }
//
// export const nextListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }

export const prevListApi = (number) => {
  return get('https://randomuser.me/api', {
    results: number,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,aC=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,lC=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = (parameter) => {
  const p = fetchList(parameter)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、react 19 arch, a design language for background applications\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      return item
    })
  })

  return p
}
`,iC=`import {prevListApi} from './api'

export const fetchList = (parameter = {}) => {
  const {search, number} = parameter
  let cachekey = \`searchList:key:\${search}-\${number}\`
  const cacheArr = localStorage.getItem(cachekey)

  if (cacheArr) {
    let p = new Promise((resolve) => {
      resolve(JSON.parse(cacheArr))
    })
    p.cancel = () => {}
    return p
  }

  let prev = prevListApi(number)

  let p1 = prev.then((res) => {
    localStorage.setItem(cachekey, JSON.stringify(res.results))
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}
`,cC=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;document.documentElement.style.fontSize="14px";function oC(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function dC({promise:n}){const e=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function uC(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function mC(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const pC=n=>mC("https://randomuser.me/api",{results:n,inc:"name,gender,email,nat,picture&noinfo"}),hC=(n={})=>{const{search:e,number:s}=n;let r=`searchList:key:${e}-${s}`;const a=localStorage.getItem(r);if(a){let c=new Promise(o=>{o(JSON.parse(a))});return c.cancel=()=>{},c}let l=pC(s),i=l.then(c=>(localStorage.setItem(r,JSON.stringify(c.results)),c.results));return i.cancel=l.cancel,i},uc=n=>{const e=hC(n);return e.then(s=>s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.name=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r))),e};function fC(){const[n,e]=u.useState(uc),s=u.useRef({search:"",number:4});function r(l){n.cancel(),s.current.search=l.target.value,e(uc(s.current))}function a(l){s.current.number=l.target.value,e(uc(s.current))}return t.jsxs("div",{children:[t.jsxs(ie,{between:!0,children:[t.jsx(uC,{onChange:r,placeholder:"Enter something"}),t.jsxs(ie,{children:[t.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),t.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",onChange:a,children:[t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"}),t.jsx("option",{value:"3",children:"3"}),t.jsx("option",{value:"4",children:"4"})]})]})]}),t.jsx(u.Suspense,{fallback:t.jsx(oC,{}),children:t.jsx(dC,{promise:n})})]})}function th(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(fC,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"1、在上一个案例的基础之上，新增更新条件，选择每一页个数时，重新请求接口"}),`
`,t.jsx(e.p,{children:"2、缓存key值调整，具体看代码"})]})}function xC(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(th,{...n})}):th(n)}const gC={"App.js":sC,"controller.js":lC,"service.js":iC,"api.js":rC,"List.jsx":aC,"http.js":cC};function jC(){return t.jsx(z,{files:gC,renderArticle:n=>t.jsx(xC,{components:{code:n}}),advance:!0})}const vC=`import {useState, Suspense, useEffect, useDeferredValue, useRef} from 'react'
import Skeleton from './Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise, update] = useState(fetchListController)
  const deferred = useDeferredValue(promise)
  const timer = useRef()

  function __inputChange(e) {
    promise.cancel()
    update(fetchListController())
  }

  useEffect(() => {
    timer.current = setInterval(() => {
      update(fetchListController('prev'))
    }, 3000)

    return () => {
      clearInterval(timer.current)
      promise.cancel()
    }
  }, []);

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={deferred} />
      </Suspense>
    </div>
  )
}
`,bC=`import {get} from './http'

// API 应该与服务端提供的接口文档严格保持一致
// export const prevListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }
//
// export const nextListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }

export const prevListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}

export const nextListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,yC=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.fname}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,NC=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = (params = '') => {
  const p = fetchList(params)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、react 19 arch, a design language for background applications\`
      item.fname = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      return item
    })
  })

  return p
}
`,wC=`import {prevListApi, nextListApi} from './api'

// 缓存请求结果
let prevCache = []
let nextCache = []

function clear() {
  prevCache = []
  nextCache = []
}

export const fetchListInit = () => {
  const prev = prevListApi()
  const next = nextListApi()
  const promise = Promise.all([prev, next]).then(res => {
    prevCache = res[0].results
    nextCache = res[1].results
    return [...prevCache, ...nextCache]
  })

  promise.cancel = () => {
    prev.cancel()
    next.cancel()
  }

  promise.clear = clear

  return promise
}

export const fetchPrevAPI = () => {
  let p = new Promise((resolve) => {
    prevListApi().then(res => {
      prevCache = res.results
      resolve([...prevCache, ...nextCache])
    })
  })
  p.cancel = () => {}
  p.clear = clear
  return p
}

export const fetchNextAPI = () => {
  let p = new Promise((resolve) => {
    nextListApi().then(res => {
      nextCache = res.results
      resolve([...prevCache, ...nextCache])
    })
  })

  p.cancel = () => {}
  p.clear = clear
  return p
}

export const fetchList = (params) => {
  if (params === 'prev') {
    return fetchPrevAPI()
  }
  if (params === 'next') {
    return fetchNextAPI()
  }
  return fetchListInit()
}
`,SC=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;document.documentElement.style.fontSize="14px";function kC(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function CC({promise:n}){const e=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.fname}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function _C(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function B1(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const z1=()=>B1("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),U1=()=>B1("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"});let Js=[],Ws=[];function Vd(){Js=[],Ws=[]}const AC=()=>{const n=z1(),e=U1(),s=Promise.all([n,e]).then(r=>(Js=r[0].results,Ws=r[1].results,[...Js,...Ws]));return s.cancel=()=>{n.cancel(),e.cancel()},s.clear=Vd,s},$C=()=>{let n=new Promise(e=>{z1().then(s=>{Js=s.results,e([...Js,...Ws])})});return n.cancel=()=>{},n.clear=Vd,n},MC=()=>{let n=new Promise(e=>{U1().then(s=>{Ws=s.results,e([...Js,...Ws])})});return n.cancel=()=>{},n.clear=Vd,n},RC=n=>n==="prev"?$C():n==="next"?MC():AC(),mc=(n="")=>{const e=RC(n);return e.then(s=>s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.fname=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r))),e};function LC(){const[n,e]=u.useState(mc),s=u.useDeferredValue(n),r=u.useRef();function a(l){n.cancel(),e(mc())}return u.useEffect(()=>(r.current=setInterval(()=>{e(mc("prev"))},3e3),()=>{clearInterval(r.current),n.cancel()}),[]),t.jsxs("div",{children:[t.jsx(_C,{onChange:a,placeholder:"Enter something"}),t.jsx(u.Suspense,{fallback:t.jsx(kC,{}),children:t.jsx(CC,{promise:s})})]})}function sh(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(LC,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"更新频率不一致"}),`
`,t.jsx(e.p,{children:`1、两个接口
2、搜索更新时，更新全部
3、自动更新时，仅更新第一个接口`})]})}function EC(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(sh,{...n})}):sh(n)}const TC={"App.js":vC,"controller.js":NC,"service.js":wC,"api.js":bC,"List.jsx":yC,"http.js":SC};function DC(){return t.jsx(z,{files:TC,renderArticle:n=>t.jsx(EC,{components:{code:n}}),advance:!0})}const OC=`import {use, useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchList} from './api'
import List from './List'

export default function Example() {
  const banners = fetchList(3)
  return (
    <div>
      <Suspense fallback={<Skeleton type='card' />}>
        <UseAccount promise={banners} />
      </Suspense>
    </div>
  )
}

function UseAccount(props) {
  const {results} = use(props.promise)

  return (
    <div className='border border-blue-100 shadow rounded-md p-4 w-full mt-4'>
      <div className='flex space-x-4'>
        {results.map((item, index) => (
          <div className="flex-1 overflow-hidden" key={\`z-\${index}\`}>
            <div className='rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center' style={{backgroundImage: \`url(\${item.picture.large})\`}}></div>
            <div className="mt-4 font-bold">{item.name.last}</div>
            <div className="mt-1 text-gray-400 text-sm">{item.email}</div>
          </div>
        ))}
      </div>

      <List />
    </div>
  )
}
`,BC=`import {get} from "pages/blog/pages/11.diff/case/http.js";

export const fetchList = async (number) => {
  const res = await fetch(\`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const bannerListApi = () => {
  return get('https://randomuser.me/api', {
    results: 3,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}

export const userListApi = () => {
  return get('https://randomuser.me/api', {
    results: 5,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,zC=`import { use, Suspense, useState } from 'react';
import {fetchListWithCancel} from './service'
import Skeleton from 'components/Skeleton'
import Flex from 'components/Flex'
import Button from "components/Button";

export default function List() {
  const [promise, update] = useState(() => fetchListWithCancel(5))

  function clickhandler() {
    promise.cancel()
    update(fetchListWithCancel(5))
  }

  return (
    <>
      <Flex between justify className='mt-8'>
        <div className="text-gray-400 text-sm">Account users</div>
        <Button onClick={clickhandler}>update</Button>
      </Flex>

      <Suspense fallback={<Skeleton/>}>
        <UseList promise={promise}/>
      </Suspense>
    </>
  )
}

function UseList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,UC=`export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,HC=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json(),rh=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function qC(){const[n,e]=u.useState(()=>rh(5));function s(){n.cancel(),e(rh(5))}return t.jsxs(t.Fragment,{children:[t.jsxs(ie,{between:!0,justify:!0,className:"mt-8",children:[t.jsx("div",{className:"text-gray-400 text-sm",children:"Account users"}),t.jsx(L,{onClick:s,children:"update"})]}),t.jsx(u.Suspense,{fallback:t.jsx(wa,{}),children:t.jsx(VC,{promise:n})})]})}function VC({promise:n}){const{results:e}=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function XC(){const n=HC(3);return t.jsx("div",{children:t.jsx(u.Suspense,{fallback:t.jsx(wa,{type:"card"}),children:t.jsx(ZC,{promise:n})})})}function ZC(n){const{results:e}=u.use(n.promise);return t.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[t.jsx("div",{className:"flex space-x-4",children:e.map((s,r)=>t.jsxs("div",{className:"flex-1 overflow-hidden",children:[t.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${s.picture.large})`}}),t.jsx("div",{className:"mt-4 font-bold",children:s.name.last}),t.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:s.email})]},`z-${r}`))}),t.jsx(qC,{})]})}function ah(n){const e={code:"code",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(XC,{})}),`
`,t.jsx(e.p,{children:"场景：上一个模块请求成功之后，再请求下一个模块。"}),`
`,t.jsx(e.p,{children:"该场景在之前的基础版中出现，但是我严格按照 MVC 架构重新组织了代码逻辑。主要看代码学习。"}),`
`,t.jsx(e.p,{children:"1、支持单独更新列表"}),`
`,t.jsxs(e.p,{children:["2、可快速点击 ",t.jsx(e.code,{children:"update"})," 按钮，会取消上一次请求"]})]})}function GC(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ah,{...n})}):ah(n)}const YC={"App.js":OC,"api.js":BC,"List/index.jsx":zC,"List/service.js":UC};function IC(){return t.jsx(z,{files:YC,renderArticle:n=>t.jsx(GC,{components:{code:n}}),advance:!0})}const FC=`import {useState, Suspense, useRef} from 'react'
import Skeleton from './Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'
import Flex from "components/Flex";

export default function Demo01() {
  const parameter = useRef({
    search: '',
    number: 4
  })

  const [promise, update] = useState(() => fetchListController(parameter.current))

  function __inputChange(e) {
    promise.cancel()
    parameter.current.search = e.target.value
    update(fetchListController(parameter.current))
  }

  function __selected(value) {
    parameter.current.number = value
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Flex between>
        <Input onChange={__inputChange} placeholder='Enter something' />
        <Select value='4' onChange={__selected} />
      </Flex>

      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}


// 这里的 value，只影响初始化的值
function Select({value, onChange}) {
  const [current, setCurrent] = useState(value)

  function __selected(e) {
    const v = e.target.value
    // 控制内部状态更改
    setCurrent(v)

    // 将选中的值传递给外部
    onChange && onChange(v)
  }

  return (
    <Flex>
      <label htmlFor='cars' className='mr-8'>每一页个数</label>
      <select id='cars' className='border rounded px-3 py-1' value={current} onChange={__selected}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
    </Flex>
  )
}
`,PC=`import {get} from './http'

// API 应该与服务端提供的接口文档严格保持一致
// export const prevListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }
//
// export const nextListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }

export const prevListApi = (number) => {
  return get('https://randomuser.me/api', {
    results: number,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,QC=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,JC=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = (parameter) => {
  const p = fetchList(parameter)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、react 19 arch, a design language for background applications\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      return item
    })
  })

  return p
}
`,WC=`import {prevListApi} from './api'

export const fetchList = (parameter = {}) => {
  const {search, number} = parameter
  let cachekey = \`searchList:key:\${search}-\${number}\`
  const cacheArr = localStorage.getItem(cachekey)

  if (cacheArr) {
    let p = new Promise((resolve) => {
      resolve(JSON.parse(cacheArr))
    })
    p.cancel = () => {}
    return p
  }

  let prev = prevListApi(number)

  let p1 = prev.then((res) => {
    localStorage.setItem(cachekey, JSON.stringify(res.results))
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}
`,KC=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;document.documentElement.style.fontSize="14px";function e_(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function n_({promise:n}){const e=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function t_(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function s_(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const r_=n=>s_("https://randomuser.me/api",{results:n,inc:"name,gender,email,nat,picture&noinfo"}),a_=(n={})=>{const{search:e,number:s}=n;let r=`searchList:key:${e}-${s}`;const a=localStorage.getItem(r);if(a){let c=new Promise(o=>{o(JSON.parse(a))});return c.cancel=()=>{},c}let l=r_(s),i=l.then(c=>(localStorage.setItem(r,JSON.stringify(c.results)),c.results));return i.cancel=l.cancel,i},pc=n=>{const e=a_(n);return e.then(s=>s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.name=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r))),e};function l_(){const n=u.useRef({search:"",number:4}),[e,s]=u.useState(()=>pc(n.current));function r(l){e.cancel(),n.current.search=l.target.value,s(pc(n.current))}function a(l){n.current.number=l,s(pc(n.current))}return t.jsxs("div",{children:[t.jsxs(ie,{between:!0,children:[t.jsx(t_,{onChange:r,placeholder:"Enter something"}),t.jsx(i_,{value:"4",onChange:a})]}),t.jsx(u.Suspense,{fallback:t.jsx(e_,{}),children:t.jsx(n_,{promise:e})})]})}function i_({value:n,onChange:e}){const[s,r]=u.useState(n);function a(l){const i=l.target.value;r(i),e&&e(i)}return t.jsxs(ie,{children:[t.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),t.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",value:s,onChange:a,children:[t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"}),t.jsx("option",{value:"3",children:"3"}),t.jsx("option",{value:"4",children:"4"})]})]})}function lh(n){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(l_,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"本案例在 [10、多个更新条件] 的基础之上进行修改。"}),`
`,t.jsx(e.p,{children:"在本次案例中，有一个多选一的搜索条件。我们计划将其封装成为一个独立的子组件。"}),`
`,t.jsxs(e.p,{children:["当我们封装成独立的子组件时，注意案例中，该组件中有一个数据与父组件的交互方式。这种方式可以帮助我们在很多场景脱离",t.jsx(e.strong,{children:"受控组件的限制"}),"，从而做到父子组件数据解耦。这里重点关注 Select 组件的封装与使用方式"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`// 这里的 value，只影响初始化的值
function Select({value, onChange}) {
  const [current, setCurrent] = useState(value)

  function __selected(e) {
    const v = e.target.value
    // 控制内部状态更改
    setCurrent(v)

    // 将选中的值传递给外部
    onChange && onChange(v)
  }

  return (
    <Flex>
      <label htmlFor='cars' className='mr-8'>每一页个数</label>
      <select id='cars' className='border rounded px-3 py-1' value={current} onChange={__selected}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
    </Flex>
  )
}
`})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"该组件通常应该独立封装处理，这里偷了个懒没有创建新的文件"}),`
`]})]})}function c_(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(lh,{...n})}):lh(n)}const o_={"App.js":FC,"controller.js":JC,"service.js":WC,"api.js":PC,"List.jsx":QC,"http.js":KC};function d_(){return t.jsx(z,{files:o_,renderArticle:n=>t.jsx(c_,{components:{code:n}}),advance:!0})}const u_=`import {useState, Suspense, useRef} from 'react'
import Skeleton from './Skeleton'
import List from './List'

import {fetchListController} from './controller'
import Filter from './Filter'

export default function Demo01() {
  const parameter = useRef({
    search: '',
    number: 4
  })

  const [promise, update] = useState(() => fetchListController(parameter.current))

  function __filterChange(option) {
    promise.cancel()
    parameter.current = Object.assign(parameter.current, option)
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Filter onChange={__filterChange} />
      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}
`,m_=`import {get} from './http'

// API 应该与服务端提供的接口文档严格保持一致
// export const prevListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }
//
// export const nextListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }

export const prevListApi = (number) => {
  return get('https://randomuser.me/api', {
    results: number,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,p_=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,h_=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = (parameter) => {
  const p = fetchList(parameter)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、react 19 arch, a design language for background applications\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      return item
    })
  })

  return p
}
`,f_=`import {prevListApi} from './api'

export const fetchList = (parameter = {}) => {
  const {search, number} = parameter
  let cachekey = \`searchList:key:\${search}-\${number}\`
  const cacheArr = localStorage.getItem(cachekey)

  if (cacheArr) {
    let p = new Promise((resolve) => {
      resolve(JSON.parse(cacheArr))
    })
    p.cancel = () => {}
    return p
  }

  let prev = prevListApi(number)

  let p1 = prev.then((res) => {
    localStorage.setItem(cachekey, JSON.stringify(res.results))
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}
`,x_=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,g_=`import {useState, Suspense, useRef} from 'react'
import Flex from 'components/Flex';
import Input from './Input'
import Select from './Select'

export default function Filter({onChange}) {

  function __inputChange(e) {
    onChange && onChange({search: e.target.value})
  }

  function __selected(value) {
    onChange && onChange({number: value})
  }

  return (
    <Flex between>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Select value='4' onChange={__selected} />
    </Flex>
  )
}
`;document.documentElement.style.fontSize="14px";function j_(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function v_({promise:n}){const e=u.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function b_(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const y_=n=>b_("https://randomuser.me/api",{results:n,inc:"name,gender,email,nat,picture&noinfo"}),N_=(n={})=>{const{search:e,number:s}=n;let r=`searchList:key:${e}-${s}`;const a=localStorage.getItem(r);if(a){let c=new Promise(o=>{o(JSON.parse(a))});return c.cancel=()=>{},c}let l=y_(s),i=l.then(c=>(localStorage.setItem(r,JSON.stringify(c.results)),c.results));return i.cancel=l.cancel,i},ih=n=>{const e=N_(n);return e.then(s=>s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.name=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r))),e};function w_(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function S_({value:n,onChange:e}){const[s,r]=u.useState(n);function a(l){const i=l.target.value;r(i),e&&e(i)}return t.jsxs(ie,{children:[t.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),t.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",value:s,onChange:a,children:[t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"}),t.jsx("option",{value:"3",children:"3"}),t.jsx("option",{value:"4",children:"4"})]})]})}function k_({onChange:n}){function e(r){n&&n({search:r.target.value})}function s(r){n&&n({number:r})}return t.jsxs(ie,{between:!0,children:[t.jsx(w_,{onChange:e,placeholder:"Enter something"}),t.jsx(S_,{value:"4",onChange:s})]})}function C_(){const n=u.useRef({search:"",number:4}),[e,s]=u.useState(()=>ih(n.current));function r(a){e.cancel(),n.current=Object.assign(n.current,a),s(ih(n.current))}return t.jsxs("div",{children:[t.jsx(k_,{onChange:r}),t.jsx(u.Suspense,{fallback:t.jsx(j_,{}),children:t.jsx(v_,{promise:e})})]})}function ch(n){const e={code:"code",h3:"h3",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(C_,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"本案例在 [13、子组件数据解耦] 的基础之上进行修改。"}),`
`,t.jsx(e.p,{children:"当过滤条件过多时，我们需要将所有的过滤条件全部整合封装起来，以确保应用层代码的简洁。注意观察实现方式"}),`
`,t.jsx(e.p,{children:"文件结构"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`- index.jsx
- controller.js
- service.js
- api.js
- http.js
- List.jsx
+ Filter
  - index.jsx
  - Input.jsx
  - Select.jsx
`})})]})}function __(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ch,{...n})}):ch(n)}const A_={"App.js":u_,controller:h_,service:f_,api:m_,List:p_,http:x_,Filter:g_};function $_(){return t.jsx(z,{files:A_,renderArticle:n=>t.jsx(__,{components:{code:n}}),advance:!0})}const M_=`import {useState, Suspense, useRef} from 'react'
import Skeleton from './Skeleton'
import List from './List'

import {fetchListController} from './controller'
import Filter from './Filter'

export default function Demo01() {
  const parameter = useRef({
    search: '',
    number: 4
  })

  const [promise, update] = useState(() => fetchListController(parameter.current))

  function __filterChange(option) {
    promise.cancel()
    parameter.current = Object.assign(parameter.current, option)
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Filter onChange={__filterChange} />
      <Suspense fallback={<Skeleton/>}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,R_=`import {get} from './http'

// API 应该与服务端提供的接口文档严格保持一致
// export const prevListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }
//
// export const nextListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }

export const prevListApi = (number) => {
  return get('https://randomuser.me/api', {
    results: number,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,L_=`
import { use, useReducer, useMemo } from 'react';
import Flex from 'components/Flex'

export default function CurrentList({promise}) {
  const results = use(promise)
  const [, forceUpdate] = useReducer((boolean) => !boolean, true)

  let list = useMemo(() => {
    return results.map(item => ({
      selected: false,
      ...item
    }))
  }, [promise])

  function __radioHandler(e, i) {
    list[i].selected = e.target.checked
    forceUpdate()
  }

  const count = list.reduce((prev, cur) => {
    if(cur.selected) { prev += 1 }
    return prev
  }, 0)

  return (
    <div>
      {list.map((item, i) => (
        <Flex key={\`h\${i}\`}>
          <input type="checkbox" className='w-5 mr-4' checked={item.selected} onChange={(e) => __radioHandler(e, i)} />
          <div className='flex border p-4 items-center my-4 rounded-md'>
            <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt=''/>
            <div className='flex-1 ml-4'>
              <div className='font-bold'>{item.name}</div>
              <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
            </div>
          </div>
        </Flex>
      ))}
      <div>选中项一共有：{count}</div>
    </div>
  )
}
`,E_=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = (parameter) => {
  const p = fetchList(parameter)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、react 19 arch, a design language for background applications\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      return item
    })
  })

  return p
}
`,T_=`import {prevListApi} from './api'

export const fetchList = (parameter = {}) => {
  const {search, number} = parameter
  let cachekey = \`searchList:key:\${search}-\${number}\`
  const cacheArr = localStorage.getItem(cachekey)

  if (cacheArr) {
    let p = new Promise((resolve) => {
      resolve(JSON.parse(cacheArr))
    })
    p.cancel = () => {}
    return p
  }

  let prev = prevListApi(number)

  let p1 = prev.then((res) => {
    localStorage.setItem(cachekey, JSON.stringify(res.results))
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}
`,D_=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,O_=`import {useState, Suspense, useRef} from 'react'
import Flex from 'components/Flex';
import Input from './Input'
import Select from './Select'

export default function Filter({onChange}) {

  function __inputChange(e) {
    onChange && onChange({search: e.target.value})
  }

  function __selected(value) {
    onChange && onChange({number: value})
  }

  return (
    <Flex between>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Select value='4' onChange={__selected} />
    </Flex>
  )
}
`;document.documentElement.style.fontSize="14px";function B_(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function z_({promise:n}){const e=u.use(n),[,s]=u.useReducer(i=>!i,!0);let r=u.useMemo(()=>e.map(i=>({selected:!1,...i})),[n]);function a(i,c){r[c].selected=i.target.checked,s()}const l=r.reduce((i,c)=>(c.selected&&(i+=1),i),0);return t.jsxs("div",{children:[r.map((i,c)=>t.jsxs(ie,{children:[t.jsx("input",{type:"checkbox",className:"w-5 mr-4",checked:i.selected,onChange:o=>a(o,c)}),t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:i.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:i.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]})]},`h${c}`)),t.jsxs("div",{children:["选中项一共有：",l]})]})}function U_(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const H_=n=>U_("https://randomuser.me/api",{results:n,inc:"name,gender,email,nat,picture&noinfo"}),q_=(n={})=>{const{search:e,number:s}=n;let r=`searchList:key:${e}-${s}`;const a=localStorage.getItem(r);if(a){let c=new Promise(o=>{o(JSON.parse(a))});return c.cancel=()=>{},c}let l=H_(s),i=l.then(c=>(localStorage.setItem(r,JSON.stringify(c.results)),c.results));return i.cancel=l.cancel,i},oh=n=>{const e=q_(n);return e.then(s=>s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.name=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r))),e};function V_(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function X_({value:n,onChange:e}){const[s,r]=u.useState(n);function a(l){const i=l.target.value;r(i),e&&e(i)}return t.jsxs(ie,{children:[t.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),t.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",value:s,onChange:a,children:[t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"}),t.jsx("option",{value:"3",children:"3"}),t.jsx("option",{value:"4",children:"4"})]})]})}function Z_({onChange:n}){function e(r){n&&n({search:r.target.value})}function s(r){n&&n({number:r})}return t.jsxs(ie,{between:!0,children:[t.jsx(V_,{onChange:e,placeholder:"Enter something"}),t.jsx(X_,{value:"4",onChange:s})]})}function G_(){const n=u.useRef({search:"",number:4}),[e,s]=u.useState(()=>oh(n.current));function r(a){e.cancel(),n.current=Object.assign(n.current,a),s(oh(n.current))}return t.jsxs("div",{children:[t.jsx(Z_,{onChange:r}),t.jsx(u.Suspense,{fallback:t.jsx(B_,{}),children:t.jsx(z_,{promise:e})})]})}function dh(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(G_,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"本案例在 [14、统一思考过滤条件] 的基础之上进行扩展。"}),`
`,t.jsx(e.p,{children:"当列表有单独的本地的状态需要修改时的做法如下"})]})}function Y_(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(dh,{...n})}):dh(n)}const I_={"App.js":M_,controller:E_,service:T_,api:R_,List:L_,http:D_,Filter:O_};function F_(){return t.jsx(z,{files:I_,renderArticle:n=>t.jsx(Y_,{components:{code:n}}),advance:!0})}const P_=`import {useState, Suspense, useRef} from 'react'
import Skeleton from './Skeleton'
import List from './List'

import {fetchListController} from './controller'
import Filter from './Filter'

export default function Demo01() {
  const parameter = useRef({
    search: '',
    number: 4
  })

  const [promise, update] = useState(() => fetchListController(parameter.current))

  function __filterChange(option) {
    promise.cancel()
    parameter.current = Object.assign(parameter.current, option)
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Filter onChange={__filterChange} />
      <Suspense fallback={<Skeleton/>}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,Q_=`import {get} from './http'

// API 应该与服务端提供的接口文档严格保持一致
// export const prevListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }
//
// export const nextListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }

export const prevListApi = (number) => {
  return get('https://randomuser.me/api', {
    results: number,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,J_=`
import { use, useReducer, useMemo } from 'react';
import Flex from 'components/Flex'

export default function CurrentList({promise}) {
  const results = use(promise)
  const [, forceUpdate] = useReducer((boolean) => !boolean, true)

  let list = useMemo(() => {
    return results.map(item => ({
      selected: false,
      ...item
    }))
  }, [promise])

  function __radioHandler(e, i) {
    list[i].selected = e.target.checked
    forceUpdate()
  }

  const count = list.reduce((prev, cur) => {
    if(cur.selected) { prev += 1 }
    return prev
  }, 0)

  return (
    <div>
      {list.map((item, i) => (
        <Flex key={\`h\${i}\`}>
          <input type="checkbox" className='w-5 mr-4' checked={item.selected} onChange={(e) => __radioHandler(e, i)} />
          <div className='flex border p-4 items-center my-4 rounded-md'>
            <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt=''/>
            <div className='flex-1 ml-4'>
              <div className='font-bold'>{item.name}</div>
              <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
            </div>
          </div>
        </Flex>
      ))}
      <div>选中项一共有：{count}</div>
    </div>
  )
}
`,W_=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = (parameter) => {
  const p = fetchList(parameter)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、react 19 arch, a design language for background applications\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      return item
    })
  })

  return p
}
`,K_=`import {prevListApi} from './api'

export const fetchList = (parameter = {}) => {
  const {search, number} = parameter
  let cachekey = \`searchList:key:\${search}-\${number}\`
  const cacheArr = localStorage.getItem(cachekey)

  if (cacheArr) {
    let p = new Promise((resolve) => {
      resolve(JSON.parse(cacheArr))
    })
    p.cancel = () => {}
    return p
  }

  let prev = prevListApi(number)

  let p1 = prev.then((res) => {
    localStorage.setItem(cachekey, JSON.stringify(res.results))
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}
`,eA=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,nA=`import {useState, Suspense, useRef} from 'react'
import Flex from 'components/Flex';
import Input from './Input'
import Select from './Select'

export default function Filter({onChange}) {

  function __inputChange(e) {
    onChange && onChange({search: e.target.value})
  }

  function __selected(value) {
    onChange && onChange({number: value})
  }

  return (
    <Flex between>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Select value='4' onChange={__selected} />
    </Flex>
  )
}
`;document.documentElement.style.fontSize="14px";function tA(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function sA({promise:n}){const e=u.use(n),[,s]=u.useReducer(i=>!i,!0);let r=u.useMemo(()=>e.map(i=>({selected:!1,...i})),[n]);function a(i,c){r[c].selected=i.target.checked,s()}const l=r.reduce((i,c)=>(c.selected&&(i+=1),i),0);return t.jsxs("div",{children:[r.map((i,c)=>t.jsxs(ie,{children:[t.jsx("input",{type:"checkbox",className:"w-5 mr-4",checked:i.selected,onChange:o=>a(o,c)}),t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:i.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:i.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]})]},`h${c}`)),t.jsxs("div",{children:["选中项一共有：",l]})]})}function rA(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const aA=n=>rA("https://randomuser.me/api",{results:n,inc:"name,gender,email,nat,picture&noinfo"}),lA=(n={})=>{const{search:e,number:s}=n;let r=`searchList:key:${e}-${s}`;const a=localStorage.getItem(r);if(a){let c=new Promise(o=>{o(JSON.parse(a))});return c.cancel=()=>{},c}let l=aA(s),i=l.then(c=>(localStorage.setItem(r,JSON.stringify(c.results)),c.results));return i.cancel=l.cancel,i},uh=n=>{const e=lA(n);return e.then(s=>s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.name=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r))),e};function iA(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function cA({value:n,onChange:e}){const[s,r]=u.useState(n);function a(l){const i=l.target.value;r(i),e&&e(i)}return t.jsxs(ie,{children:[t.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),t.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",value:s,onChange:a,children:[t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"}),t.jsx("option",{value:"3",children:"3"}),t.jsx("option",{value:"4",children:"4"})]})]})}function oA({onChange:n}){function e(r){n&&n({search:r.target.value})}function s(r){n&&n({number:r})}return t.jsxs(ie,{between:!0,children:[t.jsx(iA,{onChange:e,placeholder:"Enter something"}),t.jsx(cA,{value:"4",onChange:s})]})}function dA(){const n=u.useRef({search:"",number:4}),[e,s]=u.useState(()=>uh(n.current));function r(a){e.cancel(),n.current=Object.assign(n.current,a),s(uh(n.current))}return t.jsxs("div",{children:[t.jsx(oA,{onChange:r}),t.jsx(u.Suspense,{fallback:t.jsx(tA,{}),children:t.jsx(sA,{promise:e})})]})}function mh(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(dA,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"本案例在 [14、统一思考过滤条件] 的基础之上进行扩展。"}),`
`,t.jsx(e.p,{children:"当列表有单独的本地的状态需要修改时的做法如下"})]})}function uA(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(mh,{...n})}):mh(n)}const mA={"App.js":P_,controller:W_,service:K_,api:Q_,List:J_,http:eA,Filter:nA};function pA(){return t.jsx(z,{files:mA,renderArticle:n=>t.jsx(uA,{components:{code:n}}),advance:!0})}const H1=[{type:"tip",name:"序"},{path:"index",name:"1、如何理解体系化",component:G9},{type:"tip",name:"理论篇"},{path:"architecture",name:"2、架构思维总览",component:eS},{path:"bff",name:"3、BFF架构思维",component:gS},{path:"split",name:"4、组件拆分原则",component:ES},{path:"nest",name:"5、解耦与嵌套",component:QS},{type:"tip",name:"实战篇"},{path:"streaming",name:"6、流式渲染",component:ck},{path:"multapi",name:"7、多个接口并行",component:Sk},{path:"deps",name:"8、多个接口前后依赖",component:Hk},{path:"cache",name:"9、数据缓存",component:tC},{path:"update",name:"10、多个更新条件",component:jC},{path:"different",name:"11、接口更新频率不一致",component:DC},{path:"pickapi",name:"12、更新其中某个接口",component:IC},{path:"childx",name:"13、子组件数据解耦",component:d_},{path:"cfilter",name:"14、统一思考过滤条件",component:$_},{path:"lstate",name:"15、单独维护列表状态",component:F_},{path:"reduce",name:"16、统一维护状态",component:pA}];function ph(){return t.jsx("div",{children:H1.map((n,e)=>n.type==="tip"?t.jsx("div",{className:"mx-2 text-sm px-4 text-gray-400 first:pt-0 pb-4 pt-8",children:n.name},`z-${e}`):t.jsx(yn,{className:"text-gray-700",activeName:"text-blue-700",to:n.path,children:t.jsxs("li",{className:"mx-2 px-4 py-3 transition hover:bg-blue-100 text-sm flex items-center justify-between hover:text-blue-700 rounded",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})}),t.jsx("div",{className:"ml-2 line-clamp-1",children:n.name})]}),n.label?t.jsx(_d,{label:n.label,primary:!0,className:"ml-2"}):null]},n.path)},n.path))})}function hA(){const n=ci(),e=u.useRef(new Map),s=oi(),{pathname:r}=Bt(),a=u.useRef(null);return e.current.has(r)||e.current.set(r,s),u.useEffect(()=>{location.pathname==="/advance"&&n("index")},[r]),t.jsxs("div",{className:"pt-16 md:flex",children:[t.jsx(L,{signal:!0,className:"fixed bottom-6 right-6 z-40 md:hidden",onClick:()=>a.current.show(),children:"目录"}),t.jsx(ya,{ref:a,onClose:()=>a.current.close(),children:t.jsx("div",{className:"bg-white h-full py-4 overflow-scroll",children:t.jsx(ph,{})})}),t.jsxs("nav",{className:"hidden md:block w-60 sticky top-16 h-[calc(100vh_-_5rem)] overflow-y-auto bg-hei",children:[t.jsxs("div",{className:"flex items-center px-4 py-8",children:[t.jsx("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-cyan-500",children:t.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})})}),t.jsxs("div",{className:"text-sm",children:[t.jsx("div",{children:"当前版本"}),t.jsx("div",{className:"text-gray-500",children:"React@19.0.0-rc"})]})]}),t.jsx("ul",{className:"border-r h-[calc(100vh_-_9rem_-_35px)] overflow-y-auto pb-8",children:t.jsx(ph,{})})]}),t.jsx("div",{className:"md:flex-1 md:w-[calc(100vw_-_15rem)] p-4 md:p-8 min-h-[calc(100vh_-_5rem)] box-border",children:Array.from(e.current).map(([l,i])=>t.jsx("div",{style:{display:r===l?"block":"none"},children:i},l))})]})}const fA="/assets/30-Do4OqOfW.jpg",xA="/assets/200-CadH3lOz.jpg",gA="/assets/400-C00ssYqp.jpg",jA={30:"基础版",200:"尊享版提前投资",400:"尊享版"},vA={30:fA,200:xA,400:gA};function bA(){const n=window.location.search.split("=")[1];return t.jsxs("div",{className:"mt-24 md:mx-auto mx-4 max-w-[640px] px-4 md:px-16 py-8 border rounded-lg mb-4",children:[t.jsxs("div",{className:"flex items-center space-x-2 mb-8",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 1228 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"24",height:"24",children:t.jsx("path",{d:"M530.8928 703.1296a41.472 41.472 0 0 1-35.7376-19.8144l-2.7136-5.5808L278.272 394.752a18.7392 18.7392 0 0 1-2.048-8.1408 19.968 19.968 0 0 1 20.48-19.3536c4.608 0 8.8576 1.4336 12.288 3.84l234.3936 139.9296a64.4096 64.4096 0 0 0 54.528 5.9392L1116.2624 204.8C1004.9536 80.896 821.76 0 614.4 0 275.0464 0 0 216.576 0 483.6352c0 145.7152 82.7392 276.8896 212.2752 365.5168a38.1952 38.1952 0 0 1 17.2032 31.488 44.4928 44.4928 0 0 1-2.1504 12.3904l-27.6992 97.4848c-1.3312 4.608-3.328 9.3696-3.328 14.1312 0 10.752 9.216 19.3536 20.48 19.3536 4.4032 0 8.0384-1.536 11.776-3.584l134.5536-73.3184c10.1376-5.5296 20.7872-8.96 32.6144-8.96 6.2976 0 12.288 0.9216 18.0736 2.5088 62.72 17.0496 130.4576 26.5728 200.5504 26.5728C953.7024 967.168 1228.8 750.592 1228.8 483.6352c0-80.9472-25.4464-157.1328-70.0416-224.1024l-604.9792 436.992-4.4544 2.4064a42.1376 42.1376 0 0 1-18.432 4.1984z",fill:"#15BA11"})}),t.jsx("div",{children:"微信支付"}),t.jsx("div",{children:"|"}),t.jsx("div",{children:"转账支付"})]}),t.jsxs(ie,{className:"items-center justify-between flex-col md:flex-row",children:[t.jsxs("div",{children:[t.jsx("img",{src:vA[n],alt:"",width:"250",height:"250"}),t.jsx("div",{})]}),t.jsx("div",{className:"w-48 md:w-0 border-t my-16 md:border-l border-gray-300 md:h-48 border-dashed"}),t.jsxs("div",{className:"pl-10",children:[t.jsxs("div",{children:["您正在购买 React 19 ",jA[n]]}),t.jsxs(ie,{className:"items-center",children:["￥",t.jsx("div",{className:"",style:{fontSize:64},children:n})]}),t.jsxs("div",{className:"mt-4",children:[t.jsx("span",{className:"text-gray-400",children:"收款方："}),"这波能反杀"]}),t.jsxs("div",{className:"mt-2",children:[t.jsx("span",{className:"text-gray-400",children:"微信号："}),"icanmeetu"]}),t.jsxs("div",{className:"mt-2",children:[t.jsx("span",{className:"text-gray-400",children:"激活码："}),"私信我获得激活码"]})]})]})]})}function yA(){return t.jsxs("div",{children:[t.jsx(Hb,{className:"line"}),t.jsx(T2,{})]})}function NA(){return t.jsx(O2,{children:t.jsxs(jn,{path:"/",element:t.jsx(yA,{}),children:[t.jsx(jn,{index:!0,element:t.jsx(q4,{})}),t.jsx(jn,{path:"tutorial",element:t.jsx(_9,{}),children:M1.filter(n=>!!n.path).map((n,e)=>t.jsx(jn,{path:n.path,element:t.jsx(u.Suspense,{fallback:t.jsx(Ji,{}),children:t.jsx(n.component,{})})},n.path))}),t.jsx(jn,{path:"component",element:t.jsx(B9,{}),children:R1.filter(n=>!!n.path).map((n,e)=>t.jsx(jn,{path:n.path,element:t.jsx(u.Suspense,{fallback:t.jsx(Ji,{}),children:t.jsx(n.component,{})})},n.path))}),t.jsx(jn,{path:"advance",element:t.jsx(hA,{}),children:H1.filter(n=>!!n.path).map((n,e)=>t.jsx(jn,{path:n.path,element:t.jsx(u.Suspense,{fallback:t.jsx(Ji,{}),children:t.jsx(n.component,{})})},n.path))}),t.jsx(jn,{path:"pay",element:t.jsx(bA,{})}),t.jsx(jn,{path:"*",element:t.jsx("div",{className:"p-32",children:"暂无内容"})})]})})}Yv.createRoot(document.getElementById("root")).render(t.jsx(u.StrictMode,{children:t.jsx(X2,{children:t.jsx(NA,{})})}));
