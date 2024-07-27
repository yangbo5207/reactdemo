function Ax(n,e){for(var s=0;s<e.length;s++){const a=e[s];if(typeof a!="string"&&!Array.isArray(a)){for(const l in a)if(l!=="default"&&!(l in n)){const r=Object.getOwnPropertyDescriptor(a,l);r&&Object.defineProperty(n,l,r.get?r:{enumerable:!0,get:()=>a[l]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function so(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bp={exports:{}},Br={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tx=Symbol.for("react.transitional.element"),$x=Symbol.for("react.fragment");function yp(n,e,s){var a=null;if(s!==void 0&&(a=""+s),e.key!==void 0&&(a=""+e.key),"key"in e){s={};for(var l in e)l!=="key"&&(s[l]=e[l])}else s=e;return e=s.ref,{$$typeof:Tx,type:n,key:a,ref:e!==void 0?e:null,props:s}}Br.Fragment=$x;Br.jsx=yp;Br.jsxs=yp;bp.exports=Br;var t=bp.exports,Np={exports:{}},q={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=Symbol.for("react.transitional.element"),Dx=Symbol.for("react.portal"),Lx=Symbol.for("react.fragment"),Bx=Symbol.for("react.strict_mode"),Ox=Symbol.for("react.profiler"),zx=Symbol.for("react.consumer"),Ux=Symbol.for("react.context"),Hx=Symbol.for("react.forward_ref"),qx=Symbol.for("react.suspense"),Vx=Symbol.for("react.memo"),Sp=Symbol.for("react.lazy"),Au=Symbol.iterator;function Xx(n){return n===null||typeof n!="object"?null:(n=Au&&n[Au]||n["@@iterator"],typeof n=="function"?n:null)}var wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_p=Object.assign,kp={};function Ks(n,e,s){this.props=n,this.context=e,this.refs=kp,this.updater=s||wp}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ks.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Cp(){}Cp.prototype=Ks.prototype;function lo(n,e,s){this.props=n,this.context=e,this.refs=kp,this.updater=s||wp}var ro=lo.prototype=new Cp;ro.constructor=lo;_p(ro,Ks.prototype);ro.isPureReactComponent=!0;var Tu=Array.isArray,fe={H:null,A:null,T:null},Rp=Object.prototype.hasOwnProperty;function co(n,e,s,a,l,r,c){return s=c.ref,{$$typeof:ao,type:n,key:e,ref:s!==void 0?s:null,props:c}}function Gx(n,e){return co(n.type,e,null,void 0,void 0,void 0,n.props)}function io(n){return typeof n=="object"&&n!==null&&n.$$typeof===ao}function Zx(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(s){return e[s]})}var $u=/\/+/g;function ic(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Zx(""+n.key):e.toString(36)}function Du(){}function Yx(n){switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:switch(typeof n.status=="string"?n.then(Du,Du):(n.status="pending",n.then(function(e){n.status==="pending"&&(n.status="fulfilled",n.value=e)},function(e){n.status==="pending"&&(n.status="rejected",n.reason=e)})),n.status){case"fulfilled":return n.value;case"rejected":throw n.reason}}throw n}function fs(n,e,s,a,l){var r=typeof n;(r==="undefined"||r==="boolean")&&(n=null);var c=!1;if(n===null)c=!0;else switch(r){case"bigint":case"string":case"number":c=!0;break;case"object":switch(n.$$typeof){case ao:case Dx:c=!0;break;case Sp:return c=n._init,fs(c(n._payload),e,s,a,l)}}if(c)return l=l(n),c=a===""?"."+ic(n,0):a,Tu(l)?(s="",c!=null&&(s=c.replace($u,"$&/")+"/"),fs(l,e,s,"",function(d){return d})):l!=null&&(io(l)&&(l=Gx(l,s+(!l.key||n&&n.key===l.key?"":(""+l.key).replace($u,"$&/")+"/")+c)),e.push(l)),1;c=0;var i=a===""?".":a+":";if(Tu(n))for(var o=0;o<n.length;o++)a=n[o],r=i+ic(a,o),c+=fs(a,e,s,r,l);else if(o=Xx(n),typeof o=="function")for(n=o.call(n),o=0;!(a=n.next()).done;)a=a.value,r=i+ic(a,o++),c+=fs(a,e,s,r,l);else if(r==="object"){if(typeof n.then=="function")return fs(Yx(n),e,s,a,l);throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return c}function yl(n,e,s){if(n==null)return n;var a=[],l=0;return fs(n,a,"","",function(r){return e.call(s,r,l++)}),a}function Qx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(s){(n._status===0||n._status===-1)&&(n._status=1,n._result=s)},function(s){(n._status===0||n._status===-1)&&(n._status=2,n._result=s)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Lu=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Jx(){}q.Children={map:yl,forEach:function(n,e,s){yl(n,function(){e.apply(this,arguments)},s)},count:function(n){var e=0;return yl(n,function(){e++}),e},toArray:function(n){return yl(n,function(e){return e})||[]},only:function(n){if(!io(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};q.Component=Ks;q.Fragment=Lx;q.Profiler=Ox;q.PureComponent=lo;q.StrictMode=Bx;q.Suspense=qx;q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fe;q.act=function(){throw Error("act(...) is not supported in production builds of React.")};q.cache=function(n){return function(){return n.apply(null,arguments)}};q.cloneElement=function(n,e,s){if(n==null)throw Error("The argument must be a React element, but you passed "+n+".");var a=_p({},n.props),l=n.key,r=void 0;if(e!=null)for(c in e.ref!==void 0&&(r=void 0),e.key!==void 0&&(l=""+e.key),e)!Rp.call(e,c)||c==="key"||c==="__self"||c==="__source"||c==="ref"&&e.ref===void 0||(a[c]=e[c]);var c=arguments.length-2;if(c===1)a.children=s;else if(1<c){for(var i=Array(c),o=0;o<c;o++)i[o]=arguments[o+2];a.children=i}return co(n.type,l,null,void 0,void 0,r,a)};q.createContext=function(n){return n={$$typeof:Ux,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null},n.Provider=n,n.Consumer={$$typeof:zx,_context:n},n};q.createElement=function(n,e,s){var a,l={},r=null;if(e!=null)for(a in e.key!==void 0&&(r=""+e.key),e)Rp.call(e,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(l[a]=e[a]);var c=arguments.length-2;if(c===1)l.children=s;else if(1<c){for(var i=Array(c),o=0;o<c;o++)i[o]=arguments[o+2];l.children=i}if(n&&n.defaultProps)for(a in c=n.defaultProps,c)l[a]===void 0&&(l[a]=c[a]);return co(n,r,null,void 0,void 0,null,l)};q.createRef=function(){return{current:null}};q.forwardRef=function(n){return{$$typeof:Hx,render:n}};q.isValidElement=io;q.lazy=function(n){return{$$typeof:Sp,_payload:{_status:-1,_result:n},_init:Qx}};q.memo=function(n,e){return{$$typeof:Vx,type:n,compare:e===void 0?null:e}};q.startTransition=function(n){var e=fe.T,s=new Set;fe.T={_callbacks:s};var a=fe.T;try{var l=n();typeof l=="object"&&l!==null&&typeof l.then=="function"&&(s.forEach(function(r){return r(a,l)}),l.then(Jx,Lu))}catch(r){Lu(r)}finally{fe.T=e}};q.unstable_useCacheRefresh=function(){return fe.H.useCacheRefresh()};q.use=function(n){return fe.H.use(n)};q.useActionState=function(n,e,s){return fe.H.useActionState(n,e,s)};q.useCallback=function(n,e){return fe.H.useCallback(n,e)};q.useContext=function(n){return fe.H.useContext(n)};q.useDebugValue=function(){};q.useDeferredValue=function(n,e){return fe.H.useDeferredValue(n,e)};q.useEffect=function(n,e){return fe.H.useEffect(n,e)};q.useId=function(){return fe.H.useId()};q.useImperativeHandle=function(n,e,s){return fe.H.useImperativeHandle(n,e,s)};q.useInsertionEffect=function(n,e){return fe.H.useInsertionEffect(n,e)};q.useLayoutEffect=function(n,e){return fe.H.useLayoutEffect(n,e)};q.useMemo=function(n,e){return fe.H.useMemo(n,e)};q.useOptimistic=function(n,e){return fe.H.useOptimistic(n,e)};q.useReducer=function(n,e,s){return fe.H.useReducer(n,e,s)};q.useRef=function(n){return fe.H.useRef(n)};q.useState=function(n){return fe.H.useState(n)};q.useSyncExternalStore=function(n,e,s){return fe.H.useSyncExternalStore(n,e,s)};q.useTransition=function(){return fe.H.useTransition()};q.version="19.0.0-rc-915b914b3a-20240515";Np.exports=q;var h=Np.exports;const Zn=so(h),Kx=Ax({__proto__:null,default:Zn},[h]);var Ep={exports:{}},Or={},Mp={exports:{}},Ap={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(C,L){var $=C.length;C.push(L);e:for(;0<$;){var V=$-1>>>1,J=C[V];if(0<l(J,L))C[V]=L,C[$]=J,$=V;else break e}}function s(C){return C.length===0?null:C[0]}function a(C){if(C.length===0)return null;var L=C[0],$=C.pop();if($!==L){C[0]=$;e:for(var V=0,J=C.length,Ae=J>>>1;V<Ae;){var He=2*(V+1)-1,w=C[He],E=He+1,O=C[E];if(0>l(w,$))E<J&&0>l(O,w)?(C[V]=O,C[E]=$,V=E):(C[V]=w,C[He]=$,V=He);else if(E<J&&0>l(O,$))C[V]=O,C[E]=$,V=E;else break e}}return L}function l(C,L){var $=C.sortIndex-L.sortIndex;return $!==0?$:C.id-L.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;n.unstable_now=function(){return r.now()}}else{var c=Date,i=c.now();n.unstable_now=function(){return c.now()-i}}var o=[],d=[],u=1,m=null,p=3,g=!1,y=!1,b=!1,N=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;function v(C){for(var L=s(d);L!==null;){if(L.callback===null)a(d);else if(L.startTime<=C)a(d),L.sortIndex=L.expirationTime,e(o,L);else break;L=s(d)}}function j(C){if(b=!1,v(C),!y)if(s(o)!==null)y=!0,Ue();else{var L=s(d);L!==null&&ge(j,L.startTime-C)}}var _=!1,k=-1,R=5,M=-1;function Y(){return!(n.unstable_now()-M<R)}function B(){if(_){var C=n.unstable_now();M=C;var L=!0;try{e:{y=!1,b&&(b=!1,x(k),k=-1),g=!0;var $=p;try{n:{for(v(C),m=s(o);m!==null&&!(m.expirationTime>C&&Y());){var V=m.callback;if(typeof V=="function"){m.callback=null,p=m.priorityLevel;var J=V(m.expirationTime<=C);if(C=n.unstable_now(),typeof J=="function"){m.callback=J,v(C),L=!0;break n}m===s(o)&&a(o),v(C)}else a(o);m=s(o)}if(m!==null)L=!0;else{var Ae=s(d);Ae!==null&&ge(j,Ae.startTime-C),L=!1}}break e}finally{m=null,p=$,g=!1}L=void 0}}finally{L?ce():_=!1}}}var ce;if(typeof f=="function")ce=function(){f(B)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,tn=U.port2;U.port1.onmessage=B,ce=function(){tn.postMessage(null)}}else ce=function(){N(B,0)};function Ue(){_||(_=!0,ce())}function ge(C,L){k=N(function(){C(n.unstable_now())},L)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(C){C.callback=null},n.unstable_continueExecution=function(){y||g||(y=!0,Ue())},n.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<C?Math.floor(1e3/C):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return s(o)},n.unstable_next=function(C){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var $=p;p=L;try{return C()}finally{p=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var $=p;p=C;try{return L()}finally{p=$}},n.unstable_scheduleCallback=function(C,L,$){var V=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?V+$:V):$=V,C){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=$+J,C={id:u++,callback:L,priorityLevel:C,startTime:$,expirationTime:J,sortIndex:-1},$>V?(C.sortIndex=$,e(d,C),s(o)===null&&C===s(d)&&(b?(x(k),k=-1):b=!0,ge(j,$-V))):(C.sortIndex=J,e(o,C),y||g||(y=!0,Ue())),C},n.unstable_shouldYield=Y,n.unstable_wrapCallback=function(C){var L=p;return function(){var $=p;p=L;try{return C.apply(this,arguments)}finally{p=$}}}})(Ap);Mp.exports=Ap;var Wx=Mp.exports,Tp={exports:{}},Ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function $p(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)e+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wa=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ct(){}var Xe={d:{f:ct,r:function(){throw Error($p(522))},D:ct,C:ct,L:ct,m:ct,X:ct,S:ct,M:ct},p:0,findDOMNode:null},Px=Symbol.for("react.portal");function Fx(n,e,s){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Px,key:a==null?null:""+a,children:n,containerInfo:e,implementation:s}}function zr(n,e){if(n==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Xe;Ye.createPortal=function(n,e){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error($p(299));return Fx(n,e,null,s)};Ye.flushSync=function(n){var e=wa.T,s=Xe.p;try{if(wa.T=null,Xe.p=2,n)return n()}finally{wa.T=e,Xe.p=s,Xe.d.f()}};Ye.preconnect=function(n,e){typeof n=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Xe.d.C(n,e))};Ye.prefetchDNS=function(n){typeof n=="string"&&Xe.d.D(n)};Ye.preinit=function(n,e){if(typeof n=="string"&&e&&typeof e.as=="string"){var s=e.as,a=zr(s,e.crossOrigin),l=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;s==="style"?Xe.d.S(n,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:a,integrity:l,fetchPriority:r}):s==="script"&&Xe.d.X(n,{crossOrigin:a,integrity:l,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Ye.preinitModule=function(n,e){if(typeof n=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var s=zr(e.as,e.crossOrigin);Xe.d.M(n,{crossOrigin:s,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Xe.d.M(n)};Ye.preload=function(n,e){if(typeof n=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var s=e.as,a=zr(s,e.crossOrigin);Xe.d.L(n,s,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Ye.preloadModule=function(n,e){if(typeof n=="string")if(e){var s=zr(e.as,e.crossOrigin);Xe.d.m(n,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:s,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Xe.d.m(n)};Ye.requestFormReset=function(n){Xe.d.r(n)};Ye.unstable_batchedUpdates=function(n,e){return n(e)};Ye.useFormState=function(n,e,s){return wa.H.useFormState(n,e,s)};Ye.useFormStatus=function(){return wa.H.useHostTransitionStatus()};Ye.version="19.0.0-rc-915b914b3a-20240515";function Dp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dp)}catch(n){console.error(n)}}Dp(),Tp.exports=Ye;var cl=Tp.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=Wx,Ix=h,e1=cl;function S(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)e+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Lp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var n1=Symbol.for("react.element"),Nl=Symbol.for("react.transitional.element"),Sl=Symbol.for("react.portal"),ga=Symbol.for("react.fragment"),t1=Symbol.for("react.strict_mode"),Bu=Symbol.for("react.profiler"),s1=Symbol.for("react.provider"),a1=Symbol.for("react.consumer"),gt=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),Op=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),zp=Symbol.for("react.offscreen"),l1=Symbol.for("react.memo_cache_sentinel"),Uu=Symbol.iterator;function ca(n){return n===null||typeof n!="object"?null:(n=Uu&&n[Uu]||n["@@iterator"],typeof n=="function"?n:null)}function Ws(n){var e=n,s=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(s=e.return),n=e.return;while(n)}return e.tag===3?s:null}function Up(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Hu(n){if(Ws(n)!==n)throw Error(S(188))}function r1(n){var e=n.alternate;if(!e){if(e=Ws(n),e===null)throw Error(S(188));return e!==n?null:n}for(var s=n,a=e;;){var l=s.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){s=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===s)return Hu(l),n;if(r===a)return Hu(l),e;r=r.sibling}throw Error(S(188))}if(s.return!==a.return)s=l,a=r;else{for(var c=!1,i=l.child;i;){if(i===s){c=!0,s=l,a=r;break}if(i===a){c=!0,a=l,s=r;break}i=i.sibling}if(!c){for(i=r.child;i;){if(i===s){c=!0,s=r,a=l;break}if(i===a){c=!0,a=r,s=l;break}i=i.sibling}if(!c)throw Error(S(189))}}if(s.alternate!==a)throw Error(S(190))}if(s.tag!==3)throw Error(S(188));return s.stateNode.current===s?n:e}function Hp(n){return n=r1(n),n!==null?qp(n):null}function qp(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=qp(n),e!==null)return e;n=n.sibling}return null}var me=Object.assign,va=Array.isArray,Z=Ix.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=e1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_a={pending:!1,data:null,method:null,action:null},si=[],vs=-1;function zn(n){return{current:n}}function Me(n){0>vs||(n.current=si[vs],si[vs]=null,vs--)}function de(n,e){vs++,si[vs]=n.current,n.current=e}var Tn=zn(null),Ha=zn(null),Nt=zn(null),ai=zn(null),sr={$$typeof:gt,Provider:null,Consumer:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ar(n,e){switch(de(Nt,e),de(Ha,n),de(Tn,null),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?Od(e):0;break;default:if(n=n===8?e.parentNode:e,e=n.tagName,n=n.namespaceURI)n=Od(n),e=n0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Me(Tn),de(Tn,e)}function Us(){Me(Tn),Me(Ha),Me(Nt)}function li(n){n.memoizedState!==null&&de(ai,n);var e=Tn.current,s=n0(e,n.type);e!==s&&(de(Ha,n),de(Tn,s))}function lr(n){Ha.current===n&&(Me(Tn),Me(Ha)),ai.current===n&&(Me(ai),sr._currentValue=null)}var ri=Object.prototype.hasOwnProperty,oo=Ce.unstable_scheduleCallback,oc=Ce.unstable_cancelCallback,c1=Ce.unstable_shouldYield,i1=Ce.unstable_requestPaint,$n=Ce.unstable_now,o1=Ce.unstable_getCurrentPriorityLevel,uo=Ce.unstable_ImmediatePriority,Vp=Ce.unstable_UserBlockingPriority,rr=Ce.unstable_NormalPriority,u1=Ce.unstable_LowPriority,Xp=Ce.unstable_IdlePriority,d1=Ce.log,m1=Ce.unstable_setDisableYieldValue,il=null,en=null;function p1(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(il,n,void 0,(n.current.flags&128)===128)}catch{}}function vt(n){if(typeof d1=="function"&&m1(n),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(il,n)}catch{}}var mn=Math.clz32?Math.clz32:x1,f1=Math.log,h1=Math.LN2;function x1(n){return n>>>=0,n===0?32:31-(f1(n)/h1|0)|0}var wl=128,_l=4194304;function ja(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function cr(n,e){var s=n.pendingLanes;if(s===0)return 0;var a=0,l=n.suspendedLanes;n=n.pingedLanes;var r=s&134217727;return r!==0?(s=r&~l,s!==0?a=ja(s):(n&=r,n!==0&&(a=ja(n)))):(s&=~l,s!==0?a=ja(s):n!==0&&(a=ja(n))),a===0?0:e!==0&&e!==a&&!(e&l)&&(l=a&-a,n=e&-e,l>=n||l===32&&(n&4194176)!==0)?e:a}function g1(n,e){switch(n){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gp(n,e){return n.errorRecoveryDisabledLanes&e?0:(n=n.pendingLanes&-536870913,n!==0?n:n&536870912?536870912:0)}function Zp(){var n=wl;return wl<<=1,!(wl&4194176)&&(wl=128),n}function Yp(){var n=_l;return _l<<=1,!(_l&62914560)&&(_l=4194304),n}function uc(n){for(var e=[],s=0;31>s;s++)e.push(n);return e}function v1(n,e,s){var a=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0,e=n.entanglements;for(var l=n.expirationTimes,r=n.hiddenUpdates;0<a;){var c=31-mn(a),i=1<<c;e[c]=0,l[c]=-1;var o=r[c];if(o!==null)for(r[c]=null,c=0;c<o.length;c++){var d=o[c];d!==null&&(d.lane&=-536870913)}a&=~i}s!==0&&Qp(n,s,0)}function Qp(n,e,s){n.pendingLanes|=e,n.suspendedLanes&=~e;var a=31-mn(e);n.entangledLanes|=e,n.entanglements[a]=n.entanglements[a]|1073741824|s&4194218}function Jp(n,e){var s=n.entangledLanes|=e;for(n=n.entanglements;s;){var a=31-mn(s),l=1<<a;l&e|n[a]&e&&(n[a]|=e),s&=~l}}function Kp(n){return n&=-n,2<n?8<n?n&134217727?32:268435456:8:2}function Wp(){var n=ue.p;return n!==0?n:(n=window.event,n===void 0?32:u0(n.type))}function j1(n,e){var s=ue.p;try{return ue.p=n,e()}finally{ue.p=s}}var Tt=Math.random().toString(36).slice(2),Oe="__reactFiber$"+Tt,Ge="__reactProps$"+Tt,Ps="__reactContainer$"+Tt,ci="__reactEvents$"+Tt,b1="__reactListeners$"+Tt,y1="__reactHandles$"+Tt,qu="__reactResources$"+Tt,qa="__reactMarker$"+Tt;function mo(n){delete n[Oe],delete n[Ge],delete n[ci],delete n[b1],delete n[y1]}function Vt(n){var e=n[Oe];if(e)return e;for(var s=n.parentNode;s;){if(e=s[Ps]||s[Oe]){if(s=e.alternate,e.child!==null||s!==null&&s.child!==null)for(n=Ud(n);n!==null;){if(s=n[Oe])return s;n=Ud(n)}return e}n=s,s=n.parentNode}return null}function Fs(n){if(n=n[Oe]||n[Ps]){var e=n.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return n}return null}function ba(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(S(33))}function Es(n){var e=n[qu];return e||(e=n[qu]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ee(n){n[qa]=!0}var Pp=new Set,Fp={};function es(n,e){Hs(n,e),Hs(n+"Capture",e)}function Hs(n,e){for(Fp[n]=e,n=0;n<e.length;n++)Pp.add(e[n])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vu={},Xu={};function S1(n){return ri.call(Xu,n)?!0:ri.call(Vu,n)?!1:N1.test(n)?Xu[n]=!0:(Vu[n]=!0,!1)}function ii(n,e,s){if(S1(e))if(s===null)n.removeAttribute(e);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+s)}}function dc(n,e,s){if(s===null)n.removeAttribute(e);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+s)}}function Hn(n,e,s,a){if(a===null)n.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(e,s,""+a)}}var mc;function ya(n){if(mc===void 0)try{throw Error()}catch(s){var e=s.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||""}return`
`+mc+n}var pc=!1;function fc(n,e){if(!n||pc)return"";pc=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var a={DetermineComponentFrameRoot:function(){try{if(e){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(g){var p=g}Reflect.construct(n,[],m)}else{try{m.call()}catch(g){p=g}n.call(m.prototype)}}else{try{throw Error()}catch(g){p=g}(m=n())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(g){if(g&&p&&typeof g.stack=="string")return[g.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});try{var r=a.DetermineComponentFrameRoot(),c=r[0],i=r[1];if(c&&i){var o=c.split(`
`),d=i.split(`
`);for(l=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;if(a===o.length||l===d.length)for(a=o.length-1,l=d.length-1;1<=a&&0<=l&&o[a]!==d[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==d[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==d[l]){var u=`
`+o[a].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=a&&0<=l);break}}}finally{pc=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?ya(s):""}function w1(n){switch(n.tag){case 26:case 27:case 5:return ya(n.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 15:return n=fc(n.type,!1),n;case 11:return n=fc(n.type.render,!1),n;case 1:return n=fc(n.type,!0),n;default:return""}}function Gu(n){try{var e="";do e+=w1(n),n=n.return;while(n);return e}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function rn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ip(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _1(n){var e=Ip(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),a=""+n[e];if(!n.hasOwnProperty(e)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,r=s.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,r.call(this,c)}}),Object.defineProperty(n,e,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ir(n){n._valueTracker||(n._valueTracker=_1(n))}function ef(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var s=e.getValue(),a="";return n&&(a=Ip(n)?n.checked?"true":"false":n.value),n=a,n!==s?(e.setValue(n),!0):!1}function or(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var k1=/[\n"\\]/g;function un(n){return n.replace(k1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function oi(n,e,s,a,l,r,c,i){n.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.type=c:n.removeAttribute("type"),e!=null?c==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+rn(e)):n.value!==""+rn(e)&&(n.value=""+rn(e)):c!=="submit"&&c!=="reset"||n.removeAttribute("value"),e!=null?ui(n,c,rn(e)):s!=null?ui(n,c,rn(s)):a!=null&&n.removeAttribute("value"),l==null&&r!=null&&(n.defaultChecked=!!r),l!=null&&(n.checked=l&&typeof l!="function"&&typeof l!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?n.name=""+rn(i):n.removeAttribute("name")}function nf(n,e,s,a,l,r,c,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.type=r),e!=null||s!=null){if(!(r!=="submit"&&r!=="reset"||e!=null))return;s=s!=null?""+rn(s):"",e=e!=null?""+rn(e):s,i||e===n.value||(n.value=e),n.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,n.checked=i?n.checked:!!a,n.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(n.name=c)}function ui(n,e,s){e==="number"&&or(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Ms(n,e,s,a){if(n=n.options,e){e={};for(var l=0;l<s.length;l++)e["$"+s[l]]=!0;for(s=0;s<n.length;s++)l=e.hasOwnProperty("$"+n[s].value),n[s].selected!==l&&(n[s].selected=l),l&&a&&(n[s].defaultSelected=!0)}else{for(s=""+rn(s),e=null,l=0;l<n.length;l++){if(n[l].value===s){n[l].selected=!0,a&&(n[l].defaultSelected=!0);return}e!==null||n[l].disabled||(e=n[l])}e!==null&&(e.selected=!0)}}function tf(n,e,s){if(e!=null&&(e=""+rn(e),e!==n.value&&(n.value=e),s==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=s!=null?""+rn(s):""}function sf(n,e,s,a){if(e==null){if(a!=null){if(s!=null)throw Error(S(92));if(va(a)){if(1<a.length)throw Error(S(93));a=a[0]}s=a}s==null&&(s=""),e=s}s=rn(e),n.defaultValue=s,a=n.textContent,a===s&&a!==""&&a!==null&&(n.value=a)}function qs(n,e){if(e){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=e;return}}n.textContent=e}var C1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zu(n,e,s){var a=e.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?a?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":a?n.setProperty(e,s):typeof s!="number"||s===0||C1.has(e)?e==="float"?n.cssFloat=s:n[e]=(""+s).trim():n[e]=s+"px"}function af(n,e,s){if(e!=null&&typeof e!="object")throw Error(S(62));if(n=n.style,s!=null){for(var a in s)!s.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&s[l]!==a&&Zu(n,l,a)}else for(var r in e)e.hasOwnProperty(r)&&Zu(n,r,e[r])}function po(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),E1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xl(n){return E1.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var di=null;function fo(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var js=null,As=null;function Yu(n){var e=Fs(n);if(e&&(n=e.stateNode)){var s=n[Ge]||null;e:switch(n=e.stateNode,e.type){case"input":if(oi(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),e=s.name,s.type==="radio"&&e!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+un(""+e)+'"][type="radio"]'),e=0;e<s.length;e++){var a=s[e];if(a!==n&&a.form===n.form){var l=a[Ge]||null;if(!l)throw Error(S(90));oi(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<s.length;e++)a=s[e],a.form===n.form&&ef(a)}break e;case"textarea":tf(n,s.value,s.defaultValue);break e;case"select":e=s.value,e!=null&&Ms(n,!!s.multiple,e,!1)}}}var hc=!1;function lf(n,e,s){if(hc)return n(e,s);hc=!0;try{var a=n(e);return a}finally{if(hc=!1,(js!==null||As!==null)&&(Wr(),js&&(e=js,n=As,As=js=null,Yu(e),n)))for(e=0;e<n.length;e++)Yu(n[e])}}function Va(n,e){var s=n.stateNode;if(s===null)return null;var a=s[Ge]||null;if(a===null)return null;s=a[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(S(231,e,typeof s));return s}var mi=!1;if(et)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){mi=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{mi=!1}var jt=null,ho=null,Gl=null;function rf(){if(Gl)return Gl;var n,e=ho,s=e.length,a,l="value"in jt?jt.value:jt.textContent,r=l.length;for(n=0;n<s&&e[n]===l[n];n++);var c=s-n;for(a=1;a<=c&&e[s-a]===l[r-a];a++);return Gl=l.slice(n,1<a?1-a:void 0)}function Zl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function kl(){return!0}function Qu(){return!1}function nn(n){function e(s,a,l,r,c){this._reactName=s,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var i in n)n.hasOwnProperty(i)&&(s=n[i],this[i]=s?s(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?kl:Qu,this.isPropagationStopped=Qu,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ur=nn(Is),ol=me({},Is,{view:0,detail:0}),M1=nn(ol),xc,gc,oa,Hr=me({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xo,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oa&&(oa&&n.type==="mousemove"?(xc=n.screenX-oa.screenX,gc=n.screenY-oa.screenY):gc=xc=0,oa=n),xc)},movementY:function(n){return"movementY"in n?n.movementY:gc}}),Ju=nn(Hr),A1=me({},Hr,{dataTransfer:0}),T1=nn(A1),$1=me({},ol,{relatedTarget:0}),vc=nn($1),D1=me({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),L1=nn(D1),B1=me({},Is,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),O1=nn(B1),z1=me({},Is,{data:0}),Ku=nn(z1),U1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=q1[n])?!!e[n]:!1}function xo(){return V1}var X1=me({},ol,{key:function(n){if(n.key){var e=U1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Zl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?H1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xo,charCode:function(n){return n.type==="keypress"?Zl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Zl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),G1=nn(X1),Z1=me({},Hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wu=nn(Z1),Y1=me({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xo}),Q1=nn(Y1),J1=me({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),K1=nn(J1),W1=me({},Hr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),P1=nn(W1),F1=[9,13,27,32],go=et&&"CompositionEvent"in window,ka=null;et&&"documentMode"in document&&(ka=document.documentMode);var I1=et&&"TextEvent"in window&&!ka,cf=et&&(!go||ka&&8<ka&&11>=ka),Pu=" ",Fu=!1;function of(n,e){switch(n){case"keyup":return F1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function eg(n,e){switch(n){case"compositionend":return uf(e);case"keypress":return e.which!==32?null:(Fu=!0,Pu);case"textInput":return n=e.data,n===Pu&&Fu?null:n;default:return null}}function ng(n,e){if(bs)return n==="compositionend"||!go&&of(n,e)?(n=rf(),Gl=ho=jt=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cf&&e.locale!=="ko"?null:e.data;default:return null}}var tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iu(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!tg[n.type]:e==="textarea"}function df(n,e,s,a){js?As?As.push(a):As=[a]:js=a,e=_r(e,"onChange"),0<e.length&&(s=new Ur("onChange","change",null,s,a),n.push({event:s,listeners:e}))}var Ca=null,Xa=null;function sg(n){Fh(n,0)}function qr(n){var e=ba(n);if(ef(e))return n}function ed(n,e){if(n==="change")return e}var mf=!1;if(et){var jc;if(et){var bc="oninput"in document;if(!bc){var nd=document.createElement("div");nd.setAttribute("oninput","return;"),bc=typeof nd.oninput=="function"}jc=bc}else jc=!1;mf=jc&&(!document.documentMode||9<document.documentMode)}function td(){Ca&&(Ca.detachEvent("onpropertychange",pf),Xa=Ca=null)}function pf(n){if(n.propertyName==="value"&&qr(Xa)){var e=[];df(e,Xa,n,fo(n)),lf(sg,e)}}function ag(n,e,s){n==="focusin"?(td(),Ca=e,Xa=s,Ca.attachEvent("onpropertychange",pf)):n==="focusout"&&td()}function lg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return qr(Xa)}function rg(n,e){if(n==="click")return qr(e)}function cg(n,e){if(n==="input"||n==="change")return qr(e)}function ig(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var pn=typeof Object.is=="function"?Object.is:ig;function Ga(n,e){if(pn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var s=Object.keys(n),a=Object.keys(e);if(s.length!==a.length)return!1;for(a=0;a<s.length;a++){var l=s[a];if(!ri.call(e,l)||!pn(n[l],e[l]))return!1}return!0}function sd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ad(n,e){var s=sd(n);n=0;for(var a;s;){if(s.nodeType===3){if(a=n+s.textContent.length,n<=e&&a>=e)return{node:s,offset:e-n};n=a}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=sd(s)}}function ff(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?ff(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function hf(){for(var n=window,e=or();e instanceof n.HTMLIFrameElement;){try{var s=typeof e.contentWindow.location.href=="string"}catch{s=!1}if(s)n=e.contentWindow;else break;e=or(n.document)}return e}function vo(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function og(n){var e=hf(),s=n.focusedElem,a=n.selectionRange;if(e!==s&&s&&s.ownerDocument&&ff(s.ownerDocument.documentElement,s)){if(a!==null&&vo(s)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in s)s.selectionStart=e,s.selectionEnd=Math.min(n,s.value.length);else if(n=(e=s.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var l=s.textContent.length,r=Math.min(a.start,l);a=a.end===void 0?r:Math.min(a.end,l),!n.extend&&r>a&&(l=a,a=r,r=l),l=ad(s,r);var c=ad(s,a);l&&c&&(n.rangeCount!==1||n.anchorNode!==l.node||n.anchorOffset!==l.offset||n.focusNode!==c.node||n.focusOffset!==c.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),n.removeAllRanges(),r>a?(n.addRange(e),n.extend(c.node,c.offset)):(e.setEnd(c.node,c.offset),n.addRange(e)))}}for(e=[],n=s;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<e.length;s++)n=e[s],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ug=et&&"documentMode"in document&&11>=document.documentMode,ys=null,pi=null,Ra=null,fi=!1;function ld(n,e,s){var a=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;fi||ys==null||ys!==or(a)||(a=ys,"selectionStart"in a&&vo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ra&&Ga(Ra,a)||(Ra=a,a=_r(pi,"onSelect"),0<a.length&&(e=new Ur("onSelect","select",null,e,s),n.push({event:e,listeners:a}),e.target=ys)))}function zt(n,e){var s={};return s[n.toLowerCase()]=e.toLowerCase(),s["Webkit"+n]="webkit"+e,s["Moz"+n]="moz"+e,s}var Ns={animationend:zt("Animation","AnimationEnd"),animationiteration:zt("Animation","AnimationIteration"),animationstart:zt("Animation","AnimationStart"),transitionrun:zt("Transition","TransitionRun"),transitionstart:zt("Transition","TransitionStart"),transitioncancel:zt("Transition","TransitionCancel"),transitionend:zt("Transition","TransitionEnd")},yc={},xf={};et&&(xf=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function ns(n){if(yc[n])return yc[n];if(!Ns[n])return n;var e=Ns[n],s;for(s in e)if(e.hasOwnProperty(s)&&s in xf)return yc[n]=e[s];return n}var gf=ns("animationend"),vf=ns("animationiteration"),jf=ns("animationstart"),dg=ns("transitionrun"),mg=ns("transitionstart"),pg=ns("transitioncancel"),bf=ns("transitionend"),yf=new Map,rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Sn(n,e){yf.set(n,e),es(e,[n])}var an=[],Ss=0,jo=0;function Vr(){for(var n=Ss,e=jo=Ss=0;e<n;){var s=an[e];an[e++]=null;var a=an[e];an[e++]=null;var l=an[e];an[e++]=null;var r=an[e];if(an[e++]=null,a!==null&&l!==null){var c=a.pending;c===null?l.next=l:(l.next=c.next,c.next=l),a.pending=l}r!==0&&Nf(s,l,r)}}function Xr(n,e,s,a){an[Ss++]=n,an[Ss++]=e,an[Ss++]=s,an[Ss++]=a,jo|=a,n.lanes|=a,n=n.alternate,n!==null&&(n.lanes|=a)}function bo(n,e,s,a){return Xr(n,e,s,a),ur(n)}function Mt(n,e){return Xr(n,null,null,e),ur(n)}function Nf(n,e,s){n.lanes|=s;var a=n.alternate;a!==null&&(a.lanes|=s);for(var l=!1,r=n.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),r.tag===22&&(n=r.stateNode,n===null||n._visibility&1||(l=!0)),n=r,r=r.return;l&&e!==null&&n.tag===3&&(r=n.stateNode,l=31-mn(s),r=r.hiddenUpdates,n=r[l],n===null?r[l]=[e]:n.push(e),e.lane=s|536870912)}function ur(n){Ko();for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var ws={},cd=new WeakMap;function dn(n,e){if(typeof n=="object"&&n!==null){var s=cd.get(n);typeof s!="string"&&(s=Gu(e),cd.set(n,s))}else s=Gu(e);return{value:n,source:e,stack:s}}var _s=[],ks=0,dr=null,mr=0,cn=[],on=0,Zt=null,Qn=1,Jn="";function Ht(n,e){_s[ks++]=mr,_s[ks++]=dr,dr=n,mr=e}function Sf(n,e,s){cn[on++]=Qn,cn[on++]=Jn,cn[on++]=Zt,Zt=n;var a=Qn;n=Jn;var l=32-mn(a)-1;a&=~(1<<l),s+=1;var r=32-mn(e)+l;if(30<r){var c=l-l%5;r=(a&(1<<c)-1).toString(32),a>>=c,l-=c,Qn=1<<32-mn(e)+l|s<<l|a,Jn=r+n}else Qn=1<<r|s<<l|a,Jn=n}function yo(n){n.return!==null&&(Ht(n,1),Sf(n,1,0))}function No(n){for(;n===dr;)dr=_s[--ks],_s[ks]=null,mr=_s[--ks],_s[ks]=null;for(;n===Zt;)Zt=cn[--on],cn[on]=null,Jn=cn[--on],cn[on]=null,Qn=cn[--on],cn[on]=null}var Ve=null,$e=null,P=!1,vn=null,En=!1,hi=Error(S(519));function Kt(n){var e=Error(S(418,""));throw Za(dn(e,n)),hi}function id(n){var e=n.stateNode,s=n.type,a=n.memoizedProps;switch(e[Oe]=n,e[Ge]=a,s){case"dialog":F("cancel",e),F("close",e);break;case"iframe":case"object":case"embed":F("load",e);break;case"video":case"audio":for(s=0;s<Ka.length;s++)F(Ka[s],e);break;case"source":F("error",e);break;case"img":case"image":case"link":F("error",e),F("load",e);break;case"details":F("toggle",e);break;case"input":F("invalid",e),nf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),ir(e);break;case"select":F("invalid",e);break;case"textarea":F("invalid",e),sf(e,a.value,a.defaultValue,a.children),ir(e)}s=a.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||e.textContent===""+s||a.suppressHydrationWarning===!0||e0(e.textContent,s)?(a.onScroll!=null&&F("scroll",e),a.onScrollEnd!=null&&F("scrollend",e),a.onClick!=null&&(e.onclick=Fr),e=!0):e=!1,e||Kt(n)}function od(n){for(Ve=n.return;Ve;)switch(Ve.tag){case 3:case 27:En=!0;return;case 5:case 13:En=!1;return;default:Ve=Ve.return}}function ua(n){if(n!==Ve)return!1;if(!P)return od(n),P=!0,!1;var e=!1,s;if((s=n.tag!==3&&n.tag!==27)&&((s=n.tag===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Vi(n.type,n.memoizedProps)),s=!s),s&&(e=!0),e&&$e&&Kt(n),od(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(S(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(e===0){$e=Nn(n.nextSibling);break e}e--}else s!=="$"&&s!=="$!"&&s!=="$?"||e++;n=n.nextSibling}$e=null}}else $e=Ve?Nn(n.stateNode.nextSibling):null;return!0}function ul(){$e=Ve=null,P=!1}function Za(n){vn===null?vn=[n]:vn.push(n)}var Yl=Error(S(460)),wf=Error(S(474)),xi={then:function(){}};function ud(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Cl(){}function _f(n,e,s){switch(s=n[s],s===void 0?n.push(e):s!==e&&(e.then(Cl,Cl),e=s),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,n===Yl?Error(S(483)):n;default:if(typeof e.status=="string")e.then(Cl,Cl);else{if(n=te,n!==null&&100<n.shellSuspendCounter)throw Error(S(482));n=e,n.status="pending",n.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,n===Yl?Error(S(483)):n}throw Ea=e,Yl}}var Ea=null;function dd(){if(Ea===null)throw Error(S(459));var n=Ea;return Ea=null,n}var Ts=null,Ya=0;function Rl(n){var e=Ya;return Ya+=1,Ts===null&&(Ts=[]),_f(Ts,n,e)}function da(n,e,s,a){n=a.props.ref,s.ref=n!==void 0?n:null}function El(n,e){throw e.$$typeof===n1?Error(S(525)):(n=Object.prototype.toString.call(e),Error(S(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function md(n){var e=n._init;return e(n._payload)}function kf(n){function e(x,f){if(n){var v=x.deletions;v===null?(x.deletions=[f],x.flags|=16):v.push(f)}}function s(x,f){if(!n)return null;for(;f!==null;)e(x,f),f=f.sibling;return null}function a(x){for(var f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function l(x,f){return x=wt(x,f),x.index=0,x.sibling=null,x}function r(x,f,v){return x.index=v,n?(v=x.alternate,v!==null?(v=v.index,v<f?(x.flags|=33554434,f):v):(x.flags|=33554434,f)):(x.flags|=1048576,f)}function c(x){return n&&x.alternate===null&&(x.flags|=33554434),x}function i(x,f,v,j){return f===null||f.tag!==6?(f=Dc(v,x.mode,j),f.return=x,f):(f=l(f,v),f.return=x,f)}function o(x,f,v,j){var _=v.type;return _===ga?u(x,f,v.props.children,j,v.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&md(_)===f.type)?(j=l(f,v.props),da(x,f,j,v),j.return=x,j):(j=Pl(v.type,v.key,v.props,null,x.mode,j),da(x,f,j,v),j.return=x,j)}function d(x,f,v,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Lc(v,x.mode,j),f.return=x,f):(f=l(f,v.children||[]),f.return=x,f)}function u(x,f,v,j,_){return f===null||f.tag!==7?(f=Qt(v,x.mode,j,_),f.return=x,f):(f=l(f,v),f.return=x,f)}function m(x,f,v){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Dc(""+f,x.mode,v),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Nl:return v=Pl(f.type,f.key,f.props,null,x.mode,v),da(x,null,v,f),v.return=x,v;case Sl:return f=Lc(f,x.mode,v),f.return=x,f;case Ut:var j=f._init;return m(x,j(f._payload),v)}if(va(f)||ca(f))return f=Qt(f,x.mode,v,null),f.return=x,f;if(typeof f.then=="function")return m(x,Rl(f),v);if(f.$$typeof===gt)return m(x,Tl(x,f,v),v);El(x,f)}return null}function p(x,f,v,j){var _=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return _!==null?null:i(x,f,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Nl:return v.key===_?o(x,f,v,j):null;case Sl:return v.key===_?d(x,f,v,j):null;case Ut:return _=v._init,p(x,f,_(v._payload),j)}if(va(v)||ca(v))return _!==null?null:u(x,f,v,j,null);if(typeof v.then=="function")return p(x,f,Rl(v),j);if(v.$$typeof===gt)return p(x,f,Tl(x,v,j),j);El(x,v)}return null}function g(x,f,v,j,_){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return x=x.get(v)||null,i(f,x,""+j,_);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Nl:return x=x.get(j.key===null?v:j.key)||null,o(f,x,j,_);case Sl:return x=x.get(j.key===null?v:j.key)||null,d(f,x,j,_);case Ut:var k=j._init;return g(x,f,v,k(j._payload),_)}if(va(j)||ca(j))return x=x.get(v)||null,u(f,x,j,_,null);if(typeof j.then=="function")return g(x,f,v,Rl(j),_);if(j.$$typeof===gt)return g(x,f,v,Tl(f,j,_),_);El(f,j)}return null}function y(x,f,v,j){for(var _=null,k=null,R=f,M=f=0,Y=null;R!==null&&M<v.length;M++){R.index>M?(Y=R,R=null):Y=R.sibling;var B=p(x,R,v[M],j);if(B===null){R===null&&(R=Y);break}n&&R&&B.alternate===null&&e(x,R),f=r(B,f,M),k===null?_=B:k.sibling=B,k=B,R=Y}if(M===v.length)return s(x,R),P&&Ht(x,M),_;if(R===null){for(;M<v.length;M++)R=m(x,v[M],j),R!==null&&(f=r(R,f,M),k===null?_=R:k.sibling=R,k=R);return P&&Ht(x,M),_}for(R=a(R);M<v.length;M++)Y=g(R,x,M,v[M],j),Y!==null&&(n&&Y.alternate!==null&&R.delete(Y.key===null?M:Y.key),f=r(Y,f,M),k===null?_=Y:k.sibling=Y,k=Y);return n&&R.forEach(function(ce){return e(x,ce)}),P&&Ht(x,M),_}function b(x,f,v,j){if(v==null)throw Error(S(151));for(var _=null,k=null,R=f,M=f=0,Y=null,B=v.next();R!==null&&!B.done;M++,B=v.next(),null){R.index>M?(Y=R,R=null):Y=R.sibling;var ce=p(x,R,B.value,j);if(ce===null){R===null&&(R=Y);break}n&&R&&ce.alternate===null&&e(x,R),f=r(ce,f,M),k===null?_=ce:k.sibling=ce,k=ce,R=Y}if(B.done)return s(x,R),P&&Ht(x,M),_;if(R===null){for(;!B.done;M++,B=v.next(),null)B=m(x,B.value,j),B!==null&&(f=r(B,f,M),k===null?_=B:k.sibling=B,k=B);return P&&Ht(x,M),_}for(R=a(R);!B.done;M++,B=v.next(),null)B=g(R,x,M,B.value,j),B!==null&&(n&&B.alternate!==null&&R.delete(B.key===null?M:B.key),f=r(B,f,M),k===null?_=B:k.sibling=B,k=B);return n&&R.forEach(function(U){return e(x,U)}),P&&Ht(x,M),_}function N(x,f,v,j){if(typeof v=="object"&&v!==null&&v.type===ga&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Nl:e:{for(var _=v.key,k=f;k!==null;){if(k.key===_){if(_=v.type,_===ga){if(k.tag===7){s(x,k.sibling),f=l(k,v.props.children),f.return=x,x=f;break e}}else if(k.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&md(_)===k.type){s(x,k.sibling),f=l(k,v.props),da(x,k,f,v),f.return=x,x=f;break e}s(x,k);break}else e(x,k);k=k.sibling}v.type===ga?(f=Qt(v.props.children,x.mode,j,v.key),f.return=x,x=f):(j=Pl(v.type,v.key,v.props,null,x.mode,j),da(x,f,j,v),j.return=x,x=j)}return c(x);case Sl:e:{for(k=v.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){s(x,f.sibling),f=l(f,v.children||[]),f.return=x,x=f;break e}else{s(x,f);break}else e(x,f);f=f.sibling}f=Lc(v,x.mode,j),f.return=x,x=f}return c(x);case Ut:return k=v._init,N(x,f,k(v._payload),j)}if(va(v))return y(x,f,v,j);if(ca(v)){if(k=ca(v),typeof k!="function")throw Error(S(150));return v=k.call(v),b(x,f,v,j)}if(typeof v.then=="function")return N(x,f,Rl(v),j);if(v.$$typeof===gt)return N(x,f,Tl(x,v,j),j);El(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,f!==null&&f.tag===6?(s(x,f.sibling),f=l(f,v),f.return=x,x=f):(s(x,f),f=Dc(v,x.mode,j),f.return=x,x=f),c(x)):s(x,f)}return function(x,f,v,j){return Ya=0,x=N(x,f,v,j),Ts=null,x}}var Wt=kf(!0),Cf=kf(!1),Vs=zn(null),pr=zn(0);function pd(n,e){n=tt,de(pr,n),de(Vs,e),tt=n|e.baseLanes}function gi(){de(pr,tt),de(Vs,Vs.current)}function So(){tt=pr.current,Me(Vs),Me(pr)}var Ln=zn(null),Dn=null;function pt(n){var e=n.alternate;de(ke,ke.current&1),de(Ln,n),Dn===null&&(e===null||Vs.current!==null||e.memoizedState!==null)&&(Dn=n)}function Rf(n){if(n.tag===22){if(de(ke,ke.current),de(Ln,n),Dn===null){var e=n.alternate;e!==null&&e.memoizedState!==null&&(Dn=n)}}else ft()}function ft(){de(ke,ke.current),de(Ln,Ln.current)}function Kn(n){Me(Ln),Dn===n&&(Dn=null),Me(ke)}var ke=zn(0);function fr(n){for(var e=n;e!==null;){if(e.tag===13){var s=e.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fg=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(s,a){n.push(a)}};this.abort=function(){e.aborted=!0,n.forEach(function(s){return s()})}},hg=Ce.unstable_scheduleCallback,xg=Ce.unstable_NormalPriority,_e={$$typeof:gt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wo(){return{controller:new fg,data:new Map,refCount:0}}function dl(n){n.refCount--,n.refCount===0&&hg(xg,function(){n.controller.abort()})}var Ma=null,vi=0,Xs=0,$s=null;function gg(n,e){if(Ma===null){var s=Ma=[];vi=0,Xs=Wo(),$s={status:"pending",value:void 0,then:function(a){s.push(a)}}}return vi++,e.then(fd,fd),e}function fd(){if(Ma!==null&&--vi===0){$s!==null&&($s.status="fulfilled");var n=Ma;Ma=null,Xs=0,$s=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function vg(n,e){var s=[],a={status:"pending",value:null,reason:null,then:function(l){s.push(l)}};return n.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<s.length;l++)(0,s[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<s.length;l++)(0,s[l])(void 0)}),a}function _o(){var n=Z.T;return n!==null&&n._callbacks.add(jg),n}function jg(n,e){gg(n,e)}function Ef(n,e){n._callbacks.forEach(function(s){return s(n,e)})}var Yt=zn(null);function ko(){var n=Yt.current;return n!==null?n:te.pooledCache}function Ql(n,e){e===null?de(Yt,Yt.current):de(Yt,e.pool)}function Mf(){var n=ko();return n===null?null:{parent:_e._currentValue,pool:n}}var At=0,H=null,ne=null,Se=null,hr=!1,Ds=!1,Pt=!1,xr=0,Qa=0,Ls=null,bg=0;function ve(){throw Error(S(321))}function Co(n,e){if(e===null)return!1;for(var s=0;s<e.length&&s<n.length;s++)if(!pn(n[s],e[s]))return!1;return!0}function Ro(n,e,s,a,l,r){return At=r,H=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Z.H=n===null||n.memoizedState===null?ts:ss,Pt=!1,n=s(a,l),Pt=!1,Ds&&(n=Tf(e,s,a,l)),Af(),n}function Af(){Z.H=Bn;var n=ne!==null&&ne.next!==null;if(At=0,Se=ne=H=null,hr=!1,Qa=0,Ls=null,n)throw Error(S(300))}function Tf(n,e,s,a){H=n;var l=0;do{if(Ds&&(Ls=null),Qa=0,Ds=!1,25<=l)throw Error(S(301));l+=1,Se=ne=null,n.updateQueue=null,Z.H=as;var r=e(s,a)}while(Ds);return r}function yg(){var n=Z.H,e=n.useState()[0];return e=typeof e.then=="function"?ml(e):e,n=n.useState()[0],(ne!==null?ne.memoizedState:null)!==n&&(H.flags|=1024),e}function Eo(){var n=xr!==0;return xr=0,n}function Mo(n,e,s){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~s}function Ao(n){if(hr){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}hr=!1}At=0,Se=ne=H=null,Ds=!1,Qa=xr=0,Ls=null}function Je(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?H.memoizedState=Se=n:Se=Se.next=n,Se}function we(){if(ne===null){var n=H.alternate;n=n!==null?n.memoizedState:null}else n=ne.next;var e=Se===null?H.memoizedState:Se.next;if(e!==null)Se=e,ne=n;else{if(n===null)throw H.alternate===null?Error(S(467)):Error(S(310));ne=n,n={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},Se===null?H.memoizedState=Se=n:Se=Se.next=n}return Se}var Gr;Gr=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function ml(n){var e=Qa;return Qa+=1,Ls===null&&(Ls=[]),n=_f(Ls,n,e),H.alternate===null&&(Se===null?H.memoizedState===null:Se.next===null)&&(Z.H=ts),n}function Zr(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ml(n);if(n.$$typeof===gt)return ze(n)}throw Error(S(438,String(n)))}function To(n){var e=null,s=H.updateQueue;if(s!==null&&(e=s.memoCache),e==null){var a=H.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),s===null&&(s=Gr(),H.updateQueue=s),s.memoCache=e,s=e.data[e.index],s===void 0)for(s=e.data[e.index]=Array(n),a=0;a<n;a++)s[a]=l1;return e.index++,s}function nt(n,e){return typeof e=="function"?e(n):e}function Jl(n){var e=we();return $o(e,ne,n)}function $o(n,e,s){var a=n.queue;if(a===null)throw Error(S(311));a.lastRenderedReducer=s;var l=n.baseQueue,r=a.pending;if(r!==null){if(l!==null){var c=l.next;l.next=r.next,r.next=c}e.baseQueue=l=r,a.pending=null}if(r=n.baseState,l===null)n.memoizedState=r;else{e=l.next;var i=c=null,o=null,d=e,u=!1;do{var m=d.lane&-536870913;if(m!==d.lane?(K&m)===m:(At&m)===m){var p=d.revertLane;if(p===0)o!==null&&(o=o.next={lane:0,revertLane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),m===Xs&&(u=!0);else if((At&p)===p){d=d.next,p===Xs&&(u=!0);continue}else m={lane:0,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(i=o=m,c=r):o=o.next=m,H.lanes|=p,st|=p;m=d.action,Pt&&s(r,m),r=d.hasEagerState?d.eagerState:s(r,m)}else p={lane:m,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(i=o=p,c=r):o=o.next=p,H.lanes|=m,st|=m;d=d.next}while(d!==null&&d!==e);if(o===null?c=r:o.next=i,!pn(r,n.memoizedState)&&(De=!0,u&&(s=$s,s!==null)))throw s;n.memoizedState=r,n.baseState=c,n.baseQueue=o,a.lastRenderedState=r}return l===null&&(a.lanes=0),[n.memoizedState,a.dispatch]}function Nc(n){var e=we(),s=e.queue;if(s===null)throw Error(S(311));s.lastRenderedReducer=n;var a=s.dispatch,l=s.pending,r=e.memoizedState;if(l!==null){s.pending=null;var c=l=l.next;do r=n(r,c.action),c=c.next;while(c!==l);pn(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),s.lastRenderedState=r}return[r,a]}function $f(n,e,s){var a=H,l=we(),r=P;if(r){if(s===void 0)throw Error(S(407));s=s()}else s=e();var c=!pn((ne||l).memoizedState,s);if(c&&(l.memoizedState=s,De=!0),l=l.queue,Do(Bf.bind(null,a,l,n),[n]),l.getSnapshot!==e||c||Se!==null&&Se.memoizedState.tag&1){if(a.flags|=2048,Gs(9,Lf.bind(null,a,l,s,e),{destroy:void 0},null),te===null)throw Error(S(349));r||At&60||Df(a,e,s)}return s}function Df(n,e,s){n.flags|=16384,n={getSnapshot:e,value:s},e=H.updateQueue,e===null?(e=Gr(),H.updateQueue=e,e.stores=[n]):(s=e.stores,s===null?e.stores=[n]:s.push(n))}function Lf(n,e,s,a){e.value=s,e.getSnapshot=a,Of(e)&&zf(n)}function Bf(n,e,s){return s(function(){Of(e)&&zf(n)})}function Of(n){var e=n.getSnapshot;n=n.value;try{var s=e();return!pn(n,s)}catch{return!0}}function zf(n){var e=Mt(n,2);e!==null&&Ze(e,n,2)}function ji(n){var e=Je();if(typeof n=="function"){var s=n;n=s(),Pt&&(vt(!0),s(),vt(!1))}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:n},e}function Uf(n,e,s,a){return n.baseState=s,$o(n,ne,typeof a=="function"?a:nt)}function Ng(n,e,s,a,l){if(Qr(n))throw Error(S(485));n=e.pending,n===null?(n={payload:l,next:null},n.next=e.pending=n,Hf(e,s,a,l)):e.pending=n.next={payload:l,next:n.next}}function Hf(n,e,s,a){var l=n.action,r=n.state,c=Z.T,i={_callbacks:new Set};Z.T=i,e(!0);try{var o=l(r,a);o!==null&&typeof o=="object"&&typeof o.then=="function"?(Ef(i,o),o.then(function(d){n.state=d,Ml(n,e,s)},function(){return Ml(n,e,s)}),s(o)):(s(o),n.state=o,Ml(n,e,s))}catch(d){s({then:function(){},status:"rejected",reason:d}),Ml(n,e,s)}finally{Z.T=c}}function Ml(n,e,s){var a=n.pending;if(a!==null){var l=a.next;l===a?n.pending=null:(l=l.next,a.next=l,Hf(n,e,s,l.payload))}}function qf(n,e){return e}function Vf(n,e){if(P){var s=te.formState;if(s!==null){e:{var a=H;if(P){if($e){n:{for(var l=$e,r=En;l.nodeType!==8;){if(!r){l=null;break n}if(l=Nn(l.nextSibling),l===null){l=null;break n}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){$e=Nn(l.nextSibling),a=l.data==="F!";break e}}Kt(a)}a=!1}a&&(e=s[0])}}return s=Je(),s.memoizedState=s.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qf,lastRenderedState:e},s.queue=a,s=Bs.bind(null,H,a),a.dispatch=s,a=ji(!1),r=zo.bind(null,H,!1,a.queue),a=Je(),l={state:e,dispatch:null,action:n,pending:null},a.queue=l,s=Ng.bind(null,H,l,r,s),l.dispatch=s,a.memoizedState=n,[e,s,!1]}function Xf(n){var e=we();return Gf(e,ne,n)}function Gf(n,e,s){e=$o(n,e,qf)[0],n=Jl(nt)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?ml(e):e;var a=we(),l=a.queue,r=l.dispatch;return s!==a.memoizedState&&(H.flags|=2048,Gs(9,Sg.bind(null,l,s),{destroy:void 0},null)),[e,r,n]}function Sg(n,e){n.action=e}function Zf(n){var e=we(),s=ne;if(s!==null)return Gf(e,s,n);we(),e=e.memoizedState,s=we();var a=s.queue.dispatch;return s.memoizedState=n,[e,a,!1]}function Gs(n,e,s,a){return n={tag:n,create:e,inst:s,deps:a,next:null},e=H.updateQueue,e===null?(e=Gr(),H.updateQueue=e,e.lastEffect=n.next=n):(s=e.lastEffect,s===null?e.lastEffect=n.next=n:(a=s.next,s.next=n,n.next=a,e.lastEffect=n)),n}function Yf(){return we().memoizedState}function Kl(n,e,s,a){var l=Je();H.flags|=n,l.memoizedState=Gs(1|e,s,{destroy:void 0},a===void 0?null:a)}function Yr(n,e,s,a){var l=we();a=a===void 0?null:a;var r=l.memoizedState.inst;ne!==null&&a!==null&&Co(a,ne.memoizedState.deps)?l.memoizedState=Gs(e,s,r,a):(H.flags|=n,l.memoizedState=Gs(1|e,s,r,a))}function hd(n,e){Kl(8390656,8,n,e)}function Do(n,e){Yr(2048,8,n,e)}function Qf(n,e){return Yr(4,2,n,e)}function Jf(n,e){return Yr(4,4,n,e)}function Kf(n,e){if(typeof e=="function"){n=n();var s=e(n);return function(){typeof s=="function"?s():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Wf(n,e,s){s=s!=null?s.concat([n]):null,Yr(4,4,Kf.bind(null,e,n),s)}function Lo(){}function Pf(n,e){var s=we();e=e===void 0?null:e;var a=s.memoizedState;return e!==null&&Co(e,a[1])?a[0]:(s.memoizedState=[n,e],n)}function Ff(n,e){var s=we();e=e===void 0?null:e;var a=s.memoizedState;return e!==null&&Co(e,a[1])?a[0]:(a=n(),Pt&&(vt(!0),n(),vt(!1)),s.memoizedState=[a,e],a)}function Bo(n,e,s){return s===void 0||At&1073741824?n.memoizedState=e:(n.memoizedState=s,n=qh(),H.lanes|=n,st|=n,s)}function If(n,e,s,a){return pn(s,e)?s:Vs.current!==null?(n=Bo(n,s,a),pn(n,e)||(De=!0),n):At&42?(n=qh(),H.lanes|=n,st|=n,e):(De=!0,n.memoizedState=s)}function eh(n,e,s,a,l){var r=ue.p;ue.p=r!==0&&8>r?r:8;var c=Z.T,i={_callbacks:new Set};Z.T=i,zo(n,!1,e,s);try{var o=l();if(o!==null&&typeof o=="object"&&typeof o.then=="function"){Ef(i,o);var d=vg(o,a);Bs(n,e,d)}else Bs(n,e,a)}catch(u){Bs(n,e,{then:function(){},status:"rejected",reason:u})}finally{ue.p=r,Z.T=c}}function wg(){}function bi(n,e,s,a){if(n.tag!==5)throw Error(S(476));var l=nh(n).queue;eh(n,l,e,_a,s===null?wg:function(){return th(n),s(a)})}function nh(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:_a,baseState:_a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:_a},next:null};var s={};return e.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:s},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function th(n){_o();var e=nh(n).next.queue;Bs(n,e,{})}function Oo(){var n=ze(sr);return n!==null?n:_a}function sh(){return we().memoizedState}function ah(){return we().memoizedState}function _g(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var s=Fn();n=Pn(s);var a=St(e,n,s);a!==null&&(Ze(a,e,s),Ta(a,e,s)),e={cache:wo()},n.payload=e;return}e=e.return}}function kg(n,e,s){var a=Fn();s={lane:a,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Qr(n)?lh(e,s):(s=bo(n,e,s,a),s!==null&&(Ze(s,n,a),rh(s,e,a)))}function Bs(n,e,s){var a=Fn(),l={lane:a,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Qr(n))lh(e,l);else{var r=n.alternate;if(n.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var c=e.lastRenderedState,i=r(c,s);if(l.hasEagerState=!0,l.eagerState=i,pn(i,c)){Xr(n,e,l,0),te===null&&Vr();return}}catch{}finally{}s=bo(n,e,l,a),s!==null&&(Ze(s,n,a),rh(s,e,a))}}function zo(n,e,s,a){if(_o(),a={lane:2,revertLane:Wo(),action:a,hasEagerState:!1,eagerState:null,next:null},Qr(n)){if(e)throw Error(S(479))}else e=bo(n,s,a,2),e!==null&&Ze(e,n,2)}function Qr(n){var e=n.alternate;return n===H||e!==null&&e===H}function lh(n,e){Ds=hr=!0;var s=n.pending;s===null?e.next=e:(e.next=s.next,s.next=e),n.pending=e}function rh(n,e,s){if(s&4194176){var a=e.lanes;a&=n.pendingLanes,s|=a,e.lanes=s,Jp(n,s)}}var Bn={readContext:ze,use:Zr,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve};Bn.useCacheRefresh=ve;Bn.useMemoCache=ve;Bn.useHostTransitionStatus=ve;Bn.useFormState=ve;Bn.useActionState=ve;Bn.useOptimistic=ve;var ts={readContext:ze,use:Zr,useCallback:function(n,e){return Je().memoizedState=[n,e===void 0?null:e],n},useContext:ze,useEffect:hd,useImperativeHandle:function(n,e,s){s=s!=null?s.concat([n]):null,Kl(4194308,4,Kf.bind(null,e,n),s)},useLayoutEffect:function(n,e){return Kl(4194308,4,n,e)},useInsertionEffect:function(n,e){Kl(4,2,n,e)},useMemo:function(n,e){var s=Je();e=e===void 0?null:e;var a=n();return Pt&&(vt(!0),n(),vt(!1)),s.memoizedState=[a,e],a},useReducer:function(n,e,s){var a=Je();if(s!==void 0){var l=s(e);Pt&&(vt(!0),s(e),vt(!1))}else l=e;return a.memoizedState=a.baseState=l,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:l},a.queue=n,n=n.dispatch=kg.bind(null,H,n),[a.memoizedState,n]},useRef:function(n){var e=Je();return n={current:n},e.memoizedState=n},useState:function(n){n=ji(n);var e=n.queue,s=Bs.bind(null,H,e);return e.dispatch=s,[n.memoizedState,s]},useDebugValue:Lo,useDeferredValue:function(n,e){var s=Je();return Bo(s,n,e)},useTransition:function(){var n=ji(!1);return n=eh.bind(null,H,n.queue,!0,!1),Je().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,s){var a=H,l=Je();if(P){if(s===void 0)throw Error(S(407));s=s()}else{if(s=e(),te===null)throw Error(S(349));K&60||Df(a,e,s)}l.memoizedState=s;var r={value:s,getSnapshot:e};return l.queue=r,hd(Bf.bind(null,a,r,n),[n]),a.flags|=2048,Gs(9,Lf.bind(null,a,r,s,e),{destroy:void 0},null),s},useId:function(){var n=Je(),e=te.identifierPrefix;if(P){var s=Jn,a=Qn;s=(a&~(1<<32-mn(a)-1)).toString(32)+s,e=":"+e+"R"+s,s=xr++,0<s&&(e+="H"+s.toString(32)),e+=":"}else s=bg++,e=":"+e+"r"+s.toString(32)+":";return n.memoizedState=e},useCacheRefresh:function(){return Je().memoizedState=_g.bind(null,H)}};ts.useMemoCache=To;ts.useHostTransitionStatus=Oo;ts.useFormState=Vf;ts.useActionState=Vf;ts.useOptimistic=function(n){var e=Je();e.memoizedState=e.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=s,e=zo.bind(null,H,!0,s),s.dispatch=e,[n,e]};var ss={readContext:ze,use:Zr,useCallback:Pf,useContext:ze,useEffect:Do,useImperativeHandle:Wf,useInsertionEffect:Qf,useLayoutEffect:Jf,useMemo:Ff,useReducer:Jl,useRef:Yf,useState:function(){return Jl(nt)},useDebugValue:Lo,useDeferredValue:function(n,e){var s=we();return If(s,ne.memoizedState,n,e)},useTransition:function(){var n=Jl(nt)[0],e=we().memoizedState;return[typeof n=="boolean"?n:ml(n),e]},useSyncExternalStore:$f,useId:sh};ss.useCacheRefresh=ah;ss.useMemoCache=To;ss.useHostTransitionStatus=Oo;ss.useFormState=Xf;ss.useActionState=Xf;ss.useOptimistic=function(n,e){var s=we();return Uf(s,ne,n,e)};var as={readContext:ze,use:Zr,useCallback:Pf,useContext:ze,useEffect:Do,useImperativeHandle:Wf,useInsertionEffect:Qf,useLayoutEffect:Jf,useMemo:Ff,useReducer:Nc,useRef:Yf,useState:function(){return Nc(nt)},useDebugValue:Lo,useDeferredValue:function(n,e){var s=we();return ne===null?Bo(s,n,e):If(s,ne.memoizedState,n,e)},useTransition:function(){var n=Nc(nt)[0],e=we().memoizedState;return[typeof n=="boolean"?n:ml(n),e]},useSyncExternalStore:$f,useId:sh};as.useCacheRefresh=ah;as.useMemoCache=To;as.useHostTransitionStatus=Oo;as.useFormState=Zf;as.useActionState=Zf;as.useOptimistic=function(n,e){var s=we();return ne!==null?Uf(s,ne,n,e):(s.baseState=n,[n,s.queue.dispatch])};var gr=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function ch(n){gr(n)}function ih(n){console.error(n)}function oh(n){gr(n)}function vr(n,e){try{var s=n.onUncaughtError;s(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function xd(n,e,s){try{var a=n.onCaughtError;a(s.value,{componentStack:s.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function yi(n,e,s){return s=Pn(s),s.tag=3,s.payload={element:null},s.callback=function(){vr(n,e)},s}function uh(n){return n=Pn(n),n.tag=3,n}function dh(n,e,s,a){var l=s.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;n.payload=function(){return l(r)},n.callback=function(){xd(e,s,a)}}var c=s.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){xd(e,s,a),typeof l!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var i=a.stack;this.componentDidCatch(a.value,{componentStack:i!==null?i:""})})}function Cg(n,e,s,a,l){if(s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(s=Ln.current,s!==null){switch(s.tag){case 13:return Dn===null?Bi():s.alternate===null&&xe===0&&(xe=3),s.flags&=-257,s.flags|=65536,s.lanes=l,a===xi?s.flags|=16384:(e=s.updateQueue,e===null?s.updateQueue=new Set([a]):e.add(a),Bc(n,a,l)),!1;case 22:return s.flags|=65536,a===xi?s.flags|=16384:(e=s.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},s.updateQueue=e):(s=e.retryQueue,s===null?e.retryQueue=new Set([a]):s.add(a)),Bc(n,a,l)),!1}throw Error(S(435,s.tag))}return Bc(n,a,l),Bi(),!1}if(P)return e=Ln.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==hi&&(n=Error(S(422),{cause:a}),Za(dn(n,s)))):(a!==hi&&(e=Error(S(423),{cause:a}),Za(dn(e,s))),n=n.current.alternate,n.flags|=65536,l&=-l,n.lanes|=l,a=dn(a,s),l=yi(n.stateNode,a,l),Rc(n,l),xe!==4&&(xe=2)),!1;var r=Error(S(520),{cause:a});if(r=dn(r,s),Ba===null?Ba=[r]:Ba.push(r),xe!==4&&(xe=2),e===null)return!0;a=dn(a,s),s=e;do{switch(s.tag){case 3:return s.flags|=65536,n=l&-l,s.lanes|=n,n=yi(s.stateNode,a,n),Rc(s,n),!1;case 1:if(e=s.type,r=s.stateNode,(s.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))))return s.flags|=65536,l&=-l,s.lanes|=l,l=uh(l),dh(l,n,s,a),Rc(s,l),!1}s=s.return}while(s!==null);return!1}var mh=Error(S(461)),De=!1;function Te(n,e,s,a){e.child=n===null?Cf(e,null,s,a):Wt(e,n.child,s,a)}function gd(n,e,s,a,l){s=s.render;var r=e.ref;if("ref"in a){var c={};for(var i in a)i!=="ref"&&(c[i]=a[i])}else c=a;return Ft(e,l),a=Ro(n,e,s,c,r,l),i=Eo(),n!==null&&!De?(Mo(n,e,l),On(n,e,l)):(P&&i&&yo(e),e.flags|=1,Te(n,e,a,l),e.child)}function vd(n,e,s,a,l){if(n===null){var r=s.type;return typeof r=="function"&&!Go(r)&&r.defaultProps===void 0&&s.compare===null?(e.tag=15,e.type=r,ph(n,e,r,a,l)):(n=Pl(s.type,null,a,e,e.mode,l),n.ref=e.ref,n.return=e,e.child=n)}if(r=n.child,!(n.lanes&l)){var c=r.memoizedProps;if(s=s.compare,s=s!==null?s:Ga,s(c,a)&&n.ref===e.ref)return On(n,e,l)}return e.flags|=1,n=wt(r,a),n.ref=e.ref,n.return=e,e.child=n}function ph(n,e,s,a,l){if(n!==null){var r=n.memoizedProps;if(Ga(r,a)&&n.ref===e.ref)if(De=!1,e.pendingProps=a=r,(n.lanes&l)!==0)n.flags&131072&&(De=!0);else return e.lanes=n.lanes,On(n,e,l)}return Ni(n,e,s,a,l)}function fh(n,e,s){var a=e.pendingProps,l=a.children,r=(e.stateNode._pendingVisibility&2)!==0,c=n!==null?n.memoizedState:null;if(Aa(n,e),a.mode==="hidden"||r){if(e.flags&128){if(s=c!==null?c.baseLanes|s:s,n!==null){for(a=e.child=n.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;e.childLanes=l&~s}else e.childLanes=0,e.child=null;return jd(n,e,s)}if(s&536870912)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ql(e,c!==null?c.cachePool:null),c!==null?pd(e,c):gi(),Rf(e);else return e.lanes=e.childLanes=536870912,jd(n,e,c!==null?c.baseLanes|s:s)}else c!==null?(Ql(e,c.cachePool),pd(e,c),ft(),e.memoizedState=null):(n!==null&&Ql(e,null),gi(),ft());return Te(n,e,l,s),e.child}function jd(n,e,s){var a=ko();return a=a===null?null:{parent:_e._currentValue,pool:a},e.memoizedState={baseLanes:s,cachePool:a},n!==null&&Ql(e,null),gi(),Rf(e),null}function Aa(n,e){var s=e.ref;if(s===null)n!==null&&n.ref!==null&&(e.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(S(284));(n===null||n.ref!==s)&&(e.flags|=2097664)}}function Ni(n,e,s,a,l){return Ft(e,l),s=Ro(n,e,s,a,void 0,l),a=Eo(),n!==null&&!De?(Mo(n,e,l),On(n,e,l)):(P&&a&&yo(e),e.flags|=1,Te(n,e,s,l),e.child)}function bd(n,e,s,a,l,r){return Ft(e,r),s=Tf(e,a,s,l),Af(),a=Eo(),n!==null&&!De?(Mo(n,e,r),On(n,e,r)):(P&&a&&yo(e),e.flags|=1,Te(n,e,s,r),e.child)}function yd(n,e,s,a,l){if(Ft(e,l),e.stateNode===null){var r=ws,c=s.contextType;typeof c=="object"&&c!==null&&(r=ze(c)),r=new s(a,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ei,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=a,r.state=e.memoizedState,r.refs={},Ho(e),c=s.contextType,r.context=typeof c=="object"&&c!==null?ze(c):ws,r.state=e.memoizedState,c=s.getDerivedStateFromProps,typeof c=="function"&&(Ec(e,s,c,a),r.state=e.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&Ei.enqueueReplaceState(r,r.state,null),Da(e,a,r,l),$a(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(n===null){r=e.stateNode;var i=e.memoizedProps,o=It(s,i);r.props=o;var d=r.context,u=s.contextType;c=ws,typeof u=="object"&&u!==null&&(c=ze(u));var m=s.getDerivedStateFromProps;u=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=e.pendingProps!==i,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||d!==c)&&_d(e,r,a,c),mt=!1;var p=e.memoizedState;r.state=p,Da(e,a,r,l),$a(),d=e.memoizedState,i||p!==d||mt?(typeof m=="function"&&(Ec(e,s,m,a),d=e.memoizedState),(o=mt||wd(e,s,o,a,p,d,c))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=d),r.props=a,r.state=d,r.context=c,a=o):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{r=e.stateNode,Ci(n,e),c=e.memoizedProps,u=It(s,c),r.props=u,m=e.pendingProps,p=r.context,d=s.contextType,o=ws,typeof d=="object"&&d!==null&&(o=ze(d)),i=s.getDerivedStateFromProps,(d=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==m||p!==o)&&_d(e,r,a,o),mt=!1,p=e.memoizedState,r.state=p,Da(e,a,r,l),$a();var g=e.memoizedState;c!==m||p!==g||mt?(typeof i=="function"&&(Ec(e,s,i,a),g=e.memoizedState),(u=mt||wd(e,s,u,a,p,g,o)||!1)?(d||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,g,o),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,g,o)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=g),r.props=a,r.state=g,r.context=o,a=u):(typeof r.componentDidUpdate!="function"||c===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),a=!1)}return r=a,Aa(n,e),a=(e.flags&128)!==0,r||a?(r=e.stateNode,s=a&&typeof s.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,n!==null&&a?(e.child=Wt(e,n.child,null,l),e.child=Wt(e,null,s,l)):Te(n,e,s,l),e.memoizedState=r.state,n=e.child):n=On(n,e,l),n}function Nd(n,e,s,a){return ul(),e.flags|=256,Te(n,e,s,a),e.child}var Sc={dehydrated:null,treeContext:null,retryLane:0};function wc(n){return{baseLanes:n,cachePool:Mf()}}function _c(n,e,s){return n=n!==null?n.childLanes&~s:0,e&&(n|=Ke),n}function hh(n,e,s){var a=e.pendingProps,l=!1,r=(e.flags&128)!==0,c;if((c=r)||(c=n!==null&&n.memoizedState===null?!1:(ke.current&2)!==0),c&&(l=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,n===null){if(P){if(l?pt(e):ft(),P){var i=$e,o;if(o=i){e:{for(o=i,i=En;o.nodeType!==8;){if(!i){i=null;break e}if(o=Nn(o.nextSibling),o===null){i=null;break e}}i=o}i!==null?(e.memoizedState={dehydrated:i,treeContext:Zt!==null?{id:Qn,overflow:Jn}:null,retryLane:536870912},o=jn(18,null,null,0),o.stateNode=i,o.return=e,e.child=o,Ve=e,$e=null,o=!0):o=!1}o||Kt(e)}if(i=e.memoizedState,i!==null&&(i=i.dehydrated,i!==null))return i.data==="$!"?e.lanes=16:e.lanes=536870912,null;Kn(e)}return i=a.children,a=a.fallback,l?(ft(),l=e.mode,i=wi({mode:"hidden",children:i},l),a=Qt(a,l,s,null),i.return=e,a.return=e,i.sibling=a,e.child=i,l=e.child,l.memoizedState=wc(s),l.childLanes=_c(n,c,s),e.memoizedState=Sc,a):(pt(e),Si(e,i))}if(o=n.memoizedState,o!==null&&(i=o.dehydrated,i!==null)){if(r)e.flags&256?(pt(e),e.flags&=-257,e=kc(n,e,s)):e.memoizedState!==null?(ft(),e.child=n.child,e.flags|=128,e=null):(ft(),l=a.fallback,i=e.mode,a=wi({mode:"visible",children:a.children},i),l=Qt(l,i,s,null),l.flags|=2,a.return=e,l.return=e,a.sibling=l,e.child=a,Wt(e,n.child,null,s),a=e.child,a.memoizedState=wc(s),a.childLanes=_c(n,c,s),e.memoizedState=Sc,e=l);else if(pt(e),i.data==="$!"){if(c=i.nextSibling&&i.nextSibling.dataset,c)var d=c.dgst;c=d,a=Error(S(419)),a.stack="",a.digest=c,Za({value:a,source:null,stack:null}),e=kc(n,e,s)}else if(c=(s&n.childLanes)!==0,De||c){if(c=te,c!==null){if(a=s&-s,a&42)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=a&(c.suspendedLanes|s)?0:a,a!==0&&a!==o.retryLane)throw o.retryLane=a,Mt(n,a),Ze(c,n,a),mh}i.data==="$?"||Bi(),e=kc(n,e,s)}else i.data==="$?"?(e.flags|=128,e.child=n.child,e=Xg.bind(null,n),i._reactRetry=e,e=null):(n=o.treeContext,$e=Nn(i.nextSibling),Ve=e,P=!0,vn=null,En=!1,n!==null&&(cn[on++]=Qn,cn[on++]=Jn,cn[on++]=Zt,Qn=n.id,Jn=n.overflow,Zt=e),e=Si(e,a.children),e.flags|=4096);return e}return l?(ft(),l=a.fallback,i=e.mode,o=n.child,d=o.sibling,a=wt(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&31457280,d!==null?l=wt(d,l):(l=Qt(l,i,s,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,a=l,l=e.child,i=n.child.memoizedState,i===null?i=wc(s):(o=i.cachePool,o!==null?(d=_e._currentValue,o=o.parent!==d?{parent:d,pool:d}:o):o=Mf(),i={baseLanes:i.baseLanes|s,cachePool:o}),l.memoizedState=i,l.childLanes=_c(n,c,s),e.memoizedState=Sc,a):(pt(e),s=n.child,n=s.sibling,s=wt(s,{mode:"visible",children:a.children}),s.return=e,s.sibling=null,n!==null&&(c=e.deletions,c===null?(e.deletions=[n],e.flags|=16):c.push(n)),e.child=s,e.memoizedState=null,s)}function Si(n,e){return e=wi({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function wi(n,e){return Uh(n,e,0,null)}function kc(n,e,s){return Wt(e,n.child,null,s),n=Si(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Sd(n,e,s){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),ki(n.return,e,s)}function Cc(n,e,s,a,l){var r=n.memoizedState;r===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:s,tailMode:l}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=s,r.tailMode=l)}function xh(n,e,s){var a=e.pendingProps,l=a.revealOrder,r=a.tail;if(Te(n,e,a.children,s),a=ke.current,a&2)a=a&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sd(n,s,e);else if(n.tag===19)Sd(n,s,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}a&=1}switch(de(ke,a),l){case"forwards":for(s=e.child,l=null;s!==null;)n=s.alternate,n!==null&&fr(n)===null&&(l=s),s=s.sibling;s=l,s===null?(l=e.child,e.child=null):(l=s.sibling,s.sibling=null),Cc(e,!1,l,s,r);break;case"backwards":for(s=null,l=e.child,e.child=null;l!==null;){if(n=l.alternate,n!==null&&fr(n)===null){e.child=l;break}n=l.sibling,l.sibling=s,s=l,l=n}Cc(e,!0,s,null,r);break;case"together":Cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function On(n,e,s){if(n!==null&&(e.dependencies=n.dependencies),st|=e.lanes,!(s&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(S(153));if(e.child!==null){for(n=e.child,s=wt(n,n.pendingProps),e.child=s,s.return=e;n.sibling!==null;)n=n.sibling,s=s.sibling=wt(n,n.pendingProps),s.return=e;s.sibling=null}return e.child}function Rg(n,e,s){switch(e.tag){case 3:ar(e,e.stateNode.containerInfo),ht(e,_e,n.memoizedState.cache),ul();break;case 27:case 5:li(e);break;case 4:ar(e,e.stateNode.containerInfo);break;case 10:ht(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(pt(e),e.flags|=128,null):s&e.child.childLanes?hh(n,e,s):(pt(e),n=On(n,e,s),n!==null?n.sibling:null);pt(e);break;case 19:if(a=(s&e.childLanes)!==0,n.flags&128){if(a)return xh(n,e,s);e.flags|=128}var l=e.memoizedState;if(l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),de(ke,ke.current),a)break;return null;case 22:case 23:return e.lanes=0,fh(n,e,s);case 24:ht(e,_e,n.memoizedState.cache)}return On(n,e,s)}function gh(n,e,s){if(n!==null)if(n.memoizedProps!==e.pendingProps)De=!0;else{if(!(n.lanes&s)&&!(e.flags&128))return De=!1,Rg(n,e,s);De=!!(n.flags&131072)}else De=!1,P&&e.flags&1048576&&Sf(e,mr,e.index);switch(e.lanes=0,e.tag){case 16:e:{n=e.pendingProps;var a=e.elementType,l=a._init;if(a=l(a._payload),e.type=a,typeof a=="function")Go(a)?(n=It(a,n),e.tag=1,e=yd(null,e,a,n,s)):(e.tag=0,e=Ni(null,e,a,n,s));else{if(a!=null){if(l=a.$$typeof,l===Bp){e.tag=11,e=gd(null,e,a,n,s);break e}else if(l===Op){e.tag=14,e=vd(null,e,a,n,s);break e}}throw Error(S(306,a,""))}}return e;case 0:return Ni(n,e,e.type,e.pendingProps,s);case 1:return a=e.type,l=It(a,e.pendingProps),yd(n,e,a,l,s);case 3:e:{if(ar(e,e.stateNode.containerInfo),n===null)throw Error(S(387));var r=e.pendingProps;l=e.memoizedState,a=l.element,Ci(n,e),Da(e,r,null,s);var c=e.memoizedState;if(r=c.cache,ht(e,_e,r),r!==l.cache&&Al(e,_e,s),$a(),r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Nd(n,e,r,s);break e}else if(r!==a){a=dn(Error(S(424)),e),Za(a),e=Nd(n,e,r,s);break e}else for($e=Nn(e.stateNode.containerInfo.firstChild),Ve=e,P=!0,vn=null,En=!0,s=Cf(e,null,r,s),e.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ul(),r===a){e=On(n,e,s);break e}Te(n,e,r,s)}e=e.child}return e;case 26:return Aa(n,e),s=e.memoizedState=h2(e.type,n===null?null:n.memoizedProps,e.pendingProps),n!==null||P||s!==null||(s=e.type,n=e.pendingProps,a=kr(Nt.current).createElement(s),a[Oe]=e,a[Ge]=n,Le(a,s,n),Ee(a),e.stateNode=a),null;case 27:return li(e),n===null&&P&&(a=e.stateNode=s0(e.type,e.pendingProps,Nt.current),Ve=e,En=!0,$e=Nn(a.firstChild)),a=e.pendingProps.children,n!==null||P?Te(n,e,a,s):e.child=Wt(e,null,a,s),Aa(n,e),e.child;case 5:return n===null&&P&&((l=a=$e)&&(a=a2(a,e.type,e.pendingProps,En),a!==null?(e.stateNode=a,Ve=e,$e=Nn(a.firstChild),En=!1,l=!0):l=!1),l||Kt(e)),li(e),l=e.type,r=e.pendingProps,c=n!==null?n.memoizedProps:null,a=r.children,Vi(l,r)?a=null:c!==null&&Vi(l,c)&&(e.flags|=32),e.memoizedState!==null&&(l=Ro(n,e,yg,null,null,s),sr._currentValue=l,De&&n!==null&&n.memoizedState.memoizedState!==l&&Al(e,sr,s)),Aa(n,e),Te(n,e,a,s),e.child;case 6:return n===null&&P&&((n=s=$e)&&(s=l2(s,e.pendingProps,En),s!==null?(e.stateNode=s,Ve=e,$e=null,n=!0):n=!1),n||Kt(e)),null;case 13:return hh(n,e,s);case 4:return ar(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=Wt(e,null,a,s):Te(n,e,a,s),e.child;case 11:return gd(n,e,e.type,e.pendingProps,s);case 7:return Te(n,e,e.pendingProps,s),e.child;case 8:return Te(n,e,e.pendingProps.children,s),e.child;case 12:return Te(n,e,e.pendingProps.children,s),e.child;case 10:e:{if(a=e.type,l=e.pendingProps,r=e.memoizedProps,c=l.value,ht(e,a,c),r!==null)if(pn(r.value,c)){if(r.children===l.children){e=On(n,e,s);break e}}else Al(e,a,s);Te(n,e,l.children,s),e=e.child}return e;case 9:return l=e.type._context,a=e.pendingProps.children,Ft(e,s),l=ze(l),a=a(l),e.flags|=1,Te(n,e,a,s),e.child;case 14:return vd(n,e,e.type,e.pendingProps,s);case 15:return ph(n,e,e.type,e.pendingProps,s);case 19:return xh(n,e,s);case 22:return fh(n,e,s);case 24:return Ft(e,s),a=ze(_e),n===null?(l=ko(),l===null&&(l=te,r=wo(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=s),l=r),e.memoizedState={parent:a,cache:l},Ho(e),ht(e,_e,l)):(n.lanes&s&&(Ci(n,e),Da(e,null,null,s),$a()),l=n.memoizedState,r=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),ht(e,_e,a)):(a=r.cache,ht(e,_e,a),a!==l.cache&&Al(e,_e,s))),Te(n,e,e.pendingProps.children,s),e.child}throw Error(S(156,e.tag))}var _i=zn(null),Jr=null,Cs=null,Uo=null;function Kr(){Uo=Cs=Jr=null}function ht(n,e,s){de(_i,e._currentValue),e._currentValue=s}function Wn(n){n._currentValue=_i.current,Me(_i)}function ki(n,e,s){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===s)break;n=n.return}}function Al(n,e,s){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null)for(var r=a.child,c=l.firstContext;c!==null;){if(c.context===e){if(a.tag===1){c=Pn(s&-s),c.tag=2;var i=a.updateQueue;if(i!==null){i=i.shared;var o=i.pending;o===null?c.next=c:(c.next=o.next,o.next=c),i.pending=c}}a.lanes|=s,c=a.alternate,c!==null&&(c.lanes|=s),ki(a.return,s,n),l.lanes|=s;break}c=c.next}else if(a.tag===10)r=a.type===n.type?null:a.child;else if(a.tag===18){if(r=a.return,r===null)throw Error(S(341));r.lanes|=s,l=r.alternate,l!==null&&(l.lanes|=s),ki(r,s,n),r=a.sibling}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===n){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Ft(n,e){Jr=n,Uo=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(De=!0),n.firstContext=null)}function ze(n){return vh(Jr,n)}function Tl(n,e,s){return Jr===null&&Ft(n,s),vh(n,e)}function vh(n,e){var s=e._currentValue;if(Uo!==e)if(e={context:e,memoizedValue:s,next:null},Cs===null){if(n===null)throw Error(S(308));Cs=e,n.dependencies={lanes:0,firstContext:e}}else Cs=Cs.next=e;return s}var mt=!1;function Ho(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ci(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Pn(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function St(n,e,s){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,I&2){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=ur(n),Nf(n,null,s),e}return Xr(n,a,e,s),ur(n)}function Ta(n,e,s){if(e=e.updateQueue,e!==null&&(e=e.shared,(s&4194176)!==0)){var a=e.lanes;a&=n.pendingLanes,s|=a,e.lanes=s,Jp(n,s)}}function Rc(n,e){var s=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,s===a)){var l=null,r=null;if(s=s.firstBaseUpdate,s!==null){do{var c={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};r===null?l=r=c:r=r.next=c,s=s.next}while(s!==null);r===null?l=r=e:r=r.next=e}else l=r=e;s={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=e:n.next=e,s.lastBaseUpdate=e}var Ri=!1;function $a(){if(Ri){var n=$s;if(n!==null)throw n}}function Da(n,e,s,a){Ri=!1;var l=n.updateQueue;mt=!1;var r=l.firstBaseUpdate,c=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var o=i,d=o.next;o.next=null,c===null?r=d:c.next=d,c=o;var u=n.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==c&&(i===null?u.firstBaseUpdate=d:i.next=d,u.lastBaseUpdate=o))}if(r!==null){var m=l.baseState;c=0,u=d=o=null,i=r;do{var p=i.lane&-536870913,g=p!==i.lane;if(g?(K&p)===p:(a&p)===p){p!==0&&p===Xs&&(Ri=!0),u!==null&&(u=u.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var y=n,b=i;p=e;var N=s;switch(b.tag){case 1:if(y=b.payload,typeof y=="function"){m=y.call(N,m,p);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,p=typeof y=="function"?y.call(N,m,p):y,p==null)break e;m=me({},m,p);break e;case 2:mt=!0}}p=i.callback,p!==null&&(n.flags|=64,g&&(n.flags|=8192),g=l.callbacks,g===null?l.callbacks=[p]:g.push(p))}else g={lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(d=u=g,o=m):u=u.next=g,c|=p;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;g=i,i=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);u===null&&(o=m),l.baseState=o,l.firstBaseUpdate=d,l.lastBaseUpdate=u,r===null&&(l.shared.lanes=0),st|=c,n.lanes=c,n.memoizedState=m}}function jh(n,e){if(typeof n!="function")throw Error(S(191,n));n.call(e)}function bh(n,e){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)jh(s[n],e)}function Ec(n,e,s,a){e=n.memoizedState,s=s(a,e),s=s==null?e:me({},e,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Ei={isMounted:function(n){return(n=n._reactInternals)?Ws(n)===n:!1},enqueueSetState:function(n,e,s){n=n._reactInternals;var a=Fn(),l=Pn(a);l.payload=e,s!=null&&(l.callback=s),e=St(n,l,a),e!==null&&(Ze(e,n,a),Ta(e,n,a))},enqueueReplaceState:function(n,e,s){n=n._reactInternals;var a=Fn(),l=Pn(a);l.tag=1,l.payload=e,s!=null&&(l.callback=s),e=St(n,l,a),e!==null&&(Ze(e,n,a),Ta(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var s=Fn(),a=Pn(s);a.tag=2,e!=null&&(a.callback=e),e=St(n,a,s),e!==null&&(Ze(e,n,s),Ta(e,n,s))}};function wd(n,e,s,a,l,r,c){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,r,c):e.prototype&&e.prototype.isPureReactComponent?!Ga(s,a)||!Ga(l,r):!0}function _d(n,e,s,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(s,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(s,a),e.state!==n&&Ei.enqueueReplaceState(e,e.state,null)}function It(n,e){var s=e;if("ref"in e){s={};for(var a in e)a!=="ref"&&(s[a]=e[a])}if(n=n.defaultProps){s===e&&(s=me({},s));for(var l in n)s[l]===void 0&&(s[l]=n[l])}return s}var Yn=!1,Be=!1,Mc=!1,kd=typeof WeakSet=="function"?WeakSet:Set,Re=null;function yh(n,e){e.props=It(n.type,n.memoizedProps),e.state=n.memoizedState,e.componentWillUnmount()}function Xt(n,e){try{var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 26:case 27:case 5:var l=a;break;default:l=a}typeof s=="function"?n.refCleanup=s(l):s.current=l}}catch(r){re(n,e,r)}}function Ie(n,e){var s=n.ref,a=n.refCleanup;if(s!==null)if(typeof a=="function")try{a()}catch(l){re(n,e,l)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(l){re(n,e,l)}else s.current=null}function Mi(n,e,s){try{s()}catch(a){re(n,e,a)}}var Cd=!1;function Eg(n,e){if(Hi=Mr,n=hf(),vo(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var a=s.getSelection&&s.getSelection();if(a&&a.rangeCount!==0){s=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{s.nodeType,r.nodeType}catch{s=null;break e}var c=0,i=-1,o=-1,d=0,u=0,m=n,p=null;n:for(;;){for(var g;m!==s||l!==0&&m.nodeType!==3||(i=c+l),m!==r||a!==0&&m.nodeType!==3||(o=c+a),m.nodeType===3&&(c+=m.nodeValue.length),(g=m.firstChild)!==null;)p=m,m=g;for(;;){if(m===n)break n;if(p===s&&++d===l&&(i=c),p===r&&++u===a&&(o=c),(g=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=g}s=i===-1||o===-1?null:{start:i,end:o}}else s=null}s=s||{start:0,end:0}}else s=null;for(qi={focusedElem:n,selectionRange:s},Mr=!1,Re=e;Re!==null;)if(e=Re,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Re=n;else for(;Re!==null;){e=Re;try{var y=e.alternate,b=e.flags;switch(e.tag){case 0:break;case 11:case 15:break;case 1:if(b&1024&&y!==null){var N=y.memoizedState,x=e.stateNode,f=x.getSnapshotBeforeUpdate(It(e.type,y.memoizedProps),N);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:if(b&1024){var v=e.stateNode.containerInfo,j=v.nodeType;if(j===9)Xi(v);else if(j===1)switch(v.nodeName){case"HEAD":case"HTML":case"BODY":Xi(v);break;default:v.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(b&1024)throw Error(S(163))}}catch(_){re(e,e.return,_)}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}return y=Cd,Cd=!1,y}function Zs(n,e,s){var a=e.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&n)===n){var r=l.inst,c=r.destroy;c!==void 0&&(r.destroy=void 0,Mi(e,s,c))}l=l.next}while(l!==a)}}function qo(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var s=e=e.next;do{if((s.tag&n)===n){var a=s.create,l=s.inst;a=a(),l.destroy=a}s=s.next}while(s!==e)}}function Nh(n,e){try{qo(e,n)}catch(s){re(n,n.return,s)}}function Sh(n){var e=n.updateQueue;if(e!==null){var s=n.stateNode;try{bh(e,s)}catch(a){re(n,n.return,a)}}}function wh(n){var e=n.type,s=n.memoizedProps,a=n.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":s.autoFocus&&a.focus();break e;case"img":s.src&&(a.src=s.src)}}catch(l){re(n,n.return,l)}}function _h(n,e,s){var a=s.flags;switch(s.tag){case 0:case 11:case 15:Vn(n,s),a&4&&Nh(s,5);break;case 1:if(Vn(n,s),a&4)if(n=s.stateNode,e===null)try{n.componentDidMount()}catch(i){re(s,s.return,i)}else{var l=It(s.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(l,e,n.__reactInternalSnapshotBeforeUpdate)}catch(i){re(s,s.return,i)}}a&64&&Sh(s),a&512&&Xt(s,s.return);break;case 3:if(Vn(n,s),a&64&&(a=s.updateQueue,a!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{bh(a,n)}catch(i){re(s,s.return,i)}}break;case 26:Vn(n,s),a&512&&Xt(s,s.return);break;case 27:case 5:Vn(n,s),e===null&&a&4&&wh(s),a&512&&Xt(s,s.return);break;case 12:Vn(n,s);break;case 13:Vn(n,s),a&4&&Eh(n,s);break;case 22:if(l=s.memoizedState!==null||Yn,!l){e=e!==null&&e.memoizedState!==null||Be;var r=Yn,c=Be;Yn=l,(Be=e)&&!c?ut(n,s,(s.subtreeFlags&8772)!==0):Vn(n,s),Yn=r,Be=c}a&512&&(s.memoizedProps.mode==="manual"?Xt(s,s.return):Ie(s,s.return));break;default:Vn(n,s)}}function kh(n){var e=n.alternate;e!==null&&(n.alternate=null,kh(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&mo(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ch(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function Ac(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ch(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ai(n,e,s){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?s.nodeType===8?s.parentNode.insertBefore(n,e):s.insertBefore(n,e):(s.nodeType===8?(e=s.parentNode,e.insertBefore(n,s)):(e=s,e.appendChild(n)),s=s._reactRootContainer,s!=null||e.onclick!==null||(e.onclick=Fr));else if(a!==4&&a!==27&&(n=n.child,n!==null))for(Ai(n,e,s),n=n.sibling;n!==null;)Ai(n,e,s),n=n.sibling}function jr(n,e,s){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?s.insertBefore(n,e):s.appendChild(n);else if(a!==4&&a!==27&&(n=n.child,n!==null))for(jr(n,e,s),n=n.sibling;n!==null;)jr(n,e,s),n=n.sibling}var Ne=null,Fe=!1;function qn(n,e,s){for(s=s.child;s!==null;)Rh(n,e,s),s=s.sibling}function Rh(n,e,s){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(il,s)}catch{}switch(s.tag){case 26:Be||Ie(s,e),qn(n,e,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Be||Ie(s,e);var a=Ne,l=Fe;for(Ne=s.stateNode,qn(n,e,s),s=s.stateNode,n=s.attributes;n.length;)s.removeAttributeNode(n[0]);mo(s),Ne=a,Fe=l;break;case 5:Be||Ie(s,e);case 6:a=Ne,l=Fe,Ne=null,qn(n,e,s),Ne=a,Fe=l,Ne!==null&&(Fe?(n=Ne,s=s.stateNode,n.nodeType===8?n.parentNode.removeChild(s):n.removeChild(s)):Ne.removeChild(s.stateNode));break;case 18:Ne!==null&&(Fe?(n=Ne,s=s.stateNode,n.nodeType===8?Xc(n.parentNode,s):n.nodeType===1&&Xc(n,s),el(n)):Xc(Ne,s.stateNode));break;case 4:a=Ne,l=Fe,Ne=s.stateNode.containerInfo,Fe=!0,qn(n,e,s),Ne=a,Fe=l;break;case 0:case 11:case 14:case 15:if(!Be&&(a=s.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var r=l.tag,c=l.inst,i=c.destroy;i!==void 0&&(r&2||r&4)&&(c.destroy=void 0,Mi(s,e,i)),l=l.next}while(l!==a)}qn(n,e,s);break;case 1:if(!Be&&(Ie(s,e),a=s.stateNode,typeof a.componentWillUnmount=="function"))try{yh(s,a)}catch(o){re(s,e,o)}qn(n,e,s);break;case 21:qn(n,e,s);break;case 22:Ie(s,e),Be=(a=Be)||s.memoizedState!==null,qn(n,e,s),Be=a;break;default:qn(n,e,s)}}function Eh(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{el(n)}catch(s){re(e,e.return,s)}}function Mg(n){switch(n.tag){case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new kd),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new kd),e;default:throw Error(S(435,n.tag))}}function Tc(n,e){var s=Mg(n);e.forEach(function(a){var l=Gg.bind(null,n,a);s.has(a)||(s.add(a),a.then(l,l))})}function hn(n,e){var s=e.deletions;if(s!==null)for(var a=0;a<s.length;a++){var l=s[a];try{var r=n,c=e,i=c;e:for(;i!==null;){switch(i.tag){case 27:case 5:Ne=i.stateNode,Fe=!1;break e;case 3:Ne=i.stateNode.containerInfo,Fe=!0;break e;case 4:Ne=i.stateNode.containerInfo,Fe=!0;break e}i=i.return}if(Ne===null)throw Error(S(160));Rh(r,c,l),Ne=null,Fe=!1;var o=l.alternate;o!==null&&(o.return=null),l.return=null}catch(d){re(l,e,d)}}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Mh(e,n),e=e.sibling}var gn=null;function Mh(n,e){var s=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(hn(e,n),xn(n),a&4){try{Zs(3,n,n.return),qo(3,n)}catch(g){re(n,n.return,g)}try{Zs(5,n,n.return)}catch(g){re(n,n.return,g)}}break;case 1:hn(e,n),xn(n),a&512&&s!==null&&Ie(s,s.return),a&64&&Yn&&(n=n.updateQueue,n!==null&&(a=n.callbacks,a!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?a:s.concat(a))));break;case 26:var l=gn;if(hn(e,n),xn(n),a&512&&s!==null&&Ie(s,s.return),a&4){if(e=s!==null?s.memoizedState:null,a=n.memoizedState,s===null)if(a===null)if(n.stateNode===null){e:{a=n.type,s=n.memoizedProps,e=l.ownerDocument||l;n:switch(a){case"title":l=e.getElementsByTagName("title")[0],(!l||l[qa]||l[Oe]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=e.createElement(a),e.head.insertBefore(l,e.querySelector("head > title"))),Le(l,a,s),l[Oe]=n,Ee(l),a=l;break e;case"link":var r=Vd("link","href",e).get(a+(s.href||""));if(r){for(var c=0;c<r.length;c++)if(l=r[c],l.getAttribute("href")===(s.href==null?null:s.href)&&l.getAttribute("rel")===(s.rel==null?null:s.rel)&&l.getAttribute("title")===(s.title==null?null:s.title)&&l.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){r.splice(c,1);break n}}l=e.createElement(a),Le(l,a,s),e.head.appendChild(l);break;case"meta":if(r=Vd("meta","content",e).get(a+(s.content||""))){for(c=0;c<r.length;c++)if(l=r[c],l.getAttribute("content")===(s.content==null?null:""+s.content)&&l.getAttribute("name")===(s.name==null?null:s.name)&&l.getAttribute("property")===(s.property==null?null:s.property)&&l.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&l.getAttribute("charset")===(s.charSet==null?null:s.charSet)){r.splice(c,1);break n}}l=e.createElement(a),Le(l,a,s),e.head.appendChild(l);break;default:throw Error(S(468,a))}l[Oe]=n,Ee(l),a=l}n.stateNode=a}else Xd(l,n.type,n.stateNode);else n.stateNode=qd(l,a,n.memoizedProps);else if(e!==a)e===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):e.count--,a===null?Xd(l,n.type,n.stateNode):qd(l,a,n.memoizedProps);else if(a===null&&n.stateNode!==null)try{var i=n.stateNode,o=n.memoizedProps;Bd(i,n.type,s.memoizedProps,o),i[Ge]=o}catch(g){re(n,n.return,g)}}break;case 27:if(a&4&&n.alternate===null){for(l=n.stateNode,r=n.memoizedProps,c=l.firstChild;c;){var d=c.nextSibling,u=c.nodeName;c[qa]||u==="HEAD"||u==="BODY"||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&c.rel.toLowerCase()==="stylesheet"||l.removeChild(c),c=d}for(c=n.type,d=l.attributes;d.length;)l.removeAttributeNode(d[0]);Le(l,c,r),l[Oe]=n,l[Ge]=r}case 5:if(hn(e,n),xn(n),a&512&&s!==null&&Ie(s,s.return),n.flags&32){e=n.stateNode;try{qs(e,"")}catch(g){re(n,n.return,g)}}if(a&4&&(e=n.stateNode,e!=null)){l=n.memoizedProps,s=s!==null?s.memoizedProps:l,r=n.type;try{Bd(e,r,s,l),e[Ge]=l}catch(g){re(n,n.return,g)}}a&1024&&(Mc=!0);break;case 6:if(hn(e,n),xn(n),a&4){if(n.stateNode===null)throw Error(S(162));a=n.stateNode,s=n.memoizedProps;try{a.nodeValue=s}catch(g){re(n,n.return,g)}}break;case 3:if(Il=null,l=gn,gn=Cr(e.containerInfo),hn(e,n),gn=l,xn(n),a&4&&s!==null&&s.memoizedState.isDehydrated)try{el(e.containerInfo)}catch(g){re(n,n.return,g)}Mc&&(Mc=!1,Ah(n));break;case 4:a=gn,gn=Cr(n.stateNode.containerInfo),hn(e,n),xn(n),gn=a;break;case 13:hn(e,n),xn(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Qo=$n()),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,Tc(n,a)));break;case 22:a&512&&s!==null&&Ie(s,s.return),i=n.memoizedState!==null,o=s!==null&&s.memoizedState!==null;var m=Yn,p=Be;if(Yn=m||i,Be=p||o,hn(e,n),Be=p,Yn=m,xn(n),e=n.stateNode,e._current=n,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,a&8192&&(e._visibility=i?e._visibility&-2:e._visibility|1,i&&(e=Yn||Be,s===null||o||e||hs(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(s=null,e=n;;){if(e.tag===5||e.tag===26||e.tag===27){if(s===null){s=e;try{l=e.stateNode,i?(r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(c=e.stateNode,d=e.memoizedProps.style,u=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=u==null||typeof u=="boolean"?"":(""+u).trim())}catch(g){re(n,n.return,g)}}}else if(e.tag===6){if(s===null)try{e.stateNode.nodeValue=i?"":e.memoizedProps}catch(g){re(n,n.return,g)}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;s===e&&(s=null),e=e.return}s===e&&(s=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=n.updateQueue,a!==null&&(s=a.retryQueue,s!==null&&(a.retryQueue=null,Tc(n,s))));break;case 19:hn(e,n),xn(n),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,Tc(n,a)));break;case 21:break;default:hn(e,n),xn(n)}}function xn(n){var e=n.flags;if(e&2){try{if(n.tag!==27){e:{for(var s=n.return;s!==null;){if(Ch(s)){var a=s;break e}s=s.return}throw Error(S(160))}switch(a.tag){case 27:var l=a.stateNode,r=Ac(n);jr(n,r,l);break;case 5:var c=a.stateNode;a.flags&32&&(qs(c,""),a.flags&=-33);var i=Ac(n);jr(n,i,c);break;case 3:case 4:var o=a.stateNode.containerInfo,d=Ac(n);Ai(n,d,o);break;default:throw Error(S(161))}}}catch(u){re(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Ah(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Ah(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function Vn(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)_h(n,e.alternate,e),e=e.sibling}function hs(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:Zs(4,e,e.return),hs(e);break;case 1:Ie(e,e.return);var s=e.stateNode;if(typeof s.componentWillUnmount=="function"){var a=e,l=e.return;try{yh(a,s)}catch(r){re(a,l,r)}}hs(e);break;case 26:case 27:case 5:Ie(e,e.return),hs(e);break;case 22:Ie(e,e.return),e.memoizedState===null&&hs(e);break;default:hs(e)}n=n.sibling}}function ut(n,e,s){for(s=s&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=n,r=e,c=r.flags;switch(r.tag){case 0:case 11:case 15:ut(l,r,s),Nh(r,4);break;case 1:if(ut(l,r,s),l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(o){re(r,r.return,o)}if(a=r.updateQueue,a!==null){var i=a.shared.hiddenCallbacks;if(i!==null)for(a.shared.hiddenCallbacks=null,a=0;a<i.length;a++)jh(i[a],l)}s&&c&64&&Sh(r),Xt(r,r.return);break;case 26:case 27:case 5:ut(l,r,s),s&&a===null&&c&4&&wh(r),Xt(r,r.return);break;case 12:ut(l,r,s);break;case 13:ut(l,r,s),s&&c&4&&Eh(l,r);break;case 22:r.memoizedState===null&&ut(l,r,s),Xt(r,r.return);break;default:ut(l,r,s)}e=e.sibling}}function Th(n,e){try{qo(e,n)}catch(s){re(n,n.return,s)}}function Vo(n,e){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&dl(s))}function Xo(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&dl(n))}function ds(n,e,s,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$h(n,e,s,a),e=e.sibling}function $h(n,e,s,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:ds(n,e,s,a),l&2048&&Th(e,9);break;case 3:ds(n,e,s,a),l&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&dl(n)));break;case 23:break;case 22:var r=e.stateNode;e.memoizedState!==null?r._visibility&4?ds(n,e,s,a):La(n,e):r._visibility&4?ds(n,e,s,a):(r._visibility|=4,xs(n,e,s,a,(e.subtreeFlags&10256)!==0)),l&2048&&Vo(e.alternate,e);break;case 24:ds(n,e,s,a),l&2048&&Xo(e.alternate,e);break;default:ds(n,e,s,a)}}function xs(n,e,s,a,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var r=n,c=e,i=s,o=a,d=c.flags;switch(c.tag){case 0:case 11:case 15:xs(r,c,i,o,l),Th(c,8);break;case 23:break;case 22:var u=c.stateNode;c.memoizedState!==null?u._visibility&4?xs(r,c,i,o,l):La(r,c):(u._visibility|=4,xs(r,c,i,o,l)),l&&d&2048&&Vo(c.alternate,c);break;case 24:xs(r,c,i,o,l),l&&d&2048&&Xo(c.alternate,c);break;default:xs(r,c,i,o,l)}e=e.sibling}}function La(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var s=n,a=e,l=a.flags;switch(a.tag){case 22:La(s,a),l&2048&&Vo(a.alternate,a);break;case 24:La(s,a),l&2048&&Xo(a.alternate,a);break;default:La(s,a)}e=e.sibling}}var Na=8192;function ms(n){if(n.subtreeFlags&Na)for(n=n.child;n!==null;)Dh(n),n=n.sibling}function Dh(n){switch(n.tag){case 26:ms(n),n.flags&Na&&n.memoizedState!==null&&j2(gn,n.memoizedState,n.memoizedProps);break;case 5:ms(n);break;case 3:case 4:var e=gn;gn=Cr(n.stateNode.containerInfo),ms(n),gn=e;break;case 22:n.memoizedState===null&&(e=n.alternate,e!==null&&e.memoizedState!==null?(e=Na,Na=16777216,ms(n),Na=e):ms(n));break;default:ms(n)}}function Lh(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function $c(n){var e=n.deletions;if(n.flags&16){if(e!==null)for(var s=0;s<e.length;s++){var a=e[s];Re=a,Oh(a,n)}Lh(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bh(n),n=n.sibling}function Bh(n){switch(n.tag){case 0:case 11:case 15:$c(n),n.flags&2048&&Zs(9,n,n.return);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&4&&(n.return===null||n.return.tag!==13)?(e._visibility&=-5,Wl(n)):$c(n);break;default:$c(n)}}function Wl(n){var e=n.deletions;if(n.flags&16){if(e!==null)for(var s=0;s<e.length;s++){var a=e[s];Re=a,Oh(a,n)}Lh(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:Zs(8,e,e.return),Wl(e);break;case 22:s=e.stateNode,s._visibility&4&&(s._visibility&=-5,Wl(e));break;default:Wl(e)}n=n.sibling}}function Oh(n,e){for(;Re!==null;){var s=Re;switch(s.tag){case 0:case 11:case 15:Zs(8,s,e);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var a=s.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:dl(s.memoizedState.cache)}if(a=s.child,a!==null)a.return=s,Re=a;else e:for(s=n;Re!==null;){a=Re;var l=a.sibling,r=a.return;if(kh(a),a===s){Re=null;break e}if(l!==null){l.return=r,Re=l;break e}Re=r}}}function Ag(n,e,s,a){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(n,e,s,a){return new Ag(n,e,s,a)}function Go(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wt(n,e){var s=n.alternate;return s===null?(s=jn(n.tag,e,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=e,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&31457280,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,e=n.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function zh(n,e){n.flags&=31457282;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,e=s.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Pl(n,e,s,a,l,r){var c=0;if(a=n,typeof n=="function")Go(n)&&(c=1);else if(typeof n=="string")c=g2(n,s,Tn.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case ga:return Qt(s.children,l,r,e);case t1:c=8,l|=24;break;case Bu:return n=jn(12,s,e,l|2),n.elementType=Bu,n.lanes=r,n;case Ou:return n=jn(13,s,e,l),n.elementType=Ou,n.lanes=r,n;case zu:return n=jn(19,s,e,l),n.elementType=zu,n.lanes=r,n;case zp:return Uh(s,l,r,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case s1:case gt:c=10;break e;case a1:c=9;break e;case Bp:c=11;break e;case Op:c=14;break e;case Ut:c=16,a=null;break e}throw Error(S(130,n==null?n:typeof n,""))}return e=jn(c,s,e,l),e.elementType=n,e.type=a,e.lanes=r,e}function Qt(n,e,s,a){return n=jn(7,n,a,e),n.lanes=s,n}function Uh(n,e,s,a){n=jn(22,n,a,e),n.elementType=zp,n.lanes=s;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var r=l._current;if(r===null)throw Error(S(456));if(!(l._pendingVisibility&2)){var c=Mt(r,2);c!==null&&(l._pendingVisibility|=2,Ze(c,r,2))}},attach:function(){var r=l._current;if(r===null)throw Error(S(456));if(l._pendingVisibility&2){var c=Mt(r,2);c!==null&&(l._pendingVisibility&=-3,Ze(c,r,2))}}};return n.stateNode=l,n}function Dc(n,e,s){return n=jn(6,n,null,e),n.lanes=s,n}function Lc(n,e,s){return e=jn(4,n.children!==null?n.children:[],n.key,e),e.lanes=s,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Xn(n){n.flags|=4}function Rd(n,e){if(e.type!=="stylesheet"||e.state.loading&4)n.flags&=-16777217;else if(n.flags|=16777216,(K&42)===0&&(e=!(e.type==="stylesheet"&&!(e.state.loading&3)),!e))if(Zh())n.flags|=8192;else throw Ea=xi,wf}function $l(n,e){e!==null?n.flags|=4:n.flags&16384&&(e=n.tag!==22?Yp():536870912,n.lanes|=e)}function ma(n,e){if(!P)switch(n.tailMode){case"hidden":e=n.tail;for(var s=null;e!==null;)e.alternate!==null&&(s=e),e=e.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null}}function he(n){var e=n.alternate!==null&&n.alternate.child===n.child,s=0,a=0;if(e)for(var l=n.child;l!==null;)s|=l.lanes|l.childLanes,a|=l.subtreeFlags&31457280,a|=l.flags&31457280,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)s|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=a,n.childLanes=s,e}function Tg(n,e,s){var a=e.pendingProps;switch(No(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(e),null;case 1:return he(e),null;case 3:return s=e.stateNode,a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Wn(_e),Us(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(ua(e)?Xn(e):n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&(Li(vn),vn=null))),he(e),null;case 26:if(s=e.memoizedState,n===null)Xn(e),s!==null?(he(e),Rd(e,s)):(he(e),e.flags&=-16777217);else{var l=n.memoizedState;s!==l&&Xn(e),s!==null?(he(e),s===l?e.flags&=-16777217:Rd(e,s)):(n.memoizedProps!==a&&Xn(e),he(e),e.flags&=-16777217)}return null;case 27:if(lr(e),s=Nt.current,l=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&Xn(e);else{if(!a){if(e.stateNode===null)throw Error(S(166));return he(e),null}n=Tn.current,ua(e)?id(e):(n=s0(l,a,s),e.stateNode=n,Xn(e))}return he(e),null;case 5:if(lr(e),s=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&Xn(e);else{if(!a){if(e.stateNode===null)throw Error(S(166));return he(e),null}if(n=Tn.current,ua(e))id(e);else{switch(l=kr(Nt.current),n){case 1:n=l.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=l.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=l.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=l.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?l.createElement(s,{is:a.is}):l.createElement(s)}}n[Oe]=e,n[Ge]=a;e:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break e;for(;l.sibling===null;){if(l.return===null||l.return===e)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=n;e:switch(Le(n,s,a),s){case"button":case"input":case"select":case"textarea":n=!!a.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Xn(e)}}return he(e),e.flags&=-16777217,null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==a&&Xn(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(S(166));if(n=Nt.current,ua(e)){if(n=e.stateNode,s=e.memoizedProps,a=null,l=Ve,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}n[Oe]=e,n=!!(n.nodeValue===s||a!==null&&a.suppressHydrationWarning===!0||e0(n.nodeValue,s)),n||Kt(e)}else n=kr(n).createTextNode(a),n[Oe]=e,e.stateNode=n}return he(e),null;case 13:if(a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(l=ua(e),a!==null&&a.dehydrated!==null){if(n===null){if(!l)throw Error(S(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Oe]=e}else ul(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;he(e),l=!1}else vn!==null&&(Li(vn),vn=null),l=!0;if(!l)return e.flags&256?(Kn(e),e):(Kn(e),null)}if(Kn(e),e.flags&128)return e.lanes=s,e;if(s=a!==null,n=n!==null&&n.memoizedState!==null,s){a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return s!==n&&s&&(e.child.flags|=8192),$l(e,e.updateQueue),he(e),null;case 4:return Us(),n===null&&Po(e.stateNode.containerInfo),he(e),null;case 10:return Wn(e.type),he(e),null;case 19:if(Me(ke),l=e.memoizedState,l===null)return he(e),null;if(a=(e.flags&128)!==0,r=l.rendering,r===null)if(a)ma(l,!1);else{if(xe!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(r=fr(n),r!==null){for(e.flags|=128,ma(l,!1),n=r.updateQueue,e.updateQueue=n,$l(e,n),e.subtreeFlags=0,n=s,s=e.child;s!==null;)zh(s,n),s=s.sibling;return de(ke,ke.current&1|2),e.child}n=n.sibling}l.tail!==null&&$n()>yr&&(e.flags|=128,a=!0,ma(l,!1),e.lanes=4194304)}else{if(!a)if(n=fr(r),n!==null){if(e.flags|=128,a=!0,n=n.updateQueue,e.updateQueue=n,$l(e,n),ma(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!P)return he(e),null}else 2*$n()-l.renderingStartTime>yr&&s!==536870912&&(e.flags|=128,a=!0,ma(l,!1),e.lanes=4194304);l.isBackwards?(r.sibling=e.child,e.child=r):(n=l.last,n!==null?n.sibling=r:e.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=$n(),e.sibling=null,n=ke.current,de(ke,a?n&1|2:n&1),e):(he(e),null);case 22:case 23:return Kn(e),So(),a=e.memoizedState!==null,n!==null?n.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?s&536870912&&!(e.flags&128)&&(he(e),e.subtreeFlags&6&&(e.flags|=8192)):he(e),s=e.updateQueue,s!==null&&$l(e,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==s&&(e.flags|=2048),n!==null&&Me(Yt),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),e.memoizedState.cache!==s&&(e.flags|=2048),Wn(_e),he(e),null;case 25:return null}throw Error(S(156,e.tag))}function $g(n,e){switch(No(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Wn(_e),Us(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return lr(e),null;case 13:if(Kn(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(S(340));ul()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Me(ke),null;case 4:return Us(),null;case 10:return Wn(e.type),null;case 22:case 23:return Kn(e),So(),n!==null&&Me(Yt),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Wn(_e),null;case 25:return null;default:return null}}function Hh(n,e){switch(No(e),e.tag){case 3:Wn(_e),Us();break;case 26:case 27:case 5:lr(e);break;case 4:Us();break;case 13:Kn(e);break;case 19:Me(ke);break;case 10:Wn(e.type);break;case 22:case 23:Kn(e),So(),n!==null&&Me(Yt);break;case 24:Wn(_e)}}var Dg={getCacheForType:function(n){var e=ze(_e),s=e.data.get(n);return s===void 0&&(s=n(),e.data.set(n,s)),s}},Lg=typeof WeakMap=="function"?WeakMap:Map,I=0,te=null,Q=null,K=0,pe=0,ln=null,Zo=!1,tt=0,xe=0,st=0,ea=0,Yo=0,Ke=0,Ba=null,bn=null,Ys=!1,br=!1,Qo=0,yr=1/0,Ja=null,_t=null,Dl=!1,qt=null,Oa=0,Ti=0,$i=null,za=0,Di=null;function Fn(){if(I&2&&K!==0)return K&-K;if(_o()!==null){var n=Xs;return n!==0?n:Wo()}return Wp()}function qh(){Ke===0&&(Ke=!(K&536870912)||P?Zp():536870912);var n=Ln.current;return n!==null&&(n.flags|=32),Ke}function Ze(n,e,s){(n===te&&pe===2||n.cancelPendingCommit!==null)&&(ls(n,0),An(n,K,Ke)),pl(n,s),(!(I&2)||n!==te)&&(n===te&&(!(I&2)&&(ea|=s),xe===4&&An(n,K,Ke)),We(n))}function Vh(n,e){if(I&6)throw Error(S(327));var s=n.callbackNode;if(Os()&&n.callbackNode!==s)return null;var a=cr(n,n===te?K:0);if(a===0)return null;var l=(a&60)===0&&(a&n.expiredLanes)===0&&!e;if(e=l?Ug(n,a):Nr(n,a),e!==0){var r=l;do{if(e===6)An(n,a,0);else{if(l=n.current.alternate,r&&!Bg(l)){e=Nr(n,a),r=!1;continue}if(e===2){r=a;var c=Gp(n,r);if(c!==0&&(a=c,e=Xh(n,r,c),r=!1,e!==2))continue}if(e===1){ls(n,0),An(n,a,0);break}n.finishedWork=l,n.finishedLanes=a;e:{switch(r=n,e){case 0:case 1:throw Error(S(345));case 4:if((a&4194176)===a){An(r,a,Ke);break e}break;case 2:bn=null;break;case 3:case 5:break;default:throw Error(S(329))}if((a&62914560)===a&&(e=Qo+300-$n(),10<e)){if(An(r,a,Ke),cr(r,0)!==0)break e;r.timeoutHandle=t0(Ed.bind(null,r,l,bn,Ja,Ys,a,Ke),e);break e}Ed(r,l,bn,Ja,Ys,a,Ke)}}break}while(!0)}return We(n),Ph(n,$n()),n=n.callbackNode===s?Vh.bind(null,n):null,n}function Xh(n,e,s){var a=Ba,l=n.current.memoizedState.isDehydrated;if(l&&(ls(n,s).flags|=256),s=Nr(n,s),s!==2){if(Zo&&!l)return n.errorRecoveryDisabledLanes|=e,ea|=e,4;n=bn,bn=a,n!==null&&Li(n)}return s}function Li(n){bn===null?bn=n:bn.push.apply(bn,n)}function Ed(n,e,s,a,l,r,c){if(!(r&42)&&(Pa={stylesheets:null,count:0,unsuspend:v2},Dh(e),e=b2(),e!==null)){n.cancelPendingCommit=e(Oi.bind(null,n,s,a,l)),An(n,r,c);return}Oi(n,s,a,l,c)}function Bg(n){for(var e=n;;){if(e.flags&16384){var s=e.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var a=0;a<s.length;a++){var l=s[a],r=l.getSnapshot;l=l.value;try{if(!pn(r(),l))return!1}catch{return!1}}}if(s=e.child,e.subtreeFlags&16384&&s!==null)s.return=e,e=s;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pl(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0),I&2?Ys=!0:I&4&&(br=!0),Ko()}function An(n,e,s){e&=~Yo,e&=~ea,n.suspendedLanes|=e,n.pingedLanes&=~e;for(var a=n.expirationTimes,l=e;0<l;){var r=31-mn(l),c=1<<r;a[r]=-1,l&=~c}s!==0&&Qp(n,s,e)}function Og(n,e){if(I&6)throw Error(S(327));if(Os())return We(n),null;var s=Nr(n,e);if(s===2){var a=e,l=Gp(n,a);l!==0&&(e=l,s=Xh(n,a,l))}return s===1?(ls(n,0),An(n,e,0),We(n),null):s===6?(An(n,e,Ke),We(n),null):(n.finishedWork=n.current.alternate,n.finishedLanes=e,Oi(n,bn,Ja,Ys,Ke),We(n),null)}function Wr(){return I&6?!0:(fl(),!1)}function Jo(){if(Q!==null){if(pe===0)var n=Q.return;else n=Q,Kr(),Ao(n),Ts=null,Ya=0,n=Q;for(;n!==null;)Hh(n.alternate,n),n=n.return;Q=null}}function ls(n,e){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,n2(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Jo(),te=n,Q=s=wt(n.current,null),K=e,pe=0,ln=null,Zo=!1,Ke=Yo=ea=st=xe=0,bn=Ba=null,Ys=!1,e&8&&(e|=e&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=e;0<a;){var l=31-mn(a),r=1<<l;e|=n[l],a&=~r}return tt=e,Vr(),s}function Gh(n,e){H=null,Z.H=Bn,e===Yl?(e=dd(),pe=Zh()&&!(st&134217727)&&!(ea&134217727)?2:3):e===wf?(e=dd(),pe=4):pe=e===mh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ln=e,Q===null&&(xe=1,vr(n,dn(e,n.current)))}function Zh(){var n=Ln.current;return n===null?!0:(K&4194176)===K?Dn===null:(K&62914560)===K||K&536870912?n===Dn:!1}function Yh(){var n=Z.H;return Z.H=Bn,n===null?Bn:n}function Qh(){var n=Z.A;return Z.A=Dg,n}function Bi(){xe=4,!(st&134217727)&&!(ea&134217727)||te===null||An(te,K,Ke)}function Nr(n,e){var s=I;I|=2;var a=Yh(),l=Qh();(te!==n||K!==e)&&(Ja=null,ls(n,e)),e=!1;e:do try{if(pe!==0&&Q!==null){var r=Q,c=ln;switch(pe){case 8:Jo(),xe=6;break e;case 3:case 2:e||Ln.current!==null||(e=!0);default:pe=0,ln=null,Sa(n,r,c)}}zg();break}catch(i){Gh(n,i)}while(!0);if(e&&n.shellSuspendCounter++,Kr(),I=s,Z.H=a,Z.A=l,Q!==null)throw Error(S(261));return te=null,K=0,Vr(),xe}function zg(){for(;Q!==null;)Jh(Q)}function Ug(n,e){var s=I;I|=2;var a=Yh(),l=Qh();(te!==n||K!==e)&&(Ja=null,yr=$n()+500,ls(n,e));e:do try{if(pe!==0&&Q!==null){e=Q;var r=ln;n:switch(pe){case 1:pe=0,ln=null,Sa(n,e,r);break;case 2:if(ud(r)){pe=0,ln=null,Md(e);break}e=function(){pe===2&&te===n&&(pe=7),We(n)},r.then(e,e);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:ud(r)?(pe=0,ln=null,Md(e)):(pe=0,ln=null,Sa(n,e,r));break;case 5:switch(Q.tag){case 5:case 26:case 27:e=Q,pe=0,ln=null;var c=e.sibling;if(c!==null)Q=c;else{var i=e.return;i!==null?(Q=i,Pr(i)):Q=null}break n}pe=0,ln=null,Sa(n,e,r);break;case 6:pe=0,ln=null,Sa(n,e,r);break;case 8:Jo(),xe=6;break e;default:throw Error(S(462))}}Hg();break}catch(o){Gh(n,o)}while(!0);return Kr(),Z.H=a,Z.A=l,I=s,Q!==null?0:(te=null,K=0,Vr(),xe)}function Hg(){for(;Q!==null&&!c1();)Jh(Q)}function Jh(n){var e=gh(n.alternate,n,tt);n.memoizedProps=n.pendingProps,e===null?Pr(n):Q=e}function Md(n){var e=n.alternate;switch(n.tag){case 15:case 0:e=bd(e,n,n.pendingProps,n.type,void 0,K);break;case 11:e=bd(e,n,n.pendingProps,n.type.render,n.ref,K);break;case 5:Ao(n);default:Hh(e,n),n=Q=zh(n,tt),e=gh(e,n,tt)}n.memoizedProps=n.pendingProps,e===null?Pr(n):Q=e}function Sa(n,e,s){Kr(),Ao(e),Ts=null,Ya=0;var a=e.return;try{if(Cg(n,a,e,s,K)){xe=1,vr(n,dn(s,n.current)),Q=null;return}}catch(l){if(a!==null)throw Q=a,l;xe=1,vr(n,dn(s,n.current)),Q=null;return}if(e.flags&32768)e:{n=e;do{if(e=$g(n.alternate,n),e!==null){e.flags&=32767,Q=e;break e}n=n.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),Q=n}while(n!==null);xe=6,Q=null}else Pr(e)}function Pr(n){var e=n;do{n=e.return;var s=Tg(e.alternate,e,tt);if(s!==null){Q=s;return}if(e=e.sibling,e!==null){Q=e;return}Q=e=n}while(e!==null);xe===0&&(xe=5)}function Oi(n,e,s,a,l){var r=Z.T,c=ue.p;try{ue.p=2,Z.T=null,qg(n,e,s,a,c,l)}finally{Z.T=r,ue.p=c}return null}function qg(n,e,s,a,l,r){do Os();while(qt!==null);if(I&6)throw Error(S(327));var c=n.finishedWork,i=n.finishedLanes;if(c===null)return null;if(n.finishedWork=null,n.finishedLanes=0,c===n.current)throw Error(S(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var o=c.lanes|c.childLanes;if(o|=jo,v1(n,o,r),br=!1,n===te&&(Q=te=null,K=0),!(c.subtreeFlags&10256)&&!(c.flags&10256)||Dl||(Dl=!0,Ti=o,$i=s,Zg(rr,function(){return Os(),null})),s=(c.flags&15990)!==0,c.subtreeFlags&15990||s){s=Z.T,Z.T=null,r=ue.p,ue.p=2;var d=I;I|=4,Eg(n,c),Mh(c,n),og(qi),Mr=!!Hi,qi=Hi=null,n.current=c,_h(n,c.alternate,c),i1(),I=d,ue.p=r,Z.T=s}else n.current=c;if(Dl?(Dl=!1,qt=n,Oa=i):Kh(n,o),o=n.pendingLanes,o===0&&(_t=null),p1(c.stateNode),We(n),e!==null)for(l=n.onRecoverableError,c=0;c<e.length;c++)o=e[c],l(o.value,{componentStack:o.stack});return Oa&3&&Os(),o=n.pendingLanes,a||br||i&4194218&&o&42?n===Di?za++:(za=0,Di=n):za=0,fl(),null}function Kh(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,dl(e)))}function Os(){if(qt!==null){var n=qt,e=Ti;Ti=0;var s=Kp(Oa),a=Z.T,l=ue.p;try{if(ue.p=32>s?32:s,Z.T=null,qt===null)var r=!1;else{s=$i,$i=null;var c=qt,i=Oa;if(qt=null,Oa=0,I&6)throw Error(S(331));var o=I;if(I|=4,Bh(c.current),$h(c,c.current,i,s),I=o,fl(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(il,c)}catch{}r=!0}return r}finally{ue.p=l,Z.T=a,Kh(n,e)}}return!1}function Ad(n,e,s){e=dn(s,e),e=yi(n.stateNode,e,2),n=St(n,e,2),n!==null&&(pl(n,2),We(n))}function re(n,e,s){if(n.tag===3)Ad(n,n,s);else for(;e!==null;){if(e.tag===3){Ad(e,n,s);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_t===null||!_t.has(a))){n=dn(s,n),s=uh(2),a=St(e,s,2),a!==null&&(dh(s,a,e,n),pl(a,2),We(a));break}}e=e.return}}function Bc(n,e,s){var a=n.pingCache;if(a===null){a=n.pingCache=new Lg;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(s)||(Zo=!0,l.add(s),n=Vg.bind(null,n,e,s),e.then(n,n))}function Vg(n,e,s){var a=n.pingCache;a!==null&&a.delete(e),n.pingedLanes|=n.suspendedLanes&s,I&2?Ys=!0:I&4&&(br=!0),Ko(),te===n&&(K&s)===s&&(xe===4||xe===3&&(K&62914560)===K&&300>$n()-Qo?!(I&2)&&ls(n,0):Yo|=s),We(n)}function Wh(n,e){e===0&&(e=Yp()),n=Mt(n,e),n!==null&&(pl(n,e),We(n))}function Xg(n){var e=n.memoizedState,s=0;e!==null&&(s=e.retryLane),Wh(n,s)}function Gg(n,e){var s=0;switch(n.tag){case 13:var a=n.stateNode,l=n.memoizedState;l!==null&&(s=l.retryLane);break;case 19:a=n.stateNode;break;case 22:a=n.stateNode._retryCache;break;default:throw Error(S(314))}a!==null&&a.delete(e),Wh(n,s)}function Ko(){if(50<za)throw za=0,Di=null,I&2&&te!==null&&(te.errorRecoveryDisabledLanes|=K),Error(S(185))}function Zg(n,e){return oo(n,e)}var Sr=null,gs=null,zi=!1,wr=!1,Oc=!1,Jt=0;function We(n){n!==gs&&n.next===null&&(gs===null?Sr=gs=n:gs=gs.next=n),wr=!0,zi||(zi=!0,Qg(Yg))}function fl(){if(!Oc&&wr){Oc=!0;do for(var n=!1,e=Sr;e!==null;){var s=K;s=cr(e,e===te?s:0),s&3&&(n=!0,Og(e,s)),e=e.next}while(n);Oc=!1}}function Yg(){wr=zi=!1;for(var n=$n(),e=null,s=Sr;s!==null;){var a=s.next;if(Jt!==0&&e2()){var l=s,r=Jt;l.pendingLanes|=2,l.entangledLanes|=2,l.entanglements[1]|=r}l=Ph(s,n),l===0?(s.next=null,e===null?Sr=a:e.next=a,a===null&&(gs=e)):(e=s,l&3&&(wr=!0)),s=a}Jt=0,fl()}function Ph(n,e){for(var s=n.suspendedLanes,a=n.pingedLanes,l=n.expirationTimes,r=n.pendingLanes&-62914561;0<r;){var c=31-mn(r),i=1<<c,o=l[c];o===-1?(!(i&s)||i&a)&&(l[c]=g1(i,e)):o<=e&&(n.expiredLanes|=i),r&=~i}if(e=te,s=K,s=cr(n,n===e?s:0),a=n.callbackNode,s===0||n===e&&pe===2||n.cancelPendingCommit!==null)return a!==null&&a!==null&&oc(a),n.callbackNode=null,n.callbackPriority=0;if(s&3)return a!==null&&a!==null&&oc(a),n.callbackPriority=2,n.callbackNode=null,2;if(e=s&-s,e===n.callbackPriority)return e;switch(a!==null&&oc(a),Kp(s)){case 2:s=uo;break;case 8:s=Vp;break;case 32:s=rr;break;case 268435456:s=Xp;break;default:s=rr}return a=Vh.bind(null,n),s=oo(s,a),n.callbackPriority=e,n.callbackNode=s,e}function Qg(n){t2(function(){I&6?oo(uo,n):n()})}function Wo(){return Jt===0&&(Jt=Zp()),Jt}function Td(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Xl(""+n)}function $d(n,e){var s=e.ownerDocument.createElement("input");return s.name=e.name,s.value=e.value,n.id&&s.setAttribute("form",n.id),e.parentNode.insertBefore(s,e),n=new FormData(n),s.parentNode.removeChild(s),n}function Jg(n,e,s,a,l){if(e==="submit"&&s&&s.stateNode===l){var r=Td((l[Ge]||null).action),c=a.submitter;c&&(e=(e=c[Ge]||null)?Td(e.formAction):c.getAttribute("formAction"),e!==null&&(r=e,c=null));var i=new Ur("action","action",null,a,l);n.push({event:i,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Jt!==0){var o=c?$d(l,c):new FormData(l);bi(s,{pending:!0,data:o,method:l.method,action:r},null,o)}}else typeof r=="function"&&(i.preventDefault(),o=c?$d(l,c):new FormData(l),bi(s,{pending:!0,data:o,method:l.method,action:r},r,o))},currentTarget:l}]})}}for(var zc=0;zc<rd.length;zc++){var Uc=rd[zc],Kg=Uc.toLowerCase(),Wg=Uc[0].toUpperCase()+Uc.slice(1);Sn(Kg,"on"+Wg)}Sn(gf,"onAnimationEnd");Sn(vf,"onAnimationIteration");Sn(jf,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(dg,"onTransitionRun");Sn(mg,"onTransitionStart");Sn(pg,"onTransitionCancel");Sn(bf,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pg=new Set("cancel close invalid load scroll scrollend toggle".split(" ").concat(Ka));function Fh(n,e){e=(e&4)!==0;for(var s=0;s<n.length;s++){var a=n[s],l=a.event;a=a.listeners;e:{var r=void 0;if(e)for(var c=a.length-1;0<=c;c--){var i=a[c],o=i.instance,d=i.currentTarget;if(i=i.listener,o!==r&&l.isPropagationStopped())break e;r=i,l.currentTarget=d;try{r(l)}catch(u){gr(u)}l.currentTarget=null,r=o}else for(c=0;c<a.length;c++){if(i=a[c],o=i.instance,d=i.currentTarget,i=i.listener,o!==r&&l.isPropagationStopped())break e;r=i,l.currentTarget=d;try{r(l)}catch(u){gr(u)}l.currentTarget=null,r=o}}}}function F(n,e){var s=e[ci];s===void 0&&(s=e[ci]=new Set);var a=n+"__bubble";s.has(a)||(Ih(e,n,2,!1),s.add(a))}function Hc(n,e,s){var a=0;e&&(a|=4),Ih(s,n,a,e)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function Po(n){if(!n[Ll]){n[Ll]=!0,Pp.forEach(function(s){s!=="selectionchange"&&(Pg.has(s)||Hc(s,!1,n),Hc(s,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ll]||(e[Ll]=!0,Hc("selectionchange",!1,e))}}function Ih(n,e,s,a){switch(u0(e)){case 2:var l=w2;break;case 8:l=_2;break;default:l=nu}s=l.bind(null,e,s,n),l=void 0,!mi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?n.addEventListener(e,s,{capture:!0,passive:l}):n.addEventListener(e,s,!0):l!==void 0?n.addEventListener(e,s,{passive:l}):n.addEventListener(e,s,!1)}function qc(n,e,s,a,l){var r=a;if(!(e&1)&&!(e&2)&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var i=a.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(c===4)for(c=a.return;c!==null;){var o=c.tag;if((o===3||o===4)&&(o=c.stateNode.containerInfo,o===l||o.nodeType===8&&o.parentNode===l))return;c=c.return}for(;i!==null;){if(c=Vt(i),c===null)return;if(o=c.tag,o===5||o===6||o===26||o===27){a=r=c;continue e}i=i.parentNode}}a=a.return}lf(function(){var d=r,u=fo(s),m=[];e:{var p=yf.get(n);if(p!==void 0){var g=Ur,y=n;switch(n){case"keypress":if(Zl(s)===0)break e;case"keydown":case"keyup":g=G1;break;case"focusin":y="focus",g=vc;break;case"focusout":y="blur",g=vc;break;case"beforeblur":case"afterblur":g=vc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=T1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Q1;break;case gf:case vf:case jf:g=L1;break;case bf:g=K1;break;case"scroll":case"scrollend":g=M1;break;case"wheel":g=P1;break;case"copy":case"cut":case"paste":g=O1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Wu}var b=(e&4)!==0,N=!b&&(n==="scroll"||n==="scrollend"),x=b?p!==null?p+"Capture":null:p;b=[];for(var f=d,v;f!==null;){var j=f;if(v=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||v===null||x===null||(j=Va(f,x),j!=null&&b.push(Wa(f,j,v))),N)break;f=f.return}0<b.length&&(p=new g(p,y,null,s,u),m.push({event:p,listeners:b}))}}if(!(e&7)){e:{if(p=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",p&&s!==di&&(y=s.relatedTarget||s.fromElement)&&(Vt(y)||y[Ps]))break e;if((g||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=s.relatedTarget||s.toElement,g=d,y=y?Vt(y):null,y!==null&&(N=Ws(y),b=y.tag,y!==N||b!==5&&b!==27&&b!==6)&&(y=null)):(g=null,y=d),g!==y)){if(b=Ju,j="onMouseLeave",x="onMouseEnter",f="mouse",(n==="pointerout"||n==="pointerover")&&(b=Wu,j="onPointerLeave",x="onPointerEnter",f="pointer"),N=g==null?p:ba(g),v=y==null?p:ba(y),p=new b(j,f+"leave",g,s,u),p.target=N,p.relatedTarget=v,j=null,Vt(u)===d&&(b=new b(x,f+"enter",y,s,u),b.target=v,b.relatedTarget=N,j=b),N=j,g&&y)n:{for(b=g,x=y,f=0,v=b;v;v=ps(v))f++;for(v=0,j=x;j;j=ps(j))v++;for(;0<f-v;)b=ps(b),f--;for(;0<v-f;)x=ps(x),v--;for(;f--;){if(b===x||x!==null&&b===x.alternate)break n;b=ps(b),x=ps(x)}b=null}else b=null;g!==null&&Dd(m,p,g,b,!1),y!==null&&N!==null&&Dd(m,N,y,b,!0)}}e:{if(p=d?ba(d):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var _=ed;else if(Iu(p))if(mf)_=cg;else{_=lg;var k=ag}else g=p.nodeName,!g||g.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?d&&po(d.elementType)&&(_=ed):_=rg;if(_&&(_=_(n,d))){df(m,_,s,u);break e}k&&k(n,p,d),n==="focusout"&&d&&p.type==="number"&&d.memoizedProps.value!=null&&ui(p,"number",p.value)}switch(k=d?ba(d):window,n){case"focusin":(Iu(k)||k.contentEditable==="true")&&(ys=k,pi=d,Ra=null);break;case"focusout":Ra=pi=ys=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,ld(m,s,u);break;case"selectionchange":if(ug)break;case"keydown":case"keyup":ld(m,s,u)}var R;if(go)e:{switch(n){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else bs?of(n,s)&&(M="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(M="onCompositionStart");M&&(cf&&s.locale!=="ko"&&(bs||M!=="onCompositionStart"?M==="onCompositionEnd"&&bs&&(R=rf()):(jt=u,ho="value"in jt?jt.value:jt.textContent,bs=!0)),k=_r(d,M),0<k.length&&(M=new Ku(M,n,null,s,u),m.push({event:M,listeners:k}),R?M.data=R:(R=uf(s),R!==null&&(M.data=R)))),(R=I1?eg(n,s):ng(n,s))&&(M=_r(d,"onBeforeInput"),0<M.length&&(k=new Ku("onBeforeInput","beforeinput",null,s,u),m.push({event:k,listeners:M}),k.data=R)),Jg(m,n,d,s,u)}Fh(m,e)})}function Wa(n,e,s){return{instance:n,listener:e,currentTarget:s}}function _r(n,e){for(var s=e+"Capture",a=[];n!==null;){var l=n,r=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Va(n,s),l!=null&&a.unshift(Wa(n,l,r)),l=Va(n,e),l!=null&&a.push(Wa(n,l,r))),n=n.return}return a}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Dd(n,e,s,a,l){for(var r=e._reactName,c=[];s!==null&&s!==a;){var i=s,o=i.alternate,d=i.stateNode;if(i=i.tag,o!==null&&o===a)break;i!==5&&i!==26&&i!==27||d===null||(o=d,l?(d=Va(s,r),d!=null&&c.unshift(Wa(s,d,o))):l||(d=Va(s,r),d!=null&&c.push(Wa(s,d,o)))),s=s.return}c.length!==0&&n.push({event:e,listeners:c})}var Fg=/\r\n?/g,Ig=/\u0000|\uFFFD/g;function Ld(n){return(typeof n=="string"?n:""+n).replace(Fg,`
`).replace(Ig,"")}function e0(n,e){return e=Ld(e),Ld(n)===e}function Fr(){}function oe(n,e,s,a,l,r){switch(s){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||qs(n,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&qs(n,""+a);break;case"className":dc(n,"class",a);break;case"tabIndex":dc(n,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":dc(n,s,a);break;case"style":af(n,a,r);break;case"src":case"href":if(a===""&&(e!=="a"||s!=="href")){n.removeAttribute(s);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(s);break}a=Xl(""+a),n.setAttribute(s,a);break;case"action":case"formAction":if(typeof a=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(s==="formAction"?(e!=="input"&&oe(n,e,"name",l.name,l,null),oe(n,e,"formEncType",l.formEncType,l,null),oe(n,e,"formMethod",l.formMethod,l,null),oe(n,e,"formTarget",l.formTarget,l,null)):(oe(n,e,"encType",l.encType,l,null),oe(n,e,"method",l.method,l,null),oe(n,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(s);break}a=Xl(""+a),n.setAttribute(s,a);break;case"onClick":a!=null&&(n.onclick=Fr);break;case"onScroll":a!=null&&F("scroll",n);break;case"onScrollEnd":a!=null&&F("scrollend",n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(S(61));if(s=a.__html,s!=null){if(l.children!=null)throw Error(S(60));n.innerHTML=s}}break;case"multiple":n.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":n.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){n.removeAttribute("xlink:href");break}s=Xl(""+a),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(s,""+a):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":a===!0?n.setAttribute(s,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(s,a):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?n.setAttribute(s,a):n.removeAttribute(s);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?n.removeAttribute(s):n.setAttribute(s,a);break;case"xlinkActuate":Hn(n,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Hn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Hn(n,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Hn(n,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Hn(n,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Hn(n,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Hn(n,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Hn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Hn(n,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ii(n,"is",a);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=R1.get(s)||s,ii(n,s,a))}}function Ui(n,e,s,a,l,r){switch(s){case"style":af(n,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(S(61));if(s=a.__html,s!=null){if(l.children!=null)throw Error(S(60));n.innerHTML=s}}break;case"children":typeof a=="string"?qs(n,a):(typeof a=="number"||typeof a=="bigint")&&qs(n,""+a);break;case"onScroll":a!=null&&F("scroll",n);break;case"onScrollEnd":a!=null&&F("scrollend",n);break;case"onClick":a!=null&&(n.onclick=Fr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fp.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(l=s.endsWith("Capture"),e=s.slice(2,l?s.length-7:void 0),r=n[Ge]||null,r=r!=null?r[s]:null,typeof r=="function"&&n.removeEventListener(e,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(e,a,l);break e}s in n?n[s]=a:a===!0?n.setAttribute(s,""):ii(n,s,a)}}}function Le(n,e,s){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":F("invalid",n);var a=null,l=null,r=null,c=null,i=null,o=null;for(u in s)if(s.hasOwnProperty(u)){var d=s[u];if(d!=null)switch(u){case"name":a=d;break;case"type":l=d;break;case"checked":i=d;break;case"defaultChecked":o=d;break;case"value":r=d;break;case"defaultValue":c=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(S(137,e));break;default:oe(n,e,u,d,s,null)}}nf(n,r,c,i,o,l,a,!1),ir(n);return;case"select":F("invalid",n);var u=l=r=null;for(a in s)if(s.hasOwnProperty(a)&&(c=s[a],c!=null))switch(a){case"value":r=c;break;case"defaultValue":l=c;break;case"multiple":u=c;default:oe(n,e,a,c,s,null)}e=r,s=l,n.multiple=!!u,e!=null?Ms(n,!!u,e,!1):s!=null&&Ms(n,!!u,s,!0);return;case"textarea":F("invalid",n),r=a=u=null;for(l in s)if(s.hasOwnProperty(l)&&(c=s[l],c!=null))switch(l){case"value":u=c;break;case"defaultValue":a=c;break;case"children":r=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(S(91));break;default:oe(n,e,l,c,s,null)}sf(n,u,a,r),ir(n);return;case"option":for(c in s)if(s.hasOwnProperty(c)&&(u=s[c],u!=null))switch(c){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:oe(n,e,c,u,s,null)}return;case"dialog":F("cancel",n),F("close",n);break;case"iframe":case"object":F("load",n);break;case"video":case"audio":for(u=0;u<Ka.length;u++)F(Ka[u],n);break;case"image":F("error",n),F("load",n);break;case"details":F("toggle",n);break;case"embed":case"source":case"img":case"link":F("error",n),F("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(i in s)if(s.hasOwnProperty(i)&&(u=s[i],u!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(S(137,e));default:oe(n,e,i,u,s,null)}return;default:if(po(e)){for(o in s)s.hasOwnProperty(o)&&(u=s[o],u!==void 0&&Ui(n,e,o,u,s,void 0));return}}for(r in s)s.hasOwnProperty(r)&&(u=s[r],u!=null&&oe(n,e,r,u,s,null))}function Bd(n,e,s,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,c=null,i=null,o=null,d=null,u=null;for(g in s){var m=s[g];if(s.hasOwnProperty(g)&&m!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":o=m;default:a.hasOwnProperty(g)||oe(n,e,g,null,a,m)}}for(var p in a){var g=a[p];if(m=s[p],a.hasOwnProperty(p)&&(g!=null||m!=null))switch(p){case"type":r=g;break;case"name":l=g;break;case"checked":d=g;break;case"defaultChecked":u=g;break;case"value":c=g;break;case"defaultValue":i=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(S(137,e));break;default:g!==m&&oe(n,e,p,g,a,m)}}oi(n,c,i,o,d,u,r,l);return;case"select":g=c=i=p=null;for(r in s)if(o=s[r],s.hasOwnProperty(r)&&o!=null)switch(r){case"value":break;case"multiple":g=o;default:a.hasOwnProperty(r)||oe(n,e,r,null,a,o)}for(l in a)if(r=a[l],o=s[l],a.hasOwnProperty(l)&&(r!=null||o!=null))switch(l){case"value":p=r;break;case"defaultValue":i=r;break;case"multiple":c=r;default:r!==o&&oe(n,e,l,r,a,o)}e=i,s=c,a=g,p!=null?Ms(n,!!s,p,!1):!!a!=!!s&&(e!=null?Ms(n,!!s,e,!0):Ms(n,!!s,s?[]:"",!1));return;case"textarea":g=p=null;for(i in s)if(l=s[i],s.hasOwnProperty(i)&&l!=null&&!a.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:oe(n,e,i,null,a,l)}for(c in a)if(l=a[c],r=s[c],a.hasOwnProperty(c)&&(l!=null||r!=null))switch(c){case"value":p=l;break;case"defaultValue":g=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(S(91));break;default:l!==r&&oe(n,e,c,l,a,r)}tf(n,p,g);return;case"option":for(var y in s)if(p=s[y],s.hasOwnProperty(y)&&p!=null&&!a.hasOwnProperty(y))switch(y){case"selected":n.selected=!1;break;default:oe(n,e,y,null,a,p)}for(o in a)if(p=a[o],g=s[o],a.hasOwnProperty(o)&&p!==g&&(p!=null||g!=null))switch(o){case"selected":n.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:oe(n,e,o,p,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in s)p=s[b],s.hasOwnProperty(b)&&p!=null&&!a.hasOwnProperty(b)&&oe(n,e,b,null,a,p);for(d in a)if(p=a[d],g=s[d],a.hasOwnProperty(d)&&p!==g&&(p!=null||g!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(S(137,e));break;default:oe(n,e,d,p,a,g)}return;default:if(po(e)){for(var N in s)p=s[N],s.hasOwnProperty(N)&&p!==void 0&&!a.hasOwnProperty(N)&&Ui(n,e,N,void 0,a,p);for(u in a)p=a[u],g=s[u],!a.hasOwnProperty(u)||p===g||p===void 0&&g===void 0||Ui(n,e,u,p,a,g);return}}for(var x in s)p=s[x],s.hasOwnProperty(x)&&p!=null&&!a.hasOwnProperty(x)&&oe(n,e,x,null,a,p);for(m in a)p=a[m],g=s[m],!a.hasOwnProperty(m)||p===g||p==null&&g==null||oe(n,e,m,p,a,g)}var Hi=null,qi=null;function kr(n){return n.nodeType===9?n:n.ownerDocument}function Od(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n0(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Vi(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vc=null;function e2(){var n=window.event;return n&&n.type==="popstate"?n===Vc?!1:(Vc=n,!0):(Vc=null,!1)}var t0=typeof setTimeout=="function"?setTimeout:void 0,n2=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,t2=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(n){return zd.resolve(null).then(n).catch(s2)}:t0;function s2(n){setTimeout(function(){throw n})}function Xc(n,e){var s=e,a=0;do{var l=s.nextSibling;if(n.removeChild(s),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(a===0){n.removeChild(l),el(e);return}a--}else s!=="$"&&s!=="$?"&&s!=="$!"||a++;s=l}while(s);el(e)}function Xi(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var s=e;switch(e=e.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Xi(s),mo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function a2(n,e,s,a){for(;n.nodeType===1;){var l=s;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(a){if(!n[qa])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(r=n.getAttribute("rel"),r==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(r!==l.rel||n.getAttribute("href")!==(l.href==null?null:l.href)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||n.getAttribute("title")!==(l.title==null?null:l.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(r=n.getAttribute("src"),(r!==(l.src==null?null:l.src)||n.getAttribute("type")!==(l.type==null?null:l.type)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&n.getAttribute("name")===r)return n}else return n;if(n=Nn(n.nextSibling),n===null)break}return null}function l2(n,e,s){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Nn(n.nextSibling),n===null))return null;return n}function Nn(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return n}function Ud(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(e===0)return n;e--}else s==="/$"&&e++}n=n.previousSibling}return null}function s0(n,e,s){switch(e=kr(s),n){case"html":if(n=e.documentElement,!n)throw Error(S(452));return n;case"head":if(n=e.head,!n)throw Error(S(453));return n;case"body":if(n=e.body,!n)throw Error(S(454));return n;default:throw Error(S(451))}}var fn=new Map,Hd=new Set;function Cr(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var at=ue.d;ue.d={f:r2,r:c2,D:i2,C:o2,L:u2,m:d2,X:p2,S:m2,M:f2};function r2(){var n=at.f(),e=Wr();return n||e}function c2(n){var e=Fs(n);e!==null&&e.tag===5&&e.type==="form"?th(e):at.r(n)}var na=typeof document>"u"?null:document;function a0(n,e,s){var a=na;if(a&&typeof e=="string"&&e){var l=un(e);l='link[rel="'+n+'"][href="'+l+'"]',typeof s=="string"&&(l+='[crossorigin="'+s+'"]'),Hd.has(l)||(Hd.add(l),n={rel:n,crossOrigin:s,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),Le(e,"link",n),Ee(e),a.head.appendChild(e)))}}function i2(n){at.D(n),a0("dns-prefetch",n,null)}function o2(n,e){at.C(n,e),a0("preconnect",n,e)}function u2(n,e,s){at.L(n,e,s);var a=na;if(a&&n&&e){var l='link[rel="preload"][as="'+un(e)+'"]';e==="image"&&s&&s.imageSrcSet?(l+='[imagesrcset="'+un(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(l+='[imagesizes="'+un(s.imageSizes)+'"]')):l+='[href="'+un(n)+'"]';var r=l;switch(e){case"style":r=Qs(n);break;case"script":r=ta(n)}fn.has(r)||(n=me({rel:"preload",href:e==="image"&&s&&s.imageSrcSet?void 0:n,as:e},s),fn.set(r,n),a.querySelector(l)!==null||e==="style"&&a.querySelector(hl(r))||e==="script"&&a.querySelector(xl(r))||(e=a.createElement("link"),Le(e,"link",n),Ee(e),a.head.appendChild(e)))}}function d2(n,e){at.m(n,e);var s=na;if(s&&n){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+un(a)+'"][href="'+un(n)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ta(n)}if(!fn.has(r)&&(n=me({rel:"modulepreload",href:n},e),fn.set(r,n),s.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(xl(r)))return}a=s.createElement("link"),Le(a,"link",n),Ee(a),s.head.appendChild(a)}}}function m2(n,e,s){at.S(n,e,s);var a=na;if(a&&n){var l=Es(a).hoistableStyles,r=Qs(n);e=e||"default";var c=l.get(r);if(!c){var i={loading:0,preload:null};if(c=a.querySelector(hl(r)))i.loading=5;else{n=me({rel:"stylesheet",href:n,"data-precedence":e},s),(s=fn.get(r))&&Fo(n,s);var o=c=a.createElement("link");Ee(o),Le(o,"link",n),o._p=new Promise(function(d,u){o.onload=d,o.onerror=u}),o.addEventListener("load",function(){i.loading|=1}),o.addEventListener("error",function(){i.loading|=2}),i.loading|=4,Fl(c,e,a)}c={type:"stylesheet",instance:c,count:1,state:i},l.set(r,c)}}}function p2(n,e){at.X(n,e);var s=na;if(s&&n){var a=Es(s).hoistableScripts,l=ta(n),r=a.get(l);r||(r=s.querySelector(xl(l)),r||(n=me({src:n,async:!0},e),(e=fn.get(l))&&Io(n,e),r=s.createElement("script"),Ee(r),Le(r,"link",n),s.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function f2(n,e){at.M(n,e);var s=na;if(s&&n){var a=Es(s).hoistableScripts,l=ta(n),r=a.get(l);r||(r=s.querySelector(xl(l)),r||(n=me({src:n,async:!0,type:"module"},e),(e=fn.get(l))&&Io(n,e),r=s.createElement("script"),Ee(r),Le(r,"link",n),s.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function h2(n,e,s){if(e=(e=Nt.current)?Cr(e):null,!e)throw Error(S(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(s=Qs(s.href),e=Es(e).hoistableStyles,n=e.get(s),n||(n={type:"style",instance:null,count:0,state:null},e.set(s,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=Qs(s.href);var a=Es(e).hoistableStyles,l=a.get(n);return l||(e=e.ownerDocument||e,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(n,l),fn.has(n)||x2(e,n,{rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},l.state)),l}return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(s=ta(s),e=Es(e).hoistableScripts,n=e.get(s),n||(n={type:"script",instance:null,count:0,state:null},e.set(s,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(S(444,n))}}function Qs(n){return'href="'+un(n)+'"'}function hl(n){return'link[rel="stylesheet"]['+n+"]"}function l0(n){return me({},n,{"data-precedence":n.precedence,precedence:null})}function x2(n,e,s,a){fn.set(e,s),n.querySelector(hl(e))||(n.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=n.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Le(e,"link",s),Ee(e),n.head.appendChild(e)))}function ta(n){return'[src="'+un(n)+'"]'}function xl(n){return"script[async]"+n}function qd(n,e,s){if(e.count++,e.instance===null)switch(e.type){case"style":var a=n.querySelector('style[data-href~="'+un(s.href)+'"]');if(a)return e.instance=a,Ee(a),a;var l=me({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return a=(n.ownerDocument||n).createElement("style"),Ee(a),Le(a,"style",l),Fl(a,s.precedence,n),e.instance=a;case"stylesheet":l=Qs(s.href);var r=n.querySelector(hl(l));if(r)return e.state.loading|=4,e.instance=r,Ee(r),r;a=l0(s),(l=fn.get(l))&&Fo(a,l),r=(n.ownerDocument||n).createElement("link"),Ee(r);var c=r;return c._p=new Promise(function(i,o){c.onload=i,c.onerror=o}),Le(r,"link",a),e.state.loading|=4,Fl(r,s.precedence,n),e.instance=r;case"script":return r=ta(s.src),(l=n.querySelector(xl(r)))?(e.instance=l,Ee(l),l):(a=s,(l=fn.get(r))&&(a=me({},s),Io(a,l)),n=n.ownerDocument||n,l=n.createElement("script"),Ee(l),Le(l,"link",a),n.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(S(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(a=e.instance,e.state.loading|=4,Fl(a,s.precedence,n));return e.instance}function Fl(n,e,s){for(var a=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,c=0;c<a.length;c++){var i=a[c];if(i.dataset.precedence===e)r=i;else if(r!==l)break}r?r.parentNode.insertBefore(n,r.nextSibling):(e=s.nodeType===9?s.head:s,e.insertBefore(n,e.firstChild))}function Fo(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Io(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Il=null;function Vd(n,e,s){if(Il===null){var a=new Map,l=Il=new Map;l.set(s,a)}else l=Il,a=l.get(s),a||(a=new Map,l.set(s,a));if(a.has(n))return a;for(a.set(n,null),s=s.getElementsByTagName(n),l=0;l<s.length;l++){var r=s[l];if(!(r[qa]||r[Oe]||n==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(e)||"";c=n+c;var i=a.get(c);i?i.push(r):a.set(c,[r])}}return a}function Xd(n,e,s){n=n.ownerDocument||n,n.head.insertBefore(s,e==="title"?n.querySelector("head > title"):null)}function g2(n,e,s){if(s===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}var Pa=null;function v2(){}function j2(n,e,s){if(Pa===null)throw Error(S(475));var a=Pa;if(e.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var l=Qs(s.href),r=n.querySelector(hl(l));if(r){n=r._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(a.count++,a=Rr.bind(a),n.then(a,a)),e.state.loading|=4,e.instance=r,Ee(r);return}r=n.ownerDocument||n,s=l0(s),(l=fn.get(l))&&Fo(s,l),r=r.createElement("link"),Ee(r);var c=r;c._p=new Promise(function(i,o){c.onload=i,c.onerror=o}),Le(r,"link",s),e.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,n),(n=e.state.preload)&&!(e.state.loading&3)&&(a.count++,e=Rr.bind(a),n.addEventListener("load",e),n.addEventListener("error",e))}}function b2(){if(Pa===null)throw Error(S(475));var n=Pa;return n.stylesheets&&n.count===0&&Gi(n,n.stylesheets),0<n.count?function(e){var s=setTimeout(function(){if(n.stylesheets&&Gi(n,n.stylesheets),n.unsuspend){var a=n.unsuspend;n.unsuspend=null,a()}},6e4);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Rr(){if(this.count--,this.count===0){if(this.stylesheets)Gi(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Er=null;function Gi(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Er=new Map,e.forEach(y2,n),Er=null,Rr.call(n))}function y2(n,e){if(!(e.state.loading&4)){var s=Er.get(n);if(s)var a=s.get(null);else{s=new Map,Er.set(n,s);for(var l=n.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var c=l[r];(c.nodeName==="link"||c.getAttribute("media")!=="not all")&&(s.set(c.dataset.precedence,c),a=c)}a&&s.set(null,a)}l=e.instance,c=l.getAttribute("data-precedence"),r=s.get(c)||a,r===a&&s.set(null,l),s.set(c,l),this.count++,a=Rr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(l,n.firstChild)),e.state.loading|=4}}function N2(n,e,s,a,l,r,c,i){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.hiddenUpdates=uc(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=i,this.incompleteTransitions=new Map}function r0(n,e,s,a,l,r,c,i,o,d,u,m,p){return n=new N2(n,e,s,i,o,d,u,p),e=1,r===!0&&(e|=24),r=jn(3,null,null,e),n.current=r,r.stateNode=n,e=wo(),e.refCount++,n.pooledCache=e,e.refCount++,r.memoizedState={element:a,isDehydrated:s,cache:e},Ho(r),n}function c0(n){return n?(n=ws,n):ws}function i0(n,e,s,a,l,r){l=c0(l),a.context===null?a.context=l:a.pendingContext=l,a=Pn(e),a.payload={element:s},r=r===void 0?null:r,r!==null&&(a.callback=r),s=St(n,a,e),s!==null&&(Ze(s,n,e),Ta(s,n,e))}function Gd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<e?s:e}}function eu(n,e){Gd(n,e),(n=n.alternate)&&Gd(n,e)}function o0(n){if(n.tag===13){var e=Mt(n,67108864);e!==null&&Ze(e,n,67108864),eu(n,67108864)}}function S2(){return null}var Mr=!0;function w2(n,e,s,a){var l=Z.T;Z.T=null;var r=ue.p;try{ue.p=2,nu(n,e,s,a)}finally{ue.p=r,Z.T=l}}function _2(n,e,s,a){var l=Z.T;Z.T=null;var r=ue.p;try{ue.p=8,nu(n,e,s,a)}finally{ue.p=r,Z.T=l}}function nu(n,e,s,a){if(Mr){var l=Zi(a);if(l===null)qc(n,e,a,Ar,s),Zd(n,a);else if(C2(l,n,e,s,a))a.stopPropagation();else if(Zd(n,a),e&4&&-1<k2.indexOf(n)){for(;l!==null;){var r=Fs(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=ja(r.pendingLanes);if(c!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;c;){var o=1<<31-mn(c);i.entanglements[1]|=o,c&=~o}We(r),!(I&6)&&(yr=$n()+500,fl())}}break;case 13:i=Mt(r,2),i!==null&&Ze(i,r,2),Wr(),eu(r,2)}if(r=Zi(a),r===null&&qc(n,e,a,Ar,s),r===l)break;l=r}l!==null&&a.stopPropagation()}else qc(n,e,a,null,s)}}function Zi(n){return n=fo(n),tu(n)}var Ar=null;function tu(n){if(Ar=null,n=Vt(n),n!==null){var e=Ws(n);if(e===null)n=null;else{var s=e.tag;if(s===13){if(n=Up(e),n!==null)return n;n=null}else if(s===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Ar=n,null}function u0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(o1()){case uo:return 2;case Vp:return 8;case rr:case u1:return 32;case Xp:return 268435456;default:return 32}default:return 32}}var Yi=!1,kt=null,Ct=null,Rt=null,Fa=new Map,Ia=new Map,xt=[],k2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zd(n,e){switch(n){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(e.pointerId)}}function pa(n,e,s,a,l,r){return n===null||n.nativeEvent!==r?(n={blockedOn:e,domEventName:s,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},e!==null&&(e=Fs(e),e!==null&&o0(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),n)}function C2(n,e,s,a,l){switch(e){case"focusin":return kt=pa(kt,n,e,s,a,l),!0;case"dragenter":return Ct=pa(Ct,n,e,s,a,l),!0;case"mouseover":return Rt=pa(Rt,n,e,s,a,l),!0;case"pointerover":var r=l.pointerId;return Fa.set(r,pa(Fa.get(r)||null,n,e,s,a,l)),!0;case"gotpointercapture":return r=l.pointerId,Ia.set(r,pa(Ia.get(r)||null,n,e,s,a,l)),!0}return!1}function d0(n){var e=Vt(n.target);if(e!==null){var s=Ws(e);if(s!==null){if(e=s.tag,e===13){if(e=Up(s),e!==null){n.blockedOn=e,j1(n.priority,function(){if(s.tag===13){var a=Fn(),l=Mt(s,a);l!==null&&Ze(l,s,a),eu(s,a)}});return}}else if(e===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function er(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var s=Zi(n.nativeEvent);if(s===null){s=n.nativeEvent;var a=new s.constructor(s.type,s);di=a,s.target.dispatchEvent(a),di=null}else return e=Fs(s),e!==null&&o0(e),n.blockedOn=s,!1;e.shift()}return!0}function Yd(n,e,s){er(n)&&s.delete(e)}function R2(){Yi=!1,kt!==null&&er(kt)&&(kt=null),Ct!==null&&er(Ct)&&(Ct=null),Rt!==null&&er(Rt)&&(Rt=null),Fa.forEach(Yd),Ia.forEach(Yd)}function Bl(n,e){n.blockedOn===e&&(n.blockedOn=null,Yi||(Yi=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,R2)))}var Ol=null;function Qd(n){Ol!==n&&(Ol=n,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,function(){Ol===n&&(Ol=null);for(var e=0;e<n.length;e+=3){var s=n[e],a=n[e+1],l=n[e+2];if(typeof a!="function"){if(tu(a||s)===null)continue;break}var r=Fs(s);r!==null&&(n.splice(e,3),e-=3,bi(r,{pending:!0,data:l,method:s.method,action:a},a,l))}}))}function el(n){function e(o){return Bl(o,n)}kt!==null&&Bl(kt,n),Ct!==null&&Bl(Ct,n),Rt!==null&&Bl(Rt,n),Fa.forEach(e),Ia.forEach(e);for(var s=0;s<xt.length;s++){var a=xt[s];a.blockedOn===n&&(a.blockedOn=null)}for(;0<xt.length&&(s=xt[0],s.blockedOn===null);)d0(s),s.blockedOn===null&&xt.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(a=0;a<s.length;a+=3){var l=s[a],r=s[a+1],c=l[Ge]||null;if(typeof r=="function")c||Qd(s);else if(c){var i=null;if(r&&r.hasAttribute("formAction")){if(l=r,c=r[Ge]||null)i=c.formAction;else if(tu(l)!==null)continue}else i=c.action;typeof i=="function"?s[a+1]=i:(s.splice(a,3),a-=3),Qd(s)}}}function su(n){this._internalRoot=n}Ir.prototype.render=su.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(S(409));var s=e.current,a=Fn();i0(s,a,n,e,null,null)};Ir.prototype.unmount=su.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;n.tag===0&&Os(),i0(n.current,2,null,n,null,null),Wr(),e[Ps]=null}};function Ir(n){this._internalRoot=n}Ir.prototype.unstable_scheduleHydration=function(n){if(n){var e=Wp();n={blockedOn:null,target:n,priority:e};for(var s=0;s<xt.length&&e!==0&&e<xt[s].priority;s++);xt.splice(s,0,n),s===0&&d0(n)}};ue.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(S(188)):(n=Object.keys(n).join(","),Error(S(268,n)));return n=Hp(e),n=n===null?null:n.stateNode,n};var fa={findFiberByHostInstance:Vt,bundleType:0,version:"19.0.0-rc-915b914b3a-20240515",rendererPackageName:"react-dom"},E2={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z,findHostInstanceByFiber:function(n){return n=Hp(n),n===null?null:n.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||S2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"19.0.0-rc-915b914b3a-20240515"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{il=zl.inject(E2),en=zl}catch{}}Or.createRoot=function(n,e){if(!Lp(n))throw Error(S(299));var s=!1,a="",l=ch,r=ih,c=oh,i=null;return e!=null&&(e.unstable_strictMode===!0&&(s=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(i=e.unstable_transitionCallbacks)),e=r0(n,1,!1,null,null,s,!1,a,l,r,c,i,null),n[Ps]=e.current,Po(n.nodeType===8?n.parentNode:n),new su(e)};Or.hydrateRoot=function(n,e,s){if(!Lp(n))throw Error(S(299));var a=!1,l="",r=ch,c=ih,i=oh,o=null,d=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onUncaughtError!==void 0&&(r=s.onUncaughtError),s.onCaughtError!==void 0&&(c=s.onCaughtError),s.onRecoverableError!==void 0&&(i=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(o=s.unstable_transitionCallbacks),s.formState!==void 0&&(d=s.formState)),e=r0(n,1,!0,e,s??null,a,!1,l,r,c,i,o,d),e.context=c0(null),s=e.current,a=Fn(),l=Pn(a),l.callback=null,St(s,l,a),e.current.lanes=a,pl(e,a),We(e),n[Ps]=e.current,Po(n),new Ir(e)};Or.version="19.0.0-rc-915b914b3a-20240515";function m0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m0)}catch(n){console.error(n)}}m0(),Ep.exports=Or;var M2=Ep.exports;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(n[a]=s[a])}return n},nl.apply(this,arguments)}var bt;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(bt||(bt={}));const Jd="popstate";function A2(n){n===void 0&&(n={});function e(a,l){let{pathname:r,search:c,hash:i}=a.location;return Qi("",{pathname:r,search:c,hash:i},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function s(a,l){return typeof l=="string"?l:Tr(l)}return $2(e,s,null,n)}function je(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function p0(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function T2(){return Math.random().toString(36).substr(2,8)}function Kd(n,e){return{usr:n.state,key:n.key,idx:e}}function Qi(n,e,s,a){return s===void 0&&(s=null),nl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?sa(e):e,{state:s,key:e&&e.key||a||T2()})}function Tr(n){let{pathname:e="/",search:s="",hash:a=""}=n;return s&&s!=="?"&&(e+=s.charAt(0)==="?"?s:"?"+s),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function sa(n){let e={};if(n){let s=n.indexOf("#");s>=0&&(e.hash=n.substr(s),n=n.substr(0,s));let a=n.indexOf("?");a>=0&&(e.search=n.substr(a),n=n.substr(0,a)),n&&(e.pathname=n)}return e}function $2(n,e,s,a){a===void 0&&(a={});let{window:l=document.defaultView,v5Compat:r=!1}=a,c=l.history,i=bt.Pop,o=null,d=u();d==null&&(d=0,c.replaceState(nl({},c.state,{idx:d}),""));function u(){return(c.state||{idx:null}).idx}function m(){i=bt.Pop;let N=u(),x=N==null?null:N-d;d=N,o&&o({action:i,location:b.location,delta:x})}function p(N,x){i=bt.Push;let f=Qi(b.location,N,x);d=u()+1;let v=Kd(f,d),j=b.createHref(f);try{c.pushState(v,"",j)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;l.location.assign(j)}r&&o&&o({action:i,location:b.location,delta:1})}function g(N,x){i=bt.Replace;let f=Qi(b.location,N,x);d=u();let v=Kd(f,d),j=b.createHref(f);c.replaceState(v,"",j),r&&o&&o({action:i,location:b.location,delta:0})}function y(N){let x=l.location.origin!=="null"?l.location.origin:l.location.href,f=typeof N=="string"?N:Tr(N);return f=f.replace(/ $/,"%20"),je(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let b={get action(){return i},get location(){return n(l,c)},listen(N){if(o)throw new Error("A history only accepts one active listener");return l.addEventListener(Jd,m),o=N,()=>{l.removeEventListener(Jd,m),o=null}},createHref(N){return e(l,N)},createURL:y,encodeLocation(N){let x=y(N);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:g,go(N){return c.go(N)}};return b}var Wd;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Wd||(Wd={}));function D2(n,e,s){s===void 0&&(s="/");let a=typeof e=="string"?sa(e):e,l=au(a.pathname||"/",s);if(l==null)return null;let r=f0(n);L2(r);let c=null;for(let i=0;c==null&&i<r.length;++i){let o=Y2(l);c=G2(r[i],o)}return c}function f0(n,e,s,a){e===void 0&&(e=[]),s===void 0&&(s=[]),a===void 0&&(a="");let l=(r,c,i)=>{let o={relativePath:i===void 0?r.path||"":i,caseSensitive:r.caseSensitive===!0,childrenIndex:c,route:r};o.relativePath.startsWith("/")&&(je(o.relativePath.startsWith(a),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(a.length));let d=Et([a,o.relativePath]),u=s.concat(o);r.children&&r.children.length>0&&(je(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),f0(r.children,e,u,d)),!(r.path==null&&!r.index)&&e.push({path:d,score:V2(d,r.index),routesMeta:u})};return n.forEach((r,c)=>{var i;if(r.path===""||!((i=r.path)!=null&&i.includes("?")))l(r,c);else for(let o of h0(r.path))l(r,c,o)}),e}function h0(n){let e=n.split("/");if(e.length===0)return[];let[s,...a]=e,l=s.endsWith("?"),r=s.replace(/\?$/,"");if(a.length===0)return l?[r,""]:[r];let c=h0(a.join("/")),i=[];return i.push(...c.map(o=>o===""?r:[r,o].join("/"))),l&&i.push(...c),i.map(o=>n.startsWith("/")&&o===""?"/":o)}function L2(n){n.sort((e,s)=>e.score!==s.score?s.score-e.score:X2(e.routesMeta.map(a=>a.childrenIndex),s.routesMeta.map(a=>a.childrenIndex)))}const B2=/^:[\w-]+$/,O2=3,z2=2,U2=1,H2=10,q2=-2,Pd=n=>n==="*";function V2(n,e){let s=n.split("/"),a=s.length;return s.some(Pd)&&(a+=q2),e&&(a+=z2),s.filter(l=>!Pd(l)).reduce((l,r)=>l+(B2.test(r)?O2:r===""?U2:H2),a)}function X2(n,e){return n.length===e.length&&n.slice(0,-1).every((a,l)=>a===e[l])?n[n.length-1]-e[e.length-1]:0}function G2(n,e){let{routesMeta:s}=n,a={},l="/",r=[];for(let c=0;c<s.length;++c){let i=s[c],o=c===s.length-1,d=l==="/"?e:e.slice(l.length)||"/",u=x0({path:i.relativePath,caseSensitive:i.caseSensitive,end:o},d);if(!u)return null;Object.assign(a,u.params);let m=i.route;r.push({params:a,pathname:Et([l,u.pathname]),pathnameBase:W2(Et([l,u.pathnameBase])),route:m}),u.pathnameBase!=="/"&&(l=Et([l,u.pathnameBase]))}return r}function x0(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,a]=Z2(n.path,n.caseSensitive,n.end),l=e.match(s);if(!l)return null;let r=l[0],c=r.replace(/(.)\/+$/,"$1"),i=l.slice(1);return{params:a.reduce((d,u,m)=>{let{paramName:p,isOptional:g}=u;if(p==="*"){let b=i[m]||"";c=r.slice(0,r.length-b.length).replace(/(.)\/+$/,"$1")}const y=i[m];return g&&!y?d[p]=void 0:d[p]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:r,pathnameBase:c,pattern:n}}function Z2(n,e,s){e===void 0&&(e=!1),s===void 0&&(s=!0),p0(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let a=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,i,o)=>(a.push({paramName:i,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(a.push({paramName:"*"}),l+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?l+="\\/*$":n!==""&&n!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),a]}function Y2(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return p0(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function au(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let s=e.endsWith("/")?e.length-1:e.length,a=n.charAt(s);return a&&a!=="/"?null:n.slice(s)||"/"}function Q2(n,e){e===void 0&&(e="/");let{pathname:s,search:a="",hash:l=""}=typeof n=="string"?sa(n):n;return{pathname:s?s.startsWith("/")?s:J2(s,e):e,search:P2(a),hash:F2(l)}}function J2(n,e){let s=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(l=>{l===".."?s.length>1&&s.pop():l!=="."&&s.push(l)}),s.length>1?s.join("/"):"/"}function Gc(n,e,s,a){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function K2(n){return n.filter((e,s)=>s===0||e.route.path&&e.route.path.length>0)}function g0(n,e){let s=K2(n);return e?s.map((a,l)=>l===n.length-1?a.pathname:a.pathnameBase):s.map(a=>a.pathnameBase)}function v0(n,e,s,a){a===void 0&&(a=!1);let l;typeof n=="string"?l=sa(n):(l=nl({},n),je(!l.pathname||!l.pathname.includes("?"),Gc("?","pathname","search",l)),je(!l.pathname||!l.pathname.includes("#"),Gc("#","pathname","hash",l)),je(!l.search||!l.search.includes("#"),Gc("#","search","hash",l)));let r=n===""||l.pathname==="",c=r?"/":l.pathname,i;if(c==null)i=s;else{let m=e.length-1;if(!a&&c.startsWith("..")){let p=c.split("/");for(;p[0]==="..";)p.shift(),m-=1;l.pathname=p.join("/")}i=m>=0?e[m]:"/"}let o=Q2(l,i),d=c&&c!=="/"&&c.endsWith("/"),u=(r||c===".")&&s.endsWith("/");return!o.pathname.endsWith("/")&&(d||u)&&(o.pathname+="/"),o}const Et=n=>n.join("/").replace(/\/\/+/g,"/"),W2=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),P2=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,F2=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function I2(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const j0=["post","put","patch","delete"];new Set(j0);const ev=["get",...j0];new Set(ev);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(n[a]=s[a])}return n},tl.apply(this,arguments)}const lu=h.createContext(null),nv=h.createContext(null),rs=h.createContext(null),ec=h.createContext(null),$t=h.createContext({outlet:null,matches:[],isDataRoute:!1}),b0=h.createContext(null);function tv(n,e){let{relative:s}=e===void 0?{}:e;aa()||je(!1);let{basename:a,navigator:l}=h.useContext(rs),{hash:r,pathname:c,search:i}=iu(n,{relative:s}),o=c;return a!=="/"&&(o=c==="/"?a:Et([a,c])),l.createHref({pathname:o,search:i,hash:r})}function aa(){return h.useContext(ec)!=null}function cs(){return aa()||je(!1),h.useContext(ec).location}function sv(n){aa()||je(!1);let{pathname:e}=cs();return h.useMemo(()=>x0(n,e),[e,n])}function y0(n){h.useContext(rs).static||h.useLayoutEffect(n)}function ru(){let{isDataRoute:n}=h.useContext($t);return n?gv():av()}function av(){aa()||je(!1);let n=h.useContext(lu),{basename:e,future:s,navigator:a}=h.useContext(rs),{matches:l}=h.useContext($t),{pathname:r}=cs(),c=JSON.stringify(g0(l,s.v7_relativeSplatPath)),i=h.useRef(!1);return y0(()=>{i.current=!0}),h.useCallback(function(d,u){if(u===void 0&&(u={}),!i.current)return;if(typeof d=="number"){a.go(d);return}let m=v0(d,JSON.parse(c),r,u.relative==="path");n==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Et([e,m.pathname])),(u.replace?a.replace:a.push)(m,u.state,u)},[e,a,c,r,n])}const lv=h.createContext(null);function cu(n){let e=h.useContext($t).outlet;return e&&h.createElement(lv.Provider,{value:n},e)}function iu(n,e){let{relative:s}=e===void 0?{}:e,{future:a}=h.useContext(rs),{matches:l}=h.useContext($t),{pathname:r}=cs(),c=JSON.stringify(g0(l,a.v7_relativeSplatPath));return h.useMemo(()=>v0(n,JSON.parse(c),r,s==="path"),[n,c,r,s])}function rv(n,e){return cv(n,e)}function cv(n,e,s,a){aa()||je(!1);let{navigator:l}=h.useContext(rs),{matches:r}=h.useContext($t),c=r[r.length-1],i=c?c.params:{};c&&c.pathname;let o=c?c.pathnameBase:"/";c&&c.route;let d=cs(),u;if(e){var m;let N=typeof e=="string"?sa(e):e;o==="/"||(m=N.pathname)!=null&&m.startsWith(o)||je(!1),u=N}else u=d;let p=u.pathname||"/",g=p;if(o!=="/"){let N=o.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(N.length).join("/")}let y=D2(n,{pathname:g}),b=mv(y&&y.map(N=>Object.assign({},N,{params:Object.assign({},i,N.params),pathname:Et([o,l.encodeLocation?l.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?o:Et([o,l.encodeLocation?l.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),r,s,a);return e&&b?h.createElement(ec.Provider,{value:{location:tl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:bt.Pop}},b):b}function iv(){let n=xv(),e=I2(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},e),s?h.createElement("pre",{style:l},s):null,null)}const ov=h.createElement(iv,null);class uv extends h.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,s){return s.location!==e.location||s.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:s.error,location:s.location,revalidation:e.revalidation||s.revalidation}}componentDidCatch(e,s){console.error("React Router caught the following error during render",e,s)}render(){return this.state.error!==void 0?h.createElement($t.Provider,{value:this.props.routeContext},h.createElement(b0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dv(n){let{routeContext:e,match:s,children:a}=n,l=h.useContext(lu);return l&&l.static&&l.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=s.route.id),h.createElement($t.Provider,{value:e},a)}function mv(n,e,s,a){var l;if(e===void 0&&(e=[]),s===void 0&&(s=null),a===void 0&&(a=null),n==null){var r;if((r=s)!=null&&r.errors)n=s.matches;else return null}let c=n,i=(l=s)==null?void 0:l.errors;if(i!=null){let u=c.findIndex(m=>m.route.id&&(i==null?void 0:i[m.route.id])!==void 0);u>=0||je(!1),c=c.slice(0,Math.min(c.length,u+1))}let o=!1,d=-1;if(s&&a&&a.v7_partialHydration)for(let u=0;u<c.length;u++){let m=c[u];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=u),m.route.id){let{loaderData:p,errors:g}=s,y=m.route.loader&&p[m.route.id]===void 0&&(!g||g[m.route.id]===void 0);if(m.route.lazy||y){o=!0,d>=0?c=c.slice(0,d+1):c=[c[0]];break}}}return c.reduceRight((u,m,p)=>{let g,y=!1,b=null,N=null;s&&(g=i&&m.route.id?i[m.route.id]:void 0,b=m.route.errorElement||ov,o&&(d<0&&p===0?(y=!0,N=null):d===p&&(y=!0,N=m.route.hydrateFallbackElement||null)));let x=e.concat(c.slice(0,p+1)),f=()=>{let v;return g?v=b:y?v=N:m.route.Component?v=h.createElement(m.route.Component,null):m.route.element?v=m.route.element:v=u,h.createElement(dv,{match:m,routeContext:{outlet:u,matches:x,isDataRoute:s!=null},children:v})};return s&&(m.route.ErrorBoundary||m.route.errorElement||p===0)?h.createElement(uv,{location:s.location,revalidation:s.revalidation,component:b,error:g,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var N0=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(N0||{}),$r=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}($r||{});function pv(n){let e=h.useContext(lu);return e||je(!1),e}function fv(n){let e=h.useContext(nv);return e||je(!1),e}function hv(n){let e=h.useContext($t);return e||je(!1),e}function S0(n){let e=hv(),s=e.matches[e.matches.length-1];return s.route.id||je(!1),s.route.id}function xv(){var n;let e=h.useContext(b0),s=fv($r.UseRouteError),a=S0($r.UseRouteError);return e!==void 0?e:(n=s.errors)==null?void 0:n[a]}function gv(){let{router:n}=pv(N0.UseNavigateStable),e=S0($r.UseNavigateStable),s=h.useRef(!1);return y0(()=>{s.current=!0}),h.useCallback(function(l,r){r===void 0&&(r={}),s.current&&(typeof l=="number"?n.navigate(l):n.navigate(l,tl({fromRouteId:e},r)))},[n,e])}function vv(n){return cu(n.context)}function dt(n){je(!1)}function jv(n){let{basename:e="/",children:s=null,location:a,navigationType:l=bt.Pop,navigator:r,static:c=!1,future:i}=n;aa()&&je(!1);let o=e.replace(/^\/*/,"/"),d=h.useMemo(()=>({basename:o,navigator:r,static:c,future:tl({v7_relativeSplatPath:!1},i)}),[o,i,r,c]);typeof a=="string"&&(a=sa(a));let{pathname:u="/",search:m="",hash:p="",state:g=null,key:y="default"}=a,b=h.useMemo(()=>{let N=au(u,o);return N==null?null:{location:{pathname:N,search:m,hash:p,state:g,key:y},navigationType:l}},[o,u,m,p,g,y,l]);return b==null?null:h.createElement(rs.Provider,{value:d},h.createElement(ec.Provider,{children:s,value:b}))}function bv(n){let{children:e,location:s}=n;return rv(Ji(e),s)}new Promise(()=>{});function Ji(n,e){e===void 0&&(e=[]);let s=[];return h.Children.forEach(n,(a,l)=>{if(!h.isValidElement(a))return;let r=[...e,l];if(a.type===h.Fragment){s.push.apply(s,Ji(a.props.children,r));return}a.type!==dt&&je(!1),!a.props.index||!a.props.children||je(!1);let c={id:a.props.id||r.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=Ji(a.props.children,r)),s.push(c)}),s}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ki(){return Ki=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(n[a]=s[a])}return n},Ki.apply(this,arguments)}function yv(n,e){if(n==null)return{};var s={},a=Object.keys(n),l,r;for(r=0;r<a.length;r++)l=a[r],!(e.indexOf(l)>=0)&&(s[l]=n[l]);return s}function Nv(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Sv(n,e){return n.button===0&&(!e||e==="_self")&&!Nv(n)}const wv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],_v="6";try{window.__reactRouterVersion=_v}catch{}const kv="startTransition",Fd=Kx[kv];function Cv(n){let{basename:e,children:s,future:a,window:l}=n,r=h.useRef();r.current==null&&(r.current=A2({window:l,v5Compat:!0}));let c=r.current,[i,o]=h.useState({action:c.action,location:c.location}),{v7_startTransition:d}=a||{},u=h.useCallback(m=>{d&&Fd?Fd(()=>o(m)):o(m)},[o,d]);return h.useLayoutEffect(()=>c.listen(u),[c,u]),h.createElement(jv,{basename:e,children:s,location:i.location,navigationType:i.action,navigator:c,future:a})}const Rv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ev=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w0=h.forwardRef(function(e,s){let{onClick:a,relative:l,reloadDocument:r,replace:c,state:i,target:o,to:d,preventScrollReset:u,unstable_viewTransition:m}=e,p=yv(e,wv),{basename:g}=h.useContext(rs),y,b=!1;if(typeof d=="string"&&Ev.test(d)&&(y=d,Rv))try{let v=new URL(window.location.href),j=d.startsWith("//")?new URL(v.protocol+d):new URL(d),_=au(j.pathname,g);j.origin===v.origin&&_!=null?d=_+j.search+j.hash:b=!0}catch{}let N=tv(d,{relative:l}),x=Mv(d,{replace:c,state:i,target:o,preventScrollReset:u,relative:l,unstable_viewTransition:m});function f(v){a&&a(v),v.defaultPrevented||x(v)}return h.createElement("a",Ki({},p,{href:y||N,onClick:b||r?a:f,ref:s,target:o}))});var Id;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Id||(Id={}));var em;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(em||(em={}));function Mv(n,e){let{target:s,replace:a,state:l,preventScrollReset:r,relative:c,unstable_viewTransition:i}=e===void 0?{}:e,o=ru(),d=cs(),u=iu(n,{relative:c});return h.useCallback(m=>{if(Sv(m,s)){m.preventDefault();let p=a!==void 0?a:Tr(d)===Tr(u);o(n,{replace:p,state:l,preventScrollReset:r,relative:c,unstable_viewTransition:i})}},[d,o,u,a,l,s,n,r,c,i])}function nm(){return t.jsxs("div",{className:"w-full h-64 flex flex-col items-center justify-center",children:[t.jsx("div",{className:"loader"}),t.jsx("div",{className:"text-sm text-blue-500 mt-3",children:"page loading..."})]})}function _0(n){var e,s,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n)){var l=n.length;for(e=0;e<l;e++)n[e]&&(s=_0(n[e]))&&(a&&(a+=" "),a+=s)}else for(s in n)n[s]&&(a&&(a+=" "),a+=s);return a}function se(){for(var n,e,s=0,a="",l=arguments.length;s<l;s++)(n=arguments[s])&&(e=_0(n))&&(a&&(a+=" "),a+=e);return a}const ou="-";function Av(n){const e=$v(n),{conflictingClassGroups:s,conflictingClassGroupModifiers:a}=n;function l(c){const i=c.split(ou);return i[0]===""&&i.length!==1&&i.shift(),k0(i,e)||Tv(c)}function r(c,i){const o=s[c]||[];return i&&a[c]?[...o,...a[c]]:o}return{getClassGroupId:l,getConflictingClassGroupIds:r}}function k0(n,e){var c;if(n.length===0)return e.classGroupId;const s=n[0],a=e.nextPart.get(s),l=a?k0(n.slice(1),a):void 0;if(l)return l;if(e.validators.length===0)return;const r=n.join(ou);return(c=e.validators.find(({validator:i})=>i(r)))==null?void 0:c.classGroupId}const tm=/^\[(.+)\]$/;function Tv(n){if(tm.test(n)){const e=tm.exec(n)[1],s=e==null?void 0:e.substring(0,e.indexOf(":"));if(s)return"arbitrary.."+s}}function $v(n){const{theme:e,prefix:s}=n,a={nextPart:new Map,validators:[]};return Lv(Object.entries(n.classGroups),s).forEach(([r,c])=>{Wi(c,a,r,e)}),a}function Wi(n,e,s,a){n.forEach(l=>{if(typeof l=="string"){const r=l===""?e:sm(e,l);r.classGroupId=s;return}if(typeof l=="function"){if(Dv(l)){Wi(l(a),e,s,a);return}e.validators.push({validator:l,classGroupId:s});return}Object.entries(l).forEach(([r,c])=>{Wi(c,sm(e,r),s,a)})})}function sm(n,e){let s=n;return e.split(ou).forEach(a=>{s.nextPart.has(a)||s.nextPart.set(a,{nextPart:new Map,validators:[]}),s=s.nextPart.get(a)}),s}function Dv(n){return n.isThemeGetter}function Lv(n,e){return e?n.map(([s,a])=>{const l=a.map(r=>typeof r=="string"?e+r:typeof r=="object"?Object.fromEntries(Object.entries(r).map(([c,i])=>[e+c,i])):r);return[s,l]}):n}function Bv(n){if(n<1)return{get:()=>{},set:()=>{}};let e=0,s=new Map,a=new Map;function l(r,c){s.set(r,c),e++,e>n&&(e=0,a=s,s=new Map)}return{get(r){let c=s.get(r);if(c!==void 0)return c;if((c=a.get(r))!==void 0)return l(r,c),c},set(r,c){s.has(r)?s.set(r,c):l(r,c)}}}const C0="!";function Ov(n){const e=n.separator,s=e.length===1,a=e[0],l=e.length;return function(c){const i=[];let o=0,d=0,u;for(let b=0;b<c.length;b++){let N=c[b];if(o===0){if(N===a&&(s||c.slice(b,b+l)===e)){i.push(c.slice(d,b)),d=b+l;continue}if(N==="/"){u=b;continue}}N==="["?o++:N==="]"&&o--}const m=i.length===0?c:c.substring(d),p=m.startsWith(C0),g=p?m.substring(1):m,y=u&&u>d?u-d:void 0;return{modifiers:i,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:y}}}function zv(n){if(n.length<=1)return n;const e=[];let s=[];return n.forEach(a=>{a[0]==="["?(e.push(...s.sort(),a),s=[]):s.push(a)}),e.push(...s.sort()),e}function Uv(n){return{cache:Bv(n.cacheSize),splitModifiers:Ov(n),...Av(n)}}const Hv=/\s+/;function qv(n,e){const{splitModifiers:s,getClassGroupId:a,getConflictingClassGroupIds:l}=e,r=new Set;return n.trim().split(Hv).map(c=>{const{modifiers:i,hasImportantModifier:o,baseClassName:d,maybePostfixModifierPosition:u}=s(c);let m=a(u?d.substring(0,u):d),p=!!u;if(!m){if(!u)return{isTailwindClass:!1,originalClassName:c};if(m=a(d),!m)return{isTailwindClass:!1,originalClassName:c};p=!1}const g=zv(i).join(":");return{isTailwindClass:!0,modifierId:o?g+C0:g,classGroupId:m,originalClassName:c,hasPostfixModifier:p}}).reverse().filter(c=>{if(!c.isTailwindClass)return!0;const{modifierId:i,classGroupId:o,hasPostfixModifier:d}=c,u=i+o;return r.has(u)?!1:(r.add(u),l(o,d).forEach(m=>r.add(i+m)),!0)}).reverse().map(c=>c.originalClassName).join(" ")}function Vv(){let n=0,e,s,a="";for(;n<arguments.length;)(e=arguments[n++])&&(s=R0(e))&&(a&&(a+=" "),a+=s);return a}function R0(n){if(typeof n=="string")return n;let e,s="";for(let a=0;a<n.length;a++)n[a]&&(e=R0(n[a]))&&(s&&(s+=" "),s+=e);return s}function Xv(n,...e){let s,a,l,r=c;function c(o){const d=e.reduce((u,m)=>m(u),n());return s=Uv(d),a=s.cache.get,l=s.cache.set,r=i,i(o)}function i(o){const d=a(o);if(d)return d;const u=qv(o,s);return l(o,u),u}return function(){return r(Vv.apply(null,arguments))}}function ie(n){const e=s=>s[n]||[];return e.isThemeGetter=!0,e}const E0=/^\[(?:([a-z-]+):)?(.+)\]$/i,Gv=/^\d+\/\d+$/,Zv=new Set(["px","full","screen"]),Yv=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Qv=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Jv=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Kv=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Wv=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function Gn(n){return Gt(n)||Zv.has(n)||Gv.test(n)}function it(n){return la(n,"length",aj)}function Gt(n){return!!n&&!Number.isNaN(Number(n))}function Ul(n){return la(n,"number",Gt)}function ha(n){return!!n&&Number.isInteger(Number(n))}function Pv(n){return n.endsWith("%")&&Gt(n.slice(0,-1))}function z(n){return E0.test(n)}function ot(n){return Yv.test(n)}const Fv=new Set(["length","size","percentage"]);function Iv(n){return la(n,Fv,M0)}function ej(n){return la(n,"position",M0)}const nj=new Set(["image","url"]);function tj(n){return la(n,nj,rj)}function sj(n){return la(n,"",lj)}function xa(){return!0}function la(n,e,s){const a=E0.exec(n);return a?a[1]?typeof e=="string"?a[1]===e:e.has(a[1]):s(a[2]):!1}function aj(n){return Qv.test(n)&&!Jv.test(n)}function M0(){return!1}function lj(n){return Kv.test(n)}function rj(n){return Wv.test(n)}function cj(){const n=ie("colors"),e=ie("spacing"),s=ie("blur"),a=ie("brightness"),l=ie("borderColor"),r=ie("borderRadius"),c=ie("borderSpacing"),i=ie("borderWidth"),o=ie("contrast"),d=ie("grayscale"),u=ie("hueRotate"),m=ie("invert"),p=ie("gap"),g=ie("gradientColorStops"),y=ie("gradientColorStopPositions"),b=ie("inset"),N=ie("margin"),x=ie("opacity"),f=ie("padding"),v=ie("saturate"),j=ie("scale"),_=ie("sepia"),k=ie("skew"),R=ie("space"),M=ie("translate"),Y=()=>["auto","contain","none"],B=()=>["auto","hidden","clip","visible","scroll"],ce=()=>["auto",z,e],U=()=>[z,e],tn=()=>["",Gn,it],Ue=()=>["auto",Gt,z],ge=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],C=()=>["solid","dashed","dotted","double","none"],L=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],$=()=>["start","end","center","between","around","evenly","stretch"],V=()=>["","0",z],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Ae=()=>[Gt,Ul],He=()=>[Gt,z];return{cacheSize:500,separator:":",theme:{colors:[xa],spacing:[Gn,it],blur:["none","",ot,z],brightness:Ae(),borderColor:[n],borderRadius:["none","","full",ot,z],borderSpacing:U(),borderWidth:tn(),contrast:Ae(),grayscale:V(),hueRotate:He(),invert:V(),gap:U(),gradientColorStops:[n],gradientColorStopPositions:[Pv,it],inset:ce(),margin:ce(),opacity:Ae(),padding:U(),saturate:Ae(),scale:Ae(),sepia:V(),skew:He(),space:U(),translate:U()},classGroups:{aspect:[{aspect:["auto","square","video",z]}],container:["container"],columns:[{columns:[ot]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ge(),z]}],overflow:[{overflow:B()}],"overflow-x":[{"overflow-x":B()}],"overflow-y":[{"overflow-y":B()}],overscroll:[{overscroll:Y()}],"overscroll-x":[{"overscroll-x":Y()}],"overscroll-y":[{"overscroll-y":Y()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ha,z]}],basis:[{basis:ce()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",z]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",ha,z]}],"grid-cols":[{"grid-cols":[xa]}],"col-start-end":[{col:["auto",{span:["full",ha,z]},z]}],"col-start":[{"col-start":Ue()}],"col-end":[{"col-end":Ue()}],"grid-rows":[{"grid-rows":[xa]}],"row-start-end":[{row:["auto",{span:[ha,z]},z]}],"row-start":[{"row-start":Ue()}],"row-end":[{"row-end":Ue()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",z]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...$()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[f]}],px:[{px:[f]}],py:[{py:[f]}],ps:[{ps:[f]}],pe:[{pe:[f]}],pt:[{pt:[f]}],pr:[{pr:[f]}],pb:[{pb:[f]}],pl:[{pl:[f]}],m:[{m:[N]}],mx:[{mx:[N]}],my:[{my:[N]}],ms:[{ms:[N]}],me:[{me:[N]}],mt:[{mt:[N]}],mr:[{mr:[N]}],mb:[{mb:[N]}],ml:[{ml:[N]}],"space-x":[{"space-x":[R]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[R]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",z,e]}],"min-w":[{"min-w":[z,e,"min","max","fit"]}],"max-w":[{"max-w":[z,e,"none","full","min","max","fit","prose",{screen:[ot]},ot]}],h:[{h:[z,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[z,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[z,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[z,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ot,it]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ul]}],"font-family":[{font:[xa]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",z]}],"line-clamp":[{"line-clamp":["none",Gt,Ul]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Gn,z]}],"list-image":[{"list-image":["none",z]}],"list-style-type":[{list:["none","disc","decimal",z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...C(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Gn,it]}],"underline-offset":[{"underline-offset":["auto",Gn,z]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ge(),ej]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Iv]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},tj]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[r]}],"rounded-s":[{"rounded-s":[r]}],"rounded-e":[{"rounded-e":[r]}],"rounded-t":[{"rounded-t":[r]}],"rounded-r":[{"rounded-r":[r]}],"rounded-b":[{"rounded-b":[r]}],"rounded-l":[{"rounded-l":[r]}],"rounded-ss":[{"rounded-ss":[r]}],"rounded-se":[{"rounded-se":[r]}],"rounded-ee":[{"rounded-ee":[r]}],"rounded-es":[{"rounded-es":[r]}],"rounded-tl":[{"rounded-tl":[r]}],"rounded-tr":[{"rounded-tr":[r]}],"rounded-br":[{"rounded-br":[r]}],"rounded-bl":[{"rounded-bl":[r]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...C(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:C()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...C()]}],"outline-offset":[{"outline-offset":[Gn,z]}],"outline-w":[{outline:[Gn,it]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:tn()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[Gn,it]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",ot,sj]}],"shadow-color":[{shadow:[xa]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...L(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":L()}],filter:[{filter:["","none"]}],blur:[{blur:[s]}],brightness:[{brightness:[a]}],contrast:[{contrast:[o]}],"drop-shadow":[{"drop-shadow":["","none",ot,z]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[m]}],saturate:[{saturate:[v]}],sepia:[{sepia:[_]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[s]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[o]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[_]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[c]}],"border-spacing-x":[{"border-spacing-x":[c]}],"border-spacing-y":[{"border-spacing-y":[c]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",z]}],duration:[{duration:He()}],ease:[{ease:["linear","in","out","in-out",z]}],delay:[{delay:He()}],animate:[{animate:["none","spin","ping","pulse","bounce",z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[ha,z]}],"translate-x":[{"translate-x":[M]}],"translate-y":[{"translate-y":[M]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",z]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",z]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",z]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[Gn,it,Ul]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Pe=Xv(cj);function Cn(n){const{children:e,className:s="",end:a=!0,activeName:l,to:r,onClick:c,...i}=n,o=iu(r);let d=sv({path:o.pathname,end:a});const u=Pe(se(s,"transition cursor-pointer",{[l]:!!d}));function m(p){d&&p.preventDefault(),c&&c(p)}return t.jsx(w0,{className:u,to:r,...i,onClick:m,children:e})}const ij="_modal_fd6cp_1",oj="_show_fd6cp_1",uj="_hide_fd6cp_1",dj="_out_fd6cp_16",Zc={modal:ij,show:oj,hide:uj,in:"_in_fd6cp_12",out:dj};function nc(n){const{onClose:e,children:s,ref:a}=n,[l,r]=h.useState(!1),[c,i]=h.useState(!1);h.useImperativeHandle(a,()=>({show:()=>{r(!0),document.body.style.overflow="hidden",i(!0)},close:()=>{document.body.style.overflow="visible",r(!1)}}));const o=se(Zc.modal,{[Zc.in]:l,[Zc.out]:!l});function d(){l||i(!1)}function u(){r(!1),e&&e()}return c?t.jsx(t.Fragment,{children:cl.createPortal(t.jsx("div",{className:o,onAnimationEnd:d,onClick:u,children:s}),document.body)}):null}function mj(){return t.jsx("div",{className:"w-10 h-10 ml-4 border rounded-full overflow-hidden relative",children:t.jsx("div",{className:"pyramid-loader",children:t.jsxs("div",{className:"wrapper",children:[t.jsx("span",{className:"side side1"}),t.jsx("span",{className:"side side2"}),t.jsx("span",{className:"side side3"}),t.jsx("span",{className:"side side4"}),t.jsx("span",{className:"shadow"})]})})})}function pj(){const[n,e]=h.useState(!0),[s,a]=h.useState({});return h.useEffect(()=>{function l(r){if(r.origin!=="https://giscus.app")return;e(!1);let c=r.data.giscus;c.viewer&&a(c.viewer)}window.addEventListener("message",l,!1)},[]),n?t.jsx(mj,{}):t.jsx("div",{className:"w-10 h-10 ml-4 border rounded-full overflow-hidden",children:t.jsx("img",{className:"w-full h-full",src:s.avatarUrl,alt:""})})}document.documentElement.style.fontSize="14px";function le(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:c,success:i,ghost:o,rect:d,disabled:u,...m}=n,b=Pe(se("rounded-md border border-transparent font-medium cursor-pointer transition relative text-gray-600","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":i,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":c,"bg-transparent border-transparent hover:bg-gray-100":o,"bg-opacity-70":u,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r,"w-8 h-8 p-0":d},e));return t.jsxs("button",{className:b,...m,children:[n.children,c&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}let Ua;const fj=n=>{Ua={x:n.pageX,y:n.pageY},setTimeout(()=>{Ua=null},100)};document.documentElement.addEventListener("click",fj,!0);function hj(n,e){var s=n.style;["Webkit","Moz","Ms","ms"].forEach(function(a){s[a+"TransformOrigin"]=e}),s.transformOrigin=e}function xj(n){const e=n.getBoundingClientRect(),s={left:e.left,top:e.top},l=n.ownerDocument.defaultView;return s.left+=am(l),s.top+=am(l,1),s}function am(n,e){var s=n["page"+(e?"Y":"X")+"Offset"],a="scroll"+(e?"Top":"Left");if(typeof s!="number"){var l=n.document;s=l.documentElement[a],typeof s!="number"&&(s=l.body[a])}return s}function ra(n){const{title:e,onClose:s,children:a,onSure:l,onCancel:r,ref:c,footer:i}=n,[o,d]=h.useState(!1),[u,m]=h.useState(!1),p=h.useRef(null),g=h.useRef(null);h.useImperativeHandle(c,()=>({show:()=>{g.current.show(),document.body.style.overflow="hidden",d(!0),m(!0)},close:y}));function y(){d(!1),g.current.close(),document.body.style.overflow="visible"}function b(){y(),s&&s()}function N(j){j.stopPropagation()}function x(j){j.stopPropagation(),l&&l()}function f(){o||m(!1)}const v=se("dialog-wrapper",{in:o,out:!o});return h.useEffect(()=>{const j=p.current;if(u&&j){const _=xj(j);Ua&&hj(j,Ua.x-_.left+"px "+(Ua.y-_.top)+"px")}},[u]),t.jsx(nc,{ref:g,onClose:b,children:u?t.jsxs("div",{ref:p,className:v,onClick:N,onAnimationEnd:f,children:[t.jsxs("header",{className:"flex justify-between items-center mb-2",children:[t.jsx("div",{className:"font-bold text-lg leading-6",children:e}),t.jsx("div",{onClick:b,className:"p-2 rounded-md cursor-pointer transition hover:bg-gray-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})})]}),t.jsx("section",{className:"leading-6",children:a}),i||t.jsx("footer",{className:"text-end mt-4",children:t.jsx(le,{primary:!0,onClick:x,children:"确认"})})]}):null})}function gj(){const n=h.useRef(null);function e(s){s.preventDefault(),n.current.show()}return t.jsxs(t.Fragment,{children:[t.jsxs(Cn,{className:"flex items-center",onClick:e,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"})}),t.jsx("div",{className:"ml-1 text-sm",children:"交流群"})]}),t.jsxs(ra,{ref:n,title:"Message",onSure:()=>n.current.close(),children:["添加我的微信：",t.jsx("span",{className:"text-red-500 text-xl",children:"icanmeetu"}),"， 注明：添加 react19 付费交流群"]})]})}function yn(n){const{type:e="text",className:s,required:a,label:l,help:r="此项规则不匹配",pattern:c,...i}=n,{pending:o}=cl.useFormStatus(),d=se("flex items-center my-10",s);return t.jsxs("div",{className:d,children:[l&&t.jsxs("label",{className:"w-20 text-right font-bold",children:[l,"："]}),t.jsx("div",{className:"input flex-1",children:t.jsx("input",{type:e,required:a,pattern:c,...i,disabled:o})})]})}function vj(){const n=h.useRef(null);function e(s){s.preventDefault(),n.current.show()}return t.jsxs(t.Fragment,{children:[t.jsxs(Cn,{className:"flex items-center ml-4 bg-gray-900 px-4 py-2 rounded-full",to:"/",onClick:e,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 text-blue-50",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})}),t.jsx("div",{className:"ml-1 text-sm text-blue-50",children:"激活码"})]}),t.jsxs(ra,{ref:n,title:"Message",onSure:()=>n.current.close(),children:["请添加交流群获得激活码，或者联系网站开发者这波能反杀获得激活码，联系方式如下",t.jsxs("div",{className:"flex my-4",children:[t.jsx("div",{className:"w-8",children:"wx:"}),t.jsx("div",{className:"text-red-500",children:"icanmeetu"})]})]})]})}const lm=[{path:"tutorial",text:"教程"},{path:"component",text:"组件"},{path:"other",text:"其他"}];function jj(){const n=h.useRef(null);return t.jsxs("header",{className:"fixed z-50 top-0 flex justify-between border-b border-slate-200 min-w-[320px] bg-white bg-opacity-70 backdrop-blur-sm w-full",children:[t.jsxs("div",{className:"pl-6 h-16 flex items-center md:pl-10 transition-all",children:[t.jsxs(Cn,{className:"flex items-center",to:"/",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})}),t.jsx("div",{className:"font-bold ml-2",children:"React 19"})]}),t.jsx("div",{className:"hidden md:block",children:lm.map((e,s)=>t.jsx(Cn,{to:e.path,className:"ml-8 text-gray-500",end:!1,activeName:"text-gray-900",children:e.text},e.path))}),t.jsxs("a",{className:"hidden md:flex text-xs m-8 rounded-full bg-red-100 py-2 px-4 text-red-400 transition hover:bg-red-300 hover:text-red-700 cursor-pointer",href:"https://appxw863qeq2150.h5.xiaoeknow.com/p/decorate/homepage?entry=2&entry_type=2002&share_user_id=u_626bf7dfafe72_zLCXc4Qr0O&wework_share_customer_id=u_626bf7dfafe72_zLCXc4Qr0O",target:"_blank",children:["推荐：JavaScript 核心进阶",t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4 ml-2",children:t.jsx("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",clipRule:"evenodd"})})]})]}),t.jsxs("div",{className:"hidden md:flex h-16 items-center pr-6 text-gray-500",children:[t.jsx(gj,{alt:"交流群"}),t.jsx(vj,{alt:"激活码"}),t.jsx(pj,{})]}),t.jsx("div",{className:"md:hidden flex items-center pr-6 text-gray-700",onClick:()=>n.current.show(),children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"})})}),t.jsxs(nc,{ref:n,onClose:()=>n.current.close(),children:[t.jsxs("header",{className:"sticky top-0 flex justify-between border-b border-amber-50 bg-amber-50",children:[t.jsx("div",{className:"pl-6 h-16 flex items-center md:pl-10 transition-all",children:t.jsxs(Cn,{className:"flex items-center",to:"/",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})}),t.jsx("div",{className:"font-bold ml-2",children:"React 19"})]})}),t.jsx("div",{className:"flex h-16 items-center pr-6 text-gray-500",children:t.jsx("div",{className:"flex items-center text-gray-700",onClick:()=>n.current.show(),children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})})]}),lm.map((e,s)=>t.jsx("div",{className:"flex items-center text-gray-700 bg-white px-8 py-5 transition hover:bg-amber-100",children:t.jsxs(Cn,{className:"flex items-center justify-between w-full",to:e.path,children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5",children:t.jsx("path",{fillRule:"evenodd",d:"M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})}),t.jsx("div",{className:"ml-2 text-sm",children:e.text})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})},e.path)),t.jsx("div",{className:"flex items-center text-red-500 bg-red-50 px-8 py-5 transition hover:text-red-700 hover:bg-red-200",children:t.jsxs("a",{className:"flex items-center justify-between w-full",href:"https://appxw863qeq2150.h5.xiaoeknow.com/p/decorate/homepage?entry=2&entry_type=2002&share_user_id=u_626bf7dfafe72_zLCXc4Qr0O&wework_share_customer_id=u_626bf7dfafe72_zLCXc4Qr0O",children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5",children:t.jsx("path",{fillRule:"evenodd",d:"M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z",clipRule:"evenodd"})}),t.jsx("div",{className:"ml-2 text-sm",children:"推荐：JavaScript 核心进阶"})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})}),t.jsx("div",{className:"flex items-center text-gray-700 bg-white px-8 py-5 transition hover:bg-amber-100",children:t.jsxs(Cn,{className:"flex items-center justify-between w-full",to:"/",children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"})}),t.jsx("div",{className:"ml-2 text-sm",children:"交流群"})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})}),t.jsx("div",{className:"flex items-center text-gray-700 bg-white px-8 py-5 transition hover:bg-amber-100",children:t.jsxs(Cn,{className:"flex items-center justify-between w-full",to:"/",children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})}),t.jsx("div",{className:"ml-2 text-sm",children:"激活码"})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-4",children:t.jsx("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})})]})]})}function bj(){const[n,e]=h.useState(""),s=`relative ${n} bg-skin-fill overflow-hidden rounded`;return t.jsxs("div",{className:"my-8 border border-gray-150 rounded px-8 pb-8",children:[t.jsxs("div",{className:"flex justify-center",children:[t.jsx("div",{onClick:()=>e(""),className:"my-6 mx-2 h-6 w-6 rounded bg-indigo-500 cursor-pointer"}),t.jsx("div",{onClick:()=>e("theme-swiss"),className:"my-6 mx-2 h-6 w-6 rounded bg-red-600 cursor-pointer"}),t.jsx("div",{onClick:()=>e("theme-neon"),className:"my-6 mx-2 h-6 w-6 rounded bg-green-400 cursor-pointer"})]}),t.jsxs("div",{className:s,children:[t.jsx("img",{className:"absolute inset-0 h-full w-full object-cover opacity-30",src:"https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90 transition"}),t.jsxs("div",{className:"relative max-w-2xl mx-auto text-center py-16 px-8",children:[t.jsx("h2",{className:"font-extrabold text-skin-base text-4xl transition",children:t.jsx("span",{children:"极客时间、掘金买课优惠"})}),t.jsx("p",{className:"mt-4 text-md text-left text-skin-muted transition",children:"官方的课程返现全部归还，需要从网站 coursesub.top 或者公众号「课程减减」通过邀请链接进行下单，购买后添加客服微信发送课程名确认后即可收到红包，可正常使用极客时间的优惠券或者学生半价优惠。"}),t.jsx("div",{className:"mt-10 max-w-sm mx-auto sm:max-w-one sm:flex sm:justify-center",children:t.jsxs("div",{className:"space-y-0 mx-auto inline-grid grid-cols-2 gap-5",children:[t.jsx("a",{target:"_blank",className:"transition text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md shadow-lg px-8",href:"https://coursesub.top/?key=react",children:"去选课"}),t.jsx("a",{target:"_blank",className:"transition text-skin-base bg-skin-button-muted hover:bg-opacity-70 flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-lg shadow-sm px-8",href:"https://mp.weixin.qq.com/s?__biz=MzUyMjkwNTgwOA==&mid=2247485923&idx=1&sn=0710d33fd1e1287e10f88bd4139e0a0e&chksm=f9c5f85cceb2714a585567f21751ae703f8ba80519a7a089746079a05c4f916c962fe81332d1#rd",children:"详细规则"})]})})]})]})]})}function yj(){return t.jsx("div",{className:"fixed top-0 inset-0 -z-10 mx-0 max-w-none overflow-hidden",children:t.jsxs("div",{className:"absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100",children:t.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5",children:[t.jsx("defs",{children:t.jsx("pattern",{id:":S1:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"-12",y:"4",children:t.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),t.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:S1:)"}),t.jsxs("svg",{x:"-12",y:"4",className:"overflow-visible",children:[t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"288",y:"168"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"144",y:"56"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"504",y:"168"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"720",y:"336"})]})]})}),t.jsx("svg",{viewBox:"0 0 1113 440","aria-hidden":"true",className:"absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden",children:t.jsx("path",{d:"M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"})})]})})}function Yc({title:n,desc:e="",path:s,icon:a,className:l}){const[r,c]=h.useState({x:0,y:0}),i=h.useRef(null),o=unescape(n.replace(/\\u/gi,"%u")),d=unescape(e.replace(/\\u/gi,"%u"));h.useEffect(()=>{const g=i.current.getBoundingClientRect();function y(b){c({x:b.x-g.left,y:b.y+document.documentElement.scrollTop-g.top})}i.current.addEventListener("mouseenter",b=>{document.addEventListener("mousemove",y,!1)},!1),i.current.addEventListener("mouseleave",b=>{document.removeEventListener("mousemove",y,!1)},!1)},[]);const u=`radial-gradient(180px at ${r.x}px ${r.y}px, white, transparent)`,p=se("group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5",l);return t.jsxs("div",{ref:i,className:p,children:[t.jsxs("div",{className:"pointer-events-none",children:[t.jsx("div",{className:"absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50",children:t.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5",children:[t.jsx("defs",{children:t.jsx("pattern",{id:":Rkq5jsqja:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"50%",y:"16",children:t.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),t.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:Rkq5jsqja:)"}),t.jsxs("svg",{x:"50%",y:"16",className:"overflow-visible",children:[t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"0",y:"56"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"72",y:"168"})]})]})}),t.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]",style:{maskImage:u}}),t.jsx("div",{className:"absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100",style:{maskImage:u},children:t.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10",children:[t.jsx("defs",{children:t.jsx("pattern",{id:":R5kq5jsqja:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"50%",y:"16",children:t.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),t.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:R5kq5jsqja:)"}),t.jsxs("svg",{x:"50%",y:"16",className:"overflow-visible",children:[t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"0",y:"56"}),t.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"72",y:"168"})]})]})})]}),t.jsx("div",{className:"absolute inset-0 rounded-2xl ring-1 ring-gray-200 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"}),t.jsxs("div",{className:"relative rounded-2xl px-4 pb-4 pt-16",children:[t.jsx("div",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400",children:t.jsxs("svg",{viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400",children:[t.jsx("path",{strokeWidth:"0",fillRule:"evenodd",clipRule:"evenodd",d:"M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"}),t.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",d:"M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"}),t.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",d:"M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"})]})}),t.jsx("h3",{className:"mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white",children:t.jsxs("a",{href:s,children:[t.jsx("span",{className:"absolute inset-0 rounded-2xl"}),o]})}),t.jsx("p",{className:"mt-1 text-sm text-zinc-600 dark:text-zinc-400",children:d})]})]})}function Hl(n){const{className:e,primary:s,danger:a,sm:l,lg:r,success:c,...i}=n,m=Pe(se("rounded-md border border-transparent font-medium cursor-pointer transition","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":c,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r}));return t.jsx("button",{className:m,...i,children:n.children})}function Nj(){return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"min-w-[400px] mx-auto px-16 h-[300px] flex flex-col justify-center",children:[t.jsx("div",{className:"my-2",children:t.jsx("div",{className:"font-bold",children:"按钮类型"})}),t.jsxs("div",{className:"flex items-center justify-between my-4",children:[t.jsx(Hl,{children:"Normal"}),t.jsx(Hl,{danger:!0,children:"Danger"}),t.jsx(Hl,{primary:!0,children:"Primary"}),t.jsx(Hl,{success:!0,children:"Success"})]})]})})}const Sj=`import Button from './Button.jsx'

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
`,gl=`import {twMerge} from 'tailwind-merge'
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
`;function wj(n,e){if(n==null)return{};var s={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(e.indexOf(a)>=0)continue;s[a]=n[a]}return s}function _j(n,e){if(n==null)return{};var s,a,l=wj(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)s=r[a],e.indexOf(s)>=0||{}.propertyIsEnumerable.call(n,s)&&(l[s]=n[s])}return l}function Pi(n,e){(e==null||e>n.length)&&(e=n.length);for(var s=0,a=Array(e);s<e;s++)a[s]=n[s];return a}function kj(n){if(Array.isArray(n))return Pi(n)}function Cj(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Rj(n,e){if(n){if(typeof n=="string")return Pi(n,e);var s={}.toString.call(n).slice(8,-1);return s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set"?Array.from(n):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Pi(n,e):void 0}}function Ej(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mj(n){return kj(n)||Cj(n)||Rj(n)||Ej()}function sl(n){"@babel/helpers - typeof";return sl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sl(n)}function Aj(n,e){if(sl(n)!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var a=s.call(n,e||"default");if(sl(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Tj(n){var e=Aj(n,"string");return sl(e)=="symbol"?e:e+""}function A0(n,e,s){return(e=Tj(e))in n?Object.defineProperty(n,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[e]=s,n}function Fi(){return Fi=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)({}).hasOwnProperty.call(s,a)&&(n[a]=s[a])}return n},Fi.apply(null,arguments)}function rm(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),s.push.apply(s,a)}return s}function Rs(n){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?rm(Object(s),!0).forEach(function(a){A0(n,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):rm(Object(s)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))})}return n}function $j(n){var e=n.length;if(e===0||e===1)return n;if(e===2)return[n[0],n[1],"".concat(n[0],".").concat(n[1]),"".concat(n[1],".").concat(n[0])];if(e===3)return[n[0],n[1],n[2],"".concat(n[0],".").concat(n[1]),"".concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[0]),"".concat(n[1],".").concat(n[2]),"".concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[1]),"".concat(n[0],".").concat(n[1],".").concat(n[2]),"".concat(n[0],".").concat(n[2],".").concat(n[1]),"".concat(n[1],".").concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[0],".").concat(n[1]),"".concat(n[2],".").concat(n[1],".").concat(n[0])];if(e>=4)return[n[0],n[1],n[2],n[3],"".concat(n[0],".").concat(n[1]),"".concat(n[0],".").concat(n[2]),"".concat(n[0],".").concat(n[3]),"".concat(n[1],".").concat(n[0]),"".concat(n[1],".").concat(n[2]),"".concat(n[1],".").concat(n[3]),"".concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[1]),"".concat(n[2],".").concat(n[3]),"".concat(n[3],".").concat(n[0]),"".concat(n[3],".").concat(n[1]),"".concat(n[3],".").concat(n[2]),"".concat(n[0],".").concat(n[1],".").concat(n[2]),"".concat(n[0],".").concat(n[1],".").concat(n[3]),"".concat(n[0],".").concat(n[2],".").concat(n[1]),"".concat(n[0],".").concat(n[2],".").concat(n[3]),"".concat(n[0],".").concat(n[3],".").concat(n[1]),"".concat(n[0],".").concat(n[3],".").concat(n[2]),"".concat(n[1],".").concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[0],".").concat(n[3]),"".concat(n[1],".").concat(n[2],".").concat(n[0]),"".concat(n[1],".").concat(n[2],".").concat(n[3]),"".concat(n[1],".").concat(n[3],".").concat(n[0]),"".concat(n[1],".").concat(n[3],".").concat(n[2]),"".concat(n[2],".").concat(n[0],".").concat(n[1]),"".concat(n[2],".").concat(n[0],".").concat(n[3]),"".concat(n[2],".").concat(n[1],".").concat(n[0]),"".concat(n[2],".").concat(n[1],".").concat(n[3]),"".concat(n[2],".").concat(n[3],".").concat(n[0]),"".concat(n[2],".").concat(n[3],".").concat(n[1]),"".concat(n[3],".").concat(n[0],".").concat(n[1]),"".concat(n[3],".").concat(n[0],".").concat(n[2]),"".concat(n[3],".").concat(n[1],".").concat(n[0]),"".concat(n[3],".").concat(n[1],".").concat(n[2]),"".concat(n[3],".").concat(n[2],".").concat(n[0]),"".concat(n[3],".").concat(n[2],".").concat(n[1]),"".concat(n[0],".").concat(n[1],".").concat(n[2],".").concat(n[3]),"".concat(n[0],".").concat(n[1],".").concat(n[3],".").concat(n[2]),"".concat(n[0],".").concat(n[2],".").concat(n[1],".").concat(n[3]),"".concat(n[0],".").concat(n[2],".").concat(n[3],".").concat(n[1]),"".concat(n[0],".").concat(n[3],".").concat(n[1],".").concat(n[2]),"".concat(n[0],".").concat(n[3],".").concat(n[2],".").concat(n[1]),"".concat(n[1],".").concat(n[0],".").concat(n[2],".").concat(n[3]),"".concat(n[1],".").concat(n[0],".").concat(n[3],".").concat(n[2]),"".concat(n[1],".").concat(n[2],".").concat(n[0],".").concat(n[3]),"".concat(n[1],".").concat(n[2],".").concat(n[3],".").concat(n[0]),"".concat(n[1],".").concat(n[3],".").concat(n[0],".").concat(n[2]),"".concat(n[1],".").concat(n[3],".").concat(n[2],".").concat(n[0]),"".concat(n[2],".").concat(n[0],".").concat(n[1],".").concat(n[3]),"".concat(n[2],".").concat(n[0],".").concat(n[3],".").concat(n[1]),"".concat(n[2],".").concat(n[1],".").concat(n[0],".").concat(n[3]),"".concat(n[2],".").concat(n[1],".").concat(n[3],".").concat(n[0]),"".concat(n[2],".").concat(n[3],".").concat(n[0],".").concat(n[1]),"".concat(n[2],".").concat(n[3],".").concat(n[1],".").concat(n[0]),"".concat(n[3],".").concat(n[0],".").concat(n[1],".").concat(n[2]),"".concat(n[3],".").concat(n[0],".").concat(n[2],".").concat(n[1]),"".concat(n[3],".").concat(n[1],".").concat(n[0],".").concat(n[2]),"".concat(n[3],".").concat(n[1],".").concat(n[2],".").concat(n[0]),"".concat(n[3],".").concat(n[2],".").concat(n[0],".").concat(n[1]),"".concat(n[3],".").concat(n[2],".").concat(n[1],".").concat(n[0])]}var Qc={};function Dj(n){if(n.length===0||n.length===1)return n;var e=n.join(".");return Qc[e]||(Qc[e]=$j(n)),Qc[e]}function Lj(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,a=n.filter(function(r){return r!=="token"}),l=Dj(a);return l.reduce(function(r,c){return Rs(Rs({},r),s[c])},e)}function cm(n){return n.join(" ")}function Bj(n,e){var s=0;return function(a){return s+=1,a.map(function(l,r){return T0({node:l,stylesheet:n,useInlineStyles:e,key:"code-segment-".concat(s,"-").concat(r)})})}}function T0(n){var e=n.node,s=n.stylesheet,a=n.style,l=a===void 0?{}:a,r=n.useInlineStyles,c=n.key,i=e.properties,o=e.type,d=e.tagName,u=e.value;if(o==="text")return u;if(d){var m=Bj(s,r),p;if(!r)p=Rs(Rs({},i),{},{className:cm(i.className)});else{var g=Object.keys(s).reduce(function(x,f){return f.split(".").forEach(function(v){x.includes(v)||x.push(v)}),x},[]),y=i.className&&i.className.includes("token")?["token"]:[],b=i.className&&y.concat(i.className.filter(function(x){return!g.includes(x)}));p=Rs(Rs({},i),{},{className:cm(b)||void 0,style:Lj(i.className,Object.assign({},i.style,l),s)})}var N=m(e.children);return Zn.createElement(d,Fi({key:c},p),N)}}const Oj=function(n,e){var s=n.listLanguages();return s.indexOf(e)!==-1};var zj=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function im(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),s.push.apply(s,a)}return s}function Rn(n){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?im(Object(s),!0).forEach(function(a){A0(n,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):im(Object(s)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))})}return n}var Uj=/\n/g;function Hj(n){return n.match(Uj)}function qj(n){var e=n.lines,s=n.startingLineNumber,a=n.style;return e.map(function(l,r){var c=r+s;return Zn.createElement("span",{key:"line-".concat(r),className:"react-syntax-highlighter-line-number",style:typeof a=="function"?a(c):a},"".concat(c,`
`))})}function Vj(n){var e=n.codeString,s=n.codeStyle,a=n.containerStyle,l=a===void 0?{float:"left",paddingRight:"10px"}:a,r=n.numberStyle,c=r===void 0?{}:r,i=n.startingLineNumber;return Zn.createElement("code",{style:Object.assign({},s,l)},qj({lines:e.replace(/\n$/,"").split(`
`),style:c,startingLineNumber:i}))}function Xj(n){return"".concat(n.toString().length,".25em")}function $0(n,e){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(n),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:e},children:[{type:"text",value:n}]}}function D0(n,e,s){var a={display:"inline-block",minWidth:Xj(s),paddingRight:"1em",textAlign:"right",userSelect:"none"},l=typeof n=="function"?n(e):n,r=Rn(Rn({},a),l);return r}function nr(n){var e=n.children,s=n.lineNumber,a=n.lineNumberStyle,l=n.largestLineNumber,r=n.showInlineLineNumbers,c=n.lineProps,i=c===void 0?{}:c,o=n.className,d=o===void 0?[]:o,u=n.showLineNumbers,m=n.wrapLongLines,p=typeof i=="function"?i(s):i;if(p.className=d,s&&r){var g=D0(a,s,l);e.unshift($0(s,g))}return m&u&&(p.style=Rn(Rn({},p.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:p,children:e}}function L0(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],a=0;a<n.length;a++){var l=n[a];if(l.type==="text")s.push(nr({children:[l],className:Mj(new Set(e))}));else if(l.children){var r=e.concat(l.properties.className);L0(l.children,r).forEach(function(c){return s.push(c)})}}return s}function Gj(n,e,s,a,l,r,c,i,o){var d,u=L0(n.value),m=[],p=-1,g=0;function y(_,k){var R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return nr({children:_,lineNumber:k,lineNumberStyle:i,largestLineNumber:c,showInlineLineNumbers:l,lineProps:s,className:R,showLineNumbers:a,wrapLongLines:o})}function b(_,k){if(a&&k&&l){var R=D0(i,k,c);_.unshift($0(k,R))}return _}function N(_,k){var R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return e||R.length>0?y(_,k,R):b(_,k)}for(var x=function(){var k=u[g],R=k.children[0].value,M=Hj(R);if(M){var Y=R.split(`
`);Y.forEach(function(B,ce){var U=a&&m.length+r,tn={type:"text",value:"".concat(B,`
`)};if(ce===0){var Ue=u.slice(p+1,g).concat(nr({children:[tn],className:k.properties.className})),ge=N(Ue,U);m.push(ge)}else if(ce===Y.length-1){var C=u[g+1]&&u[g+1].children&&u[g+1].children[0],L={type:"text",value:"".concat(B)};if(C){var $=nr({children:[L],className:k.properties.className});u.splice(g+1,0,$)}else{var V=[L],J=N(V,U,k.properties.className);m.push(J)}}else{var Ae=[tn],He=N(Ae,U,k.properties.className);m.push(He)}}),p=g}g++};g<u.length;)x();if(p!==u.length-1){var f=u.slice(p+1,u.length);if(f&&f.length){var v=a&&m.length+r,j=N(f,v);m.push(j)}}return e?m:(d=[]).concat.apply(d,m)}function Zj(n){var e=n.rows,s=n.stylesheet,a=n.useInlineStyles;return e.map(function(l,r){return T0({node:l,stylesheet:s,useInlineStyles:a,key:"code-segement".concat(r)})})}function B0(n){return n&&typeof n.highlightAuto<"u"}function Yj(n){var e=n.astGenerator,s=n.language,a=n.code,l=n.defaultCodeValue;if(B0(e)){var r=Oj(e,s);return s==="text"?{value:l,language:"text"}:r?e.highlight(s,a):e.highlightAuto(a)}try{return s&&s!=="text"?{value:e.highlight(a,s)}:{value:l}}catch{return{value:l}}}function Qj(n,e){return function(a){var l=a.language,r=a.children,c=a.style,i=c===void 0?e:c,o=a.customStyle,d=o===void 0?{}:o,u=a.codeTagProps,m=u===void 0?{className:l?"language-".concat(l):void 0,style:Rn(Rn({},i['code[class*="language-"]']),i['code[class*="language-'.concat(l,'"]')])}:u,p=a.useInlineStyles,g=p===void 0?!0:p,y=a.showLineNumbers,b=y===void 0?!1:y,N=a.showInlineLineNumbers,x=N===void 0?!0:N,f=a.startingLineNumber,v=f===void 0?1:f,j=a.lineNumberContainerStyle,_=a.lineNumberStyle,k=_===void 0?{}:_,R=a.wrapLines,M=a.wrapLongLines,Y=M===void 0?!1:M,B=a.lineProps,ce=B===void 0?{}:B,U=a.renderer,tn=a.PreTag,Ue=tn===void 0?"pre":tn,ge=a.CodeTag,C=ge===void 0?"code":ge,L=a.code,$=L===void 0?(Array.isArray(r)?r[0]:r)||"":L,V=a.astGenerator,J=_j(a,zj);V=V||n;var Ae=b?Zn.createElement(Vj,{containerStyle:j,codeStyle:m.style||{},numberStyle:k,startingLineNumber:v,codeString:$}):null,He=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},w=B0(V)?"hljs":"prismjs",E=g?Object.assign({},J,{style:Object.assign({},He,d)}):Object.assign({},J,{className:J.className?"".concat(w," ").concat(J.className):w,style:Object.assign({},d)});if(Y?m.style=Rn(Rn({},m.style),{},{whiteSpace:"pre-wrap"}):m.style=Rn(Rn({},m.style),{},{whiteSpace:"pre"}),!V)return Zn.createElement(Ue,E,Ae,Zn.createElement(C,m,$));(R===void 0&&U||Y)&&(R=!0),U=U||Zj;var O=[{type:"text",value:$}],W=Yj({astGenerator:V,language:l,code:$,defaultCodeValue:O});W.language===null&&(W.value=O);var be=W.value.length+v,Un=Gj(W,R,ce,b,x,v,be,k,Y);return Zn.createElement(Ue,E,Zn.createElement(C,m,!x&&Ae,U({rows:Un,stylesheet:i,useInlineStyles:g})))}}var is={};function uu(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(function(e){var s=n[e];typeof s=="object"&&!Object.isFrozen(s)&&uu(s)}),n}var O0=uu,Jj=uu;O0.default=Jj;class om{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function zs(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function yt(n,...e){const s=Object.create(null);for(const a in n)s[a]=n[a];return e.forEach(function(a){for(const l in a)s[l]=a[l]}),s}const Kj="</span>",um=n=>!!n.kind;class Wj{constructor(e,s){this.buffer="",this.classPrefix=s.classPrefix,e.walk(this)}addText(e){this.buffer+=zs(e)}openNode(e){if(!um(e))return;let s=e.kind;e.sublanguage||(s=`${this.classPrefix}${s}`),this.span(s)}closeNode(e){um(e)&&(this.buffer+=Kj)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class du{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const s={kind:e,children:[]};this.add(s),this.stack.push(s)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,s){return typeof s=="string"?e.addText(s):s.children&&(e.openNode(s),s.children.forEach(a=>this._walk(e,a)),e.closeNode(s)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(s=>typeof s=="string")?e.children=[e.children.join("")]:e.children.forEach(s=>{du._collapse(s)}))}}class Pj extends du{constructor(e){super(),this.options=e}addKeyword(e,s){e!==""&&(this.openNode(s),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,s){const a=e.root;a.kind=s,a.sublanguage=!0,this.add(a)}toHTML(){return new Wj(this,this.options).value()}finalize(){return!0}}function Fj(n){return new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function al(n){return n?typeof n=="string"?n:n.source:null}function Ij(...n){return n.map(s=>al(s)).join("")}function eb(...n){return"("+n.map(s=>al(s)).join("|")+")"}function nb(n){return new RegExp(n.toString()+"|").exec("").length-1}function tb(n,e){const s=n&&n.exec(e);return s&&s.index===0}const sb=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ab(n,e="|"){let s=0;return n.map(a=>{s+=1;const l=s;let r=al(a),c="";for(;r.length>0;){const i=sb.exec(r);if(!i){c+=r;break}c+=r.substring(0,i.index),r=r.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?c+="\\"+String(Number(i[1])+l):(c+=i[0],i[0]==="("&&s++)}return c}).map(a=>`(${a})`).join(e)}const lb=/\b\B/,z0="[a-zA-Z]\\w*",mu="[a-zA-Z_]\\w*",pu="\\b\\d+(\\.\\d+)?",U0="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",H0="\\b(0b[01]+)",rb="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",cb=(n={})=>{const e=/^#![ ]*\//;return n.binary&&(n.begin=Ij(e,/.*\b/,n.binary,/\b.*/)),yt({className:"meta",begin:e,end:/$/,relevance:0,"on:begin":(s,a)=>{s.index!==0&&a.ignoreMatch()}},n)},ll={begin:"\\\\[\\s\\S]",relevance:0},ib={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[ll]},ob={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[ll]},q0={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},tc=function(n,e,s={}){const a=yt({className:"comment",begin:n,end:e,contains:[]},s);return a.contains.push(q0),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},ub=tc("//","$"),db=tc("/\\*","\\*/"),mb=tc("#","$"),pb={className:"number",begin:pu,relevance:0},fb={className:"number",begin:U0,relevance:0},hb={className:"number",begin:H0,relevance:0},xb={className:"number",begin:pu+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},gb={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[ll,{begin:/\[/,end:/\]/,relevance:0,contains:[ll]}]}]},vb={className:"title",begin:z0,relevance:0},jb={className:"title",begin:mu,relevance:0},bb={begin:"\\.\\s*"+mu,relevance:0},yb=function(n){return Object.assign(n,{"on:begin":(e,s)=>{s.data._beginMatch=e[1]},"on:end":(e,s)=>{s.data._beginMatch!==e[1]&&s.ignoreMatch()}})};var ql=Object.freeze({__proto__:null,MATCH_NOTHING_RE:lb,IDENT_RE:z0,UNDERSCORE_IDENT_RE:mu,NUMBER_RE:pu,C_NUMBER_RE:U0,BINARY_NUMBER_RE:H0,RE_STARTERS_RE:rb,SHEBANG:cb,BACKSLASH_ESCAPE:ll,APOS_STRING_MODE:ib,QUOTE_STRING_MODE:ob,PHRASAL_WORDS_MODE:q0,COMMENT:tc,C_LINE_COMMENT_MODE:ub,C_BLOCK_COMMENT_MODE:db,HASH_COMMENT_MODE:mb,NUMBER_MODE:pb,C_NUMBER_MODE:fb,BINARY_NUMBER_MODE:hb,CSS_NUMBER_MODE:xb,REGEXP_MODE:gb,TITLE_MODE:vb,UNDERSCORE_TITLE_MODE:jb,METHOD_GUARD:bb,END_SAME_AS_BEGIN:yb});function Nb(n,e){n.input[n.index-1]==="."&&e.ignoreMatch()}function Sb(n,e){e&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=Nb,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function wb(n,e){Array.isArray(n.illegal)&&(n.illegal=eb(...n.illegal))}function _b(n,e){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function kb(n,e){n.relevance===void 0&&(n.relevance=1)}const Cb=["of","and","for","in","not","or","if","then","parent","list","value"],Rb="keyword";function V0(n,e,s=Rb){const a={};return typeof n=="string"?l(s,n.split(" ")):Array.isArray(n)?l(s,n):Object.keys(n).forEach(function(r){Object.assign(a,V0(n[r],e,r))}),a;function l(r,c){e&&(c=c.map(i=>i.toLowerCase())),c.forEach(function(i){const o=i.split("|");a[o[0]]=[r,Eb(o[0],o[1])]})}}function Eb(n,e){return e?Number(e):Mb(n)?0:1}function Mb(n){return Cb.includes(n.toLowerCase())}function Ab(n,{plugins:e}){function s(i,o){return new RegExp(al(i),"m"+(n.case_insensitive?"i":"")+(o?"g":""))}class a{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(o,d){d.position=this.position++,this.matchIndexes[this.matchAt]=d,this.regexes.push([d,o]),this.matchAt+=nb(o)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const o=this.regexes.map(d=>d[1]);this.matcherRe=s(ab(o),!0),this.lastIndex=0}exec(o){this.matcherRe.lastIndex=this.lastIndex;const d=this.matcherRe.exec(o);if(!d)return null;const u=d.findIndex((p,g)=>g>0&&p!==void 0),m=this.matchIndexes[u];return d.splice(0,u),Object.assign(d,m)}}class l{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(o){if(this.multiRegexes[o])return this.multiRegexes[o];const d=new a;return this.rules.slice(o).forEach(([u,m])=>d.addRule(u,m)),d.compile(),this.multiRegexes[o]=d,d}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(o,d){this.rules.push([o,d]),d.type==="begin"&&this.count++}exec(o){const d=this.getMatcher(this.regexIndex);d.lastIndex=this.lastIndex;let u=d.exec(o);if(this.resumingScanAtSamePosition()&&!(u&&u.index===this.lastIndex)){const m=this.getMatcher(0);m.lastIndex=this.lastIndex+1,u=m.exec(o)}return u&&(this.regexIndex+=u.position+1,this.regexIndex===this.count&&this.considerAll()),u}}function r(i){const o=new l;return i.contains.forEach(d=>o.addRule(d.begin,{rule:d,type:"begin"})),i.terminatorEnd&&o.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&o.addRule(i.illegal,{type:"illegal"}),o}function c(i,o){const d=i;if(i.isCompiled)return d;[_b].forEach(m=>m(i,o)),n.compilerExtensions.forEach(m=>m(i,o)),i.__beforeBegin=null,[Sb,wb,kb].forEach(m=>m(i,o)),i.isCompiled=!0;let u=null;if(typeof i.keywords=="object"&&(u=i.keywords.$pattern,delete i.keywords.$pattern),i.keywords&&(i.keywords=V0(i.keywords,n.case_insensitive)),i.lexemes&&u)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return u=u||i.lexemes||/\w+/,d.keywordPatternRe=s(u,!0),o&&(i.begin||(i.begin=/\B|\b/),d.beginRe=s(i.begin),i.endSameAsBegin&&(i.end=i.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(d.endRe=s(i.end)),d.terminatorEnd=al(i.end)||"",i.endsWithParent&&o.terminatorEnd&&(d.terminatorEnd+=(i.end?"|":"")+o.terminatorEnd)),i.illegal&&(d.illegalRe=s(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(m){return Tb(m==="self"?i:m)})),i.contains.forEach(function(m){c(m,d)}),i.starts&&c(i.starts,o),d.matcher=r(d),d}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=yt(n.classNameAliases||{}),c(n)}function X0(n){return n?n.endsWithParent||X0(n.starts):!1}function Tb(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return yt(n,{variants:null},e)})),n.cachedVariants?n.cachedVariants:X0(n)?yt(n,{starts:n.starts?yt(n.starts):null}):Object.isFrozen(n)?yt(n):n}var $b="10.7.3";function Db(n){return!!(n||n==="")}function Lb(n){const e={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!n.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,zs(this.code);let a={};return this.autoDetect?(a=n.highlightAuto(this.code),this.detectedLanguage=a.language):(a=n.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),a.value},autoDetect(){return!this.language||Db(this.autodetect)},ignoreIllegals(){return!0}},render(a){return a("pre",{},[a("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:e,VuePlugin:{install(a){a.component("highlightjs",e)}}}}const Bb={"after:highlightElement":({el:n,result:e,text:s})=>{const a=dm(n);if(!a.length)return;const l=document.createElement("div");l.innerHTML=e.value,e.value=Ob(a,dm(l),s)}};function Ii(n){return n.nodeName.toLowerCase()}function dm(n){const e=[];return function s(a,l){for(let r=a.firstChild;r;r=r.nextSibling)r.nodeType===3?l+=r.nodeValue.length:r.nodeType===1&&(e.push({event:"start",offset:l,node:r}),l=s(r,l),Ii(r).match(/br|hr|img|input/)||e.push({event:"stop",offset:l,node:r}));return l}(n,0),e}function Ob(n,e,s){let a=0,l="";const r=[];function c(){return!n.length||!e.length?n.length?n:e:n[0].offset!==e[0].offset?n[0].offset<e[0].offset?n:e:e[0].event==="start"?n:e}function i(u){function m(p){return" "+p.nodeName+'="'+zs(p.value)+'"'}l+="<"+Ii(u)+[].map.call(u.attributes,m).join("")+">"}function o(u){l+="</"+Ii(u)+">"}function d(u){(u.event==="start"?i:o)(u.node)}for(;n.length||e.length;){let u=c();if(l+=zs(s.substring(a,u[0].offset)),a=u[0].offset,u===n){r.reverse().forEach(o);do d(u.splice(0,1)[0]),u=c();while(u===n&&u.length&&u[0].offset===a);r.reverse().forEach(i)}else u[0].event==="start"?r.push(u[0].node):r.pop(),d(u.splice(0,1)[0])}return l+zs(s.substr(a))}const mm={},Jc=n=>{console.error(n)},pm=(n,...e)=>{console.log(`WARN: ${n}`,...e)},sn=(n,e)=>{mm[`${n}/${e}`]||(console.log(`Deprecated as of ${n}. ${e}`),mm[`${n}/${e}`]=!0)},Kc=zs,fm=yt,hm=Symbol("nomatch"),zb=function(n){const e=Object.create(null),s=Object.create(null),a=[];let l=!0;const r=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let o={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:Pj};function d(w){return o.noHighlightRe.test(w)}function u(w){let E=w.className+" ";E+=w.parentNode?w.parentNode.className:"";const O=o.languageDetectRe.exec(E);if(O){const W=ge(O[1]);return W||(pm(c.replace("{}",O[1])),pm("Falling back to no-highlight mode for this block.",w)),W?O[1]:"no-highlight"}return E.split(/\s+/).find(W=>d(W)||ge(W))}function m(w,E,O,W){let be="",Un="";typeof E=="object"?(be=w,O=E.ignoreIllegals,Un=E.language,W=void 0):(sn("10.7.0","highlight(lang, code, ...args) has been deprecated."),sn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Un=w,be=E);const wn={code:be,language:Un};J("before:highlight",wn);const _n=wn.result?wn.result:p(wn.language,wn.code,O,W);return _n.code=wn.code,J("after:highlight",_n),_n}function p(w,E,O,W){function be(A,D){const G=os.case_insensitive?D[0].toLowerCase():D[0];return Object.prototype.hasOwnProperty.call(A.keywords,G)&&A.keywords[G]}function Un(){if(!X.keywords){qe.addText(ye);return}let A=0;X.keywordPatternRe.lastIndex=0;let D=X.keywordPatternRe.exec(ye),G="";for(;D;){G+=ye.substring(A,D.index);const ee=be(X,D);if(ee){const[Qe,bl]=ee;if(qe.addText(G),G="",jl+=bl,Qe.startsWith("_"))G+=D[0];else{const Mx=os.classNameAliases[Qe]||Qe;qe.addKeyword(D[0],Mx)}}else G+=D[0];A=X.keywordPatternRe.lastIndex,D=X.keywordPatternRe.exec(ye)}G+=ye.substr(A),qe.addText(G)}function wn(){if(ye==="")return;let A=null;if(typeof X.subLanguage=="string"){if(!e[X.subLanguage]){qe.addText(ye);return}A=p(X.subLanguage,ye,!0,Mu[X.subLanguage]),Mu[X.subLanguage]=A.top}else A=y(ye,X.subLanguage.length?X.subLanguage:null);X.relevance>0&&(jl+=A.relevance),qe.addSublanguage(A.emitter,A.language)}function _n(){X.subLanguage!=null?wn():Un(),ye=""}function kn(A){return A.className&&qe.openNode(os.classNameAliases[A.className]||A.className),X=Object.create(A,{parent:{value:X}}),X}function rt(A,D,G){let ee=tb(A.endRe,G);if(ee){if(A["on:end"]){const Qe=new om(A);A["on:end"](D,Qe),Qe.isMatchIgnored&&(ee=!1)}if(ee){for(;A.endsParent&&A.parent;)A=A.parent;return A}}if(A.endsWithParent)return rt(A.parent,D,G)}function _x(A){return X.matcher.regexIndex===0?(ye+=A[0],1):(cc=!0,0)}function kx(A){const D=A[0],G=A.rule,ee=new om(G),Qe=[G.__beforeBegin,G["on:begin"]];for(const bl of Qe)if(bl&&(bl(A,ee),ee.isMatchIgnored))return _x(D);return G&&G.endSameAsBegin&&(G.endRe=Fj(D)),G.skip?ye+=D:(G.excludeBegin&&(ye+=D),_n(),!G.returnBegin&&!G.excludeBegin&&(ye=D)),kn(G),G.returnBegin?0:D.length}function Cx(A){const D=A[0],G=E.substr(A.index),ee=rt(X,A,G);if(!ee)return hm;const Qe=X;Qe.skip?ye+=D:(Qe.returnEnd||Qe.excludeEnd||(ye+=D),_n(),Qe.excludeEnd&&(ye=D));do X.className&&qe.closeNode(),!X.skip&&!X.subLanguage&&(jl+=X.relevance),X=X.parent;while(X!==ee.parent);return ee.starts&&(ee.endSameAsBegin&&(ee.starts.endRe=ee.endRe),kn(ee.starts)),Qe.returnEnd?0:D.length}function Rx(){const A=[];for(let D=X;D!==os;D=D.parent)D.className&&A.unshift(D.className);A.forEach(D=>qe.openNode(D))}let vl={};function Eu(A,D){const G=D&&D[0];if(ye+=A,G==null)return _n(),0;if(vl.type==="begin"&&D.type==="end"&&vl.index===D.index&&G===""){if(ye+=E.slice(D.index,D.index+1),!l){const ee=new Error("0 width match regex");throw ee.languageName=w,ee.badRule=vl.rule,ee}return 1}if(vl=D,D.type==="begin")return kx(D);if(D.type==="illegal"&&!O){const ee=new Error('Illegal lexeme "'+G+'" for mode "'+(X.className||"<unnamed>")+'"');throw ee.mode=X,ee}else if(D.type==="end"){const ee=Cx(D);if(ee!==hm)return ee}if(D.type==="illegal"&&G==="")return 1;if(rc>1e5&&rc>D.index*3)throw new Error("potential infinite loop, way more iterations than matches");return ye+=G,G.length}const os=ge(w);if(!os)throw Jc(c.replace("{}",w)),new Error('Unknown language: "'+w+'"');const Ex=Ab(os,{plugins:a});let lc="",X=W||Ex;const Mu={},qe=new o.__emitter(o);Rx();let ye="",jl=0,us=0,rc=0,cc=!1;try{for(X.matcher.considerAll();;){rc++,cc?cc=!1:X.matcher.considerAll(),X.matcher.lastIndex=us;const A=X.matcher.exec(E);if(!A)break;const D=E.substring(us,A.index),G=Eu(D,A);us=A.index+G}return Eu(E.substr(us)),qe.closeAllNodes(),qe.finalize(),lc=qe.toHTML(),{relevance:Math.floor(jl),value:lc,language:w,illegal:!1,emitter:qe,top:X}}catch(A){if(A.message&&A.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:A.message,context:E.slice(us-100,us+100),mode:A.mode},sofar:lc,relevance:0,value:Kc(E),emitter:qe};if(l)return{illegal:!1,relevance:0,value:Kc(E),emitter:qe,language:w,top:X,errorRaised:A};throw A}}function g(w){const E={relevance:0,emitter:new o.__emitter(o),value:Kc(w),illegal:!1,top:i};return E.emitter.addText(w),E}function y(w,E){E=E||o.languages||Object.keys(e);const O=g(w),W=E.filter(ge).filter(L).map(kn=>p(kn,w,!1));W.unshift(O);const be=W.sort((kn,rt)=>{if(kn.relevance!==rt.relevance)return rt.relevance-kn.relevance;if(kn.language&&rt.language){if(ge(kn.language).supersetOf===rt.language)return 1;if(ge(rt.language).supersetOf===kn.language)return-1}return 0}),[Un,wn]=be,_n=Un;return _n.second_best=wn,_n}function b(w){return o.tabReplace||o.useBR?w.replace(r,E=>E===`
`?o.useBR?"<br>":E:o.tabReplace?E.replace(/\t/g,o.tabReplace):E):w}function N(w,E,O){const W=E?s[E]:O;w.classList.add("hljs"),W&&w.classList.add(W)}const x={"before:highlightElement":({el:w})=>{o.useBR&&(w.innerHTML=w.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,`
`))},"after:highlightElement":({result:w})=>{o.useBR&&(w.value=w.value.replace(/\n/g,"<br>"))}},f=/^(<[^>]+>|\t)+/gm,v={"after:highlightElement":({result:w})=>{o.tabReplace&&(w.value=w.value.replace(f,E=>E.replace(/\t/g,o.tabReplace)))}};function j(w){let E=null;const O=u(w);if(d(O))return;J("before:highlightElement",{el:w,language:O}),E=w;const W=E.textContent,be=O?m(W,{language:O,ignoreIllegals:!0}):y(W);J("after:highlightElement",{el:w,result:be,text:W}),w.innerHTML=be.value,N(w,O,be.language),w.result={language:be.language,re:be.relevance,relavance:be.relevance},be.second_best&&(w.second_best={language:be.second_best.language,re:be.second_best.relevance,relavance:be.second_best.relevance})}function _(w){w.useBR&&(sn("10.3.0","'useBR' will be removed entirely in v11.0"),sn("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),o=fm(o,w)}const k=()=>{if(k.called)return;k.called=!0,sn("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(j)};function R(){sn("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),M=!0}let M=!1;function Y(){if(document.readyState==="loading"){M=!0;return}document.querySelectorAll("pre code").forEach(j)}function B(){M&&Y()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",B,!1);function ce(w,E){let O=null;try{O=E(n)}catch(W){if(Jc("Language definition for '{}' could not be registered.".replace("{}",w)),l)Jc(W);else throw W;O=i}O.name||(O.name=w),e[w]=O,O.rawDefinition=E.bind(null,n),O.aliases&&C(O.aliases,{languageName:w})}function U(w){delete e[w];for(const E of Object.keys(s))s[E]===w&&delete s[E]}function tn(){return Object.keys(e)}function Ue(w){sn("10.4.0","requireLanguage will be removed entirely in v11."),sn("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const E=ge(w);if(E)return E;throw new Error("The '{}' language is required, but not loaded.".replace("{}",w))}function ge(w){return w=(w||"").toLowerCase(),e[w]||e[s[w]]}function C(w,{languageName:E}){typeof w=="string"&&(w=[w]),w.forEach(O=>{s[O.toLowerCase()]=E})}function L(w){const E=ge(w);return E&&!E.disableAutodetect}function $(w){w["before:highlightBlock"]&&!w["before:highlightElement"]&&(w["before:highlightElement"]=E=>{w["before:highlightBlock"](Object.assign({block:E.el},E))}),w["after:highlightBlock"]&&!w["after:highlightElement"]&&(w["after:highlightElement"]=E=>{w["after:highlightBlock"](Object.assign({block:E.el},E))})}function V(w){$(w),a.push(w)}function J(w,E){const O=w;a.forEach(function(W){W[O]&&W[O](E)})}function Ae(w){return sn("10.2.0","fixMarkup will be removed entirely in v11.0"),sn("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),b(w)}function He(w){return sn("10.7.0","highlightBlock will be removed entirely in v12.0"),sn("10.7.0","Please use highlightElement now."),j(w)}Object.assign(n,{highlight:m,highlightAuto:y,highlightAll:Y,fixMarkup:Ae,highlightElement:j,highlightBlock:He,configure:_,initHighlighting:k,initHighlightingOnLoad:R,registerLanguage:ce,unregisterLanguage:U,listLanguages:tn,getLanguage:ge,registerAliases:C,requireLanguage:Ue,autoDetection:L,inherit:fm,addPlugin:V,vuePlugin:Lb(n).VuePlugin}),n.debugMode=function(){l=!1},n.safeMode=function(){l=!0},n.versionString=$b;for(const w in ql)typeof ql[w]=="object"&&O0(ql[w]);return Object.assign(n,ql),n.addPlugin(x),n.addPlugin(Bb),n.addPlugin(v),n};var Ub=zb({}),Hb=Ub,G0={exports:{}};(function(n){(function(){var e;e=n.exports=l,e.format=l,e.vsprintf=a,typeof console<"u"&&typeof console.log=="function"&&(e.printf=s);function s(){console.log(l.apply(null,arguments))}function a(r,c){return l.apply(null,[r].concat(c))}function l(r){for(var c=1,i=[].slice.call(arguments),o=0,d=r.length,u="",m,p=!1,g,y,b=!1,N,x=function(){return i[c++]},f=function(){for(var v="";/\d/.test(r[o]);)v+=r[o++],m=r[o];return v.length>0?parseInt(v):null};o<d;++o)if(m=r[o],p)switch(p=!1,m=="."?(b=!1,m=r[++o]):m=="0"&&r[o+1]=="."?(b=!0,o+=2,m=r[o]):b=!0,N=f(),m){case"b":u+=parseInt(x(),10).toString(2);break;case"c":g=x(),typeof g=="string"||g instanceof String?u+=g:u+=String.fromCharCode(parseInt(g,10));break;case"d":u+=parseInt(x(),10);break;case"f":y=String(parseFloat(x()).toFixed(N||6)),u+=b?y:y.replace(/^0/,"");break;case"j":u+=JSON.stringify(x());break;case"o":u+="0"+parseInt(x(),10).toString(8);break;case"s":u+=x();break;case"x":u+="0x"+parseInt(x(),10).toString(16);break;case"X":u+="0x"+parseInt(x(),10).toString(16).toUpperCase();break;default:u+=m;break}else m==="%"?p=!0:u+=m;return u}})()})(G0);var qb=G0.exports,Vb=qb,Dt=Lt(Error),Xb=Dt;Dt.eval=Lt(EvalError);Dt.range=Lt(RangeError);Dt.reference=Lt(ReferenceError);Dt.syntax=Lt(SyntaxError);Dt.type=Lt(TypeError);Dt.uri=Lt(URIError);Dt.create=Lt;function Lt(n){return e.displayName=n.displayName||n.name,e;function e(s){return s&&(s=Vb.apply(null,arguments)),new n(s)}}var Mn=Hb,tr=Xb;is.highlight=Z0;is.highlightAuto=Zb;is.registerLanguage=Yb;is.listLanguages=Qb;is.registerAlias=Jb;lt.prototype.addText=Pb;lt.prototype.addKeyword=Kb;lt.prototype.addSublanguage=Wb;lt.prototype.openNode=Fb;lt.prototype.closeNode=Ib;lt.prototype.closeAllNodes=Y0;lt.prototype.finalize=Y0;lt.prototype.toHTML=e5;var Gb="hljs-";function Z0(n,e,s){var a=Mn.configure({}),l=s||{},r=l.prefix,c;if(typeof n!="string")throw tr("Expected `string` for name, got `%s`",n);if(!Mn.getLanguage(n))throw tr("Unknown language: `%s` is not registered",n);if(typeof e!="string")throw tr("Expected `string` for value, got `%s`",e);if(r==null&&(r=Gb),Mn.configure({__emitter:lt,classPrefix:r}),c=Mn.highlight(e,{language:n,ignoreIllegals:!0}),Mn.configure(a||{}),c.errorRaised)throw c.errorRaised;return{relevance:c.relevance,language:c.language,value:c.emitter.rootNode.children}}function Zb(n,e){var s=e||{},a=s.subset||Mn.listLanguages();s.prefix;var l=a.length,r=-1,c,i,o,d;if(typeof n!="string")throw tr("Expected `string` for value, got `%s`",n);for(i={relevance:0,language:null,value:[]},c={relevance:0,language:null,value:[]};++r<l;)d=a[r],Mn.getLanguage(d)&&(o=Z0(d,n,e),o.language=d,o.relevance>i.relevance&&(i=o),o.relevance>c.relevance&&(i=c,c=o));return i.language&&(c.secondBest=i),c}function Yb(n,e){Mn.registerLanguage(n,e)}function Qb(){return Mn.listLanguages()}function Jb(n,e){var s=n,a;e&&(s={},s[n]=e);for(a in s)Mn.registerAliases(s[a],{languageName:a})}function lt(n){this.options=n,this.rootNode={children:[]},this.stack=[this.rootNode]}function Kb(n,e){this.openNode(e),this.addText(n),this.closeNode()}function Wb(n,e){var s=this.stack,a=s[s.length-1],l=n.rootNode.children,r=e?{type:"element",tagName:"span",properties:{className:[e]},children:l}:l;a.children=a.children.concat(r)}function Pb(n){var e=this.stack,s,a;n!==""&&(s=e[e.length-1],a=s.children[s.children.length-1],a&&a.type==="text"?a.value+=n:s.children.push({type:"text",value:n}))}function Fb(n){var e=this.stack,s=this.options.classPrefix+n,a=e[e.length-1],l={type:"element",tagName:"span",properties:{className:[s]},children:[]};a.children.push(l),e.push(l)}function Ib(){this.stack.pop()}function e5(){return""}function Y0(){}const xm="[A-Za-z$_][0-9A-Za-z$_]*",n5=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],t5=["true","false","null","undefined","NaN","Infinity"],s5=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],a5=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],l5=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],r5=["arguments","this","super","console","window","document","localStorage","module","global"],c5=[].concat(l5,r5,s5,a5);function i5(n){return n?typeof n=="string"?n:n.source:null}function gm(n){return eo("(?=",n,")")}function eo(...n){return n.map(s=>i5(s)).join("")}function o5(n){const e=(j,{after:_})=>{const k="</"+j[0].slice(1);return j.input.indexOf(k,_)!==-1},s=xm,a={begin:"<>",end:"</>"},l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(j,_)=>{const k=j[0].length+j.index,R=j.input[k];if(R==="<"){_.ignoreMatch();return}R===">"&&(e(j,{after:k})||_.ignoreMatch())}},r={$pattern:xm,keyword:n5,literal:t5,built_in:c5},c="[0-9](_?[0-9])*",i=`\\.(${c})`,o="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${o})((${i})|\\.)?|(${i}))[eE][+-]?(${c})\\b`},{begin:`\\b(${o})\\b((${i})\\b|\\.)?|(${i})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},u={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},m={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,u],subLanguage:"xml"}},p={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,u],subLanguage:"css"}},g={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,u]},b={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},N=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,m,p,g,d,n.REGEXP_MODE];u.contains=N.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(N)});const x=[].concat(b,u.contains),f=x.concat([{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(x)}]),v={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:f};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:f},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,m,p,g,b,d,{begin:eo(/[{,\n]\s*/,gm(eo(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,s+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:s+gm("\\s*:"),relevance:0}]},{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[b,n.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:f}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:a.begin,end:a.end},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:r,contains:["self",n.inherit(n.TITLE_MODE,{begin:s}),v],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[v,n.inherit(n.TITLE_MODE,{begin:s})]},{variants:[{begin:"\\."+s},{begin:"\\$"+s}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},n.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[n.inherit(n.TITLE_MODE,{begin:s}),"self",v]},{begin:"(get|set)\\s+(?="+s+"\\()",end:/\{/,keywords:"get set",contains:[n.inherit(n.TITLE_MODE,{begin:s}),{begin:/\(\)/},v]},{begin:/\$[(.]/}]}}var u5=o5;const fu=so(u5),d5="modulepreload",m5=function(n){return"/"+n},vm={},p5=function(e,s,a){let l=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),c=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));l=Promise.all(s.map(i=>{if(i=m5(i),i in vm)return;vm[i]=!0;const o=i.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${d}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":d5,o||(u.as="script",u.crossOrigin=""),u.href=i,c&&u.setAttribute("nonce",c),document.head.appendChild(u),o)return new Promise((m,p)=>{u.addEventListener("load",m),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})}))}return l.then(()=>e()).catch(r=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r})};var Bt=Qj(is,{});Bt.registerLanguage=is.registerLanguage;var Wc,jm;function f5(){if(jm)return Wc;jm=1,Wc=n,n.displayName="jsx",n.aliases=[];function n(e){(function(s){var a=s.util.clone(s.languages.javascript),l=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,c=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(u,m){return u=u.replace(/<S>/g,function(){return l}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return c}),RegExp(u,m)}c=i(c).source,s.languages.jsx=s.languages.extend("markup",a),s.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),s.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,s.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,s.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,s.languages.jsx.tag.inside.comment=a.comment,s.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:s.languages.jsx}},s.languages.jsx.tag),s.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:s.languages.jsx}}},s.languages.jsx.tag);var o=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(o).join(""):""},d=function(u){for(var m=[],p=0;p<u.length;p++){var g=u[p],y=!1;if(typeof g!="string"&&(g.type==="tag"&&g.content[0]&&g.content[0].type==="tag"?g.content[0].content[0].content==="</"?m.length>0&&m[m.length-1].tagName===o(g.content[0].content[1])&&m.pop():g.content[g.content.length-1].content==="/>"||m.push({tagName:o(g.content[0].content[1]),openedBraces:0}):m.length>0&&g.type==="punctuation"&&g.content==="{"?m[m.length-1].openedBraces++:m.length>0&&m[m.length-1].openedBraces>0&&g.type==="punctuation"&&g.content==="}"?m[m.length-1].openedBraces--:y=!0),(y||typeof g=="string")&&m.length>0&&m[m.length-1].openedBraces===0){var b=o(g);p<u.length-1&&(typeof u[p+1]=="string"||u[p+1].type==="plain-text")&&(b+=o(u[p+1]),u.splice(p+1,1)),p>0&&(typeof u[p-1]=="string"||u[p-1].type==="plain-text")&&(b=o(u[p-1])+b,u.splice(p-1,1),p--),u[p]=new s.Token("plain-text",b,null,b)}g.content&&typeof g.content!="string"&&d(g.content)}};s.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||d(u.tokens)})})(e)}return Wc}var h5=f5();const x5=so(h5),hu={hljs:{display:"block",overflowX:"auto",padding:"0.5em",color:"#383a42",background:"#fafafa"},"hljs-comment":{color:"#a0a1a7",fontStyle:"italic"},"hljs-quote":{color:"#a0a1a7",fontStyle:"italic"},"hljs-doctag":{color:"#a626a4"},"hljs-keyword":{color:"#a626a4"},"hljs-formula":{color:"#a626a4"},"hljs-section":{color:"#e45649"},"hljs-name":{color:"#e45649"},"hljs-selector-tag":{color:"#e45649"},"hljs-deletion":{color:"#e45649"},"hljs-subst":{color:"#e45649"},"hljs-literal":{color:"#0184bb"},"hljs-string":{color:"#50a14f"},"hljs-regexp":{color:"#50a14f"},"hljs-addition":{color:"#50a14f"},"hljs-attribute":{color:"#50a14f"},"hljs-meta-string":{color:"#50a14f"},"hljs-built_in":{color:"#c18401"},"hljs-class .hljs-title":{color:"#c18401"},"hljs-attr":{color:"#986801"},"hljs-variable":{color:"#986801"},"hljs-template-variable":{color:"#986801"},"hljs-type":{color:"#986801"},"hljs-selector-class":{color:"#986801"},"hljs-selector-attr":{color:"#986801"},"hljs-selector-pseudo":{color:"#986801"},"hljs-number":{color:"#986801"},"hljs-symbol":{color:"#4078f2"},"hljs-bullet":{color:"#4078f2"},"hljs-link":{color:"#4078f2",textDecoration:"underline"},"hljs-meta":{color:"#4078f2"},"hljs-selector-id":{color:"#4078f2"},"hljs-title":{color:"#4078f2"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}},g5=`import Button from 'components/Button'

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
}`;Bt.registerLanguage("javascript",fu);Bt.registerLanguage("jsx",x5);const v5={ButtonCase:g5,Button:gl};function In(n){const{files:e=v5,caseRender:s,active:a=0,className:l}=n,r=Object.keys(e),[c,i]=h.useState(r[a]);function o(m){i(r[m])}const u=se("border border-gray-100 flex bg-white keepx flex-col-reverse sm:flex-row",l);return t.jsxs("div",{className:u,children:[t.jsxs("div",{className:"overflow-scroll flex-1 relative",children:[t.jsx("div",{className:"flex border-b border-gray-100 sticky top-0 bg-white",children:r.map((m,p)=>t.jsx(le,{ghost:!0,onClick:()=>o(p),className:c===m?"text-green-500":"",children:m},m))}),t.jsx("pre",{className:"text-sm leading-6",children:t.jsx(Bt,{language:"javascript",PreTag:"div",style:hu,children:e[c]})})]}),s&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"sm:w-[1px] h-[1px] sm:h-auto bg-gray-100"}),t.jsxs("div",{className:"flex-1 overflow-hidden",children:[t.jsxs("div",{className:"flex border-b border-gray-100 items-center pl-3",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"})}),t.jsx(le,{ghost:!0,className:"px-2",children:"预览"})]}),s]})]})]})}function j5(){return t.jsx(In,{files:{ButtonCase:Sj,Button:gl},caseRender:t.jsx(Nj,{})})}function xu({id:n,host:e,repo:s,repoId:a,category:l,categoryId:r,mapping:c,term:i,strict:o,reactionsEnabled:d,emitMetadata:u,inputPosition:m,theme:p,lang:g,loading:y}){const[b,N]=h.useState(!1);return h.useEffect(()=>{b||(p5(()=>import("./giscus-BNK3dBIH-B_EkeIy7.js"),[]),N(!0))},[]),b?t.jsx("giscus-widget",{id:n,host:e,repo:s,repoid:a,category:l,categoryid:r,mapping:c,term:i,strict:o,reactionsenabled:d,emitmetadata:u,inputposition:m,theme:p,lang:g,loading:y}):null}const b5="/assets/ercode-w1g_eexN.png";function Pc(n){const{title:e,desc:s,href:a,className:l}=n,c=se("block border rounded-xl p-4 bg-slate-50 border-slate-300 hover:shadow cursor-pointer",l);return t.jsxs("a",{href:a,target:"_blank",className:c,children:[t.jsxs("div",{className:"flex",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-blue-500",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"})}),t.jsx("div",{className:"font-bold ml-2",children:e})]}),t.jsx("div",{className:"mt-3 text-slate-600 leading-8",children:s}),t.jsx("div",{className:"block text-end mt-4 text-blue-500",href:a,target:"_blank",children:"点击了解详情"})]})}function y5(){const n=h.useRef(null);function e(s){s.preventDefault(),n.current.show()}return t.jsxs("div",{className:"relative pt-16",children:[t.jsx(yj,{}),t.jsxs("div",{className:"max-w-[1050px] mx-auto px-4",children:[t.jsxs("div",{className:"mt-20 max-w-[750px]",children:[t.jsx("h2",{className:"text-lg font-bold",children:"React 19 全解"}),t.jsx("p",{className:"mt-4 text-gray-500 leading-8 text-md",children:"全网第一本系统学习 React 19 的专栏。本专栏在公众号「这波能反杀」首发，受到了大量粉丝的喜爱。专栏中包含大量实践案例，深入简出，理论结合实践为大家分享 React19 的学习。"}),t.jsx("p",{className:"text-md mt-4 text-gray-500 leading-8",children:"React19 为开发者带来了新的开发理念，这又是一次开发方式上的一次变革。并且在开发体验和性能上都有大幅度的提升，值得每一位 React 开发者学习，赶紧行动吧。"}),t.jsxs("div",{className:"mt-8",children:[t.jsxs(w0,{to:"tutorial/index",className:"inline-flex items-center px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-full",children:[t.jsx("span",{className:"mr-2",children:"快速开始"}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"})})]}),t.jsx("a",{onClick:e,href:"",className:"inline-flex px-4 py-2 text-gray-600 ring-1 ring-gray-200 text-sm rounded-full ml-4",children:t.jsx("span",{children:"关注公众号"})}),t.jsx(ra,{ref:n,title:"Follow me!",children:t.jsx("img",{src:b5,alt:""})})]})]}),t.jsxs("div",{className:"mt-20 max-w-[750px]",children:[t.jsx("h2",{className:"text-lg font-bold",children:"学前准备"}),t.jsxs("div",{className:"flex items-center text-gray-600 mt-8",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),t.jsx("div",{className:"ml-2",children:"具备一定的 JavaScript 基础"})]}),t.jsxs("div",{className:"flex items-center text-gray-600 mt-4",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),t.jsx("div",{className:"ml-2",children:"熟悉异步请求，熟悉 fetch 与 Promise"})]}),t.jsxs("div",{className:"flex items-center text-gray-600 mt-4",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),t.jsx("div",{className:"ml-2",children:"熟悉 React 之前的版本的使用"})]})]}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3",children:"主要内容"}),t.jsxs("div",{className:"flex items-stretch md:justify-between flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0",children:[t.jsx(Yc,{title:"Compiler",path:"./tutorial/use/importwith19",desc:"你可以不再使用 memo、useMemo、useCallback 来优化你的项目性能，大幅度提高开发体验",className:"flex-1"}),t.jsx(Yc,{title:"新的架构思路",path:"./tutorial/index",desc:"并发模式变得更加实用，得益于并发模式的成熟，我们将可以使用新的架构思路构思我的项目",className:"flex-1"}),t.jsx(Yc,{title:"新的交互方式",path:"./tutorial/use/base",desc:"React 在人机交互的开发体验上做了很多努力和尝试，他们将在这个版本中得以体现",className:"flex-1"})]}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3",children:"案例展示方式"}),t.jsxs("p",{className:"mt-10 flex items-center",children:["所见即所得。所有案例直接渲染，可操作、可交互。例如：点击按钮，切换皮肤",t.jsx("span",{className:"animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center ml-4",children:t.jsx("svg",{className:"w-6 h-6 text-violet-500",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})]}),t.jsx(bj,{}),t.jsx("p",{className:"mb-4",children:"沉浸式学习体验。通过可在线编辑的案例，你能获得沉浸式的学习体验"}),t.jsx(j5,{}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3",children:"其他课程"}),t.jsxs("div",{className:"flex justify-between flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6",children:[t.jsx(Pc,{title:"私人面试指导",desc:"前端专家：这波能反杀，为您提供全网最专业的面试辅导，结合个人目标与工作经验，时长 2 ~ 3 小时，一次沟通，解决所有问题",href:"https://appxw863qeq2150.h5.xiaoeknow.com/v1/goods/goods_detail/course_2YWwycNZDt3u59naEs57g0gGa0H?",className:"flex-1"}),t.jsx(Pc,{title:"keepCoder",desc:"资深前端进阶通道，1V1深度沟通辅导，聚焦学习方法，深挖知识体系，深挖应用场景，凝聚核心竞争力",href:"https://www.yuque.com/coreadvance/ar2my1/apk8cr",className:"flex-1 bg-orange-100 border-orange-300"}),t.jsx(Pc,{title:"keepCharts",desc:"聚焦技术深度，手写基于 Canvas 的渲染引擎，并在此基础之上实现可视化图表等应用层库，打造自己牢不可破的核心竞争力",href:"https://www.yuque.com/coreadvance/ar2my1/em5rrk6p1umptsxw",className:"flex-1 bg-green-200 border-green-600"})]}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsx(xu,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",loading:"lazy",crossorigin:"anonymous",async:!0}),t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsxs("div",{className:"flex justify-between pb-10",children:[t.jsxs("span",{className:"text-gray-400",children:["© Copyright 2024.",t.jsx("a",{href:"https://beian.miit.gov.cn/",target:"_blank",children:"这波能反杀."}),t.jsx("a",{href:"https://beian.miit.gov.cn/",target:"_blank",children:"粤ICP备2024222174号"})]}),t.jsxs("div",{className:"flex",children:[t.jsx("div",{className:"ml-3",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})})}),t.jsx("div",{className:"ml-3",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"})})}),t.jsx("div",{className:"ml-3",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})})})]})]})]})]})}function Q0(n){const{label:e,type:s,primary:a,warning:l,danger:r,newer:c,hard:i,className:o}=n,u=se("text-sm text-gray-500 border px-3 rounded-full",{"bg-blue-100 text-blue-500 border-blue-500":!!a,"bg-green-100 text-green-500 border-green-500":!!c,"bg-red-100 text-red-500 border-red-500":!!r,"bg-orange-100-100 text-orange-500 border-orange-500":!!r,"bg-fuchsia-100 text-fuchsia-500 border-fuchsia-500":!!i},o);return t.jsx("label",{className:Pe(u),children:e})}const N5=`import {Suspense, useState, useTransition} from 'react'
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
`,S5=`const random = [
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
`,w5=`import { use } from 'react'

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
`,_5=`document.documentElement.style.fontSize = '14px'

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
`,k5=`import {twMerge} from 'tailwind-merge'
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
`;function T(n){const{reload:e,className:s}=n,[a,l]=h.useState(!0),r=h.useRef(null);function c(){const d=r.current.getBoundingClientRect().height;r.current.style.minHeight=`${d}px`,l(!1),setTimeout(()=>{l(!0)},200)}const o=se("border rounded-md my-4",s);return t.jsxs("div",{className:o,children:[t.jsxs("div",{className:"flex border-b border-gray-200 bg-gray-100 items-center px-3 py-2 text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"})}),t.jsx("div",{className:"ml-2 text-sm",children:"预览"})]}),t.jsx("div",{className:"p-4",ref:r,children:a?n.children:null}),e?t.jsx("div",{className:"mx-4 mb-4 text-right",children:t.jsx(le,{signal:!0,onClick:c,children:"reload"})}):null]})}const J0=n=>{const{isPending:e,response:s}=n,a=h.use(s);return t.jsx("div",{className:"text-sm leading-6 transition border border-blue-100 shadow rounded-md p-4 w-full mt-4",style:{opacity:e?.5:1},children:a.value})};document.documentElement.style.fontSize="14px";function K0(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsx("div",{className:"animate-pulse",children:t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})})})}const C5=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var W0=new Headers;W0.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var R5={method:"GET",headers:W0,redirect:"follow",data:"hex"};const E5="https://echo.apifox.com/delay/1",no=async()=>{await fetch(E5,R5);const n=Math.floor(Math.random()*10)%5;return{value:C5[n]}};function M5(){const n=no();return t.jsx(h.Suspense,{fallback:t.jsx(K0,{}),children:t.jsx(J0,{response:n})})}function bm(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(M5,{})}),`
`,t.jsxs(e.p,{children:["大家可以自行感受一下新的开发方式与以前基于 ",t.jsx(e.code,{children:"useEffect"})," 请求数据有什么不同之处。我在右侧案例演示中，还提供了更完整更具代表性的案例。大家可以先瞄一眼体会一下。案例代码有对应的完整演示效果，你可以通过修改代码观察案例的变化。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注意：一套成熟架构思维，不是使用一个简单的方案解决某一个问题，而是要基于这套思维去解决项目中的绝大多数场景。因此我们一定要结合大量的场景去理解一套项目架构思维。"}),`
`]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"5"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"合集介绍"})}),`
`,t.jsxs(e.p,{children:["本合集名为：",t.jsx(e.strong,{children:"「React19 全解」"})," ，是 ",t.jsx(e.strong,{children:"「React 知命境」"})," 的续集。首发与公众号",t.jsx(e.a,{href:"",children:"这波能反杀"}),"。后为了提高大家的学习体验，迁移至此处。在这里我基于",t.jsx(e.strong,{children:"沉浸式"}),"的学习体验，内置了大量可操作可交互的真实案例。摒弃了使用截图演示案例的方式。除此之外，为了让大家能够获得更好的学习效果，每一个案例都精心设计了 UI。在细节上精心打磨，争取让大家能够所学即所得。快速掌握 React19."]}),`
`,t.jsx(e.p,{children:"希望大家能够在这里获得全网最好的学习体验！Let's go."})]})}function A5(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(bm,{...n})}):bm(n)}const sc="U2FsdGVkX3xOPhN009";function T5(){function n(e){localStorage.setItem("active_code",e.get("code")),location.reload()}return t.jsxs("div",{className:"pt-4",children:[t.jsx("div",{className:"rounded-md bg-yellow-50 p-4 border border-yellow-400",children:t.jsxs("div",{className:"flex",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-yellow-700",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),t.jsxs("div",{className:"ml-3",children:[t.jsx("h3",{className:"text-sm font-medium text-yellow-800",children:"Attention needed"}),t.jsx("div",{className:"mt-2 text-sm text-yellow-700",children:t.jsx("p",{children:"你还未输入激活码，或者激活码已过期，请重新输入即可访问"})})]})]})}),t.jsxs("form",{action:n,className:"flex items-center justify-between",children:[t.jsx(yn,{name:"code",placeholder:"Please input your active code",className:"flex-1 mr-4",pattern:sc}),t.jsx("button",{type:"submit",children:"确认"})]})]})}Bt.registerLanguage("javascript",fu);function $5({className:n,...e}){const s=/language-(\w+)/.exec(n||"");return s?t.jsx(Bt,{language:s[1],PreTag:"div",...e,style:hu}):t.jsx("code",{className:n,...e})}function ae(n){const{renderArticle:e,files:s,caseRender:a,isAuth:l=!0}=n,r=localStorage.getItem("active_code"),c=l?r===sc:!0;let i=t.jsx(T5,{});return c&&(i=t.jsxs(t.Fragment,{children:[a?t.jsx(T,{reload:!0,className:"mt-0",children:a}):null,t.jsx("div",{className:"md:hidden",children:t.jsx(In,{files:s,className:"h-full rounded-md border-gray-200"})}),e($5)]})),t.jsxs("div",{className:"md:flex h-[calc(100vh_-_8rem)] overflow-hidden mx-auto w-full max-w-[1244px]",children:[t.jsxs("div",{className:"md:flex-1 h-full overflow-scroll md:pr-4 keep w-full max-w-[768px]",children:[i,t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsx(xu,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]}),t.jsx("div",{className:"hidden md:block md:flex-1 top-[8rem] h-full overflow-y-auto max-w-[768px]",children:t.jsx(In,{files:s,className:"h-full rounded-md border-gray-200"})})]})}function D5(n){const{className:e,primary:s,danger:a,sm:l,lg:r,success:c,...i}=n,m=Pe(se("rounded-md border border-transparent font-medium cursor-pointer transition","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":c,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r}));return t.jsx("button",{className:m,...i,children:n.children})}function L5(){const[n,e]=h.useState(no),[s,a]=h.useTransition();function l(){a(()=>{e(no())})}return t.jsxs("div",{children:[t.jsx(D5,{onClick:l,disabled:s,children:"点击更新"}),t.jsx(h.Suspense,{fallback:t.jsx(K0,{}),children:t.jsx(J0,{response:n,isPending:s})})]})}const B5={"App.js":N5,"api.js":S5,"Message.jsx":w5,"Skeleton.jsx":_5,"Button.jsx":k5};function O5(){return t.jsx(ae,{files:B5,renderArticle:n=>t.jsx(A5,{components:{code:n}}),caseRender:t.jsx(L5,{})})}const z5=`import React, { useEffect, useState, Suspense, use } from 'react';
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
`,U5=`import {twMerge} from 'tailwind-merge'
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
`,H5=`const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}
`,q5=`// header
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
`;function ym(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"这篇文章文字内容不会很多，但是是整个专栏最重要的部分之一。"}),`
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
`]})]})}function V5(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ym,{...n})}):ym(n)}document.documentElement.style.fontSize="14px";function X5(n){const{className:e,primary:s,danger:a,sm:l,lg:r,success:c,...i}=n,m=Pe(se("rounded-md border border-transparent font-medium cursor-pointer transition","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":c,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r}));return t.jsx("button",{className:m,...i,children:n.children})}function G5(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})})}const Z5=3,Y5=`https://randomuser.me/api/?results=${Z5}&inc=name,gender,email,nat,picture&noinfo`,Nm=async()=>(await fetch(Y5)).json(),Q5=()=>{const[n,e]=h.useState(()=>[Nm()]),s=()=>{n.push(Nm()),e([...n])};return t.jsxs(t.Fragment,{children:[n.map((a,l)=>t.jsx(h.Suspense,{fallback:t.jsx(G5,{}),children:t.jsx(J5,{promise:a})},`hello ${l}`)),t.jsx("div",{className:"text-center my-4",children:t.jsx(X5,{onClick:s,children:"loading more"})})]})};function J5({promise:n}){const{results:e}=h.use(n);return t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"border-b border-dashed py-4 mx-4 items-center flex",children:[t.jsx("img",{className:"w-14 h-14 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"a design language for background applications, is refined by Ant UED Team"})]})]},s.name.last))})}const K5={"App.js":z5,"api.js":H5,"Button.jsx":U5,"Skeleton.jsx":q5};function W5(){return t.jsx(ae,{files:K5,renderArticle:n=>t.jsx(V5,{components:{code:n}}),caseRender:t.jsx(Q5,{})})}function Sm(n){const e={blockquote:"blockquote",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:t.jsx(e.img,{src:"https://files.mdnice.com/user/3925/b4869674-83ae-4ed2-a70d-34574d4451da.png",alt:""})}),`
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
`,t.jsx(e.p,{children:"最后重启项目即可。"})]})}function P5(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Sm,{...n})}):Sm(n)}const F5=`import { useState } from 'react'
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
`,I5=`#root {
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
`,e4=`:root {
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
`,n4=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
`,t4=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
`,s4={"App.js":F5,"App.css":I5,"index.css":e4,"vite.svg":n4,"react.svg":t4};function a4(){return t.jsx(ae,{files:s4,renderArticle:n=>t.jsx(P5,{components:{code:n}})})}const l4=`import React, { useEffect, useState, Suspense, use } from 'react';
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
`,r4=`import {twMerge} from 'tailwind-merge'
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
`,c4=`const random = [
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
`,i4=`export default function Skeleton(props) {
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
`,gu=n=>{const e=n.message;return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},o4=new Promise(n=>{n({value:"Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook."})});function u4(){const n=h.use(o4);return t.jsx(gu,{message:n.value})}document.documentElement.style.fontSize="14px";function P0(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:c,success:i,...o}=n,p=Pe(se("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":i,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":c,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,c&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}function ac(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const d4=new Promise(n=>{n({value:"Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook."})});function m4(){const[n,e]=h.useState(!1);let s={value:""};return n||(s=h.use(d4)),t.jsxs(t.Fragment,{children:[n?t.jsx(ac,{}):t.jsx(gu,{message:s.value}),t.jsx("div",{className:"mt-4 text-right",children:t.jsx(P0,{signal:!0,onClick:()=>e(!n),children:"切换"})})]})}const p4=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var F0=new Headers;F0.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var f4={method:"GET",headers:F0,redirect:"follow",data:"hex"};const h4="https://echo.apifox.com/delay/1",I0=async()=>{await fetch(h4,f4);const n=Math.floor(Math.random()*10)%5;return{value:p4[n]}};function x4(){const[n,e]=h.useState(!0);return t.jsx(h.Suspense,{fallback:t.jsx("div",{}),children:t.jsx("div",{children:n?t.jsx(g4,{}):t.jsx(ac,{})})})}function g4(){let[n,e]=h.useState(!0);const s=I0().then(l=>(e(!1),l));let a={value:"",icon_url:""};return n||(a=h.use(s)),n?t.jsx(ac,{}):t.jsx(gu,{message:a.value})}function wm(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:[t.jsx(e.code,{children:"use()"})," 是 React19 提升异步开发体验最重要的 hook。也是让 useEffect 重要性大幅度削弱的主要原因。"]}),`
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
`,t.jsx(T,{children:t.jsx(u4,{})}),`
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
`,t.jsx(T,{children:t.jsx(m4,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(x4,{})}),`
`,t.jsx(e.p,{children:"点击按钮可以重新加载执行该组件。我们可以观察一下效果，在目前的 React 版本中，并不能合理的处理好这种存在风险的读取方式，虽然我们最终读取到了 promise 中的值，内容也顺利渲染出来了，但是中间存在一次明显的闪烁。表现为包括按钮在内的内容全部消失，这种体验非常的糟糕。"}),`
`,t.jsx(e.p,{children:"因此，在实践中，如果我们要读取异步请求的 promise 中的值，必须结合 Suspense 来处理。在右侧的案例中，我们列举了一个 use + Suspense 合理处理异步请求的案例，大家可以先暂时了解一下，在后续的章节中，我们详细学习了 Suspense 之后再来进行案例分析。"})]})}function v4(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(wm,{...n})}):wm(n)}function j4(){const n=I0();return t.jsxs(t.Fragment,{children:[t.jsx(h.Suspense,{fallback:t.jsx(ac,{}),children:t.jsx(b4,{promise:n})}),t.jsx("div",{className:"mt-8 text-center",children:t.jsx(P0,{signal:!0,children:"点击下方刷新按钮可重置演示"})})]})}const b4=n=>{const e=h.use(n.promise);return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e.value})]})]})},y4={"App.js":l4,"api.js":c4,"Button.jsx":r4,"Skeleton.jsx":i4};function N4(){return t.jsx(ae,{files:y4,renderArticle:n=>t.jsx(v4,{components:{code:n}}),caseRender:t.jsx(j4,{})})}const S4=`import React, { useEffect, useState, Suspense, use } from 'react';
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
`,w4=`import {twMerge} from 'tailwind-merge'
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
`,_4=`const random = [
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
`,k4=`export default function Skeleton(props) {
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
`,ex=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},C4=()=>new Promise(n=>{n({value:"React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch."})});function R4(){const n=C4();return t.jsx(h.Suspense,{fallback:"",children:t.jsx(E4,{promise:n})})}function E4(n){const{value:e}=h.use(n.promise);return t.jsx(ex,{message:e})}document.documentElement.style.fontSize="14px";function M4(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:c,success:i,...o}=n,p=Pe(se("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":i,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":c,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,c&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}function vu(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const A4=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var nx=new Headers;nx.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var T4={method:"GET",headers:nx,redirect:"follow",data:"hex"};const $4="https://echo.apifox.com/delay/1",tx=async()=>{await fetch($4,T4);const n=Math.floor(Math.random()*10)%5;return{value:A4[n]}};function _m(){const n=tx();return t.jsx(h.Suspense,{fallback:t.jsx(vu,{}),children:t.jsx(D4,{promise:n})})}const D4=n=>{const e=h.use(n.promise);return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e.value})]})]})};function L4(){return t.jsx(h.Suspense,{fallback:t.jsx(vu,{}),children:t.jsx(ex,{message:"这是一个普通的 UI 组件，Skeleton 组件不会有任何渲染机会，直接渲染 Message 组件",title:"Primary"})})}function km(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"0"})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(R4,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(_m,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(L4,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(_m,{})}),`
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
`,t.jsx(e.p,{children:"这是我们之前版本的最佳实践。注意体会他们之间的区别。相似，但却不同。我们后续会列举更多案例，尽可能用新的开发思路去复现开发过程中会出现的场景。"})]})}function B4(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(km,{...n})}):km(n)}function O4(){const[n,e]=h.useState({value:""}),[s,a]=h.useState(!0);return h.useEffect(()=>{tx().then(l=>{e(l),a(!1)})},[]),s?t.jsx(vu,{}):t.jsxs(t.Fragment,{children:[t.jsx(z4,{message:n.value}),t.jsx("div",{className:"mt-8 text-center",children:t.jsx(M4,{signal:!0,children:"点击下方刷新按钮可重置演示"})})]})}const z4=n=>{const e=n.message;return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:"a new message!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},U4={"App.js":S4,"api.js":_4,"Button.jsx":w4,"Skeleton.jsx":k4};function H4(){return t.jsx(ae,{files:U4,renderArticle:n=>t.jsx(B4,{components:{code:n}}),caseRender:t.jsx(O4,{})})}const q4=`import {use, useState, Suspense} from 'react'
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
`,V4=`import {twMerge} from 'tailwind-merge'
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

export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
}
`,G4=`export default function Skeleton(props) {
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
`,Z4=`const Message = (props) => {
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
`,rl=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));let a="flex border border-blue-100 p-4 rounded-md shadow";return e?t.jsxs("div",{className:a,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]}):t.jsxs("div",{className:`${a} justify-center items-center flex-col text-gray-500`,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),t.jsx("div",{className:"mt-2",children:"no data."})]})};function ju(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function bu(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:c,success:i,...o}=n,p=Pe(se("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":i,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":c,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,c&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const Y4=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var sx=new Headers;sx.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var Q4={method:"GET",headers:sx,redirect:"follow",data:"hex"};const J4="https://echo.apifox.com/delay/1",yu=async()=>{await fetch(J4,Q4);const n=Math.floor(Math.random()*10)%5;return{value:Y4[n]}};function K4(){const[n,e]=h.useState(null);function s(){e(yu())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(bu,{onClick:s,children:"更新数据"})}),t.jsx(h.Suspense,{fallback:t.jsx(ju,{}),children:t.jsx(W4,{promise:n})})]})}function W4(n){if(!n.promise)return t.jsx(rl,{message:""});const{value:e}=h.use(n.promise);return t.jsx(rl,{message:e})}function P4(){const[n,e]=h.useState(Promise.resolve({value:""}));function s(){e(yu())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(bu,{onClick:s,children:"更新数据"})}),t.jsx(h.Suspense,{fallback:t.jsx(ju,{}),children:t.jsx(F4,{promise:n})})]})}function F4(n){const{value:e}=h.use(n.promise);return t.jsx(rl,{message:e})}function Cm(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"接下来，我们将会以大量的实践案例来展开 React 19 新 hook 的运用。"}),`
`,t.jsxs(e.p,{children:["本文模拟的实践案例为",t.jsx(e.strong,{children:"点击按钮更新数据"}),"。这在开发中是一个非常常见的场景。"]}),`
`,t.jsx(e.p,{children:"案例完成之后的最终演示效果图如下。案例的视觉表现为：初始化时没有请求，所以组件显示为空数据样式。当我们点击按钮时请求一条数据，数据更新，请求成功之后显示更新之后的内容。"}),`
`,t.jsx(T,{reload:!0,children:t.jsx(K4,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(P4,{})}),`
`,t.jsx(e.p,{children:"这种写法有一个很小的瑕疵，就是在初始化时，也不可避免的显示了 Skeleton 组件，实际上是不需要的。因此具体采用哪种写法，要依据实践中的需求而定。"})]})}function I4(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Cm,{...n})}):Cm(n)}function e3(){const[n,e]=h.useState(null);function s(){e(yu())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(bu,{onClick:s,children:"更新数据"})}),t.jsx(h.Suspense,{fallback:t.jsx(ju,{}),children:t.jsx(n3,{promise:n})})]})}function n3(n){if(!n.promise)return t.jsx(rl,{message:""});const{value:e}=h.use(n.promise);return t.jsx(rl,{message:e})}const t3={"App.js":q4,"api.js":X4,"Message.jsx":Z4,"Button.jsx":V4,"Skeleton.jsx":G4};function s3(){return t.jsx(ae,{files:t3,renderArticle:n=>t.jsx(I4,{components:{code:n}}),caseRender:t.jsx(e3,{})})}const a3=`import {use, useState, Suspense} from 'react'
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
`,l3=`import {twMerge} from 'tailwind-merge'
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
`,r3=`const random = [
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
`,c3=`export default function Skeleton(props) {
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
`,i3=`const Message = (props) => {
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
`,Nu=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));let a="flex border border-blue-100 p-4 rounded-md shadow";return e?t.jsxs("div",{className:a,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]}):t.jsxs("div",{className:`${a} justify-center items-center flex-col text-gray-500`,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),t.jsx("div",{className:"mt-2",children:"no data."})]})};function Su(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function wu(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:c,success:i,...o}=n,p=Pe(se("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":i,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":c,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,c&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const o3=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var ax=new Headers;ax.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var u3={method:"GET",headers:ax,redirect:"follow",data:"hex"};const d3="https://echo.apifox.com/delay/1",Js=async()=>{await fetch(d3,u3);const n=Math.floor(Math.random()*10)%5;return{value:o3[n]}};function m3(){const[n,e]=h.useState({value:""}),[s,a]=h.useState(!0);h.useEffect(()=>{Js().then(r=>{e(r),a(!1)})},[]);function l(){a(!0),Js().then(r=>{e(r),a(!1)})}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(wu,{onClick:l,children:"更新数据"})}),s?t.jsx(Su,{}):t.jsx(Nu,{message:n.value})]})}function p3(){const[n,e]=h.useState(Js());function s(){e(Js())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(wu,{onClick:s,children:"更新数据"})}),t.jsx(h.Suspense,{fallback:t.jsx(Su,{}),children:t.jsx(f3,{promise:n})})]})}function f3(n){const{value:e}=h.use(n.promise);return t.jsx(Nu,{message:e})}function Rm(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:["在上一章的基础之上，我们做一个小的需求变动。上一章的案例要求我们不要初始化时请求一条数据，因此，默认渲染结果是 ",t.jsx(e.code,{children:"no data"})]}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(m3,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(p3,{})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"非常的方便省事。"})}),`
`,t.jsxs(e.p,{children:["最后需要注意的是一个小的细节，如果不考虑 Compiler 编译之后的代码去缓存初始化时的 ",t.jsx(e.code,{children:"getMessage()"}),"，那么每次更新组件时，该方法都会执行一次，因此，会导致冗余的接口请求。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"使用 Compiler 编译之后，这段代码会被缓存下来而不会重复执行"}),`
`]}),`
`,t.jsx(e.p,{children:"因此，最好的方式是进一步调整一下，利用 useState 的初始化机制修改如下"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-diff",children:`- const [promise, update] = useState(getMessage())
+ const [promise, update] = useState(getMessage)
`})}),`
`,t.jsx(e.p,{children:"这样，即使不用 Compiler 编译缓存，也不会出现冗余请求的情况。完整的代码和演示案例请在右侧模块中查看。"})]})}function h3(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Rm,{...n})}):Rm(n)}function x3(){const[n,e]=h.useState(Js);function s(){e(Js())}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(wu,{onClick:s,children:"更新数据"})}),t.jsx(h.Suspense,{fallback:t.jsx(Su,{}),children:t.jsx(g3,{promise:n})})]})}function g3(n){const{value:e}=h.use(n.promise);return t.jsx(Nu,{message:e})}const v3={"App.js":a3,"api.js":r3,"Message.jsx":i3,"Button.jsx":l3,"Skeleton.jsx":c3};function j3(){return t.jsx(ae,{files:v3,renderArticle:n=>t.jsx(h3,{components:{code:n}}),caseRender:t.jsx(x3,{})})}const b3=`import {use, useState, Suspense, useEffect} from 'react'
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
`,y3=`import {twMerge} from 'tailwind-merge'
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
`,N3=`const random = [
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
`,S3=`export default function Skeleton(props) {
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
`,w3=`const Userinfo = (props) => {
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
`,lx=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.username||"").replace(/\\u/gi,"%u")),a=n.index||0;return t.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md my-4 items-start",children:[t.jsx("img",{className:"w-10",src:`https://api.dicebear.com/7.x/miniavs/svg?seed=${a}`,alt:""}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"no name"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})};function rx(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function cx(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:c,success:i,...o}=n,p=Pe(se("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":i,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":c,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,c&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const _3=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var ix=new Headers;ix.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var k3={method:"GET",headers:ix,redirect:"follow",data:"hex"};const C3="https://echo.apifox.com/delay/1",Dr=async()=>{await fetch(C3,k3);const n=Math.floor(Math.random()*10)%5;return{value:_3[n],id:R3()}};function R3(){for(var n=[],e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=0;s<16;s++)n[s]=e.substr(Math.floor(Math.random()*16),1);return n[8]="-",n.join("")}function E3(){const[n,e]=h.useState([]);h.useEffect(()=>{e([...n,{type:"loading"}]),Dr().then(a=>{e([...n,a])})},[]);function s(){e([...n,{type:"loading"}]),Dr().then(a=>{e([...n,a])})}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(cx,{onClick:s,children:"新增数据"})}),t.jsx(M3,{list:n})]})}function M3(n){const e=n.list;return t.jsx(t.Fragment,{children:e.map((s,a)=>s.type==="loading"?t.jsx(rx,{},`hello ${a}`):t.jsx(lx,{index:a,username:s.id,message:s.value},`h${a}`))})}function Em(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"这一章我们要学习的是一个新增加载项到列表的案例。首先我们会通过接口获取到一条数据，然后将该数据渲染到列表中。你可以先通过右侧预览查看最终演示效果。"}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(E3,{})}),`
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
`,t.jsx(e.p,{children:"希望大家能够通过这个案例，进一步感受到新的开发思维的强大之处。"})]})}function A3(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Em,{...n})}):Em(n)}function T3(){const[n,e]=h.useState(()=>[Dr()]);function s(){e([...n,Dr()])}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(cx,{onClick:s,children:"新增数据"})}),n.map((a,l)=>t.jsx(h.Suspense,{fallback:t.jsx(rx,{}),children:t.jsx($3,{promise:a,index:l})},`hello ${l}`))]})}function $3(n){const e=h.use(n.promise);return t.jsx(lx,{index:n.index,username:e.id,message:e.value})}const D3={"App.js":b3,"api.js":N3,"Userinfo.jsx":w3,"Button.jsx":y3,"Skeleton.jsx":S3};function L3(){return t.jsx(ae,{files:D3,renderArticle:n=>t.jsx(A3,{components:{code:n}}),caseRender:t.jsx(T3,{})})}const B3=`import { useState, Suspense } from 'react';
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
`,z3=`const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}
`,U3=`// header
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
`,H3=`import { use } from 'react';
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
`;function Mm(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"我们可以在思维上将上一节课的解决方案扩展到分页列表中，加载更多的场景。"}),`
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
`]})]})}function q3(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Mm,{...n})}):Mm(n)}function V3({promise:n}){const{results:e}=h.use(n);return t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border-b py-4 mx-4 items-center border-dashed",children:[t.jsx("img",{className:"w-14 h-14 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 repo, a design language for background applications"})]})]},s.name.last))})}document.documentElement.style.fontSize="14px";function X3(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:c,success:i,...o}=n,p=Pe(se("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":i,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":c,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,c&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}function G3(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})})}const Z3=3,Y3=`https://randomuser.me/api/?results=${Z3}&inc=name,gender,email,nat,picture&noinfo`,Am=async()=>(await fetch(Y3)).json(),Q3=()=>{const[n,e]=h.useState(()=>[Am()]),s=()=>{e([...n,Am()])};return t.jsxs(t.Fragment,{children:[n.map((a,l)=>t.jsx(h.Suspense,{fallback:t.jsx(G3,{}),children:t.jsx(V3,{promise:a})},`hello ${l}`)),t.jsx("div",{className:"text-center my-4",children:t.jsx(X3,{onClick:s,children:"loading more"})})]})},J3={"App.js":B3,"api.js":z3,"List.jsx":H3,"Button.jsx":O3,"Skeleton.jsx":U3};function K3(){return t.jsx(ae,{files:J3,renderArticle:n=>t.jsx(q3,{components:{code:n}}),caseRender:t.jsx(Q3,{})})}const W3=`import {useState, Suspense} from 'react'
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
`,P3=`export const fetchList = async (number) => {
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
`,F3=`document.documentElement.style.fontSize = '14px'

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
`,I3=`import { use } from 'react';
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
`,ey=`export default function Input(props) {
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
`;document.documentElement.style.fontSize="14px";function ny(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Tm=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json();function ty({promise:n}){const{results:e}=h.use(n);return console.log("我会执行几次呢"),t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}function sy(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function ay(){const[n,e]=h.useState(()=>Tm(5));function s(a){const l=a.target.value.length%10;e(Tm(l))}return t.jsxs("div",{children:[t.jsx(sy,{onChange:s,placeholder:"Enter something"}),t.jsx(h.Suspense,{fallback:t.jsx(ny,{}),children:t.jsx(ty,{promise:n})})]})}function $m(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(T,{children:t.jsx(ay,{})}),`
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
`,t.jsx(e.p,{children:"其他的逻辑基本保持不变，完整代码和演示效果请在右侧区域查看。请务必结合调试工具中的网络请求一起观察演示效果。"})]})}function ly(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx($m,{...n})}):$m(n)}const ry={"App.js":W3,"api.js":P3,"List.jsx":I3,"Input.jsx":ey,"Skeleton.jsx":F3};function cy(){return t.jsx(ae,{files:ry,renderArticle:n=>t.jsx(ly,{components:{code:n}})})}const iy=`import {useState, Suspense} from 'react'
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
`,oy=`export const fetchList = async (number) => {
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
`,uy=`document.documentElement.style.fontSize = '14px'

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
`,dy=`import { use } from 'react';
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
`,my=`function classNames(...classes) {
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
`;function py(...n){return n.filter(Boolean).join(" ")}function ox({tabs:n,onSwitch:e}){return t.jsxs("div",{children:[t.jsxs("div",{className:"hidden",children:[t.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),t.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:n.find(s=>s.current).name,onChange:s=>e(s.target.selectedIndex),children:n.map(s=>t.jsx("option",{children:s.name},s.name))})]}),t.jsx("div",{className:"block",children:t.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:n.map((s,a)=>t.jsx("a",{href:s.href,className:py(s.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":s.current?"page":void 0,onClick:l=>{l.preventDefault(),e(a)},children:s.name},s.name))})})]})}const Vl=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function fy(){const[n,e]=h.useState(0);function s(a){Vl[n].current=!1,Vl[a].current=!0,e(a)}return t.jsxs("div",{children:[t.jsx(ox,{tabs:Vl,onSwitch:s}),t.jsxs("div",{className:"mt-4 text-gray-500",children:["当前选中：",Vl[n].name]})]})}function Dm(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"Tab 切换的过程中，请求接口也是日常开发中非常常见的交互方式。不过 tabs 切换的情况比较多，很考验开发者的个人能力。我们准备了三个不同的场景以供大家直接学习。"}),`
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
`,t.jsx(T,{children:t.jsx(fy,{})}),`
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
`,t.jsx(e.p,{children:"这里我们依然需要取消上一次请求是因为可能有的使用者会连续快速切换，我们可以通过取消为完成请求的方式让页面响应变得合理与流畅。完整的案例请看右侧区域。"})]})}function hy(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Dm,{...n})}):Dm(n)}document.documentElement.style.fontSize="14px";function xy(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Lm=n=>{let e=new AbortController,s=e.signal;const a=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(r=>{l(r.json())}).catch(()=>{console.log("接口成功取消！")})});return a.cancel=()=>{e&&e.abort()},a};function gy({promise:n}){const{results:e}=h.use(n);return console.log("我会执行几次呢"),t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}const Fc=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function vy(){const[n,e]=h.useState(0),[s,a]=h.useState(()=>Lm(5));function l(r){Fc[n].current=!1,Fc[r].current=!0,e(r),s.cancel();const c=Math.floor(Math.random()*10);a(Lm(c))}return t.jsxs("div",{children:[t.jsx(ox,{tabs:Fc,onSwitch:l}),t.jsx(h.Suspense,{fallback:t.jsx(xy,{}),children:t.jsx(gy,{promise:s})})]})}const jy={"App.js":iy,"api.js":oy,"List.jsx":dy,"Tabs.jsx":my,"Skeleton.jsx":uy};function by(){return t.jsx(ae,{files:jy,renderArticle:n=>t.jsx(hy,{components:{code:n}}),caseRender:t.jsx(vy,{})})}const yy=`import {useState, Suspense, useRef} from 'react'
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
`,Ny=`export const fetchListWithCancel = (number) => {
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
`,Sy=`document.documentElement.style.fontSize = '14px'

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
`,wy=`import { use } from 'react';
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
`,_y=`export default function Input(props) {
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
`,ky=`import clsx from 'clsx'
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
`,Cy=`import clsx from 'clsx'
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
`,Ry=`function classNames(...classes) {
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
`;function Ey(...n){return n.filter(Boolean).join(" ")}function My({tabs:n,onSwitch:e}){return t.jsxs("div",{children:[t.jsxs("div",{className:"hidden",children:[t.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),t.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:n.find(s=>s.current).name,onChange:s=>e(s.target.selectedIndex),children:n.map(s=>t.jsx("option",{children:s.name},s.name))})]}),t.jsx("div",{className:"block",children:t.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:n.map((s,a)=>t.jsx("a",{href:s.href,className:Ey(s.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":s.current?"page":void 0,onClick:()=>e(a),children:s.name},s.name))})})]})}document.documentElement.style.fontSize="14px";function ux(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const to=n=>{let e=new AbortController,s=e.signal;const a=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(r=>{l(r.json())}).catch(()=>{console.log("接口成功取消！")})});return a.cancel=()=>{e&&e.abort()},a};function dx({promise:n}){const{results:e}=h.use(n);return t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}function Ic(n){const[e,s]=h.useState(()=>to(5)),a=se({hidden:!n.selected});return t.jsx("div",{className:a,children:t.jsx(h.Suspense,{fallback:t.jsx(ux,{}),children:t.jsx(dx,{promise:e})})})}function Ay(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function Ty(n){const[e,s]=h.useState(()=>to(10));function a(r){e.cancel();const c=r.target.value.length%10;s(to(c))}const l=se("pt-4",{hidden:!n.selected});return t.jsxs("div",{className:l,children:[t.jsx(Ay,{onChange:a,placeholder:"Enter something"}),t.jsx(h.Suspense,{fallback:t.jsx(ux,{}),children:t.jsx(dx,{promise:e})})]})}function $y(){const[n,e]=h.useState(0),s=h.useRef([{name:"My Account",href:"#",current:!0,element:Ic},{name:"Company",href:"#",current:!1,element:Ic},{name:"Team Members",href:"#",current:!1,element:Ic},{name:"Billing",href:"#",current:!1,element:Ty}]),a=h.useRef(new Set([s.current[n]]));function l(c){s.current[n].current=!1,s.current[c].current=!0;const i=s.current[c];a.current.has(i)||a.current.add(i),e(c)}let r=Array.from(a.current);return t.jsxs("div",{children:[t.jsx(My,{tabs:s.current,onSwitch:l}),r.map((c,i)=>t.jsx(c.element,{selected:c.current},`z-${i}`))]})}function Bm(n){const e={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(T,{reload:!0,children:t.jsx($y,{})}),`
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
`,t.jsx(e.p,{children:"完整代码与案例演示请看右侧区域。"})]})}function Dy(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Bm,{...n})}):Bm(n)}const Ly={"App.js":yy,"Account.jsx":ky,"Search.jsx":Cy,"api.js":Ny,"Tabs.jsx":Ry,"List.jsx":wy,"Input.jsx":_y,"Skeleton.jsx":Sy};function By(){return t.jsx(ae,{files:Ly,renderArticle:n=>t.jsx(Dy,{components:{code:n}})})}const Oy=`import {useState, Suspense, useCallback} from 'react'
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
`,zy=`export const fetchList = async (number) => {
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

`,Uy=`document.documentElement.style.fontSize = '14px'

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
`,Hy=`import { use, useEffect } from 'react';

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
`,qy=`function classNames(...classes) {
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
`;document.documentElement.style.fontSize="14px";function Vy(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Om=n=>{let e=new AbortController,s=e.signal;const a=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(r=>{localStorage.setItem("modal","xxx"),l(r.json())}).catch(()=>{console.log("接口成功取消！")})});return a.cancel=()=>{e&&e.abort()},a};function zm(...n){return n.filter(Boolean).join(" ")}function Xy({tabs:n,onSwitch:e}){return t.jsx("div",{children:t.jsx("div",{className:"border-b border-gray-200",children:t.jsx("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:n.map((s,a)=>t.jsxs("a",{href:"#",onClick:()=>e(a),className:zm(s.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700","flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"),"aria-current":s.current?"page":void 0,children:[s.name,s.count?t.jsx("span",{className:zm(s.current?"bg-indigo-100 text-indigo-600":"bg-gray-100 text-gray-900","ml-3 rounded-full px-2.5 py-0.5 text-xs font-medium inline-block"),children:s.count}):null]},s.name))})})})}function Gy({promise:n,onComplete:e}){const{results:s}=h.use(n);return h.useEffect(()=>{e&&e(s.length)},[s.length]),t.jsx("div",{children:s.map((a,l)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:a.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:a.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${l}`))})}const Zy=[{name:"Applied",href:"#",count:0,current:!0},{name:"Phone Screening",href:"#",count:0,current:!1},{name:"Interview",href:"#",count:0,current:!1},{name:"Offer",href:"#",count:0,current:!1},{name:"Disqualified",href:"#",count:0,current:!1}];function Yy(){const[n,e]=h.useState(0),[s,a]=h.useState(()=>Om(5)),[l,r]=h.useState(Zy);function c(o){l.forEach(u=>{u.current=!1}),l[o].current=!0,e(o),r([...l]),s.cancel();const d=Math.floor(Math.random()*10);a(Om(d))}function i(o){l[n].count=o,r([...l])}return t.jsxs("div",{children:[t.jsx(Xy,{tabs:l,onSwitch:c}),t.jsx(h.Suspense,{fallback:t.jsx(Vy,{}),children:t.jsx(Gy,{promise:s,onComplete:i})})]})}function Um(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(T,{reload:!0,children:t.jsx(Yy,{})}),`
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
`,t.jsx(e.p,{children:"完整代码与案例演示查看右侧区域。"})]})}function Qy(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Um,{...n})}):Um(n)}const Jy={"App.js":Oy,"api.js":zy,"List.jsx":Hy,"Tabs.jsx":qy,"Skeleton.jsx":Uy};function Ky(){return t.jsx(ae,{files:Jy,renderArticle:n=>t.jsx(Qy,{components:{code:n}})})}const Wy=`import {use, useState, Suspense} from 'react'
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
`,Py=`export const fetchList = async (number) => {
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
`,Fy=`document.documentElement.style.fontSize = '14px'

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
`,Iy=`import { use } from 'react';
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
`;document.documentElement.style.fontSize="14px";function mx(n){return n.type==="card"?t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsx("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3].map((e,s)=>t.jsxs("div",{className:"flex-1",children:[t.jsx("div",{className:"rounded-md bg-slate-200  h-32"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"grid grid-cols-4 gap-4 mt-2",children:t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-3"})})]},`z-${s}`))})}):n.type==="header"?t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsx("div",{className:"space-y-3",children:t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})}):t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const px=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json();function e6({promise:n}){const{results:e}=h.use(n);return t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}function n6(){const[n,e]=h.useState(()=>px(3));return t.jsx("div",{children:t.jsx(h.Suspense,{fallback:t.jsx(mx,{type:"card"}),children:t.jsx(t6,{promise:n})})})}function t6(n){const{results:e}=h.use(n.promise),[s,a]=h.useState(()=>px(5));return t.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[t.jsx("div",{className:"flex space-x-4",children:e.map((l,r)=>t.jsxs("div",{className:"flex-1 overflow-hidden",children:[t.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${l.picture.large})`}}),t.jsx("div",{className:"mt-4 font-bold",children:l.name.last}),t.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:l.email})]},`z-${r}`))}),t.jsx("div",{className:"mt-8 text-gray-400 text-sm",children:"Account users"}),t.jsx(h.Suspense,{fallback:t.jsx(mx,{}),children:t.jsx(e6,{promise:s})})]})}function s6(){return t.jsx("div",{children:t.jsx(n6,{})})}function Hm(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(T,{reload:!0,children:t.jsx(s6,{})}),`
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
`,t.jsx(e.p,{children:"完整的代码和案例演示看右侧区域。"})]})}function a6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Hm,{...n})}):Hm(n)}const l6={"App.js":Wy,"api.js":Py,"List.jsx":Iy,"Skeleton.jsx":Fy};function r6(){return t.jsx(ae,{files:l6,renderArticle:n=>t.jsx(a6,{components:{code:n}})})}const c6=`import React, {useState, Suspense} from 'react'
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
`,i6=`import React from 'react';
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
`,o6=`const random = [
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
`,u6=`import React from 'react';
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
`,d6=`import React from 'react'

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
`,m6=`import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
`,p6=`export default function use(promise) {
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
`;function qm(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"可以看到，use + Suspense 的结合，可以极大的简化我们的开发代码，在开发体验上的提升是非常明显的。但是，如果由于客观原因，我们的项目无法升级到 React 19，那么我们就无法享受这种开发体验带来的提升了吗？"}),`
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
`,t.jsxs(e.p,{children:["在右侧代码中，我提供了一个完整的案例来使用 use，右侧案例的 React 运行版本是 ",t.jsx(e.code,{children:"react@16.14.0"})]})]})}function f6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(qm,{...n})}):qm(n)}document.documentElement.style.fontSize="14px";var h6=new Headers;h6.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");const x6={"App.js":c6,"index.js":m6,"api.js":o6,"use.js":p6,"Userinfo.jsx":d6,"Button.jsx":i6,"Skeleton.jsx":u6};function g6(){return t.jsx(ae,{files:x6,renderArticle:n=>t.jsx(f6,{components:{code:n}})})}const v6=`import { useRef } from 'react';
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

`,j6=`import { useRef, useImperativeHandle } from 'react';
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
`,b6=`import clsx from 'clsx'
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
`;function y6(){const n=h.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx("input",{ref:n,type:"text",className:"border p-2 rounded-md flex-1"}),t.jsx("button",{onClick:()=>n.current.focus(),className:"ml-3",children:"点击获取焦"})]})}function _u(n){const{ref:e,className:s,...a}=n,r=se("flex items-center border px-2 rounded-md text-gray-500",s);return t.jsxs("div",{className:Pe(r),children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{ref:e,className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...a})]})}function N6(){const n=h.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx(_u,{ref:n,type:"text",className:"flex-1"}),t.jsx("button",{onClick:()=>n.current.focus(),className:"ml-3",children:"点击获取焦"})]})}function S6(){const n=h.useRef(null);function e(){n.current.scrollAndFocusAddComment()}return t.jsxs(t.Fragment,{children:[t.jsx(le,{onClick:e,primary:!0,children:"Write a comment"}),t.jsx(w6,{ref:n})]})}const w6=({ref:n})=>{const e=h.useRef(null),s=h.useRef(null);return h.useImperativeHandle(n,()=>({scrollAndFocusAddComment(){e.current.scrollToBottom(),s.current.focus()}}),[]),t.jsxs(t.Fragment,{children:[t.jsx("article",{children:t.jsx("p",{children:"Welcome to my Blog!"})}),t.jsx(_6,{ref:e}),t.jsx(k6,{ref:s})]})},_6=({ref:n})=>{const e=h.useRef(null);h.useImperativeHandle(n,()=>({scrollToBottom(){const a=e.current;a.scrollTop=a.scrollHeight}}),[]);let s=[];for(let a=0;a<50;a++)s.push(t.jsxs("p",{children:["Comment #",a]},a));return t.jsx("div",{className:"border p-4 rounded h-32 overflow-y-auto",ref:e,children:s})};function k6(n){return t.jsx(_u,{placeholder:"Add comment...",ref:n.ref,className:"mt-4"})}function Vm(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(y6,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(N6,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(S6,{})})]})}function C6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Vm,{...n})}):Vm(n)}function R6({ref:n}){const e=h.useRef(null),s=h.useRef(null);return h.useImperativeHandle(n,()=>({scrollAndFocusAddComment(){e.current.scrollToBottom(),s.current.focus()}}),[]),t.jsxs(t.Fragment,{children:[t.jsx("article",{children:t.jsx("p",{className:"my-5",children:"Welcome to my Blog!"})}),t.jsx(E6,{ref:e}),t.jsx(M6,{ref:s})]})}const E6=({ref:n})=>{const e=h.useRef(null);h.useImperativeHandle(n,()=>({scrollToBottom(){const a=e.current;a.scrollTop=a.scrollHeight}}),[]);let s=[];for(let a=0;a<50;a++)s.push(t.jsxs("p",{children:["Comment #",a]},a));return t.jsx("div",{className:"border p-4 rounded h-32 overflow-y-auto",ref:e,children:s})};function M6(n){return t.jsx(_u,{placeholder:"Add comment...",ref:n.ref,className:"mt-4"})}function A6(){const n=h.useRef(null);function e(){n.current.scrollAndFocusAddComment()}return t.jsxs(t.Fragment,{children:[t.jsx(le,{onClick:e,primary:!0,children:"Write a comment"}),t.jsx(R6,{ref:n})]})}const T6={"App.js":v6,"Post.jsx":j6,"Button.jsx":gl,"Input.jsx":b6};function $6(){return t.jsx(ae,{files:T6,renderArticle:n=>t.jsx(C6,{components:{code:n}}),caseRender:t.jsx(A6,{})})}const D6=`import { useRef } from 'react'
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
`,L6=`import { useEffect, useRef, useState, useImperativeHandle } from 'react';
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
`,B6=`import { useState, useImperativeHandle} from "react";
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
`;function O6(){const n=h.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"点击弹窗显示"}),t.jsx(nc,{ref:n,children:t.jsx("div",{className:"bg-white p-4 max-w-xl mt-48 mx-auto rounded",children:"这是一个小弹窗"})})]})}function Xm(){const n=h.useRef(null);return t.jsxs("div",{className:"flex justify-between",children:[t.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"点击我，显示对话框组件"}),t.jsxs(ra,{ref:n,title:"Message For You",onSure:()=>n.current.close(),children:[t.jsx("strong",{className:"text-red-500",children:"React 19"})," 是全网学习体验最好的小册，没有之一。它能帮助你快速领悟到 React 的独特的开发魅力，你将会感受到更快的学习速度，更高效的开发速度，更专业的开发思维。",t.jsx("div",{className:"mt-4",children:t.jsx("img",{src:"https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""})})]})]})}function Gm(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(T,{children:t.jsx(Xm,{})}),`
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
`,t.jsx(T,{children:t.jsx(O6,{})}),`
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
`,t.jsx(T,{children:t.jsx(Xm,{})}),`
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
`,t.jsxs(e.p,{children:["最终的代码请看右侧案例中的 ",t.jsx(e.code,{children:"Dialog.jsx"})]})]})}function z6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Gm,{...n})}):Gm(n)}const U6={"App.js":D6,"Dialog.jsx":L6,"Modal.jsx":B6};function H6(){return t.jsx(ae,{files:U6,hidePreview:!0,renderArticle:n=>t.jsx(z6,{components:{code:n}})})}const q6=`import Provider from './context'
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
`,V6=`import {createContext, useState} from 'react'

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
`,X6=`import { useRef, use } from 'react'
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
`,G6=`import { use } from 'react'
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
`,Z6={task:"TASK-8878",content:"Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",status:"Progress",priority:"Medium"},ku=h.createContext({});function Y6({children:n}){const[e,s]=h.useState(Z6);return t.jsx(ku,{value:{task:e,updateTask:s},children:n})}function Q6(n){const{ref:e,...s}=n,{task:a,updateTask:l}=h.use(ku);function r(c){l({...a,content:c.target.value})}return t.jsxs(ra,{ref:e,...s,onSure:()=>e.current.close(),children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-20",children:"name"}),t.jsx("div",{className:"flex-1 p-2 text-sm font-bold",children:a.task})]}),t.jsxs("div",{className:"flex items-center mt-4",children:[t.jsx("div",{className:"w-20",children:"content"}),t.jsx("input",{value:a.content,className:"flex-1 border rounded-md p-2 text-sm",onChange:r})]}),t.jsxs("div",{className:"flex items-center mt-4",children:[t.jsx("div",{className:"w-20",children:"status"}),t.jsx("div",{className:"flex-1 p-2 text-sm text-green-500",children:a.status})]}),t.jsxs("div",{className:"flex items-center mt-4",children:[t.jsx("div",{className:"w-20",children:"Priority"}),t.jsx("div",{className:"flex-1 p-2 text-sm text-red-500",children:a.priority})]})]})}function J6(){const n=h.useRef(null),{task:e}=h.use(ku);return t.jsxs("div",{className:"flex items-center border-t pt-4",children:[t.jsx("div",{className:"font-bold",children:e.task}),t.jsx("div",{className:"flex-1 mx-3 line-clamp-1",children:e.content}),t.jsx("div",{className:"text-green-500",children:e.status}),t.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"edit"}),t.jsx(Q6,{ref:n,title:"Editor"})]})}function Zm(){return t.jsxs(Y6,{children:[t.jsx("h3",{className:"font-bold",children:"Your Task"}),t.jsx("p",{className:"!text-gray-400",children:"Here's a task for you!"}),t.jsx(J6,{})]})}function Ym(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(T,{children:t.jsx(Zm,{})}),`
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
`,t.jsx(T,{children:t.jsx(Zm,{})}),`
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
`,t.jsxs(e.p,{children:["这里比较有意思的一个地方是在 ",t.jsx(e.code,{children:"editor.jsx"})," 文件中，对于 ref 的使用和处理，大家可以留心观察一下。"]})]})}function K6(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Ym,{...n})}):Ym(n)}const W6={"App.js":q6,"context.jsx":V6,"task.jsx":X6,"editor.jsx":G6};function P6(){return t.jsx(ae,{files:W6,hidePreview:!0,renderArticle:n=>t.jsx(K6,{components:{code:n}})})}const F6=`import Provider from './context'
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
`,I6=`import {createContext, useState} from 'react'

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
`,e7=`import {use, useState} from 'react'
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
`,n7=`import {use, useState} from 'react'
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
`,t7=`@layer context_count {
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
`,Cu=h.createContext({});function s7({children:n}){const[e,s]=h.useState(0),a={count:e,incrementer:s};return t.jsx(Cu,{value:a,children:n})}function a7(){const{count:n}=h.use(Cu);return t.jsxs("div",{children:[t.jsx("h3",{className:"font-bold",children:"Total Switch Count"}),t.jsxs("p",{className:"!text-gray-400",children:["这里统计的是所有组件的切换次数: ",n]})]})}function l7(n){const{value:e=!1,onChange:s}=n,[a,l]=h.useState(e),r=a?"switch right":"switch left";function c(i){l(i),s&&s(i)}return t.jsx("div",{className:r,onClick:()=>c(!a),children:t.jsx("div",{className:"circle"})})}function ei(){const{count:n,incrementer:e}=h.use(Cu),[s,a]=h.useState("theme-light"),[l,r]=h.useState(0);function c(i){a(i?"theme-dark":"theme-light"),r(l+1),e(n+1)}return t.jsxs("div",{className:s,children:[t.jsxs("div",{className:"context-card p-4 rounded transition",children:[t.jsx("div",{className:"title font-bold",children:"Canary"}),t.jsx("div",{className:"mt-4",children:"The useActionState Hook is currently only available in React’s Canary and experimental channels. Learn more about release channels here. "})]}),t.jsxs("div",{className:"flex justify-between py-4 items-center",children:[t.jsxs("div",{className:"mr-4 text-green-500",children:["当前组件切换次数: ",l]}),t.jsx(l7,{onChange:c})]})]})}function Qm(){return t.jsxs(s7,{children:[t.jsx(a7,{}),t.jsx(ei,{}),t.jsx(ei,{}),t.jsx(ei,{})]})}function Jm(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(T,{reload:!0,children:t.jsx(Qm,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(Qm,{})}),`
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
`})})]})}function r7(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Jm,{...n})}):Jm(n)}const c7={"App.js":F6,"context.jsx":I6,"Total.jsx":e7,"Card.jsx":n7,"skin.css":t7};function i7(){return t.jsx(ae,{files:c7,hidePreview:!0,renderArticle:n=>t.jsx(r7,{components:{code:n}})})}const o7=`import {useState, Suspense, useDeferredValue} from 'react'
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
`,u7=`export const fetchList = async (number) => {
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
`,d7=`document.documentElement.style.fontSize = '14px'

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
`,m7=`import { use } from 'react';
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
`,p7=`export default function Input(props) {
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
`,fx=`import {useState, useEffect} from 'react'
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
`,hx=`.spin {
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
`;function Ru(n){const{loading:e,type:s="icon"}=n,[a,l]=h.useState(!1),[r,c]=h.useState(!1);h.useEffect(()=>{e?(l(!0),c(!0)):l(!1)},[e]);const o=se("spin flex items-center justify-center top-0 bg-white bg-opacity-50",{in:a,out:!a});function d(){a||c(!1)}return t.jsxs("div",{className:"relative",children:[n.children,r?t.jsx("div",{className:o,onAnimationEnd:d,children:s==="icon"&&t.jsx("svg",{className:"animate-spin",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"24",height:"24",children:t.jsx("path",{d:"M249.836 210.77c5.558-3.827 10.73-7.527 15.812-10.695 4.967-3.314 9.807-6.121 14.208-8.785 2.18-1.362 4.374-2.515 6.425-3.673l5.873-3.281c0.945-0.551 1.789-0.953 2.625-1.377l2.425-1.226 4.381-2.233 1.954-1.004 2.219-1.093 3.918-1.924 7.184-3.527c2.883-1.44 5.996-3.272 8.694-5.22 26.969-19.458 33.057-57.094 13.599-84.063-19.458-26.968-57.094-33.057-84.063-13.599l-6.49 4.682-3.54 2.554-2.071 1.499-2.62 1.947-5.824 4.351a7267.87 7267.87 0 0 0-3.193 2.399c-1.091 0.824-2.25 1.676-3.282 2.533a33346.62 33346.62 0 0 1-6.735 5.441c-2.343 1.915-4.833 3.859-7.308 6.046-4.991 4.313-10.423 8.905-15.952 14.121-5.645 5.071-11.353 10.792-17.394 16.739-5.886 6.125-12.079 12.515-18.185 19.505-12.303 13.875-24.827 29.53-36.839 46.835a494.61 494.61 0 0 0-33.896 56.497 491.342 491.342 0 0 0-27.329 64.159c-1.02 2.77-1.888 5.605-2.789 8.428l-2.688 8.477c-1.692 5.691-3.266 11.429-4.857 17.152l-2.135 8.669c-0.683 2.896-1.479 5.756-2.051 8.682l-1.84 8.729-0.914 4.358-0.785 4.387a479.254 479.254 0 0 0-7.583 69.967c-0.302 5.759-0.239 11.514-0.279 17.214l-0.017 4.267c-0.001 1.42 0.069 2.841 0.101 4.257l0.25 8.464 0.127 4.204 0.264 4.188 0.531 8.317 0.278 4.451 0.399 3.933 0.792 7.821c0.14 1.313 0.244 2.561 0.412 3.918l0.527 4.098 1.056 8.115c0.185 1.337 0.33 2.695 0.549 4.002l0.648 3.91 1.289 7.744c1.825 10.246 3.911 20.188 6.263 29.766a463.195 463.195 0 0 0 16.342 52.81l2.255 5.904 1.108 2.899 1.186 2.836 4.611 10.976c3.247 7.033 6.19 13.723 9.353 19.831 6.048 12.328 12.043 22.661 17.007 31.096 5.121 8.359 9.212 14.84 12.197 19.141l4.472 6.638-3.293-7.292c-2.209-4.713-5.148-11.776-8.748-20.761-3.443-9.059-7.545-20.055-11.346-32.919-2.041-6.376-3.771-13.301-5.726-20.516l-2.612-11.204-0.667-2.878-0.583-2.935-1.183-5.957c-3.105-16.055-5.568-33.549-6.889-52.052-0.668-9.251-1.027-18.753-1.1-28.437l0.03-7.3 0.014-3.67c0.002-1.227 0.084-2.416 0.122-3.629l0.284-7.263 0.139-3.644c0.053-1.229 0.166-2.577 0.247-3.863a35704.717 35704.717 0 0 1 0.798-11.787l0.017-0.247c0.013 0.588 0.018 0.028 0.027 0.098l0.05-0.472 0.101-0.945 0.2-1.891 0.8-7.581 0.4-3.801 0.535-3.801 1.069-7.62c0.187-1.271 0.335-2.545 0.555-3.815l0.67-3.811c0.909-5.082 1.708-10.185 2.859-15.253a424.734 424.734 0 0 1 17.057-60.03l1.316-3.663 1.437-3.623 2.859-7.225c0.907-2.417 2.03-4.761 3.033-7.135l3.079-7.082c2.208-4.653 4.37-9.295 6.624-13.867l3.508-6.783c1.167-2.252 2.294-4.513 3.565-6.702a414.503 414.503 0 0 1 31.89-49.502 407.116 407.116 0 0 1 35.476-41.25 406.598 406.598 0 0 1 35.793-32.288c5.751-4.687 11.515-8.857 16.918-12.861zM1023.966 510.486l-0.001-0.005-0.875-7.954-1.051-9.554-0.687-6.125-1.153-8.152c-0.828-5.729-1.741-12.089-2.813-18.907l-4.259-20.887c-0.691-3.726-1.738-7.517-2.729-11.425l-3.102-12.024c-0.558-2.048-1.019-4.142-1.677-6.221l-1.958-6.314-4.07-13.021-1.049-3.333-1.211-3.324c-0.814-2.223-1.638-4.467-2.469-6.732-1.673-4.522-3.34-9.131-5.115-13.781l-5.938-13.981-3.046-7.123c-1.037-2.384-2.247-4.72-3.375-7.102l-6.997-14.388c-0.569-1.22-1.222-2.408-1.877-3.598l-1.958-3.583-3.95-7.211-3.995-7.265c-1.354-2.422-2.881-4.773-4.324-7.175l-8.875-14.427c-12.567-18.998-26.533-37.793-42.018-55.643-15.662-17.71-32.638-34.534-50.581-50.045a527.617 527.617 0 0 0-56.726-41.602c-19.622-12.201-39.702-22.647-59.484-31.64l-14.925-6.188c-2.47-0.995-4.881-2.072-7.356-2.979l-7.402-2.651-7.306-2.609-3.615-1.289c-1.198-0.434-2.394-0.863-3.618-1.21l-14.37-4.353c-2.366-0.691-4.68-1.466-7.035-2.069l-7.02-1.754-13.669-3.402c-4.524-0.941-8.985-1.788-13.341-2.655l-6.47-1.271-3.184-0.621-3.186-0.465-12.373-1.797-5.96-0.862c-1.957-0.298-3.928-0.403-5.85-0.61l-11.239-1.057c-3.638-0.329-7.151-0.735-10.598-0.81l-19.18-0.823-16.258 0.11-6.935 0.057c-2.177 0.091-4.219 0.237-6.115 0.34l-9.619 0.566-7.982 0.472 7.959 0.875 9.529 1.05c1.872 0.215 3.884 0.411 6.023 0.683l6.797 1.101 15.801 2.578 18.393 3.951c3.283 0.628 6.614 1.603 10.051 2.514l10.571 2.838c1.801 0.509 3.644 0.92 5.469 1.526l5.542 1.793 11.432 3.697 2.927 0.946 2.914 1.104 5.902 2.242c3.965 1.517 8.007 3.017 12.084 4.613l12.243 5.366 6.241 2.733c2.088 0.929 4.128 2.029 6.212 3.044l12.59 6.277c1.068 0.506 2.106 1.094 3.145 1.685l3.131 1.761 6.302 3.542 6.353 3.568c2.118 1.209 4.165 2.586 6.263 3.878l12.601 7.922c16.565 11.247 32.949 23.681 48.48 37.44a473.639 473.639 0 0 1 43.435 44.87 467.917 467.917 0 0 1 35.892 50.115c10.476 17.304 19.389 34.971 27.062 52.322 1.761 4.404 3.506 8.772 5.234 13.098 0.843 2.166 1.771 4.273 2.532 6.444l2.224 6.49 2.201 6.396 1.093 3.162c0.368 1.047 0.734 2.092 1.019 3.166l3.633 12.572c0.578 2.068 1.242 4.086 1.738 6.146l1.441 6.137 2.829 11.931 2.152 11.645 1.045 5.64 0.514 2.772 0.362 2.779 1.423 10.784 0.697 5.188c0.245 1.704 0.3 3.423 0.458 5.098l0.794 9.786c0.249 3.167 0.584 6.22 0.595 9.223l0.516 16.686-0.346 13.152-0.109 5.579-0.343 6.014-0.567 9.595-0.472 7.988c-0.169 3.219-0.107 6.829 0.256 10.138 3.638 33.056 33.383 56.904 66.438 53.267 33.056-3.637 56.905-33.382 53.268-66.438zM885.176 762.451l-4.868 5.897c-1.711 2.052-3.44 4.238-5.4 6.399-3.858 4.365-7.946 9.128-12.608 13.957-4.517 4.944-9.632 9.919-14.922 15.205-5.467 5.131-11.147 10.547-17.374 15.864-12.349 10.726-26.262 21.624-41.613 32.046a434.435 434.435 0 0 1-50.026 29.303 431.157 431.157 0 0 1-56.59 23.39c-2.436 0.874-4.935 1.6-7.419 2.361l-7.455 2.279c-5.006 1.425-10.053 2.742-15.078 4.091-2.536 0.593-5.075 1.187-7.617 1.78-2.545 0.566-5.051 1.25-7.622 1.714l-7.663 1.523-3.822 0.763-3.851 0.64a419.278 419.278 0 0 1-61.304 5.938c-5.039 0.219-10.081 0.088-15.068 0.072l-3.733-0.022c-1.238-0.012-2.392-0.1-3.587-0.145l-7.067-0.313-3.505-0.146-3.997-0.27-7.961-0.537-1.981-0.133-0.989-0.067-0.494-0.033c0.221-0.008-0.844-0.005 0.433-0.022l-0.226-0.025-3.593-0.396-7.127-0.78a406.62 406.62 0 0 1-53.494-10.013 402.48 402.48 0 0 1-45.808-14.792l-5.111-2.022-2.511-0.99-2.452-1.066-9.494-4.124c-6.074-2.917-11.861-5.522-17.131-8.352-10.648-5.379-19.552-10.718-26.826-15.11l-1.338-0.807a1085.391 1085.391 0 0 0-3.457-2.276l-4.116-2.687c-0.638-0.414-1.252-0.813-1.842-1.194l-2.021-1.354-3.621-2.439-6.637-4.472c-2.685-1.782-5.825-3.567-8.857-4.938-30.307-13.689-65.973-0.218-79.662 30.089-13.689 30.308-0.218 65.974 30.089 79.663l7.293 3.294 3.979 1.797 2.369 1.063 2.994 1.302c2.073 0.896 4.3 1.857 6.676 2.885l3.672 1.574 1.917 0.819 1.9 0.745c10.22 4.014 22.646 8.772 37.189 13.242 7.215 2.375 15.042 4.443 23.216 6.727l12.687 3.1 3.261 0.787 3.325 0.701 6.75 1.415c18.195 3.715 38.044 6.719 59.054 8.439a494.284 494.284 0 0 0 65.863 0.997l8.535-0.519 4.285-0.266 0.268-0.017c1.44-0.02 0.541-0.02 0.927-0.03l0.492-0.051 0.986-0.1 1.977-0.201 7.938-0.807 3.991-0.406 4.502-0.554 9.015-1.133c1.492-0.2 3.034-0.365 4.486-0.598l4.344-0.709c5.795-0.965 11.61-1.832 17.399-3.066a485.178 485.178 0 0 0 68.692-18.701l4.2-1.463 4.157-1.588 8.292-3.176c2.771-1.016 5.468-2.251 8.194-3.37l8.134-3.434c5.351-2.451 10.685-4.869 15.941-7.39l7.805-3.918c2.591-1.307 5.188-2.576 7.712-3.991a474.344 474.344 0 0 0 57.071-35.83 467.174 467.174 0 0 0 47.72-40.068 466.596 466.596 0 0 0 37.51-40.586c5.455-6.542 10.335-13.082 14.998-19.24 4.483-6.313 8.789-12.218 12.512-18 3.868-5.667 7.179-11.177 10.297-16.204 1.589-2.492 2.957-4.989 4.318-7.332 1.349-2.348 2.635-4.586 3.854-6.711 4.686-8.611 8.271-15.384 10.509-20.116l3.527-7.185-4.682 6.489c-2.985 4.266-7.65 10.33-13.635 17.935z"})})}):null]})}document.documentElement.style.fontSize="14px";function xx(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const Lr=n=>{let e=new AbortController,s=e.signal;const a=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(r=>{l(r.json())}).catch(()=>{console.log("接口成功取消！")})});return a.cancel=()=>{e&&e.abort()},a};function gx({promise:n}){const{results:e}=h.use(n);return console.log("我会执行几次呢"),t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}function vx(n){const{...e}=n;return t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function f7(){const[n,e]=h.useState(()=>Lr(5)),s=h.useDeferredValue(n);function a(l){n.cancel();const r=l.target.value.length%5;e(Lr(r))}return t.jsxs("div",{children:[t.jsx(vx,{onChange:a,placeholder:"Enter something"}),t.jsx(h.Suspense,{fallback:t.jsx(xx,{}),children:t.jsx(Ru,{loading:s!==n,type:"mask",children:t.jsx(gx,{promise:s})})})]})}function h7(){const[n,e]=h.useState(()=>Lr(5));function s(a){n.cancel();const l=a.target.value.length%5;e(Lr(l))}return t.jsxs("div",{children:[t.jsx(vx,{onChange:s,placeholder:"Enter something"}),t.jsx(h.Suspense,{fallback:t.jsx(xx,{}),children:t.jsx(gx,{promise:n})})]})}function x7(){const[n,e]=h.useState(0);function s(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsxs("div",{className:"mt-4",children:["counter: ",n]})]}),t.jsx("button",{onClick:s,children:"counter++"})]})}function g7(){const[n,e]=h.useState(0),s=h.useDeferredValue(n);function a(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsxs("div",{className:"mt-4",children:["counter: ",s]})]}),t.jsx("button",{onClick:a,children:"counter++"})]})}function v7(){const[n,e]=h.useState(0),s=h.useDeferredValue(n,0);function a(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsx(j7,{counter:s})]}),t.jsx("button",{onClick:a,children:"counter++"})]})}const j7=({counter:n})=>{const e=performance.now();for(;performance.now()-e<200;);return t.jsxs("div",{className:"mt-4",children:["Deferred: ",n]})};function b7(){const[n,e]=h.useState(0),s=h.useDeferredValue(n);function a(){e(n+1)}return t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",n]}),t.jsx(y7,{counter:s})]}),t.jsx("button",{onClick:a,children:"counter++"})]})}const y7=({counter:n})=>{let e=[];for(let s=0;s<200;s++)e.push(t.jsx(N7,{counter:n},s));return t.jsxs("div",{className:"mt-4 text-green-500",children:[t.jsxs("div",{children:["Deferred: ",n]}),t.jsx("ul",{className:"h-32 hidden",children:e})]})};function N7({counter:n}){let e=performance.now();for(;performance.now()-e<1;);return t.jsx("li",{children:n})}function Km(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"重头戏来了！"}),`
`,t.jsx(e.p,{children:"在进一步学习之前，道友们先操作感受一下这个案例中，搜索时 loading 的交互状态。在输入框中，快速输入任意内容。"}),`
`,t.jsx(T,{reload:!0,children:t.jsx(f7,{})}),`
`,t.jsx(e.p,{children:"然后再对比一下前后两种 Loading 交互方式的区别。"}),`
`,t.jsx(T,{children:t.jsx(h7,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(x7,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(g7,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(v7,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(b7,{})}),`
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
`,t.jsx(e.p,{children:"但是，等你彻底掌握它之后，你就会发现 React 19 在异步交互上真的太优雅了。这样的开发体验，是依赖 useEffect 完全比不了的。"})]})}function S7(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Km,{...n})}):Km(n)}const w7={"App.js":o7,"api.js":u7,"List.jsx":m7,"Input.jsx":p7,"Skeleton.jsx":d7,"Spin.jsx":fx,"index.css":hx};function _7(){return t.jsx(ae,{files:w7,renderArticle:n=>t.jsx(S7,{components:{code:n}})})}const k7=`import {useState, Suspense, useDeferredValue} from 'react'
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
`,C7=`const random = [
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
`,R7=`export default function Skeleton(props) {
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
`,E7=`import { use } from 'react';
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
`,M7=`function classNames(...classes) {
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
`,A7=n=>{const e=unescape(n.message.replace(/\\u/gi,"%u")),s=unescape((n.title||"").replace(/\\u/gi,"%u"));let a="flex border border-blue-100 p-4 rounded-md shadow";return e?t.jsxs("div",{className:a,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),t.jsxs("div",{className:"flex-1 ml-3",children:[t.jsx("div",{children:s||"Heads Up!"}),t.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]}):t.jsxs("div",{className:`${a} justify-center items-center flex-col text-gray-500`,children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),t.jsx("div",{className:"mt-2",children:"no data."})]})};function jx(n){return t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function T7(n){const{className:e,primary:s,danger:a,sm:l,lg:r,signal:c,success:i,...o}=n,p=Pe(se("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":i,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":c,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":r},e));return t.jsxs("button",{className:p,...o,children:[n.children,c&&t.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const $7=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var bx=new Headers;bx.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var D7={method:"GET",headers:bx,redirect:"follow",data:"hex"};const L7="https://echo.apifox.com/delay/1",Wm=async()=>{await fetch(L7,D7);const n=Math.floor(Math.random()*10)%5;return{value:$7[n]}},Pm=n=>{let e=new AbortController,s=e.signal;const a=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(r=>{l(r.json())}).catch(()=>{console.log("接口成功取消！")})});return a.cancel=()=>{e&&e.abort()},a};function B7(){const[n,e]=h.useState(Wm()),[s,a]=h.useTransition();function l(){console.log("click"),a(()=>{console.log("transition"),e(Wm())})}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-right mb-4",children:t.jsx(T7,{onClick:l,children:"更新数据"})}),t.jsx(h.Suspense,{fallback:t.jsx(jx,{}),children:t.jsx(Ru,{loading:s,children:t.jsx(O7,{promise:n})})})]})}function O7(n){const{value:e}=h.use(n.promise);return t.jsx(A7,{message:e})}function z7(...n){return n.filter(Boolean).join(" ")}function U7({tabs:n,onSwitch:e}){return t.jsxs("div",{children:[t.jsxs("div",{className:"hidden",children:[t.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),t.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:n.find(s=>s.current).name,onChange:s=>e(s.target.selectedIndex),children:n.map(s=>t.jsx("option",{children:s.name},s.name))})]}),t.jsx("div",{className:"block",children:t.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:n.map((s,a)=>t.jsx("a",{href:s.href,className:z7(s.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":s.current?"page":void 0,onClick:l=>{l.preventDefault(),e(a)},children:s.name},s.name))})})]})}function H7({promise:n}){const{results:e}=h.use(n);return t.jsx("div",{children:e.map((s,a)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:s.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}const ni=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function q7(){const[n,e]=h.useState(0),[s,a]=h.useState(()=>Pm(5)),[l,r]=h.useTransition();function c(i){ni[n].current=!1,ni[i].current=!0,e(i),s.cancel(),r(()=>{a(Pm(5))})}return t.jsxs("div",{children:[t.jsx(U7,{tabs:ni,onSwitch:c}),t.jsx(h.Suspense,{fallback:t.jsx(jx,{}),children:t.jsx(Ru,{loading:l,type:"mask",children:t.jsx(H7,{promise:s})})})]})}function Fm(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(T,{reload:!0,children:t.jsx(B7,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(q7,{})})]})}function V7(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Fm,{...n})}):Fm(n)}const X7={"App.js":k7,"api.js":C7,"Tabs.jsx":M7,"List.jsx":E7,"Skeleton.jsx":R7,"Spin.jsx":fx,"index.css":hx};function G7(){return t.jsx(ae,{files:X7,renderArticle:n=>t.jsx(V7,{components:{code:n}})})}const Z7=`function Layou2t() {
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
`;function Im(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"我们对 React Compiler 期待已久。"}),`
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
`,t.jsxs(e.p,{children:["引入成功之后，我们可以在开发者工具中的 ",t.jsx(e.code,{children:"Sources"})," 面板的 ",t.jsx(e.code,{children:"Page"})," 目录中查看编译之后的代码，长得跟右侧代码差不多就表示编译成功了。"]})]})}function Y7(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(Im,{...n})}):Im(n)}const Q7={"App.js":Z7};function J7(){return t.jsx(ae,{files:Q7,hidePreview:!0,renderArticle:n=>t.jsx(Y7,{components:{code:n}})})}const K7=`import { c as _c } from "/src/mycache.js";
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
`,W7=`import { useState } from 'react'
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
`;function ep(n){const e={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"非常的 nice，经过几天的尝试和研究，我在低版本中成功引入了 Compiler，目前已经在 vite 中运行起来了。"}),`
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
`,t.jsx(e.p,{children:"运行项目，查看开发者工具的 Sources 面板中的 Page 目录，我们发现 App.jsx 已经被编译成了右侧代码的样子。搞定。"})]})}function P7(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ep,{...n})}):ep(n)}const F7={"App.js":K7,原代码:W7};function I7(){return t.jsx(ae,{files:F7,hidePreview:!0,renderArticle:n=>t.jsx(P7,{components:{code:n}})})}const e8=`import { c as _c } from "/src/mycache.js";
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
`,n8=`import { useState } from 'react'
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
`;function np(n){const e={a:"a",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"在 webpack 中引入会稍微麻烦一点，因为我们要自己定义一个 Loader，许多小伙伴对于 webpack 自定义 loader 比较陌生，因此我这里直接放了一个比较完整的代码如下"}),`
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
`})})]})}function t8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(np,{...n})}):np(n)}const s8={"App.js":e8,原代码:n8};function a8(){return t.jsx(ae,{files:s8,hidePreview:!0,renderArticle:n=>t.jsx(t8,{components:{code:n}})})}const l8=`import {useState} from 'react'
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
`,r8=`import {useState} from 'react'

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
`;function c8(){const[n,e]=h.useState(0);function s(){e(n+1)}return t.jsxs("div",{children:[t.jsx("div",{children:"A Base Case"}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:["currnt count is: ",n]}),t.jsx("button",{onClick:s,children:"Increment"})]})]})}function tp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
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
`,t.jsx(T,{children:t.jsx(c8,{})}),`
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
`]})]})}function i8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(tp,{...n})}):tp(n)}const o8={"App.js":l8,原代码:r8};function u8(){return t.jsx(ae,{files:o8,renderArticle:n=>t.jsx(i8,{components:{code:n}})})}const d8=`import {useState} from 'react'
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
`,m8=`import {useState} from 'react'

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
`;function p8(){const[n,e]=h.useState(0);function s(){e(n+1)}return t.jsxs("div",{children:[t.jsx("div",{children:"A Base Case"}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:["currnt count is: ",n]}),t.jsx("button",{onClick:s,children:"Increment"})]})]})}function sp(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:["通过上面对 Compiler 渲染结果的理解，我们应该已经大概知道我们的 React 代码最终会渲染成什么样。我们目前要思考的问题就是，我们的代码通过 Compiler 编译之后，",t.jsx(e.strong,{children:"收益表现在哪里？"})]}),`
`,t.jsx(e.p,{children:"接下来我们要分析三个不同的案例，来思考这个问题。这篇文章先分析第一个出现在上一章中，最简单的基础案例"}),`
`,t.jsx(T,{children:t.jsx(p8,{})}),`
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
`,t.jsx(e.p,{children:"当然，这里多执行的逻辑也并不是很多，我们也可以选择无视。"})]})}function f8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(sp,{...n})}):sp(n)}const h8={"App.js":d8,原代码:m8};function x8(){return t.jsx(ae,{files:h8,renderArticle:n=>t.jsx(f8,{components:{code:n}})})}const g8=`import {useState} from 'react'
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
`,v8=`import { useState } from 'react'

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
`;function j8(){var[n,e]=h.useState(0);function s(){e(n+1)}return t.jsxs("div",{children:[t.jsx("div",{children:"A Expensive Case"}),t.jsxs("div",{className:"flex items-center justify-between mt-4",children:[t.jsxs("div",{className:"counter",children:["current counter is: ",n]}),t.jsx("button",{onClick:s,children:"counter++"})]}),t.jsx(b8,{})]})}function b8(){for(var n=performance.now();performance.now()-n<100;);return t.jsx("div",{className:"border border-red-500 rounded p-4 mt-4 text-red-500 text-sm leading-6",children:"这是模拟的一个耗时子组件，我的渲染至少要损耗 100ms 的时间，因此如果不做任何优化的情况下，当你快速点击按钮时，你会感受到 counter 的递增会有明显的掉帧。"})}function ap(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(T,{children:t.jsx(j8,{})}),`
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
`,t.jsxs(e.p,{children:["因此，编译优化之后，我们能够非常明显的感受到",t.jsx(e.strong,{children:"掉帧的现象"}),"消失了。在优化之前，由于 counter 导致组件 re-render，所以该子组件虽然没有任何参数传递进去，但是依然不可避免的需要重新执行，从而导致每次更新的耗时都非常大。"]})]})}function y8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ap,{...n})}):ap(n)}const N8={"App.js":g8,原代码:v8};function S8(){return t.jsx(ae,{files:N8,renderArticle:n=>t.jsx(y8,{components:{code:n}})})}const w8=`import { useState, useEffect, useRef } from 'react'
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
`,_8=`import clsx from 'clsx'

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
`,k8=`import clsx from 'clsx'

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
`,C8=`import clsx from 'clsx'

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
`,R8=`import clsx from 'clsx'

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
`;function E8({selected:n,appeared:e}){if(!n&&!e)return null;const s=se("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."})}function M8({selected:n,appeared:e}){if(!n&&!e)return null;const s=se("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."})}function A8({selected:n,appeared:e}){if(!n&&!e)return null;const s=se("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets."})}function T8({selected:n,appeared:e}){if(!n&&!e)return null;const s=se("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!n});return t.jsx("div",{className:s,children:"React Compiler is a new experimental compiler that we’ve open sourced to get early feedback from the community. It still has rough edges and is not yet fully ready for production."})}const lp=[{title:"Tailwindcss",component:E8,appeared:!1},{title:"React",component:M8,appeared:!1},{title:"Unocss",component:A8,appeared:!1},{title:"Compiler",component:T8,appeared:!1}];function $8(){const[n,e]=h.useState(0),s=h.useRef([...lp]);function a(o){s.current[o].appeared=!0,e(o)}let l=s.current[0],r=s.current[1],c=s.current[2],i=s.current[3];return t.jsxs("div",{className:"bg-gray-100 p-8 rounded-md border border-gray-200",children:[t.jsx("div",{children:lp.map((o,d)=>t.jsx("button",{className:d===n?"text-blue-500":"text-gray-500",onClick:()=>a(d),children:o.title},o.title))}),t.jsx(l.component,{appearder:l.appeared,selected:n===0}),t.jsx(r.component,{appearder:r.appeared,selected:n===1}),t.jsx(c.component,{appearder:c.appeared,selected:n===2}),t.jsx(i.component,{appearder:i.appeared,selected:n===3})]})}function D8(){return t.jsxs("div",{children:[t.jsx(L8,{}),t.jsx(B8,{})]})}function L8(){var n=performance.now();return t.jsxs("div",{className:"mt-4",children:["仅执行 1000,000 次耗时 for 循环耗时：",t.jsxs("span",{className:"text-red-500",children:[performance.now()-n," ms"]})]})}function B8(){var n=performance.now();return t.jsxs("div",{className:"mt-4",children:["for 循环中，比较 1000,000 次耗时：",t.jsxs("span",{className:"text-red-500",children:[performance.now()-n," ms"]})]})}function rp(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(T,{children:t.jsx($8,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(D8,{})}),`
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
`,t.jsx(e.p,{children:"并且 React Compiler 上手成本低，理解起来也不难，未来肯定会快速被大量开发者所接受。作为开发者我们只需要放心使用即可。"})]})}function O8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(rp,{...n})}):rp(n)}const z8={"App.js":w8,"Panel1.jsx":_8,"Panel2.jsx":k8,"Panel3.jsx":C8,"Panel4.jsx":R8,"Button.jsx":gl};function U8(){return t.jsx(ae,{files:z8,renderArticle:n=>t.jsx(O8,{components:{code:n}})})}function H8(){return t.jsxs("form",{id:"form",method:"get",className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"First name: "}),t.jsx("input",{type:"text",defaultValue:"Jake",name:"fname"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"Last name: "}),t.jsx("input",{type:"text",defaultValue:"Ma",name:"lname"})]}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"提交"})})]})}function cp(n){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"在 html 的基础知识中，表单是很重要的一个环节"}),"，但是由于前端框架的盛行，原生表单开发方式相关的知识被部分前端框架所遗忘，很多人对 form action，formdata 很陌生。因此，当看到有消息称 React 19 支持了 form action 之后，许多前端感觉有点懵。这是啥？"]}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(H8,{})}),`
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
`,t.jsx(e.p,{children:"了解了这些html form 元素中的基础知识之后，我们下一章再来详细的学习一下 FormData 的基础知识。"})]})}function q8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(cp,{...n})}):cp(n)}function V8(){function n(e){localStorage.setItem("active_code",e.get("code")),location.reload()}return t.jsxs("div",{className:"pt-4",children:[t.jsx("div",{className:"rounded-md bg-yellow-50 p-4 border border-yellow-400",children:t.jsxs("div",{className:"flex",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-yellow-700",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),t.jsxs("div",{className:"ml-3",children:[t.jsx("h3",{className:"text-sm font-medium text-yellow-800",children:"Attention needed"}),t.jsx("div",{className:"mt-2 text-sm text-yellow-700",children:t.jsx("p",{children:"你还未输入激活码，或者激活码已过期，请重新输入即可访问"})})]})]})}),t.jsxs("form",{action:n,className:"flex items-center justify-between",children:[t.jsx(yn,{name:"code",placeholder:"Please input your active code",className:"flex-1 mr-4",pattern:sc}),t.jsx("button",{type:"submit",children:"确认"})]})]})}Bt.registerLanguage("javascript",fu);function X8({className:n,...e}){const s=/language-(\w+)/.exec(n||"");return s?t.jsx(Bt,{language:s[1],PreTag:"div",...e,style:hu}):t.jsx("code",{className:n,...e})}function Ot(n){const{renderArticle:e,isAuth:s=!0,isGiscus:a=!0}=n,l=localStorage.getItem("active_code"),r=s?l===sc:!0;return t.jsxs("div",{className:"keep max-w-[700px] mx-auto",children:[r?e(X8):t.jsx(V8,{}),a&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsx(xu,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]})]})}function G8(){return t.jsx(Ot,{renderArticle:n=>t.jsx(q8,{components:{code:n}})})}function ip(n){const e={code:"code",h3:"h3",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h3,{children:"FormData 使用详解"}),`
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
`,t.jsx(e.p,{children:"OK，简单了解了 FormData 的常用方式之后，有了这个基础，我们再来学习 react 中的 form action."})]})}function Z8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(ip,{...n})}):ip(n)}function Y8(){return t.jsx(Ot,{renderArticle:n=>t.jsx(Z8,{components:{code:n}})})}function Q8(){function n(e){const s=e.get("fname"),a=e.get("lname");alert(`输入内容：FirstName: ${s}, LastName: ${a}`)}return t.jsxs("form",{action:n,className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"First name: "}),t.jsx("input",{type:"text",defaultValue:"Jake",name:"fname"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"Last name: "}),t.jsx("input",{type:"text",defaultValue:"Ma",name:"lname"})]}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"提交"})})]})}function yx(){for(var n=[],e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=0;s<16;s++)n[s]=e.substr(Math.floor(Math.random()*16),1);return n[8]="-",n.join("")}function J8(n){const{ref:e,onChange:s}=n;function a(l){const r={id:yx(),name:l.get("name"),desc:l.get("desc"),hours:l.get("hours"),rate:l.get("rate"),price:l.get("price")};e.current.close(),s&&s(r)}return t.jsx(ra,{ref:e,footer:!0,children:t.jsxs("form",{action:a,children:[t.jsx(yn,{label:"Name",name:"name",placeholder:"Plase input your project name.",required:!0}),t.jsx(yn,{label:"Desc",name:"desc",placeholder:"please input your project description.",required:!0}),t.jsx(yn,{label:"Hours",name:"hours",type:"number",placeholder:"please input hours.",required:!0}),t.jsx(yn,{label:"Rate",name:"rate",type:"number",placeholder:"please input rate.",required:!0}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"Submit"})})]})})}function K8(){const n=h.useRef(null),[e,s]=h.useState([{id:yx(),name:"Logo redesign",desc:"New logo and digital asset playbook.",hours:"20.0",rate:"100.00"}]);function a(r){s([...e,r])}const l=e.reduce((r,c)=>r+c.hours*c.rate,0);return t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold leading-6 text-gray-900",children:"Invoice"}),t.jsxs("p",{className:"mt-2 text-sm text-gray-700",children:["For work completed from ",t.jsx("time",{dateTime:"2022-08-01",children:"August 1, 2022"})," to"," ",t.jsx("time",{dateTime:"2022-08-31",children:"August 31, 2022"}),"."]})]}),t.jsx("div",{className:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:t.jsx("button",{className:"primary",onClick:()=>n.current.show(),children:"Add"})})]}),t.jsx(J8,{ref:n,onChange:a}),t.jsx("div",{className:"-mx-4 mt-8 flow-root sm:mx-0",children:t.jsxs("table",{className:"min-w-full",children:[t.jsxs("colgroup",{children:[t.jsx("col",{className:"w-full sm:w-1/2"}),t.jsx("col",{className:"sm:w-1/6"}),t.jsx("col",{className:"sm:w-1/6"}),t.jsx("col",{className:"sm:w-1/6"})]}),t.jsx("thead",{className:"border-b border-gray-300 text-gray-900",children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Project"}),t.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Hours"}),t.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Rate"}),t.jsx("th",{scope:"col",className:"py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:"Price"})]})}),t.jsx("tbody",{children:e.map(r=>t.jsxs("tr",{className:"border-b border-gray-200",children:[t.jsxs("td",{className:"max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0",children:[t.jsx("div",{className:"font-medium text-gray-900",children:r.name}),t.jsx("div",{className:"mt-1 truncate text-gray-500",children:r.desc})]}),t.jsx("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:r.hours}),t.jsxs("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:["$",r.rate]}),t.jsxs("td",{className:"py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0",children:["$",r.hours*r.rate]})]},r.id))}),t.jsxs("tfoot",{children:[t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Subtotal"}),t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Subtotal"}),t.jsxs("td",{className:"pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0",children:["$",l]})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Tax"}),t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Tax"}),t.jsx("td",{className:"pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0",children:"$1760.00"})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0",children:"Total"}),t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden",children:"Total"}),t.jsxs("td",{className:"pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:["$",l-1760]})]})]})]})})]})}const W8=`import Dialog from 'components/Dialog'
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
}`,P8=`import { useState, useRef } from 'react'
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
}`;function op(n){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"React 19 在表单上提供了更多充满想象空间的 API，它们用好了非常爽，不过一个麻烦的事情是如果你通过自学，想要透彻理解并找到最佳实践可能会非常困难。"}),`
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
`,t.jsx(T,{children:t.jsx(Q8,{})}),`
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
`,t.jsx(T,{children:t.jsx(K8,{})}),`
`,t.jsxs(e.p,{children:["在这个案例中，我们提供了一个 ",t.jsx(e.code,{children:"Add"})," 按钮，点击该按钮之后，会出现一个弹窗。在弹窗中，我们可以输入每一条信息。输入完成之后，点击提交，输入的信息就会展示在列表中。"]}),`
`,t.jsx(e.p,{children:"完整代码如下"}),`
`,t.jsx(In,{files:{"index.jsx":P8,"Modal.jsx":W8}})]})}function F8(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(op,{...n})}):op(n)}function I8(){return t.jsx(Ot,{renderArticle:n=>t.jsx(F8,{components:{code:n}})})}async function Nx(n){const e=n.get("title"),s=n.get("content");if(!e||!s)return alert("Miss");await new Promise(a=>setTimeout(a,1e3)),alert(`Title: ${e}, Content: ${s}`)}function eN(){return t.jsxs("form",{action:Nx,children:[t.jsx(yn,{label:"Title",name:"title"}),t.jsx(yn,{label:"content",name:"content"}),t.jsx(le,{children:"Submit"})]})}function nN({children:n}){const{pending:e}=cl.useFormStatus();return t.jsx(le,{primary:!0,disabled:e,children:e?"loading...":n})}function up(){return t.jsxs("form",{action:Nx,children:[t.jsx(yn,{label:"Title",name:"title"}),t.jsx(yn,{label:"content",name:"content"}),t.jsx(nN,{children:"Submit"})]})}const ti=`export async function formAction(fd) {
  const title = fd.get('title')
  const content = fd.get('content')
  if (!title || !content) {
    return alert('Miss')
  }
  await new Promise(resolve => setTimeout(resolve, 1000))
  alert(\`Title: \${title}, Content: \${content}\`)
}
`,tN=`import Input from 'components/Input'
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
`,dp=`import Input from 'components/Input'
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
`,mp=`import {useFormStatus} from 'react-dom'
import Button from "components/Button";

export default function SubmitButton({children}) {
  const {pending} = useFormStatus()
  return (
    <Button primary disabled={pending}>
      {pending ? 'loading...' : children}
    </Button>
  )
}
`,sN=`import {useState} from 'react'
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
`;function pp(n){const e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注：由于 FormAction 在 next.js 中的表现暂时还不稳定，因此，本文以及后续文章的探讨全部都是基于他们在客户端的交互与表现"}),`
`]}),`
`,t.jsx(T,{children:t.jsx(eN,{})}),`
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
`,t.jsx(In,{files:{Demo01:tN,"actions.js":ti}}),`
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
`,t.jsx(T,{children:t.jsx(up,{})}),`
`,t.jsxs(e.p,{children:["这里主要是针对提交按钮做的操作，因此我们需要单独将提交按钮相关的部分拿出来封装成为一个子组件，并在子组件中利用 ",t.jsx(e.code,{children:"useFormStatus"})," 获取异步 action 的 pending 状态。"]}),`
`,t.jsx(e.p,{children:"代码非常的简单，如下所示"}),`
`,t.jsx(In,{files:{Demo02:dp,SubmitButton:mp,"actions.js":ti},active:"1"}),`
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
`,t.jsx(T,{children:t.jsx(up,{})}),`
`,t.jsx(In,{files:{Demo03:dp,Input:sN,SubmitButton:mp,"actions.js":ti},active:"1"}),`
`,t.jsx(e.h2,{children:"5"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"总结"})}),`
`,t.jsx(e.p,{children:"useFormStatus 是结合 action 异步请求时使用的 hook，它们是对 HTML 表单能力的增强。因此我们可以借助他们与 HTML 表单元素自身支持的特性实现更复杂的表单交互逻辑。"}),`
`,t.jsxs(e.p,{children:["这里我们需要注意的是 action 与 onSubmit 的区别。onSubmit 会优先于 action 执行。并且，如果我们在 onSubmit 的回调函数中，使用了 ",t.jsx(e.code,{children:"preventDefault"}),"，action 回调将不会执行"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`function onSubmit(e) {
  e.preventDefault()
  // ...
}
`})}),`
`,t.jsx(e.p,{children:"在 onSubmit 中，我们可以结合 state，通过控制数据的行为来自定义表单行为，而无需过多依赖 HTML 表单元素本身的能力。具体如何抉择大家需要根据自身项目的需求情况来定。"})]})}function aN(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(pp,{...n})}):pp(n)}function lN(){return t.jsx(Ot,{renderArticle:n=>t.jsx(aN,{components:{code:n}})})}async function rN(n){return n+1}function cN(){const[n,e]=h.useActionState(rN,0);return t.jsxs("form",{action:e,className:"flex items-center",children:[t.jsx("button",{children:"count++"}),t.jsx("div",{className:"ml-4",children:n})]})}function iN({cart:n=[]}){return t.jsx("div",{children:n.map((e,s)=>t.jsxs("div",{className:"border border-yellow-400 p-4 rounded my-4",children:[t.jsxs("div",{className:"font-bold",children:["title: ",e.title]}),t.jsxs("div",{children:["id: ",e.id]}),t.jsxs("div",{children:["count: ",e.count||0]})]},`cart_${s}`))})}async function oN(n,e,s){const a=e.get("id"),l=e.get("title");return await new Promise(r=>{setTimeout(()=>{s({id:a,title:l,count:n+1}),r()},300)}),n+1}function uN({children:n}){const{pending:e}=cl.useFormStatus();return t.jsxs(le,{primary:!0,disabled:e,children:[n,e?"...":""]})}function fp({id:n,title:e,onSubmit:s}){const[a,l]=h.useActionState((r,c)=>oN(r,c,s),0);return t.jsxs("form",{action:l,className:"border p-4 my-3 rounded",children:[t.jsxs("h1",{className:"!my-2",children:["book name: ",e]}),t.jsx("input",{type:"hidden",name:"title",value:e}),t.jsx("input",{type:"hidden",name:"id",value:n}),t.jsxs("div",{style:{marginBottom:"20px"},children:["cart count: ",a]}),t.jsx(uN,{children:"ADD TO CART"})]})}function dN(){const[n,e]=h.useState([]);function s(a){const l=n.find(r=>r.id===a.id);if(l)return l.count+=1,e([...n]);e(r=>[...r,a])}return t.jsxs("div",{children:[t.jsx(fp,{id:"001",title:"JavaScript Core advance",onSubmit:s}),t.jsx(fp,{id:"002",title:"React19 all solution",onSubmit:s}),t.jsx(iN,{cart:n})]})}const mN=`export async function submit(cur, formData, onSubmit) {
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
`,pN=`import { useState } from 'react'

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
`,fN=`import {useFormStatus} from 'react-dom'
import Button from "components/Button";

export default function SubmitButton({children}) {
  const {pending} = useFormStatus()
  return (
    <Button primary disabled={pending}>
      {children}{pending ? '...' : ''}
    </Button>
  )
}
`,hN=`import {useActionState} from 'react'
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
`,xN=`function CartList({cart = []}) {
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
`;function hp(n){const e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注：由于 FormAction 在 next.js 中的表现暂时还不稳定，因此，本文以及后续文章的探讨全部都是基于他们在客户端的交互与表现"}),`
`]}),`
`,t.jsx(T,{children:t.jsx(cN,{})}),`
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
`,t.jsx(T,{reload:!0,children:t.jsx(dN,{})}),`
`,t.jsx(In,{files:{Demo02:pN,BookItem:hN,"actions.js":mN,SubmitButton:fN,List:xN}}),`
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
`})})]})}function gN(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(hp,{...n})}):hp(n)}function vN(){return t.jsx(Ot,{renderArticle:n=>t.jsx(gN,{components:{code:n}})})}const Sx=[{type:"tip",name:"前言"},{path:"index",name:"1、开发方式变革",component:O5},{path:"layers",name:"2、学习的三个层次",component:W5},{path:"create",name:"3、创建项目",component:a4},{type:"tip",name:"use(promise)"},{path:"use/base",name:"3、use 基础知识",component:N4},{path:"use/suspense",name:"4、Suspense",component:H4},{path:"use/update",name:"5、点击更新数据",component:s3},{path:"use/initialize",name:"6、初始化请求并更新",component:j3},{path:"use/updatetolist",name:"7、请求并新增到列表",component:L3},{path:"use/loadmore",name:"8、分页列表加载更多",component:K3},{path:"use/search",name:"9、搜索",component:cy},{path:"use/tabs",name:"10、tab 简单切换",component:by,label:"1"},{path:"use/tabshard",name:"11、tab 缓存切换",component:By,label:"2"},{path:"use/fromchildren",name:"12、父级获取数据",component:Ky,label:"3"},{path:"use/nest",name:"13、Suspense 嵌套",component:r6},{path:"use/react16",name:"14、在低版本中使用",component:g6},{type:"tip",name:"use(context)"},{path:"use/ref",name:"15、ref 调整",component:$6},{path:"use/modal",name:"16、自定义弹窗组件",component:H6},{path:"use/contextmodify",name:"17、弹窗中更改内容",component:P6},{path:"use/skinswitch",name:"18、皮肤切换次数",component:i7},{type:"tip",name:"并发 API"},{path:"use/deferred",name:"19、useDeferredValue",component:_7},{path:"use/transition",name:"20、useTransition",component:G7},{type:"tip",name:"Compiler"},{path:"use/importwith19",name:"21、React 19 中引入",component:J7},{path:"use/importwithlower",name:"22、低版本中引入",component:I7},{path:"use/importwithwebpack",name:"23、webpack中引入",component:a8},{path:"use/compilerbase",name:"24、Compiler 编译原理",component:u8},{path:"use/compilercount",name:"25、收益分析-递增",component:x8},{path:"use/compilerexpensive",name:"26、收益分析-耗时子组件",component:S8},{path:"use/compilertabs",name:"27、收益分析-tabs",component:U8},{type:"tip",name:"form action"},{path:"formaction/base",name:"28、form 基础",component:G8},{path:"formaction/formdata",name:"29、FormData 基础",component:Y8},{path:"formaction/action",name:"30、form action",component:I8},{path:"formaction/useformstatus",name:"31、useFormStatus",component:lN},{path:"formaction/useactionstate",name:"32、useActionState",component:vN}];function xp(){return t.jsx("div",{children:Sx.map((n,e)=>n.type==="tip"?t.jsx("div",{className:"mx-2 text-sm px-4 text-gray-400 first:pt-0 pb-4 pt-8",children:n.name},`z-${e}`):t.jsx(Cn,{className:"text-gray-700",activeName:"text-blue-700",to:n.path,children:t.jsxs("li",{className:"mx-2 px-4 py-3 transition hover:bg-blue-100 text-sm flex items-center justify-between hover:text-blue-700 rounded",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})}),t.jsx("div",{className:"ml-2 line-clamp-1",children:n.name})]}),n.label?t.jsx(Q0,{label:n.label,primary:!0,className:"ml-2"}):null]},n.path)},n.path))})}function jN(){const n=ru(),e=h.useRef(new Map),s=cu(),{pathname:a}=cs();h.useReducer(r=>!r)[1];const l=h.useRef(null);return e.current.has(a)||e.current.set(a,s),h.useEffect(()=>{location.pathname==="/tutorial"&&n("index")},[a]),t.jsxs("div",{className:"pt-16 md:flex",children:[t.jsx(le,{signal:!0,className:"fixed bottom-6 right-6 z-40 md:hidden",onClick:()=>l.current.show(),children:"目录"}),t.jsx(nc,{ref:l,onClose:()=>l.current.close(),children:t.jsx("div",{className:"bg-white h-full py-4 overflow-scroll",children:t.jsx(xp,{})})}),t.jsxs("nav",{className:"hidden md:block w-60 sticky top-16 h-[calc(100vh_-_5rem)] overflow-y-auto bg-hei",children:[t.jsxs("div",{className:"flex items-center px-4 py-8",children:[t.jsx("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-cyan-500",children:t.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})})}),t.jsxs("div",{className:"text-sm",children:[t.jsx("div",{children:"当前版本"}),t.jsx("div",{className:"text-gray-500",children:"React@19.0.0-rc"})]})]}),t.jsx("ul",{className:"border-r h-[calc(100vh_-_9rem_-_35px)] overflow-y-auto pb-8",children:t.jsx(xp,{})})]}),t.jsx("div",{className:"md:flex-1 md:w-[calc(100vw_-_15rem)] p-4 md:p-8 min-h-[calc(100vh_-_5rem)] box-border",children:Array.from(e.current).map(([r,c])=>t.jsx("div",{style:{display:a===r?"block":"none"},children:c},r))})]})}function gp(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"基础使用"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Button>hello button</Button>
`})}),`
`,t.jsx("div",{children:t.jsx(le,{children:"hello button"})}),`
`,t.jsx(e.p,{children:"类型"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Button danger>Danger</Button>
<Button primary>Primary</Button>
<Button success>Success</Button>
<Button signal>Signal</Button>
`})}),`
`,t.jsx(T,{children:t.jsxs("div",{className:"mt-4 flex justify-around",children:[t.jsx(le,{danger:!0,children:"Danger"}),t.jsx(le,{primary:!0,children:"Primary"}),t.jsx(le,{success:!0,children:"Success"}),t.jsx(le,{signal:!0,children:"Signal"})]})}),`
`,t.jsx(e.p,{children:"大小"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Button danger sm className="mr-4">Danger</Button>
<Button danger className="mr-4">Danger</Button>
<Button danger lg>Danger</Button>
`})}),`
`,t.jsxs(T,{children:[t.jsxs("div",{className:"mt-4",children:[t.jsx(le,{danger:!0,sm:!0,className:"mr-4",children:"Danger"}),t.jsx(le,{danger:!0,className:"mr-4",children:"Danger"}),t.jsx(le,{danger:!0,lg:!0,children:"Danger"})]}),t.jsxs("div",{className:"mt-4",children:[t.jsx(le,{success:!0,lg:!0,className:"mr-4",children:"Success"}),t.jsx(le,{success:!0,className:"mr-4",children:"Success"}),t.jsx(le,{success:!0,sm:!0,children:"Success"})]}),t.jsxs("div",{className:"mt-4",children:[t.jsx(le,{primary:!0,sm:!0,className:"mr-4",children:"Primary"}),t.jsx(le,{primary:!0,className:"mr-4",children:"Primary"}),t.jsx(le,{primary:!0,lg:!0,children:"Primary"})]}),t.jsxs("div",{className:"mt-4",children:[t.jsx(le,{signal:!0,lg:!0,className:"mr-4",children:"Signal"}),t.jsx(le,{signal:!0,className:"mr-4",children:"Signal"}),t.jsx(le,{signal:!0,sm:!0,children:"Signal"})]})]}),`
`,t.jsx(e.p,{children:"完整源码"}),`
`,t.jsx(In,{files:{"index.jsx":gl}})]})}function bN(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(gp,{...n})}):gp(n)}function yN(){return t.jsx(Ot,{renderArticle:n=>t.jsx(bN,{components:{code:n}}),isGiscus:!1})}function vp(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"Input 基础使用"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Input placeholder="请输入任意内容" />
`})}),`
`,t.jsx(T,{children:t.jsx(yn,{placeholder:"请输入任意内容"})})]})}function NN(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(vp,{...n})}):vp(n)}function SN(){return t.jsx(Ot,{renderArticle:n=>t.jsx(NN,{components:{code:n}}),isGiscus:!1})}function wN(n){return t.jsx("div",{className:"border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function jp(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"基础使用"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`<Skeleton />
`})}),`
`,t.jsx(wN,{})]})}function _N(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(jp,{...n})}):jp(n)}function kN(){return t.jsx(Ot,{renderArticle:n=>t.jsx(_N,{components:{code:n}}),isGiscus:!1})}const wx=[{type:"tip",name:"基础组件"},{path:"button",name:"1、按钮 Button",component:yN},{path:"input",name:"2、输入框 Input",component:SN},{path:"skeleton",name:"2、骨架屏 Skeleton",component:kN}];function CN(){const n=ru(),e=h.useRef(new Map),s=cu(),{pathname:a}=cs(),l=h.useReducer(r=>!r)[1];return e.current.has(a)||e.current.set(a,s),h.useEffect(()=>{location.pathname==="/component"&&n("button")},[a]),t.jsxs("div",{className:"pt-16 flex",children:[t.jsxs("nav",{className:"hidden md:block w-60 sticky top-16 h-[calc(100vh_-_5rem)] overflow-y-auto bg-hei",children:[t.jsxs("div",{className:"flex items-center px-4 py-8",children:[t.jsx("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-cyan-500",children:t.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})})}),t.jsxs("div",{className:"text-sm",children:[t.jsx("div",{children:"当前版本"}),t.jsx("div",{className:"text-gray-500",children:"React@19.0.0-rc"})]})]}),t.jsx("ul",{className:"border-r h-[calc(100vh_-_9rem_-_35px)] overflow-y-auto pb-8",children:wx.map((r,c)=>r.type==="tip"?t.jsx("div",{className:"mx-2 text-sm px-4 text-gray-400 first:pt-0 pb-4 pt-8",children:r.name},`z-${c}`):t.jsx(Cn,{className:"text-gray-700",activeName:"text-blue-700",to:r.path,onClick:l,children:t.jsxs("li",{className:"mx-2 px-4 py-3 transition hover:bg-blue-100 text-sm flex items-center justify-between hover:text-blue-700 rounded",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})}),t.jsx("div",{className:"ml-2 line-clamp-1",children:r.name})]}),r.label?t.jsx(Q0,{label:r.label,primary:!0,className:"ml-2"}):null]},r.path)},r.path))})]}),t.jsx("div",{className:"w-full md:w-[calc(100vw_-_15rem)] p-8 min-h-[calc(100vh_-_5rem)] box-border",children:Array.from(e.current).map(([r,c])=>t.jsx("div",{style:{display:a===r?"block":"none"},children:c},r))})]})}function RN(){return t.jsxs("div",{children:[t.jsx(jj,{className:"line"}),t.jsx(vv,{})]})}function EN(){return t.jsx(bv,{children:t.jsxs(dt,{path:"/",element:t.jsx(RN,{}),children:[t.jsx(dt,{index:!0,element:t.jsx(y5,{})}),t.jsx(dt,{path:"tutorial",element:t.jsx(jN,{}),children:Sx.filter(n=>!!n.path).map((n,e)=>t.jsx(dt,{path:n.path,element:t.jsx(h.Suspense,{fallback:t.jsx(nm,{}),children:t.jsx(n.component,{})})},n.path))}),t.jsx(dt,{path:"component",element:t.jsx(CN,{}),children:wx.filter(n=>!!n.path).map((n,e)=>t.jsx(dt,{path:n.path,element:t.jsx(h.Suspense,{fallback:t.jsx(nm,{}),children:t.jsx(n.component,{})})},n.path))}),t.jsx(dt,{path:"*",element:t.jsx("div",{children:"nothingsdfsdfsdf"})})]})})}M2.createRoot(document.getElementById("root")).render(t.jsx(h.StrictMode,{children:t.jsx(Cv,{children:t.jsx(EN,{})})}));
