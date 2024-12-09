function rg(n,e){for(var s=0;s<e.length;s++){const r=e[s];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in n)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(n,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}})();function yh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Nh={exports:{}},Il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag=Symbol.for("react.transitional.element"),lg=Symbol.for("react.fragment");function wh(n,e,s){var r=null;if(s!==void 0&&(r=""+s),e.key!==void 0&&(r=""+e.key),"key"in e){s={};for(var a in e)a!=="key"&&(s[a]=e[a])}else s=e;return e=s.ref,{$$typeof:ag,type:n,key:r,ref:e!==void 0?e:null,props:s}}Il.Fragment=lg;Il.jsx=wh;Il.jsxs=wh;Nh.exports=Il;var t=Nh.exports,Sh={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.transitional.element"),ig=Symbol.for("react.portal"),cg=Symbol.for("react.fragment"),og=Symbol.for("react.strict_mode"),dg=Symbol.for("react.profiler"),ug=Symbol.for("react.consumer"),mg=Symbol.for("react.context"),pg=Symbol.for("react.forward_ref"),hg=Symbol.for("react.suspense"),fg=Symbol.for("react.memo"),kh=Symbol.for("react.lazy"),Pd=Symbol.iterator;function xg(n){return n===null||typeof n!="object"?null:(n=Pd&&n[Pd]||n["@@iterator"],typeof n=="function"?n:null)}var Ch={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_h=Object.assign,Ah={};function lr(n,e,s){this.props=n,this.context=e,this.refs=Ah,this.updater=s||Ch}lr.prototype.isReactComponent={};lr.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};lr.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Rh(){}Rh.prototype=lr.prototype;function wo(n,e,s){this.props=n,this.context=e,this.refs=Ah,this.updater=s||Ch}var So=wo.prototype=new Rh;So.constructor=wo;_h(So,lr.prototype);So.isPureReactComponent=!0;var Id=Array.isArray,fe={H:null,A:null,T:null,S:null},Mh=Object.prototype.hasOwnProperty;function ko(n,e,s,r,a,l){return s=l.ref,{$$typeof:No,type:n,key:e,ref:s!==void 0?s:null,props:l}}function gg(n,e){return ko(n.type,e,void 0,void 0,void 0,n.props)}function Co(n){return typeof n=="object"&&n!==null&&n.$$typeof===No}function jg(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(s){return e[s]})}var Qd=/\/+/g;function vi(n,e){return typeof n=="object"&&n!==null&&n.key!=null?jg(""+n.key):e.toString(36)}function Wd(){}function vg(n){switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:switch(typeof n.status=="string"?n.then(Wd,Wd):(n.status="pending",n.then(function(e){n.status==="pending"&&(n.status="fulfilled",n.value=e)},function(e){n.status==="pending"&&(n.status="rejected",n.reason=e)})),n.status){case"fulfilled":return n.value;case"rejected":throw n.reason}}throw n}function ws(n,e,s,r,a){var l=typeof n;(l==="undefined"||l==="boolean")&&(n=null);var i=!1;if(n===null)i=!0;else switch(l){case"bigint":case"string":case"number":i=!0;break;case"object":switch(n.$$typeof){case No:case ig:i=!0;break;case kh:return i=n._init,ws(i(n._payload),e,s,r,a)}}if(i)return a=a(n),i=r===""?"."+vi(n,0):r,Id(a)?(s="",i!=null&&(s=i.replace(Qd,"$&/")+"/"),ws(a,e,s,"",function(d){return d})):a!=null&&(Co(a)&&(a=gg(a,s+(a.key==null||n&&n.key===a.key?"":(""+a.key).replace(Qd,"$&/")+"/")+i)),e.push(a)),1;i=0;var c=r===""?".":r+":";if(Id(n))for(var o=0;o<n.length;o++)r=n[o],l=c+vi(r,o),i+=ws(r,e,s,l,a);else if(o=xg(n),typeof o=="function")for(n=o.call(n),o=0;!(r=n.next()).done;)r=r.value,l=c+vi(r,o++),i+=ws(r,e,s,l,a);else if(l==="object"){if(typeof n.then=="function")return ws(vg(n),e,s,r,a);throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return i}function Da(n,e,s){if(n==null)return n;var r=[],a=0;return ws(n,r,"","",function(l){return e.call(s,l,a++)}),r}function bg(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(s){(n._status===0||n._status===-1)&&(n._status=1,n._result=s)},function(s){(n._status===0||n._status===-1)&&(n._status=2,n._result=s)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Jd=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function yg(){}Z.Children={map:Da,forEach:function(n,e,s){Da(n,function(){e.apply(this,arguments)},s)},count:function(n){var e=0;return Da(n,function(){e++}),e},toArray:function(n){return Da(n,function(e){return e})||[]},only:function(n){if(!Co(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Z.Component=lr;Z.Fragment=cg;Z.Profiler=dg;Z.PureComponent=wo;Z.StrictMode=og;Z.Suspense=hg;Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fe;Z.act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.cache=function(n){return function(){return n.apply(null,arguments)}};Z.cloneElement=function(n,e,s){if(n==null)throw Error("The argument must be a React element, but you passed "+n+".");var r=_h({},n.props),a=n.key,l=void 0;if(e!=null)for(i in e.ref!==void 0&&(l=void 0),e.key!==void 0&&(a=""+e.key),e)!Mh.call(e,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&e.ref===void 0||(r[i]=e[i]);var i=arguments.length-2;if(i===1)r.children=s;else if(1<i){for(var c=Array(i),o=0;o<i;o++)c[o]=arguments[o+2];r.children=c}return ko(n.type,a,void 0,void 0,l,r)};Z.createContext=function(n){return n={$$typeof:mg,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null},n.Provider=n,n.Consumer={$$typeof:ug,_context:n},n};Z.createElement=function(n,e,s){var r,a={},l=null;if(e!=null)for(r in e.key!==void 0&&(l=""+e.key),e)Mh.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(a[r]=e[r]);var i=arguments.length-2;if(i===1)a.children=s;else if(1<i){for(var c=Array(i),o=0;o<i;o++)c[o]=arguments[o+2];a.children=c}if(n&&n.defaultProps)for(r in i=n.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return ko(n,l,void 0,void 0,null,a)};Z.createRef=function(){return{current:null}};Z.forwardRef=function(n){return{$$typeof:pg,render:n}};Z.isValidElement=Co;Z.lazy=function(n){return{$$typeof:kh,_payload:{_status:-1,_result:n},_init:bg}};Z.memo=function(n,e){return{$$typeof:fg,type:n,compare:e===void 0?null:e}};Z.startTransition=function(n){var e=fe.T,s={};fe.T=s;try{var r=n(),a=fe.S;a!==null&&a(s,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(yg,Jd)}catch(l){Jd(l)}finally{fe.T=e}};Z.unstable_useCacheRefresh=function(){return fe.H.useCacheRefresh()};Z.use=function(n){return fe.H.use(n)};Z.useActionState=function(n,e,s){return fe.H.useActionState(n,e,s)};Z.useCallback=function(n,e){return fe.H.useCallback(n,e)};Z.useContext=function(n){return fe.H.useContext(n)};Z.useDebugValue=function(){};Z.useDeferredValue=function(n,e){return fe.H.useDeferredValue(n,e)};Z.useEffect=function(n,e){return fe.H.useEffect(n,e)};Z.useId=function(){return fe.H.useId()};Z.useImperativeHandle=function(n,e,s){return fe.H.useImperativeHandle(n,e,s)};Z.useInsertionEffect=function(n,e){return fe.H.useInsertionEffect(n,e)};Z.useLayoutEffect=function(n,e){return fe.H.useLayoutEffect(n,e)};Z.useMemo=function(n,e){return fe.H.useMemo(n,e)};Z.useOptimistic=function(n,e){return fe.H.useOptimistic(n,e)};Z.useReducer=function(n,e,s){return fe.H.useReducer(n,e,s)};Z.useRef=function(n){return fe.H.useRef(n)};Z.useState=function(n){return fe.H.useState(n)};Z.useSyncExternalStore=function(n,e,s){return fe.H.useSyncExternalStore(n,e,s)};Z.useTransition=function(){return fe.H.useTransition()};Z.version="19.0.0";Sh.exports=Z;var m=Sh.exports;const Pn=yh(m),Ng=rg({__proto__:null,default:Pn},[m]);var $h={exports:{}},Ql={},Lh={exports:{}},Eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(A,O){var T=A.length;A.push(O);e:for(;0<T;){var Y=T-1>>>1,K=A[Y];if(0<a(K,O))A[Y]=O,A[T]=K,T=Y;else break e}}function s(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var O=A[0],T=A.pop();if(T!==O){A[0]=T;e:for(var Y=0,K=A.length,Te=K>>>1;Y<Te;){var Ve=2*(Y+1)-1,k=A[Ve],M=Ve+1,H=A[M];if(0>a(k,T))M<K&&0>a(H,k)?(A[Y]=H,A[M]=T,Y=M):(A[Y]=k,A[Ve]=T,Y=Ve);else if(M<K&&0>a(H,T))A[Y]=H,A[M]=T,Y=M;else break e}}return O}function a(A,O){var T=A.sortIndex-O.sortIndex;return T!==0?T:A.id-O.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var i=Date,c=i.now();n.unstable_now=function(){return i.now()-c}}var o=[],d=[],u=1,p=null,h=3,j=!1,y=!1,b=!1,w=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;function g(A){for(var O=s(d);O!==null;){if(O.callback===null)r(d);else if(O.startTime<=A)r(d),O.sortIndex=O.expirationTime,e(o,O);else break;O=s(d)}}function v(A){if(b=!1,g(A),!y)if(s(o)!==null)y=!0,qe();else{var O=s(d);O!==null&&ve(v,O.startTime-A)}}var S=!1,R=-1,C=5,$=-1;function Q(){return!(n.unstable_now()-$<C)}function B(){if(S){var A=n.unstable_now();$=A;var O=!0;try{e:{y=!1,b&&(b=!1,x(R),R=-1),j=!0;var T=h;try{n:{for(g(A),p=s(o);p!==null&&!(p.expirationTime>A&&Q());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,h=p.priorityLevel;var K=Y(p.expirationTime<=A);if(A=n.unstable_now(),typeof K=="function"){p.callback=K,g(A),O=!0;break n}p===s(o)&&r(o),g(A)}else r(o);p=s(o)}if(p!==null)O=!0;else{var Te=s(d);Te!==null&&ve(v,Te.startTime-A),O=!1}}break e}finally{p=null,h=T,j=!1}O=void 0}}finally{O?oe():S=!1}}}var oe;if(typeof f=="function")oe=function(){f(B)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,an=X.port2;X.port1.onmessage=B,oe=function(){an.postMessage(null)}}else oe=function(){w(B,0)};function qe(){S||(S=!0,oe())}function ve(A,O){R=w(function(){A(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(A){A.callback=null},n.unstable_continueExecution=function(){y||j||(y=!0,qe())},n.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<A?Math.floor(1e3/A):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return s(o)},n.unstable_next=function(A){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var T=h;h=O;try{return A()}finally{h=T}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(A,O){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var T=h;h=A;try{return O()}finally{h=T}},n.unstable_scheduleCallback=function(A,O,T){var Y=n.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Y+T:Y):T=Y,A){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=T+K,A={id:u++,callback:O,priorityLevel:A,startTime:T,expirationTime:K,sortIndex:-1},T>Y?(A.sortIndex=T,e(d,A),s(o)===null&&A===s(d)&&(b?(x(R),R=-1):b=!0,ve(v,T-Y))):(A.sortIndex=K,e(o,A),y||j||(y=!0,qe())),A},n.unstable_shouldYield=Q,n.unstable_wrapCallback=function(A){var O=h;return function(){var T=h;h=O;try{return A.apply(this,arguments)}finally{h=T}}}})(Eh);Lh.exports=Eh;var wg=Lh.exports,Th={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg=m;function Dh(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)e+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ut(){}var Ge={d:{f:ut,r:function(){throw Error(Dh(522))},D:ut,C:ut,L:ut,m:ut,X:ut,S:ut,M:ut},p:0,findDOMNode:null},kg=Symbol.for("react.portal");function Cg(n,e,s){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kg,key:r==null?null:""+r,children:n,containerInfo:e,implementation:s}}var Lr=Sg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Wl(n,e){if(n==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ge;Fe.createPortal=function(n,e){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Dh(299));return Cg(n,e,null,s)};Fe.flushSync=function(n){var e=Lr.T,s=Ge.p;try{if(Lr.T=null,Ge.p=2,n)return n()}finally{Lr.T=e,Ge.p=s,Ge.d.f()}};Fe.preconnect=function(n,e){typeof n=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Ge.d.C(n,e))};Fe.prefetchDNS=function(n){typeof n=="string"&&Ge.d.D(n)};Fe.preinit=function(n,e){if(typeof n=="string"&&e&&typeof e.as=="string"){var s=e.as,r=Wl(s,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,l=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;s==="style"?Ge.d.S(n,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:l}):s==="script"&&Ge.d.X(n,{crossOrigin:r,integrity:a,fetchPriority:l,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Fe.preinitModule=function(n,e){if(typeof n=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var s=Wl(e.as,e.crossOrigin);Ge.d.M(n,{crossOrigin:s,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Ge.d.M(n)};Fe.preload=function(n,e){if(typeof n=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var s=e.as,r=Wl(s,e.crossOrigin);Ge.d.L(n,s,{crossOrigin:r,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Fe.preloadModule=function(n,e){if(typeof n=="string")if(e){var s=Wl(e.as,e.crossOrigin);Ge.d.m(n,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:s,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Ge.d.m(n)};Fe.requestFormReset=function(n){Ge.d.r(n)};Fe.unstable_batchedUpdates=function(n,e){return n(e)};Fe.useFormState=function(n,e,s){return Lr.H.useFormState(n,e,s)};Fe.useFormStatus=function(){return Lr.H.useHostTransitionStatus()};Fe.version="19.0.0";function Oh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oh)}catch(n){console.error(n)}}Oh(),Th.exports=Fe;var xa=Th.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re=wg,Bh=m,_g=xa;function N(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)e+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function zh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var Ag=Symbol.for("react.element"),Oa=Symbol.for("react.transitional.element"),_r=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),Uh=Symbol.for("react.strict_mode"),gc=Symbol.for("react.profiler"),Rg=Symbol.for("react.provider"),Hh=Symbol.for("react.consumer"),Jn=Symbol.for("react.context"),_o=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),vc=Symbol.for("react.suspense_list"),Ao=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),qh=Symbol.for("react.offscreen"),Mg=Symbol.for("react.memo_cache_sentinel"),Kd=Symbol.iterator;function gr(n){return n===null||typeof n!="object"?null:(n=Kd&&n[Kd]||n["@@iterator"],typeof n=="function"?n:null)}var $g=Symbol.for("react.client.reference");function bc(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===$g?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _s:return"Fragment";case _r:return"Portal";case gc:return"Profiler";case Uh:return"StrictMode";case jc:return"Suspense";case vc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Jn:return(n.displayName||"Context")+".Provider";case Hh:return(n._context.displayName||"Context")+".Consumer";case _o:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ao:return e=n.displayName||null,e!==null?e:bc(n.type)||"Memo";case gt:e=n._payload,n=n._init;try{return bc(n(e))}catch{}}return null}var q=Bh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me=Object.assign,bi,eu;function Ar(n){if(bi===void 0)try{throw Error()}catch(s){var e=s.stack.trim().match(/\n( *(at )?)/);bi=e&&e[1]||"",eu=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bi+n+eu}var yi=!1;function Ni(n,e){if(!n||yi)return"";yi=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(j){var h=j}Reflect.construct(n,[],p)}else{try{p.call()}catch(j){h=j}n.call(p.prototype)}}else{try{throw Error()}catch(j){h=j}(p=n())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(j){if(j&&h&&typeof j.stack=="string")return[j.stack,h.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=r.DetermineComponentFrameRoot(),i=l[0],c=l[1];if(i&&c){var o=i.split(`
`),d=c.split(`
`);for(a=r=0;r<o.length&&!o[r].includes("DetermineComponentFrameRoot");)r++;for(;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;if(r===o.length||a===d.length)for(r=o.length-1,a=d.length-1;1<=r&&0<=a&&o[r]!==d[a];)a--;for(;1<=r&&0<=a;r--,a--)if(o[r]!==d[a]){if(r!==1||a!==1)do if(r--,a--,0>a||o[r]!==d[a]){var u=`
`+o[r].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=r&&0<=a);break}}}finally{yi=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Ar(s):""}function Lg(n){switch(n.tag){case 26:case 27:case 5:return Ar(n.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 15:return n=Ni(n.type,!1),n;case 11:return n=Ni(n.type.render,!1),n;case 1:return n=Ni(n.type,!0),n;default:return""}}function nu(n){try{var e="";do e+=Lg(n),n=n.return;while(n);return e}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ir(n){var e=n,s=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(s=e.return),n=e.return;while(n)}return e.tag===3?s:null}function Vh(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function tu(n){if(ir(n)!==n)throw Error(N(188))}function Eg(n){var e=n.alternate;if(!e){if(e=ir(n),e===null)throw Error(N(188));return e!==n?null:n}for(var s=n,r=e;;){var a=s.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){s=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===s)return tu(a),n;if(l===r)return tu(a),e;l=l.sibling}throw Error(N(188))}if(s.return!==r.return)s=a,r=l;else{for(var i=!1,c=a.child;c;){if(c===s){i=!0,s=a,r=l;break}if(c===r){i=!0,r=a,s=l;break}c=c.sibling}if(!i){for(c=l.child;c;){if(c===s){i=!0,s=l,r=a;break}if(c===r){i=!0,r=l,s=a;break}c=c.sibling}if(!i)throw Error(N(189))}}if(s.alternate!==r)throw Error(N(190))}if(s.tag!==3)throw Error(N(188));return s.stateNode.current===s?n:e}function Xh(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=Xh(n),e!==null)return e;n=n.sibling}return null}var Rr=Array.isArray,ue=_g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Kt={pending:!1,data:null,method:null,action:null},yc=[],As=-1;function Un(n){return{current:n}}function Ee(n){0>As||(n.current=yc[As],yc[As]=null,As--)}function pe(n,e){As++,yc[As]=n.current,n.current=e}var Dn=Un(null),Ir=Un(null),_t=Un(null),xl=Un(null);function gl(n,e){switch(pe(_t,e),pe(Ir,n),pe(Dn,null),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?sm(e):0;break;default:if(n=n===8?e.parentNode:e,e=n.tagName,n=n.namespaceURI)n=sm(n),e=t0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ee(Dn),pe(Dn,e)}function Ps(){Ee(Dn),Ee(Ir),Ee(_t)}function Nc(n){n.memoizedState!==null&&pe(xl,n);var e=Dn.current,s=t0(e,n.type);e!==s&&(pe(Ir,n),pe(Dn,s))}function jl(n){Ir.current===n&&(Ee(Dn),Ee(Ir)),xl.current===n&&(Ee(xl),la._currentValue=Kt)}var wc=Object.prototype.hasOwnProperty,Ro=Re.unstable_scheduleCallback,wi=Re.unstable_cancelCallback,Tg=Re.unstable_shouldYield,Dg=Re.unstable_requestPaint,On=Re.unstable_now,Og=Re.unstable_getCurrentPriorityLevel,Zh=Re.unstable_ImmediatePriority,Gh=Re.unstable_UserBlockingPriority,vl=Re.unstable_NormalPriority,Bg=Re.unstable_LowPriority,Yh=Re.unstable_IdlePriority,zg=Re.log,Ug=Re.unstable_setDisableYieldValue,ga=null,nn=null;function Hg(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(ga,n,void 0,(n.current.flags&128)===128)}catch{}}function wt(n){if(typeof zg=="function"&&Ug(n),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(ga,n)}catch{}}var tn=Math.clz32?Math.clz32:Xg,qg=Math.log,Vg=Math.LN2;function Xg(n){return n>>>=0,n===0?32:31-(qg(n)/Vg|0)|0}var Ba=128,za=4194304;function Ft(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Jl(n,e){var s=n.pendingLanes;if(s===0)return 0;var r=0,a=n.suspendedLanes,l=n.pingedLanes,i=n.warmLanes;n=n.finishedLanes!==0;var c=s&134217727;return c!==0?(s=c&~a,s!==0?r=Ft(s):(l&=c,l!==0?r=Ft(l):n||(i=c&~i,i!==0&&(r=Ft(i))))):(c=s&~a,c!==0?r=Ft(c):l!==0?r=Ft(l):n||(i=s&~i,i!==0&&(r=Ft(i)))),r===0?0:e!==0&&e!==r&&!(e&a)&&(a=r&-r,i=e&-e,a>=i||a===32&&(i&4194176)!==0)?e:r}function ja(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function Zg(n,e){switch(n){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fh(){var n=Ba;return Ba<<=1,!(Ba&4194176)&&(Ba=128),n}function Ph(){var n=za;return za<<=1,!(za&62914560)&&(za=4194304),n}function Si(n){for(var e=[],s=0;31>s;s++)e.push(n);return e}function va(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Gg(n,e,s,r,a,l){var i=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var c=n.entanglements,o=n.expirationTimes,d=n.hiddenUpdates;for(s=i&~s;0<s;){var u=31-tn(s),p=1<<u;c[u]=0,o[u]=-1;var h=d[u];if(h!==null)for(d[u]=null,u=0;u<h.length;u++){var j=h[u];j!==null&&(j.lane&=-536870913)}s&=~p}r!==0&&Ih(n,r,0),l!==0&&a===0&&n.tag!==0&&(n.suspendedLanes|=l&~(i&~e))}function Ih(n,e,s){n.pendingLanes|=e,n.suspendedLanes&=~e;var r=31-tn(e);n.entangledLanes|=e,n.entanglements[r]=n.entanglements[r]|1073741824|s&4194218}function Qh(n,e){var s=n.entangledLanes|=e;for(n=n.entanglements;s;){var r=31-tn(s),a=1<<r;a&e|n[r]&e&&(n[r]|=e),s&=~a}}function Wh(n){return n&=-n,2<n?8<n?n&134217727?32:268435456:8:2}function Jh(){var n=ue.p;return n!==0?n:(n=window.event,n===void 0?32:m0(n.type))}function Yg(n,e){var s=ue.p;try{return ue.p=n,e()}finally{ue.p=s}}var Ht=Math.random().toString(36).slice(2),ze="__reactFiber$"+Ht,Qe="__reactProps$"+Ht,cr="__reactContainer$"+Ht,Sc="__reactEvents$"+Ht,Fg="__reactListeners$"+Ht,Pg="__reactHandles$"+Ht,su="__reactResources$"+Ht,Qr="__reactMarker$"+Ht;function Mo(n){delete n[ze],delete n[Qe],delete n[Sc],delete n[Fg],delete n[Pg]}function Qt(n){var e=n[ze];if(e)return e;for(var s=n.parentNode;s;){if(e=s[cr]||s[ze]){if(s=e.alternate,e.child!==null||s!==null&&s.child!==null)for(n=am(n);n!==null;){if(s=n[ze])return s;n=am(n)}return e}n=s,s=n.parentNode}return null}function or(n){if(n=n[ze]||n[cr]){var e=n.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return n}return null}function Mr(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(N(33))}function Us(n){var e=n[su];return e||(e=n[su]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function $e(n){n[Qr]=!0}var Kh=new Set,ef={};function ds(n,e){Is(n,e),Is(n+"Capture",e)}function Is(n,e){for(ef[n]=e,n=0;n<e.length;n++)Kh.add(e[n])}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ig=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ru={},au={};function Qg(n){return wc.call(au,n)?!0:wc.call(ru,n)?!1:Ig.test(n)?au[n]=!0:(ru[n]=!0,!1)}function nl(n,e,s){if(Qg(e))if(s===null)n.removeAttribute(e);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+s)}}function Ua(n,e,s){if(s===null)n.removeAttribute(e);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+s)}}function Xn(n,e,s,r){if(r===null)n.removeAttribute(s);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(e,s,""+r)}}function un(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function nf(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wg(n){var e=nf(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,l=s.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(n,e,{enumerable:s.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function bl(n){n._valueTracker||(n._valueTracker=Wg(n))}function tf(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var s=e.getValue(),r="";return n&&(r=nf(n)?n.checked?"true":"false":n.value),n=r,n!==s?(e.setValue(n),!0):!1}function yl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Jg=/[\n"\\]/g;function hn(n){return n.replace(Jg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function kc(n,e,s,r,a,l,i,c){n.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?n.type=i:n.removeAttribute("type"),e!=null?i==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+un(e)):n.value!==""+un(e)&&(n.value=""+un(e)):i!=="submit"&&i!=="reset"||n.removeAttribute("value"),e!=null?Cc(n,i,un(e)):s!=null?Cc(n,i,un(s)):r!=null&&n.removeAttribute("value"),a==null&&l!=null&&(n.defaultChecked=!!l),a!=null&&(n.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+un(c):n.removeAttribute("name")}function sf(n,e,s,r,a,l,i,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||s!=null){if(!(l!=="submit"&&l!=="reset"||e!=null))return;s=s!=null?""+un(s):"",e=e!=null?""+un(e):s,c||e===n.value||(n.value=e),n.defaultValue=e}r=r??a,r=typeof r!="function"&&typeof r!="symbol"&&!!r,n.checked=c?n.checked:!!r,n.defaultChecked=!!r,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.name=i)}function Cc(n,e,s){e==="number"&&yl(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Hs(n,e,s,r){if(n=n.options,e){e={};for(var a=0;a<s.length;a++)e["$"+s[a]]=!0;for(s=0;s<n.length;s++)a=e.hasOwnProperty("$"+n[s].value),n[s].selected!==a&&(n[s].selected=a),a&&r&&(n[s].defaultSelected=!0)}else{for(s=""+un(s),e=null,a=0;a<n.length;a++){if(n[a].value===s){n[a].selected=!0,r&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function rf(n,e,s){if(e!=null&&(e=""+un(e),e!==n.value&&(n.value=e),s==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=s!=null?""+un(s):""}function af(n,e,s,r){if(e==null){if(r!=null){if(s!=null)throw Error(N(92));if(Rr(r)){if(1<r.length)throw Error(N(93));r=r[0]}s=r}s==null&&(s=""),e=s}s=un(e),n.defaultValue=s,r=n.textContent,r===s&&r!==""&&r!==null&&(n.value=r)}function Qs(n,e){if(e){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=e;return}}n.textContent=e}var Kg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lu(n,e,s){var r=e.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?r?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":r?n.setProperty(e,s):typeof s!="number"||s===0||Kg.has(e)?e==="float"?n.cssFloat=s:n[e]=(""+s).trim():n[e]=s+"px"}function lf(n,e,s){if(e!=null&&typeof e!="object")throw Error(N(62));if(n=n.style,s!=null){for(var r in s)!s.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="");for(var a in e)r=e[a],e.hasOwnProperty(a)&&s[a]!==r&&lu(n,a,r)}else for(var l in e)e.hasOwnProperty(l)&&lu(n,l,e[l])}function $o(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ej=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nj=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(n){return nj.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var _c=null;function Lo(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Rs=null,qs=null;function iu(n){var e=or(n);if(e&&(n=e.stateNode)){var s=n[Qe]||null;e:switch(n=e.stateNode,e.type){case"input":if(kc(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),e=s.name,s.type==="radio"&&e!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+hn(""+e)+'"][type="radio"]'),e=0;e<s.length;e++){var r=s[e];if(r!==n&&r.form===n.form){var a=r[Qe]||null;if(!a)throw Error(N(90));kc(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<s.length;e++)r=s[e],r.form===n.form&&tf(r)}break e;case"textarea":rf(n,s.value,s.defaultValue);break e;case"select":e=s.value,e!=null&&Hs(n,!!s.multiple,e,!1)}}}var ki=!1;function cf(n,e,s){if(ki)return n(e,s);ki=!0;try{var r=n(e);return r}finally{if(ki=!1,(Rs!==null||qs!==null)&&(ci(),Rs&&(e=Rs,n=qs,qs=Rs=null,iu(e),n)))for(e=0;e<n.length;e++)iu(n[e])}}function Wr(n,e){var s=n.stateNode;if(s===null)return null;var r=s[Qe]||null;if(r===null)return null;s=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(N(231,e,typeof s));return s}var Ac=!1;if(rt)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Ac=!1}var St=null,Eo=null,sl=null;function of(){if(sl)return sl;var n,e=Eo,s=e.length,r,a="value"in St?St.value:St.textContent,l=a.length;for(n=0;n<s&&e[n]===a[n];n++);var i=s-n;for(r=1;r<=i&&e[s-r]===a[l-r];r++);return sl=a.slice(n,1<r?1-r:void 0)}function rl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ha(){return!0}function cu(){return!1}function We(n){function e(s,r,a,l,i){this._reactName=s,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(s=n[c],this[c]=s?s(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ha:cu,this.isPropagationStopped=cu,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=We(us),ba=me({},us,{view:0,detail:0}),tj=We(ba),Ci,_i,vr,ei=me({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:To,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vr&&(vr&&n.type==="mousemove"?(Ci=n.screenX-vr.screenX,_i=n.screenY-vr.screenY):_i=Ci=0,vr=n),Ci)},movementY:function(n){return"movementY"in n?n.movementY:_i}}),ou=We(ei),sj=me({},ei,{dataTransfer:0}),rj=We(sj),aj=me({},ba,{relatedTarget:0}),Ai=We(aj),lj=me({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),ij=We(lj),cj=me({},us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),oj=We(cj),dj=me({},us,{data:0}),du=We(dj),uj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hj(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=pj[n])?!!e[n]:!1}function To(){return hj}var fj=me({},ba,{key:function(n){if(n.key){var e=uj[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=rl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?mj[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:To,charCode:function(n){return n.type==="keypress"?rl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?rl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xj=We(fj),gj=me({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uu=We(gj),jj=me({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:To}),vj=We(jj),bj=me({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),yj=We(bj),Nj=me({},ei,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wj=We(Nj),Sj=me({},us,{newState:0,oldState:0}),kj=We(Sj),Cj=[9,13,27,32],Do=rt&&"CompositionEvent"in window,Er=null;rt&&"documentMode"in document&&(Er=document.documentMode);var _j=rt&&"TextEvent"in window&&!Er,df=rt&&(!Do||Er&&8<Er&&11>=Er),mu=" ",pu=!1;function uf(n,e){switch(n){case"keyup":return Cj.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ms=!1;function Aj(n,e){switch(n){case"compositionend":return mf(e);case"keypress":return e.which!==32?null:(pu=!0,mu);case"textInput":return n=e.data,n===mu&&pu?null:n;default:return null}}function Rj(n,e){if(Ms)return n==="compositionend"||!Do&&uf(n,e)?(n=of(),sl=Eo=St=null,Ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return df&&e.locale!=="ko"?null:e.data;default:return null}}var Mj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hu(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Mj[n.type]:e==="textarea"}function pf(n,e,s,r){Rs?qs?qs.push(r):qs=[r]:Rs=r,e=Bl(e,"onChange"),0<e.length&&(s=new Kl("onChange","change",null,s,r),n.push({event:s,listeners:e}))}var Tr=null,Jr=null;function $j(n){Kx(n,0)}function ni(n){var e=Mr(n);if(tf(e))return n}function fu(n,e){if(n==="change")return e}var hf=!1;if(rt){var Ri;if(rt){var Mi="oninput"in document;if(!Mi){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),Mi=typeof xu.oninput=="function"}Ri=Mi}else Ri=!1;hf=Ri&&(!document.documentMode||9<document.documentMode)}function gu(){Tr&&(Tr.detachEvent("onpropertychange",ff),Jr=Tr=null)}function ff(n){if(n.propertyName==="value"&&ni(Jr)){var e=[];pf(e,Jr,n,Lo(n)),cf($j,e)}}function Lj(n,e,s){n==="focusin"?(gu(),Tr=e,Jr=s,Tr.attachEvent("onpropertychange",ff)):n==="focusout"&&gu()}function Ej(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ni(Jr)}function Tj(n,e){if(n==="click")return ni(e)}function Dj(n,e){if(n==="input"||n==="change")return ni(e)}function Oj(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var rn=typeof Object.is=="function"?Object.is:Oj;function Kr(n,e){if(rn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var s=Object.keys(n),r=Object.keys(e);if(s.length!==r.length)return!1;for(r=0;r<s.length;r++){var a=s[r];if(!wc.call(e,a)||!rn(n[a],e[a]))return!1}return!0}function ju(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vu(n,e){var s=ju(n);n=0;for(var r;s;){if(s.nodeType===3){if(r=n+s.textContent.length,n<=e&&r>=e)return{node:s,offset:e-n};n=r}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=ju(s)}}function xf(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?xf(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function gf(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=yl(n.document);e instanceof n.HTMLIFrameElement;){try{var s=typeof e.contentWindow.location.href=="string"}catch{s=!1}if(s)n=e.contentWindow;else break;e=yl(n.document)}return e}function Oo(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Bj(n,e){var s=gf(e);e=n.focusedElem;var r=n.selectionRange;if(s!==e&&e&&e.ownerDocument&&xf(e.ownerDocument.documentElement,e)){if(r!==null&&Oo(e)){if(n=r.start,s=r.end,s===void 0&&(s=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(s,e.value.length);else if(s=(n=e.ownerDocument||document)&&n.defaultView||window,s.getSelection){s=s.getSelection();var a=e.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!s.extend&&l>r&&(a=r,r=l,l=a),a=vu(e,l);var i=vu(e,r);a&&i&&(s.rangeCount!==1||s.anchorNode!==a.node||s.anchorOffset!==a.offset||s.focusNode!==i.node||s.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),s.removeAllRanges(),l>r?(s.addRange(n),s.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),s.addRange(n)))}}for(n=[],s=e;s=s.parentNode;)s.nodeType===1&&n.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<n.length;e++)s=n[e],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var zj=rt&&"documentMode"in document&&11>=document.documentMode,$s=null,Rc=null,Dr=null,Mc=!1;function bu(n,e,s){var r=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Mc||$s==null||$s!==yl(r)||(r=$s,"selectionStart"in r&&Oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&Kr(Dr,r)||(Dr=r,r=Bl(Rc,"onSelect"),0<r.length&&(e=new Kl("onSelect","select",null,e,s),n.push({event:e,listeners:r}),e.target=$s)))}function Yt(n,e){var s={};return s[n.toLowerCase()]=e.toLowerCase(),s["Webkit"+n]="webkit"+e,s["Moz"+n]="moz"+e,s}var Ls={animationend:Yt("Animation","AnimationEnd"),animationiteration:Yt("Animation","AnimationIteration"),animationstart:Yt("Animation","AnimationStart"),transitionrun:Yt("Transition","TransitionRun"),transitionstart:Yt("Transition","TransitionStart"),transitioncancel:Yt("Transition","TransitionCancel"),transitionend:Yt("Transition","TransitionEnd")},$i={},jf={};rt&&(jf=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function ms(n){if($i[n])return $i[n];if(!Ls[n])return n;var e=Ls[n],s;for(s in e)if(e.hasOwnProperty(s)&&s in jf)return $i[n]=e[s];return n}var vf=ms("animationend"),bf=ms("animationiteration"),yf=ms("animationstart"),Uj=ms("transitionrun"),Hj=ms("transitionstart"),qj=ms("transitioncancel"),Nf=ms("transitionend"),wf=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Cn(n,e){wf.set(n,e),ds(e,[n])}var dn=[],Es=0,Bo=0;function ti(){for(var n=Es,e=Bo=Es=0;e<n;){var s=dn[e];dn[e++]=null;var r=dn[e];dn[e++]=null;var a=dn[e];dn[e++]=null;var l=dn[e];if(dn[e++]=null,r!==null&&a!==null){var i=r.pending;i===null?a.next=a:(a.next=i.next,i.next=a),r.pending=a}l!==0&&Sf(s,a,l)}}function si(n,e,s,r){dn[Es++]=n,dn[Es++]=e,dn[Es++]=s,dn[Es++]=r,Bo|=r,n.lanes|=r,n=n.alternate,n!==null&&(n.lanes|=r)}function zo(n,e,s,r){return si(n,e,s,r),Nl(n)}function Ot(n,e){return si(n,null,null,e),Nl(n)}function Sf(n,e,s){n.lanes|=s;var r=n.alternate;r!==null&&(r.lanes|=s);for(var a=!1,l=n.return;l!==null;)l.childLanes|=s,r=l.alternate,r!==null&&(r.childLanes|=s),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(a=!0)),n=l,l=l.return;a&&e!==null&&n.tag===3&&(l=n.stateNode,a=31-tn(s),l=l.hiddenUpdates,n=l[a],n===null?l[a]=[e]:n.push(e),e.lane=s|536870912)}function Nl(n){if(50<Fr)throw Fr=0,Jc=null,Error(N(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Ts={},Nu=new WeakMap;function fn(n,e){if(typeof n=="object"&&n!==null){var s=Nu.get(n);return s!==void 0?s:(e={value:n,source:e,stack:nu(e)},Nu.set(n,e),e)}return{value:n,source:e,stack:nu(e)}}var Ds=[],Os=0,wl=null,Sl=0,mn=[],pn=0,es=null,Kn=1,et="";function Pt(n,e){Ds[Os++]=Sl,Ds[Os++]=wl,wl=n,Sl=e}function kf(n,e,s){mn[pn++]=Kn,mn[pn++]=et,mn[pn++]=es,es=n;var r=Kn;n=et;var a=32-tn(r)-1;r&=~(1<<a),s+=1;var l=32-tn(e)+a;if(30<l){var i=a-a%5;l=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Kn=1<<32-tn(e)+a|s<<a|r,et=l+n}else Kn=1<<l|s<<a|r,et=n}function Uo(n){n.return!==null&&(Pt(n,1),kf(n,1,0))}function Ho(n){for(;n===wl;)wl=Ds[--Os],Ds[Os]=null,Sl=Ds[--Os],Ds[Os]=null;for(;n===es;)es=mn[--pn],mn[pn]=null,et=mn[--pn],mn[pn]=null,Kn=mn[--pn],mn[pn]=null}var Ze=null,Oe=null,ee=!1,Nn=null,$n=!1,$c=Error(N(519));function as(n){var e=Error(N(418,""));throw ea(fn(e,n)),$c}function wu(n){var e=n.stateNode,s=n.type,r=n.memoizedProps;switch(e[ze]=n,e[Qe]=r,s){case"dialog":W("cancel",e),W("close",e);break;case"iframe":case"object":case"embed":W("load",e);break;case"video":case"audio":for(s=0;s<sa.length;s++)W(sa[s],e);break;case"source":W("error",e);break;case"img":case"image":case"link":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"input":W("invalid",e),sf(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),bl(e);break;case"select":W("invalid",e);break;case"textarea":W("invalid",e),af(e,r.value,r.defaultValue,r.children),bl(e)}s=r.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||e.textContent===""+s||r.suppressHydrationWarning===!0||n0(e.textContent,s)?(r.popover!=null&&(W("beforetoggle",e),W("toggle",e)),r.onScroll!=null&&W("scroll",e),r.onScrollEnd!=null&&W("scrollend",e),r.onClick!=null&&(e.onclick=di),e=!0):e=!1,e||as(n)}function Su(n){for(Ze=n.return;Ze;)switch(Ze.tag){case 3:case 27:$n=!0;return;case 5:case 13:$n=!1;return;default:Ze=Ze.return}}function br(n){if(n!==Ze)return!1;if(!ee)return Su(n),ee=!0,!1;var e=!1,s;if((s=n.tag!==3&&n.tag!==27)&&((s=n.tag===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||ao(n.type,n.memoizedProps)),s=!s),s&&(e=!0),e&&Oe&&as(n),Su(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(N(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(e===0){Oe=Sn(n.nextSibling);break e}e--}else s!=="$"&&s!=="$!"&&s!=="$?"||e++;n=n.nextSibling}Oe=null}}else Oe=Ze?Sn(n.stateNode.nextSibling):null;return!0}function ya(){Oe=Ze=null,ee=!1}function ea(n){Nn===null?Nn=[n]:Nn.push(n)}var Or=Error(N(460)),Cf=Error(N(474)),Lc={then:function(){}};function ku(n){return n=n.status,n==="fulfilled"||n==="rejected"}function qa(){}function _f(n,e,s){switch(s=n[s],s===void 0?n.push(e):s!==e&&(e.then(qa,qa),e=s),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,n===Or?Error(N(483)):n;default:if(typeof e.status=="string")e.then(qa,qa);else{if(n=ce,n!==null&&100<n.shellSuspendCounter)throw Error(N(482));n=e,n.status="pending",n.then(function(r){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=r}},function(r){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,n===Or?Error(N(483)):n}throw Br=e,Or}}var Br=null;function Cu(){if(Br===null)throw Error(N(459));var n=Br;return Br=null,n}var Vs=null,na=0;function Va(n){var e=na;return na+=1,Vs===null&&(Vs=[]),_f(Vs,n,e)}function yr(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Xa(n,e){throw e.$$typeof===Ag?Error(N(525)):(n=Object.prototype.toString.call(e),Error(N(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function _u(n){var e=n._init;return e(n._payload)}function Af(n){function e(x,f){if(n){var g=x.deletions;g===null?(x.deletions=[f],x.flags|=16):g.push(f)}}function s(x,f){if(!n)return null;for(;f!==null;)e(x,f),f=f.sibling;return null}function r(x){for(var f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function a(x,f){return x=Mt(x,f),x.index=0,x.sibling=null,x}function l(x,f,g){return x.index=g,n?(g=x.alternate,g!==null?(g=g.index,g<f?(x.flags|=33554434,f):g):(x.flags|=33554434,f)):(x.flags|=1048576,f)}function i(x){return n&&x.alternate===null&&(x.flags|=33554434),x}function c(x,f,g,v){return f===null||f.tag!==6?(f=Xi(g,x.mode,v),f.return=x,f):(f=a(f,g),f.return=x,f)}function o(x,f,g,v){var S=g.type;return S===_s?u(x,f,g.props.children,v,g.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===gt&&_u(S)===f.type)?(f=a(f,g.props),yr(f,g),f.return=x,f):(f=ol(g.type,g.key,g.props,null,x.mode,v),yr(f,g),f.return=x,f)}function d(x,f,g,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Zi(g,x.mode,v),f.return=x,f):(f=a(f,g.children||[]),f.return=x,f)}function u(x,f,g,v,S){return f===null||f.tag!==7?(f=ts(g,x.mode,v,S),f.return=x,f):(f=a(f,g),f.return=x,f)}function p(x,f,g){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Xi(""+f,x.mode,g),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Oa:return g=ol(f.type,f.key,f.props,null,x.mode,g),yr(g,f),g.return=x,g;case _r:return f=Zi(f,x.mode,g),f.return=x,f;case gt:var v=f._init;return f=v(f._payload),p(x,f,g)}if(Rr(f)||gr(f))return f=ts(f,x.mode,g,null),f.return=x,f;if(typeof f.then=="function")return p(x,Va(f),g);if(f.$$typeof===Jn)return p(x,Za(x,f),g);Xa(x,f)}return null}function h(x,f,g,v){var S=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return S!==null?null:c(x,f,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oa:return g.key===S?o(x,f,g,v):null;case _r:return g.key===S?d(x,f,g,v):null;case gt:return S=g._init,g=S(g._payload),h(x,f,g,v)}if(Rr(g)||gr(g))return S!==null?null:u(x,f,g,v,null);if(typeof g.then=="function")return h(x,f,Va(g),v);if(g.$$typeof===Jn)return h(x,f,Za(x,g),v);Xa(x,g)}return null}function j(x,f,g,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return x=x.get(g)||null,c(f,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Oa:return x=x.get(v.key===null?g:v.key)||null,o(f,x,v,S);case _r:return x=x.get(v.key===null?g:v.key)||null,d(f,x,v,S);case gt:var R=v._init;return v=R(v._payload),j(x,f,g,v,S)}if(Rr(v)||gr(v))return x=x.get(g)||null,u(f,x,v,S,null);if(typeof v.then=="function")return j(x,f,g,Va(v),S);if(v.$$typeof===Jn)return j(x,f,g,Za(f,v),S);Xa(f,v)}return null}function y(x,f,g,v){for(var S=null,R=null,C=f,$=f=0,Q=null;C!==null&&$<g.length;$++){C.index>$?(Q=C,C=null):Q=C.sibling;var B=h(x,C,g[$],v);if(B===null){C===null&&(C=Q);break}n&&C&&B.alternate===null&&e(x,C),f=l(B,f,$),R===null?S=B:R.sibling=B,R=B,C=Q}if($===g.length)return s(x,C),ee&&Pt(x,$),S;if(C===null){for(;$<g.length;$++)C=p(x,g[$],v),C!==null&&(f=l(C,f,$),R===null?S=C:R.sibling=C,R=C);return ee&&Pt(x,$),S}for(C=r(C);$<g.length;$++)Q=j(C,x,$,g[$],v),Q!==null&&(n&&Q.alternate!==null&&C.delete(Q.key===null?$:Q.key),f=l(Q,f,$),R===null?S=Q:R.sibling=Q,R=Q);return n&&C.forEach(function(oe){return e(x,oe)}),ee&&Pt(x,$),S}function b(x,f,g,v){if(g==null)throw Error(N(151));for(var S=null,R=null,C=f,$=f=0,Q=null,B=g.next();C!==null&&!B.done;$++,B=g.next()){C.index>$?(Q=C,C=null):Q=C.sibling;var oe=h(x,C,B.value,v);if(oe===null){C===null&&(C=Q);break}n&&C&&oe.alternate===null&&e(x,C),f=l(oe,f,$),R===null?S=oe:R.sibling=oe,R=oe,C=Q}if(B.done)return s(x,C),ee&&Pt(x,$),S;if(C===null){for(;!B.done;$++,B=g.next())B=p(x,B.value,v),B!==null&&(f=l(B,f,$),R===null?S=B:R.sibling=B,R=B);return ee&&Pt(x,$),S}for(C=r(C);!B.done;$++,B=g.next())B=j(C,x,$,B.value,v),B!==null&&(n&&B.alternate!==null&&C.delete(B.key===null?$:B.key),f=l(B,f,$),R===null?S=B:R.sibling=B,R=B);return n&&C.forEach(function(X){return e(x,X)}),ee&&Pt(x,$),S}function w(x,f,g,v){if(typeof g=="object"&&g!==null&&g.type===_s&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Oa:e:{for(var S=g.key;f!==null;){if(f.key===S){if(S=g.type,S===_s){if(f.tag===7){s(x,f.sibling),v=a(f,g.props.children),v.return=x,x=v;break e}}else if(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===gt&&_u(S)===f.type){s(x,f.sibling),v=a(f,g.props),yr(v,g),v.return=x,x=v;break e}s(x,f);break}else e(x,f);f=f.sibling}g.type===_s?(v=ts(g.props.children,x.mode,v,g.key),v.return=x,x=v):(v=ol(g.type,g.key,g.props,null,x.mode,v),yr(v,g),v.return=x,x=v)}return i(x);case _r:e:{for(S=g.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){s(x,f.sibling),v=a(f,g.children||[]),v.return=x,x=v;break e}else{s(x,f);break}else e(x,f);f=f.sibling}v=Zi(g,x.mode,v),v.return=x,x=v}return i(x);case gt:return S=g._init,g=S(g._payload),w(x,f,g,v)}if(Rr(g))return y(x,f,g,v);if(gr(g)){if(S=gr(g),typeof S!="function")throw Error(N(150));return g=S.call(g),b(x,f,g,v)}if(typeof g.then=="function")return w(x,f,Va(g),v);if(g.$$typeof===Jn)return w(x,f,Za(x,g),v);Xa(x,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,f!==null&&f.tag===6?(s(x,f.sibling),v=a(f,g),v.return=x,x=v):(s(x,f),v=Xi(g,x.mode,v),v.return=x,x=v),i(x)):s(x,f)}return function(x,f,g,v){try{na=0;var S=w(x,f,g,v);return Vs=null,S}catch(C){if(C===Or)throw C;var R=xn(29,C,null,x.mode);return R.lanes=v,R.return=x,R}finally{}}}var ls=Af(!0),Rf=Af(!1),Ws=Un(null),kl=Un(0);function Au(n,e){n=it,pe(kl,n),pe(Ws,e),it=n|e.baseLanes}function Ec(){pe(kl,it),pe(Ws,Ws.current)}function qo(){it=kl.current,Ee(Ws),Ee(kl)}var jn=Un(null),Bn=null;function vt(n){var e=n.alternate;pe(Ae,Ae.current&1),pe(jn,n),Bn===null&&(e===null||Ws.current!==null||e.memoizedState!==null)&&(Bn=n)}function Mf(n){if(n.tag===22){if(pe(Ae,Ae.current),pe(jn,n),Bn===null){var e=n.alternate;e!==null&&e.memoizedState!==null&&(Bn=n)}}else bt()}function bt(){pe(Ae,Ae.current),pe(jn,jn.current)}function nt(n){Ee(jn),Bn===n&&(Bn=null),Ee(Ae)}var Ae=Un(0);function Cl(n){for(var e=n;e!==null;){if(e.tag===13){var s=e.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vj=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(s,r){n.push(r)}};this.abort=function(){e.aborted=!0,n.forEach(function(s){return s()})}},Xj=Re.unstable_scheduleCallback,Zj=Re.unstable_NormalPriority,_e={$$typeof:Jn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vo(){return{controller:new Vj,data:new Map,refCount:0}}function Na(n){n.refCount--,n.refCount===0&&Xj(Zj,function(){n.controller.abort()})}var zr=null,Tc=0,Js=0,Xs=null;function Gj(n,e){if(zr===null){var s=zr=[];Tc=0,Js=ud(),Xs={status:"pending",value:void 0,then:function(r){s.push(r)}}}return Tc++,e.then(Ru,Ru),e}function Ru(){if(--Tc===0&&zr!==null){Xs!==null&&(Xs.status="fulfilled");var n=zr;zr=null,Js=0,Xs=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Yj(n,e){var s=[],r={status:"pending",value:null,reason:null,then:function(a){s.push(a)}};return n.then(function(){r.status="fulfilled",r.value=e;for(var a=0;a<s.length;a++)(0,s[a])(e)},function(a){for(r.status="rejected",r.reason=a,a=0;a<s.length;a++)(0,s[a])(void 0)}),r}var Mu=q.S;q.S=function(n,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Gj(n,e),Mu!==null&&Mu(n,e)};var ns=Un(null);function Xo(){var n=ns.current;return n!==null?n:ce.pooledCache}function al(n,e){e===null?pe(ns,ns.current):pe(ns,e.pool)}function $f(){var n=Xo();return n===null?null:{parent:_e._currentValue,pool:n}}var Bt=0,G=null,re=null,ke=null,_l=!1,Zs=!1,is=!1,Al=0,ta=0,Gs=null,Fj=0;function be(){throw Error(N(321))}function Zo(n,e){if(e===null)return!1;for(var s=0;s<e.length&&s<n.length;s++)if(!rn(n[s],e[s]))return!1;return!0}function Go(n,e,s,r,a,l){return Bt=l,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,q.H=n===null||n.memoizedState===null?ps:qt,is=!1,l=s(r,a),is=!1,Zs&&(l=Ef(e,s,r,a)),Lf(n),l}function Lf(n){q.H=zn;var e=re!==null&&re.next!==null;if(Bt=0,ke=re=G=null,_l=!1,ta=0,Gs=null,e)throw Error(N(300));n===null||Le||(n=n.dependencies,n!==null&&$l(n)&&(Le=!0))}function Ef(n,e,s,r){G=n;var a=0;do{if(Zs&&(Gs=null),ta=0,Zs=!1,25<=a)throw Error(N(301));if(a+=1,ke=re=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}q.H=hs,l=e(s,r)}while(Zs);return l}function Pj(){var n=q.H,e=n.useState()[0];return e=typeof e.then=="function"?wa(e):e,n=n.useState()[0],(re!==null?re.memoizedState:null)!==n&&(G.flags|=1024),e}function Yo(){var n=Al!==0;return Al=0,n}function Fo(n,e,s){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~s}function Po(n){if(_l){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}_l=!1}Bt=0,ke=re=G=null,Zs=!1,ta=Al=0,Gs=null}function Ie(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?G.memoizedState=ke=n:ke=ke.next=n,ke}function Ce(){if(re===null){var n=G.alternate;n=n!==null?n.memoizedState:null}else n=re.next;var e=ke===null?G.memoizedState:ke.next;if(e!==null)ke=e,re=n;else{if(n===null)throw G.alternate===null?Error(N(467)):Error(N(310));re=n,n={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ke===null?G.memoizedState=ke=n:ke=ke.next=n}return ke}var ri;ri=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function wa(n){var e=ta;return ta+=1,Gs===null&&(Gs=[]),n=_f(Gs,n,e),e=G,(ke===null?e.memoizedState:ke.next)===null&&(e=e.alternate,q.H=e===null||e.memoizedState===null?ps:qt),n}function ai(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return wa(n);if(n.$$typeof===Jn)return Ue(n)}throw Error(N(438,String(n)))}function Io(n){var e=null,s=G.updateQueue;if(s!==null&&(e=s.memoCache),e==null){var r=G.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),s===null&&(s=ri(),G.updateQueue=s),s.memoCache=e,s=e.data[e.index],s===void 0)for(s=e.data[e.index]=Array(n),r=0;r<n;r++)s[r]=Mg;return e.index++,s}function at(n,e){return typeof e=="function"?e(n):e}function ll(n){var e=Ce();return Qo(e,re,n)}function Qo(n,e,s){var r=n.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=s;var a=n.baseQueue,l=r.pending;if(l!==null){if(a!==null){var i=a.next;a.next=l.next,l.next=i}e.baseQueue=a=l,r.pending=null}if(l=n.baseState,a===null)n.memoizedState=l;else{e=a.next;var c=i=null,o=null,d=e,u=!1;do{var p=d.lane&-536870913;if(p!==d.lane?(J&p)===p:(Bt&p)===p){var h=d.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),p===Js&&(u=!0);else if((Bt&h)===h){d=d.next,h===Js&&(u=!0);continue}else p={lane:0,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(c=o=p,i=l):o=o.next=p,G.lanes|=h,Ut|=h;p=d.action,is&&s(l,p),l=d.hasEagerState?d.eagerState:s(l,p)}else h={lane:p,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(c=o=h,i=l):o=o.next=h,G.lanes|=p,Ut|=p;d=d.next}while(d!==null&&d!==e);if(o===null?i=l:o.next=c,!rn(l,n.memoizedState)&&(Le=!0,u&&(s=Xs,s!==null)))throw s;n.memoizedState=l,n.baseState=i,n.baseQueue=o,r.lastRenderedState=l}return a===null&&(r.lanes=0),[n.memoizedState,r.dispatch]}function Li(n){var e=Ce(),s=e.queue;if(s===null)throw Error(N(311));s.lastRenderedReducer=n;var r=s.dispatch,a=s.pending,l=e.memoizedState;if(a!==null){s.pending=null;var i=a=a.next;do l=n(l,i.action),i=i.next;while(i!==a);rn(l,e.memoizedState)||(Le=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),s.lastRenderedState=l}return[l,r]}function Tf(n,e,s){var r=G,a=Ce(),l=ee;if(l){if(s===void 0)throw Error(N(407));s=s()}else s=e();var i=!rn((re||a).memoizedState,s);if(i&&(a.memoizedState=s,Le=!0),a=a.queue,Wo(Bf.bind(null,r,a,n),[n]),a.getSnapshot!==e||i||ke!==null&&ke.memoizedState.tag&1){if(r.flags|=2048,Ks(9,Of.bind(null,r,a,s,e),{destroy:void 0},null),ce===null)throw Error(N(349));l||Bt&60||Df(r,e,s)}return s}function Df(n,e,s){n.flags|=16384,n={getSnapshot:e,value:s},e=G.updateQueue,e===null?(e=ri(),G.updateQueue=e,e.stores=[n]):(s=e.stores,s===null?e.stores=[n]:s.push(n))}function Of(n,e,s,r){e.value=s,e.getSnapshot=r,zf(e)&&Uf(n)}function Bf(n,e,s){return s(function(){zf(e)&&Uf(n)})}function zf(n){var e=n.getSnapshot;n=n.value;try{var s=e();return!rn(n,s)}catch{return!0}}function Uf(n){var e=Ot(n,2);e!==null&&Ye(e,n,2)}function Dc(n){var e=Ie();if(typeof n=="function"){var s=n;if(n=s(),is){wt(!0);try{s()}finally{wt(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:at,lastRenderedState:n},e}function Hf(n,e,s,r){return n.baseState=s,Qo(n,re,typeof r=="function"?r:at)}function Ij(n,e,s,r,a){if(ii(n))throw Error(N(485));if(n=e.action,n!==null){var l={payload:a,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){l.listeners.push(i)}};q.T!==null?s(!0):l.isTransition=!1,r(l),s=e.pending,s===null?(l.next=e.pending=l,qf(e,l)):(l.next=s.next,e.pending=s.next=l)}}function qf(n,e){var s=e.action,r=e.payload,a=n.state;if(e.isTransition){var l=q.T,i={};q.T=i;try{var c=s(a,r),o=q.S;o!==null&&o(i,c),$u(n,e,c)}catch(d){Oc(n,e,d)}finally{q.T=l}}else try{l=s(a,r),$u(n,e,l)}catch(d){Oc(n,e,d)}}function $u(n,e,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(r){Lu(n,e,r)},function(r){return Oc(n,e,r)}):Lu(n,e,s)}function Lu(n,e,s){e.status="fulfilled",e.value=s,Vf(e),n.state=s,e=n.pending,e!==null&&(s=e.next,s===e?n.pending=null:(s=s.next,e.next=s,qf(n,s)))}function Oc(n,e,s){var r=n.pending;if(n.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=s,Vf(e),e=e.next;while(e!==r)}n.action=null}function Vf(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function Xf(n,e){return e}function Zf(n,e){if(ee){var s=ce.formState;if(s!==null){e:{var r=G;if(ee){if(Oe){n:{for(var a=Oe,l=$n;a.nodeType!==8;){if(!l){a=null;break n}if(a=Sn(a.nextSibling),a===null){a=null;break n}}l=a.data,a=l==="F!"||l==="F"?a:null}if(a){Oe=Sn(a.nextSibling),r=a.data==="F!";break e}}as(r)}r=!1}r&&(e=s[0])}}return s=Ie(),s.memoizedState=s.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xf,lastRenderedState:e},s.queue=r,s=ix.bind(null,G,r),r.dispatch=s,r=Dc(!1),l=nd.bind(null,G,!1,r.queue),r=Ie(),a={state:e,dispatch:null,action:n,pending:null},r.queue=a,s=Ij.bind(null,G,a,l,s),a.dispatch=s,r.memoizedState=n,[e,s,!1]}function Gf(n){var e=Ce();return Yf(e,re,n)}function Yf(n,e,s){e=Qo(n,e,Xf)[0],n=ll(at)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?wa(e):e;var r=Ce(),a=r.queue,l=a.dispatch;return s!==r.memoizedState&&(G.flags|=2048,Ks(9,Qj.bind(null,a,s),{destroy:void 0},null)),[e,l,n]}function Qj(n,e){n.action=e}function Ff(n){var e=Ce(),s=re;if(s!==null)return Yf(e,s,n);Ce(),e=e.memoizedState,s=Ce();var r=s.queue.dispatch;return s.memoizedState=n,[e,r,!1]}function Ks(n,e,s,r){return n={tag:n,create:e,inst:s,deps:r,next:null},e=G.updateQueue,e===null&&(e=ri(),G.updateQueue=e),s=e.lastEffect,s===null?e.lastEffect=n.next=n:(r=s.next,s.next=n,n.next=r,e.lastEffect=n),n}function Pf(){return Ce().memoizedState}function il(n,e,s,r){var a=Ie();G.flags|=n,a.memoizedState=Ks(1|e,s,{destroy:void 0},r===void 0?null:r)}function li(n,e,s,r){var a=Ce();r=r===void 0?null:r;var l=a.memoizedState.inst;re!==null&&r!==null&&Zo(r,re.memoizedState.deps)?a.memoizedState=Ks(e,s,l,r):(G.flags|=n,a.memoizedState=Ks(1|e,s,l,r))}function Eu(n,e){il(8390656,8,n,e)}function Wo(n,e){li(2048,8,n,e)}function If(n,e){return li(4,2,n,e)}function Qf(n,e){return li(4,4,n,e)}function Wf(n,e){if(typeof e=="function"){n=n();var s=e(n);return function(){typeof s=="function"?s():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Jf(n,e,s){s=s!=null?s.concat([n]):null,li(4,4,Wf.bind(null,e,n),s)}function Jo(){}function Kf(n,e){var s=Ce();e=e===void 0?null:e;var r=s.memoizedState;return e!==null&&Zo(e,r[1])?r[0]:(s.memoizedState=[n,e],n)}function ex(n,e){var s=Ce();e=e===void 0?null:e;var r=s.memoizedState;if(e!==null&&Zo(e,r[1]))return r[0];if(r=n(),is){wt(!0);try{n()}finally{wt(!1)}}return s.memoizedState=[r,e],r}function Ko(n,e,s){return s===void 0||Bt&1073741824?n.memoizedState=e:(n.memoizedState=s,n=Vx(),G.lanes|=n,Ut|=n,s)}function nx(n,e,s,r){return rn(s,e)?s:Ws.current!==null?(n=Ko(n,s,r),rn(n,e)||(Le=!0),n):Bt&42?(n=Vx(),G.lanes|=n,Ut|=n,e):(Le=!0,n.memoizedState=s)}function tx(n,e,s,r,a){var l=ue.p;ue.p=l!==0&&8>l?l:8;var i=q.T,c={};q.T=c,nd(n,!1,e,s);try{var o=a(),d=q.S;if(d!==null&&d(c,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var u=Yj(o,r);Ur(n,e,u,sn(n))}else Ur(n,e,r,sn(n))}catch(p){Ur(n,e,{then:function(){},status:"rejected",reason:p},sn())}finally{ue.p=l,q.T=i}}function Wj(){}function Bc(n,e,s,r){if(n.tag!==5)throw Error(N(476));var a=sx(n).queue;tx(n,a,e,Kt,s===null?Wj:function(){return rx(n),s(r)})}function sx(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:Kt,baseState:Kt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:at,lastRenderedState:Kt},next:null};var s={};return e.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:at,lastRenderedState:s},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function rx(n){var e=sx(n).next.queue;Ur(n,e,{},sn())}function ed(){return Ue(la)}function ax(){return Ce().memoizedState}function lx(){return Ce().memoizedState}function Jj(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var s=sn();n=At(s);var r=Rt(e,n,s);r!==null&&(Ye(r,e,s),qr(r,e,s)),e={cache:Vo()},n.payload=e;return}e=e.return}}function Kj(n,e,s){var r=sn();s={lane:r,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ii(n)?cx(e,s):(s=zo(n,e,s,r),s!==null&&(Ye(s,n,r),ox(s,e,r)))}function ix(n,e,s){var r=sn();Ur(n,e,s,r)}function Ur(n,e,s,r){var a={lane:r,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ii(n))cx(e,a);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var i=e.lastRenderedState,c=l(i,s);if(a.hasEagerState=!0,a.eagerState=c,rn(c,i))return si(n,e,a,0),ce===null&&ti(),!1}catch{}finally{}if(s=zo(n,e,a,r),s!==null)return Ye(s,n,r),ox(s,e,r),!0}return!1}function nd(n,e,s,r){if(r={lane:2,revertLane:ud(),action:r,hasEagerState:!1,eagerState:null,next:null},ii(n)){if(e)throw Error(N(479))}else e=zo(n,s,r,2),e!==null&&Ye(e,n,2)}function ii(n){var e=n.alternate;return n===G||e!==null&&e===G}function cx(n,e){Zs=_l=!0;var s=n.pending;s===null?e.next=e:(e.next=s.next,s.next=e),n.pending=e}function ox(n,e,s){if(s&4194176){var r=e.lanes;r&=n.pendingLanes,s|=r,e.lanes=s,Qh(n,s)}}var zn={readContext:Ue,use:ai,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be};zn.useCacheRefresh=be;zn.useMemoCache=be;zn.useHostTransitionStatus=be;zn.useFormState=be;zn.useActionState=be;zn.useOptimistic=be;var ps={readContext:Ue,use:ai,useCallback:function(n,e){return Ie().memoizedState=[n,e===void 0?null:e],n},useContext:Ue,useEffect:Eu,useImperativeHandle:function(n,e,s){s=s!=null?s.concat([n]):null,il(4194308,4,Wf.bind(null,e,n),s)},useLayoutEffect:function(n,e){return il(4194308,4,n,e)},useInsertionEffect:function(n,e){il(4,2,n,e)},useMemo:function(n,e){var s=Ie();e=e===void 0?null:e;var r=n();if(is){wt(!0);try{n()}finally{wt(!1)}}return s.memoizedState=[r,e],r},useReducer:function(n,e,s){var r=Ie();if(s!==void 0){var a=s(e);if(is){wt(!0);try{s(e)}finally{wt(!1)}}}else a=e;return r.memoizedState=r.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},r.queue=n,n=n.dispatch=Kj.bind(null,G,n),[r.memoizedState,n]},useRef:function(n){var e=Ie();return n={current:n},e.memoizedState=n},useState:function(n){n=Dc(n);var e=n.queue,s=ix.bind(null,G,e);return e.dispatch=s,[n.memoizedState,s]},useDebugValue:Jo,useDeferredValue:function(n,e){var s=Ie();return Ko(s,n,e)},useTransition:function(){var n=Dc(!1);return n=tx.bind(null,G,n.queue,!0,!1),Ie().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,s){var r=G,a=Ie();if(ee){if(s===void 0)throw Error(N(407));s=s()}else{if(s=e(),ce===null)throw Error(N(349));J&60||Df(r,e,s)}a.memoizedState=s;var l={value:s,getSnapshot:e};return a.queue=l,Eu(Bf.bind(null,r,l,n),[n]),r.flags|=2048,Ks(9,Of.bind(null,r,l,s,e),{destroy:void 0},null),s},useId:function(){var n=Ie(),e=ce.identifierPrefix;if(ee){var s=et,r=Kn;s=(r&~(1<<32-tn(r)-1)).toString(32)+s,e=":"+e+"R"+s,s=Al++,0<s&&(e+="H"+s.toString(32)),e+=":"}else s=Fj++,e=":"+e+"r"+s.toString(32)+":";return n.memoizedState=e},useCacheRefresh:function(){return Ie().memoizedState=Jj.bind(null,G)}};ps.useMemoCache=Io;ps.useHostTransitionStatus=ed;ps.useFormState=Zf;ps.useActionState=Zf;ps.useOptimistic=function(n){var e=Ie();e.memoizedState=e.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=s,e=nd.bind(null,G,!0,s),s.dispatch=e,[n,e]};var qt={readContext:Ue,use:ai,useCallback:Kf,useContext:Ue,useEffect:Wo,useImperativeHandle:Jf,useInsertionEffect:If,useLayoutEffect:Qf,useMemo:ex,useReducer:ll,useRef:Pf,useState:function(){return ll(at)},useDebugValue:Jo,useDeferredValue:function(n,e){var s=Ce();return nx(s,re.memoizedState,n,e)},useTransition:function(){var n=ll(at)[0],e=Ce().memoizedState;return[typeof n=="boolean"?n:wa(n),e]},useSyncExternalStore:Tf,useId:ax};qt.useCacheRefresh=lx;qt.useMemoCache=Io;qt.useHostTransitionStatus=ed;qt.useFormState=Gf;qt.useActionState=Gf;qt.useOptimistic=function(n,e){var s=Ce();return Hf(s,re,n,e)};var hs={readContext:Ue,use:ai,useCallback:Kf,useContext:Ue,useEffect:Wo,useImperativeHandle:Jf,useInsertionEffect:If,useLayoutEffect:Qf,useMemo:ex,useReducer:Li,useRef:Pf,useState:function(){return Li(at)},useDebugValue:Jo,useDeferredValue:function(n,e){var s=Ce();return re===null?Ko(s,n,e):nx(s,re.memoizedState,n,e)},useTransition:function(){var n=Li(at)[0],e=Ce().memoizedState;return[typeof n=="boolean"?n:wa(n),e]},useSyncExternalStore:Tf,useId:ax};hs.useCacheRefresh=lx;hs.useMemoCache=Io;hs.useHostTransitionStatus=ed;hs.useFormState=Ff;hs.useActionState=Ff;hs.useOptimistic=function(n,e){var s=Ce();return re!==null?Hf(s,re,n,e):(s.baseState=n,[n,s.queue.dispatch])};function Ei(n,e,s,r){e=n.memoizedState,s=s(r,e),s=s==null?e:me({},e,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var zc={isMounted:function(n){return(n=n._reactInternals)?ir(n)===n:!1},enqueueSetState:function(n,e,s){n=n._reactInternals;var r=sn(),a=At(r);a.payload=e,s!=null&&(a.callback=s),e=Rt(n,a,r),e!==null&&(Ye(e,n,r),qr(e,n,r))},enqueueReplaceState:function(n,e,s){n=n._reactInternals;var r=sn(),a=At(r);a.tag=1,a.payload=e,s!=null&&(a.callback=s),e=Rt(n,a,r),e!==null&&(Ye(e,n,r),qr(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var s=sn(),r=At(s);r.tag=2,e!=null&&(r.callback=e),e=Rt(n,r,s),e!==null&&(Ye(e,n,s),qr(e,n,s))}};function Tu(n,e,s,r,a,l,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,l,i):e.prototype&&e.prototype.isPureReactComponent?!Kr(s,r)||!Kr(a,l):!0}function Du(n,e,s,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(s,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(s,r),e.state!==n&&zc.enqueueReplaceState(e,e.state,null)}function cs(n,e){var s=e;if("ref"in e){s={};for(var r in e)r!=="ref"&&(s[r]=e[r])}if(n=n.defaultProps){s===e&&(s=me({},s));for(var a in n)s[a]===void 0&&(s[a]=n[a])}return s}var Rl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function dx(n){Rl(n)}function ux(n){console.error(n)}function mx(n){Rl(n)}function Ml(n,e){try{var s=n.onUncaughtError;s(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Ou(n,e,s){try{var r=n.onCaughtError;r(s.value,{componentStack:s.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Uc(n,e,s){return s=At(s),s.tag=3,s.payload={element:null},s.callback=function(){Ml(n,e)},s}function px(n){return n=At(n),n.tag=3,n}function hx(n,e,s,r){var a=s.type.getDerivedStateFromError;if(typeof a=="function"){var l=r.value;n.payload=function(){return a(l)},n.callback=function(){Ou(e,s,r)}}var i=s.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ou(e,s,r),typeof a!="function"&&($t===null?$t=new Set([this]):$t.add(this));var c=r.stack;this.componentDidCatch(r.value,{componentStack:c!==null?c:""})})}function ev(n,e,s,r,a){if(s.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=s.alternate,e!==null&&Sa(e,s,a,!0),s=jn.current,s!==null){switch(s.tag){case 13:return Bn===null?eo():s.alternate===null&&je===0&&(je=3),s.flags&=-257,s.flags|=65536,s.lanes=a,r===Lc?s.flags|=16384:(e=s.updateQueue,e===null?s.updateQueue=new Set([r]):e.add(r),Yi(n,r,a)),!1;case 22:return s.flags|=65536,r===Lc?s.flags|=16384:(e=s.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},s.updateQueue=e):(s=e.retryQueue,s===null?e.retryQueue=new Set([r]):s.add(r)),Yi(n,r,a)),!1}throw Error(N(435,s.tag))}return Yi(n,r,a),eo(),!1}if(ee)return e=jn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,r!==$c&&(n=Error(N(422),{cause:r}),ea(fn(n,s)))):(r!==$c&&(e=Error(N(423),{cause:r}),ea(fn(e,s))),n=n.current.alternate,n.flags|=65536,a&=-a,n.lanes|=a,r=fn(r,s),a=Uc(n.stateNode,r,a),Ui(n,a),je!==4&&(je=2)),!1;var l=Error(N(520),{cause:r});if(l=fn(l,s),Gr===null?Gr=[l]:Gr.push(l),je!==4&&(je=2),e===null)return!0;r=fn(r,s),s=e;do{switch(s.tag){case 3:return s.flags|=65536,n=a&-a,s.lanes|=n,n=Uc(s.stateNode,r,n),Ui(s,n),!1;case 1:if(e=s.type,l=s.stateNode,(s.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&($t===null||!$t.has(l))))return s.flags|=65536,a&=-a,s.lanes|=a,a=px(a),hx(a,n,s,r),Ui(s,a),!1}s=s.return}while(s!==null);return!1}var fx=Error(N(461)),Le=!1;function De(n,e,s,r){e.child=n===null?Rf(e,null,s,r):ls(e,n.child,s,r)}function Bu(n,e,s,r,a){s=s.render;var l=e.ref;if("ref"in r){var i={};for(var c in r)c!=="ref"&&(i[c]=r[c])}else i=r;return os(e),r=Go(n,e,s,i,l,a),c=Yo(),n!==null&&!Le?(Fo(n,e,a),lt(n,e,a)):(ee&&c&&Uo(e),e.flags|=1,De(n,e,r,a),e.child)}function zu(n,e,s,r,a){if(n===null){var l=s.type;return typeof l=="function"&&!ld(l)&&l.defaultProps===void 0&&s.compare===null?(e.tag=15,e.type=l,xx(n,e,l,r,a)):(n=ol(s.type,null,r,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!td(n,a)){var i=l.memoizedProps;if(s=s.compare,s=s!==null?s:Kr,s(i,r)&&n.ref===e.ref)return lt(n,e,a)}return e.flags|=1,n=Mt(l,r),n.ref=e.ref,n.return=e,e.child=n}function xx(n,e,s,r,a){if(n!==null){var l=n.memoizedProps;if(Kr(l,r)&&n.ref===e.ref)if(Le=!1,e.pendingProps=r=l,td(n,a))n.flags&131072&&(Le=!0);else return e.lanes=n.lanes,lt(n,e,a)}return Hc(n,e,s,r,a)}function gx(n,e,s){var r=e.pendingProps,a=r.children,l=(e.stateNode._pendingVisibility&2)!==0,i=n!==null?n.memoizedState:null;if(Hr(n,e),r.mode==="hidden"||l){if(e.flags&128){if(r=i!==null?i.baseLanes|s:s,n!==null){for(a=e.child=n.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;e.childLanes=l&~r}else e.childLanes=0,e.child=null;return Uu(n,e,r,s)}if(s&536870912)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&al(e,i!==null?i.cachePool:null),i!==null?Au(e,i):Ec(),Mf(e);else return e.lanes=e.childLanes=536870912,Uu(n,e,i!==null?i.baseLanes|s:s,s)}else i!==null?(al(e,i.cachePool),Au(e,i),bt(),e.memoizedState=null):(n!==null&&al(e,null),Ec(),bt());return De(n,e,a,s),e.child}function Uu(n,e,s,r){var a=Xo();return a=a===null?null:{parent:_e._currentValue,pool:a},e.memoizedState={baseLanes:s,cachePool:a},n!==null&&al(e,null),Ec(),Mf(e),n!==null&&Sa(n,e,r,!0),null}function Hr(n,e){var s=e.ref;if(s===null)n!==null&&n.ref!==null&&(e.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(N(284));(n===null||n.ref!==s)&&(e.flags|=2097664)}}function Hc(n,e,s,r,a){return os(e),s=Go(n,e,s,r,void 0,a),r=Yo(),n!==null&&!Le?(Fo(n,e,a),lt(n,e,a)):(ee&&r&&Uo(e),e.flags|=1,De(n,e,s,a),e.child)}function Hu(n,e,s,r,a,l){return os(e),e.updateQueue=null,s=Ef(e,r,s,a),Lf(n),r=Yo(),n!==null&&!Le?(Fo(n,e,l),lt(n,e,l)):(ee&&r&&Uo(e),e.flags|=1,De(n,e,s,l),e.child)}function qu(n,e,s,r,a){if(os(e),e.stateNode===null){var l=Ts,i=s.contextType;typeof i=="object"&&i!==null&&(l=Ue(i)),l=new s(r,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=zc,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=r,l.state=e.memoizedState,l.refs={},sd(e),i=s.contextType,l.context=typeof i=="object"&&i!==null?Ue(i):Ts,l.state=e.memoizedState,i=s.getDerivedStateFromProps,typeof i=="function"&&(Ei(e,s,i,r),l.state=e.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(i=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),i!==l.state&&zc.enqueueReplaceState(l,l.state,null),Xr(e,r,l,a),Vr(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(n===null){l=e.stateNode;var c=e.memoizedProps,o=cs(s,c);l.props=o;var d=l.context,u=s.contextType;i=Ts,typeof u=="object"&&u!==null&&(i=Ue(u));var p=s.getDerivedStateFromProps;u=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,u||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||d!==i)&&Du(e,l,r,i),jt=!1;var h=e.memoizedState;l.state=h,Xr(e,r,l,a),Vr(),d=e.memoizedState,c||h!==d||jt?(typeof p=="function"&&(Ei(e,s,p,r),d=e.memoizedState),(o=jt||Tu(e,s,o,r,h,d,i))?(u||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=d),l.props=r,l.state=d,l.context=i,r=o):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{l=e.stateNode,Yc(n,e),i=e.memoizedProps,u=cs(s,i),l.props=u,p=e.pendingProps,h=l.context,d=s.contextType,o=Ts,typeof d=="object"&&d!==null&&(o=Ue(d)),c=s.getDerivedStateFromProps,(d=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==p||h!==o)&&Du(e,l,r,o),jt=!1,h=e.memoizedState,l.state=h,Xr(e,r,l,a),Vr();var j=e.memoizedState;i!==p||h!==j||jt||n!==null&&n.dependencies!==null&&$l(n.dependencies)?(typeof c=="function"&&(Ei(e,s,c,r),j=e.memoizedState),(u=jt||Tu(e,s,u,r,h,j,o)||n!==null&&n.dependencies!==null&&$l(n.dependencies))?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,j,o),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,j,o)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=j),l.props=r,l.state=j,l.context=o,r=u):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),r=!1)}return l=r,Hr(n,e),r=(e.flags&128)!==0,l||r?(l=e.stateNode,s=r&&typeof s.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&r?(e.child=ls(e,n.child,null,a),e.child=ls(e,null,s,a)):De(n,e,s,a),e.memoizedState=l.state,n=e.child):n=lt(n,e,a),n}function Vu(n,e,s,r){return ya(),e.flags|=256,De(n,e,s,r),e.child}var Ti={dehydrated:null,treeContext:null,retryLane:0};function Di(n){return{baseLanes:n,cachePool:$f()}}function Oi(n,e,s){return n=n!==null?n.childLanes&~s:0,e&&(n|=gn),n}function jx(n,e,s){var r=e.pendingProps,a=!1,l=(e.flags&128)!==0,i;if((i=l)||(i=n!==null&&n.memoizedState===null?!1:(Ae.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,n===null){if(ee){if(a?vt(e):bt(),ee){var c=Oe,o;if(o=c){e:{for(o=c,c=$n;o.nodeType!==8;){if(!c){c=null;break e}if(o=Sn(o.nextSibling),o===null){c=null;break e}}c=o}c!==null?(e.memoizedState={dehydrated:c,treeContext:es!==null?{id:Kn,overflow:et}:null,retryLane:536870912},o=xn(18,null,null,0),o.stateNode=c,o.return=e,e.child=o,Ze=e,Oe=null,o=!0):o=!1}o||as(e)}if(c=e.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return c.data==="$!"?e.lanes=16:e.lanes=536870912,null;nt(e)}return c=r.children,r=r.fallback,a?(bt(),a=e.mode,c=Vc({mode:"hidden",children:c},a),r=ts(r,a,s,null),c.return=e,r.return=e,c.sibling=r,e.child=c,a=e.child,a.memoizedState=Di(s),a.childLanes=Oi(n,i,s),e.memoizedState=Ti,r):(vt(e),qc(e,c))}if(o=n.memoizedState,o!==null&&(c=o.dehydrated,c!==null)){if(l)e.flags&256?(vt(e),e.flags&=-257,e=Bi(n,e,s)):e.memoizedState!==null?(bt(),e.child=n.child,e.flags|=128,e=null):(bt(),a=r.fallback,c=e.mode,r=Vc({mode:"visible",children:r.children},c),a=ts(a,c,s,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,ls(e,n.child,null,s),r=e.child,r.memoizedState=Di(s),r.childLanes=Oi(n,i,s),e.memoizedState=Ti,e=a);else if(vt(e),c.data==="$!"){if(i=c.nextSibling&&c.nextSibling.dataset,i)var d=i.dgst;i=d,r=Error(N(419)),r.stack="",r.digest=i,ea({value:r,source:null,stack:null}),e=Bi(n,e,s)}else if(Le||Sa(n,e,s,!1),i=(s&n.childLanes)!==0,Le||i){if(i=ce,i!==null){if(r=s&-s,r&42)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane)throw o.retryLane=r,Ot(n,r),Ye(i,n,r),fx}c.data==="$?"||eo(),e=Bi(n,e,s)}else c.data==="$?"?(e.flags|=128,e.child=n.child,e=fv.bind(null,n),c._reactRetry=e,e=null):(n=o.treeContext,Oe=Sn(c.nextSibling),Ze=e,ee=!0,Nn=null,$n=!1,n!==null&&(mn[pn++]=Kn,mn[pn++]=et,mn[pn++]=es,Kn=n.id,et=n.overflow,es=e),e=qc(e,r.children),e.flags|=4096);return e}return a?(bt(),a=r.fallback,c=e.mode,o=n.child,d=o.sibling,r=Mt(o,{mode:"hidden",children:r.children}),r.subtreeFlags=o.subtreeFlags&31457280,d!==null?a=Mt(d,a):(a=ts(a,c,s,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,c=n.child.memoizedState,c===null?c=Di(s):(o=c.cachePool,o!==null?(d=_e._currentValue,o=o.parent!==d?{parent:d,pool:d}:o):o=$f(),c={baseLanes:c.baseLanes|s,cachePool:o}),a.memoizedState=c,a.childLanes=Oi(n,i,s),e.memoizedState=Ti,r):(vt(e),s=n.child,n=s.sibling,s=Mt(s,{mode:"visible",children:r.children}),s.return=e,s.sibling=null,n!==null&&(i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)),e.child=s,e.memoizedState=null,s)}function qc(n,e){return e=Vc({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Vc(n,e){return Hx(n,e,0,null)}function Bi(n,e,s){return ls(e,n.child,null,s),n=qc(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Xu(n,e,s){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Zc(n.return,e,s)}function zi(n,e,s,r,a){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:s,tailMode:a}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=s,l.tailMode=a)}function vx(n,e,s){var r=e.pendingProps,a=r.revealOrder,l=r.tail;if(De(n,e,r.children,s),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xu(n,s,e);else if(n.tag===19)Xu(n,s,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}switch(pe(Ae,r),a){case"forwards":for(s=e.child,a=null;s!==null;)n=s.alternate,n!==null&&Cl(n)===null&&(a=s),s=s.sibling;s=a,s===null?(a=e.child,e.child=null):(a=s.sibling,s.sibling=null),zi(e,!1,a,s,l);break;case"backwards":for(s=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&Cl(n)===null){e.child=a;break}n=a.sibling,a.sibling=s,s=a,a=n}zi(e,!0,s,null,l);break;case"together":zi(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function lt(n,e,s){if(n!==null&&(e.dependencies=n.dependencies),Ut|=e.lanes,!(s&e.childLanes))if(n!==null){if(Sa(n,e,s,!1),(s&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(N(153));if(e.child!==null){for(n=e.child,s=Mt(n,n.pendingProps),e.child=s,s.return=e;n.sibling!==null;)n=n.sibling,s=s.sibling=Mt(n,n.pendingProps),s.return=e;s.sibling=null}return e.child}function td(n,e){return n.lanes&e?!0:(n=n.dependencies,!!(n!==null&&$l(n)))}function nv(n,e,s){switch(e.tag){case 3:gl(e,e.stateNode.containerInfo),yt(e,_e,n.memoizedState.cache),ya();break;case 27:case 5:Nc(e);break;case 4:gl(e,e.stateNode.containerInfo);break;case 10:yt(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(vt(e),e.flags|=128,null):s&e.child.childLanes?jx(n,e,s):(vt(e),n=lt(n,e,s),n!==null?n.sibling:null);vt(e);break;case 19:var a=(n.flags&128)!==0;if(r=(s&e.childLanes)!==0,r||(Sa(n,e,s,!1),r=(s&e.childLanes)!==0),a){if(r)return vx(n,e,s);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),pe(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,gx(n,e,s);case 24:yt(e,_e,n.memoizedState.cache)}return lt(n,e,s)}function bx(n,e,s){if(n!==null)if(n.memoizedProps!==e.pendingProps)Le=!0;else{if(!td(n,s)&&!(e.flags&128))return Le=!1,nv(n,e,s);Le=!!(n.flags&131072)}else Le=!1,ee&&e.flags&1048576&&kf(e,Sl,e.index);switch(e.lanes=0,e.tag){case 16:e:{n=e.pendingProps;var r=e.elementType,a=r._init;if(r=a(r._payload),e.type=r,typeof r=="function")ld(r)?(n=cs(r,n),e.tag=1,e=qu(null,e,r,n,s)):(e.tag=0,e=Hc(null,e,r,n,s));else{if(r!=null){if(a=r.$$typeof,a===_o){e.tag=11,e=Bu(null,e,r,n,s);break e}else if(a===Ao){e.tag=14,e=zu(null,e,r,n,s);break e}}throw e=bc(r)||r,Error(N(306,e,""))}}return e;case 0:return Hc(n,e,e.type,e.pendingProps,s);case 1:return r=e.type,a=cs(r,e.pendingProps),qu(n,e,r,a,s);case 3:e:{if(gl(e,e.stateNode.containerInfo),n===null)throw Error(N(387));var l=e.pendingProps;a=e.memoizedState,r=a.element,Yc(n,e),Xr(e,l,null,s);var i=e.memoizedState;if(l=i.cache,yt(e,_e,l),l!==a.cache&&Gc(e,[_e],s,!0),Vr(),l=i.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){e=Vu(n,e,l,s);break e}else if(l!==r){r=fn(Error(N(424)),e),ea(r),e=Vu(n,e,l,s);break e}else for(Oe=Sn(e.stateNode.containerInfo.firstChild),Ze=e,ee=!0,Nn=null,$n=!0,s=Rf(e,null,l,s),e.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ya(),l===r){e=lt(n,e,s);break e}De(n,e,l,s)}e=e.child}return e;case 26:return Hr(n,e),n===null?(s=im(e.type,null,e.pendingProps,null))?e.memoizedState=s:ee||(s=e.type,n=e.pendingProps,r=zl(_t.current).createElement(s),r[ze]=e,r[Qe]=n,Be(r,s,n),$e(r),e.stateNode=r):e.memoizedState=im(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Nc(e),n===null&&ee&&(r=e.stateNode=r0(e.type,e.pendingProps,_t.current),Ze=e,$n=!0,Oe=Sn(r.firstChild)),r=e.pendingProps.children,n!==null||ee?De(n,e,r,s):e.child=ls(e,null,r,s),Hr(n,e),e.child;case 5:return n===null&&ee&&((a=r=Oe)&&(r=$v(r,e.type,e.pendingProps,$n),r!==null?(e.stateNode=r,Ze=e,Oe=Sn(r.firstChild),$n=!1,a=!0):a=!1),a||as(e)),Nc(e),a=e.type,l=e.pendingProps,i=n!==null?n.memoizedProps:null,r=l.children,ao(a,l)?r=null:i!==null&&ao(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=Go(n,e,Pj,null,null,s),la._currentValue=a),Hr(n,e),De(n,e,r,s),e.child;case 6:return n===null&&ee&&((n=s=Oe)&&(s=Lv(s,e.pendingProps,$n),s!==null?(e.stateNode=s,Ze=e,Oe=null,n=!0):n=!1),n||as(e)),null;case 13:return jx(n,e,s);case 4:return gl(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=ls(e,null,r,s):De(n,e,r,s),e.child;case 11:return Bu(n,e,e.type,e.pendingProps,s);case 7:return De(n,e,e.pendingProps,s),e.child;case 8:return De(n,e,e.pendingProps.children,s),e.child;case 12:return De(n,e,e.pendingProps.children,s),e.child;case 10:return r=e.pendingProps,yt(e,e.type,r.value),De(n,e,r.children,s),e.child;case 9:return a=e.type._context,r=e.pendingProps.children,os(e),a=Ue(a),r=r(a),e.flags|=1,De(n,e,r,s),e.child;case 14:return zu(n,e,e.type,e.pendingProps,s);case 15:return xx(n,e,e.type,e.pendingProps,s);case 19:return vx(n,e,s);case 22:return gx(n,e,s);case 24:return os(e),r=Ue(_e),n===null?(a=Xo(),a===null&&(a=ce,l=Vo(),a.pooledCache=l,l.refCount++,l!==null&&(a.pooledCacheLanes|=s),a=l),e.memoizedState={parent:r,cache:a},sd(e),yt(e,_e,a)):(n.lanes&s&&(Yc(n,e),Xr(e,null,null,s),Vr()),a=n.memoizedState,l=e.memoizedState,a.parent!==r?(a={parent:r,cache:r},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),yt(e,_e,r)):(r=l.cache,yt(e,_e,r),r!==a.cache&&Gc(e,[_e],s,!0))),De(n,e,e.pendingProps.children,s),e.child;case 29:throw e.pendingProps}throw Error(N(156,e.tag))}var Xc=Un(null),fs=null,tt=null;function yt(n,e,s){pe(Xc,e._currentValue),e._currentValue=s}function st(n){n._currentValue=Xc.current,Ee(Xc)}function Zc(n,e,s){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===s)break;n=n.return}}function Gc(n,e,s,r){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){var i=a.child;l=l.firstContext;e:for(;l!==null;){var c=l;l=a;for(var o=0;o<e.length;o++)if(c.context===e[o]){l.lanes|=s,c=l.alternate,c!==null&&(c.lanes|=s),Zc(l.return,s,n),r||(i=null);break e}l=c.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(N(341));i.lanes|=s,l=i.alternate,l!==null&&(l.lanes|=s),Zc(i,s,n),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===n){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function Sa(n,e,s,r){n=null;for(var a=e,l=!1;a!==null;){if(!l){if(a.flags&524288)l=!0;else if(a.flags&262144)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(N(387));if(i=i.memoizedProps,i!==null){var c=a.type;rn(a.pendingProps.value,i.value)||(n!==null?n.push(c):n=[c])}}else if(a===xl.current){if(i=a.alternate,i===null)throw Error(N(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(n!==null?n.push(la):n=[la])}a=a.return}n!==null&&Gc(e,n,s,r),e.flags|=262144}function $l(n){for(n=n.firstContext;n!==null;){if(!rn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function os(n){fs=n,tt=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Ue(n){return yx(fs,n)}function Za(n,e){return fs===null&&os(n),yx(n,e)}function yx(n,e){var s=e._currentValue;if(e={context:e,memoizedValue:s,next:null},tt===null){if(n===null)throw Error(N(308));tt=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else tt=tt.next=e;return s}var jt=!1;function sd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function At(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Rt(n,e,s){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,xe&2){var a=r.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),r.pending=e,e=Nl(n),Sf(n,null,s),e}return si(n,r,e,s),Nl(n)}function qr(n,e,s){if(e=e.updateQueue,e!==null&&(e=e.shared,(s&4194176)!==0)){var r=e.lanes;r&=n.pendingLanes,s|=r,e.lanes=s,Qh(n,s)}}function Ui(n,e){var s=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,s===r)){var a=null,l=null;if(s=s.firstBaseUpdate,s!==null){do{var i={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};l===null?a=l=i:l=l.next=i,s=s.next}while(s!==null);l===null?a=l=e:l=l.next=e}else a=l=e;s={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,callbacks:r.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=e:n.next=e,s.lastBaseUpdate=e}var Fc=!1;function Vr(){if(Fc){var n=Xs;if(n!==null)throw n}}function Xr(n,e,s,r){Fc=!1;var a=n.updateQueue;jt=!1;var l=a.firstBaseUpdate,i=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var o=c,d=o.next;o.next=null,i===null?l=d:i.next=d,i=o;var u=n.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==i&&(c===null?u.firstBaseUpdate=d:c.next=d,u.lastBaseUpdate=o))}if(l!==null){var p=a.baseState;i=0,u=d=o=null,c=l;do{var h=c.lane&-536870913,j=h!==c.lane;if(j?(J&h)===h:(r&h)===h){h!==0&&h===Js&&(Fc=!0),u!==null&&(u=u.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var y=n,b=c;h=e;var w=s;switch(b.tag){case 1:if(y=b.payload,typeof y=="function"){p=y.call(w,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,h=typeof y=="function"?y.call(w,p,h):y,h==null)break e;p=me({},p,h);break e;case 2:jt=!0}}h=c.callback,h!==null&&(n.flags|=64,j&&(n.flags|=8192),j=a.callbacks,j===null?a.callbacks=[h]:j.push(h))}else j={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(d=u=j,o=p):u=u.next=j,i|=h;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;j=c,c=j.next,j.next=null,a.lastBaseUpdate=j,a.shared.pending=null}}while(!0);u===null&&(o=p),a.baseState=o,a.firstBaseUpdate=d,a.lastBaseUpdate=u,l===null&&(a.shared.lanes=0),Ut|=i,n.lanes=i,n.memoizedState=p}}function Nx(n,e){if(typeof n!="function")throw Error(N(191,n));n.call(e)}function wx(n,e){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)Nx(s[n],e)}function ka(n,e){try{var s=e.updateQueue,r=s!==null?s.lastEffect:null;if(r!==null){var a=r.next;s=a;do{if((s.tag&n)===n){r=void 0;var l=s.create,i=s.inst;r=l(),i.destroy=r}s=s.next}while(s!==a)}}catch(c){ae(e,e.return,c)}}function zt(n,e,s){try{var r=e.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var l=a.next;r=l;do{if((r.tag&n)===n){var i=r.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,a=e;var o=s;try{c()}catch(d){ae(a,o,d)}}}r=r.next}while(r!==l)}}catch(d){ae(e,e.return,d)}}function Sx(n){var e=n.updateQueue;if(e!==null){var s=n.stateNode;try{wx(e,s)}catch(r){ae(n,n.return,r)}}}function kx(n,e,s){s.props=cs(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(r){ae(n,e,r)}}function Wt(n,e){try{var s=n.ref;if(s!==null){var r=n.stateNode;switch(n.tag){case 26:case 27:case 5:var a=r;break;default:a=r}typeof s=="function"?n.refCleanup=s(a):s.current=a}}catch(l){ae(n,e,l)}}function en(n,e){var s=n.ref,r=n.refCleanup;if(s!==null)if(typeof r=="function")try{r()}catch(a){ae(n,e,a)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(a){ae(n,e,a)}else s.current=null}function Cx(n){var e=n.type,s=n.memoizedProps,r=n.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break e;case"img":s.src?r.src=s.src:s.srcSet&&(r.srcset=s.srcSet)}}catch(a){ae(n,n.return,a)}}function Zu(n,e,s){try{var r=n.stateNode;Cv(r,n.type,s,e),r[Qe]=e}catch(a){ae(n,n.return,a)}}function _x(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function Hi(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_x(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Pc(n,e,s){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?s.nodeType===8?s.parentNode.insertBefore(n,e):s.insertBefore(n,e):(s.nodeType===8?(e=s.parentNode,e.insertBefore(n,s)):(e=s,e.appendChild(n)),s=s._reactRootContainer,s!=null||e.onclick!==null||(e.onclick=di));else if(r!==4&&r!==27&&(n=n.child,n!==null))for(Pc(n,e,s),n=n.sibling;n!==null;)Pc(n,e,s),n=n.sibling}function Ll(n,e,s){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?s.insertBefore(n,e):s.appendChild(n);else if(r!==4&&r!==27&&(n=n.child,n!==null))for(Ll(n,e,s),n=n.sibling;n!==null;)Ll(n,e,s),n=n.sibling}var In=!1,ge=!1,qi=!1,Gu=typeof WeakSet=="function"?WeakSet:Set,Me=null,Yu=!1;function tv(n,e){if(n=n.containerInfo,so=Vl,n=gf(n),Oo(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{s.nodeType,l.nodeType}catch{s=null;break e}var i=0,c=-1,o=-1,d=0,u=0,p=n,h=null;n:for(;;){for(var j;p!==s||a!==0&&p.nodeType!==3||(c=i+a),p!==l||r!==0&&p.nodeType!==3||(o=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(j=p.firstChild)!==null;)h=p,p=j;for(;;){if(p===n)break n;if(h===s&&++d===a&&(c=i),h===l&&++u===r&&(o=i),(j=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=j}s=c===-1||o===-1?null:{start:c,end:o}}else s=null}s=s||{start:0,end:0}}else s=null;for(ro={focusedElem:n,selectionRange:s},Vl=!1,Me=e;Me!==null;)if(e=Me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Me=n;else for(;Me!==null;){switch(e=Me,l=e.alternate,n=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(n&1024&&l!==null){n=void 0,s=e,a=l.memoizedProps,l=l.memoizedState,r=s.stateNode;try{var y=cs(s.type,a,s.elementType===s.type);n=r.getSnapshotBeforeUpdate(y,l),r.__reactInternalSnapshotBeforeUpdate=n}catch(b){ae(s,s.return,b)}}break;case 3:if(n&1024){if(n=e.stateNode.containerInfo,s=n.nodeType,s===9)lo(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":lo(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(n&1024)throw Error(N(163))}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}return y=Yu,Yu=!1,y}function Ax(n,e,s){var r=s.flags;switch(s.tag){case 0:case 11:case 15:Gn(n,s),r&4&&ka(5,s);break;case 1:if(Gn(n,s),r&4)if(n=s.stateNode,e===null)try{n.componentDidMount()}catch(c){ae(s,s.return,c)}else{var a=cs(s.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(a,e,n.__reactInternalSnapshotBeforeUpdate)}catch(c){ae(s,s.return,c)}}r&64&&Sx(s),r&512&&Wt(s,s.return);break;case 3:if(Gn(n,s),r&64&&(r=s.updateQueue,r!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{wx(r,n)}catch(c){ae(s,s.return,c)}}break;case 26:Gn(n,s),r&512&&Wt(s,s.return);break;case 27:case 5:Gn(n,s),e===null&&r&4&&Cx(s),r&512&&Wt(s,s.return);break;case 12:Gn(n,s);break;case 13:Gn(n,s),r&4&&$x(n,s);break;case 22:if(a=s.memoizedState!==null||In,!a){e=e!==null&&e.memoizedState!==null||ge;var l=In,i=ge;In=a,(ge=e)&&!i?xt(n,s,(s.subtreeFlags&8772)!==0):Gn(n,s),In=l,ge=i}r&512&&(s.memoizedProps.mode==="manual"?Wt(s,s.return):en(s,s.return));break;default:Gn(n,s)}}function Rx(n){var e=n.alternate;e!==null&&(n.alternate=null,Rx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Mo(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Se=null,Je=!1;function Zn(n,e,s){for(s=s.child;s!==null;)Mx(n,e,s),s=s.sibling}function Mx(n,e,s){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(ga,s)}catch{}switch(s.tag){case 26:ge||en(s,e),Zn(n,e,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ge||en(s,e);var r=Se,a=Je;for(Se=s.stateNode,Zn(n,e,s),s=s.stateNode,e=s.attributes;e.length;)s.removeAttributeNode(e[0]);Mo(s),Se=r,Je=a;break;case 5:ge||en(s,e);case 6:a=Se;var l=Je;if(Se=null,Zn(n,e,s),Se=a,Je=l,Se!==null)if(Je)try{n=Se,r=s.stateNode,n.nodeType===8?n.parentNode.removeChild(r):n.removeChild(r)}catch(i){ae(s,e,i)}else try{Se.removeChild(s.stateNode)}catch(i){ae(s,e,i)}break;case 18:Se!==null&&(Je?(e=Se,s=s.stateNode,e.nodeType===8?Ki(e.parentNode,s):e.nodeType===1&&Ki(e,s),oa(e)):Ki(Se,s.stateNode));break;case 4:r=Se,a=Je,Se=s.stateNode.containerInfo,Je=!0,Zn(n,e,s),Se=r,Je=a;break;case 0:case 11:case 14:case 15:ge||zt(2,s,e),ge||zt(4,s,e),Zn(n,e,s);break;case 1:ge||(en(s,e),r=s.stateNode,typeof r.componentWillUnmount=="function"&&kx(s,e,r)),Zn(n,e,s);break;case 21:Zn(n,e,s);break;case 22:ge||en(s,e),ge=(r=ge)||s.memoizedState!==null,Zn(n,e,s),ge=r;break;default:Zn(n,e,s)}}function $x(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{oa(n)}catch(s){ae(e,e.return,s)}}function sv(n){switch(n.tag){case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Gu),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Gu),e;default:throw Error(N(435,n.tag))}}function Vi(n,e){var s=sv(n);e.forEach(function(r){var a=xv.bind(null,n,r);s.has(r)||(s.add(r),r.then(a,a))})}function ln(n,e){var s=e.deletions;if(s!==null)for(var r=0;r<s.length;r++){var a=s[r],l=n,i=e,c=i;e:for(;c!==null;){switch(c.tag){case 27:case 5:Se=c.stateNode,Je=!1;break e;case 3:Se=c.stateNode.containerInfo,Je=!0;break e;case 4:Se=c.stateNode.containerInfo,Je=!0;break e}c=c.return}if(Se===null)throw Error(N(160));Mx(l,i,a),Se=null,Je=!1,l=a.alternate,l!==null&&(l.return=null),a.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Lx(e,n),e=e.sibling}var yn=null;function Lx(n,e){var s=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ln(e,n),cn(n),r&4&&(zt(3,n,n.return),ka(3,n),zt(5,n,n.return));break;case 1:ln(e,n),cn(n),r&512&&(ge||s===null||en(s,s.return)),r&64&&In&&(n=n.updateQueue,n!==null&&(r=n.callbacks,r!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?r:s.concat(r))));break;case 26:var a=yn;if(ln(e,n),cn(n),r&512&&(ge||s===null||en(s,s.return)),r&4){var l=s!==null?s.memoizedState:null;if(r=n.memoizedState,s===null)if(r===null)if(n.stateNode===null){e:{r=n.type,s=n.memoizedProps,a=a.ownerDocument||a;n:switch(r){case"title":l=a.getElementsByTagName("title")[0],(!l||l[Qr]||l[ze]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(r),a.head.insertBefore(l,a.querySelector("head > title"))),Be(l,r,s),l[ze]=n,$e(l),r=l;break e;case"link":var i=om("link","href",a).get(r+(s.href||""));if(i){for(var c=0;c<i.length;c++)if(l=i[c],l.getAttribute("href")===(s.href==null?null:s.href)&&l.getAttribute("rel")===(s.rel==null?null:s.rel)&&l.getAttribute("title")===(s.title==null?null:s.title)&&l.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){i.splice(c,1);break n}}l=a.createElement(r),Be(l,r,s),a.head.appendChild(l);break;case"meta":if(i=om("meta","content",a).get(r+(s.content||""))){for(c=0;c<i.length;c++)if(l=i[c],l.getAttribute("content")===(s.content==null?null:""+s.content)&&l.getAttribute("name")===(s.name==null?null:s.name)&&l.getAttribute("property")===(s.property==null?null:s.property)&&l.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&l.getAttribute("charset")===(s.charSet==null?null:s.charSet)){i.splice(c,1);break n}}l=a.createElement(r),Be(l,r,s),a.head.appendChild(l);break;default:throw Error(N(468,r))}l[ze]=n,$e(l),r=l}n.stateNode=r}else dm(a,n.type,n.stateNode);else n.stateNode=cm(a,r,n.memoizedProps);else l!==r?(l===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):l.count--,r===null?dm(a,n.type,n.stateNode):cm(a,r,n.memoizedProps)):r===null&&n.stateNode!==null&&Zu(n,n.memoizedProps,s.memoizedProps)}break;case 27:if(r&4&&n.alternate===null){a=n.stateNode,l=n.memoizedProps;try{for(var o=a.firstChild;o;){var d=o.nextSibling,u=o.nodeName;o[Qr]||u==="HEAD"||u==="BODY"||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=d}for(var p=n.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);Be(a,p,l),a[ze]=n,a[Qe]=l}catch(y){ae(n,n.return,y)}}case 5:if(ln(e,n),cn(n),r&512&&(ge||s===null||en(s,s.return)),n.flags&32){a=n.stateNode;try{Qs(a,"")}catch(y){ae(n,n.return,y)}}r&4&&n.stateNode!=null&&(a=n.memoizedProps,Zu(n,a,s!==null?s.memoizedProps:a)),r&1024&&(qi=!0);break;case 6:if(ln(e,n),cn(n),r&4){if(n.stateNode===null)throw Error(N(162));r=n.memoizedProps,s=n.stateNode;try{s.nodeValue=r}catch(y){ae(n,n.return,y)}}break;case 3:if(ul=null,a=yn,yn=Ul(e.containerInfo),ln(e,n),yn=a,cn(n),r&4&&s!==null&&s.memoizedState.isDehydrated)try{oa(e.containerInfo)}catch(y){ae(n,n.return,y)}qi&&(qi=!1,Ex(n));break;case 4:r=yn,yn=Ul(n.stateNode.containerInfo),ln(e,n),cn(n),yn=r;break;case 12:ln(e,n),cn(n);break;case 13:ln(e,n),cn(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(od=On()),r&4&&(r=n.updateQueue,r!==null&&(n.updateQueue=null,Vi(n,r)));break;case 22:if(r&512&&(ge||s===null||en(s,s.return)),o=n.memoizedState!==null,d=s!==null&&s.memoizedState!==null,u=In,p=ge,In=u||o,ge=p||d,ln(e,n),ge=p,In=u,cn(n),e=n.stateNode,e._current=n,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,r&8192&&(e._visibility=o?e._visibility&-2:e._visibility|1,o&&(e=In||ge,s===null||d||e||Ss(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(s=null,e=n;;){if(e.tag===5||e.tag===26||e.tag===27){if(s===null){d=s=e;try{if(a=d.stateNode,o)l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{i=d.stateNode,c=d.memoizedProps.style;var j=c!=null&&c.hasOwnProperty("display")?c.display:null;i.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(y){ae(d,d.return,y)}}}else if(e.tag===6){if(s===null){d=e;try{d.stateNode.nodeValue=o?"":d.memoizedProps}catch(y){ae(d,d.return,y)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;s===e&&(s=null),e=e.return}s===e&&(s=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=n.updateQueue,r!==null&&(s=r.retryQueue,s!==null&&(r.retryQueue=null,Vi(n,s))));break;case 19:ln(e,n),cn(n),r&4&&(r=n.updateQueue,r!==null&&(n.updateQueue=null,Vi(n,r)));break;case 21:break;default:ln(e,n),cn(n)}}function cn(n){var e=n.flags;if(e&2){try{if(n.tag!==27){e:{for(var s=n.return;s!==null;){if(_x(s)){var r=s;break e}s=s.return}throw Error(N(160))}switch(r.tag){case 27:var a=r.stateNode,l=Hi(n);Ll(n,l,a);break;case 5:var i=r.stateNode;r.flags&32&&(Qs(i,""),r.flags&=-33);var c=Hi(n);Ll(n,c,i);break;case 3:case 4:var o=r.stateNode.containerInfo,d=Hi(n);Pc(n,d,o);break;default:throw Error(N(161))}}}catch(u){ae(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Ex(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Ex(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function Gn(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ax(n,e.alternate,e),e=e.sibling}function Ss(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:zt(4,e,e.return),Ss(e);break;case 1:en(e,e.return);var s=e.stateNode;typeof s.componentWillUnmount=="function"&&kx(e,e.return,s),Ss(e);break;case 26:case 27:case 5:en(e,e.return),Ss(e);break;case 22:en(e,e.return),e.memoizedState===null&&Ss(e);break;default:Ss(e)}n=n.sibling}}function xt(n,e,s){for(s=s&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,a=n,l=e,i=l.flags;switch(l.tag){case 0:case 11:case 15:xt(a,l,s),ka(4,l);break;case 1:if(xt(a,l,s),r=l,a=r.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(d){ae(r,r.return,d)}if(r=l,a=r.updateQueue,a!==null){var c=r.stateNode;try{var o=a.shared.hiddenCallbacks;if(o!==null)for(a.shared.hiddenCallbacks=null,a=0;a<o.length;a++)Nx(o[a],c)}catch(d){ae(r,r.return,d)}}s&&i&64&&Sx(l),Wt(l,l.return);break;case 26:case 27:case 5:xt(a,l,s),s&&r===null&&i&4&&Cx(l),Wt(l,l.return);break;case 12:xt(a,l,s);break;case 13:xt(a,l,s),s&&i&4&&$x(a,l);break;case 22:l.memoizedState===null&&xt(a,l,s),Wt(l,l.return);break;default:xt(a,l,s)}e=e.sibling}}function rd(n,e){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Na(s))}function ad(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Na(n))}function mt(n,e,s,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tx(n,e,s,r),e=e.sibling}function Tx(n,e,s,r){var a=e.flags;switch(e.tag){case 0:case 11:case 15:mt(n,e,s,r),a&2048&&ka(9,e);break;case 3:mt(n,e,s,r),a&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Na(n)));break;case 12:if(a&2048){mt(n,e,s,r),n=e.stateNode;try{var l=e.memoizedProps,i=l.id,c=l.onPostCommit;typeof c=="function"&&c(i,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(o){ae(e,e.return,o)}}else mt(n,e,s,r);break;case 23:break;case 22:l=e.stateNode,e.memoizedState!==null?l._visibility&4?mt(n,e,s,r):Zr(n,e):l._visibility&4?mt(n,e,s,r):(l._visibility|=4,ks(n,e,s,r,(e.subtreeFlags&10256)!==0)),a&2048&&rd(e.alternate,e);break;case 24:mt(n,e,s,r),a&2048&&ad(e.alternate,e);break;default:mt(n,e,s,r)}}function ks(n,e,s,r,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var l=n,i=e,c=s,o=r,d=i.flags;switch(i.tag){case 0:case 11:case 15:ks(l,i,c,o,a),ka(8,i);break;case 23:break;case 22:var u=i.stateNode;i.memoizedState!==null?u._visibility&4?ks(l,i,c,o,a):Zr(l,i):(u._visibility|=4,ks(l,i,c,o,a)),a&&d&2048&&rd(i.alternate,i);break;case 24:ks(l,i,c,o,a),a&&d&2048&&ad(i.alternate,i);break;default:ks(l,i,c,o,a)}e=e.sibling}}function Zr(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var s=n,r=e,a=r.flags;switch(r.tag){case 22:Zr(s,r),a&2048&&rd(r.alternate,r);break;case 24:Zr(s,r),a&2048&&ad(r.alternate,r);break;default:Zr(s,r)}e=e.sibling}}var $r=8192;function ys(n){if(n.subtreeFlags&$r)for(n=n.child;n!==null;)Dx(n),n=n.sibling}function Dx(n){switch(n.tag){case 26:ys(n),n.flags&$r&&n.memoizedState!==null&&Gv(yn,n.memoizedState,n.memoizedProps);break;case 5:ys(n);break;case 3:case 4:var e=yn;yn=Ul(n.stateNode.containerInfo),ys(n),yn=e;break;case 22:n.memoizedState===null&&(e=n.alternate,e!==null&&e.memoizedState!==null?(e=$r,$r=16777216,ys(n),$r=e):ys(n));break;default:ys(n)}}function Ox(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function Nr(n){var e=n.deletions;if(n.flags&16){if(e!==null)for(var s=0;s<e.length;s++){var r=e[s];Me=r,zx(r,n)}Ox(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bx(n),n=n.sibling}function Bx(n){switch(n.tag){case 0:case 11:case 15:Nr(n),n.flags&2048&&zt(9,n,n.return);break;case 3:Nr(n);break;case 12:Nr(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&4&&(n.return===null||n.return.tag!==13)?(e._visibility&=-5,cl(n)):Nr(n);break;default:Nr(n)}}function cl(n){var e=n.deletions;if(n.flags&16){if(e!==null)for(var s=0;s<e.length;s++){var r=e[s];Me=r,zx(r,n)}Ox(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:zt(8,e,e.return),cl(e);break;case 22:s=e.stateNode,s._visibility&4&&(s._visibility&=-5,cl(e));break;default:cl(e)}n=n.sibling}}function zx(n,e){for(;Me!==null;){var s=Me;switch(s.tag){case 0:case 11:case 15:zt(8,s,e);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var r=s.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Na(s.memoizedState.cache)}if(r=s.child,r!==null)r.return=s,Me=r;else e:for(s=n;Me!==null;){r=Me;var a=r.sibling,l=r.return;if(Rx(r),r===s){Me=null;break e}if(a!==null){a.return=l,Me=a;break e}Me=l}}}function rv(n,e,s,r){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(n,e,s,r){return new rv(n,e,s,r)}function ld(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Mt(n,e){var s=n.alternate;return s===null?(s=xn(n.tag,e,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=e,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&31457280,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,e=n.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function Ux(n,e){n.flags&=31457282;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,e=s.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function ol(n,e,s,r,a,l){var i=0;if(r=n,typeof n=="function")ld(n)&&(i=1);else if(typeof n=="string")i=Xv(n,s,Dn.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case _s:return ts(s.children,a,l,e);case Uh:i=8,a|=24;break;case gc:return n=xn(12,s,e,a|2),n.elementType=gc,n.lanes=l,n;case jc:return n=xn(13,s,e,a),n.elementType=jc,n.lanes=l,n;case vc:return n=xn(19,s,e,a),n.elementType=vc,n.lanes=l,n;case qh:return Hx(s,a,l,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Rg:case Jn:i=10;break e;case Hh:i=9;break e;case _o:i=11;break e;case Ao:i=14;break e;case gt:i=16,r=null;break e}i=29,s=Error(N(130,n===null?"null":typeof n,"")),r=null}return e=xn(i,s,e,a),e.elementType=n,e.type=r,e.lanes=l,e}function ts(n,e,s,r){return n=xn(7,n,r,e),n.lanes=s,n}function Hx(n,e,s,r){n=xn(22,n,r,e),n.elementType=qh,n.lanes=s;var a={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var l=a._current;if(l===null)throw Error(N(456));if(!(a._pendingVisibility&2)){var i=Ot(l,2);i!==null&&(a._pendingVisibility|=2,Ye(i,l,2))}},attach:function(){var l=a._current;if(l===null)throw Error(N(456));if(a._pendingVisibility&2){var i=Ot(l,2);i!==null&&(a._pendingVisibility&=-3,Ye(i,l,2))}}};return n.stateNode=a,n}function Xi(n,e,s){return n=xn(6,n,null,e),n.lanes=s,n}function Zi(n,e,s){return e=xn(4,n.children!==null?n.children:[],n.key,e),e.lanes=s,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Yn(n){n.flags|=4}function Fu(n,e){if(e.type!=="stylesheet"||e.state.loading&4)n.flags&=-16777217;else if(n.flags|=16777216,!i0(e)){if(e=jn.current,e!==null&&((J&4194176)===J?Bn!==null:(J&62914560)!==J&&!(J&536870912)||e!==Bn))throw Br=Lc,Cf;n.flags|=8192}}function Ga(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?Ph():536870912,n.lanes|=e,er|=e)}function wr(n,e){if(!ee)switch(n.tailMode){case"hidden":e=n.tail;for(var s=null;e!==null;)e.alternate!==null&&(s=e),e=e.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function he(n){var e=n.alternate!==null&&n.alternate.child===n.child,s=0,r=0;if(e)for(var a=n.child;a!==null;)s|=a.lanes|a.childLanes,r|=a.subtreeFlags&31457280,r|=a.flags&31457280,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)s|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=r,n.childLanes=s,e}function av(n,e,s){var r=e.pendingProps;switch(Ho(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(e),null;case 1:return he(e),null;case 3:return s=e.stateNode,r=null,n!==null&&(r=n.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),st(_e),Ps(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(br(e)?Yn(e):n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(Kc(Nn),Nn=null))),he(e),null;case 26:return s=e.memoizedState,n===null?(Yn(e),s!==null?(he(e),Fu(e,s)):(he(e),e.flags&=-16777217)):s?s!==n.memoizedState?(Yn(e),he(e),Fu(e,s)):(he(e),e.flags&=-16777217):(n.memoizedProps!==r&&Yn(e),he(e),e.flags&=-16777217),null;case 27:jl(e),s=_t.current;var a=e.type;if(n!==null&&e.stateNode!=null)n.memoizedProps!==r&&Yn(e);else{if(!r){if(e.stateNode===null)throw Error(N(166));return he(e),null}n=Dn.current,br(e)?wu(e):(n=r0(a,r,s),e.stateNode=n,Yn(e))}return he(e),null;case 5:if(jl(e),s=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==r&&Yn(e);else{if(!r){if(e.stateNode===null)throw Error(N(166));return he(e),null}if(n=Dn.current,br(e))wu(e);else{switch(a=zl(_t.current),n){case 1:n=a.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=a.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof r.is=="string"?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?n.multiple=!0:r.size&&(n.size=r.size);break;default:n=typeof r.is=="string"?a.createElement(s,{is:r.is}):a.createElement(s)}}n[ze]=e,n[Qe]=r;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=n;e:switch(Be(n,s,r),s){case"button":case"input":case"select":case"textarea":n=!!r.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Yn(e)}}return he(e),e.flags&=-16777217,null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==r&&Yn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=_t.current,br(e)){if(n=e.stateNode,s=e.memoizedProps,r=null,a=Ze,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}n[ze]=e,n=!!(n.nodeValue===s||r!==null&&r.suppressHydrationWarning===!0||n0(n.nodeValue,s)),n||as(e)}else n=zl(n).createTextNode(r),n[ze]=e,e.stateNode=n}return he(e),null;case 13:if(r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(a=br(e),r!==null&&r.dehydrated!==null){if(n===null){if(!a)throw Error(N(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(N(317));a[ze]=e}else ya(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;he(e),a=!1}else Nn!==null&&(Kc(Nn),Nn=null),a=!0;if(!a)return e.flags&256?(nt(e),e):(nt(e),null)}if(nt(e),e.flags&128)return e.lanes=s,e;if(s=r!==null,n=n!==null&&n.memoizedState!==null,s){r=e.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool);var l=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048)}return s!==n&&s&&(e.child.flags|=8192),Ga(e,e.updateQueue),he(e),null;case 4:return Ps(),n===null&&md(e.stateNode.containerInfo),he(e),null;case 10:return st(e.type),he(e),null;case 19:if(Ee(Ae),a=e.memoizedState,a===null)return he(e),null;if(r=(e.flags&128)!==0,l=a.rendering,l===null)if(r)wr(a,!1);else{if(je!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(l=Cl(n),l!==null){for(e.flags|=128,wr(a,!1),n=l.updateQueue,e.updateQueue=n,Ga(e,n),e.subtreeFlags=0,n=s,s=e.child;s!==null;)Ux(s,n),s=s.sibling;return pe(Ae,Ae.current&1|2),e.child}n=n.sibling}a.tail!==null&&On()>El&&(e.flags|=128,r=!0,wr(a,!1),e.lanes=4194304)}else{if(!r)if(n=Cl(l),n!==null){if(e.flags|=128,r=!0,n=n.updateQueue,e.updateQueue=n,Ga(e,n),wr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!ee)return he(e),null}else 2*On()-a.renderingStartTime>El&&s!==536870912&&(e.flags|=128,r=!0,wr(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=On(),e.sibling=null,n=Ae.current,pe(Ae,r?n&1|2:n&1),e):(he(e),null);case 22:case 23:return nt(e),qo(),r=e.memoizedState!==null,n!==null?n.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?s&536870912&&!(e.flags&128)&&(he(e),e.subtreeFlags&6&&(e.flags|=8192)):he(e),s=e.updateQueue,s!==null&&Ga(e,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==s&&(e.flags|=2048),n!==null&&Ee(ns),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),e.memoizedState.cache!==s&&(e.flags|=2048),st(_e),he(e),null;case 25:return null}throw Error(N(156,e.tag))}function lv(n,e){switch(Ho(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return st(_e),Ps(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return jl(e),null;case 13:if(nt(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(N(340));ya()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ee(Ae),null;case 4:return Ps(),null;case 10:return st(e.type),null;case 22:case 23:return nt(e),qo(),n!==null&&Ee(ns),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return st(_e),null;case 25:return null;default:return null}}function qx(n,e){switch(Ho(e),e.tag){case 3:st(_e),Ps();break;case 26:case 27:case 5:jl(e);break;case 4:Ps();break;case 13:nt(e);break;case 19:Ee(Ae);break;case 10:st(e.type);break;case 22:case 23:nt(e),qo(),n!==null&&Ee(ns);break;case 24:st(_e)}}var iv={getCacheForType:function(n){var e=Ue(_e),s=e.data.get(n);return s===void 0&&(s=n(),e.data.set(n,s)),s}},cv=typeof WeakMap=="function"?WeakMap:Map,xe=0,ce=null,I=null,J=0,le=0,Ke=null,Qn=!1,dr=!1,id=!1,it=0,je=0,Ut=0,ss=0,cd=0,gn=0,er=0,Gr=null,Ln=null,Ic=!1,od=0,El=1/0,Tl=null,$t=null,Ya=!1,It=null,Yr=0,Qc=0,Wc=null,Fr=0,Jc=null;function sn(){if(xe&2&&J!==0)return J&-J;if(q.T!==null){var n=Js;return n!==0?n:ud()}return Jh()}function Vx(){gn===0&&(gn=!(J&536870912)||ee?Fh():536870912);var n=jn.current;return n!==null&&(n.flags|=32),gn}function Ye(n,e,s){(n===ce&&le===2||n.cancelPendingCommit!==null)&&(nr(n,0),Wn(n,J,gn,!1)),va(n,s),(!(xe&2)||n!==ce)&&(n===ce&&(!(xe&2)&&(ss|=s),je===4&&Wn(n,J,gn,!1)),Hn(n))}function Xx(n,e,s){if(xe&6)throw Error(N(327));var r=!s&&(e&60)===0&&(e&n.expiredLanes)===0||ja(n,e),a=r?uv(n,e):Gi(n,e,!0),l=r;do{if(a===0){dr&&!r&&Wn(n,e,0,!1);break}else if(a===6)Wn(n,e,0,!Qn);else{if(s=n.current.alternate,l&&!ov(s)){a=Gi(n,e,!1),l=!1;continue}if(a===2){if(l=e,n.errorRecoveryDisabledLanes&l)var i=0;else i=n.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;e:{var c=n;a=Gr;var o=c.current.memoizedState.isDehydrated;if(o&&(nr(c,i).flags|=256),i=Gi(c,i,!1),i!==2){if(id&&!o){c.errorRecoveryDisabledLanes|=l,ss|=l,a=4;break e}l=Ln,Ln=a,l!==null&&Kc(l)}a=i}if(l=!1,a!==2)continue}}if(a===1){nr(n,0),Wn(n,e,0,!0);break}e:{switch(r=n,a){case 0:case 1:throw Error(N(345));case 4:if((e&4194176)===e){Wn(r,e,gn,!Qn);break e}break;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(N(329))}if(r.finishedWork=s,r.finishedLanes=e,(e&62914560)===e&&(l=od+300-On(),10<l)){if(Wn(r,e,gn,!Qn),Jl(r,0)!==0)break e;r.timeoutHandle=s0(Pu.bind(null,r,s,Ln,Tl,Ic,e,gn,ss,er,Qn,2,-0,0),l);break e}Pu(r,s,Ln,Tl,Ic,e,gn,ss,er,Qn,0,-0,0)}}break}while(!0);Hn(n)}function Kc(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function Pu(n,e,s,r,a,l,i,c,o,d,u,p,h){var j=e.subtreeFlags;if((j&8192||(j&16785408)===16785408)&&(aa={stylesheets:null,count:0,unsuspend:Zv},Dx(e),e=Yv(),e!==null)){n.cancelPendingCommit=e(Qu.bind(null,n,s,r,a,i,c,o,1,p,h)),Wn(n,l,i,!d);return}Qu(n,s,r,a,i,c,o,u,p,h)}function ov(n){for(var e=n;;){var s=e.tag;if((s===0||s===11||s===15)&&e.flags&16384&&(s=e.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var r=0;r<s.length;r++){var a=s[r],l=a.getSnapshot;a=a.value;try{if(!rn(l(),a))return!1}catch{return!1}}if(s=e.child,e.subtreeFlags&16384&&s!==null)s.return=e,e=s;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(n,e,s,r){e&=~cd,e&=~ss,n.suspendedLanes|=e,n.pingedLanes&=~e,r&&(n.warmLanes|=e),r=n.expirationTimes;for(var a=e;0<a;){var l=31-tn(a),i=1<<l;r[l]=-1,a&=~i}s!==0&&Ih(n,s,e)}function ci(){return xe&6?!0:(Ca(0),!1)}function dd(){if(I!==null){if(le===0)var n=I.return;else n=I,tt=fs=null,Po(n),Vs=null,na=0,n=I;for(;n!==null;)qx(n.alternate,n),n=n.return;I=null}}function nr(n,e){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,Av(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),dd(),ce=n,I=s=Mt(n.current,null),J=e,le=0,Ke=null,Qn=!1,dr=ja(n,e),id=!1,er=gn=cd=ss=Ut=je=0,Ln=Gr=null,Ic=!1,e&8&&(e|=e&32);var r=n.entangledLanes;if(r!==0)for(n=n.entanglements,r&=e;0<r;){var a=31-tn(r),l=1<<a;e|=n[a],r&=~l}return it=e,ti(),s}function Zx(n,e){G=null,q.H=zn,e===Or?(e=Cu(),le=3):e===Cf?(e=Cu(),le=4):le=e===fx?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ke=e,I===null&&(je=1,Ml(n,fn(e,n.current)))}function Gx(){var n=q.H;return q.H=zn,n===null?zn:n}function Yx(){var n=q.A;return q.A=iv,n}function eo(){je=4,Qn||(J&4194176)!==J&&jn.current!==null||(dr=!0),!(Ut&134217727)&&!(ss&134217727)||ce===null||Wn(ce,J,gn,!1)}function Gi(n,e,s){var r=xe;xe|=2;var a=Gx(),l=Yx();(ce!==n||J!==e)&&(Tl=null,nr(n,e)),e=!1;var i=je;e:do try{if(le!==0&&I!==null){var c=I,o=Ke;switch(le){case 8:dd(),i=6;break e;case 3:case 2:case 6:jn.current===null&&(e=!0);var d=le;if(le=0,Ke=null,Bs(n,c,o,d),s&&dr){i=0;break e}break;default:d=le,le=0,Ke=null,Bs(n,c,o,d)}}dv(),i=je;break}catch(u){Zx(n,u)}while(!0);return e&&n.shellSuspendCounter++,tt=fs=null,xe=r,q.H=a,q.A=l,I===null&&(ce=null,J=0,ti()),i}function dv(){for(;I!==null;)Fx(I)}function uv(n,e){var s=xe;xe|=2;var r=Gx(),a=Yx();ce!==n||J!==e?(Tl=null,El=On()+500,nr(n,e)):dr=ja(n,e);e:do try{if(le!==0&&I!==null){e=I;var l=Ke;n:switch(le){case 1:le=0,Ke=null,Bs(n,e,l,1);break;case 2:if(ku(l)){le=0,Ke=null,Iu(e);break}e=function(){le===2&&ce===n&&(le=7),Hn(n)},l.then(e,e);break e;case 3:le=7;break e;case 4:le=5;break e;case 7:ku(l)?(le=0,Ke=null,Iu(e)):(le=0,Ke=null,Bs(n,e,l,7));break;case 5:var i=null;switch(I.tag){case 26:i=I.memoizedState;case 5:case 27:var c=I;if(!i||i0(i)){le=0,Ke=null;var o=c.sibling;if(o!==null)I=o;else{var d=c.return;d!==null?(I=d,oi(d)):I=null}break n}}le=0,Ke=null,Bs(n,e,l,5);break;case 6:le=0,Ke=null,Bs(n,e,l,6);break;case 8:dd(),je=6;break e;default:throw Error(N(462))}}mv();break}catch(u){Zx(n,u)}while(!0);return tt=fs=null,q.H=r,q.A=a,xe=s,I!==null?0:(ce=null,J=0,ti(),je)}function mv(){for(;I!==null&&!Tg();)Fx(I)}function Fx(n){var e=bx(n.alternate,n,it);n.memoizedProps=n.pendingProps,e===null?oi(n):I=e}function Iu(n){var e=n,s=e.alternate;switch(e.tag){case 15:case 0:e=Hu(s,e,e.pendingProps,e.type,void 0,J);break;case 11:e=Hu(s,e,e.pendingProps,e.type.render,e.ref,J);break;case 5:Po(e);default:qx(s,e),e=I=Ux(e,it),e=bx(s,e,it)}n.memoizedProps=n.pendingProps,e===null?oi(n):I=e}function Bs(n,e,s,r){tt=fs=null,Po(e),Vs=null,na=0;var a=e.return;try{if(ev(n,a,e,s,J)){je=1,Ml(n,fn(s,n.current)),I=null;return}}catch(l){if(a!==null)throw I=a,l;je=1,Ml(n,fn(s,n.current)),I=null;return}e.flags&32768?(ee||r===1?n=!0:dr||J&536870912?n=!1:(Qn=n=!0,(r===2||r===3||r===6)&&(r=jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Px(e,n)):oi(e)}function oi(n){var e=n;do{if(e.flags&32768){Px(e,Qn);return}n=e.return;var s=av(e.alternate,e,it);if(s!==null){I=s;return}if(e=e.sibling,e!==null){I=e;return}I=e=n}while(e!==null);je===0&&(je=5)}function Px(n,e){do{var s=lv(n.alternate,n);if(s!==null){s.flags&=32767,I=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!e&&(n=n.sibling,n!==null)){I=n;return}I=n=s}while(n!==null);je=6,I=null}function Qu(n,e,s,r,a,l,i,c,o,d){var u=q.T,p=ue.p;try{ue.p=2,q.T=null,pv(n,e,s,r,p,a,l,i,c,o,d)}finally{q.T=u,ue.p=p}}function pv(n,e,s,r,a,l,i,c){do Ys();while(It!==null);if(xe&6)throw Error(N(327));var o=n.finishedWork;if(r=n.finishedLanes,o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(N(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var d=o.lanes|o.childLanes;if(d|=Bo,Gg(n,r,d,l,i,c),n===ce&&(I=ce=null,J=0),!(o.subtreeFlags&10256)&&!(o.flags&10256)||Ya||(Ya=!0,Qc=d,Wc=s,gv(vl,function(){return Ys(),null})),s=(o.flags&15990)!==0,o.subtreeFlags&15990||s?(s=q.T,q.T=null,l=ue.p,ue.p=2,i=xe,xe|=4,tv(n,o),Lx(o,n),Bj(ro,n.containerInfo),Vl=!!so,ro=so=null,n.current=o,Ax(n,o.alternate,o),Dg(),xe=i,ue.p=l,q.T=s):n.current=o,Ya?(Ya=!1,It=n,Yr=r):Ix(n,d),d=n.pendingLanes,d===0&&($t=null),Hg(o.stateNode),Hn(n),e!==null)for(a=n.onRecoverableError,o=0;o<e.length;o++)d=e[o],a(d.value,{componentStack:d.stack});return Yr&3&&Ys(),d=n.pendingLanes,r&4194218&&d&42?n===Jc?Fr++:(Fr=0,Jc=n):Fr=0,Ca(0),null}function Ix(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Na(e)))}function Ys(){if(It!==null){var n=It,e=Qc;Qc=0;var s=Wh(Yr),r=q.T,a=ue.p;try{if(ue.p=32>s?32:s,q.T=null,It===null)var l=!1;else{s=Wc,Wc=null;var i=It,c=Yr;if(It=null,Yr=0,xe&6)throw Error(N(331));var o=xe;if(xe|=4,Bx(i.current),Tx(i,i.current,c,s),xe=o,Ca(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(ga,i)}catch{}l=!0}return l}finally{ue.p=a,q.T=r,Ix(n,e)}}return!1}function Wu(n,e,s){e=fn(s,e),e=Uc(n.stateNode,e,2),n=Rt(n,e,2),n!==null&&(va(n,2),Hn(n))}function ae(n,e,s){if(n.tag===3)Wu(n,n,s);else for(;e!==null;){if(e.tag===3){Wu(e,n,s);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){n=fn(s,n),s=px(2),r=Rt(e,s,2),r!==null&&(hx(s,r,e,n),va(r,2),Hn(r));break}}e=e.return}}function Yi(n,e,s){var r=n.pingCache;if(r===null){r=n.pingCache=new cv;var a=new Set;r.set(e,a)}else a=r.get(e),a===void 0&&(a=new Set,r.set(e,a));a.has(s)||(id=!0,a.add(s),n=hv.bind(null,n,e,s),e.then(n,n))}function hv(n,e,s){var r=n.pingCache;r!==null&&r.delete(e),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,ce===n&&(J&s)===s&&(je===4||je===3&&(J&62914560)===J&&300>On()-od?!(xe&2)&&nr(n,0):cd|=s,er===J&&(er=0)),Hn(n)}function Qx(n,e){e===0&&(e=Ph()),n=Ot(n,e),n!==null&&(va(n,e),Hn(n))}function fv(n){var e=n.memoizedState,s=0;e!==null&&(s=e.retryLane),Qx(n,s)}function xv(n,e){var s=0;switch(n.tag){case 13:var r=n.stateNode,a=n.memoizedState;a!==null&&(s=a.retryLane);break;case 19:r=n.stateNode;break;case 22:r=n.stateNode._retryCache;break;default:throw Error(N(314))}r!==null&&r.delete(e),Qx(n,s)}function gv(n,e){return Ro(n,e)}var Dl=null,Cs=null,no=!1,Ol=!1,Fi=!1,rs=0;function Hn(n){n!==Cs&&n.next===null&&(Cs===null?Dl=Cs=n:Cs=Cs.next=n),Ol=!0,no||(no=!0,vv(jv))}function Ca(n,e){if(!Fi&&Ol){Fi=!0;do for(var s=!1,r=Dl;r!==null;){if(n!==0){var a=r.pendingLanes;if(a===0)var l=0;else{var i=r.suspendedLanes,c=r.pingedLanes;l=(1<<31-tn(42|n)+1)-1,l&=a&~(i&~c),l=l&201326677?l&201326677|1:l?l|2:0}l!==0&&(s=!0,Ju(r,l))}else l=J,l=Jl(r,r===ce?l:0),!(l&3)||ja(r,l)||(s=!0,Ju(r,l));r=r.next}while(s);Fi=!1}}function jv(){Ol=no=!1;var n=0;rs!==0&&(_v()&&(n=rs),rs=0);for(var e=On(),s=null,r=Dl;r!==null;){var a=r.next,l=Wx(r,e);l===0?(r.next=null,s===null?Dl=a:s.next=a,a===null&&(Cs=s)):(s=r,(n!==0||l&3)&&(Ol=!0)),r=a}Ca(n)}function Wx(n,e){for(var s=n.suspendedLanes,r=n.pingedLanes,a=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var i=31-tn(l),c=1<<i,o=a[i];o===-1?(!(c&s)||c&r)&&(a[i]=Zg(c,e)):o<=e&&(n.expiredLanes|=c),l&=~c}if(e=ce,s=J,s=Jl(n,n===e?s:0),r=n.callbackNode,s===0||n===e&&le===2||n.cancelPendingCommit!==null)return r!==null&&r!==null&&wi(r),n.callbackNode=null,n.callbackPriority=0;if(!(s&3)||ja(n,s)){if(e=s&-s,e===n.callbackPriority)return e;switch(r!==null&&wi(r),Wh(s)){case 2:case 8:s=Gh;break;case 32:s=vl;break;case 268435456:s=Yh;break;default:s=vl}return r=Jx.bind(null,n),s=Ro(s,r),n.callbackPriority=e,n.callbackNode=s,e}return r!==null&&r!==null&&wi(r),n.callbackPriority=2,n.callbackNode=null,2}function Jx(n,e){var s=n.callbackNode;if(Ys()&&n.callbackNode!==s)return null;var r=J;return r=Jl(n,n===ce?r:0),r===0?null:(Xx(n,r,e),Wx(n,On()),n.callbackNode!=null&&n.callbackNode===s?Jx.bind(null,n):null)}function Ju(n,e){if(Ys())return null;Xx(n,e,!0)}function vv(n){Rv(function(){xe&6?Ro(Zh,n):n()})}function ud(){return rs===0&&(rs=Fh()),rs}function Ku(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:tl(""+n)}function em(n,e){var s=e.ownerDocument.createElement("input");return s.name=e.name,s.value=e.value,n.id&&s.setAttribute("form",n.id),e.parentNode.insertBefore(s,e),n=new FormData(n),s.parentNode.removeChild(s),n}function bv(n,e,s,r,a){if(e==="submit"&&s&&s.stateNode===a){var l=Ku((a[Qe]||null).action),i=r.submitter;i&&(e=(e=i[Qe]||null)?Ku(e.formAction):i.getAttribute("formAction"),e!==null&&(l=e,i=null));var c=new Kl("action","action",null,r,a);n.push({event:c,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rs!==0){var o=i?em(a,i):new FormData(a);Bc(s,{pending:!0,data:o,method:a.method,action:l},null,o)}}else typeof l=="function"&&(c.preventDefault(),o=i?em(a,i):new FormData(a),Bc(s,{pending:!0,data:o,method:a.method,action:l},l,o))},currentTarget:a}]})}}for(var Pi=0;Pi<yu.length;Pi++){var Ii=yu[Pi],yv=Ii.toLowerCase(),Nv=Ii[0].toUpperCase()+Ii.slice(1);Cn(yv,"on"+Nv)}Cn(vf,"onAnimationEnd");Cn(bf,"onAnimationIteration");Cn(yf,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(Uj,"onTransitionRun");Cn(Hj,"onTransitionStart");Cn(qj,"onTransitionCancel");Cn(Nf,"onTransitionEnd");Is("onMouseEnter",["mouseout","mouseover"]);Is("onMouseLeave",["mouseout","mouseover"]);Is("onPointerEnter",["pointerout","pointerover"]);Is("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sa));function Kx(n,e){e=(e&4)!==0;for(var s=0;s<n.length;s++){var r=n[s],a=r.event;r=r.listeners;e:{var l=void 0;if(e)for(var i=r.length-1;0<=i;i--){var c=r[i],o=c.instance,d=c.currentTarget;if(c=c.listener,o!==l&&a.isPropagationStopped())break e;l=c,a.currentTarget=d;try{l(a)}catch(u){Rl(u)}a.currentTarget=null,l=o}else for(i=0;i<r.length;i++){if(c=r[i],o=c.instance,d=c.currentTarget,c=c.listener,o!==l&&a.isPropagationStopped())break e;l=c,a.currentTarget=d;try{l(a)}catch(u){Rl(u)}a.currentTarget=null,l=o}}}}function W(n,e){var s=e[Sc];s===void 0&&(s=e[Sc]=new Set);var r=n+"__bubble";s.has(r)||(e0(e,n,2,!1),s.add(r))}function Qi(n,e,s){var r=0;e&&(r|=4),e0(s,n,r,e)}var Fa="_reactListening"+Math.random().toString(36).slice(2);function md(n){if(!n[Fa]){n[Fa]=!0,Kh.forEach(function(s){s!=="selectionchange"&&(wv.has(s)||Qi(s,!1,n),Qi(s,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Fa]||(e[Fa]=!0,Qi("selectionchange",!1,e))}}function e0(n,e,s,r){switch(m0(e)){case 2:var a=Iv;break;case 8:a=Qv;break;default:a=xd}s=a.bind(null,e,s,n),a=void 0,!Ac||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),r?a!==void 0?n.addEventListener(e,s,{capture:!0,passive:a}):n.addEventListener(e,s,!0):a!==void 0?n.addEventListener(e,s,{passive:a}):n.addEventListener(e,s,!1)}function Wi(n,e,s,r,a){var l=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var c=r.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var o=i.tag;if((o===3||o===4)&&(o=i.stateNode.containerInfo,o===a||o.nodeType===8&&o.parentNode===a))return;i=i.return}for(;c!==null;){if(i=Qt(c),i===null)return;if(o=i.tag,o===5||o===6||o===26||o===27){r=l=i;continue e}c=c.parentNode}}r=r.return}cf(function(){var d=l,u=Lo(s),p=[];e:{var h=wf.get(n);if(h!==void 0){var j=Kl,y=n;switch(n){case"keypress":if(rl(s)===0)break e;case"keydown":case"keyup":j=xj;break;case"focusin":y="focus",j=Ai;break;case"focusout":y="blur",j=Ai;break;case"beforeblur":case"afterblur":j=Ai;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=rj;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=vj;break;case vf:case bf:case yf:j=ij;break;case Nf:j=yj;break;case"scroll":case"scrollend":j=tj;break;case"wheel":j=wj;break;case"copy":case"cut":case"paste":j=oj;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=uu;break;case"toggle":case"beforetoggle":j=kj}var b=(e&4)!==0,w=!b&&(n==="scroll"||n==="scrollend"),x=b?h!==null?h+"Capture":null:h;b=[];for(var f=d,g;f!==null;){var v=f;if(g=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||g===null||x===null||(v=Wr(f,x),v!=null&&b.push(ra(f,v,g))),w)break;f=f.return}0<b.length&&(h=new j(h,y,null,s,u),p.push({event:h,listeners:b}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",j=n==="mouseout"||n==="pointerout",h&&s!==_c&&(y=s.relatedTarget||s.fromElement)&&(Qt(y)||y[cr]))break e;if((j||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,j?(y=s.relatedTarget||s.toElement,j=d,y=y?Qt(y):null,y!==null&&(w=ir(y),b=y.tag,y!==w||b!==5&&b!==27&&b!==6)&&(y=null)):(j=null,y=d),j!==y)){if(b=ou,v="onMouseLeave",x="onMouseEnter",f="mouse",(n==="pointerout"||n==="pointerover")&&(b=uu,v="onPointerLeave",x="onPointerEnter",f="pointer"),w=j==null?h:Mr(j),g=y==null?h:Mr(y),h=new b(v,f+"leave",j,s,u),h.target=w,h.relatedTarget=g,v=null,Qt(u)===d&&(b=new b(x,f+"enter",y,s,u),b.target=g,b.relatedTarget=w,v=b),w=v,j&&y)n:{for(b=j,x=y,f=0,g=b;g;g=Ns(g))f++;for(g=0,v=x;v;v=Ns(v))g++;for(;0<f-g;)b=Ns(b),f--;for(;0<g-f;)x=Ns(x),g--;for(;f--;){if(b===x||x!==null&&b===x.alternate)break n;b=Ns(b),x=Ns(x)}b=null}else b=null;j!==null&&nm(p,h,j,b,!1),y!==null&&w!==null&&nm(p,w,y,b,!0)}}e:{if(h=d?Mr(d):window,j=h.nodeName&&h.nodeName.toLowerCase(),j==="select"||j==="input"&&h.type==="file")var S=fu;else if(hu(h))if(hf)S=Dj;else{S=Ej;var R=Lj}else j=h.nodeName,!j||j.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?d&&$o(d.elementType)&&(S=fu):S=Tj;if(S&&(S=S(n,d))){pf(p,S,s,u);break e}R&&R(n,h,d),n==="focusout"&&d&&h.type==="number"&&d.memoizedProps.value!=null&&Cc(h,"number",h.value)}switch(R=d?Mr(d):window,n){case"focusin":(hu(R)||R.contentEditable==="true")&&($s=R,Rc=d,Dr=null);break;case"focusout":Dr=Rc=$s=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,bu(p,s,u);break;case"selectionchange":if(zj)break;case"keydown":case"keyup":bu(p,s,u)}var C;if(Do)e:{switch(n){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Ms?uf(n,s)&&($="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&($="onCompositionStart");$&&(df&&s.locale!=="ko"&&(Ms||$!=="onCompositionStart"?$==="onCompositionEnd"&&Ms&&(C=of()):(St=u,Eo="value"in St?St.value:St.textContent,Ms=!0)),R=Bl(d,$),0<R.length&&($=new du($,n,null,s,u),p.push({event:$,listeners:R}),C?$.data=C:(C=mf(s),C!==null&&($.data=C)))),(C=_j?Aj(n,s):Rj(n,s))&&($=Bl(d,"onBeforeInput"),0<$.length&&(R=new du("onBeforeInput","beforeinput",null,s,u),p.push({event:R,listeners:$}),R.data=C)),bv(p,n,d,s,u)}Kx(p,e)})}function ra(n,e,s){return{instance:n,listener:e,currentTarget:s}}function Bl(n,e){for(var s=e+"Capture",r=[];n!==null;){var a=n,l=a.stateNode;a=a.tag,a!==5&&a!==26&&a!==27||l===null||(a=Wr(n,s),a!=null&&r.unshift(ra(n,a,l)),a=Wr(n,e),a!=null&&r.push(ra(n,a,l))),n=n.return}return r}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function nm(n,e,s,r,a){for(var l=e._reactName,i=[];s!==null&&s!==r;){var c=s,o=c.alternate,d=c.stateNode;if(c=c.tag,o!==null&&o===r)break;c!==5&&c!==26&&c!==27||d===null||(o=d,a?(d=Wr(s,l),d!=null&&i.unshift(ra(s,d,o))):a||(d=Wr(s,l),d!=null&&i.push(ra(s,d,o)))),s=s.return}i.length!==0&&n.push({event:e,listeners:i})}var Sv=/\r\n?/g,kv=/\u0000|\uFFFD/g;function tm(n){return(typeof n=="string"?n:""+n).replace(Sv,`
`).replace(kv,"")}function n0(n,e){return e=tm(e),tm(n)===e}function di(){}function se(n,e,s,r,a,l){switch(s){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Qs(n,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Qs(n,""+r);break;case"className":Ua(n,"class",r);break;case"tabIndex":Ua(n,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ua(n,s,r);break;case"style":lf(n,r,l);break;case"data":if(e!=="object"){Ua(n,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||s!=="href")){n.removeAttribute(s);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){n.removeAttribute(s);break}r=tl(""+r),n.setAttribute(s,r);break;case"action":case"formAction":if(typeof r=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(s==="formAction"?(e!=="input"&&se(n,e,"name",a.name,a,null),se(n,e,"formEncType",a.formEncType,a,null),se(n,e,"formMethod",a.formMethod,a,null),se(n,e,"formTarget",a.formTarget,a,null)):(se(n,e,"encType",a.encType,a,null),se(n,e,"method",a.method,a,null),se(n,e,"target",a.target,a,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){n.removeAttribute(s);break}r=tl(""+r),n.setAttribute(s,r);break;case"onClick":r!=null&&(n.onclick=di);break;case"onScroll":r!=null&&W("scroll",n);break;case"onScrollEnd":r!=null&&W("scrollend",n);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(N(61));if(s=r.__html,s!=null){if(a.children!=null)throw Error(N(60));n.innerHTML=s}}break;case"multiple":n.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":n.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){n.removeAttribute("xlink:href");break}s=tl(""+r),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(s,""+r):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":r===!0?n.setAttribute(s,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(s,r):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?n.setAttribute(s,r):n.removeAttribute(s);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?n.removeAttribute(s):n.setAttribute(s,r);break;case"popover":W("beforetoggle",n),W("toggle",n),nl(n,"popover",r);break;case"xlinkActuate":Xn(n,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Xn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Xn(n,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Xn(n,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Xn(n,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Xn(n,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Xn(n,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Xn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Xn(n,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":nl(n,"is",r);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ej.get(s)||s,nl(n,s,r))}}function to(n,e,s,r,a,l){switch(s){case"style":lf(n,r,l);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(N(61));if(s=r.__html,s!=null){if(a.children!=null)throw Error(N(60));n.innerHTML=s}}break;case"children":typeof r=="string"?Qs(n,r):(typeof r=="number"||typeof r=="bigint")&&Qs(n,""+r);break;case"onScroll":r!=null&&W("scroll",n);break;case"onScrollEnd":r!=null&&W("scrollend",n);break;case"onClick":r!=null&&(n.onclick=di);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ef.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(a=s.endsWith("Capture"),e=s.slice(2,a?s.length-7:void 0),l=n[Qe]||null,l=l!=null?l[s]:null,typeof l=="function"&&n.removeEventListener(e,l,a),typeof r=="function")){typeof l!="function"&&l!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(e,r,a);break e}s in n?n[s]=r:r===!0?n.setAttribute(s,""):nl(n,s,r)}}}function Be(n,e,s){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",n),W("load",n);var r=!1,a=!1,l;for(l in s)if(s.hasOwnProperty(l)){var i=s[l];if(i!=null)switch(l){case"src":r=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(N(137,e));default:se(n,e,l,i,s,null)}}a&&se(n,e,"srcSet",s.srcSet,s,null),r&&se(n,e,"src",s.src,s,null);return;case"input":W("invalid",n);var c=l=i=a=null,o=null,d=null;for(r in s)if(s.hasOwnProperty(r)){var u=s[r];if(u!=null)switch(r){case"name":a=u;break;case"type":i=u;break;case"checked":o=u;break;case"defaultChecked":d=u;break;case"value":l=u;break;case"defaultValue":c=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(N(137,e));break;default:se(n,e,r,u,s,null)}}sf(n,l,c,o,d,i,a,!1),bl(n);return;case"select":W("invalid",n),r=i=l=null;for(a in s)if(s.hasOwnProperty(a)&&(c=s[a],c!=null))switch(a){case"value":l=c;break;case"defaultValue":i=c;break;case"multiple":r=c;default:se(n,e,a,c,s,null)}e=l,s=i,n.multiple=!!r,e!=null?Hs(n,!!r,e,!1):s!=null&&Hs(n,!!r,s,!0);return;case"textarea":W("invalid",n),l=a=r=null;for(i in s)if(s.hasOwnProperty(i)&&(c=s[i],c!=null))switch(i){case"value":r=c;break;case"defaultValue":a=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(N(91));break;default:se(n,e,i,c,s,null)}af(n,r,a,l),bl(n);return;case"option":for(o in s)if(s.hasOwnProperty(o)&&(r=s[o],r!=null))switch(o){case"selected":n.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:se(n,e,o,r,s,null)}return;case"dialog":W("cancel",n),W("close",n);break;case"iframe":case"object":W("load",n);break;case"video":case"audio":for(r=0;r<sa.length;r++)W(sa[r],n);break;case"image":W("error",n),W("load",n);break;case"details":W("toggle",n);break;case"embed":case"source":case"link":W("error",n),W("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in s)if(s.hasOwnProperty(d)&&(r=s[d],r!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(N(137,e));default:se(n,e,d,r,s,null)}return;default:if($o(e)){for(u in s)s.hasOwnProperty(u)&&(r=s[u],r!==void 0&&to(n,e,u,r,s,void 0));return}}for(c in s)s.hasOwnProperty(c)&&(r=s[c],r!=null&&se(n,e,c,r,s,null))}function Cv(n,e,s,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,i=null,c=null,o=null,d=null,u=null;for(j in s){var p=s[j];if(s.hasOwnProperty(j)&&p!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":o=p;default:r.hasOwnProperty(j)||se(n,e,j,null,r,p)}}for(var h in r){var j=r[h];if(p=s[h],r.hasOwnProperty(h)&&(j!=null||p!=null))switch(h){case"type":l=j;break;case"name":a=j;break;case"checked":d=j;break;case"defaultChecked":u=j;break;case"value":i=j;break;case"defaultValue":c=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(N(137,e));break;default:j!==p&&se(n,e,h,j,r,p)}}kc(n,i,c,o,d,u,l,a);return;case"select":j=i=c=h=null;for(l in s)if(o=s[l],s.hasOwnProperty(l)&&o!=null)switch(l){case"value":break;case"multiple":j=o;default:r.hasOwnProperty(l)||se(n,e,l,null,r,o)}for(a in r)if(l=r[a],o=s[a],r.hasOwnProperty(a)&&(l!=null||o!=null))switch(a){case"value":h=l;break;case"defaultValue":c=l;break;case"multiple":i=l;default:l!==o&&se(n,e,a,l,r,o)}e=c,s=i,r=j,h!=null?Hs(n,!!s,h,!1):!!r!=!!s&&(e!=null?Hs(n,!!s,e,!0):Hs(n,!!s,s?[]:"",!1));return;case"textarea":j=h=null;for(c in s)if(a=s[c],s.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:se(n,e,c,null,r,a)}for(i in r)if(a=r[i],l=s[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case"value":h=a;break;case"defaultValue":j=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(N(91));break;default:a!==l&&se(n,e,i,a,r,l)}rf(n,h,j);return;case"option":for(var y in s)if(h=s[y],s.hasOwnProperty(y)&&h!=null&&!r.hasOwnProperty(y))switch(y){case"selected":n.selected=!1;break;default:se(n,e,y,null,r,h)}for(o in r)if(h=r[o],j=s[o],r.hasOwnProperty(o)&&h!==j&&(h!=null||j!=null))switch(o){case"selected":n.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:se(n,e,o,h,r,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in s)h=s[b],s.hasOwnProperty(b)&&h!=null&&!r.hasOwnProperty(b)&&se(n,e,b,null,r,h);for(d in r)if(h=r[d],j=s[d],r.hasOwnProperty(d)&&h!==j&&(h!=null||j!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(N(137,e));break;default:se(n,e,d,h,r,j)}return;default:if($o(e)){for(var w in s)h=s[w],s.hasOwnProperty(w)&&h!==void 0&&!r.hasOwnProperty(w)&&to(n,e,w,void 0,r,h);for(u in r)h=r[u],j=s[u],!r.hasOwnProperty(u)||h===j||h===void 0&&j===void 0||to(n,e,u,h,r,j);return}}for(var x in s)h=s[x],s.hasOwnProperty(x)&&h!=null&&!r.hasOwnProperty(x)&&se(n,e,x,null,r,h);for(p in r)h=r[p],j=s[p],!r.hasOwnProperty(p)||h===j||h==null&&j==null||se(n,e,p,h,r,j)}var so=null,ro=null;function zl(n){return n.nodeType===9?n:n.ownerDocument}function sm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t0(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function ao(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ji=null;function _v(){var n=window.event;return n&&n.type==="popstate"?n===Ji?!1:(Ji=n,!0):(Ji=null,!1)}var s0=typeof setTimeout=="function"?setTimeout:void 0,Av=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,Rv=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(n){return rm.resolve(null).then(n).catch(Mv)}:s0;function Mv(n){setTimeout(function(){throw n})}function Ki(n,e){var s=e,r=0;do{var a=s.nextSibling;if(n.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(r===0){n.removeChild(a),oa(e);return}r--}else s!=="$"&&s!=="$?"&&s!=="$!"||r++;s=a}while(s);oa(e)}function lo(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var s=e;switch(e=e.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":lo(s),Mo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function $v(n,e,s,r){for(;n.nodeType===1;){var a=s;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(r){if(!n[Qr])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==a.rel||n.getAttribute("href")!==(a.href==null?null:a.href)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||n.getAttribute("title")!==(a.title==null?null:a.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(a.src==null?null:a.src)||n.getAttribute("type")!==(a.type==null?null:a.type)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=a.name==null?null:""+a.name;if(a.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=Sn(n.nextSibling),n===null)break}return null}function Lv(n,e,s){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Sn(n.nextSibling),n===null))return null;return n}function Sn(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return n}function am(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(e===0)return n;e--}else s==="/$"&&e++}n=n.previousSibling}return null}function r0(n,e,s){switch(e=zl(s),n){case"html":if(n=e.documentElement,!n)throw Error(N(452));return n;case"head":if(n=e.head,!n)throw Error(N(453));return n;case"body":if(n=e.body,!n)throw Error(N(454));return n;default:throw Error(N(451))}}var vn=new Map,lm=new Set;function Ul(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var ct=ue.d;ue.d={f:Ev,r:Tv,D:Dv,C:Ov,L:Bv,m:zv,X:Hv,S:Uv,M:qv};function Ev(){var n=ct.f(),e=ci();return n||e}function Tv(n){var e=or(n);e!==null&&e.tag===5&&e.type==="form"?rx(e):ct.r(n)}var ur=typeof document>"u"?null:document;function a0(n,e,s){var r=ur;if(r&&typeof e=="string"&&e){var a=hn(e);a='link[rel="'+n+'"][href="'+a+'"]',typeof s=="string"&&(a+='[crossorigin="'+s+'"]'),lm.has(a)||(lm.add(a),n={rel:n,crossOrigin:s,href:e},r.querySelector(a)===null&&(e=r.createElement("link"),Be(e,"link",n),$e(e),r.head.appendChild(e)))}}function Dv(n){ct.D(n),a0("dns-prefetch",n,null)}function Ov(n,e){ct.C(n,e),a0("preconnect",n,e)}function Bv(n,e,s){ct.L(n,e,s);var r=ur;if(r&&n&&e){var a='link[rel="preload"][as="'+hn(e)+'"]';e==="image"&&s&&s.imageSrcSet?(a+='[imagesrcset="'+hn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(a+='[imagesizes="'+hn(s.imageSizes)+'"]')):a+='[href="'+hn(n)+'"]';var l=a;switch(e){case"style":l=tr(n);break;case"script":l=mr(n)}vn.has(l)||(n=me({rel:"preload",href:e==="image"&&s&&s.imageSrcSet?void 0:n,as:e},s),vn.set(l,n),r.querySelector(a)!==null||e==="style"&&r.querySelector(_a(l))||e==="script"&&r.querySelector(Aa(l))||(e=r.createElement("link"),Be(e,"link",n),$e(e),r.head.appendChild(e)))}}function zv(n,e){ct.m(n,e);var s=ur;if(s&&n){var r=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+hn(r)+'"][href="'+hn(n)+'"]',l=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=mr(n)}if(!vn.has(l)&&(n=me({rel:"modulepreload",href:n},e),vn.set(l,n),s.querySelector(a)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Aa(l)))return}r=s.createElement("link"),Be(r,"link",n),$e(r),s.head.appendChild(r)}}}function Uv(n,e,s){ct.S(n,e,s);var r=ur;if(r&&n){var a=Us(r).hoistableStyles,l=tr(n);e=e||"default";var i=a.get(l);if(!i){var c={loading:0,preload:null};if(i=r.querySelector(_a(l)))c.loading=5;else{n=me({rel:"stylesheet",href:n,"data-precedence":e},s),(s=vn.get(l))&&pd(n,s);var o=i=r.createElement("link");$e(o),Be(o,"link",n),o._p=new Promise(function(d,u){o.onload=d,o.onerror=u}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,dl(i,e,r)}i={type:"stylesheet",instance:i,count:1,state:c},a.set(l,i)}}}function Hv(n,e){ct.X(n,e);var s=ur;if(s&&n){var r=Us(s).hoistableScripts,a=mr(n),l=r.get(a);l||(l=s.querySelector(Aa(a)),l||(n=me({src:n,async:!0},e),(e=vn.get(a))&&hd(n,e),l=s.createElement("script"),$e(l),Be(l,"link",n),s.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}}function qv(n,e){ct.M(n,e);var s=ur;if(s&&n){var r=Us(s).hoistableScripts,a=mr(n),l=r.get(a);l||(l=s.querySelector(Aa(a)),l||(n=me({src:n,async:!0,type:"module"},e),(e=vn.get(a))&&hd(n,e),l=s.createElement("script"),$e(l),Be(l,"link",n),s.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}}function im(n,e,s,r){var a=(a=_t.current)?Ul(a):null;if(!a)throw Error(N(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(e=tr(s.href),s=Us(a).hoistableStyles,r=s.get(e),r||(r={type:"style",instance:null,count:0,state:null},s.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=tr(s.href);var l=Us(a).hoistableStyles,i=l.get(n);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,i),(l=a.querySelector(_a(n)))&&!l._p&&(i.instance=l,i.state.loading=5),vn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},vn.set(n,s),l||Vv(a,n,s,i.state))),e&&r===null)throw Error(N(528,""));return i}if(e&&r!==null)throw Error(N(529,""));return null;case"script":return e=s.async,s=s.src,typeof s=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=mr(s),s=Us(a).hoistableScripts,r=s.get(e),r||(r={type:"script",instance:null,count:0,state:null},s.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(N(444,n))}}function tr(n){return'href="'+hn(n)+'"'}function _a(n){return'link[rel="stylesheet"]['+n+"]"}function l0(n){return me({},n,{"data-precedence":n.precedence,precedence:null})}function Vv(n,e,s,r){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=n.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),Be(e,"link",s),$e(e),n.head.appendChild(e))}function mr(n){return'[src="'+hn(n)+'"]'}function Aa(n){return"script[async]"+n}function cm(n,e,s){if(e.count++,e.instance===null)switch(e.type){case"style":var r=n.querySelector('style[data-href~="'+hn(s.href)+'"]');if(r)return e.instance=r,$e(r),r;var a=me({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return r=(n.ownerDocument||n).createElement("style"),$e(r),Be(r,"style",a),dl(r,s.precedence,n),e.instance=r;case"stylesheet":a=tr(s.href);var l=n.querySelector(_a(a));if(l)return e.state.loading|=4,e.instance=l,$e(l),l;r=l0(s),(a=vn.get(a))&&pd(r,a),l=(n.ownerDocument||n).createElement("link"),$e(l);var i=l;return i._p=new Promise(function(c,o){i.onload=c,i.onerror=o}),Be(l,"link",r),e.state.loading|=4,dl(l,s.precedence,n),e.instance=l;case"script":return l=mr(s.src),(a=n.querySelector(Aa(l)))?(e.instance=a,$e(a),a):(r=s,(a=vn.get(l))&&(r=me({},s),hd(r,a)),n=n.ownerDocument||n,a=n.createElement("script"),$e(a),Be(a,"link",r),n.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(N(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(r=e.instance,e.state.loading|=4,dl(r,s.precedence,n));return e.instance}function dl(n,e,s){for(var r=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,l=a,i=0;i<r.length;i++){var c=r[i];if(c.dataset.precedence===e)l=c;else if(l!==a)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=s.nodeType===9?s.head:s,e.insertBefore(n,e.firstChild))}function pd(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function hd(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var ul=null;function om(n,e,s){if(ul===null){var r=new Map,a=ul=new Map;a.set(s,r)}else a=ul,r=a.get(s),r||(r=new Map,a.set(s,r));if(r.has(n))return r;for(r.set(n,null),s=s.getElementsByTagName(n),a=0;a<s.length;a++){var l=s[a];if(!(l[Qr]||l[ze]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var i=l.getAttribute(e)||"";i=n+i;var c=r.get(i);c?c.push(l):r.set(i,[l])}}return r}function dm(n,e,s){n=n.ownerDocument||n,n.head.insertBefore(s,e==="title"?n.querySelector("head > title"):null)}function Xv(n,e,s){if(s===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function i0(n){return!(n.type==="stylesheet"&&!(n.state.loading&3))}var aa=null;function Zv(){}function Gv(n,e,s){if(aa===null)throw Error(N(475));var r=aa;if(e.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var a=tr(s.href),l=n.querySelector(_a(a));if(l){n=l._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(r.count++,r=Hl.bind(r),n.then(r,r)),e.state.loading|=4,e.instance=l,$e(l);return}l=n.ownerDocument||n,s=l0(s),(a=vn.get(a))&&pd(s,a),l=l.createElement("link"),$e(l);var i=l;i._p=new Promise(function(c,o){i.onload=c,i.onerror=o}),Be(l,"link",s),e.instance=l}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,n),(n=e.state.preload)&&!(e.state.loading&3)&&(r.count++,e=Hl.bind(r),n.addEventListener("load",e),n.addEventListener("error",e))}}function Yv(){if(aa===null)throw Error(N(475));var n=aa;return n.stylesheets&&n.count===0&&io(n,n.stylesheets),0<n.count?function(e){var s=setTimeout(function(){if(n.stylesheets&&io(n,n.stylesheets),n.unsuspend){var r=n.unsuspend;n.unsuspend=null,r()}},6e4);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Hl(){if(this.count--,this.count===0){if(this.stylesheets)io(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ql=null;function io(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ql=new Map,e.forEach(Fv,n),ql=null,Hl.call(n))}function Fv(n,e){if(!(e.state.loading&4)){var s=ql.get(n);if(s)var r=s.get(null);else{s=new Map,ql.set(n,s);for(var a=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var i=a[l];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(s.set(i.dataset.precedence,i),r=i)}r&&s.set(null,r)}a=e.instance,i=a.getAttribute("data-precedence"),l=s.get(i)||r,l===r&&s.set(null,a),s.set(i,a),this.count++,r=Hl.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),l?l.parentNode.insertBefore(a,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(a,n.firstChild)),e.state.loading|=4}}var la={$$typeof:Jn,Provider:null,Consumer:null,_currentValue:Kt,_currentValue2:Kt,_threadCount:0};function Pv(n,e,s,r,a,l,i,c){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Si(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.hiddenUpdates=Si(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function c0(n,e,s,r,a,l,i,c,o,d,u,p){return n=new Pv(n,e,s,i,c,o,d,p),e=1,l===!0&&(e|=24),l=xn(3,null,null,e),n.current=l,l.stateNode=n,e=Vo(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:r,isDehydrated:s,cache:e},sd(l),n}function o0(n){return n?(n=Ts,n):Ts}function d0(n,e,s,r,a,l){a=o0(a),r.context===null?r.context=a:r.pendingContext=a,r=At(e),r.payload={element:s},l=l===void 0?null:l,l!==null&&(r.callback=l),s=Rt(n,r,e),s!==null&&(Ye(s,n,e),qr(s,n,e))}function um(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<e?s:e}}function fd(n,e){um(n,e),(n=n.alternate)&&um(n,e)}function u0(n){if(n.tag===13){var e=Ot(n,67108864);e!==null&&Ye(e,n,67108864),fd(n,67108864)}}var Vl=!0;function Iv(n,e,s,r){var a=q.T;q.T=null;var l=ue.p;try{ue.p=2,xd(n,e,s,r)}finally{ue.p=l,q.T=a}}function Qv(n,e,s,r){var a=q.T;q.T=null;var l=ue.p;try{ue.p=8,xd(n,e,s,r)}finally{ue.p=l,q.T=a}}function xd(n,e,s,r){if(Vl){var a=co(r);if(a===null)Wi(n,e,r,Xl,s),mm(n,r);else if(Jv(a,n,e,s,r))r.stopPropagation();else if(mm(n,r),e&4&&-1<Wv.indexOf(n)){for(;a!==null;){var l=or(a);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var i=Ft(l.pendingLanes);if(i!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var o=1<<31-tn(i);c.entanglements[1]|=o,i&=~o}Hn(l),!(xe&6)&&(El=On()+500,Ca(0))}}break;case 13:c=Ot(l,2),c!==null&&Ye(c,l,2),ci(),fd(l,2)}if(l=co(r),l===null&&Wi(n,e,r,Xl,s),l===a)break;a=l}a!==null&&r.stopPropagation()}else Wi(n,e,r,null,s)}}function co(n){return n=Lo(n),gd(n)}var Xl=null;function gd(n){if(Xl=null,n=Qt(n),n!==null){var e=ir(n);if(e===null)n=null;else{var s=e.tag;if(s===13){if(n=Vh(e),n!==null)return n;n=null}else if(s===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Xl=n,null}function m0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Og()){case Zh:return 2;case Gh:return 8;case vl:case Bg:return 32;case Yh:return 268435456;default:return 32}default:return 32}}var oo=!1,Lt=null,Et=null,Tt=null,ia=new Map,ca=new Map,Nt=[],Wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mm(n,e){switch(n){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(e.pointerId)}}function Sr(n,e,s,r,a,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:s,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},e!==null&&(e=or(e),e!==null&&u0(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function Jv(n,e,s,r,a){switch(e){case"focusin":return Lt=Sr(Lt,n,e,s,r,a),!0;case"dragenter":return Et=Sr(Et,n,e,s,r,a),!0;case"mouseover":return Tt=Sr(Tt,n,e,s,r,a),!0;case"pointerover":var l=a.pointerId;return ia.set(l,Sr(ia.get(l)||null,n,e,s,r,a)),!0;case"gotpointercapture":return l=a.pointerId,ca.set(l,Sr(ca.get(l)||null,n,e,s,r,a)),!0}return!1}function p0(n){var e=Qt(n.target);if(e!==null){var s=ir(e);if(s!==null){if(e=s.tag,e===13){if(e=Vh(s),e!==null){n.blockedOn=e,Yg(n.priority,function(){if(s.tag===13){var r=sn(),a=Ot(s,r);a!==null&&Ye(a,s,r),fd(s,r)}});return}}else if(e===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ml(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var s=co(n.nativeEvent);if(s===null){s=n.nativeEvent;var r=new s.constructor(s.type,s);_c=r,s.target.dispatchEvent(r),_c=null}else return e=or(s),e!==null&&u0(e),n.blockedOn=s,!1;e.shift()}return!0}function pm(n,e,s){ml(n)&&s.delete(e)}function Kv(){oo=!1,Lt!==null&&ml(Lt)&&(Lt=null),Et!==null&&ml(Et)&&(Et=null),Tt!==null&&ml(Tt)&&(Tt=null),ia.forEach(pm),ca.forEach(pm)}function Pa(n,e){n.blockedOn===e&&(n.blockedOn=null,oo||(oo=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Kv)))}var Ia=null;function hm(n){Ia!==n&&(Ia=n,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,function(){Ia===n&&(Ia=null);for(var e=0;e<n.length;e+=3){var s=n[e],r=n[e+1],a=n[e+2];if(typeof r!="function"){if(gd(r||s)===null)continue;break}var l=or(s);l!==null&&(n.splice(e,3),e-=3,Bc(l,{pending:!0,data:a,method:s.method,action:r},r,a))}}))}function oa(n){function e(o){return Pa(o,n)}Lt!==null&&Pa(Lt,n),Et!==null&&Pa(Et,n),Tt!==null&&Pa(Tt,n),ia.forEach(e),ca.forEach(e);for(var s=0;s<Nt.length;s++){var r=Nt[s];r.blockedOn===n&&(r.blockedOn=null)}for(;0<Nt.length&&(s=Nt[0],s.blockedOn===null);)p0(s),s.blockedOn===null&&Nt.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(r=0;r<s.length;r+=3){var a=s[r],l=s[r+1],i=a[Qe]||null;if(typeof l=="function")i||hm(s);else if(i){var c=null;if(l&&l.hasAttribute("formAction")){if(a=l,i=l[Qe]||null)c=i.formAction;else if(gd(a)!==null)continue}else c=i.action;typeof c=="function"?s[r+1]=c:(s.splice(r,3),r-=3),hm(s)}}}function jd(n){this._internalRoot=n}ui.prototype.render=jd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(N(409));var s=e.current,r=sn();d0(s,r,n,e,null,null)};ui.prototype.unmount=jd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;n.tag===0&&Ys(),d0(n.current,2,null,n,null,null),ci(),e[cr]=null}};function ui(n){this._internalRoot=n}ui.prototype.unstable_scheduleHydration=function(n){if(n){var e=Jh();n={blockedOn:null,target:n,priority:e};for(var s=0;s<Nt.length&&e!==0&&e<Nt[s].priority;s++);Nt.splice(s,0,n),s===0&&p0(n)}};var fm=Bh.version;if(fm!=="19.0.0")throw Error(N(527,fm,"19.0.0"));ue.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(N(188)):(n=Object.keys(n).join(","),Error(N(268,n)));return n=Eg(e),n=n!==null?Xh(n):null,n=n===null?null:n.stateNode,n};var e2={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:q,findFiberByHostInstance:Qt,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{ga=Qa.inject(e2),nn=Qa}catch{}}Ql.createRoot=function(n,e){if(!zh(n))throw Error(N(299));var s=!1,r="",a=dx,l=ux,i=mx,c=null;return e!=null&&(e.unstable_strictMode===!0&&(s=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(c=e.unstable_transitionCallbacks)),e=c0(n,1,!1,null,null,s,r,a,l,i,c,null),n[cr]=e.current,md(n.nodeType===8?n.parentNode:n),new jd(e)};Ql.hydrateRoot=function(n,e,s){if(!zh(n))throw Error(N(299));var r=!1,a="",l=dx,i=ux,c=mx,o=null,d=null;return s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(a=s.identifierPrefix),s.onUncaughtError!==void 0&&(l=s.onUncaughtError),s.onCaughtError!==void 0&&(i=s.onCaughtError),s.onRecoverableError!==void 0&&(c=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(o=s.unstable_transitionCallbacks),s.formState!==void 0&&(d=s.formState)),e=c0(n,1,!0,e,s??null,r,a,l,i,c,o,d),e.context=o0(null),s=e.current,r=sn(),a=At(r),a.callback=null,Rt(s,a,r),e.current.lanes=r,va(e,r),Hn(e),n[cr]=e.current,md(n),new ui(e)};Ql.version="19.0.0";function h0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h0)}catch(n){console.error(n)}}h0(),$h.exports=Ql;var n2=$h.exports;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},da.apply(this,arguments)}var kt;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(kt||(kt={}));const xm="popstate";function t2(n){n===void 0&&(n={});function e(r,a){let{pathname:l,search:i,hash:c}=r.location;return uo("",{pathname:l,search:i,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function s(r,a){return typeof a=="string"?a:Zl(a)}return r2(e,s,null,n)}function ye(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function f0(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function s2(){return Math.random().toString(36).substr(2,8)}function gm(n,e){return{usr:n.state,key:n.key,idx:e}}function uo(n,e,s,r){return s===void 0&&(s=null),da({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?pr(e):e,{state:s,key:e&&e.key||r||s2()})}function Zl(n){let{pathname:e="/",search:s="",hash:r=""}=n;return s&&s!=="?"&&(e+=s.charAt(0)==="?"?s:"?"+s),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function pr(n){let e={};if(n){let s=n.indexOf("#");s>=0&&(e.hash=n.substr(s),n=n.substr(0,s));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function r2(n,e,s,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,i=a.history,c=kt.Pop,o=null,d=u();d==null&&(d=0,i.replaceState(da({},i.state,{idx:d}),""));function u(){return(i.state||{idx:null}).idx}function p(){c=kt.Pop;let w=u(),x=w==null?null:w-d;d=w,o&&o({action:c,location:b.location,delta:x})}function h(w,x){c=kt.Push;let f=uo(b.location,w,x);d=u()+1;let g=gm(f,d),v=b.createHref(f);try{i.pushState(g,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(v)}l&&o&&o({action:c,location:b.location,delta:1})}function j(w,x){c=kt.Replace;let f=uo(b.location,w,x);d=u();let g=gm(f,d),v=b.createHref(f);i.replaceState(g,"",v),l&&o&&o({action:c,location:b.location,delta:0})}function y(w){let x=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof w=="string"?w:Zl(w);return f=f.replace(/ $/,"%20"),ye(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let b={get action(){return c},get location(){return n(a,i)},listen(w){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(xm,p),o=w,()=>{a.removeEventListener(xm,p),o=null}},createHref(w){return e(a,w)},createURL:y,encodeLocation(w){let x=y(w);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:j,go(w){return i.go(w)}};return b}var jm;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(jm||(jm={}));function a2(n,e,s){s===void 0&&(s="/");let r=typeof e=="string"?pr(e):e,a=vd(r.pathname||"/",s);if(a==null)return null;let l=x0(n);l2(l);let i=null;for(let c=0;i==null&&c<l.length;++c){let o=g2(a);i=f2(l[c],o)}return i}function x0(n,e,s,r){e===void 0&&(e=[]),s===void 0&&(s=[]),r===void 0&&(r="");let a=(l,i,c)=>{let o={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};o.relativePath.startsWith("/")&&(ye(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let d=Dt([r,o.relativePath]),u=s.concat(o);l.children&&l.children.length>0&&(ye(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),x0(l.children,e,u,d)),!(l.path==null&&!l.index)&&e.push({path:d,score:p2(d,l.index),routesMeta:u})};return n.forEach((l,i)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))a(l,i);else for(let o of g0(l.path))a(l,i,o)}),e}function g0(n){let e=n.split("/");if(e.length===0)return[];let[s,...r]=e,a=s.endsWith("?"),l=s.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let i=g0(r.join("/")),c=[];return c.push(...i.map(o=>o===""?l:[l,o].join("/"))),a&&c.push(...i),c.map(o=>n.startsWith("/")&&o===""?"/":o)}function l2(n){n.sort((e,s)=>e.score!==s.score?s.score-e.score:h2(e.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}const i2=/^:[\w-]+$/,c2=3,o2=2,d2=1,u2=10,m2=-2,vm=n=>n==="*";function p2(n,e){let s=n.split("/"),r=s.length;return s.some(vm)&&(r+=m2),e&&(r+=o2),s.filter(a=>!vm(a)).reduce((a,l)=>a+(i2.test(l)?c2:l===""?d2:u2),r)}function h2(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function f2(n,e){let{routesMeta:s}=n,r={},a="/",l=[];for(let i=0;i<s.length;++i){let c=s[i],o=i===s.length-1,d=a==="/"?e:e.slice(a.length)||"/",u=j0({path:c.relativePath,caseSensitive:c.caseSensitive,end:o},d);if(!u)return null;Object.assign(r,u.params);let p=c.route;l.push({params:r,pathname:Dt([a,u.pathname]),pathnameBase:y2(Dt([a,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(a=Dt([a,u.pathnameBase]))}return l}function j0(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,r]=x2(n.path,n.caseSensitive,n.end),a=e.match(s);if(!a)return null;let l=a[0],i=l.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:r.reduce((d,u,p)=>{let{paramName:h,isOptional:j}=u;if(h==="*"){let b=c[p]||"";i=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const y=c[p];return j&&!y?d[h]=void 0:d[h]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:i,pattern:n}}function x2(n,e,s){e===void 0&&(e=!1),s===void 0&&(s=!0),f0(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,c,o)=>(r.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function g2(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return f0(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function vd(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let s=e.endsWith("/")?e.length-1:e.length,r=n.charAt(s);return r&&r!=="/"?null:n.slice(s)||"/"}function j2(n,e){e===void 0&&(e="/");let{pathname:s,search:r="",hash:a=""}=typeof n=="string"?pr(n):n;return{pathname:s?s.startsWith("/")?s:v2(s,e):e,search:N2(r),hash:w2(a)}}function v2(n,e){let s=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?s.length>1&&s.pop():a!=="."&&s.push(a)}),s.length>1?s.join("/"):"/"}function ec(n,e,s,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function b2(n){return n.filter((e,s)=>s===0||e.route.path&&e.route.path.length>0)}function v0(n,e){let s=b2(n);return e?s.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):s.map(r=>r.pathnameBase)}function b0(n,e,s,r){r===void 0&&(r=!1);let a;typeof n=="string"?a=pr(n):(a=da({},n),ye(!a.pathname||!a.pathname.includes("?"),ec("?","pathname","search",a)),ye(!a.pathname||!a.pathname.includes("#"),ec("#","pathname","hash",a)),ye(!a.search||!a.search.includes("#"),ec("#","search","hash",a)));let l=n===""||a.pathname==="",i=l?"/":a.pathname,c;if(i==null)c=s;else{let p=e.length-1;if(!r&&i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),p-=1;a.pathname=h.join("/")}c=p>=0?e[p]:"/"}let o=j2(a,c),d=i&&i!=="/"&&i.endsWith("/"),u=(l||i===".")&&s.endsWith("/");return!o.pathname.endsWith("/")&&(d||u)&&(o.pathname+="/"),o}const Dt=n=>n.join("/").replace(/\/\/+/g,"/"),y2=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),N2=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,w2=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function S2(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const y0=["post","put","patch","delete"];new Set(y0);const k2=["get",...y0];new Set(k2);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},ua.apply(this,arguments)}const bd=m.createContext(null),C2=m.createContext(null),xs=m.createContext(null),mi=m.createContext(null),Vt=m.createContext({outlet:null,matches:[],isDataRoute:!1}),N0=m.createContext(null);function _2(n,e){let{relative:s}=e===void 0?{}:e;hr()||ye(!1);let{basename:r,navigator:a}=m.useContext(xs),{hash:l,pathname:i,search:c}=yd(n,{relative:s}),o=i;return r!=="/"&&(o=i==="/"?r:Dt([r,i])),a.createHref({pathname:o,search:c,hash:l})}function hr(){return m.useContext(mi)!=null}function Xt(){return hr()||ye(!1),m.useContext(mi).location}function A2(n){hr()||ye(!1);let{pathname:e}=Xt();return m.useMemo(()=>j0(n,e),[e,n])}function w0(n){m.useContext(xs).static||m.useLayoutEffect(n)}function pi(){let{isDataRoute:n}=m.useContext(Vt);return n?V2():R2()}function R2(){hr()||ye(!1);let n=m.useContext(bd),{basename:e,future:s,navigator:r}=m.useContext(xs),{matches:a}=m.useContext(Vt),{pathname:l}=Xt(),i=JSON.stringify(v0(a,s.v7_relativeSplatPath)),c=m.useRef(!1);return w0(()=>{c.current=!0}),m.useCallback(function(d,u){if(u===void 0&&(u={}),!c.current)return;if(typeof d=="number"){r.go(d);return}let p=b0(d,JSON.parse(i),l,u.relative==="path");n==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Dt([e,p.pathname])),(u.replace?r.replace:r.push)(p,u.state,u)},[e,r,i,l,n])}const M2=m.createContext(null);function hi(n){let e=m.useContext(Vt).outlet;return e&&m.createElement(M2.Provider,{value:n},e)}function yd(n,e){let{relative:s}=e===void 0?{}:e,{future:r}=m.useContext(xs),{matches:a}=m.useContext(Vt),{pathname:l}=Xt(),i=JSON.stringify(v0(a,r.v7_relativeSplatPath));return m.useMemo(()=>b0(n,JSON.parse(i),l,s==="path"),[n,i,l,s])}function $2(n,e){return L2(n,e)}function L2(n,e,s,r){hr()||ye(!1);let{navigator:a}=m.useContext(xs),{matches:l}=m.useContext(Vt),i=l[l.length-1],c=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let d=Xt(),u;if(e){var p;let w=typeof e=="string"?pr(e):e;o==="/"||(p=w.pathname)!=null&&p.startsWith(o)||ye(!1),u=w}else u=d;let h=u.pathname||"/",j=h;if(o!=="/"){let w=o.replace(/^\//,"").split("/");j="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=a2(n,{pathname:j}),b=B2(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},c,w.params),pathname:Dt([o,a.encodeLocation?a.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?o:Dt([o,a.encodeLocation?a.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),l,s,r);return e&&b?m.createElement(mi.Provider,{value:{location:ua({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:kt.Pop}},b):b}function E2(){let n=q2(),e=S2(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},e),s?m.createElement("pre",{style:a},s):null,null)}const T2=m.createElement(E2,null);class D2 extends m.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,s){return s.location!==e.location||s.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:s.error,location:s.location,revalidation:e.revalidation||s.revalidation}}componentDidCatch(e,s){console.error("React Router caught the following error during render",e,s)}render(){return this.state.error!==void 0?m.createElement(Vt.Provider,{value:this.props.routeContext},m.createElement(N0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function O2(n){let{routeContext:e,match:s,children:r}=n,a=m.useContext(bd);return a&&a.static&&a.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=s.route.id),m.createElement(Vt.Provider,{value:e},r)}function B2(n,e,s,r){var a;if(e===void 0&&(e=[]),s===void 0&&(s=null),r===void 0&&(r=null),n==null){var l;if((l=s)!=null&&l.errors)n=s.matches;else return null}let i=n,c=(a=s)==null?void 0:a.errors;if(c!=null){let u=i.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);u>=0||ye(!1),i=i.slice(0,Math.min(i.length,u+1))}let o=!1,d=-1;if(s&&r&&r.v7_partialHydration)for(let u=0;u<i.length;u++){let p=i[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:h,errors:j}=s,y=p.route.loader&&h[p.route.id]===void 0&&(!j||j[p.route.id]===void 0);if(p.route.lazy||y){o=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((u,p,h)=>{let j,y=!1,b=null,w=null;s&&(j=c&&p.route.id?c[p.route.id]:void 0,b=p.route.errorElement||T2,o&&(d<0&&h===0?(y=!0,w=null):d===h&&(y=!0,w=p.route.hydrateFallbackElement||null)));let x=e.concat(i.slice(0,h+1)),f=()=>{let g;return j?g=b:y?g=w:p.route.Component?g=m.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=u,m.createElement(O2,{match:p,routeContext:{outlet:u,matches:x,isDataRoute:s!=null},children:g})};return s&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?m.createElement(D2,{location:s.location,revalidation:s.revalidation,component:b,error:j,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var S0=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(S0||{}),Gl=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Gl||{});function z2(n){let e=m.useContext(bd);return e||ye(!1),e}function U2(n){let e=m.useContext(C2);return e||ye(!1),e}function H2(n){let e=m.useContext(Vt);return e||ye(!1),e}function k0(n){let e=H2(),s=e.matches[e.matches.length-1];return s.route.id||ye(!1),s.route.id}function q2(){var n;let e=m.useContext(N0),s=U2(Gl.UseRouteError),r=k0(Gl.UseRouteError);return e!==void 0?e:(n=s.errors)==null?void 0:n[r]}function V2(){let{router:n}=z2(S0.UseNavigateStable),e=k0(Gl.UseNavigateStable),s=m.useRef(!1);return w0(()=>{s.current=!0}),m.useCallback(function(a,l){l===void 0&&(l={}),s.current&&(typeof a=="number"?n.navigate(a):n.navigate(a,ua({fromRouteId:e},l)))},[n,e])}function X2(n){return hi(n.context)}function bn(n){ye(!1)}function Z2(n){let{basename:e="/",children:s=null,location:r,navigationType:a=kt.Pop,navigator:l,static:i=!1,future:c}=n;hr()&&ye(!1);let o=e.replace(/^\/*/,"/"),d=m.useMemo(()=>({basename:o,navigator:l,static:i,future:ua({v7_relativeSplatPath:!1},c)}),[o,c,l,i]);typeof r=="string"&&(r=pr(r));let{pathname:u="/",search:p="",hash:h="",state:j=null,key:y="default"}=r,b=m.useMemo(()=>{let w=vd(u,o);return w==null?null:{location:{pathname:w,search:p,hash:h,state:j,key:y},navigationType:a}},[o,u,p,h,j,y,a]);return b==null?null:m.createElement(xs.Provider,{value:d},m.createElement(mi.Provider,{children:s,value:b}))}function G2(n){let{children:e,location:s}=n;return $2(mo(e),s)}new Promise(()=>{});function mo(n,e){e===void 0&&(e=[]);let s=[];return m.Children.forEach(n,(r,a)=>{if(!m.isValidElement(r))return;let l=[...e,a];if(r.type===m.Fragment){s.push.apply(s,mo(r.props.children,l));return}r.type!==bn&&ye(!1),!r.props.index||!r.props.children||ye(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=mo(r.props.children,l)),s.push(i)}),s}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},po.apply(this,arguments)}function Y2(n,e){if(n==null)return{};var s={},r=Object.keys(n),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(s[a]=n[a]);return s}function F2(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function P2(n,e){return n.button===0&&(!e||e==="_self")&&!F2(n)}const I2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Q2="6";try{window.__reactRouterVersion=Q2}catch{}const W2="startTransition",bm=Ng[W2];function J2(n){let{basename:e,children:s,future:r,window:a}=n,l=m.useRef();l.current==null&&(l.current=t2({window:a,v5Compat:!0}));let i=l.current,[c,o]=m.useState({action:i.action,location:i.location}),{v7_startTransition:d}=r||{},u=m.useCallback(p=>{d&&bm?bm(()=>o(p)):o(p)},[o,d]);return m.useLayoutEffect(()=>i.listen(u),[i,u]),m.createElement(Z2,{basename:e,children:s,location:c.location,navigationType:c.action,navigator:i,future:r})}const K2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nd=m.forwardRef(function(e,s){let{onClick:r,relative:a,reloadDocument:l,replace:i,state:c,target:o,to:d,preventScrollReset:u,unstable_viewTransition:p}=e,h=Y2(e,I2),{basename:j}=m.useContext(xs),y,b=!1;if(typeof d=="string"&&eb.test(d)&&(y=d,K2))try{let g=new URL(window.location.href),v=d.startsWith("//")?new URL(g.protocol+d):new URL(d),S=vd(v.pathname,j);v.origin===g.origin&&S!=null?d=S+v.search+v.hash:b=!0}catch{}let w=_2(d,{relative:a}),x=nb(d,{replace:i,state:c,target:o,preventScrollReset:u,relative:a,unstable_viewTransition:p});function f(g){r&&r(g),g.defaultPrevented||x(g)}return m.createElement("a",po({},h,{href:y||w,onClick:b||l?r:f,ref:s,target:o}))});var ym;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(ym||(ym={}));var Nm;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Nm||(Nm={}));function nb(n,e){let{target:s,replace:r,state:a,preventScrollReset:l,relative:i,unstable_viewTransition:c}=e===void 0?{}:e,o=pi(),d=Xt(),u=yd(n,{relative:i});return m.useCallback(p=>{if(P2(p,s)){p.preventDefault();let h=r!==void 0?r:Zl(d)===Zl(u);o(n,{replace:h,state:a,preventScrollReset:l,relative:i,unstable_viewTransition:c})}},[d,o,u,r,a,s,n,l,i,c])}function nc(){return t.jsxs("div",{className:"w-full h-64 flex flex-col items-center justify-center",children:[t.jsx("div",{className:"loader"}),t.jsx("div",{className:"text-sm text-blue-500 mt-3",children:"page loading..."})]})}function C0(n){var e,s,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var a=n.length;for(e=0;e<a;e++)n[e]&&(s=C0(n[e]))&&(r&&(r+=" "),r+=s)}else for(s in n)n[s]&&(r&&(r+=" "),r+=s);return r}function U(){for(var n,e,s=0,r="",a=arguments.length;s<a;s++)(n=arguments[s])&&(e=C0(n))&&(r&&(r+=" "),r+=e);return r}const wd="-";function tb(n){const e=rb(n),{conflictingClassGroups:s,conflictingClassGroupModifiers:r}=n;function a(i){const c=i.split(wd);return c[0]===""&&c.length!==1&&c.shift(),_0(c,e)||sb(i)}function l(i,c){const o=s[i]||[];return c&&r[i]?[...o,...r[i]]:o}return{getClassGroupId:a,getConflictingClassGroupIds:l}}function _0(n,e){var i;if(n.length===0)return e.classGroupId;const s=n[0],r=e.nextPart.get(s),a=r?_0(n.slice(1),r):void 0;if(a)return a;if(e.validators.length===0)return;const l=n.join(wd);return(i=e.validators.find(({validator:c})=>c(l)))==null?void 0:i.classGroupId}const wm=/^\[(.+)\]$/;function sb(n){if(wm.test(n)){const e=wm.exec(n)[1],s=e==null?void 0:e.substring(0,e.indexOf(":"));if(s)return"arbitrary.."+s}}function rb(n){const{theme:e,prefix:s}=n,r={nextPart:new Map,validators:[]};return lb(Object.entries(n.classGroups),s).forEach(([l,i])=>{ho(i,r,l,e)}),r}function ho(n,e,s,r){n.forEach(a=>{if(typeof a=="string"){const l=a===""?e:Sm(e,a);l.classGroupId=s;return}if(typeof a=="function"){if(ab(a)){ho(a(r),e,s,r);return}e.validators.push({validator:a,classGroupId:s});return}Object.entries(a).forEach(([l,i])=>{ho(i,Sm(e,l),s,r)})})}function Sm(n,e){let s=n;return e.split(wd).forEach(r=>{s.nextPart.has(r)||s.nextPart.set(r,{nextPart:new Map,validators:[]}),s=s.nextPart.get(r)}),s}function ab(n){return n.isThemeGetter}function lb(n,e){return e?n.map(([s,r])=>{const a=r.map(l=>typeof l=="string"?e+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([i,c])=>[e+i,c])):l);return[s,a]}):n}function ib(n){if(n<1)return{get:()=>{},set:()=>{}};let e=0,s=new Map,r=new Map;function a(l,i){s.set(l,i),e++,e>n&&(e=0,r=s,s=new Map)}return{get(l){let i=s.get(l);if(i!==void 0)return i;if((i=r.get(l))!==void 0)return a(l,i),i},set(l,i){s.has(l)?s.set(l,i):a(l,i)}}}const A0="!";function cb(n){const e=n.separator,s=e.length===1,r=e[0],a=e.length;return function(i){const c=[];let o=0,d=0,u;for(let b=0;b<i.length;b++){let w=i[b];if(o===0){if(w===r&&(s||i.slice(b,b+a)===e)){c.push(i.slice(d,b)),d=b+a;continue}if(w==="/"){u=b;continue}}w==="["?o++:w==="]"&&o--}const p=c.length===0?i:i.substring(d),h=p.startsWith(A0),j=h?p.substring(1):p,y=u&&u>d?u-d:void 0;return{modifiers:c,hasImportantModifier:h,baseClassName:j,maybePostfixModifierPosition:y}}}function ob(n){if(n.length<=1)return n;const e=[];let s=[];return n.forEach(r=>{r[0]==="["?(e.push(...s.sort(),r),s=[]):s.push(r)}),e.push(...s.sort()),e}function db(n){return{cache:ib(n.cacheSize),splitModifiers:cb(n),...tb(n)}}const ub=/\s+/;function mb(n,e){const{splitModifiers:s,getClassGroupId:r,getConflictingClassGroupIds:a}=e,l=new Set;return n.trim().split(ub).map(i=>{const{modifiers:c,hasImportantModifier:o,baseClassName:d,maybePostfixModifierPosition:u}=s(i);let p=r(u?d.substring(0,u):d),h=!!u;if(!p){if(!u)return{isTailwindClass:!1,originalClassName:i};if(p=r(d),!p)return{isTailwindClass:!1,originalClassName:i};h=!1}const j=ob(c).join(":");return{isTailwindClass:!0,modifierId:o?j+A0:j,classGroupId:p,originalClassName:i,hasPostfixModifier:h}}).reverse().filter(i=>{if(!i.isTailwindClass)return!0;const{modifierId:c,classGroupId:o,hasPostfixModifier:d}=i,u=c+o;return l.has(u)?!1:(l.add(u),a(o,d).forEach(p=>l.add(c+p)),!0)}).reverse().map(i=>i.originalClassName).join(" ")}function pb(){let n=0,e,s,r="";for(;n<arguments.length;)(e=arguments[n++])&&(s=R0(e))&&(r&&(r+=" "),r+=s);return r}function R0(n){if(typeof n=="string")return n;let e,s="";for(let r=0;r<n.length;r++)n[r]&&(e=R0(n[r]))&&(s&&(s+=" "),s+=e);return s}function hb(n,...e){let s,r,a,l=i;function i(o){const d=e.reduce((u,p)=>p(u),n());return s=db(d),r=s.cache.get,a=s.cache.set,l=c,c(o)}function c(o){const d=r(o);if(d)return d;const u=mb(o,s);return a(o,u),u}return function(){return l(pb.apply(null,arguments))}}function de(n){const e=s=>s[n]||[];return e.isThemeGetter=!0,e}const M0=/^\[(?:([a-z-]+):)?(.+)\]$/i,fb=/^\d+\/\d+$/,xb=new Set(["px","full","screen"]),gb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,jb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,vb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,bb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,yb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function Fn(n){return Jt(n)||xb.has(n)||fb.test(n)}function pt(n){return fr(n,"length",Rb)}function Jt(n){return!!n&&!Number.isNaN(Number(n))}function Wa(n){return fr(n,"number",Jt)}function kr(n){return!!n&&Number.isInteger(Number(n))}function Nb(n){return n.endsWith("%")&&Jt(n.slice(0,-1))}function V(n){return M0.test(n)}function ht(n){return gb.test(n)}const wb=new Set(["length","size","percentage"]);function Sb(n){return fr(n,wb,$0)}function kb(n){return fr(n,"position",$0)}const Cb=new Set(["image","url"]);function _b(n){return fr(n,Cb,$b)}function Ab(n){return fr(n,"",Mb)}function Cr(){return!0}function fr(n,e,s){const r=M0.exec(n);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):s(r[2]):!1}function Rb(n){return jb.test(n)&&!vb.test(n)}function $0(){return!1}function Mb(n){return bb.test(n)}function $b(n){return yb.test(n)}function Lb(){const n=de("colors"),e=de("spacing"),s=de("blur"),r=de("brightness"),a=de("borderColor"),l=de("borderRadius"),i=de("borderSpacing"),c=de("borderWidth"),o=de("contrast"),d=de("grayscale"),u=de("hueRotate"),p=de("invert"),h=de("gap"),j=de("gradientColorStops"),y=de("gradientColorStopPositions"),b=de("inset"),w=de("margin"),x=de("opacity"),f=de("padding"),g=de("saturate"),v=de("scale"),S=de("sepia"),R=de("skew"),C=de("space"),$=de("translate"),Q=()=>["auto","contain","none"],B=()=>["auto","hidden","clip","visible","scroll"],oe=()=>["auto",V,e],X=()=>[V,e],an=()=>["",Fn,pt],qe=()=>["auto",Jt,V],ve=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],A=()=>["solid","dashed","dotted","double","none"],O=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],T=()=>["start","end","center","between","around","evenly","stretch"],Y=()=>["","0",V],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Te=()=>[Jt,Wa],Ve=()=>[Jt,V];return{cacheSize:500,separator:":",theme:{colors:[Cr],spacing:[Fn,pt],blur:["none","",ht,V],brightness:Te(),borderColor:[n],borderRadius:["none","","full",ht,V],borderSpacing:X(),borderWidth:an(),contrast:Te(),grayscale:Y(),hueRotate:Ve(),invert:Y(),gap:X(),gradientColorStops:[n],gradientColorStopPositions:[Nb,pt],inset:oe(),margin:oe(),opacity:Te(),padding:X(),saturate:Te(),scale:Te(),sepia:Y(),skew:Ve(),space:X(),translate:X()},classGroups:{aspect:[{aspect:["auto","square","video",V]}],container:["container"],columns:[{columns:[ht]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ve(),V]}],overflow:[{overflow:B()}],"overflow-x":[{"overflow-x":B()}],"overflow-y":[{"overflow-y":B()}],overscroll:[{overscroll:Q()}],"overscroll-x":[{"overscroll-x":Q()}],"overscroll-y":[{"overscroll-y":Q()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",kr,V]}],basis:[{basis:oe()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",V]}],grow:[{grow:Y()}],shrink:[{shrink:Y()}],order:[{order:["first","last","none",kr,V]}],"grid-cols":[{"grid-cols":[Cr]}],"col-start-end":[{col:["auto",{span:["full",kr,V]},V]}],"col-start":[{"col-start":qe()}],"col-end":[{"col-end":qe()}],"grid-rows":[{"grid-rows":[Cr]}],"row-start-end":[{row:["auto",{span:[kr,V]},V]}],"row-start":[{"row-start":qe()}],"row-end":[{"row-end":qe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",V]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",V]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...T()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...T(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...T(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[f]}],px:[{px:[f]}],py:[{py:[f]}],ps:[{ps:[f]}],pe:[{pe:[f]}],pt:[{pt:[f]}],pr:[{pr:[f]}],pb:[{pb:[f]}],pl:[{pl:[f]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",V,e]}],"min-w":[{"min-w":[V,e,"min","max","fit"]}],"max-w":[{"max-w":[V,e,"none","full","min","max","fit","prose",{screen:[ht]},ht]}],h:[{h:[V,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[V,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[V,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[V,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ht,pt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Wa]}],"font-family":[{font:[Cr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",V]}],"line-clamp":[{"line-clamp":["none",Jt,Wa]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Fn,V]}],"list-image":[{"list-image":["none",V]}],"list-style-type":[{list:["none","disc","decimal",V]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...A(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Fn,pt]}],"underline-offset":[{"underline-offset":["auto",Fn,V]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:X()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",V]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",V]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ve(),kb]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Sb]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},_b]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[j]}],"gradient-via":[{via:[j]}],"gradient-to":[{to:[j]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...A(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:A()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...A()]}],"outline-offset":[{"outline-offset":[Fn,V]}],"outline-w":[{outline:[Fn,pt]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:an()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[Fn,pt]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",ht,Ab]}],"shadow-color":[{shadow:[Cr]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...O(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":O()}],filter:[{filter:["","none"]}],blur:[{blur:[s]}],brightness:[{brightness:[r]}],contrast:[{contrast:[o]}],"drop-shadow":[{"drop-shadow":["","none",ht,V]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[g]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[s]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[o]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[g]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",V]}],duration:[{duration:Ve()}],ease:[{ease:["linear","in","out","in-out",V]}],delay:[{delay:Ve()}],animate:[{animate:["none","spin","ping","pulse","bounce",V]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[kr,V]}],"translate-x":[{"translate-x":[$]}],"translate-y":[{"translate-y":[$]}],"skew-x":[{"skew-x":[R]}],"skew-y":[{"skew-y":[R]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",V]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",V]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":X()}],"scroll-mx":[{"scroll-mx":X()}],"scroll-my":[{"scroll-my":X()}],"scroll-ms":[{"scroll-ms":X()}],"scroll-me":[{"scroll-me":X()}],"scroll-mt":[{"scroll-mt":X()}],"scroll-mr":[{"scroll-mr":X()}],"scroll-mb":[{"scroll-mb":X()}],"scroll-ml":[{"scroll-ml":X()}],"scroll-p":[{"scroll-p":X()}],"scroll-px":[{"scroll-px":X()}],"scroll-py":[{"scroll-py":X()}],"scroll-ps":[{"scroll-ps":X()}],"scroll-pe":[{"scroll-pe":X()}],"scroll-pt":[{"scroll-pt":X()}],"scroll-pr":[{"scroll-pr":X()}],"scroll-pb":[{"scroll-pb":X()}],"scroll-pl":[{"scroll-pl":X()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",V]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[Fn,pt,Wa]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const He=hb(Lb);function wn(n){const{children:e,className:s="",end:r=!0,activeName:a,to:l,onClick:i,...c}=n,o=yd(l);let d=A2({path:o.pathname,end:r});const u=He(U(s,"transition cursor-pointer",{[a]:!!d}));function p(h){d&&h.preventDefault(),i&&i(h)}return t.jsx(Nd,{className:u,to:l,...c,onClick:p,children:e})}const Eb="_modal_fd6cp_1",Tb="_show_fd6cp_1",Db="_hide_fd6cp_1",Ob="_out_fd6cp_16",tc={modal:Eb,show:Tb,hide:Db,in:"_in_fd6cp_12",out:Ob};function Ra(n){const{onClose:e,children:s,ref:r}=n,[a,l]=m.useState(!1),[i,c]=m.useState(!1);m.useImperativeHandle(r,()=>({show:()=>{l(!0),document.body.style.overflow="hidden",c(!0)},close:()=>{document.body.style.overflow="visible",l(!1)}}));const o=U(tc.modal,{[tc.in]:a,[tc.out]:!a});function d(){a||c(!1)}function u(){l(!1),e&&e()}return i?t.jsx(t.Fragment,{children:xa.createPortal(t.jsx("div",{className:o,onAnimationEnd:d,onClick:u,children:s}),document.body)}):null}function Bb(){return t.jsx("div",{className:"w-10 h-10 ml-4 border rounded-full overflow-hidden relative",children:t.jsx("div",{className:"pyramid-loader",children:t.jsxs("div",{className:"wrapper",children:[t.jsx("span",{className:"side side1"}),t.jsx("span",{className:"side side2"}),t.jsx("span",{className:"side side3"}),t.jsx("span",{className:"side side4"}),t.jsx("span",{className:"shadow"})]})})})}function zb(){const[n,e]=m.useState(!0),[s,r]=m.useState({});return m.useEffect(()=>{function a(l){if(l.origin!=="https://giscus.app")return;e(!1);let i=l.data.giscus;i.viewer&&r(i.viewer)}window.addEventListener("message",a,!1)},[]),n?t.jsx(Bb,{}):t.jsx("div",{className:"w-10 h-10 ml-4 border rounded-full overflow-hidden",children:t.jsx("img",{className:"w-full h-full",src:s.avatarUrl,alt:""})})}function Yl(n){const{when:e,fallback:s=null,children:r}=n;return e?r:s}function Ub(n,e){let s="bg-gray-100 text-gray-500",r="hover:bg-gray-200 active:bg-gray-300";return e&&(s="bg-transparent text-gray-500",r="hover:bg-gray-50 active:bg-gray-100 hover:text-gray-600 active:text-gray-700"),n?U("opacity-70 cursor-not-allowed",s):U(s,r)}function Hb(n,e){let s="bg-blue-500 text-white",r="hover:bg-blue-600 active:bg-blue-700";return e&&(s="bg-transparent text-blue-500",r="hover:bg-blue-50 active:bg-blue-100 hover:text-blue-600 active:text-blue-700"),n?U("opacity-70 cursor-not-allowed",s):U(s,r)}function qb(n,e){let s="bg-red-500 text-white",r="hover:bg-red-600 active:bg-red-700";return e&&(s="bg-transparent text-red-500",r="hover:bg-red-50 active:bg-red-100 hover:text-red-600 active:text-red-700"),n?U("opacity-70 cursor-not-allowed",s):U(s,r)}function Vb(n,e){let s="bg-green-500 text-white",r="hover:bg-green-600 active:bg-green-700";return e&&(s="bg-transparent text-green-500",r="hover:bg-green-50 active:bg-green-100 hover:text-green-600 active:text-green-700"),n?U("opacity-70 cursor-not-allowed",s):U(s,r)}function Xb(n){let e="bg-white border-sky-300 text-sky-500",s="hover:border-sky-400 active:bg-sky-500 hover:text-sky-600 active:text-sky-700 hover:bg-sky-50 active:bg-sky-100";return n?U("opacity-70 cursor-not-allowed",e):U(e,s)}function L(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,ghost:o,rect:d,disabled:u,...p}=n,h="rounded-md border border-transparent font-medium cursor-pointer transition relative text-gray-600 hover:bg-transparent",j="text-xs py-2 px-4",y=!s&&!r&&!c&&!i,b=He(U(h,j,{[Ub(u,o)]:y,[Hb(u,o)]:s,[qb(u,o)]:r,[Vb(u,o)]:c,[Xb(u)]:i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l,"p-2":d},e));return t.jsxs("button",{className:b,...p,disabled:u,children:[n.children,t.jsx(Yl,{when:i,children:t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})})]})}let Pr;const Zb=n=>{Pr={x:n.pageX,y:n.pageY},setTimeout(()=>{Pr=null},100)};document.documentElement.addEventListener("click",Zb,!0);function Gb(n,e){var s=n.style;["Webkit","Moz","Ms","ms"].forEach(function(r){s[r+"TransformOrigin"]=e}),s.transformOrigin=e}function Yb(n){const e=n.getBoundingClientRect(),s={left:e.left,top:e.top},a=n.ownerDocument.defaultView;return s.left+=km(a),s.top+=km(a,1),s}function km(n,e){var s=n["page"+(e?"Y":"X")+"Offset"],r="scroll"+(e?"Top":"Left");if(typeof s!="number"){var a=n.document;s=a.documentElement[r],typeof s!="number"&&(s=a.body[r])}return s}function xr(n){const{title:e,onClose:s,children:r,onSure:a,onCancel:l,ref:i,footer:c}=n,[o,d]=m.useState(!1),[u,p]=m.useState(!1),h=m.useRef(null),j=m.useRef(null);m.useImperativeHandle(i,()=>({show:()=>{j.current.show(),document.body.style.overflow="hidden",d(!0),p(!0)},close:y}));function y(){d(!1),j.current.close(),document.body.style.overflow="visible"}function b(){y(),s&&s()}function w(v){v.stopPropagation()}function x(v){v.stopPropagation(),a&&a()}function f(){o||p(!1)}const g=U("dialog-wrapper",{in:o,out:!o});return m.useEffect(()=>{const v=h.current;if(u&&v){const S=Yb(v);Pr&&Gb(v,Pr.x-S.left+"px "+(Pr.y-S.top)+"px")}},[u]),t.jsx(Ra,{ref:j,onClose:b,children:u?t.jsxs("div",{ref:h,className:g,onClick:w,onAnimationEnd:f,children:[t.jsxs("header",{className:"flex justify-between items-center mb-2",children:[t.jsx("div",{className:"font-bold text-lg leading-6",children:e}),t.jsx("div",{onClick:b,className:"p-2 rounded-md cursor-pointer transition hover:bg-gray-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})})]}),t.jsx("section",{className:"leading-6",children:r}),c||t.jsx("footer",{className:"text-end mt-4",children:t.jsx(L,{primary:!0,onClick:x,children:"确认"})})]}):null})}function Fb(){const n=m.useRef(null);function e(s){s.preventDefault(),n.current.show()}return t.jsxs(t.Fragment,{children:[t.jsxs(wn,{className:"flex items-center",onClick:e,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"})}),t.jsx("div",{className:"ml-1 text-sm",children:"交流群"})]}),t.jsxs(xr,{ref:n,title:"Message",onSure:()=>n.current.close(),children:["添加我的微信：",t.jsx("span",{className:"text-red-500 text-xl",children:"icanmeetu"}),"， 注明：添加 react19 付费交流群"]})]})}function Tn(n){const{type:e="text",className:s,required:r,label:a,help:l="此项规则不匹配",pattern:i,...c}=n,{pending:o}=xa.useFormStatus(),d=U("flex items-center my-10",s);return t.jsxs("div",{className:d,children:[a&&t.jsxs("label",{className:"w-20 text-right font-bold",children:[a,"："]}),t.jsx("div",{className:"input flex-1",children:t.jsx("input",{type:e,required:r,pattern:i,...c,disabled:o})})]})}function Pb(){const n=m.useRef(null);function e(s){s.preventDefault(),n.current.show()}return t.jsxs(t.Fragment,{children:[t.jsxs(wn,{className:"flex items-center ml-4 bg-gray-900 px-4 py-2 rounded-full",to:"/",onClick:e,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 text-blue-50",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})}),t.jsx("div",{className:"ml-1 text-sm text-blue-50",children:"激活码"})]}),t.jsxs(xr,{ref:n,title:"Message",onSure:()=>n.current.close(),children:["请添加交流群获得激活码，或者联系网站开发者这波能反杀获得激活码，联系方式如下",t.jsxs("div",{className:"flex my-4",children:[t.jsx("div",{className:"w-8",children:"wx:"}),t.jsx("div",{className:"text-red-500",children:"icanmeetu"})]})]})]})}const Cm=[{path:"tutorial",text:"基础版"},{path:"component",text:"组件"},{path:"advance",text:"尊享版"}];function Ib(){const n=m.useRef(null);return t.jsxs("header",{className:"fixed z-50 top-0 flex justify-between border-b border-slate-200 min-w-[320px] bg-white bg-opacity-70 backdrop-blur-sm w-full",children:[t.jsxs("div",{className:"pl-6 h-16 flex items-center md:pl-10 transition-all",children:[t.jsxs(wn,{className:"flex items-center",to:"/",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})}),t.jsx("div",{className:"font-bold ml-2",children:"React 19"})]}),t.jsx("div",{className:"hidden md:block",children:Cm.map((e,s)=>t.jsx(wn,{to:e.path,className:"ml-8 text-gray-500",end:!1,activeName:"text-gray-900",children:e.text},e.path))}),t.jsxs("a",{className:"hidden md:flex text-xs m-8 rounded-full bg-red-100 py-2 px-4 text-red-400 transition hover:bg-red-300 hover:text-red-700 cursor-pointer",href:"https://appxw863qeq2150.h5.xiaoeknow.com/p/decorate/homepage?entry=2&entry_type=2002&share_user_id=u_626bf7dfafe72_zLCXc4Qr0O&wework_share_customer_id=u_626bf7dfafe72_zLCXc4Qr0O",target:"_blank",children:["推荐：JavaScript 核心进阶",t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4 ml-2",children:t.jsx("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",clipRule:"evenodd"})})]})]}),t.jsxs("div",{className:"hidden md:flex h-16 items-center pr-6 text-gray-500",children:[t.jsx(Fb,{alt:"交流群"}),t.jsx(Pb,{alt:"激活码"}),t.jsx(zb,{})]}),t.jsx("div",{className:"md:hidden flex items-center pr-6 text-gray-700",onClick:()=>n.current.show(),children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"})})}),t.jsxs(Ra,{ref:n,onClose:()=>n.current.close(),children:[t.jsxs("header",{className:"sticky top-0 flex justify-between border-b border-amber-50 bg-amber-50",children:[t.jsx("div",{className:"pl-6 h-16 flex items-center md:pl-10 transition-all",children:t.jsxs(wn,{className:"flex items-center",to:"/",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})}),t.jsx("div",{className:"font-bold ml-2",children:"React 19"})]})}),t.jsx("div",{className:"flex h-16 items-center pr-6 text-gray-500",children:t.jsx("div",{className:"flex items-center text-gray-700",onClick:()=>n.current.show(),children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})})]}),Cm.map((e,s)=>t.jsx("div",{className:"flex items-center text-gray-700 bg-white px-8 py-5 transition hover:bg-amber-100",children:t.jsxs(wn,{className:"flex items-center justify-between w-full",to:e.path,children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5",children:t.jsx("path",{fillRule:"evenodd",d:"M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})}),t.jsx("div",{className:"ml-2 text-sm",children:e.text})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})},e.path)),t.jsx("div",{className:"flex items-center text-red-500 bg-red-50 px-8 py-5 transition hover:text-red-700 hover:bg-red-200",children:t.jsxs("a",{className:"flex items-center justify-between w-full",href:"https://appxw863qeq2150.h5.xiaoeknow.com/p/decorate/homepage?entry=2&entry_type=2002&share_user_id=u_626bf7dfafe72_zLCXc4Qr0O&wework_share_customer_id=u_626bf7dfafe72_zLCXc4Qr0O",children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5",children:t.jsx("path",{fillRule:"evenodd",d:"M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z",clipRule:"evenodd"})}),t.jsx("div",{className:"ml-2 text-sm",children:"推荐：JavaScript 核心进阶"})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})}),t.jsx("div",{className:"flex items-center text-gray-700 bg-white px-8 py-5 transition hover:bg-amber-100",children:t.jsxs(wn,{className:"flex items-center justify-between w-full",to:"/",children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"})}),t.jsx("div",{className:"ml-2 text-sm",children:"交流群"})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})}),t.jsx("div",{className:"flex items-center text-gray-700 bg-white px-8 py-5 transition hover:bg-amber-100",children:t.jsxs(wn,{className:"flex items-center justify-between w-full",to:"/",children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})}),t.jsx("div",{className:"ml-2 text-sm",children:"激活码"})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})})]})]})}function Qb(){const[n,e]=m.useState(""),s=`relative ${n} bg-skin-fill overflow-hidden rounded`;return t.jsxs("div",{className:"my-8 border border-gray-150 rounded px-8 pb-8",children:[t.jsxs("div",{className:"flex justify-center",children:[t.jsx("div",{onClick:()=>e(""),className:"my-6 mx-2 h-6 w-6 rounded bg-indigo-500 cursor-pointer"}),t.jsx("div",{onClick:()=>e("theme-swiss"),className:"my-6 mx-2 h-6 w-6 rounded bg-red-600 cursor-pointer"}),t.jsx("div",{onClick:()=>e("theme-neon"),className:"my-6 mx-2 h-6 w-6 rounded bg-green-400 cursor-pointer"})]}),t.jsxs("div",{className:s,children:[t.jsx("img",{className:"absolute inset-0 h-full w-full object-cover opacity-30",src:"https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90 transition"}),t.jsxs("div",{className:"relative max-w-2xl mx-auto text-center py-16 px-8",children:[t.jsx("h2",{className:"font-extrabold text-skin-base text-4xl transition",children:t.jsx("span",{children:"极客时间、掘金买课优惠"})}),t.jsx("p",{className:"mt-4 text-md text-left text-skin-muted transition",children:"官方的课程返现全部归还，需要从网站 coursesub.top 或者公众号「课程减减」通过邀请链接进行下单，购买后添加客服微信发送课程名确认后即可收到红包，可正常使用极客时间的优惠券或者学生半价优惠。"}),t.jsx("div",{className:"mt-10 max-w-sm mx-auto sm:max-w-one sm:flex sm:justify-center",children:t.jsxs("div",{className:"space-y-0 mx-auto inline-grid grid-cols-2 gap-5",children:[t.jsx("a",{target:"_blank",className:"transition text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md shadow-lg px-8",href:"https://coursesub.top/?key=react",children:"去选课"}),t.jsx("a",{target:"_blank",className:"transition text-skin-base bg-skin-button-muted hover:bg-opacity-70 flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-lg shadow-sm px-8",href:"https://mp.weixin.qq.com/s?__biz=MzUyMjkwNTgwOA==&mid=2247485923&idx=1&sn=0710d33fd1e1287e10f88bd4139e0a0e&chksm=f9c5f85cceb2714a585567f21751ae703f8ba80519a7a089746079a05c4f916c962fe81332d1#rd",children:"详细规则"})]})})]})]})]})}function Wb(){return t.jsx("div",{className:"fixed top-0 inset-0 -z-10 mx-0 max-w-none overflow-hidden",children:t.jsxs("div",{className:"absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100",children:t.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5",children:[t.jsx("defs",{children:t.jsx("pattern",{id:":S1:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"-12",y:"4",children:t.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),t.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:S1:)"}),t.jsxs("svg",{x:"-12",y:"4",className:"overflow-visible",children:[t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"288",y:"168"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"144",y:"56"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"504",y:"168"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"720",y:"336"})]})]})}),t.jsx("svg",{viewBox:"0 0 1113 440","aria-hidden":"true",className:"absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden",children:t.jsx("path",{d:"M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"})})]})})}function sc({title:n,desc:e="",path:s,icon:r,className:a}){const[l,i]=m.useState({x:0,y:0}),c=m.useRef(null),o=unescape(n.replace(/\\u/gi,"%u")),d=unescape(e.replace(/\\u/gi,"%u"));m.useEffect(()=>{const j=c.current.getBoundingClientRect();function y(b){i({x:b.x-j.left,y:b.y+document.documentElement.scrollTop-j.top})}c.current.addEventListener("mouseenter",b=>{document.addEventListener("mousemove",y,!1)},!1),c.current.addEventListener("mouseleave",b=>{document.removeEventListener("mousemove",y,!1)},!1)},[]);const u=`radial-gradient(180px at ${l.x}px ${l.y}px, white, transparent)`,h=U("group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5",a);return t.jsxs("div",{ref:c,className:h,children:[t.jsxs("div",{className:"pointer-events-none",children:[t.jsx("div",{className:"absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50",children:t.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5",children:[t.jsx("defs",{children:t.jsx("pattern",{id:":Rkq5jsqja:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"50%",y:"16",children:t.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),t.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:Rkq5jsqja:)"}),t.jsxs("svg",{x:"50%",y:"16",className:"overflow-visible",children:[t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"0",y:"56"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"72",y:"168"})]})]})}),t.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]",style:{maskImage:u}}),t.jsx("div",{className:"absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100",style:{maskImage:u},children:t.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10",children:[t.jsx("defs",{children:t.jsx("pattern",{id:":R5kq5jsqja:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"50%",y:"16",children:t.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),t.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:R5kq5jsqja:)"}),t.jsxs("svg",{x:"50%",y:"16",className:"overflow-visible",children:[t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"0",y:"56"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"72",y:"168"})]})]})})]}),t.jsx("div",{className:"absolute inset-0 rounded-2xl ring-1 ring-gray-200 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"}),t.jsxs("div",{className:"relative rounded-2xl px-4 pb-4 pt-16",children:[t.jsx("div",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400",children:t.jsxs("svg",{viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400",children:[t.jsx("path",{strokeWidth:"0",fillRule:"evenodd",clipRule:"evenodd",d:"M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"}),t.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",d:"M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"}),t.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",d:"M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"})]})}),t.jsx("h3",{className:"mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white",children:t.jsxs("a",{href:s,children:[t.jsx("span",{className:"absolute inset-0 rounded-2xl"}),o]})}),t.jsx("p",{className:"mt-1 text-sm text-zinc-600 dark:text-zinc-400",children:d})]})]})}function Ja(n){const{className:e,primary:s,danger:r,sm:a,lg:l,success:i,...c}=n,p=He(U("rounded-md border border-transparent font-medium cursor-pointer transition","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l}));return t.jsx("button",{className:p,...c,children:n.children})}function Jb(){return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"min-w-[400px] mx-auto px-16 h-[300px] flex flex-col justify-center",children:[t.jsx("div",{className:"my-2",children:t.jsx("div",{className:"font-bold",children:"按钮类型"})}),t.jsxs("div",{className:"flex items-center justify-between my-4",children:[t.jsx(Ja,{children:"Normal"}),t.jsx(Ja,{danger:!0,children:"Danger"}),t.jsx(Ja,{primary:!0,children:"Primary"}),t.jsx(Ja,{success:!0,children:"Success"})]})]})})}const Kb=`import Button from './Button.jsx'

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
`,Ma=`import {twMerge} from 'tailwind-merge'
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
`;function e5(n,e){if(n==null)return{};var s={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;s[r]=n[r]}return s}function n5(n,e){if(n==null)return{};var s,r,a=e5(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)s=l[r],e.indexOf(s)>=0||{}.propertyIsEnumerable.call(n,s)&&(a[s]=n[s])}return a}function fo(n,e){(e==null||e>n.length)&&(e=n.length);for(var s=0,r=Array(e);s<e;s++)r[s]=n[s];return r}function t5(n){if(Array.isArray(n))return fo(n)}function s5(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function r5(n,e){if(n){if(typeof n=="string")return fo(n,e);var s={}.toString.call(n).slice(8,-1);return s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set"?Array.from(n):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?fo(n,e):void 0}}function a5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l5(n){return t5(n)||s5(n)||r5(n)||a5()}function ma(n){"@babel/helpers - typeof";return ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ma(n)}function i5(n,e){if(ma(n)!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var r=s.call(n,e||"default");if(ma(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function c5(n){var e=i5(n,"string");return ma(e)=="symbol"?e:e+""}function L0(n,e,s){return(e=c5(e))in n?Object.defineProperty(n,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[e]=s,n}function xo(){return xo=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)({}).hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},xo.apply(null,arguments)}function _m(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),s.push.apply(s,r)}return s}function zs(n){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?_m(Object(s),!0).forEach(function(r){L0(n,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):_m(Object(s)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(s,r))})}return n}function o5(n){var e=n.length;if(e===0||e===1)return n;if(e===2)return[n[0],n[1],"".concat(n[0],".").concat(n[1]),"".concat(n[1],".").concat(n[0])];if(e===3)return[n[0],n[1],n[2],"".concat(n[0],".").concat(n[1]),"".concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[0]),"".concat(n[1],".").concat(n[2]),"".concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[1]),"".concat(n[0],".").concat(n[1],".").concat(n[2]),"".concat(n[0],".").concat(n[2],".").concat(n[1]),"".concat(n[1],".").concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[0],".").concat(n[1]),"".concat(n[2],".").concat(n[1],".").concat(n[0])];if(e>=4)return[n[0],n[1],n[2],n[3],"".concat(n[0],".").concat(n[1]),"".concat(n[0],".").concat(n[2]),"".concat(n[0],".").concat(n[3]),"".concat(n[1],".").concat(n[0]),"".concat(n[1],".").concat(n[2]),"".concat(n[1],".").concat(n[3]),"".concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[1]),"".concat(n[2],".").concat(n[3]),"".concat(n[3],".").concat(n[0]),"".concat(n[3],".").concat(n[1]),"".concat(n[3],".").concat(n[2]),"".concat(n[0],".").concat(n[1],".").concat(n[2]),"".concat(n[0],".").concat(n[1],".").concat(n[3]),"".concat(n[0],".").concat(n[2],".").concat(n[1]),"".concat(n[0],".").concat(n[2],".").concat(n[3]),"".concat(n[0],".").concat(n[3],".").concat(n[1]),"".concat(n[0],".").concat(n[3],".").concat(n[2]),"".concat(n[1],".").concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[0],".").concat(n[3]),"".concat(n[1],".").concat(n[2],".").concat(n[0]),"".concat(n[1],".").concat(n[2],".").concat(n[3]),"".concat(n[1],".").concat(n[3],".").concat(n[0]),"".concat(n[1],".").concat(n[3],".").concat(n[2]),"".concat(n[2],".").concat(n[0],".").concat(n[1]),"".concat(n[2],".").concat(n[0],".").concat(n[3]),"".concat(n[2],".").concat(n[1],".").concat(n[0]),"".concat(n[2],".").concat(n[1],".").concat(n[3]),"".concat(n[2],".").concat(n[3],".").concat(n[0]),"".concat(n[2],".").concat(n[3],".").concat(n[1]),"".concat(n[3],".").concat(n[0],".").concat(n[1]),"".concat(n[3],".").concat(n[0],".").concat(n[2]),"".concat(n[3],".").concat(n[1],".").concat(n[0]),"".concat(n[3],".").concat(n[1],".").concat(n[2]),"".concat(n[3],".").concat(n[2],".").concat(n[0]),"".concat(n[3],".").concat(n[2],".").concat(n[1]),"".concat(n[0],".").concat(n[1],".").concat(n[2],".").concat(n[3]),"".concat(n[0],".").concat(n[1],".").concat(n[3],".").concat(n[2]),"".concat(n[0],".").concat(n[2],".").concat(n[1],".").concat(n[3]),"".concat(n[0],".").concat(n[2],".").concat(n[3],".").concat(n[1]),"".concat(n[0],".").concat(n[3],".").concat(n[1],".").concat(n[2]),"".concat(n[0],".").concat(n[3],".").concat(n[2],".").concat(n[1]),"".concat(n[1],".").concat(n[0],".").concat(n[2],".").concat(n[3]),"".concat(n[1],".").concat(n[0],".").concat(n[3],".").concat(n[2]),"".concat(n[1],".").concat(n[2],".").concat(n[0],".").concat(n[3]),"".concat(n[1],".").concat(n[2],".").concat(n[3],".").concat(n[0]),"".concat(n[1],".").concat(n[3],".").concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[3],".").concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[0],".").concat(n[1],".").concat(n[3]),"".concat(n[2],".").concat(n[0],".").concat(n[3],".").concat(n[1]),"".concat(n[2],".").concat(n[1],".").concat(n[0],".").concat(n[3]),"".concat(n[2],".").concat(n[1],".").concat(n[3],".").concat(n[0]),"".concat(n[2],".").concat(n[3],".").concat(n[0],".").concat(n[1]),"".concat(n[2],".").concat(n[3],".").concat(n[1],".").concat(n[0]),"".concat(n[3],".").concat(n[0],".").concat(n[1],".").concat(n[2]),"".concat(n[3],".").concat(n[0],".").concat(n[2],".").concat(n[1]),"".concat(n[3],".").concat(n[1],".").concat(n[0],".").concat(n[2]),"".concat(n[3],".").concat(n[1],".").concat(n[2],".").concat(n[0]),"".concat(n[3],".").concat(n[2],".").concat(n[0],".").concat(n[1]),"".concat(n[3],".").concat(n[2],".").concat(n[1],".").concat(n[0])]}var rc={};function d5(n){if(n.length===0||n.length===1)return n;var e=n.join(".");return rc[e]||(rc[e]=o5(n)),rc[e]}function u5(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,r=n.filter(function(l){return l!=="token"}),a=d5(r);return a.reduce(function(l,i){return zs(zs({},l),s[i])},e)}function Am(n){return n.join(" ")}function m5(n,e){var s=0;return function(r){return s+=1,r.map(function(a,l){return E0({node:a,stylesheet:n,useInlineStyles:e,key:"code-segment-".concat(s,"-").concat(l)})})}}function E0(n){var e=n.node,s=n.stylesheet,r=n.style,a=r===void 0?{}:r,l=n.useInlineStyles,i=n.key,c=e.properties,o=e.type,d=e.tagName,u=e.value;if(o==="text")return u;if(d){var p=m5(s,l),h;if(!l)h=zs(zs({},c),{},{className:Am(c.className)});else{var j=Object.keys(s).reduce(function(x,f){return f.split(".").forEach(function(g){x.includes(g)||x.push(g)}),x},[]),y=c.className&&c.className.includes("token")?["token"]:[],b=c.className&&y.concat(c.className.filter(function(x){return!j.includes(x)}));h=zs(zs({},c),{},{className:Am(b)||void 0,style:u5(c.className,Object.assign({},c.style,a),s)})}var w=p(e.children);return Pn.createElement(d,xo({key:i},h),w)}}const p5=function(n,e){var s=n.listLanguages();return s.indexOf(e)!==-1};var h5=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Rm(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),s.push.apply(s,r)}return s}function Mn(n){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Rm(Object(s),!0).forEach(function(r){L0(n,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):Rm(Object(s)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(s,r))})}return n}var f5=/\n/g;function x5(n){return n.match(f5)}function g5(n){var e=n.lines,s=n.startingLineNumber,r=n.style;return e.map(function(a,l){var i=l+s;return Pn.createElement("span",{key:"line-".concat(l),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(i):r},"".concat(i,`
`))})}function j5(n){var e=n.codeString,s=n.codeStyle,r=n.containerStyle,a=r===void 0?{float:"left",paddingRight:"10px"}:r,l=n.numberStyle,i=l===void 0?{}:l,c=n.startingLineNumber;return Pn.createElement("code",{style:Object.assign({},s,a)},g5({lines:e.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:c}))}function v5(n){return"".concat(n.toString().length,".25em")}function T0(n,e){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(n),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:e},children:[{type:"text",value:n}]}}function D0(n,e,s){var r={display:"inline-block",minWidth:v5(s),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof n=="function"?n(e):n,l=Mn(Mn({},r),a);return l}function pl(n){var e=n.children,s=n.lineNumber,r=n.lineNumberStyle,a=n.largestLineNumber,l=n.showInlineLineNumbers,i=n.lineProps,c=i===void 0?{}:i,o=n.className,d=o===void 0?[]:o,u=n.showLineNumbers,p=n.wrapLongLines,h=typeof c=="function"?c(s):c;if(h.className=d,s&&l){var j=D0(r,s,a);e.unshift(T0(s,j))}return p&u&&(h.style=Mn(Mn({},h.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:h,children:e}}function O0(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<n.length;r++){var a=n[r];if(a.type==="text")s.push(pl({children:[a],className:l5(new Set(e))}));else if(a.children){var l=e.concat(a.properties.className);O0(a.children,l).forEach(function(i){return s.push(i)})}}return s}function b5(n,e,s,r,a,l,i,c,o){var d,u=O0(n.value),p=[],h=-1,j=0;function y(S,R){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return pl({children:S,lineNumber:R,lineNumberStyle:c,largestLineNumber:i,showInlineLineNumbers:a,lineProps:s,className:C,showLineNumbers:r,wrapLongLines:o})}function b(S,R){if(r&&R&&a){var C=D0(c,R,i);S.unshift(T0(R,C))}return S}function w(S,R){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return e||C.length>0?y(S,R,C):b(S,R)}for(var x=function(){var R=u[j],C=R.children[0].value,$=x5(C);if($){var Q=C.split(`
`);Q.forEach(function(B,oe){var X=r&&p.length+l,an={type:"text",value:"".concat(B,`
`)};if(oe===0){var qe=u.slice(h+1,j).concat(pl({children:[an],className:R.properties.className})),ve=w(qe,X);p.push(ve)}else if(oe===Q.length-1){var A=u[j+1]&&u[j+1].children&&u[j+1].children[0],O={type:"text",value:"".concat(B)};if(A){var T=pl({children:[O],className:R.properties.className});u.splice(j+1,0,T)}else{var Y=[O],K=w(Y,X,R.properties.className);p.push(K)}}else{var Te=[an],Ve=w(Te,X,R.properties.className);p.push(Ve)}}),h=j}j++};j<u.length;)x();if(h!==u.length-1){var f=u.slice(h+1,u.length);if(f&&f.length){var g=r&&p.length+l,v=w(f,g);p.push(v)}}return e?p:(d=[]).concat.apply(d,p)}function y5(n){var e=n.rows,s=n.stylesheet,r=n.useInlineStyles;return e.map(function(a,l){return E0({node:a,stylesheet:s,useInlineStyles:r,key:"code-segement".concat(l)})})}function B0(n){return n&&typeof n.highlightAuto<"u"}function N5(n){var e=n.astGenerator,s=n.language,r=n.code,a=n.defaultCodeValue;if(B0(e)){var l=p5(e,s);return s==="text"?{value:a,language:"text"}:l?e.highlight(s,r):e.highlightAuto(r)}try{return s&&s!=="text"?{value:e.highlight(r,s)}:{value:a}}catch{return{value:a}}}function w5(n,e){return function(r){var a=r.language,l=r.children,i=r.style,c=i===void 0?e:i,o=r.customStyle,d=o===void 0?{}:o,u=r.codeTagProps,p=u===void 0?{className:a?"language-".concat(a):void 0,style:Mn(Mn({},c['code[class*="language-"]']),c['code[class*="language-'.concat(a,'"]')])}:u,h=r.useInlineStyles,j=h===void 0?!0:h,y=r.showLineNumbers,b=y===void 0?!1:y,w=r.showInlineLineNumbers,x=w===void 0?!0:w,f=r.startingLineNumber,g=f===void 0?1:f,v=r.lineNumberContainerStyle,S=r.lineNumberStyle,R=S===void 0?{}:S,C=r.wrapLines,$=r.wrapLongLines,Q=$===void 0?!1:$,B=r.lineProps,oe=B===void 0?{}:B,X=r.renderer,an=r.PreTag,qe=an===void 0?"pre":an,ve=r.CodeTag,A=ve===void 0?"code":ve,O=r.code,T=O===void 0?(Array.isArray(l)?l[0]:l)||"":O,Y=r.astGenerator,K=n5(r,h5);Y=Y||n;var Te=b?Pn.createElement(j5,{containerStyle:v,codeStyle:p.style||{},numberStyle:R,startingLineNumber:g,codeString:T}):null,Ve=c.hljs||c['pre[class*="language-"]']||{backgroundColor:"#fff"},k=B0(Y)?"hljs":"prismjs",M=j?Object.assign({},K,{style:Object.assign({},Ve,d)}):Object.assign({},K,{className:K.className?"".concat(k," ").concat(K.className):k,style:Object.assign({},d)});if(Q?p.style=Mn(Mn({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=Mn(Mn({},p.style),{},{whiteSpace:"pre"}),!Y)return Pn.createElement(qe,M,Te,Pn.createElement(A,p,T));(C===void 0&&X||Q)&&(C=!0),X=X||y5;var H=[{type:"text",value:T}],ne=N5({astGenerator:Y,language:a,code:T,defaultCodeValue:H});ne.language===null&&(ne.value=H);var Ne=ne.value.length+g,Vn=b5(ne,C,oe,b,x,g,Ne,R,Q);return Pn.createElement(qe,M,Pn.createElement(A,p,!x&&Te,X({rows:Vn,stylesheet:c,useInlineStyles:j})))}}var gs={};function Sd(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(function(e){var s=n[e];typeof s=="object"&&!Object.isFrozen(s)&&Sd(s)}),n}var z0=Sd,S5=Sd;z0.default=S5;class Mm{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Fs(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Ct(n,...e){const s=Object.create(null);for(const r in n)s[r]=n[r];return e.forEach(function(r){for(const a in r)s[a]=r[a]}),s}const k5="</span>",$m=n=>!!n.kind;class C5{constructor(e,s){this.buffer="",this.classPrefix=s.classPrefix,e.walk(this)}addText(e){this.buffer+=Fs(e)}openNode(e){if(!$m(e))return;let s=e.kind;e.sublanguage||(s=`${this.classPrefix}${s}`),this.span(s)}closeNode(e){$m(e)&&(this.buffer+=k5)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class kd{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const s={kind:e,children:[]};this.add(s),this.stack.push(s)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,s){return typeof s=="string"?e.addText(s):s.children&&(e.openNode(s),s.children.forEach(r=>this._walk(e,r)),e.closeNode(s)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(s=>typeof s=="string")?e.children=[e.children.join("")]:e.children.forEach(s=>{kd._collapse(s)}))}}class _5 extends kd{constructor(e){super(),this.options=e}addKeyword(e,s){e!==""&&(this.openNode(s),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,s){const r=e.root;r.kind=s,r.sublanguage=!0,this.add(r)}toHTML(){return new C5(this,this.options).value()}finalize(){return!0}}function A5(n){return new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function pa(n){return n?typeof n=="string"?n:n.source:null}function R5(...n){return n.map(s=>pa(s)).join("")}function M5(...n){return"("+n.map(s=>pa(s)).join("|")+")"}function $5(n){return new RegExp(n.toString()+"|").exec("").length-1}function L5(n,e){const s=n&&n.exec(e);return s&&s.index===0}const E5=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function T5(n,e="|"){let s=0;return n.map(r=>{s+=1;const a=s;let l=pa(r),i="";for(;l.length>0;){const c=E5.exec(l);if(!c){i+=l;break}i+=l.substring(0,c.index),l=l.substring(c.index+c[0].length),c[0][0]==="\\"&&c[1]?i+="\\"+String(Number(c[1])+a):(i+=c[0],c[0]==="("&&s++)}return i}).map(r=>`(${r})`).join(e)}const D5=/\b\B/,U0="[a-zA-Z]\\w*",Cd="[a-zA-Z_]\\w*",_d="\\b\\d+(\\.\\d+)?",H0="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",q0="\\b(0b[01]+)",O5="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",B5=(n={})=>{const e=/^#![ ]*\//;return n.binary&&(n.begin=R5(e,/.*\b/,n.binary,/\b.*/)),Ct({className:"meta",begin:e,end:/$/,relevance:0,"on:begin":(s,r)=>{s.index!==0&&r.ignoreMatch()}},n)},ha={begin:"\\\\[\\s\\S]",relevance:0},z5={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[ha]},U5={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[ha]},V0={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},fi=function(n,e,s={}){const r=Ct({className:"comment",begin:n,end:e,contains:[]},s);return r.contains.push(V0),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},H5=fi("//","$"),q5=fi("/\\*","\\*/"),V5=fi("#","$"),X5={className:"number",begin:_d,relevance:0},Z5={className:"number",begin:H0,relevance:0},G5={className:"number",begin:q0,relevance:0},Y5={className:"number",begin:_d+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},F5={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[ha,{begin:/\[/,end:/\]/,relevance:0,contains:[ha]}]}]},P5={className:"title",begin:U0,relevance:0},I5={className:"title",begin:Cd,relevance:0},Q5={begin:"\\.\\s*"+Cd,relevance:0},W5=function(n){return Object.assign(n,{"on:begin":(e,s)=>{s.data._beginMatch=e[1]},"on:end":(e,s)=>{s.data._beginMatch!==e[1]&&s.ignoreMatch()}})};var Ka=Object.freeze({__proto__:null,MATCH_NOTHING_RE:D5,IDENT_RE:U0,UNDERSCORE_IDENT_RE:Cd,NUMBER_RE:_d,C_NUMBER_RE:H0,BINARY_NUMBER_RE:q0,RE_STARTERS_RE:O5,SHEBANG:B5,BACKSLASH_ESCAPE:ha,APOS_STRING_MODE:z5,QUOTE_STRING_MODE:U5,PHRASAL_WORDS_MODE:V0,COMMENT:fi,C_LINE_COMMENT_MODE:H5,C_BLOCK_COMMENT_MODE:q5,HASH_COMMENT_MODE:V5,NUMBER_MODE:X5,C_NUMBER_MODE:Z5,BINARY_NUMBER_MODE:G5,CSS_NUMBER_MODE:Y5,REGEXP_MODE:F5,TITLE_MODE:P5,UNDERSCORE_TITLE_MODE:I5,METHOD_GUARD:Q5,END_SAME_AS_BEGIN:W5});function J5(n,e){n.input[n.index-1]==="."&&e.ignoreMatch()}function K5(n,e){e&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=J5,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function e4(n,e){Array.isArray(n.illegal)&&(n.illegal=M5(...n.illegal))}function n4(n,e){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function t4(n,e){n.relevance===void 0&&(n.relevance=1)}const s4=["of","and","for","in","not","or","if","then","parent","list","value"],r4="keyword";function X0(n,e,s=r4){const r={};return typeof n=="string"?a(s,n.split(" ")):Array.isArray(n)?a(s,n):Object.keys(n).forEach(function(l){Object.assign(r,X0(n[l],e,l))}),r;function a(l,i){e&&(i=i.map(c=>c.toLowerCase())),i.forEach(function(c){const o=c.split("|");r[o[0]]=[l,a4(o[0],o[1])]})}}function a4(n,e){return e?Number(e):l4(n)?0:1}function l4(n){return s4.includes(n.toLowerCase())}function i4(n,{plugins:e}){function s(c,o){return new RegExp(pa(c),"m"+(n.case_insensitive?"i":"")+(o?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(o,d){d.position=this.position++,this.matchIndexes[this.matchAt]=d,this.regexes.push([d,o]),this.matchAt+=$5(o)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const o=this.regexes.map(d=>d[1]);this.matcherRe=s(T5(o),!0),this.lastIndex=0}exec(o){this.matcherRe.lastIndex=this.lastIndex;const d=this.matcherRe.exec(o);if(!d)return null;const u=d.findIndex((h,j)=>j>0&&h!==void 0),p=this.matchIndexes[u];return d.splice(0,u),Object.assign(d,p)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(o){if(this.multiRegexes[o])return this.multiRegexes[o];const d=new r;return this.rules.slice(o).forEach(([u,p])=>d.addRule(u,p)),d.compile(),this.multiRegexes[o]=d,d}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(o,d){this.rules.push([o,d]),d.type==="begin"&&this.count++}exec(o){const d=this.getMatcher(this.regexIndex);d.lastIndex=this.lastIndex;let u=d.exec(o);if(this.resumingScanAtSamePosition()&&!(u&&u.index===this.lastIndex)){const p=this.getMatcher(0);p.lastIndex=this.lastIndex+1,u=p.exec(o)}return u&&(this.regexIndex+=u.position+1,this.regexIndex===this.count&&this.considerAll()),u}}function l(c){const o=new a;return c.contains.forEach(d=>o.addRule(d.begin,{rule:d,type:"begin"})),c.terminatorEnd&&o.addRule(c.terminatorEnd,{type:"end"}),c.illegal&&o.addRule(c.illegal,{type:"illegal"}),o}function i(c,o){const d=c;if(c.isCompiled)return d;[n4].forEach(p=>p(c,o)),n.compilerExtensions.forEach(p=>p(c,o)),c.__beforeBegin=null,[K5,e4,t4].forEach(p=>p(c,o)),c.isCompiled=!0;let u=null;if(typeof c.keywords=="object"&&(u=c.keywords.$pattern,delete c.keywords.$pattern),c.keywords&&(c.keywords=X0(c.keywords,n.case_insensitive)),c.lexemes&&u)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return u=u||c.lexemes||/\w+/,d.keywordPatternRe=s(u,!0),o&&(c.begin||(c.begin=/\B|\b/),d.beginRe=s(c.begin),c.endSameAsBegin&&(c.end=c.begin),!c.end&&!c.endsWithParent&&(c.end=/\B|\b/),c.end&&(d.endRe=s(c.end)),d.terminatorEnd=pa(c.end)||"",c.endsWithParent&&o.terminatorEnd&&(d.terminatorEnd+=(c.end?"|":"")+o.terminatorEnd)),c.illegal&&(d.illegalRe=s(c.illegal)),c.contains||(c.contains=[]),c.contains=[].concat(...c.contains.map(function(p){return c4(p==="self"?c:p)})),c.contains.forEach(function(p){i(p,d)}),c.starts&&i(c.starts,o),d.matcher=l(d),d}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=Ct(n.classNameAliases||{}),i(n)}function Z0(n){return n?n.endsWithParent||Z0(n.starts):!1}function c4(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return Ct(n,{variants:null},e)})),n.cachedVariants?n.cachedVariants:Z0(n)?Ct(n,{starts:n.starts?Ct(n.starts):null}):Object.isFrozen(n)?Ct(n):n}var o4="10.7.3";function d4(n){return!!(n||n==="")}function u4(n){const e={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!n.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,Fs(this.code);let r={};return this.autoDetect?(r=n.highlightAuto(this.code),this.detectedLanguage=r.language):(r=n.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),r.value},autoDetect(){return!this.language||d4(this.autodetect)},ignoreIllegals(){return!0}},render(r){return r("pre",{},[r("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:e,VuePlugin:{install(r){r.component("highlightjs",e)}}}}const m4={"after:highlightElement":({el:n,result:e,text:s})=>{const r=Lm(n);if(!r.length)return;const a=document.createElement("div");a.innerHTML=e.value,e.value=p4(r,Lm(a),s)}};function go(n){return n.nodeName.toLowerCase()}function Lm(n){const e=[];return function s(r,a){for(let l=r.firstChild;l;l=l.nextSibling)l.nodeType===3?a+=l.nodeValue.length:l.nodeType===1&&(e.push({event:"start",offset:a,node:l}),a=s(l,a),go(l).match(/br|hr|img|input/)||e.push({event:"stop",offset:a,node:l}));return a}(n,0),e}function p4(n,e,s){let r=0,a="";const l=[];function i(){return!n.length||!e.length?n.length?n:e:n[0].offset!==e[0].offset?n[0].offset<e[0].offset?n:e:e[0].event==="start"?n:e}function c(u){function p(h){return" "+h.nodeName+'="'+Fs(h.value)+'"'}a+="<"+go(u)+[].map.call(u.attributes,p).join("")+">"}function o(u){a+="</"+go(u)+">"}function d(u){(u.event==="start"?c:o)(u.node)}for(;n.length||e.length;){let u=i();if(a+=Fs(s.substring(r,u[0].offset)),r=u[0].offset,u===n){l.reverse().forEach(o);do d(u.splice(0,1)[0]),u=i();while(u===n&&u.length&&u[0].offset===r);l.reverse().forEach(c)}else u[0].event==="start"?l.push(u[0].node):l.pop(),d(u.splice(0,1)[0])}return a+Fs(s.substr(r))}const Em={},ac=n=>{console.error(n)},Tm=(n,...e)=>{console.log(`WARN: ${n}`,...e)},on=(n,e)=>{Em[`${n}/${e}`]||(console.log(`Deprecated as of ${n}. ${e}`),Em[`${n}/${e}`]=!0)},lc=Fs,Dm=Ct,Om=Symbol("nomatch"),h4=function(n){const e=Object.create(null),s=Object.create(null),r=[];let a=!0;const l=/(^(<[^>]+>|\t|)+|\n)/gm,i="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let o={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:_5};function d(k){return o.noHighlightRe.test(k)}function u(k){let M=k.className+" ";M+=k.parentNode?k.parentNode.className:"";const H=o.languageDetectRe.exec(M);if(H){const ne=ve(H[1]);return ne||(Tm(i.replace("{}",H[1])),Tm("Falling back to no-highlight mode for this block.",k)),ne?H[1]:"no-highlight"}return M.split(/\s+/).find(ne=>d(ne)||ve(ne))}function p(k,M,H,ne){let Ne="",Vn="";typeof M=="object"?(Ne=k,H=M.ignoreIllegals,Vn=M.language,ne=void 0):(on("10.7.0","highlight(lang, code, ...args) has been deprecated."),on("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Vn=k,Ne=M);const _n={code:Ne,language:Vn};K("before:highlight",_n);const An=_n.result?_n.result:h(_n.language,_n.code,H,ne);return An.code=_n.code,K("after:highlight",An),An}function h(k,M,H,ne){function Ne(E,D){const P=vs.case_insensitive?D[0].toLowerCase():D[0];return Object.prototype.hasOwnProperty.call(E.keywords,P)&&E.keywords[P]}function Vn(){if(!F.keywords){Xe.addText(we);return}let E=0;F.keywordPatternRe.lastIndex=0;let D=F.keywordPatternRe.exec(we),P="";for(;D;){P+=we.substring(E,D.index);const te=Ne(F,D);if(te){const[Pe,Ta]=te;if(Xe.addText(P),P="",Ea+=Ta,Pe.startsWith("_"))P+=D[0];else{const sg=vs.classNameAliases[Pe]||Pe;Xe.addKeyword(D[0],sg)}}else P+=D[0];E=F.keywordPatternRe.lastIndex,D=F.keywordPatternRe.exec(we)}P+=we.substr(E),Xe.addText(P)}function _n(){if(we==="")return;let E=null;if(typeof F.subLanguage=="string"){if(!e[F.subLanguage]){Xe.addText(we);return}E=h(F.subLanguage,we,!0,Fd[F.subLanguage]),Fd[F.subLanguage]=E.top}else E=y(we,F.subLanguage.length?F.subLanguage:null);F.relevance>0&&(Ea+=E.relevance),Xe.addSublanguage(E.emitter,E.language)}function An(){F.subLanguage!=null?_n():Vn(),we=""}function Rn(E){return E.className&&Xe.openNode(vs.classNameAliases[E.className]||E.className),F=Object.create(E,{parent:{value:F}}),F}function dt(E,D,P){let te=L5(E.endRe,P);if(te){if(E["on:end"]){const Pe=new Mm(E);E["on:end"](D,Pe),Pe.isMatchIgnored&&(te=!1)}if(te){for(;E.endsParent&&E.parent;)E=E.parent;return E}}if(E.endsWithParent)return dt(E.parent,D,P)}function J1(E){return F.matcher.regexIndex===0?(we+=E[0],1):(ji=!0,0)}function K1(E){const D=E[0],P=E.rule,te=new Mm(P),Pe=[P.__beforeBegin,P["on:begin"]];for(const Ta of Pe)if(Ta&&(Ta(E,te),te.isMatchIgnored))return J1(D);return P&&P.endSameAsBegin&&(P.endRe=A5(D)),P.skip?we+=D:(P.excludeBegin&&(we+=D),An(),!P.returnBegin&&!P.excludeBegin&&(we=D)),Rn(P),P.returnBegin?0:D.length}function eg(E){const D=E[0],P=M.substr(E.index),te=dt(F,E,P);if(!te)return Om;const Pe=F;Pe.skip?we+=D:(Pe.returnEnd||Pe.excludeEnd||(we+=D),An(),Pe.excludeEnd&&(we=D));do F.className&&Xe.closeNode(),!F.skip&&!F.subLanguage&&(Ea+=F.relevance),F=F.parent;while(F!==te.parent);return te.starts&&(te.endSameAsBegin&&(te.starts.endRe=te.endRe),Rn(te.starts)),Pe.returnEnd?0:D.length}function ng(){const E=[];for(let D=F;D!==vs;D=D.parent)D.className&&E.unshift(D.className);E.forEach(D=>Xe.openNode(D))}let La={};function Yd(E,D){const P=D&&D[0];if(we+=E,P==null)return An(),0;if(La.type==="begin"&&D.type==="end"&&La.index===D.index&&P===""){if(we+=M.slice(D.index,D.index+1),!a){const te=new Error("0 width match regex");throw te.languageName=k,te.badRule=La.rule,te}return 1}if(La=D,D.type==="begin")return K1(D);if(D.type==="illegal"&&!H){const te=new Error('Illegal lexeme "'+P+'" for mode "'+(F.className||"<unnamed>")+'"');throw te.mode=F,te}else if(D.type==="end"){const te=eg(D);if(te!==Om)return te}if(D.type==="illegal"&&P==="")return 1;if(gi>1e5&&gi>D.index*3)throw new Error("potential infinite loop, way more iterations than matches");return we+=P,P.length}const vs=ve(k);if(!vs)throw ac(i.replace("{}",k)),new Error('Unknown language: "'+k+'"');const tg=i4(vs,{plugins:r});let xi="",F=ne||tg;const Fd={},Xe=new o.__emitter(o);ng();let we="",Ea=0,bs=0,gi=0,ji=!1;try{for(F.matcher.considerAll();;){gi++,ji?ji=!1:F.matcher.considerAll(),F.matcher.lastIndex=bs;const E=F.matcher.exec(M);if(!E)break;const D=M.substring(bs,E.index),P=Yd(D,E);bs=E.index+P}return Yd(M.substr(bs)),Xe.closeAllNodes(),Xe.finalize(),xi=Xe.toHTML(),{relevance:Math.floor(Ea),value:xi,language:k,illegal:!1,emitter:Xe,top:F}}catch(E){if(E.message&&E.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:E.message,context:M.slice(bs-100,bs+100),mode:E.mode},sofar:xi,relevance:0,value:lc(M),emitter:Xe};if(a)return{illegal:!1,relevance:0,value:lc(M),emitter:Xe,language:k,top:F,errorRaised:E};throw E}}function j(k){const M={relevance:0,emitter:new o.__emitter(o),value:lc(k),illegal:!1,top:c};return M.emitter.addText(k),M}function y(k,M){M=M||o.languages||Object.keys(e);const H=j(k),ne=M.filter(ve).filter(O).map(Rn=>h(Rn,k,!1));ne.unshift(H);const Ne=ne.sort((Rn,dt)=>{if(Rn.relevance!==dt.relevance)return dt.relevance-Rn.relevance;if(Rn.language&&dt.language){if(ve(Rn.language).supersetOf===dt.language)return 1;if(ve(dt.language).supersetOf===Rn.language)return-1}return 0}),[Vn,_n]=Ne,An=Vn;return An.second_best=_n,An}function b(k){return o.tabReplace||o.useBR?k.replace(l,M=>M===`
`?o.useBR?"<br>":M:o.tabReplace?M.replace(/\t/g,o.tabReplace):M):k}function w(k,M,H){const ne=M?s[M]:H;k.classList.add("hljs"),ne&&k.classList.add(ne)}const x={"before:highlightElement":({el:k})=>{o.useBR&&(k.innerHTML=k.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,`
`))},"after:highlightElement":({result:k})=>{o.useBR&&(k.value=k.value.replace(/\n/g,"<br>"))}},f=/^(<[^>]+>|\t)+/gm,g={"after:highlightElement":({result:k})=>{o.tabReplace&&(k.value=k.value.replace(f,M=>M.replace(/\t/g,o.tabReplace)))}};function v(k){let M=null;const H=u(k);if(d(H))return;K("before:highlightElement",{el:k,language:H}),M=k;const ne=M.textContent,Ne=H?p(ne,{language:H,ignoreIllegals:!0}):y(ne);K("after:highlightElement",{el:k,result:Ne,text:ne}),k.innerHTML=Ne.value,w(k,H,Ne.language),k.result={language:Ne.language,re:Ne.relevance,relavance:Ne.relevance},Ne.second_best&&(k.second_best={language:Ne.second_best.language,re:Ne.second_best.relevance,relavance:Ne.second_best.relevance})}function S(k){k.useBR&&(on("10.3.0","'useBR' will be removed entirely in v11.0"),on("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),o=Dm(o,k)}const R=()=>{if(R.called)return;R.called=!0,on("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(v)};function C(){on("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),$=!0}let $=!1;function Q(){if(document.readyState==="loading"){$=!0;return}document.querySelectorAll("pre code").forEach(v)}function B(){$&&Q()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",B,!1);function oe(k,M){let H=null;try{H=M(n)}catch(ne){if(ac("Language definition for '{}' could not be registered.".replace("{}",k)),a)ac(ne);else throw ne;H=c}H.name||(H.name=k),e[k]=H,H.rawDefinition=M.bind(null,n),H.aliases&&A(H.aliases,{languageName:k})}function X(k){delete e[k];for(const M of Object.keys(s))s[M]===k&&delete s[M]}function an(){return Object.keys(e)}function qe(k){on("10.4.0","requireLanguage will be removed entirely in v11."),on("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const M=ve(k);if(M)return M;throw new Error("The '{}' language is required, but not loaded.".replace("{}",k))}function ve(k){return k=(k||"").toLowerCase(),e[k]||e[s[k]]}function A(k,{languageName:M}){typeof k=="string"&&(k=[k]),k.forEach(H=>{s[H.toLowerCase()]=M})}function O(k){const M=ve(k);return M&&!M.disableAutodetect}function T(k){k["before:highlightBlock"]&&!k["before:highlightElement"]&&(k["before:highlightElement"]=M=>{k["before:highlightBlock"](Object.assign({block:M.el},M))}),k["after:highlightBlock"]&&!k["after:highlightElement"]&&(k["after:highlightElement"]=M=>{k["after:highlightBlock"](Object.assign({block:M.el},M))})}function Y(k){T(k),r.push(k)}function K(k,M){const H=k;r.forEach(function(ne){ne[H]&&ne[H](M)})}function Te(k){return on("10.2.0","fixMarkup will be removed entirely in v11.0"),on("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),b(k)}function Ve(k){return on("10.7.0","highlightBlock will be removed entirely in v12.0"),on("10.7.0","Please use highlightElement now."),v(k)}Object.assign(n,{highlight:p,highlightAuto:y,highlightAll:Q,fixMarkup:Te,highlightElement:v,highlightBlock:Ve,configure:S,initHighlighting:R,initHighlightingOnLoad:C,registerLanguage:oe,unregisterLanguage:X,listLanguages:an,getLanguage:ve,registerAliases:A,requireLanguage:qe,autoDetection:O,inherit:Dm,addPlugin:Y,vuePlugin:u4(n).VuePlugin}),n.debugMode=function(){a=!1},n.safeMode=function(){a=!0},n.versionString=o4;for(const k in Ka)typeof Ka[k]=="object"&&z0(Ka[k]);return Object.assign(n,Ka),n.addPlugin(x),n.addPlugin(m4),n.addPlugin(g),n};var f4=h4({}),x4=f4,G0={exports:{}};(function(n){(function(){var e;e=n.exports=a,e.format=a,e.vsprintf=r,typeof console<"u"&&typeof console.log=="function"&&(e.printf=s);function s(){console.log(a.apply(null,arguments))}function r(l,i){return a.apply(null,[l].concat(i))}function a(l){for(var i=1,c=[].slice.call(arguments),o=0,d=l.length,u="",p,h=!1,j,y,b=!1,w,x=function(){return c[i++]},f=function(){for(var g="";/\d/.test(l[o]);)g+=l[o++],p=l[o];return g.length>0?parseInt(g):null};o<d;++o)if(p=l[o],h)switch(h=!1,p=="."?(b=!1,p=l[++o]):p=="0"&&l[o+1]=="."?(b=!0,o+=2,p=l[o]):b=!0,w=f(),p){case"b":u+=parseInt(x(),10).toString(2);break;case"c":j=x(),typeof j=="string"||j instanceof String?u+=j:u+=String.fromCharCode(parseInt(j,10));break;case"d":u+=parseInt(x(),10);break;case"f":y=String(parseFloat(x()).toFixed(w||6)),u+=b?y:y.replace(/^0/,"");break;case"j":u+=JSON.stringify(x());break;case"o":u+="0"+parseInt(x(),10).toString(8);break;case"s":u+=x();break;case"x":u+="0x"+parseInt(x(),10).toString(16);break;case"X":u+="0x"+parseInt(x(),10).toString(16).toUpperCase();break;default:u+=p;break}else p==="%"?h=!0:u+=p;return u}})()})(G0);var g4=G0.exports,j4=g4,Zt=Gt(Error),v4=Zt;Zt.eval=Gt(EvalError);Zt.range=Gt(RangeError);Zt.reference=Gt(ReferenceError);Zt.syntax=Gt(SyntaxError);Zt.type=Gt(TypeError);Zt.uri=Gt(URIError);Zt.create=Gt;function Gt(n){return e.displayName=n.displayName||n.name,e;function e(s){return s&&(s=j4.apply(null,arguments)),new n(s)}}var En=x4,hl=v4;gs.highlight=Y0;gs.highlightAuto=y4;gs.registerLanguage=N4;gs.listLanguages=w4;gs.registerAlias=S4;ot.prototype.addText=_4;ot.prototype.addKeyword=k4;ot.prototype.addSublanguage=C4;ot.prototype.openNode=A4;ot.prototype.closeNode=R4;ot.prototype.closeAllNodes=F0;ot.prototype.finalize=F0;ot.prototype.toHTML=M4;var b4="hljs-";function Y0(n,e,s){var r=En.configure({}),a=s||{},l=a.prefix,i;if(typeof n!="string")throw hl("Expected `string` for name, got `%s`",n);if(!En.getLanguage(n))throw hl("Unknown language: `%s` is not registered",n);if(typeof e!="string")throw hl("Expected `string` for value, got `%s`",e);if(l==null&&(l=b4),En.configure({__emitter:ot,classPrefix:l}),i=En.highlight(e,{language:n,ignoreIllegals:!0}),En.configure(r||{}),i.errorRaised)throw i.errorRaised;return{relevance:i.relevance,language:i.language,value:i.emitter.rootNode.children}}function y4(n,e){var s=e||{},r=s.subset||En.listLanguages();s.prefix;var a=r.length,l=-1,i,c,o,d;if(typeof n!="string")throw hl("Expected `string` for value, got `%s`",n);for(c={relevance:0,language:null,value:[]},i={relevance:0,language:null,value:[]};++l<a;)d=r[l],En.getLanguage(d)&&(o=Y0(d,n,e),o.language=d,o.relevance>c.relevance&&(c=o),o.relevance>i.relevance&&(c=i,i=o));return c.language&&(i.secondBest=c),i}function N4(n,e){En.registerLanguage(n,e)}function w4(){return En.listLanguages()}function S4(n,e){var s=n,r;e&&(s={},s[n]=e);for(r in s)En.registerAliases(s[r],{languageName:r})}function ot(n){this.options=n,this.rootNode={children:[]},this.stack=[this.rootNode]}function k4(n,e){this.openNode(e),this.addText(n),this.closeNode()}function C4(n,e){var s=this.stack,r=s[s.length-1],a=n.rootNode.children,l=e?{type:"element",tagName:"span",properties:{className:[e]},children:a}:a;r.children=r.children.concat(l)}function _4(n){var e=this.stack,s,r;n!==""&&(s=e[e.length-1],r=s.children[s.children.length-1],r&&r.type==="text"?r.value+=n:s.children.push({type:"text",value:n}))}function A4(n){var e=this.stack,s=this.options.classPrefix+n,r=e[e.length-1],a={type:"element",tagName:"span",properties:{className:[s]},children:[]};r.children.push(a),e.push(a)}function R4(){this.stack.pop()}function M4(){return""}function F0(){}const Bm="[A-Za-z$_][0-9A-Za-z$_]*",$4=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],L4=["true","false","null","undefined","NaN","Infinity"],E4=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],T4=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],D4=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],O4=["arguments","this","super","console","window","document","localStorage","module","global"],B4=[].concat(D4,O4,E4,T4);function z4(n){return n?typeof n=="string"?n:n.source:null}function zm(n){return jo("(?=",n,")")}function jo(...n){return n.map(s=>z4(s)).join("")}function U4(n){const e=(v,{after:S})=>{const R="</"+v[0].slice(1);return v.input.indexOf(R,S)!==-1},s=Bm,r={begin:"<>",end:"</>"},a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(v,S)=>{const R=v[0].length+v.index,C=v.input[R];if(C==="<"){S.ignoreMatch();return}C===">"&&(e(v,{after:R})||S.ignoreMatch())}},l={$pattern:Bm,keyword:$4,literal:L4,built_in:B4},i="[0-9](_?[0-9])*",c=`\\.(${i})`,o="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${o})((${c})|\\.)?|(${c}))[eE][+-]?(${i})\\b`},{begin:`\\b(${o})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},u={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,u],subLanguage:"xml"}},h={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,u],subLanguage:"css"}},j={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,u]},b={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},w=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,p,h,j,d,n.REGEXP_MODE];u.contains=w.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(w)});const x=[].concat(b,u.contains),f=x.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(x)}]),g={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:f};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:f},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,p,h,j,b,d,{begin:jo(/[{,\n]\s*/,zm(jo(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,s+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:s+zm("\\s*:"),relevance:0}]},{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[b,n.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:f}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:r.begin,end:r.end},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:l,contains:["self",n.inherit(n.TITLE_MODE,{begin:s}),g],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[g,n.inherit(n.TITLE_MODE,{begin:s})]},{variants:[{begin:"\\."+s},{begin:"\\$"+s}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},n.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[n.inherit(n.TITLE_MODE,{begin:s}),"self",g]},{begin:"(get|set)\\s+(?="+s+"\\()",end:/\{/,keywords:"get set",contains:[n.inherit(n.TITLE_MODE,{begin:s}),{begin:/\(\)/},g]},{begin:/\$[(.]/}]}}var H4=U4;const Ad=yh(H4),q4="modulepreload",V4=function(n){return"/"+n},Um={},X4=function(e,s,r){let a=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),i=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=Promise.all(s.map(c=>{if(c=V4(c),c in Um)return;Um[c]=!0;const o=c.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":q4,o||(u.as="script",u.crossOrigin=""),u.href=c,i&&u.setAttribute("nonce",i),document.head.appendChild(u),o)return new Promise((p,h)=>{u.addEventListener("load",p),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}return a.then(()=>e()).catch(l=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l})};var js=w5(gs,{});js.registerLanguage=gs.registerLanguage;const Rd={hljs:{display:"block",overflowX:"auto",padding:"0.5em",color:"#383a42",background:"#fafafa"},"hljs-comment":{color:"#a0a1a7",fontStyle:"italic"},"hljs-quote":{color:"#a0a1a7",fontStyle:"italic"},"hljs-doctag":{color:"#a626a4"},"hljs-keyword":{color:"#a626a4"},"hljs-formula":{color:"#a626a4"},"hljs-section":{color:"#e45649"},"hljs-name":{color:"#e45649"},"hljs-selector-tag":{color:"#e45649"},"hljs-deletion":{color:"#e45649"},"hljs-subst":{color:"#e45649"},"hljs-literal":{color:"#0184bb"},"hljs-string":{color:"#50a14f"},"hljs-regexp":{color:"#50a14f"},"hljs-addition":{color:"#50a14f"},"hljs-attribute":{color:"#50a14f"},"hljs-meta-string":{color:"#50a14f"},"hljs-built_in":{color:"#c18401"},"hljs-class .hljs-title":{color:"#c18401"},"hljs-attr":{color:"#986801"},"hljs-variable":{color:"#986801"},"hljs-template-variable":{color:"#986801"},"hljs-type":{color:"#986801"},"hljs-selector-class":{color:"#986801"},"hljs-selector-attr":{color:"#986801"},"hljs-selector-pseudo":{color:"#986801"},"hljs-number":{color:"#986801"},"hljs-symbol":{color:"#4078f2"},"hljs-bullet":{color:"#4078f2"},"hljs-link":{color:"#4078f2",textDecoration:"underline"},"hljs-meta":{color:"#4078f2"},"hljs-selector-id":{color:"#4078f2"},"hljs-title":{color:"#4078f2"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}},Z4=`import Button from 'components/Button'

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
}`;js.registerLanguage("javascript",Ad);const G4={ButtonCase:Z4,Button:Ma};function kn(n){const{files:e=G4,caseRender:s,active:r=0,className:a,auth:l}=n,i=Object.keys(e),[c,o]=m.useState(i[r]);function d(h){o(i[h])}const p=U("border border-gray-100 flex bg-white keepx flex-col-reverse sm:flex-row overflow-hidden",a);return t.jsxs("div",{className:p,children:[t.jsxs("div",{className:"overflow-scroll flex-1 relative",children:[t.jsx("div",{className:"flex border-b border-gray-100 sticky top-0 bg-white",children:i.map((h,j)=>t.jsx(L,{ghost:!0,onClick:()=>d(j),className:c===h?"text-green-500":"",children:h},h))}),t.jsx("pre",{className:"text-sm leading-6",children:t.jsx(js,{language:"javascript",PreTag:"div",style:Rd,children:l?e[c]:"未获得阅读权限"})})]}),t.jsxs(Yl,{when:s,children:[t.jsx("div",{className:"sm:w-[1px] h-[1px] sm:h-auto bg-gray-100"}),t.jsxs("div",{className:"flex-1 overflow-hidden",children:[t.jsxs("div",{className:"flex border-b border-gray-100 items-center pl-3",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"})}),t.jsx(L,{ghost:!0,className:"px-2",children:"预览"})]}),s]})]})]})}function Y4(){return t.jsx(kn,{files:{ButtonCase:Kb,Button:Ma},caseRender:t.jsx(Jb,{}),auth:!0})}function Md({id:n,host:e,repo:s,repoId:r,category:a,categoryId:l,mapping:i,term:c,strict:o,reactionsEnabled:d,emitMetadata:u,inputPosition:p,theme:h,lang:j,loading:y}){const[b,w]=m.useState(!1);return m.useEffect(()=>{b||(X4(()=>import("./giscus-BNK3dBIH-B_EkeIy7.js"),[]),w(!0))},[]),b?t.jsx("giscus-widget",{id:n,host:e,repo:s,repoid:r,category:a,categoryid:l,mapping:i,term:c,strict:o,reactionsenabled:d,emitmetadata:u,inputposition:p,theme:h,lang:j,loading:y}):null}const F4="/assets/ercode-w1g_eexN.png";function ic(n){const{title:e,desc:s,href:r,className:a}=n,i=U("block border rounded-xl p-4 bg-slate-50 border-slate-300 hover:shadow cursor-pointer",a);return t.jsxs("a",{href:r,target:"_blank",className:i,children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-blue-500",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"})}),t.jsx("div",{className:"font-bold ml-2",children:e})]}),t.jsx("div",{className:"mt-3 text-slate-600 leading-8",children:s}),t.jsx("div",{className:"block text-end mt-4 text-blue-500",href:r,target:"_blank",children:"点击了解详情"})]})}function cc(...n){return n.filter(Boolean).join(" ")}const P4=["学习方法之如何理解体系化","架构思维总览","BFF架构与运用","组件拆分原则","解耦与嵌套","流式渲染","复杂接口请求处理方式","其他大量实践案例","性能优化方案","项目亮点表达方式","视频讲解","本项目中组件源码"],Hm={frequencies:[{value:"monthly",label:"Monthly",priceSuffix:"/终身制"},{value:"annually",label:"Annually",priceSuffix:"/year"}],tiers:[{name:"基础版",id:"tier-hobby",href:"./pay?price=30",price:{monthly:"￥30",annually:"$144"},description:"大量可演示实践案例，帮助学习者轻松掌握 React 19.",features:["基础理论","use promise","Suspense","低版本兼容方案","use context","并发 api","React Compiler","Compiler 低版本引入","Form Action","乐观更新","直播课录屏"],mostPopular:!1},{name:"尊享版",id:"tier-freelancer",href:"./pay?price=400",price:{monthly:"￥400",annually:"$288"},description:"严格践行一套架构思维扩展复杂场景的使用",features:P4,mostPopular:!1},{name:"KeepCoder",id:"tier-enterprise",href:"https://www.yuque.com/coreadvance/ar2my1/apk8cr",price:{monthly:"￥2W",annually:"$864"},description:"1V1 顶级私人辅导，构建核心竞争力，全方面助你提高",features:["1V1服务","终身制服务","量身定制学习方式","顶级的前端技术能力","学霸级学习方法","全方位认知升级","构建完善的知识体系","全面的职场综合能力","顶尖的团队管理能力","完整的产品思维","完整的全栈思维"],mostPopular:!1}]};function I4(){const[n,e]=m.useState(Hm.frequencies[0]);return t.jsx("main",{children:t.jsxs("div",{className:"mx-auto mt-16 max-w-7xl sm:mt-32",children:[t.jsx("div",{className:"mx-auto max-w-4xl text-center",children:t.jsx("p",{className:"mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-5xl",children:"价格"})}),t.jsx("p",{className:"mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600",children:"请根据自己的学习意愿和经济能力综合考虑，理性消费，选择一种适合自己的学习方式。我确保提供过硬的学习质量，确保每一位认真投入的同学都能学有所得"}),t.jsx("div",{className:"isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3",children:Hm.tiers.map((s,r)=>t.jsxs("div",{className:cc(s.mostPopular?"ring-2 ring-indigo-600":"ring-1 ring-gray-200","rounded-3xl p-8"),children:[t.jsx("h2",{id:s.id,className:cc(s.mostPopular?"text-indigo-600":"text-gray-900","text-lg font-semibold leading-8"),children:s.name}),t.jsx("p",{className:"mt-4 text-sm leading-6 text-gray-600",children:s.description}),t.jsxs("p",{className:"mt-6 flex items-baseline gap-x-1",children:[t.jsx("span",{className:"text-4xl font-bold tracking-tight text-gray-900",children:s.price[n.value]}),t.jsx("span",{className:"text-sm font-semibold leading-6 text-gray-600",children:n.priceSuffix})]}),t.jsx(Nd,{to:s.href,"aria-describedby":s.id,target:r===3?"_blank":"",className:cc(s.mostPopular?"bg-indigo-600 text-white shadow-sm hover:bg-indigo-500":"text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300","mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"),children:r<3?"点击购买":"了解详情"}),t.jsx("ul",{role:"list",className:"mt-8 space-y-3 text-sm leading-6 text-gray-600",children:s.features.map((a,l)=>t.jsxs("li",{className:"flex gap-x-3 items-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:l<11?"size-4":"size-4 text-red-500",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),l<11?a:t.jsx("div",{className:"text-red-500",children:a})]},a))})]},s.id))})]})})}function Q4(){const n=m.useRef(null);function e(s){s.preventDefault(),n.current.show()}return t.jsxs("div",{className:"relative pt-16",children:[t.jsx(Wb,{}),t.jsxs("div",{className:"max-w-[1050px] mx-auto px-4",children:[t.jsxs("div",{className:"mt-20 max-w-[750px]",children:[t.jsx("h2",{className:"text-lg font-bold",children:"React 19 全解"}),t.jsx("p",{className:"mt-4 text-gray-500 leading-8 text-md",children:"全网第一本系统学习 React 19 的专栏。本专栏在公众号「这波能反杀」首发，受到了大量粉丝的喜爱。专栏中包含大量实践案例，深入简出，理论结合实践为大家分享 React19 的学习。"}),t.jsx("p",{className:"text-md mt-4 text-gray-500 leading-8",children:"React19 为开发者带来了新的开发理念，这又是一次开发方式上的一次变革。并且在开发体验和性能上都有大幅度的提升，值得每一位 React 开发者学习，赶紧行动吧。"}),t.jsxs("div",{className:"mt-8",children:[t.jsxs(Nd,{to:"tutorial/index",className:"inline-flex items-center px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-full",children:[t.jsx("span",{className:"mr-2",children:"快速开始"}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"})})]}),t.jsx("a",{onClick:e,href:"",className:"inline-flex px-4 py-2 text-gray-600 ring-1 ring-gray-200 text-sm rounded-full ml-4",children:t.jsx("span",{children:"关注公众号"})}),t.jsx(xr,{ref:n,title:"Follow me!",children:t.jsx("img",{src:F4,alt:""})})]})]}),t.jsxs("div",{className:"mt-20 max-w-[750px]",children:[t.jsx("h2",{className:"text-lg font-bold",children:"学前准备"}),t.jsxs("div",{className:"flex items-center text-gray-600 mt-8",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),t.jsx("div",{className:"ml-2",children:"具备一定的 JavaScript 基础"})]}),t.jsxs("div",{className:"flex items-center text-gray-600 mt-4",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),t.jsx("div",{className:"ml-2",children:"熟悉异步请求，熟悉 fetch 与 Promise"})]}),t.jsxs("div",{className:"flex items-center text-gray-600 mt-4",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),t.jsx("div",{className:"ml-2",children:"熟悉 React 之前的版本的使用"})]})]}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsx(I4,{}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3",children:"主要内容"}),t.jsxs("div",{className:"flex items-stretch md:justify-between flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0",children:[t.jsx(sc,{title:"Compiler",path:"./tutorial/use/importwith19",desc:"你可以不再使用 memo、useMemo、useCallback 来优化你的项目性能，大幅度提高开发体验",className:"flex-1"}),t.jsx(sc,{title:"新的架构思路",path:"./tutorial/index",desc:"并发模式变得更加实用，得益于并发模式的成熟，我们将可以使用新的架构思路构思我的项目",className:"flex-1"}),t.jsx(sc,{title:"新的交互方式",path:"./tutorial/use/base",desc:"React 在人机交互的开发体验上做了很多努力和尝试，他们将在这个版本中得以体现",className:"flex-1"})]}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3",children:"案例展示方式"}),t.jsxs("p",{className:"mt-10 flex items-center",children:["所见即所得。所有案例直接渲染，可操作、可交互。例如：点击按钮，切换皮肤",t.jsx("span",{className:"animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center ml-4",children:t.jsx("svg",{className:"w-6 h-6 text-violet-500",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})]}),t.jsx(Qb,{}),t.jsx("p",{className:"mb-4",children:"沉浸式学习体验。通过可在线编辑的案例，你能获得沉浸式的学习体验"}),t.jsx(Y4,{}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3",children:"其他课程"}),t.jsxs("div",{className:"flex justify-between flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6",children:[t.jsx(ic,{title:"私人面试指导",desc:"前端专家：这波能反杀，为您提供全网最专业的面试辅导，结合个人目标与工作经验，时长 2 ~ 3 小时，一次沟通，解决所有问题",href:"https://appxw863qeq2150.h5.xiaoeknow.com/v1/goods/goods_detail/course_2YWwycNZDt3u59naEs57g0gGa0H?",className:"flex-1"}),t.jsx(ic,{title:"keepCoder",desc:"资深前端进阶通道，1V1深度沟通辅导，聚焦学习方法，深挖知识体系，深挖应用场景，凝聚核心竞争力",href:"https://www.yuque.com/coreadvance/ar2my1/apk8cr",className:"flex-1 bg-orange-100 border-orange-300"}),t.jsx(ic,{title:"keepCharts",desc:"聚焦技术深度，手写基于 Canvas 的渲染引擎，并在此基础之上实现可视化图表等应用层库，打造自己牢不可破的核心竞争力",href:"https://www.yuque.com/coreadvance/ar2my1/em5rrk6p1umptsxw",className:"flex-1 bg-green-200 border-green-600"})]}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsx(Md,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",loading:"lazy",crossorigin:"anonymous",async:!0}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsxs("div",{className:"flex justify-between pb-10",children:[t.jsxs("span",{className:"text-gray-400",children:["© Copyright 2024.",t.jsx("a",{href:"https://beian.miit.gov.cn/",target:"_blank",children:"这波能反杀."}),t.jsx("a",{href:"https://beian.miit.gov.cn/",target:"_blank",children:"粤ICP备2024222174号"})]}),t.jsxs("div",{className:"flex",children:[t.jsx("div",{className:"ml-3",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})})}),t.jsx("div",{className:"ml-3",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"})})}),t.jsx("div",{className:"ml-3",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})})})]})]})]})]})}function $d(n){const{label:e,type:s,primary:r,warning:a,danger:l,newer:i,hard:c,className:o}=n,u=U("text-sm text-gray-500 border px-3 rounded-full",{"bg-blue-100 text-blue-500 border-blue-500":!!r,"bg-green-100 text-green-500 border-green-500":!!i,"bg-red-100 text-red-500 border-red-500":!!l,"bg-orange-100-100 text-orange-500 border-orange-500":!!l,"bg-fuchsia-100 text-fuchsia-500 border-fuchsia-500":!!c},o);return t.jsx("label",{className:He(u),children:e})}const W4=`import {Suspense, useState, useTransition} from 'react'
import Message from './Message.jsx'
import Button from './Button.jsx'
import Skeleton from './Skeleton.jsx'
import {getApi} from './api.js'

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
`,J4=`const random = [
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
`,K4=`import { use } from 'react'

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
`,e3=`document.documentElement.style.fontSize = '14px'

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
`,n3=`import {twMerge} from 'tailwind-merge'
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
`;function _(n){const{reload:e,className:s}=n,[r,a]=m.useState(!0),l=m.useRef(null);function i(){const d=l.current.getBoundingClientRect().height;l.current.style.minHeight=`${d}px`,a(!1),setTimeout(()=>{a(!0)},200)}const o=U("border rounded-md my-4",s);return t.jsxs("div",{className:o,children:[t.jsxs("div",{className:"flex border-b border-gray-200 bg-gray-100 items-center px-3 py-2 text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"})}),t.jsx("div",{className:"ml-2 text-sm",children:"预览"})]}),t.jsx("div",{className:"p-4",ref:l,children:r?n.children:null}),e?t.jsx("div",{className:"mx-4 mb-4 text-right",children:t.jsx(L,{signal:!0,onClick:i,children:"reload"})}):null]})}const P0=n=>{const{isPending:e,response:s}=n,r=m.use(s);return t.jsx("div",{className:"text-sm leading-6 transition border border-blue-100 shadow rounded-md p-4 w-full mt-4",style:{opacity:e?.5:1},children:r.value})};document.documentElement.style.fontSize="14px";function I0(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsx("div",{className:"animate-pulse",children:t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})})})}const t3=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var Q0=new Headers;Q0.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var s3={method:"GET",headers:Q0,redirect:"follow",data:"hex"};const r3="https://echo.apifox.com/delay/1",vo=async()=>{await fetch(r3,s3);const n=Math.floor(Math.random()*10)%5;return{value:t3[n]}};function a3(){const n=vo();return t.jsx(m.Suspense,{fallback:t.jsx(I0,{}),children:t.jsx(P0,{response:n})})}function qm(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(a3,{})}),`
`,t.jsxs(e.p,{children:["大家可以自行感受一下新的开发方式与以前基于 ",t.jsx(e.code,{children:"useEffect"})," 请求数据有什么不同之处。我在右侧案例演示中，还提供了更完整更具代表性的案例。大家可以先瞄一眼体会一下。案例代码有对应的完整演示效果，你可以通过修改代码观察案例的变化。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注意：一套成熟架构思维，不是使用一个简单的方案解决某一个问题，而是要基于这套思维去解决项目中的绝大多数场景。因此我们一定要结合大量的场景去理解一套项目架构思维。"}),`
`]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"5"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"合集介绍"})}),`
`,t.jsxs(e.p,{children:["本合集名为：",t.jsx(e.strong,{children:"「React19 全解」"})," ，是 ",t.jsx(e.strong,{children:"「React 知命境」"})," 的续集。首发于公众号",t.jsx(e.a,{href:"",children:"这波能反杀"}),"。后为了提高大家的学习体验，迁移至此处。在这里我基于",t.jsx(e.strong,{children:"沉浸式"}),"的学习体验，内置了大量可操作可交互的真实案例。摒弃了使用截图演示案例的方式。除此之外，为了让大家能够获得更好的学习效果，每一个案例都精心设计了 UI。在细节上精心打磨，争取让大家能够所学即所得。快速掌握 React19."]}),`
`,t.jsx(e.p,{children:"希望大家能够在这里获得全网最好的学习体验！Let's go."})]})}function l3(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(qm,{...n})}):qm(n)}const i3=["U","x","F","s","c","G","V","k","X","3","x","O","P","h","N","3","2","2"],c3=["p","x","F","s","l","G","V","k","X","3","x","O","P","h","N","3","2","3"];function W0(n,e){let s=!0;return n.forEach((r,a)=>{r!==e[a]&&(s=!1)}),s}function J0(n){return W0(i3,n)}function K0(n){return W0(c3,n)}function e1(n){const{advance:e}=n,s=e?"active_code_adv":"active_code",r=e?K0:J0;function a(l){const i=l.get("code");if(!r(i.split("")))return alert("请输入正确的激活码");localStorage.setItem(s,l.get("code")),location.reload()}return t.jsxs("div",{className:"pt-4",children:[t.jsx("div",{className:"rounded-md bg-yellow-50 p-4 border border-yellow-400",children:t.jsxs("div",{className:"flex",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-yellow-700",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),t.jsxs("div",{className:"ml-3",children:[t.jsx("h3",{className:"text-sm font-medium text-yellow-800",children:"Attention needed"}),t.jsx("div",{className:"mt-2 text-sm text-yellow-700",children:t.jsx("p",{children:"你还未输入激活码，或者激活码已过期，请重新输入即可访问"})})]})]})}),t.jsxs("form",{action:a,className:"flex items-center justify-between",children:[t.jsx(Tn,{name:"code",placeholder:"Please input your active code",className:"flex-1 mr-4"}),t.jsx("button",{type:"submit",children:"确认"})]})]})}function n1(n,e){const s=e?"active_code_adv":"active_code",r=e?K0:J0,a=localStorage.getItem(s)||"";return n?r(a.split("")):!0}js.registerLanguage("javascript",Ad);function o3({className:n,...e}){const s=/language-(\w+)/.exec(n||"");return s?t.jsx(js,{language:s[1],PreTag:"div",...e,style:Rd}):t.jsx("code",{className:n,...e})}function z(n){const{renderArticle:e,files:s,caseRender:r,isAuth:a=!0,advance:l=!1}=n,i=n1(a,l);let c=t.jsx(e1,{advance:l});return i&&(c=t.jsxs(t.Fragment,{children:[r?t.jsx(_,{reload:!0,className:"mt-0",children:r}):null,t.jsx("div",{className:"md:hidden",children:t.jsx(kn,{files:s,className:"h-full rounded-md border-gray-200",auth:!0})}),e(o3)]})),t.jsxs("div",{className:"md:flex h-[calc(100vh_-_8rem)] overflow-hidden mx-auto w-full max-w-[1244px]",children:[t.jsxs("div",{className:"md:flex-1 h-full overflow-scroll md:pr-4 keep w-full max-w-[768px]",children:[c,t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3 border-dashed"}),t.jsx(Md,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]}),t.jsx("div",{className:"hidden md:block md:flex-1 top-[8rem] h-full overflow-y-auto max-w-[768px]",children:t.jsx(kn,{auth:i,files:s,className:"h-full rounded-md border-gray-200"})})]})}function d3(n){const{className:e,primary:s,danger:r,sm:a,lg:l,success:i,...c}=n,p=He(U("rounded-md border border-transparent font-medium cursor-pointer transition","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l}));return t.jsx("button",{className:p,...c,children:n.children})}function u3(){const[n,e]=m.useState(vo),[s,r]=m.useTransition();function a(){r(()=>{e(vo())})}return t.jsxs("div",{children:[t.jsx(d3,{onClick:a,disabled:s,children:"点击更新"}),t.jsx(m.Suspense,{fallback:t.jsx(I0,{}),children:t.jsx(P0,{response:n,isPending:s})})]})}const m3={"App.js":W4,"api.js":J4,"Message.jsx":K4,"Skeleton.jsx":e3,"Button.jsx":n3};function p3(){return t.jsx(z,{files:m3,renderArticle:n=>t.jsx(l3,{components:{code:n}}),caseRender:t.jsx(u3,{})})}const h3=`import React, { useEffect, useState, Suspense, use } from 'react';
import Button from './Button.jsx'
import Skeleton from './Skeleton.jsx'
import {fetchList} from './api.js'

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
`,f3=`import {twMerge} from 'tailwind-merge'
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
`,x3=`const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}
`,g3=`// header
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
`;function Vm(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"这篇文章文字内容不会很多，但是是整个专栏最重要的部分之一。"}),`
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
`]})]})}function j3(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Vm,{...n})}):Vm(n)}document.documentElement.style.fontSize="14px";function v3(n){const{className:e,primary:s,danger:r,sm:a,lg:l,success:i,...c}=n,p=He(U("rounded-md border border-transparent font-medium cursor-pointer transition","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l}));return t.jsx("button",{className:p,...c,children:n.children})}function b3(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})})}const y3=3,N3=`https://randomuser.me/api/?results=${y3}&inc=name,gender,email,nat,picture&noinfo`,Xm=async()=>(await fetch(N3)).json(),w3=()=>{const[n,e]=m.useState(()=>[Xm()]),s=()=>{n.push(Xm()),e([...n])};return t.jsxs(t.Fragment,{children:[n.map((r,a)=>t.jsx(m.Suspense,{fallback:t.jsx(b3,{}),children:t.jsx(S3,{promise:r})},`hello ${a}`)),t.jsx("div",{className:"text-center my-4",children:t.jsx(v3,{onClick:s,children:"loading more"})})]})};function S3({promise:n}){const{results:e}=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"border-b border-dashed py-4 mx-4 items-center flex",children:[t.jsx("img",{className:"w-14 h-14 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"a design language for background applications, is refined by Ant UED Team"})]})]},s.name.last))})}const k3={"App.js":h3,"api.js":x3,"Button.jsx":f3,"Skeleton.jsx":g3};function C3(){return t.jsx(z,{files:k3,renderArticle:n=>t.jsx(j3,{components:{code:n}}),caseRender:t.jsx(w3,{})})}function Zm(n){const e={blockquote:"blockquote",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:t.jsx(e.img,{src:"https://files.mdnice.com/user/3925/b4869674-83ae-4ed2-a70d-34574d4451da.png",alt:""})}),`
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
`,t.jsx(e.p,{children:"最后重启项目即可。"})]})}function _3(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Zm,{...n})}):Zm(n)}const A3=`import { useState } from 'react'
import reactLogo from './react.svg'
import viteLogo from '/src/pages/base/pages/create/case/vite.svg'
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
`,R3=`#root {
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
`,M3=`:root {
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
`,$3=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
`,L3=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
`,E3={"App.js":A3,"App.css":R3,"index.css":M3,"vite.svg":$3,"react.svg":L3};function T3(){return t.jsx(z,{files:E3,renderArticle:n=>t.jsx(_3,{components:{code:n}})})}const D3=`import React, { useEffect, useState, Suspense, use } from 'react';
import Button from './Button.jsx'
import Skeleton from './Skeleton.jsx'
import {getMessage} from './api.js'

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
`,O3=`import {twMerge} from 'tailwind-merge'
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
`,B3=`const random = [
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
`,z3=`export default function Skeleton(props) {
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
`,Ld=n=>{const e=n.message;return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},U3=new Promise(n=>{n({value:"Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook."})});function H3(){const n=m.use(U3);return t.jsx(Ld,{message:n.value})}document.documentElement.style.fontSize="14px";function t1(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,h=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:h,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}function Ed(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const q3=new Promise(n=>{n({value:"Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook."})});function V3(){const[n,e]=m.useState(!1);let s={value:""};return n||(s=m.use(q3)),t.jsxs(t.Fragment,{children:[n?t.jsx(Ed,{}):t.jsx(Ld,{message:s.value}),t.jsx("div",{className:"mt-4 text-right",children:t.jsx(t1,{signal:!0,onClick:()=>e(!n),children:"切换"})})]})}const X3=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var s1=new Headers;s1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var Z3={method:"GET",headers:s1,redirect:"follow",data:"hex"};const G3="https://echo.apifox.com/delay/1",r1=async()=>{await fetch(G3,Z3);const n=Math.floor(Math.random()*10)%5;return{value:X3[n]}};function Y3(){return t.jsx(m.Suspense,{fallback:t.jsx("div",{}),children:t.jsx(F3,{})})}function F3(){let[n,e]=m.useState(!0);const s=m.useRef(r1().then(a=>(e(!1),a)));let r={value:"",icon_url:""};return n?t.jsx(Ed,{}):(r=m.use(s.current),t.jsx(Ld,{message:r.value}))}function Gm(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:[t.jsx(e.code,{children:"use()"})," 是 React19 提升异步开发体验最重要的 hook。也是让 useEffect 重要性大幅度削弱的主要原因。"]}),`
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
`,t.jsx(_,{children:t.jsx(H3,{})}),`
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
`,t.jsx(_,{children:t.jsx(V3,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(Y3,{})}),`
`,t.jsx(e.p,{children:"点击按钮可以重新加载执行该组件。我们可以观察一下效果，在目前的 React 版本中，并不能合理的处理好这种存在风险的读取方式，虽然我们最终读取到了 promise 中的值，内容也顺利渲染出来了，但是中间存在一次明显的闪烁。表现为包括按钮在内的内容全部消失，这种体验非常的糟糕。"}),`
`,t.jsx(e.p,{children:"因此，在实践中，如果我们要读取异步请求的 promise 中的值，必须结合 Suspense 来处理。在右侧的案例中，我们列举了一个 use + Suspense 合理处理异步请求的案例，大家可以先暂时了解一下，在后续的章节中，我们详细学习了 Suspense 之后再来进行案例分析。"})]})}function P3(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Gm,{...n})}):Gm(n)}function I3(){const n=r1();return t.jsxs(t.Fragment,{children:[t.jsx(m.Suspense,{fallback:t.jsx(Ed,{}),children:t.jsx(Q3,{promise:n})}),t.jsx("div",{className:"mt-8 text-center",children:t.jsx(t1,{signal:!0,children:"点击下方刷新按钮可重置演示"})})]})}const Q3=n=>{const e=m.use(n.promise);return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e.value})]})]})},W3={"App.js":D3,"api.js":B3,"Button.jsx":O3,"Skeleton.jsx":z3};function J3(){return t.jsx(z,{files:W3,renderArticle:n=>t.jsx(P3,{components:{code:n}}),caseRender:t.jsx(I3,{})})}const K3=`import React, { useEffect, useState, Suspense, use } from 'react';
import Button from './Button.jsx'
import Skeleton from './Skeleton.jsx'
import {getMessage} from './api.js'

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
`,ey=`import {twMerge} from 'tailwind-merge'
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
`,ny=`const random = [
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
`,ty=`export default function Skeleton(props) {
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
`,a1=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},sy=()=>new Promise(n=>{n({value:"React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch."})});function ry(){const n=sy();return t.jsx(m.Suspense,{fallback:"",children:t.jsx(ay,{promise:n})})}function ay(n){const{value:e}=m.use(n.promise);return t.jsx(a1,{message:e})}document.documentElement.style.fontSize="14px";function ly(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,h=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:h,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}function Td(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const iy=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var l1=new Headers;l1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var cy={method:"GET",headers:l1,redirect:"follow",data:"hex"};const oy="https://echo.apifox.com/delay/1",i1=async()=>{await fetch(oy,cy);const n=Math.floor(Math.random()*10)%5;return{value:iy[n]}};function Ym(){const n=i1();return t.jsx(m.Suspense,{fallback:t.jsx(Td,{}),children:t.jsx(dy,{promise:n})})}const dy=n=>{const e=m.use(n.promise);return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e.value})]})]})};function uy(){return t.jsx(m.Suspense,{fallback:t.jsx(Td,{}),children:t.jsx(a1,{message:"这是一个普通的 UI 组件，Skeleton 组件不会有任何渲染机会，直接渲染 Message 组件",title:"Primary"})})}function Fm(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(ry,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(Ym,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(uy,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(Ym,{})}),`
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
`,t.jsx(e.p,{children:"这是我们之前版本的最佳实践。注意体会他们之间的区别。相似，但却不同。我们后续会列举更多案例，尽可能用新的开发思路去复现开发过程中会出现的场景。"})]})}function my(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Fm,{...n})}):Fm(n)}function py(){const[n,e]=m.useState({value:""}),[s,r]=m.useState(!0);return m.useEffect(()=>{i1().then(a=>{e(a),r(!1)})},[]),s?t.jsx(Td,{}):t.jsxs(t.Fragment,{children:[t.jsx(hy,{message:n.value}),t.jsx("div",{className:"mt-8 text-center",children:t.jsx(ly,{signal:!0,children:"点击下方刷新按钮可重置演示"})})]})}const hy=n=>{const e=n.message;return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"a new message!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},fy={"App.js":K3,"api.js":ny,"Button.jsx":ey,"Skeleton.jsx":ty};function xy(){return t.jsx(z,{files:fy,renderArticle:n=>t.jsx(my,{components:{code:n}}),caseRender:t.jsx(py,{})})}const gy=`import {use, useState, Suspense} from 'react'
import Message from './Message.jsx'
import Skeleton from './Skeleton.jsx'
import Button from './Button.jsx'
import {getMessage} from './api.js'

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
`,jy=`import {twMerge} from 'tailwind-merge'
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
`,vy=`const random = [
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
`,by=`export default function Skeleton(props) {
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
`,yy=`const Message = (props) => {
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
`,fa=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));let r="flex border border-blue-100 p-4 rounded-md shadow";return e?t.jsxs("div",{className:r,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]}):t.jsxs("div",{className:`${r} justify-center items-center flex-col text-gray-500`,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),t.jsx("div",{className:"mt-2",children:"no data."})]})};function Dd(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function Od(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,h=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:h,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const Ny=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var c1=new Headers;c1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var wy={method:"GET",headers:c1,redirect:"follow",data:"hex"};const Sy="https://echo.apifox.com/delay/1",Bd=async()=>{await fetch(Sy,wy);const n=Math.floor(Math.random()*10)%5;return{value:Ny[n]}};function ky(){const[n,e]=m.useState(null);function s(){e(Bd())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(Od,{onClick:s,children:"更新数据"})}),t.jsx(m.Suspense,{fallback:t.jsx(Dd,{}),children:t.jsx(Cy,{promise:n})})]})}function Cy(n){if(!n.promise)return t.jsx(fa,{message:""});const{value:e}=m.use(n.promise);return t.jsx(fa,{message:e})}function _y(){const[n,e]=m.useState(Promise.resolve({value:""}));function s(){e(Bd())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(Od,{onClick:s,children:"更新数据"})}),t.jsx(m.Suspense,{fallback:t.jsx(Dd,{}),children:t.jsx(Ay,{promise:n})})]})}function Ay(n){const{value:e}=m.use(n.promise);return t.jsx(fa,{message:e})}function Pm(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"接下来，我们将会以大量的实践案例来展开 React 19 新 hook 的运用。"}),`
`,t.jsxs(e.p,{children:["本文模拟的实践案例为",t.jsx(e.strong,{children:"点击按钮更新数据"}),"。这在开发中是一个非常常见的场景。"]}),`
`,t.jsx(e.p,{children:"案例完成之后的最终演示效果图如下。案例的视觉表现为：初始化时没有请求，所以组件显示为空数据样式。当我们点击按钮时请求一条数据，数据更新，请求成功之后显示更新之后的内容。"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(ky,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(_y,{})}),`
`,t.jsx(e.p,{children:"这种写法有一个很小的瑕疵，就是在初始化时，也不可避免的显示了 Skeleton 组件，实际上是不需要的。因此具体采用哪种写法，要依据实践中的需求而定。"})]})}function Ry(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Pm,{...n})}):Pm(n)}function My(){const[n,e]=m.useState(null);function s(){e(Bd())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(Od,{onClick:s,children:"更新数据"})}),t.jsx(m.Suspense,{fallback:t.jsx(Dd,{}),children:t.jsx($y,{promise:n})})]})}function $y(n){if(!n.promise)return t.jsx(fa,{message:""});const{value:e}=m.use(n.promise);return t.jsx(fa,{message:e})}const Ly={"App.js":gy,"api.js":vy,"Message.jsx":yy,"Button.jsx":jy,"Skeleton.jsx":by};function Ey(){return t.jsx(z,{files:Ly,renderArticle:n=>t.jsx(Ry,{components:{code:n}}),caseRender:t.jsx(My,{})})}const Ty=`import {use, useState, Suspense} from 'react'
import Message from './Message.jsx'
import Skeleton from './Skeleton.jsx'
import Button from './Button.jsx'
import {getMessage} from './api.js'

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
`,Dy=`import {twMerge} from 'tailwind-merge'
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
`,Oy=`const random = [
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
`,By=`export default function Skeleton(props) {
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
`,zy=`const Message = (props) => {
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
`,zd=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));let r="flex border border-blue-100 p-4 rounded-md shadow";return e?t.jsxs("div",{className:r,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]}):t.jsxs("div",{className:`${r} justify-center items-center flex-col text-gray-500`,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),t.jsx("div",{className:"mt-2",children:"no data."})]})};function Ud(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function Hd(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,h=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:h,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const Uy=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var o1=new Headers;o1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var Hy={method:"GET",headers:o1,redirect:"follow",data:"hex"};const qy="https://echo.apifox.com/delay/1",sr=async()=>{await fetch(qy,Hy);const n=Math.floor(Math.random()*10)%5;return{value:Uy[n]}};function Vy(){const[n,e]=m.useState({value:""}),[s,r]=m.useState(!0);m.useEffect(()=>{sr().then(l=>{e(l),r(!1)})},[]);function a(){r(!0),sr().then(l=>{e(l),r(!1)})}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(Hd,{onClick:a,children:"更新数据"})}),s?t.jsx(Ud,{}):t.jsx(zd,{message:n.value})]})}function Xy(){const[n,e]=m.useState(sr());function s(){e(sr())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(Hd,{onClick:s,children:"更新数据"})}),t.jsx(m.Suspense,{fallback:t.jsx(Ud,{}),children:t.jsx(Zy,{promise:n})})]})}function Zy(n){const{value:e}=m.use(n.promise);return t.jsx(zd,{message:e})}function Im(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:["在上一章的基础之上，我们做一个小的需求变动。上一章的案例要求我们不要初始化时请求一条数据，因此，默认渲染结果是 ",t.jsx(e.code,{children:"no data"})]}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(Vy,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(Xy,{})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"非常的方便省事。"})}),`
`,t.jsxs(e.p,{children:["最后需要注意的是一个小的细节，如果不考虑 Compiler 编译之后的代码去缓存初始化时的 ",t.jsx(e.code,{children:"getMessage()"}),"，那么每次更新组件时，该方法都会执行一次，因此，会导致冗余的接口请求。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"使用 Compiler 编译之后，这段代码会被缓存下来而不会重复执行"}),`
`]}),`
`,t.jsx(e.p,{children:"因此，最好的方式是进一步调整一下，利用 useState 的初始化机制修改如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-diff",children:`- const [promise, update] = useState(getMessage())
+ const [promise, update] = useState(getMessage)
`})}),`
`,t.jsx(e.p,{children:"这样，即使不用 Compiler 编译缓存，也不会出现冗余请求的情况。完整的代码和演示案例请在右侧模块中查看。"})]})}function Gy(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Im,{...n})}):Im(n)}function d1(){const[n,e]=m.useState(sr);function s(){e(sr())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(Hd,{onClick:s,children:"更新数据"})}),t.jsx(m.Suspense,{fallback:t.jsx(Ud,{}),children:t.jsx(Yy,{promise:n})})]})}function Yy(n){const{value:e}=m.use(n.promise);return t.jsx(zd,{message:e})}const Fy={"App.js":Ty,"api.js":Oy,"Message.jsx":zy,"Button.jsx":Dy,"Skeleton.jsx":By};function Py(){return t.jsx(z,{files:Fy,renderArticle:n=>t.jsx(Gy,{components:{code:n}}),caseRender:t.jsx(d1,{})})}const Iy=`import {use, useState, Suspense, useEffect} from 'react'
import Userinfo from './Userinfo.jsx'
import Skeleton from './Skeleton.jsx'
import Button from './Button.jsx'
import {getMessage} from './api.js'

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
`,Qy=`import {twMerge} from 'tailwind-merge'
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
`,Wy=`const random = [
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
`,Jy=`export default function Skeleton(props) {
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
`,Ky=`const Userinfo = (props) => {
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
`,u1=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.username||"").replace(/\\u/gi,"%u")),r=n.index||0;return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md my-4 items-start",children:[t.jsx("img",{className:"w-10",src:`https://api.dicebear.com/7.x/miniavs/svg?seed=${r}`,alt:""}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"no name"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})};function m1(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function p1(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,h=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:h,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const e7=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var h1=new Headers;h1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var n7={method:"GET",headers:h1,redirect:"follow",data:"hex"};const t7="https://echo.apifox.com/delay/1",Fl=async()=>{await fetch(t7,n7);const n=Math.floor(Math.random()*10)%5;return{value:e7[n],id:s7()}};function s7(){for(var n=[],e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=0;s<16;s++)n[s]=e.substr(Math.floor(Math.random()*16),1);return n[8]="-",n.join("")}function r7(){const[n,e]=m.useState([]);m.useEffect(()=>{e([...n,{type:"loading"}]),Fl().then(r=>{e([...n,r])})},[]);function s(){e([...n,{type:"loading"}]),Fl().then(r=>{e([...n,r])})}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(p1,{onClick:s,children:"新增数据"})}),t.jsx(a7,{list:n})]})}function a7(n){const e=n.list;return t.jsx(t.Fragment,{children:e.map((s,r)=>s.type==="loading"?t.jsx(m1,{},`hello ${r}`):t.jsx(u1,{index:r,username:s.id,message:s.value},`h${r}`))})}function Qm(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"这一章我们要学习的是一个新增加载项到列表的案例。首先我们会通过接口获取到一条数据，然后将该数据渲染到列表中。你可以先通过顶部预览查看最终演示效果。"}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(r7,{})}),`
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
`,t.jsx(e.p,{children:"希望大家能够通过这个案例，进一步感受到新的开发思维的强大之处。"})]})}function l7(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Qm,{...n})}):Qm(n)}function i7(){const[n,e]=m.useState(()=>[Fl()]);function s(){e([...n,Fl()])}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(p1,{onClick:s,children:"新增数据"})}),n.map((r,a)=>t.jsx(m.Suspense,{fallback:t.jsx(m1,{}),children:t.jsx(c7,{promise:r,index:a})},`hello ${a}`))]})}function c7(n){const e=m.use(n.promise);return t.jsx(u1,{index:n.index,username:e.id,message:e.value})}const o7={"App.js":Iy,"api.js":Wy,"Userinfo.jsx":Ky,"Button.jsx":Qy,"Skeleton.jsx":Jy};function d7(){return t.jsx(z,{files:o7,renderArticle:n=>t.jsx(l7,{components:{code:n}}),caseRender:t.jsx(i7,{})})}const u7=`import { useState, Suspense } from 'react';
import List from './List.jsx'
import Button from './Button.jsx'
import Skeleton from './Skeleton.jsx'
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
`,m7=`import {twMerge} from 'tailwind-merge'
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
`,p7=`const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}
`,h7=`// header
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
`,f7=`import { use } from 'react';
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
`;function Wm(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"我们可以在思维上将上一节课的解决方案扩展到分页列表中，加载更多的场景。"}),`
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
`]})]})}function x7(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Wm,{...n})}):Wm(n)}function g7({promise:n}){const{results:e}=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border-b py-4 mx-4 items-center border-dashed",children:[t.jsx("img",{className:"w-14 h-14 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 repo, a design language for background applications"})]})]},s.name.last))})}document.documentElement.style.fontSize="14px";function j7(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,h=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:h,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}function v7(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})})}const b7=3,y7=`https://randomuser.me/api/?results=${b7}&inc=name,gender,email,nat,picture&noinfo`,Jm=async()=>(await fetch(y7)).json(),N7=()=>{const[n,e]=m.useState(()=>[Jm()]),s=()=>{e([...n,Jm()])};return t.jsxs(t.Fragment,{children:[n.map((r,a)=>t.jsx(m.Suspense,{fallback:t.jsx(v7,{}),children:t.jsx(g7,{promise:r})},`hello ${a}`)),t.jsx("div",{className:"text-center my-4",children:t.jsx(j7,{onClick:s,children:"loading more"})})]})},w7={"App.js":u7,"api.js":p7,"List.jsx":f7,"Button.jsx":m7,"Skeleton.jsx":h7};function S7(){return t.jsx(z,{files:w7,renderArticle:n=>t.jsx(x7,{components:{code:n}}),caseRender:t.jsx(N7,{})})}const k7=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton.jsx'
import {fetchListWithCancel} from './api.js'
import List from './List.jsx'
import Input from './Input.jsx'

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
`,C7=`export const fetchList = async (number) => {
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
`,_7=`document.documentElement.style.fontSize = '14px'

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
`,A7=`import { use } from 'react';
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
`,R7=`export default function Input(props) {
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
`;document.documentElement.style.fontSize="14px";function M7(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Km=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json();function $7({promise:n}){const{results:e}=m.use(n);return console.log("我会执行几次呢"),t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function L7(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function E7(){const[n,e]=m.useState(()=>Km(5));function s(r){const a=r.target.value.length%10;e(Km(a))}return t.jsxs("div",{children:[t.jsx(L7,{onChange:s,placeholder:"Enter something"}),t.jsx(m.Suspense,{fallback:t.jsx(M7,{}),children:t.jsx($7,{promise:n})})]})}function ep(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(E7,{})}),`
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
`,t.jsx(e.p,{children:"其他的逻辑基本保持不变，完整代码和演示效果请在右侧区域查看。请务必结合调试工具中的网络请求一起观察演示效果。"})]})}function T7(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ep,{...n})}):ep(n)}const D7={"App.js":k7,"api.js":C7,"List.jsx":A7,"Input.jsx":R7,"Skeleton.jsx":_7};function O7(){return t.jsx(z,{files:D7,renderArticle:n=>t.jsx(T7,{components:{code:n}})})}const f1=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton.jsx'
import {fetchListWithCancel} from './api.js'
import Tabs from './Tabs.jsx'
import List from './List.jsx'

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
`,x1=`export const fetchList = async (number) => {
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
`,g1=`document.documentElement.style.fontSize = '14px'

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
`,j1=`import { use } from 'react';
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
`,v1=`function classNames(...classes) {
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
`;function B7(...n){return n.filter(Boolean).join(" ")}function b1({tabs:n,onSwitch:e}){return t.jsxs("div",{children:[t.jsxs("div",{className:"hidden",children:[t.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),t.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:n.find(s=>s.current).name,onChange:s=>e(s.target.selectedIndex),children:n.map(s=>t.jsx("option",{children:s.name},s.name))})]}),t.jsx("div",{className:"block",children:t.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:n.map((s,r)=>t.jsx("a",{href:s.href,className:B7(s.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":s.current?"page":void 0,onClick:a=>{a.preventDefault(),e(r)},children:s.name},s.name))})})]})}const el=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function z7(){const[n,e]=m.useState(0);function s(r){el[n].current=!1,el[r].current=!0,e(r)}return t.jsxs("div",{children:[t.jsx(b1,{tabs:el,onSwitch:s}),t.jsxs("div",{className:"mt-4 text-gray-500",children:["当前选中：",el[n].name]})]})}function np(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"Tab 切换的过程中，请求接口也是日常开发中非常常见的交互方式。不过 tabs 切换的情况比较多，很考验开发者的个人能力。我们准备了三个不同的场景以供大家直接学习。"}),`
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
`,t.jsx(_,{children:t.jsx(z7,{})}),`
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
`,t.jsx(e.p,{children:"这里我们依然需要取消上一次请求是因为可能有的使用者会连续快速切换，我们可以通过取消为完成请求的方式让页面响应变得合理与流畅。完整的案例请看右侧区域。"})]})}function U7(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(np,{...n})}):np(n)}document.documentElement.style.fontSize="14px";function H7(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const tp=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function q7({promise:n}){const{results:e}=m.use(n);return console.log("我会执行几次呢"),t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}const oc=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function y1(){const[n,e]=m.useState(0),[s,r]=m.useState(()=>tp(5));function a(l){oc[n].current=!1,oc[l].current=!0,e(l),s.cancel();const i=Math.floor(Math.random()*10);r(tp(i))}return t.jsxs("div",{children:[t.jsx(b1,{tabs:oc,onSwitch:a}),t.jsx(m.Suspense,{fallback:t.jsx(H7,{}),children:t.jsx(q7,{promise:s})})]})}const V7={"App.js":f1,"api.js":x1,"List.jsx":j1,"Tabs.jsx":v1,"Skeleton.jsx":g1};function X7(){return t.jsx(z,{files:V7,renderArticle:n=>t.jsx(U7,{components:{code:n}}),caseRender:t.jsx(y1,{})})}const Z7=`import {useState, Suspense, useRef} from 'react'
import Tabs from './Tabs.jsx'

import Account from './Account.jsx'
import Search from './Search.jsx'

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
`,G7=`export const fetchListWithCancel = (number) => {
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
`,Y7=`document.documentElement.style.fontSize = '14px'

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
`,F7=`import { use } from 'react';
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
`,P7=`export default function Input(props) {
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
`,I7=`import clsx from 'clsx'
import {useState, Suspense} from 'react'
import Skeleton from './Skeleton.jsx'
import {fetchListWithCancel} from './api.js'
import List from './List.jsx'

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
`,Q7=`import clsx from 'clsx'
import {useState, Suspense} from 'react'
import Skeleton from './Skeleton.jsx'
import {fetchListWithCancel} from './api.js'
import List from './List.jsx'
import Input from './Input.jsx'

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
`,W7=`function classNames(...classes) {
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
`;function J7(...n){return n.filter(Boolean).join(" ")}function K7({tabs:n,onSwitch:e}){return t.jsxs("div",{children:[t.jsxs("div",{className:"hidden",children:[t.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),t.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:n.find(s=>s.current).name,onChange:s=>e(s.target.selectedIndex),children:n.map(s=>t.jsx("option",{children:s.name},s.name))})]}),t.jsx("div",{className:"block",children:t.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:n.map((s,r)=>t.jsx("a",{href:s.href,className:J7(s.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":s.current?"page":void 0,onClick:()=>e(r),children:s.name},s.name))})})]})}document.documentElement.style.fontSize="14px";function N1(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const bo=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function w1({promise:n}){const{results:e}=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function dc(n){const[e,s]=m.useState(()=>bo(5)),r=U({hidden:!n.selected});return t.jsx("div",{className:r,children:t.jsx(m.Suspense,{fallback:t.jsx(N1,{}),children:t.jsx(w1,{promise:e})})})}function e6(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function n6(n){const[e,s]=m.useState(()=>bo(10));function r(l){e.cancel();const i=l.target.value.length%10;s(bo(i))}const a=U("pt-4",{hidden:!n.selected});return t.jsxs("div",{className:a,children:[t.jsx(e6,{onChange:r,placeholder:"Enter something"}),t.jsx(m.Suspense,{fallback:t.jsx(N1,{}),children:t.jsx(w1,{promise:e})})]})}function t6(){const[n,e]=m.useState(0),s=m.useRef([{name:"My Account",href:"#",current:!0,element:dc},{name:"Company",href:"#",current:!1,element:dc},{name:"Team Members",href:"#",current:!1,element:dc},{name:"Billing",href:"#",current:!1,element:n6}]),r=m.useRef(new Set([s.current[n]]));function a(i){s.current[n].current=!1,s.current[i].current=!0;const c=s.current[i];r.current.has(c)||r.current.add(c),e(i)}let l=Array.from(r.current);return t.jsxs("div",{children:[t.jsx(K7,{tabs:s.current,onSwitch:a}),l.map((i,c)=>t.jsx(i.element,{selected:i.current},`z-${c}`))]})}function sp(n){const e={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(t6,{})}),`
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
`,t.jsx(e.p,{children:"完整代码与案例演示请看右侧区域。"})]})}function s6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(sp,{...n})}):sp(n)}const r6={"App.js":Z7,"Account.jsx":I7,"Search.jsx":Q7,"api.js":G7,"Tabs.jsx":W7,"List.jsx":F7,"Input.jsx":P7,"Skeleton.jsx":Y7};function a6(){return t.jsx(z,{files:r6,renderArticle:n=>t.jsx(s6,{components:{code:n}})})}const l6=`import {useState, Suspense, useCallback} from 'react'
import Skeleton from './Skeleton.jsx'
import {fetchListWithCancel} from './api.js'
import Tabs from './Tabs.jsx'
import List from './List.jsx'

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
`,i6=`export const fetchList = async (number) => {
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

`,c6=`document.documentElement.style.fontSize = '14px'

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
`,o6=`import { use, useEffect } from 'react';

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
`,d6=`function classNames(...classes) {
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
`;document.documentElement.style.fontSize="14px";function u6(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const rp=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{localStorage.setItem("modal","xxx"),a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function ap(...n){return n.filter(Boolean).join(" ")}function m6({tabs:n,onSwitch:e}){return t.jsx("div",{children:t.jsx("div",{className:"border-b border-gray-200",children:t.jsx("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:n.map((s,r)=>t.jsxs("a",{href:"#",onClick:()=>e(r),className:ap(s.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700","flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"),"aria-current":s.current?"page":void 0,children:[s.name,s.count?t.jsx("span",{className:ap(s.current?"bg-indigo-100 text-indigo-600":"bg-gray-100 text-gray-900","ml-3 rounded-full px-2.5 py-0.5 text-xs font-medium inline-block"),children:s.count}):null]},s.name))})})})}function p6({promise:n,onComplete:e}){const{results:s}=m.use(n);return m.useEffect(()=>{e&&e(s.length)},[s.length]),t.jsx("div",{children:s.map((r,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:r.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:r.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}const h6=[{name:"Applied",href:"#",count:0,current:!0},{name:"Phone Screening",href:"#",count:0,current:!1},{name:"Interview",href:"#",count:0,current:!1},{name:"Offer",href:"#",count:0,current:!1},{name:"Disqualified",href:"#",count:0,current:!1}];function f6(){const[n,e]=m.useState(0),[s,r]=m.useState(()=>rp(5)),[a,l]=m.useState(h6);function i(o){a.forEach(u=>{u.current=!1}),a[o].current=!0,e(o),l([...a]),s.cancel();const d=Math.floor(Math.random()*10);r(rp(d))}function c(o){a[n].count=o,l([...a])}return t.jsxs("div",{children:[t.jsx(m6,{tabs:a,onSwitch:i}),t.jsx(m.Suspense,{fallback:t.jsx(u6,{}),children:t.jsx(p6,{promise:s,onComplete:c})})]})}function lp(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(f6,{})}),`
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
`,t.jsx(e.p,{children:"完整代码与案例演示查看右侧区域。"})]})}function x6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(lp,{...n})}):lp(n)}const g6={"App.js":l6,"api.js":i6,"List.jsx":o6,"Tabs.jsx":d6,"Skeleton.jsx":c6};function j6(){return t.jsx(z,{files:g6,renderArticle:n=>t.jsx(x6,{components:{code:n}})})}const v6=`import {use, useState, Suspense} from 'react'
import Skeleton from './Skeleton.jsx'
import {fetchList} from './api.js'
import List from './List.jsx'

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
`,b6=`export const fetchList = async (number) => {
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
`,y6=`document.documentElement.style.fontSize = '14px'

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
`,N6=`import { use } from 'react';
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
`;document.documentElement.style.fontSize="14px";function S1(n){return n.type==="card"?t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsx("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3].map((e,s)=>t.jsxs("div",{className:"flex-1",children:[t.jsx("div",{className:"rounded-md bg-slate-200  h-32"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"grid grid-cols-4 gap-4 mt-2",children:t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-3"})})]},`z-${s}`))})}):n.type==="header"?t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})}):t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const k1=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json();function w6({promise:n}){const{results:e}=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function S6(){const[n,e]=m.useState(()=>k1(3));return t.jsx("div",{children:t.jsx(m.Suspense,{fallback:t.jsx(S1,{type:"card"}),children:t.jsx(k6,{promise:n})})})}function k6(n){const{results:e}=m.use(n.promise),[s,r]=m.useState(()=>k1(5));return t.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[t.jsx("div",{className:"flex space-x-4",children:e.map((a,l)=>t.jsxs("div",{className:"flex-1 overflow-hidden",children:[t.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${a.picture.large})`}}),t.jsx("div",{className:"mt-4 font-bold",children:a.name.last}),t.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:a.email})]},`z-${l}`))}),t.jsx("div",{className:"mt-8 text-gray-400 text-sm",children:"Account users"}),t.jsx(m.Suspense,{fallback:t.jsx(S1,{}),children:t.jsx(w6,{promise:s})})]})}function C6(){return t.jsx("div",{children:t.jsx(S6,{})})}function ip(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(C6,{})}),`
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
`,t.jsx(e.p,{children:"完整的代码和案例演示看右侧区域。"})]})}function _6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ip,{...n})}):ip(n)}const A6={"App.js":v6,"api.js":b6,"List.jsx":N6,"Skeleton.jsx":y6};function R6(){return t.jsx(z,{files:A6,renderArticle:n=>t.jsx(_6,{components:{code:n}})})}const M6=`import React, {useState, Suspense} from 'react'
import Userinfo from './Userinfo.jsx'
import Skeleton from './Skeleton.jsx'
import Button from './Button.jsx'
import {getMessage} from './api.js'
import use from './use.js'

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
`,$6=`import React from 'react';
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
`,L6=`const random = [
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
`,E6=`import React from 'react';
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
`,T6=`import React from 'react'

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
`,D6=`import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
`,O6=`export default function use(promise) {
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
`;function cp(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"可以看到，use + Suspense 的结合，可以极大的简化我们的开发代码，在开发体验上的提升是非常明显的。但是，如果由于客观原因，我们的项目无法升级到 React 19，那么我们就无法享受这种开发体验带来的提升了吗？"}),`
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
`,t.jsxs(e.p,{children:["在右侧代码中，我提供了一个完整的案例来使用 use，右侧案例的 React 运行版本是 ",t.jsx(e.code,{children:"react@16.14.0"})]})]})}function B6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(cp,{...n})}):cp(n)}document.documentElement.style.fontSize="14px";var z6=new Headers;z6.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");const U6={"App.js":M6,"index.js":D6,"api.js":L6,"use.js":O6,"Userinfo.jsx":T6,"Button.jsx":$6,"Skeleton.jsx":E6};function H6(){return t.jsx(z,{files:U6,renderArticle:n=>t.jsx(B6,{components:{code:n}})})}const q6=`import { useRef } from 'react';
import Button from 'components/Button/index.jsx'
import Post from './Post.jsx'

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

`,V6=`import { useRef, useImperativeHandle } from 'react';
import Input from './Input.jsx'

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
`,X6=`import clsx from 'clsx'
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
`;function Z6(){const n=m.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx("input",{ref:n,type:"text",className:"border p-2 rounded-md flex-1"}),t.jsx("button",{onClick:()=>n.current.focus(),className:"ml-3",children:"点击获取焦"})]})}function qd(n){const{ref:e,className:s,...r}=n,l=U("flex items-center border px-2 rounded-md text-gray-500",s);return t.jsxs("div",{className:He(l),children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{ref:e,className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...r})]})}function G6(){const n=m.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx(qd,{ref:n,type:"text",className:"flex-1"}),t.jsx("button",{onClick:()=>n.current.focus(),className:"ml-3",children:"点击获取焦"})]})}function Y6(){const n=m.useRef(null);function e(){n.current.scrollAndFocusAddComment()}return t.jsxs(t.Fragment,{children:[t.jsx(L,{onClick:e,primary:!0,children:"Write a comment"}),t.jsx(F6,{ref:n})]})}const F6=({ref:n})=>{const e=m.useRef(null),s=m.useRef(null);return m.useImperativeHandle(n,()=>({scrollAndFocusAddComment(){e.current.scrollToBottom(),s.current.focus()}}),[]),t.jsxs(t.Fragment,{children:[t.jsx("article",{children:t.jsx("p",{children:"Welcome to my Blog!"})}),t.jsx(P6,{ref:e}),t.jsx(I6,{ref:s})]})},P6=({ref:n})=>{const e=m.useRef(null);m.useImperativeHandle(n,()=>({scrollToBottom(){const r=e.current;r.scrollTop=r.scrollHeight}}),[]);let s=[];for(let r=0;r<50;r++)s.push(t.jsxs("p",{children:["Comment #",r]},r));return t.jsx("div",{className:"border p-4 rounded h-32 overflow-y-auto",ref:e,children:s})};function I6(n){return t.jsx(qd,{placeholder:"Add comment...",ref:n.ref,className:"mt-4"})}function op(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(Z6,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(G6,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(Y6,{})})]})}function Q6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(op,{...n})}):op(n)}function W6({ref:n}){const e=m.useRef(null),s=m.useRef(null);return m.useImperativeHandle(n,()=>({scrollAndFocusAddComment(){e.current.scrollToBottom(),s.current.focus()}}),[]),t.jsxs(t.Fragment,{children:[t.jsx("article",{children:t.jsx("p",{className:"my-5",children:"Welcome to my Blog!"})}),t.jsx(J6,{ref:e}),t.jsx(K6,{ref:s})]})}const J6=({ref:n})=>{const e=m.useRef(null);m.useImperativeHandle(n,()=>({scrollToBottom(){const r=e.current;r.scrollTop=r.scrollHeight}}),[]);let s=[];for(let r=0;r<50;r++)s.push(t.jsxs("p",{children:["Comment #",r]},r));return t.jsx("div",{className:"border p-4 rounded h-32 overflow-y-auto",ref:e,children:s})};function K6(n){return t.jsx(qd,{placeholder:"Add comment...",ref:n.ref,className:"mt-4"})}function eN(){const n=m.useRef(null);function e(){n.current.scrollAndFocusAddComment()}return t.jsxs(t.Fragment,{children:[t.jsx(L,{onClick:e,primary:!0,children:"Write a comment"}),t.jsx(W6,{ref:n})]})}const nN={"App.js":q6,"Post.jsx":V6,"Button.jsx":Ma,"Input.jsx":X6};function tN(){return t.jsx(z,{files:nN,renderArticle:n=>t.jsx(Q6,{components:{code:n}}),caseRender:t.jsx(eN,{})})}const sN=`import { useRef } from 'react'
import Dialog from 'components/Dialog/index.jsx'

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
`,rN=`import { useEffect, useRef, useState, useImperativeHandle } from 'react';
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
`,aN=`import { useState, useImperativeHandle} from "react";
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
`;function lN(){const n=m.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"点击弹窗显示"}),t.jsx(Ra,{ref:n,children:t.jsx("div",{className:"bg-white p-4 max-w-xl mt-48 mx-auto rounded",children:"这是一个小弹窗"})})]})}function dp(){const n=m.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"点击我，显示对话框组件"}),t.jsxs(xr,{ref:n,title:"Message For You",onSure:()=>n.current.close(),children:[t.jsx("strong",{className:"text-red-500",children:"React 19"})," 是全网学习体验最好的小册，没有之一。它能帮助你快速领悟到 React 的独特的开发魅力，你将会感受到更快的学习速度，更高效的开发速度，更专业的开发思维。",t.jsx("div",{className:"mt-4",children:t.jsx("img",{src:"https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""})})]})]})}function up(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(dp,{})}),`
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
`,t.jsx(_,{children:t.jsx(lN,{})}),`
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
`,t.jsx(_,{children:t.jsx(dp,{})}),`
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
`,t.jsxs(e.p,{children:["最终的代码请看右侧案例中的 ",t.jsx(e.code,{children:"Dialog.jsx"})]})]})}function iN(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(up,{...n})}):up(n)}const cN={"App.js":sN,"Dialog.jsx":rN,"Modal.jsx":aN};function oN(){return t.jsx(z,{files:cN,hidePreview:!0,renderArticle:n=>t.jsx(iN,{components:{code:n}})})}const dN=`import Provider from './context.jsx'
import Task from './task.jsx'

export default function App() {
  return (
    <Provider>
      <h3 className='font-bold'>Your Task</h3>
      <p className='!text-gray-400'>Here's a task for you!</p>
      <Task />
    </Provider>
  )
}
`,uN=`import {createContext, useState} from 'react'

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
`,mN=`import { useRef, use } from 'react'
import Editor from './editor.jsx'
import {Context} from './context.jsx'

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
`,pN=`import { use } from 'react'
import Dialog from 'components/Dialog/index.jsx'
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
`,hN={task:"TASK-8878",content:"Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",status:"Progress",priority:"Medium"},Vd=m.createContext({});function fN({children:n}){const[e,s]=m.useState(hN);return t.jsx(Vd,{value:{task:e,updateTask:s},children:n})}function xN(n){const{ref:e,...s}=n,{task:r,updateTask:a}=m.use(Vd);function l(i){a({...r,content:i.target.value})}return t.jsxs(xr,{ref:e,...s,onSure:()=>e.current.close(),children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-20",children:"name"}),t.jsx("div",{className:"flex-1 p-2 text-sm font-bold",children:r.task})]}),t.jsxs("div",{className:"flex items-center mt-4",children:[t.jsx("div",{className:"w-20",children:"content"}),t.jsx("input",{value:r.content,className:"flex-1 border rounded-md p-2 text-sm",onChange:l})]}),t.jsxs("div",{className:"flex items-center mt-4",children:[t.jsx("div",{className:"w-20",children:"status"}),t.jsx("div",{className:"flex-1 p-2 text-sm text-green-500",children:r.status})]}),t.jsxs("div",{className:"flex items-center mt-4",children:[t.jsx("div",{className:"w-20",children:"Priority"}),t.jsx("div",{className:"flex-1 p-2 text-sm text-red-500",children:r.priority})]})]})}function gN(){const n=m.useRef(null),{task:e}=m.use(Vd);return t.jsxs("div",{className:"flex items-center border-t pt-4",children:[t.jsx("div",{className:"font-bold",children:e.task}),t.jsx("div",{className:"flex-1 mx-3 line-clamp-1",children:e.content}),t.jsx("div",{className:"text-green-500",children:e.status}),t.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"edit"}),t.jsx(xN,{ref:n,title:"Editor"})]})}function mp(){return t.jsxs(fN,{children:[t.jsx("h3",{className:"font-bold",children:"Your Task"}),t.jsx("p",{className:"!text-gray-400",children:"Here's a task for you!"}),t.jsx(gN,{})]})}function pp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(mp,{})}),`
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
`,t.jsx(_,{children:t.jsx(mp,{})}),`
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
`,t.jsxs(e.p,{children:["这里比较有意思的一个地方是在 ",t.jsx(e.code,{children:"editor.jsx"})," 文件中，对于 ref 的使用和处理，大家可以留心观察一下。"]})]})}function jN(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(pp,{...n})}):pp(n)}const vN={"App.js":dN,"context.jsx":uN,"task.jsx":mN,"editor.jsx":pN};function bN(){return t.jsx(z,{files:vN,hidePreview:!0,renderArticle:n=>t.jsx(jN,{components:{code:n}})})}const yN=`import Provider from './context.jsx'
import Total from './Total.jsx'
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
`,NN=`import {createContext, useState} from 'react'

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
`,wN=`import {use, useState} from 'react'
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
`,SN=`import {use, useState} from 'react'
import {Context} from './context.jsx'
import Switch from 'components/Switch/index.jsx'

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
`,kN=`@layer context_count {
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
`,Xd=m.createContext({});function CN({children:n}){const[e,s]=m.useState(0),r={count:e,incrementer:s};return t.jsx(Xd,{value:r,children:n})}function _N(){const{count:n}=m.use(Xd);return t.jsxs("div",{children:[t.jsx("h3",{className:"font-bold",children:"Total Switch Count"}),t.jsxs("p",{className:"!text-gray-400",children:["这里统计的是所有组件的切换次数: ",n]})]})}function AN(n){const{value:e=!1,onChange:s}=n,[r,a]=m.useState(e),l=r?"switch right":"switch left";function i(c){a(c),s&&s(c)}return t.jsx("div",{className:l,onClick:()=>i(!r),children:t.jsx("div",{className:"circle"})})}function uc(){const{count:n,incrementer:e}=m.use(Xd),[s,r]=m.useState("theme-light"),[a,l]=m.useState(0);function i(c){r(c?"theme-dark":"theme-light"),l(a+1),e(n+1)}return t.jsxs("div",{className:s,children:[t.jsxs("div",{className:"context-card p-4 rounded transition",children:[t.jsx("div",{className:"title font-bold",children:"Canary"}),t.jsx("div",{className:"mt-4",children:"The useActionState Hook is currently only available in React’s Canary and experimental channels. Learn more about release channels here. "})]}),t.jsxs("div",{className:"flex justify-between py-4 items-center",children:[t.jsxs("div",{className:"mr-4 text-green-500",children:["当前组件切换次数: ",a]}),t.jsx(AN,{onChange:i})]})]})}function hp(){return t.jsxs(CN,{children:[t.jsx(_N,{}),t.jsx(uc,{}),t.jsx(uc,{}),t.jsx(uc,{})]})}function fp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(hp,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(hp,{})}),`
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
`})})]})}function RN(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(fp,{...n})}):fp(n)}const MN={"App.js":yN,"context.jsx":NN,"Total.jsx":wN,"Card.jsx":SN,"skin.css":kN};function $N(){return t.jsx(z,{files:MN,hidePreview:!0,renderArticle:n=>t.jsx(RN,{components:{code:n}})})}const LN=`import {useState, Suspense, useDeferredValue} from 'react'
import Spin from './Spin'
import Skeleton from './Skeleton.jsx'
import {fetchListWithCancel} from './api.js'
import List from './List.jsx'
import Input from './Input.jsx'

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
`,EN=`export const fetchList = async (number) => {
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
`,TN=`document.documentElement.style.fontSize = '14px'

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
`,DN=`import { use } from 'react';
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
`,ON=`export default function Input(props) {
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
`,C1=`import {useState, useEffect} from 'react'
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
`,_1=`.spin {
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
`;function Zd(n){const{loading:e,type:s="icon"}=n,[r,a]=m.useState(!1),[l,i]=m.useState(!1);m.useEffect(()=>{e?(a(!0),i(!0)):a(!1)},[e]);const o=U("spin flex items-center justify-center top-0 bg-white bg-opacity-50",{in:r,out:!r});function d(){r||i(!1)}return t.jsxs("div",{className:"relative",children:[n.children,l?t.jsx("div",{className:o,onAnimationEnd:d,children:s==="icon"&&t.jsx("svg",{className:"animate-spin",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"24",height:"24",children:t.jsx("path",{d:"M249.836 210.77c5.558-3.827 10.73-7.527 15.812-10.695 4.967-3.314 9.807-6.121 14.208-8.785 2.18-1.362 4.374-2.515 6.425-3.673l5.873-3.281c0.945-0.551 1.789-0.953 2.625-1.377l2.425-1.226 4.381-2.233 1.954-1.004 2.219-1.093 3.918-1.924 7.184-3.527c2.883-1.44 5.996-3.272 8.694-5.22 26.969-19.458 33.057-57.094 13.599-84.063-19.458-26.968-57.094-33.057-84.063-13.599l-6.49 4.682-3.54 2.554-2.071 1.499-2.62 1.947-5.824 4.351a7267.87 7267.87 0 0 0-3.193 2.399c-1.091 0.824-2.25 1.676-3.282 2.533a33346.62 33346.62 0 0 1-6.735 5.441c-2.343 1.915-4.833 3.859-7.308 6.046-4.991 4.313-10.423 8.905-15.952 14.121-5.645 5.071-11.353 10.792-17.394 16.739-5.886 6.125-12.079 12.515-18.185 19.505-12.303 13.875-24.827 29.53-36.839 46.835a494.61 494.61 0 0 0-33.896 56.497 491.342 491.342 0 0 0-27.329 64.159c-1.02 2.77-1.888 5.605-2.789 8.428l-2.688 8.477c-1.692 5.691-3.266 11.429-4.857 17.152l-2.135 8.669c-0.683 2.896-1.479 5.756-2.051 8.682l-1.84 8.729-0.914 4.358-0.785 4.387a479.254 479.254 0 0 0-7.583 69.967c-0.302 5.759-0.239 11.514-0.279 17.214l-0.017 4.267c-0.001 1.42 0.069 2.841 0.101 4.257l0.25 8.464 0.127 4.204 0.264 4.188 0.531 8.317 0.278 4.451 0.399 3.933 0.792 7.821c0.14 1.313 0.244 2.561 0.412 3.918l0.527 4.098 1.056 8.115c0.185 1.337 0.33 2.695 0.549 4.002l0.648 3.91 1.289 7.744c1.825 10.246 3.911 20.188 6.263 29.766a463.195 463.195 0 0 0 16.342 52.81l2.255 5.904 1.108 2.899 1.186 2.836 4.611 10.976c3.247 7.033 6.19 13.723 9.353 19.831 6.048 12.328 12.043 22.661 17.007 31.096 5.121 8.359 9.212 14.84 12.197 19.141l4.472 6.638-3.293-7.292c-2.209-4.713-5.148-11.776-8.748-20.761-3.443-9.059-7.545-20.055-11.346-32.919-2.041-6.376-3.771-13.301-5.726-20.516l-2.612-11.204-0.667-2.878-0.583-2.935-1.183-5.957c-3.105-16.055-5.568-33.549-6.889-52.052-0.668-9.251-1.027-18.753-1.1-28.437l0.03-7.3 0.014-3.67c0.002-1.227 0.084-2.416 0.122-3.629l0.284-7.263 0.139-3.644c0.053-1.229 0.166-2.577 0.247-3.863a35704.717 35704.717 0 0 1 0.798-11.787l0.017-0.247c0.013 0.588 0.018 0.028 0.027 0.098l0.05-0.472 0.101-0.945 0.2-1.891 0.8-7.581 0.4-3.801 0.535-3.801 1.069-7.62c0.187-1.271 0.335-2.545 0.555-3.815l0.67-3.811c0.909-5.082 1.708-10.185 2.859-15.253a424.734 424.734 0 0 1 17.057-60.03l1.316-3.663 1.437-3.623 2.859-7.225c0.907-2.417 2.03-4.761 3.033-7.135l3.079-7.082c2.208-4.653 4.37-9.295 6.624-13.867l3.508-6.783c1.167-2.252 2.294-4.513 3.565-6.702a414.503 414.503 0 0 1 31.89-49.502 407.116 407.116 0 0 1 35.476-41.25 406.598 406.598 0 0 1 35.793-32.288c5.751-4.687 11.515-8.857 16.918-12.861zM1023.966 510.486l-0.001-0.005-0.875-7.954-1.051-9.554-0.687-6.125-1.153-8.152c-0.828-5.729-1.741-12.089-2.813-18.907l-4.259-20.887c-0.691-3.726-1.738-7.517-2.729-11.425l-3.102-12.024c-0.558-2.048-1.019-4.142-1.677-6.221l-1.958-6.314-4.07-13.021-1.049-3.333-1.211-3.324c-0.814-2.223-1.638-4.467-2.469-6.732-1.673-4.522-3.34-9.131-5.115-13.781l-5.938-13.981-3.046-7.123c-1.037-2.384-2.247-4.72-3.375-7.102l-6.997-14.388c-0.569-1.22-1.222-2.408-1.877-3.598l-1.958-3.583-3.95-7.211-3.995-7.265c-1.354-2.422-2.881-4.773-4.324-7.175l-8.875-14.427c-12.567-18.998-26.533-37.793-42.018-55.643-15.662-17.71-32.638-34.534-50.581-50.045a527.617 527.617 0 0 0-56.726-41.602c-19.622-12.201-39.702-22.647-59.484-31.64l-14.925-6.188c-2.47-0.995-4.881-2.072-7.356-2.979l-7.402-2.651-7.306-2.609-3.615-1.289c-1.198-0.434-2.394-0.863-3.618-1.21l-14.37-4.353c-2.366-0.691-4.68-1.466-7.035-2.069l-7.02-1.754-13.669-3.402c-4.524-0.941-8.985-1.788-13.341-2.655l-6.47-1.271-3.184-0.621-3.186-0.465-12.373-1.797-5.96-0.862c-1.957-0.298-3.928-0.403-5.85-0.61l-11.239-1.057c-3.638-0.329-7.151-0.735-10.598-0.81l-19.18-0.823-16.258 0.11-6.935 0.057c-2.177 0.091-4.219 0.237-6.115 0.34l-9.619 0.566-7.982 0.472 7.959 0.875 9.529 1.05c1.872 0.215 3.884 0.411 6.023 0.683l6.797 1.101 15.801 2.578 18.393 3.951c3.283 0.628 6.614 1.603 10.051 2.514l10.571 2.838c1.801 0.509 3.644 0.92 5.469 1.526l5.542 1.793 11.432 3.697 2.927 0.946 2.914 1.104 5.902 2.242c3.965 1.517 8.007 3.017 12.084 4.613l12.243 5.366 6.241 2.733c2.088 0.929 4.128 2.029 6.212 3.044l12.59 6.277c1.068 0.506 2.106 1.094 3.145 1.685l3.131 1.761 6.302 3.542 6.353 3.568c2.118 1.209 4.165 2.586 6.263 3.878l12.601 7.922c16.565 11.247 32.949 23.681 48.48 37.44a473.639 473.639 0 0 1 43.435 44.87 467.917 467.917 0 0 1 35.892 50.115c10.476 17.304 19.389 34.971 27.062 52.322 1.761 4.404 3.506 8.772 5.234 13.098 0.843 2.166 1.771 4.273 2.532 6.444l2.224 6.49 2.201 6.396 1.093 3.162c0.368 1.047 0.734 2.092 1.019 3.166l3.633 12.572c0.578 2.068 1.242 4.086 1.738 6.146l1.441 6.137 2.829 11.931 2.152 11.645 1.045 5.64 0.514 2.772 0.362 2.779 1.423 10.784 0.697 5.188c0.245 1.704 0.3 3.423 0.458 5.098l0.794 9.786c0.249 3.167 0.584 6.22 0.595 9.223l0.516 16.686-0.346 13.152-0.109 5.579-0.343 6.014-0.567 9.595-0.472 7.988c-0.169 3.219-0.107 6.829 0.256 10.138 3.638 33.056 33.383 56.904 66.438 53.267 33.056-3.637 56.905-33.382 53.268-66.438zM885.176 762.451l-4.868 5.897c-1.711 2.052-3.44 4.238-5.4 6.399-3.858 4.365-7.946 9.128-12.608 13.957-4.517 4.944-9.632 9.919-14.922 15.205-5.467 5.131-11.147 10.547-17.374 15.864-12.349 10.726-26.262 21.624-41.613 32.046a434.435 434.435 0 0 1-50.026 29.303 431.157 431.157 0 0 1-56.59 23.39c-2.436 0.874-4.935 1.6-7.419 2.361l-7.455 2.279c-5.006 1.425-10.053 2.742-15.078 4.091-2.536 0.593-5.075 1.187-7.617 1.78-2.545 0.566-5.051 1.25-7.622 1.714l-7.663 1.523-3.822 0.763-3.851 0.64a419.278 419.278 0 0 1-61.304 5.938c-5.039 0.219-10.081 0.088-15.068 0.072l-3.733-0.022c-1.238-0.012-2.392-0.1-3.587-0.145l-7.067-0.313-3.505-0.146-3.997-0.27-7.961-0.537-1.981-0.133-0.989-0.067-0.494-0.033c0.221-0.008-0.844-0.005 0.433-0.022l-0.226-0.025-3.593-0.396-7.127-0.78a406.62 406.62 0 0 1-53.494-10.013 402.48 402.48 0 0 1-45.808-14.792l-5.111-2.022-2.511-0.99-2.452-1.066-9.494-4.124c-6.074-2.917-11.861-5.522-17.131-8.352-10.648-5.379-19.552-10.718-26.826-15.11l-1.338-0.807a1085.391 1085.391 0 0 0-3.457-2.276l-4.116-2.687c-0.638-0.414-1.252-0.813-1.842-1.194l-2.021-1.354-3.621-2.439-6.637-4.472c-2.685-1.782-5.825-3.567-8.857-4.938-30.307-13.689-65.973-0.218-79.662 30.089-13.689 30.308-0.218 65.974 30.089 79.663l7.293 3.294 3.979 1.797 2.369 1.063 2.994 1.302c2.073 0.896 4.3 1.857 6.676 2.885l3.672 1.574 1.917 0.819 1.9 0.745c10.22 4.014 22.646 8.772 37.189 13.242 7.215 2.375 15.042 4.443 23.216 6.727l12.687 3.1 3.261 0.787 3.325 0.701 6.75 1.415c18.195 3.715 38.044 6.719 59.054 8.439a494.284 494.284 0 0 0 65.863 0.997l8.535-0.519 4.285-0.266 0.268-0.017c1.44-0.02 0.541-0.02 0.927-0.03l0.492-0.051 0.986-0.1 1.977-0.201 7.938-0.807 3.991-0.406 4.502-0.554 9.015-1.133c1.492-0.2 3.034-0.365 4.486-0.598l4.344-0.709c5.795-0.965 11.61-1.832 17.399-3.066a485.178 485.178 0 0 0 68.692-18.701l4.2-1.463 4.157-1.588 8.292-3.176c2.771-1.016 5.468-2.251 8.194-3.37l8.134-3.434c5.351-2.451 10.685-4.869 15.941-7.39l7.805-3.918c2.591-1.307 5.188-2.576 7.712-3.991a474.344 474.344 0 0 0 57.071-35.83 467.174 467.174 0 0 0 47.72-40.068 466.596 466.596 0 0 0 37.51-40.586c5.455-6.542 10.335-13.082 14.998-19.24 4.483-6.313 8.789-12.218 12.512-18 3.868-5.667 7.179-11.177 10.297-16.204 1.589-2.492 2.957-4.989 4.318-7.332 1.349-2.348 2.635-4.586 3.854-6.711 4.686-8.611 8.271-15.384 10.509-20.116l3.527-7.185-4.682 6.489c-2.985 4.266-7.65 10.33-13.635 17.935z"})})}):null]})}document.documentElement.style.fontSize="14px";function A1(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Pl=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function R1({promise:n}){const{results:e}=m.use(n);return console.log("我会执行几次呢"),t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function M1(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function BN(){const[n,e]=m.useState(()=>Pl(5)),s=m.useDeferredValue(n);function r(a){n.cancel();const l=a.target.value.length%5;e(Pl(l))}return t.jsxs("div",{children:[t.jsx(M1,{onChange:r,placeholder:"Enter something"}),t.jsx(m.Suspense,{fallback:t.jsx(A1,{}),children:t.jsx(Zd,{loading:s!==n,type:"mask",children:t.jsx(R1,{promise:s})})})]})}function zN(){const[n,e]=m.useState(()=>Pl(5));function s(r){n.cancel();const a=r.target.value.length%5;e(Pl(a))}return t.jsxs("div",{children:[t.jsx(M1,{onChange:s,placeholder:"Enter something"}),t.jsx(m.Suspense,{fallback:t.jsx(A1,{}),children:t.jsx(R1,{promise:n})})]})}function UN(){const[n,e]=m.useState(0);function s(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsxs("div",{className:"mt-4",children:["counter: ",n]})]}),t.jsx("button",{onClick:s,children:"counter++"})]})}function HN(){const[n,e]=m.useState(0),s=m.useDeferredValue(n);function r(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsxs("div",{className:"mt-4",children:["counter: ",s]})]}),t.jsx("button",{onClick:r,children:"counter++"})]})}function qN(){const[n,e]=m.useState(0),s=m.useDeferredValue(n,0);function r(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsx(VN,{counter:s})]}),t.jsx("button",{onClick:r,children:"counter++"})]})}const VN=({counter:n})=>{const e=performance.now();for(;performance.now()-e<200;);return t.jsxs("div",{className:"mt-4",children:["Deferred: ",n]})};function XN(){const[n,e]=m.useState(0),s=m.useDeferredValue(n);function r(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsx(ZN,{counter:s})]}),t.jsx("button",{onClick:r,children:"counter++"})]})}const ZN=({counter:n})=>{let e=[];for(let s=0;s<200;s++)e.push(t.jsx(GN,{counter:n},s));return t.jsxs("div",{className:"mt-4 text-green-500",children:[t.jsxs("div",{children:["Deferred: ",n]}),t.jsx("ul",{className:"h-32 hidden",children:e})]})};function GN({counter:n}){let e=performance.now();for(;performance.now()-e<1;);return t.jsx("li",{children:n})}function xp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"重头戏来了！"}),`
`,t.jsx(e.p,{children:"在进一步学习之前，道友们先操作感受一下这个案例中，搜索时 loading 的交互状态。在输入框中，快速输入任意内容。"}),`
`,t.jsx(_,{reload:!0,children:t.jsx(BN,{})}),`
`,t.jsx(e.p,{children:"然后再对比一下前后两种 Loading 交互方式的区别。"}),`
`,t.jsx(_,{children:t.jsx(zN,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(UN,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(HN,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(qN,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(XN,{})}),`
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
`,t.jsx(e.p,{children:"但是，等你彻底掌握它之后，你就会发现 React 19 在异步交互上真的太优雅了。这样的开发体验，是依赖 useEffect 完全比不了的。"})]})}function YN(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(xp,{...n})}):xp(n)}const FN={"App.js":LN,"api.js":EN,"List.jsx":DN,"Input.jsx":ON,"Skeleton.jsx":TN,"Spin.jsx":C1,"index.css":_1};function PN(){return t.jsx(z,{files:FN,renderArticle:n=>t.jsx(YN,{components:{code:n}})})}const IN=`import {useState, Suspense, useDeferredValue} from 'react'
import Skeleton from './Skeleton.jsx'
import {fetchListWithCancel} from './api.js'
import Tabs from './Tabs.jsx'
import List from './List.jsx'
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
`,QN=`const random = [
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
`,WN=`export default function Skeleton(props) {
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
`,JN=`import { use } from 'react';
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
`,KN=`function classNames(...classes) {
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
`,ew=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));let r="flex border border-blue-100 p-4 rounded-md shadow";return e?t.jsxs("div",{className:r,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]}):t.jsxs("div",{className:`${r} justify-center items-center flex-col text-gray-500`,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),t.jsx("div",{className:"mt-2",children:"no data."})]})};function $1(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function nw(n){const{className:e,primary:s,danger:r,sm:a,lg:l,signal:i,success:c,...o}=n,h=He(U("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":l},e));return t.jsxs("button",{className:h,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const tw=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var L1=new Headers;L1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var sw={method:"GET",headers:L1,redirect:"follow",data:"hex"};const rw="https://echo.apifox.com/delay/1",gp=async()=>{await fetch(rw,sw);const n=Math.floor(Math.random()*10)%5;return{value:tw[n]}},jp=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function aw(){const[n,e]=m.useState(gp()),[s,r]=m.useTransition();function a(){console.log("click"),r(()=>{console.log("transition"),e(gp())})}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(nw,{onClick:a,children:"更新数据"})}),t.jsx(m.Suspense,{fallback:t.jsx($1,{}),children:t.jsx(Zd,{loading:s,children:t.jsx(lw,{promise:n})})})]})}function lw(n){const{value:e}=m.use(n.promise);return t.jsx(ew,{message:e})}function iw(...n){return n.filter(Boolean).join(" ")}function cw({tabs:n,onSwitch:e}){return t.jsxs("div",{children:[t.jsxs("div",{className:"hidden",children:[t.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),t.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:n.find(s=>s.current).name,onChange:s=>e(s.target.selectedIndex),children:n.map(s=>t.jsx("option",{children:s.name},s.name))})]}),t.jsx("div",{className:"block",children:t.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:n.map((s,r)=>t.jsx("a",{href:s.href,className:iw(s.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":s.current?"page":void 0,onClick:a=>{a.preventDefault(),e(r)},children:s.name},s.name))})})]})}function ow({promise:n}){const{results:e}=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}const mc=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function dw(){const[n,e]=m.useState(0),[s,r]=m.useState(()=>jp(5)),[a,l]=m.useTransition();function i(c){mc[n].current=!1,mc[c].current=!0,e(c),s.cancel(),l(()=>{r(jp(5))})}return t.jsxs("div",{children:[t.jsx(cw,{tabs:mc,onSwitch:i}),t.jsx(m.Suspense,{fallback:t.jsx($1,{}),children:t.jsx(Zd,{loading:a,type:"mask",children:t.jsx(ow,{promise:s})})})]})}function vp(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(aw,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(dw,{})})]})}function uw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(vp,{...n})}):vp(n)}const mw={"App.js":IN,"api.js":QN,"Tabs.jsx":KN,"List.jsx":JN,"Skeleton.jsx":WN,"Spin.jsx":C1,"index.css":_1};function pw(){return t.jsx(z,{files:mw,renderArticle:n=>t.jsx(uw,{components:{code:n}})})}const hw=`function Layou2t() {
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
`;function bp(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"我们对 React Compiler 期待已久。"}),`
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
`,t.jsxs(e.p,{children:["引入成功之后，我们可以在开发者工具中的 ",t.jsx(e.code,{children:"Sources"})," 面板的 ",t.jsx(e.code,{children:"Page"})," 目录中查看编译之后的代码，长得跟右侧代码差不多就表示编译成功了。"]})]})}function fw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(bp,{...n})}):bp(n)}const xw={"App.js":hw};function gw(){return t.jsx(z,{files:xw,hidePreview:!0,renderArticle:n=>t.jsx(fw,{components:{code:n}})})}const jw=`import { c as _c } from "/src/mycache.js";
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
`,vw=`import { useState } from 'react'
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
`;function yp(n){const e={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"非常的 nice，经过几天的尝试和研究，我在低版本中成功引入了 Compiler，目前已经在 vite 中运行起来了。"}),`
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
`,t.jsx(e.p,{children:"运行项目，查看开发者工具的 Sources 面板中的 Page 目录，我们发现 App.jsx 已经被编译成了右侧代码的样子。搞定。"})]})}function bw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(yp,{...n})}):yp(n)}const yw={"App.js":jw,原代码:vw};function Nw(){return t.jsx(z,{files:yw,hidePreview:!0,renderArticle:n=>t.jsx(bw,{components:{code:n}})})}const ww=`import { c as _c } from "/src/mycache.js";
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
`,Sw=`import { useState } from 'react'
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
`;function Np(n){const e={a:"a",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"在 webpack 中引入会稍微麻烦一点，因为我们要自己定义一个 Loader，许多小伙伴对于 webpack 自定义 loader 比较陌生，因此我这里直接放了一个比较完整的代码如下"}),`
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
`})})]})}function kw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Np,{...n})}):Np(n)}const Cw={"App.js":ww,原代码:Sw};function _w(){return t.jsx(z,{files:Cw,hidePreview:!0,renderArticle:n=>t.jsx(kw,{components:{code:n}})})}const Aw=`import {useState} from 'react'
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
`,Rw=`import {useState} from 'react'

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
`;function Mw(){const[n,e]=m.useState(0);function s(){e(n+1)}return t.jsxs("div",{children:[t.jsx("div",{children:"A Base Case"}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:["currnt count is: ",n]}),t.jsx("button",{onClick:s,children:"Increment"})]})]})}function wp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
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
`,t.jsx(_,{children:t.jsx(Mw,{})}),`
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
`]})]})}function $w(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(wp,{...n})}):wp(n)}const Lw={"App.js":Aw,原代码:Rw};function Ew(){return t.jsx(z,{files:Lw,renderArticle:n=>t.jsx($w,{components:{code:n}})})}const Tw=`import {useState} from 'react'
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
`,Dw=`import {useState} from 'react'

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
`;function Ow(){const[n,e]=m.useState(0);function s(){e(n+1)}return t.jsxs("div",{children:[t.jsx("div",{children:"A Base Case"}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:["currnt count is: ",n]}),t.jsx("button",{onClick:s,children:"Increment"})]})]})}function Sp(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:["通过上面对 Compiler 渲染结果的理解，我们应该已经大概知道我们的 React 代码最终会渲染成什么样。我们目前要思考的问题就是，我们的代码通过 Compiler 编译之后，",t.jsx(e.strong,{children:"收益表现在哪里？"})]}),`
`,t.jsx(e.p,{children:"接下来我们要分析三个不同的案例，来思考这个问题。这篇文章先分析第一个出现在上一章中，最简单的基础案例"}),`
`,t.jsx(_,{children:t.jsx(Ow,{})}),`
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
`,t.jsx(e.p,{children:"当然，这里多执行的逻辑也并不是很多，我们也可以选择无视。"})]})}function Bw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Sp,{...n})}):Sp(n)}const zw={"App.js":Tw,原代码:Dw};function Uw(){return t.jsx(z,{files:zw,renderArticle:n=>t.jsx(Bw,{components:{code:n}})})}const Hw=`import {useState} from 'react'
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
`,qw=`import { useState } from 'react'

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
`;function Vw(){var[n,e]=m.useState(0);function s(){e(n+1)}return t.jsxs("div",{children:[t.jsx("div",{children:"A Expensive Case"}),t.jsxs("div",{className:"flex items-center justify-between mt-4",children:[t.jsxs("div",{className:"counter",children:["current counter is: ",n]}),t.jsx("button",{onClick:s,children:"counter++"})]}),t.jsx(Xw,{})]})}function Xw(){for(var n=performance.now();performance.now()-n<100;);return t.jsx("div",{className:"border border-red-500 rounded p-4 mt-4 text-red-500 text-sm leading-6",children:"这是模拟的一个耗时子组件，我的渲染至少要损耗 100ms 的时间，因此如果不做任何优化的情况下，当你快速点击按钮时，你会感受到 counter 的递增会有明显的掉帧。"})}function kp(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(Vw,{})}),`
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
`,t.jsxs(e.p,{children:["因此，编译优化之后，我们能够非常明显的感受到",t.jsx(e.strong,{children:"掉帧的现象"}),"消失了。在优化之前，由于 counter 导致组件 re-render，所以该子组件虽然没有任何参数传递进去，但是依然不可避免的需要重新执行，从而导致每次更新的耗时都非常大。"]})]})}function Zw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(kp,{...n})}):kp(n)}const Gw={"App.js":Hw,原代码:qw};function Yw(){return t.jsx(z,{files:Gw,renderArticle:n=>t.jsx(Zw,{components:{code:n}})})}const Fw=`import { useState, useEffect, useRef } from 'react'
import Panel1 from "./Panel1.jsx";
import Panel2 from "./Panel2.jsx";
import Panel3 from "./Panel3.jsx";
import Panel4 from "./Panel4.jsx";

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
`,Pw=`import clsx from 'clsx'

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
`,Iw=`import clsx from 'clsx'

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
`,Qw=`import clsx from 'clsx'

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
`,Ww=`import clsx from 'clsx'

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
`;function Jw({selected:n,appeared:e}){if(!n&&!e)return null;const s=U("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."})}function Kw({selected:n,appeared:e}){if(!n&&!e)return null;const s=U("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."})}function e8({selected:n,appeared:e}){if(!n&&!e)return null;const s=U("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets."})}function n8({selected:n,appeared:e}){if(!n&&!e)return null;const s=U("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"React Compiler is a new experimental compiler that we’ve open sourced to get early feedback from the community. It still has rough edges and is not yet fully ready for production."})}const Cp=[{title:"Tailwindcss",component:Jw,appeared:!1},{title:"React",component:Kw,appeared:!1},{title:"Unocss",component:e8,appeared:!1},{title:"Compiler",component:n8,appeared:!1}];function t8(){const[n,e]=m.useState(0),s=m.useRef([...Cp]);function r(o){s.current[o].appeared=!0,e(o)}let a=s.current[0],l=s.current[1],i=s.current[2],c=s.current[3];return t.jsxs("div",{className:"bg-gray-100 p-8 rounded-md border border-gray-200",children:[t.jsx("div",{children:Cp.map((o,d)=>t.jsx("button",{className:d===n?"text-blue-500":"text-gray-500",onClick:()=>r(d),children:o.title},o.title))}),t.jsx(a.component,{appearder:a.appeared,selected:n===0}),t.jsx(l.component,{appearder:l.appeared,selected:n===1}),t.jsx(i.component,{appearder:i.appeared,selected:n===2}),t.jsx(c.component,{appearder:c.appeared,selected:n===3})]})}function s8(){return t.jsxs("div",{children:[t.jsx(r8,{}),t.jsx(a8,{})]})}function r8(){var n=performance.now();return t.jsxs("div",{className:"mt-4",children:["仅执行 1000,000 次耗时 for 循环耗时：",t.jsxs("span",{className:"text-red-500",children:[performance.now()-n," ms"]})]})}function a8(){var n=performance.now();return t.jsxs("div",{className:"mt-4",children:["for 循环中，比较 1000,000 次耗时：",t.jsxs("span",{className:"text-red-500",children:[performance.now()-n," ms"]})]})}function _p(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(t8,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(s8,{})}),`
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
`,t.jsx(e.p,{children:"并且 React Compiler 上手成本低，理解起来也不难，未来肯定会快速被大量开发者所接受。作为开发者我们只需要放心使用即可。"})]})}function l8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(_p,{...n})}):_p(n)}const i8={"App.js":Fw,"Panel1.jsx":Pw,"Panel2.jsx":Iw,"Panel3.jsx":Qw,"Panel4.jsx":Ww,"Button.jsx":Ma};function c8(){return t.jsx(z,{files:i8,renderArticle:n=>t.jsx(l8,{components:{code:n}})})}function o8(){return t.jsxs("form",{id:"form",method:"get",className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"First name: "}),t.jsx("input",{type:"text",defaultValue:"Jake",name:"fname"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"Last name: "}),t.jsx("input",{type:"text",defaultValue:"Ma",name:"lname"})]}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"提交"})})]})}function Ap(n){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"在 html 的基础知识中，表单是很重要的一个环节"}),"，但是由于前端框架的盛行，原生表单开发方式相关的知识被部分前端框架所遗忘，很多人对 form action，formdata 很陌生。因此，当看到有消息称 React 19 支持了 form action 之后，许多前端感觉有点懵。这是啥？"]}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(o8,{})}),`
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
`,t.jsx(e.p,{children:"了解了这些html form 元素中的基础知识之后，我们下一章再来详细的学习一下 FormData 的基础知识。"})]})}function d8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Ap,{...n})}):Ap(n)}js.registerLanguage("javascript",Ad);function u8({className:n,...e}){const s=/language-(\w+)/.exec(n||"");return s?t.jsx(js,{language:s[1],PreTag:"div",...e,style:Rd}):t.jsx("code",{className:n,...e})}function qn(n){const{renderArticle:e,isAuth:s=!0,isGiscus:r=!0,advance:a=!1}=n,l=n1(s,a);return t.jsxs("div",{className:"keep max-w-[700px] mx-auto",children:[t.jsx(Yl,{when:l,fallback:t.jsx(e1,{}),children:e(u8)}),t.jsxs(Yl,{when:r,children:[t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsx(Md,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]})]})}function m8(){return t.jsx(qn,{renderArticle:n=>t.jsx(d8,{components:{code:n}})})}function Rp(n){const e={code:"code",h3:"h3",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:"FormData 使用详解"}),`
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
`,t.jsx(e.p,{children:"OK，简单了解了 FormData 的常用方式之后，有了这个基础，我们再来学习 react 中的 form action."})]})}function p8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Rp,{...n})}):Rp(n)}function h8(){return t.jsx(qn,{renderArticle:n=>t.jsx(p8,{components:{code:n}})})}function f8(){function n(e){const s=e.get("fname"),r=e.get("lname");alert(`输入内容：FirstName: ${s}, LastName: ${r}`)}return t.jsxs("form",{action:n,className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"First name: "}),t.jsx("input",{type:"text",defaultValue:"Jake",name:"fname"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"Last name: "}),t.jsx("input",{type:"text",defaultValue:"Ma",name:"lname"})]}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"提交"})})]})}function E1(){for(var n=[],e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=0;s<16;s++)n[s]=e.substr(Math.floor(Math.random()*16),1);return n[8]="-",n.join("")}function x8(n){const{ref:e,onChange:s}=n;function r(a){const l={id:E1(),name:a.get("name"),desc:a.get("desc"),hours:a.get("hours"),rate:a.get("rate"),price:a.get("price")};e.current.close(),s&&s(l)}return t.jsx(xr,{ref:e,footer:!0,children:t.jsxs("form",{action:r,children:[t.jsx(Tn,{label:"Name",name:"name",placeholder:"Plase input your project name.",required:!0}),t.jsx(Tn,{label:"Desc",name:"desc",placeholder:"please input your project description.",required:!0}),t.jsx(Tn,{label:"Hours",name:"hours",type:"number",placeholder:"please input hours.",required:!0}),t.jsx(Tn,{label:"Rate",name:"rate",type:"number",placeholder:"please input rate.",required:!0}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"Submit"})})]})})}function g8(){const n=m.useRef(null),[e,s]=m.useState([{id:E1(),name:"Logo redesign",desc:"New logo and digital asset playbook.",hours:"20.0",rate:"100.00"}]);function r(l){s([...e,l])}const a=e.reduce((l,i)=>l+i.hours*i.rate,0);return t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold leading-6 text-gray-900",children:"Invoice"}),t.jsxs("p",{className:"mt-2 text-sm text-gray-700",children:["For work completed from ",t.jsx("time",{dateTime:"2022-08-01",children:"August 1, 2022"})," to"," ",t.jsx("time",{dateTime:"2022-08-31",children:"August 31, 2022"}),"."]})]}),t.jsx("div",{className:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:t.jsx("button",{className:"primary",onClick:()=>n.current.show(),children:"Add"})})]}),t.jsx(x8,{ref:n,onChange:r}),t.jsx("div",{className:"-mx-4 mt-8 flow-root sm:mx-0",children:t.jsxs("table",{className:"min-w-full",children:[t.jsxs("colgroup",{children:[t.jsx("col",{className:"w-full sm:w-1/2"}),t.jsx("col",{className:"sm:w-1/6"}),t.jsx("col",{className:"sm:w-1/6"}),t.jsx("col",{className:"sm:w-1/6"})]}),t.jsx("thead",{className:"border-b border-gray-300 text-gray-900",children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Project"}),t.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Hours"}),t.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Rate"}),t.jsx("th",{scope:"col",className:"py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:"Price"})]})}),t.jsx("tbody",{children:e.map(l=>t.jsxs("tr",{className:"border-b border-gray-200",children:[t.jsxs("td",{className:"max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0",children:[t.jsx("div",{className:"font-medium text-gray-900",children:l.name}),t.jsx("div",{className:"mt-1 truncate text-gray-500",children:l.desc})]}),t.jsx("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:l.hours}),t.jsxs("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:["$",l.rate]}),t.jsxs("td",{className:"py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0",children:["$",l.hours*l.rate]})]},l.id))}),t.jsxs("tfoot",{children:[t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Subtotal"}),t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Subtotal"}),t.jsxs("td",{className:"pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0",children:["$",a]})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Tax"}),t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Tax"}),t.jsx("td",{className:"pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0",children:"$1760.00"})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0",children:"Total"}),t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden",children:"Total"}),t.jsxs("td",{className:"pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:["$",a-1760]})]})]})]})})]})}const j8=`import Dialog from 'components/Dialog/index.jsx'
import Input from "components/Input/index.jsx";
import getUuid from "utils/uuid.js";

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
}
`,v8=`import { useState, useRef } from 'react'
import Modal from './Modal.jsx'
import getUuid from "utils/uuid.js";


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
}
`;function Mp(n){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"React 19 在表单上提供了更多充满想象空间的 API，它们用好了非常爽，不过一个麻烦的事情是如果你通过自学，想要透彻理解并找到最佳实践可能会非常困难。"}),`
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
`,t.jsx(_,{children:t.jsx(f8,{})}),`
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
`,t.jsx(_,{children:t.jsx(g8,{})}),`
`,t.jsxs(e.p,{children:["在这个案例中，我们提供了一个 ",t.jsx(e.code,{children:"Add"})," 按钮，点击该按钮之后，会出现一个弹窗。在弹窗中，我们可以输入每一条信息。输入完成之后，点击提交，输入的信息就会展示在列表中。"]}),`
`,t.jsx(e.p,{children:"完整代码如下"}),`
`,t.jsx(kn,{files:{"index.jsx":v8,"Modal.jsx":j8}})]})}function b8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Mp,{...n})}):Mp(n)}function y8(){return t.jsx(qn,{renderArticle:n=>t.jsx(b8,{components:{code:n}})})}async function T1(n){const e=n.get("title"),s=n.get("content");if(!e||!s)return alert("Miss");await new Promise(r=>setTimeout(r,1e3)),alert(`Title: ${e}, Content: ${s}`)}function N8(){return t.jsxs("form",{action:T1,children:[t.jsx(Tn,{label:"Title",name:"title"}),t.jsx(Tn,{label:"content",name:"content"}),t.jsx(L,{children:"Submit"})]})}function w8({children:n}){const{pending:e}=xa.useFormStatus();return t.jsx(L,{primary:!0,disabled:e,children:e?"loading...":n})}function $p(){return t.jsxs("form",{action:T1,children:[t.jsx(Tn,{label:"Title",name:"title"}),t.jsx(Tn,{label:"content",name:"content"}),t.jsx(w8,{children:"Submit"})]})}const pc=`export async function formAction(fd) {
  const title = fd.get('title')
  const content = fd.get('content')
  if (!title || !content) {
    return alert('Miss')
  }
  await new Promise(resolve => setTimeout(resolve, 1000))
  alert(\`Title: \${title}, Content: \${content}\`)
}
`,S8=`import Input from 'components/Input/index.jsx'
import Button from 'components/Button/index.jsx'
import {formAction} from './actions.js'

export default function Demo01() {
  return (
    <form action={formAction}>
      <Input label='Title' name='title' />
      <Input label='content' name='content' />
      <Button>Submit</Button>
    </form>
  )
}
`,Lp=`import Input from 'components/Input/index.jsx'
import {formAction} from './actions.js'
import SubmitButton from './SubmitButton.jsx'

export default function Demo01() {
  return (
    <form action={formAction}>
      <Input label='Title' name='title' />
      <Input label='content' name='content' />
      <SubmitButton>Submit</SubmitButton>
    </form>
  )
}
`,Ep=`import {useFormStatus} from 'react-dom'
import Button from "components/Button/index.jsx";

export default function SubmitButton({children}) {
  const {pending} = useFormStatus()
  return (
    <Button primary disabled={pending}>
      {pending ? 'loading...' : children}
    </Button>
  )
}
`,k8=`import {useState} from 'react'
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
`;function Tp(n){const e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注：由于 FormAction 在 next.js 中的表现暂时还不稳定，因此，本文以及后续文章的探讨全部都是基于他们在客户端的交互与表现"}),`
`]}),`
`,t.jsx(_,{children:t.jsx(N8,{})}),`
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
`,t.jsx(kn,{files:{Demo01:S8,"actions.js":pc},auth:!0}),`
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
`,t.jsx(_,{children:t.jsx($p,{})}),`
`,t.jsxs(e.p,{children:["这里主要是针对提交按钮做的操作，因此我们需要单独将提交按钮相关的部分拿出来封装成为一个子组件，并在子组件中利用 ",t.jsx(e.code,{children:"useFormStatus"})," 获取异步 action 的 pending 状态。"]}),`
`,t.jsx(e.p,{children:"代码非常的简单，如下所示"}),`
`,t.jsx(kn,{files:{Demo02:Lp,SubmitButton:Ep,"actions.js":pc},active:"1",auth:!0}),`
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
`,t.jsx(_,{children:t.jsx($p,{})}),`
`,t.jsx(kn,{files:{Demo03:Lp,Input:k8,SubmitButton:Ep,"actions.js":pc},active:"1",auth:!0}),`
`,t.jsx(e.h2,{children:"5"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"总结"})}),`
`,t.jsx(e.p,{children:"useFormStatus 是结合 action 异步请求时使用的 hook，它们是对 HTML 表单能力的增强。因此我们可以借助他们与 HTML 表单元素自身支持的特性实现更复杂的表单交互逻辑。"}),`
`,t.jsxs(e.p,{children:["这里我们需要注意的是 action 与 onSubmit 的区别。onSubmit 会优先于 action 执行。并且，如果我们在 onSubmit 的回调函数中，使用了 ",t.jsx(e.code,{children:"preventDefault"}),"，action 回调将不会执行"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function onSubmit(e) {
  e.preventDefault()
  // ...
}
`})}),`
`,t.jsx(e.p,{children:"在 onSubmit 中，我们可以结合 state，通过控制数据的行为来自定义表单行为，而无需过多依赖 HTML 表单元素本身的能力。具体如何抉择大家需要根据自身项目的需求情况来定。"})]})}function C8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Tp,{...n})}):Tp(n)}function _8(){return t.jsx(qn,{renderArticle:n=>t.jsx(C8,{components:{code:n}})})}async function A8(n){return n+1}function R8(){const[n,e]=m.useActionState(A8,0);return t.jsxs("form",{action:e,className:"flex items-center",children:[t.jsx("button",{children:"count++"}),t.jsx("div",{className:"ml-4",children:n})]})}function M8({cart:n=[]}){return t.jsx("div",{children:n.map((e,s)=>t.jsxs("div",{className:"border border-yellow-400 p-4 rounded my-4",children:[t.jsxs("div",{className:"font-bold",children:["title: ",e.title]}),t.jsxs("div",{children:["id: ",e.id]}),t.jsxs("div",{children:["count: ",e.count||0]})]},`cart_${s}`))})}async function $8(n,e,s){const r=e.get("id"),a=e.get("title");return await new Promise(l=>{setTimeout(()=>{s({id:r,title:a,count:n+1}),l()},300)}),n+1}function L8({children:n}){const{pending:e}=xa.useFormStatus();return t.jsxs(L,{primary:!0,disabled:e,children:[n,e?"...":""]})}function Dp({id:n,title:e,onSubmit:s}){const[r,a]=m.useActionState((l,i)=>$8(l,i,s),0);return t.jsxs("form",{action:a,className:"border p-4 my-3 rounded",children:[t.jsxs("h1",{className:"!my-2",children:["book name: ",e]}),t.jsx("input",{type:"hidden",name:"title",value:e}),t.jsx("input",{type:"hidden",name:"id",value:n}),t.jsxs("div",{style:{marginBottom:"20px"},children:["cart count: ",r]}),t.jsx(L8,{children:"ADD TO CART"})]})}function E8(){const[n,e]=m.useState([]);function s(r){const a=n.find(l=>l.id===r.id);if(a)return a.count+=1,e([...n]);e(l=>[...l,r])}return t.jsxs("div",{children:[t.jsx(Dp,{id:"001",title:"JavaScript Core advance",onSubmit:s}),t.jsx(Dp,{id:"002",title:"React19 all solution",onSubmit:s}),t.jsx(M8,{cart:n})]})}const T8=`export async function submit(cur, formData, onSubmit) {
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
`,D8=`import { useState } from 'react'

import List from './List.jsx'
import BookItem from './BookItem.jsx'

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
`,O8=`import {useFormStatus} from 'react-dom'
import Button from "components/Button/index.jsx";

export default function SubmitButton({children}) {
  const {pending} = useFormStatus()
  return (
    <Button primary disabled={pending}>
      {children}{pending ? '...' : ''}
    </Button>
  )
}
`,B8=`import {useActionState} from 'react'
import {submit} from './actions.js'
import SubmitButton from './SubmitButton.jsx'

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
`,z8=`function CartList({cart = []}) {
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
`;function Op(n){const e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注：由于 FormAction 在 next.js 中的表现暂时还不稳定，因此，本文以及后续文章的探讨全部都是基于他们在客户端的交互与表现"}),`
`]}),`
`,t.jsx(_,{children:t.jsx(R8,{})}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(E8,{})}),`
`,t.jsx(kn,{files:{Demo02:D8,BookItem:B8,"actions.js":T8,SubmitButton:O8,List:z8},auth:!0}),`
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
`})})]})}function U8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Op,{...n})}):Op(n)}function H8(){return t.jsx(qn,{renderArticle:n=>t.jsx(U8,{components:{code:n}})})}const q8=`import { useOptimistic, useState, useRef } from "react";
import { getMessage } from "./api.js";
import {reducer} from './reducer.js'

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

`,V8=`const random = [
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
`,X8=`export function reducer(state, newMessage) {
  let newItem = {
    text: newMessage,
    sending: true
  }
  return [...state, newItem]
}`;var D1=new Headers;D1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var Z8={method:"GET",headers:D1,redirect:"follow",data:"hex"};const G8="https://echo.apifox.com/delay/1",Y8=async n=>(await fetch(G8,Z8),n);function F8(n,e){let s={text:e,sending:!0};return[...n,s]}function yo(){const[n,e]=m.useState([]),[s,r]=m.useOptimistic(n,F8),a=m.useRef(null);async function l(i){let c=i.get("message");r(c),a.current.reset();let o=await Y8(c);e([...n,{text:o}])}return t.jsxs(t.Fragment,{children:[t.jsxs("form",{action:l,ref:a,className:"flex",children:[t.jsx("input",{type:"text",name:"message",placeholder:"enter your message"}),t.jsx("button",{type:"submit",className:"ml-2",children:"Send"})]}),s.map((i,c)=>t.jsxs("div",{className:"indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded",children:[i.text," ",!!i.sending&&t.jsx("small",{children:" (Sending...)"})]},c))]})}function Bp(n){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:t.jsx(e.strong,{children:"useOptimistic"})}),`
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
`,t.jsx(_,{children:t.jsx(yo,{})}),`
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
`,t.jsx(_,{children:t.jsx(yo,{})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"reset() 用于立即重置表单内容，可进行下一次输入。默认行为是接口请求成功之后才会重置"}),`
`]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"问题"}),`
`,t.jsxs(e.p,{children:["尝试一下快速连续输入内容并 ",t.jsx(e.code,{children:"Send"}),"，我们会发现，最终的效果并非我们所愿，此时会有多条内容同时正在 ",t.jsx(e.code,{children:"Sending"}),"，但是最终请求成功之后，这些同时的 ",t.jsx(e.code,{children:"Sending"})," 内容仅有一条信息被合并到最终结果中，其他的内容会消失。那么在此基础之上，我们需要如何来解决这个问题呢？下一章我们继续学习。"]})]})}function P8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Bp,{...n})}):Bp(n)}const I8={"App.js":q8,"api.js":V8,"reducer.js":X8};function Q8(){return t.jsx(z,{files:I8,renderArticle:n=>t.jsx(P8,{components:{code:n}}),caseRender:t.jsx(yo,{})})}const W8=`import { useOptimistic, useState, useRef, useTransition } from "react";
import { getMessage } from "./api.js";
import {reducer} from './reducer.js'

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

`,J8=`const random = [
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
`,K8=`export function reducer(state, newMessage) {
  let newItem = {
    text: newMessage,
    sending: true
  }
  return [...state, newItem]
}`;var O1=new Headers;O1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var e9={method:"GET",headers:O1,redirect:"follow",data:"hex"};const n9="https://echo.apifox.com/delay/1",t9=async n=>(await fetch(n9,e9),n);function s9(n,e){let s={text:e,sending:!0};return[...n,s]}function B1(){const[n,e]=m.useState([]),[s,r]=m.useOptimistic(n,s9),[a,l]=m.useTransition(),i=m.useRef(null);async function c(o){let d=o.get("message");i.current.reset(),l(async()=>{r(d);let u=await t9(d);e([...n,{text:u}])})}return t.jsxs(t.Fragment,{children:[t.jsxs("form",{action:c,ref:i,className:"flex",children:[t.jsx("input",{type:"text",name:"message",placeholder:"enter your message",disabled:a}),t.jsx("button",{type:"submit",className:"ml-2",disabled:a,children:"Send"})]}),s.map((o,d)=>t.jsxs("div",{className:"indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded",children:[o.text," ",!!o.sending&&t.jsx("small",{children:" (Sending...)"})]},d))]})}function zp(n){const e={code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:"案例二：结合 useTransition"}),`
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
`,t.jsx(_,{children:t.jsx(B1,{})}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{children:"问题"}),`
`,t.jsxs(e.p,{children:["很明显，这并不是最合理的交互方案。我们期望的是，",t.jsx(e.strong,{children:"连续输入依然能够发生"}),"，在这个基础之上我们可以控制好数据的合并逻辑，那么借助 react 19 的机制，我们可以如何实现呢？"]})]})}function r9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(zp,{...n})}):zp(n)}const a9={"App.js":W8,"api.js":J8,"reducer.js":K8};function l9(){return t.jsx(z,{files:a9,renderArticle:n=>t.jsx(r9,{components:{code:n}}),caseRender:t.jsx(B1,{})})}const i9=`import { useState, useRef, use, Suspense } from "react";
import { getMessage } from "./api.js";

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
}
`,c9=`const random = [
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
`;var z1=new Headers;z1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var o9={method:"GET",headers:z1,redirect:"follow",data:"hex"};const d9="https://echo.apifox.com/delay/1",u9=async n=>(await fetch(d9,o9),n);function U1(){const[n,e]=m.useState([]),s=m.useRef(null);function r(a){let l=a.get("message");s.current.reset();let i={newMessage:l,promise:u9(l)};e(c=>[...c,i])}return t.jsxs(t.Fragment,{children:[t.jsxs("form",{action:r,ref:s,className:"flex",children:[t.jsx("input",{type:"text",name:"message",placeholder:"enter your message"}),t.jsx("button",{type:"submit",className:"ml-2",children:"Send"})]}),n.map((a,l)=>t.jsx(m.Suspense,{fallback:t.jsxs(H1,{children:[a.newMessage,"(Seding...)"]}),children:t.jsx(m9,{promise:a.promise})},`h-${l}`))]})}function H1({children:n}){return t.jsx("div",{className:"indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded",children:n})}function m9(n){const e=m.use(n.promise);return t.jsx(H1,{children:e})}function Up(n){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:t.jsx(e.strong,{children:"解决上一章的问题"})}),`
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
`,t.jsx(_,{children:t.jsx(U1,{})}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"剩下一个需求，是请求失败展示错误或者重试，留一个小挑战，大家可以自行扩展一下"}),`
`]})]})}function p9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Up,{...n})}):Up(n)}const h9={"App.js":i9,"api.js":c9};function f9(){return t.jsx(z,{files:h9,renderArticle:n=>t.jsx(p9,{components:{code:n}}),caseRender:t.jsx(U1,{})})}const x9=`import { useOptimistic, useState, useTransition } from "react";
import {reducer} from './reducer.js'
import { likeApi } from "./api.js";
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

`,g9=`export async function likeApi(message) {
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
`,j9=`export function reducer(state, newState) {
  return newState
}
`,v9=`.star {
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
`;function b9(n,e){return e}async function y9(n){return await new Promise((e,s)=>{setTimeout(()=>{Math.random()>.1?e(n):s(n)},1e3)}),n}const N9="_star_1fvk4_1",w9="_cen_1fvk4_8",S9="_active_1fvk4_13",k9="_aj_1fvk4_1",C9="_lef_1fvk4_1",_9="_c_1fvk4_8",A9="_rig_1fvk4_1",R9="_loading_1fvk4_37",ft={star:N9,cen:w9,active:S9,aj:k9,lef:C9,c:_9,rig:A9,loading:R9};function M9(){const[n,e]=m.useState(!1),[s,r]=m.useOptimistic(n,b9),[a,l]=m.useTransition(),[i,c]=m.useState();function o(){if(a)return;let u=!n;l(async()=>{r(u);try{let p=await y9(u);e(p),c(!0)}catch{c(!1)}})}let d=s?`${ft.cen} ${ft.active}`:ft.cen;return t.jsxs("div",{children:[t.jsxs("div",{className:ft.star,onClick:o,children:[t.jsx("div",{id:ft.lef,className:d}),t.jsx("div",{id:ft.c,className:d}),t.jsx("div",{id:ft.rig,className:d})]}),t.jsxs("div",{className:ft.loading,children:["状态：",a&&"请求中...",!a&&i===!0&&"请求成功",!a&&i===!1&&"请求失败"]})]})}function Hp(n){const e={code:"code",h3:"h3",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:"一个复杂的案例"}),`
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
`,t.jsx(e.p,{children:"由于逻辑与之前几乎保持一致，因此本案例主要通过代码学习，未做详细讲解，完整代码如右侧所示。"})]})}function $9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Hp,{...n})}):Hp(n)}const L9={"App.js":x9,"api.js":g9,"reducer.js":j9,"index.module.css":v9};function E9(){return t.jsx(z,{files:L9,renderArticle:n=>t.jsx($9,{components:{code:n}}),caseRender:t.jsx(M9,{})})}function qp(n){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:"完结感言"}),`
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
`,t.jsx(_,{children:t.jsx(kn,{files:{App:f1,"api.js":x1,List:j1,Tabs:v1,Skeleton:g1},caseRender:t.jsx(y1,{}),auth:!0})}),`
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
`,t.jsx(_,{children:t.jsx(d1,{})}),`
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
`]})]})}function T9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(qp,{...n})}):qp(n)}function D9(){return t.jsx(qn,{isAuth:!1,renderArticle:n=>t.jsx(T9,{components:{code:n}})})}const q1=[{type:"tip",name:"前言"},{path:"index",name:"1、开发方式变革",component:p3},{path:"layers",name:"2、学习的三个层次",component:C3},{path:"create",name:"3、创建项目",component:T3},{type:"tip",name:"use(promise)"},{path:"use/base",name:"4、use 基础知识",component:J3},{path:"use/suspense",name:"5、Suspense",component:xy},{path:"use/update",name:"6、点击更新数据",component:Ey},{path:"use/initialize",name:"7、初始化请求并更新",component:Py},{path:"use/updatetolist",name:"8、请求并新增到列表",component:d7},{path:"use/loadmore",name:"9、分页列表加载更多",component:S7},{path:"use/search",name:"10、搜索",component:O7},{path:"use/tabs",name:"11、tab 简单切换",component:X7,label:"1"},{path:"use/tabshard",name:"12、tab 缓存切换",component:a6,label:"2"},{path:"use/fromchildren",name:"13、父级获取数据",component:j6,label:"3"},{path:"use/nest",name:"14、Suspense 嵌套",component:R6},{path:"use/react16",name:"15、在低版本中使用",component:H6},{type:"tip",name:"use(context)"},{path:"use/ref",name:"16、ref 调整",component:tN},{path:"use/modal",name:"17、自定义弹窗组件",component:oN},{path:"use/contextmodify",name:"18、弹窗中更改内容",component:bN},{path:"use/skinswitch",name:"19、皮肤切换次数",component:$N},{type:"tip",name:"并发 API"},{path:"use/deferred",name:"20、useDeferredValue",component:PN},{path:"use/transition",name:"21、useTransition",component:pw},{type:"tip",name:"Compiler"},{path:"use/importwith19",name:"22、React 19 中引入",component:gw},{path:"use/importwithlower",name:"23、低版本中引入",component:Nw},{path:"use/importwithwebpack",name:"24、webpack中引入",component:_w},{path:"use/compilerbase",name:"25、Compiler 编译原理",component:Ew},{path:"use/compilercount",name:"26、收益分析-递增",component:Uw},{path:"use/compilerexpensive",name:"27、收益分析-耗时子组件",component:Yw},{path:"use/compilertabs",name:"28、收益分析-tabs",component:c8},{type:"tip",name:"form action"},{path:"formaction/base",name:"29、form 基础",component:m8},{path:"formaction/formdata",name:"30、FormData 基础",component:h8},{path:"formaction/action",name:"31、form action",component:y8},{path:"formaction/useformstatus",name:"32、useFormStatus",component:_8},{path:"formaction/useactionstate",name:"33、useActionState",component:H8},{path:"formaction/useoptimistic",name:"34、useOptimistic",component:Q8,label:"1"},{path:"formaction/useoptimistic2",name:"35、useOptimistic",component:l9,label:"2"},{path:"formaction/useoptimistic3",name:"36、useOptimistic",component:f9,label:"3"},{path:"formaction/useoptimistic4",name:"37、复杂案例",component:E9,label:"4"},{type:"tip",name:"后续闲谈"},{path:"formaction/end",name:"38、完结感言",component:D9}];function Vp(){return t.jsx("div",{children:q1.map((n,e)=>n.type==="tip"?t.jsx("div",{className:"mx-2 text-sm px-4 text-gray-400 first:pt-0 pb-4 pt-8",children:n.name},`z-${e}`):t.jsx(wn,{className:"text-gray-700",activeName:"text-blue-700",to:n.path,children:t.jsxs("li",{className:"mx-2 px-4 py-3 transition hover:bg-blue-100 text-sm flex items-center justify-between hover:text-blue-700 rounded",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})}),t.jsx("div",{className:"ml-2 line-clamp-1",children:n.name})]}),n.label?t.jsx($d,{label:n.label,primary:!0,className:"ml-2"}):null]},n.path)},n.path))})}function O9(){const n=pi(),e=m.useRef(new Map),s=hi(),{pathname:r}=Xt();m.useReducer(l=>!l)[1];const a=m.useRef(null);return e.current.has(r)||e.current.set(r,s),m.useEffect(()=>{location.pathname==="/tutorial"&&n("index")},[r]),t.jsxs("div",{className:"pt-16 md:flex",children:[t.jsx(L,{signal:!0,className:"fixed bottom-6 right-6 z-40 md:hidden",onClick:()=>a.current.show(),children:"目录"}),t.jsx(Ra,{ref:a,onClose:()=>a.current.close(),children:t.jsx("div",{className:"bg-white h-full py-4 overflow-scroll",children:t.jsx(Vp,{})})}),t.jsxs("nav",{className:"hidden md:block w-60 sticky top-16 h-[calc(100vh_-_5rem)] overflow-y-auto bg-hei",children:[t.jsxs("div",{className:"flex items-center px-4 py-8",children:[t.jsx("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-cyan-500",children:t.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})})}),t.jsxs("div",{className:"text-sm",children:[t.jsx("div",{children:"当前版本"}),t.jsx("div",{className:"text-gray-500",children:"React@19.0.0"})]})]}),t.jsx("ul",{className:"border-r h-[calc(100vh_-_9rem_-_35px)] overflow-y-auto pb-8",children:t.jsx(Vp,{})})]}),t.jsx("div",{className:"md:flex-1 md:w-[calc(100vw_-_15rem)] p-4 md:p-8 min-h-[calc(100vh_-_5rem)] box-border",children:Array.from(e.current).map(([l,i])=>t.jsx("div",{style:{display:r===l?"block":"none"},children:i},l))})]})}function ie(n){const{children:e,start:s,end:r,around:a,between:l,className:i,center:c,col:o,...d}=n,p=U("flex items-center flex-row",{"flex-col":o,"justify-start":s,"justify-end":r,"justify-around":a,"justify-between":l,"justify-center":c},i);return t.jsx(B9,{className:He(p),...d,children:e})}function B9(n){const{className:e,children:s,...r}=n;let a="",l="",i="";Object.keys(r).forEach(o=>{o.indexOf("bg-")===0&&(a+=`${o} `),o.indexOf("border-")===0&&(l+=` ${o} `),o.indexOf("rounded-")===0&&(i+=` ${o} `)});const c=U(a,l,i,e);return t.jsx("div",{className:He(c),...r,children:s})}function Xp(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"基础使用"}),`
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
`,t.jsx(kn,{files:{"index.jsx":Ma},auth:!0})]})}function z9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Xp,{...n})}):Xp(n)}function U9(){return t.jsx(qn,{renderArticle:n=>t.jsx(z9,{components:{code:n}}),isGiscus:!1})}function Zp(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"Input 基础使用"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Input placeholder="请输入任意内容" />
`})}),`
`,t.jsx(_,{children:t.jsx(Tn,{placeholder:"请输入任意内容"})})]})}function H9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Zp,{...n})}):Zp(n)}function q9(){return t.jsx(qn,{renderArticle:n=>t.jsx(H9,{components:{code:n}}),isGiscus:!1})}function $a(n){return n.type==="card"?t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsx("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3].map((e,s)=>t.jsxs("div",{className:"flex-1",children:[t.jsx("div",{className:"rounded-md bg-slate-200  h-32"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"grid grid-cols-4 gap-4 mt-2",children:t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-3"})})]},`z-${s}`))})}):n.type==="header"?t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})}):t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function Gp(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"基础使用"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`<Skeleton />
`})}),`
`,t.jsx($a,{})]})}function V9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Gp,{...n})}):Gp(n)}function X9(){return t.jsx(qn,{renderArticle:n=>t.jsx(V9,{components:{code:n}}),isGiscus:!1})}function fl(n){const{total:s=8,current:r=1,onChange:a}=n,l=m.useRef(Math.ceil(r/8)),i=m.useRef(r),[c,o]=m.useState((r-1)%8),d=[],u=l.current===Math.ceil(s/8)?s%8===0?8:s%8:8;for(let v=0;v<u;v++)d.push(8*(l.current-1)+v+1);const p="border border-blue-600";function h(v){o(v),i.current=8*(l.current-1)+v+1,a&&a(i.current)}function j(){let v=c+1;i.current+=1,v>=8&&(v=0,l.current+=1),o(v),a&&a(i.current)}function y(){let v=c-1;i.current-=1,v<0&&(v=7,l.current-=1),o(v),a&&a(i.current)}const b=i.current===1,w=i.current===s,x="flex items-center justify-center",f=U(x,{"cursor-not-allowed":b}),g=U(x,{"cursor-not-allowed":w});return t.jsxs("div",{className:"flex space-x-2",children:[t.jsx(L,{disabled:b,rect:!0,className:f,onClick:y,children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"})})}),d.map((v,S)=>t.jsx(L,{onClick:()=>h(S),ghost:!0,rect:!0,className:U("w-10",{[p]:c===S}),children:v},v)),t.jsx(L,{disabled:w,rect:!0,className:g,onClick:j,children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})})})]})}function Yp(n){const e={code:"code",h3:"h3",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:"Pagination"}),`
`,t.jsx(e.p,{children:"默认用法"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`<Pagination />
`})}),`
`,t.jsx(_,{children:t.jsx(fl,{})}),`
`,t.jsx(e.p,{children:"传入参数"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`<Pagination total={22} current={18} />
`})}),`
`,t.jsx(_,{children:t.jsx(fl,{total:22,current:18})}),`
`,t.jsx(e.p,{children:"onChange 事件获取 current"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`<Pagination total={22} current={18} onChange={(i) => {console.log(i)}} />
`})}),`
`,t.jsx(_,{reload:!0,children:t.jsx(fl,{total:22,current:18,onChange:s=>{console.log(s)}})})]})}function Z9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Yp,{...n})}):Yp(n)}function G9(){return t.jsx(qn,{renderArticle:n=>t.jsx(Z9,{components:{code:n}}),isGiscus:!1})}const V1=[{type:"tip",name:"基础组件"},{path:"button",name:"1、按钮 Button",component:U9},{path:"input",name:"2、输入框 Input",component:q9},{path:"skeleton",name:"2、骨架屏 Skeleton",component:X9},{path:"pagination",name:"3、分页器 Pagination",component:G9}];function Y9(){const n=pi(),e=m.useRef(new Map),s=hi(),{pathname:r}=Xt(),a=m.useReducer(l=>!l)[1];return e.current.has(r)||e.current.set(r,s),m.useEffect(()=>{location.pathname==="/component"&&n("button")},[r]),t.jsxs("div",{className:"pt-16 flex",children:[t.jsxs("nav",{className:"hidden md:block w-60 sticky top-16 h-[calc(100vh_-_5rem)] overflow-y-auto bg-hei",children:[t.jsxs("div",{className:"flex items-center px-4 py-8",children:[t.jsx("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-cyan-500",children:t.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})})}),t.jsxs("div",{className:"text-sm",children:[t.jsx("div",{children:"当前版本"}),t.jsx("div",{className:"text-gray-500",children:"React@19.0.0"})]})]}),t.jsx("ul",{className:"border-r h-[calc(100vh_-_9rem_-_35px)] overflow-y-auto pb-8",children:V1.map((l,i)=>l.type==="tip"?t.jsx("div",{className:"mx-2 text-sm px-4 text-gray-400 first:pt-0 pb-4 pt-8",children:l.name},`z-${i}`):t.jsx(wn,{className:"text-gray-700",activeName:"text-blue-700",to:l.path,onClick:a,children:t.jsxs("li",{className:"mx-2 px-4 py-3 transition hover:bg-blue-100 text-sm flex items-center justify-between hover:text-blue-700 rounded",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})}),t.jsx("div",{className:"ml-2 line-clamp-1",children:l.name})]}),l.label?t.jsx($d,{label:l.label,primary:!0,className:"ml-2"}):null]},l.path)},l.path))})]}),t.jsx("div",{className:"w-full md:w-[calc(100vw_-_15rem)] p-8 min-h-[calc(100vh_-_5rem)] box-border",children:Array.from(e.current).map(([l,i])=>t.jsx("div",{style:{display:r===l?"block":"none"},children:i},l))})]})}const F9=`import {useState, Suspense} from 'react'
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
`,P9=`export const fetchList = async (number) => {
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
`,I9=`document.documentElement.style.fontSize = '14px'

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
`,Q9=`import { use } from 'react';
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
`,W9=`export default function Input(props) {
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
`;function Fp(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:["从这一章开始，我们将要进入体系化的",t.jsx(e.strong,{children:"架构层面"}),"的学习。"]}),`
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
`,t.jsx(e.p,{children:"说明你已经达到了举一反三、化繁为简的学习效果。"})]})}function J9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Fp,{...n})}):Fp(n)}const K9={"App.js":F9,"api.js":P9,"List.jsx":Q9,"Input.jsx":W9,"Skeleton.jsx":I9};function eS(){return t.jsx(z,{files:K9,renderArticle:n=>t.jsx(J9,{components:{code:n}}),advance:!0})}const X1=`import {useState, Suspense} from 'react'
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
`,Z1=`export const fetchList = async (number) => {
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
`,nS=`document.documentElement.style.fontSize = '14px'

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
`,G1=`import { use } from 'react';
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
`,tS=`export default function Input(props) {
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
`;document.documentElement.style.fontSize="14px";function sS(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Pp=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function rS({promise:n}){const{results:e}=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function aS(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function lS(){const[n,e]=m.useState(()=>Pp(5));function s(r){n.cancel(),e(Pp(5))}return t.jsxs("div",{children:[t.jsx(aS,{onChange:s,placeholder:"Enter something"}),t.jsx(m.Suspense,{fallback:t.jsx(sS,{}),children:t.jsx(rS,{promise:n})})]})}function Ip(n){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(lS,{})}),`
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
`,t.jsx(kn,{files:{"index.jsx":X1,"api.js":Z1,List:G1},auth:!0}),`
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
`]})]})}function iS(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Ip,{...n})}):Ip(n)}const cS={"App.js":X1,"api.js":Z1,"List.jsx":G1,"Input.jsx":tS,"Skeleton.jsx":nS};function oS(){return t.jsx(z,{files:cS,renderArticle:n=>t.jsx(iS,{components:{code:n}}),advance:!0})}const dS=`import {useState, Suspense} from 'react'
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
`,uS=`// API 应该与服务端提供的接口文档严格保持一致
export const prevListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const nextListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}
`,mS=`document.documentElement.style.fontSize = '14px'

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
`,pS=`import { use } from 'react';
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
`,hS=`export default function Input(props) {
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
`,fS=`/**
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
`,xS=`import {prevListApi, nextListApi} from './api'

export const fetchList = async () => {
  return Promise.all([prevListApi(), nextListApi()]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
}
`;document.documentElement.style.fontSize="14px";function gS(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function jS({promise:n}){const e=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function vS(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}const bS=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),yS=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),NS=async()=>Promise.all([bS(),yS()]).then(n=>n.reduce((e,s)=>e.concat(s.results),[])),Qp=async()=>(await NS()).map((e,s)=>(e.desc=`${s}、react 19 arch, a design language for background applications`,e.name=e.name.first+" "+e.name.last,e.thumbnail=e.picture.thumbnail,e));function wS(){const[n,e]=m.useState(Qp);function s(r){n.cancel(),e(Qp())}return t.jsxs("div",{children:[t.jsx(vS,{onChange:s,placeholder:"Enter something"}),t.jsx(m.Suspense,{fallback:t.jsx(gS,{}),children:t.jsx(jS,{promise:n})})]})}function Wp(n){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(wS,{})}),`
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
`,t.jsxs(e.p,{children:["由于本项目并没有采用 ",t.jsx(e.code,{children:"TS"}),"，因此类型相关的逻辑没有额外描述。如果你有相关的疑问，可以在尊享群或者直播里跟我探讨。"]})]})}function SS(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Wp,{...n})}):Wp(n)}const kS={"App.js":dS,"controller.js":fS,"service.js":xS,"api.js":uS,"List.jsx":pS,"Input.jsx":hS,"Skeleton.jsx":mS};function CS(){return t.jsx(z,{files:kS,renderArticle:n=>t.jsx(SS,{components:{code:n}}),advance:!0})}const _S=`import {useState, Suspense} from 'react'
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

`,AS=`// API 应该与服务端提供的接口文档严格保持一致
export const prevListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const nextListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}
`,RS=`document.documentElement.style.fontSize = '14px'

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
`,MS=`import { use } from 'react';
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
`,$S=`/**
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
`,LS=`import {prevListApi, nextListApi} from './api'

export const fetchList = async () => {
  return Promise.all([prevListApi(), nextListApi()]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
}
`;document.documentElement.style.fontSize="14px";function ES(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function TS({promise:n}){const e=m.use(n);return t.jsx(ie,{between:!0,children:e.map((s,r)=>t.jsxs("div",{className:"w-[20%] rounded-2xl overflow-hidden my-4 relative",children:[t.jsx("img",{className:"w-full",src:s.large,alt:""}),t.jsx("div",{className:"flex-1 absolute bottom-0 bg-black w-full left-0 opacity-60 text-center text-white",children:s.name})]},`h${r}`))})}const DS=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),OS=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),BS=async()=>Promise.all([DS(),OS()]).then(n=>n.reduce((e,s)=>e.concat(s.results),[])),zS=async()=>(await BS()).map((e,s)=>(e.desc=`${s}、react 19 arch, a design language for background applications`,e.name=e.name.first,e.large=e.picture.large,e));function US(){const[n]=m.useState(zS);return t.jsx(m.Suspense,{fallback:t.jsx(ES,{}),children:t.jsx(TS,{promise:n})})}function Jp(n){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"学习了架构思维之后，我们也必须要重视一个问题，那就是要做到合理的拆分组件。"}),`
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
`,t.jsx(_,{reload:!0,children:t.jsx(US,{})})]})}function HS(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Jp,{...n})}):Jp(n)}const qS={"App.js":_S,"controller.js":$S,"service.js":LS,"api.js":AS,"List.jsx":MS,"Skeleton.jsx":RS};function VS(){return t.jsx(z,{files:qS,renderArticle:n=>t.jsx(HS,{components:{code:n}}),advance:!0})}const XS=`import {useState, Suspense} from 'react'
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
`,ZS=`// API 应该与服务端提供的接口文档严格保持一致
export const prevListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const nextListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}
`,GS=`document.documentElement.style.fontSize = '14px'

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
`,YS=`import { use } from 'react';
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
`,FS=`export default function Input(props) {
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
`,PS=`/**
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
`,IS=`import {prevListApi, nextListApi} from './api'

export const fetchList = async () => {
  return Promise.all([prevListApi(), nextListApi()]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
}
`;document.documentElement.style.fontSize="14px";function QS(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function WS({promise:n}){const e=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function JS(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}const KS=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),ek=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),nk=async()=>Promise.all([KS(),ek()]).then(n=>n.reduce((e,s)=>e.concat(s.results),[])),Kp=async()=>(await nk()).map((e,s)=>(e.desc=`${s}、react 19 arch, a design language for background applications`,e.name=e.name.first+" "+e.name.last,e.thumbnail=e.picture.thumbnail,e));function tk(){const[n,e]=m.useState(Kp);function s(r){n.cancel(),e(Kp())}return t.jsxs("div",{children:[t.jsx(JS,{onChange:s,placeholder:"Enter something"}),t.jsx(m.Suspense,{fallback:t.jsx(QS,{}),children:t.jsx(WS,{promise:n})})]})}function eh(n){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(tk,{})}),`
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
`,t.jsx(e.p,{children:"嵌套思维运用得好，你会发现他无处不在。例如函数中也能执行函数，div 也能成为一个父级元素，队列中可以包含队列，数组中也能包含数组。利用嵌套思维去解决这些问题，都会被你拆解得很简单。"})]})}function sk(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(eh,{...n})}):eh(n)}const rk={"App.js":XS,"controller.js":PS,"service.js":IS,"api.js":ZS,"List.jsx":YS,"Input.jsx":FS,"Skeleton.jsx":GS};function ak(){return t.jsx(z,{files:rk,renderArticle:n=>t.jsx(sk,{components:{code:n}}),advance:!0})}const lk=`import {use, useState, Suspense} from 'react'
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
`,ik=`export const fetchList = async (number) => {
  const res = await fetch(\`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}
`,ck=`import { use, Suspense, useState } from 'react';
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
`,ok=`export const fetchListWithCancel = (number) => {
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
`,dk=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json(),nh=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function uk(){const[n,e]=m.useState(()=>nh(5));function s(){n.cancel(),e(nh(5))}return t.jsxs(t.Fragment,{children:[t.jsxs(ie,{between:!0,justify:!0,className:"mt-8",children:[t.jsx("div",{className:"text-gray-400 text-sm",children:"Account users"}),t.jsx(L,{onClick:s,children:"update"})]}),t.jsx(m.Suspense,{fallback:t.jsx($a,{}),children:t.jsx(mk,{promise:n})})]})}function mk({promise:n}){const{results:e}=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function pk(){const n=dk(3);return t.jsx("div",{children:t.jsx(m.Suspense,{fallback:t.jsx($a,{type:"card"}),children:t.jsx(hk,{promise:n})})})}function hk(n){const{results:e}=m.use(n.promise);return t.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[t.jsx("div",{className:"flex space-x-4",children:e.map((s,r)=>t.jsxs("div",{className:"flex-1 overflow-hidden",children:[t.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${s.picture.large})`}}),t.jsx("div",{className:"mt-4 font-bold",children:s.name.last}),t.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:s.email})]},`z-${r}`))}),t.jsx(uk,{})]})}function th(n){const e={code:"code",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(pk,{})}),`
`,t.jsx(e.p,{children:"场景：上一个模块请求成功之后，再请求下一个模块。"}),`
`,t.jsx(e.p,{children:"该场景在之前的基础版中出现，但是我严格按照 MVC 架构重新组织了代码逻辑。主要看代码学习。"}),`
`,t.jsx(e.p,{children:"1、支持单独更新列表"}),`
`,t.jsxs(e.p,{children:["2、可快速点击 ",t.jsx(e.code,{children:"update"})," 按钮，会取消上一次请求"]})]})}function fk(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(th,{...n})}):th(n)}const xk={"App.js":lk,"api.js":ik,"List/index.jsx":ck,"List/service.js":ok};function gk(){return t.jsx(z,{files:xk,renderArticle:n=>t.jsx(fk,{components:{code:n}}),advance:!0})}const jk=`import {useState, Suspense} from 'react'
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
`,vk=`import {get} from './http'

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
`,bk=`import { use } from 'react';
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
`,yk=`/**
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
`,Nk=`import {prevListApi, nextListApi} from './api'

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
`,wk=`export function get(path, params) {
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
`;document.documentElement.style.fontSize="14px";function Sk(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function kk({promise:n}){const e=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function Ck(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function Y1(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const _k=()=>Y1("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),Ak=()=>Y1("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),Rk=()=>{const n=_k(),e=Ak(),s=Promise.all([n,e]).then(r=>r.reduce((a,l)=>a.concat(l.results),[]));return s.cancel=()=>{n.cancel(),e.cancel()},s},sh=()=>{const n=Rk();return n.then(e=>e.map((s,r)=>(s.desc=`${r}、react 19 arch, a design language for background applications`,s.name=s.name.first+" "+s.name.last,s.thumbnail=s.picture.thumbnail,s))),n};function Mk(){const[n,e]=m.useState(sh);function s(r){n.cancel(),e(sh())}return t.jsxs("div",{children:[t.jsx(Ck,{onChange:s,placeholder:"Enter something"}),t.jsx(m.Suspense,{fallback:t.jsx(Sk,{}),children:t.jsx(kk,{promise:n})})]})}function rh(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(Mk,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"组件初始化时，需要请求多个接口。此时接口不分先后顺序，只需要将返回结果按照需求组合在一起。"}),`
`,t.jsx(e.p,{children:"1、支持快速输入时，取消上一次的两次请求"})]})}function $k(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(rh,{...n})}):rh(n)}const Lk={"App.js":jk,"controller.js":yk,"service.js":Nk,"api.js":vk,"List.jsx":bk,"http.js":wk};function Ek(){return t.jsx(z,{files:Lk,renderArticle:n=>t.jsx($k,{components:{code:n}}),advance:!0})}const Tk=`import {useState, Suspense} from 'react'
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
`,Dk=`import {get} from './http'

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
`,Ok=`import { use } from 'react';
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
`,Bk=`/**
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
`,zk=`import {prevListApi, nextListApi} from './api'

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
`,Uk=`export function get(path, params) {
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
`;document.documentElement.style.fontSize="14px";function Hk(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function qk({promise:n}){const e=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function Vk(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function F1(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const Xk=()=>F1("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),Zk=()=>F1("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),Gk=()=>{const n=Xk(),e=new Promise(s=>{n.then(r=>{Zk().then(a=>{s(r.results.concat(a.results))})})});return e.cancel=n.cancel,e},ah=()=>{const n=Gk();return n.then(e=>e.map((s,r)=>(s.desc=`${r}、react 19 arch, a design language for background applications`,s.name=s.name.first+" "+s.name.last,s.thumbnail=s.picture.thumbnail,s))),n};function Yk(){const[n,e]=m.useState(ah);function s(r){n.cancel(),e(ah())}return t.jsxs("div",{children:[t.jsx(Vk,{onChange:s,placeholder:"Enter something"}),t.jsx(m.Suspense,{fallback:t.jsx(Hk,{}),children:t.jsx(qk,{promise:n})})]})}function lh(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(Yk,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"1、组件初始化时，需要请求多个接口。此时接口有先后依赖关系，上一个请求完成之后，才能请求下一个接口。"}),`
`,t.jsx(e.p,{children:"2、更新时，支持取消上一次请求"})]})}function Fk(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(lh,{...n})}):lh(n)}const Pk={"App.js":Tk,"controller.js":Bk,"service.js":zk,"api.js":Dk,"List.jsx":Ok,"http.js":Uk};function Ik(){return t.jsx(z,{files:Pk,renderArticle:n=>t.jsx(Fk,{components:{code:n}}),advance:!0})}const Qk=`import {useState, Suspense} from 'react'
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
`,Wk=`import {get} from './http'

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
`,Jk=`import { use } from 'react';
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
`,Kk=`/**
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
`,eC=`import {prevListApi} from './api'

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
`,nC=`export function get(path, params) {
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
`;document.documentElement.style.fontSize="14px";function tC(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function sC({promise:n}){const e=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function rC(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function aC(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const lC=()=>aC("https://randomuser.me/api",{results:4,inc:"name,gender,email,nat,picture&noinfo"}),iC=n=>{const e=localStorage.getItem(n);if(e){let a=new Promise(l=>{l(JSON.parse(e))});return a.cancel=()=>{},a}let s=lC(),r=s.then(a=>(localStorage.setItem(n,JSON.stringify(a.results)),a.results));return r.cancel=s.cancel,r},ih=n=>{const e=iC(n);return e.then(s=>s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.name=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r))),e};function cC(){const[n,e]=m.useState(ih);function s(r){n.cancel(),e(ih(r.target.value))}return t.jsxs("div",{children:[t.jsx(rC,{onChange:s,placeholder:"Enter something"}),t.jsx(m.Suspense,{fallback:t.jsx(tC,{}),children:t.jsx(sC,{promise:n})})]})}function ch(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(cC,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"1、根据参数缓存数据结果，如果有缓存，则获取缓存中的结果"}),`
`,t.jsx(e.p,{children:"2、如果没有缓存，则发起请求"}),`
`,t.jsx(e.p,{children:"3、支持取消，缓存时无需这段逻辑"})]})}function oC(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ch,{...n})}):ch(n)}const dC={"App.js":Qk,"controller.js":Kk,"service.js":eC,"api.js":Wk,"List.jsx":Jk,"http.js":nC};function uC(){return t.jsx(z,{files:dC,renderArticle:n=>t.jsx(oC,{components:{code:n}}),advance:!0})}const mC=`import {useState, Suspense, useRef} from 'react'
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
`,pC=`import {get} from './http'

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
`,hC=`import { use } from 'react';
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
`,fC=`/**
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
`,xC=`import {prevListApi} from './api'

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
`,gC=`export function get(path, params) {
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
`;document.documentElement.style.fontSize="14px";function jC(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function vC({promise:n}){const e=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function bC(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function yC(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const NC=n=>yC("https://randomuser.me/api",{results:n,inc:"name,gender,email,nat,picture&noinfo"}),wC=(n={})=>{const{search:e,number:s}=n;let r=`searchList:key:${e}-${s}`;const a=localStorage.getItem(r);if(a){let c=new Promise(o=>{o(JSON.parse(a))});return c.cancel=()=>{},c}let l=NC(s),i=l.then(c=>(localStorage.setItem(r,JSON.stringify(c.results)),c.results));return i.cancel=l.cancel,i},hc=n=>{const e=wC(n);return e.then(s=>s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.name=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r))),e};function SC(){const[n,e]=m.useState(hc),s=m.useRef({search:"",number:4});function r(l){n.cancel(),s.current.search=l.target.value,e(hc(s.current))}function a(l){s.current.number=l.target.value,e(hc(s.current))}return t.jsxs("div",{children:[t.jsxs(ie,{between:!0,children:[t.jsx(bC,{onChange:r,placeholder:"Enter something"}),t.jsxs(ie,{children:[t.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),t.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",onChange:a,children:[t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"}),t.jsx("option",{value:"3",children:"3"}),t.jsx("option",{value:"4",children:"4"})]})]})]}),t.jsx(m.Suspense,{fallback:t.jsx(jC,{}),children:t.jsx(vC,{promise:n})})]})}function oh(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(SC,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"1、在上一个案例的基础之上，新增更新条件，选择每一页个数时，重新请求接口"}),`
`,t.jsx(e.p,{children:"2、缓存key值调整，具体看代码"})]})}function kC(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(oh,{...n})}):oh(n)}const CC={"App.js":mC,"controller.js":fC,"service.js":xC,"api.js":pC,"List.jsx":hC,"http.js":gC};function _C(){return t.jsx(z,{files:CC,renderArticle:n=>t.jsx(kC,{components:{code:n}}),advance:!0})}const AC=`import {useState, Suspense, useEffect, useDeferredValue, useRef} from 'react'
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
      promise.clear()
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
`,RC=`import {get} from './http'

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
`,MC=`import { use } from 'react';
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
`,$C=`/**
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
`,LC=`import {prevListApi, nextListApi} from './api'

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
`,EC=`export function get(path, params) {
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
`;document.documentElement.style.fontSize="14px";function TC(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function DC({promise:n}){const e=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.fname}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function OC(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function P1(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const I1=()=>P1("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),Q1=()=>P1("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"});let rr=[],ar=[];function Gd(){rr=[],ar=[]}const BC=()=>{const n=I1(),e=Q1(),s=Promise.all([n,e]).then(r=>(rr=r[0].results,ar=r[1].results,[...rr,...ar]));return s.cancel=()=>{n.cancel(),e.cancel()},s.clear=Gd,s},zC=()=>{let n=new Promise(e=>{I1().then(s=>{rr=s.results,e([...rr,...ar])})});return n.cancel=()=>{},n.clear=Gd,n},UC=()=>{let n=new Promise(e=>{Q1().then(s=>{ar=s.results,e([...rr,...ar])})});return n.cancel=()=>{},n.clear=Gd,n},HC=n=>n==="prev"?zC():n==="next"?UC():BC(),fc=(n="")=>{const e=HC(n);return e.then(s=>s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.fname=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r))),e};function qC(){const[n,e]=m.useState(fc),s=m.useDeferredValue(n),r=m.useRef();function a(l){n.cancel(),e(fc())}return m.useEffect(()=>(r.current=setInterval(()=>{e(fc("prev"))},3e3),()=>{clearInterval(r.current),n.clear()}),[]),t.jsxs("div",{children:[t.jsx(OC,{onChange:a,placeholder:"Enter something"}),t.jsx(m.Suspense,{fallback:t.jsx(TC,{}),children:t.jsx(DC,{promise:s})})]})}function dh(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(qC,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"更新频率不一致"}),`
`,t.jsx(e.p,{children:`1、两个接口
2、搜索更新时，更新全部
3、自动更新时，仅更新第一个接口`})]})}function VC(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(dh,{...n})}):dh(n)}const XC={"App.js":AC,"controller.js":$C,"service.js":LC,"api.js":RC,"List.jsx":MC,"http.js":EC};function ZC(){return t.jsx(z,{files:XC,renderArticle:n=>t.jsx(VC,{components:{code:n}}),advance:!0})}const GC=`import {use, useState, Suspense} from 'react'
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
`,YC=`import {get} from "./http";

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
`,FC=`import { use, Suspense, useState } from 'react';
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
`,PC=`export const fetchListWithCancel = (number) => {
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
`,IC=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json(),uh=n=>{let e=new AbortController,s=e.signal;const r=new Promise(a=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{a(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function QC(){const[n,e]=m.useState(()=>uh(5));function s(){n.cancel(),e(uh(5))}return t.jsxs(t.Fragment,{children:[t.jsxs(ie,{between:!0,justify:!0,className:"mt-8",children:[t.jsx("div",{className:"text-gray-400 text-sm",children:"Account users"}),t.jsx(L,{onClick:s,children:"update"})]}),t.jsx(m.Suspense,{fallback:t.jsx($a,{}),children:t.jsx(WC,{promise:n})})]})}function WC({promise:n}){const{results:e}=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function JC(){const n=IC(3);return t.jsx("div",{children:t.jsx(m.Suspense,{fallback:t.jsx($a,{type:"card"}),children:t.jsx(KC,{promise:n})})})}function KC(n){const{results:e}=m.use(n.promise);return t.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[t.jsx("div",{className:"flex space-x-4",children:e.map((s,r)=>t.jsxs("div",{className:"flex-1 overflow-hidden",children:[t.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${s.picture.large})`}}),t.jsx("div",{className:"mt-4 font-bold",children:s.name.last}),t.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:s.email})]},`z-${r}`))}),t.jsx(QC,{})]})}function mh(n){const e={code:"code",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{reload:!0,children:t.jsx(JC,{})}),`
`,t.jsx(e.p,{children:"场景：上一个模块请求成功之后，再请求下一个模块。"}),`
`,t.jsx(e.p,{children:"该场景在之前的基础版中出现，但是我严格按照 MVC 架构重新组织了代码逻辑。主要看代码学习。"}),`
`,t.jsx(e.p,{children:"1、支持单独更新列表"}),`
`,t.jsxs(e.p,{children:["2、可快速点击 ",t.jsx(e.code,{children:"update"})," 按钮，会取消上一次请求"]})]})}function e_(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(mh,{...n})}):mh(n)}const n_={"App.js":GC,"api.js":YC,"List/index.jsx":FC,"List/service.js":PC};function t_(){return t.jsx(z,{files:n_,renderArticle:n=>t.jsx(e_,{components:{code:n}}),advance:!0})}const s_=`import {useState, Suspense, useRef} from 'react'
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
`,r_=`import {get} from './http'

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
`,a_=`import { use } from 'react';
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
`,l_=`/**
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
`,i_=`import {prevListApi} from './api'

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
`,c_=`export function get(path, params) {
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
`;document.documentElement.style.fontSize="14px";function o_(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function d_({promise:n}){const e=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function u_(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function m_(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const p_=n=>m_("https://randomuser.me/api",{results:n,inc:"name,gender,email,nat,picture&noinfo"}),h_=(n={})=>{const{search:e,number:s}=n;let r=`searchList:key:${e}-${s}`;const a=localStorage.getItem(r);if(a){let c=new Promise(o=>{o(JSON.parse(a))});return c.cancel=()=>{},c}let l=p_(s),i=l.then(c=>(localStorage.setItem(r,JSON.stringify(c.results)),c.results));return i.cancel=l.cancel,i},xc=n=>{const e=h_(n);return e.then(s=>s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.name=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r))),e};function f_(){const n=m.useRef({search:"",number:4}),[e,s]=m.useState(()=>xc(n.current));function r(l){e.cancel(),n.current.search=l.target.value,s(xc(n.current))}function a(l){n.current.number=l,s(xc(n.current))}return t.jsxs("div",{children:[t.jsxs(ie,{between:!0,children:[t.jsx(u_,{onChange:r,placeholder:"Enter something"}),t.jsx(x_,{value:"4",onChange:a})]}),t.jsx(m.Suspense,{fallback:t.jsx(o_,{}),children:t.jsx(d_,{promise:e})})]})}function x_({value:n,onChange:e}){const[s,r]=m.useState(n);function a(l){const i=l.target.value;r(i),e&&e(i)}return t.jsxs(ie,{children:[t.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),t.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",value:s,onChange:a,children:[t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"}),t.jsx("option",{value:"3",children:"3"}),t.jsx("option",{value:"4",children:"4"})]})]})}function ph(n){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(f_,{})}),`
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
`]})]})}function g_(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ph,{...n})}):ph(n)}const j_={"App.js":s_,"controller.js":l_,"service.js":i_,"api.js":r_,"List.jsx":a_,"http.js":c_};function v_(){return t.jsx(z,{files:j_,renderArticle:n=>t.jsx(g_,{components:{code:n}}),advance:!0})}const b_=`import {useState, Suspense, useRef} from 'react'
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
`,y_=`import {get} from './http'

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
`,N_=`import { use } from 'react';
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
`,w_=`/**
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
`,S_=`import {prevListApi} from './api'

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
`,k_=`export function get(path, params) {
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
`,C_=`import {useState, Suspense, useRef} from 'react'
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
`;document.documentElement.style.fontSize="14px";function __(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function A_({promise:n}){const e=m.use(n);return t.jsx("div",{children:e.map((s,r)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:s.desc})]})]},`h${r}`))})}function R_(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const M_=n=>R_("https://randomuser.me/api",{results:n,inc:"name,gender,email,nat,picture&noinfo"}),$_=(n={})=>{const{search:e,number:s}=n;let r=`searchList:key:${e}-${s}`;const a=localStorage.getItem(r);if(a){let c=new Promise(o=>{o(JSON.parse(a))});return c.cancel=()=>{},c}let l=M_(s),i=l.then(c=>(localStorage.setItem(r,JSON.stringify(c.results)),c.results));return i.cancel=l.cancel,i},hh=n=>{const e=$_(n);return e.then(s=>s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.name=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r))),e};function L_(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function E_({value:n,onChange:e}){const[s,r]=m.useState(n);function a(l){const i=l.target.value;r(i),e&&e(i)}return t.jsxs(ie,{children:[t.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),t.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",value:s,onChange:a,children:[t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"}),t.jsx("option",{value:"3",children:"3"}),t.jsx("option",{value:"4",children:"4"})]})]})}function T_({onChange:n}){function e(r){n&&n({search:r.target.value})}function s(r){n&&n({number:r})}return t.jsxs(ie,{between:!0,children:[t.jsx(L_,{onChange:e,placeholder:"Enter something"}),t.jsx(E_,{value:"4",onChange:s})]})}function D_(){const n=m.useRef({search:"",number:4}),[e,s]=m.useState(()=>hh(n.current));function r(a){e.cancel(),n.current=Object.assign(n.current,a),s(hh(n.current))}return t.jsxs("div",{children:[t.jsx(T_,{onChange:r}),t.jsx(m.Suspense,{fallback:t.jsx(__,{}),children:t.jsx(A_,{promise:e})})]})}function fh(n){const e={code:"code",h3:"h3",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(D_,{})}),`
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
`})})]})}function O_(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(fh,{...n})}):fh(n)}const B_={"App.js":b_,controller:w_,service:S_,api:y_,List:N_,http:k_,Filter:C_};function z_(){return t.jsx(z,{files:B_,renderArticle:n=>t.jsx(O_,{components:{code:n}}),advance:!0})}const U_=`import {useState, Suspense, useRef} from 'react'
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
`,H_=`import {get} from './http'

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
`,q_=`
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
          <div className='flex border p-4 items-center my-4 rounded-md flex-1'>
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
`,V_=`/**
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
`,X_=`import {prevListApi} from './api'

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
`,Z_=`export function get(path, params) {
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
`,G_=`import {useState, Suspense, useRef} from 'react'
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
`;document.documentElement.style.fontSize="14px";function Y_(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function F_({promise:n}){const e=m.use(n),[,s]=m.useReducer(i=>!i,!0);let r=m.useMemo(()=>e.map(i=>({selected:!1,...i})),[n]);function a(i,c){r[c].selected=i.target.checked,s()}const l=r.reduce((i,c)=>(c.selected&&(i+=1),i),0);return t.jsxs("div",{children:[r.map((i,c)=>t.jsxs(ie,{children:[t.jsx("input",{type:"checkbox",className:"w-5 mr-4",checked:i.selected,onChange:o=>a(o,c)}),t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md flex-1",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:i.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:i.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]})]},`h${c}`)),t.jsxs("div",{children:["选中项一共有：",l]})]})}function P_(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const I_=n=>P_("https://randomuser.me/api",{results:n,inc:"name,gender,email,nat,picture&noinfo"}),Q_=(n={})=>{const{search:e,number:s}=n;let r=`searchList:key:${e}-${s}`;const a=localStorage.getItem(r);if(a){let c=new Promise(o=>{o(JSON.parse(a))});return c.cancel=()=>{},c}let l=I_(s),i=l.then(c=>(localStorage.setItem(r,JSON.stringify(c.results)),c.results));return i.cancel=l.cancel,i},xh=n=>{const e=Q_(n);return e.then(s=>s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.name=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r))),e};function W_(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function J_({value:n,onChange:e}){const[s,r]=m.useState(n);function a(l){const i=l.target.value;r(i),e&&e(i)}return t.jsxs(ie,{children:[t.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),t.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",value:s,onChange:a,children:[t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"}),t.jsx("option",{value:"3",children:"3"}),t.jsx("option",{value:"4",children:"4"})]})]})}function K_({onChange:n}){function e(r){n&&n({search:r.target.value})}function s(r){n&&n({number:r})}return t.jsxs(ie,{between:!0,children:[t.jsx(W_,{onChange:e,placeholder:"Enter something"}),t.jsx(J_,{value:"4",onChange:s})]})}function eA(){const n=m.useRef({search:"",number:4}),[e,s]=m.useState(()=>xh(n.current));function r(a){e.cancel(),n.current=Object.assign(n.current,a),s(xh(n.current))}return t.jsxs("div",{children:[t.jsx(K_,{onChange:r}),t.jsx(m.Suspense,{fallback:t.jsx(Y_,{}),children:t.jsx(F_,{promise:e})})]})}function gh(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(eA,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"本案例在 [14、统一思考过滤条件] 的基础之上进行扩展。"}),`
`,t.jsx(e.p,{children:"当列表有单独的本地的状态需要修改时的做法如下"})]})}function nA(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(gh,{...n})}):gh(n)}const tA={"App.js":U_,controller:V_,service:X_,api:H_,List:q_,http:Z_,Filter:G_};function sA(){return t.jsx(z,{files:tA,renderArticle:n=>t.jsx(nA,{components:{code:n}}),advance:!0})}const rA=`import {useState, Suspense, useRef, useDeferredValue} from 'react'
import Skeleton from './Skeleton'
import List from './List'

import {fetchListController} from './controller'
import Filter from './Filter'

export default function Demo01() {
  const parameter = useRef({
    search: '',
    number: 4,
    current: 1
  })

  const [promise, update] = useState(() => fetchListController(parameter.current))
  const deferred = useDeferredValue(promise)

  function __filterChange(option) {
    promise.cancel()
    parameter.current = Object.assign(parameter.current, option)
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Filter onChange={__filterChange} />
      <Suspense fallback={<Skeleton/>}>
        <List promise={deferred} onChange={__filterChange} loading={deferred !== promise} />
      </Suspense>
    </div>
  )
}
`,aA=`import {get} from './http'

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
`,lA=`import { use, useReducer, useMemo } from 'react'
import Flex from 'components/Flex'
import Pagination from 'components/Pagination'

export default function CurrentList({promise, onChange, loading}) {
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

  function pageChange(index) {
    onChange && onChange({current: index})
  }

  return (
    <div className={loading ? 'opacity-70' : 'opacity-100'}>
      {list.map((item, i) => (
        <Flex key={\`h\${i}\`}>
          <input type="checkbox" className='w-5 mr-4' checked={item.selected} onChange={(e) => __radioHandler(e, i)} />
          <div className='flex border p-4 items-center my-4 rounded-md flex-1'>
            <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt=''/>
            <div className='flex-1 ml-4'>
              <div className='font-bold'>{item.name}</div>
              <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
            </div>
          </div>
        </Flex>
      ))}
      <div className='mb-4'>选中项一共有：{count}</div>
      <Pagination total={50} onChange={pageChange} />
    </div>
  )
}
`,iA=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = (parameter) => {
  const p = fetchList(parameter)

  p.then(list => {
    list.total = 100
    return list.map((item, index) => {
      item.desc = \`\${index}、react 19 arch, a design language for background applications\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      return item
    })
  })

  return p
}
`,cA=`import {prevListApi} from './api'

export const fetchList = (parameter = {}) => {
  const {number} = parameter

  let prev = prevListApi(number)

  let p1 = prev.then((res) => {
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}
`,oA=`export function get(path, params) {
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
`,dA=`import {useState, Suspense, useRef} from 'react'
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
`;document.documentElement.style.fontSize="14px";function uA(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function mA({promise:n,onChange:e,loading:s}){const r=m.use(n),[,a]=m.useReducer(d=>!d,!0);let l=m.useMemo(()=>r.map(d=>({selected:!1,...d})),[n]);function i(d,u){l[u].selected=d.target.checked,a()}const c=l.reduce((d,u)=>(u.selected&&(d+=1),d),0);function o(d){e&&e({current:d})}return t.jsxs("div",{className:s?"opacity-70":"opacity-100",children:[l.map((d,u)=>t.jsxs(ie,{children:[t.jsx("input",{type:"checkbox",className:"w-5 mr-4",checked:d.selected,onChange:p=>i(p,u)}),t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md flex-1",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:d.thumbnail,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:d.name}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:d.desc})]})]})]},`h${u}`)),t.jsxs("div",{className:"mb-4",children:["选中项一共有：",c]}),t.jsx(fl,{total:50,onChange:o})]})}function pA(n,e){let s=new AbortController,r=s.signal,a=Object.keys(e).reduce((i,c)=>`${i}${i?"&":""}${c}=${e[c]}`,"");const l=new Promise(i=>{fetch(`${n}?${a}`,{signal:r}).then(c=>{i(c.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{s&&s.abort()},l}const hA=n=>pA("https://randomuser.me/api",{results:n,inc:"name,gender,email,nat,picture&noinfo"}),fA=(n={})=>{const{number:e}=n;let s=hA(e),r=s.then(a=>a.results);return r.cancel=s.cancel,r},jh=n=>{const e=fA(n);return e.then(s=>(s.total=100,s.map((r,a)=>(r.desc=`${a}、react 19 arch, a design language for background applications`,r.name=r.name.first+" "+r.name.last,r.thumbnail=r.picture.thumbnail,r)))),e};function xA(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function gA({value:n,onChange:e}){const[s,r]=m.useState(n);function a(l){const i=l.target.value;r(i),e&&e(i)}return t.jsxs(ie,{children:[t.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),t.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",value:s,onChange:a,children:[t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"}),t.jsx("option",{value:"3",children:"3"}),t.jsx("option",{value:"4",children:"4"})]})]})}function jA({onChange:n}){function e(r){n&&n({search:r.target.value})}function s(r){n&&n({number:r})}return t.jsxs(ie,{between:!0,children:[t.jsx(xA,{onChange:e,placeholder:"Enter something"}),t.jsx(gA,{value:"4",onChange:s})]})}function vA(){const n=m.useRef({search:"",number:4,current:1}),[e,s]=m.useState(()=>jh(n.current)),r=m.useDeferredValue(e);function a(l){e.cancel(),n.current=Object.assign(n.current,l),s(jh(n.current))}return t.jsxs("div",{children:[t.jsx(jA,{onChange:a}),t.jsx(m.Suspense,{fallback:t.jsx(uA,{}),children:t.jsx(mA,{promise:r,onChange:a,loading:r!==e})})]})}function vh(n){const e={h3:"h3",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{children:t.jsx(vA,{})}),`
`,t.jsx(e.h3,{children:"场景描述"}),`
`,t.jsx(e.p,{children:"本案例在 [14、统一思考过滤条件] 的基础之上进行扩展。"}),`
`,t.jsx(e.p,{children:"当列表有单独的本地的状态需要修改时的做法如下"})]})}function bA(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(vh,{...n})}):vh(n)}const yA={"App.js":rA,controller:iA,service:cA,api:aA,List:lA,http:oA,Filter:dA};function NA(){return t.jsx(z,{files:yA,renderArticle:n=>t.jsx(bA,{components:{code:n}}),advance:!0})}const W1=[{type:"tip",name:"序"},{path:"index",name:"1、如何理解体系化",component:eS},{type:"tip",name:"理论篇"},{path:"architecture",name:"2、架构思维总览",component:oS},{path:"bff",name:"3、BFF架构思维",component:CS},{path:"split",name:"4、组件拆分原则",component:VS},{path:"nest",name:"5、解耦与嵌套",component:ak},{type:"tip",name:"实战篇"},{path:"streaming",name:"6、流式渲染",component:gk},{path:"multapi",name:"7、多个接口并行",component:Ek},{path:"deps",name:"8、多个接口前后依赖",component:Ik},{path:"cache",name:"9、数据缓存",component:uC},{path:"update",name:"10、多个更新条件",component:_C},{path:"different",name:"11、接口更新频率不一致",component:ZC},{path:"pickapi",name:"12、更新其中某个接口",component:t_},{path:"childx",name:"13、子组件数据解耦",component:v_},{path:"cfilter",name:"14、统一思考过滤条件",component:z_},{path:"lstate",name:"15、单独维护列表状态",component:sA},{path:"reduce",name:"16、分页列表",component:NA}];function bh(){return t.jsx("div",{children:W1.map((n,e)=>n.type==="tip"?t.jsx("div",{className:"mx-2 text-sm px-4 text-gray-400 first:pt-0 pb-4 pt-8",children:n.name},`z-${e}`):t.jsx(wn,{className:"text-gray-700",activeName:"text-blue-700",to:n.path,children:t.jsxs("li",{className:"mx-2 px-4 py-3 transition hover:bg-blue-100 text-sm flex items-center justify-between hover:text-blue-700 rounded",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})}),t.jsx("div",{className:"ml-2 line-clamp-1",children:n.name})]}),n.label?t.jsx($d,{label:n.label,primary:!0,className:"ml-2"}):null]},n.path)},n.path))})}function wA(){const n=pi(),e=m.useRef(new Map),s=hi(),{pathname:r}=Xt(),a=m.useRef(null);return e.current.has(r)||e.current.set(r,s),m.useEffect(()=>{location.pathname==="/advance"&&n("index")},[r]),t.jsxs("div",{className:"pt-16 md:flex",children:[t.jsx(L,{signal:!0,className:"fixed bottom-6 right-6 z-40 md:hidden",onClick:()=>a.current.show(),children:"目录"}),t.jsx(Ra,{ref:a,onClose:()=>a.current.close(),children:t.jsx("div",{className:"bg-white h-full py-4 overflow-scroll",children:t.jsx(bh,{})})}),t.jsxs("nav",{className:"hidden md:block w-60 sticky top-16 h-[calc(100vh_-_5rem)] overflow-y-auto bg-hei",children:[t.jsxs("div",{className:"flex items-center px-4 py-8",children:[t.jsx("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-cyan-500",children:t.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})})}),t.jsxs("div",{className:"text-sm",children:[t.jsx("div",{children:"当前版本"}),t.jsx("div",{className:"text-gray-500",children:"React@19.0.0"})]})]}),t.jsx("ul",{className:"border-r h-[calc(100vh_-_9rem_-_35px)] overflow-y-auto pb-8",children:t.jsx(bh,{})})]}),t.jsx("div",{className:"md:flex-1 md:w-[calc(100vw_-_15rem)] p-4 md:p-8 min-h-[calc(100vh_-_5rem)] box-border",children:Array.from(e.current).map(([l,i])=>t.jsx("div",{style:{display:r===l?"block":"none"},children:i},l))})]})}const SA="/assets/30-Do4OqOfW.jpg",kA="/assets/200-CadH3lOz.jpg",CA="/assets/400-C00ssYqp.jpg",_A={30:"基础版",200:"尊享版提前投资",400:"尊享版"},AA={30:SA,200:kA,400:CA};function RA(){const n=window.location.search.split("=")[1];return t.jsxs("div",{className:"mt-24 md:mx-auto mx-4 max-w-[640px] px-4 md:px-16 py-8 border rounded-lg mb-4",children:[t.jsxs("div",{className:"flex items-center space-x-2 mb-8",children:[t.jsx("svg",{className:"icon",viewBox:"0 0 1228 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"24",height:"24",children:t.jsx("path",{d:"M530.8928 703.1296a41.472 41.472 0 0 1-35.7376-19.8144l-2.7136-5.5808L278.272 394.752a18.7392 18.7392 0 0 1-2.048-8.1408 19.968 19.968 0 0 1 20.48-19.3536c4.608 0 8.8576 1.4336 12.288 3.84l234.3936 139.9296a64.4096 64.4096 0 0 0 54.528 5.9392L1116.2624 204.8C1004.9536 80.896 821.76 0 614.4 0 275.0464 0 0 216.576 0 483.6352c0 145.7152 82.7392 276.8896 212.2752 365.5168a38.1952 38.1952 0 0 1 17.2032 31.488 44.4928 44.4928 0 0 1-2.1504 12.3904l-27.6992 97.4848c-1.3312 4.608-3.328 9.3696-3.328 14.1312 0 10.752 9.216 19.3536 20.48 19.3536 4.4032 0 8.0384-1.536 11.776-3.584l134.5536-73.3184c10.1376-5.5296 20.7872-8.96 32.6144-8.96 6.2976 0 12.288 0.9216 18.0736 2.5088 62.72 17.0496 130.4576 26.5728 200.5504 26.5728C953.7024 967.168 1228.8 750.592 1228.8 483.6352c0-80.9472-25.4464-157.1328-70.0416-224.1024l-604.9792 436.992-4.4544 2.4064a42.1376 42.1376 0 0 1-18.432 4.1984z",fill:"#15BA11"})}),t.jsx("div",{children:"微信支付"}),t.jsx("div",{children:"|"}),t.jsx("div",{children:"转账支付"})]}),t.jsxs(ie,{className:"items-center justify-between flex-col md:flex-row",children:[t.jsxs("div",{children:[t.jsx("img",{src:AA[n],alt:"",width:"250",height:"250"}),t.jsx("div",{})]}),t.jsx("div",{className:"w-48 md:w-0 border-t my-16 md:border-l border-gray-300 md:h-48 border-dashed"}),t.jsxs("div",{className:"pl-10",children:[t.jsxs("div",{children:["您正在购买 React 19 ",_A[n]]}),t.jsxs(ie,{className:"items-center",children:["￥",t.jsx("div",{className:"",style:{fontSize:64},children:n})]}),t.jsxs("div",{className:"mt-4",children:[t.jsx("span",{className:"text-gray-400",children:"收款方："}),"这波能反杀"]}),t.jsxs("div",{className:"mt-2",children:[t.jsx("span",{className:"text-gray-400",children:"微信号："}),"icanmeetu"]}),t.jsxs("div",{className:"mt-2",children:[t.jsx("span",{className:"text-gray-400",children:"激活码："}),"私信我获得激活码"]})]})]})]})}function MA(){return t.jsxs("div",{children:[t.jsx(Ib,{className:"line"}),t.jsx(X2,{})]})}function $A(){return t.jsx(G2,{children:t.jsxs(bn,{path:"/",element:t.jsx(MA,{}),children:[t.jsx(bn,{index:!0,element:t.jsx(Q4,{})}),t.jsx(bn,{path:"tutorial",element:t.jsx(O9,{}),children:q1.filter(n=>!!n.path).map((n,e)=>t.jsx(bn,{path:n.path,element:t.jsx(m.Suspense,{fallback:t.jsx(nc,{}),children:t.jsx(n.component,{})})},n.path))}),t.jsx(bn,{path:"component",element:t.jsx(Y9,{}),children:V1.filter(n=>!!n.path).map((n,e)=>t.jsx(bn,{path:n.path,element:t.jsx(m.Suspense,{fallback:t.jsx(nc,{}),children:t.jsx(n.component,{})})},n.path))}),t.jsx(bn,{path:"advance",element:t.jsx(wA,{}),children:W1.filter(n=>!!n.path).map((n,e)=>t.jsx(bn,{path:n.path,element:t.jsx(m.Suspense,{fallback:t.jsx(nc,{}),children:t.jsx(n.component,{})})},n.path))}),t.jsx(bn,{path:"pay",element:t.jsx(RA,{})}),t.jsx(bn,{path:"*",element:t.jsx("div",{className:"p-32",children:"暂无内容"})})]})})}n2.createRoot(document.getElementById("root")).render(t.jsx(m.StrictMode,{children:t.jsx(J2,{children:t.jsx($A,{})})}));
