function tg(n,e){for(var s=0;s<e.length;s++){const a=e[s];if(typeof a!="string"&&!Array.isArray(a)){for(const l in a)if(l!=="default"&&!(l in n)){const r=Object.getOwnPropertyDescriptor(a,l);r&&Object.defineProperty(n,l,r.get?r:{enumerable:!0,get:()=>a[l]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();var kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function li(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Nf={exports:{}},ri={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg=Symbol.for("react.transitional.element"),ag=Symbol.for("react.fragment");function wf(n,e,s){var a=null;if(s!==void 0&&(a=""+s),e.key!==void 0&&(a=""+e.key),"key"in e){s={};for(var l in e)l!=="key"&&(s[l]=e[l])}else s=e;return e=s.ref,{$$typeof:sg,type:n,key:a,ref:e!==void 0?e:null,props:s}}ri.Fragment=ag;ri.jsx=wf;ri.jsxs=wf;Nf.exports=ri;var t=Nf.exports,Sf={exports:{}},Y={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mo=Symbol.for("react.transitional.element"),lg=Symbol.for("react.portal"),rg=Symbol.for("react.fragment"),ig=Symbol.for("react.strict_mode"),cg=Symbol.for("react.profiler"),og=Symbol.for("react.consumer"),ug=Symbol.for("react.context"),dg=Symbol.for("react.forward_ref"),mg=Symbol.for("react.suspense"),pg=Symbol.for("react.memo"),kf=Symbol.for("react.lazy"),vd=Symbol.iterator;function fg(n){return n===null||typeof n!="object"?null:(n=vd&&n[vd]||n["@@iterator"],typeof n=="function"?n:null)}var _f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cf=Object.assign,Ef={};function ia(n,e,s){this.props=n,this.context=e,this.refs=Ef,this.updater=s||_f}ia.prototype.isReactComponent={};ia.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ia.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Af(){}Af.prototype=ia.prototype;function To(n,e,s){this.props=n,this.context=e,this.refs=Ef,this.updater=s||_f}var $o=To.prototype=new Af;$o.constructor=To;Cf($o,ia.prototype);$o.isPureReactComponent=!0;var jd=Array.isArray,Ne={H:null,A:null,T:null},Rf=Object.prototype.hasOwnProperty;function Lo(n,e,s,a,l,r,i){return s=i.ref,{$$typeof:Mo,type:n,key:e,ref:s!==void 0?s:null,props:i}}function hg(n,e){return Lo(n.type,e,null,void 0,void 0,void 0,n.props)}function Do(n){return typeof n=="object"&&n!==null&&n.$$typeof===Mo}function xg(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(s){return e[s]})}var bd=/\/+/g;function Li(n,e){return typeof n=="object"&&n!==null&&n.key!=null?xg(""+n.key):e.toString(36)}function yd(){}function gg(n){switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:switch(typeof n.status=="string"?n.then(yd,yd):(n.status="pending",n.then(function(e){n.status==="pending"&&(n.status="fulfilled",n.value=e)},function(e){n.status==="pending"&&(n.status="rejected",n.reason=e)})),n.status){case"fulfilled":return n.value;case"rejected":throw n.reason}}throw n}function ks(n,e,s,a,l){var r=typeof n;(r==="undefined"||r==="boolean")&&(n=null);var i=!1;if(n===null)i=!0;else switch(r){case"bigint":case"string":case"number":i=!0;break;case"object":switch(n.$$typeof){case Mo:case lg:i=!0;break;case kf:return i=n._init,ks(i(n._payload),e,s,a,l)}}if(i)return l=l(n),i=a===""?"."+Li(n,0):a,jd(l)?(s="",i!=null&&(s=i.replace(bd,"$&/")+"/"),ks(l,e,s,"",function(u){return u})):l!=null&&(Do(l)&&(l=hg(l,s+(!l.key||n&&n.key===l.key?"":(""+l.key).replace(bd,"$&/")+"/")+i)),e.push(l)),1;i=0;var c=a===""?".":a+":";if(jd(n))for(var o=0;o<n.length;o++)a=n[o],r=c+Li(a,o),i+=ks(a,e,s,r,l);else if(o=fg(n),typeof o=="function")for(n=o.call(n),o=0;!(a=n.next()).done;)a=a.value,r=c+Li(a,o++),i+=ks(a,e,s,r,l);else if(r==="object"){if(typeof n.then=="function")return ks(gg(n),e,s,a,l);throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return i}function ql(n,e,s){if(n==null)return n;var a=[],l=0;return ks(n,a,"","",function(r){return e.call(s,r,l++)}),a}function vg(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(s){(n._status===0||n._status===-1)&&(n._status=1,n._result=s)},function(s){(n._status===0||n._status===-1)&&(n._status=2,n._result=s)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Nd=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function jg(){}Y.Children={map:ql,forEach:function(n,e,s){ql(n,function(){e.apply(this,arguments)},s)},count:function(n){var e=0;return ql(n,function(){e++}),e},toArray:function(n){return ql(n,function(e){return e})||[]},only:function(n){if(!Do(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Y.Component=ia;Y.Fragment=rg;Y.Profiler=cg;Y.PureComponent=To;Y.StrictMode=ig;Y.Suspense=mg;Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ne;Y.act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.cache=function(n){return function(){return n.apply(null,arguments)}};Y.cloneElement=function(n,e,s){if(n==null)throw Error("The argument must be a React element, but you passed "+n+".");var a=Cf({},n.props),l=n.key,r=void 0;if(e!=null)for(i in e.ref!==void 0&&(r=void 0),e.key!==void 0&&(l=""+e.key),e)!Rf.call(e,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&e.ref===void 0||(a[i]=e[i]);var i=arguments.length-2;if(i===1)a.children=s;else if(1<i){for(var c=Array(i),o=0;o<i;o++)c[o]=arguments[o+2];a.children=c}return Lo(n.type,l,null,void 0,void 0,r,a)};Y.createContext=function(n){return n={$$typeof:ug,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null},n.Provider=n,n.Consumer={$$typeof:og,_context:n},n};Y.createElement=function(n,e,s){var a,l={},r=null;if(e!=null)for(a in e.key!==void 0&&(r=""+e.key),e)Rf.call(e,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(l[a]=e[a]);var i=arguments.length-2;if(i===1)l.children=s;else if(1<i){for(var c=Array(i),o=0;o<i;o++)c[o]=arguments[o+2];l.children=c}if(n&&n.defaultProps)for(a in i=n.defaultProps,i)l[a]===void 0&&(l[a]=i[a]);return Lo(n,r,null,void 0,void 0,null,l)};Y.createRef=function(){return{current:null}};Y.forwardRef=function(n){return{$$typeof:dg,render:n}};Y.isValidElement=Do;Y.lazy=function(n){return{$$typeof:kf,_payload:{_status:-1,_result:n},_init:vg}};Y.memo=function(n,e){return{$$typeof:pg,type:n,compare:e===void 0?null:e}};Y.startTransition=function(n){var e=Ne.T,s=new Set;Ne.T={_callbacks:s};var a=Ne.T;try{var l=n();typeof l=="object"&&l!==null&&typeof l.then=="function"&&(s.forEach(function(r){return r(a,l)}),l.then(jg,Nd))}catch(r){Nd(r)}finally{Ne.T=e}};Y.unstable_useCacheRefresh=function(){return Ne.H.useCacheRefresh()};Y.use=function(n){return Ne.H.use(n)};Y.useActionState=function(n,e,s){return Ne.H.useActionState(n,e,s)};Y.useCallback=function(n,e){return Ne.H.useCallback(n,e)};Y.useContext=function(n){return Ne.H.useContext(n)};Y.useDebugValue=function(){};Y.useDeferredValue=function(n,e){return Ne.H.useDeferredValue(n,e)};Y.useEffect=function(n,e){return Ne.H.useEffect(n,e)};Y.useId=function(){return Ne.H.useId()};Y.useImperativeHandle=function(n,e,s){return Ne.H.useImperativeHandle(n,e,s)};Y.useInsertionEffect=function(n,e){return Ne.H.useInsertionEffect(n,e)};Y.useLayoutEffect=function(n,e){return Ne.H.useLayoutEffect(n,e)};Y.useMemo=function(n,e){return Ne.H.useMemo(n,e)};Y.useOptimistic=function(n,e){return Ne.H.useOptimistic(n,e)};Y.useReducer=function(n,e,s){return Ne.H.useReducer(n,e,s)};Y.useRef=function(n){return Ne.H.useRef(n)};Y.useState=function(n){return Ne.H.useState(n)};Y.useSyncExternalStore=function(n,e,s){return Ne.H.useSyncExternalStore(n,e,s)};Y.useTransition=function(){return Ne.H.useTransition()};Y.version="19.0.0-rc-915b914b3a-20240515";Sf.exports=Y;var g=Sf.exports;const et=li(g),bg=tg({__proto__:null,default:et},[g]);var Mf={exports:{}},ii={},Tf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(R,L){var T=R.length;R.push(L);e:for(;0<T;){var D=T-1>>>1,H=R[D];if(0<l(H,L))R[D]=L,R[T]=H,T=D;else break e}}function s(R){return R.length===0?null:R[0]}function a(R){if(R.length===0)return null;var L=R[0],T=R.pop();if(T!==L){R[0]=T;e:for(var D=0,H=R.length,X=H>>>1;D<X;){var ee=2*(D+1)-1,E=R[ee],M=ee+1,q=R[M];if(0>l(E,T))M<H&&0>l(q,E)?(R[D]=q,R[M]=T,D=M):(R[D]=E,R[ee]=T,D=ee);else if(M<H&&0>l(q,T))R[D]=q,R[M]=T,D=M;else break e}}return L}function l(R,L){var T=R.sortIndex-L.sortIndex;return T!==0?T:R.id-L.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;n.unstable_now=function(){return r.now()}}else{var i=Date,c=i.now();n.unstable_now=function(){return i.now()-c}}var o=[],u=[],d=1,h=null,p=3,v=!1,w=!1,N=!1,k=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;function f(R){for(var L=s(u);L!==null;){if(L.callback===null)a(u);else if(L.startTime<=R)a(u),L.sortIndex=L.expirationTime,e(o,L);else break;L=s(u)}}function j(R){if(N=!1,f(R),!w)if(s(o)!==null)w=!0,re();else{var L=s(u);L!==null&&P(j,L.startTime-R)}}var y=!1,b=-1,S=5,_=-1;function A(){return!(n.unstable_now()-_<S)}function $(){if(y){var R=n.unstable_now();_=R;var L=!0;try{e:{w=!1,N&&(N=!1,x(b),b=-1),v=!0;var T=p;try{n:{for(f(R),h=s(o);h!==null&&!(h.expirationTime>R&&A());){var D=h.callback;if(typeof D=="function"){h.callback=null,p=h.priorityLevel;var H=D(h.expirationTime<=R);if(R=n.unstable_now(),typeof H=="function"){h.callback=H,f(R),L=!0;break n}h===s(o)&&a(o),f(R)}else a(o);h=s(o)}if(h!==null)L=!0;else{var X=s(u);X!==null&&P(j,X.startTime-R),L=!1}}break e}finally{h=null,p=T,v=!1}L=void 0}}finally{L?U():y=!1}}}var U;if(typeof m=="function")U=function(){m($)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,fe=O.port2;O.port1.onmessage=$,U=function(){fe.postMessage(null)}}else U=function(){k($,0)};function re(){y||(y=!0,U())}function P(R,L){b=k(function(){R(n.unstable_now())},L)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_continueExecution=function(){w||v||(w=!0,re())},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return s(o)},n.unstable_next=function(R){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var T=p;p=L;try{return R()}finally{p=T}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var T=p;p=R;try{return L()}finally{p=T}},n.unstable_scheduleCallback=function(R,L,T){var D=n.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?D+T:D):T=D,R){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=T+H,R={id:d++,callback:L,priorityLevel:R,startTime:T,expirationTime:H,sortIndex:-1},T>D?(R.sortIndex=T,e(u,R),s(o)===null&&R===s(u)&&(N?(x(b),b=-1):N=!0,P(j,T-D))):(R.sortIndex=H,e(o,R),w||v||(w=!0,re())),R},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(R){var L=p;return function(){var T=p;p=L;try{return R.apply(this,arguments)}finally{p=T}}}})($f);Tf.exports=$f;var yg=Tf.exports,Lf={exports:{}},Pe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Df(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)e+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qa=g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ht(){}var Je={d:{f:ht,r:function(){throw Error(Df(522))},D:ht,C:ht,L:ht,m:ht,X:ht,S:ht,M:ht},p:0,findDOMNode:null},Ng=Symbol.for("react.portal");function wg(n,e,s){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ng,key:a==null?null:""+a,children:n,containerInfo:e,implementation:s}}function ci(n,e){if(n==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Je;Pe.createPortal=function(n,e){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Df(299));return wg(n,e,null,s)};Pe.flushSync=function(n){var e=qa.T,s=Je.p;try{if(qa.T=null,Je.p=2,n)return n()}finally{qa.T=e,Je.p=s,Je.d.f()}};Pe.preconnect=function(n,e){typeof n=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Je.d.C(n,e))};Pe.prefetchDNS=function(n){typeof n=="string"&&Je.d.D(n)};Pe.preinit=function(n,e){if(typeof n=="string"&&e&&typeof e.as=="string"){var s=e.as,a=ci(s,e.crossOrigin),l=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;s==="style"?Je.d.S(n,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:a,integrity:l,fetchPriority:r}):s==="script"&&Je.d.X(n,{crossOrigin:a,integrity:l,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Pe.preinitModule=function(n,e){if(typeof n=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var s=ci(e.as,e.crossOrigin);Je.d.M(n,{crossOrigin:s,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Je.d.M(n)};Pe.preload=function(n,e){if(typeof n=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var s=e.as,a=ci(s,e.crossOrigin);Je.d.L(n,s,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Pe.preloadModule=function(n,e){if(typeof n=="string")if(e){var s=ci(e.as,e.crossOrigin);Je.d.m(n,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:s,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Je.d.m(n)};Pe.requestFormReset=function(n){Je.d.r(n)};Pe.unstable_batchedUpdates=function(n,e){return n(e)};Pe.useFormState=function(n,e,s){return qa.H.useFormState(n,e,s)};Pe.useFormStatus=function(){return qa.H.useHostTransitionStatus()};Pe.version="19.0.0-rc-915b914b3a-20240515";function Bf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bf)}catch(n){console.error(n)}}Bf(),Lf.exports=Pe;var Sl=Lf.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le=yg,Sg=g,kg=Sl;function C(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)e+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Of(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var _g=Symbol.for("react.element"),Vl=Symbol.for("react.transitional.element"),Xl=Symbol.for("react.portal"),Ta=Symbol.for("react.fragment"),Cg=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),Eg=Symbol.for("react.provider"),Ag=Symbol.for("react.consumer"),kt=Symbol.for("react.context"),zf=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),kd=Symbol.for("react.suspense_list"),Uf=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Hf=Symbol.for("react.offscreen"),Rg=Symbol.for("react.memo_cache_sentinel"),_d=Symbol.iterator;function ya(n){return n===null||typeof n!="object"?null:(n=_d&&n[_d]||n["@@iterator"],typeof n=="function"?n:null)}function ca(n){var e=n,s=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(s=e.return),n=e.return;while(n)}return e.tag===3?s:null}function qf(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Cd(n){if(ca(n)!==n)throw Error(C(188))}function Mg(n){var e=n.alternate;if(!e){if(e=ca(n),e===null)throw Error(C(188));return e!==n?null:n}for(var s=n,a=e;;){var l=s.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){s=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===s)return Cd(l),n;if(r===a)return Cd(l),e;r=r.sibling}throw Error(C(188))}if(s.return!==a.return)s=l,a=r;else{for(var i=!1,c=l.child;c;){if(c===s){i=!0,s=l,a=r;break}if(c===a){i=!0,a=l,s=r;break}c=c.sibling}if(!i){for(c=r.child;c;){if(c===s){i=!0,s=r,a=l;break}if(c===a){i=!0,a=r,s=l;break}c=c.sibling}if(!i)throw Error(C(189))}}if(s.alternate!==a)throw Error(C(190))}if(s.tag!==3)throw Error(C(188));return s.stateNode.current===s?n:e}function Vf(n){return n=Mg(n),n!==null?Xf(n):null}function Xf(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=Xf(n),e!==null)return e;n=n.sibling}return null}var be=Object.assign,$a=Array.isArray,K=Sg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve=kg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Va={pending:!1,data:null,method:null,action:null},Ac=[],Rs=-1;function Qn(n){return{current:n}}function Oe(n){0>Rs||(n.current=Ac[Rs],Ac[Rs]=null,Rs--)}function je(n,e){Rs++,Ac[Rs]=n.current,n.current=e}var qn=Qn(null),sl=Qn(null),Rt=Qn(null),Rc=Qn(null),_r={$$typeof:kt,Provider:null,Consumer:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cr(n,e){switch(je(Rt,e),je(sl,n),je(qn,null),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?Sm(e):0;break;default:if(n=n===8?e.parentNode:e,e=n.tagName,n=n.namespaceURI)n=Sm(n),e=tx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Oe(qn),je(qn,e)}function Ks(){Oe(qn),Oe(sl),Oe(Rt)}function Mc(n){n.memoizedState!==null&&je(Rc,n);var e=qn.current,s=tx(e,n.type);e!==s&&(je(sl,n),je(qn,s))}function Er(n){sl.current===n&&(Oe(qn),Oe(sl)),Rc.current===n&&(Oe(Rc),_r._currentValue=null)}var Tc=Object.prototype.hasOwnProperty,Bo=Le.unstable_scheduleCallback,Di=Le.unstable_cancelCallback,Tg=Le.unstable_shouldYield,$g=Le.unstable_requestPaint,Vn=Le.unstable_now,Lg=Le.unstable_getCurrentPriorityLevel,Oo=Le.unstable_ImmediatePriority,Gf=Le.unstable_UserBlockingPriority,Ar=Le.unstable_NormalPriority,Dg=Le.unstable_LowPriority,Zf=Le.unstable_IdlePriority,Bg=Le.log,Og=Le.unstable_setDisableYieldValue,kl=null,dn=null;function zg(n){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(kl,n,void 0,(n.current.flags&128)===128)}catch{}}function _t(n){if(typeof Bg=="function"&&Og(n),dn&&typeof dn.setStrictMode=="function")try{dn.setStrictMode(kl,n)}catch{}}var Nn=Math.clz32?Math.clz32:qg,Ug=Math.log,Hg=Math.LN2;function qg(n){return n>>>=0,n===0?32:31-(Ug(n)/Hg|0)|0}var Gl=128,Zl=4194304;function La(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Rr(n,e){var s=n.pendingLanes;if(s===0)return 0;var a=0,l=n.suspendedLanes;n=n.pingedLanes;var r=s&134217727;return r!==0?(s=r&~l,s!==0?a=La(s):(n&=r,n!==0&&(a=La(n)))):(s&=~l,s!==0?a=La(s):n!==0&&(a=La(n))),a===0?0:e!==0&&e!==a&&!(e&l)&&(l=a&-a,n=e&-e,l>=n||l===32&&(n&4194176)!==0)?e:a}function Vg(n,e){switch(n){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yf(n,e){return n.errorRecoveryDisabledLanes&e?0:(n=n.pendingLanes&-536870913,n!==0?n:n&536870912?536870912:0)}function Qf(){var n=Gl;return Gl<<=1,!(Gl&4194176)&&(Gl=128),n}function Ff(){var n=Zl;return Zl<<=1,!(Zl&62914560)&&(Zl=4194304),n}function Bi(n){for(var e=[],s=0;31>s;s++)e.push(n);return e}function Xg(n,e,s){var a=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0,e=n.entanglements;for(var l=n.expirationTimes,r=n.hiddenUpdates;0<a;){var i=31-Nn(a),c=1<<i;e[i]=0,l[i]=-1;var o=r[i];if(o!==null)for(r[i]=null,i=0;i<o.length;i++){var u=o[i];u!==null&&(u.lane&=-536870913)}a&=~c}s!==0&&Jf(n,s,0)}function Jf(n,e,s){n.pendingLanes|=e,n.suspendedLanes&=~e;var a=31-Nn(e);n.entangledLanes|=e,n.entanglements[a]=n.entanglements[a]|1073741824|s&4194218}function Wf(n,e){var s=n.entangledLanes|=e;for(n=n.entanglements;s;){var a=31-Nn(s),l=1<<a;l&e|n[a]&e&&(n[a]|=e),s&=~l}}function Kf(n){return n&=-n,2<n?8<n?n&134217727?32:268435456:8:2}function Pf(){var n=ve.p;return n!==0?n:(n=window.event,n===void 0?32:dx(n.type))}function Gg(n,e){var s=ve.p;try{return ve.p=n,e()}finally{ve.p=s}}var Ht=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Ht,We="__reactProps$"+Ht,oa="__reactContainer$"+Ht,$c="__reactEvents$"+Ht,Zg="__reactListeners$"+Ht,Yg="__reactHandles$"+Ht,Ed="__reactResources$"+Ht,al="__reactMarker$"+Ht;function zo(n){delete n[Xe],delete n[We],delete n[$c],delete n[Zg],delete n[Yg]}function Kt(n){var e=n[Xe];if(e)return e;for(var s=n.parentNode;s;){if(e=s[oa]||s[Xe]){if(s=e.alternate,e.child!==null||s!==null&&s.child!==null)for(n=_m(n);n!==null;){if(s=n[Xe])return s;n=_m(n)}return e}n=s,s=n.parentNode}return null}function ua(n){if(n=n[Xe]||n[oa]){var e=n.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return n}return null}function Da(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(C(33))}function qs(n){var e=n[Ed];return e||(e=n[Ed]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Be(n){n[al]=!0}var If=new Set,eh={};function os(n,e){Ps(n,e),Ps(n+"Capture",e)}function Ps(n,e){for(eh[n]=e,n=0;n<e.length;n++)If.add(e[n])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ad={},Rd={};function Fg(n){return Tc.call(Rd,n)?!0:Tc.call(Ad,n)?!1:Qg.test(n)?Rd[n]=!0:(Ad[n]=!0,!1)}function Lc(n,e,s){if(Fg(e))if(s===null)n.removeAttribute(e);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+s)}}function Oi(n,e,s){if(s===null)n.removeAttribute(e);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+s)}}function Jn(n,e,s,a){if(a===null)n.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(e,s,""+a)}}var zi;function Ba(n){if(zi===void 0)try{throw Error()}catch(s){var e=s.stack.trim().match(/\n( *(at )?)/);zi=e&&e[1]||""}return`
`+zi+n}var Ui=!1;function Hi(n,e){if(!n||Ui)return"";Ui=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var a={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(v){var p=v}Reflect.construct(n,[],h)}else{try{h.call()}catch(v){p=v}n.call(h.prototype)}}else{try{throw Error()}catch(v){p=v}(h=n())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(v){if(v&&p&&typeof v.stack=="string")return[v.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});try{var r=a.DetermineComponentFrameRoot(),i=r[0],c=r[1];if(i&&c){var o=i.split(`
`),u=c.split(`
`);for(l=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;l<u.length&&!u[l].includes("DetermineComponentFrameRoot");)l++;if(a===o.length||l===u.length)for(a=o.length-1,l=u.length-1;1<=a&&0<=l&&o[a]!==u[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==u[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==u[l]){var d=`
`+o[a].replace(" at new "," at ");return n.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",n.displayName)),d}while(1<=a&&0<=l);break}}}finally{Ui=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Ba(s):""}function Jg(n){switch(n.tag){case 26:case 27:case 5:return Ba(n.type);case 16:return Ba("Lazy");case 13:return Ba("Suspense");case 19:return Ba("SuspenseList");case 0:case 15:return n=Hi(n.type,!1),n;case 11:return n=Hi(n.type.render,!1),n;case 1:return n=Hi(n.type,!0),n;default:return""}}function Md(n){try{var e="";do e+=Jg(n),n=n.return;while(n);return e}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function gn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function nh(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wg(n){var e=nh(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),a=""+n[e];if(!n.hasOwnProperty(e)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,r=s.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return l.call(this)},set:function(i){a=""+i,r.call(this,i)}}),Object.defineProperty(n,e,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Mr(n){n._valueTracker||(n._valueTracker=Wg(n))}function th(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var s=e.getValue(),a="";return n&&(a=nh(n)?n.checked?"true":"false":n.value),n=a,n!==s?(e.setValue(n),!0):!1}function Tr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Kg=/[\n"\\]/g;function bn(n){return n.replace(Kg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Dc(n,e,s,a,l,r,i,c){n.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?n.type=i:n.removeAttribute("type"),e!=null?i==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+gn(e)):n.value!==""+gn(e)&&(n.value=""+gn(e)):i!=="submit"&&i!=="reset"||n.removeAttribute("value"),e!=null?Bc(n,i,gn(e)):s!=null?Bc(n,i,gn(s)):a!=null&&n.removeAttribute("value"),l==null&&r!=null&&(n.defaultChecked=!!r),l!=null&&(n.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+gn(c):n.removeAttribute("name")}function sh(n,e,s,a,l,r,i,c){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.type=r),e!=null||s!=null){if(!(r!=="submit"&&r!=="reset"||e!=null))return;s=s!=null?""+gn(s):"",e=e!=null?""+gn(e):s,c||e===n.value||(n.value=e),n.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,n.checked=c?n.checked:!!a,n.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.name=i)}function Bc(n,e,s){e==="number"&&Tr(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Vs(n,e,s,a){if(n=n.options,e){e={};for(var l=0;l<s.length;l++)e["$"+s[l]]=!0;for(s=0;s<n.length;s++)l=e.hasOwnProperty("$"+n[s].value),n[s].selected!==l&&(n[s].selected=l),l&&a&&(n[s].defaultSelected=!0)}else{for(s=""+gn(s),e=null,l=0;l<n.length;l++){if(n[l].value===s){n[l].selected=!0,a&&(n[l].defaultSelected=!0);return}e!==null||n[l].disabled||(e=n[l])}e!==null&&(e.selected=!0)}}function ah(n,e,s){if(e!=null&&(e=""+gn(e),e!==n.value&&(n.value=e),s==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=s!=null?""+gn(s):""}function lh(n,e,s,a){if(e==null){if(a!=null){if(s!=null)throw Error(C(92));if($a(a)){if(1<a.length)throw Error(C(93));a=a[0]}s=a}s==null&&(s=""),e=s}s=gn(e),n.defaultValue=s,a=n.textContent,a===s&&a!==""&&a!==null&&(n.value=a)}function Is(n,e){if(e){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=e;return}}n.textContent=e}var Pg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Td(n,e,s){var a=e.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?a?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":a?n.setProperty(e,s):typeof s!="number"||s===0||Pg.has(e)?e==="float"?n.cssFloat=s:n[e]=(""+s).trim():n[e]=s+"px"}function rh(n,e,s){if(e!=null&&typeof e!="object")throw Error(C(62));if(n=n.style,s!=null){for(var a in s)!s.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&s[l]!==a&&Td(n,l,a)}else for(var r in e)e.hasOwnProperty(r)&&Td(n,r,e[r])}function Uo(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ig=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ev=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dr(n){return ev.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Oc=null;function Ho(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ms=null,Xs=null;function $d(n){var e=ua(n);if(e&&(n=e.stateNode)){var s=n[We]||null;e:switch(n=e.stateNode,e.type){case"input":if(Dc(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),e=s.name,s.type==="radio"&&e!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+bn(""+e)+'"][type="radio"]'),e=0;e<s.length;e++){var a=s[e];if(a!==n&&a.form===n.form){var l=a[We]||null;if(!l)throw Error(C(90));Dc(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<s.length;e++)a=s[e],a.form===n.form&&th(a)}break e;case"textarea":ah(n,s.value,s.defaultValue);break e;case"select":e=s.value,e!=null&&Vs(n,!!s.multiple,e,!1)}}}var qi=!1;function ih(n,e,s){if(qi)return n(e,s);qi=!0;try{var a=n(e);return a}finally{if(qi=!1,(Ms!==null||Xs!==null)&&(bi(),Ms&&(e=Ms,n=Xs,Xs=Ms=null,$d(e),n)))for(e=0;e<n.length;e++)$d(n[e])}}function ll(n,e){var s=n.stateNode;if(s===null)return null;var a=s[We]||null;if(a===null)return null;s=a[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(C(231,e,typeof s));return s}var zc=!1;if(ot)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){zc=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{zc=!1}var Ct=null,qo=null,mr=null;function ch(){if(mr)return mr;var n,e=qo,s=e.length,a,l="value"in Ct?Ct.value:Ct.textContent,r=l.length;for(n=0;n<s&&e[n]===l[n];n++);var i=s-n;for(a=1;a<=i&&e[s-a]===l[r-a];a++);return mr=l.slice(n,1<a?1-a:void 0)}function pr(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Yl(){return!0}function Ld(){return!1}function mn(n){function e(s,a,l,r,i){this._reactName=s,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(s=n[c],this[c]=s?s(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Yl:Ld,this.isPropagationStopped=Ld,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),e}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oi=mn(da),_l=be({},da,{view:0,detail:0}),nv=mn(_l),Vi,Xi,wa,ui=be({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vo,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wa&&(wa&&n.type==="mousemove"?(Vi=n.screenX-wa.screenX,Xi=n.screenY-wa.screenY):Xi=Vi=0,wa=n),Vi)},movementY:function(n){return"movementY"in n?n.movementY:Xi}}),Dd=mn(ui),tv=be({},ui,{dataTransfer:0}),sv=mn(tv),av=be({},_l,{relatedTarget:0}),Gi=mn(av),lv=be({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),rv=mn(lv),iv=be({},da,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),cv=mn(iv),ov=be({},da,{data:0}),Bd=mn(ov),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=mv[n])?!!e[n]:!1}function Vo(){return pv}var fv=be({},_l,{key:function(n){if(n.key){var e=uv[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=pr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vo,charCode:function(n){return n.type==="keypress"?pr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?pr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),hv=mn(fv),xv=be({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=mn(xv),gv=be({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vo}),vv=mn(gv),jv=be({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),bv=mn(jv),yv=be({},ui,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=mn(yv),wv=[9,13,27,32],Xo=ot&&"CompositionEvent"in window,Xa=null;ot&&"documentMode"in document&&(Xa=document.documentMode);var Sv=ot&&"TextEvent"in window&&!Xa,oh=ot&&(!Xo||Xa&&8<Xa&&11>=Xa),zd=" ",Ud=!1;function uh(n,e){switch(n){case"keyup":return wv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ts=!1;function kv(n,e){switch(n){case"compositionend":return dh(e);case"keypress":return e.which!==32?null:(Ud=!0,zd);case"textInput":return n=e.data,n===zd&&Ud?null:n;default:return null}}function _v(n,e){if(Ts)return n==="compositionend"||!Xo&&uh(n,e)?(n=ch(),mr=qo=Ct=null,Ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return oh&&e.locale!=="ko"?null:e.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Cv[n.type]:e==="textarea"}function mh(n,e,s,a){Ms?Xs?Xs.push(a):Xs=[a]:Ms=a,e=Fr(e,"onChange"),0<e.length&&(s=new oi("onChange","change",null,s,a),n.push({event:s,listeners:e}))}var Ga=null,rl=null;function Ev(n){I0(n,0)}function di(n){var e=Da(n);if(th(e))return n}function qd(n,e){if(n==="change")return e}var ph=!1;if(ot){var Zi;if(ot){var Yi="oninput"in document;if(!Yi){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),Yi=typeof Vd.oninput=="function"}Zi=Yi}else Zi=!1;ph=Zi&&(!document.documentMode||9<document.documentMode)}function Xd(){Ga&&(Ga.detachEvent("onpropertychange",fh),rl=Ga=null)}function fh(n){if(n.propertyName==="value"&&di(rl)){var e=[];mh(e,rl,n,Ho(n)),ih(Ev,e)}}function Av(n,e,s){n==="focusin"?(Xd(),Ga=e,rl=s,Ga.attachEvent("onpropertychange",fh)):n==="focusout"&&Xd()}function Rv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return di(rl)}function Mv(n,e){if(n==="click")return di(e)}function Tv(n,e){if(n==="input"||n==="change")return di(e)}function $v(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var wn=typeof Object.is=="function"?Object.is:$v;function il(n,e){if(wn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var s=Object.keys(n),a=Object.keys(e);if(s.length!==a.length)return!1;for(a=0;a<s.length;a++){var l=s[a];if(!Tc.call(e,l)||!wn(n[l],e[l]))return!1}return!0}function Gd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zd(n,e){var s=Gd(n);n=0;for(var a;s;){if(s.nodeType===3){if(a=n+s.textContent.length,n<=e&&a>=e)return{node:s,offset:e-n};n=a}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Gd(s)}}function hh(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?hh(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function xh(){for(var n=window,e=Tr();e instanceof n.HTMLIFrameElement;){try{var s=typeof e.contentWindow.location.href=="string"}catch{s=!1}if(s)n=e.contentWindow;else break;e=Tr(n.document)}return e}function Go(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Lv(n){var e=xh(),s=n.focusedElem,a=n.selectionRange;if(e!==s&&s&&s.ownerDocument&&hh(s.ownerDocument.documentElement,s)){if(a!==null&&Go(s)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in s)s.selectionStart=e,s.selectionEnd=Math.min(n,s.value.length);else if(n=(e=s.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var l=s.textContent.length,r=Math.min(a.start,l);a=a.end===void 0?r:Math.min(a.end,l),!n.extend&&r>a&&(l=a,a=r,r=l),l=Zd(s,r);var i=Zd(s,a);l&&i&&(n.rangeCount!==1||n.anchorNode!==l.node||n.anchorOffset!==l.offset||n.focusNode!==i.node||n.focusOffset!==i.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),n.removeAllRanges(),r>a?(n.addRange(e),n.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),n.addRange(e)))}}for(e=[],n=s;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<e.length;s++)n=e[s],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Dv=ot&&"documentMode"in document&&11>=document.documentMode,$s=null,Uc=null,Za=null,Hc=!1;function Yd(n,e,s){var a=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Hc||$s==null||$s!==Tr(a)||(a=$s,"selectionStart"in a&&Go(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Za&&il(Za,a)||(Za=a,a=Fr(Uc,"onSelect"),0<a.length&&(e=new oi("onSelect","select",null,e,s),n.push({event:e,listeners:a}),e.target=$s)))}function Yt(n,e){var s={};return s[n.toLowerCase()]=e.toLowerCase(),s["Webkit"+n]="webkit"+e,s["Moz"+n]="moz"+e,s}var Ls={animationend:Yt("Animation","AnimationEnd"),animationiteration:Yt("Animation","AnimationIteration"),animationstart:Yt("Animation","AnimationStart"),transitionrun:Yt("Transition","TransitionRun"),transitionstart:Yt("Transition","TransitionStart"),transitioncancel:Yt("Transition","TransitionCancel"),transitionend:Yt("Transition","TransitionEnd")},Qi={},gh={};ot&&(gh=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function us(n){if(Qi[n])return Qi[n];if(!Ls[n])return n;var e=Ls[n],s;for(s in e)if(e.hasOwnProperty(s)&&s in gh)return Qi[n]=e[s];return n}var vh=us("animationend"),jh=us("animationiteration"),bh=us("animationstart"),Bv=us("transitionrun"),Ov=us("transitionstart"),zv=us("transitioncancel"),yh=us("transitionend"),Nh=new Map,Qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ln(n,e){Nh.set(n,e),os(e,[n])}var hn=[],Ds=0,Zo=0;function mi(){for(var n=Ds,e=Zo=Ds=0;e<n;){var s=hn[e];hn[e++]=null;var a=hn[e];hn[e++]=null;var l=hn[e];hn[e++]=null;var r=hn[e];if(hn[e++]=null,a!==null&&l!==null){var i=a.pending;i===null?l.next=l:(l.next=i.next,i.next=l),a.pending=l}r!==0&&wh(s,l,r)}}function pi(n,e,s,a){hn[Ds++]=n,hn[Ds++]=e,hn[Ds++]=s,hn[Ds++]=a,Zo|=a,n.lanes|=a,n=n.alternate,n!==null&&(n.lanes|=a)}function Yo(n,e,s,a){return pi(n,e,s,a),$r(n)}function zt(n,e){return pi(n,null,null,e),$r(n)}function wh(n,e,s){n.lanes|=s;var a=n.alternate;a!==null&&(a.lanes|=s);for(var l=!1,r=n.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),r.tag===22&&(n=r.stateNode,n===null||n._visibility&1||(l=!0)),n=r,r=r.return;l&&e!==null&&n.tag===3&&(r=n.stateNode,l=31-Nn(s),r=r.hiddenUpdates,n=r[l],n===null?r[l]=[e]:n.push(e),e.lane=s|536870912)}function $r(n){yu();for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Bs={},Fd=new WeakMap;function yn(n,e){if(typeof n=="object"&&n!==null){var s=Fd.get(n);typeof s!="string"&&(s=Md(e),Fd.set(n,s))}else s=Md(e);return{value:n,source:e,stack:s}}var Os=[],zs=0,Lr=null,Dr=0,vn=[],jn=0,es=null,tt=1,st="";function Jt(n,e){Os[zs++]=Dr,Os[zs++]=Lr,Lr=n,Dr=e}function Sh(n,e,s){vn[jn++]=tt,vn[jn++]=st,vn[jn++]=es,es=n;var a=tt;n=st;var l=32-Nn(a)-1;a&=~(1<<l),s+=1;var r=32-Nn(e)+l;if(30<r){var i=l-l%5;r=(a&(1<<i)-1).toString(32),a>>=i,l-=i,tt=1<<32-Nn(e)+l|s<<l|a,st=r+n}else tt=1<<r|s<<l|a,st=n}function Qo(n){n.return!==null&&(Jt(n,1),Sh(n,1,0))}function Fo(n){for(;n===Lr;)Lr=Os[--zs],Os[zs]=null,Dr=Os[--zs],Os[zs]=null;for(;n===es;)es=vn[--jn],vn[jn]=null,st=vn[--jn],vn[jn]=null,tt=vn[--jn],vn[jn]=null}var Fe=null,Ue=null,te=!1,An=null,zn=!1,qc=Error(C(519));function as(n){var e=Error(C(418,""));throw cl(yn(e,n)),qc}function Jd(n){var e=n.stateNode,s=n.type,a=n.memoizedProps;switch(e[Xe]=n,e[We]=a,s){case"dialog":ae("cancel",e),ae("close",e);break;case"iframe":case"object":case"embed":ae("load",e);break;case"video":case"audio":for(s=0;s<ml.length;s++)ae(ml[s],e);break;case"source":ae("error",e);break;case"img":case"image":case"link":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"input":ae("invalid",e),sh(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Mr(e);break;case"select":ae("invalid",e);break;case"textarea":ae("invalid",e),lh(e,a.value,a.defaultValue,a.children),Mr(e)}s=a.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||e.textContent===""+s||a.suppressHydrationWarning===!0||nx(e.textContent,s)?(a.onScroll!=null&&ae("scroll",e),a.onScrollEnd!=null&&ae("scrollend",e),a.onClick!=null&&(e.onclick=Ni),e=!0):e=!1,e||as(n)}function Wd(n){for(Fe=n.return;Fe;)switch(Fe.tag){case 3:case 27:zn=!0;return;case 5:case 13:zn=!1;return;default:Fe=Fe.return}}function Sa(n){if(n!==Fe)return!1;if(!te)return Wd(n),te=!0,!1;var e=!1,s;if((s=n.tag!==3&&n.tag!==27)&&((s=n.tag===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||ho(n.type,n.memoizedProps)),s=!s),s&&(e=!0),e&&Ue&&as(n),Wd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(C(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(e===0){Ue=$n(n.nextSibling);break e}e--}else s!=="$"&&s!=="$!"&&s!=="$?"||e++;n=n.nextSibling}Ue=null}}else Ue=Fe?$n(n.stateNode.nextSibling):null;return!0}function Cl(){Ue=Fe=null,te=!1}function cl(n){An===null?An=[n]:An.push(n)}var fr=Error(C(460)),kh=Error(C(474)),Vc={then:function(){}};function Kd(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ql(){}function _h(n,e,s){switch(s=n[s],s===void 0?n.push(e):s!==e&&(e.then(Ql,Ql),e=s),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,n===fr?Error(C(483)):n;default:if(typeof e.status=="string")e.then(Ql,Ql);else{if(n=oe,n!==null&&100<n.shellSuspendCounter)throw Error(C(482));n=e,n.status="pending",n.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,n===fr?Error(C(483)):n}throw Ya=e,fr}}var Ya=null;function Pd(){if(Ya===null)throw Error(C(459));var n=Ya;return Ya=null,n}var Gs=null,ol=0;function Fl(n){var e=ol;return ol+=1,Gs===null&&(Gs=[]),_h(Gs,n,e)}function ka(n,e,s,a){n=a.props.ref,s.ref=n!==void 0?n:null}function Jl(n,e){throw e.$$typeof===_g?Error(C(525)):(n=Object.prototype.toString.call(e),Error(C(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function Id(n){var e=n._init;return e(n._payload)}function Ch(n){function e(x,m){if(n){var f=x.deletions;f===null?(x.deletions=[m],x.flags|=16):f.push(m)}}function s(x,m){if(!n)return null;for(;m!==null;)e(x,m),m=m.sibling;return null}function a(x){for(var m=new Map;x!==null;)x.key!==null?m.set(x.key,x):m.set(x.index,x),x=x.sibling;return m}function l(x,m){return x=Tt(x,m),x.index=0,x.sibling=null,x}function r(x,m,f){return x.index=f,n?(f=x.alternate,f!==null?(f=f.index,f<m?(x.flags|=33554434,m):f):(x.flags|=33554434,m)):(x.flags|=1048576,m)}function i(x){return n&&x.alternate===null&&(x.flags|=33554434),x}function c(x,m,f,j){return m===null||m.tag!==6?(m=rc(f,x.mode,j),m.return=x,m):(m=l(m,f),m.return=x,m)}function o(x,m,f,j){var y=f.type;return y===Ta?d(x,m,f.props.children,j,f.key):m!==null&&(m.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===Ft&&Id(y)===m.type)?(j=l(m,f.props),ka(x,m,j,f),j.return=x,j):(j=jr(f.type,f.key,f.props,null,x.mode,j),ka(x,m,j,f),j.return=x,j)}function u(x,m,f,j){return m===null||m.tag!==4||m.stateNode.containerInfo!==f.containerInfo||m.stateNode.implementation!==f.implementation?(m=ic(f,x.mode,j),m.return=x,m):(m=l(m,f.children||[]),m.return=x,m)}function d(x,m,f,j,y){return m===null||m.tag!==7?(m=ts(f,x.mode,j,y),m.return=x,m):(m=l(m,f),m.return=x,m)}function h(x,m,f){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=rc(""+m,x.mode,f),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vl:return f=jr(m.type,m.key,m.props,null,x.mode,f),ka(x,null,f,m),f.return=x,f;case Xl:return m=ic(m,x.mode,f),m.return=x,m;case Ft:var j=m._init;return h(x,j(m._payload),f)}if($a(m)||ya(m))return m=ts(m,x.mode,f,null),m.return=x,m;if(typeof m.then=="function")return h(x,Fl(m),f);if(m.$$typeof===kt)return h(x,Pl(x,m,f),f);Jl(x,m)}return null}function p(x,m,f,j){var y=m!==null?m.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return y!==null?null:c(x,m,""+f,j);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Vl:return f.key===y?o(x,m,f,j):null;case Xl:return f.key===y?u(x,m,f,j):null;case Ft:return y=f._init,p(x,m,y(f._payload),j)}if($a(f)||ya(f))return y!==null?null:d(x,m,f,j,null);if(typeof f.then=="function")return p(x,m,Fl(f),j);if(f.$$typeof===kt)return p(x,m,Pl(x,f,j),j);Jl(x,f)}return null}function v(x,m,f,j,y){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return x=x.get(f)||null,c(m,x,""+j,y);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Vl:return x=x.get(j.key===null?f:j.key)||null,o(m,x,j,y);case Xl:return x=x.get(j.key===null?f:j.key)||null,u(m,x,j,y);case Ft:var b=j._init;return v(x,m,f,b(j._payload),y)}if($a(j)||ya(j))return x=x.get(f)||null,d(m,x,j,y,null);if(typeof j.then=="function")return v(x,m,f,Fl(j),y);if(j.$$typeof===kt)return v(x,m,f,Pl(m,j,y),y);Jl(m,j)}return null}function w(x,m,f,j){for(var y=null,b=null,S=m,_=m=0,A=null;S!==null&&_<f.length;_++){S.index>_?(A=S,S=null):A=S.sibling;var $=p(x,S,f[_],j);if($===null){S===null&&(S=A);break}n&&S&&$.alternate===null&&e(x,S),m=r($,m,_),b===null?y=$:b.sibling=$,b=$,S=A}if(_===f.length)return s(x,S),te&&Jt(x,_),y;if(S===null){for(;_<f.length;_++)S=h(x,f[_],j),S!==null&&(m=r(S,m,_),b===null?y=S:b.sibling=S,b=S);return te&&Jt(x,_),y}for(S=a(S);_<f.length;_++)A=v(S,x,_,f[_],j),A!==null&&(n&&A.alternate!==null&&S.delete(A.key===null?_:A.key),m=r(A,m,_),b===null?y=A:b.sibling=A,b=A);return n&&S.forEach(function(U){return e(x,U)}),te&&Jt(x,_),y}function N(x,m,f,j){if(f==null)throw Error(C(151));for(var y=null,b=null,S=m,_=m=0,A=null,$=f.next();S!==null&&!$.done;_++,$=f.next(),null){S.index>_?(A=S,S=null):A=S.sibling;var U=p(x,S,$.value,j);if(U===null){S===null&&(S=A);break}n&&S&&U.alternate===null&&e(x,S),m=r(U,m,_),b===null?y=U:b.sibling=U,b=U,S=A}if($.done)return s(x,S),te&&Jt(x,_),y;if(S===null){for(;!$.done;_++,$=f.next(),null)$=h(x,$.value,j),$!==null&&(m=r($,m,_),b===null?y=$:b.sibling=$,b=$);return te&&Jt(x,_),y}for(S=a(S);!$.done;_++,$=f.next(),null)$=v(S,x,_,$.value,j),$!==null&&(n&&$.alternate!==null&&S.delete($.key===null?_:$.key),m=r($,m,_),b===null?y=$:b.sibling=$,b=$);return n&&S.forEach(function(O){return e(x,O)}),te&&Jt(x,_),y}function k(x,m,f,j){if(typeof f=="object"&&f!==null&&f.type===Ta&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Vl:e:{for(var y=f.key,b=m;b!==null;){if(b.key===y){if(y=f.type,y===Ta){if(b.tag===7){s(x,b.sibling),m=l(b,f.props.children),m.return=x,x=m;break e}}else if(b.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===Ft&&Id(y)===b.type){s(x,b.sibling),m=l(b,f.props),ka(x,b,m,f),m.return=x,x=m;break e}s(x,b);break}else e(x,b);b=b.sibling}f.type===Ta?(m=ts(f.props.children,x.mode,j,f.key),m.return=x,x=m):(j=jr(f.type,f.key,f.props,null,x.mode,j),ka(x,m,j,f),j.return=x,x=j)}return i(x);case Xl:e:{for(b=f.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===f.containerInfo&&m.stateNode.implementation===f.implementation){s(x,m.sibling),m=l(m,f.children||[]),m.return=x,x=m;break e}else{s(x,m);break}else e(x,m);m=m.sibling}m=ic(f,x.mode,j),m.return=x,x=m}return i(x);case Ft:return b=f._init,k(x,m,b(f._payload),j)}if($a(f))return w(x,m,f,j);if(ya(f)){if(b=ya(f),typeof b!="function")throw Error(C(150));return f=b.call(f),N(x,m,f,j)}if(typeof f.then=="function")return k(x,m,Fl(f),j);if(f.$$typeof===kt)return k(x,m,Pl(x,f,j),j);Jl(x,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,m!==null&&m.tag===6?(s(x,m.sibling),m=l(m,f),m.return=x,x=m):(s(x,m),m=rc(f,x.mode,j),m.return=x,x=m),i(x)):s(x,m)}return function(x,m,f,j){return ol=0,x=k(x,m,f,j),Gs=null,x}}var ls=Ch(!0),Eh=Ch(!1),ea=Qn(null),Br=Qn(0);function em(n,e){n=dt,je(Br,n),je(ea,e),dt=n|e.baseLanes}function Xc(){je(Br,dt),je(ea,ea.current)}function Jo(){dt=Br.current,Oe(ea),Oe(Br)}var Gn=Qn(null),Xn=null;function yt(n){var e=n.alternate;je($e,$e.current&1),je(Gn,n),Xn===null&&(e===null||ea.current!==null||e.memoizedState!==null)&&(Xn=n)}function Ah(n){if(n.tag===22){if(je($e,$e.current),je(Gn,n),Xn===null){var e=n.alternate;e!==null&&e.memoizedState!==null&&(Xn=n)}}else Nt()}function Nt(){je($e,$e.current),je(Gn,Gn.current)}function at(n){Oe(Gn),Xn===n&&(Xn=null),Oe($e)}var $e=Qn(0);function Or(n){for(var e=n;e!==null;){if(e.tag===13){var s=e.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uv=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(s,a){n.push(a)}};this.abort=function(){e.aborted=!0,n.forEach(function(s){return s()})}},Hv=Le.unstable_scheduleCallback,qv=Le.unstable_NormalPriority,Te={$$typeof:kt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wo(){return{controller:new Uv,data:new Map,refCount:0}}function El(n){n.refCount--,n.refCount===0&&Hv(qv,function(){n.controller.abort()})}var Qa=null,Gc=0,na=0,Zs=null;function Vv(n,e){if(Qa===null){var s=Qa=[];Gc=0,na=Nu(),Zs={status:"pending",value:void 0,then:function(a){s.push(a)}}}return Gc++,e.then(nm,nm),e}function nm(){if(Qa!==null&&--Gc===0){Zs!==null&&(Zs.status="fulfilled");var n=Qa;Qa=null,na=0,Zs=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Xv(n,e){var s=[],a={status:"pending",value:null,reason:null,then:function(l){s.push(l)}};return n.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<s.length;l++)(0,s[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<s.length;l++)(0,s[l])(void 0)}),a}function Ko(){var n=K.T;return n!==null&&n._callbacks.add(Gv),n}function Gv(n,e){Vv(n,e)}function Rh(n,e){n._callbacks.forEach(function(s){return s(n,e)})}var ns=Qn(null);function Po(){var n=ns.current;return n!==null?n:oe.pooledCache}function hr(n,e){e===null?je(ns,ns.current):je(ns,e.pool)}function Mh(){var n=Po();return n===null?null:{parent:Te._currentValue,pool:n}}var Ut=0,Z=null,ce=null,Ae=null,zr=!1,Ys=!1,rs=!1,Ur=0,ul=0,Qs=null,Zv=0;function ke(){throw Error(C(321))}function Io(n,e){if(e===null)return!1;for(var s=0;s<e.length&&s<n.length;s++)if(!wn(n[s],e[s]))return!1;return!0}function eu(n,e,s,a,l,r){return Ut=r,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,K.H=n===null||n.memoizedState===null?ds:ms,rs=!1,n=s(a,l),rs=!1,Ys&&(n=$h(e,s,a,l)),Th(),n}function Th(){K.H=Zn;var n=ce!==null&&ce.next!==null;if(Ut=0,Ae=ce=Z=null,zr=!1,ul=0,Qs=null,n)throw Error(C(300))}function $h(n,e,s,a){Z=n;var l=0;do{if(Ys&&(Qs=null),ul=0,Ys=!1,25<=l)throw Error(C(301));l+=1,Ae=ce=null,n.updateQueue=null,K.H=ps;var r=e(s,a)}while(Ys);return r}function Yv(){var n=K.H,e=n.useState()[0];return e=typeof e.then=="function"?Al(e):e,n=n.useState()[0],(ce!==null?ce.memoizedState:null)!==n&&(Z.flags|=1024),e}function nu(){var n=Ur!==0;return Ur=0,n}function tu(n,e,s){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~s}function su(n){if(zr){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}zr=!1}Ut=0,Ae=ce=Z=null,Ys=!1,ul=Ur=0,Qs=null}function tn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?Z.memoizedState=Ae=n:Ae=Ae.next=n,Ae}function Re(){if(ce===null){var n=Z.alternate;n=n!==null?n.memoizedState:null}else n=ce.next;var e=Ae===null?Z.memoizedState:Ae.next;if(e!==null)Ae=e,ce=n;else{if(n===null)throw Z.alternate===null?Error(C(467)):Error(C(310));ce=n,n={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Ae===null?Z.memoizedState=Ae=n:Ae=Ae.next=n}return Ae}var fi;fi=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Al(n){var e=ul;return ul+=1,Qs===null&&(Qs=[]),n=_h(Qs,n,e),Z.alternate===null&&(Ae===null?Z.memoizedState===null:Ae.next===null)&&(K.H=ds),n}function hi(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Al(n);if(n.$$typeof===kt)return Ge(n)}throw Error(C(438,String(n)))}function au(n){var e=null,s=Z.updateQueue;if(s!==null&&(e=s.memoCache),e==null){var a=Z.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),s===null&&(s=fi(),Z.updateQueue=s),s.memoCache=e,s=e.data[e.index],s===void 0)for(s=e.data[e.index]=Array(n),a=0;a<n;a++)s[a]=Rg;return e.index++,s}function ut(n,e){return typeof e=="function"?e(n):e}function xr(n){var e=Re();return lu(e,ce,n)}function lu(n,e,s){var a=n.queue;if(a===null)throw Error(C(311));a.lastRenderedReducer=s;var l=n.baseQueue,r=a.pending;if(r!==null){if(l!==null){var i=l.next;l.next=r.next,r.next=i}e.baseQueue=l=r,a.pending=null}if(r=n.baseState,l===null)n.memoizedState=r;else{e=l.next;var c=i=null,o=null,u=e,d=!1;do{var h=u.lane&-536870913;if(h!==u.lane?(ne&h)===h:(Ut&h)===h){var p=u.revertLane;if(p===0)o!==null&&(o=o.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===na&&(d=!0);else if((Ut&p)===p){u=u.next,p===na&&(d=!0);continue}else h={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},o===null?(c=o=h,i=r):o=o.next=h,Z.lanes|=p,mt|=p;h=u.action,rs&&s(r,h),r=u.hasEagerState?u.eagerState:s(r,h)}else p={lane:h,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},o===null?(c=o=p,i=r):o=o.next=p,Z.lanes|=h,mt|=h;u=u.next}while(u!==null&&u!==e);if(o===null?i=r:o.next=c,!wn(r,n.memoizedState)&&(He=!0,d&&(s=Zs,s!==null)))throw s;n.memoizedState=r,n.baseState=i,n.baseQueue=o,a.lastRenderedState=r}return l===null&&(a.lanes=0),[n.memoizedState,a.dispatch]}function Fi(n){var e=Re(),s=e.queue;if(s===null)throw Error(C(311));s.lastRenderedReducer=n;var a=s.dispatch,l=s.pending,r=e.memoizedState;if(l!==null){s.pending=null;var i=l=l.next;do r=n(r,i.action),i=i.next;while(i!==l);wn(r,e.memoizedState)||(He=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),s.lastRenderedState=r}return[r,a]}function Lh(n,e,s){var a=Z,l=Re(),r=te;if(r){if(s===void 0)throw Error(C(407));s=s()}else s=e();var i=!wn((ce||l).memoizedState,s);if(i&&(l.memoizedState=s,He=!0),l=l.queue,ru(Oh.bind(null,a,l,n),[n]),l.getSnapshot!==e||i||Ae!==null&&Ae.memoizedState.tag&1){if(a.flags|=2048,ta(9,Bh.bind(null,a,l,s,e),{destroy:void 0},null),oe===null)throw Error(C(349));r||Ut&60||Dh(a,e,s)}return s}function Dh(n,e,s){n.flags|=16384,n={getSnapshot:e,value:s},e=Z.updateQueue,e===null?(e=fi(),Z.updateQueue=e,e.stores=[n]):(s=e.stores,s===null?e.stores=[n]:s.push(n))}function Bh(n,e,s,a){e.value=s,e.getSnapshot=a,zh(e)&&Uh(n)}function Oh(n,e,s){return s(function(){zh(e)&&Uh(n)})}function zh(n){var e=n.getSnapshot;n=n.value;try{var s=e();return!wn(n,s)}catch{return!0}}function Uh(n){var e=zt(n,2);e!==null&&Ke(e,n,2)}function Zc(n){var e=tn();if(typeof n=="function"){var s=n;n=s(),rs&&(_t(!0),s(),_t(!1))}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ut,lastRenderedState:n},e}function Hh(n,e,s,a){return n.baseState=s,lu(n,ce,typeof a=="function"?a:ut)}function Qv(n,e,s,a,l){if(gi(n))throw Error(C(485));n=e.pending,n===null?(n={payload:l,next:null},n.next=e.pending=n,qh(e,s,a,l)):e.pending=n.next={payload:l,next:n.next}}function qh(n,e,s,a){var l=n.action,r=n.state,i=K.T,c={_callbacks:new Set};K.T=c,e(!0);try{var o=l(r,a);o!==null&&typeof o=="object"&&typeof o.then=="function"?(Rh(c,o),o.then(function(u){n.state=u,Wl(n,e,s)},function(){return Wl(n,e,s)}),s(o)):(s(o),n.state=o,Wl(n,e,s))}catch(u){s({then:function(){},status:"rejected",reason:u}),Wl(n,e,s)}finally{K.T=i}}function Wl(n,e,s){var a=n.pending;if(a!==null){var l=a.next;l===a?n.pending=null:(l=l.next,a.next=l,qh(n,e,s,l.payload))}}function Vh(n,e){return e}function Xh(n,e){if(te){var s=oe.formState;if(s!==null){e:{var a=Z;if(te){if(Ue){n:{for(var l=Ue,r=zn;l.nodeType!==8;){if(!r){l=null;break n}if(l=$n(l.nextSibling),l===null){l=null;break n}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Ue=$n(l.nextSibling),a=l.data==="F!";break e}}as(a)}a=!1}a&&(e=s[0])}}return s=tn(),s.memoizedState=s.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:e},s.queue=a,s=Fs.bind(null,Z,a),a.dispatch=s,a=Zc(!1),r=uu.bind(null,Z,!1,a.queue),a=tn(),l={state:e,dispatch:null,action:n,pending:null},a.queue=l,s=Qv.bind(null,Z,l,r,s),l.dispatch=s,a.memoizedState=n,[e,s,!1]}function Gh(n){var e=Re();return Zh(e,ce,n)}function Zh(n,e,s){e=lu(n,e,Vh)[0],n=xr(ut)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?Al(e):e;var a=Re(),l=a.queue,r=l.dispatch;return s!==a.memoizedState&&(Z.flags|=2048,ta(9,Fv.bind(null,l,s),{destroy:void 0},null)),[e,r,n]}function Fv(n,e){n.action=e}function Yh(n){var e=Re(),s=ce;if(s!==null)return Zh(e,s,n);Re(),e=e.memoizedState,s=Re();var a=s.queue.dispatch;return s.memoizedState=n,[e,a,!1]}function ta(n,e,s,a){return n={tag:n,create:e,inst:s,deps:a,next:null},e=Z.updateQueue,e===null?(e=fi(),Z.updateQueue=e,e.lastEffect=n.next=n):(s=e.lastEffect,s===null?e.lastEffect=n.next=n:(a=s.next,s.next=n,n.next=a,e.lastEffect=n)),n}function Qh(){return Re().memoizedState}function gr(n,e,s,a){var l=tn();Z.flags|=n,l.memoizedState=ta(1|e,s,{destroy:void 0},a===void 0?null:a)}function xi(n,e,s,a){var l=Re();a=a===void 0?null:a;var r=l.memoizedState.inst;ce!==null&&a!==null&&Io(a,ce.memoizedState.deps)?l.memoizedState=ta(e,s,r,a):(Z.flags|=n,l.memoizedState=ta(1|e,s,r,a))}function tm(n,e){gr(8390656,8,n,e)}function ru(n,e){xi(2048,8,n,e)}function Fh(n,e){return xi(4,2,n,e)}function Jh(n,e){return xi(4,4,n,e)}function Wh(n,e){if(typeof e=="function"){n=n();var s=e(n);return function(){typeof s=="function"?s():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Kh(n,e,s){s=s!=null?s.concat([n]):null,xi(4,4,Wh.bind(null,e,n),s)}function iu(){}function Ph(n,e){var s=Re();e=e===void 0?null:e;var a=s.memoizedState;return e!==null&&Io(e,a[1])?a[0]:(s.memoizedState=[n,e],n)}function Ih(n,e){var s=Re();e=e===void 0?null:e;var a=s.memoizedState;return e!==null&&Io(e,a[1])?a[0]:(a=n(),rs&&(_t(!0),n(),_t(!1)),s.memoizedState=[a,e],a)}function cu(n,e,s){return s===void 0||Ut&1073741824?n.memoizedState=e:(n.memoizedState=s,n=V0(),Z.lanes|=n,mt|=n,s)}function e0(n,e,s,a){return wn(s,e)?s:ea.current!==null?(n=cu(n,s,a),wn(n,e)||(He=!0),n):Ut&42?(n=V0(),Z.lanes|=n,mt|=n,e):(He=!0,n.memoizedState=s)}function n0(n,e,s,a,l){var r=ve.p;ve.p=r!==0&&8>r?r:8;var i=K.T,c={_callbacks:new Set};K.T=c,uu(n,!1,e,s);try{var o=l();if(o!==null&&typeof o=="object"&&typeof o.then=="function"){Rh(c,o);var u=Xv(o,a);Fs(n,e,u)}else Fs(n,e,a)}catch(d){Fs(n,e,{then:function(){},status:"rejected",reason:d})}finally{ve.p=r,K.T=i}}function Jv(){}function Yc(n,e,s,a){if(n.tag!==5)throw Error(C(476));var l=t0(n).queue;n0(n,l,e,Va,s===null?Jv:function(){return s0(n),s(a)})}function t0(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:Va,baseState:Va,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ut,lastRenderedState:Va},next:null};var s={};return e.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ut,lastRenderedState:s},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function s0(n){Ko();var e=t0(n).next.queue;Fs(n,e,{})}function ou(){var n=Ge(_r);return n!==null?n:Va}function a0(){return Re().memoizedState}function l0(){return Re().memoizedState}function Wv(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var s=it();n=rt(s);var a=Mt(e,n,s);a!==null&&(Ke(a,e,s),Ja(a,e,s)),e={cache:Wo()},n.payload=e;return}e=e.return}}function Kv(n,e,s){var a=it();s={lane:a,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},gi(n)?r0(e,s):(s=Yo(n,e,s,a),s!==null&&(Ke(s,n,a),i0(s,e,a)))}function Fs(n,e,s){var a=it(),l={lane:a,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(gi(n))r0(e,l);else{var r=n.alternate;if(n.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var i=e.lastRenderedState,c=r(i,s);if(l.hasEagerState=!0,l.eagerState=c,wn(c,i)){pi(n,e,l,0),oe===null&&mi();return}}catch{}finally{}s=Yo(n,e,l,a),s!==null&&(Ke(s,n,a),i0(s,e,a))}}function uu(n,e,s,a){if(Ko(),a={lane:2,revertLane:Nu(),action:a,hasEagerState:!1,eagerState:null,next:null},gi(n)){if(e)throw Error(C(479))}else e=Yo(n,s,a,2),e!==null&&Ke(e,n,2)}function gi(n){var e=n.alternate;return n===Z||e!==null&&e===Z}function r0(n,e){Ys=zr=!0;var s=n.pending;s===null?e.next=e:(e.next=s.next,s.next=e),n.pending=e}function i0(n,e,s){if(s&4194176){var a=e.lanes;a&=n.pendingLanes,s|=a,e.lanes=s,Wf(n,s)}}var Zn={readContext:Ge,use:hi,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke};Zn.useCacheRefresh=ke;Zn.useMemoCache=ke;Zn.useHostTransitionStatus=ke;Zn.useFormState=ke;Zn.useActionState=ke;Zn.useOptimistic=ke;var ds={readContext:Ge,use:hi,useCallback:function(n,e){return tn().memoizedState=[n,e===void 0?null:e],n},useContext:Ge,useEffect:tm,useImperativeHandle:function(n,e,s){s=s!=null?s.concat([n]):null,gr(4194308,4,Wh.bind(null,e,n),s)},useLayoutEffect:function(n,e){return gr(4194308,4,n,e)},useInsertionEffect:function(n,e){gr(4,2,n,e)},useMemo:function(n,e){var s=tn();e=e===void 0?null:e;var a=n();return rs&&(_t(!0),n(),_t(!1)),s.memoizedState=[a,e],a},useReducer:function(n,e,s){var a=tn();if(s!==void 0){var l=s(e);rs&&(_t(!0),s(e),_t(!1))}else l=e;return a.memoizedState=a.baseState=l,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:l},a.queue=n,n=n.dispatch=Kv.bind(null,Z,n),[a.memoizedState,n]},useRef:function(n){var e=tn();return n={current:n},e.memoizedState=n},useState:function(n){n=Zc(n);var e=n.queue,s=Fs.bind(null,Z,e);return e.dispatch=s,[n.memoizedState,s]},useDebugValue:iu,useDeferredValue:function(n,e){var s=tn();return cu(s,n,e)},useTransition:function(){var n=Zc(!1);return n=n0.bind(null,Z,n.queue,!0,!1),tn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,s){var a=Z,l=tn();if(te){if(s===void 0)throw Error(C(407));s=s()}else{if(s=e(),oe===null)throw Error(C(349));ne&60||Dh(a,e,s)}l.memoizedState=s;var r={value:s,getSnapshot:e};return l.queue=r,tm(Oh.bind(null,a,r,n),[n]),a.flags|=2048,ta(9,Bh.bind(null,a,r,s,e),{destroy:void 0},null),s},useId:function(){var n=tn(),e=oe.identifierPrefix;if(te){var s=st,a=tt;s=(a&~(1<<32-Nn(a)-1)).toString(32)+s,e=":"+e+"R"+s,s=Ur++,0<s&&(e+="H"+s.toString(32)),e+=":"}else s=Zv++,e=":"+e+"r"+s.toString(32)+":";return n.memoizedState=e},useCacheRefresh:function(){return tn().memoizedState=Wv.bind(null,Z)}};ds.useMemoCache=au;ds.useHostTransitionStatus=ou;ds.useFormState=Xh;ds.useActionState=Xh;ds.useOptimistic=function(n){var e=tn();e.memoizedState=e.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=s,e=uu.bind(null,Z,!0,s),s.dispatch=e,[n,e]};var ms={readContext:Ge,use:hi,useCallback:Ph,useContext:Ge,useEffect:ru,useImperativeHandle:Kh,useInsertionEffect:Fh,useLayoutEffect:Jh,useMemo:Ih,useReducer:xr,useRef:Qh,useState:function(){return xr(ut)},useDebugValue:iu,useDeferredValue:function(n,e){var s=Re();return e0(s,ce.memoizedState,n,e)},useTransition:function(){var n=xr(ut)[0],e=Re().memoizedState;return[typeof n=="boolean"?n:Al(n),e]},useSyncExternalStore:Lh,useId:a0};ms.useCacheRefresh=l0;ms.useMemoCache=au;ms.useHostTransitionStatus=ou;ms.useFormState=Gh;ms.useActionState=Gh;ms.useOptimistic=function(n,e){var s=Re();return Hh(s,ce,n,e)};var ps={readContext:Ge,use:hi,useCallback:Ph,useContext:Ge,useEffect:ru,useImperativeHandle:Kh,useInsertionEffect:Fh,useLayoutEffect:Jh,useMemo:Ih,useReducer:Fi,useRef:Qh,useState:function(){return Fi(ut)},useDebugValue:iu,useDeferredValue:function(n,e){var s=Re();return ce===null?cu(s,n,e):e0(s,ce.memoizedState,n,e)},useTransition:function(){var n=Fi(ut)[0],e=Re().memoizedState;return[typeof n=="boolean"?n:Al(n),e]},useSyncExternalStore:Lh,useId:a0};ps.useCacheRefresh=l0;ps.useMemoCache=au;ps.useHostTransitionStatus=ou;ps.useFormState=Yh;ps.useActionState=Yh;ps.useOptimistic=function(n,e){var s=Re();return ce!==null?Hh(s,ce,n,e):(s.baseState=n,[n,s.queue.dispatch])};var Hr=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function c0(n){Hr(n)}function o0(n){console.error(n)}function u0(n){Hr(n)}function qr(n,e){try{var s=n.onUncaughtError;s(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function sm(n,e,s){try{var a=n.onCaughtError;a(s.value,{componentStack:s.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Qc(n,e,s){return s=rt(s),s.tag=3,s.payload={element:null},s.callback=function(){qr(n,e)},s}function d0(n){return n=rt(n),n.tag=3,n}function m0(n,e,s,a){var l=s.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;n.payload=function(){return l(r)},n.callback=function(){sm(e,s,a)}}var i=s.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){sm(e,s,a),typeof l!="function"&&($t===null?$t=new Set([this]):$t.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Pv(n,e,s,a,l){if(s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(s=Gn.current,s!==null){switch(s.tag){case 13:return Xn===null?co():s.alternate===null&&Se===0&&(Se=3),s.flags&=-257,s.flags|=65536,s.lanes=l,a===Vc?s.flags|=16384:(e=s.updateQueue,e===null?s.updateQueue=new Set([a]):e.add(a),cc(n,a,l)),!1;case 22:return s.flags|=65536,a===Vc?s.flags|=16384:(e=s.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},s.updateQueue=e):(s=e.retryQueue,s===null?e.retryQueue=new Set([a]):s.add(a)),cc(n,a,l)),!1}throw Error(C(435,s.tag))}return cc(n,a,l),co(),!1}if(te)return e=Gn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==qc&&(n=Error(C(422),{cause:a}),cl(yn(n,s)))):(a!==qc&&(e=Error(C(423),{cause:a}),cl(yn(e,s))),n=n.current.alternate,n.flags|=65536,l&=-l,n.lanes|=l,a=yn(a,s),l=Qc(n.stateNode,a,l),ec(n,l),Se!==4&&(Se=2)),!1;var r=Error(C(520),{cause:a});if(r=yn(r,s),Ia===null?Ia=[r]:Ia.push(r),Se!==4&&(Se=2),e===null)return!0;a=yn(a,s),s=e;do{switch(s.tag){case 3:return s.flags|=65536,n=l&-l,s.lanes|=n,n=Qc(s.stateNode,a,n),ec(s,n),!1;case 1:if(e=s.type,r=s.stateNode,(s.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))))return s.flags|=65536,l&=-l,s.lanes|=l,l=d0(l),m0(l,n,s,a),ec(s,l),!1}s=s.return}while(s!==null);return!1}var p0=Error(C(461)),He=!1;function ze(n,e,s,a){e.child=n===null?Eh(e,null,s,a):ls(e,n.child,s,a)}function am(n,e,s,a,l){s=s.render;var r=e.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return is(e,l),a=eu(n,e,s,i,r,l),c=nu(),n!==null&&!He?(tu(n,e,l),Yn(n,e,l)):(te&&c&&Qo(e),e.flags|=1,ze(n,e,a,l),e.child)}function lm(n,e,s,a,l){if(n===null){var r=s.type;return typeof r=="function"&&!xu(r)&&r.defaultProps===void 0&&s.compare===null?(e.tag=15,e.type=r,f0(n,e,r,a,l)):(n=jr(s.type,null,a,e,e.mode,l),n.ref=e.ref,n.return=e,e.child=n)}if(r=n.child,!(n.lanes&l)){var i=r.memoizedProps;if(s=s.compare,s=s!==null?s:il,s(i,a)&&n.ref===e.ref)return Yn(n,e,l)}return e.flags|=1,n=Tt(r,a),n.ref=e.ref,n.return=e,e.child=n}function f0(n,e,s,a,l){if(n!==null){var r=n.memoizedProps;if(il(r,a)&&n.ref===e.ref)if(He=!1,e.pendingProps=a=r,(n.lanes&l)!==0)n.flags&131072&&(He=!0);else return e.lanes=n.lanes,Yn(n,e,l)}return Fc(n,e,s,a,l)}function h0(n,e,s){var a=e.pendingProps,l=a.children,r=(e.stateNode._pendingVisibility&2)!==0,i=n!==null?n.memoizedState:null;if(Fa(n,e),a.mode==="hidden"||r){if(e.flags&128){if(s=i!==null?i.baseLanes|s:s,n!==null){for(a=e.child=n.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;e.childLanes=l&~s}else e.childLanes=0,e.child=null;return rm(n,e,s)}if(s&536870912)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&hr(e,i!==null?i.cachePool:null),i!==null?em(e,i):Xc(),Ah(e);else return e.lanes=e.childLanes=536870912,rm(n,e,i!==null?i.baseLanes|s:s)}else i!==null?(hr(e,i.cachePool),em(e,i),Nt(),e.memoizedState=null):(n!==null&&hr(e,null),Xc(),Nt());return ze(n,e,l,s),e.child}function rm(n,e,s){var a=Po();return a=a===null?null:{parent:Te._currentValue,pool:a},e.memoizedState={baseLanes:s,cachePool:a},n!==null&&hr(e,null),Xc(),Ah(e),null}function Fa(n,e){var s=e.ref;if(s===null)n!==null&&n.ref!==null&&(e.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(C(284));(n===null||n.ref!==s)&&(e.flags|=2097664)}}function Fc(n,e,s,a,l){return is(e,l),s=eu(n,e,s,a,void 0,l),a=nu(),n!==null&&!He?(tu(n,e,l),Yn(n,e,l)):(te&&a&&Qo(e),e.flags|=1,ze(n,e,s,l),e.child)}function im(n,e,s,a,l,r){return is(e,r),s=$h(e,a,s,l),Th(),a=nu(),n!==null&&!He?(tu(n,e,r),Yn(n,e,r)):(te&&a&&Qo(e),e.flags|=1,ze(n,e,s,r),e.child)}function cm(n,e,s,a,l){if(is(e,l),e.stateNode===null){var r=Bs,i=s.contextType;typeof i=="object"&&i!==null&&(r=Ge(i)),r=new s(a,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=no,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=a,r.state=e.memoizedState,r.refs={},mu(e),i=s.contextType,r.context=typeof i=="object"&&i!==null?Ge(i):Bs,r.state=e.memoizedState,i=s.getDerivedStateFromProps,typeof i=="function"&&(nc(e,s,i,a),r.state=e.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&no.enqueueReplaceState(r,r.state,null),Ka(e,a,r,l),Wa(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(n===null){r=e.stateNode;var c=e.memoizedProps,o=cs(s,c);r.props=o;var u=r.context,d=s.contextType;i=Bs,typeof d=="object"&&d!==null&&(i=Ge(d));var h=s.getDerivedStateFromProps;d=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c||u!==i)&&mm(e,r,a,i),bt=!1;var p=e.memoizedState;r.state=p,Ka(e,a,r,l),Wa(),u=e.memoizedState,c||p!==u||bt?(typeof h=="function"&&(nc(e,s,h,a),u=e.memoizedState),(o=bt||dm(e,s,o,a,p,u,i))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=u),r.props=a,r.state=u,r.context=i,a=o):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{r=e.stateNode,Ic(n,e),i=e.memoizedProps,d=cs(s,i),r.props=d,h=e.pendingProps,p=r.context,u=s.contextType,o=Bs,typeof u=="object"&&u!==null&&(o=Ge(u)),c=s.getDerivedStateFromProps,(u=typeof c=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==h||p!==o)&&mm(e,r,a,o),bt=!1,p=e.memoizedState,r.state=p,Ka(e,a,r,l),Wa();var v=e.memoizedState;i!==h||p!==v||bt?(typeof c=="function"&&(nc(e,s,c,a),v=e.memoizedState),(d=bt||dm(e,s,d,a,p,v,o)||!1)?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,v,o),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,v,o)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=v),r.props=a,r.state=v,r.context=o,a=d):(typeof r.componentDidUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),a=!1)}return r=a,Fa(n,e),a=(e.flags&128)!==0,r||a?(r=e.stateNode,s=a&&typeof s.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,n!==null&&a?(e.child=ls(e,n.child,null,l),e.child=ls(e,null,s,l)):ze(n,e,s,l),e.memoizedState=r.state,n=e.child):n=Yn(n,e,l),n}function om(n,e,s,a){return Cl(),e.flags|=256,ze(n,e,s,a),e.child}var Ji={dehydrated:null,treeContext:null,retryLane:0};function Wi(n){return{baseLanes:n,cachePool:Mh()}}function Ki(n,e,s){return n=n!==null?n.childLanes&~s:0,e&&(n|=sn),n}function x0(n,e,s){var a=e.pendingProps,l=!1,r=(e.flags&128)!==0,i;if((i=r)||(i=n!==null&&n.memoizedState===null?!1:($e.current&2)!==0),i&&(l=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,n===null){if(te){if(l?yt(e):Nt(),te){var c=Ue,o;if(o=c){e:{for(o=c,c=zn;o.nodeType!==8;){if(!c){c=null;break e}if(o=$n(o.nextSibling),o===null){c=null;break e}}c=o}c!==null?(e.memoizedState={dehydrated:c,treeContext:es!==null?{id:tt,overflow:st}:null,retryLane:536870912},o=Rn(18,null,null,0),o.stateNode=c,o.return=e,e.child=o,Fe=e,Ue=null,o=!0):o=!1}o||as(e)}if(c=e.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return c.data==="$!"?e.lanes=16:e.lanes=536870912,null;at(e)}return c=a.children,a=a.fallback,l?(Nt(),l=e.mode,c=Wc({mode:"hidden",children:c},l),a=ts(a,l,s,null),c.return=e,a.return=e,c.sibling=a,e.child=c,l=e.child,l.memoizedState=Wi(s),l.childLanes=Ki(n,i,s),e.memoizedState=Ji,a):(yt(e),Jc(e,c))}if(o=n.memoizedState,o!==null&&(c=o.dehydrated,c!==null)){if(r)e.flags&256?(yt(e),e.flags&=-257,e=Pi(n,e,s)):e.memoizedState!==null?(Nt(),e.child=n.child,e.flags|=128,e=null):(Nt(),l=a.fallback,c=e.mode,a=Wc({mode:"visible",children:a.children},c),l=ts(l,c,s,null),l.flags|=2,a.return=e,l.return=e,a.sibling=l,e.child=a,ls(e,n.child,null,s),a=e.child,a.memoizedState=Wi(s),a.childLanes=Ki(n,i,s),e.memoizedState=Ji,e=l);else if(yt(e),c.data==="$!"){if(i=c.nextSibling&&c.nextSibling.dataset,i)var u=i.dgst;i=u,a=Error(C(419)),a.stack="",a.digest=i,cl({value:a,source:null,stack:null}),e=Pi(n,e,s)}else if(i=(s&n.childLanes)!==0,He||i){if(i=oe,i!==null){if(a=s&-s,a&42)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=a&(i.suspendedLanes|s)?0:a,a!==0&&a!==o.retryLane)throw o.retryLane=a,zt(n,a),Ke(i,n,a),p0}c.data==="$?"||co(),e=Pi(n,e,s)}else c.data==="$?"?(e.flags|=128,e.child=n.child,e=f2.bind(null,n),c._reactRetry=e,e=null):(n=o.treeContext,Ue=$n(c.nextSibling),Fe=e,te=!0,An=null,zn=!1,n!==null&&(vn[jn++]=tt,vn[jn++]=st,vn[jn++]=es,tt=n.id,st=n.overflow,es=e),e=Jc(e,a.children),e.flags|=4096);return e}return l?(Nt(),l=a.fallback,c=e.mode,o=n.child,u=o.sibling,a=Tt(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&31457280,u!==null?l=Tt(u,l):(l=ts(l,c,s,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,a=l,l=e.child,c=n.child.memoizedState,c===null?c=Wi(s):(o=c.cachePool,o!==null?(u=Te._currentValue,o=o.parent!==u?{parent:u,pool:u}:o):o=Mh(),c={baseLanes:c.baseLanes|s,cachePool:o}),l.memoizedState=c,l.childLanes=Ki(n,i,s),e.memoizedState=Ji,a):(yt(e),s=n.child,n=s.sibling,s=Tt(s,{mode:"visible",children:a.children}),s.return=e,s.sibling=null,n!==null&&(i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)),e.child=s,e.memoizedState=null,s)}function Jc(n,e){return e=Wc({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Wc(n,e){return H0(n,e,0,null)}function Pi(n,e,s){return ls(e,n.child,null,s),n=Jc(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function um(n,e,s){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),Pc(n.return,e,s)}function Ii(n,e,s,a,l){var r=n.memoizedState;r===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:s,tailMode:l}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=s,r.tailMode=l)}function g0(n,e,s){var a=e.pendingProps,l=a.revealOrder,r=a.tail;if(ze(n,e,a.children,s),a=$e.current,a&2)a=a&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&um(n,s,e);else if(n.tag===19)um(n,s,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}a&=1}switch(je($e,a),l){case"forwards":for(s=e.child,l=null;s!==null;)n=s.alternate,n!==null&&Or(n)===null&&(l=s),s=s.sibling;s=l,s===null?(l=e.child,e.child=null):(l=s.sibling,s.sibling=null),Ii(e,!1,l,s,r);break;case"backwards":for(s=null,l=e.child,e.child=null;l!==null;){if(n=l.alternate,n!==null&&Or(n)===null){e.child=l;break}n=l.sibling,l.sibling=s,s=l,l=n}Ii(e,!0,s,null,r);break;case"together":Ii(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yn(n,e,s){if(n!==null&&(e.dependencies=n.dependencies),mt|=e.lanes,!(s&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(C(153));if(e.child!==null){for(n=e.child,s=Tt(n,n.pendingProps),e.child=s,s.return=e;n.sibling!==null;)n=n.sibling,s=s.sibling=Tt(n,n.pendingProps),s.return=e;s.sibling=null}return e.child}function Iv(n,e,s){switch(e.tag){case 3:Cr(e,e.stateNode.containerInfo),wt(e,Te,n.memoizedState.cache),Cl();break;case 27:case 5:Mc(e);break;case 4:Cr(e,e.stateNode.containerInfo);break;case 10:wt(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(yt(e),e.flags|=128,null):s&e.child.childLanes?x0(n,e,s):(yt(e),n=Yn(n,e,s),n!==null?n.sibling:null);yt(e);break;case 19:if(a=(s&e.childLanes)!==0,n.flags&128){if(a)return g0(n,e,s);e.flags|=128}var l=e.memoizedState;if(l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),je($e,$e.current),a)break;return null;case 22:case 23:return e.lanes=0,h0(n,e,s);case 24:wt(e,Te,n.memoizedState.cache)}return Yn(n,e,s)}function v0(n,e,s){if(n!==null)if(n.memoizedProps!==e.pendingProps)He=!0;else{if(!(n.lanes&s)&&!(e.flags&128))return He=!1,Iv(n,e,s);He=!!(n.flags&131072)}else He=!1,te&&e.flags&1048576&&Sh(e,Dr,e.index);switch(e.lanes=0,e.tag){case 16:e:{n=e.pendingProps;var a=e.elementType,l=a._init;if(a=l(a._payload),e.type=a,typeof a=="function")xu(a)?(n=cs(a,n),e.tag=1,e=cm(null,e,a,n,s)):(e.tag=0,e=Fc(null,e,a,n,s));else{if(a!=null){if(l=a.$$typeof,l===zf){e.tag=11,e=am(null,e,a,n,s);break e}else if(l===Uf){e.tag=14,e=lm(null,e,a,n,s);break e}}throw Error(C(306,a,""))}}return e;case 0:return Fc(n,e,e.type,e.pendingProps,s);case 1:return a=e.type,l=cs(a,e.pendingProps),cm(n,e,a,l,s);case 3:e:{if(Cr(e,e.stateNode.containerInfo),n===null)throw Error(C(387));var r=e.pendingProps;l=e.memoizedState,a=l.element,Ic(n,e),Ka(e,r,null,s);var i=e.memoizedState;if(r=i.cache,wt(e,Te,r),r!==l.cache&&Kl(e,Te,s),Wa(),r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=om(n,e,r,s);break e}else if(r!==a){a=yn(Error(C(424)),e),cl(a),e=om(n,e,r,s);break e}else for(Ue=$n(e.stateNode.containerInfo.firstChild),Fe=e,te=!0,An=null,zn=!0,s=Eh(e,null,r,s),e.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Cl(),r===a){e=Yn(n,e,s);break e}ze(n,e,r,s)}e=e.child}return e;case 26:return Fa(n,e),s=e.memoizedState=H2(e.type,n===null?null:n.memoizedProps,e.pendingProps),n!==null||te||s!==null||(s=e.type,n=e.pendingProps,a=Jr(Rt.current).createElement(s),a[Xe]=e,a[We]=n,qe(a,s,n),Be(a),e.stateNode=a),null;case 27:return Mc(e),n===null&&te&&(a=e.stateNode=ax(e.type,e.pendingProps,Rt.current),Fe=e,zn=!0,Ue=$n(a.firstChild)),a=e.pendingProps.children,n!==null||te?ze(n,e,a,s):e.child=ls(e,null,a,s),Fa(n,e),e.child;case 5:return n===null&&te&&((l=a=Ue)&&(a=A2(a,e.type,e.pendingProps,zn),a!==null?(e.stateNode=a,Fe=e,Ue=$n(a.firstChild),zn=!1,l=!0):l=!1),l||as(e)),Mc(e),l=e.type,r=e.pendingProps,i=n!==null?n.memoizedProps:null,a=r.children,ho(l,r)?a=null:i!==null&&ho(l,i)&&(e.flags|=32),e.memoizedState!==null&&(l=eu(n,e,Yv,null,null,s),_r._currentValue=l,He&&n!==null&&n.memoizedState.memoizedState!==l&&Kl(e,_r,s)),Fa(n,e),ze(n,e,a,s),e.child;case 6:return n===null&&te&&((n=s=Ue)&&(s=R2(s,e.pendingProps,zn),s!==null?(e.stateNode=s,Fe=e,Ue=null,n=!0):n=!1),n||as(e)),null;case 13:return x0(n,e,s);case 4:return Cr(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=ls(e,null,a,s):ze(n,e,a,s),e.child;case 11:return am(n,e,e.type,e.pendingProps,s);case 7:return ze(n,e,e.pendingProps,s),e.child;case 8:return ze(n,e,e.pendingProps.children,s),e.child;case 12:return ze(n,e,e.pendingProps.children,s),e.child;case 10:e:{if(a=e.type,l=e.pendingProps,r=e.memoizedProps,i=l.value,wt(e,a,i),r!==null)if(wn(r.value,i)){if(r.children===l.children){e=Yn(n,e,s);break e}}else Kl(e,a,s);ze(n,e,l.children,s),e=e.child}return e;case 9:return l=e.type._context,a=e.pendingProps.children,is(e,s),l=Ge(l),a=a(l),e.flags|=1,ze(n,e,a,s),e.child;case 14:return lm(n,e,e.type,e.pendingProps,s);case 15:return f0(n,e,e.type,e.pendingProps,s);case 19:return g0(n,e,s);case 22:return h0(n,e,s);case 24:return is(e,s),a=Ge(Te),n===null?(l=Po(),l===null&&(l=oe,r=Wo(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=s),l=r),e.memoizedState={parent:a,cache:l},mu(e),wt(e,Te,l)):(n.lanes&s&&(Ic(n,e),Ka(e,null,null,s),Wa()),l=n.memoizedState,r=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),wt(e,Te,a)):(a=r.cache,wt(e,Te,a),a!==l.cache&&Kl(e,Te,s))),ze(n,e,e.pendingProps.children,s),e.child}throw Error(C(156,e.tag))}var Kc=Qn(null),vi=null,Us=null,du=null;function ji(){du=Us=vi=null}function wt(n,e,s){je(Kc,e._currentValue),e._currentValue=s}function lt(n){n._currentValue=Kc.current,Oe(Kc)}function Pc(n,e,s){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===s)break;n=n.return}}function Kl(n,e,s){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null)for(var r=a.child,i=l.firstContext;i!==null;){if(i.context===e){if(a.tag===1){i=rt(s&-s),i.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var o=c.pending;o===null?i.next=i:(i.next=o.next,o.next=i),c.pending=i}}a.lanes|=s,i=a.alternate,i!==null&&(i.lanes|=s),Pc(a.return,s,n),l.lanes|=s;break}i=i.next}else if(a.tag===10)r=a.type===n.type?null:a.child;else if(a.tag===18){if(r=a.return,r===null)throw Error(C(341));r.lanes|=s,l=r.alternate,l!==null&&(l.lanes|=s),Pc(r,s,n),r=a.sibling}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===n){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function is(n,e){vi=n,du=Us=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(He=!0),n.firstContext=null)}function Ge(n){return j0(vi,n)}function Pl(n,e,s){return vi===null&&is(n,s),j0(n,e)}function j0(n,e){var s=e._currentValue;if(du!==e)if(e={context:e,memoizedValue:s,next:null},Us===null){if(n===null)throw Error(C(308));Us=e,n.dependencies={lanes:0,firstContext:e}}else Us=Us.next=e;return s}var bt=!1;function mu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ic(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function rt(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Mt(n,e,s){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,le&2){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=$r(n),wh(n,null,s),e}return pi(n,a,e,s),$r(n)}function Ja(n,e,s){if(e=e.updateQueue,e!==null&&(e=e.shared,(s&4194176)!==0)){var a=e.lanes;a&=n.pendingLanes,s|=a,e.lanes=s,Wf(n,s)}}function ec(n,e){var s=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,s===a)){var l=null,r=null;if(s=s.firstBaseUpdate,s!==null){do{var i={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};r===null?l=r=i:r=r.next=i,s=s.next}while(s!==null);r===null?l=r=e:r=r.next=e}else l=r=e;s={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=e:n.next=e,s.lastBaseUpdate=e}var eo=!1;function Wa(){if(eo){var n=Zs;if(n!==null)throw n}}function Ka(n,e,s,a){eo=!1;var l=n.updateQueue;bt=!1;var r=l.firstBaseUpdate,i=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var o=c,u=o.next;o.next=null,i===null?r=u:i.next=u,i=o;var d=n.alternate;d!==null&&(d=d.updateQueue,c=d.lastBaseUpdate,c!==i&&(c===null?d.firstBaseUpdate=u:c.next=u,d.lastBaseUpdate=o))}if(r!==null){var h=l.baseState;i=0,d=u=o=null,c=r;do{var p=c.lane&-536870913,v=p!==c.lane;if(v?(ne&p)===p:(a&p)===p){p!==0&&p===na&&(eo=!0),d!==null&&(d=d.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var w=n,N=c;p=e;var k=s;switch(N.tag){case 1:if(w=N.payload,typeof w=="function"){h=w.call(k,h,p);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=N.payload,p=typeof w=="function"?w.call(k,h,p):w,p==null)break e;h=be({},h,p);break e;case 2:bt=!0}}p=c.callback,p!==null&&(n.flags|=64,v&&(n.flags|=8192),v=l.callbacks,v===null?l.callbacks=[p]:v.push(p))}else v={lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},d===null?(u=d=v,o=h):d=d.next=v,i|=p;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;v=c,c=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);d===null&&(o=h),l.baseState=o,l.firstBaseUpdate=u,l.lastBaseUpdate=d,r===null&&(l.shared.lanes=0),mt|=i,n.lanes=i,n.memoizedState=h}}function b0(n,e){if(typeof n!="function")throw Error(C(191,n));n.call(e)}function y0(n,e){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)b0(s[n],e)}function nc(n,e,s,a){e=n.memoizedState,s=s(a,e),s=s==null?e:be({},e,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var no={isMounted:function(n){return(n=n._reactInternals)?ca(n)===n:!1},enqueueSetState:function(n,e,s){n=n._reactInternals;var a=it(),l=rt(a);l.payload=e,s!=null&&(l.callback=s),e=Mt(n,l,a),e!==null&&(Ke(e,n,a),Ja(e,n,a))},enqueueReplaceState:function(n,e,s){n=n._reactInternals;var a=it(),l=rt(a);l.tag=1,l.payload=e,s!=null&&(l.callback=s),e=Mt(n,l,a),e!==null&&(Ke(e,n,a),Ja(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var s=it(),a=rt(s);a.tag=2,e!=null&&(a.callback=e),e=Mt(n,a,s),e!==null&&(Ke(e,n,s),Ja(e,n,s))}};function dm(n,e,s,a,l,r,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,r,i):e.prototype&&e.prototype.isPureReactComponent?!il(s,a)||!il(l,r):!0}function mm(n,e,s,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(s,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(s,a),e.state!==n&&no.enqueueReplaceState(e,e.state,null)}function cs(n,e){var s=e;if("ref"in e){s={};for(var a in e)a!=="ref"&&(s[a]=e[a])}if(n=n.defaultProps){s===e&&(s=be({},s));for(var l in n)s[l]===void 0&&(s[l]=n[l])}return s}var nt=!1,Ve=!1,tc=!1,pm=typeof WeakSet=="function"?WeakSet:Set,De=null;function N0(n,e){e.props=cs(n.type,n.memoizedProps),e.state=n.memoizedState,e.componentWillUnmount()}function Pt(n,e){try{var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 26:case 27:case 5:var l=a;break;default:l=a}typeof s=="function"?n.refCleanup=s(l):s.current=l}}catch(r){pe(n,e,r)}}function un(n,e){var s=n.ref,a=n.refCleanup;if(s!==null)if(typeof a=="function")try{a()}catch(l){pe(n,e,l)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(l){pe(n,e,l)}else s.current=null}function to(n,e,s){try{s()}catch(a){pe(n,e,a)}}var fm=!1;function e2(n,e){if(po=Ir,n=xh(),Go(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var a=s.getSelection&&s.getSelection();if(a&&a.rangeCount!==0){s=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{s.nodeType,r.nodeType}catch{s=null;break e}var i=0,c=-1,o=-1,u=0,d=0,h=n,p=null;n:for(;;){for(var v;h!==s||l!==0&&h.nodeType!==3||(c=i+l),h!==r||a!==0&&h.nodeType!==3||(o=i+a),h.nodeType===3&&(i+=h.nodeValue.length),(v=h.firstChild)!==null;)p=h,h=v;for(;;){if(h===n)break n;if(p===s&&++u===l&&(c=i),p===r&&++d===a&&(o=i),(v=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=v}s=c===-1||o===-1?null:{start:c,end:o}}else s=null}s=s||{start:0,end:0}}else s=null;for(fo={focusedElem:n,selectionRange:s},Ir=!1,De=e;De!==null;)if(e=De,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,De=n;else for(;De!==null;){e=De;try{var w=e.alternate,N=e.flags;switch(e.tag){case 0:break;case 11:case 15:break;case 1:if(N&1024&&w!==null){var k=w.memoizedState,x=e.stateNode,m=x.getSnapshotBeforeUpdate(cs(e.type,w.memoizedProps),k);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:if(N&1024){var f=e.stateNode.containerInfo,j=f.nodeType;if(j===9)xo(f);else if(j===1)switch(f.nodeName){case"HEAD":case"HTML":case"BODY":xo(f);break;default:f.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(N&1024)throw Error(C(163))}}catch(y){pe(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}return w=fm,fm=!1,w}function sa(n,e,s){var a=e.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&n)===n){var r=l.inst,i=r.destroy;i!==void 0&&(r.destroy=void 0,to(e,s,i))}l=l.next}while(l!==a)}}function pu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var s=e=e.next;do{if((s.tag&n)===n){var a=s.create,l=s.inst;a=a(),l.destroy=a}s=s.next}while(s!==e)}}function w0(n,e){try{pu(e,n)}catch(s){pe(n,n.return,s)}}function S0(n){var e=n.updateQueue;if(e!==null){var s=n.stateNode;try{y0(e,s)}catch(a){pe(n,n.return,a)}}}function k0(n){var e=n.type,s=n.memoizedProps,a=n.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":s.autoFocus&&a.focus();break e;case"img":s.src&&(a.src=s.src)}}catch(l){pe(n,n.return,l)}}function _0(n,e,s){var a=s.flags;switch(s.tag){case 0:case 11:case 15:Kn(n,s),a&4&&w0(s,5);break;case 1:if(Kn(n,s),a&4)if(n=s.stateNode,e===null)try{n.componentDidMount()}catch(c){pe(s,s.return,c)}else{var l=cs(s.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(l,e,n.__reactInternalSnapshotBeforeUpdate)}catch(c){pe(s,s.return,c)}}a&64&&S0(s),a&512&&Pt(s,s.return);break;case 3:if(Kn(n,s),a&64&&(a=s.updateQueue,a!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{y0(a,n)}catch(c){pe(s,s.return,c)}}break;case 26:Kn(n,s),a&512&&Pt(s,s.return);break;case 27:case 5:Kn(n,s),e===null&&a&4&&k0(s),a&512&&Pt(s,s.return);break;case 12:Kn(n,s);break;case 13:Kn(n,s),a&4&&R0(n,s);break;case 22:if(l=s.memoizedState!==null||nt,!l){e=e!==null&&e.memoizedState!==null||Ve;var r=nt,i=Ve;nt=l,(Ve=e)&&!i?vt(n,s,(s.subtreeFlags&8772)!==0):Kn(n,s),nt=r,Ve=i}a&512&&(s.memoizedProps.mode==="manual"?Pt(s,s.return):un(s,s.return));break;default:Kn(n,s)}}function C0(n){var e=n.alternate;e!==null&&(n.alternate=null,C0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&zo(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function E0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function sc(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||E0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function so(n,e,s){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?s.nodeType===8?s.parentNode.insertBefore(n,e):s.insertBefore(n,e):(s.nodeType===8?(e=s.parentNode,e.insertBefore(n,s)):(e=s,e.appendChild(n)),s=s._reactRootContainer,s!=null||e.onclick!==null||(e.onclick=Ni));else if(a!==4&&a!==27&&(n=n.child,n!==null))for(so(n,e,s),n=n.sibling;n!==null;)so(n,e,s),n=n.sibling}function Vr(n,e,s){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?s.insertBefore(n,e):s.appendChild(n);else if(a!==4&&a!==27&&(n=n.child,n!==null))for(Vr(n,e,s),n=n.sibling;n!==null;)Vr(n,e,s),n=n.sibling}var Ee=null,on=!1;function Wn(n,e,s){for(s=s.child;s!==null;)A0(n,e,s),s=s.sibling}function A0(n,e,s){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(kl,s)}catch{}switch(s.tag){case 26:Ve||un(s,e),Wn(n,e,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ve||un(s,e);var a=Ee,l=on;for(Ee=s.stateNode,Wn(n,e,s),s=s.stateNode,n=s.attributes;n.length;)s.removeAttributeNode(n[0]);zo(s),Ee=a,on=l;break;case 5:Ve||un(s,e);case 6:a=Ee,l=on,Ee=null,Wn(n,e,s),Ee=a,on=l,Ee!==null&&(on?(n=Ee,s=s.stateNode,n.nodeType===8?n.parentNode.removeChild(s):n.removeChild(s)):Ee.removeChild(s.stateNode));break;case 18:Ee!==null&&(on?(n=Ee,s=s.stateNode,n.nodeType===8?hc(n.parentNode,s):n.nodeType===1&&hc(n,s),gl(n)):hc(Ee,s.stateNode));break;case 4:a=Ee,l=on,Ee=s.stateNode.containerInfo,on=!0,Wn(n,e,s),Ee=a,on=l;break;case 0:case 11:case 14:case 15:if(!Ve&&(a=s.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var r=l.tag,i=l.inst,c=i.destroy;c!==void 0&&(r&2||r&4)&&(i.destroy=void 0,to(s,e,c)),l=l.next}while(l!==a)}Wn(n,e,s);break;case 1:if(!Ve&&(un(s,e),a=s.stateNode,typeof a.componentWillUnmount=="function"))try{N0(s,a)}catch(o){pe(s,e,o)}Wn(n,e,s);break;case 21:Wn(n,e,s);break;case 22:un(s,e),Ve=(a=Ve)||s.memoizedState!==null,Wn(n,e,s),Ve=a;break;default:Wn(n,e,s)}}function R0(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{gl(n)}catch(s){pe(e,e.return,s)}}function n2(n){switch(n.tag){case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new pm),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new pm),e;default:throw Error(C(435,n.tag))}}function ac(n,e){var s=n2(n);e.forEach(function(a){var l=h2.bind(null,n,a);s.has(a)||(s.add(a),a.then(l,l))})}function _n(n,e){var s=e.deletions;if(s!==null)for(var a=0;a<s.length;a++){var l=s[a];try{var r=n,i=e,c=i;e:for(;c!==null;){switch(c.tag){case 27:case 5:Ee=c.stateNode,on=!1;break e;case 3:Ee=c.stateNode.containerInfo,on=!0;break e;case 4:Ee=c.stateNode.containerInfo,on=!0;break e}c=c.return}if(Ee===null)throw Error(C(160));A0(r,i,l),Ee=null,on=!1;var o=l.alternate;o!==null&&(o.return=null),l.return=null}catch(u){pe(l,e,u)}}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)M0(e,n),e=e.sibling}var En=null;function M0(n,e){var s=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_n(e,n),Cn(n),a&4){try{sa(3,n,n.return),pu(3,n)}catch(v){pe(n,n.return,v)}try{sa(5,n,n.return)}catch(v){pe(n,n.return,v)}}break;case 1:_n(e,n),Cn(n),a&512&&s!==null&&un(s,s.return),a&64&&nt&&(n=n.updateQueue,n!==null&&(a=n.callbacks,a!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?a:s.concat(a))));break;case 26:var l=En;if(_n(e,n),Cn(n),a&512&&s!==null&&un(s,s.return),a&4){if(e=s!==null?s.memoizedState:null,a=n.memoizedState,s===null)if(a===null)if(n.stateNode===null){e:{a=n.type,s=n.memoizedProps,e=l.ownerDocument||l;n:switch(a){case"title":l=e.getElementsByTagName("title")[0],(!l||l[al]||l[Xe]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=e.createElement(a),e.head.insertBefore(l,e.querySelector("head > title"))),qe(l,a,s),l[Xe]=n,Be(l),a=l;break e;case"link":var r=Am("link","href",e).get(a+(s.href||""));if(r){for(var i=0;i<r.length;i++)if(l=r[i],l.getAttribute("href")===(s.href==null?null:s.href)&&l.getAttribute("rel")===(s.rel==null?null:s.rel)&&l.getAttribute("title")===(s.title==null?null:s.title)&&l.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){r.splice(i,1);break n}}l=e.createElement(a),qe(l,a,s),e.head.appendChild(l);break;case"meta":if(r=Am("meta","content",e).get(a+(s.content||""))){for(i=0;i<r.length;i++)if(l=r[i],l.getAttribute("content")===(s.content==null?null:""+s.content)&&l.getAttribute("name")===(s.name==null?null:s.name)&&l.getAttribute("property")===(s.property==null?null:s.property)&&l.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&l.getAttribute("charset")===(s.charSet==null?null:s.charSet)){r.splice(i,1);break n}}l=e.createElement(a),qe(l,a,s),e.head.appendChild(l);break;default:throw Error(C(468,a))}l[Xe]=n,Be(l),a=l}n.stateNode=a}else Rm(l,n.type,n.stateNode);else n.stateNode=Em(l,a,n.memoizedProps);else if(e!==a)e===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):e.count--,a===null?Rm(l,n.type,n.stateNode):Em(l,a,n.memoizedProps);else if(a===null&&n.stateNode!==null)try{var c=n.stateNode,o=n.memoizedProps;wm(c,n.type,s.memoizedProps,o),c[We]=o}catch(v){pe(n,n.return,v)}}break;case 27:if(a&4&&n.alternate===null){for(l=n.stateNode,r=n.memoizedProps,i=l.firstChild;i;){var u=i.nextSibling,d=i.nodeName;i[al]||d==="HEAD"||d==="BODY"||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}for(i=n.type,u=l.attributes;u.length;)l.removeAttributeNode(u[0]);qe(l,i,r),l[Xe]=n,l[We]=r}case 5:if(_n(e,n),Cn(n),a&512&&s!==null&&un(s,s.return),n.flags&32){e=n.stateNode;try{Is(e,"")}catch(v){pe(n,n.return,v)}}if(a&4&&(e=n.stateNode,e!=null)){l=n.memoizedProps,s=s!==null?s.memoizedProps:l,r=n.type;try{wm(e,r,s,l),e[We]=l}catch(v){pe(n,n.return,v)}}a&1024&&(tc=!0);break;case 6:if(_n(e,n),Cn(n),a&4){if(n.stateNode===null)throw Error(C(162));a=n.stateNode,s=n.memoizedProps;try{a.nodeValue=s}catch(v){pe(n,n.return,v)}}break;case 3:if(yr=null,l=En,En=Wr(e.containerInfo),_n(e,n),En=l,Cn(n),a&4&&s!==null&&s.memoizedState.isDehydrated)try{gl(e.containerInfo)}catch(v){pe(n,n.return,v)}tc&&(tc=!1,T0(n));break;case 4:a=En,En=Wr(n.stateNode.containerInfo),_n(e,n),Cn(n),En=a;break;case 13:_n(e,n),Cn(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(ju=Vn()),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,ac(n,a)));break;case 22:a&512&&s!==null&&un(s,s.return),c=n.memoizedState!==null,o=s!==null&&s.memoizedState!==null;var h=nt,p=Ve;if(nt=h||c,Ve=p||o,_n(e,n),Ve=p,nt=h,Cn(n),e=n.stateNode,e._current=n,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,a&8192&&(e._visibility=c?e._visibility&-2:e._visibility|1,c&&(e=nt||Ve,s===null||o||e||_s(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(s=null,e=n;;){if(e.tag===5||e.tag===26||e.tag===27){if(s===null){s=e;try{l=e.stateNode,c?(r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(i=e.stateNode,u=e.memoizedProps.style,d=u!=null&&u.hasOwnProperty("display")?u.display:null,i.style.display=d==null||typeof d=="boolean"?"":(""+d).trim())}catch(v){pe(n,n.return,v)}}}else if(e.tag===6){if(s===null)try{e.stateNode.nodeValue=c?"":e.memoizedProps}catch(v){pe(n,n.return,v)}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;s===e&&(s=null),e=e.return}s===e&&(s=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=n.updateQueue,a!==null&&(s=a.retryQueue,s!==null&&(a.retryQueue=null,ac(n,s))));break;case 19:_n(e,n),Cn(n),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,ac(n,a)));break;case 21:break;default:_n(e,n),Cn(n)}}function Cn(n){var e=n.flags;if(e&2){try{if(n.tag!==27){e:{for(var s=n.return;s!==null;){if(E0(s)){var a=s;break e}s=s.return}throw Error(C(160))}switch(a.tag){case 27:var l=a.stateNode,r=sc(n);Vr(n,r,l);break;case 5:var i=a.stateNode;a.flags&32&&(Is(i,""),a.flags&=-33);var c=sc(n);Vr(n,c,i);break;case 3:case 4:var o=a.stateNode.containerInfo,u=sc(n);so(n,u,o);break;default:throw Error(C(161))}}}catch(d){pe(n,n.return,d)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function T0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;T0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function Kn(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)_0(n,e.alternate,e),e=e.sibling}function _s(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:sa(4,e,e.return),_s(e);break;case 1:un(e,e.return);var s=e.stateNode;if(typeof s.componentWillUnmount=="function"){var a=e,l=e.return;try{N0(a,s)}catch(r){pe(a,l,r)}}_s(e);break;case 26:case 27:case 5:un(e,e.return),_s(e);break;case 22:un(e,e.return),e.memoizedState===null&&_s(e);break;default:_s(e)}n=n.sibling}}function vt(n,e,s){for(s=s&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=n,r=e,i=r.flags;switch(r.tag){case 0:case 11:case 15:vt(l,r,s),w0(r,4);break;case 1:if(vt(l,r,s),l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(o){pe(r,r.return,o)}if(a=r.updateQueue,a!==null){var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)b0(c[a],l)}s&&i&64&&S0(r),Pt(r,r.return);break;case 26:case 27:case 5:vt(l,r,s),s&&a===null&&i&4&&k0(r),Pt(r,r.return);break;case 12:vt(l,r,s);break;case 13:vt(l,r,s),s&&i&4&&R0(l,r);break;case 22:r.memoizedState===null&&vt(l,r,s),Pt(r,r.return);break;default:vt(l,r,s)}e=e.sibling}}function $0(n,e){try{pu(e,n)}catch(s){pe(n,n.return,s)}}function fu(n,e){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&El(s))}function hu(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&El(n))}function ys(n,e,s,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)L0(n,e,s,a),e=e.sibling}function L0(n,e,s,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:ys(n,e,s,a),l&2048&&$0(e,9);break;case 3:ys(n,e,s,a),l&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&El(n)));break;case 23:break;case 22:var r=e.stateNode;e.memoizedState!==null?r._visibility&4?ys(n,e,s,a):Pa(n,e):r._visibility&4?ys(n,e,s,a):(r._visibility|=4,Cs(n,e,s,a,(e.subtreeFlags&10256)!==0)),l&2048&&fu(e.alternate,e);break;case 24:ys(n,e,s,a),l&2048&&hu(e.alternate,e);break;default:ys(n,e,s,a)}}function Cs(n,e,s,a,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var r=n,i=e,c=s,o=a,u=i.flags;switch(i.tag){case 0:case 11:case 15:Cs(r,i,c,o,l),$0(i,8);break;case 23:break;case 22:var d=i.stateNode;i.memoizedState!==null?d._visibility&4?Cs(r,i,c,o,l):Pa(r,i):(d._visibility|=4,Cs(r,i,c,o,l)),l&&u&2048&&fu(i.alternate,i);break;case 24:Cs(r,i,c,o,l),l&&u&2048&&hu(i.alternate,i);break;default:Cs(r,i,c,o,l)}e=e.sibling}}function Pa(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var s=n,a=e,l=a.flags;switch(a.tag){case 22:Pa(s,a),l&2048&&fu(a.alternate,a);break;case 24:Pa(s,a),l&2048&&hu(a.alternate,a);break;default:Pa(s,a)}e=e.sibling}}var Oa=8192;function Ns(n){if(n.subtreeFlags&Oa)for(n=n.child;n!==null;)D0(n),n=n.sibling}function D0(n){switch(n.tag){case 26:Ns(n),n.flags&Oa&&n.memoizedState!==null&&G2(En,n.memoizedState,n.memoizedProps);break;case 5:Ns(n);break;case 3:case 4:var e=En;En=Wr(n.stateNode.containerInfo),Ns(n),En=e;break;case 22:n.memoizedState===null&&(e=n.alternate,e!==null&&e.memoizedState!==null?(e=Oa,Oa=16777216,Ns(n),Oa=e):Ns(n));break;default:Ns(n)}}function B0(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function lc(n){var e=n.deletions;if(n.flags&16){if(e!==null)for(var s=0;s<e.length;s++){var a=e[s];De=a,z0(a,n)}B0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)O0(n),n=n.sibling}function O0(n){switch(n.tag){case 0:case 11:case 15:lc(n),n.flags&2048&&sa(9,n,n.return);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&4&&(n.return===null||n.return.tag!==13)?(e._visibility&=-5,vr(n)):lc(n);break;default:lc(n)}}function vr(n){var e=n.deletions;if(n.flags&16){if(e!==null)for(var s=0;s<e.length;s++){var a=e[s];De=a,z0(a,n)}B0(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:sa(8,e,e.return),vr(e);break;case 22:s=e.stateNode,s._visibility&4&&(s._visibility&=-5,vr(e));break;default:vr(e)}n=n.sibling}}function z0(n,e){for(;De!==null;){var s=De;switch(s.tag){case 0:case 11:case 15:sa(8,s,e);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var a=s.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:El(s.memoizedState.cache)}if(a=s.child,a!==null)a.return=s,De=a;else e:for(s=n;De!==null;){a=De;var l=a.sibling,r=a.return;if(C0(a),a===s){De=null;break e}if(l!==null){l.return=r,De=l;break e}De=r}}}function t2(n,e,s,a){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(n,e,s,a){return new t2(n,e,s,a)}function xu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Tt(n,e){var s=n.alternate;return s===null?(s=Rn(n.tag,e,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=e,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&31457280,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,e=n.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function U0(n,e){n.flags&=31457282;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,e=s.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function jr(n,e,s,a,l,r){var i=0;if(a=n,typeof n=="function")xu(n)&&(i=1);else if(typeof n=="string")i=V2(n,s,qn.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case Ta:return ts(s.children,l,r,e);case Cg:i=8,l|=24;break;case wd:return n=Rn(12,s,e,l|2),n.elementType=wd,n.lanes=r,n;case Sd:return n=Rn(13,s,e,l),n.elementType=Sd,n.lanes=r,n;case kd:return n=Rn(19,s,e,l),n.elementType=kd,n.lanes=r,n;case Hf:return H0(s,l,r,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Eg:case kt:i=10;break e;case Ag:i=9;break e;case zf:i=11;break e;case Uf:i=14;break e;case Ft:i=16,a=null;break e}throw Error(C(130,n==null?n:typeof n,""))}return e=Rn(i,s,e,l),e.elementType=n,e.type=a,e.lanes=r,e}function ts(n,e,s,a){return n=Rn(7,n,a,e),n.lanes=s,n}function H0(n,e,s,a){n=Rn(22,n,a,e),n.elementType=Hf,n.lanes=s;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var r=l._current;if(r===null)throw Error(C(456));if(!(l._pendingVisibility&2)){var i=zt(r,2);i!==null&&(l._pendingVisibility|=2,Ke(i,r,2))}},attach:function(){var r=l._current;if(r===null)throw Error(C(456));if(l._pendingVisibility&2){var i=zt(r,2);i!==null&&(l._pendingVisibility&=-3,Ke(i,r,2))}}};return n.stateNode=l,n}function rc(n,e,s){return n=Rn(6,n,null,e),n.lanes=s,n}function ic(n,e,s){return e=Rn(4,n.children!==null?n.children:[],n.key,e),e.lanes=s,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Pn(n){n.flags|=4}function hm(n,e){if(e.type!=="stylesheet"||e.state.loading&4)n.flags&=-16777217;else if(n.flags|=16777216,(ne&42)===0&&(e=!(e.type==="stylesheet"&&!(e.state.loading&3)),!e))if(Y0())n.flags|=8192;else throw Ya=Vc,kh}function Il(n,e){e!==null?n.flags|=4:n.flags&16384&&(e=n.tag!==22?Ff():536870912,n.lanes|=e)}function _a(n,e){if(!te)switch(n.tailMode){case"hidden":e=n.tail;for(var s=null;e!==null;)e.alternate!==null&&(s=e),e=e.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null}}function we(n){var e=n.alternate!==null&&n.alternate.child===n.child,s=0,a=0;if(e)for(var l=n.child;l!==null;)s|=l.lanes|l.childLanes,a|=l.subtreeFlags&31457280,a|=l.flags&31457280,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)s|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=a,n.childLanes=s,e}function s2(n,e,s){var a=e.pendingProps;switch(Fo(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(e),null;case 1:return we(e),null;case 3:return s=e.stateNode,a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),lt(Te),Ks(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Sa(e)?Pn(e):n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(io(An),An=null))),we(e),null;case 26:if(s=e.memoizedState,n===null)Pn(e),s!==null?(we(e),hm(e,s)):(we(e),e.flags&=-16777217);else{var l=n.memoizedState;s!==l&&Pn(e),s!==null?(we(e),s===l?e.flags&=-16777217:hm(e,s)):(n.memoizedProps!==a&&Pn(e),we(e),e.flags&=-16777217)}return null;case 27:if(Er(e),s=Rt.current,l=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&Pn(e);else{if(!a){if(e.stateNode===null)throw Error(C(166));return we(e),null}n=qn.current,Sa(e)?Jd(e):(n=ax(l,a,s),e.stateNode=n,Pn(e))}return we(e),null;case 5:if(Er(e),s=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&Pn(e);else{if(!a){if(e.stateNode===null)throw Error(C(166));return we(e),null}if(n=qn.current,Sa(e))Jd(e);else{switch(l=Jr(Rt.current),n){case 1:n=l.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=l.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=l.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=l.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?l.createElement(s,{is:a.is}):l.createElement(s)}}n[Xe]=e,n[We]=a;e:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break e;for(;l.sibling===null;){if(l.return===null||l.return===e)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=n;e:switch(qe(n,s,a),s){case"button":case"input":case"select":case"textarea":n=!!a.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Pn(e)}}return we(e),e.flags&=-16777217,null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==a&&Pn(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(C(166));if(n=Rt.current,Sa(e)){if(n=e.stateNode,s=e.memoizedProps,a=null,l=Fe,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}n[Xe]=e,n=!!(n.nodeValue===s||a!==null&&a.suppressHydrationWarning===!0||nx(n.nodeValue,s)),n||as(e)}else n=Jr(n).createTextNode(a),n[Xe]=e,e.stateNode=n}return we(e),null;case 13:if(a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(l=Sa(e),a!==null&&a.dehydrated!==null){if(n===null){if(!l)throw Error(C(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[Xe]=e}else Cl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;we(e),l=!1}else An!==null&&(io(An),An=null),l=!0;if(!l)return e.flags&256?(at(e),e):(at(e),null)}if(at(e),e.flags&128)return e.lanes=s,e;if(s=a!==null,n=n!==null&&n.memoizedState!==null,s){a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return s!==n&&s&&(e.child.flags|=8192),Il(e,e.updateQueue),we(e),null;case 4:return Ks(),n===null&&wu(e.stateNode.containerInfo),we(e),null;case 10:return lt(e.type),we(e),null;case 19:if(Oe($e),l=e.memoizedState,l===null)return we(e),null;if(a=(e.flags&128)!==0,r=l.rendering,r===null)if(a)_a(l,!1);else{if(Se!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(r=Or(n),r!==null){for(e.flags|=128,_a(l,!1),n=r.updateQueue,e.updateQueue=n,Il(e,n),e.subtreeFlags=0,n=s,s=e.child;s!==null;)U0(s,n),s=s.sibling;return je($e,$e.current&1|2),e.child}n=n.sibling}l.tail!==null&&Vn()>Gr&&(e.flags|=128,a=!0,_a(l,!1),e.lanes=4194304)}else{if(!a)if(n=Or(r),n!==null){if(e.flags|=128,a=!0,n=n.updateQueue,e.updateQueue=n,Il(e,n),_a(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!te)return we(e),null}else 2*Vn()-l.renderingStartTime>Gr&&s!==536870912&&(e.flags|=128,a=!0,_a(l,!1),e.lanes=4194304);l.isBackwards?(r.sibling=e.child,e.child=r):(n=l.last,n!==null?n.sibling=r:e.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Vn(),e.sibling=null,n=$e.current,je($e,a?n&1|2:n&1),e):(we(e),null);case 22:case 23:return at(e),Jo(),a=e.memoizedState!==null,n!==null?n.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?s&536870912&&!(e.flags&128)&&(we(e),e.subtreeFlags&6&&(e.flags|=8192)):we(e),s=e.updateQueue,s!==null&&Il(e,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==s&&(e.flags|=2048),n!==null&&Oe(ns),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),e.memoizedState.cache!==s&&(e.flags|=2048),lt(Te),we(e),null;case 25:return null}throw Error(C(156,e.tag))}function a2(n,e){switch(Fo(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return lt(Te),Ks(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return Er(e),null;case 13:if(at(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Cl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Oe($e),null;case 4:return Ks(),null;case 10:return lt(e.type),null;case 22:case 23:return at(e),Jo(),n!==null&&Oe(ns),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return lt(Te),null;case 25:return null;default:return null}}function q0(n,e){switch(Fo(e),e.tag){case 3:lt(Te),Ks();break;case 26:case 27:case 5:Er(e);break;case 4:Ks();break;case 13:at(e);break;case 19:Oe($e);break;case 10:lt(e.type);break;case 22:case 23:at(e),Jo(),n!==null&&Oe(ns);break;case 24:lt(Te)}}var l2={getCacheForType:function(n){var e=Ge(Te),s=e.data.get(n);return s===void 0&&(s=n(),e.data.set(n,s)),s}},r2=typeof WeakMap=="function"?WeakMap:Map,le=0,oe=null,I=null,ne=0,ye=0,xn=null,gu=!1,dt=0,Se=0,mt=0,ma=0,vu=0,sn=0,Ia=null,Mn=null,aa=!1,Xr=!1,ju=0,Gr=1/0,dl=null,$t=null,er=!1,Wt=null,el=0,ao=0,lo=null,nl=0,ro=null;function it(){if(le&2&&ne!==0)return ne&-ne;if(Ko()!==null){var n=na;return n!==0?n:Nu()}return Pf()}function V0(){sn===0&&(sn=!(ne&536870912)||te?Qf():536870912);var n=Gn.current;return n!==null&&(n.flags|=32),sn}function Ke(n,e,s){(n===oe&&ye===2||n.cancelPendingCommit!==null)&&(fs(n,0),Hn(n,ne,sn)),Rl(n,s),(!(le&2)||n!==oe)&&(n===oe&&(!(le&2)&&(ma|=s),Se===4&&Hn(n,ne,sn)),an(n))}function X0(n,e){if(le&6)throw Error(C(327));var s=n.callbackNode;if(Js()&&n.callbackNode!==s)return null;var a=Rr(n,n===oe?ne:0);if(a===0)return null;var l=(a&60)===0&&(a&n.expiredLanes)===0&&!e;if(e=l?u2(n,a):Zr(n,a),e!==0){var r=l;do{if(e===6)Hn(n,a,0);else{if(l=n.current.alternate,r&&!i2(l)){e=Zr(n,a),r=!1;continue}if(e===2){r=a;var i=Yf(n,r);if(i!==0&&(a=i,e=G0(n,r,i),r=!1,e!==2))continue}if(e===1){fs(n,0),Hn(n,a,0);break}n.finishedWork=l,n.finishedLanes=a;e:{switch(r=n,e){case 0:case 1:throw Error(C(345));case 4:if((a&4194176)===a){Hn(r,a,sn);break e}break;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(C(329))}if((a&62914560)===a&&(e=ju+300-Vn(),10<e)){if(Hn(r,a,sn),Rr(r,0)!==0)break e;r.timeoutHandle=sx(xm.bind(null,r,l,Mn,dl,aa,a,sn),e);break e}xm(r,l,Mn,dl,aa,a,sn)}}break}while(!0)}return an(n),P0(n,Vn()),n=n.callbackNode===s?X0.bind(null,n):null,n}function G0(n,e,s){var a=Ia,l=n.current.memoizedState.isDehydrated;if(l&&(fs(n,s).flags|=256),s=Zr(n,s),s!==2){if(gu&&!l)return n.errorRecoveryDisabledLanes|=e,ma|=e,4;n=Mn,Mn=a,n!==null&&io(n)}return s}function io(n){Mn===null?Mn=n:Mn.push.apply(Mn,n)}function xm(n,e,s,a,l,r,i){if(!(r&42)&&(fl={stylesheets:null,count:0,unsuspend:X2},D0(e),e=Z2(),e!==null)){n.cancelPendingCommit=e(oo.bind(null,n,s,a,l)),Hn(n,r,i);return}oo(n,s,a,l,i)}function i2(n){for(var e=n;;){if(e.flags&16384){var s=e.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var a=0;a<s.length;a++){var l=s[a],r=l.getSnapshot;l=l.value;try{if(!wn(r(),l))return!1}catch{return!1}}}if(s=e.child,e.subtreeFlags&16384&&s!==null)s.return=e,e=s;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rl(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0),le&2?aa=!0:le&4&&(Xr=!0),yu()}function Hn(n,e,s){e&=~vu,e&=~ma,n.suspendedLanes|=e,n.pingedLanes&=~e;for(var a=n.expirationTimes,l=e;0<l;){var r=31-Nn(l),i=1<<r;a[r]=-1,l&=~i}s!==0&&Jf(n,s,e)}function c2(n,e){if(le&6)throw Error(C(327));if(Js())return an(n),null;var s=Zr(n,e);if(s===2){var a=e,l=Yf(n,a);l!==0&&(e=l,s=G0(n,a,l))}return s===1?(fs(n,0),Hn(n,e,0),an(n),null):s===6?(Hn(n,e,sn),an(n),null):(n.finishedWork=n.current.alternate,n.finishedLanes=e,oo(n,Mn,dl,aa,sn),an(n),null)}function bi(){return le&6?!0:(Ml(),!1)}function bu(){if(I!==null){if(ye===0)var n=I.return;else n=I,ji(),su(n),Gs=null,ol=0,n=I;for(;n!==null;)q0(n.alternate,n),n=n.return;I=null}}function fs(n,e){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,_2(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),bu(),oe=n,I=s=Tt(n.current,null),ne=e,ye=0,xn=null,gu=!1,sn=vu=ma=mt=Se=0,Mn=Ia=null,aa=!1,e&8&&(e|=e&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=e;0<a;){var l=31-Nn(a),r=1<<l;e|=n[l],a&=~r}return dt=e,mi(),s}function Z0(n,e){Z=null,K.H=Zn,e===fr?(e=Pd(),ye=Y0()&&!(mt&134217727)&&!(ma&134217727)?2:3):e===kh?(e=Pd(),ye=4):ye=e===p0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,xn=e,I===null&&(Se=1,qr(n,yn(e,n.current)))}function Y0(){var n=Gn.current;return n===null?!0:(ne&4194176)===ne?Xn===null:(ne&62914560)===ne||ne&536870912?n===Xn:!1}function Q0(){var n=K.H;return K.H=Zn,n===null?Zn:n}function F0(){var n=K.A;return K.A=l2,n}function co(){Se=4,!(mt&134217727)&&!(ma&134217727)||oe===null||Hn(oe,ne,sn)}function Zr(n,e){var s=le;le|=2;var a=Q0(),l=F0();(oe!==n||ne!==e)&&(dl=null,fs(n,e)),e=!1;e:do try{if(ye!==0&&I!==null){var r=I,i=xn;switch(ye){case 8:bu(),Se=6;break e;case 3:case 2:e||Gn.current!==null||(e=!0);default:ye=0,xn=null,za(n,r,i)}}o2();break}catch(c){Z0(n,c)}while(!0);if(e&&n.shellSuspendCounter++,ji(),le=s,K.H=a,K.A=l,I!==null)throw Error(C(261));return oe=null,ne=0,mi(),Se}function o2(){for(;I!==null;)J0(I)}function u2(n,e){var s=le;le|=2;var a=Q0(),l=F0();(oe!==n||ne!==e)&&(dl=null,Gr=Vn()+500,fs(n,e));e:do try{if(ye!==0&&I!==null){e=I;var r=xn;n:switch(ye){case 1:ye=0,xn=null,za(n,e,r);break;case 2:if(Kd(r)){ye=0,xn=null,gm(e);break}e=function(){ye===2&&oe===n&&(ye=7),an(n)},r.then(e,e);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:Kd(r)?(ye=0,xn=null,gm(e)):(ye=0,xn=null,za(n,e,r));break;case 5:switch(I.tag){case 5:case 26:case 27:e=I,ye=0,xn=null;var i=e.sibling;if(i!==null)I=i;else{var c=e.return;c!==null?(I=c,yi(c)):I=null}break n}ye=0,xn=null,za(n,e,r);break;case 6:ye=0,xn=null,za(n,e,r);break;case 8:bu(),Se=6;break e;default:throw Error(C(462))}}d2();break}catch(o){Z0(n,o)}while(!0);return ji(),K.H=a,K.A=l,le=s,I!==null?0:(oe=null,ne=0,mi(),Se)}function d2(){for(;I!==null&&!Tg();)J0(I)}function J0(n){var e=v0(n.alternate,n,dt);n.memoizedProps=n.pendingProps,e===null?yi(n):I=e}function gm(n){var e=n.alternate;switch(n.tag){case 15:case 0:e=im(e,n,n.pendingProps,n.type,void 0,ne);break;case 11:e=im(e,n,n.pendingProps,n.type.render,n.ref,ne);break;case 5:su(n);default:q0(e,n),n=I=U0(n,dt),e=v0(e,n,dt)}n.memoizedProps=n.pendingProps,e===null?yi(n):I=e}function za(n,e,s){ji(),su(e),Gs=null,ol=0;var a=e.return;try{if(Pv(n,a,e,s,ne)){Se=1,qr(n,yn(s,n.current)),I=null;return}}catch(l){if(a!==null)throw I=a,l;Se=1,qr(n,yn(s,n.current)),I=null;return}if(e.flags&32768)e:{n=e;do{if(e=a2(n.alternate,n),e!==null){e.flags&=32767,I=e;break e}n=n.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),I=n}while(n!==null);Se=6,I=null}else yi(e)}function yi(n){var e=n;do{n=e.return;var s=s2(e.alternate,e,dt);if(s!==null){I=s;return}if(e=e.sibling,e!==null){I=e;return}I=e=n}while(e!==null);Se===0&&(Se=5)}function oo(n,e,s,a,l){var r=K.T,i=ve.p;try{ve.p=2,K.T=null,m2(n,e,s,a,i,l)}finally{K.T=r,ve.p=i}return null}function m2(n,e,s,a,l,r){do Js();while(Wt!==null);if(le&6)throw Error(C(327));var i=n.finishedWork,c=n.finishedLanes;if(i===null)return null;if(n.finishedWork=null,n.finishedLanes=0,i===n.current)throw Error(C(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var o=i.lanes|i.childLanes;if(o|=Zo,Xg(n,o,r),Xr=!1,n===oe&&(I=oe=null,ne=0),!(i.subtreeFlags&10256)&&!(i.flags&10256)||er||(er=!0,ao=o,lo=s,x2(Ar,function(){return Js(),null})),s=(i.flags&15990)!==0,i.subtreeFlags&15990||s){s=K.T,K.T=null,r=ve.p,ve.p=2;var u=le;le|=4,e2(n,i),M0(i,n),Lv(fo),Ir=!!po,fo=po=null,n.current=i,_0(n,i.alternate,i),$g(),le=u,ve.p=r,K.T=s}else n.current=i;if(er?(er=!1,Wt=n,el=c):W0(n,o),o=n.pendingLanes,o===0&&($t=null),zg(i.stateNode),an(n),e!==null)for(l=n.onRecoverableError,i=0;i<e.length;i++)o=e[i],l(o.value,{componentStack:o.stack});return el&3&&Js(),o=n.pendingLanes,a||Xr||c&4194218&&o&42?n===ro?nl++:(nl=0,ro=n):nl=0,Ml(),null}function W0(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,El(e)))}function Js(){if(Wt!==null){var n=Wt,e=ao;ao=0;var s=Kf(el),a=K.T,l=ve.p;try{if(ve.p=32>s?32:s,K.T=null,Wt===null)var r=!1;else{s=lo,lo=null;var i=Wt,c=el;if(Wt=null,el=0,le&6)throw Error(C(331));var o=le;if(le|=4,O0(i.current),L0(i,i.current,c,s),le=o,Ml(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(kl,i)}catch{}r=!0}return r}finally{ve.p=l,K.T=a,W0(n,e)}}return!1}function vm(n,e,s){e=yn(s,e),e=Qc(n.stateNode,e,2),n=Mt(n,e,2),n!==null&&(Rl(n,2),an(n))}function pe(n,e,s){if(n.tag===3)vm(n,n,s);else for(;e!==null;){if(e.tag===3){vm(e,n,s);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&($t===null||!$t.has(a))){n=yn(s,n),s=d0(2),a=Mt(e,s,2),a!==null&&(m0(s,a,e,n),Rl(a,2),an(a));break}}e=e.return}}function cc(n,e,s){var a=n.pingCache;if(a===null){a=n.pingCache=new r2;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(s)||(gu=!0,l.add(s),n=p2.bind(null,n,e,s),e.then(n,n))}function p2(n,e,s){var a=n.pingCache;a!==null&&a.delete(e),n.pingedLanes|=n.suspendedLanes&s,le&2?aa=!0:le&4&&(Xr=!0),yu(),oe===n&&(ne&s)===s&&(Se===4||Se===3&&(ne&62914560)===ne&&300>Vn()-ju?!(le&2)&&fs(n,0):vu|=s),an(n)}function K0(n,e){e===0&&(e=Ff()),n=zt(n,e),n!==null&&(Rl(n,e),an(n))}function f2(n){var e=n.memoizedState,s=0;e!==null&&(s=e.retryLane),K0(n,s)}function h2(n,e){var s=0;switch(n.tag){case 13:var a=n.stateNode,l=n.memoizedState;l!==null&&(s=l.retryLane);break;case 19:a=n.stateNode;break;case 22:a=n.stateNode._retryCache;break;default:throw Error(C(314))}a!==null&&a.delete(e),K0(n,s)}function yu(){if(50<nl)throw nl=0,ro=null,le&2&&oe!==null&&(oe.errorRecoveryDisabledLanes|=ne),Error(C(185))}function x2(n,e){return Bo(n,e)}var Yr=null,Es=null,uo=!1,Qr=!1,oc=!1,ss=0;function an(n){n!==Es&&n.next===null&&(Es===null?Yr=Es=n:Es=Es.next=n),Qr=!0,uo||(uo=!0,v2(g2))}function Ml(){if(!oc&&Qr){oc=!0;do for(var n=!1,e=Yr;e!==null;){var s=ne;s=Rr(e,e===oe?s:0),s&3&&(n=!0,c2(e,s)),e=e.next}while(n);oc=!1}}function g2(){Qr=uo=!1;for(var n=Vn(),e=null,s=Yr;s!==null;){var a=s.next;if(ss!==0&&k2()){var l=s,r=ss;l.pendingLanes|=2,l.entangledLanes|=2,l.entanglements[1]|=r}l=P0(s,n),l===0?(s.next=null,e===null?Yr=a:e.next=a,a===null&&(Es=e)):(e=s,l&3&&(Qr=!0)),s=a}ss=0,Ml()}function P0(n,e){for(var s=n.suspendedLanes,a=n.pingedLanes,l=n.expirationTimes,r=n.pendingLanes&-62914561;0<r;){var i=31-Nn(r),c=1<<i,o=l[i];o===-1?(!(c&s)||c&a)&&(l[i]=Vg(c,e)):o<=e&&(n.expiredLanes|=c),r&=~c}if(e=oe,s=ne,s=Rr(n,n===e?s:0),a=n.callbackNode,s===0||n===e&&ye===2||n.cancelPendingCommit!==null)return a!==null&&a!==null&&Di(a),n.callbackNode=null,n.callbackPriority=0;if(s&3)return a!==null&&a!==null&&Di(a),n.callbackPriority=2,n.callbackNode=null,2;if(e=s&-s,e===n.callbackPriority)return e;switch(a!==null&&Di(a),Kf(s)){case 2:s=Oo;break;case 8:s=Gf;break;case 32:s=Ar;break;case 268435456:s=Zf;break;default:s=Ar}return a=X0.bind(null,n),s=Bo(s,a),n.callbackPriority=e,n.callbackNode=s,e}function v2(n){C2(function(){le&6?Bo(Oo,n):n()})}function Nu(){return ss===0&&(ss=Qf()),ss}function jm(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:dr(""+n)}function bm(n,e){var s=e.ownerDocument.createElement("input");return s.name=e.name,s.value=e.value,n.id&&s.setAttribute("form",n.id),e.parentNode.insertBefore(s,e),n=new FormData(n),s.parentNode.removeChild(s),n}function j2(n,e,s,a,l){if(e==="submit"&&s&&s.stateNode===l){var r=jm((l[We]||null).action),i=a.submitter;i&&(e=(e=i[We]||null)?jm(e.formAction):i.getAttribute("formAction"),e!==null&&(r=e,i=null));var c=new oi("action","action",null,a,l);n.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ss!==0){var o=i?bm(l,i):new FormData(l);Yc(s,{pending:!0,data:o,method:l.method,action:r},null,o)}}else typeof r=="function"&&(c.preventDefault(),o=i?bm(l,i):new FormData(l),Yc(s,{pending:!0,data:o,method:l.method,action:r},r,o))},currentTarget:l}]})}}for(var uc=0;uc<Qd.length;uc++){var dc=Qd[uc],b2=dc.toLowerCase(),y2=dc[0].toUpperCase()+dc.slice(1);Ln(b2,"on"+y2)}Ln(vh,"onAnimationEnd");Ln(jh,"onAnimationIteration");Ln(bh,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(Bv,"onTransitionRun");Ln(Ov,"onTransitionStart");Ln(zv,"onTransitionCancel");Ln(yh,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N2=new Set("cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function I0(n,e){e=(e&4)!==0;for(var s=0;s<n.length;s++){var a=n[s],l=a.event;a=a.listeners;e:{var r=void 0;if(e)for(var i=a.length-1;0<=i;i--){var c=a[i],o=c.instance,u=c.currentTarget;if(c=c.listener,o!==r&&l.isPropagationStopped())break e;r=c,l.currentTarget=u;try{r(l)}catch(d){Hr(d)}l.currentTarget=null,r=o}else for(i=0;i<a.length;i++){if(c=a[i],o=c.instance,u=c.currentTarget,c=c.listener,o!==r&&l.isPropagationStopped())break e;r=c,l.currentTarget=u;try{r(l)}catch(d){Hr(d)}l.currentTarget=null,r=o}}}}function ae(n,e){var s=e[$c];s===void 0&&(s=e[$c]=new Set);var a=n+"__bubble";s.has(a)||(ex(e,n,2,!1),s.add(a))}function mc(n,e,s){var a=0;e&&(a|=4),ex(s,n,a,e)}var nr="_reactListening"+Math.random().toString(36).slice(2);function wu(n){if(!n[nr]){n[nr]=!0,If.forEach(function(s){s!=="selectionchange"&&(N2.has(s)||mc(s,!1,n),mc(s,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[nr]||(e[nr]=!0,mc("selectionchange",!1,e))}}function ex(n,e,s,a){switch(dx(e)){case 2:var l=J2;break;case 8:l=W2;break;default:l=Cu}s=l.bind(null,e,s,n),l=void 0,!zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?n.addEventListener(e,s,{capture:!0,passive:l}):n.addEventListener(e,s,!0):l!==void 0?n.addEventListener(e,s,{passive:l}):n.addEventListener(e,s,!1)}function pc(n,e,s,a,l){var r=a;if(!(e&1)&&!(e&2)&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(i===4)for(i=a.return;i!==null;){var o=i.tag;if((o===3||o===4)&&(o=i.stateNode.containerInfo,o===l||o.nodeType===8&&o.parentNode===l))return;i=i.return}for(;c!==null;){if(i=Kt(c),i===null)return;if(o=i.tag,o===5||o===6||o===26||o===27){a=r=i;continue e}c=c.parentNode}}a=a.return}ih(function(){var u=r,d=Ho(s),h=[];e:{var p=Nh.get(n);if(p!==void 0){var v=oi,w=n;switch(n){case"keypress":if(pr(s)===0)break e;case"keydown":case"keyup":v=hv;break;case"focusin":w="focus",v=Gi;break;case"focusout":w="blur",v=Gi;break;case"beforeblur":case"afterblur":v=Gi;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=vv;break;case vh:case jh:case bh:v=rv;break;case yh:v=bv;break;case"scroll":case"scrollend":v=nv;break;case"wheel":v=Nv;break;case"copy":case"cut":case"paste":v=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Od}var N=(e&4)!==0,k=!N&&(n==="scroll"||n==="scrollend"),x=N?p!==null?p+"Capture":null:p;N=[];for(var m=u,f;m!==null;){var j=m;if(f=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||f===null||x===null||(j=ll(m,x),j!=null&&N.push(pl(m,j,f))),k)break;m=m.return}0<N.length&&(p=new v(p,w,null,s,d),h.push({event:p,listeners:N}))}}if(!(e&7)){e:{if(p=n==="mouseover"||n==="pointerover",v=n==="mouseout"||n==="pointerout",p&&s!==Oc&&(w=s.relatedTarget||s.fromElement)&&(Kt(w)||w[oa]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(w=s.relatedTarget||s.toElement,v=u,w=w?Kt(w):null,w!==null&&(k=ca(w),N=w.tag,w!==k||N!==5&&N!==27&&N!==6)&&(w=null)):(v=null,w=u),v!==w)){if(N=Dd,j="onMouseLeave",x="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(N=Od,j="onPointerLeave",x="onPointerEnter",m="pointer"),k=v==null?p:Da(v),f=w==null?p:Da(w),p=new N(j,m+"leave",v,s,d),p.target=k,p.relatedTarget=f,j=null,Kt(d)===u&&(N=new N(x,m+"enter",w,s,d),N.target=f,N.relatedTarget=k,j=N),k=j,v&&w)n:{for(N=v,x=w,m=0,f=N;f;f=ws(f))m++;for(f=0,j=x;j;j=ws(j))f++;for(;0<m-f;)N=ws(N),m--;for(;0<f-m;)x=ws(x),f--;for(;m--;){if(N===x||x!==null&&N===x.alternate)break n;N=ws(N),x=ws(x)}N=null}else N=null;v!==null&&ym(h,p,v,N,!1),w!==null&&k!==null&&ym(h,k,w,N,!0)}}e:{if(p=u?Da(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var y=qd;else if(Hd(p))if(ph)y=Tv;else{y=Rv;var b=Av}else v=p.nodeName,!v||v.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?u&&Uo(u.elementType)&&(y=qd):y=Mv;if(y&&(y=y(n,u))){mh(h,y,s,d);break e}b&&b(n,p,u),n==="focusout"&&u&&p.type==="number"&&u.memoizedProps.value!=null&&Bc(p,"number",p.value)}switch(b=u?Da(u):window,n){case"focusin":(Hd(b)||b.contentEditable==="true")&&($s=b,Uc=u,Za=null);break;case"focusout":Za=Uc=$s=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,Yd(h,s,d);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":Yd(h,s,d)}var S;if(Xo)e:{switch(n){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ts?uh(n,s)&&(_="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(_="onCompositionStart");_&&(oh&&s.locale!=="ko"&&(Ts||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ts&&(S=ch()):(Ct=d,qo="value"in Ct?Ct.value:Ct.textContent,Ts=!0)),b=Fr(u,_),0<b.length&&(_=new Bd(_,n,null,s,d),h.push({event:_,listeners:b}),S?_.data=S:(S=dh(s),S!==null&&(_.data=S)))),(S=Sv?kv(n,s):_v(n,s))&&(_=Fr(u,"onBeforeInput"),0<_.length&&(b=new Bd("onBeforeInput","beforeinput",null,s,d),h.push({event:b,listeners:_}),b.data=S)),j2(h,n,u,s,d)}I0(h,e)})}function pl(n,e,s){return{instance:n,listener:e,currentTarget:s}}function Fr(n,e){for(var s=e+"Capture",a=[];n!==null;){var l=n,r=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=ll(n,s),l!=null&&a.unshift(pl(n,l,r)),l=ll(n,e),l!=null&&a.push(pl(n,l,r))),n=n.return}return a}function ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function ym(n,e,s,a,l){for(var r=e._reactName,i=[];s!==null&&s!==a;){var c=s,o=c.alternate,u=c.stateNode;if(c=c.tag,o!==null&&o===a)break;c!==5&&c!==26&&c!==27||u===null||(o=u,l?(u=ll(s,r),u!=null&&i.unshift(pl(s,u,o))):l||(u=ll(s,r),u!=null&&i.push(pl(s,u,o)))),s=s.return}i.length!==0&&n.push({event:e,listeners:i})}var w2=/\r\n?/g,S2=/\u0000|\uFFFD/g;function Nm(n){return(typeof n=="string"?n:""+n).replace(w2,`
`).replace(S2,"")}function nx(n,e){return e=Nm(e),Nm(n)===e}function Ni(){}function ge(n,e,s,a,l,r){switch(s){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Is(n,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Is(n,""+a);break;case"className":Oi(n,"class",a);break;case"tabIndex":Oi(n,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(n,s,a);break;case"style":rh(n,a,r);break;case"src":case"href":if(a===""&&(e!=="a"||s!=="href")){n.removeAttribute(s);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(s);break}a=dr(""+a),n.setAttribute(s,a);break;case"action":case"formAction":if(typeof a=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(s==="formAction"?(e!=="input"&&ge(n,e,"name",l.name,l,null),ge(n,e,"formEncType",l.formEncType,l,null),ge(n,e,"formMethod",l.formMethod,l,null),ge(n,e,"formTarget",l.formTarget,l,null)):(ge(n,e,"encType",l.encType,l,null),ge(n,e,"method",l.method,l,null),ge(n,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(s);break}a=dr(""+a),n.setAttribute(s,a);break;case"onClick":a!=null&&(n.onclick=Ni);break;case"onScroll":a!=null&&ae("scroll",n);break;case"onScrollEnd":a!=null&&ae("scrollend",n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(C(61));if(s=a.__html,s!=null){if(l.children!=null)throw Error(C(60));n.innerHTML=s}}break;case"multiple":n.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":n.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){n.removeAttribute("xlink:href");break}s=dr(""+a),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(s,""+a):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":a===!0?n.setAttribute(s,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(s,a):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?n.setAttribute(s,a):n.removeAttribute(s);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?n.removeAttribute(s):n.setAttribute(s,a);break;case"xlinkActuate":Jn(n,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Jn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Jn(n,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Jn(n,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Jn(n,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Jn(n,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Jn(n,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Jn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Jn(n,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Lc(n,"is",a);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Ig.get(s)||s,Lc(n,s,a))}}function mo(n,e,s,a,l,r){switch(s){case"style":rh(n,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(C(61));if(s=a.__html,s!=null){if(l.children!=null)throw Error(C(60));n.innerHTML=s}}break;case"children":typeof a=="string"?Is(n,a):(typeof a=="number"||typeof a=="bigint")&&Is(n,""+a);break;case"onScroll":a!=null&&ae("scroll",n);break;case"onScrollEnd":a!=null&&ae("scrollend",n);break;case"onClick":a!=null&&(n.onclick=Ni);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!eh.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(l=s.endsWith("Capture"),e=s.slice(2,l?s.length-7:void 0),r=n[We]||null,r=r!=null?r[s]:null,typeof r=="function"&&n.removeEventListener(e,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(e,a,l);break e}s in n?n[s]=a:a===!0?n.setAttribute(s,""):Lc(n,s,a)}}}function qe(n,e,s){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":ae("invalid",n);var a=null,l=null,r=null,i=null,c=null,o=null;for(d in s)if(s.hasOwnProperty(d)){var u=s[d];if(u!=null)switch(d){case"name":a=u;break;case"type":l=u;break;case"checked":c=u;break;case"defaultChecked":o=u;break;case"value":r=u;break;case"defaultValue":i=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(C(137,e));break;default:ge(n,e,d,u,s,null)}}sh(n,r,i,c,o,l,a,!1),Mr(n);return;case"select":ae("invalid",n);var d=l=r=null;for(a in s)if(s.hasOwnProperty(a)&&(i=s[a],i!=null))switch(a){case"value":r=i;break;case"defaultValue":l=i;break;case"multiple":d=i;default:ge(n,e,a,i,s,null)}e=r,s=l,n.multiple=!!d,e!=null?Vs(n,!!d,e,!1):s!=null&&Vs(n,!!d,s,!0);return;case"textarea":ae("invalid",n),r=a=d=null;for(l in s)if(s.hasOwnProperty(l)&&(i=s[l],i!=null))switch(l){case"value":d=i;break;case"defaultValue":a=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(C(91));break;default:ge(n,e,l,i,s,null)}lh(n,d,a,r),Mr(n);return;case"option":for(i in s)if(s.hasOwnProperty(i)&&(d=s[i],d!=null))switch(i){case"selected":n.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:ge(n,e,i,d,s,null)}return;case"dialog":ae("cancel",n),ae("close",n);break;case"iframe":case"object":ae("load",n);break;case"video":case"audio":for(d=0;d<ml.length;d++)ae(ml[d],n);break;case"image":ae("error",n),ae("load",n);break;case"details":ae("toggle",n);break;case"embed":case"source":case"img":case"link":ae("error",n),ae("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in s)if(s.hasOwnProperty(c)&&(d=s[c],d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(C(137,e));default:ge(n,e,c,d,s,null)}return;default:if(Uo(e)){for(o in s)s.hasOwnProperty(o)&&(d=s[o],d!==void 0&&mo(n,e,o,d,s,void 0));return}}for(r in s)s.hasOwnProperty(r)&&(d=s[r],d!=null&&ge(n,e,r,d,s,null))}function wm(n,e,s,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,i=null,c=null,o=null,u=null,d=null;for(v in s){var h=s[v];if(s.hasOwnProperty(v)&&h!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":o=h;default:a.hasOwnProperty(v)||ge(n,e,v,null,a,h)}}for(var p in a){var v=a[p];if(h=s[p],a.hasOwnProperty(p)&&(v!=null||h!=null))switch(p){case"type":r=v;break;case"name":l=v;break;case"checked":u=v;break;case"defaultChecked":d=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(C(137,e));break;default:v!==h&&ge(n,e,p,v,a,h)}}Dc(n,i,c,o,u,d,r,l);return;case"select":v=i=c=p=null;for(r in s)if(o=s[r],s.hasOwnProperty(r)&&o!=null)switch(r){case"value":break;case"multiple":v=o;default:a.hasOwnProperty(r)||ge(n,e,r,null,a,o)}for(l in a)if(r=a[l],o=s[l],a.hasOwnProperty(l)&&(r!=null||o!=null))switch(l){case"value":p=r;break;case"defaultValue":c=r;break;case"multiple":i=r;default:r!==o&&ge(n,e,l,r,a,o)}e=c,s=i,a=v,p!=null?Vs(n,!!s,p,!1):!!a!=!!s&&(e!=null?Vs(n,!!s,e,!0):Vs(n,!!s,s?[]:"",!1));return;case"textarea":v=p=null;for(c in s)if(l=s[c],s.hasOwnProperty(c)&&l!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ge(n,e,c,null,a,l)}for(i in a)if(l=a[i],r=s[i],a.hasOwnProperty(i)&&(l!=null||r!=null))switch(i){case"value":p=l;break;case"defaultValue":v=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(C(91));break;default:l!==r&&ge(n,e,i,l,a,r)}ah(n,p,v);return;case"option":for(var w in s)if(p=s[w],s.hasOwnProperty(w)&&p!=null&&!a.hasOwnProperty(w))switch(w){case"selected":n.selected=!1;break;default:ge(n,e,w,null,a,p)}for(o in a)if(p=a[o],v=s[o],a.hasOwnProperty(o)&&p!==v&&(p!=null||v!=null))switch(o){case"selected":n.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:ge(n,e,o,p,a,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in s)p=s[N],s.hasOwnProperty(N)&&p!=null&&!a.hasOwnProperty(N)&&ge(n,e,N,null,a,p);for(u in a)if(p=a[u],v=s[u],a.hasOwnProperty(u)&&p!==v&&(p!=null||v!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(C(137,e));break;default:ge(n,e,u,p,a,v)}return;default:if(Uo(e)){for(var k in s)p=s[k],s.hasOwnProperty(k)&&p!==void 0&&!a.hasOwnProperty(k)&&mo(n,e,k,void 0,a,p);for(d in a)p=a[d],v=s[d],!a.hasOwnProperty(d)||p===v||p===void 0&&v===void 0||mo(n,e,d,p,a,v);return}}for(var x in s)p=s[x],s.hasOwnProperty(x)&&p!=null&&!a.hasOwnProperty(x)&&ge(n,e,x,null,a,p);for(h in a)p=a[h],v=s[h],!a.hasOwnProperty(h)||p===v||p==null&&v==null||ge(n,e,h,p,a,v)}var po=null,fo=null;function Jr(n){return n.nodeType===9?n:n.ownerDocument}function Sm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tx(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function ho(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fc=null;function k2(){var n=window.event;return n&&n.type==="popstate"?n===fc?!1:(fc=n,!0):(fc=null,!1)}var sx=typeof setTimeout=="function"?setTimeout:void 0,_2=typeof clearTimeout=="function"?clearTimeout:void 0,km=typeof Promise=="function"?Promise:void 0,C2=typeof queueMicrotask=="function"?queueMicrotask:typeof km<"u"?function(n){return km.resolve(null).then(n).catch(E2)}:sx;function E2(n){setTimeout(function(){throw n})}function hc(n,e){var s=e,a=0;do{var l=s.nextSibling;if(n.removeChild(s),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(a===0){n.removeChild(l),gl(e);return}a--}else s!=="$"&&s!=="$?"&&s!=="$!"||a++;s=l}while(s);gl(e)}function xo(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var s=e;switch(e=e.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":xo(s),zo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function A2(n,e,s,a){for(;n.nodeType===1;){var l=s;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(a){if(!n[al])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(r=n.getAttribute("rel"),r==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(r!==l.rel||n.getAttribute("href")!==(l.href==null?null:l.href)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||n.getAttribute("title")!==(l.title==null?null:l.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(r=n.getAttribute("src"),(r!==(l.src==null?null:l.src)||n.getAttribute("type")!==(l.type==null?null:l.type)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&n.getAttribute("name")===r)return n}else return n;if(n=$n(n.nextSibling),n===null)break}return null}function R2(n,e,s){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=$n(n.nextSibling),n===null))return null;return n}function $n(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return n}function _m(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(e===0)return n;e--}else s==="/$"&&e++}n=n.previousSibling}return null}function ax(n,e,s){switch(e=Jr(s),n){case"html":if(n=e.documentElement,!n)throw Error(C(452));return n;case"head":if(n=e.head,!n)throw Error(C(453));return n;case"body":if(n=e.body,!n)throw Error(C(454));return n;default:throw Error(C(451))}}var Sn=new Map,Cm=new Set;function Wr(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var pt=ve.d;ve.d={f:M2,r:T2,D:$2,C:L2,L:D2,m:B2,X:z2,S:O2,M:U2};function M2(){var n=pt.f(),e=bi();return n||e}function T2(n){var e=ua(n);e!==null&&e.tag===5&&e.type==="form"?s0(e):pt.r(n)}var pa=typeof document>"u"?null:document;function lx(n,e,s){var a=pa;if(a&&typeof e=="string"&&e){var l=bn(e);l='link[rel="'+n+'"][href="'+l+'"]',typeof s=="string"&&(l+='[crossorigin="'+s+'"]'),Cm.has(l)||(Cm.add(l),n={rel:n,crossOrigin:s,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),qe(e,"link",n),Be(e),a.head.appendChild(e)))}}function $2(n){pt.D(n),lx("dns-prefetch",n,null)}function L2(n,e){pt.C(n,e),lx("preconnect",n,e)}function D2(n,e,s){pt.L(n,e,s);var a=pa;if(a&&n&&e){var l='link[rel="preload"][as="'+bn(e)+'"]';e==="image"&&s&&s.imageSrcSet?(l+='[imagesrcset="'+bn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(l+='[imagesizes="'+bn(s.imageSizes)+'"]')):l+='[href="'+bn(n)+'"]';var r=l;switch(e){case"style":r=la(n);break;case"script":r=fa(n)}Sn.has(r)||(n=be({rel:"preload",href:e==="image"&&s&&s.imageSrcSet?void 0:n,as:e},s),Sn.set(r,n),a.querySelector(l)!==null||e==="style"&&a.querySelector(Tl(r))||e==="script"&&a.querySelector($l(r))||(e=a.createElement("link"),qe(e,"link",n),Be(e),a.head.appendChild(e)))}}function B2(n,e){pt.m(n,e);var s=pa;if(s&&n){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+bn(a)+'"][href="'+bn(n)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=fa(n)}if(!Sn.has(r)&&(n=be({rel:"modulepreload",href:n},e),Sn.set(r,n),s.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector($l(r)))return}a=s.createElement("link"),qe(a,"link",n),Be(a),s.head.appendChild(a)}}}function O2(n,e,s){pt.S(n,e,s);var a=pa;if(a&&n){var l=qs(a).hoistableStyles,r=la(n);e=e||"default";var i=l.get(r);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(Tl(r)))c.loading=5;else{n=be({rel:"stylesheet",href:n,"data-precedence":e},s),(s=Sn.get(r))&&Su(n,s);var o=i=a.createElement("link");Be(o),qe(o,"link",n),o._p=new Promise(function(u,d){o.onload=u,o.onerror=d}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,br(i,e,a)}i={type:"stylesheet",instance:i,count:1,state:c},l.set(r,i)}}}function z2(n,e){pt.X(n,e);var s=pa;if(s&&n){var a=qs(s).hoistableScripts,l=fa(n),r=a.get(l);r||(r=s.querySelector($l(l)),r||(n=be({src:n,async:!0},e),(e=Sn.get(l))&&ku(n,e),r=s.createElement("script"),Be(r),qe(r,"link",n),s.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function U2(n,e){pt.M(n,e);var s=pa;if(s&&n){var a=qs(s).hoistableScripts,l=fa(n),r=a.get(l);r||(r=s.querySelector($l(l)),r||(n=be({src:n,async:!0,type:"module"},e),(e=Sn.get(l))&&ku(n,e),r=s.createElement("script"),Be(r),qe(r,"link",n),s.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function H2(n,e,s){if(e=(e=Rt.current)?Wr(e):null,!e)throw Error(C(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(s=la(s.href),e=qs(e).hoistableStyles,n=e.get(s),n||(n={type:"style",instance:null,count:0,state:null},e.set(s,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=la(s.href);var a=qs(e).hoistableStyles,l=a.get(n);return l||(e=e.ownerDocument||e,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(n,l),Sn.has(n)||q2(e,n,{rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},l.state)),l}return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(s=fa(s),e=qs(e).hoistableScripts,n=e.get(s),n||(n={type:"script",instance:null,count:0,state:null},e.set(s,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(C(444,n))}}function la(n){return'href="'+bn(n)+'"'}function Tl(n){return'link[rel="stylesheet"]['+n+"]"}function rx(n){return be({},n,{"data-precedence":n.precedence,precedence:null})}function q2(n,e,s,a){Sn.set(e,s),n.querySelector(Tl(e))||(n.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=n.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),qe(e,"link",s),Be(e),n.head.appendChild(e)))}function fa(n){return'[src="'+bn(n)+'"]'}function $l(n){return"script[async]"+n}function Em(n,e,s){if(e.count++,e.instance===null)switch(e.type){case"style":var a=n.querySelector('style[data-href~="'+bn(s.href)+'"]');if(a)return e.instance=a,Be(a),a;var l=be({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return a=(n.ownerDocument||n).createElement("style"),Be(a),qe(a,"style",l),br(a,s.precedence,n),e.instance=a;case"stylesheet":l=la(s.href);var r=n.querySelector(Tl(l));if(r)return e.state.loading|=4,e.instance=r,Be(r),r;a=rx(s),(l=Sn.get(l))&&Su(a,l),r=(n.ownerDocument||n).createElement("link"),Be(r);var i=r;return i._p=new Promise(function(c,o){i.onload=c,i.onerror=o}),qe(r,"link",a),e.state.loading|=4,br(r,s.precedence,n),e.instance=r;case"script":return r=fa(s.src),(l=n.querySelector($l(r)))?(e.instance=l,Be(l),l):(a=s,(l=Sn.get(r))&&(a=be({},s),ku(a,l)),n=n.ownerDocument||n,l=n.createElement("script"),Be(l),qe(l,"link",a),n.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(C(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(a=e.instance,e.state.loading|=4,br(a,s.precedence,n));return e.instance}function br(n,e,s){for(var a=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===e)r=c;else if(r!==l)break}r?r.parentNode.insertBefore(n,r.nextSibling):(e=s.nodeType===9?s.head:s,e.insertBefore(n,e.firstChild))}function Su(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function ku(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var yr=null;function Am(n,e,s){if(yr===null){var a=new Map,l=yr=new Map;l.set(s,a)}else l=yr,a=l.get(s),a||(a=new Map,l.set(s,a));if(a.has(n))return a;for(a.set(n,null),s=s.getElementsByTagName(n),l=0;l<s.length;l++){var r=s[l];if(!(r[al]||r[Xe]||n==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(e)||"";i=n+i;var c=a.get(i);c?c.push(r):a.set(i,[r])}}return a}function Rm(n,e,s){n=n.ownerDocument||n,n.head.insertBefore(s,e==="title"?n.querySelector("head > title"):null)}function V2(n,e,s){if(s===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}var fl=null;function X2(){}function G2(n,e,s){if(fl===null)throw Error(C(475));var a=fl;if(e.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var l=la(s.href),r=n.querySelector(Tl(l));if(r){n=r._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(a.count++,a=Kr.bind(a),n.then(a,a)),e.state.loading|=4,e.instance=r,Be(r);return}r=n.ownerDocument||n,s=rx(s),(l=Sn.get(l))&&Su(s,l),r=r.createElement("link"),Be(r);var i=r;i._p=new Promise(function(c,o){i.onload=c,i.onerror=o}),qe(r,"link",s),e.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,n),(n=e.state.preload)&&!(e.state.loading&3)&&(a.count++,e=Kr.bind(a),n.addEventListener("load",e),n.addEventListener("error",e))}}function Z2(){if(fl===null)throw Error(C(475));var n=fl;return n.stylesheets&&n.count===0&&go(n,n.stylesheets),0<n.count?function(e){var s=setTimeout(function(){if(n.stylesheets&&go(n,n.stylesheets),n.unsuspend){var a=n.unsuspend;n.unsuspend=null,a()}},6e4);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Kr(){if(this.count--,this.count===0){if(this.stylesheets)go(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Pr=null;function go(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Pr=new Map,e.forEach(Y2,n),Pr=null,Kr.call(n))}function Y2(n,e){if(!(e.state.loading&4)){var s=Pr.get(n);if(s)var a=s.get(null);else{s=new Map,Pr.set(n,s);for(var l=n.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var i=l[r];(i.nodeName==="link"||i.getAttribute("media")!=="not all")&&(s.set(i.dataset.precedence,i),a=i)}a&&s.set(null,a)}l=e.instance,i=l.getAttribute("data-precedence"),r=s.get(i)||a,r===a&&s.set(null,l),s.set(i,l),this.count++,a=Kr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(l,n.firstChild)),e.state.loading|=4}}function Q2(n,e,s,a,l,r,i,c){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.hiddenUpdates=Bi(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ix(n,e,s,a,l,r,i,c,o,u,d,h,p){return n=new Q2(n,e,s,c,o,u,d,p),e=1,r===!0&&(e|=24),r=Rn(3,null,null,e),n.current=r,r.stateNode=n,e=Wo(),e.refCount++,n.pooledCache=e,e.refCount++,r.memoizedState={element:a,isDehydrated:s,cache:e},mu(r),n}function cx(n){return n?(n=Bs,n):Bs}function ox(n,e,s,a,l,r){l=cx(l),a.context===null?a.context=l:a.pendingContext=l,a=rt(e),a.payload={element:s},r=r===void 0?null:r,r!==null&&(a.callback=r),s=Mt(n,a,e),s!==null&&(Ke(s,n,e),Ja(s,n,e))}function Mm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<e?s:e}}function _u(n,e){Mm(n,e),(n=n.alternate)&&Mm(n,e)}function ux(n){if(n.tag===13){var e=zt(n,67108864);e!==null&&Ke(e,n,67108864),_u(n,67108864)}}function F2(){return null}var Ir=!0;function J2(n,e,s,a){var l=K.T;K.T=null;var r=ve.p;try{ve.p=2,Cu(n,e,s,a)}finally{ve.p=r,K.T=l}}function W2(n,e,s,a){var l=K.T;K.T=null;var r=ve.p;try{ve.p=8,Cu(n,e,s,a)}finally{ve.p=r,K.T=l}}function Cu(n,e,s,a){if(Ir){var l=vo(a);if(l===null)pc(n,e,a,ei,s),Tm(n,a);else if(P2(l,n,e,s,a))a.stopPropagation();else if(Tm(n,a),e&4&&-1<K2.indexOf(n)){for(;l!==null;){var r=ua(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=La(r.pendingLanes);if(i!==0){var c=r;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var o=1<<31-Nn(i);c.entanglements[1]|=o,i&=~o}an(r),!(le&6)&&(Gr=Vn()+500,Ml())}}break;case 13:c=zt(r,2),c!==null&&Ke(c,r,2),bi(),_u(r,2)}if(r=vo(a),r===null&&pc(n,e,a,ei,s),r===l)break;l=r}l!==null&&a.stopPropagation()}else pc(n,e,a,null,s)}}function vo(n){return n=Ho(n),Eu(n)}var ei=null;function Eu(n){if(ei=null,n=Kt(n),n!==null){var e=ca(n);if(e===null)n=null;else{var s=e.tag;if(s===13){if(n=qf(e),n!==null)return n;n=null}else if(s===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return ei=n,null}function dx(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lg()){case Oo:return 2;case Gf:return 8;case Ar:case Dg:return 32;case Zf:return 268435456;default:return 32}default:return 32}}var jo=!1,Lt=null,Dt=null,Bt=null,hl=new Map,xl=new Map,St=[],K2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tm(n,e){switch(n){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":hl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(e.pointerId)}}function Ca(n,e,s,a,l,r){return n===null||n.nativeEvent!==r?(n={blockedOn:e,domEventName:s,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},e!==null&&(e=ua(e),e!==null&&ux(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),n)}function P2(n,e,s,a,l){switch(e){case"focusin":return Lt=Ca(Lt,n,e,s,a,l),!0;case"dragenter":return Dt=Ca(Dt,n,e,s,a,l),!0;case"mouseover":return Bt=Ca(Bt,n,e,s,a,l),!0;case"pointerover":var r=l.pointerId;return hl.set(r,Ca(hl.get(r)||null,n,e,s,a,l)),!0;case"gotpointercapture":return r=l.pointerId,xl.set(r,Ca(xl.get(r)||null,n,e,s,a,l)),!0}return!1}function mx(n){var e=Kt(n.target);if(e!==null){var s=ca(e);if(s!==null){if(e=s.tag,e===13){if(e=qf(s),e!==null){n.blockedOn=e,Gg(n.priority,function(){if(s.tag===13){var a=it(),l=zt(s,a);l!==null&&Ke(l,s,a),_u(s,a)}});return}}else if(e===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Nr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var s=vo(n.nativeEvent);if(s===null){s=n.nativeEvent;var a=new s.constructor(s.type,s);Oc=a,s.target.dispatchEvent(a),Oc=null}else return e=ua(s),e!==null&&ux(e),n.blockedOn=s,!1;e.shift()}return!0}function $m(n,e,s){Nr(n)&&s.delete(e)}function I2(){jo=!1,Lt!==null&&Nr(Lt)&&(Lt=null),Dt!==null&&Nr(Dt)&&(Dt=null),Bt!==null&&Nr(Bt)&&(Bt=null),hl.forEach($m),xl.forEach($m)}function tr(n,e){n.blockedOn===e&&(n.blockedOn=null,jo||(jo=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,I2)))}var sr=null;function Lm(n){sr!==n&&(sr=n,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,function(){sr===n&&(sr=null);for(var e=0;e<n.length;e+=3){var s=n[e],a=n[e+1],l=n[e+2];if(typeof a!="function"){if(Eu(a||s)===null)continue;break}var r=ua(s);r!==null&&(n.splice(e,3),e-=3,Yc(r,{pending:!0,data:l,method:s.method,action:a},a,l))}}))}function gl(n){function e(o){return tr(o,n)}Lt!==null&&tr(Lt,n),Dt!==null&&tr(Dt,n),Bt!==null&&tr(Bt,n),hl.forEach(e),xl.forEach(e);for(var s=0;s<St.length;s++){var a=St[s];a.blockedOn===n&&(a.blockedOn=null)}for(;0<St.length&&(s=St[0],s.blockedOn===null);)mx(s),s.blockedOn===null&&St.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(a=0;a<s.length;a+=3){var l=s[a],r=s[a+1],i=l[We]||null;if(typeof r=="function")i||Lm(s);else if(i){var c=null;if(r&&r.hasAttribute("formAction")){if(l=r,i=r[We]||null)c=i.formAction;else if(Eu(l)!==null)continue}else c=i.action;typeof c=="function"?s[a+1]=c:(s.splice(a,3),a-=3),Lm(s)}}}function Au(n){this._internalRoot=n}wi.prototype.render=Au.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(C(409));var s=e.current,a=it();ox(s,a,n,e,null,null)};wi.prototype.unmount=Au.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;n.tag===0&&Js(),ox(n.current,2,null,n,null,null),bi(),e[oa]=null}};function wi(n){this._internalRoot=n}wi.prototype.unstable_scheduleHydration=function(n){if(n){var e=Pf();n={blockedOn:null,target:n,priority:e};for(var s=0;s<St.length&&e!==0&&e<St[s].priority;s++);St.splice(s,0,n),s===0&&mx(n)}};ve.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(C(188)):(n=Object.keys(n).join(","),Error(C(268,n)));return n=Vf(e),n=n===null?null:n.stateNode,n};var Ea={findFiberByHostInstance:Kt,bundleType:0,version:"19.0.0-rc-915b914b3a-20240515",rendererPackageName:"react-dom"},ej={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K,findHostInstanceByFiber:function(n){return n=Vf(n),n===null?null:n.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||F2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"19.0.0-rc-915b914b3a-20240515"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ar.isDisabled&&ar.supportsFiber)try{kl=ar.inject(ej),dn=ar}catch{}}ii.createRoot=function(n,e){if(!Of(n))throw Error(C(299));var s=!1,a="",l=c0,r=o0,i=u0,c=null;return e!=null&&(e.unstable_strictMode===!0&&(s=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(c=e.unstable_transitionCallbacks)),e=ix(n,1,!1,null,null,s,!1,a,l,r,i,c,null),n[oa]=e.current,wu(n.nodeType===8?n.parentNode:n),new Au(e)};ii.hydrateRoot=function(n,e,s){if(!Of(n))throw Error(C(299));var a=!1,l="",r=c0,i=o0,c=u0,o=null,u=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onUncaughtError!==void 0&&(r=s.onUncaughtError),s.onCaughtError!==void 0&&(i=s.onCaughtError),s.onRecoverableError!==void 0&&(c=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(o=s.unstable_transitionCallbacks),s.formState!==void 0&&(u=s.formState)),e=ix(n,1,!0,e,s??null,a,!1,l,r,i,c,o,u),e.context=cx(null),s=e.current,a=it(),l=rt(a),l.callback=null,Mt(s,l,a),e.current.lanes=a,Rl(e,a),an(e),n[oa]=e.current,wu(n),new wi(e)};ii.version="19.0.0-rc-915b914b3a-20240515";function px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(px)}catch(n){console.error(n)}}px(),Mf.exports=ii;var nj=Mf.exports;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(n[a]=s[a])}return n},vl.apply(this,arguments)}var Et;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Et||(Et={}));const Dm="popstate";function tj(n){n===void 0&&(n={});function e(a,l){let{pathname:r,search:i,hash:c}=a.location;return bo("",{pathname:r,search:i,hash:c},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function s(a,l){return typeof l=="string"?l:ni(l)}return aj(e,s,null,n)}function _e(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function fx(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sj(){return Math.random().toString(36).substr(2,8)}function Bm(n,e){return{usr:n.state,key:n.key,idx:e}}function bo(n,e,s,a){return s===void 0&&(s=null),vl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?ha(e):e,{state:s,key:e&&e.key||a||sj()})}function ni(n){let{pathname:e="/",search:s="",hash:a=""}=n;return s&&s!=="?"&&(e+=s.charAt(0)==="?"?s:"?"+s),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function ha(n){let e={};if(n){let s=n.indexOf("#");s>=0&&(e.hash=n.substr(s),n=n.substr(0,s));let a=n.indexOf("?");a>=0&&(e.search=n.substr(a),n=n.substr(0,a)),n&&(e.pathname=n)}return e}function aj(n,e,s,a){a===void 0&&(a={});let{window:l=document.defaultView,v5Compat:r=!1}=a,i=l.history,c=Et.Pop,o=null,u=d();u==null&&(u=0,i.replaceState(vl({},i.state,{idx:u}),""));function d(){return(i.state||{idx:null}).idx}function h(){c=Et.Pop;let k=d(),x=k==null?null:k-u;u=k,o&&o({action:c,location:N.location,delta:x})}function p(k,x){c=Et.Push;let m=bo(N.location,k,x);u=d()+1;let f=Bm(m,u),j=N.createHref(m);try{i.pushState(f,"",j)}catch(y){if(y instanceof DOMException&&y.name==="DataCloneError")throw y;l.location.assign(j)}r&&o&&o({action:c,location:N.location,delta:1})}function v(k,x){c=Et.Replace;let m=bo(N.location,k,x);u=d();let f=Bm(m,u),j=N.createHref(m);i.replaceState(f,"",j),r&&o&&o({action:c,location:N.location,delta:0})}function w(k){let x=l.location.origin!=="null"?l.location.origin:l.location.href,m=typeof k=="string"?k:ni(k);return m=m.replace(/ $/,"%20"),_e(x,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,x)}let N={get action(){return c},get location(){return n(l,i)},listen(k){if(o)throw new Error("A history only accepts one active listener");return l.addEventListener(Dm,h),o=k,()=>{l.removeEventListener(Dm,h),o=null}},createHref(k){return e(l,k)},createURL:w,encodeLocation(k){let x=w(k);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:v,go(k){return i.go(k)}};return N}var Om;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Om||(Om={}));function lj(n,e,s){s===void 0&&(s="/");let a=typeof e=="string"?ha(e):e,l=Ru(a.pathname||"/",s);if(l==null)return null;let r=hx(n);rj(r);let i=null;for(let c=0;i==null&&c<r.length;++c){let o=gj(l);i=hj(r[c],o)}return i}function hx(n,e,s,a){e===void 0&&(e=[]),s===void 0&&(s=[]),a===void 0&&(a="");let l=(r,i,c)=>{let o={relativePath:c===void 0?r.path||"":c,caseSensitive:r.caseSensitive===!0,childrenIndex:i,route:r};o.relativePath.startsWith("/")&&(_e(o.relativePath.startsWith(a),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(a.length));let u=Ot([a,o.relativePath]),d=s.concat(o);r.children&&r.children.length>0&&(_e(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),hx(r.children,e,d,u)),!(r.path==null&&!r.index)&&e.push({path:u,score:pj(u,r.index),routesMeta:d})};return n.forEach((r,i)=>{var c;if(r.path===""||!((c=r.path)!=null&&c.includes("?")))l(r,i);else for(let o of xx(r.path))l(r,i,o)}),e}function xx(n){let e=n.split("/");if(e.length===0)return[];let[s,...a]=e,l=s.endsWith("?"),r=s.replace(/\?$/,"");if(a.length===0)return l?[r,""]:[r];let i=xx(a.join("/")),c=[];return c.push(...i.map(o=>o===""?r:[r,o].join("/"))),l&&c.push(...i),c.map(o=>n.startsWith("/")&&o===""?"/":o)}function rj(n){n.sort((e,s)=>e.score!==s.score?s.score-e.score:fj(e.routesMeta.map(a=>a.childrenIndex),s.routesMeta.map(a=>a.childrenIndex)))}const ij=/^:[\w-]+$/,cj=3,oj=2,uj=1,dj=10,mj=-2,zm=n=>n==="*";function pj(n,e){let s=n.split("/"),a=s.length;return s.some(zm)&&(a+=mj),e&&(a+=oj),s.filter(l=>!zm(l)).reduce((l,r)=>l+(ij.test(r)?cj:r===""?uj:dj),a)}function fj(n,e){return n.length===e.length&&n.slice(0,-1).every((a,l)=>a===e[l])?n[n.length-1]-e[e.length-1]:0}function hj(n,e){let{routesMeta:s}=n,a={},l="/",r=[];for(let i=0;i<s.length;++i){let c=s[i],o=i===s.length-1,u=l==="/"?e:e.slice(l.length)||"/",d=gx({path:c.relativePath,caseSensitive:c.caseSensitive,end:o},u);if(!d)return null;Object.assign(a,d.params);let h=c.route;r.push({params:a,pathname:Ot([l,d.pathname]),pathnameBase:yj(Ot([l,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(l=Ot([l,d.pathnameBase]))}return r}function gx(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,a]=xj(n.path,n.caseSensitive,n.end),l=e.match(s);if(!l)return null;let r=l[0],i=r.replace(/(.)\/+$/,"$1"),c=l.slice(1);return{params:a.reduce((u,d,h)=>{let{paramName:p,isOptional:v}=d;if(p==="*"){let N=c[h]||"";i=r.slice(0,r.length-N.length).replace(/(.)\/+$/,"$1")}const w=c[h];return v&&!w?u[p]=void 0:u[p]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:i,pattern:n}}function xj(n,e,s){e===void 0&&(e=!1),s===void 0&&(s=!0),fx(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let a=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,c,o)=>(a.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(a.push({paramName:"*"}),l+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?l+="\\/*$":n!==""&&n!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),a]}function gj(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fx(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Ru(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let s=e.endsWith("/")?e.length-1:e.length,a=n.charAt(s);return a&&a!=="/"?null:n.slice(s)||"/"}function vj(n,e){e===void 0&&(e="/");let{pathname:s,search:a="",hash:l=""}=typeof n=="string"?ha(n):n;return{pathname:s?s.startsWith("/")?s:jj(s,e):e,search:Nj(a),hash:wj(l)}}function jj(n,e){let s=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(l=>{l===".."?s.length>1&&s.pop():l!=="."&&s.push(l)}),s.length>1?s.join("/"):"/"}function xc(n,e,s,a){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bj(n){return n.filter((e,s)=>s===0||e.route.path&&e.route.path.length>0)}function vx(n,e){let s=bj(n);return e?s.map((a,l)=>l===n.length-1?a.pathname:a.pathnameBase):s.map(a=>a.pathnameBase)}function jx(n,e,s,a){a===void 0&&(a=!1);let l;typeof n=="string"?l=ha(n):(l=vl({},n),_e(!l.pathname||!l.pathname.includes("?"),xc("?","pathname","search",l)),_e(!l.pathname||!l.pathname.includes("#"),xc("#","pathname","hash",l)),_e(!l.search||!l.search.includes("#"),xc("#","search","hash",l)));let r=n===""||l.pathname==="",i=r?"/":l.pathname,c;if(i==null)c=s;else{let h=e.length-1;if(!a&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),h-=1;l.pathname=p.join("/")}c=h>=0?e[h]:"/"}let o=vj(l,c),u=i&&i!=="/"&&i.endsWith("/"),d=(r||i===".")&&s.endsWith("/");return!o.pathname.endsWith("/")&&(u||d)&&(o.pathname+="/"),o}const Ot=n=>n.join("/").replace(/\/\/+/g,"/"),yj=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Nj=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,wj=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Sj(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const bx=["post","put","patch","delete"];new Set(bx);const kj=["get",...bx];new Set(kj);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jl(){return jl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(n[a]=s[a])}return n},jl.apply(this,arguments)}const Mu=g.createContext(null),_j=g.createContext(null),hs=g.createContext(null),Si=g.createContext(null),qt=g.createContext({outlet:null,matches:[],isDataRoute:!1}),yx=g.createContext(null);function Cj(n,e){let{relative:s}=e===void 0?{}:e;xa()||_e(!1);let{basename:a,navigator:l}=g.useContext(hs),{hash:r,pathname:i,search:c}=Lu(n,{relative:s}),o=i;return a!=="/"&&(o=i==="/"?a:Ot([a,i])),l.createHref({pathname:o,search:c,hash:r})}function xa(){return g.useContext(Si)!=null}function xs(){return xa()||_e(!1),g.useContext(Si).location}function Ej(n){xa()||_e(!1);let{pathname:e}=xs();return g.useMemo(()=>gx(n,e),[e,n])}function Nx(n){g.useContext(hs).static||g.useLayoutEffect(n)}function Tu(){let{isDataRoute:n}=g.useContext(qt);return n?Vj():Aj()}function Aj(){xa()||_e(!1);let n=g.useContext(Mu),{basename:e,future:s,navigator:a}=g.useContext(hs),{matches:l}=g.useContext(qt),{pathname:r}=xs(),i=JSON.stringify(vx(l,s.v7_relativeSplatPath)),c=g.useRef(!1);return Nx(()=>{c.current=!0}),g.useCallback(function(u,d){if(d===void 0&&(d={}),!c.current)return;if(typeof u=="number"){a.go(u);return}let h=jx(u,JSON.parse(i),r,d.relative==="path");n==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Ot([e,h.pathname])),(d.replace?a.replace:a.push)(h,d.state,d)},[e,a,i,r,n])}const Rj=g.createContext(null);function $u(n){let e=g.useContext(qt).outlet;return e&&g.createElement(Rj.Provider,{value:n},e)}function Lu(n,e){let{relative:s}=e===void 0?{}:e,{future:a}=g.useContext(hs),{matches:l}=g.useContext(qt),{pathname:r}=xs(),i=JSON.stringify(vx(l,a.v7_relativeSplatPath));return g.useMemo(()=>jx(n,JSON.parse(i),r,s==="path"),[n,i,r,s])}function Mj(n,e){return Tj(n,e)}function Tj(n,e,s,a){xa()||_e(!1);let{navigator:l}=g.useContext(hs),{matches:r}=g.useContext(qt),i=r[r.length-1],c=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let u=xs(),d;if(e){var h;let k=typeof e=="string"?ha(e):e;o==="/"||(h=k.pathname)!=null&&h.startsWith(o)||_e(!1),d=k}else d=u;let p=d.pathname||"/",v=p;if(o!=="/"){let k=o.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let w=lj(n,{pathname:v}),N=Oj(w&&w.map(k=>Object.assign({},k,{params:Object.assign({},c,k.params),pathname:Ot([o,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?o:Ot([o,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),r,s,a);return e&&N?g.createElement(Si.Provider,{value:{location:jl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Et.Pop}},N):N}function $j(){let n=qj(),e=Sj(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},e),s?g.createElement("pre",{style:l},s):null,null)}const Lj=g.createElement($j,null);class Dj extends g.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,s){return s.location!==e.location||s.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:s.error,location:s.location,revalidation:e.revalidation||s.revalidation}}componentDidCatch(e,s){console.error("React Router caught the following error during render",e,s)}render(){return this.state.error!==void 0?g.createElement(qt.Provider,{value:this.props.routeContext},g.createElement(yx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bj(n){let{routeContext:e,match:s,children:a}=n,l=g.useContext(Mu);return l&&l.static&&l.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=s.route.id),g.createElement(qt.Provider,{value:e},a)}function Oj(n,e,s,a){var l;if(e===void 0&&(e=[]),s===void 0&&(s=null),a===void 0&&(a=null),n==null){var r;if((r=s)!=null&&r.errors)n=s.matches;else return null}let i=n,c=(l=s)==null?void 0:l.errors;if(c!=null){let d=i.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);d>=0||_e(!1),i=i.slice(0,Math.min(i.length,d+1))}let o=!1,u=-1;if(s&&a&&a.v7_partialHydration)for(let d=0;d<i.length;d++){let h=i[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:p,errors:v}=s,w=h.route.loader&&p[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||w){o=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((d,h,p)=>{let v,w=!1,N=null,k=null;s&&(v=c&&h.route.id?c[h.route.id]:void 0,N=h.route.errorElement||Lj,o&&(u<0&&p===0?(w=!0,k=null):u===p&&(w=!0,k=h.route.hydrateFallbackElement||null)));let x=e.concat(i.slice(0,p+1)),m=()=>{let f;return v?f=N:w?f=k:h.route.Component?f=g.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=d,g.createElement(Bj,{match:h,routeContext:{outlet:d,matches:x,isDataRoute:s!=null},children:f})};return s&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?g.createElement(Dj,{location:s.location,revalidation:s.revalidation,component:N,error:v,children:m(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):m()},null)}var wx=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(wx||{}),ti=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(ti||{});function zj(n){let e=g.useContext(Mu);return e||_e(!1),e}function Uj(n){let e=g.useContext(_j);return e||_e(!1),e}function Hj(n){let e=g.useContext(qt);return e||_e(!1),e}function Sx(n){let e=Hj(),s=e.matches[e.matches.length-1];return s.route.id||_e(!1),s.route.id}function qj(){var n;let e=g.useContext(yx),s=Uj(ti.UseRouteError),a=Sx(ti.UseRouteError);return e!==void 0?e:(n=s.errors)==null?void 0:n[a]}function Vj(){let{router:n}=zj(wx.UseNavigateStable),e=Sx(ti.UseNavigateStable),s=g.useRef(!1);return Nx(()=>{s.current=!0}),g.useCallback(function(l,r){r===void 0&&(r={}),s.current&&(typeof l=="number"?n.navigate(l):n.navigate(l,jl({fromRouteId:e},r)))},[n,e])}function Xj(n){return $u(n.context)}function jt(n){_e(!1)}function Gj(n){let{basename:e="/",children:s=null,location:a,navigationType:l=Et.Pop,navigator:r,static:i=!1,future:c}=n;xa()&&_e(!1);let o=e.replace(/^\/*/,"/"),u=g.useMemo(()=>({basename:o,navigator:r,static:i,future:jl({v7_relativeSplatPath:!1},c)}),[o,c,r,i]);typeof a=="string"&&(a=ha(a));let{pathname:d="/",search:h="",hash:p="",state:v=null,key:w="default"}=a,N=g.useMemo(()=>{let k=Ru(d,o);return k==null?null:{location:{pathname:k,search:h,hash:p,state:v,key:w},navigationType:l}},[o,d,h,p,v,w,l]);return N==null?null:g.createElement(hs.Provider,{value:u},g.createElement(Si.Provider,{children:s,value:N}))}function Zj(n){let{children:e,location:s}=n;return Mj(yo(e),s)}new Promise(()=>{});function yo(n,e){e===void 0&&(e=[]);let s=[];return g.Children.forEach(n,(a,l)=>{if(!g.isValidElement(a))return;let r=[...e,l];if(a.type===g.Fragment){s.push.apply(s,yo(a.props.children,r));return}a.type!==jt&&_e(!1),!a.props.index||!a.props.children||_e(!1);let i={id:a.props.id||r.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(i.children=yo(a.props.children,r)),s.push(i)}),s}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function No(){return No=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(n[a]=s[a])}return n},No.apply(this,arguments)}function Yj(n,e){if(n==null)return{};var s={},a=Object.keys(n),l,r;for(r=0;r<a.length;r++)l=a[r],!(e.indexOf(l)>=0)&&(s[l]=n[l]);return s}function Qj(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Fj(n,e){return n.button===0&&(!e||e==="_self")&&!Qj(n)}const Jj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Wj="6";try{window.__reactRouterVersion=Wj}catch{}const Kj="startTransition",Um=bg[Kj];function Pj(n){let{basename:e,children:s,future:a,window:l}=n,r=g.useRef();r.current==null&&(r.current=tj({window:l,v5Compat:!0}));let i=r.current,[c,o]=g.useState({action:i.action,location:i.location}),{v7_startTransition:u}=a||{},d=g.useCallback(h=>{u&&Um?Um(()=>o(h)):o(h)},[o,u]);return g.useLayoutEffect(()=>i.listen(d),[i,d]),g.createElement(Gj,{basename:e,children:s,location:c.location,navigationType:c.action,navigator:i,future:a})}const Ij=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kx=g.forwardRef(function(e,s){let{onClick:a,relative:l,reloadDocument:r,replace:i,state:c,target:o,to:u,preventScrollReset:d,unstable_viewTransition:h}=e,p=Yj(e,Jj),{basename:v}=g.useContext(hs),w,N=!1;if(typeof u=="string"&&eb.test(u)&&(w=u,Ij))try{let f=new URL(window.location.href),j=u.startsWith("//")?new URL(f.protocol+u):new URL(u),y=Ru(j.pathname,v);j.origin===f.origin&&y!=null?u=y+j.search+j.hash:N=!0}catch{}let k=Cj(u,{relative:l}),x=nb(u,{replace:i,state:c,target:o,preventScrollReset:d,relative:l,unstable_viewTransition:h});function m(f){a&&a(f),f.defaultPrevented||x(f)}return g.createElement("a",No({},p,{href:w||k,onClick:N||r?a:m,ref:s,target:o}))});var Hm;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Hm||(Hm={}));var qm;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(qm||(qm={}));function nb(n,e){let{target:s,replace:a,state:l,preventScrollReset:r,relative:i,unstable_viewTransition:c}=e===void 0?{}:e,o=Tu(),u=xs(),d=Lu(n,{relative:i});return g.useCallback(h=>{if(Fj(h,s)){h.preventDefault();let p=a!==void 0?a:ni(u)===ni(d);o(n,{replace:p,state:l,preventScrollReset:r,relative:i,unstable_viewTransition:c})}},[u,o,d,a,l,s,n,r,i,c])}function Vm(){return t.jsxs("div",{className:"w-full h-64 flex flex-col items-center justify-center",children:[t.jsx("div",{className:"loader"}),t.jsx("div",{className:"text-sm text-blue-500 mt-3",children:"page loading..."})]})}function _x(n){var e,s,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n)){var l=n.length;for(e=0;e<l;e++)n[e]&&(s=_x(n[e]))&&(a&&(a+=" "),a+=s)}else for(s in n)n[s]&&(a&&(a+=" "),a+=s);return a}function ue(){for(var n,e,s=0,a="",l=arguments.length;s<l;s++)(n=arguments[s])&&(e=_x(n))&&(a&&(a+=" "),a+=e);return a}const Du="-";function tb(n){const e=ab(n),{conflictingClassGroups:s,conflictingClassGroupModifiers:a}=n;function l(i){const c=i.split(Du);return c[0]===""&&c.length!==1&&c.shift(),Cx(c,e)||sb(i)}function r(i,c){const o=s[i]||[];return c&&a[i]?[...o,...a[i]]:o}return{getClassGroupId:l,getConflictingClassGroupIds:r}}function Cx(n,e){var i;if(n.length===0)return e.classGroupId;const s=n[0],a=e.nextPart.get(s),l=a?Cx(n.slice(1),a):void 0;if(l)return l;if(e.validators.length===0)return;const r=n.join(Du);return(i=e.validators.find(({validator:c})=>c(r)))==null?void 0:i.classGroupId}const Xm=/^\[(.+)\]$/;function sb(n){if(Xm.test(n)){const e=Xm.exec(n)[1],s=e==null?void 0:e.substring(0,e.indexOf(":"));if(s)return"arbitrary.."+s}}function ab(n){const{theme:e,prefix:s}=n,a={nextPart:new Map,validators:[]};return rb(Object.entries(n.classGroups),s).forEach(([r,i])=>{wo(i,a,r,e)}),a}function wo(n,e,s,a){n.forEach(l=>{if(typeof l=="string"){const r=l===""?e:Gm(e,l);r.classGroupId=s;return}if(typeof l=="function"){if(lb(l)){wo(l(a),e,s,a);return}e.validators.push({validator:l,classGroupId:s});return}Object.entries(l).forEach(([r,i])=>{wo(i,Gm(e,r),s,a)})})}function Gm(n,e){let s=n;return e.split(Du).forEach(a=>{s.nextPart.has(a)||s.nextPart.set(a,{nextPart:new Map,validators:[]}),s=s.nextPart.get(a)}),s}function lb(n){return n.isThemeGetter}function rb(n,e){return e?n.map(([s,a])=>{const l=a.map(r=>typeof r=="string"?e+r:typeof r=="object"?Object.fromEntries(Object.entries(r).map(([i,c])=>[e+i,c])):r);return[s,l]}):n}function ib(n){if(n<1)return{get:()=>{},set:()=>{}};let e=0,s=new Map,a=new Map;function l(r,i){s.set(r,i),e++,e>n&&(e=0,a=s,s=new Map)}return{get(r){let i=s.get(r);if(i!==void 0)return i;if((i=a.get(r))!==void 0)return l(r,i),i},set(r,i){s.has(r)?s.set(r,i):l(r,i)}}}const Ex="!";function cb(n){const e=n.separator,s=e.length===1,a=e[0],l=e.length;return function(i){const c=[];let o=0,u=0,d;for(let N=0;N<i.length;N++){let k=i[N];if(o===0){if(k===a&&(s||i.slice(N,N+l)===e)){c.push(i.slice(u,N)),u=N+l;continue}if(k==="/"){d=N;continue}}k==="["?o++:k==="]"&&o--}const h=c.length===0?i:i.substring(u),p=h.startsWith(Ex),v=p?h.substring(1):h,w=d&&d>u?d-u:void 0;return{modifiers:c,hasImportantModifier:p,baseClassName:v,maybePostfixModifierPosition:w}}}function ob(n){if(n.length<=1)return n;const e=[];let s=[];return n.forEach(a=>{a[0]==="["?(e.push(...s.sort(),a),s=[]):s.push(a)}),e.push(...s.sort()),e}function ub(n){return{cache:ib(n.cacheSize),splitModifiers:cb(n),...tb(n)}}const db=/\s+/;function mb(n,e){const{splitModifiers:s,getClassGroupId:a,getConflictingClassGroupIds:l}=e,r=new Set;return n.trim().split(db).map(i=>{const{modifiers:c,hasImportantModifier:o,baseClassName:u,maybePostfixModifierPosition:d}=s(i);let h=a(d?u.substring(0,d):u),p=!!d;if(!h){if(!d)return{isTailwindClass:!1,originalClassName:i};if(h=a(u),!h)return{isTailwindClass:!1,originalClassName:i};p=!1}const v=ob(c).join(":");return{isTailwindClass:!0,modifierId:o?v+Ex:v,classGroupId:h,originalClassName:i,hasPostfixModifier:p}}).reverse().filter(i=>{if(!i.isTailwindClass)return!0;const{modifierId:c,classGroupId:o,hasPostfixModifier:u}=i,d=c+o;return r.has(d)?!1:(r.add(d),l(o,u).forEach(h=>r.add(c+h)),!0)}).reverse().map(i=>i.originalClassName).join(" ")}function pb(){let n=0,e,s,a="";for(;n<arguments.length;)(e=arguments[n++])&&(s=Ax(e))&&(a&&(a+=" "),a+=s);return a}function Ax(n){if(typeof n=="string")return n;let e,s="";for(let a=0;a<n.length;a++)n[a]&&(e=Ax(n[a]))&&(s&&(s+=" "),s+=e);return s}function fb(n,...e){let s,a,l,r=i;function i(o){const u=e.reduce((d,h)=>h(d),n());return s=ub(u),a=s.cache.get,l=s.cache.set,r=c,c(o)}function c(o){const u=a(o);if(u)return u;const d=mb(o,s);return l(o,d),d}return function(){return r(pb.apply(null,arguments))}}function he(n){const e=s=>s[n]||[];return e.isThemeGetter=!0,e}const Rx=/^\[(?:([a-z-]+):)?(.+)\]$/i,hb=/^\d+\/\d+$/,xb=new Set(["px","full","screen"]),gb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,vb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,jb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,bb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,yb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function In(n){return It(n)||xb.has(n)||hb.test(n)}function xt(n){return ga(n,"length",Ab)}function It(n){return!!n&&!Number.isNaN(Number(n))}function lr(n){return ga(n,"number",It)}function Aa(n){return!!n&&Number.isInteger(Number(n))}function Nb(n){return n.endsWith("%")&&It(n.slice(0,-1))}function G(n){return Rx.test(n)}function gt(n){return gb.test(n)}const wb=new Set(["length","size","percentage"]);function Sb(n){return ga(n,wb,Mx)}function kb(n){return ga(n,"position",Mx)}const _b=new Set(["image","url"]);function Cb(n){return ga(n,_b,Mb)}function Eb(n){return ga(n,"",Rb)}function Ra(){return!0}function ga(n,e,s){const a=Rx.exec(n);return a?a[1]?typeof e=="string"?a[1]===e:e.has(a[1]):s(a[2]):!1}function Ab(n){return vb.test(n)&&!jb.test(n)}function Mx(){return!1}function Rb(n){return bb.test(n)}function Mb(n){return yb.test(n)}function Tb(){const n=he("colors"),e=he("spacing"),s=he("blur"),a=he("brightness"),l=he("borderColor"),r=he("borderRadius"),i=he("borderSpacing"),c=he("borderWidth"),o=he("contrast"),u=he("grayscale"),d=he("hueRotate"),h=he("invert"),p=he("gap"),v=he("gradientColorStops"),w=he("gradientColorStopPositions"),N=he("inset"),k=he("margin"),x=he("opacity"),m=he("padding"),f=he("saturate"),j=he("scale"),y=he("sepia"),b=he("skew"),S=he("space"),_=he("translate"),A=()=>["auto","contain","none"],$=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto",G,e],O=()=>[G,e],fe=()=>["",In,xt],re=()=>["auto",It,G],P=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],R=()=>["solid","dashed","dotted","double","none"],L=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],T=()=>["start","end","center","between","around","evenly","stretch"],D=()=>["","0",G],H=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[It,lr],ee=()=>[It,G];return{cacheSize:500,separator:":",theme:{colors:[Ra],spacing:[In,xt],blur:["none","",gt,G],brightness:X(),borderColor:[n],borderRadius:["none","","full",gt,G],borderSpacing:O(),borderWidth:fe(),contrast:X(),grayscale:D(),hueRotate:ee(),invert:D(),gap:O(),gradientColorStops:[n],gradientColorStopPositions:[Nb,xt],inset:U(),margin:U(),opacity:X(),padding:O(),saturate:X(),scale:X(),sepia:D(),skew:ee(),space:O(),translate:O()},classGroups:{aspect:[{aspect:["auto","square","video",G]}],container:["container"],columns:[{columns:[gt]}],"break-after":[{"break-after":H()}],"break-before":[{"break-before":H()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...P(),G]}],overflow:[{overflow:$()}],"overflow-x":[{"overflow-x":$()}],"overflow-y":[{"overflow-y":$()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[N]}],"inset-x":[{"inset-x":[N]}],"inset-y":[{"inset-y":[N]}],start:[{start:[N]}],end:[{end:[N]}],top:[{top:[N]}],right:[{right:[N]}],bottom:[{bottom:[N]}],left:[{left:[N]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Aa,G]}],basis:[{basis:U()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",G]}],grow:[{grow:D()}],shrink:[{shrink:D()}],order:[{order:["first","last","none",Aa,G]}],"grid-cols":[{"grid-cols":[Ra]}],"col-start-end":[{col:["auto",{span:["full",Aa,G]},G]}],"col-start":[{"col-start":re()}],"col-end":[{"col-end":re()}],"grid-rows":[{"grid-rows":[Ra]}],"row-start-end":[{row:["auto",{span:[Aa,G]},G]}],"row-start":[{"row-start":re()}],"row-end":[{"row-end":re()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",G]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",G]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...T()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...T(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...T(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[m]}],px:[{px:[m]}],py:[{py:[m]}],ps:[{ps:[m]}],pe:[{pe:[m]}],pt:[{pt:[m]}],pr:[{pr:[m]}],pb:[{pb:[m]}],pl:[{pl:[m]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",G,e]}],"min-w":[{"min-w":[G,e,"min","max","fit"]}],"max-w":[{"max-w":[G,e,"none","full","min","max","fit","prose",{screen:[gt]},gt]}],h:[{h:[G,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[G,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[G,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[G,e,"auto","min","max","fit"]}],"font-size":[{text:["base",gt,xt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",lr]}],"font-family":[{font:[Ra]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",G]}],"line-clamp":[{"line-clamp":["none",It,lr]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",In,G]}],"list-image":[{"list-image":["none",G]}],"list-style-type":[{list:["none","disc","decimal",G]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...R(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",In,xt]}],"underline-offset":[{"underline-offset":["auto",In,G]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",G]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",G]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...P(),kb]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Sb]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Cb]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[r]}],"rounded-s":[{"rounded-s":[r]}],"rounded-e":[{"rounded-e":[r]}],"rounded-t":[{"rounded-t":[r]}],"rounded-r":[{"rounded-r":[r]}],"rounded-b":[{"rounded-b":[r]}],"rounded-l":[{"rounded-l":[r]}],"rounded-ss":[{"rounded-ss":[r]}],"rounded-se":[{"rounded-se":[r]}],"rounded-ee":[{"rounded-ee":[r]}],"rounded-es":[{"rounded-es":[r]}],"rounded-tl":[{"rounded-tl":[r]}],"rounded-tr":[{"rounded-tr":[r]}],"rounded-br":[{"rounded-br":[r]}],"rounded-bl":[{"rounded-bl":[r]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...R(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:R()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...R()]}],"outline-offset":[{"outline-offset":[In,G]}],"outline-w":[{outline:[In,xt]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:fe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[In,xt]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",gt,Eb]}],"shadow-color":[{shadow:[Ra]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...L(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":L()}],filter:[{filter:["","none"]}],blur:[{blur:[s]}],brightness:[{brightness:[a]}],contrast:[{contrast:[o]}],"drop-shadow":[{"drop-shadow":["","none",gt,G]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[h]}],saturate:[{saturate:[f]}],sepia:[{sepia:[y]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[s]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[o]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[f]}],"backdrop-sepia":[{"backdrop-sepia":[y]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",G]}],duration:[{duration:ee()}],ease:[{ease:["linear","in","out","in-out",G]}],delay:[{delay:ee()}],animate:[{animate:["none","spin","ping","pulse","bounce",G]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[Aa,G]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[b]}],"skew-y":[{"skew-y":[b]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",G]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",G]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",G]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[In,xt,lr]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const ln=fb(Tb);function Bn(n){const{children:e,className:s="",end:a=!0,activeName:l,to:r,onClick:i,...c}=n,o=Lu(r);let u=Ej({path:o.pathname,end:a});const d=ln(ue(s,"transition cursor-pointer",{[l]:!!u}));function h(p){u&&p.preventDefault(),i&&i(p)}return t.jsx(kx,{className:d,to:r,...c,onClick:h,children:e})}const $b="_modal_fd6cp_1",Lb="_show_fd6cp_1",Db="_hide_fd6cp_1",Bb="_out_fd6cp_16",gc={modal:$b,show:Lb,hide:Db,in:"_in_fd6cp_12",out:Bb};function ki(n){const{onClose:e,children:s,ref:a}=n,[l,r]=g.useState(!1),[i,c]=g.useState(!1);g.useImperativeHandle(a,()=>({show:()=>{r(!0),document.body.style.overflow="hidden",c(!0)},close:()=>{document.body.style.overflow="visible",r(!1)}}));const o=ue(gc.modal,{[gc.in]:l,[gc.out]:!l});function u(){l||c(!1)}function d(){r(!1),e&&e()}return i?t.jsx(t.Fragment,{children:Sl.createPortal(t.jsx("div",{className:o,onAnimationEnd:u,onClick:d,children:s}),document.body)}):null}function Ob(){return t.jsx("div",{className:"w-10 h-10 ml-4 border rounded-full overflow-hidden relative",children:t.jsx("div",{className:"pyramid-loader",children:t.jsxs("div",{className:"wrapper",children:[t.jsx("span",{className:"side side1"}),t.jsx("span",{className:"side side2"}),t.jsx("span",{className:"side side3"}),t.jsx("span",{className:"side side4"}),t.jsx("span",{className:"shadow"})]})})})}function zb(){const[n,e]=g.useState(!0),[s,a]=g.useState({});return g.useEffect(()=>{function l(r){if(r.origin!=="https://giscus.app")return;e(!1);let i=r.data.giscus;i.viewer&&a(i.viewer)}window.addEventListener("message",l,!1)},[]),n?t.jsx(Ob,{}):t.jsx("div",{className:"w-10 h-10 ml-4 border rounded-full overflow-hidden",children:t.jsx("img",{className:"w-full h-full",src:s.avatarUrl,alt:""})})}document.documentElement.style.fontSize="14px";function me(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:i,success:c,ghost:o,rect:u,disabled:d,...h}=n,N=ln(ue("rounded-md border border-transparent font-medium cursor-pointer transition relative text-gray-600","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"bg-transparent border-transparent hover:bg-gray-100":o,"bg-opacity-70":d,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r,"w-8 h-8 p-0":u},e));return t.jsxs("button",{className:N,...h,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}let tl;const Ub=n=>{tl={x:n.pageX,y:n.pageY},setTimeout(()=>{tl=null},100)};document.documentElement.addEventListener("click",Ub,!0);function Hb(n,e){var s=n.style;["Webkit","Moz","Ms","ms"].forEach(function(a){s[a+"TransformOrigin"]=e}),s.transformOrigin=e}function qb(n){const e=n.getBoundingClientRect(),s={left:e.left,top:e.top},l=n.ownerDocument.defaultView;return s.left+=Zm(l),s.top+=Zm(l,1),s}function Zm(n,e){var s=n["page"+(e?"Y":"X")+"Offset"],a="scroll"+(e?"Top":"Left");if(typeof s!="number"){var l=n.document;s=l.documentElement[a],typeof s!="number"&&(s=l.body[a])}return s}function va(n){const{title:e,onClose:s,children:a,onSure:l,onCancel:r,ref:i,footer:c}=n,[o,u]=g.useState(!1),[d,h]=g.useState(!1),p=g.useRef(null),v=g.useRef(null);g.useImperativeHandle(i,()=>({show:()=>{v.current.show(),document.body.style.overflow="hidden",u(!0),h(!0)},close:w}));function w(){u(!1),v.current.close(),document.body.style.overflow="visible"}function N(){w(),s&&s()}function k(j){j.stopPropagation()}function x(j){j.stopPropagation(),l&&l()}function m(){o||h(!1)}const f=ue("dialog-wrapper",{in:o,out:!o});return g.useEffect(()=>{const j=p.current;if(d&&j){const y=qb(j);tl&&Hb(j,tl.x-y.left+"px "+(tl.y-y.top)+"px")}},[d]),t.jsx(ki,{ref:v,onClose:N,children:d?t.jsxs("div",{ref:p,className:f,onClick:k,onAnimationEnd:m,children:[t.jsxs("header",{className:"flex justify-between items-center mb-2",children:[t.jsx("div",{className:"font-bold text-lg leading-6",children:e}),t.jsx("div",{onClick:N,className:"p-2 rounded-md cursor-pointer transition hover:bg-gray-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})})]}),t.jsx("section",{className:"leading-6",children:a}),c||t.jsx("footer",{className:"text-end mt-4",children:t.jsx(me,{primary:!0,onClick:x,children:"确认"})})]}):null})}function Vb(){const n=g.useRef(null);function e(s){s.preventDefault(),n.current.show()}return t.jsxs(t.Fragment,{children:[t.jsxs(Bn,{className:"flex items-center",onClick:e,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"})}),t.jsx("div",{className:"ml-1 text-sm",children:"交流群"})]}),t.jsxs(va,{ref:n,title:"Message",onSure:()=>n.current.close(),children:["添加我的微信：",t.jsx("span",{className:"text-red-500 text-xl",children:"icanmeetu"}),"， 注明：添加 react19 付费交流群"]})]})}function Tn(n){const{type:e="text",className:s,required:a,label:l,help:r="此项规则不匹配",pattern:i,...c}=n,{pending:o}=Sl.useFormStatus(),u=ue("flex items-center my-10",s);return t.jsxs("div",{className:u,children:[l&&t.jsxs("label",{className:"w-20 text-right font-bold",children:[l,"："]}),t.jsx("div",{className:"input flex-1",children:t.jsx("input",{type:e,required:a,pattern:i,...c,disabled:o})})]})}function Xb(){const n=g.useRef(null);function e(s){s.preventDefault(),n.current.show()}return t.jsxs(t.Fragment,{children:[t.jsxs(Bn,{className:"flex items-center ml-4 bg-gray-900 px-4 py-2 rounded-full",to:"/",onClick:e,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 text-blue-50",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})}),t.jsx("div",{className:"ml-1 text-sm text-blue-50",children:"激活码"})]}),t.jsxs(va,{ref:n,title:"Message",onSure:()=>n.current.close(),children:["请添加交流群获得激活码，或者联系网站开发者这波能反杀获得激活码，联系方式如下",t.jsxs("div",{className:"flex my-4",children:[t.jsx("div",{className:"w-8",children:"wx:"}),t.jsx("div",{className:"text-red-500",children:"icanmeetu"})]})]})]})}const Ym=[{path:"tutorial",text:"教程"},{path:"component",text:"组件"},{path:"other",text:"其他"}];function Gb(){const n=g.useRef(null);return t.jsxs("header",{className:"fixed z-50 top-0 flex justify-between border-b border-slate-200 min-w-[320px] bg-white bg-opacity-70 backdrop-blur-sm w-full",children:[t.jsxs("div",{className:"pl-6 h-16 flex items-center md:pl-10 transition-all",children:[t.jsxs(Bn,{className:"flex items-center",to:"/",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})}),t.jsx("div",{className:"font-bold ml-2",children:"React 19"})]}),t.jsx("div",{className:"hidden md:block",children:Ym.map((e,s)=>t.jsx(Bn,{to:e.path,className:"ml-8 text-gray-500",end:!1,activeName:"text-gray-900",children:e.text},e.path))}),t.jsxs("a",{className:"hidden md:flex text-xs m-8 rounded-full bg-red-100 py-2 px-4 text-red-400 transition hover:bg-red-300 hover:text-red-700 cursor-pointer",href:"https://appxw863qeq2150.h5.xiaoeknow.com/p/decorate/homepage?entry=2&entry_type=2002&share_user_id=u_626bf7dfafe72_zLCXc4Qr0O&wework_share_customer_id=u_626bf7dfafe72_zLCXc4Qr0O",target:"_blank",children:["推荐：JavaScript 核心进阶",t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4 ml-2",children:t.jsx("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",clipRule:"evenodd"})})]})]}),t.jsxs("div",{className:"hidden md:flex h-16 items-center pr-6 text-gray-500",children:[t.jsx(Vb,{alt:"交流群"}),t.jsx(Xb,{alt:"激活码"}),t.jsx(zb,{})]}),t.jsx("div",{className:"md:hidden flex items-center pr-6 text-gray-700",onClick:()=>n.current.show(),children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"})})}),t.jsxs(ki,{ref:n,onClose:()=>n.current.close(),children:[t.jsxs("header",{className:"sticky top-0 flex justify-between border-b border-amber-50 bg-amber-50",children:[t.jsx("div",{className:"pl-6 h-16 flex items-center md:pl-10 transition-all",children:t.jsxs(Bn,{className:"flex items-center",to:"/",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})}),t.jsx("div",{className:"font-bold ml-2",children:"React 19"})]})}),t.jsx("div",{className:"flex h-16 items-center pr-6 text-gray-500",children:t.jsx("div",{className:"flex items-center text-gray-700",onClick:()=>n.current.show(),children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})})]}),Ym.map((e,s)=>t.jsx("div",{className:"flex items-center text-gray-700 bg-white px-8 py-5 transition hover:bg-amber-100",children:t.jsxs(Bn,{className:"flex items-center justify-between w-full",to:e.path,children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5",children:t.jsx("path",{fillRule:"evenodd",d:"M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})}),t.jsx("div",{className:"ml-2 text-sm",children:e.text})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})},e.path)),t.jsx("div",{className:"flex items-center text-red-500 bg-red-50 px-8 py-5 transition hover:text-red-700 hover:bg-red-200",children:t.jsxs("a",{className:"flex items-center justify-between w-full",href:"https://appxw863qeq2150.h5.xiaoeknow.com/p/decorate/homepage?entry=2&entry_type=2002&share_user_id=u_626bf7dfafe72_zLCXc4Qr0O&wework_share_customer_id=u_626bf7dfafe72_zLCXc4Qr0O",children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5",children:t.jsx("path",{fillRule:"evenodd",d:"M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z",clipRule:"evenodd"})}),t.jsx("div",{className:"ml-2 text-sm",children:"推荐：JavaScript 核心进阶"})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})}),t.jsx("div",{className:"flex items-center text-gray-700 bg-white px-8 py-5 transition hover:bg-amber-100",children:t.jsxs(Bn,{className:"flex items-center justify-between w-full",to:"/",children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"})}),t.jsx("div",{className:"ml-2 text-sm",children:"交流群"})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})}),t.jsx("div",{className:"flex items-center text-gray-700 bg-white px-8 py-5 transition hover:bg-amber-100",children:t.jsxs(Bn,{className:"flex items-center justify-between w-full",to:"/",children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})}),t.jsx("div",{className:"ml-2 text-sm",children:"激活码"})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})})]})]})}function Zb(){const[n,e]=g.useState(""),s=`relative ${n} bg-skin-fill overflow-hidden rounded`;return t.jsxs("div",{className:"my-8 border border-gray-150 rounded px-8 pb-8",children:[t.jsxs("div",{className:"flex justify-center",children:[t.jsx("div",{onClick:()=>e(""),className:"my-6 mx-2 h-6 w-6 rounded bg-indigo-500 cursor-pointer"}),t.jsx("div",{onClick:()=>e("theme-swiss"),className:"my-6 mx-2 h-6 w-6 rounded bg-red-600 cursor-pointer"}),t.jsx("div",{onClick:()=>e("theme-neon"),className:"my-6 mx-2 h-6 w-6 rounded bg-green-400 cursor-pointer"})]}),t.jsxs("div",{className:s,children:[t.jsx("img",{className:"absolute inset-0 h-full w-full object-cover opacity-30",src:"https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90 transition"}),t.jsxs("div",{className:"relative max-w-2xl mx-auto text-center py-16 px-8",children:[t.jsx("h2",{className:"font-extrabold text-skin-base text-4xl transition",children:t.jsx("span",{children:"极客时间、掘金买课优惠"})}),t.jsx("p",{className:"mt-4 text-md text-left text-skin-muted transition",children:"官方的课程返现全部归还，需要从网站 coursesub.top 或者公众号「课程减减」通过邀请链接进行下单，购买后添加客服微信发送课程名确认后即可收到红包，可正常使用极客时间的优惠券或者学生半价优惠。"}),t.jsx("div",{className:"mt-10 max-w-sm mx-auto sm:max-w-one sm:flex sm:justify-center",children:t.jsxs("div",{className:"space-y-0 mx-auto inline-grid grid-cols-2 gap-5",children:[t.jsx("a",{target:"_blank",className:"transition text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md shadow-lg px-8",href:"https://coursesub.top/?key=react",children:"去选课"}),t.jsx("a",{target:"_blank",className:"transition text-skin-base bg-skin-button-muted hover:bg-opacity-70 flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-lg shadow-sm px-8",href:"https://mp.weixin.qq.com/s?__biz=MzUyMjkwNTgwOA==&mid=2247485923&idx=1&sn=0710d33fd1e1287e10f88bd4139e0a0e&chksm=f9c5f85cceb2714a585567f21751ae703f8ba80519a7a089746079a05c4f916c962fe81332d1#rd",children:"详细规则"})]})})]})]})]})}function Yb(){return t.jsx("div",{className:"fixed top-0 inset-0 -z-10 mx-0 max-w-none overflow-hidden",children:t.jsxs("div",{className:"absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100",children:t.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5",children:[t.jsx("defs",{children:t.jsx("pattern",{id:":S1:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"-12",y:"4",children:t.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),t.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:S1:)"}),t.jsxs("svg",{x:"-12",y:"4",className:"overflow-visible",children:[t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"288",y:"168"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"144",y:"56"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"504",y:"168"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"720",y:"336"})]})]})}),t.jsx("svg",{viewBox:"0 0 1113 440","aria-hidden":"true",className:"absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden",children:t.jsx("path",{d:"M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"})})]})})}function vc({title:n,desc:e="",path:s,icon:a,className:l}){const[r,i]=g.useState({x:0,y:0}),c=g.useRef(null),o=unescape(n.replace(/\\u/gi,"%u")),u=unescape(e.replace(/\\u/gi,"%u"));g.useEffect(()=>{const v=c.current.getBoundingClientRect();function w(N){i({x:N.x-v.left,y:N.y+document.documentElement.scrollTop-v.top})}c.current.addEventListener("mouseenter",N=>{document.addEventListener("mousemove",w,!1)},!1),c.current.addEventListener("mouseleave",N=>{document.removeEventListener("mousemove",w,!1)},!1)},[]);const d=`radial-gradient(180px at ${r.x}px ${r.y}px, white, transparent)`,p=ue("group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5",l);return t.jsxs("div",{ref:c,className:p,children:[t.jsxs("div",{className:"pointer-events-none",children:[t.jsx("div",{className:"absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50",children:t.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5",children:[t.jsx("defs",{children:t.jsx("pattern",{id:":Rkq5jsqja:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"50%",y:"16",children:t.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),t.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:Rkq5jsqja:)"}),t.jsxs("svg",{x:"50%",y:"16",className:"overflow-visible",children:[t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"0",y:"56"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"72",y:"168"})]})]})}),t.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]",style:{maskImage:d}}),t.jsx("div",{className:"absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100",style:{maskImage:d},children:t.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10",children:[t.jsx("defs",{children:t.jsx("pattern",{id:":R5kq5jsqja:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"50%",y:"16",children:t.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),t.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:R5kq5jsqja:)"}),t.jsxs("svg",{x:"50%",y:"16",className:"overflow-visible",children:[t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"0",y:"56"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"72",y:"168"})]})]})})]}),t.jsx("div",{className:"absolute inset-0 rounded-2xl ring-1 ring-gray-200 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"}),t.jsxs("div",{className:"relative rounded-2xl px-4 pb-4 pt-16",children:[t.jsx("div",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400",children:t.jsxs("svg",{viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400",children:[t.jsx("path",{strokeWidth:"0",fillRule:"evenodd",clipRule:"evenodd",d:"M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"}),t.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",d:"M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"}),t.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",d:"M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"})]})}),t.jsx("h3",{className:"mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white",children:t.jsxs("a",{href:s,children:[t.jsx("span",{className:"absolute inset-0 rounded-2xl"}),o]})}),t.jsx("p",{className:"mt-1 text-sm text-zinc-600 dark:text-zinc-400",children:u})]})]})}function rr(n){const{className:e,primary:s,danger:a,sm:l,lg:r,success:i,...c}=n,h=ln(ue("rounded-md border border-transparent font-medium cursor-pointer transition","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":i,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r}));return t.jsx("button",{className:h,...c,children:n.children})}function Qb(){return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"min-w-[400px] mx-auto px-16 h-[300px] flex flex-col justify-center",children:[t.jsx("div",{className:"my-2",children:t.jsx("div",{className:"font-bold",children:"按钮类型"})}),t.jsxs("div",{className:"flex items-center justify-between my-4",children:[t.jsx(rr,{children:"Normal"}),t.jsx(rr,{danger:!0,children:"Danger"}),t.jsx(rr,{primary:!0,children:"Primary"}),t.jsx(rr,{success:!0,children:"Success"})]})]})})}const Fb=`import Button from './Button.jsx'

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
`,Ll=`import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

document.documentElement.style.fontSize = '14px'
// 本组件只是一个简单的 UI 组件，学习时无需多过关注

export default function Button(props) {
  const {className, primary, danger, sm, lg, signal, success, ghost, rect, disabled, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition relative text-gray-600'

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
    ['bg-transparent border-transparent hover:bg-gray-100']: ghost,

    ['bg-opacity-70']: disabled,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
    ['w-8 h-8 p-0']: rect,
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
`;function Jb(n,e){if(n==null)return{};var s={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(e.indexOf(a)>=0)continue;s[a]=n[a]}return s}function Wb(n,e){if(n==null)return{};var s,a,l=Jb(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)s=r[a],e.indexOf(s)>=0||{}.propertyIsEnumerable.call(n,s)&&(l[s]=n[s])}return l}function So(n,e){(e==null||e>n.length)&&(e=n.length);for(var s=0,a=Array(e);s<e;s++)a[s]=n[s];return a}function Kb(n){if(Array.isArray(n))return So(n)}function Pb(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ib(n,e){if(n){if(typeof n=="string")return So(n,e);var s={}.toString.call(n).slice(8,-1);return s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set"?Array.from(n):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?So(n,e):void 0}}function e5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n5(n){return Kb(n)||Pb(n)||Ib(n)||e5()}function bl(n){"@babel/helpers - typeof";return bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bl(n)}function t5(n,e){if(bl(n)!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var a=s.call(n,e||"default");if(bl(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function s5(n){var e=t5(n,"string");return bl(e)=="symbol"?e:e+""}function Tx(n,e,s){return(e=s5(e))in n?Object.defineProperty(n,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[e]=s,n}function ko(){return ko=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)({}).hasOwnProperty.call(s,a)&&(n[a]=s[a])}return n},ko.apply(null,arguments)}function Qm(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),s.push.apply(s,a)}return s}function Hs(n){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Qm(Object(s),!0).forEach(function(a){Tx(n,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):Qm(Object(s)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))})}return n}function a5(n){var e=n.length;if(e===0||e===1)return n;if(e===2)return[n[0],n[1],"".concat(n[0],".").concat(n[1]),"".concat(n[1],".").concat(n[0])];if(e===3)return[n[0],n[1],n[2],"".concat(n[0],".").concat(n[1]),"".concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[0]),"".concat(n[1],".").concat(n[2]),"".concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[1]),"".concat(n[0],".").concat(n[1],".").concat(n[2]),"".concat(n[0],".").concat(n[2],".").concat(n[1]),"".concat(n[1],".").concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[0],".").concat(n[1]),"".concat(n[2],".").concat(n[1],".").concat(n[0])];if(e>=4)return[n[0],n[1],n[2],n[3],"".concat(n[0],".").concat(n[1]),"".concat(n[0],".").concat(n[2]),"".concat(n[0],".").concat(n[3]),"".concat(n[1],".").concat(n[0]),"".concat(n[1],".").concat(n[2]),"".concat(n[1],".").concat(n[3]),"".concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[1]),"".concat(n[2],".").concat(n[3]),"".concat(n[3],".").concat(n[0]),"".concat(n[3],".").concat(n[1]),"".concat(n[3],".").concat(n[2]),"".concat(n[0],".").concat(n[1],".").concat(n[2]),"".concat(n[0],".").concat(n[1],".").concat(n[3]),"".concat(n[0],".").concat(n[2],".").concat(n[1]),"".concat(n[0],".").concat(n[2],".").concat(n[3]),"".concat(n[0],".").concat(n[3],".").concat(n[1]),"".concat(n[0],".").concat(n[3],".").concat(n[2]),"".concat(n[1],".").concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[0],".").concat(n[3]),"".concat(n[1],".").concat(n[2],".").concat(n[0]),"".concat(n[1],".").concat(n[2],".").concat(n[3]),"".concat(n[1],".").concat(n[3],".").concat(n[0]),"".concat(n[1],".").concat(n[3],".").concat(n[2]),"".concat(n[2],".").concat(n[0],".").concat(n[1]),"".concat(n[2],".").concat(n[0],".").concat(n[3]),"".concat(n[2],".").concat(n[1],".").concat(n[0]),"".concat(n[2],".").concat(n[1],".").concat(n[3]),"".concat(n[2],".").concat(n[3],".").concat(n[0]),"".concat(n[2],".").concat(n[3],".").concat(n[1]),"".concat(n[3],".").concat(n[0],".").concat(n[1]),"".concat(n[3],".").concat(n[0],".").concat(n[2]),"".concat(n[3],".").concat(n[1],".").concat(n[0]),"".concat(n[3],".").concat(n[1],".").concat(n[2]),"".concat(n[3],".").concat(n[2],".").concat(n[0]),"".concat(n[3],".").concat(n[2],".").concat(n[1]),"".concat(n[0],".").concat(n[1],".").concat(n[2],".").concat(n[3]),"".concat(n[0],".").concat(n[1],".").concat(n[3],".").concat(n[2]),"".concat(n[0],".").concat(n[2],".").concat(n[1],".").concat(n[3]),"".concat(n[0],".").concat(n[2],".").concat(n[3],".").concat(n[1]),"".concat(n[0],".").concat(n[3],".").concat(n[1],".").concat(n[2]),"".concat(n[0],".").concat(n[3],".").concat(n[2],".").concat(n[1]),"".concat(n[1],".").concat(n[0],".").concat(n[2],".").concat(n[3]),"".concat(n[1],".").concat(n[0],".").concat(n[3],".").concat(n[2]),"".concat(n[1],".").concat(n[2],".").concat(n[0],".").concat(n[3]),"".concat(n[1],".").concat(n[2],".").concat(n[3],".").concat(n[0]),"".concat(n[1],".").concat(n[3],".").concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[3],".").concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[0],".").concat(n[1],".").concat(n[3]),"".concat(n[2],".").concat(n[0],".").concat(n[3],".").concat(n[1]),"".concat(n[2],".").concat(n[1],".").concat(n[0],".").concat(n[3]),"".concat(n[2],".").concat(n[1],".").concat(n[3],".").concat(n[0]),"".concat(n[2],".").concat(n[3],".").concat(n[0],".").concat(n[1]),"".concat(n[2],".").concat(n[3],".").concat(n[1],".").concat(n[0]),"".concat(n[3],".").concat(n[0],".").concat(n[1],".").concat(n[2]),"".concat(n[3],".").concat(n[0],".").concat(n[2],".").concat(n[1]),"".concat(n[3],".").concat(n[1],".").concat(n[0],".").concat(n[2]),"".concat(n[3],".").concat(n[1],".").concat(n[2],".").concat(n[0]),"".concat(n[3],".").concat(n[2],".").concat(n[0],".").concat(n[1]),"".concat(n[3],".").concat(n[2],".").concat(n[1],".").concat(n[0])]}var jc={};function l5(n){if(n.length===0||n.length===1)return n;var e=n.join(".");return jc[e]||(jc[e]=a5(n)),jc[e]}function r5(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,a=n.filter(function(r){return r!=="token"}),l=l5(a);return l.reduce(function(r,i){return Hs(Hs({},r),s[i])},e)}function Fm(n){return n.join(" ")}function i5(n,e){var s=0;return function(a){return s+=1,a.map(function(l,r){return $x({node:l,stylesheet:n,useInlineStyles:e,key:"code-segment-".concat(s,"-").concat(r)})})}}function $x(n){var e=n.node,s=n.stylesheet,a=n.style,l=a===void 0?{}:a,r=n.useInlineStyles,i=n.key,c=e.properties,o=e.type,u=e.tagName,d=e.value;if(o==="text")return d;if(u){var h=i5(s,r),p;if(!r)p=Hs(Hs({},c),{},{className:Fm(c.className)});else{var v=Object.keys(s).reduce(function(x,m){return m.split(".").forEach(function(f){x.includes(f)||x.push(f)}),x},[]),w=c.className&&c.className.includes("token")?["token"]:[],N=c.className&&w.concat(c.className.filter(function(x){return!v.includes(x)}));p=Hs(Hs({},c),{},{className:Fm(N)||void 0,style:r5(c.className,Object.assign({},c.style,l),s)})}var k=h(e.children);return et.createElement(u,ko({key:i},p),k)}}const c5=function(n,e){var s=n.listLanguages();return s.indexOf(e)!==-1};var o5=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Jm(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),s.push.apply(s,a)}return s}function On(n){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Jm(Object(s),!0).forEach(function(a){Tx(n,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):Jm(Object(s)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))})}return n}var u5=/\n/g;function d5(n){return n.match(u5)}function m5(n){var e=n.lines,s=n.startingLineNumber,a=n.style;return e.map(function(l,r){var i=r+s;return et.createElement("span",{key:"line-".concat(r),className:"react-syntax-highlighter-line-number",style:typeof a=="function"?a(i):a},"".concat(i,`
`))})}function p5(n){var e=n.codeString,s=n.codeStyle,a=n.containerStyle,l=a===void 0?{float:"left",paddingRight:"10px"}:a,r=n.numberStyle,i=r===void 0?{}:r,c=n.startingLineNumber;return et.createElement("code",{style:Object.assign({},s,l)},m5({lines:e.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:c}))}function f5(n){return"".concat(n.toString().length,".25em")}function Lx(n,e){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(n),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:e},children:[{type:"text",value:n}]}}function Dx(n,e,s){var a={display:"inline-block",minWidth:f5(s),paddingRight:"1em",textAlign:"right",userSelect:"none"},l=typeof n=="function"?n(e):n,r=On(On({},a),l);return r}function wr(n){var e=n.children,s=n.lineNumber,a=n.lineNumberStyle,l=n.largestLineNumber,r=n.showInlineLineNumbers,i=n.lineProps,c=i===void 0?{}:i,o=n.className,u=o===void 0?[]:o,d=n.showLineNumbers,h=n.wrapLongLines,p=typeof c=="function"?c(s):c;if(p.className=u,s&&r){var v=Dx(a,s,l);e.unshift(Lx(s,v))}return h&d&&(p.style=On(On({},p.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:p,children:e}}function Bx(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],a=0;a<n.length;a++){var l=n[a];if(l.type==="text")s.push(wr({children:[l],className:n5(new Set(e))}));else if(l.children){var r=e.concat(l.properties.className);Bx(l.children,r).forEach(function(i){return s.push(i)})}}return s}function h5(n,e,s,a,l,r,i,c,o){var u,d=Bx(n.value),h=[],p=-1,v=0;function w(y,b){var S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return wr({children:y,lineNumber:b,lineNumberStyle:c,largestLineNumber:i,showInlineLineNumbers:l,lineProps:s,className:S,showLineNumbers:a,wrapLongLines:o})}function N(y,b){if(a&&b&&l){var S=Dx(c,b,i);y.unshift(Lx(b,S))}return y}function k(y,b){var S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return e||S.length>0?w(y,b,S):N(y,b)}for(var x=function(){var b=d[v],S=b.children[0].value,_=d5(S);if(_){var A=S.split(`
`);A.forEach(function($,U){var O=a&&h.length+r,fe={type:"text",value:"".concat($,`
`)};if(U===0){var re=d.slice(p+1,v).concat(wr({children:[fe],className:b.properties.className})),P=k(re,O);h.push(P)}else if(U===A.length-1){var R=d[v+1]&&d[v+1].children&&d[v+1].children[0],L={type:"text",value:"".concat($)};if(R){var T=wr({children:[L],className:b.properties.className});d.splice(v+1,0,T)}else{var D=[L],H=k(D,O,b.properties.className);h.push(H)}}else{var X=[fe],ee=k(X,O,b.properties.className);h.push(ee)}}),p=v}v++};v<d.length;)x();if(p!==d.length-1){var m=d.slice(p+1,d.length);if(m&&m.length){var f=a&&h.length+r,j=k(m,f);h.push(j)}}return e?h:(u=[]).concat.apply(u,h)}function x5(n){var e=n.rows,s=n.stylesheet,a=n.useInlineStyles;return e.map(function(l,r){return $x({node:l,stylesheet:s,useInlineStyles:a,key:"code-segement".concat(r)})})}function Ox(n){return n&&typeof n.highlightAuto<"u"}function g5(n){var e=n.astGenerator,s=n.language,a=n.code,l=n.defaultCodeValue;if(Ox(e)){var r=c5(e,s);return s==="text"?{value:l,language:"text"}:r?e.highlight(s,a):e.highlightAuto(a)}try{return s&&s!=="text"?{value:e.highlight(a,s)}:{value:l}}catch{return{value:l}}}function zx(n,e){return function(a){var l=a.language,r=a.children,i=a.style,c=i===void 0?e:i,o=a.customStyle,u=o===void 0?{}:o,d=a.codeTagProps,h=d===void 0?{className:l?"language-".concat(l):void 0,style:On(On({},c['code[class*="language-"]']),c['code[class*="language-'.concat(l,'"]')])}:d,p=a.useInlineStyles,v=p===void 0?!0:p,w=a.showLineNumbers,N=w===void 0?!1:w,k=a.showInlineLineNumbers,x=k===void 0?!0:k,m=a.startingLineNumber,f=m===void 0?1:m,j=a.lineNumberContainerStyle,y=a.lineNumberStyle,b=y===void 0?{}:y,S=a.wrapLines,_=a.wrapLongLines,A=_===void 0?!1:_,$=a.lineProps,U=$===void 0?{}:$,O=a.renderer,fe=a.PreTag,re=fe===void 0?"pre":fe,P=a.CodeTag,R=P===void 0?"code":P,L=a.code,T=L===void 0?(Array.isArray(r)?r[0]:r)||"":L,D=a.astGenerator,H=Wb(a,o5);D=D||n;var X=N?et.createElement(p5,{containerStyle:j,codeStyle:h.style||{},numberStyle:b,startingLineNumber:f,codeString:T}):null,ee=c.hljs||c['pre[class*="language-"]']||{backgroundColor:"#fff"},E=Ox(D)?"hljs":"prismjs",M=v?Object.assign({},H,{style:Object.assign({},ee,u)}):Object.assign({},H,{className:H.className?"".concat(E," ").concat(H.className):E,style:Object.assign({},u)});if(A?h.style=On(On({},h.style),{},{whiteSpace:"pre-wrap"}):h.style=On(On({},h.style),{},{whiteSpace:"pre"}),!D)return et.createElement(re,M,X,et.createElement(R,h,T));(S===void 0&&O||A)&&(S=!0),O=O||x5;var q=[{type:"text",value:T}],Q=g5({astGenerator:D,language:l,code:T,defaultCodeValue:q});Q.language===null&&(Q.value=q);var se=Q.value.length+f,rn=h5(Q,S,U,N,x,f,se,b,A);return et.createElement(re,M,et.createElement(R,h,!x&&X,O({rows:rn,stylesheet:c,useInlineStyles:v})))}}var gs={};function Bu(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(function(e){var s=n[e];typeof s=="object"&&!Object.isFrozen(s)&&Bu(s)}),n}var Ux=Bu,v5=Bu;Ux.default=v5;class Wm{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ws(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function At(n,...e){const s=Object.create(null);for(const a in n)s[a]=n[a];return e.forEach(function(a){for(const l in a)s[l]=a[l]}),s}const j5="</span>",Km=n=>!!n.kind;class b5{constructor(e,s){this.buffer="",this.classPrefix=s.classPrefix,e.walk(this)}addText(e){this.buffer+=Ws(e)}openNode(e){if(!Km(e))return;let s=e.kind;e.sublanguage||(s=`${this.classPrefix}${s}`),this.span(s)}closeNode(e){Km(e)&&(this.buffer+=j5)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class Ou{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const s={kind:e,children:[]};this.add(s),this.stack.push(s)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,s){return typeof s=="string"?e.addText(s):s.children&&(e.openNode(s),s.children.forEach(a=>this._walk(e,a)),e.closeNode(s)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(s=>typeof s=="string")?e.children=[e.children.join("")]:e.children.forEach(s=>{Ou._collapse(s)}))}}class y5 extends Ou{constructor(e){super(),this.options=e}addKeyword(e,s){e!==""&&(this.openNode(s),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,s){const a=e.root;a.kind=s,a.sublanguage=!0,this.add(a)}toHTML(){return new b5(this,this.options).value()}finalize(){return!0}}function N5(n){return new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function yl(n){return n?typeof n=="string"?n:n.source:null}function w5(...n){return n.map(s=>yl(s)).join("")}function S5(...n){return"("+n.map(s=>yl(s)).join("|")+")"}function k5(n){return new RegExp(n.toString()+"|").exec("").length-1}function _5(n,e){const s=n&&n.exec(e);return s&&s.index===0}const C5=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E5(n,e="|"){let s=0;return n.map(a=>{s+=1;const l=s;let r=yl(a),i="";for(;r.length>0;){const c=C5.exec(r);if(!c){i+=r;break}i+=r.substring(0,c.index),r=r.substring(c.index+c[0].length),c[0][0]==="\\"&&c[1]?i+="\\"+String(Number(c[1])+l):(i+=c[0],c[0]==="("&&s++)}return i}).map(a=>`(${a})`).join(e)}const A5=/\b\B/,Hx="[a-zA-Z]\\w*",zu="[a-zA-Z_]\\w*",Uu="\\b\\d+(\\.\\d+)?",qx="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Vx="\\b(0b[01]+)",R5="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",M5=(n={})=>{const e=/^#![ ]*\//;return n.binary&&(n.begin=w5(e,/.*\b/,n.binary,/\b.*/)),At({className:"meta",begin:e,end:/$/,relevance:0,"on:begin":(s,a)=>{s.index!==0&&a.ignoreMatch()}},n)},Nl={begin:"\\\\[\\s\\S]",relevance:0},T5={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[Nl]},$5={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[Nl]},Xx={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},_i=function(n,e,s={}){const a=At({className:"comment",begin:n,end:e,contains:[]},s);return a.contains.push(Xx),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},L5=_i("//","$"),D5=_i("/\\*","\\*/"),B5=_i("#","$"),O5={className:"number",begin:Uu,relevance:0},z5={className:"number",begin:qx,relevance:0},U5={className:"number",begin:Vx,relevance:0},H5={className:"number",begin:Uu+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},q5={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Nl,{begin:/\[/,end:/\]/,relevance:0,contains:[Nl]}]}]},V5={className:"title",begin:Hx,relevance:0},X5={className:"title",begin:zu,relevance:0},G5={begin:"\\.\\s*"+zu,relevance:0},Z5=function(n){return Object.assign(n,{"on:begin":(e,s)=>{s.data._beginMatch=e[1]},"on:end":(e,s)=>{s.data._beginMatch!==e[1]&&s.ignoreMatch()}})};var ir=Object.freeze({__proto__:null,MATCH_NOTHING_RE:A5,IDENT_RE:Hx,UNDERSCORE_IDENT_RE:zu,NUMBER_RE:Uu,C_NUMBER_RE:qx,BINARY_NUMBER_RE:Vx,RE_STARTERS_RE:R5,SHEBANG:M5,BACKSLASH_ESCAPE:Nl,APOS_STRING_MODE:T5,QUOTE_STRING_MODE:$5,PHRASAL_WORDS_MODE:Xx,COMMENT:_i,C_LINE_COMMENT_MODE:L5,C_BLOCK_COMMENT_MODE:D5,HASH_COMMENT_MODE:B5,NUMBER_MODE:O5,C_NUMBER_MODE:z5,BINARY_NUMBER_MODE:U5,CSS_NUMBER_MODE:H5,REGEXP_MODE:q5,TITLE_MODE:V5,UNDERSCORE_TITLE_MODE:X5,METHOD_GUARD:G5,END_SAME_AS_BEGIN:Z5});function Y5(n,e){n.input[n.index-1]==="."&&e.ignoreMatch()}function Q5(n,e){e&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=Y5,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function F5(n,e){Array.isArray(n.illegal)&&(n.illegal=S5(...n.illegal))}function J5(n,e){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function W5(n,e){n.relevance===void 0&&(n.relevance=1)}const K5=["of","and","for","in","not","or","if","then","parent","list","value"],P5="keyword";function Gx(n,e,s=P5){const a={};return typeof n=="string"?l(s,n.split(" ")):Array.isArray(n)?l(s,n):Object.keys(n).forEach(function(r){Object.assign(a,Gx(n[r],e,r))}),a;function l(r,i){e&&(i=i.map(c=>c.toLowerCase())),i.forEach(function(c){const o=c.split("|");a[o[0]]=[r,I5(o[0],o[1])]})}}function I5(n,e){return e?Number(e):e4(n)?0:1}function e4(n){return K5.includes(n.toLowerCase())}function n4(n,{plugins:e}){function s(c,o){return new RegExp(yl(c),"m"+(n.case_insensitive?"i":"")+(o?"g":""))}class a{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(o,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,o]),this.matchAt+=k5(o)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const o=this.regexes.map(u=>u[1]);this.matcherRe=s(E5(o),!0),this.lastIndex=0}exec(o){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(o);if(!u)return null;const d=u.findIndex((p,v)=>v>0&&p!==void 0),h=this.matchIndexes[d];return u.splice(0,d),Object.assign(u,h)}}class l{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(o){if(this.multiRegexes[o])return this.multiRegexes[o];const u=new a;return this.rules.slice(o).forEach(([d,h])=>u.addRule(d,h)),u.compile(),this.multiRegexes[o]=u,u}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(o,u){this.rules.push([o,u]),u.type==="begin"&&this.count++}exec(o){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let d=u.exec(o);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const h=this.getMatcher(0);h.lastIndex=this.lastIndex+1,d=h.exec(o)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function r(c){const o=new l;return c.contains.forEach(u=>o.addRule(u.begin,{rule:u,type:"begin"})),c.terminatorEnd&&o.addRule(c.terminatorEnd,{type:"end"}),c.illegal&&o.addRule(c.illegal,{type:"illegal"}),o}function i(c,o){const u=c;if(c.isCompiled)return u;[J5].forEach(h=>h(c,o)),n.compilerExtensions.forEach(h=>h(c,o)),c.__beforeBegin=null,[Q5,F5,W5].forEach(h=>h(c,o)),c.isCompiled=!0;let d=null;if(typeof c.keywords=="object"&&(d=c.keywords.$pattern,delete c.keywords.$pattern),c.keywords&&(c.keywords=Gx(c.keywords,n.case_insensitive)),c.lexemes&&d)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return d=d||c.lexemes||/\w+/,u.keywordPatternRe=s(d,!0),o&&(c.begin||(c.begin=/\B|\b/),u.beginRe=s(c.begin),c.endSameAsBegin&&(c.end=c.begin),!c.end&&!c.endsWithParent&&(c.end=/\B|\b/),c.end&&(u.endRe=s(c.end)),u.terminatorEnd=yl(c.end)||"",c.endsWithParent&&o.terminatorEnd&&(u.terminatorEnd+=(c.end?"|":"")+o.terminatorEnd)),c.illegal&&(u.illegalRe=s(c.illegal)),c.contains||(c.contains=[]),c.contains=[].concat(...c.contains.map(function(h){return t4(h==="self"?c:h)})),c.contains.forEach(function(h){i(h,u)}),c.starts&&i(c.starts,o),u.matcher=r(u),u}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=At(n.classNameAliases||{}),i(n)}function Zx(n){return n?n.endsWithParent||Zx(n.starts):!1}function t4(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return At(n,{variants:null},e)})),n.cachedVariants?n.cachedVariants:Zx(n)?At(n,{starts:n.starts?At(n.starts):null}):Object.isFrozen(n)?At(n):n}var s4="10.7.3";function a4(n){return!!(n||n==="")}function l4(n){const e={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!n.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,Ws(this.code);let a={};return this.autoDetect?(a=n.highlightAuto(this.code),this.detectedLanguage=a.language):(a=n.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),a.value},autoDetect(){return!this.language||a4(this.autodetect)},ignoreIllegals(){return!0}},render(a){return a("pre",{},[a("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:e,VuePlugin:{install(a){a.component("highlightjs",e)}}}}const r4={"after:highlightElement":({el:n,result:e,text:s})=>{const a=Pm(n);if(!a.length)return;const l=document.createElement("div");l.innerHTML=e.value,e.value=i4(a,Pm(l),s)}};function _o(n){return n.nodeName.toLowerCase()}function Pm(n){const e=[];return function s(a,l){for(let r=a.firstChild;r;r=r.nextSibling)r.nodeType===3?l+=r.nodeValue.length:r.nodeType===1&&(e.push({event:"start",offset:l,node:r}),l=s(r,l),_o(r).match(/br|hr|img|input/)||e.push({event:"stop",offset:l,node:r}));return l}(n,0),e}function i4(n,e,s){let a=0,l="";const r=[];function i(){return!n.length||!e.length?n.length?n:e:n[0].offset!==e[0].offset?n[0].offset<e[0].offset?n:e:e[0].event==="start"?n:e}function c(d){function h(p){return" "+p.nodeName+'="'+Ws(p.value)+'"'}l+="<"+_o(d)+[].map.call(d.attributes,h).join("")+">"}function o(d){l+="</"+_o(d)+">"}function u(d){(d.event==="start"?c:o)(d.node)}for(;n.length||e.length;){let d=i();if(l+=Ws(s.substring(a,d[0].offset)),a=d[0].offset,d===n){r.reverse().forEach(o);do u(d.splice(0,1)[0]),d=i();while(d===n&&d.length&&d[0].offset===a);r.reverse().forEach(c)}else d[0].event==="start"?r.push(d[0].node):r.pop(),u(d.splice(0,1)[0])}return l+Ws(s.substr(a))}const Im={},bc=n=>{console.error(n)},ep=(n,...e)=>{console.log(`WARN: ${n}`,...e)},pn=(n,e)=>{Im[`${n}/${e}`]||(console.log(`Deprecated as of ${n}. ${e}`),Im[`${n}/${e}`]=!0)},yc=Ws,np=At,tp=Symbol("nomatch"),c4=function(n){const e=Object.create(null),s=Object.create(null),a=[];let l=!0;const r=/(^(<[^>]+>|\t|)+|\n)/gm,i="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let o={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:y5};function u(E){return o.noHighlightRe.test(E)}function d(E){let M=E.className+" ";M+=E.parentNode?E.parentNode.className:"";const q=o.languageDetectRe.exec(M);if(q){const Q=P(q[1]);return Q||(ep(i.replace("{}",q[1])),ep("Falling back to no-highlight mode for this block.",E)),Q?q[1]:"no-highlight"}return M.split(/\s+/).find(Q=>u(Q)||P(Q))}function h(E,M,q,Q){let se="",rn="";typeof M=="object"?(se=E,q=M.ignoreIllegals,rn=M.language,Q=void 0):(pn("10.7.0","highlight(lang, code, ...args) has been deprecated."),pn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),rn=E,se=M);const cn={code:se,language:rn};H("before:highlight",cn);const Ie=cn.result?cn.result:p(cn.language,cn.code,q,Q);return Ie.code=cn.code,H("after:highlight",Ie),Ie}function p(E,M,q,Q){function se(B,V){const W=js.case_insensitive?V[0].toLowerCase():V[0];return Object.prototype.hasOwnProperty.call(B.keywords,W)&&B.keywords[W]}function rn(){if(!J.keywords){Ye.addText(Ce);return}let B=0;J.keywordPatternRe.lastIndex=0;let V=J.keywordPatternRe.exec(Ce),W="";for(;V;){W+=Ce.substring(B,V.index);const ie=se(J,V);if(ie){const[en,Hl]=ie;if(Ye.addText(W),W="",Ul+=Hl,en.startsWith("_"))W+=V[0];else{const ng=js.classNameAliases[en]||en;Ye.addKeyword(V[0],ng)}}else W+=V[0];B=J.keywordPatternRe.lastIndex,V=J.keywordPatternRe.exec(Ce)}W+=Ce.substr(B),Ye.addText(W)}function cn(){if(Ce==="")return;let B=null;if(typeof J.subLanguage=="string"){if(!e[J.subLanguage]){Ye.addText(Ce);return}B=p(J.subLanguage,Ce,!0,gd[J.subLanguage]),gd[J.subLanguage]=B.top}else B=w(Ce,J.subLanguage.length?J.subLanguage:null);J.relevance>0&&(Ul+=B.relevance),Ye.addSublanguage(B.emitter,B.language)}function Ie(){J.subLanguage!=null?cn():rn(),Ce=""}function Ze(B){return B.className&&Ye.openNode(js.classNameAliases[B.className]||B.className),J=Object.create(B,{parent:{value:J}}),J}function Dn(B,V,W){let ie=_5(B.endRe,W);if(ie){if(B["on:end"]){const en=new Wm(B);B["on:end"](V,en),en.isMatchIgnored&&(ie=!1)}if(ie){for(;B.endsParent&&B.parent;)B=B.parent;return B}}if(B.endsWithParent)return Dn(B.parent,V,W)}function ba(B){return J.matcher.regexIndex===0?(Ce+=B[0],1):($i=!0,0)}function K1(B){const V=B[0],W=B.rule,ie=new Wm(W),en=[W.__beforeBegin,W["on:begin"]];for(const Hl of en)if(Hl&&(Hl(B,ie),ie.isMatchIgnored))return ba(V);return W&&W.endSameAsBegin&&(W.endRe=N5(V)),W.skip?Ce+=V:(W.excludeBegin&&(Ce+=V),Ie(),!W.returnBegin&&!W.excludeBegin&&(Ce=V)),Ze(W),W.returnBegin?0:V.length}function P1(B){const V=B[0],W=M.substr(B.index),ie=Dn(J,B,W);if(!ie)return tp;const en=J;en.skip?Ce+=V:(en.returnEnd||en.excludeEnd||(Ce+=V),Ie(),en.excludeEnd&&(Ce=V));do J.className&&Ye.closeNode(),!J.skip&&!J.subLanguage&&(Ul+=J.relevance),J=J.parent;while(J!==ie.parent);return ie.starts&&(ie.endSameAsBegin&&(ie.starts.endRe=ie.endRe),Ze(ie.starts)),en.returnEnd?0:V.length}function I1(){const B=[];for(let V=J;V!==js;V=V.parent)V.className&&B.unshift(V.className);B.forEach(V=>Ye.openNode(V))}let zl={};function xd(B,V){const W=V&&V[0];if(Ce+=B,W==null)return Ie(),0;if(zl.type==="begin"&&V.type==="end"&&zl.index===V.index&&W===""){if(Ce+=M.slice(V.index,V.index+1),!l){const ie=new Error("0 width match regex");throw ie.languageName=E,ie.badRule=zl.rule,ie}return 1}if(zl=V,V.type==="begin")return K1(V);if(V.type==="illegal"&&!q){const ie=new Error('Illegal lexeme "'+W+'" for mode "'+(J.className||"<unnamed>")+'"');throw ie.mode=J,ie}else if(V.type==="end"){const ie=P1(V);if(ie!==tp)return ie}if(V.type==="illegal"&&W==="")return 1;if(Ti>1e5&&Ti>V.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Ce+=W,W.length}const js=P(E);if(!js)throw bc(i.replace("{}",E)),new Error('Unknown language: "'+E+'"');const eg=n4(js,{plugins:a});let Mi="",J=Q||eg;const gd={},Ye=new o.__emitter(o);I1();let Ce="",Ul=0,bs=0,Ti=0,$i=!1;try{for(J.matcher.considerAll();;){Ti++,$i?$i=!1:J.matcher.considerAll(),J.matcher.lastIndex=bs;const B=J.matcher.exec(M);if(!B)break;const V=M.substring(bs,B.index),W=xd(V,B);bs=B.index+W}return xd(M.substr(bs)),Ye.closeAllNodes(),Ye.finalize(),Mi=Ye.toHTML(),{relevance:Math.floor(Ul),value:Mi,language:E,illegal:!1,emitter:Ye,top:J}}catch(B){if(B.message&&B.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:B.message,context:M.slice(bs-100,bs+100),mode:B.mode},sofar:Mi,relevance:0,value:yc(M),emitter:Ye};if(l)return{illegal:!1,relevance:0,value:yc(M),emitter:Ye,language:E,top:J,errorRaised:B};throw B}}function v(E){const M={relevance:0,emitter:new o.__emitter(o),value:yc(E),illegal:!1,top:c};return M.emitter.addText(E),M}function w(E,M){M=M||o.languages||Object.keys(e);const q=v(E),Q=M.filter(P).filter(L).map(Ze=>p(Ze,E,!1));Q.unshift(q);const se=Q.sort((Ze,Dn)=>{if(Ze.relevance!==Dn.relevance)return Dn.relevance-Ze.relevance;if(Ze.language&&Dn.language){if(P(Ze.language).supersetOf===Dn.language)return 1;if(P(Dn.language).supersetOf===Ze.language)return-1}return 0}),[rn,cn]=se,Ie=rn;return Ie.second_best=cn,Ie}function N(E){return o.tabReplace||o.useBR?E.replace(r,M=>M===`
`?o.useBR?"<br>":M:o.tabReplace?M.replace(/\t/g,o.tabReplace):M):E}function k(E,M,q){const Q=M?s[M]:q;E.classList.add("hljs"),Q&&E.classList.add(Q)}const x={"before:highlightElement":({el:E})=>{o.useBR&&(E.innerHTML=E.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,`
`))},"after:highlightElement":({result:E})=>{o.useBR&&(E.value=E.value.replace(/\n/g,"<br>"))}},m=/^(<[^>]+>|\t)+/gm,f={"after:highlightElement":({result:E})=>{o.tabReplace&&(E.value=E.value.replace(m,M=>M.replace(/\t/g,o.tabReplace)))}};function j(E){let M=null;const q=d(E);if(u(q))return;H("before:highlightElement",{el:E,language:q}),M=E;const Q=M.textContent,se=q?h(Q,{language:q,ignoreIllegals:!0}):w(Q);H("after:highlightElement",{el:E,result:se,text:Q}),E.innerHTML=se.value,k(E,q,se.language),E.result={language:se.language,re:se.relevance,relavance:se.relevance},se.second_best&&(E.second_best={language:se.second_best.language,re:se.second_best.relevance,relavance:se.second_best.relevance})}function y(E){E.useBR&&(pn("10.3.0","'useBR' will be removed entirely in v11.0"),pn("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),o=np(o,E)}const b=()=>{if(b.called)return;b.called=!0,pn("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(j)};function S(){pn("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),_=!0}let _=!1;function A(){if(document.readyState==="loading"){_=!0;return}document.querySelectorAll("pre code").forEach(j)}function $(){_&&A()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",$,!1);function U(E,M){let q=null;try{q=M(n)}catch(Q){if(bc("Language definition for '{}' could not be registered.".replace("{}",E)),l)bc(Q);else throw Q;q=c}q.name||(q.name=E),e[E]=q,q.rawDefinition=M.bind(null,n),q.aliases&&R(q.aliases,{languageName:E})}function O(E){delete e[E];for(const M of Object.keys(s))s[M]===E&&delete s[M]}function fe(){return Object.keys(e)}function re(E){pn("10.4.0","requireLanguage will be removed entirely in v11."),pn("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const M=P(E);if(M)return M;throw new Error("The '{}' language is required, but not loaded.".replace("{}",E))}function P(E){return E=(E||"").toLowerCase(),e[E]||e[s[E]]}function R(E,{languageName:M}){typeof E=="string"&&(E=[E]),E.forEach(q=>{s[q.toLowerCase()]=M})}function L(E){const M=P(E);return M&&!M.disableAutodetect}function T(E){E["before:highlightBlock"]&&!E["before:highlightElement"]&&(E["before:highlightElement"]=M=>{E["before:highlightBlock"](Object.assign({block:M.el},M))}),E["after:highlightBlock"]&&!E["after:highlightElement"]&&(E["after:highlightElement"]=M=>{E["after:highlightBlock"](Object.assign({block:M.el},M))})}function D(E){T(E),a.push(E)}function H(E,M){const q=E;a.forEach(function(Q){Q[q]&&Q[q](M)})}function X(E){return pn("10.2.0","fixMarkup will be removed entirely in v11.0"),pn("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),N(E)}function ee(E){return pn("10.7.0","highlightBlock will be removed entirely in v12.0"),pn("10.7.0","Please use highlightElement now."),j(E)}Object.assign(n,{highlight:h,highlightAuto:w,highlightAll:A,fixMarkup:X,highlightElement:j,highlightBlock:ee,configure:y,initHighlighting:b,initHighlightingOnLoad:S,registerLanguage:U,unregisterLanguage:O,listLanguages:fe,getLanguage:P,registerAliases:R,requireLanguage:re,autoDetection:L,inherit:np,addPlugin:D,vuePlugin:l4(n).VuePlugin}),n.debugMode=function(){l=!1},n.safeMode=function(){l=!0},n.versionString=s4;for(const E in ir)typeof ir[E]=="object"&&Ux(ir[E]);return Object.assign(n,ir),n.addPlugin(x),n.addPlugin(r4),n.addPlugin(f),n};var o4=c4({}),u4=o4,Yx={exports:{}};(function(n){(function(){var e;e=n.exports=l,e.format=l,e.vsprintf=a,typeof console<"u"&&typeof console.log=="function"&&(e.printf=s);function s(){console.log(l.apply(null,arguments))}function a(r,i){return l.apply(null,[r].concat(i))}function l(r){for(var i=1,c=[].slice.call(arguments),o=0,u=r.length,d="",h,p=!1,v,w,N=!1,k,x=function(){return c[i++]},m=function(){for(var f="";/\d/.test(r[o]);)f+=r[o++],h=r[o];return f.length>0?parseInt(f):null};o<u;++o)if(h=r[o],p)switch(p=!1,h=="."?(N=!1,h=r[++o]):h=="0"&&r[o+1]=="."?(N=!0,o+=2,h=r[o]):N=!0,k=m(),h){case"b":d+=parseInt(x(),10).toString(2);break;case"c":v=x(),typeof v=="string"||v instanceof String?d+=v:d+=String.fromCharCode(parseInt(v,10));break;case"d":d+=parseInt(x(),10);break;case"f":w=String(parseFloat(x()).toFixed(k||6)),d+=N?w:w.replace(/^0/,"");break;case"j":d+=JSON.stringify(x());break;case"o":d+="0"+parseInt(x(),10).toString(8);break;case"s":d+=x();break;case"x":d+="0x"+parseInt(x(),10).toString(16);break;case"X":d+="0x"+parseInt(x(),10).toString(16).toUpperCase();break;default:d+=h;break}else h==="%"?p=!0:d+=h;return d}})()})(Yx);var d4=Yx.exports,m4=d4,Vt=Xt(Error),p4=Vt;Vt.eval=Xt(EvalError);Vt.range=Xt(RangeError);Vt.reference=Xt(ReferenceError);Vt.syntax=Xt(SyntaxError);Vt.type=Xt(TypeError);Vt.uri=Xt(URIError);Vt.create=Xt;function Xt(n){return e.displayName=n.displayName||n.name,e;function e(s){return s&&(s=m4.apply(null,arguments)),new n(s)}}var Un=u4,Sr=p4;gs.highlight=Qx;gs.highlightAuto=h4;gs.registerLanguage=x4;gs.listLanguages=g4;gs.registerAlias=v4;ft.prototype.addText=y4;ft.prototype.addKeyword=j4;ft.prototype.addSublanguage=b4;ft.prototype.openNode=N4;ft.prototype.closeNode=w4;ft.prototype.closeAllNodes=Fx;ft.prototype.finalize=Fx;ft.prototype.toHTML=S4;var f4="hljs-";function Qx(n,e,s){var a=Un.configure({}),l=s||{},r=l.prefix,i;if(typeof n!="string")throw Sr("Expected `string` for name, got `%s`",n);if(!Un.getLanguage(n))throw Sr("Unknown language: `%s` is not registered",n);if(typeof e!="string")throw Sr("Expected `string` for value, got `%s`",e);if(r==null&&(r=f4),Un.configure({__emitter:ft,classPrefix:r}),i=Un.highlight(e,{language:n,ignoreIllegals:!0}),Un.configure(a||{}),i.errorRaised)throw i.errorRaised;return{relevance:i.relevance,language:i.language,value:i.emitter.rootNode.children}}function h4(n,e){var s=e||{},a=s.subset||Un.listLanguages();s.prefix;var l=a.length,r=-1,i,c,o,u;if(typeof n!="string")throw Sr("Expected `string` for value, got `%s`",n);for(c={relevance:0,language:null,value:[]},i={relevance:0,language:null,value:[]};++r<l;)u=a[r],Un.getLanguage(u)&&(o=Qx(u,n,e),o.language=u,o.relevance>c.relevance&&(c=o),o.relevance>i.relevance&&(c=i,i=o));return c.language&&(i.secondBest=c),i}function x4(n,e){Un.registerLanguage(n,e)}function g4(){return Un.listLanguages()}function v4(n,e){var s=n,a;e&&(s={},s[n]=e);for(a in s)Un.registerAliases(s[a],{languageName:a})}function ft(n){this.options=n,this.rootNode={children:[]},this.stack=[this.rootNode]}function j4(n,e){this.openNode(e),this.addText(n),this.closeNode()}function b4(n,e){var s=this.stack,a=s[s.length-1],l=n.rootNode.children,r=e?{type:"element",tagName:"span",properties:{className:[e]},children:l}:l;a.children=a.children.concat(r)}function y4(n){var e=this.stack,s,a;n!==""&&(s=e[e.length-1],a=s.children[s.children.length-1],a&&a.type==="text"?a.value+=n:s.children.push({type:"text",value:n}))}function N4(n){var e=this.stack,s=this.options.classPrefix+n,a=e[e.length-1],l={type:"element",tagName:"span",properties:{className:[s]},children:[]};a.children.push(l),e.push(l)}function w4(){this.stack.pop()}function S4(){return""}function Fx(){}var Nc,sp;function k4(){if(sp)return Nc;sp=1;const n="[A-Za-z$_][0-9A-Za-z$_]*",e=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],s=["true","false","null","undefined","NaN","Infinity"],a=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],l=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],i=["arguments","this","super","console","window","document","localStorage","module","global"],c=[].concat(r,i,a,l);function o(p){return p?typeof p=="string"?p:p.source:null}function u(p){return d("(?=",p,")")}function d(...p){return p.map(w=>o(w)).join("")}function h(p){const v=(R,{after:L})=>{const T="</"+R[0].slice(1);return R.input.indexOf(T,L)!==-1},w=n,N={begin:"<>",end:"</>"},k={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(R,L)=>{const T=R[0].length+R.index,D=R.input[T];if(D==="<"){L.ignoreMatch();return}D===">"&&(v(R,{after:T})||L.ignoreMatch())}},x={$pattern:n,keyword:e,literal:s,built_in:c},m="[0-9](_?[0-9])*",f=`\\.(${m})`,j="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",y={className:"number",variants:[{begin:`(\\b(${j})((${f})|\\.)?|(${f}))[eE][+-]?(${m})\\b`},{begin:`\\b(${j})\\b((${f})\\b|\\.)?|(${f})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},b={className:"subst",begin:"\\$\\{",end:"\\}",keywords:x,contains:[]},S={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[p.BACKSLASH_ESCAPE,b],subLanguage:"xml"}},_={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[p.BACKSLASH_ESCAPE,b],subLanguage:"css"}},A={className:"string",begin:"`",end:"`",contains:[p.BACKSLASH_ESCAPE,b]},U={className:"comment",variants:[p.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:w+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),p.C_BLOCK_COMMENT_MODE,p.C_LINE_COMMENT_MODE]},O=[p.APOS_STRING_MODE,p.QUOTE_STRING_MODE,S,_,A,y,p.REGEXP_MODE];b.contains=O.concat({begin:/\{/,end:/\}/,keywords:x,contains:["self"].concat(O)});const fe=[].concat(U,b.contains),re=fe.concat([{begin:/\(/,end:/\)/,keywords:x,contains:["self"].concat(fe)}]),P={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:x,contains:re};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:x,exports:{PARAMS_CONTAINS:re},illegal:/#(?![$_A-z])/,contains:[p.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},p.APOS_STRING_MODE,p.QUOTE_STRING_MODE,S,_,A,U,y,{begin:d(/[{,\n]\s*/,u(d(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,w+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:w+u("\\s*:"),relevance:0}]},{begin:"("+p.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[U,p.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+p.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:p.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:x,contains:re}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:N.begin,end:N.end},{begin:k.begin,"on:begin":k.isTrulyOpeningTag,end:k.end}],subLanguage:"xml",contains:[{begin:k.begin,end:k.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:x,contains:["self",p.inherit(p.TITLE_MODE,{begin:w}),P],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:p.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[P,p.inherit(p.TITLE_MODE,{begin:w})]},{variants:[{begin:"\\."+w},{begin:"\\$"+w}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},p.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[p.inherit(p.TITLE_MODE,{begin:w}),"self",P]},{begin:"(get|set)\\s+(?="+w+"\\()",end:/\{/,keywords:"get set",contains:[p.inherit(p.TITLE_MODE,{begin:w}),{begin:/\(\)/},P]},{begin:/\$[(.]/}]}}return Nc=h,Nc}const _4="modulepreload",C4=function(n){return"/"+n},ap={},E4=function(e,s,a){let l=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));l=Promise.all(s.map(c=>{if(c=C4(c),c in ap)return;ap[c]=!0;const o=c.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":_4,o||(d.as="script",d.crossOrigin=""),d.href=c,i&&d.setAttribute("nonce",i),document.head.appendChild(d),o)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}return l.then(()=>e()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};var Dl=zx(gs,{});Dl.registerLanguage=gs.registerLanguage;var A4=M4,R4=Object.prototype.hasOwnProperty;function M4(){for(var n={},e=0;e<arguments.length;e++){var s=arguments[e];for(var a in s)R4.call(s,a)&&(n[a]=s[a])}return n}var Jx=Wx,Hu=Wx.prototype;Hu.space=null;Hu.normal={};Hu.property={};function Wx(n,e,s){this.property=n,this.normal=e,s&&(this.space=s)}var lp=A4,T4=Jx,$4=L4;function L4(n){for(var e=n.length,s=[],a=[],l=-1,r,i;++l<e;)r=n[l],s.push(r.property),a.push(r.normal),i=r.space;return new T4(lp.apply(null,s),lp.apply(null,a),i)}var qu=D4;function D4(n){return n.toLowerCase()}var Kx=Px,kn=Px.prototype;kn.space=null;kn.attribute=null;kn.property=null;kn.boolean=!1;kn.booleanish=!1;kn.overloadedBoolean=!1;kn.number=!1;kn.commaSeparated=!1;kn.spaceSeparated=!1;kn.commaOrSpaceSeparated=!1;kn.mustUseProperty=!1;kn.defined=!1;function Px(n,e){this.property=n,this.attribute=e}var Fn={},B4=0;Fn.boolean=vs();Fn.booleanish=vs();Fn.overloadedBoolean=vs();Fn.number=vs();Fn.spaceSeparated=vs();Fn.commaSeparated=vs();Fn.commaOrSpaceSeparated=vs();function vs(){return Math.pow(2,++B4)}var Ix=Kx,rp=Fn,e1=Vu;Vu.prototype=new Ix;Vu.prototype.defined=!0;var n1=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],O4=n1.length;function Vu(n,e,s,a){var l=-1,r;for(ip(this,"space",a),Ix.call(this,n,e);++l<O4;)r=n1[l],ip(this,r,(s&rp[r])===rp[r])}function ip(n,e,s){s&&(n[e]=s)}var cp=qu,z4=Jx,U4=e1,Bl=H4;function H4(n){var e=n.space,s=n.mustUseProperty||[],a=n.attributes||{},l=n.properties,r=n.transform,i={},c={},o,u;for(o in l)u=new U4(o,r(a,o),l[o],e),s.indexOf(o)!==-1&&(u.mustUseProperty=!0),i[o]=u,c[cp(o)]=o,c[cp(u.attribute)]=o;return new z4(i,c,e)}var q4=Bl,V4=q4({space:"xlink",transform:X4,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function X4(n,e){return"xlink:"+e.slice(5).toLowerCase()}var G4=Bl,Z4=G4({space:"xml",transform:Y4,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Y4(n,e){return"xml:"+e.slice(3).toLowerCase()}var Q4=F4;function F4(n,e){return e in n?n[e]:e}var J4=Q4,t1=W4;function W4(n,e){return J4(n,e.toLowerCase())}var K4=Bl,P4=t1,I4=K4({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:P4,properties:{xmlns:null,xmlnsXLink:null}}),Xu=Fn,ey=Bl,nn=Xu.booleanish,fn=Xu.number,Qt=Xu.spaceSeparated,ny=ey({transform:ty,properties:{ariaActiveDescendant:null,ariaAtomic:nn,ariaAutoComplete:null,ariaBusy:nn,ariaChecked:nn,ariaColCount:fn,ariaColIndex:fn,ariaColSpan:fn,ariaControls:Qt,ariaCurrent:null,ariaDescribedBy:Qt,ariaDetails:null,ariaDisabled:nn,ariaDropEffect:Qt,ariaErrorMessage:null,ariaExpanded:nn,ariaFlowTo:Qt,ariaGrabbed:nn,ariaHasPopup:null,ariaHidden:nn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Qt,ariaLevel:fn,ariaLive:null,ariaModal:nn,ariaMultiLine:nn,ariaMultiSelectable:nn,ariaOrientation:null,ariaOwns:Qt,ariaPlaceholder:null,ariaPosInSet:fn,ariaPressed:nn,ariaReadOnly:nn,ariaRelevant:null,ariaRequired:nn,ariaRoleDescription:Qt,ariaRowCount:fn,ariaRowIndex:fn,ariaRowSpan:fn,ariaSelected:nn,ariaSetSize:fn,ariaSort:null,ariaValueMax:fn,ariaValueMin:fn,ariaValueNow:fn,ariaValueText:null,role:null}});function ty(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}var ja=Fn,sy=Bl,ay=t1,F=ja.boolean,ly=ja.overloadedBoolean,Ma=ja.booleanish,xe=ja.number,Qe=ja.spaceSeparated,cr=ja.commaSeparated,ry=sy({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:ay,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:cr,acceptCharset:Qe,accessKey:Qe,action:null,allow:null,allowFullScreen:F,allowPaymentRequest:F,allowUserMedia:F,alt:null,as:null,async:F,autoCapitalize:null,autoComplete:Qe,autoFocus:F,autoPlay:F,capture:F,charSet:null,checked:F,cite:null,className:Qe,cols:xe,colSpan:null,content:null,contentEditable:Ma,controls:F,controlsList:Qe,coords:xe|cr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:F,defer:F,dir:null,dirName:null,disabled:F,download:ly,draggable:Ma,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:F,formTarget:null,headers:Qe,height:xe,hidden:F,high:xe,href:null,hrefLang:null,htmlFor:Qe,httpEquiv:Qe,id:null,imageSizes:null,imageSrcSet:cr,inputMode:null,integrity:null,is:null,isMap:F,itemId:null,itemProp:Qe,itemRef:Qe,itemScope:F,itemType:Qe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:F,low:xe,manifest:null,max:null,maxLength:xe,media:null,method:null,min:null,minLength:xe,multiple:F,muted:F,name:null,nonce:null,noModule:F,noValidate:F,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:F,optimum:xe,pattern:null,ping:Qe,placeholder:null,playsInline:F,poster:null,preload:null,readOnly:F,referrerPolicy:null,rel:Qe,required:F,reversed:F,rows:xe,rowSpan:xe,sandbox:Qe,scope:null,scoped:F,seamless:F,selected:F,shape:null,size:xe,sizes:null,slot:null,span:xe,spellCheck:Ma,src:null,srcDoc:null,srcLang:null,srcSet:cr,start:xe,step:null,style:null,tabIndex:xe,target:null,title:null,translate:null,type:null,typeMustMatch:F,useMap:null,value:Ma,width:xe,wrap:null,align:null,aLink:null,archive:Qe,axis:null,background:null,bgColor:null,border:xe,borderColor:null,bottomMargin:xe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:F,declare:F,event:null,face:null,frame:null,frameBorder:null,hSpace:xe,leftMargin:xe,link:null,longDesc:null,lowSrc:null,marginHeight:xe,marginWidth:xe,noResize:F,noHref:F,noShade:F,noWrap:F,object:null,profile:null,prompt:null,rev:null,rightMargin:xe,rules:null,scheme:null,scrolling:Ma,standby:null,summary:null,text:null,topMargin:xe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:xe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:F,disableRemotePlayback:F,prefix:null,property:null,results:xe,security:null,unselectable:null}}),iy=$4,cy=V4,oy=Z4,uy=I4,dy=ny,my=ry,py=iy([oy,cy,uy,dy,my]),fy=qu,hy=e1,xy=Kx,Gu="data",gy=by,vy=/^data[-\w.:]+$/i,s1=/-[a-z]/g,jy=/[A-Z]/g;function by(n,e){var s=fy(e),a=e,l=xy;return s in n.normal?n.property[n.normal[s]]:(s.length>4&&s.slice(0,4)===Gu&&vy.test(e)&&(e.charAt(4)==="-"?a=yy(e):e=Ny(e),l=hy),new l(a,e))}function yy(n){var e=n.slice(5).replace(s1,Sy);return Gu+e.charAt(0).toUpperCase()+e.slice(1)}function Ny(n){var e=n.slice(4);return s1.test(e)?n:(e=e.replace(jy,wy),e.charAt(0)!=="-"&&(e="-"+e),Gu+e)}function wy(n){return"-"+n.toLowerCase()}function Sy(n){return n.charAt(1).toUpperCase()}var ky=_y,op=/[#.]/g;function _y(n,e){for(var s=n||"",a=e||"div",l={},r=0,i,c,o;r<s.length;)op.lastIndex=r,o=op.exec(s),i=s.slice(r,o?o.index:s.length),i&&(c?c==="#"?l.id=i:l.className?l.className.push(i):l.className=[i]:a=i,r+=i.length),o&&(c=o[0],r++);return{type:"element",tagName:a,properties:l,children:[]}}var Zu={};Zu.parse=Ay;Zu.stringify=Ry;var up="",Cy=" ",Ey=/[ \t\n\r\f]+/g;function Ay(n){var e=String(n||up).trim();return e===up?[]:e.split(Ey)}function Ry(n){return n.join(Cy).trim()}var Yu={};Yu.parse=My;Yu.stringify=Ty;var Co=",",dp=" ",Ua="";function My(n){for(var e=[],s=String(n||Ua),a=s.indexOf(Co),l=0,r=!1,i;!r;)a===-1&&(a=s.length,r=!0),i=s.slice(l,a).trim(),(i||!r)&&e.push(i),l=a+1,a=s.indexOf(Co,l);return e}function Ty(n,e){var s=e||{},a=s.padLeft===!1?Ua:dp,l=s.padRight?dp:Ua;return n[n.length-1]===Ua&&(n=n.concat(Ua)),n.join(l+Co+a).trim()}var $y=gy,mp=qu,Ly=ky,pp=Zu.parse,fp=Yu.parse,Dy=Oy,By={}.hasOwnProperty;function Oy(n,e,s){var a=s?Vy(s):null;return l;function l(i,c){var o=Ly(i,e),u=Array.prototype.slice.call(arguments,2),d=o.tagName.toLowerCase(),h;if(o.tagName=a&&By.call(a,d)?a[d]:d,c&&zy(c,o)&&(u.unshift(c),c=null),c)for(h in c)r(o.properties,h,c[h]);return a1(o.children,u),o.tagName==="template"&&(o.content={type:"root",children:o.children},o.children=[]),o}function r(i,c,o){var u,d,h;o==null||o!==o||(u=$y(n,c),d=u.property,h=o,typeof h=="string"&&(u.spaceSeparated?h=pp(h):u.commaSeparated?h=fp(h):u.commaOrSpaceSeparated&&(h=pp(fp(h).join(" ")))),d==="style"&&typeof o!="string"&&(h=qy(h)),d==="className"&&i.className&&(h=i.className.concat(h)),i[d]=Hy(u,d,h))}}function zy(n,e){return typeof n=="string"||"length"in n||Uy(e.tagName,n)}function Uy(n,e){var s=e.type;return n==="input"||!s||typeof s!="string"?!1:typeof e.children=="object"&&"length"in e.children?!0:(s=s.toLowerCase(),n==="button"?s!=="menu"&&s!=="submit"&&s!=="reset"&&s!=="button":"value"in e)}function a1(n,e){var s,a;if(typeof e=="string"||typeof e=="number"){n.push({type:"text",value:String(e)});return}if(typeof e=="object"&&"length"in e){for(s=-1,a=e.length;++s<a;)a1(n,e[s]);return}if(typeof e!="object"||!("type"in e))throw new Error("Expected node, nodes, or string, got `"+e+"`");n.push(e)}function Hy(n,e,s){var a,l,r;if(typeof s!="object"||!("length"in s))return hp(n,e,s);for(l=s.length,a=-1,r=[];++a<l;)r[a]=hp(n,e,s[a]);return r}function hp(n,e,s){var a=s;return n.number||n.positiveNumber?!isNaN(a)&&a!==""&&(a=Number(a)):(n.boolean||n.overloadedBoolean)&&typeof a=="string"&&(a===""||mp(s)===mp(e))&&(a=!0),a}function qy(n){var e=[],s;for(s in n)e.push([s,n[s]].join(": "));return e.join("; ")}function Vy(n){for(var e=n.length,s=-1,a={},l;++s<e;)l=n[s],a[l.toLowerCase()]=l;return a}var Xy=py,Gy=Dy,l1=Gy(Xy,"div");l1.displayName="html";var Zy=l1,Yy=Zy;const Qy="Æ",Fy="&",Jy="Á",Wy="Â",Ky="À",Py="Å",Iy="Ã",e3="Ä",n3="©",t3="Ç",s3="Ð",a3="É",l3="Ê",r3="È",i3="Ë",c3=">",o3="Í",u3="Î",d3="Ì",m3="Ï",p3="<",f3="Ñ",h3="Ó",x3="Ô",g3="Ò",v3="Ø",j3="Õ",b3="Ö",y3='"',N3="®",w3="Þ",S3="Ú",k3="Û",_3="Ù",C3="Ü",E3="Ý",A3="á",R3="â",M3="´",T3="æ",$3="à",L3="&",D3="å",B3="ã",O3="ä",z3="¦",U3="ç",H3="¸",q3="¢",V3="©",X3="¤",G3="°",Z3="÷",Y3="é",Q3="ê",F3="è",J3="ð",W3="ë",K3="½",P3="¼",I3="¾",e6=">",n6="í",t6="î",s6="¡",a6="ì",l6="¿",r6="ï",i6="«",c6="<",o6="¯",u6="µ",d6="·",m6=" ",p6="¬",f6="ñ",h6="ó",x6="ô",g6="ò",v6="ª",j6="º",b6="ø",y6="õ",N6="ö",w6="¶",S6="±",k6="£",_6='"',C6="»",E6="®",A6="§",R6="­",M6="¹",T6="²",$6="³",L6="ß",D6="þ",B6="×",O6="ú",z6="û",U6="ù",H6="¨",q6="ü",V6="ý",X6="¥",G6="ÿ",Z6={AElig:Qy,AMP:Fy,Aacute:Jy,Acirc:Wy,Agrave:Ky,Aring:Py,Atilde:Iy,Auml:e3,COPY:n3,Ccedil:t3,ETH:s3,Eacute:a3,Ecirc:l3,Egrave:r3,Euml:i3,GT:c3,Iacute:o3,Icirc:u3,Igrave:d3,Iuml:m3,LT:p3,Ntilde:f3,Oacute:h3,Ocirc:x3,Ograve:g3,Oslash:v3,Otilde:j3,Ouml:b3,QUOT:y3,REG:N3,THORN:w3,Uacute:S3,Ucirc:k3,Ugrave:_3,Uuml:C3,Yacute:E3,aacute:A3,acirc:R3,acute:M3,aelig:T3,agrave:$3,amp:L3,aring:D3,atilde:B3,auml:O3,brvbar:z3,ccedil:U3,cedil:H3,cent:q3,copy:V3,curren:X3,deg:G3,divide:Z3,eacute:Y3,ecirc:Q3,egrave:F3,eth:J3,euml:W3,frac12:K3,frac14:P3,frac34:I3,gt:e6,iacute:n6,icirc:t6,iexcl:s6,igrave:a6,iquest:l6,iuml:r6,laquo:i6,lt:c6,macr:o6,micro:u6,middot:d6,nbsp:m6,not:p6,ntilde:f6,oacute:h6,ocirc:x6,ograve:g6,ordf:v6,ordm:j6,oslash:b6,otilde:y6,ouml:N6,para:w6,plusmn:S6,pound:k6,quot:_6,raquo:C6,reg:E6,sect:A6,shy:R6,sup1:M6,sup2:T6,sup3:$6,szlig:L6,thorn:D6,times:B6,uacute:O6,ucirc:z6,ugrave:U6,uml:H6,uuml:q6,yacute:V6,yen:X6,yuml:G6},Y6={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var r1=Q6;function Q6(n){var e=typeof n=="string"?n.charCodeAt(0):n;return e>=48&&e<=57}var F6=J6;function J6(n){var e=typeof n=="string"?n.charCodeAt(0):n;return e>=97&&e<=102||e>=65&&e<=70||e>=48&&e<=57}var W6=K6;function K6(n){var e=typeof n=="string"?n.charCodeAt(0):n;return e>=97&&e<=122||e>=65&&e<=90}var P6=W6,I6=r1,e7=n7;function n7(n){return P6(n)||I6(n)}var or,t7=59,s7=a7;function a7(n){var e="&"+n+";",s;return or=or||document.createElement("i"),or.innerHTML=e,s=or.textContent,s.charCodeAt(s.length-1)===t7&&n!=="semi"||s===e?!1:s}var xp=Z6,gp=Y6,l7=r1,r7=F6,i1=e7,i7=s7,c7=y7,o7={}.hasOwnProperty,Ss=String.fromCharCode,u7=Function.prototype,vp={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},d7=9,jp=10,m7=12,p7=32,bp=38,f7=59,h7=60,x7=61,g7=35,v7=88,j7=120,b7=65533,As="named",Qu="hexadecimal",Fu="decimal",Ju={};Ju[Qu]=16;Ju[Fu]=10;var Ci={};Ci[As]=i1;Ci[Fu]=l7;Ci[Qu]=r7;var c1=1,o1=2,u1=3,d1=4,m1=5,Eo=6,p1=7,Gt={};Gt[c1]="Named character references must be terminated by a semicolon";Gt[o1]="Numeric character references must be terminated by a semicolon";Gt[u1]="Named character references cannot be empty";Gt[d1]="Numeric character references cannot be empty";Gt[m1]="Named character references must be known";Gt[Eo]="Numeric character references cannot be disallowed";Gt[p1]="Numeric character references cannot be outside the permissible Unicode range";function y7(n,e){var s={},a,l;e||(e={});for(l in vp)a=e[l],s[l]=a??vp[l];return(s.position.indent||s.position.start)&&(s.indent=s.position.indent||[],s.position=s.position.start),N7(n,s)}function N7(n,e){var s=e.additional,a=e.nonTerminated,l=e.text,r=e.reference,i=e.warning,c=e.textContext,o=e.referenceContext,u=e.warningContext,d=e.position,h=e.indent||[],p=n.length,v=0,w=-1,N=d.column||1,k=d.line||1,x="",m=[],f,j,y,b,S,_,A,$,U,O,fe,re,P,R,L,T,D,H,X;for(typeof s=="string"&&(s=s.charCodeAt(0)),T=ee(),$=i?E:u7,v--,p++;++v<p;)if(S===jp&&(N=h[w]||1),S=n.charCodeAt(v),S===bp){if(A=n.charCodeAt(v+1),A===d7||A===jp||A===m7||A===p7||A===bp||A===h7||A!==A||s&&A===s){x+=Ss(S),N++;continue}for(P=v+1,re=P,X=P,A===g7?(X=++re,A=n.charCodeAt(X),A===v7||A===j7?(R=Qu,X=++re):R=Fu):R=As,f="",fe="",b="",L=Ci[R],X--;++X<p&&(A=n.charCodeAt(X),!!L(A));)b+=Ss(A),R===As&&o7.call(xp,b)&&(f=b,fe=xp[b]);y=n.charCodeAt(X)===f7,y&&(X++,j=R===As?i7(b):!1,j&&(f=b,fe=j)),H=1+X-P,!y&&!a||(b?R===As?(y&&!fe?$(m1,1):(f!==b&&(X=re+f.length,H=1+X-re,y=!1),y||(U=f?c1:u1,e.attribute?(A=n.charCodeAt(X),A===x7?($(U,H),fe=null):i1(A)?fe=null:$(U,H)):$(U,H))),_=fe):(y||$(o1,H),_=parseInt(b,Ju[R]),w7(_)?($(p1,H),_=Ss(b7)):_ in gp?($(Eo,H),_=gp[_]):(O="",S7(_)&&$(Eo,H),_>65535&&(_-=65536,O+=Ss(_>>>10|55296),_=56320|_&1023),_=O+Ss(_))):R!==As&&$(d1,H)),_?(M(),T=ee(),v=X-1,N+=X-P+1,m.push(_),D=ee(),D.offset++,r&&r.call(o,_,{start:T,end:D},n.slice(P-1,X)),T=D):(b=n.slice(P-1,X),x+=b,N+=b.length,v=X-1)}else S===10&&(k++,w++,N=0),S===S?(x+=Ss(S),N++):M();return m.join("");function ee(){return{line:k,column:N,offset:v+(d.offset||0)}}function E(q,Q){var se=ee();se.column+=Q,se.offset+=Q,i.call(u,Gt[q],se,q)}function M(){x&&(m.push(x),l&&l.call(c,x,{start:T,end:ee()}),x="")}}function w7(n){return n>=55296&&n<=57343||n>1114111}function S7(n){return n>=1&&n<=8||n===11||n>=13&&n<=31||n>=127&&n<=159||n>=64976&&n<=65007||(n&65535)===65535||(n&65535)===65534}var f1={exports:{}};(function(n){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var s=function(a){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,i={},c={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function m(f){return f instanceof o?new o(f.type,m(f.content),f.alias):Array.isArray(f)?f.map(m):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++r}),m.__id},clone:function m(f,j){j=j||{};var y,b;switch(c.util.type(f)){case"Object":if(b=c.util.objId(f),j[b])return j[b];y={},j[b]=y;for(var S in f)f.hasOwnProperty(S)&&(y[S]=m(f[S],j));return y;case"Array":return b=c.util.objId(f),j[b]?j[b]:(y=[],j[b]=y,f.forEach(function(_,A){y[A]=m(_,j)}),y);default:return f}},getLanguage:function(m){for(;m;){var f=l.exec(m.className);if(f)return f[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,f){m.className=m.className.replace(RegExp(l,"gi"),""),m.classList.add("language-"+f)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(y){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(y.stack)||[])[1];if(m){var f=document.getElementsByTagName("script");for(var j in f)if(f[j].src==m)return f[j]}return null}},isActive:function(m,f,j){for(var y="no-"+f;m;){var b=m.classList;if(b.contains(f))return!0;if(b.contains(y))return!1;m=m.parentElement}return!!j}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(m,f){var j=c.util.clone(c.languages[m]);for(var y in f)j[y]=f[y];return j},insertBefore:function(m,f,j,y){y=y||c.languages;var b=y[m],S={};for(var _ in b)if(b.hasOwnProperty(_)){if(_==f)for(var A in j)j.hasOwnProperty(A)&&(S[A]=j[A]);j.hasOwnProperty(_)||(S[_]=b[_])}var $=y[m];return y[m]=S,c.languages.DFS(c.languages,function(U,O){O===$&&U!=m&&(this[U]=S)}),S},DFS:function m(f,j,y,b){b=b||{};var S=c.util.objId;for(var _ in f)if(f.hasOwnProperty(_)){j.call(f,_,f[_],y||_);var A=f[_],$=c.util.type(A);$==="Object"&&!b[S(A)]?(b[S(A)]=!0,m(A,j,null,b)):$==="Array"&&!b[S(A)]&&(b[S(A)]=!0,m(A,j,_,b))}}},plugins:{},highlightAll:function(m,f){c.highlightAllUnder(document,m,f)},highlightAllUnder:function(m,f,j){var y={callback:j,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",y),y.elements=Array.prototype.slice.apply(y.container.querySelectorAll(y.selector)),c.hooks.run("before-all-elements-highlight",y);for(var b=0,S;S=y.elements[b++];)c.highlightElement(S,f===!0,y.callback)},highlightElement:function(m,f,j){var y=c.util.getLanguage(m),b=c.languages[y];c.util.setLanguage(m,y);var S=m.parentElement;S&&S.nodeName.toLowerCase()==="pre"&&c.util.setLanguage(S,y);var _=m.textContent,A={element:m,language:y,grammar:b,code:_};function $(O){A.highlightedCode=O,c.hooks.run("before-insert",A),A.element.innerHTML=A.highlightedCode,c.hooks.run("after-highlight",A),c.hooks.run("complete",A),j&&j.call(A.element)}if(c.hooks.run("before-sanity-check",A),S=A.element.parentElement,S&&S.nodeName.toLowerCase()==="pre"&&!S.hasAttribute("tabindex")&&S.setAttribute("tabindex","0"),!A.code){c.hooks.run("complete",A),j&&j.call(A.element);return}if(c.hooks.run("before-highlight",A),!A.grammar){$(c.util.encode(A.code));return}if(f&&a.Worker){var U=new Worker(c.filename);U.onmessage=function(O){$(O.data)},U.postMessage(JSON.stringify({language:A.language,code:A.code,immediateClose:!0}))}else $(c.highlight(A.code,A.grammar,A.language))},highlight:function(m,f,j){var y={code:m,grammar:f,language:j};if(c.hooks.run("before-tokenize",y),!y.grammar)throw new Error('The language "'+y.language+'" has no grammar.');return y.tokens=c.tokenize(y.code,y.grammar),c.hooks.run("after-tokenize",y),o.stringify(c.util.encode(y.tokens),y.language)},tokenize:function(m,f){var j=f.rest;if(j){for(var y in j)f[y]=j[y];delete f.rest}var b=new h;return p(b,b.head,m),d(m,b,f,b.head,0),w(b)},hooks:{all:{},add:function(m,f){var j=c.hooks.all;j[m]=j[m]||[],j[m].push(f)},run:function(m,f){var j=c.hooks.all[m];if(!(!j||!j.length))for(var y=0,b;b=j[y++];)b(f)}},Token:o};a.Prism=c;function o(m,f,j,y){this.type=m,this.content=f,this.alias=j,this.length=(y||"").length|0}o.stringify=function m(f,j){if(typeof f=="string")return f;if(Array.isArray(f)){var y="";return f.forEach(function($){y+=m($,j)}),y}var b={type:f.type,content:m(f.content,j),tag:"span",classes:["token",f.type],attributes:{},language:j},S=f.alias;S&&(Array.isArray(S)?Array.prototype.push.apply(b.classes,S):b.classes.push(S)),c.hooks.run("wrap",b);var _="";for(var A in b.attributes)_+=" "+A+'="'+(b.attributes[A]||"").replace(/"/g,"&quot;")+'"';return"<"+b.tag+' class="'+b.classes.join(" ")+'"'+_+">"+b.content+"</"+b.tag+">"};function u(m,f,j,y){m.lastIndex=f;var b=m.exec(j);if(b&&y&&b[1]){var S=b[1].length;b.index+=S,b[0]=b[0].slice(S)}return b}function d(m,f,j,y,b,S){for(var _ in j)if(!(!j.hasOwnProperty(_)||!j[_])){var A=j[_];A=Array.isArray(A)?A:[A];for(var $=0;$<A.length;++$){if(S&&S.cause==_+","+$)return;var U=A[$],O=U.inside,fe=!!U.lookbehind,re=!!U.greedy,P=U.alias;if(re&&!U.pattern.global){var R=U.pattern.toString().match(/[imsuy]*$/)[0];U.pattern=RegExp(U.pattern.source,R+"g")}for(var L=U.pattern||U,T=y.next,D=b;T!==f.tail&&!(S&&D>=S.reach);D+=T.value.length,T=T.next){var H=T.value;if(f.length>m.length)return;if(!(H instanceof o)){var X=1,ee;if(re){if(ee=u(L,D,m,fe),!ee||ee.index>=m.length)break;var Q=ee.index,E=ee.index+ee[0].length,M=D;for(M+=T.value.length;Q>=M;)T=T.next,M+=T.value.length;if(M-=T.value.length,D=M,T.value instanceof o)continue;for(var q=T;q!==f.tail&&(M<E||typeof q.value=="string");q=q.next)X++,M+=q.value.length;X--,H=m.slice(D,M),ee.index-=D}else if(ee=u(L,0,H,fe),!ee)continue;var Q=ee.index,se=ee[0],rn=H.slice(0,Q),cn=H.slice(Q+se.length),Ie=D+H.length;S&&Ie>S.reach&&(S.reach=Ie);var Ze=T.prev;rn&&(Ze=p(f,Ze,rn),D+=rn.length),v(f,Ze,X);var Dn=new o(_,O?c.tokenize(se,O):se,P,se);if(T=p(f,Ze,Dn),cn&&p(f,T,cn),X>1){var ba={cause:_+","+$,reach:Ie};d(m,f,j,T.prev,D,ba),S&&ba.reach>S.reach&&(S.reach=ba.reach)}}}}}}function h(){var m={value:null,prev:null,next:null},f={value:null,prev:m,next:null};m.next=f,this.head=m,this.tail=f,this.length=0}function p(m,f,j){var y=f.next,b={value:j,prev:f,next:y};return f.next=b,y.prev=b,m.length++,b}function v(m,f,j){for(var y=f.next,b=0;b<j&&y!==m.tail;b++)y=y.next;f.next=y,y.prev=f,m.length-=b}function w(m){for(var f=[],j=m.head.next;j!==m.tail;)f.push(j.value),j=j.next;return f}if(!a.document)return a.addEventListener&&(c.disableWorkerMessageHandler||a.addEventListener("message",function(m){var f=JSON.parse(m.data),j=f.language,y=f.code,b=f.immediateClose;a.postMessage(c.highlight(y,c.languages[j],j)),b&&a.close()},!1)),c;var N=c.util.currentScript();N&&(c.filename=N.src,N.hasAttribute("data-manual")&&(c.manual=!0));function k(){c.manual||c.highlightAll()}if(!c.manual){var x=document.readyState;x==="loading"||x==="interactive"&&N&&N.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return c}(e);n.exports&&(n.exports=s),typeof kr<"u"&&(kr.Prism=s)})(f1);var k7=f1.exports,_7=Wu;Wu.displayName="markup";Wu.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Wu(n){n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(s,a){var l={};l["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[a]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};r["language-"+a]={pattern:/[\s\S]+/,inside:n.languages[a]};var i={};i[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(e,s){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:n.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml}var C7=Ku;Ku.displayName="css";Ku.aliases=[];function Ku(n){(function(e){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))})(n)}var E7=Pu;Pu.displayName="clike";Pu.aliases=[];function Pu(n){n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var A7=Iu;Iu.displayName="javascript";Iu.aliases=["js"];function Iu(n){n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript}var Ha=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof kr=="object"?kr:{},R7=Y7();Ha.Prism={manual:!0,disableWorkerMessageHandler:!0};var M7=Yy,T7=c7,h1=k7,$7=_7,L7=C7,D7=E7,B7=A7;R7();var ed={}.hasOwnProperty;function x1(){}x1.prototype=h1;var Me=new x1,O7=Me;Me.highlight=U7;Me.register=Ol;Me.alias=z7;Me.registered=H7;Me.listLanguages=q7;Ol($7);Ol(L7);Ol(D7);Ol(B7);Me.util.encode=G7;Me.Token.stringify=V7;function Ol(n){if(typeof n!="function"||!n.displayName)throw new Error("Expected `function` for `grammar`, got `"+n+"`");Me.languages[n.displayName]===void 0&&n(Me)}function z7(n,e){var s=Me.languages,a=n,l,r,i,c;e&&(a={},a[n]=e);for(l in a)for(r=a[l],r=typeof r=="string"?[r]:r,i=r.length,c=-1;++c<i;)s[r[c]]=s[l]}function U7(n,e){var s=h1.highlight,a;if(typeof n!="string")throw new Error("Expected `string` for `value`, got `"+n+"`");if(Me.util.type(e)==="Object")a=e,e=null;else{if(typeof e!="string")throw new Error("Expected `string` for `name`, got `"+e+"`");if(ed.call(Me.languages,e))a=Me.languages[e];else throw new Error("Unknown language: `"+e+"` is not registered")}return s.call(this,n,a,e)}function H7(n){if(typeof n!="string")throw new Error("Expected `string` for `language`, got `"+n+"`");return ed.call(Me.languages,n)}function q7(){var n=Me.languages,e=[],s;for(s in n)ed.call(n,s)&&typeof n[s]=="object"&&e.push(s);return e}function V7(n,e,s){var a;return typeof n=="string"?{type:"text",value:n}:Me.util.type(n)==="Array"?X7(n,e):(a={type:n.type,content:Me.Token.stringify(n.content,e,s),tag:"span",classes:["token",n.type],attributes:{},language:e,parent:s},n.alias&&(a.classes=a.classes.concat(n.alias)),Me.hooks.run("wrap",a),M7(a.tag+"."+a.classes.join("."),Z7(a.attributes),a.content))}function X7(n,e){for(var s=[],a=n.length,l=-1,r;++l<a;)r=n[l],r!==""&&r!==null&&r!==void 0&&s.push(r);for(l=-1,a=s.length;++l<a;)r=s[l],s[l]=Me.Token.stringify(r,e,s);return s}function G7(n){return n}function Z7(n){var e;for(e in n)n[e]=T7(n[e]);return n}function Y7(){var n="Prism"in Ha,e=n?Ha.Prism:void 0;return s;function s(){n?Ha.Prism=e:delete Ha.Prism,n=void 0,e=void 0}}const nd=li(O7);var Ei=zx(nd,{});Ei.registerLanguage=function(n,e){return nd.register(e)};Ei.alias=function(n,e){return nd.alias(n,e)};const Q7={'code[class*="language-"]':{color:"black",background:"none",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"#f5f2f0",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},':not(pre) > code[class*="language-"]':{background:"#f5f2f0",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"slategray"},prolog:{color:"slategray"},doctype:{color:"slategray"},cdata:{color:"slategray"},punctuation:{color:"#999"},namespace:{Opacity:".7"},property:{color:"#905"},tag:{color:"#905"},boolean:{color:"#905"},number:{color:"#905"},constant:{color:"#905"},symbol:{color:"#905"},deleted:{color:"#905"},selector:{color:"#690"},"attr-name":{color:"#690"},string:{color:"#690"},char:{color:"#690"},builtin:{color:"#690"},inserted:{color:"#690"},operator:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},entity:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)",cursor:"help"},url:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".language-css .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".style .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},atrule:{color:"#07a"},"attr-value":{color:"#07a"},keyword:{color:"#07a"},function:{color:"#DD4A68"},"class-name":{color:"#DD4A68"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"bold"},variable:{color:"#e90"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};var F7=td;td.displayName="jsx";td.aliases=[];function td(n){(function(e){var s=e.util.clone(e.languages.javascript),a=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,l=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,r=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(u,d){return u=u.replace(/<S>/g,function(){return a}).replace(/<BRACES>/g,function(){return l}).replace(/<SPREAD>/g,function(){return r}),RegExp(u,d)}r=i(r).source,e.languages.jsx=e.languages.extend("markup",s),e.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=s.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var c=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(c).join(""):""},o=function(u){for(var d=[],h=0;h<u.length;h++){var p=u[h],v=!1;if(typeof p!="string"&&(p.type==="tag"&&p.content[0]&&p.content[0].type==="tag"?p.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===c(p.content[0].content[1])&&d.pop():p.content[p.content.length-1].content==="/>"||d.push({tagName:c(p.content[0].content[1]),openedBraces:0}):d.length>0&&p.type==="punctuation"&&p.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&p.type==="punctuation"&&p.content==="}"?d[d.length-1].openedBraces--:v=!0),(v||typeof p=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var w=c(p);h<u.length-1&&(typeof u[h+1]=="string"||u[h+1].type==="plain-text")&&(w+=c(u[h+1]),u.splice(h+1,1)),h>0&&(typeof u[h-1]=="string"||u[h-1].type==="plain-text")&&(w=c(u[h-1])+w,u.splice(h-1,1),h--),u[h]=new e.Token("plain-text",w,null,w)}p.content&&typeof p.content!="string"&&o(p.content)}};e.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||o(u.tokens)})})(n)}const J7=li(F7);var W7=k4();const g1=li(W7),v1={hljs:{display:"block",overflowX:"auto",padding:"0.5em",color:"#383a42",background:"#fafafa"},"hljs-comment":{color:"#a0a1a7",fontStyle:"italic"},"hljs-quote":{color:"#a0a1a7",fontStyle:"italic"},"hljs-doctag":{color:"#a626a4"},"hljs-keyword":{color:"#a626a4"},"hljs-formula":{color:"#a626a4"},"hljs-section":{color:"#e45649"},"hljs-name":{color:"#e45649"},"hljs-selector-tag":{color:"#e45649"},"hljs-deletion":{color:"#e45649"},"hljs-subst":{color:"#e45649"},"hljs-literal":{color:"#0184bb"},"hljs-string":{color:"#50a14f"},"hljs-regexp":{color:"#50a14f"},"hljs-addition":{color:"#50a14f"},"hljs-attribute":{color:"#50a14f"},"hljs-meta-string":{color:"#50a14f"},"hljs-built_in":{color:"#c18401"},"hljs-class .hljs-title":{color:"#c18401"},"hljs-attr":{color:"#986801"},"hljs-variable":{color:"#986801"},"hljs-template-variable":{color:"#986801"},"hljs-type":{color:"#986801"},"hljs-selector-class":{color:"#986801"},"hljs-selector-attr":{color:"#986801"},"hljs-selector-pseudo":{color:"#986801"},"hljs-number":{color:"#986801"},"hljs-symbol":{color:"#4078f2"},"hljs-bullet":{color:"#4078f2"},"hljs-link":{color:"#4078f2",textDecoration:"underline"},"hljs-meta":{color:"#4078f2"},"hljs-selector-id":{color:"#4078f2"},"hljs-title":{color:"#4078f2"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}},K7=`import Button from 'components/Button'

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
}`;Dl.registerLanguage("javascript",g1);const P7={ButtonCase:K7,Button:Ll};function ct(n){const{files:e=P7,caseRender:s,active:a=0,className:l}=n,r=Object.keys(e),[i,c]=g.useState(r[a]);function o(h){c(r[h])}const d=ue("border border-gray-100 flex bg-white keepx flex-col-reverse sm:flex-row",l);return t.jsxs("div",{className:d,children:[t.jsxs("div",{className:"overflow-scroll flex-1 relative",children:[t.jsx("div",{className:"flex border-b border-gray-100 sticky top-0 bg-white",children:r.map((h,p)=>t.jsx(me,{ghost:!0,onClick:()=>o(p),className:i===h?"text-green-500":"",children:h},h))}),t.jsx("pre",{className:"text-sm leading-6",children:t.jsx(Dl,{language:"javascript",PreTag:"div",style:v1,children:e[i]})})]}),s&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"sm:w-[1px] h-[1px] sm:h-auto bg-gray-100"}),t.jsxs("div",{className:"flex-1 overflow-hidden",children:[t.jsxs("div",{className:"flex border-b border-gray-100 items-center pl-3",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"})}),t.jsx(me,{ghost:!0,className:"px-2",children:"预览"})]}),s]})]})]})}function I7(){return t.jsx(ct,{files:{ButtonCase:Fb,Button:Ll},caseRender:t.jsx(Qb,{})})}function sd({id:n,host:e,repo:s,repoId:a,category:l,categoryId:r,mapping:i,term:c,strict:o,reactionsEnabled:u,emitMetadata:d,inputPosition:h,theme:p,lang:v,loading:w}){const[N,k]=g.useState(!1);return g.useEffect(()=>{N||(E4(()=>import("./giscus-BNK3dBIH-B_EkeIy7.js"),[]),k(!0))},[]),N?t.jsx("giscus-widget",{id:n,host:e,repo:s,repoid:a,category:l,categoryid:r,mapping:i,term:c,strict:o,reactionsenabled:u,emitmetadata:d,inputposition:h,theme:p,lang:v,loading:w}):null}const e8="/assets/ercode-w1g_eexN.png";function wc(n){const{title:e,desc:s,href:a,className:l}=n,i=ue("block border rounded-xl p-4 bg-slate-50 border-slate-300 hover:shadow cursor-pointer",l);return t.jsxs("a",{href:a,target:"_blank",className:i,children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-blue-500",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"})}),t.jsx("div",{className:"font-bold ml-2",children:e})]}),t.jsx("div",{className:"mt-3 text-slate-600 leading-8",children:s}),t.jsx("div",{className:"block text-end mt-4 text-blue-500",href:a,target:"_blank",children:"点击了解详情"})]})}function n8(){const n=g.useRef(null);function e(s){s.preventDefault(),n.current.show()}return t.jsxs("div",{className:"relative pt-16",children:[t.jsx(Yb,{}),t.jsxs("div",{className:"max-w-[1050px] mx-auto px-4",children:[t.jsxs("div",{className:"mt-20 max-w-[750px]",children:[t.jsx("h2",{className:"text-lg font-bold",children:"React 19 全解"}),t.jsx("p",{className:"mt-4 text-gray-500 leading-8 text-md",children:"全网第一本系统学习 React 19 的专栏。本专栏在公众号「这波能反杀」首发，受到了大量粉丝的喜爱。专栏中包含大量实践案例，深入简出，理论结合实践为大家分享 React19 的学习。"}),t.jsx("p",{className:"text-md mt-4 text-gray-500 leading-8",children:"React19 为开发者带来了新的开发理念，这又是一次开发方式上的一次变革。并且在开发体验和性能上都有大幅度的提升，值得每一位 React 开发者学习，赶紧行动吧。"}),t.jsxs("div",{className:"mt-8",children:[t.jsxs(kx,{to:"tutorial/index",className:"inline-flex items-center px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-full",children:[t.jsx("span",{className:"mr-2",children:"快速开始"}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"})})]}),t.jsx("a",{onClick:e,href:"",className:"inline-flex px-4 py-2 text-gray-600 ring-1 ring-gray-200 text-sm rounded-full ml-4",children:t.jsx("span",{children:"关注公众号"})}),t.jsx(va,{ref:n,title:"Follow me!",children:t.jsx("img",{src:e8,alt:""})})]})]}),t.jsxs("div",{className:"mt-20 max-w-[750px]",children:[t.jsx("h2",{className:"text-lg font-bold",children:"学前准备"}),t.jsxs("div",{className:"flex items-center text-gray-600 mt-8",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),t.jsx("div",{className:"ml-2",children:"具备一定的 JavaScript 基础"})]}),t.jsxs("div",{className:"flex items-center text-gray-600 mt-4",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),t.jsx("div",{className:"ml-2",children:"熟悉异步请求，熟悉 fetch 与 Promise"})]}),t.jsxs("div",{className:"flex items-center text-gray-600 mt-4",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),t.jsx("div",{className:"ml-2",children:"熟悉 React 之前的版本的使用"})]})]}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3",children:"主要内容"}),t.jsxs("div",{className:"flex items-stretch md:justify-between flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0",children:[t.jsx(vc,{title:"Compiler",path:"./tutorial/use/importwith19",desc:"你可以不再使用 memo、useMemo、useCallback 来优化你的项目性能，大幅度提高开发体验",className:"flex-1"}),t.jsx(vc,{title:"新的架构思路",path:"./tutorial/index",desc:"并发模式变得更加实用，得益于并发模式的成熟，我们将可以使用新的架构思路构思我的项目",className:"flex-1"}),t.jsx(vc,{title:"新的交互方式",path:"./tutorial/use/base",desc:"React 在人机交互的开发体验上做了很多努力和尝试，他们将在这个版本中得以体现",className:"flex-1"})]}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3",children:"案例展示方式"}),t.jsxs("p",{className:"mt-10 flex items-center",children:["所见即所得。所有案例直接渲染，可操作、可交互。例如：点击按钮，切换皮肤",t.jsx("span",{className:"animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center ml-4",children:t.jsx("svg",{className:"w-6 h-6 text-violet-500",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})]}),t.jsx(Zb,{}),t.jsx("p",{className:"mb-4",children:"沉浸式学习体验。通过可在线编辑的案例，你能获得沉浸式的学习体验"}),t.jsx(I7,{}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3",children:"其他课程"}),t.jsxs("div",{className:"flex justify-between flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6",children:[t.jsx(wc,{title:"私人面试指导",desc:"前端专家：这波能反杀，为您提供全网最专业的面试辅导，结合个人目标与工作经验，时长 2 ~ 3 小时，一次沟通，解决所有问题",href:"https://appxw863qeq2150.h5.xiaoeknow.com/v1/goods/goods_detail/course_2YWwycNZDt3u59naEs57g0gGa0H?",className:"flex-1"}),t.jsx(wc,{title:"keepCoder",desc:"资深前端进阶通道，1V1深度沟通辅导，聚焦学习方法，深挖知识体系，深挖应用场景，凝聚核心竞争力",href:"https://www.yuque.com/coreadvance/ar2my1/apk8cr",className:"flex-1 bg-orange-100 border-orange-300"}),t.jsx(wc,{title:"keepCharts",desc:"聚焦技术深度，手写基于 Canvas 的渲染引擎，并在此基础之上实现可视化图表等应用层库，打造自己牢不可破的核心竞争力",href:"https://www.yuque.com/coreadvance/ar2my1/em5rrk6p1umptsxw",className:"flex-1 bg-green-200 border-green-600"})]}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsx(sd,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",loading:"lazy",crossorigin:"anonymous",async:!0}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsxs("div",{className:"flex justify-between pb-10",children:[t.jsxs("span",{className:"text-gray-400",children:["© Copyright 2024.",t.jsx("a",{href:"https://beian.miit.gov.cn/",target:"_blank",children:"这波能反杀."}),t.jsx("a",{href:"https://beian.miit.gov.cn/",target:"_blank",children:"粤ICP备2024222174号"})]}),t.jsxs("div",{className:"flex",children:[t.jsx("div",{className:"ml-3",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})})}),t.jsx("div",{className:"ml-3",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"})})}),t.jsx("div",{className:"ml-3",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})})})]})]})]})]})}function j1(n){const{label:e,type:s,primary:a,warning:l,danger:r,newer:i,hard:c,className:o}=n,d=ue("text-sm text-gray-500 border px-3 rounded-full",{"bg-blue-100 text-blue-500 border-blue-500":!!a,"bg-green-100 text-green-500 border-green-500":!!i,"bg-red-100 text-red-500 border-red-500":!!r,"bg-orange-100-100 text-orange-500 border-orange-500":!!r,"bg-fuchsia-100 text-fuchsia-500 border-fuchsia-500":!!c},o);return t.jsx("label",{className:ln(d),children:e})}const t8=`import {Suspense, useState, useTransition} from 'react'
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
`,s8=`const random = [
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
`,a8=`import { use } from 'react'

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
`,l8=`document.documentElement.style.fontSize = '14px'

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
`,r8=`import {twMerge} from 'tailwind-merge'
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
`;function z(n){const{reload:e,className:s}=n,[a,l]=g.useState(!0),r=g.useRef(null);function i(){const u=r.current.getBoundingClientRect().height;r.current.style.minHeight=`${u}px`,l(!1),setTimeout(()=>{l(!0)},200)}const o=ue("border rounded-md my-4",s);return t.jsxs("div",{className:o,children:[t.jsxs("div",{className:"flex border-b border-gray-200 bg-gray-100 items-center px-3 py-2 text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"})}),t.jsx("div",{className:"ml-2 text-sm",children:"预览"})]}),t.jsx("div",{className:"p-4",ref:r,children:a?n.children:null}),e?t.jsx("div",{className:"mx-4 mb-4 text-right",children:t.jsx(me,{signal:!0,onClick:i,children:"reload"})}):null]})}const b1=n=>{const{isPending:e,response:s}=n,a=g.use(s);return t.jsx("div",{className:"text-sm leading-6 transition border border-blue-100 shadow rounded-md p-4 w-full mt-4",style:{opacity:e?.5:1},children:a.value})};document.documentElement.style.fontSize="14px";function y1(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsx("div",{className:"animate-pulse",children:t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})})})}const i8=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var N1=new Headers;N1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var c8={method:"GET",headers:N1,redirect:"follow",data:"hex"};const o8="https://echo.apifox.com/delay/1",Ao=async()=>{await fetch(o8,c8);const n=Math.floor(Math.random()*10)%5;return{value:i8[n]}};function u8(){const n=Ao();return t.jsx(g.Suspense,{fallback:t.jsx(y1,{}),children:t.jsx(b1,{response:n})})}function yp(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
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
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`export default function App() {
  const promise = getApi()

  return (
    <Suspense fallback={<Skeleton />}>
      <Message response={promise} />
    </Suspense>
  )
}
`})}),`
`,t.jsx(e.p,{children:"最后在子组件中，获取 api 执行之后得到的数据"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const Message = (props) => {
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
`,t.jsx(z,{reload:!0,children:t.jsx(u8,{})}),`
`,t.jsxs(e.p,{children:["大家可以自行感受一下新的开发方式与以前基于 ",t.jsx(e.code,{children:"useEffect"})," 请求数据有什么不同之处。我在右侧案例演示中，还提供了更完整更具代表性的案例。大家可以先瞄一眼体会一下。案例代码有对应的完整演示效果，你可以通过修改代码观察案例的变化。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注意：一套成熟架构思维，不是使用一个简单的方案解决某一个问题，而是要基于这套思维去解决项目中的绝大多数场景。因此我们一定要结合大量的场景去理解一套项目架构思维。"}),`
`]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"5"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"合集介绍"})}),`
`,t.jsxs(e.p,{children:["本合集名为：",t.jsx(e.strong,{children:"「React19 全解」"})," ，是 ",t.jsx(e.strong,{children:"「React 知命境」"})," 的续集。首发与公众号",t.jsx(e.a,{href:"",children:"这波能反杀"}),"。后为了提高大家的学习体验，迁移至此处。在这里我基于",t.jsx(e.strong,{children:"沉浸式"}),"的学习体验，内置了大量可操作可交互的真实案例。摒弃了使用截图演示案例的方式。除此之外，为了让大家能够获得更好的学习效果，每一个案例都精心设计了 UI。在细节上精心打磨，争取让大家能够所学即所得。快速掌握 React19."]}),`
`,t.jsx(e.p,{children:"希望大家能够在这里获得全网最好的学习体验！Let's go."})]})}function d8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(yp,{...n})}):yp(n)}const Ai="U2FsdGVkX3xOPhN009";function m8(){function n(e){localStorage.setItem("active_code",e.get("code")),location.reload()}return t.jsxs("div",{className:"pt-4",children:[t.jsx("div",{className:"rounded-md bg-yellow-50 p-4 border border-yellow-400",children:t.jsxs("div",{className:"flex",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-yellow-700",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),t.jsxs("div",{className:"ml-3",children:[t.jsx("h3",{className:"text-sm font-medium text-yellow-800",children:"Attention needed"}),t.jsx("div",{className:"mt-2 text-sm text-yellow-700",children:t.jsx("p",{children:"你还未输入激活码，或者激活码已过期，请重新输入即可访问"})})]})]})}),t.jsxs("form",{action:n,className:"flex items-center justify-between",children:[t.jsx(Tn,{name:"code",placeholder:"Please input your active code",className:"flex-1 mr-4",pattern:Ai}),t.jsx("button",{type:"submit",children:"确认"})]})]})}Ei.registerLanguage("jsx",J7);function p8({className:n,...e}){const s=/language-(\w+)/.exec(n||"");return s?t.jsx(Ei,{language:s[1],PreTag:"div",...e,style:Q7}):t.jsx("code",{className:n,...e})}function de(n){const{renderArticle:e,files:s,caseRender:a,isAuth:l=!0}=n,r=localStorage.getItem("active_code"),i=l?r===Ai:!0;let c=t.jsx(m8,{});return i&&(c=t.jsxs(t.Fragment,{children:[a?t.jsx(z,{reload:!0,className:"mt-0",children:a}):null,t.jsx("div",{className:"md:hidden",children:t.jsx(ct,{files:s,className:"h-full rounded-md border-gray-200"})}),e(p8)]})),t.jsxs("div",{className:"md:flex h-[calc(100vh_-_8rem)] overflow-hidden mx-auto w-full max-w-[1244px]",children:[t.jsxs("div",{className:"md:flex-1 h-full overflow-scroll md:pr-4 keep w-full max-w-[768px]",children:[c,t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsx(sd,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]}),t.jsx("div",{className:"hidden md:block md:flex-1 top-[8rem] h-full overflow-y-auto max-w-[768px]",children:t.jsx(ct,{files:s,className:"h-full rounded-md border-gray-200"})})]})}function f8(n){const{className:e,primary:s,danger:a,sm:l,lg:r,success:i,...c}=n,h=ln(ue("rounded-md border border-transparent font-medium cursor-pointer transition","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":i,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r}));return t.jsx("button",{className:h,...c,children:n.children})}function h8(){const[n,e]=g.useState(Ao),[s,a]=g.useTransition();function l(){a(()=>{e(Ao())})}return t.jsxs("div",{children:[t.jsx(f8,{onClick:l,disabled:s,children:"点击更新"}),t.jsx(g.Suspense,{fallback:t.jsx(y1,{}),children:t.jsx(b1,{response:n,isPending:s})})]})}const x8={"App.js":t8,"api.js":s8,"Message.jsx":a8,"Skeleton.jsx":l8,"Button.jsx":r8};function g8(){return t.jsx(de,{files:x8,renderArticle:n=>t.jsx(d8,{components:{code:n}}),caseRender:t.jsx(h8,{})})}const v8=`import React, { useEffect, useState, Suspense, use } from 'react';
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
`,j8=`import {twMerge} from 'tailwind-merge'
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
`,b8=`const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}
`,y8=`// header
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
`;function Np(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"这篇文章文字内容不会很多，但是是整个专栏最重要的部分之一。"}),`
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
`]})]})}function N8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Np,{...n})}):Np(n)}document.documentElement.style.fontSize="14px";function w8(n){const{className:e,primary:s,danger:a,sm:l,lg:r,success:i,...c}=n,h=ln(ue("rounded-md border border-transparent font-medium cursor-pointer transition","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":i,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r}));return t.jsx("button",{className:h,...c,children:n.children})}function S8(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})})}const k8=3,_8=`https://randomuser.me/api/?results=${k8}&inc=name,gender,email,nat,picture&noinfo`,wp=async()=>(await fetch(_8)).json(),C8=()=>{const[n,e]=g.useState(()=>[wp()]),s=()=>{n.push(wp()),e([...n])};return t.jsxs(t.Fragment,{children:[n.map((a,l)=>t.jsx(g.Suspense,{fallback:t.jsx(S8,{}),children:t.jsx(E8,{promise:a})},`hello ${l}`)),t.jsx("div",{className:"text-center my-4",children:t.jsx(w8,{onClick:s,children:"loading more"})})]})};function E8({promise:n}){const{results:e}=g.use(n);return t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"border-b border-dashed py-4 mx-4 items-center flex",children:[t.jsx("img",{className:"w-14 h-14 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"a design language for background applications, is refined by Ant UED Team"})]})]},s.name.last))})}const A8={"App.js":v8,"api.js":b8,"Button.jsx":j8,"Skeleton.jsx":y8};function R8(){return t.jsx(de,{files:A8,renderArticle:n=>t.jsx(N8,{components:{code:n}}),caseRender:t.jsx(C8,{})})}function Sp(n){const e={blockquote:"blockquote",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:t.jsx(e.img,{src:"https://files.mdnice.com/user/3925/b4869674-83ae-4ed2-a70d-34574d4451da.png",alt:""})}),`
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
`,t.jsx(e.p,{children:"最后重启项目即可。"})]})}function M8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Sp,{...n})}):Sp(n)}const T8=`import { useState } from 'react'
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
`,$8=`#root {
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
`,L8=`:root {
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
`,D8=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
`,B8=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
`,O8={"App.js":T8,"App.css":$8,"index.css":L8,"vite.svg":D8,"react.svg":B8};function z8(){return t.jsx(de,{files:O8,renderArticle:n=>t.jsx(M8,{components:{code:n}})})}const U8=`import React, { useEffect, useState, Suspense, use } from 'react';
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
`,H8=`import {twMerge} from 'tailwind-merge'
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
`,q8=`const random = [
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
`,V8=`export default function Skeleton(props) {
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
`,ad=n=>{const e=n.message;return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},X8=new Promise(n=>{n({value:"Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook."})});function G8(){const n=g.use(X8);return t.jsx(ad,{message:n.value})}document.documentElement.style.fontSize="14px";function w1(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:i,success:c,...o}=n,p=ln(ue("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}function Ri(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Z8=new Promise(n=>{n({value:"Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook."})});function Y8(){const[n,e]=g.useState(!1);let s={value:""};return n||(s=g.use(Z8)),t.jsxs(t.Fragment,{children:[n?t.jsx(Ri,{}):t.jsx(ad,{message:s.value}),t.jsx("div",{className:"mt-4 text-right",children:t.jsx(w1,{signal:!0,onClick:()=>e(!n),children:"切换"})})]})}const Q8=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var S1=new Headers;S1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var F8={method:"GET",headers:S1,redirect:"follow",data:"hex"};const J8="https://echo.apifox.com/delay/1",k1=async()=>{await fetch(J8,F8);const n=Math.floor(Math.random()*10)%5;return{value:Q8[n]}};function W8(){const[n,e]=g.useState(!0);return t.jsx(g.Suspense,{fallback:t.jsx("div",{}),children:t.jsx("div",{children:n?t.jsx(K8,{}):t.jsx(Ri,{})})})}function K8(){let[n,e]=g.useState(!0);const s=k1().then(l=>(e(!1),l));let a={value:"",icon_url:""};return n||(a=g.use(s)),n?t.jsx(Ri,{}):t.jsx(ad,{message:a.value})}function kp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:[t.jsx(e.code,{children:"use()"})," 是 React19 提升异步开发体验最重要的 hook。也是让 useEffect 重要性大幅度削弱的主要原因。"]}),`
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
`,t.jsx(z,{children:t.jsx(G8,{})}),`
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
`,t.jsx(z,{children:t.jsx(Y8,{})}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"2"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"在异步请求中使用"})}),`
`,t.jsx(e.p,{children:"通常，我们在处理异步请求时，也会结合 promise 来使用。但是我们并不能直接使用 use 来读取异步请求中的 promise，因为我们已经非常明确，use 只能读取有确定 resolve 结果的 promise 中的值。但是有可能第一时间异步请求包装的 promise 状态为 pending。因此在这种情况下，我们必须结合 Suspense 来使用。"}),`
`,t.jsx(e.p,{children:"当然，为了加强对 use 的理解，我们也准备了一个不顾任何风险提示，强行等 promise 请求完成之后使用 use 去读取它的值的案例。代码与演示效果如下。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`function Demo03() {
  let [loading, setLoading] = useState(true)

  const promise = getMessage().then(res => {
    setLoading(false)
    return res
  })

  let result = {value: '', icon_url: ''}
  if (!loading) {
    result = use(promise)
  }

  return loading ? <Skeleton /> : <Message message={result.value} />
}
`})}),`
`,t.jsx(z,{reload:!0,children:t.jsx(W8,{})}),`
`,t.jsx(e.p,{children:"点击按钮可以重新加载执行该组件。我们可以观察一下效果，在目前的 React 版本中，并不能合理的处理好这种存在风险的读取方式，虽然我们最终读取到了 promise 中的值，内容也顺利渲染出来了，但是中间存在一次明显的闪烁。表现为包括按钮在内的内容全部消失，这种体验非常的糟糕。"}),`
`,t.jsx(e.p,{children:"因此，在实践中，如果我们要读取异步请求的 promise 中的值，必须结合 Suspense 来处理。在右侧的案例中，我们列举了一个 use + Suspense 合理处理异步请求的案例，大家可以先暂时了解一下，在后续的章节中，我们详细学习了 Suspense 之后再来进行案例分析。"})]})}function P8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(kp,{...n})}):kp(n)}function I8(){const n=k1();return t.jsxs(t.Fragment,{children:[t.jsx(g.Suspense,{fallback:t.jsx(Ri,{}),children:t.jsx(eN,{promise:n})}),t.jsx("div",{className:"mt-8 text-center",children:t.jsx(w1,{signal:!0,children:"点击下方刷新按钮可重置演示"})})]})}const eN=n=>{const e=g.use(n.promise);return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e.value})]})]})},nN={"App.js":U8,"api.js":q8,"Button.jsx":H8,"Skeleton.jsx":V8};function tN(){return t.jsx(de,{files:nN,renderArticle:n=>t.jsx(P8,{components:{code:n}}),caseRender:t.jsx(I8,{})})}const sN=`import React, { useEffect, useState, Suspense, use } from 'react';
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
`,aN=`import {twMerge} from 'tailwind-merge'
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
`,lN=`const random = [
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
`,rN=`export default function Skeleton(props) {
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
`,_1=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},iN=()=>new Promise(n=>{n({value:"React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch."})});function cN(){const n=iN();return t.jsx(g.Suspense,{fallback:"",children:t.jsx(oN,{promise:n})})}function oN(n){const{value:e}=g.use(n.promise);return t.jsx(_1,{message:e})}document.documentElement.style.fontSize="14px";function uN(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:i,success:c,...o}=n,p=ln(ue("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}function ld(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const dN=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var C1=new Headers;C1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var mN={method:"GET",headers:C1,redirect:"follow",data:"hex"};const pN="https://echo.apifox.com/delay/1",E1=async()=>{await fetch(pN,mN);const n=Math.floor(Math.random()*10)%5;return{value:dN[n]}};function _p(){const n=E1();return t.jsx(g.Suspense,{fallback:t.jsx(ld,{}),children:t.jsx(fN,{promise:n})})}const fN=n=>{const e=g.use(n.promise);return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e.value})]})]})};function hN(){return t.jsx(g.Suspense,{fallback:t.jsx(ld,{}),children:t.jsx(_1,{message:"这是一个普通的 UI 组件，Skeleton 组件不会有任何渲染机会，直接渲染 Message 组件",title:"Primary"})})}function Cp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(cN,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(_p,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(hN,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(_p,{})}),`
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
`,t.jsx(e.p,{children:"这是我们之前版本的最佳实践。注意体会他们之间的区别。相似，但却不同。我们后续会列举更多案例，尽可能用新的开发思路去复现开发过程中会出现的场景。"})]})}function xN(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Cp,{...n})}):Cp(n)}function gN(){const[n,e]=g.useState({value:""}),[s,a]=g.useState(!0);return g.useEffect(()=>{E1().then(l=>{e(l),a(!1)})},[]),s?t.jsx(ld,{}):t.jsxs(t.Fragment,{children:[t.jsx(vN,{message:n.value}),t.jsx("div",{className:"mt-8 text-center",children:t.jsx(uN,{signal:!0,children:"点击下方刷新按钮可重置演示"})})]})}const vN=n=>{const e=n.message;return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"a new message!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},jN={"App.js":sN,"api.js":lN,"Button.jsx":aN,"Skeleton.jsx":rN};function bN(){return t.jsx(de,{files:jN,renderArticle:n=>t.jsx(xN,{components:{code:n}}),caseRender:t.jsx(gN,{})})}const yN=`import {use, useState, Suspense} from 'react'
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
`,NN=`import {twMerge} from 'tailwind-merge'
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
`,wN=`const random = [
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
`,SN=`export default function Skeleton(props) {
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
`,kN=`const Message = (props) => {
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
`,wl=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));let a="flex border border-blue-100 p-4 rounded-md shadow";return e?t.jsxs("div",{className:a,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]}):t.jsxs("div",{className:`${a} justify-center items-center flex-col text-gray-500`,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),t.jsx("div",{className:"mt-2",children:"no data."})]})};function rd(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function id(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:i,success:c,...o}=n,p=ln(ue("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const _N=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var A1=new Headers;A1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var CN={method:"GET",headers:A1,redirect:"follow",data:"hex"};const EN="https://echo.apifox.com/delay/1",cd=async()=>{await fetch(EN,CN);const n=Math.floor(Math.random()*10)%5;return{value:_N[n]}};function AN(){const[n,e]=g.useState(null);function s(){e(cd())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(id,{onClick:s,children:"更新数据"})}),t.jsx(g.Suspense,{fallback:t.jsx(rd,{}),children:t.jsx(RN,{promise:n})})]})}function RN(n){if(!n.promise)return t.jsx(wl,{message:""});const{value:e}=g.use(n.promise);return t.jsx(wl,{message:e})}function MN(){const[n,e]=g.useState(Promise.resolve({value:""}));function s(){e(cd())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(id,{onClick:s,children:"更新数据"})}),t.jsx(g.Suspense,{fallback:t.jsx(rd,{}),children:t.jsx(TN,{promise:n})})]})}function TN(n){const{value:e}=g.use(n.promise);return t.jsx(wl,{message:e})}function Ep(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"接下来，我们将会以大量的实践案例来展开 React 19 新 hook 的运用。"}),`
`,t.jsxs(e.p,{children:["本文模拟的实践案例为",t.jsx(e.strong,{children:"点击按钮更新数据"}),"。这在开发中是一个非常常见的场景。"]}),`
`,t.jsx(e.p,{children:"案例完成之后的最终演示效果图如下。案例的视觉表现为：初始化时没有请求，所以组件显示为空数据样式。当我们点击按钮时请求一条数据，数据更新，请求成功之后显示更新之后的内容。"}),`
`,t.jsx(z,{reload:!0,children:t.jsx(AN,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(MN,{})}),`
`,t.jsx(e.p,{children:"这种写法有一个很小的瑕疵，就是在初始化时，也不可避免的显示了 Skeleton 组件，实际上是不需要的。因此具体采用哪种写法，要依据实践中的需求而定。"})]})}function $N(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Ep,{...n})}):Ep(n)}function LN(){const[n,e]=g.useState(null);function s(){e(cd())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(id,{onClick:s,children:"更新数据"})}),t.jsx(g.Suspense,{fallback:t.jsx(rd,{}),children:t.jsx(DN,{promise:n})})]})}function DN(n){if(!n.promise)return t.jsx(wl,{message:""});const{value:e}=g.use(n.promise);return t.jsx(wl,{message:e})}const BN={"App.js":yN,"api.js":wN,"Message.jsx":kN,"Button.jsx":NN,"Skeleton.jsx":SN};function ON(){return t.jsx(de,{files:BN,renderArticle:n=>t.jsx($N,{components:{code:n}}),caseRender:t.jsx(LN,{})})}const zN=`import {use, useState, Suspense} from 'react'
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
`,UN=`import {twMerge} from 'tailwind-merge'
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
`,HN=`const random = [
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
`,qN=`export default function Skeleton(props) {
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
`,VN=`const Message = (props) => {
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
`,od=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));let a="flex border border-blue-100 p-4 rounded-md shadow";return e?t.jsxs("div",{className:a,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]}):t.jsxs("div",{className:`${a} justify-center items-center flex-col text-gray-500`,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),t.jsx("div",{className:"mt-2",children:"no data."})]})};function ud(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function dd(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:i,success:c,...o}=n,p=ln(ue("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const XN=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var R1=new Headers;R1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var GN={method:"GET",headers:R1,redirect:"follow",data:"hex"};const ZN="https://echo.apifox.com/delay/1",ra=async()=>{await fetch(ZN,GN);const n=Math.floor(Math.random()*10)%5;return{value:XN[n]}};function YN(){const[n,e]=g.useState({value:""}),[s,a]=g.useState(!0);g.useEffect(()=>{ra().then(r=>{e(r),a(!1)})},[]);function l(){a(!0),ra().then(r=>{e(r),a(!1)})}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(dd,{onClick:l,children:"更新数据"})}),s?t.jsx(ud,{}):t.jsx(od,{message:n.value})]})}function QN(){const[n,e]=g.useState(ra());function s(){e(ra())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(dd,{onClick:s,children:"更新数据"})}),t.jsx(g.Suspense,{fallback:t.jsx(ud,{}),children:t.jsx(FN,{promise:n})})]})}function FN(n){const{value:e}=g.use(n.promise);return t.jsx(od,{message:e})}function Ap(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:["在上一章的基础之上，我们做一个小的需求变动。上一章的案例要求我们不要初始化时请求一条数据，因此，默认渲染结果是 ",t.jsx(e.code,{children:"no data"})]}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(YN,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(QN,{})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"非常的方便省事。"})}),`
`,t.jsxs(e.p,{children:["最后需要注意的是一个小的细节，如果不考虑 Compiler 编译之后的代码去缓存初始化时的 ",t.jsx(e.code,{children:"getMessage()"}),"，那么每次更新组件时，该方法都会执行一次，因此，会导致冗余的接口请求。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"使用 Compiler 编译之后，这段代码会被缓存下来而不会重复执行"}),`
`]}),`
`,t.jsx(e.p,{children:"因此，最好的方式是进一步调整一下，利用 useState 的初始化机制修改如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-diff",children:`- const [promise, update] = useState(getMessage())
+ const [promise, update] = useState(getMessage)
`})}),`
`,t.jsx(e.p,{children:"这样，即使不用 Compiler 编译缓存，也不会出现冗余请求的情况。完整的代码和演示案例请在右侧模块中查看。"})]})}function JN(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Ap,{...n})}):Ap(n)}function WN(){const[n,e]=g.useState(ra);function s(){e(ra())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(dd,{onClick:s,children:"更新数据"})}),t.jsx(g.Suspense,{fallback:t.jsx(ud,{}),children:t.jsx(KN,{promise:n})})]})}function KN(n){const{value:e}=g.use(n.promise);return t.jsx(od,{message:e})}const PN={"App.js":zN,"api.js":HN,"Message.jsx":VN,"Button.jsx":UN,"Skeleton.jsx":qN};function IN(){return t.jsx(de,{files:PN,renderArticle:n=>t.jsx(JN,{components:{code:n}}),caseRender:t.jsx(WN,{})})}const e9=`import {use, useState, Suspense, useEffect} from 'react'
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
`,n9=`import {twMerge} from 'tailwind-merge'
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
`,t9=`const random = [
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
`,s9=`export default function Skeleton(props) {
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
`,a9=`const Userinfo = (props) => {
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
`,M1=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.username||"").replace(/\\u/gi,"%u")),a=n.index||0;return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md my-4 items-start",children:[t.jsx("img",{className:"w-10",src:`https://api.dicebear.com/7.x/miniavs/svg?seed=${a}`,alt:""}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"no name"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})};function T1(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function $1(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:i,success:c,...o}=n,p=ln(ue("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const l9=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var L1=new Headers;L1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var r9={method:"GET",headers:L1,redirect:"follow",data:"hex"};const i9="https://echo.apifox.com/delay/1",si=async()=>{await fetch(i9,r9);const n=Math.floor(Math.random()*10)%5;return{value:l9[n],id:c9()}};function c9(){for(var n=[],e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=0;s<16;s++)n[s]=e.substr(Math.floor(Math.random()*16),1);return n[8]="-",n.join("")}function o9(){const[n,e]=g.useState([]);g.useEffect(()=>{e([...n,{type:"loading"}]),si().then(a=>{e([...n,a])})},[]);function s(){e([...n,{type:"loading"}]),si().then(a=>{e([...n,a])})}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx($1,{onClick:s,children:"新增数据"})}),t.jsx(u9,{list:n})]})}function u9(n){const e=n.list;return t.jsx(t.Fragment,{children:e.map((s,a)=>s.type==="loading"?t.jsx(T1,{},`hello ${a}`):t.jsx(M1,{index:a,username:s.id,message:s.value},`h${a}`))})}function Rp(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"这一章我们要学习的是一个新增加载项到列表的案例。首先我们会通过接口获取到一条数据，然后将该数据渲染到列表中。你可以先通过右侧预览查看最终演示效果。"}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(o9,{})}),`
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
`,t.jsx(e.p,{children:"希望大家能够通过这个案例，进一步感受到新的开发思维的强大之处。"})]})}function d9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Rp,{...n})}):Rp(n)}function m9(){const[n,e]=g.useState(()=>[si()]);function s(){e([...n,si()])}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx($1,{onClick:s,children:"新增数据"})}),n.map((a,l)=>t.jsx(g.Suspense,{fallback:t.jsx(T1,{}),children:t.jsx(p9,{promise:a,index:l})},`hello ${l}`))]})}function p9(n){const e=g.use(n.promise);return t.jsx(M1,{index:n.index,username:e.id,message:e.value})}const f9={"App.js":e9,"api.js":t9,"Userinfo.jsx":a9,"Button.jsx":n9,"Skeleton.jsx":s9};function h9(){return t.jsx(de,{files:f9,renderArticle:n=>t.jsx(d9,{components:{code:n}}),caseRender:t.jsx(m9,{})})}const x9=`import { useState, Suspense } from 'react';
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
`,g9=`import {twMerge} from 'tailwind-merge'
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
`,v9=`const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}
`,j9=`// header
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
`,b9=`import { use } from 'react';
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
`;function Mp(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"我们可以在思维上将上一节课的解决方案扩展到分页列表中，加载更多的场景。"}),`
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
`]})]})}function y9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Mp,{...n})}):Mp(n)}function N9({promise:n}){const{results:e}=g.use(n);return t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border-b py-4 mx-4 items-center border-dashed",children:[t.jsx("img",{className:"w-14 h-14 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 repo, a design language for background applications"})]})]},s.name.last))})}document.documentElement.style.fontSize="14px";function w9(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:i,success:c,...o}=n,p=ln(ue("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}function S9(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})})}const k9=3,_9=`https://randomuser.me/api/?results=${k9}&inc=name,gender,email,nat,picture&noinfo`,Tp=async()=>(await fetch(_9)).json(),C9=()=>{const[n,e]=g.useState(()=>[Tp()]),s=()=>{e([...n,Tp()])};return t.jsxs(t.Fragment,{children:[n.map((a,l)=>t.jsx(g.Suspense,{fallback:t.jsx(S9,{}),children:t.jsx(N9,{promise:a})},`hello ${l}`)),t.jsx("div",{className:"text-center my-4",children:t.jsx(w9,{onClick:s,children:"loading more"})})]})},E9={"App.js":x9,"api.js":v9,"List.jsx":b9,"Button.jsx":g9,"Skeleton.jsx":j9};function A9(){return t.jsx(de,{files:E9,renderArticle:n=>t.jsx(y9,{components:{code:n}}),caseRender:t.jsx(C9,{})})}const R9=`import {useState, Suspense} from 'react'
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
`,M9=`export const fetchList = async (number) => {
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
`,T9=`document.documentElement.style.fontSize = '14px'

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
`,$9=`import { use } from 'react';
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
`,L9=`export default function Input(props) {
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
`;document.documentElement.style.fontSize="14px";function D9(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const $p=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json();function B9({promise:n}){const{results:e}=g.use(n);return console.log("我会执行几次呢"),t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}function O9(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function z9(){const[n,e]=g.useState(()=>$p(5));function s(a){const l=a.target.value.length%10;e($p(l))}return t.jsxs("div",{children:[t.jsx(O9,{onChange:s,placeholder:"Enter something"}),t.jsx(g.Suspense,{fallback:t.jsx(D9,{}),children:t.jsx(B9,{promise:n})})]})}function Lp(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(z,{children:t.jsx(z9,{})}),`
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
`,t.jsx(e.p,{children:"其他的逻辑基本保持不变，完整代码和演示效果请在右侧区域查看。请务必结合调试工具中的网络请求一起观察演示效果。"})]})}function U9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Lp,{...n})}):Lp(n)}const H9={"App.js":R9,"api.js":M9,"List.jsx":$9,"Input.jsx":L9,"Skeleton.jsx":T9};function q9(){return t.jsx(de,{files:H9,renderArticle:n=>t.jsx(U9,{components:{code:n}})})}const V9=`import {useState, Suspense} from 'react'
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
`,X9=`export const fetchList = async (number) => {
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
`,G9=`document.documentElement.style.fontSize = '14px'

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
`,Z9=`import { use } from 'react';
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
`,Y9=`function classNames(...classes) {
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
`;function Q9(...n){return n.filter(Boolean).join(" ")}function D1({tabs:n,onSwitch:e}){return t.jsxs("div",{children:[t.jsxs("div",{className:"hidden",children:[t.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),t.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:n.find(s=>s.current).name,onChange:s=>e(s.target.selectedIndex),children:n.map(s=>t.jsx("option",{children:s.name},s.name))})]}),t.jsx("div",{className:"block",children:t.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:n.map((s,a)=>t.jsx("a",{href:s.href,className:Q9(s.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":s.current?"page":void 0,onClick:l=>{l.preventDefault(),e(a)},children:s.name},s.name))})})]})}const ur=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function F9(){const[n,e]=g.useState(0);function s(a){ur[n].current=!1,ur[a].current=!0,e(a)}return t.jsxs("div",{children:[t.jsx(D1,{tabs:ur,onSwitch:s}),t.jsxs("div",{className:"mt-4 text-gray-500",children:["当前选中：",ur[n].name]})]})}function Dp(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"Tab 切换的过程中，请求接口也是日常开发中非常常见的交互方式。不过 tabs 切换的情况比较多，很考验开发者的个人能力。我们准备了三个不同的场景以供大家直接学习。"}),`
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
`,t.jsx(z,{children:t.jsx(F9,{})}),`
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
`,t.jsx(e.p,{children:"这里我们依然需要取消上一次请求是因为可能有的使用者会连续快速切换，我们可以通过取消为完成请求的方式让页面响应变得合理与流畅。完整的案例请看右侧区域。"})]})}function J9(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Dp,{...n})}):Dp(n)}document.documentElement.style.fontSize="14px";function W9(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Bp=n=>{let e=new AbortController,s=e.signal;const a=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(r=>{l(r.json())}).catch(()=>{console.log("接口成功取消！")})});return a.cancel=()=>{e&&e.abort()},a};function K9({promise:n}){const{results:e}=g.use(n);return console.log("我会执行几次呢"),t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}const Sc=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function P9(){const[n,e]=g.useState(0),[s,a]=g.useState(()=>Bp(5));function l(r){Sc[n].current=!1,Sc[r].current=!0,e(r),s.cancel();const i=Math.floor(Math.random()*10);a(Bp(i))}return t.jsxs("div",{children:[t.jsx(D1,{tabs:Sc,onSwitch:l}),t.jsx(g.Suspense,{fallback:t.jsx(W9,{}),children:t.jsx(K9,{promise:s})})]})}const I9={"App.js":V9,"api.js":X9,"List.jsx":Z9,"Tabs.jsx":Y9,"Skeleton.jsx":G9};function ew(){return t.jsx(de,{files:I9,renderArticle:n=>t.jsx(J9,{components:{code:n}}),caseRender:t.jsx(P9,{})})}const nw=`import {useState, Suspense, useRef} from 'react'
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
`,tw=`export const fetchListWithCancel = (number) => {
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
`,sw=`document.documentElement.style.fontSize = '14px'

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
`,aw=`import { use } from 'react';
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
`,lw=`export default function Input(props) {
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
`,rw=`import clsx from 'clsx'
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
`,iw=`import clsx from 'clsx'
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
`,cw=`function classNames(...classes) {
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
`;function ow(...n){return n.filter(Boolean).join(" ")}function uw({tabs:n,onSwitch:e}){return t.jsxs("div",{children:[t.jsxs("div",{className:"hidden",children:[t.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),t.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:n.find(s=>s.current).name,onChange:s=>e(s.target.selectedIndex),children:n.map(s=>t.jsx("option",{children:s.name},s.name))})]}),t.jsx("div",{className:"block",children:t.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:n.map((s,a)=>t.jsx("a",{href:s.href,className:ow(s.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":s.current?"page":void 0,onClick:()=>e(a),children:s.name},s.name))})})]})}document.documentElement.style.fontSize="14px";function B1(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Ro=n=>{let e=new AbortController,s=e.signal;const a=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(r=>{l(r.json())}).catch(()=>{console.log("接口成功取消！")})});return a.cancel=()=>{e&&e.abort()},a};function O1({promise:n}){const{results:e}=g.use(n);return t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}function kc(n){const[e,s]=g.useState(()=>Ro(5)),a=ue({hidden:!n.selected});return t.jsx("div",{className:a,children:t.jsx(g.Suspense,{fallback:t.jsx(B1,{}),children:t.jsx(O1,{promise:e})})})}function dw(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function mw(n){const[e,s]=g.useState(()=>Ro(10));function a(r){e.cancel();const i=r.target.value.length%10;s(Ro(i))}const l=ue("pt-4",{hidden:!n.selected});return t.jsxs("div",{className:l,children:[t.jsx(dw,{onChange:a,placeholder:"Enter something"}),t.jsx(g.Suspense,{fallback:t.jsx(B1,{}),children:t.jsx(O1,{promise:e})})]})}function pw(){const[n,e]=g.useState(0),s=g.useRef([{name:"My Account",href:"#",current:!0,element:kc},{name:"Company",href:"#",current:!1,element:kc},{name:"Team Members",href:"#",current:!1,element:kc},{name:"Billing",href:"#",current:!1,element:mw}]),a=g.useRef(new Set([s.current[n]]));function l(i){s.current[n].current=!1,s.current[i].current=!0;const c=s.current[i];a.current.has(c)||a.current.add(c),e(i)}let r=Array.from(a.current);return t.jsxs("div",{children:[t.jsx(uw,{tabs:s.current,onSwitch:l}),r.map((i,c)=>t.jsx(i.element,{selected:i.current},`z-${c}`))]})}function Op(n){const e={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(z,{reload:!0,children:t.jsx(pw,{})}),`
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
`,t.jsx(e.p,{children:"完整代码与案例演示请看右侧区域。"})]})}function fw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Op,{...n})}):Op(n)}const hw={"App.js":nw,"Account.jsx":rw,"Search.jsx":iw,"api.js":tw,"Tabs.jsx":cw,"List.jsx":aw,"Input.jsx":lw,"Skeleton.jsx":sw};function xw(){return t.jsx(de,{files:hw,renderArticle:n=>t.jsx(fw,{components:{code:n}})})}const gw=`import {useState, Suspense, useCallback} from 'react'
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
`,vw=`export const fetchList = async (number) => {
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

`,jw=`document.documentElement.style.fontSize = '14px'

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
`,bw=`import { use, useEffect } from 'react';

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
`,yw=`function classNames(...classes) {
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
`;document.documentElement.style.fontSize="14px";function Nw(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const zp=n=>{let e=new AbortController,s=e.signal;const a=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(r=>{localStorage.setItem("modal","xxx"),l(r.json())}).catch(()=>{console.log("接口成功取消！")})});return a.cancel=()=>{e&&e.abort()},a};function Up(...n){return n.filter(Boolean).join(" ")}function ww({tabs:n,onSwitch:e}){return t.jsx("div",{children:t.jsx("div",{className:"border-b border-gray-200",children:t.jsx("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:n.map((s,a)=>t.jsxs("a",{href:"#",onClick:()=>e(a),className:Up(s.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700","flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"),"aria-current":s.current?"page":void 0,children:[s.name,s.count?t.jsx("span",{className:Up(s.current?"bg-indigo-100 text-indigo-600":"bg-gray-100 text-gray-900","ml-3 rounded-full px-2.5 py-0.5 text-xs font-medium inline-block"),children:s.count}):null]},s.name))})})})}function Sw({promise:n,onComplete:e}){const{results:s}=g.use(n);return g.useEffect(()=>{e&&e(s.length)},[s.length]),t.jsx("div",{children:s.map((a,l)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:a.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:a.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${l}`))})}const kw=[{name:"Applied",href:"#",count:0,current:!0},{name:"Phone Screening",href:"#",count:0,current:!1},{name:"Interview",href:"#",count:0,current:!1},{name:"Offer",href:"#",count:0,current:!1},{name:"Disqualified",href:"#",count:0,current:!1}];function _w(){const[n,e]=g.useState(0),[s,a]=g.useState(()=>zp(5)),[l,r]=g.useState(kw);function i(o){l.forEach(d=>{d.current=!1}),l[o].current=!0,e(o),r([...l]),s.cancel();const u=Math.floor(Math.random()*10);a(zp(u))}function c(o){l[n].count=o,r([...l])}return t.jsxs("div",{children:[t.jsx(ww,{tabs:l,onSwitch:i}),t.jsx(g.Suspense,{fallback:t.jsx(Nw,{}),children:t.jsx(Sw,{promise:s,onComplete:c})})]})}function Hp(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(z,{reload:!0,children:t.jsx(_w,{})}),`
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
`,t.jsx(e.p,{children:"完整代码与案例演示查看右侧区域。"})]})}function Cw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Hp,{...n})}):Hp(n)}const Ew={"App.js":gw,"api.js":vw,"List.jsx":bw,"Tabs.jsx":yw,"Skeleton.jsx":jw};function Aw(){return t.jsx(de,{files:Ew,renderArticle:n=>t.jsx(Cw,{components:{code:n}})})}const Rw=`import {use, useState, Suspense} from 'react'
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
`,Mw=`export const fetchList = async (number) => {
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
`,Tw=`document.documentElement.style.fontSize = '14px'

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
`,$w=`import { use } from 'react';
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
`;document.documentElement.style.fontSize="14px";function z1(n){return n.type==="card"?t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsx("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3].map((e,s)=>t.jsxs("div",{className:"flex-1",children:[t.jsx("div",{className:"rounded-md bg-slate-200  h-32"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"grid grid-cols-4 gap-4 mt-2",children:t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-3"})})]},`z-${s}`))})}):n.type==="header"?t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})}):t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const U1=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json();function Lw({promise:n}){const{results:e}=g.use(n);return t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}function Dw(){const[n,e]=g.useState(()=>U1(3));return t.jsx("div",{children:t.jsx(g.Suspense,{fallback:t.jsx(z1,{type:"card"}),children:t.jsx(Bw,{promise:n})})})}function Bw(n){const{results:e}=g.use(n.promise),[s,a]=g.useState(()=>U1(5));return t.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[t.jsx("div",{className:"flex space-x-4",children:e.map((l,r)=>t.jsxs("div",{className:"flex-1 overflow-hidden",children:[t.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${l.picture.large})`}}),t.jsx("div",{className:"mt-4 font-bold",children:l.name.last}),t.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:l.email})]},`z-${r}`))}),t.jsx("div",{className:"mt-8 text-gray-400 text-sm",children:"Account users"}),t.jsx(g.Suspense,{fallback:t.jsx(z1,{}),children:t.jsx(Lw,{promise:s})})]})}function Ow(){return t.jsx("div",{children:t.jsx(Dw,{})})}function qp(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(z,{reload:!0,children:t.jsx(Ow,{})}),`
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
`,t.jsx(e.p,{children:"完整的代码和案例演示看右侧区域。"})]})}function zw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(qp,{...n})}):qp(n)}const Uw={"App.js":Rw,"api.js":Mw,"List.jsx":$w,"Skeleton.jsx":Tw};function Hw(){return t.jsx(de,{files:Uw,renderArticle:n=>t.jsx(zw,{components:{code:n}})})}const qw=`import React, {useState, Suspense} from 'react'
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
`,Vw=`import React from 'react';
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
`,Xw=`const random = [
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
`,Gw=`import React from 'react';
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
`,Zw=`import React from 'react'

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
`,Yw=`import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
`,Qw=`export default function use(promise) {
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
`;function Vp(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"可以看到，use + Suspense 的结合，可以极大的简化我们的开发代码，在开发体验上的提升是非常明显的。但是，如果由于客观原因，我们的项目无法升级到 React 19，那么我们就无法享受这种开发体验带来的提升了吗？"}),`
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
`,t.jsxs(e.p,{children:["在右侧代码中，我提供了一个完整的案例来使用 use，右侧案例的 React 运行版本是 ",t.jsx(e.code,{children:"react@16.14.0"})]})]})}function Fw(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Vp,{...n})}):Vp(n)}document.documentElement.style.fontSize="14px";var Jw=new Headers;Jw.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");const Ww={"App.js":qw,"index.js":Yw,"api.js":Xw,"use.js":Qw,"Userinfo.jsx":Zw,"Button.jsx":Vw,"Skeleton.jsx":Gw};function Kw(){return t.jsx(de,{files:Ww,renderArticle:n=>t.jsx(Fw,{components:{code:n}})})}const Pw=`import { useRef } from 'react';
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

`,Iw=`import { useRef, useImperativeHandle } from 'react';
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
`,eS=`import clsx from 'clsx'
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
`;function nS(){const n=g.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx("input",{ref:n,type:"text",className:"border p-2 rounded-md flex-1"}),t.jsx("button",{onClick:()=>n.current.focus(),className:"ml-3",children:"点击获取焦"})]})}function md(n){const{ref:e,className:s,...a}=n,r=ue("flex items-center border px-2 rounded-md text-gray-500",s);return t.jsxs("div",{className:ln(r),children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{ref:e,className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...a})]})}function tS(){const n=g.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx(md,{ref:n,type:"text",className:"flex-1"}),t.jsx("button",{onClick:()=>n.current.focus(),className:"ml-3",children:"点击获取焦"})]})}function sS(){const n=g.useRef(null);function e(){n.current.scrollAndFocusAddComment()}return t.jsxs(t.Fragment,{children:[t.jsx(me,{onClick:e,primary:!0,children:"Write a comment"}),t.jsx(aS,{ref:n})]})}const aS=({ref:n})=>{const e=g.useRef(null),s=g.useRef(null);return g.useImperativeHandle(n,()=>({scrollAndFocusAddComment(){e.current.scrollToBottom(),s.current.focus()}}),[]),t.jsxs(t.Fragment,{children:[t.jsx("article",{children:t.jsx("p",{children:"Welcome to my Blog!"})}),t.jsx(lS,{ref:e}),t.jsx(rS,{ref:s})]})},lS=({ref:n})=>{const e=g.useRef(null);g.useImperativeHandle(n,()=>({scrollToBottom(){const a=e.current;a.scrollTop=a.scrollHeight}}),[]);let s=[];for(let a=0;a<50;a++)s.push(t.jsxs("p",{children:["Comment #",a]},a));return t.jsx("div",{className:"border p-4 rounded h-32 overflow-y-auto",ref:e,children:s})};function rS(n){return t.jsx(md,{placeholder:"Add comment...",ref:n.ref,className:"mt-4"})}function Xp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(nS,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(tS,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(sS,{})})]})}function iS(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Xp,{...n})}):Xp(n)}function cS({ref:n}){const e=g.useRef(null),s=g.useRef(null);return g.useImperativeHandle(n,()=>({scrollAndFocusAddComment(){e.current.scrollToBottom(),s.current.focus()}}),[]),t.jsxs(t.Fragment,{children:[t.jsx("article",{children:t.jsx("p",{className:"my-5",children:"Welcome to my Blog!"})}),t.jsx(oS,{ref:e}),t.jsx(uS,{ref:s})]})}const oS=({ref:n})=>{const e=g.useRef(null);g.useImperativeHandle(n,()=>({scrollToBottom(){const a=e.current;a.scrollTop=a.scrollHeight}}),[]);let s=[];for(let a=0;a<50;a++)s.push(t.jsxs("p",{children:["Comment #",a]},a));return t.jsx("div",{className:"border p-4 rounded h-32 overflow-y-auto",ref:e,children:s})};function uS(n){return t.jsx(md,{placeholder:"Add comment...",ref:n.ref,className:"mt-4"})}function dS(){const n=g.useRef(null);function e(){n.current.scrollAndFocusAddComment()}return t.jsxs(t.Fragment,{children:[t.jsx(me,{onClick:e,primary:!0,children:"Write a comment"}),t.jsx(cS,{ref:n})]})}const mS={"App.js":Pw,"Post.jsx":Iw,"Button.jsx":Ll,"Input.jsx":eS};function pS(){return t.jsx(de,{files:mS,renderArticle:n=>t.jsx(iS,{components:{code:n}}),caseRender:t.jsx(dS,{})})}const fS=`import { useRef } from 'react'
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
`,hS=`import { useEffect, useRef, useState, useImperativeHandle } from 'react';
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
`,xS=`import { useState, useImperativeHandle} from "react";
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
`;function gS(){const n=g.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"点击弹窗显示"}),t.jsx(ki,{ref:n,children:t.jsx("div",{className:"bg-white p-4 max-w-xl mt-48 mx-auto rounded",children:"这是一个小弹窗"})})]})}function Gp(){const n=g.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"点击我，显示对话框组件"}),t.jsxs(va,{ref:n,title:"Message For You",onSure:()=>n.current.close(),children:[t.jsx("strong",{className:"text-red-500",children:"React 19"})," 是全网学习体验最好的小册，没有之一。它能帮助你快速领悟到 React 的独特的开发魅力，你将会感受到更快的学习速度，更高效的开发速度，更专业的开发思维。",t.jsx("div",{className:"mt-4",children:t.jsx("img",{src:"https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""})})]})]})}function Zp(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(z,{children:t.jsx(Gp,{})}),`
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
`,t.jsx(z,{children:t.jsx(gS,{})}),`
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
`,t.jsx(z,{children:t.jsx(Gp,{})}),`
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
`,t.jsxs(e.p,{children:["最终的代码请看右侧案例中的 ",t.jsx(e.code,{children:"Dialog.jsx"})]})]})}function vS(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Zp,{...n})}):Zp(n)}const jS={"App.js":fS,"Dialog.jsx":hS,"Modal.jsx":xS};function bS(){return t.jsx(de,{files:jS,hidePreview:!0,renderArticle:n=>t.jsx(vS,{components:{code:n}})})}const yS=`import Provider from './context'
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
`,NS=`import {createContext, useState} from 'react'

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
`,wS=`import { useRef, use } from 'react'
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
`,SS=`import { use } from 'react'
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
`,kS={task:"TASK-8878",content:"Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",status:"Progress",priority:"Medium"},pd=g.createContext({});function _S({children:n}){const[e,s]=g.useState(kS);return t.jsx(pd,{value:{task:e,updateTask:s},children:n})}function CS(n){const{ref:e,...s}=n,{task:a,updateTask:l}=g.use(pd);function r(i){l({...a,content:i.target.value})}return t.jsxs(va,{ref:e,...s,onSure:()=>e.current.close(),children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-20",children:"name"}),t.jsx("div",{className:"flex-1 p-2 text-sm font-bold",children:a.task})]}),t.jsxs("div",{className:"flex items-center mt-4",children:[t.jsx("div",{className:"w-20",children:"content"}),t.jsx("input",{value:a.content,className:"flex-1 border rounded-md p-2 text-sm",onChange:r})]}),t.jsxs("div",{className:"flex items-center mt-4",children:[t.jsx("div",{className:"w-20",children:"status"}),t.jsx("div",{className:"flex-1 p-2 text-sm text-green-500",children:a.status})]}),t.jsxs("div",{className:"flex items-center mt-4",children:[t.jsx("div",{className:"w-20",children:"Priority"}),t.jsx("div",{className:"flex-1 p-2 text-sm text-red-500",children:a.priority})]})]})}function ES(){const n=g.useRef(null),{task:e}=g.use(pd);return t.jsxs("div",{className:"flex items-center border-t pt-4",children:[t.jsx("div",{className:"font-bold",children:e.task}),t.jsx("div",{className:"flex-1 mx-3 line-clamp-1",children:e.content}),t.jsx("div",{className:"text-green-500",children:e.status}),t.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"edit"}),t.jsx(CS,{ref:n,title:"Editor"})]})}function Yp(){return t.jsxs(_S,{children:[t.jsx("h3",{className:"font-bold",children:"Your Task"}),t.jsx("p",{className:"!text-gray-400",children:"Here's a task for you!"}),t.jsx(ES,{})]})}function Qp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(z,{children:t.jsx(Yp,{})}),`
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
`,t.jsx(z,{children:t.jsx(Yp,{})}),`
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
`,t.jsxs(e.p,{children:["这里比较有意思的一个地方是在 ",t.jsx(e.code,{children:"editor.jsx"})," 文件中，对于 ref 的使用和处理，大家可以留心观察一下。"]})]})}function AS(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Qp,{...n})}):Qp(n)}const RS={"App.js":yS,"context.jsx":NS,"task.jsx":wS,"editor.jsx":SS};function MS(){return t.jsx(de,{files:RS,hidePreview:!0,renderArticle:n=>t.jsx(AS,{components:{code:n}})})}const TS=`import Provider from './context'
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
`,$S=`import {createContext, useState} from 'react'

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
`,LS=`import {use, useState} from 'react'
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
`,DS=`import {use, useState} from 'react'
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
`,BS=`@layer context_count {
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
`,fd=g.createContext({});function OS({children:n}){const[e,s]=g.useState(0),a={count:e,incrementer:s};return t.jsx(fd,{value:a,children:n})}function zS(){const{count:n}=g.use(fd);return t.jsxs("div",{children:[t.jsx("h3",{className:"font-bold",children:"Total Switch Count"}),t.jsxs("p",{className:"!text-gray-400",children:["这里统计的是所有组件的切换次数: ",n]})]})}function US(n){const{value:e=!1,onChange:s}=n,[a,l]=g.useState(e),r=a?"switch right":"switch left";function i(c){l(c),s&&s(c)}return t.jsx("div",{className:r,onClick:()=>i(!a),children:t.jsx("div",{className:"circle"})})}function _c(){const{count:n,incrementer:e}=g.use(fd),[s,a]=g.useState("theme-light"),[l,r]=g.useState(0);function i(c){a(c?"theme-dark":"theme-light"),r(l+1),e(n+1)}return t.jsxs("div",{className:s,children:[t.jsxs("div",{className:"context-card p-4 rounded transition",children:[t.jsx("div",{className:"title font-bold",children:"Canary"}),t.jsx("div",{className:"mt-4",children:"The useActionState Hook is currently only available in React’s Canary and experimental channels. Learn more about release channels here. "})]}),t.jsxs("div",{className:"flex justify-between py-4 items-center",children:[t.jsxs("div",{className:"mr-4 text-green-500",children:["当前组件切换次数: ",l]}),t.jsx(US,{onChange:i})]})]})}function Fp(){return t.jsxs(OS,{children:[t.jsx(zS,{}),t.jsx(_c,{}),t.jsx(_c,{}),t.jsx(_c,{})]})}function Jp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(z,{reload:!0,children:t.jsx(Fp,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(Fp,{})}),`
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
`})})]})}function HS(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Jp,{...n})}):Jp(n)}const qS={"App.js":TS,"context.jsx":$S,"Total.jsx":LS,"Card.jsx":DS,"skin.css":BS};function VS(){return t.jsx(de,{files:qS,hidePreview:!0,renderArticle:n=>t.jsx(HS,{components:{code:n}})})}const XS=`import {useState, Suspense, useDeferredValue} from 'react'
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
`,GS=`export const fetchList = async (number) => {
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
`,ZS=`document.documentElement.style.fontSize = '14px'

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
`,QS=`export default function Input(props) {
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
`,H1=`import {useState, useEffect} from 'react'
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
`,q1=`.spin {
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
`;function hd(n){const{loading:e,type:s="icon"}=n,[a,l]=g.useState(!1),[r,i]=g.useState(!1);g.useEffect(()=>{e?(l(!0),i(!0)):l(!1)},[e]);const o=ue("spin flex items-center justify-center top-0 bg-white bg-opacity-50",{in:a,out:!a});function u(){a||i(!1)}return t.jsxs("div",{className:"relative",children:[n.children,r?t.jsx("div",{className:o,onAnimationEnd:u,children:s==="icon"&&t.jsx("svg",{className:"animate-spin",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"24",height:"24",children:t.jsx("path",{d:"M249.836 210.77c5.558-3.827 10.73-7.527 15.812-10.695 4.967-3.314 9.807-6.121 14.208-8.785 2.18-1.362 4.374-2.515 6.425-3.673l5.873-3.281c0.945-0.551 1.789-0.953 2.625-1.377l2.425-1.226 4.381-2.233 1.954-1.004 2.219-1.093 3.918-1.924 7.184-3.527c2.883-1.44 5.996-3.272 8.694-5.22 26.969-19.458 33.057-57.094 13.599-84.063-19.458-26.968-57.094-33.057-84.063-13.599l-6.49 4.682-3.54 2.554-2.071 1.499-2.62 1.947-5.824 4.351a7267.87 7267.87 0 0 0-3.193 2.399c-1.091 0.824-2.25 1.676-3.282 2.533a33346.62 33346.62 0 0 1-6.735 5.441c-2.343 1.915-4.833 3.859-7.308 6.046-4.991 4.313-10.423 8.905-15.952 14.121-5.645 5.071-11.353 10.792-17.394 16.739-5.886 6.125-12.079 12.515-18.185 19.505-12.303 13.875-24.827 29.53-36.839 46.835a494.61 494.61 0 0 0-33.896 56.497 491.342 491.342 0 0 0-27.329 64.159c-1.02 2.77-1.888 5.605-2.789 8.428l-2.688 8.477c-1.692 5.691-3.266 11.429-4.857 17.152l-2.135 8.669c-0.683 2.896-1.479 5.756-2.051 8.682l-1.84 8.729-0.914 4.358-0.785 4.387a479.254 479.254 0 0 0-7.583 69.967c-0.302 5.759-0.239 11.514-0.279 17.214l-0.017 4.267c-0.001 1.42 0.069 2.841 0.101 4.257l0.25 8.464 0.127 4.204 0.264 4.188 0.531 8.317 0.278 4.451 0.399 3.933 0.792 7.821c0.14 1.313 0.244 2.561 0.412 3.918l0.527 4.098 1.056 8.115c0.185 1.337 0.33 2.695 0.549 4.002l0.648 3.91 1.289 7.744c1.825 10.246 3.911 20.188 6.263 29.766a463.195 463.195 0 0 0 16.342 52.81l2.255 5.904 1.108 2.899 1.186 2.836 4.611 10.976c3.247 7.033 6.19 13.723 9.353 19.831 6.048 12.328 12.043 22.661 17.007 31.096 5.121 8.359 9.212 14.84 12.197 19.141l4.472 6.638-3.293-7.292c-2.209-4.713-5.148-11.776-8.748-20.761-3.443-9.059-7.545-20.055-11.346-32.919-2.041-6.376-3.771-13.301-5.726-20.516l-2.612-11.204-0.667-2.878-0.583-2.935-1.183-5.957c-3.105-16.055-5.568-33.549-6.889-52.052-0.668-9.251-1.027-18.753-1.1-28.437l0.03-7.3 0.014-3.67c0.002-1.227 0.084-2.416 0.122-3.629l0.284-7.263 0.139-3.644c0.053-1.229 0.166-2.577 0.247-3.863a35704.717 35704.717 0 0 1 0.798-11.787l0.017-0.247c0.013 0.588 0.018 0.028 0.027 0.098l0.05-0.472 0.101-0.945 0.2-1.891 0.8-7.581 0.4-3.801 0.535-3.801 1.069-7.62c0.187-1.271 0.335-2.545 0.555-3.815l0.67-3.811c0.909-5.082 1.708-10.185 2.859-15.253a424.734 424.734 0 0 1 17.057-60.03l1.316-3.663 1.437-3.623 2.859-7.225c0.907-2.417 2.03-4.761 3.033-7.135l3.079-7.082c2.208-4.653 4.37-9.295 6.624-13.867l3.508-6.783c1.167-2.252 2.294-4.513 3.565-6.702a414.503 414.503 0 0 1 31.89-49.502 407.116 407.116 0 0 1 35.476-41.25 406.598 406.598 0 0 1 35.793-32.288c5.751-4.687 11.515-8.857 16.918-12.861zM1023.966 510.486l-0.001-0.005-0.875-7.954-1.051-9.554-0.687-6.125-1.153-8.152c-0.828-5.729-1.741-12.089-2.813-18.907l-4.259-20.887c-0.691-3.726-1.738-7.517-2.729-11.425l-3.102-12.024c-0.558-2.048-1.019-4.142-1.677-6.221l-1.958-6.314-4.07-13.021-1.049-3.333-1.211-3.324c-0.814-2.223-1.638-4.467-2.469-6.732-1.673-4.522-3.34-9.131-5.115-13.781l-5.938-13.981-3.046-7.123c-1.037-2.384-2.247-4.72-3.375-7.102l-6.997-14.388c-0.569-1.22-1.222-2.408-1.877-3.598l-1.958-3.583-3.95-7.211-3.995-7.265c-1.354-2.422-2.881-4.773-4.324-7.175l-8.875-14.427c-12.567-18.998-26.533-37.793-42.018-55.643-15.662-17.71-32.638-34.534-50.581-50.045a527.617 527.617 0 0 0-56.726-41.602c-19.622-12.201-39.702-22.647-59.484-31.64l-14.925-6.188c-2.47-0.995-4.881-2.072-7.356-2.979l-7.402-2.651-7.306-2.609-3.615-1.289c-1.198-0.434-2.394-0.863-3.618-1.21l-14.37-4.353c-2.366-0.691-4.68-1.466-7.035-2.069l-7.02-1.754-13.669-3.402c-4.524-0.941-8.985-1.788-13.341-2.655l-6.47-1.271-3.184-0.621-3.186-0.465-12.373-1.797-5.96-0.862c-1.957-0.298-3.928-0.403-5.85-0.61l-11.239-1.057c-3.638-0.329-7.151-0.735-10.598-0.81l-19.18-0.823-16.258 0.11-6.935 0.057c-2.177 0.091-4.219 0.237-6.115 0.34l-9.619 0.566-7.982 0.472 7.959 0.875 9.529 1.05c1.872 0.215 3.884 0.411 6.023 0.683l6.797 1.101 15.801 2.578 18.393 3.951c3.283 0.628 6.614 1.603 10.051 2.514l10.571 2.838c1.801 0.509 3.644 0.92 5.469 1.526l5.542 1.793 11.432 3.697 2.927 0.946 2.914 1.104 5.902 2.242c3.965 1.517 8.007 3.017 12.084 4.613l12.243 5.366 6.241 2.733c2.088 0.929 4.128 2.029 6.212 3.044l12.59 6.277c1.068 0.506 2.106 1.094 3.145 1.685l3.131 1.761 6.302 3.542 6.353 3.568c2.118 1.209 4.165 2.586 6.263 3.878l12.601 7.922c16.565 11.247 32.949 23.681 48.48 37.44a473.639 473.639 0 0 1 43.435 44.87 467.917 467.917 0 0 1 35.892 50.115c10.476 17.304 19.389 34.971 27.062 52.322 1.761 4.404 3.506 8.772 5.234 13.098 0.843 2.166 1.771 4.273 2.532 6.444l2.224 6.49 2.201 6.396 1.093 3.162c0.368 1.047 0.734 2.092 1.019 3.166l3.633 12.572c0.578 2.068 1.242 4.086 1.738 6.146l1.441 6.137 2.829 11.931 2.152 11.645 1.045 5.64 0.514 2.772 0.362 2.779 1.423 10.784 0.697 5.188c0.245 1.704 0.3 3.423 0.458 5.098l0.794 9.786c0.249 3.167 0.584 6.22 0.595 9.223l0.516 16.686-0.346 13.152-0.109 5.579-0.343 6.014-0.567 9.595-0.472 7.988c-0.169 3.219-0.107 6.829 0.256 10.138 3.638 33.056 33.383 56.904 66.438 53.267 33.056-3.637 56.905-33.382 53.268-66.438zM885.176 762.451l-4.868 5.897c-1.711 2.052-3.44 4.238-5.4 6.399-3.858 4.365-7.946 9.128-12.608 13.957-4.517 4.944-9.632 9.919-14.922 15.205-5.467 5.131-11.147 10.547-17.374 15.864-12.349 10.726-26.262 21.624-41.613 32.046a434.435 434.435 0 0 1-50.026 29.303 431.157 431.157 0 0 1-56.59 23.39c-2.436 0.874-4.935 1.6-7.419 2.361l-7.455 2.279c-5.006 1.425-10.053 2.742-15.078 4.091-2.536 0.593-5.075 1.187-7.617 1.78-2.545 0.566-5.051 1.25-7.622 1.714l-7.663 1.523-3.822 0.763-3.851 0.64a419.278 419.278 0 0 1-61.304 5.938c-5.039 0.219-10.081 0.088-15.068 0.072l-3.733-0.022c-1.238-0.012-2.392-0.1-3.587-0.145l-7.067-0.313-3.505-0.146-3.997-0.27-7.961-0.537-1.981-0.133-0.989-0.067-0.494-0.033c0.221-0.008-0.844-0.005 0.433-0.022l-0.226-0.025-3.593-0.396-7.127-0.78a406.62 406.62 0 0 1-53.494-10.013 402.48 402.48 0 0 1-45.808-14.792l-5.111-2.022-2.511-0.99-2.452-1.066-9.494-4.124c-6.074-2.917-11.861-5.522-17.131-8.352-10.648-5.379-19.552-10.718-26.826-15.11l-1.338-0.807a1085.391 1085.391 0 0 0-3.457-2.276l-4.116-2.687c-0.638-0.414-1.252-0.813-1.842-1.194l-2.021-1.354-3.621-2.439-6.637-4.472c-2.685-1.782-5.825-3.567-8.857-4.938-30.307-13.689-65.973-0.218-79.662 30.089-13.689 30.308-0.218 65.974 30.089 79.663l7.293 3.294 3.979 1.797 2.369 1.063 2.994 1.302c2.073 0.896 4.3 1.857 6.676 2.885l3.672 1.574 1.917 0.819 1.9 0.745c10.22 4.014 22.646 8.772 37.189 13.242 7.215 2.375 15.042 4.443 23.216 6.727l12.687 3.1 3.261 0.787 3.325 0.701 6.75 1.415c18.195 3.715 38.044 6.719 59.054 8.439a494.284 494.284 0 0 0 65.863 0.997l8.535-0.519 4.285-0.266 0.268-0.017c1.44-0.02 0.541-0.02 0.927-0.03l0.492-0.051 0.986-0.1 1.977-0.201 7.938-0.807 3.991-0.406 4.502-0.554 9.015-1.133c1.492-0.2 3.034-0.365 4.486-0.598l4.344-0.709c5.795-0.965 11.61-1.832 17.399-3.066a485.178 485.178 0 0 0 68.692-18.701l4.2-1.463 4.157-1.588 8.292-3.176c2.771-1.016 5.468-2.251 8.194-3.37l8.134-3.434c5.351-2.451 10.685-4.869 15.941-7.39l7.805-3.918c2.591-1.307 5.188-2.576 7.712-3.991a474.344 474.344 0 0 0 57.071-35.83 467.174 467.174 0 0 0 47.72-40.068 466.596 466.596 0 0 0 37.51-40.586c5.455-6.542 10.335-13.082 14.998-19.24 4.483-6.313 8.789-12.218 12.512-18 3.868-5.667 7.179-11.177 10.297-16.204 1.589-2.492 2.957-4.989 4.318-7.332 1.349-2.348 2.635-4.586 3.854-6.711 4.686-8.611 8.271-15.384 10.509-20.116l3.527-7.185-4.682 6.489c-2.985 4.266-7.65 10.33-13.635 17.935z"})})}):null]})}document.documentElement.style.fontSize="14px";function V1(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const ai=n=>{let e=new AbortController,s=e.signal;const a=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(r=>{l(r.json())}).catch(()=>{console.log("接口成功取消！")})});return a.cancel=()=>{e&&e.abort()},a};function X1({promise:n}){const{results:e}=g.use(n);return console.log("我会执行几次呢"),t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}function G1(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function FS(){const[n,e]=g.useState(()=>ai(5)),s=g.useDeferredValue(n);function a(l){n.cancel();const r=l.target.value.length%5;e(ai(r))}return t.jsxs("div",{children:[t.jsx(G1,{onChange:a,placeholder:"Enter something"}),t.jsx(g.Suspense,{fallback:t.jsx(V1,{}),children:t.jsx(hd,{loading:s!==n,type:"mask",children:t.jsx(X1,{promise:s})})})]})}function JS(){const[n,e]=g.useState(()=>ai(5));function s(a){n.cancel();const l=a.target.value.length%5;e(ai(l))}return t.jsxs("div",{children:[t.jsx(G1,{onChange:s,placeholder:"Enter something"}),t.jsx(g.Suspense,{fallback:t.jsx(V1,{}),children:t.jsx(X1,{promise:n})})]})}function WS(){const[n,e]=g.useState(0);function s(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsxs("div",{className:"mt-4",children:["counter: ",n]})]}),t.jsx("button",{onClick:s,children:"counter++"})]})}function KS(){const[n,e]=g.useState(0),s=g.useDeferredValue(n);function a(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsxs("div",{className:"mt-4",children:["counter: ",s]})]}),t.jsx("button",{onClick:a,children:"counter++"})]})}function PS(){const[n,e]=g.useState(0),s=g.useDeferredValue(n,0);function a(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsx(IS,{counter:s})]}),t.jsx("button",{onClick:a,children:"counter++"})]})}const IS=({counter:n})=>{const e=performance.now();for(;performance.now()-e<200;);return t.jsxs("div",{className:"mt-4",children:["Deferred: ",n]})};function ek(){const[n,e]=g.useState(0),s=g.useDeferredValue(n);function a(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsx(nk,{counter:s})]}),t.jsx("button",{onClick:a,children:"counter++"})]})}const nk=({counter:n})=>{let e=[];for(let s=0;s<200;s++)e.push(t.jsx(tk,{counter:n},s));return t.jsxs("div",{className:"mt-4 text-green-500",children:[t.jsxs("div",{children:["Deferred: ",n]}),t.jsx("ul",{className:"h-32 hidden",children:e})]})};function tk({counter:n}){let e=performance.now();for(;performance.now()-e<1;);return t.jsx("li",{children:n})}function Wp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"重头戏来了！"}),`
`,t.jsx(e.p,{children:"在进一步学习之前，道友们先操作感受一下这个案例中，搜索时 loading 的交互状态。在输入框中，快速输入任意内容。"}),`
`,t.jsx(z,{reload:!0,children:t.jsx(FS,{})}),`
`,t.jsx(e.p,{children:"然后再对比一下前后两种 Loading 交互方式的区别。"}),`
`,t.jsx(z,{children:t.jsx(JS,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(WS,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(KS,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(PS,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(ek,{})}),`
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
`,t.jsx(e.p,{children:"但是，等你彻底掌握它之后，你就会发现 React 19 在异步交互上真的太优雅了。这样的开发体验，是依赖 useEffect 完全比不了的。"})]})}function sk(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Wp,{...n})}):Wp(n)}const ak={"App.js":XS,"api.js":GS,"List.jsx":YS,"Input.jsx":QS,"Skeleton.jsx":ZS,"Spin.jsx":H1,"index.css":q1};function lk(){return t.jsx(de,{files:ak,renderArticle:n=>t.jsx(sk,{components:{code:n}})})}const rk=`import {useState, Suspense, useDeferredValue} from 'react'
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
`,ik=`const random = [
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
`,ck=`export default function Skeleton(props) {
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
`,ok=`import { use } from 'react';
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
`,uk=`function classNames(...classes) {
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
`,dk=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));let a="flex border border-blue-100 p-4 rounded-md shadow";return e?t.jsxs("div",{className:a,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]}):t.jsxs("div",{className:`${a} justify-center items-center flex-col text-gray-500`,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),t.jsx("div",{className:"mt-2",children:"no data."})]})};function Z1(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function mk(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:i,success:c,...o}=n,p=ln(ue("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":c,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,i&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const pk=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var Y1=new Headers;Y1.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var fk={method:"GET",headers:Y1,redirect:"follow",data:"hex"};const hk="https://echo.apifox.com/delay/1",Kp=async()=>{await fetch(hk,fk);const n=Math.floor(Math.random()*10)%5;return{value:pk[n]}},Pp=n=>{let e=new AbortController,s=e.signal;const a=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(r=>{l(r.json())}).catch(()=>{console.log("接口成功取消！")})});return a.cancel=()=>{e&&e.abort()},a};function xk(){const[n,e]=g.useState(Kp()),[s,a]=g.useTransition();function l(){console.log("click"),a(()=>{console.log("transition"),e(Kp())})}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(mk,{onClick:l,children:"更新数据"})}),t.jsx(g.Suspense,{fallback:t.jsx(Z1,{}),children:t.jsx(hd,{loading:s,children:t.jsx(gk,{promise:n})})})]})}function gk(n){const{value:e}=g.use(n.promise);return t.jsx(dk,{message:e})}function vk(...n){return n.filter(Boolean).join(" ")}function jk({tabs:n,onSwitch:e}){return t.jsxs("div",{children:[t.jsxs("div",{className:"hidden",children:[t.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),t.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:n.find(s=>s.current).name,onChange:s=>e(s.target.selectedIndex),children:n.map(s=>t.jsx("option",{children:s.name},s.name))})]}),t.jsx("div",{className:"block",children:t.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:n.map((s,a)=>t.jsx("a",{href:s.href,className:vk(s.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":s.current?"page":void 0,onClick:l=>{l.preventDefault(),e(a)},children:s.name},s.name))})})]})}function bk({promise:n}){const{results:e}=g.use(n);return t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}const Cc=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function yk(){const[n,e]=g.useState(0),[s,a]=g.useState(()=>Pp(5)),[l,r]=g.useTransition();function i(c){Cc[n].current=!1,Cc[c].current=!0,e(c),s.cancel(),r(()=>{a(Pp(5))})}return t.jsxs("div",{children:[t.jsx(jk,{tabs:Cc,onSwitch:i}),t.jsx(g.Suspense,{fallback:t.jsx(Z1,{}),children:t.jsx(hd,{loading:l,type:"mask",children:t.jsx(bk,{promise:s})})})]})}function Ip(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(z,{reload:!0,children:t.jsx(xk,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(yk,{})})]})}function Nk(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Ip,{...n})}):Ip(n)}const wk={"App.js":rk,"api.js":ik,"Tabs.jsx":uk,"List.jsx":ok,"Skeleton.jsx":ck,"Spin.jsx":H1,"index.css":q1};function Sk(){return t.jsx(de,{files:wk,renderArticle:n=>t.jsx(Nk,{components:{code:n}})})}const kk=`function Layou2t() {
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
`;function ef(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"我们对 React Compiler 期待已久。"}),`
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
`,t.jsxs(e.p,{children:["引入成功之后，我们可以在开发者工具中的 ",t.jsx(e.code,{children:"Sources"})," 面板的 ",t.jsx(e.code,{children:"Page"})," 目录中查看编译之后的代码，长得跟右侧代码差不多就表示编译成功了。"]})]})}function _k(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ef,{...n})}):ef(n)}const Ck={"App.js":kk};function Ek(){return t.jsx(de,{files:Ck,hidePreview:!0,renderArticle:n=>t.jsx(_k,{components:{code:n}})})}const Ak=`import { c as _c } from "/src/mycache.js";
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
`,Rk=`import { useState } from 'react'
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
`;function nf(n){const e={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"非常的 nice，经过几天的尝试和研究，我在低版本中成功引入了 Compiler，目前已经在 vite 中运行起来了。"}),`
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
`,t.jsx(e.p,{children:"运行项目，查看开发者工具的 Sources 面板中的 Page 目录，我们发现 App.jsx 已经被编译成了右侧代码的样子。搞定。"})]})}function Mk(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(nf,{...n})}):nf(n)}const Tk={"App.js":Ak,原代码:Rk};function $k(){return t.jsx(de,{files:Tk,hidePreview:!0,renderArticle:n=>t.jsx(Mk,{components:{code:n}})})}const Lk=`import { c as _c } from "/src/mycache.js";
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
`,Dk=`import { useState } from 'react'
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
`;function tf(n){const e={a:"a",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"在 webpack 中引入会稍微麻烦一点，因为我们要自己定义一个 Loader，许多小伙伴对于 webpack 自定义 loader 比较陌生，因此我这里直接放了一个比较完整的代码如下"}),`
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
`})})]})}function Bk(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(tf,{...n})}):tf(n)}const Ok={"App.js":Lk,原代码:Dk};function zk(){return t.jsx(de,{files:Ok,hidePreview:!0,renderArticle:n=>t.jsx(Bk,{components:{code:n}})})}const Uk=`import {useState} from 'react'
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
`,Hk=`import {useState} from 'react'

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
`;function qk(){const[n,e]=g.useState(0);function s(){e(n+1)}return t.jsxs("div",{children:[t.jsx("div",{children:"A Base Case"}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:["currnt count is: ",n]}),t.jsx("button",{onClick:s,children:"Increment"})]})]})}function sf(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
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
`,t.jsx(z,{children:t.jsx(qk,{})}),`
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
`]})]})}function Vk(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(sf,{...n})}):sf(n)}const Xk={"App.js":Uk,原代码:Hk};function Gk(){return t.jsx(de,{files:Xk,renderArticle:n=>t.jsx(Vk,{components:{code:n}})})}const Zk=`import {useState} from 'react'
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
`,Yk=`import {useState} from 'react'

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
`;function Qk(){const[n,e]=g.useState(0);function s(){e(n+1)}return t.jsxs("div",{children:[t.jsx("div",{children:"A Base Case"}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:["currnt count is: ",n]}),t.jsx("button",{onClick:s,children:"Increment"})]})]})}function af(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:["通过上面对 Compiler 渲染结果的理解，我们应该已经大概知道我们的 React 代码最终会渲染成什么样。我们目前要思考的问题就是，我们的代码通过 Compiler 编译之后，",t.jsx(e.strong,{children:"收益表现在哪里？"})]}),`
`,t.jsx(e.p,{children:"接下来我们要分析三个不同的案例，来思考这个问题。这篇文章先分析第一个出现在上一章中，最简单的基础案例"}),`
`,t.jsx(z,{children:t.jsx(Qk,{})}),`
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
`,t.jsx(e.p,{children:"当然，这里多执行的逻辑也并不是很多，我们也可以选择无视。"})]})}function Fk(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(af,{...n})}):af(n)}const Jk={"App.js":Zk,原代码:Yk};function Wk(){return t.jsx(de,{files:Jk,renderArticle:n=>t.jsx(Fk,{components:{code:n}})})}const Kk=`import {useState} from 'react'
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
`,Pk=`import { useState } from 'react'

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
`;function Ik(){var[n,e]=g.useState(0);function s(){e(n+1)}return t.jsxs("div",{children:[t.jsx("div",{children:"A Expensive Case"}),t.jsxs("div",{className:"flex items-center justify-between mt-4",children:[t.jsxs("div",{className:"counter",children:["current counter is: ",n]}),t.jsx("button",{onClick:s,children:"counter++"})]}),t.jsx(e_,{})]})}function e_(){for(var n=performance.now();performance.now()-n<100;);return t.jsx("div",{className:"border border-red-500 rounded p-4 mt-4 text-red-500 text-sm leading-6",children:"这是模拟的一个耗时子组件，我的渲染至少要损耗 100ms 的时间，因此如果不做任何优化的情况下，当你快速点击按钮时，你会感受到 counter 的递增会有明显的掉帧。"})}function lf(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(z,{children:t.jsx(Ik,{})}),`
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
`,t.jsxs(e.p,{children:["因此，编译优化之后，我们能够非常明显的感受到",t.jsx(e.strong,{children:"掉帧的现象"}),"消失了。在优化之前，由于 counter 导致组件 re-render，所以该子组件虽然没有任何参数传递进去，但是依然不可避免的需要重新执行，从而导致每次更新的耗时都非常大。"]})]})}function n_(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(lf,{...n})}):lf(n)}const t_={"App.js":Kk,原代码:Pk};function s_(){return t.jsx(de,{files:t_,renderArticle:n=>t.jsx(n_,{components:{code:n}})})}const a_=`import { useState, useEffect, useRef } from 'react'
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
`,l_=`import clsx from 'clsx'

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
`,r_=`import clsx from 'clsx'

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
`,i_=`import clsx from 'clsx'

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
`,c_=`import clsx from 'clsx'

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
`;function o_({selected:n,appeared:e}){if(!n&&!e)return null;const s=ue("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."})}function u_({selected:n,appeared:e}){if(!n&&!e)return null;const s=ue("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."})}function d_({selected:n,appeared:e}){if(!n&&!e)return null;const s=ue("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets."})}function m_({selected:n,appeared:e}){if(!n&&!e)return null;const s=ue("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"React Compiler is a new experimental compiler that we’ve open sourced to get early feedback from the community. It still has rough edges and is not yet fully ready for production."})}const rf=[{title:"Tailwindcss",component:o_,appeared:!1},{title:"React",component:u_,appeared:!1},{title:"Unocss",component:d_,appeared:!1},{title:"Compiler",component:m_,appeared:!1}];function p_(){const[n,e]=g.useState(0),s=g.useRef([...rf]);function a(o){s.current[o].appeared=!0,e(o)}let l=s.current[0],r=s.current[1],i=s.current[2],c=s.current[3];return t.jsxs("div",{className:"bg-gray-100 p-8 rounded-md border border-gray-200",children:[t.jsx("div",{children:rf.map((o,u)=>t.jsx("button",{className:u===n?"text-blue-500":"text-gray-500",onClick:()=>a(u),children:o.title},o.title))}),t.jsx(l.component,{appearder:l.appeared,selected:n===0}),t.jsx(r.component,{appearder:r.appeared,selected:n===1}),t.jsx(i.component,{appearder:i.appeared,selected:n===2}),t.jsx(c.component,{appearder:c.appeared,selected:n===3})]})}function f_(){return t.jsxs("div",{children:[t.jsx(h_,{}),t.jsx(x_,{})]})}function h_(){var n=performance.now();return t.jsxs("div",{className:"mt-4",children:["仅执行 1000,000 次耗时 for 循环耗时：",t.jsxs("span",{className:"text-red-500",children:[performance.now()-n," ms"]})]})}function x_(){var n=performance.now();return t.jsxs("div",{className:"mt-4",children:["for 循环中，比较 1000,000 次耗时：",t.jsxs("span",{className:"text-red-500",children:[performance.now()-n," ms"]})]})}function cf(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(z,{children:t.jsx(p_,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(f_,{})}),`
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
`,t.jsx(e.p,{children:"并且 React Compiler 上手成本低，理解起来也不难，未来肯定会快速被大量开发者所接受。作为开发者我们只需要放心使用即可。"})]})}function g_(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(cf,{...n})}):cf(n)}const v_={"App.js":a_,"Panel1.jsx":l_,"Panel2.jsx":r_,"Panel3.jsx":i_,"Panel4.jsx":c_,"Button.jsx":Ll};function j_(){return t.jsx(de,{files:v_,renderArticle:n=>t.jsx(g_,{components:{code:n}})})}function b_(){return t.jsxs("form",{id:"form",method:"get",className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"First name: "}),t.jsx("input",{type:"text",defaultValue:"Jake",name:"fname"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"Last name: "}),t.jsx("input",{type:"text",defaultValue:"Ma",name:"lname"})]}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"提交"})})]})}function of(n){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"在 html 的基础知识中，表单是很重要的一个环节"}),"，但是由于前端框架的盛行，原生表单开发方式相关的知识被部分前端框架所遗忘，很多人对 form action，formdata 很陌生。因此，当看到有消息称 React 19 支持了 form action 之后，许多前端感觉有点懵。这是啥？"]}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(b_,{})}),`
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
`,t.jsx(e.p,{children:"了解了这些html form 元素中的基础知识之后，我们下一章再来详细的学习一下 FormData 的基础知识。"})]})}function y_(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(of,{...n})}):of(n)}function N_(){function n(e){localStorage.setItem("active_code",e.get("code")),location.reload()}return t.jsxs("div",{className:"pt-4",children:[t.jsx("div",{className:"rounded-md bg-yellow-50 p-4 border border-yellow-400",children:t.jsxs("div",{className:"flex",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-yellow-700",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),t.jsxs("div",{className:"ml-3",children:[t.jsx("h3",{className:"text-sm font-medium text-yellow-800",children:"Attention needed"}),t.jsx("div",{className:"mt-2 text-sm text-yellow-700",children:t.jsx("p",{children:"你还未输入激活码，或者激活码已过期，请重新输入即可访问"})})]})]})}),t.jsxs("form",{action:n,className:"flex items-center justify-between",children:[t.jsx(Tn,{name:"code",placeholder:"Please input your active code",className:"flex-1 mr-4",pattern:Ai}),t.jsx("button",{type:"submit",children:"确认"})]})]})}Dl.registerLanguage("javascript",g1);function w_({className:n,...e}){const s=/language-(\w+)/.exec(n||"");return s?t.jsx(Dl,{language:s[1],PreTag:"div",...e,style:v1}):t.jsx("code",{className:n,...e})}function Zt(n){const{renderArticle:e,isAuth:s=!0,isGiscus:a=!0}=n,l=localStorage.getItem("active_code"),r=s?l===Ai:!0;return t.jsxs("div",{className:"keep max-w-[700px] mx-auto",children:[r?e(w_):t.jsx(N_,{}),a&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsx(sd,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]})]})}function S_(){return t.jsx(Zt,{renderArticle:n=>t.jsx(y_,{components:{code:n}})})}function uf(n){const e={code:"code",h3:"h3",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:"FormData 使用详解"}),`
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
`,t.jsx(e.p,{children:"OK，简单了解了 FormData 的常用方式之后，有了这个基础，我们再来学习 react 中的 form action."})]})}function k_(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(uf,{...n})}):uf(n)}function __(){return t.jsx(Zt,{renderArticle:n=>t.jsx(k_,{components:{code:n}})})}function C_(){function n(e){const s=e.get("fname"),a=e.get("lname");alert(`输入内容：FirstName: ${s}, LastName: ${a}`)}return t.jsxs("form",{action:n,className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"First name: "}),t.jsx("input",{type:"text",defaultValue:"Jake",name:"fname"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"Last name: "}),t.jsx("input",{type:"text",defaultValue:"Ma",name:"lname"})]}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"提交"})})]})}function Q1(){for(var n=[],e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=0;s<16;s++)n[s]=e.substr(Math.floor(Math.random()*16),1);return n[8]="-",n.join("")}function E_(n){const{ref:e,onChange:s}=n;function a(l){const r={id:Q1(),name:l.get("name"),desc:l.get("desc"),hours:l.get("hours"),rate:l.get("rate"),price:l.get("price")};e.current.close(),s&&s(r)}return t.jsx(va,{ref:e,footer:!0,children:t.jsxs("form",{action:a,children:[t.jsx(Tn,{label:"Name",name:"name",placeholder:"Plase input your project name.",required:!0}),t.jsx(Tn,{label:"Desc",name:"desc",placeholder:"please input your project description.",required:!0}),t.jsx(Tn,{label:"Hours",name:"hours",type:"number",placeholder:"please input hours.",required:!0}),t.jsx(Tn,{label:"Rate",name:"rate",type:"number",placeholder:"please input rate.",required:!0}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"Submit"})})]})})}function A_(){const n=g.useRef(null),[e,s]=g.useState([{id:Q1(),name:"Logo redesign",desc:"New logo and digital asset playbook.",hours:"20.0",rate:"100.00"}]);function a(r){s([...e,r])}const l=e.reduce((r,i)=>r+i.hours*i.rate,0);return t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold leading-6 text-gray-900",children:"Invoice"}),t.jsxs("p",{className:"mt-2 text-sm text-gray-700",children:["For work completed from ",t.jsx("time",{dateTime:"2022-08-01",children:"August 1, 2022"})," to"," ",t.jsx("time",{dateTime:"2022-08-31",children:"August 31, 2022"}),"."]})]}),t.jsx("div",{className:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:t.jsx("button",{className:"primary",onClick:()=>n.current.show(),children:"Add"})})]}),t.jsx(E_,{ref:n,onChange:a}),t.jsx("div",{className:"-mx-4 mt-8 flow-root sm:mx-0",children:t.jsxs("table",{className:"min-w-full",children:[t.jsxs("colgroup",{children:[t.jsx("col",{className:"w-full sm:w-1/2"}),t.jsx("col",{className:"sm:w-1/6"}),t.jsx("col",{className:"sm:w-1/6"}),t.jsx("col",{className:"sm:w-1/6"})]}),t.jsx("thead",{className:"border-b border-gray-300 text-gray-900",children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Project"}),t.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Hours"}),t.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Rate"}),t.jsx("th",{scope:"col",className:"py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:"Price"})]})}),t.jsx("tbody",{children:e.map(r=>t.jsxs("tr",{className:"border-b border-gray-200",children:[t.jsxs("td",{className:"max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0",children:[t.jsx("div",{className:"font-medium text-gray-900",children:r.name}),t.jsx("div",{className:"mt-1 truncate text-gray-500",children:r.desc})]}),t.jsx("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:r.hours}),t.jsxs("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:["$",r.rate]}),t.jsxs("td",{className:"py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0",children:["$",r.hours*r.rate]})]},r.id))}),t.jsxs("tfoot",{children:[t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Subtotal"}),t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Subtotal"}),t.jsxs("td",{className:"pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0",children:["$",l]})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Tax"}),t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Tax"}),t.jsx("td",{className:"pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0",children:"$1760.00"})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0",children:"Total"}),t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden",children:"Total"}),t.jsxs("td",{className:"pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:["$",l-1760]})]})]})]})})]})}const R_=`import Dialog from 'components/Dialog'
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
}`,M_=`import { useState, useRef } from 'react'
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
}`;function df(n){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"React 19 在表单上提供了更多充满想象空间的 API，它们用好了非常爽，不过一个麻烦的事情是如果你通过自学，想要透彻理解并找到最佳实践可能会非常困难。"}),`
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
`,t.jsx(z,{children:t.jsx(C_,{})}),`
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
`,t.jsx(z,{children:t.jsx(A_,{})}),`
`,t.jsxs(e.p,{children:["在这个案例中，我们提供了一个 ",t.jsx(e.code,{children:"Add"})," 按钮，点击该按钮之后，会出现一个弹窗。在弹窗中，我们可以输入每一条信息。输入完成之后，点击提交，输入的信息就会展示在列表中。"]}),`
`,t.jsx(e.p,{children:"完整代码如下"}),`
`,t.jsx(ct,{files:{"index.jsx":M_,"Modal.jsx":R_}})]})}function T_(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(df,{...n})}):df(n)}function $_(){return t.jsx(Zt,{renderArticle:n=>t.jsx(T_,{components:{code:n}})})}async function F1(n){const e=n.get("title"),s=n.get("content");if(!e||!s)return alert("Miss");await new Promise(a=>setTimeout(a,1e3)),alert(`Title: ${e}, Content: ${s}`)}function L_(){return t.jsxs("form",{action:F1,children:[t.jsx(Tn,{label:"Title",name:"title"}),t.jsx(Tn,{label:"content",name:"content"}),t.jsx(me,{children:"Submit"})]})}function D_({children:n}){const{pending:e}=Sl.useFormStatus();return t.jsx(me,{primary:!0,disabled:e,children:e?"loading...":n})}function mf(){return t.jsxs("form",{action:F1,children:[t.jsx(Tn,{label:"Title",name:"title"}),t.jsx(Tn,{label:"content",name:"content"}),t.jsx(D_,{children:"Submit"})]})}const Ec=`export async function formAction(fd) {
  const title = fd.get('title')
  const content = fd.get('content')
  if (!title || !content) {
    return alert('Miss')
  }
  await new Promise(resolve => setTimeout(resolve, 1000))
  alert(\`Title: \${title}, Content: \${content}\`)
}
`,B_=`import Input from 'components/Input'
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
`,pf=`import Input from 'components/Input'
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
`,ff=`import {useFormStatus} from 'react-dom'
import Button from "components/Button";

export default function SubmitButton({children}) {
  const {pending} = useFormStatus()
  return (
    <Button primary disabled={pending}>
      {pending ? 'loading...' : children}
    </Button>
  )
}
`,O_=`import {useState} from 'react'
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
`;function hf(n){const e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注：由于 FormAction 在 next.js 中的表现暂时还不稳定，因此，本文以及后续文章的探讨全部都是基于他们在客户端的交互与表现"}),`
`]}),`
`,t.jsx(z,{children:t.jsx(L_,{})}),`
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
`,t.jsx(ct,{files:{Demo01:B_,"actions.js":Ec}}),`
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
`,t.jsx(z,{children:t.jsx(mf,{})}),`
`,t.jsxs(e.p,{children:["这里主要是针对提交按钮做的操作，因此我们需要单独将提交按钮相关的部分拿出来封装成为一个子组件，并在子组件中利用 ",t.jsx(e.code,{children:"useFormStatus"})," 获取异步 action 的 pending 状态。"]}),`
`,t.jsx(e.p,{children:"代码非常的简单，如下所示"}),`
`,t.jsx(ct,{files:{Demo02:pf,SubmitButton:ff,"actions.js":Ec},active:"1"}),`
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
`,t.jsx(z,{children:t.jsx(mf,{})}),`
`,t.jsx(ct,{files:{Demo03:pf,Input:O_,SubmitButton:ff,"actions.js":Ec},active:"1"}),`
`,t.jsx(e.h2,{children:"5"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"总结"})}),`
`,t.jsx(e.p,{children:"useFormStatus 是结合 action 异步请求时使用的 hook，它们是对 HTML 表单能力的增强。因此我们可以借助他们与 HTML 表单元素自身支持的特性实现更复杂的表单交互逻辑。"}),`
`,t.jsxs(e.p,{children:["这里我们需要注意的是 action 与 onSubmit 的区别。onSubmit 会优先于 action 执行。并且，如果我们在 onSubmit 的回调函数中，使用了 ",t.jsx(e.code,{children:"preventDefault"}),"，action 回调将不会执行"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function onSubmit(e) {
  e.preventDefault()
  // ...
}
`})}),`
`,t.jsx(e.p,{children:"在 onSubmit 中，我们可以结合 state，通过控制数据的行为来自定义表单行为，而无需过多依赖 HTML 表单元素本身的能力。具体如何抉择大家需要根据自身项目的需求情况来定。"})]})}function z_(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(hf,{...n})}):hf(n)}function U_(){return t.jsx(Zt,{renderArticle:n=>t.jsx(z_,{components:{code:n}})})}async function H_(n){return n+1}function q_(){const[n,e]=g.useActionState(H_,0);return t.jsxs("form",{action:e,className:"flex items-center",children:[t.jsx("button",{children:"count++"}),t.jsx("div",{className:"ml-4",children:n})]})}function V_({cart:n=[]}){return t.jsx("div",{children:n.map((e,s)=>t.jsxs("div",{className:"border border-yellow-400 p-4 rounded my-4",children:[t.jsxs("div",{className:"font-bold",children:["title: ",e.title]}),t.jsxs("div",{children:["id: ",e.id]}),t.jsxs("div",{children:["count: ",e.count||0]})]},`cart_${s}`))})}async function X_(n,e,s){const a=e.get("id"),l=e.get("title");return await new Promise(r=>{setTimeout(()=>{s({id:a,title:l,count:n+1}),r()},300)}),n+1}function G_({children:n}){const{pending:e}=Sl.useFormStatus();return t.jsxs(me,{primary:!0,disabled:e,children:[n,e?"...":""]})}function xf({id:n,title:e,onSubmit:s}){const[a,l]=g.useActionState((r,i)=>X_(r,i,s),0);return t.jsxs("form",{action:l,className:"border p-4 my-3 rounded",children:[t.jsxs("h1",{className:"!my-2",children:["book name: ",e]}),t.jsx("input",{type:"hidden",name:"title",value:e}),t.jsx("input",{type:"hidden",name:"id",value:n}),t.jsxs("div",{style:{marginBottom:"20px"},children:["cart count: ",a]}),t.jsx(G_,{children:"ADD TO CART"})]})}function Z_(){const[n,e]=g.useState([]);function s(a){const l=n.find(r=>r.id===a.id);if(l)return l.count+=1,e([...n]);e(r=>[...r,a])}return t.jsxs("div",{children:[t.jsx(xf,{id:"001",title:"JavaScript Core advance",onSubmit:s}),t.jsx(xf,{id:"002",title:"React19 all solution",onSubmit:s}),t.jsx(V_,{cart:n})]})}const Y_=`export async function submit(cur, formData, onSubmit) {
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
`,Q_=`import { useState } from 'react'

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
`,F_=`import {useFormStatus} from 'react-dom'
import Button from "components/Button";

export default function SubmitButton({children}) {
  const {pending} = useFormStatus()
  return (
    <Button primary disabled={pending}>
      {children}{pending ? '...' : ''}
    </Button>
  )
}
`,J_=`import {useActionState} from 'react'
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
`,W_=`function CartList({cart = []}) {
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
`;function gf(n){const e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注：由于 FormAction 在 next.js 中的表现暂时还不稳定，因此，本文以及后续文章的探讨全部都是基于他们在客户端的交互与表现"}),`
`]}),`
`,t.jsx(z,{children:t.jsx(q_,{})}),`
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
`,t.jsx(z,{reload:!0,children:t.jsx(Z_,{})}),`
`,t.jsx(ct,{files:{Demo02:Q_,BookItem:J_,"actions.js":Y_,SubmitButton:F_,List:W_}}),`
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
`})})]})}function K_(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(gf,{...n})}):gf(n)}function P_(){return t.jsx(Zt,{renderArticle:n=>t.jsx(K_,{components:{code:n}})})}const J1=[{type:"tip",name:"前言"},{path:"index",name:"1、开发方式变革",component:g8},{path:"layers",name:"2、学习的三个层次",component:R8},{path:"create",name:"3、创建项目",component:z8},{type:"tip",name:"use(promise)"},{path:"use/base",name:"3、use 基础知识",component:tN},{path:"use/suspense",name:"4、Suspense",component:bN},{path:"use/update",name:"5、点击更新数据",component:ON},{path:"use/initialize",name:"6、初始化请求并更新",component:IN},{path:"use/updatetolist",name:"7、请求并新增到列表",component:h9},{path:"use/loadmore",name:"8、分页列表加载更多",component:A9},{path:"use/search",name:"9、搜索",component:q9},{path:"use/tabs",name:"10、tab 简单切换",component:ew,label:"1"},{path:"use/tabshard",name:"11、tab 缓存切换",component:xw,label:"2"},{path:"use/fromchildren",name:"12、父级获取数据",component:Aw,label:"3"},{path:"use/nest",name:"13、Suspense 嵌套",component:Hw},{path:"use/react16",name:"14、在低版本中使用",component:Kw},{type:"tip",name:"use(context)"},{path:"use/ref",name:"15、ref 调整",component:pS},{path:"use/modal",name:"16、自定义弹窗组件",component:bS},{path:"use/contextmodify",name:"17、弹窗中更改内容",component:MS},{path:"use/skinswitch",name:"18、皮肤切换次数",component:VS},{type:"tip",name:"并发 API"},{path:"use/deferred",name:"19、useDeferredValue",component:lk},{path:"use/transition",name:"20、useTransition",component:Sk},{type:"tip",name:"Compiler"},{path:"use/importwith19",name:"21、React 19 中引入",component:Ek},{path:"use/importwithlower",name:"22、低版本中引入",component:$k},{path:"use/importwithwebpack",name:"23、webpack中引入",component:zk},{path:"use/compilerbase",name:"24、Compiler 编译原理",component:Gk},{path:"use/compilercount",name:"25、收益分析-递增",component:Wk},{path:"use/compilerexpensive",name:"26、收益分析-耗时子组件",component:s_},{path:"use/compilertabs",name:"27、收益分析-tabs",component:j_},{type:"tip",name:"form action"},{path:"formaction/base",name:"28、form 基础",component:S_},{path:"formaction/formdata",name:"29、FormData 基础",component:__},{path:"formaction/action",name:"30、form action",component:$_},{path:"formaction/useformstatus",name:"31、useFormStatus",component:U_},{path:"formaction/useactionstate",name:"32、useActionState",component:P_}];function vf(){return t.jsx("div",{children:J1.map((n,e)=>n.type==="tip"?t.jsx("div",{className:"mx-2 text-sm px-4 text-gray-400 first:pt-0 pb-4 pt-8",children:n.name},`z-${e}`):t.jsx(Bn,{className:"text-gray-700",activeName:"text-blue-700",to:n.path,children:t.jsxs("li",{className:"mx-2 px-4 py-3 transition hover:bg-blue-100 text-sm flex items-center justify-between hover:text-blue-700 rounded",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})}),t.jsx("div",{className:"ml-2 line-clamp-1",children:n.name})]}),n.label?t.jsx(j1,{label:n.label,primary:!0,className:"ml-2"}):null]},n.path)},n.path))})}function I_(){const n=Tu(),e=g.useRef(new Map),s=$u(),{pathname:a}=xs();g.useReducer(r=>!r)[1];const l=g.useRef(null);return e.current.has(a)||e.current.set(a,s),g.useEffect(()=>{location.pathname==="/tutorial"&&n("index")},[a]),t.jsxs("div",{className:"pt-16 md:flex",children:[t.jsx(me,{signal:!0,className:"fixed bottom-6 right-6 z-40 md:hidden",onClick:()=>l.current.show(),children:"目录"}),t.jsx(ki,{ref:l,onClose:()=>l.current.close(),children:t.jsx("div",{className:"bg-white h-full py-4 overflow-scroll",children:t.jsx(vf,{})})}),t.jsxs("nav",{className:"hidden md:block w-60 sticky top-16 h-[calc(100vh_-_5rem)] overflow-y-auto bg-hei",children:[t.jsxs("div",{className:"flex items-center px-4 py-8",children:[t.jsx("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-cyan-500",children:t.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})})}),t.jsxs("div",{className:"text-sm",children:[t.jsx("div",{children:"当前版本"}),t.jsx("div",{className:"text-gray-500",children:"React@19.0.0-rc"})]})]}),t.jsx("ul",{className:"border-r h-[calc(100vh_-_9rem_-_35px)] overflow-y-auto pb-8",children:t.jsx(vf,{})})]}),t.jsx("div",{className:"md:flex-1 md:w-[calc(100vw_-_15rem)] p-4 md:p-8 min-h-[calc(100vh_-_5rem)] box-border",children:Array.from(e.current).map(([r,i])=>t.jsx("div",{style:{display:a===r?"block":"none"},children:i},r))})]})}function jf(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"基础使用"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Button>hello button</Button>
`})}),`
`,t.jsx("div",{children:t.jsx(me,{children:"hello button"})}),`
`,t.jsx(e.p,{children:"类型"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Button danger>Danger</Button>
<Button primary>Primary</Button>
<Button success>Success</Button>
<Button signal>Signal</Button>
`})}),`
`,t.jsx(z,{children:t.jsxs("div",{className:"mt-4 flex justify-around",children:[t.jsx(me,{danger:!0,children:"Danger"}),t.jsx(me,{primary:!0,children:"Primary"}),t.jsx(me,{success:!0,children:"Success"}),t.jsx(me,{signal:!0,children:"Signal"})]})}),`
`,t.jsx(e.p,{children:"大小"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Button danger sm className="mr-4">Danger</Button>
<Button danger className="mr-4">Danger</Button>
<Button danger lg>Danger</Button>
`})}),`
`,t.jsxs(z,{children:[t.jsxs("div",{className:"mt-4",children:[t.jsx(me,{danger:!0,sm:!0,className:"mr-4",children:"Danger"}),t.jsx(me,{danger:!0,className:"mr-4",children:"Danger"}),t.jsx(me,{danger:!0,lg:!0,children:"Danger"})]}),t.jsxs("div",{className:"mt-4",children:[t.jsx(me,{success:!0,lg:!0,className:"mr-4",children:"Success"}),t.jsx(me,{success:!0,className:"mr-4",children:"Success"}),t.jsx(me,{success:!0,sm:!0,children:"Success"})]}),t.jsxs("div",{className:"mt-4",children:[t.jsx(me,{primary:!0,sm:!0,className:"mr-4",children:"Primary"}),t.jsx(me,{primary:!0,className:"mr-4",children:"Primary"}),t.jsx(me,{primary:!0,lg:!0,children:"Primary"})]}),t.jsxs("div",{className:"mt-4",children:[t.jsx(me,{signal:!0,lg:!0,className:"mr-4",children:"Signal"}),t.jsx(me,{signal:!0,className:"mr-4",children:"Signal"}),t.jsx(me,{signal:!0,sm:!0,children:"Signal"})]})]}),`
`,t.jsx(e.p,{children:"完整源码"}),`
`,t.jsx(ct,{files:{"index.jsx":Ll}})]})}function eC(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(jf,{...n})}):jf(n)}function nC(){return t.jsx(Zt,{renderArticle:n=>t.jsx(eC,{components:{code:n}}),isGiscus:!1})}function bf(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"Input 基础使用"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Input placeholder="请输入任意内容" />
`})}),`
`,t.jsx(z,{children:t.jsx(Tn,{placeholder:"请输入任意内容"})})]})}function tC(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(bf,{...n})}):bf(n)}function sC(){return t.jsx(Zt,{renderArticle:n=>t.jsx(tC,{components:{code:n}}),isGiscus:!1})}function aC(n){return t.jsx("div",{className:"border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function yf(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"基础使用"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`<Skeleton />
`})}),`
`,t.jsx(aC,{})]})}function lC(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(yf,{...n})}):yf(n)}function rC(){return t.jsx(Zt,{renderArticle:n=>t.jsx(lC,{components:{code:n}}),isGiscus:!1})}const W1=[{type:"tip",name:"基础组件"},{path:"button",name:"1、按钮 Button",component:nC},{path:"input",name:"2、输入框 Input",component:sC},{path:"skeleton",name:"2、骨架屏 Skeleton",component:rC}];function iC(){const n=Tu(),e=g.useRef(new Map),s=$u(),{pathname:a}=xs(),l=g.useReducer(r=>!r)[1];return e.current.has(a)||e.current.set(a,s),g.useEffect(()=>{location.pathname==="/component"&&n("button")},[a]),t.jsxs("div",{className:"pt-16 flex",children:[t.jsxs("nav",{className:"hidden md:block w-60 sticky top-16 h-[calc(100vh_-_5rem)] overflow-y-auto bg-hei",children:[t.jsxs("div",{className:"flex items-center px-4 py-8",children:[t.jsx("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-cyan-500",children:t.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})})}),t.jsxs("div",{className:"text-sm",children:[t.jsx("div",{children:"当前版本"}),t.jsx("div",{className:"text-gray-500",children:"React@19.0.0-rc"})]})]}),t.jsx("ul",{className:"border-r h-[calc(100vh_-_9rem_-_35px)] overflow-y-auto pb-8",children:W1.map((r,i)=>r.type==="tip"?t.jsx("div",{className:"mx-2 text-sm px-4 text-gray-400 first:pt-0 pb-4 pt-8",children:r.name},`z-${i}`):t.jsx(Bn,{className:"text-gray-700",activeName:"text-blue-700",to:r.path,onClick:l,children:t.jsxs("li",{className:"mx-2 px-4 py-3 transition hover:bg-blue-100 text-sm flex items-center justify-between hover:text-blue-700 rounded",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})}),t.jsx("div",{className:"ml-2 line-clamp-1",children:r.name})]}),r.label?t.jsx(j1,{label:r.label,primary:!0,className:"ml-2"}):null]},r.path)},r.path))})]}),t.jsx("div",{className:"w-full md:w-[calc(100vw_-_15rem)] p-8 min-h-[calc(100vh_-_5rem)] box-border",children:Array.from(e.current).map(([r,i])=>t.jsx("div",{style:{display:a===r?"block":"none"},children:i},r))})]})}function cC(){return t.jsxs("div",{children:[t.jsx(Gb,{className:"line"}),t.jsx(Xj,{})]})}function oC(){return t.jsx(Zj,{children:t.jsxs(jt,{path:"/",element:t.jsx(cC,{}),children:[t.jsx(jt,{index:!0,element:t.jsx(n8,{})}),t.jsx(jt,{path:"tutorial",element:t.jsx(I_,{}),children:J1.filter(n=>!!n.path).map((n,e)=>t.jsx(jt,{path:n.path,element:t.jsx(g.Suspense,{fallback:t.jsx(Vm,{}),children:t.jsx(n.component,{})})},n.path))}),t.jsx(jt,{path:"component",element:t.jsx(iC,{}),children:W1.filter(n=>!!n.path).map((n,e)=>t.jsx(jt,{path:n.path,element:t.jsx(g.Suspense,{fallback:t.jsx(Vm,{}),children:t.jsx(n.component,{})})},n.path))}),t.jsx(jt,{path:"*",element:t.jsx("div",{children:"nothingsdfsdfsdf"})})]})})}nj.createRoot(document.getElementById("root")).render(t.jsx(g.StrictMode,{children:t.jsx(Pj,{children:t.jsx(oC,{})})}));
