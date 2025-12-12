(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))p(H);new MutationObserver(H=>{for(const L of H)if(L.type==="childList")for(const tt of L.addedNodes)tt.tagName==="LINK"&&tt.rel==="modulepreload"&&p(tt)}).observe(document,{childList:!0,subtree:!0});function B(H){const L={};return H.integrity&&(L.integrity=H.integrity),H.referrerPolicy&&(L.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?L.credentials="include":H.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function p(H){if(H.ep)return;H.ep=!0;const L=B(H);fetch(H.href,L)}})();function Cd(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var ur={exports:{}},bi={};var vd;function n0(){if(vd)return bi;vd=1;var v=Symbol.for("react.transitional.element"),_=Symbol.for("react.fragment");function B(p,H,L){var tt=null;if(L!==void 0&&(tt=""+L),H.key!==void 0&&(tt=""+H.key),"key"in H){L={};for(var pt in H)pt!=="key"&&(L[pt]=H[pt])}else L=H;return H=L.ref,{$$typeof:v,type:p,key:tt,ref:H!==void 0?H:null,props:L}}return bi.Fragment=_,bi.jsx=B,bi.jsxs=B,bi}var yd;function u0(){return yd||(yd=1,ur.exports=n0()),ur.exports}var r=u0(),cr={exports:{}},q={};var bd;function c0(){if(bd)return q;bd=1;var v=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),pt=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),at=Symbol.iterator;function Mt(s){return s===null||typeof s!="object"?null:(s=at&&s[at]||s["@@iterator"],typeof s=="function"?s:null)}var Rt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yt=Object.assign,wa={};function $t(s,T,j){this.props=s,this.context=T,this.refs=wa,this.updater=j||Rt}$t.prototype.isReactComponent={},$t.prototype.setState=function(s,T){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,T,"setState")},$t.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function Wa(){}Wa.prototype=$t.prototype;function Bt(s,T,j){this.props=s,this.context=T,this.refs=wa,this.updater=j||Rt}var ra=Bt.prototype=new Wa;ra.constructor=Bt,Yt(ra,$t.prototype),ra.isPureReactComponent=!0;var Ea=Array.isArray;function Gt(){}var F={H:null,A:null,T:null,S:null},Xt=Object.prototype.hasOwnProperty;function Ta(s,T,j){var D=j.ref;return{$$typeof:v,type:s,key:T,ref:D!==void 0?D:null,props:j}}function Xe(s,T){return Ta(s.type,T,s.props)}function Aa(s){return typeof s=="object"&&s!==null&&s.$$typeof===v}function Qt(s){var T={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(j){return T[j]})}var ze=/\/+/g;function _a(s,T){return typeof s=="object"&&s!==null&&s.key!=null?Qt(""+s.key):T.toString(36)}function ya(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(Gt,Gt):(s.status="pending",s.then(function(T){s.status==="pending"&&(s.status="fulfilled",s.value=T)},function(T){s.status==="pending"&&(s.status="rejected",s.reason=T)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function b(s,T,j,D,G){var Z=typeof s;(Z==="undefined"||Z==="boolean")&&(s=null);var et=!1;if(s===null)et=!0;else switch(Z){case"bigint":case"string":case"number":et=!0;break;case"object":switch(s.$$typeof){case v:case _:et=!0;break;case N:return et=s._init,b(et(s._payload),T,j,D,G)}}if(et)return G=G(s),et=D===""?"."+_a(s,0):D,Ea(G)?(j="",et!=null&&(j=et.replace(ze,"$&/")+"/"),b(G,T,j,"",function(Nl){return Nl})):G!=null&&(Aa(G)&&(G=Xe(G,j+(G.key==null||s&&s.key===G.key?"":(""+G.key).replace(ze,"$&/")+"/")+et)),T.push(G)),1;et=0;var Lt=D===""?".":D+":";if(Ea(s))for(var xt=0;xt<s.length;xt++)D=s[xt],Z=Lt+_a(D,xt),et+=b(D,T,j,Z,G);else if(xt=Mt(s),typeof xt=="function")for(s=xt.call(s),xt=0;!(D=s.next()).done;)D=D.value,Z=Lt+_a(D,xt++),et+=b(D,T,j,Z,G);else if(Z==="object"){if(typeof s.then=="function")return b(ya(s),T,j,D,G);throw T=String(s),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return et}function A(s,T,j){if(s==null)return s;var D=[],G=0;return b(s,D,"","",function(Z){return T.call(j,Z,G++)}),D}function Y(s){if(s._status===-1){var T=s._result;T=T(),T.then(function(j){(s._status===0||s._status===-1)&&(s._status=1,s._result=j)},function(j){(s._status===0||s._status===-1)&&(s._status=2,s._result=j)}),s._status===-1&&(s._status=0,s._result=T)}if(s._status===1)return s._result.default;throw s._result}var nt=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},ft={map:A,forEach:function(s,T,j){A(s,function(){T.apply(this,arguments)},j)},count:function(s){var T=0;return A(s,function(){T++}),T},toArray:function(s){return A(s,function(T){return T})||[]},only:function(s){if(!Aa(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return q.Activity=M,q.Children=ft,q.Component=$t,q.Fragment=B,q.Profiler=H,q.PureComponent=Bt,q.StrictMode=p,q.Suspense=O,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,q.__COMPILER_RUNTIME={__proto__:null,c:function(s){return F.H.useMemoCache(s)}},q.cache=function(s){return function(){return s.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(s,T,j){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var D=Yt({},s.props),G=s.key;if(T!=null)for(Z in T.key!==void 0&&(G=""+T.key),T)!Xt.call(T,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&T.ref===void 0||(D[Z]=T[Z]);var Z=arguments.length-2;if(Z===1)D.children=j;else if(1<Z){for(var et=Array(Z),Lt=0;Lt<Z;Lt++)et[Lt]=arguments[Lt+2];D.children=et}return Ta(s.type,G,D)},q.createContext=function(s){return s={$$typeof:tt,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:L,_context:s},s},q.createElement=function(s,T,j){var D,G={},Z=null;if(T!=null)for(D in T.key!==void 0&&(Z=""+T.key),T)Xt.call(T,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(G[D]=T[D]);var et=arguments.length-2;if(et===1)G.children=j;else if(1<et){for(var Lt=Array(et),xt=0;xt<et;xt++)Lt[xt]=arguments[xt+2];G.children=Lt}if(s&&s.defaultProps)for(D in et=s.defaultProps,et)G[D]===void 0&&(G[D]=et[D]);return Ta(s,Z,G)},q.createRef=function(){return{current:null}},q.forwardRef=function(s){return{$$typeof:pt,render:s}},q.isValidElement=Aa,q.lazy=function(s){return{$$typeof:N,_payload:{_status:-1,_result:s},_init:Y}},q.memo=function(s,T){return{$$typeof:z,type:s,compare:T===void 0?null:T}},q.startTransition=function(s){var T=F.T,j={};F.T=j;try{var D=s(),G=F.S;G!==null&&G(j,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Gt,nt)}catch(Z){nt(Z)}finally{T!==null&&j.types!==null&&(T.types=j.types),F.T=T}},q.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},q.use=function(s){return F.H.use(s)},q.useActionState=function(s,T,j){return F.H.useActionState(s,T,j)},q.useCallback=function(s,T){return F.H.useCallback(s,T)},q.useContext=function(s){return F.H.useContext(s)},q.useDebugValue=function(){},q.useDeferredValue=function(s,T){return F.H.useDeferredValue(s,T)},q.useEffect=function(s,T){return F.H.useEffect(s,T)},q.useEffectEvent=function(s){return F.H.useEffectEvent(s)},q.useId=function(){return F.H.useId()},q.useImperativeHandle=function(s,T,j){return F.H.useImperativeHandle(s,T,j)},q.useInsertionEffect=function(s,T){return F.H.useInsertionEffect(s,T)},q.useLayoutEffect=function(s,T){return F.H.useLayoutEffect(s,T)},q.useMemo=function(s,T){return F.H.useMemo(s,T)},q.useOptimistic=function(s,T){return F.H.useOptimistic(s,T)},q.useReducer=function(s,T,j){return F.H.useReducer(s,T,j)},q.useRef=function(s){return F.H.useRef(s)},q.useState=function(s){return F.H.useState(s)},q.useSyncExternalStore=function(s,T,j){return F.H.useSyncExternalStore(s,T,j)},q.useTransition=function(){return F.H.useTransition()},q.version="19.2.1",q}var Sd;function gr(){return Sd||(Sd=1,cr.exports=c0()),cr.exports}var At=gr();const r0=Cd(At);var rr={exports:{}},Si={},fr={exports:{}},or={};var zd;function f0(){return zd||(zd=1,(function(v){function _(b,A){var Y=b.length;b.push(A);t:for(;0<Y;){var nt=Y-1>>>1,ft=b[nt];if(0<H(ft,A))b[nt]=A,b[Y]=ft,Y=nt;else break t}}function B(b){return b.length===0?null:b[0]}function p(b){if(b.length===0)return null;var A=b[0],Y=b.pop();if(Y!==A){b[0]=Y;t:for(var nt=0,ft=b.length,s=ft>>>1;nt<s;){var T=2*(nt+1)-1,j=b[T],D=T+1,G=b[D];if(0>H(j,Y))D<ft&&0>H(G,j)?(b[nt]=G,b[D]=Y,nt=D):(b[nt]=j,b[T]=Y,nt=T);else if(D<ft&&0>H(G,Y))b[nt]=G,b[D]=Y,nt=D;else break t}}return A}function H(b,A){var Y=b.sortIndex-A.sortIndex;return Y!==0?Y:b.id-A.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var L=performance;v.unstable_now=function(){return L.now()}}else{var tt=Date,pt=tt.now();v.unstable_now=function(){return tt.now()-pt}}var O=[],z=[],N=1,M=null,at=3,Mt=!1,Rt=!1,Yt=!1,wa=!1,$t=typeof setTimeout=="function"?setTimeout:null,Wa=typeof clearTimeout=="function"?clearTimeout:null,Bt=typeof setImmediate<"u"?setImmediate:null;function ra(b){for(var A=B(z);A!==null;){if(A.callback===null)p(z);else if(A.startTime<=b)p(z),A.sortIndex=A.expirationTime,_(O,A);else break;A=B(z)}}function Ea(b){if(Yt=!1,ra(b),!Rt)if(B(O)!==null)Rt=!0,Gt||(Gt=!0,Qt());else{var A=B(z);A!==null&&ya(Ea,A.startTime-b)}}var Gt=!1,F=-1,Xt=5,Ta=-1;function Xe(){return wa?!0:!(v.unstable_now()-Ta<Xt)}function Aa(){if(wa=!1,Gt){var b=v.unstable_now();Ta=b;var A=!0;try{t:{Rt=!1,Yt&&(Yt=!1,Wa(F),F=-1),Mt=!0;var Y=at;try{a:{for(ra(b),M=B(O);M!==null&&!(M.expirationTime>b&&Xe());){var nt=M.callback;if(typeof nt=="function"){M.callback=null,at=M.priorityLevel;var ft=nt(M.expirationTime<=b);if(b=v.unstable_now(),typeof ft=="function"){M.callback=ft,ra(b),A=!0;break a}M===B(O)&&p(O),ra(b)}else p(O);M=B(O)}if(M!==null)A=!0;else{var s=B(z);s!==null&&ya(Ea,s.startTime-b),A=!1}}break t}finally{M=null,at=Y,Mt=!1}A=void 0}}finally{A?Qt():Gt=!1}}}var Qt;if(typeof Bt=="function")Qt=function(){Bt(Aa)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,_a=ze.port2;ze.port1.onmessage=Aa,Qt=function(){_a.postMessage(null)}}else Qt=function(){$t(Aa,0)};function ya(b,A){F=$t(function(){b(v.unstable_now())},A)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(b){b.callback=null},v.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xt=0<b?Math.floor(1e3/b):5},v.unstable_getCurrentPriorityLevel=function(){return at},v.unstable_next=function(b){switch(at){case 1:case 2:case 3:var A=3;break;default:A=at}var Y=at;at=A;try{return b()}finally{at=Y}},v.unstable_requestPaint=function(){wa=!0},v.unstable_runWithPriority=function(b,A){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var Y=at;at=b;try{return A()}finally{at=Y}},v.unstable_scheduleCallback=function(b,A,Y){var nt=v.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?nt+Y:nt):Y=nt,b){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=Y+ft,b={id:N++,callback:A,priorityLevel:b,startTime:Y,expirationTime:ft,sortIndex:-1},Y>nt?(b.sortIndex=Y,_(z,b),B(O)===null&&b===B(z)&&(Yt?(Wa(F),F=-1):Yt=!0,ya(Ea,Y-nt))):(b.sortIndex=ft,_(O,b),Rt||Mt||(Rt=!0,Gt||(Gt=!0,Qt()))),b},v.unstable_shouldYield=Xe,v.unstable_wrapCallback=function(b){var A=at;return function(){var Y=at;at=A;try{return b.apply(this,arguments)}finally{at=Y}}}})(or)),or}var Ed;function o0(){return Ed||(Ed=1,fr.exports=f0()),fr.exports}var sr={exports:{}},Ht={};var Td;function s0(){if(Td)return Ht;Td=1;var v=gr();function _(O){var z="https://react.dev/errors/"+O;if(1<arguments.length){z+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)z+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+O+"; visit "+z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function B(){}var p={d:{f:B,r:function(){throw Error(_(522))},D:B,C:B,L:B,m:B,X:B,S:B,M:B},p:0,findDOMNode:null},H=Symbol.for("react.portal");function L(O,z,N){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:M==null?null:""+M,children:O,containerInfo:z,implementation:N}}var tt=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function pt(O,z){if(O==="font")return"";if(typeof z=="string")return z==="use-credentials"?z:""}return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,Ht.createPortal=function(O,z){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11)throw Error(_(299));return L(O,z,null,N)},Ht.flushSync=function(O){var z=tt.T,N=p.p;try{if(tt.T=null,p.p=2,O)return O()}finally{tt.T=z,p.p=N,p.d.f()}},Ht.preconnect=function(O,z){typeof O=="string"&&(z?(z=z.crossOrigin,z=typeof z=="string"?z==="use-credentials"?z:"":void 0):z=null,p.d.C(O,z))},Ht.prefetchDNS=function(O){typeof O=="string"&&p.d.D(O)},Ht.preinit=function(O,z){if(typeof O=="string"&&z&&typeof z.as=="string"){var N=z.as,M=pt(N,z.crossOrigin),at=typeof z.integrity=="string"?z.integrity:void 0,Mt=typeof z.fetchPriority=="string"?z.fetchPriority:void 0;N==="style"?p.d.S(O,typeof z.precedence=="string"?z.precedence:void 0,{crossOrigin:M,integrity:at,fetchPriority:Mt}):N==="script"&&p.d.X(O,{crossOrigin:M,integrity:at,fetchPriority:Mt,nonce:typeof z.nonce=="string"?z.nonce:void 0})}},Ht.preinitModule=function(O,z){if(typeof O=="string")if(typeof z=="object"&&z!==null){if(z.as==null||z.as==="script"){var N=pt(z.as,z.crossOrigin);p.d.M(O,{crossOrigin:N,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0})}}else z==null&&p.d.M(O)},Ht.preload=function(O,z){if(typeof O=="string"&&typeof z=="object"&&z!==null&&typeof z.as=="string"){var N=z.as,M=pt(N,z.crossOrigin);p.d.L(O,N,{crossOrigin:M,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0,type:typeof z.type=="string"?z.type:void 0,fetchPriority:typeof z.fetchPriority=="string"?z.fetchPriority:void 0,referrerPolicy:typeof z.referrerPolicy=="string"?z.referrerPolicy:void 0,imageSrcSet:typeof z.imageSrcSet=="string"?z.imageSrcSet:void 0,imageSizes:typeof z.imageSizes=="string"?z.imageSizes:void 0,media:typeof z.media=="string"?z.media:void 0})}},Ht.preloadModule=function(O,z){if(typeof O=="string")if(z){var N=pt(z.as,z.crossOrigin);p.d.m(O,{as:typeof z.as=="string"&&z.as!=="script"?z.as:void 0,crossOrigin:N,integrity:typeof z.integrity=="string"?z.integrity:void 0})}else p.d.m(O)},Ht.requestFormReset=function(O){p.d.r(O)},Ht.unstable_batchedUpdates=function(O,z){return O(z)},Ht.useFormState=function(O,z,N){return tt.H.useFormState(O,z,N)},Ht.useFormStatus=function(){return tt.H.useHostTransitionStatus()},Ht.version="19.2.1",Ht}var Ad;function d0(){if(Ad)return sr.exports;Ad=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(_){console.error(_)}}return v(),sr.exports=s0(),sr.exports}var jd;function p0(){if(jd)return Si;jd=1;var v=o0(),_=gr(),B=d0();function p(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)a+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function L(t){var a=t,e=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(e=a.return),t=a.return;while(t)}return a.tag===3?e:null}function tt(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function pt(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function O(t){if(L(t)!==t)throw Error(p(188))}function z(t){var a=t.alternate;if(!a){if(a=L(t),a===null)throw Error(p(188));return a!==t?null:t}for(var e=t,l=a;;){var i=e.return;if(i===null)break;var n=i.alternate;if(n===null){if(l=i.return,l!==null){e=l;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===e)return O(i),t;if(n===l)return O(i),a;n=n.sibling}throw Error(p(188))}if(e.return!==l.return)e=i,l=n;else{for(var u=!1,c=i.child;c;){if(c===e){u=!0,e=i,l=n;break}if(c===l){u=!0,l=i,e=n;break}c=c.sibling}if(!u){for(c=n.child;c;){if(c===e){u=!0,e=n,l=i;break}if(c===l){u=!0,l=n,e=i;break}c=c.sibling}if(!u)throw Error(p(189))}}if(e.alternate!==l)throw Error(p(190))}if(e.tag!==3)throw Error(p(188));return e.stateNode.current===e?t:a}function N(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=N(t),a!==null)return a;t=t.sibling}return null}var M=Object.assign,at=Symbol.for("react.element"),Mt=Symbol.for("react.transitional.element"),Rt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),wa=Symbol.for("react.strict_mode"),$t=Symbol.for("react.profiler"),Wa=Symbol.for("react.consumer"),Bt=Symbol.for("react.context"),ra=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Gt=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),Ta=Symbol.for("react.activity"),Xe=Symbol.for("react.memo_cache_sentinel"),Aa=Symbol.iterator;function Qt(t){return t===null||typeof t!="object"?null:(t=Aa&&t[Aa]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Symbol.for("react.client.reference");function _a(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ze?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yt:return"Fragment";case $t:return"Profiler";case wa:return"StrictMode";case Ea:return"Suspense";case Gt:return"SuspenseList";case Ta:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Rt:return"Portal";case Bt:return t.displayName||"Context";case Wa:return(t._context.displayName||"Context")+".Consumer";case ra:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return a=t.displayName||null,a!==null?a:_a(t.type)||"Memo";case Xt:a=t._payload,t=t._init;try{return _a(t(a))}catch{}}return null}var ya=Array.isArray,b=_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},nt=[],ft=-1;function s(t){return{current:t}}function T(t){0>ft||(t.current=nt[ft],nt[ft]=null,ft--)}function j(t,a){ft++,nt[ft]=t.current,t.current=a}var D=s(null),G=s(null),Z=s(null),et=s(null);function Lt(t,a){switch(j(Z,a),j(G,t),j(D,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?Gs(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=Gs(a),t=Xs(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}T(D),j(D,t)}function xt(){T(D),T(G),T(Z)}function Nl(t){t.memoizedState!==null&&j(et,t);var a=D.current,e=Xs(a,t.type);a!==e&&(j(G,t),j(D,e))}function zi(t){G.current===t&&(T(D),T(G)),et.current===t&&(T(et),mi._currentValue=Y)}var Xn,hr;function Ee(t){if(Xn===void 0)try{throw Error()}catch(e){var a=e.stack.trim().match(/\n( *(at )?)/);Xn=a&&a[1]||"",hr=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xn+t+hr}var Qn=!1;function Zn(t,a){if(!t||Qn)return"";Qn=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(x){var m=x}Reflect.construct(t,[],E)}else{try{E.call()}catch(x){m=x}t.call(E.prototype)}}else{try{throw Error()}catch(x){m=x}(E=t())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(x){if(x&&m&&typeof x.stack=="string")return[x.stack,m.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),u=n[0],c=n[1];if(u&&c){var f=u.split(`
`),h=c.split(`
`);for(i=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;i<h.length&&!h[i].includes("DetermineComponentFrameRoot");)i++;if(l===f.length||i===h.length)for(l=f.length-1,i=h.length-1;1<=l&&0<=i&&f[l]!==h[i];)i--;for(;1<=l&&0<=i;l--,i--)if(f[l]!==h[i]){if(l!==1||i!==1)do if(l--,i--,0>i||f[l]!==h[i]){var y=`
`+f[l].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=l&&0<=i);break}}}finally{Qn=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Ee(e):""}function Bd(t,a){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==a&&a!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Zn(t.type,!1);case 11:return Zn(t.type.render,!1);case 1:return Zn(t.type,!0);case 31:return Ee("Activity");default:return""}}function mr(t){try{var a="",e=null;do a+=Bd(t,e),e=t,t=t.return;while(t);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Vn=Object.prototype.hasOwnProperty,Kn=v.unstable_scheduleCallback,kn=v.unstable_cancelCallback,Hd=v.unstable_shouldYield,Yd=v.unstable_requestPaint,It=v.unstable_now,Ld=v.unstable_getCurrentPriorityLevel,xr=v.unstable_ImmediatePriority,vr=v.unstable_UserBlockingPriority,Ei=v.unstable_NormalPriority,qd=v.unstable_LowPriority,yr=v.unstable_IdlePriority,Gd=v.log,Xd=v.unstable_setDisableYieldValue,Ol=null,Pt=null;function $a(t){if(typeof Gd=="function"&&Xd(t),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Ol,t)}catch{}}var ta=Math.clz32?Math.clz32:Vd,Qd=Math.log,Zd=Math.LN2;function Vd(t){return t>>>=0,t===0?32:31-(Qd(t)/Zd|0)|0}var Ti=256,Ai=262144,ji=4194304;function Te(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ni(t,a,e){var l=t.pendingLanes;if(l===0)return 0;var i=0,n=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=l&134217727;return c!==0?(l=c&~n,l!==0?i=Te(l):(u&=c,u!==0?i=Te(u):e||(e=c&~t,e!==0&&(i=Te(e))))):(c=l&~n,c!==0?i=Te(c):u!==0?i=Te(u):e||(e=l&~t,e!==0&&(i=Te(e)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,e=a&-a,n>=e||n===32&&(e&4194048)!==0)?a:i}function Ml(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Kd(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function br(){var t=ji;return ji<<=1,(ji&62914560)===0&&(ji=4194304),t}function Jn(t){for(var a=[],e=0;31>e;e++)a.push(t);return a}function wl(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function kd(t,a,e,l,i,n){var u=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,h=t.hiddenUpdates;for(e=u&~e;0<e;){var y=31-ta(e),E=1<<y;c[y]=0,f[y]=-1;var m=h[y];if(m!==null)for(h[y]=null,y=0;y<m.length;y++){var x=m[y];x!==null&&(x.lane&=-536870913)}e&=~E}l!==0&&Sr(t,l,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(u&~a))}function Sr(t,a,e){t.pendingLanes|=a,t.suspendedLanes&=~a;var l=31-ta(a);t.entangledLanes|=a,t.entanglements[l]=t.entanglements[l]|1073741824|e&261930}function zr(t,a){var e=t.entangledLanes|=a;for(t=t.entanglements;e;){var l=31-ta(e),i=1<<l;i&a|t[l]&a&&(t[l]|=a),e&=~i}}function Er(t,a){var e=a&-a;return e=(e&42)!==0?1:Fn(e),(e&(t.suspendedLanes|a))!==0?0:e}function Fn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tr(){var t=A.p;return t!==0?t:(t=window.event,t===void 0?32:sd(t.type))}function Ar(t,a){var e=A.p;try{return A.p=t,a()}finally{A.p=e}}var Ia=Math.random().toString(36).slice(2),wt="__reactFiber$"+Ia,Zt="__reactProps$"+Ia,Qe="__reactContainer$"+Ia,$n="__reactEvents$"+Ia,Jd="__reactListeners$"+Ia,Fd="__reactHandles$"+Ia,jr="__reactResources$"+Ia,_l="__reactMarker$"+Ia;function In(t){delete t[wt],delete t[Zt],delete t[$n],delete t[Jd],delete t[Fd]}function Ze(t){var a=t[wt];if(a)return a;for(var e=t.parentNode;e;){if(a=e[Qe]||e[wt]){if(e=a.alternate,a.child!==null||e!==null&&e.child!==null)for(t=Fs(t);t!==null;){if(e=t[wt])return e;t=Fs(t)}return a}t=e,e=t.parentNode}return null}function Ve(t){if(t=t[wt]||t[Qe]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Dl(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(p(33))}function Ke(t){var a=t[jr];return a||(a=t[jr]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Nt(t){t[_l]=!0}var Nr=new Set,Or={};function Ae(t,a){ke(t,a),ke(t+"Capture",a)}function ke(t,a){for(Or[t]=a,t=0;t<a.length;t++)Nr.add(a[t])}var Wd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mr={},wr={};function $d(t){return Vn.call(wr,t)?!0:Vn.call(Mr,t)?!1:Wd.test(t)?wr[t]=!0:(Mr[t]=!0,!1)}function Oi(t,a,e){if($d(a))if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+e)}}function Mi(t,a,e){if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+e)}}function Da(t,a,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(a,e,""+l)}}function fa(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _r(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Id(t,a,e){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(u){e=""+u,n.call(this,u)}}),Object.defineProperty(t,a,{enumerable:l.enumerable}),{getValue:function(){return e},setValue:function(u){e=""+u},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Pn(t){if(!t._valueTracker){var a=_r(t)?"checked":"value";t._valueTracker=Id(t,a,""+t[a])}}function Dr(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var e=a.getValue(),l="";return t&&(l=_r(t)?t.checked?"true":"false":t.value),t=l,t!==e?(a.setValue(t),!0):!1}function wi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Pd=/[\n"\\]/g;function oa(t){return t.replace(Pd,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function tu(t,a,e,l,i,n,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),a!=null?u==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+fa(a)):t.value!==""+fa(a)&&(t.value=""+fa(a)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),a!=null?au(t,u,fa(a)):e!=null?au(t,u,fa(e)):l!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+fa(c):t.removeAttribute("name")}function Cr(t,a,e,l,i,n,u,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||e!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){Pn(t);return}e=e!=null?""+fa(e):"",a=a!=null?""+fa(a):e,c||a===t.value||(t.value=a),t.defaultValue=a}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=c?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Pn(t)}function au(t,a,e){a==="number"&&wi(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function Je(t,a,e,l){if(t=t.options,a){a={};for(var i=0;i<e.length;i++)a["$"+e[i]]=!0;for(e=0;e<t.length;e++)i=a.hasOwnProperty("$"+t[e].value),t[e].selected!==i&&(t[e].selected=i),i&&l&&(t[e].defaultSelected=!0)}else{for(e=""+fa(e),a=null,i=0;i<t.length;i++){if(t[i].value===e){t[i].selected=!0,l&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function Ur(t,a,e){if(a!=null&&(a=""+fa(a),a!==t.value&&(t.value=a),e==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=e!=null?""+fa(e):""}function Rr(t,a,e,l){if(a==null){if(l!=null){if(e!=null)throw Error(p(92));if(ya(l)){if(1<l.length)throw Error(p(93));l=l[0]}e=l}e==null&&(e=""),a=e}e=fa(a),t.defaultValue=e,l=t.textContent,l===e&&l!==""&&l!==null&&(t.value=l),Pn(t)}function Fe(t,a){if(a){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=a;return}}t.textContent=a}var tp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Br(t,a,e){var l=a.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?l?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":l?t.setProperty(a,e):typeof e!="number"||e===0||tp.has(a)?a==="float"?t.cssFloat=e:t[a]=(""+e).trim():t[a]=e+"px"}function Hr(t,a,e){if(a!=null&&typeof a!="object")throw Error(p(62));if(t=t.style,e!=null){for(var l in e)!e.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var i in a)l=a[i],a.hasOwnProperty(i)&&e[i]!==l&&Br(t,i,l)}else for(var n in a)a.hasOwnProperty(n)&&Br(t,n,a[n])}function eu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ep=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _i(t){return ep.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ca(){}var lu=null;function iu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var We=null,$e=null;function Yr(t){var a=Ve(t);if(a&&(t=a.stateNode)){var e=t[Zt]||null;t:switch(t=a.stateNode,a.type){case"input":if(tu(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),a=e.name,e.type==="radio"&&a!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+oa(""+a)+'"][type="radio"]'),a=0;a<e.length;a++){var l=e[a];if(l!==t&&l.form===t.form){var i=l[Zt]||null;if(!i)throw Error(p(90));tu(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<e.length;a++)l=e[a],l.form===t.form&&Dr(l)}break t;case"textarea":Ur(t,e.value,e.defaultValue);break t;case"select":a=e.value,a!=null&&Je(t,!!e.multiple,a,!1)}}}var nu=!1;function Lr(t,a,e){if(nu)return t(a,e);nu=!0;try{var l=t(a);return l}finally{if(nu=!1,(We!==null||$e!==null)&&(yn(),We&&(a=We,t=$e,$e=We=null,Yr(a),t)))for(a=0;a<t.length;a++)Yr(t[a])}}function Cl(t,a){var e=t.stateNode;if(e===null)return null;var l=e[Zt]||null;if(l===null)return null;e=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(p(231,a,typeof e));return e}var Ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Ua)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{uu=!1}var Pa=null,cu=null,Di=null;function qr(){if(Di)return Di;var t,a=cu,e=a.length,l,i="value"in Pa?Pa.value:Pa.textContent,n=i.length;for(t=0;t<e&&a[t]===i[t];t++);var u=e-t;for(l=1;l<=u&&a[e-l]===i[n-l];l++);return Di=i.slice(t,1<l?1-l:void 0)}function Ci(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Ui(){return!0}function Gr(){return!1}function Vt(t){function a(e,l,i,n,u){this._reactName=e,this._targetInst=i,this.type=l,this.nativeEvent=n,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(e=t[c],this[c]=e?e(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ui:Gr,this.isPropagationStopped=Gr,this}return M(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),a}var je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ri=Vt(je),Rl=M({},je,{view:0,detail:0}),lp=Vt(Rl),ru,fu,Bl,Bi=M({},Rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bl&&(Bl&&t.type==="mousemove"?(ru=t.screenX-Bl.screenX,fu=t.screenY-Bl.screenY):fu=ru=0,Bl=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),Xr=Vt(Bi),ip=M({},Bi,{dataTransfer:0}),np=Vt(ip),up=M({},Rl,{relatedTarget:0}),ou=Vt(up),cp=M({},je,{animationName:0,elapsedTime:0,pseudoElement:0}),rp=Vt(cp),fp=M({},je,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),op=Vt(fp),sp=M({},je,{data:0}),Qr=Vt(sp),dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hp(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=gp[t])?!!a[t]:!1}function su(){return hp}var mp=M({},Rl,{key:function(t){if(t.key){var a=dp[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Ci(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(t){return t.type==="keypress"?Ci(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ci(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xp=Vt(mp),vp=M({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zr=Vt(vp),yp=M({},Rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),bp=Vt(yp),Sp=M({},je,{propertyName:0,elapsedTime:0,pseudoElement:0}),zp=Vt(Sp),Ep=M({},Bi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tp=Vt(Ep),Ap=M({},je,{newState:0,oldState:0}),jp=Vt(Ap),Np=[9,13,27,32],du=Ua&&"CompositionEvent"in window,Hl=null;Ua&&"documentMode"in document&&(Hl=document.documentMode);var Op=Ua&&"TextEvent"in window&&!Hl,Vr=Ua&&(!du||Hl&&8<Hl&&11>=Hl),Kr=" ",kr=!1;function Jr(t,a){switch(t){case"keyup":return Np.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ie=!1;function Mp(t,a){switch(t){case"compositionend":return Fr(a);case"keypress":return a.which!==32?null:(kr=!0,Kr);case"textInput":return t=a.data,t===Kr&&kr?null:t;default:return null}}function wp(t,a){if(Ie)return t==="compositionend"||!du&&Jr(t,a)?(t=qr(),Di=cu=Pa=null,Ie=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Vr&&a.locale!=="ko"?null:a.data;default:return null}}var _p={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wr(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!_p[t.type]:a==="textarea"}function $r(t,a,e,l){We?$e?$e.push(l):$e=[l]:We=l,a=jn(a,"onChange"),0<a.length&&(e=new Ri("onChange","change",null,e,l),t.push({event:e,listeners:a}))}var Yl=null,Ll=null;function Dp(t){Rs(t,0)}function Hi(t){var a=Dl(t);if(Dr(a))return t}function Ir(t,a){if(t==="change")return a}var Pr=!1;if(Ua){var pu;if(Ua){var gu="oninput"in document;if(!gu){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),gu=typeof tf.oninput=="function"}pu=gu}else pu=!1;Pr=pu&&(!document.documentMode||9<document.documentMode)}function af(){Yl&&(Yl.detachEvent("onpropertychange",ef),Ll=Yl=null)}function ef(t){if(t.propertyName==="value"&&Hi(Ll)){var a=[];$r(a,Ll,t,iu(t)),Lr(Dp,a)}}function Cp(t,a,e){t==="focusin"?(af(),Yl=a,Ll=e,Yl.attachEvent("onpropertychange",ef)):t==="focusout"&&af()}function Up(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hi(Ll)}function Rp(t,a){if(t==="click")return Hi(a)}function Bp(t,a){if(t==="input"||t==="change")return Hi(a)}function Hp(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var aa=typeof Object.is=="function"?Object.is:Hp;function ql(t,a){if(aa(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var e=Object.keys(t),l=Object.keys(a);if(e.length!==l.length)return!1;for(l=0;l<e.length;l++){var i=e[l];if(!Vn.call(a,i)||!aa(t[i],a[i]))return!1}return!0}function lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nf(t,a){var e=lf(t);t=0;for(var l;e;){if(e.nodeType===3){if(l=t+e.textContent.length,t<=a&&l>=a)return{node:e,offset:a-t};t=l}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=lf(e)}}function uf(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?uf(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function cf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=wi(t.document);a instanceof t.HTMLIFrameElement;){try{var e=typeof a.contentWindow.location.href=="string"}catch{e=!1}if(e)t=a.contentWindow;else break;a=wi(t.document)}return a}function hu(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var Yp=Ua&&"documentMode"in document&&11>=document.documentMode,Pe=null,mu=null,Gl=null,xu=!1;function rf(t,a,e){var l=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;xu||Pe==null||Pe!==wi(l)||(l=Pe,"selectionStart"in l&&hu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Gl&&ql(Gl,l)||(Gl=l,l=jn(mu,"onSelect"),0<l.length&&(a=new Ri("onSelect","select",null,a,e),t.push({event:a,listeners:l}),a.target=Pe)))}function Ne(t,a){var e={};return e[t.toLowerCase()]=a.toLowerCase(),e["Webkit"+t]="webkit"+a,e["Moz"+t]="moz"+a,e}var tl={animationend:Ne("Animation","AnimationEnd"),animationiteration:Ne("Animation","AnimationIteration"),animationstart:Ne("Animation","AnimationStart"),transitionrun:Ne("Transition","TransitionRun"),transitionstart:Ne("Transition","TransitionStart"),transitioncancel:Ne("Transition","TransitionCancel"),transitionend:Ne("Transition","TransitionEnd")},vu={},ff={};Ua&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Oe(t){if(vu[t])return vu[t];if(!tl[t])return t;var a=tl[t],e;for(e in a)if(a.hasOwnProperty(e)&&e in ff)return vu[t]=a[e];return t}var of=Oe("animationend"),sf=Oe("animationiteration"),df=Oe("animationstart"),Lp=Oe("transitionrun"),qp=Oe("transitionstart"),Gp=Oe("transitioncancel"),pf=Oe("transitionend"),gf=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function ba(t,a){gf.set(t,a),Ae(a,[t])}var Yi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},sa=[],al=0,bu=0;function Li(){for(var t=al,a=bu=al=0;a<t;){var e=sa[a];sa[a++]=null;var l=sa[a];sa[a++]=null;var i=sa[a];sa[a++]=null;var n=sa[a];if(sa[a++]=null,l!==null&&i!==null){var u=l.pending;u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i}n!==0&&hf(e,i,n)}}function qi(t,a,e,l){sa[al++]=t,sa[al++]=a,sa[al++]=e,sa[al++]=l,bu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Su(t,a,e,l){return qi(t,a,e,l),Gi(t)}function Me(t,a){return qi(t,null,null,a),Gi(t)}function hf(t,a,e){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e);for(var i=!1,n=t.return;n!==null;)n.childLanes|=e,l=n.alternate,l!==null&&(l.childLanes|=e),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-ta(e),t=n.hiddenUpdates,l=t[i],l===null?t[i]=[a]:l.push(a),a.lane=e|536870912),n):null}function Gi(t){if(50<fi)throw fi=0,wc=null,Error(p(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var el={};function Xp(t,a,e,l){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ea(t,a,e,l){return new Xp(t,a,e,l)}function zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ra(t,a){var e=t.alternate;return e===null?(e=ea(t.tag,a,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=a,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function mf(t,a){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Xi(t,a,e,l,i,n){var u=0;if(l=t,typeof t=="function")zu(t)&&(u=1);else if(typeof t=="string")u=kg(t,e,D.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ta:return t=ea(31,e,a,i),t.elementType=Ta,t.lanes=n,t;case Yt:return we(e.children,i,n,a);case wa:u=8,i|=24;break;case $t:return t=ea(12,e,a,i|2),t.elementType=$t,t.lanes=n,t;case Ea:return t=ea(13,e,a,i),t.elementType=Ea,t.lanes=n,t;case Gt:return t=ea(19,e,a,i),t.elementType=Gt,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bt:u=10;break t;case Wa:u=9;break t;case ra:u=11;break t;case F:u=14;break t;case Xt:u=16,l=null;break t}u=29,e=Error(p(130,t===null?"null":typeof t,"")),l=null}return a=ea(u,e,a,i),a.elementType=t,a.type=l,a.lanes=n,a}function we(t,a,e,l){return t=ea(7,t,l,a),t.lanes=e,t}function Eu(t,a,e){return t=ea(6,t,null,a),t.lanes=e,t}function xf(t){var a=ea(18,null,null,0);return a.stateNode=t,a}function Tu(t,a,e){return a=ea(4,t.children!==null?t.children:[],t.key,a),a.lanes=e,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var vf=new WeakMap;function da(t,a){if(typeof t=="object"&&t!==null){var e=vf.get(t);return e!==void 0?e:(a={value:t,source:a,stack:mr(a)},vf.set(t,a),a)}return{value:t,source:a,stack:mr(a)}}var ll=[],il=0,Qi=null,Xl=0,pa=[],ga=0,te=null,ja=1,Na="";function Ba(t,a){ll[il++]=Xl,ll[il++]=Qi,Qi=t,Xl=a}function yf(t,a,e){pa[ga++]=ja,pa[ga++]=Na,pa[ga++]=te,te=t;var l=ja;t=Na;var i=32-ta(l)-1;l&=~(1<<i),e+=1;var n=32-ta(a)+i;if(30<n){var u=i-i%5;n=(l&(1<<u)-1).toString(32),l>>=u,i-=u,ja=1<<32-ta(a)+i|e<<i|l,Na=n+t}else ja=1<<n|e<<i|l,Na=t}function Au(t){t.return!==null&&(Ba(t,1),yf(t,1,0))}function ju(t){for(;t===Qi;)Qi=ll[--il],ll[il]=null,Xl=ll[--il],ll[il]=null;for(;t===te;)te=pa[--ga],pa[ga]=null,Na=pa[--ga],pa[ga]=null,ja=pa[--ga],pa[ga]=null}function bf(t,a){pa[ga++]=ja,pa[ga++]=Na,pa[ga++]=te,ja=a.id,Na=a.overflow,te=t}var _t=null,st=null,W=!1,ae=null,ha=!1,Nu=Error(p(519));function ee(t){var a=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ql(da(a,t)),Nu}function Sf(t){var a=t.stateNode,e=t.type,l=t.memoizedProps;switch(a[wt]=t,a[Zt]=l,e){case"dialog":K("cancel",a),K("close",a);break;case"iframe":case"object":case"embed":K("load",a);break;case"video":case"audio":for(e=0;e<si.length;e++)K(si[e],a);break;case"source":K("error",a);break;case"img":case"image":case"link":K("error",a),K("load",a);break;case"details":K("toggle",a);break;case"input":K("invalid",a),Cr(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":K("invalid",a);break;case"textarea":K("invalid",a),Rr(a,l.value,l.defaultValue,l.children)}e=l.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||a.textContent===""+e||l.suppressHydrationWarning===!0||Ls(a.textContent,e)?(l.popover!=null&&(K("beforetoggle",a),K("toggle",a)),l.onScroll!=null&&K("scroll",a),l.onScrollEnd!=null&&K("scrollend",a),l.onClick!=null&&(a.onclick=Ca),a=!0):a=!1,a||ee(t,!0)}function zf(t){for(_t=t.return;_t;)switch(_t.tag){case 5:case 31:case 13:ha=!1;return;case 27:case 3:ha=!0;return;default:_t=_t.return}}function nl(t){if(t!==_t)return!1;if(!W)return zf(t),W=!0,!1;var a=t.tag,e;if((e=a!==3&&a!==27)&&((e=a===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Vc(t.type,t.memoizedProps)),e=!e),e&&st&&ee(t),zf(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));st=Js(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));st=Js(t)}else a===27?(a=st,me(t.type)?(t=Wc,Wc=null,st=t):st=a):st=_t?xa(t.stateNode.nextSibling):null;return!0}function _e(){st=_t=null,W=!1}function Ou(){var t=ae;return t!==null&&(Ft===null?Ft=t:Ft.push.apply(Ft,t),ae=null),t}function Ql(t){ae===null?ae=[t]:ae.push(t)}var Mu=s(null),De=null,Ha=null;function le(t,a,e){j(Mu,a._currentValue),a._currentValue=e}function Ya(t){t._currentValue=Mu.current,T(Mu)}function wu(t,a,e){for(;t!==null;){var l=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),t===e)break;t=t.return}}function _u(t,a,e,l){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var u=i.child;n=n.firstContext;t:for(;n!==null;){var c=n;n=i;for(var f=0;f<a.length;f++)if(c.context===a[f]){n.lanes|=e,c=n.alternate,c!==null&&(c.lanes|=e),wu(n.return,e,t),l||(u=null);break t}n=c.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(p(341));u.lanes|=e,n=u.alternate,n!==null&&(n.lanes|=e),wu(u,e,t),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function ul(t,a,e,l){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(p(387));if(u=u.memoizedProps,u!==null){var c=i.type;aa(i.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(i===et.current){if(u=i.alternate,u===null)throw Error(p(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(mi):t=[mi])}i=i.return}t!==null&&_u(a,t,e,l),a.flags|=262144}function Zi(t){for(t=t.firstContext;t!==null;){if(!aa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ce(t){De=t,Ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dt(t){return Ef(De,t)}function Vi(t,a){return De===null&&Ce(t),Ef(t,a)}function Ef(t,a){var e=a._currentValue;if(a={context:a,memoizedValue:e,next:null},Ha===null){if(t===null)throw Error(p(308));Ha=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Ha=Ha.next=a;return e}var Qp=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(e,l){t.push(l)}};this.abort=function(){a.aborted=!0,t.forEach(function(e){return e()})}},Zp=v.unstable_scheduleCallback,Vp=v.unstable_NormalPriority,bt={$$typeof:Bt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new Qp,data:new Map,refCount:0}}function Zl(t){t.refCount--,t.refCount===0&&Zp(Vp,function(){t.controller.abort()})}var Vl=null,Cu=0,cl=0,rl=null;function Kp(t,a){if(Vl===null){var e=Vl=[];Cu=0,cl=Bc(),rl={status:"pending",value:void 0,then:function(l){e.push(l)}}}return Cu++,a.then(Tf,Tf),a}function Tf(){if(--Cu===0&&Vl!==null){rl!==null&&(rl.status="fulfilled");var t=Vl;Vl=null,cl=0,rl=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function kp(t,a){var e=[],l={status:"pending",value:null,reason:null,then:function(i){e.push(i)}};return t.then(function(){l.status="fulfilled",l.value=a;for(var i=0;i<e.length;i++)(0,e[i])(a)},function(i){for(l.status="rejected",l.reason=i,i=0;i<e.length;i++)(0,e[i])(void 0)}),l}var Af=b.S;b.S=function(t,a){fs=It(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Kp(t,a),Af!==null&&Af(t,a)};var Ue=s(null);function Uu(){var t=Ue.current;return t!==null?t:ot.pooledCache}function Ki(t,a){a===null?j(Ue,Ue.current):j(Ue,a.pool)}function jf(){var t=Uu();return t===null?null:{parent:bt._currentValue,pool:t}}var fl=Error(p(460)),Ru=Error(p(474)),ki=Error(p(542)),Ji={then:function(){}};function Nf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Of(t,a,e){switch(e=t[e],e===void 0?t.push(a):e!==a&&(a.then(Ca,Ca),a=e),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,wf(t),t;default:if(typeof a.status=="string")a.then(Ca,Ca);else{if(t=ot,t!==null&&100<t.shellSuspendCounter)throw Error(p(482));t=a,t.status="pending",t.then(function(l){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=l}},function(l){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,wf(t),t}throw Be=a,fl}}function Re(t){try{var a=t._init;return a(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Be=e,fl):e}}var Be=null;function Mf(){if(Be===null)throw Error(p(459));var t=Be;return Be=null,t}function wf(t){if(t===fl||t===ki)throw Error(p(483))}var ol=null,Kl=0;function Fi(t){var a=Kl;return Kl+=1,ol===null&&(ol=[]),Of(ol,t,a)}function kl(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function Wi(t,a){throw a.$$typeof===at?Error(p(525)):(t=Object.prototype.toString.call(a),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function _f(t){function a(d,o){if(t){var g=d.deletions;g===null?(d.deletions=[o],d.flags|=16):g.push(o)}}function e(d,o){if(!t)return null;for(;o!==null;)a(d,o),o=o.sibling;return null}function l(d){for(var o=new Map;d!==null;)d.key!==null?o.set(d.key,d):o.set(d.index,d),d=d.sibling;return o}function i(d,o){return d=Ra(d,o),d.index=0,d.sibling=null,d}function n(d,o,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<o?(d.flags|=67108866,o):g):(d.flags|=67108866,o)):(d.flags|=1048576,o)}function u(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function c(d,o,g,S){return o===null||o.tag!==6?(o=Eu(g,d.mode,S),o.return=d,o):(o=i(o,g),o.return=d,o)}function f(d,o,g,S){var U=g.type;return U===Yt?y(d,o,g.props.children,S,g.key):o!==null&&(o.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Xt&&Re(U)===o.type)?(o=i(o,g.props),kl(o,g),o.return=d,o):(o=Xi(g.type,g.key,g.props,null,d.mode,S),kl(o,g),o.return=d,o)}function h(d,o,g,S){return o===null||o.tag!==4||o.stateNode.containerInfo!==g.containerInfo||o.stateNode.implementation!==g.implementation?(o=Tu(g,d.mode,S),o.return=d,o):(o=i(o,g.children||[]),o.return=d,o)}function y(d,o,g,S,U){return o===null||o.tag!==7?(o=we(g,d.mode,S,U),o.return=d,o):(o=i(o,g),o.return=d,o)}function E(d,o,g){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Eu(""+o,d.mode,g),o.return=d,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Mt:return g=Xi(o.type,o.key,o.props,null,d.mode,g),kl(g,o),g.return=d,g;case Rt:return o=Tu(o,d.mode,g),o.return=d,o;case Xt:return o=Re(o),E(d,o,g)}if(ya(o)||Qt(o))return o=we(o,d.mode,g,null),o.return=d,o;if(typeof o.then=="function")return E(d,Fi(o),g);if(o.$$typeof===Bt)return E(d,Vi(d,o),g);Wi(d,o)}return null}function m(d,o,g,S){var U=o!==null?o.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return U!==null?null:c(d,o,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mt:return g.key===U?f(d,o,g,S):null;case Rt:return g.key===U?h(d,o,g,S):null;case Xt:return g=Re(g),m(d,o,g,S)}if(ya(g)||Qt(g))return U!==null?null:y(d,o,g,S,null);if(typeof g.then=="function")return m(d,o,Fi(g),S);if(g.$$typeof===Bt)return m(d,o,Vi(d,g),S);Wi(d,g)}return null}function x(d,o,g,S,U){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return d=d.get(g)||null,c(o,d,""+S,U);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Mt:return d=d.get(S.key===null?g:S.key)||null,f(o,d,S,U);case Rt:return d=d.get(S.key===null?g:S.key)||null,h(o,d,S,U);case Xt:return S=Re(S),x(d,o,g,S,U)}if(ya(S)||Qt(S))return d=d.get(g)||null,y(o,d,S,U,null);if(typeof S.then=="function")return x(d,o,g,Fi(S),U);if(S.$$typeof===Bt)return x(d,o,g,Vi(o,S),U);Wi(o,S)}return null}function w(d,o,g,S){for(var U=null,$=null,C=o,Q=o=0,J=null;C!==null&&Q<g.length;Q++){C.index>Q?(J=C,C=null):J=C.sibling;var I=m(d,C,g[Q],S);if(I===null){C===null&&(C=J);break}t&&C&&I.alternate===null&&a(d,C),o=n(I,o,Q),$===null?U=I:$.sibling=I,$=I,C=J}if(Q===g.length)return e(d,C),W&&Ba(d,Q),U;if(C===null){for(;Q<g.length;Q++)C=E(d,g[Q],S),C!==null&&(o=n(C,o,Q),$===null?U=C:$.sibling=C,$=C);return W&&Ba(d,Q),U}for(C=l(C);Q<g.length;Q++)J=x(C,d,Q,g[Q],S),J!==null&&(t&&J.alternate!==null&&C.delete(J.key===null?Q:J.key),o=n(J,o,Q),$===null?U=J:$.sibling=J,$=J);return t&&C.forEach(function(Se){return a(d,Se)}),W&&Ba(d,Q),U}function R(d,o,g,S){if(g==null)throw Error(p(151));for(var U=null,$=null,C=o,Q=o=0,J=null,I=g.next();C!==null&&!I.done;Q++,I=g.next()){C.index>Q?(J=C,C=null):J=C.sibling;var Se=m(d,C,I.value,S);if(Se===null){C===null&&(C=J);break}t&&C&&Se.alternate===null&&a(d,C),o=n(Se,o,Q),$===null?U=Se:$.sibling=Se,$=Se,C=J}if(I.done)return e(d,C),W&&Ba(d,Q),U;if(C===null){for(;!I.done;Q++,I=g.next())I=E(d,I.value,S),I!==null&&(o=n(I,o,Q),$===null?U=I:$.sibling=I,$=I);return W&&Ba(d,Q),U}for(C=l(C);!I.done;Q++,I=g.next())I=x(C,d,Q,I.value,S),I!==null&&(t&&I.alternate!==null&&C.delete(I.key===null?Q:I.key),o=n(I,o,Q),$===null?U=I:$.sibling=I,$=I);return t&&C.forEach(function(i0){return a(d,i0)}),W&&Ba(d,Q),U}function rt(d,o,g,S){if(typeof g=="object"&&g!==null&&g.type===Yt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Mt:t:{for(var U=g.key;o!==null;){if(o.key===U){if(U=g.type,U===Yt){if(o.tag===7){e(d,o.sibling),S=i(o,g.props.children),S.return=d,d=S;break t}}else if(o.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Xt&&Re(U)===o.type){e(d,o.sibling),S=i(o,g.props),kl(S,g),S.return=d,d=S;break t}e(d,o);break}else a(d,o);o=o.sibling}g.type===Yt?(S=we(g.props.children,d.mode,S,g.key),S.return=d,d=S):(S=Xi(g.type,g.key,g.props,null,d.mode,S),kl(S,g),S.return=d,d=S)}return u(d);case Rt:t:{for(U=g.key;o!==null;){if(o.key===U)if(o.tag===4&&o.stateNode.containerInfo===g.containerInfo&&o.stateNode.implementation===g.implementation){e(d,o.sibling),S=i(o,g.children||[]),S.return=d,d=S;break t}else{e(d,o);break}else a(d,o);o=o.sibling}S=Tu(g,d.mode,S),S.return=d,d=S}return u(d);case Xt:return g=Re(g),rt(d,o,g,S)}if(ya(g))return w(d,o,g,S);if(Qt(g)){if(U=Qt(g),typeof U!="function")throw Error(p(150));return g=U.call(g),R(d,o,g,S)}if(typeof g.then=="function")return rt(d,o,Fi(g),S);if(g.$$typeof===Bt)return rt(d,o,Vi(d,g),S);Wi(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,o!==null&&o.tag===6?(e(d,o.sibling),S=i(o,g),S.return=d,d=S):(e(d,o),S=Eu(g,d.mode,S),S.return=d,d=S),u(d)):e(d,o)}return function(d,o,g,S){try{Kl=0;var U=rt(d,o,g,S);return ol=null,U}catch(C){if(C===fl||C===ki)throw C;var $=ea(29,C,null,d.mode);return $.lanes=S,$.return=d,$}finally{}}}var He=_f(!0),Df=_f(!1),ie=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ne(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ue(t,a,e){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(P&2)!==0){var i=l.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),l.pending=a,a=Gi(t),hf(t,null,e),a}return qi(t,l,a,e),Gi(t)}function Jl(t,a,e){if(a=a.updateQueue,a!==null&&(a=a.shared,(e&4194048)!==0)){var l=a.lanes;l&=t.pendingLanes,e|=l,a.lanes=e,zr(t,e)}}function Yu(t,a){var e=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,e===l)){var i=null,n=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};n===null?i=n=u:n=n.next=u,e=e.next}while(e!==null);n===null?i=n=a:n=n.next=a}else i=n=a;e={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=a:t.next=a,e.lastBaseUpdate=a}var Lu=!1;function Fl(){if(Lu){var t=rl;if(t!==null)throw t}}function Wl(t,a,e,l){Lu=!1;var i=t.updateQueue;ie=!1;var n=i.firstBaseUpdate,u=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var f=c,h=f.next;f.next=null,u===null?n=h:u.next=h,u=f;var y=t.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==u&&(c===null?y.firstBaseUpdate=h:c.next=h,y.lastBaseUpdate=f))}if(n!==null){var E=i.baseState;u=0,y=h=f=null,c=n;do{var m=c.lane&-536870913,x=m!==c.lane;if(x?(k&m)===m:(l&m)===m){m!==0&&m===cl&&(Lu=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var w=t,R=c;m=a;var rt=e;switch(R.tag){case 1:if(w=R.payload,typeof w=="function"){E=w.call(rt,E,m);break t}E=w;break t;case 3:w.flags=w.flags&-65537|128;case 0:if(w=R.payload,m=typeof w=="function"?w.call(rt,E,m):w,m==null)break t;E=M({},E,m);break t;case 2:ie=!0}}m=c.callback,m!==null&&(t.flags|=64,x&&(t.flags|=8192),x=i.callbacks,x===null?i.callbacks=[m]:x.push(m))}else x={lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(h=y=x,f=E):y=y.next=x,u|=m;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;x=c,c=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);y===null&&(f=E),i.baseState=f,i.firstBaseUpdate=h,i.lastBaseUpdate=y,n===null&&(i.shared.lanes=0),se|=u,t.lanes=u,t.memoizedState=E}}function Cf(t,a){if(typeof t!="function")throw Error(p(191,t));t.call(a)}function Uf(t,a){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Cf(e[t],a)}var sl=s(null),$i=s(0);function Rf(t,a){t=ka,j($i,t),j(sl,a),ka=t|a.baseLanes}function qu(){j($i,ka),j(sl,sl.current)}function Gu(){ka=$i.current,T(sl),T($i)}var la=s(null),ma=null;function ce(t){var a=t.alternate;j(vt,vt.current&1),j(la,t),ma===null&&(a===null||sl.current!==null||a.memoizedState!==null)&&(ma=t)}function Xu(t){j(vt,vt.current),j(la,t),ma===null&&(ma=t)}function Bf(t){t.tag===22?(j(vt,vt.current),j(la,t),ma===null&&(ma=t)):re()}function re(){j(vt,vt.current),j(la,la.current)}function ia(t){T(la),ma===t&&(ma=null),T(vt)}var vt=s(0);function Ii(t){for(var a=t;a!==null;){if(a.tag===13){var e=a.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Jc(e)||Fc(e)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var La=0,X=null,ut=null,St=null,Pi=!1,dl=!1,Ye=!1,tn=0,$l=0,pl=null,Jp=0;function ht(){throw Error(p(321))}function Qu(t,a){if(a===null)return!1;for(var e=0;e<a.length&&e<t.length;e++)if(!aa(t[e],a[e]))return!1;return!0}function Zu(t,a,e,l,i,n){return La=n,X=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,b.H=t===null||t.memoizedState===null?bo:nc,Ye=!1,n=e(l,i),Ye=!1,dl&&(n=Yf(a,e,l,i)),Hf(t),n}function Hf(t){b.H=ti;var a=ut!==null&&ut.next!==null;if(La=0,St=ut=X=null,Pi=!1,$l=0,pl=null,a)throw Error(p(300));t===null||zt||(t=t.dependencies,t!==null&&Zi(t)&&(zt=!0))}function Yf(t,a,e,l){X=t;var i=0;do{if(dl&&(pl=null),$l=0,dl=!1,25<=i)throw Error(p(301));if(i+=1,St=ut=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}b.H=So,n=a(e,l)}while(dl);return n}function Fp(){var t=b.H,a=t.useState()[0];return a=typeof a.then=="function"?Il(a):a,t=t.useState()[0],(ut!==null?ut.memoizedState:null)!==t&&(X.flags|=1024),a}function Vu(){var t=tn!==0;return tn=0,t}function Ku(t,a,e){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~e}function ku(t){if(Pi){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Pi=!1}La=0,St=ut=X=null,dl=!1,$l=tn=0,pl=null}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?X.memoizedState=St=t:St=St.next=t,St}function yt(){if(ut===null){var t=X.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var a=St===null?X.memoizedState:St.next;if(a!==null)St=a,ut=t;else{if(t===null)throw X.alternate===null?Error(p(467)):Error(p(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},St===null?X.memoizedState=St=t:St=St.next=t}return St}function an(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Il(t){var a=$l;return $l+=1,pl===null&&(pl=[]),t=Of(pl,t,a),a=X,(St===null?a.memoizedState:St.next)===null&&(a=a.alternate,b.H=a===null||a.memoizedState===null?bo:nc),t}function en(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Il(t);if(t.$$typeof===Bt)return Dt(t)}throw Error(p(438,String(t)))}function Ju(t){var a=null,e=X.updateQueue;if(e!==null&&(a=e.memoCache),a==null){var l=X.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),e===null&&(e=an(),X.updateQueue=e),e.memoCache=a,e=a.data[a.index],e===void 0)for(e=a.data[a.index]=Array(t),l=0;l<t;l++)e[l]=Xe;return a.index++,e}function qa(t,a){return typeof a=="function"?a(t):a}function ln(t){var a=yt();return Fu(a,ut,t)}function Fu(t,a,e){var l=t.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=e;var i=t.baseQueue,n=l.pending;if(n!==null){if(i!==null){var u=i.next;i.next=n.next,n.next=u}a.baseQueue=i=n,l.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var c=u=null,f=null,h=a,y=!1;do{var E=h.lane&-536870913;if(E!==h.lane?(k&E)===E:(La&E)===E){var m=h.revertLane;if(m===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),E===cl&&(y=!0);else if((La&m)===m){h=h.next,m===cl&&(y=!0);continue}else E={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(c=f=E,u=n):f=f.next=E,X.lanes|=m,se|=m;E=h.action,Ye&&e(n,E),n=h.hasEagerState?h.eagerState:e(n,E)}else m={lane:E,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(c=f=m,u=n):f=f.next=m,X.lanes|=E,se|=E;h=h.next}while(h!==null&&h!==a);if(f===null?u=n:f.next=c,!aa(n,t.memoizedState)&&(zt=!0,y&&(e=rl,e!==null)))throw e;t.memoizedState=n,t.baseState=u,t.baseQueue=f,l.lastRenderedState=n}return i===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Wu(t){var a=yt(),e=a.queue;if(e===null)throw Error(p(311));e.lastRenderedReducer=t;var l=e.dispatch,i=e.pending,n=a.memoizedState;if(i!==null){e.pending=null;var u=i=i.next;do n=t(n,u.action),u=u.next;while(u!==i);aa(n,a.memoizedState)||(zt=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),e.lastRenderedState=n}return[n,l]}function Lf(t,a,e){var l=X,i=yt(),n=W;if(n){if(e===void 0)throw Error(p(407));e=e()}else e=a();var u=!aa((ut||i).memoizedState,e);if(u&&(i.memoizedState=e,zt=!0),i=i.queue,Pu(Xf.bind(null,l,i,t),[t]),i.getSnapshot!==a||u||St!==null&&St.memoizedState.tag&1){if(l.flags|=2048,gl(9,{destroy:void 0},Gf.bind(null,l,i,e,a),null),ot===null)throw Error(p(349));n||(La&127)!==0||qf(l,a,e)}return e}function qf(t,a,e){t.flags|=16384,t={getSnapshot:a,value:e},a=X.updateQueue,a===null?(a=an(),X.updateQueue=a,a.stores=[t]):(e=a.stores,e===null?a.stores=[t]:e.push(t))}function Gf(t,a,e,l){a.value=e,a.getSnapshot=l,Qf(a)&&Zf(t)}function Xf(t,a,e){return e(function(){Qf(a)&&Zf(t)})}function Qf(t){var a=t.getSnapshot;t=t.value;try{var e=a();return!aa(t,e)}catch{return!0}}function Zf(t){var a=Me(t,2);a!==null&&Wt(a,t,2)}function $u(t){var a=qt();if(typeof t=="function"){var e=t;if(t=e(),Ye){$a(!0);try{e()}finally{$a(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},a}function Vf(t,a,e,l){return t.baseState=e,Fu(t,ut,typeof l=="function"?l:qa)}function Wp(t,a,e,l,i){if(cn(t))throw Error(p(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){n.listeners.push(u)}};b.T!==null?e(!0):n.isTransition=!1,l(n),e=a.pending,e===null?(n.next=a.pending=n,Kf(a,n)):(n.next=e.next,a.pending=e.next=n)}}function Kf(t,a){var e=a.action,l=a.payload,i=t.state;if(a.isTransition){var n=b.T,u={};b.T=u;try{var c=e(i,l),f=b.S;f!==null&&f(u,c),kf(t,a,c)}catch(h){Iu(t,a,h)}finally{n!==null&&u.types!==null&&(n.types=u.types),b.T=n}}else try{n=e(i,l),kf(t,a,n)}catch(h){Iu(t,a,h)}}function kf(t,a,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(l){Jf(t,a,l)},function(l){return Iu(t,a,l)}):Jf(t,a,e)}function Jf(t,a,e){a.status="fulfilled",a.value=e,Ff(a),t.state=e,a=t.pending,a!==null&&(e=a.next,e===a?t.pending=null:(e=e.next,a.next=e,Kf(t,e)))}function Iu(t,a,e){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=e,Ff(a),a=a.next;while(a!==l)}t.action=null}function Ff(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Wf(t,a){return a}function $f(t,a){if(W){var e=ot.formState;if(e!==null){t:{var l=X;if(W){if(st){a:{for(var i=st,n=ha;i.nodeType!==8;){if(!n){i=null;break a}if(i=xa(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){st=xa(i.nextSibling),l=i.data==="F!";break t}}ee(l)}l=!1}l&&(a=e[0])}}return e=qt(),e.memoizedState=e.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wf,lastRenderedState:a},e.queue=l,e=xo.bind(null,X,l),l.dispatch=e,l=$u(!1),n=ic.bind(null,X,!1,l.queue),l=qt(),i={state:a,dispatch:null,action:t,pending:null},l.queue=i,e=Wp.bind(null,X,i,n,e),i.dispatch=e,l.memoizedState=t,[a,e,!1]}function If(t){var a=yt();return Pf(a,ut,t)}function Pf(t,a,e){if(a=Fu(t,a,Wf)[0],t=ln(qa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Il(a)}catch(u){throw u===fl?ki:u}else l=a;a=yt();var i=a.queue,n=i.dispatch;return e!==a.memoizedState&&(X.flags|=2048,gl(9,{destroy:void 0},$p.bind(null,i,e),null)),[l,n,t]}function $p(t,a){t.action=a}function to(t){var a=yt(),e=ut;if(e!==null)return Pf(a,e,t);yt(),a=a.memoizedState,e=yt();var l=e.queue.dispatch;return e.memoizedState=t,[a,l,!1]}function gl(t,a,e,l){return t={tag:t,create:e,deps:l,inst:a,next:null},a=X.updateQueue,a===null&&(a=an(),X.updateQueue=a),e=a.lastEffect,e===null?a.lastEffect=t.next=t:(l=e.next,e.next=t,t.next=l,a.lastEffect=t),t}function ao(){return yt().memoizedState}function nn(t,a,e,l){var i=qt();X.flags|=t,i.memoizedState=gl(1|a,{destroy:void 0},e,l===void 0?null:l)}function un(t,a,e,l){var i=yt();l=l===void 0?null:l;var n=i.memoizedState.inst;ut!==null&&l!==null&&Qu(l,ut.memoizedState.deps)?i.memoizedState=gl(a,n,e,l):(X.flags|=t,i.memoizedState=gl(1|a,n,e,l))}function eo(t,a){nn(8390656,8,t,a)}function Pu(t,a){un(2048,8,t,a)}function Ip(t){X.flags|=4;var a=X.updateQueue;if(a===null)a=an(),X.updateQueue=a,a.events=[t];else{var e=a.events;e===null?a.events=[t]:e.push(t)}}function lo(t){var a=yt().memoizedState;return Ip({ref:a,nextImpl:t}),function(){if((P&2)!==0)throw Error(p(440));return a.impl.apply(void 0,arguments)}}function io(t,a){return un(4,2,t,a)}function no(t,a){return un(4,4,t,a)}function uo(t,a){if(typeof a=="function"){t=t();var e=a(t);return function(){typeof e=="function"?e():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function co(t,a,e){e=e!=null?e.concat([t]):null,un(4,4,uo.bind(null,a,t),e)}function tc(){}function ro(t,a){var e=yt();a=a===void 0?null:a;var l=e.memoizedState;return a!==null&&Qu(a,l[1])?l[0]:(e.memoizedState=[t,a],t)}function fo(t,a){var e=yt();a=a===void 0?null:a;var l=e.memoizedState;if(a!==null&&Qu(a,l[1]))return l[0];if(l=t(),Ye){$a(!0);try{t()}finally{$a(!1)}}return e.memoizedState=[l,a],l}function ac(t,a,e){return e===void 0||(La&1073741824)!==0&&(k&261930)===0?t.memoizedState=a:(t.memoizedState=e,t=ss(),X.lanes|=t,se|=t,e)}function oo(t,a,e,l){return aa(e,a)?e:sl.current!==null?(t=ac(t,e,l),aa(t,a)||(zt=!0),t):(La&42)===0||(La&1073741824)!==0&&(k&261930)===0?(zt=!0,t.memoizedState=e):(t=ss(),X.lanes|=t,se|=t,a)}function so(t,a,e,l,i){var n=A.p;A.p=n!==0&&8>n?n:8;var u=b.T,c={};b.T=c,ic(t,!1,a,e);try{var f=i(),h=b.S;if(h!==null&&h(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var y=kp(f,l);Pl(t,a,y,ca(t))}else Pl(t,a,l,ca(t))}catch(E){Pl(t,a,{then:function(){},status:"rejected",reason:E},ca())}finally{A.p=n,u!==null&&c.types!==null&&(u.types=c.types),b.T=u}}function Pp(){}function ec(t,a,e,l){if(t.tag!==5)throw Error(p(476));var i=po(t).queue;so(t,i,a,Y,e===null?Pp:function(){return go(t),e(l)})}function po(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:Y},next:null};var e={};return a.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:e},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function go(t){var a=po(t);a.next===null&&(a=t.alternate.memoizedState),Pl(t,a.next.queue,{},ca())}function lc(){return Dt(mi)}function ho(){return yt().memoizedState}function mo(){return yt().memoizedState}function tg(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var e=ca();t=ne(e);var l=ue(a,t,e);l!==null&&(Wt(l,a,e),Jl(l,a,e)),a={cache:Du()},t.payload=a;return}a=a.return}}function ag(t,a,e){var l=ca();e={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},cn(t)?vo(a,e):(e=Su(t,a,e,l),e!==null&&(Wt(e,t,l),yo(e,a,l)))}function xo(t,a,e){var l=ca();Pl(t,a,e,l)}function Pl(t,a,e,l){var i={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(cn(t))vo(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var u=a.lastRenderedState,c=n(u,e);if(i.hasEagerState=!0,i.eagerState=c,aa(c,u))return qi(t,a,i,0),ot===null&&Li(),!1}catch{}finally{}if(e=Su(t,a,i,l),e!==null)return Wt(e,t,l),yo(e,a,l),!0}return!1}function ic(t,a,e,l){if(l={lane:2,revertLane:Bc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},cn(t)){if(a)throw Error(p(479))}else a=Su(t,e,l,2),a!==null&&Wt(a,t,2)}function cn(t){var a=t.alternate;return t===X||a!==null&&a===X}function vo(t,a){dl=Pi=!0;var e=t.pending;e===null?a.next=a:(a.next=e.next,e.next=a),t.pending=a}function yo(t,a,e){if((e&4194048)!==0){var l=a.lanes;l&=t.pendingLanes,e|=l,a.lanes=e,zr(t,e)}}var ti={readContext:Dt,use:en,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht};ti.useEffectEvent=ht;var bo={readContext:Dt,use:en,useCallback:function(t,a){return qt().memoizedState=[t,a===void 0?null:a],t},useContext:Dt,useEffect:eo,useImperativeHandle:function(t,a,e){e=e!=null?e.concat([t]):null,nn(4194308,4,uo.bind(null,a,t),e)},useLayoutEffect:function(t,a){return nn(4194308,4,t,a)},useInsertionEffect:function(t,a){nn(4,2,t,a)},useMemo:function(t,a){var e=qt();a=a===void 0?null:a;var l=t();if(Ye){$a(!0);try{t()}finally{$a(!1)}}return e.memoizedState=[l,a],l},useReducer:function(t,a,e){var l=qt();if(e!==void 0){var i=e(a);if(Ye){$a(!0);try{e(a)}finally{$a(!1)}}}else i=a;return l.memoizedState=l.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=ag.bind(null,X,t),[l.memoizedState,t]},useRef:function(t){var a=qt();return t={current:t},a.memoizedState=t},useState:function(t){t=$u(t);var a=t.queue,e=xo.bind(null,X,a);return a.dispatch=e,[t.memoizedState,e]},useDebugValue:tc,useDeferredValue:function(t,a){var e=qt();return ac(e,t,a)},useTransition:function(){var t=$u(!1);return t=so.bind(null,X,t.queue,!0,!1),qt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,e){var l=X,i=qt();if(W){if(e===void 0)throw Error(p(407));e=e()}else{if(e=a(),ot===null)throw Error(p(349));(k&127)!==0||qf(l,a,e)}i.memoizedState=e;var n={value:e,getSnapshot:a};return i.queue=n,eo(Xf.bind(null,l,n,t),[t]),l.flags|=2048,gl(9,{destroy:void 0},Gf.bind(null,l,n,e,a),null),e},useId:function(){var t=qt(),a=ot.identifierPrefix;if(W){var e=Na,l=ja;e=(l&~(1<<32-ta(l)-1)).toString(32)+e,a="_"+a+"R_"+e,e=tn++,0<e&&(a+="H"+e.toString(32)),a+="_"}else e=Jp++,a="_"+a+"r_"+e.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:lc,useFormState:$f,useActionState:$f,useOptimistic:function(t){var a=qt();a.memoizedState=a.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=e,a=ic.bind(null,X,!0,e),e.dispatch=a,[t,a]},useMemoCache:Ju,useCacheRefresh:function(){return qt().memoizedState=tg.bind(null,X)},useEffectEvent:function(t){var a=qt(),e={impl:t};return a.memoizedState=e,function(){if((P&2)!==0)throw Error(p(440));return e.impl.apply(void 0,arguments)}}},nc={readContext:Dt,use:en,useCallback:ro,useContext:Dt,useEffect:Pu,useImperativeHandle:co,useInsertionEffect:io,useLayoutEffect:no,useMemo:fo,useReducer:ln,useRef:ao,useState:function(){return ln(qa)},useDebugValue:tc,useDeferredValue:function(t,a){var e=yt();return oo(e,ut.memoizedState,t,a)},useTransition:function(){var t=ln(qa)[0],a=yt().memoizedState;return[typeof t=="boolean"?t:Il(t),a]},useSyncExternalStore:Lf,useId:ho,useHostTransitionStatus:lc,useFormState:If,useActionState:If,useOptimistic:function(t,a){var e=yt();return Vf(e,ut,t,a)},useMemoCache:Ju,useCacheRefresh:mo};nc.useEffectEvent=lo;var So={readContext:Dt,use:en,useCallback:ro,useContext:Dt,useEffect:Pu,useImperativeHandle:co,useInsertionEffect:io,useLayoutEffect:no,useMemo:fo,useReducer:Wu,useRef:ao,useState:function(){return Wu(qa)},useDebugValue:tc,useDeferredValue:function(t,a){var e=yt();return ut===null?ac(e,t,a):oo(e,ut.memoizedState,t,a)},useTransition:function(){var t=Wu(qa)[0],a=yt().memoizedState;return[typeof t=="boolean"?t:Il(t),a]},useSyncExternalStore:Lf,useId:ho,useHostTransitionStatus:lc,useFormState:to,useActionState:to,useOptimistic:function(t,a){var e=yt();return ut!==null?Vf(e,ut,t,a):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:mo};So.useEffectEvent=lo;function uc(t,a,e,l){a=t.memoizedState,e=e(l,a),e=e==null?a:M({},a,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var cc={enqueueSetState:function(t,a,e){t=t._reactInternals;var l=ca(),i=ne(l);i.payload=a,e!=null&&(i.callback=e),a=ue(t,i,l),a!==null&&(Wt(a,t,l),Jl(a,t,l))},enqueueReplaceState:function(t,a,e){t=t._reactInternals;var l=ca(),i=ne(l);i.tag=1,i.payload=a,e!=null&&(i.callback=e),a=ue(t,i,l),a!==null&&(Wt(a,t,l),Jl(a,t,l))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var e=ca(),l=ne(e);l.tag=2,a!=null&&(l.callback=a),a=ue(t,l,e),a!==null&&(Wt(a,t,e),Jl(a,t,e))}};function zo(t,a,e,l,i,n,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,n,u):a.prototype&&a.prototype.isPureReactComponent?!ql(e,l)||!ql(i,n):!0}function Eo(t,a,e,l){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(e,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(e,l),a.state!==t&&cc.enqueueReplaceState(a,a.state,null)}function Le(t,a){var e=a;if("ref"in a){e={};for(var l in a)l!=="ref"&&(e[l]=a[l])}if(t=t.defaultProps){e===a&&(e=M({},e));for(var i in t)e[i]===void 0&&(e[i]=t[i])}return e}function To(t){Yi(t)}function Ao(t){console.error(t)}function jo(t){Yi(t)}function rn(t,a){try{var e=t.onUncaughtError;e(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function No(t,a,e){try{var l=t.onCaughtError;l(e.value,{componentStack:e.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function rc(t,a,e){return e=ne(e),e.tag=3,e.payload={element:null},e.callback=function(){rn(t,a)},e}function Oo(t){return t=ne(t),t.tag=3,t}function Mo(t,a,e,l){var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;t.payload=function(){return i(n)},t.callback=function(){No(a,e,l)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){No(a,e,l),typeof i!="function"&&(de===null?de=new Set([this]):de.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function eg(t,a,e,l,i){if(e.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=e.alternate,a!==null&&ul(a,e,i,!0),e=la.current,e!==null){switch(e.tag){case 31:case 13:return ma===null?bn():e.alternate===null&&mt===0&&(mt=3),e.flags&=-257,e.flags|=65536,e.lanes=i,l===Ji?e.flags|=16384:(a=e.updateQueue,a===null?e.updateQueue=new Set([l]):a.add(l),Cc(t,l,i)),!1;case 22:return e.flags|=65536,l===Ji?e.flags|=16384:(a=e.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},e.updateQueue=a):(e=a.retryQueue,e===null?a.retryQueue=new Set([l]):e.add(l)),Cc(t,l,i)),!1}throw Error(p(435,e.tag))}return Cc(t,l,i),bn(),!1}if(W)return a=la.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,l!==Nu&&(t=Error(p(422),{cause:l}),Ql(da(t,e)))):(l!==Nu&&(a=Error(p(423),{cause:l}),Ql(da(a,e))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,l=da(l,e),i=rc(t.stateNode,l,i),Yu(t,i),mt!==4&&(mt=2)),!1;var n=Error(p(520),{cause:l});if(n=da(n,e),ri===null?ri=[n]:ri.push(n),mt!==4&&(mt=2),a===null)return!0;l=da(l,e),e=a;do{switch(e.tag){case 3:return e.flags|=65536,t=i&-i,e.lanes|=t,t=rc(e.stateNode,l,t),Yu(e,t),!1;case 1:if(a=e.type,n=e.stateNode,(e.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(de===null||!de.has(n))))return e.flags|=65536,i&=-i,e.lanes|=i,i=Oo(i),Mo(i,t,e,l),Yu(e,i),!1}e=e.return}while(e!==null);return!1}var fc=Error(p(461)),zt=!1;function Ct(t,a,e,l){a.child=t===null?Df(a,null,e,l):He(a,t.child,e,l)}function wo(t,a,e,l,i){e=e.render;var n=a.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return Ce(a),l=Zu(t,a,e,u,n,i),c=Vu(),t!==null&&!zt?(Ku(t,a,i),Ga(t,a,i)):(W&&c&&Au(a),a.flags|=1,Ct(t,a,l,i),a.child)}function _o(t,a,e,l,i){if(t===null){var n=e.type;return typeof n=="function"&&!zu(n)&&n.defaultProps===void 0&&e.compare===null?(a.tag=15,a.type=n,Do(t,a,n,l,i)):(t=Xi(e.type,null,l,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!xc(t,i)){var u=n.memoizedProps;if(e=e.compare,e=e!==null?e:ql,e(u,l)&&t.ref===a.ref)return Ga(t,a,i)}return a.flags|=1,t=Ra(n,l),t.ref=a.ref,t.return=a,a.child=t}function Do(t,a,e,l,i){if(t!==null){var n=t.memoizedProps;if(ql(n,l)&&t.ref===a.ref)if(zt=!1,a.pendingProps=l=n,xc(t,i))(t.flags&131072)!==0&&(zt=!0);else return a.lanes=t.lanes,Ga(t,a,i)}return oc(t,a,e,l,i)}function Co(t,a,e,l){var i=l.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|e:e,t!==null){for(l=a.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~n}else l=0,a.child=null;return Uo(t,a,n,e,l)}if((e&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ki(a,n!==null?n.cachePool:null),n!==null?Rf(a,n):qu(),Bf(a);else return l=a.lanes=536870912,Uo(t,a,n!==null?n.baseLanes|e:e,e,l)}else n!==null?(Ki(a,n.cachePool),Rf(a,n),re(),a.memoizedState=null):(t!==null&&Ki(a,null),qu(),re());return Ct(t,a,i,e),a.child}function ai(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Uo(t,a,e,l,i){var n=Uu();return n=n===null?null:{parent:bt._currentValue,pool:n},a.memoizedState={baseLanes:e,cachePool:n},t!==null&&Ki(a,null),qu(),Bf(a),t!==null&&ul(t,a,l,!0),a.childLanes=i,null}function fn(t,a){return a=sn({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function Ro(t,a,e){return He(a,t.child,null,e),t=fn(a,a.pendingProps),t.flags|=2,ia(a),a.memoizedState=null,t}function lg(t,a,e){var l=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(W){if(l.mode==="hidden")return t=fn(a,l),a.lanes=536870912,ai(null,t);if(Xu(a),(t=st)?(t=ks(t,ha),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:te!==null?{id:ja,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},e=xf(t),e.return=a,a.child=e,_t=a,st=null)):t=null,t===null)throw ee(a);return a.lanes=536870912,null}return fn(a,l)}var n=t.memoizedState;if(n!==null){var u=n.dehydrated;if(Xu(a),i)if(a.flags&256)a.flags&=-257,a=Ro(t,a,e);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(p(558));else if(zt||ul(t,a,e,!1),i=(e&t.childLanes)!==0,zt||i){if(l=ot,l!==null&&(u=Er(l,e),u!==0&&u!==n.retryLane))throw n.retryLane=u,Me(t,u),Wt(l,t,u),fc;bn(),a=Ro(t,a,e)}else t=n.treeContext,st=xa(u.nextSibling),_t=a,W=!0,ae=null,ha=!1,t!==null&&bf(a,t),a=fn(a,l),a.flags|=4096;return a}return t=Ra(t.child,{mode:l.mode,children:l.children}),t.ref=a.ref,a.child=t,t.return=a,t}function on(t,a){var e=a.ref;if(e===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(p(284));(t===null||t.ref!==e)&&(a.flags|=4194816)}}function oc(t,a,e,l,i){return Ce(a),e=Zu(t,a,e,l,void 0,i),l=Vu(),t!==null&&!zt?(Ku(t,a,i),Ga(t,a,i)):(W&&l&&Au(a),a.flags|=1,Ct(t,a,e,i),a.child)}function Bo(t,a,e,l,i,n){return Ce(a),a.updateQueue=null,e=Yf(a,l,e,i),Hf(t),l=Vu(),t!==null&&!zt?(Ku(t,a,n),Ga(t,a,n)):(W&&l&&Au(a),a.flags|=1,Ct(t,a,e,n),a.child)}function Ho(t,a,e,l,i){if(Ce(a),a.stateNode===null){var n=el,u=e.contextType;typeof u=="object"&&u!==null&&(n=Dt(u)),n=new e(l,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=cc,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=l,n.state=a.memoizedState,n.refs={},Bu(a),u=e.contextType,n.context=typeof u=="object"&&u!==null?Dt(u):el,n.state=a.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(uc(a,e,u,l),n.state=a.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(u=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),u!==n.state&&cc.enqueueReplaceState(n,n.state,null),Wl(a,l,n,i),Fl(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(t===null){n=a.stateNode;var c=a.memoizedProps,f=Le(e,c);n.props=f;var h=n.context,y=e.contextType;u=el,typeof y=="object"&&y!==null&&(u=Dt(y));var E=e.getDerivedStateFromProps;y=typeof E=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=a.pendingProps!==c,y||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||h!==u)&&Eo(a,n,l,u),ie=!1;var m=a.memoizedState;n.state=m,Wl(a,l,n,i),Fl(),h=a.memoizedState,c||m!==h||ie?(typeof E=="function"&&(uc(a,e,E,l),h=a.memoizedState),(f=ie||zo(a,e,f,l,m,h,u))?(y||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=h),n.props=l,n.state=h,n.context=u,l=f):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{n=a.stateNode,Hu(t,a),u=a.memoizedProps,y=Le(e,u),n.props=y,E=a.pendingProps,m=n.context,h=e.contextType,f=el,typeof h=="object"&&h!==null&&(f=Dt(h)),c=e.getDerivedStateFromProps,(h=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(u!==E||m!==f)&&Eo(a,n,l,f),ie=!1,m=a.memoizedState,n.state=m,Wl(a,l,n,i),Fl();var x=a.memoizedState;u!==E||m!==x||ie||t!==null&&t.dependencies!==null&&Zi(t.dependencies)?(typeof c=="function"&&(uc(a,e,c,l),x=a.memoizedState),(y=ie||zo(a,e,y,l,m,x,f)||t!==null&&t.dependencies!==null&&Zi(t.dependencies))?(h||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,x,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,x,f)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=x),n.props=l,n.state=x,n.context=f,l=y):(typeof n.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=1024),l=!1)}return n=l,on(t,a),l=(a.flags&128)!==0,n||l?(n=a.stateNode,e=l&&typeof e.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&l?(a.child=He(a,t.child,null,i),a.child=He(a,null,e,i)):Ct(t,a,e,i),a.memoizedState=n.state,t=a.child):t=Ga(t,a,i),t}function Yo(t,a,e,l){return _e(),a.flags|=256,Ct(t,a,e,l),a.child}var sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dc(t){return{baseLanes:t,cachePool:jf()}}function pc(t,a,e){return t=t!==null?t.childLanes&~e:0,a&&(t|=ua),t}function Lo(t,a,e){var l=a.pendingProps,i=!1,n=(a.flags&128)!==0,u;if((u=n)||(u=t!==null&&t.memoizedState===null?!1:(vt.current&2)!==0),u&&(i=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,t===null){if(W){if(i?ce(a):re(),(t=st)?(t=ks(t,ha),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:te!==null?{id:ja,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},e=xf(t),e.return=a,a.child=e,_t=a,st=null)):t=null,t===null)throw ee(a);return Fc(t)?a.lanes=32:a.lanes=536870912,null}var c=l.children;return l=l.fallback,i?(re(),i=a.mode,c=sn({mode:"hidden",children:c},i),l=we(l,i,e,null),c.return=a,l.return=a,c.sibling=l,a.child=c,l=a.child,l.memoizedState=dc(e),l.childLanes=pc(t,u,e),a.memoizedState=sc,ai(null,l)):(ce(a),gc(a,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(n)a.flags&256?(ce(a),a.flags&=-257,a=hc(t,a,e)):a.memoizedState!==null?(re(),a.child=t.child,a.flags|=128,a=null):(re(),c=l.fallback,i=a.mode,l=sn({mode:"visible",children:l.children},i),c=we(c,i,e,null),c.flags|=2,l.return=a,c.return=a,l.sibling=c,a.child=l,He(a,t.child,null,e),l=a.child,l.memoizedState=dc(e),l.childLanes=pc(t,u,e),a.memoizedState=sc,a=ai(null,l));else if(ce(a),Fc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var h=u.dgst;u=h,l=Error(p(419)),l.stack="",l.digest=u,Ql({value:l,source:null,stack:null}),a=hc(t,a,e)}else if(zt||ul(t,a,e,!1),u=(e&t.childLanes)!==0,zt||u){if(u=ot,u!==null&&(l=Er(u,e),l!==0&&l!==f.retryLane))throw f.retryLane=l,Me(t,l),Wt(u,t,l),fc;Jc(c)||bn(),a=hc(t,a,e)}else Jc(c)?(a.flags|=192,a.child=t.child,a=null):(t=f.treeContext,st=xa(c.nextSibling),_t=a,W=!0,ae=null,ha=!1,t!==null&&bf(a,t),a=gc(a,l.children),a.flags|=4096);return a}return i?(re(),c=l.fallback,i=a.mode,f=t.child,h=f.sibling,l=Ra(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&65011712,h!==null?c=Ra(h,c):(c=we(c,i,e,null),c.flags|=2),c.return=a,l.return=a,l.sibling=c,a.child=l,ai(null,l),l=a.child,c=t.child.memoizedState,c===null?c=dc(e):(i=c.cachePool,i!==null?(f=bt._currentValue,i=i.parent!==f?{parent:f,pool:f}:i):i=jf(),c={baseLanes:c.baseLanes|e,cachePool:i}),l.memoizedState=c,l.childLanes=pc(t,u,e),a.memoizedState=sc,ai(t.child,l)):(ce(a),e=t.child,t=e.sibling,e=Ra(e,{mode:"visible",children:l.children}),e.return=a,e.sibling=null,t!==null&&(u=a.deletions,u===null?(a.deletions=[t],a.flags|=16):u.push(t)),a.child=e,a.memoizedState=null,e)}function gc(t,a){return a=sn({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function sn(t,a){return t=ea(22,t,null,a),t.lanes=0,t}function hc(t,a,e){return He(a,t.child,null,e),t=gc(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function qo(t,a,e){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a),wu(t.return,a,e)}function mc(t,a,e,l,i,n){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:e,tailMode:i,treeForkCount:n}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=e,u.tailMode=i,u.treeForkCount=n)}function Go(t,a,e){var l=a.pendingProps,i=l.revealOrder,n=l.tail;l=l.children;var u=vt.current,c=(u&2)!==0;if(c?(u=u&1|2,a.flags|=128):u&=1,j(vt,u),Ct(t,a,l,e),l=W?Xl:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qo(t,e,a);else if(t.tag===19)qo(t,e,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(e=a.child,i=null;e!==null;)t=e.alternate,t!==null&&Ii(t)===null&&(i=e),e=e.sibling;e=i,e===null?(i=a.child,a.child=null):(i=e.sibling,e.sibling=null),mc(a,!1,i,e,n,l);break;case"backwards":case"unstable_legacy-backwards":for(e=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&Ii(t)===null){a.child=i;break}t=i.sibling,i.sibling=e,e=i,i=t}mc(a,!0,e,null,n,l);break;case"together":mc(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function Ga(t,a,e){if(t!==null&&(a.dependencies=t.dependencies),se|=a.lanes,(e&a.childLanes)===0)if(t!==null){if(ul(t,a,e,!1),(e&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(p(153));if(a.child!==null){for(t=a.child,e=Ra(t,t.pendingProps),a.child=e,e.return=a;t.sibling!==null;)t=t.sibling,e=e.sibling=Ra(t,t.pendingProps),e.return=a;e.sibling=null}return a.child}function xc(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Zi(t)))}function ig(t,a,e){switch(a.tag){case 3:Lt(a,a.stateNode.containerInfo),le(a,bt,t.memoizedState.cache),_e();break;case 27:case 5:Nl(a);break;case 4:Lt(a,a.stateNode.containerInfo);break;case 10:le(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Xu(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(ce(a),a.flags|=128,null):(e&a.child.childLanes)!==0?Lo(t,a,e):(ce(a),t=Ga(t,a,e),t!==null?t.sibling:null);ce(a);break;case 19:var i=(t.flags&128)!==0;if(l=(e&a.childLanes)!==0,l||(ul(t,a,e,!1),l=(e&a.childLanes)!==0),i){if(l)return Go(t,a,e);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(vt,vt.current),l)break;return null;case 22:return a.lanes=0,Co(t,a,e,a.pendingProps);case 24:le(a,bt,t.memoizedState.cache)}return Ga(t,a,e)}function Xo(t,a,e){if(t!==null)if(t.memoizedProps!==a.pendingProps)zt=!0;else{if(!xc(t,e)&&(a.flags&128)===0)return zt=!1,ig(t,a,e);zt=(t.flags&131072)!==0}else zt=!1,W&&(a.flags&1048576)!==0&&yf(a,Xl,a.index);switch(a.lanes=0,a.tag){case 16:t:{var l=a.pendingProps;if(t=Re(a.elementType),a.type=t,typeof t=="function")zu(t)?(l=Le(t,l),a.tag=1,a=Ho(null,a,t,l,e)):(a.tag=0,a=oc(null,a,t,l,e));else{if(t!=null){var i=t.$$typeof;if(i===ra){a.tag=11,a=wo(null,a,t,l,e);break t}else if(i===F){a.tag=14,a=_o(null,a,t,l,e);break t}}throw a=_a(t)||t,Error(p(306,a,""))}}return a;case 0:return oc(t,a,a.type,a.pendingProps,e);case 1:return l=a.type,i=Le(l,a.pendingProps),Ho(t,a,l,i,e);case 3:t:{if(Lt(a,a.stateNode.containerInfo),t===null)throw Error(p(387));l=a.pendingProps;var n=a.memoizedState;i=n.element,Hu(t,a),Wl(a,l,null,e);var u=a.memoizedState;if(l=u.cache,le(a,bt,l),l!==n.cache&&_u(a,[bt],e,!0),Fl(),l=u.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=Yo(t,a,l,e);break t}else if(l!==i){i=da(Error(p(424)),a),Ql(i),a=Yo(t,a,l,e);break t}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(st=xa(t.firstChild),_t=a,W=!0,ae=null,ha=!0,e=Df(a,null,l,e),a.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(_e(),l===i){a=Ga(t,a,e);break t}Ct(t,a,l,e)}a=a.child}return a;case 26:return on(t,a),t===null?(e=Ps(a.type,null,a.pendingProps,null))?a.memoizedState=e:W||(e=a.type,t=a.pendingProps,l=Nn(Z.current).createElement(e),l[wt]=a,l[Zt]=t,Ut(l,e,t),Nt(l),a.stateNode=l):a.memoizedState=Ps(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Nl(a),t===null&&W&&(l=a.stateNode=Ws(a.type,a.pendingProps,Z.current),_t=a,ha=!0,i=st,me(a.type)?(Wc=i,st=xa(l.firstChild)):st=i),Ct(t,a,a.pendingProps.children,e),on(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&W&&((i=l=st)&&(l=Ug(l,a.type,a.pendingProps,ha),l!==null?(a.stateNode=l,_t=a,st=xa(l.firstChild),ha=!1,i=!0):i=!1),i||ee(a)),Nl(a),i=a.type,n=a.pendingProps,u=t!==null?t.memoizedProps:null,l=n.children,Vc(i,n)?l=null:u!==null&&Vc(i,u)&&(a.flags|=32),a.memoizedState!==null&&(i=Zu(t,a,Fp,null,null,e),mi._currentValue=i),on(t,a),Ct(t,a,l,e),a.child;case 6:return t===null&&W&&((t=e=st)&&(e=Rg(e,a.pendingProps,ha),e!==null?(a.stateNode=e,_t=a,st=null,t=!0):t=!1),t||ee(a)),null;case 13:return Lo(t,a,e);case 4:return Lt(a,a.stateNode.containerInfo),l=a.pendingProps,t===null?a.child=He(a,null,l,e):Ct(t,a,l,e),a.child;case 11:return wo(t,a,a.type,a.pendingProps,e);case 7:return Ct(t,a,a.pendingProps,e),a.child;case 8:return Ct(t,a,a.pendingProps.children,e),a.child;case 12:return Ct(t,a,a.pendingProps.children,e),a.child;case 10:return l=a.pendingProps,le(a,a.type,l.value),Ct(t,a,l.children,e),a.child;case 9:return i=a.type._context,l=a.pendingProps.children,Ce(a),i=Dt(i),l=l(i),a.flags|=1,Ct(t,a,l,e),a.child;case 14:return _o(t,a,a.type,a.pendingProps,e);case 15:return Do(t,a,a.type,a.pendingProps,e);case 19:return Go(t,a,e);case 31:return lg(t,a,e);case 22:return Co(t,a,e,a.pendingProps);case 24:return Ce(a),l=Dt(bt),t===null?(i=Uu(),i===null&&(i=ot,n=Du(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=e),i=n),a.memoizedState={parent:l,cache:i},Bu(a),le(a,bt,i)):((t.lanes&e)!==0&&(Hu(t,a),Wl(a,null,null,e),Fl()),i=t.memoizedState,n=a.memoizedState,i.parent!==l?(i={parent:l,cache:l},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),le(a,bt,l)):(l=n.cache,le(a,bt,l),l!==i.cache&&_u(a,[bt],e,!0))),Ct(t,a,a.pendingProps.children,e),a.child;case 29:throw a.pendingProps}throw Error(p(156,a.tag))}function Xa(t){t.flags|=4}function vc(t,a,e,l,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(hs())t.flags|=8192;else throw Be=Ji,Ru}else t.flags&=-16777217}function Qo(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!id(a))if(hs())t.flags|=8192;else throw Be=Ji,Ru}function dn(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?br():536870912,t.lanes|=a,vl|=a)}function ei(t,a){if(!W)switch(t.tailMode){case"hidden":a=t.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dt(t){var a=t.alternate!==null&&t.alternate.child===t.child,e=0,l=0;if(a)for(var i=t.child;i!==null;)e|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)e|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=l,t.childLanes=e,a}function ng(t,a,e){var l=a.pendingProps;switch(ju(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(a),null;case 1:return dt(a),null;case 3:return e=a.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Ya(bt),xt(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(nl(a)?Xa(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Ou())),dt(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?(Xa(a),n!==null?(dt(a),Qo(a,n)):(dt(a),vc(a,i,null,l,e))):n?n!==t.memoizedState?(Xa(a),dt(a),Qo(a,n)):(dt(a),a.flags&=-16777217):(t=t.memoizedProps,t!==l&&Xa(a),dt(a),vc(a,i,t,l,e)),null;case 27:if(zi(a),e=Z.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==l&&Xa(a);else{if(!l){if(a.stateNode===null)throw Error(p(166));return dt(a),null}t=D.current,nl(a)?Sf(a):(t=Ws(i,l,e),a.stateNode=t,Xa(a))}return dt(a),null;case 5:if(zi(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==l&&Xa(a);else{if(!l){if(a.stateNode===null)throw Error(p(166));return dt(a),null}if(n=D.current,nl(a))Sf(a);else{var u=Nn(Z.current);switch(n){case 1:n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?u.createElement(i,{is:l.is}):u.createElement(i)}}n[wt]=a,n[Zt]=l;t:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)n.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break t;for(;u.sibling===null;){if(u.return===null||u.return===a)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=n;t:switch(Ut(n,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Xa(a)}}return dt(a),vc(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,e),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==l&&Xa(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(p(166));if(t=Z.current,nl(a)){if(t=a.stateNode,e=a.memoizedProps,l=null,i=_t,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}t[wt]=a,t=!!(t.nodeValue===e||l!==null&&l.suppressHydrationWarning===!0||Ls(t.nodeValue,e)),t||ee(a,!0)}else t=Nn(t).createTextNode(l),t[wt]=a,a.stateNode=t}return dt(a),null;case 31:if(e=a.memoizedState,t===null||t.memoizedState!==null){if(l=nl(a),e!==null){if(t===null){if(!l)throw Error(p(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(557));t[wt]=a}else _e(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;dt(a),t=!1}else e=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return a.flags&256?(ia(a),a):(ia(a),null);if((a.flags&128)!==0)throw Error(p(558))}return dt(a),null;case 13:if(l=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=nl(a),l!==null&&l.dehydrated!==null){if(t===null){if(!i)throw Error(p(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(p(317));i[wt]=a}else _e(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;dt(a),i=!1}else i=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(ia(a),a):(ia(a),null)}return ia(a),(a.flags&128)!==0?(a.lanes=e,a):(e=l!==null,t=t!==null&&t.memoizedState!==null,e&&(l=a.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==i&&(l.flags|=2048)),e!==t&&e&&(a.child.flags|=8192),dn(a,a.updateQueue),dt(a),null);case 4:return xt(),t===null&&qc(a.stateNode.containerInfo),dt(a),null;case 10:return Ya(a.type),dt(a),null;case 19:if(T(vt),l=a.memoizedState,l===null)return dt(a),null;if(i=(a.flags&128)!==0,n=l.rendering,n===null)if(i)ei(l,!1);else{if(mt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=Ii(t),n!==null){for(a.flags|=128,ei(l,!1),t=n.updateQueue,a.updateQueue=t,dn(a,t),a.subtreeFlags=0,t=e,e=a.child;e!==null;)mf(e,t),e=e.sibling;return j(vt,vt.current&1|2),W&&Ba(a,l.treeForkCount),a.child}t=t.sibling}l.tail!==null&&It()>xn&&(a.flags|=128,i=!0,ei(l,!1),a.lanes=4194304)}else{if(!i)if(t=Ii(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,dn(a,t),ei(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!W)return dt(a),null}else 2*It()-l.renderingStartTime>xn&&e!==536870912&&(a.flags|=128,i=!0,ei(l,!1),a.lanes=4194304);l.isBackwards?(n.sibling=a.child,a.child=n):(t=l.last,t!==null?t.sibling=n:a.child=n,l.last=n)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=It(),t.sibling=null,e=vt.current,j(vt,i?e&1|2:e&1),W&&Ba(a,l.treeForkCount),t):(dt(a),null);case 22:case 23:return ia(a),Gu(),l=a.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(e&536870912)!==0&&(a.flags&128)===0&&(dt(a),a.subtreeFlags&6&&(a.flags|=8192)):dt(a),e=a.updateQueue,e!==null&&dn(a,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==e&&(a.flags|=2048),t!==null&&T(Ue),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),Ya(bt),dt(a),null;case 25:return null;case 30:return null}throw Error(p(156,a.tag))}function ug(t,a){switch(ju(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Ya(bt),xt(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return zi(a),null;case 31:if(a.memoizedState!==null){if(ia(a),a.alternate===null)throw Error(p(340));_e()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(ia(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(p(340));_e()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return T(vt),null;case 4:return xt(),null;case 10:return Ya(a.type),null;case 22:case 23:return ia(a),Gu(),t!==null&&T(Ue),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Ya(bt),null;case 25:return null;default:return null}}function Zo(t,a){switch(ju(a),a.tag){case 3:Ya(bt),xt();break;case 26:case 27:case 5:zi(a);break;case 4:xt();break;case 31:a.memoizedState!==null&&ia(a);break;case 13:ia(a);break;case 19:T(vt);break;case 10:Ya(a.type);break;case 22:case 23:ia(a),Gu(),t!==null&&T(Ue);break;case 24:Ya(bt)}}function li(t,a){try{var e=a.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var i=l.next;e=i;do{if((e.tag&t)===t){l=void 0;var n=e.create,u=e.inst;l=n(),u.destroy=l}e=e.next}while(e!==i)}}catch(c){it(a,a.return,c)}}function fe(t,a,e){try{var l=a.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&t)===t){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,i=a;var f=e,h=c;try{h()}catch(y){it(i,f,y)}}}l=l.next}while(l!==n)}}catch(y){it(a,a.return,y)}}function Vo(t){var a=t.updateQueue;if(a!==null){var e=t.stateNode;try{Uf(a,e)}catch(l){it(t,t.return,l)}}}function Ko(t,a,e){e.props=Le(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(l){it(t,a,l)}}function ii(t,a){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof e=="function"?t.refCleanup=e(l):e.current=l}}catch(i){it(t,a,i)}}function Oa(t,a){var e=t.ref,l=t.refCleanup;if(e!==null)if(typeof l=="function")try{l()}catch(i){it(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(i){it(t,a,i)}else e.current=null}function ko(t){var a=t.type,e=t.memoizedProps,l=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":e.autoFocus&&l.focus();break t;case"img":e.src?l.src=e.src:e.srcSet&&(l.srcset=e.srcSet)}}catch(i){it(t,t.return,i)}}function yc(t,a,e){try{var l=t.stateNode;Og(l,t.type,e,a),l[Zt]=a}catch(i){it(t,t.return,i)}}function Jo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&me(t.type)||t.tag===4}function bc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&me(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sc(t,a,e){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,a):(a=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.appendChild(t),e=e._reactRootContainer,e!=null||a.onclick!==null||(a.onclick=Ca));else if(l!==4&&(l===27&&me(t.type)&&(e=t.stateNode,a=null),t=t.child,t!==null))for(Sc(t,a,e),t=t.sibling;t!==null;)Sc(t,a,e),t=t.sibling}function pn(t,a,e){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?e.insertBefore(t,a):e.appendChild(t);else if(l!==4&&(l===27&&me(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(pn(t,a,e),t=t.sibling;t!==null;)pn(t,a,e),t=t.sibling}function Fo(t){var a=t.stateNode,e=t.memoizedProps;try{for(var l=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Ut(a,l,e),a[wt]=t,a[Zt]=e}catch(n){it(t,t.return,n)}}var Qa=!1,Et=!1,zc=!1,Wo=typeof WeakSet=="function"?WeakSet:Set,Ot=null;function cg(t,a){if(t=t.containerInfo,Qc=Un,t=cf(t),hu(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var l=e.getSelection&&e.getSelection();if(l&&l.rangeCount!==0){e=l.anchorNode;var i=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{e.nodeType,n.nodeType}catch{e=null;break t}var u=0,c=-1,f=-1,h=0,y=0,E=t,m=null;a:for(;;){for(var x;E!==e||i!==0&&E.nodeType!==3||(c=u+i),E!==n||l!==0&&E.nodeType!==3||(f=u+l),E.nodeType===3&&(u+=E.nodeValue.length),(x=E.firstChild)!==null;)m=E,E=x;for(;;){if(E===t)break a;if(m===e&&++h===i&&(c=u),m===n&&++y===l&&(f=u),(x=E.nextSibling)!==null)break;E=m,m=E.parentNode}E=x}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(Zc={focusedElem:t,selectionRange:e},Un=!1,Ot=a;Ot!==null;)if(a=Ot,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Ot=t;else for(;Ot!==null;){switch(a=Ot,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)i=t[e],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,e=a,i=n.memoizedProps,n=n.memoizedState,l=e.stateNode;try{var w=Le(e.type,i);t=l.getSnapshotBeforeUpdate(w,n),l.__reactInternalSnapshotBeforeUpdate=t}catch(R){it(e,e.return,R)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,e=t.nodeType,e===9)kc(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":kc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(p(163))}if(t=a.sibling,t!==null){t.return=a.return,Ot=t;break}Ot=a.return}}function $o(t,a,e){var l=e.flags;switch(e.tag){case 0:case 11:case 15:Va(t,e),l&4&&li(5,e);break;case 1:if(Va(t,e),l&4)if(t=e.stateNode,a===null)try{t.componentDidMount()}catch(u){it(e,e.return,u)}else{var i=Le(e.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(u){it(e,e.return,u)}}l&64&&Vo(e),l&512&&ii(e,e.return);break;case 3:if(Va(t,e),l&64&&(t=e.updateQueue,t!==null)){if(a=null,e.child!==null)switch(e.child.tag){case 27:case 5:a=e.child.stateNode;break;case 1:a=e.child.stateNode}try{Uf(t,a)}catch(u){it(e,e.return,u)}}break;case 27:a===null&&l&4&&Fo(e);case 26:case 5:Va(t,e),a===null&&l&4&&ko(e),l&512&&ii(e,e.return);break;case 12:Va(t,e);break;case 31:Va(t,e),l&4&&ts(t,e);break;case 13:Va(t,e),l&4&&as(t,e),l&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=mg.bind(null,e),Bg(t,e))));break;case 22:if(l=e.memoizedState!==null||Qa,!l){a=a!==null&&a.memoizedState!==null||Et,i=Qa;var n=Et;Qa=l,(Et=a)&&!n?Ka(t,e,(e.subtreeFlags&8772)!==0):Va(t,e),Qa=i,Et=n}break;case 30:break;default:Va(t,e)}}function Io(t){var a=t.alternate;a!==null&&(t.alternate=null,Io(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&In(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,Kt=!1;function Za(t,a,e){for(e=e.child;e!==null;)Po(t,a,e),e=e.sibling}function Po(t,a,e){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Ol,e)}catch{}switch(e.tag){case 26:Et||Oa(e,a),Za(t,a,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Et||Oa(e,a);var l=gt,i=Kt;me(e.type)&&(gt=e.stateNode,Kt=!1),Za(t,a,e),pi(e.stateNode),gt=l,Kt=i;break;case 5:Et||Oa(e,a);case 6:if(l=gt,i=Kt,gt=null,Za(t,a,e),gt=l,Kt=i,gt!==null)if(Kt)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(e.stateNode)}catch(n){it(e,a,n)}else try{gt.removeChild(e.stateNode)}catch(n){it(e,a,n)}break;case 18:gt!==null&&(Kt?(t=gt,Vs(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),jl(t)):Vs(gt,e.stateNode));break;case 4:l=gt,i=Kt,gt=e.stateNode.containerInfo,Kt=!0,Za(t,a,e),gt=l,Kt=i;break;case 0:case 11:case 14:case 15:fe(2,e,a),Et||fe(4,e,a),Za(t,a,e);break;case 1:Et||(Oa(e,a),l=e.stateNode,typeof l.componentWillUnmount=="function"&&Ko(e,a,l)),Za(t,a,e);break;case 21:Za(t,a,e);break;case 22:Et=(l=Et)||e.memoizedState!==null,Za(t,a,e),Et=l;break;default:Za(t,a,e)}}function ts(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{jl(t)}catch(e){it(a,a.return,e)}}}function as(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{jl(t)}catch(e){it(a,a.return,e)}}function rg(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new Wo),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new Wo),a;default:throw Error(p(435,t.tag))}}function gn(t,a){var e=rg(t);a.forEach(function(l){if(!e.has(l)){e.add(l);var i=xg.bind(null,t,l);l.then(i,i)}})}function kt(t,a){var e=a.deletions;if(e!==null)for(var l=0;l<e.length;l++){var i=e[l],n=t,u=a,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(me(c.type)){gt=c.stateNode,Kt=!1;break t}break;case 5:gt=c.stateNode,Kt=!1;break t;case 3:case 4:gt=c.stateNode.containerInfo,Kt=!0;break t}c=c.return}if(gt===null)throw Error(p(160));Po(n,u,i),gt=null,Kt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)es(a,t),a=a.sibling}var Sa=null;function es(t,a){var e=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kt(a,t),Jt(t),l&4&&(fe(3,t,t.return),li(3,t),fe(5,t,t.return));break;case 1:kt(a,t),Jt(t),l&512&&(Et||e===null||Oa(e,e.return)),l&64&&Qa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?l:e.concat(l))));break;case 26:var i=Sa;if(kt(a,t),Jt(t),l&512&&(Et||e===null||Oa(e,e.return)),l&4){var n=e!==null?e.memoizedState:null;if(l=t.memoizedState,e===null)if(l===null)if(t.stateNode===null){t:{l=t.type,e=t.memoizedProps,i=i.ownerDocument||i;a:switch(l){case"title":n=i.getElementsByTagName("title")[0],(!n||n[_l]||n[wt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(l),i.head.insertBefore(n,i.querySelector("head > title"))),Ut(n,l,e),n[wt]=t,Nt(n),l=n;break t;case"link":var u=ed("link","href",i).get(l+(e.href||""));if(u){for(var c=0;c<u.length;c++)if(n=u[c],n.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&n.getAttribute("rel")===(e.rel==null?null:e.rel)&&n.getAttribute("title")===(e.title==null?null:e.title)&&n.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(c,1);break a}}n=i.createElement(l),Ut(n,l,e),i.head.appendChild(n);break;case"meta":if(u=ed("meta","content",i).get(l+(e.content||""))){for(c=0;c<u.length;c++)if(n=u[c],n.getAttribute("content")===(e.content==null?null:""+e.content)&&n.getAttribute("name")===(e.name==null?null:e.name)&&n.getAttribute("property")===(e.property==null?null:e.property)&&n.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&n.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(c,1);break a}}n=i.createElement(l),Ut(n,l,e),i.head.appendChild(n);break;default:throw Error(p(468,l))}n[wt]=t,Nt(n),l=n}t.stateNode=l}else ld(i,t.type,t.stateNode);else t.stateNode=ad(i,l,t.memoizedProps);else n!==l?(n===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):n.count--,l===null?ld(i,t.type,t.stateNode):ad(i,l,t.memoizedProps)):l===null&&t.stateNode!==null&&yc(t,t.memoizedProps,e.memoizedProps)}break;case 27:kt(a,t),Jt(t),l&512&&(Et||e===null||Oa(e,e.return)),e!==null&&l&4&&yc(t,t.memoizedProps,e.memoizedProps);break;case 5:if(kt(a,t),Jt(t),l&512&&(Et||e===null||Oa(e,e.return)),t.flags&32){i=t.stateNode;try{Fe(i,"")}catch(w){it(t,t.return,w)}}l&4&&t.stateNode!=null&&(i=t.memoizedProps,yc(t,i,e!==null?e.memoizedProps:i)),l&1024&&(zc=!0);break;case 6:if(kt(a,t),Jt(t),l&4){if(t.stateNode===null)throw Error(p(162));l=t.memoizedProps,e=t.stateNode;try{e.nodeValue=l}catch(w){it(t,t.return,w)}}break;case 3:if(wn=null,i=Sa,Sa=On(a.containerInfo),kt(a,t),Sa=i,Jt(t),l&4&&e!==null&&e.memoizedState.isDehydrated)try{jl(a.containerInfo)}catch(w){it(t,t.return,w)}zc&&(zc=!1,ls(t));break;case 4:l=Sa,Sa=On(t.stateNode.containerInfo),kt(a,t),Jt(t),Sa=l;break;case 12:kt(a,t),Jt(t);break;case 31:kt(a,t),Jt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gn(t,l)));break;case 13:kt(a,t),Jt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(mn=It()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gn(t,l)));break;case 22:i=t.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,h=Qa,y=Et;if(Qa=h||i,Et=y||f,kt(a,t),Et=y,Qa=h,Jt(t),l&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(e===null||f||Qa||Et||qe(t)),e=null,a=t;;){if(a.tag===5||a.tag===26){if(e===null){f=e=a;try{if(n=f.stateNode,i)u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=f.stateNode;var E=f.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null;c.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(w){it(f,f.return,w)}}}else if(a.tag===6){if(e===null){f=a;try{f.stateNode.nodeValue=i?"":f.memoizedProps}catch(w){it(f,f.return,w)}}}else if(a.tag===18){if(e===null){f=a;try{var x=f.stateNode;i?Ks(x,!0):Ks(f.stateNode,!1)}catch(w){it(f,f.return,w)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;e===a&&(e=null),a=a.return}e===a&&(e=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=t.updateQueue,l!==null&&(e=l.retryQueue,e!==null&&(l.retryQueue=null,gn(t,e))));break;case 19:kt(a,t),Jt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gn(t,l)));break;case 30:break;case 21:break;default:kt(a,t),Jt(t)}}function Jt(t){var a=t.flags;if(a&2){try{for(var e,l=t.return;l!==null;){if(Jo(l)){e=l;break}l=l.return}if(e==null)throw Error(p(160));switch(e.tag){case 27:var i=e.stateNode,n=bc(t);pn(t,n,i);break;case 5:var u=e.stateNode;e.flags&32&&(Fe(u,""),e.flags&=-33);var c=bc(t);pn(t,c,u);break;case 3:case 4:var f=e.stateNode.containerInfo,h=bc(t);Sc(t,h,f);break;default:throw Error(p(161))}}catch(y){it(t,t.return,y)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function ls(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;ls(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Va(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)$o(t,a.alternate,a),a=a.sibling}function qe(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:fe(4,a,a.return),qe(a);break;case 1:Oa(a,a.return);var e=a.stateNode;typeof e.componentWillUnmount=="function"&&Ko(a,a.return,e),qe(a);break;case 27:pi(a.stateNode);case 26:case 5:Oa(a,a.return),qe(a);break;case 22:a.memoizedState===null&&qe(a);break;case 30:qe(a);break;default:qe(a)}t=t.sibling}}function Ka(t,a,e){for(e=e&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,i=t,n=a,u=n.flags;switch(n.tag){case 0:case 11:case 15:Ka(i,n,e),li(4,n);break;case 1:if(Ka(i,n,e),l=n,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(h){it(l,l.return,h)}if(l=n,i=l.updateQueue,i!==null){var c=l.stateNode;try{var f=i.shared.hiddenCallbacks;if(f!==null)for(i.shared.hiddenCallbacks=null,i=0;i<f.length;i++)Cf(f[i],c)}catch(h){it(l,l.return,h)}}e&&u&64&&Vo(n),ii(n,n.return);break;case 27:Fo(n);case 26:case 5:Ka(i,n,e),e&&l===null&&u&4&&ko(n),ii(n,n.return);break;case 12:Ka(i,n,e);break;case 31:Ka(i,n,e),e&&u&4&&ts(i,n);break;case 13:Ka(i,n,e),e&&u&4&&as(i,n);break;case 22:n.memoizedState===null&&Ka(i,n,e),ii(n,n.return);break;case 30:break;default:Ka(i,n,e)}a=a.sibling}}function Ec(t,a){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Zl(e))}function Tc(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Zl(t))}function za(t,a,e,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)is(t,a,e,l),a=a.sibling}function is(t,a,e,l){var i=a.flags;switch(a.tag){case 0:case 11:case 15:za(t,a,e,l),i&2048&&li(9,a);break;case 1:za(t,a,e,l);break;case 3:za(t,a,e,l),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Zl(t)));break;case 12:if(i&2048){za(t,a,e,l),t=a.stateNode;try{var n=a.memoizedProps,u=n.id,c=n.onPostCommit;typeof c=="function"&&c(u,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){it(a,a.return,f)}}else za(t,a,e,l);break;case 31:za(t,a,e,l);break;case 13:za(t,a,e,l);break;case 23:break;case 22:n=a.stateNode,u=a.alternate,a.memoizedState!==null?n._visibility&2?za(t,a,e,l):ni(t,a):n._visibility&2?za(t,a,e,l):(n._visibility|=2,hl(t,a,e,l,(a.subtreeFlags&10256)!==0||!1)),i&2048&&Ec(u,a);break;case 24:za(t,a,e,l),i&2048&&Tc(a.alternate,a);break;default:za(t,a,e,l)}}function hl(t,a,e,l,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,u=a,c=e,f=l,h=u.flags;switch(u.tag){case 0:case 11:case 15:hl(n,u,c,f,i),li(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?hl(n,u,c,f,i):ni(n,u):(y._visibility|=2,hl(n,u,c,f,i)),i&&h&2048&&Ec(u.alternate,u);break;case 24:hl(n,u,c,f,i),i&&h&2048&&Tc(u.alternate,u);break;default:hl(n,u,c,f,i)}a=a.sibling}}function ni(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var e=t,l=a,i=l.flags;switch(l.tag){case 22:ni(e,l),i&2048&&Ec(l.alternate,l);break;case 24:ni(e,l),i&2048&&Tc(l.alternate,l);break;default:ni(e,l)}a=a.sibling}}var ui=8192;function ml(t,a,e){if(t.subtreeFlags&ui)for(t=t.child;t!==null;)ns(t,a,e),t=t.sibling}function ns(t,a,e){switch(t.tag){case 26:ml(t,a,e),t.flags&ui&&t.memoizedState!==null&&Jg(e,Sa,t.memoizedState,t.memoizedProps);break;case 5:ml(t,a,e);break;case 3:case 4:var l=Sa;Sa=On(t.stateNode.containerInfo),ml(t,a,e),Sa=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ui,ui=16777216,ml(t,a,e),ui=l):ml(t,a,e));break;default:ml(t,a,e)}}function us(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function ci(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var l=a[e];Ot=l,rs(l,t)}us(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cs(t),t=t.sibling}function cs(t){switch(t.tag){case 0:case 11:case 15:ci(t),t.flags&2048&&fe(9,t,t.return);break;case 3:ci(t);break;case 12:ci(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,hn(t)):ci(t);break;default:ci(t)}}function hn(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var l=a[e];Ot=l,rs(l,t)}us(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:fe(8,a,a.return),hn(a);break;case 22:e=a.stateNode,e._visibility&2&&(e._visibility&=-3,hn(a));break;default:hn(a)}t=t.sibling}}function rs(t,a){for(;Ot!==null;){var e=Ot;switch(e.tag){case 0:case 11:case 15:fe(8,e,a);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var l=e.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zl(e.memoizedState.cache)}if(l=e.child,l!==null)l.return=e,Ot=l;else t:for(e=t;Ot!==null;){l=Ot;var i=l.sibling,n=l.return;if(Io(l),l===e){Ot=null;break t}if(i!==null){i.return=n,Ot=i;break t}Ot=n}}}var fg={getCacheForType:function(t){var a=Dt(bt),e=a.data.get(t);return e===void 0&&(e=t(),a.data.set(t,e)),e},cacheSignal:function(){return Dt(bt).controller.signal}},og=typeof WeakMap=="function"?WeakMap:Map,P=0,ot=null,V=null,k=0,lt=0,na=null,oe=!1,xl=!1,Ac=!1,ka=0,mt=0,se=0,Ge=0,jc=0,ua=0,vl=0,ri=null,Ft=null,Nc=!1,mn=0,fs=0,xn=1/0,vn=null,de=null,Tt=0,pe=null,yl=null,Ja=0,Oc=0,Mc=null,os=null,fi=0,wc=null;function ca(){return(P&2)!==0&&k!==0?k&-k:b.T!==null?Bc():Tr()}function ss(){if(ua===0)if((k&536870912)===0||W){var t=Ai;Ai<<=1,(Ai&3932160)===0&&(Ai=262144),ua=t}else ua=536870912;return t=la.current,t!==null&&(t.flags|=32),ua}function Wt(t,a,e){(t===ot&&(lt===2||lt===9)||t.cancelPendingCommit!==null)&&(bl(t,0),ge(t,k,ua,!1)),wl(t,e),((P&2)===0||t!==ot)&&(t===ot&&((P&2)===0&&(Ge|=e),mt===4&&ge(t,k,ua,!1)),Ma(t))}function ds(t,a,e){if((P&6)!==0)throw Error(p(327));var l=!e&&(a&127)===0&&(a&t.expiredLanes)===0||Ml(t,a),i=l?pg(t,a):Dc(t,a,!0),n=l;do{if(i===0){xl&&!l&&ge(t,a,0,!1);break}else{if(e=t.current.alternate,n&&!sg(e)){i=Dc(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;t:{var c=t;i=ri;var f=c.current.memoizedState.isDehydrated;if(f&&(bl(c,u).flags|=256),u=Dc(c,u,!1),u!==2){if(Ac&&!f){c.errorRecoveryDisabledLanes|=n,Ge|=n,i=4;break t}n=Ft,Ft=i,n!==null&&(Ft===null?Ft=n:Ft.push.apply(Ft,n))}i=u}if(n=!1,i!==2)continue}}if(i===1){bl(t,0),ge(t,a,0,!0);break}t:{switch(l=t,n=i,n){case 0:case 1:throw Error(p(345));case 4:if((a&4194048)!==a)break;case 6:ge(l,a,ua,!oe);break t;case 2:Ft=null;break;case 3:case 5:break;default:throw Error(p(329))}if((a&62914560)===a&&(i=mn+300-It(),10<i)){if(ge(l,a,ua,!oe),Ni(l,0,!0)!==0)break t;Ja=a,l.timeoutHandle=Qs(ps.bind(null,l,e,Ft,vn,Nc,a,ua,Ge,vl,oe,n,"Throttled",-0,0),i);break t}ps(l,e,Ft,vn,Nc,a,ua,Ge,vl,oe,n,null,-0,0)}}break}while(!0);Ma(t)}function ps(t,a,e,l,i,n,u,c,f,h,y,E,m,x){if(t.timeoutHandle=-1,E=a.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ca},ns(a,n,E);var w=(n&62914560)===n?mn-It():(n&4194048)===n?fs-It():0;if(w=Fg(E,w),w!==null){Ja=n,t.cancelPendingCommit=w(Ss.bind(null,t,a,n,e,l,i,u,c,f,y,E,null,m,x)),ge(t,n,u,!h);return}}Ss(t,a,n,e,l,i,u,c,f)}function sg(t){for(var a=t;;){var e=a.tag;if((e===0||e===11||e===15)&&a.flags&16384&&(e=a.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var l=0;l<e.length;l++){var i=e[l],n=i.getSnapshot;i=i.value;try{if(!aa(n(),i))return!1}catch{return!1}}if(e=a.child,a.subtreeFlags&16384&&e!==null)e.return=a,a=e;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ge(t,a,e,l){a&=~jc,a&=~Ge,t.suspendedLanes|=a,t.pingedLanes&=~a,l&&(t.warmLanes|=a),l=t.expirationTimes;for(var i=a;0<i;){var n=31-ta(i),u=1<<n;l[n]=-1,i&=~u}e!==0&&Sr(t,e,a)}function yn(){return(P&6)===0?(oi(0),!1):!0}function _c(){if(V!==null){if(lt===0)var t=V.return;else t=V,Ha=De=null,ku(t),ol=null,Kl=0,t=V;for(;t!==null;)Zo(t.alternate,t),t=t.return;V=null}}function bl(t,a){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,_g(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Ja=0,_c(),ot=t,V=e=Ra(t.current,null),k=a,lt=0,na=null,oe=!1,xl=Ml(t,a),Ac=!1,vl=ua=jc=Ge=se=mt=0,Ft=ri=null,Nc=!1,(a&8)!==0&&(a|=a&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=a;0<l;){var i=31-ta(l),n=1<<i;a|=t[i],l&=~n}return ka=a,Li(),e}function gs(t,a){X=null,b.H=ti,a===fl||a===ki?(a=Mf(),lt=3):a===Ru?(a=Mf(),lt=4):lt=a===fc?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,na=a,V===null&&(mt=1,rn(t,da(a,t.current)))}function hs(){var t=la.current;return t===null?!0:(k&4194048)===k?ma===null:(k&62914560)===k||(k&536870912)!==0?t===ma:!1}function ms(){var t=b.H;return b.H=ti,t===null?ti:t}function xs(){var t=b.A;return b.A=fg,t}function bn(){mt=4,oe||(k&4194048)!==k&&la.current!==null||(xl=!0),(se&134217727)===0&&(Ge&134217727)===0||ot===null||ge(ot,k,ua,!1)}function Dc(t,a,e){var l=P;P|=2;var i=ms(),n=xs();(ot!==t||k!==a)&&(vn=null,bl(t,a)),a=!1;var u=mt;t:do try{if(lt!==0&&V!==null){var c=V,f=na;switch(lt){case 8:_c(),u=6;break t;case 3:case 2:case 9:case 6:la.current===null&&(a=!0);var h=lt;if(lt=0,na=null,Sl(t,c,f,h),e&&xl){u=0;break t}break;default:h=lt,lt=0,na=null,Sl(t,c,f,h)}}dg(),u=mt;break}catch(y){gs(t,y)}while(!0);return a&&t.shellSuspendCounter++,Ha=De=null,P=l,b.H=i,b.A=n,V===null&&(ot=null,k=0,Li()),u}function dg(){for(;V!==null;)vs(V)}function pg(t,a){var e=P;P|=2;var l=ms(),i=xs();ot!==t||k!==a?(vn=null,xn=It()+500,bl(t,a)):xl=Ml(t,a);t:do try{if(lt!==0&&V!==null){a=V;var n=na;a:switch(lt){case 1:lt=0,na=null,Sl(t,a,n,1);break;case 2:case 9:if(Nf(n)){lt=0,na=null,ys(a);break}a=function(){lt!==2&&lt!==9||ot!==t||(lt=7),Ma(t)},n.then(a,a);break t;case 3:lt=7;break t;case 4:lt=5;break t;case 7:Nf(n)?(lt=0,na=null,ys(a)):(lt=0,na=null,Sl(t,a,n,7));break;case 5:var u=null;switch(V.tag){case 26:u=V.memoizedState;case 5:case 27:var c=V;if(u?id(u):c.stateNode.complete){lt=0,na=null;var f=c.sibling;if(f!==null)V=f;else{var h=c.return;h!==null?(V=h,Sn(h)):V=null}break a}}lt=0,na=null,Sl(t,a,n,5);break;case 6:lt=0,na=null,Sl(t,a,n,6);break;case 8:_c(),mt=6;break t;default:throw Error(p(462))}}gg();break}catch(y){gs(t,y)}while(!0);return Ha=De=null,b.H=l,b.A=i,P=e,V!==null?0:(ot=null,k=0,Li(),mt)}function gg(){for(;V!==null&&!Hd();)vs(V)}function vs(t){var a=Xo(t.alternate,t,ka);t.memoizedProps=t.pendingProps,a===null?Sn(t):V=a}function ys(t){var a=t,e=a.alternate;switch(a.tag){case 15:case 0:a=Bo(e,a,a.pendingProps,a.type,void 0,k);break;case 11:a=Bo(e,a,a.pendingProps,a.type.render,a.ref,k);break;case 5:ku(a);default:Zo(e,a),a=V=mf(a,ka),a=Xo(e,a,ka)}t.memoizedProps=t.pendingProps,a===null?Sn(t):V=a}function Sl(t,a,e,l){Ha=De=null,ku(a),ol=null,Kl=0;var i=a.return;try{if(eg(t,i,a,e,k)){mt=1,rn(t,da(e,t.current)),V=null;return}}catch(n){if(i!==null)throw V=i,n;mt=1,rn(t,da(e,t.current)),V=null;return}a.flags&32768?(W||l===1?t=!0:xl||(k&536870912)!==0?t=!1:(oe=t=!0,(l===2||l===9||l===3||l===6)&&(l=la.current,l!==null&&l.tag===13&&(l.flags|=16384))),bs(a,t)):Sn(a)}function Sn(t){var a=t;do{if((a.flags&32768)!==0){bs(a,oe);return}t=a.return;var e=ng(a.alternate,a,ka);if(e!==null){V=e;return}if(a=a.sibling,a!==null){V=a;return}V=a=t}while(a!==null);mt===0&&(mt=5)}function bs(t,a){do{var e=ug(t.alternate,t);if(e!==null){e.flags&=32767,V=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!a&&(t=t.sibling,t!==null)){V=t;return}V=t=e}while(t!==null);mt=6,V=null}function Ss(t,a,e,l,i,n,u,c,f){t.cancelPendingCommit=null;do zn();while(Tt!==0);if((P&6)!==0)throw Error(p(327));if(a!==null){if(a===t.current)throw Error(p(177));if(n=a.lanes|a.childLanes,n|=bu,kd(t,e,n,u,c,f),t===ot&&(V=ot=null,k=0),yl=a,pe=t,Ja=e,Oc=n,Mc=i,os=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,vg(Ei,function(){return js(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=b.T,b.T=null,i=A.p,A.p=2,u=P,P|=4;try{cg(t,a,e)}finally{P=u,A.p=i,b.T=l}}Tt=1,zs(),Es(),Ts()}}function zs(){if(Tt===1){Tt=0;var t=pe,a=yl,e=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||e){e=b.T,b.T=null;var l=A.p;A.p=2;var i=P;P|=4;try{es(a,t);var n=Zc,u=cf(t.containerInfo),c=n.focusedElem,f=n.selectionRange;if(u!==c&&c&&c.ownerDocument&&uf(c.ownerDocument.documentElement,c)){if(f!==null&&hu(c)){var h=f.start,y=f.end;if(y===void 0&&(y=h),"selectionStart"in c)c.selectionStart=h,c.selectionEnd=Math.min(y,c.value.length);else{var E=c.ownerDocument||document,m=E&&E.defaultView||window;if(m.getSelection){var x=m.getSelection(),w=c.textContent.length,R=Math.min(f.start,w),rt=f.end===void 0?R:Math.min(f.end,w);!x.extend&&R>rt&&(u=rt,rt=R,R=u);var d=nf(c,R),o=nf(c,rt);if(d&&o&&(x.rangeCount!==1||x.anchorNode!==d.node||x.anchorOffset!==d.offset||x.focusNode!==o.node||x.focusOffset!==o.offset)){var g=E.createRange();g.setStart(d.node,d.offset),x.removeAllRanges(),R>rt?(x.addRange(g),x.extend(o.node,o.offset)):(g.setEnd(o.node,o.offset),x.addRange(g))}}}}for(E=[],x=c;x=x.parentNode;)x.nodeType===1&&E.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<E.length;c++){var S=E[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Un=!!Qc,Zc=Qc=null}finally{P=i,A.p=l,b.T=e}}t.current=a,Tt=2}}function Es(){if(Tt===2){Tt=0;var t=pe,a=yl,e=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||e){e=b.T,b.T=null;var l=A.p;A.p=2;var i=P;P|=4;try{$o(t,a.alternate,a)}finally{P=i,A.p=l,b.T=e}}Tt=3}}function Ts(){if(Tt===4||Tt===3){Tt=0,Yd();var t=pe,a=yl,e=Ja,l=os;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Tt=5:(Tt=0,yl=pe=null,As(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(de=null),Wn(e),a=a.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Ol,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=b.T,i=A.p,A.p=2,b.T=null;try{for(var n=t.onRecoverableError,u=0;u<l.length;u++){var c=l[u];n(c.value,{componentStack:c.stack})}}finally{b.T=a,A.p=i}}(Ja&3)!==0&&zn(),Ma(t),i=t.pendingLanes,(e&261930)!==0&&(i&42)!==0?t===wc?fi++:(fi=0,wc=t):fi=0,oi(0)}}function As(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Zl(a)))}function zn(){return zs(),Es(),Ts(),js()}function js(){if(Tt!==5)return!1;var t=pe,a=Oc;Oc=0;var e=Wn(Ja),l=b.T,i=A.p;try{A.p=32>e?32:e,b.T=null,e=Mc,Mc=null;var n=pe,u=Ja;if(Tt=0,yl=pe=null,Ja=0,(P&6)!==0)throw Error(p(331));var c=P;if(P|=4,cs(n.current),is(n,n.current,u,e),P=c,oi(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Ol,n)}catch{}return!0}finally{A.p=i,b.T=l,As(t,a)}}function Ns(t,a,e){a=da(e,a),a=rc(t.stateNode,a,2),t=ue(t,a,2),t!==null&&(wl(t,2),Ma(t))}function it(t,a,e){if(t.tag===3)Ns(t,t,e);else for(;a!==null;){if(a.tag===3){Ns(a,t,e);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(de===null||!de.has(l))){t=da(e,t),e=Oo(2),l=ue(a,e,2),l!==null&&(Mo(e,l,a,t),wl(l,2),Ma(l));break}}a=a.return}}function Cc(t,a,e){var l=t.pingCache;if(l===null){l=t.pingCache=new og;var i=new Set;l.set(a,i)}else i=l.get(a),i===void 0&&(i=new Set,l.set(a,i));i.has(e)||(Ac=!0,i.add(e),t=hg.bind(null,t,a,e),a.then(t,t))}function hg(t,a,e){var l=t.pingCache;l!==null&&l.delete(a),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,ot===t&&(k&e)===e&&(mt===4||mt===3&&(k&62914560)===k&&300>It()-mn?(P&2)===0&&bl(t,0):jc|=e,vl===k&&(vl=0)),Ma(t)}function Os(t,a){a===0&&(a=br()),t=Me(t,a),t!==null&&(wl(t,a),Ma(t))}function mg(t){var a=t.memoizedState,e=0;a!==null&&(e=a.retryLane),Os(t,e)}function xg(t,a){var e=0;switch(t.tag){case 31:case 13:var l=t.stateNode,i=t.memoizedState;i!==null&&(e=i.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(p(314))}l!==null&&l.delete(a),Os(t,e)}function vg(t,a){return Kn(t,a)}var En=null,zl=null,Uc=!1,Tn=!1,Rc=!1,he=0;function Ma(t){t!==zl&&t.next===null&&(zl===null?En=zl=t:zl=zl.next=t),Tn=!0,Uc||(Uc=!0,bg())}function oi(t,a){if(!Rc&&Tn){Rc=!0;do for(var e=!1,l=En;l!==null;){if(t!==0){var i=l.pendingLanes;if(i===0)var n=0;else{var u=l.suspendedLanes,c=l.pingedLanes;n=(1<<31-ta(42|t)+1)-1,n&=i&~(u&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(e=!0,Ds(l,n))}else n=k,n=Ni(l,l===ot?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||Ml(l,n)||(e=!0,Ds(l,n));l=l.next}while(e);Rc=!1}}function yg(){Ms()}function Ms(){Tn=Uc=!1;var t=0;he!==0&&wg()&&(t=he);for(var a=It(),e=null,l=En;l!==null;){var i=l.next,n=ws(l,a);n===0?(l.next=null,e===null?En=i:e.next=i,i===null&&(zl=e)):(e=l,(t!==0||(n&3)!==0)&&(Tn=!0)),l=i}Tt!==0&&Tt!==5||oi(t),he!==0&&(he=0)}function ws(t,a){for(var e=t.suspendedLanes,l=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var u=31-ta(n),c=1<<u,f=i[u];f===-1?((c&e)===0||(c&l)!==0)&&(i[u]=Kd(c,a)):f<=a&&(t.expiredLanes|=c),n&=~c}if(a=ot,e=k,e=Ni(t,t===a?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,e===0||t===a&&(lt===2||lt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&kn(l),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Ml(t,e)){if(a=e&-e,a===t.callbackPriority)return a;switch(l!==null&&kn(l),Wn(e)){case 2:case 8:e=vr;break;case 32:e=Ei;break;case 268435456:e=yr;break;default:e=Ei}return l=_s.bind(null,t),e=Kn(e,l),t.callbackPriority=a,t.callbackNode=e,a}return l!==null&&l!==null&&kn(l),t.callbackPriority=2,t.callbackNode=null,2}function _s(t,a){if(Tt!==0&&Tt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(zn()&&t.callbackNode!==e)return null;var l=k;return l=Ni(t,t===ot?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(ds(t,l,a),ws(t,It()),t.callbackNode!=null&&t.callbackNode===e?_s.bind(null,t):null)}function Ds(t,a){if(zn())return null;ds(t,a,!0)}function bg(){Dg(function(){(P&6)!==0?Kn(xr,yg):Ms()})}function Bc(){if(he===0){var t=cl;t===0&&(t=Ti,Ti<<=1,(Ti&261888)===0&&(Ti=256)),he=t}return he}function Cs(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_i(""+t)}function Us(t,a){var e=a.ownerDocument.createElement("input");return e.name=a.name,e.value=a.value,t.id&&e.setAttribute("form",t.id),a.parentNode.insertBefore(e,a),t=new FormData(t),e.parentNode.removeChild(e),t}function Sg(t,a,e,l,i){if(a==="submit"&&e&&e.stateNode===i){var n=Cs((i[Zt]||null).action),u=l.submitter;u&&(a=(a=u[Zt]||null)?Cs(a.formAction):u.getAttribute("formAction"),a!==null&&(n=a,u=null));var c=new Ri("action","action",null,l,i);t.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(he!==0){var f=u?Us(i,u):new FormData(i);ec(e,{pending:!0,data:f,method:i.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=u?Us(i,u):new FormData(i),ec(e,{pending:!0,data:f,method:i.method,action:n},n,f))},currentTarget:i}]})}}for(var Hc=0;Hc<yu.length;Hc++){var Yc=yu[Hc],zg=Yc.toLowerCase(),Eg=Yc[0].toUpperCase()+Yc.slice(1);ba(zg,"on"+Eg)}ba(of,"onAnimationEnd"),ba(sf,"onAnimationIteration"),ba(df,"onAnimationStart"),ba("dblclick","onDoubleClick"),ba("focusin","onFocus"),ba("focusout","onBlur"),ba(Lp,"onTransitionRun"),ba(qp,"onTransitionStart"),ba(Gp,"onTransitionCancel"),ba(pf,"onTransitionEnd"),ke("onMouseEnter",["mouseout","mouseover"]),ke("onMouseLeave",["mouseout","mouseover"]),ke("onPointerEnter",["pointerout","pointerover"]),ke("onPointerLeave",["pointerout","pointerover"]),Ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));function Rs(t,a){a=(a&4)!==0;for(var e=0;e<t.length;e++){var l=t[e],i=l.event;l=l.listeners;t:{var n=void 0;if(a)for(var u=l.length-1;0<=u;u--){var c=l[u],f=c.instance,h=c.currentTarget;if(c=c.listener,f!==n&&i.isPropagationStopped())break t;n=c,i.currentTarget=h;try{n(i)}catch(y){Yi(y)}i.currentTarget=null,n=f}else for(u=0;u<l.length;u++){if(c=l[u],f=c.instance,h=c.currentTarget,c=c.listener,f!==n&&i.isPropagationStopped())break t;n=c,i.currentTarget=h;try{n(i)}catch(y){Yi(y)}i.currentTarget=null,n=f}}}}function K(t,a){var e=a[$n];e===void 0&&(e=a[$n]=new Set);var l=t+"__bubble";e.has(l)||(Bs(a,t,2,!1),e.add(l))}function Lc(t,a,e){var l=0;a&&(l|=4),Bs(e,t,l,a)}var An="_reactListening"+Math.random().toString(36).slice(2);function qc(t){if(!t[An]){t[An]=!0,Nr.forEach(function(e){e!=="selectionchange"&&(Tg.has(e)||Lc(e,!1,t),Lc(e,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[An]||(a[An]=!0,Lc("selectionchange",!1,a))}}function Bs(t,a,e,l){switch(sd(a)){case 2:var i=Ig;break;case 8:i=Pg;break;default:i=ar}e=i.bind(null,a,e,t),i=void 0,!uu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),l?i!==void 0?t.addEventListener(a,e,{capture:!0,passive:i}):t.addEventListener(a,e,!0):i!==void 0?t.addEventListener(a,e,{passive:i}):t.addEventListener(a,e,!1)}function Gc(t,a,e,l,i){var n=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===i)break;if(u===4)for(u=l.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;c!==null;){if(u=Ze(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){l=n=u;continue t}c=c.parentNode}}l=l.return}Lr(function(){var h=n,y=iu(e),E=[];t:{var m=gf.get(t);if(m!==void 0){var x=Ri,w=t;switch(t){case"keypress":if(Ci(e)===0)break t;case"keydown":case"keyup":x=xp;break;case"focusin":w="focus",x=ou;break;case"focusout":w="blur",x=ou;break;case"beforeblur":case"afterblur":x=ou;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Xr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=bp;break;case of:case sf:case df:x=rp;break;case pf:x=zp;break;case"scroll":case"scrollend":x=lp;break;case"wheel":x=Tp;break;case"copy":case"cut":case"paste":x=op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Zr;break;case"toggle":case"beforetoggle":x=jp}var R=(a&4)!==0,rt=!R&&(t==="scroll"||t==="scrollend"),d=R?m!==null?m+"Capture":null:m;R=[];for(var o=h,g;o!==null;){var S=o;if(g=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||g===null||d===null||(S=Cl(o,d),S!=null&&R.push(di(o,S,g))),rt)break;o=o.return}0<R.length&&(m=new x(m,w,null,e,y),E.push({event:m,listeners:R}))}}if((a&7)===0){t:{if(m=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",m&&e!==lu&&(w=e.relatedTarget||e.fromElement)&&(Ze(w)||w[Qe]))break t;if((x||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=e.relatedTarget||e.toElement,x=h,w=w?Ze(w):null,w!==null&&(rt=L(w),R=w.tag,w!==rt||R!==5&&R!==27&&R!==6)&&(w=null)):(x=null,w=h),x!==w)){if(R=Xr,S="onMouseLeave",d="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(R=Zr,S="onPointerLeave",d="onPointerEnter",o="pointer"),rt=x==null?m:Dl(x),g=w==null?m:Dl(w),m=new R(S,o+"leave",x,e,y),m.target=rt,m.relatedTarget=g,S=null,Ze(y)===h&&(R=new R(d,o+"enter",w,e,y),R.target=g,R.relatedTarget=rt,S=R),rt=S,x&&w)a:{for(R=Ag,d=x,o=w,g=0,S=d;S;S=R(S))g++;S=0;for(var U=o;U;U=R(U))S++;for(;0<g-S;)d=R(d),g--;for(;0<S-g;)o=R(o),S--;for(;g--;){if(d===o||o!==null&&d===o.alternate){R=d;break a}d=R(d),o=R(o)}R=null}else R=null;x!==null&&Hs(E,m,x,R,!1),w!==null&&rt!==null&&Hs(E,rt,w,R,!0)}}t:{if(m=h?Dl(h):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var $=Ir;else if(Wr(m))if(Pr)$=Bp;else{$=Up;var C=Cp}else x=m.nodeName,!x||x.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?h&&eu(h.elementType)&&($=Ir):$=Rp;if($&&($=$(t,h))){$r(E,$,e,y);break t}C&&C(t,m,h),t==="focusout"&&h&&m.type==="number"&&h.memoizedProps.value!=null&&au(m,"number",m.value)}switch(C=h?Dl(h):window,t){case"focusin":(Wr(C)||C.contentEditable==="true")&&(Pe=C,mu=h,Gl=null);break;case"focusout":Gl=mu=Pe=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,rf(E,e,y);break;case"selectionchange":if(Yp)break;case"keydown":case"keyup":rf(E,e,y)}var Q;if(du)t:{switch(t){case"compositionstart":var J="onCompositionStart";break t;case"compositionend":J="onCompositionEnd";break t;case"compositionupdate":J="onCompositionUpdate";break t}J=void 0}else Ie?Jr(t,e)&&(J="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(J="onCompositionStart");J&&(Vr&&e.locale!=="ko"&&(Ie||J!=="onCompositionStart"?J==="onCompositionEnd"&&Ie&&(Q=qr()):(Pa=y,cu="value"in Pa?Pa.value:Pa.textContent,Ie=!0)),C=jn(h,J),0<C.length&&(J=new Qr(J,t,null,e,y),E.push({event:J,listeners:C}),Q?J.data=Q:(Q=Fr(e),Q!==null&&(J.data=Q)))),(Q=Op?Mp(t,e):wp(t,e))&&(J=jn(h,"onBeforeInput"),0<J.length&&(C=new Qr("onBeforeInput","beforeinput",null,e,y),E.push({event:C,listeners:J}),C.data=Q)),Sg(E,t,h,e,y)}Rs(E,a)})}function di(t,a,e){return{instance:t,listener:a,currentTarget:e}}function jn(t,a){for(var e=a+"Capture",l=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Cl(t,e),i!=null&&l.unshift(di(t,i,n)),i=Cl(t,a),i!=null&&l.push(di(t,i,n))),t.tag===3)return l;t=t.return}return[]}function Ag(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hs(t,a,e,l,i){for(var n=a._reactName,u=[];e!==null&&e!==l;){var c=e,f=c.alternate,h=c.stateNode;if(c=c.tag,f!==null&&f===l)break;c!==5&&c!==26&&c!==27||h===null||(f=h,i?(h=Cl(e,n),h!=null&&u.unshift(di(e,h,f))):i||(h=Cl(e,n),h!=null&&u.push(di(e,h,f)))),e=e.return}u.length!==0&&t.push({event:a,listeners:u})}var jg=/\r\n?/g,Ng=/\u0000|\uFFFD/g;function Ys(t){return(typeof t=="string"?t:""+t).replace(jg,`
`).replace(Ng,"")}function Ls(t,a){return a=Ys(a),Ys(t)===a}function ct(t,a,e,l,i,n){switch(e){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Fe(t,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Fe(t,""+l);break;case"className":Mi(t,"class",l);break;case"tabIndex":Mi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Mi(t,e,l);break;case"style":Hr(t,l,n);break;case"data":if(a!=="object"){Mi(t,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||e!=="href")){t.removeAttribute(e);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(e);break}l=_i(""+l),t.setAttribute(e,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(e==="formAction"?(a!=="input"&&ct(t,a,"name",i.name,i,null),ct(t,a,"formEncType",i.formEncType,i,null),ct(t,a,"formMethod",i.formMethod,i,null),ct(t,a,"formTarget",i.formTarget,i,null)):(ct(t,a,"encType",i.encType,i,null),ct(t,a,"method",i.method,i,null),ct(t,a,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(e);break}l=_i(""+l),t.setAttribute(e,l);break;case"onClick":l!=null&&(t.onclick=Ca);break;case"onScroll":l!=null&&K("scroll",t);break;case"onScrollEnd":l!=null&&K("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(p(61));if(e=l.__html,e!=null){if(i.children!=null)throw Error(p(60));t.innerHTML=e}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}e=_i(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,""+l):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":l===!0?t.setAttribute(e,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,l):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(e,l):t.removeAttribute(e);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(e):t.setAttribute(e,l);break;case"popover":K("beforetoggle",t),K("toggle",t),Oi(t,"popover",l);break;case"xlinkActuate":Da(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Da(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Da(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Da(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Da(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Da(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Da(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Da(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Da(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Oi(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=ap.get(e)||e,Oi(t,e,l))}}function Xc(t,a,e,l,i,n){switch(e){case"style":Hr(t,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(p(61));if(e=l.__html,e!=null){if(i.children!=null)throw Error(p(60));t.innerHTML=e}}break;case"children":typeof l=="string"?Fe(t,l):(typeof l=="number"||typeof l=="bigint")&&Fe(t,""+l);break;case"onScroll":l!=null&&K("scroll",t);break;case"onScrollEnd":l!=null&&K("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Or.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(i=e.endsWith("Capture"),a=e.slice(2,i?e.length-7:void 0),n=t[Zt]||null,n=n!=null?n[e]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof l=="function")){typeof n!="function"&&n!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(a,l,i);break t}e in t?t[e]=l:l===!0?t.setAttribute(e,""):Oi(t,e,l)}}}function Ut(t,a,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",t),K("load",t);var l=!1,i=!1,n;for(n in e)if(e.hasOwnProperty(n)){var u=e[n];if(u!=null)switch(n){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,a));default:ct(t,a,n,u,e,null)}}i&&ct(t,a,"srcSet",e.srcSet,e,null),l&&ct(t,a,"src",e.src,e,null);return;case"input":K("invalid",t);var c=n=u=i=null,f=null,h=null;for(l in e)if(e.hasOwnProperty(l)){var y=e[l];if(y!=null)switch(l){case"name":i=y;break;case"type":u=y;break;case"checked":f=y;break;case"defaultChecked":h=y;break;case"value":n=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,a));break;default:ct(t,a,l,y,e,null)}}Cr(t,n,c,f,h,u,i,!1);return;case"select":K("invalid",t),l=u=n=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":n=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:ct(t,a,i,c,e,null)}a=n,e=u,t.multiple=!!l,a!=null?Je(t,!!l,a,!1):e!=null&&Je(t,!!l,e,!0);return;case"textarea":K("invalid",t),n=i=l=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":i=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(p(91));break;default:ct(t,a,u,c,e,null)}Rr(t,l,i,n);return;case"option":for(f in e)if(e.hasOwnProperty(f)&&(l=e[f],l!=null))switch(f){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ct(t,a,f,l,e,null)}return;case"dialog":K("beforetoggle",t),K("toggle",t),K("cancel",t),K("close",t);break;case"iframe":case"object":K("load",t);break;case"video":case"audio":for(l=0;l<si.length;l++)K(si[l],t);break;case"image":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"embed":case"source":case"link":K("error",t),K("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in e)if(e.hasOwnProperty(h)&&(l=e[h],l!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,a));default:ct(t,a,h,l,e,null)}return;default:if(eu(a)){for(y in e)e.hasOwnProperty(y)&&(l=e[y],l!==void 0&&Xc(t,a,y,l,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(l=e[c],l!=null&&ct(t,a,c,l,e,null))}function Og(t,a,e,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,u=null,c=null,f=null,h=null,y=null;for(x in e){var E=e[x];if(e.hasOwnProperty(x)&&E!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":f=E;default:l.hasOwnProperty(x)||ct(t,a,x,null,l,E)}}for(var m in l){var x=l[m];if(E=e[m],l.hasOwnProperty(m)&&(x!=null||E!=null))switch(m){case"type":n=x;break;case"name":i=x;break;case"checked":h=x;break;case"defaultChecked":y=x;break;case"value":u=x;break;case"defaultValue":c=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(p(137,a));break;default:x!==E&&ct(t,a,m,x,l,E)}}tu(t,u,c,f,h,y,n,i);return;case"select":x=u=c=m=null;for(n in e)if(f=e[n],e.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":x=f;default:l.hasOwnProperty(n)||ct(t,a,n,null,l,f)}for(i in l)if(n=l[i],f=e[i],l.hasOwnProperty(i)&&(n!=null||f!=null))switch(i){case"value":m=n;break;case"defaultValue":c=n;break;case"multiple":u=n;default:n!==f&&ct(t,a,i,n,l,f)}a=c,e=u,l=x,m!=null?Je(t,!!e,m,!1):!!l!=!!e&&(a!=null?Je(t,!!e,a,!0):Je(t,!!e,e?[]:"",!1));return;case"textarea":x=m=null;for(c in e)if(i=e[c],e.hasOwnProperty(c)&&i!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ct(t,a,c,null,l,i)}for(u in l)if(i=l[u],n=e[u],l.hasOwnProperty(u)&&(i!=null||n!=null))switch(u){case"value":m=i;break;case"defaultValue":x=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(p(91));break;default:i!==n&&ct(t,a,u,i,l,n)}Ur(t,m,x);return;case"option":for(var w in e)if(m=e[w],e.hasOwnProperty(w)&&m!=null&&!l.hasOwnProperty(w))switch(w){case"selected":t.selected=!1;break;default:ct(t,a,w,null,l,m)}for(f in l)if(m=l[f],x=e[f],l.hasOwnProperty(f)&&m!==x&&(m!=null||x!=null))switch(f){case"selected":t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:ct(t,a,f,m,l,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var R in e)m=e[R],e.hasOwnProperty(R)&&m!=null&&!l.hasOwnProperty(R)&&ct(t,a,R,null,l,m);for(h in l)if(m=l[h],x=e[h],l.hasOwnProperty(h)&&m!==x&&(m!=null||x!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(p(137,a));break;default:ct(t,a,h,m,l,x)}return;default:if(eu(a)){for(var rt in e)m=e[rt],e.hasOwnProperty(rt)&&m!==void 0&&!l.hasOwnProperty(rt)&&Xc(t,a,rt,void 0,l,m);for(y in l)m=l[y],x=e[y],!l.hasOwnProperty(y)||m===x||m===void 0&&x===void 0||Xc(t,a,y,m,l,x);return}}for(var d in e)m=e[d],e.hasOwnProperty(d)&&m!=null&&!l.hasOwnProperty(d)&&ct(t,a,d,null,l,m);for(E in l)m=l[E],x=e[E],!l.hasOwnProperty(E)||m===x||m==null&&x==null||ct(t,a,E,m,l,x)}function qs(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Mg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,e=performance.getEntriesByType("resource"),l=0;l<e.length;l++){var i=e[l],n=i.transferSize,u=i.initiatorType,c=i.duration;if(n&&c&&qs(u)){for(u=0,c=i.responseEnd,l+=1;l<e.length;l++){var f=e[l],h=f.startTime;if(h>c)break;var y=f.transferSize,E=f.initiatorType;y&&qs(E)&&(f=f.responseEnd,u+=y*(f<c?1:(c-h)/(f-h)))}if(--l,a+=8*(n+u)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qc=null,Zc=null;function Nn(t){return t.nodeType===9?t:t.ownerDocument}function Gs(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xs(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Vc(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Kc=null;function wg(){var t=window.event;return t&&t.type==="popstate"?t===Kc?!1:(Kc=t,!0):(Kc=null,!1)}var Qs=typeof setTimeout=="function"?setTimeout:void 0,_g=typeof clearTimeout=="function"?clearTimeout:void 0,Zs=typeof Promise=="function"?Promise:void 0,Dg=typeof queueMicrotask=="function"?queueMicrotask:typeof Zs<"u"?function(t){return Zs.resolve(null).then(t).catch(Cg)}:Qs;function Cg(t){setTimeout(function(){throw t})}function me(t){return t==="head"}function Vs(t,a){var e=a,l=0;do{var i=e.nextSibling;if(t.removeChild(e),i&&i.nodeType===8)if(e=i.data,e==="/$"||e==="/&"){if(l===0){t.removeChild(i),jl(a);return}l--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")l++;else if(e==="html")pi(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,pi(e);for(var n=e.firstChild;n;){var u=n.nextSibling,c=n.nodeName;n[_l]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||e.removeChild(n),n=u}}else e==="body"&&pi(t.ownerDocument.body);e=i}while(e);jl(a)}function Ks(t,a){var e=t;t=0;do{var l=e.nextSibling;if(e.nodeType===1?a?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(a?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=l}while(e)}function kc(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var e=a;switch(a=a.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":kc(e),In(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function Ug(t,a,e,l){for(;t.nodeType===1;){var i=e;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[_l])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=xa(t.nextSibling),t===null)break}return null}function Rg(t,a,e){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=xa(t.nextSibling),t===null))return null;return t}function ks(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xa(t.nextSibling),t===null))return null;return t}function Jc(t){return t.data==="$?"||t.data==="$~"}function Fc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Bg(t,a){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||e.readyState!=="loading")a();else{var l=function(){a(),e.removeEventListener("DOMContentLoaded",l)};e.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function xa(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var Wc=null;function Js(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(a===0)return xa(t.nextSibling);a--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||a++}t=t.nextSibling}return null}function Fs(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(a===0)return t;a--}else e!=="/$"&&e!=="/&"||a++}t=t.previousSibling}return null}function Ws(t,a,e){switch(a=Nn(e),t){case"html":if(t=a.documentElement,!t)throw Error(p(452));return t;case"head":if(t=a.head,!t)throw Error(p(453));return t;case"body":if(t=a.body,!t)throw Error(p(454));return t;default:throw Error(p(451))}}function pi(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);In(t)}var va=new Map,$s=new Set;function On(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Fa=A.d;A.d={f:Hg,r:Yg,D:Lg,C:qg,L:Gg,m:Xg,X:Zg,S:Qg,M:Vg};function Hg(){var t=Fa.f(),a=yn();return t||a}function Yg(t){var a=Ve(t);a!==null&&a.tag===5&&a.type==="form"?go(a):Fa.r(t)}var El=typeof document>"u"?null:document;function Is(t,a,e){var l=El;if(l&&typeof a=="string"&&a){var i=oa(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof e=="string"&&(i+='[crossorigin="'+e+'"]'),$s.has(i)||($s.add(i),t={rel:t,crossOrigin:e,href:a},l.querySelector(i)===null&&(a=l.createElement("link"),Ut(a,"link",t),Nt(a),l.head.appendChild(a)))}}function Lg(t){Fa.D(t),Is("dns-prefetch",t,null)}function qg(t,a){Fa.C(t,a),Is("preconnect",t,a)}function Gg(t,a,e){Fa.L(t,a,e);var l=El;if(l&&t&&a){var i='link[rel="preload"][as="'+oa(a)+'"]';a==="image"&&e&&e.imageSrcSet?(i+='[imagesrcset="'+oa(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(i+='[imagesizes="'+oa(e.imageSizes)+'"]')):i+='[href="'+oa(t)+'"]';var n=i;switch(a){case"style":n=Tl(t);break;case"script":n=Al(t)}va.has(n)||(t=M({rel:"preload",href:a==="image"&&e&&e.imageSrcSet?void 0:t,as:a},e),va.set(n,t),l.querySelector(i)!==null||a==="style"&&l.querySelector(gi(n))||a==="script"&&l.querySelector(hi(n))||(a=l.createElement("link"),Ut(a,"link",t),Nt(a),l.head.appendChild(a)))}}function Xg(t,a){Fa.m(t,a);var e=El;if(e&&t){var l=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+oa(l)+'"][href="'+oa(t)+'"]',n=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Al(t)}if(!va.has(n)&&(t=M({rel:"modulepreload",href:t},a),va.set(n,t),e.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(hi(n)))return}l=e.createElement("link"),Ut(l,"link",t),Nt(l),e.head.appendChild(l)}}}function Qg(t,a,e){Fa.S(t,a,e);var l=El;if(l&&t){var i=Ke(l).hoistableStyles,n=Tl(t);a=a||"default";var u=i.get(n);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(gi(n)))c.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":a},e),(e=va.get(n))&&$c(t,e);var f=u=l.createElement("link");Nt(f),Ut(f,"link",t),f._p=new Promise(function(h,y){f.onload=h,f.onerror=y}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Mn(u,a,l)}u={type:"stylesheet",instance:u,count:1,state:c},i.set(n,u)}}}function Zg(t,a){Fa.X(t,a);var e=El;if(e&&t){var l=Ke(e).hoistableScripts,i=Al(t),n=l.get(i);n||(n=e.querySelector(hi(i)),n||(t=M({src:t,async:!0},a),(a=va.get(i))&&Ic(t,a),n=e.createElement("script"),Nt(n),Ut(n,"link",t),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function Vg(t,a){Fa.M(t,a);var e=El;if(e&&t){var l=Ke(e).hoistableScripts,i=Al(t),n=l.get(i);n||(n=e.querySelector(hi(i)),n||(t=M({src:t,async:!0,type:"module"},a),(a=va.get(i))&&Ic(t,a),n=e.createElement("script"),Nt(n),Ut(n,"link",t),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function Ps(t,a,e,l){var i=(i=Z.current)?On(i):null;if(!i)throw Error(p(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(a=Tl(e.href),e=Ke(i).hoistableStyles,l=e.get(a),l||(l={type:"style",instance:null,count:0,state:null},e.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Tl(e.href);var n=Ke(i).hoistableStyles,u=n.get(t);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,u),(n=i.querySelector(gi(t)))&&!n._p&&(u.instance=n,u.state.loading=5),va.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},va.set(t,e),n||Kg(i,t,e,u.state))),a&&l===null)throw Error(p(528,""));return u}if(a&&l!==null)throw Error(p(529,""));return null;case"script":return a=e.async,e=e.src,typeof e=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Al(e),e=Ke(i).hoistableScripts,l=e.get(a),l||(l={type:"script",instance:null,count:0,state:null},e.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,t))}}function Tl(t){return'href="'+oa(t)+'"'}function gi(t){return'link[rel="stylesheet"]['+t+"]"}function td(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function Kg(t,a,e,l){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=t.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Ut(a,"link",e),Nt(a),t.head.appendChild(a))}function Al(t){return'[src="'+oa(t)+'"]'}function hi(t){return"script[async]"+t}function ad(t,a,e){if(a.count++,a.instance===null)switch(a.type){case"style":var l=t.querySelector('style[data-href~="'+oa(e.href)+'"]');if(l)return a.instance=l,Nt(l),l;var i=M({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Nt(l),Ut(l,"style",i),Mn(l,e.precedence,t),a.instance=l;case"stylesheet":i=Tl(e.href);var n=t.querySelector(gi(i));if(n)return a.state.loading|=4,a.instance=n,Nt(n),n;l=td(e),(i=va.get(i))&&$c(l,i),n=(t.ownerDocument||t).createElement("link"),Nt(n);var u=n;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Ut(n,"link",l),a.state.loading|=4,Mn(n,e.precedence,t),a.instance=n;case"script":return n=Al(e.src),(i=t.querySelector(hi(n)))?(a.instance=i,Nt(i),i):(l=e,(i=va.get(n))&&(l=M({},e),Ic(l,i)),t=t.ownerDocument||t,i=t.createElement("script"),Nt(i),Ut(i,"link",l),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(p(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Mn(l,e.precedence,t));return a.instance}function Mn(t,a,e){for(var l=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,n=i,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===a)n=c;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=e.nodeType===9?e.head:e,a.insertBefore(t,a.firstChild))}function $c(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function Ic(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var wn=null;function ed(t,a,e){if(wn===null){var l=new Map,i=wn=new Map;i.set(e,l)}else i=wn,l=i.get(e),l||(l=new Map,i.set(e,l));if(l.has(t))return l;for(l.set(t,null),e=e.getElementsByTagName(t),i=0;i<e.length;i++){var n=e[i];if(!(n[_l]||n[wt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var u=n.getAttribute(a)||"";u=t+u;var c=l.get(u);c?c.push(n):l.set(u,[n])}}return l}function ld(t,a,e){t=t.ownerDocument||t,t.head.insertBefore(e,a==="title"?t.querySelector("head > title"):null)}function kg(t,a,e){if(e===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function id(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Jg(t,a,e,l){if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Tl(l.href),n=a.querySelector(gi(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=_n.bind(t),a.then(t,t)),e.state.loading|=4,e.instance=n,Nt(n);return}n=a.ownerDocument||a,l=td(l),(i=va.get(i))&&$c(l,i),n=n.createElement("link"),Nt(n);var u=n;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Ut(n,"link",l),e.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,a),(a=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=_n.bind(t),a.addEventListener("load",e),a.addEventListener("error",e))}}var Pc=0;function Fg(t,a){return t.stylesheets&&t.count===0&&Cn(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var l=setTimeout(function(){if(t.stylesheets&&Cn(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&Pc===0&&(Pc=62500*Mg());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Cn(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Pc?50:800)+a);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function _n(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cn(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Dn=null;function Cn(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Dn=new Map,a.forEach(Wg,t),Dn=null,_n.call(t))}function Wg(t,a){if(!(a.state.loading&4)){var e=Dn.get(t);if(e)var l=e.get(null);else{e=new Map,Dn.set(t,e);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var u=i[n];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),l=u)}l&&e.set(null,l)}i=a.instance,u=i.getAttribute("data-precedence"),n=e.get(u)||l,n===l&&e.set(null,i),e.set(u,i),this.count++,l=_n.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var mi={$$typeof:Bt,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function $g(t,a,e,l,i,n,u,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jn(0),this.hiddenUpdates=Jn(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function nd(t,a,e,l,i,n,u,c,f,h,y,E){return t=new $g(t,a,e,u,f,h,y,E,c),a=1,n===!0&&(a|=24),n=ea(3,null,null,a),t.current=n,n.stateNode=t,a=Du(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:l,isDehydrated:e,cache:a},Bu(n),t}function ud(t){return t?(t=el,t):el}function cd(t,a,e,l,i,n){i=ud(i),l.context===null?l.context=i:l.pendingContext=i,l=ne(a),l.payload={element:e},n=n===void 0?null:n,n!==null&&(l.callback=n),e=ue(t,l,a),e!==null&&(Wt(e,t,a),Jl(e,t,a))}function rd(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<a?e:a}}function tr(t,a){rd(t,a),(t=t.alternate)&&rd(t,a)}function fd(t){if(t.tag===13||t.tag===31){var a=Me(t,67108864);a!==null&&Wt(a,t,67108864),tr(t,67108864)}}function od(t){if(t.tag===13||t.tag===31){var a=ca();a=Fn(a);var e=Me(t,a);e!==null&&Wt(e,t,a),tr(t,a)}}var Un=!0;function Ig(t,a,e,l){var i=b.T;b.T=null;var n=A.p;try{A.p=2,ar(t,a,e,l)}finally{A.p=n,b.T=i}}function Pg(t,a,e,l){var i=b.T;b.T=null;var n=A.p;try{A.p=8,ar(t,a,e,l)}finally{A.p=n,b.T=i}}function ar(t,a,e,l){if(Un){var i=er(l);if(i===null)Gc(t,a,l,Rn,e),dd(t,l);else if(a0(i,t,a,e,l))l.stopPropagation();else if(dd(t,l),a&4&&-1<t0.indexOf(t)){for(;i!==null;){var n=Ve(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var u=Te(n.pendingLanes);if(u!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-ta(u);c.entanglements[1]|=f,u&=~f}Ma(n),(P&6)===0&&(xn=It()+500,oi(0))}}break;case 31:case 13:c=Me(n,2),c!==null&&Wt(c,n,2),yn(),tr(n,2)}if(n=er(l),n===null&&Gc(t,a,l,Rn,e),n===i)break;i=n}i!==null&&l.stopPropagation()}else Gc(t,a,l,null,e)}}function er(t){return t=iu(t),lr(t)}var Rn=null;function lr(t){if(Rn=null,t=Ze(t),t!==null){var a=L(t);if(a===null)t=null;else{var e=a.tag;if(e===13){if(t=tt(a),t!==null)return t;t=null}else if(e===31){if(t=pt(a),t!==null)return t;t=null}else if(e===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Rn=t,null}function sd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ld()){case xr:return 2;case vr:return 8;case Ei:case qd:return 32;case yr:return 268435456;default:return 32}default:return 32}}var ir=!1,xe=null,ve=null,ye=null,xi=new Map,vi=new Map,be=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dd(t,a){switch(t){case"focusin":case"focusout":xe=null;break;case"dragenter":case"dragleave":ve=null;break;case"mouseover":case"mouseout":ye=null;break;case"pointerover":case"pointerout":xi.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(a.pointerId)}}function yi(t,a,e,l,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:e,eventSystemFlags:l,nativeEvent:n,targetContainers:[i]},a!==null&&(a=Ve(a),a!==null&&fd(a)),t):(t.eventSystemFlags|=l,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function a0(t,a,e,l,i){switch(a){case"focusin":return xe=yi(xe,t,a,e,l,i),!0;case"dragenter":return ve=yi(ve,t,a,e,l,i),!0;case"mouseover":return ye=yi(ye,t,a,e,l,i),!0;case"pointerover":var n=i.pointerId;return xi.set(n,yi(xi.get(n)||null,t,a,e,l,i)),!0;case"gotpointercapture":return n=i.pointerId,vi.set(n,yi(vi.get(n)||null,t,a,e,l,i)),!0}return!1}function pd(t){var a=Ze(t.target);if(a!==null){var e=L(a);if(e!==null){if(a=e.tag,a===13){if(a=tt(e),a!==null){t.blockedOn=a,Ar(t.priority,function(){od(e)});return}}else if(a===31){if(a=pt(e),a!==null){t.blockedOn=a,Ar(t.priority,function(){od(e)});return}}else if(a===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bn(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var e=er(t.nativeEvent);if(e===null){e=t.nativeEvent;var l=new e.constructor(e.type,e);lu=l,e.target.dispatchEvent(l),lu=null}else return a=Ve(e),a!==null&&fd(a),t.blockedOn=e,!1;a.shift()}return!0}function gd(t,a,e){Bn(t)&&e.delete(a)}function e0(){ir=!1,xe!==null&&Bn(xe)&&(xe=null),ve!==null&&Bn(ve)&&(ve=null),ye!==null&&Bn(ye)&&(ye=null),xi.forEach(gd),vi.forEach(gd)}function Hn(t,a){t.blockedOn===a&&(t.blockedOn=null,ir||(ir=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,e0)))}var Yn=null;function hd(t){Yn!==t&&(Yn=t,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){Yn===t&&(Yn=null);for(var a=0;a<t.length;a+=3){var e=t[a],l=t[a+1],i=t[a+2];if(typeof l!="function"){if(lr(l||e)===null)continue;break}var n=Ve(e);n!==null&&(t.splice(a,3),a-=3,ec(n,{pending:!0,data:i,method:e.method,action:l},l,i))}}))}function jl(t){function a(f){return Hn(f,t)}xe!==null&&Hn(xe,t),ve!==null&&Hn(ve,t),ye!==null&&Hn(ye,t),xi.forEach(a),vi.forEach(a);for(var e=0;e<be.length;e++){var l=be[e];l.blockedOn===t&&(l.blockedOn=null)}for(;0<be.length&&(e=be[0],e.blockedOn===null);)pd(e),e.blockedOn===null&&be.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(l=0;l<e.length;l+=3){var i=e[l],n=e[l+1],u=i[Zt]||null;if(typeof n=="function")u||hd(e);else if(u){var c=null;if(n&&n.hasAttribute("formAction")){if(i=n,u=n[Zt]||null)c=u.formAction;else if(lr(i)!==null)continue}else c=u.action;typeof c=="function"?e[l+1]=c:(e.splice(l,3),l-=3),hd(e)}}}function md(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),l||setTimeout(e,20)}function e(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(e,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function nr(t){this._internalRoot=t}Ln.prototype.render=nr.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(p(409));var e=a.current,l=ca();cd(e,l,t,a,null,null)},Ln.prototype.unmount=nr.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;cd(t.current,2,null,t,null,null),yn(),a[Qe]=null}};function Ln(t){this._internalRoot=t}Ln.prototype.unstable_scheduleHydration=function(t){if(t){var a=Tr();t={blockedOn:null,target:t,priority:a};for(var e=0;e<be.length&&a!==0&&a<be[e].priority;e++);be.splice(e,0,t),e===0&&pd(t)}};var xd=_.version;if(xd!=="19.2.1")throw Error(p(527,xd,"19.2.1"));A.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=z(a),t=t!==null?N(t):null,t=t===null?null:t.stateNode,t};var l0={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qn.isDisabled&&qn.supportsFiber)try{Ol=qn.inject(l0),Pt=qn}catch{}}return Si.createRoot=function(t,a){if(!H(t))throw Error(p(299));var e=!1,l="",i=To,n=Ao,u=jo;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=nd(t,1,!1,null,null,e,l,null,i,n,u,md),t[Qe]=a.current,qc(t),new nr(a)},Si.hydrateRoot=function(t,a,e){if(!H(t))throw Error(p(299));var l=!1,i="",n=To,u=Ao,c=jo,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),a=nd(t,1,!0,a,e??null,l,i,f,n,u,c,md),a.context=ud(null),e=a.current,l=ca(),l=Fn(l),i=ne(l),i.callback=null,ue(e,i,l),e=l,a.current.lanes=e,wl(a,e),Ma(a),t[Qe]=a.current,qc(t),new Ln(a)},Si.version="19.2.1",Si}var Nd;function g0(){if(Nd)return rr.exports;Nd=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(_){console.error(_)}}return v(),rr.exports=p0(),rr.exports}var h0=g0();const m0=Cd(h0);const x0=v=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v0=v=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(_,B,p)=>p?p.toUpperCase():B.toLowerCase()),Od=v=>{const _=v0(v);return _.charAt(0).toUpperCase()+_.slice(1)},Ud=(...v)=>v.filter((_,B,p)=>!!_&&_.trim()!==""&&p.indexOf(_)===B).join(" ").trim(),y0=v=>{for(const _ in v)if(_.startsWith("aria-")||_==="role"||_==="title")return!0};var b0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const S0=At.forwardRef(({color:v="currentColor",size:_=24,strokeWidth:B=2,absoluteStrokeWidth:p,className:H="",children:L,iconNode:tt,...pt},O)=>At.createElement("svg",{ref:O,...b0,width:_,height:_,stroke:v,strokeWidth:p?Number(B)*24/Number(_):B,className:Ud("lucide",H),...!L&&!y0(pt)&&{"aria-hidden":"true"},...pt},[...tt.map(([z,N])=>At.createElement(z,N)),...Array.isArray(L)?L:[L]]));const jt=(v,_)=>{const B=At.forwardRef(({className:p,...H},L)=>At.createElement(S0,{ref:L,iconNode:_,className:Ud(`lucide-${x0(Od(v))}`,`lucide-${v}`,p),...H}));return B.displayName=Od(v),B};const z0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],E0=jt("arrow-right",z0);const T0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],A0=jt("chevron-down",T0);const j0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Md=jt("chevron-right",j0);const N0=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],O0=jt("facebook",N0);const M0=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],w0=jt("gift",M0);const _0=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],pr=jt("heart",_0);const D0=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],C0=jt("instagram",D0);const U0=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],R0=jt("linkedin",U0);const B0=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],wd=jt("lock",B0);const H0=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Y0=jt("mail",H0);const L0=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],q0=jt("map-pin",L0);const G0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],X0=jt("maximize-2",G0);const Q0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Z0=jt("menu",Q0);const V0=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],K0=jt("phone",V0);const k0=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],J0=jt("search",k0);const F0=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Gn=jt("shopping-cart",F0);const W0=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],$0=jt("twitter",W0);const I0=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],dr=jt("user",I0);const P0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Rd=jt("x",P0),_d=[{title:"All Products",items:[]},{title:"Document Printing",items:["Certificates","Academic Documents","Forms & Reports"]},{title:"Marketing Prints",items:["Posters","Flyers","Business Cards","Brochures"]},{title:"Clothing & Apparel",items:["T-Shirts","Hoodies","Caps","Jerseys","School Uniforms","Sportswear","Sublimated T-Shirts","Church Uniforms"]},{title:"Personalized Gifts",items:["Mugs","Bottles","Keyholders","Mousepads","Coasters","Pillows","Canvas Prints"]},{title:"Large Format & Outdoor",items:["PVC Banners","Roll-Up Banners","Posters","Stickers","Vehicle Branding","Signboards","Wallpaper","Window Graphics","Flags","Gazebo","X-Banner","Correx Board"]}],Dd=({isMobileMenuOpen:v=!1,onCategorySelect:_})=>{const[B,p]=At.useState(null),[H,L]=At.useState(null),[tt,pt]=At.useState(!1);At.useEffect(()=>{const N=()=>{pt(window.innerWidth<=768)};return N(),window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]);const O=N=>{L(H===N?null:N)},z=(N,M)=>{_&&_(N,M),console.log(`Selected: ${N}${M?` > ${M}`:""}`)};return tt&&v?r.jsxs("div",{className:"mobile-categories",children:[r.jsx("style",{children:`
          .mobile-categories {
            width: 100%;
            margin-top: 8px;
          }

          .mobile-category-item {
            width: 100%;
            margin-bottom: 4px;
          }

          .mobile-category-header {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 16px;
            background: var(--neutral-light);
            border: none;
            border-radius: 12px;
            cursor: pointer;
            transition: var(--transition);
            font-size: 15px;
            font-weight: 500;
            color: var(--neutral-dark);
            text-align: left;
          }

          .mobile-category-header:hover {
            background: var(--primary-pink);
            color: var(--white);
          }

          .mobile-category-header.active {
            background: var(--primary-pink);
            color: var(--white);
          }

          .mobile-category-title {
            flex: 1;
          }

          .mobile-chevron {
            width: 20px;
            height: 20px;
            transition: var(--transition);
            flex-shrink: 0;
          }

          .mobile-category-header.active .mobile-chevron {
            transform: rotate(90deg);
          }

          .mobile-subcategories {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            padding-left: 12px;
          }

          .mobile-subcategories.active {
            max-height: 800px;
            margin-top: 8px;
          }

          .mobile-subcategory-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 16px;
            margin-bottom: 4px;
            background: rgba(233, 30, 99, 0.05);
            border-radius: 10px;
            cursor: pointer;
            transition: var(--transition);
            font-size: 14px;
            color: var(--neutral-dark);
          }

          .mobile-subcategory-item:hover {
            background: linear-gradient(135deg, rgba(233, 30, 99, 0.15), rgba(247, 181, 0, 0.15));
            color: var(--primary-pink);
            transform: translateX(4px);
          }

          .mobile-subcategory-item svg {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            opacity: 0.6;
          }
        `}),_d.map((N,M)=>r.jsxs("div",{className:"mobile-category-item",children:[r.jsxs("button",{className:`mobile-category-header ${H===M?"active":""}`,onClick:()=>{N.items.length>0?O(M):z(N.title)},children:[r.jsx("span",{className:"mobile-category-title",children:N.title}),N.items.length>0&&r.jsx(Md,{className:"mobile-chevron"})]}),N.items.length>0&&r.jsx("div",{className:`mobile-subcategories ${H===M?"active":""}`,children:N.items.map((at,Mt)=>r.jsxs("div",{className:"mobile-subcategory-item",onClick:()=>z(N.title,at),children:[r.jsx(Md,{}),r.jsx("span",{children:at})]},Mt))})]},M))]}):r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        :root {
          --primary-pink: #E91E63;
          --primary-gold: #F7B500;
          --neutral-dark: #2C3E50;
          --neutral-medium: #7F8C8D;
          --neutral-light: #F8F8F8;
          --white: #FFFFFF;
          --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
          --shadow-md: 0 4px 16px rgba(0,0,0,0.12);
          --transition: all 0.25s ease;
          --container-max-width: 1280px;
          --container-padding: 48px;
        }

        /* MAIN BAR WRAPPER */
        .category-bar-wrapper {
          width: 100%;
          background: var(--white);
          border-bottom: 1px solid #e6e6e6;
          z-index: 9;
          position: relative;
        }

        /* MAIN BAR */
        .category-bar {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 12px var(--container-padding);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }

        /* CATEGORY ITEM */
        .category-item {
          position: relative;
          padding: 8px 12px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          color: var(--neutral-dark);
          transition: var(--transition);
          white-space: nowrap;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .category-item:hover {
          color: var(--primary-pink);
          background: var(--neutral-light);
        }

        .category-item.no-dropdown {
          padding: 8px 16px;
        }

        /* CHEVRON ICON */
        .chevron-icon {
          width: 16px;
          height: 16px;
          transition: var(--transition);
        }

        .category-item:hover .chevron-icon {
          transform: rotate(180deg);
        }

        /* DESKTOP DROPDOWN */
       .dropdown {
          position: absolute;
          top: calc(100% + 4px); /* Reduced gap from 8px to 4px */
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: var(--white);
          border-radius: 12px;
          box-shadow: var(--shadow-md);
          padding: 16px;
          min-width: 240px;
          max-width: 320px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0.3s; /* Added delay before hiding */
          border: 1px solid #e6e6e6;
          z-index: 100;
        }

        .category-item:hover .dropdown {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0s; 
        }

        /* Keep dropdown open when hovering over it */
        .dropdown:hover {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        
        .category-item::after {
          content: '';
          position: absolute;
          bottom: -8px; 
          left: 0;
          right: 0;
          height: 8px;
          background: transparent;
        }

        /* MULTI-COLUMN FOR LARGE DROPDOWNS */
        .dropdown.large {
          min-width: 380px;
          max-width: 480px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        /* DROPDOWN ITEM */
        .dropdown-item {
          padding: 10px 14px;
          font-size: 14px;
          cursor: pointer;
          transition: var(--transition);
          color: var(--neutral-dark);
          border-radius: 8px;
          font-weight: 400;
        }

        .dropdown-item:hover {
          background: linear-gradient(135deg, rgba(233, 30, 99, 0.08), rgba(247, 181, 0, 0.08));
          color: var(--primary-pink);
          transform: translateX(4px);
        }

        /* TABLET RESPONSIVE */
        @media (max-width: 1024px) {
          .category-bar {
            --container-padding: 32px;
            gap: 24px;
          }

          .category-item {
            font-size: 14px;
            padding: 8px 10px;
          }

          .dropdown {
            min-width: 220px;
            max-width: 280px;
          }

          .dropdown.large {
            min-width: 320px;
            max-width: 400px;
          }
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .category-bar-wrapper {
            display: none;
          }
        }

        /* ACCESSIBILITY */
        .category-item:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: 2px;
        }

        .dropdown-item:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: -2px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}),r.jsx("nav",{className:"category-bar-wrapper",role:"navigation","aria-label":"Product categories",children:r.jsx("div",{className:"category-bar",children:_d.map((N,M)=>r.jsxs("div",{className:`category-item ${N.items.length===0?"no-dropdown":""}`,onMouseEnter:()=>p(M),onMouseLeave:()=>p(null),onClick:()=>N.items.length===0&&z(N.title),role:"button",tabIndex:0,"aria-expanded":N.items.length>0?B===M:void 0,"aria-haspopup":N.items.length>0,children:[r.jsx("span",{children:N.title}),N.items.length>0&&r.jsx(A0,{className:"chevron-icon"}),N.items.length>0&&r.jsx("div",{className:`dropdown ${N.items.length>8?"large":""}`,role:"menu",children:N.items.map((at,Mt)=>r.jsx("div",{className:"dropdown-item",onClick:Rt=>{Rt.stopPropagation(),z(N.title,at)},role:"menuitem",tabIndex:0,children:at},Mt))})]},M))})})]})},th=()=>{const[v,_]=At.useState(!0);return v?r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        :root {
          --primary-pink: #E91E63;
          --primary-gold: #F7B500;
          --neutral-dark: #2C3E50;
          --white: #FFFFFF;
          --transition: all 0.3s ease;
        }

        .announcement-bar {
          width: 100%;
          background: linear-gradient(135deg, var(--primary-pink) 0%, #D81B60 50%, var(--primary-gold) 100%);
          color: var(--white);
          padding: 10px 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 11;
          font-size: 14px;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(233, 30, 99, 0.15);
        }

        .announcement-text {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .announcement-highlight {
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: rgba(255, 255, 255, 0.25);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .close-announcement {
          position: absolute;
          right: 16px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: var(--white);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          flex-shrink: 0;
        }

        .close-announcement:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .announcement-bar {
            padding: 10px 32px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .announcement-bar {
            padding: 10px 16px;
            font-size: 13px;
          }

          .announcement-text {
            padding-right: 32px;
          }

          .close-announcement {
            right: 12px;
            width: 26px;
            height: 26px;
          }
        }

        @media (max-width: 480px) {
          .announcement-bar {
            padding: 8px 12px;
            font-size: 10px;
          }

          .announcement-text {
            gap: 4px;
            padding-right: 28px;
          }

          .announcement-highlight {
            padding: 2px 6px;
            font-size: 11px;
          }

          .close-announcement {
            width: 24px;
            height: 24px;
          }
        }

        @media (max-width: 375px) {
          .announcement-bar {
            font-size: 9px;
            padding: 7px 10px;
          }

          .announcement-text {
            gap: 4px;
          }
        }

        @media (max-width: 320px) {
          .announcement-bar {
            font-size: 8px;
            padding: 6px 8px;
          }

          .announcement-highlight {
            padding: 1px 5px;
          }

          .close-announcement {
            width: 22px;
            height: 22px;
            right: 8px;
          }
        }
      `}),r.jsxs("div",{className:"announcement-bar",children:[r.jsx("div",{className:"announcement-text",children:r.jsx("span",{children:"🎉 Free Shipping on orders over $50 Use code: WELCOME25"})}),r.jsx("button",{className:"close-announcement",onClick:()=>_(!1),"aria-label":"Close announcement",children:r.jsx(Rd,{size:16})})]})]}):null},ah=()=>{const[v,_]=At.useState(""),[B,p]=At.useState(!1),[H,L]=At.useState(!1),[tt,pt]=At.useState(0);At.useEffect(()=>{const N=()=>{const M=window.scrollY;M>100&&M>tt?L(!0):L(!1),pt(M)};return window.addEventListener("scroll",N,{passive:!0}),()=>window.removeEventListener("scroll",N)},[tt]);const O=N=>{N&&N.preventDefault(),console.log("Searching for:",v)},z=N=>{N.key==="Enter"&&O()};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        :root {
          --primary-pink: #E91E63;
          --primary-gold: #F7B500;
          --accent-blue: #4A90E2;
          --neutral-dark: #2C3E50;
          --neutral-medium: #7F8C8D;
          --neutral-light: #ECF0F1;
          --white: #FFFFFF;
          --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
          --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
          --transition: all 0.3s ease;
          --container-max-width: 1280px;
          --container-padding: 48px;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          min-width: 320px;
        }

        /* STICKY CONTAINER FOR ANNOUNCEMENT + HEADER */
        .header-sticky-container {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--white);
        }

        /* HEADER WRAPPER - Full width background */
        .header-wrapper {
          width: 100%;
          background: var(--white);
          border-bottom: 3px solid transparent;
          border-image: linear-gradient(90deg, var(--primary-pink), var(--primary-gold)) 1;
          box-shadow: var(--shadow-md);
          position: relative;
        }

        /* HEADER CONTAINER - Constrained content */
        .header {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 16px var(--container-padding);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        /* CATEGORY NAV WRAPPER - SMOOTH HIDE/SHOW */
        .category-nav-wrapper {
          max-height: 100px;
          transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
          opacity: 1;
          overflow: hidden;
        }

        .category-nav-wrapper.hidden {
          max-height: 0;
          opacity: 0;
        }

        /* LOGO */
        .logo-container {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo {
          height: 100px;
          width: auto;
          cursor: pointer;
          transition: var(--transition);
        }

        .logo:hover {
          transform: scale(1.05);
        }

        /* SEARCH BAR - Centered and properly sized */
        .search-wrapper {
          flex: 1;
          max-width: 560px;
          display: flex;
          justify-content: center;
          min-width: 0;
        }

        .search-bar {
          width: 100%;
          background: var(--neutral-light);
          padding: 12px 20px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 12px;
          border: 2px solid transparent;
          transition: var(--transition);
          min-width: 0;
        }

        .search-bar:focus-within {
          background: var(--white);
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 4px rgba(233, 30, 140, 0.15);
        }

        .search-input {
          flex: 1;
          border: none;
          background: none;
          outline: none;
          font-size: 15px;
          color: var(--neutral-dark);
          min-width: 0;
        }

        .search-input::placeholder {
          color: var(--neutral-medium);
        }

        .search-btn {
          border: none;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          flex-shrink: 0;
        }

        .search-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(233, 30, 140, 0.3);
        }

        /* RIGHT SECTION */
        .right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .icon-btn {
          border: none;
          background: var(--neutral-light);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          color: var(--neutral-dark);
          position: relative;
          flex-shrink: 0;
        }

        .icon-btn:hover {
          background: var(--white);
          border: 2px solid var(--primary-pink);
          color: var(--primary-pink);
          transform: translateY(-2px);
        }

        .icon-btn.cart-btn {
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
        }

        .icon-btn.cart-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 4px 12px rgba(233, 30, 140, 0.3);
        }

        .cart-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: #ff4757;
          color: white;
          font-size: 11px;
          font-weight: bold;
          padding: 2px 6px;
          border-radius: 10px;
          min-width: 18px;
          text-align: center;
        }

        /* PROFILE */
        .profile-box {
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          padding: 6px 16px 6px 6px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: var(--transition);
          color: white;
          border: none;
          flex-shrink: 0;
        }

        .profile-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(233, 30, 140, 0.25);
        }

        .profile-name {
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-pink);
          flex-shrink: 0;
        }

        /* MOBILE MENU BUTTON */
        .mobile-menu-btn {
          display: none;
          border: none;
          background: var(--neutral-light);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--neutral-dark);
          transition: var(--transition);
          flex-shrink: 0;
        }

        .mobile-menu-btn:hover {
          background: var(--primary-pink);
          color: var(--white);
        }

        /* MOBILE OVERLAY */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          pointer-events: none;
          transition: var(--transition);
          z-index: 998;
        }

        .mobile-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* MOBILE MENU */
        .mobile-menu {
          position: fixed;
          left: 0;
          top: 0;
          width: 300px;
          max-width: 85vw;
          height: 100vh;
          background: white;
          box-shadow: 4px 0 20px rgba(0, 0, 0, 0.15);
          padding: 24px;
          transform: translateX(-100%);
          transition: var(--transition);
          z-index: 999;
          overflow-y: auto;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid var(--neutral-light);
        }

        .mobile-menu-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--neutral-dark);
        }

        .close-menu-btn {
          border: none;
          background: var(--neutral-light);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--neutral-dark);
          transition: var(--transition);
        }

        .close-menu-btn:hover {
          background: var(--primary-pink);
          color: var(--white);
        }

        .mobile-menu-profile {
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          padding: 16px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: white;
        }

        .mobile-menu-profile .avatar {
          width: 48px;
          height: 48px;
        }

        .mobile-profile-info h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .mobile-profile-info p {
          font-size: 13px;
          opacity: 0.9;
        }

        .mobile-menu-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: var(--neutral-light);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: var(--transition);
          font-size: 15px;
          font-weight: 500;
          color: var(--neutral-dark);
          width: 100%;
          text-align: left;
        }

        .mobile-menu-item:hover {
          background: var(--primary-pink);
          color: var(--white);
          transform: translateX(4px);
        }

        .mobile-menu-item svg {
          flex-shrink: 0;
        }

        /* MENU SECTION DIVIDER */
        .menu-section-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 24px 0;
          padding: 0 4px;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(233, 30, 99, 0.2) 20%,
            rgba(247, 181, 0, 0.2) 80%,
            transparent
          );
        }

        .divider-text {
          font-size: 12px;
          font-weight: 600;
          color: var(--neutral-medium);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          white-space: nowrap;
          padding: 0 8px;
        }

        /* MOBILE MENU CATEGORIES SECTION */
        .mobile-menu-categories {
          margin-top: 0;
        }

        .mobile-menu-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-bottom: 8px;
        }

        /* LARGE DESKTOP */
        @media (min-width: 1280px) {
          .header {
            gap: 40px;
          }
        }

        /* TABLET RESPONSIVE */
        @media (max-width: 1024px) {
          .header {
            --container-padding: 32px;
            gap: 24px;
          }

          .search-wrapper {
            max-width: 400px;
          }

          .logo {
            height: 70px;
          }
        }

        /* MOBILE RESPONSIVE - 768px */
        @media (max-width: 768px) {
          .header {
            --container-padding: 16px;
            padding: 20px 16px;
            gap: 12px;
          }

          .search-wrapper {
            flex: 1;
            max-width: 400px;
          }

          .search-bar {
            padding: 10px 16px;
          }

          .search-input {
            font-size: 14px;
          }

          .search-btn {
            width: 32px;
            height: 32px;
          }

          .icon-btn {
            width: 40px;
            height: 40px;
          }

          .icon-btn.cart-btn {
            display: flex;
          }

          .profile-box,
          .right .icon-btn:not(.cart-btn) {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          /* Hide category nav on mobile */
          .category-nav-wrapper {
            display: none;
          }
        }

        /* SMALL MOBILE - 480px */
        @media (max-width: 480px) {
          .header {
            padding: 10px 12px;
            gap: 8px;
          }

          .logo {
            height: 50px;
          }

          .search-input {
            font-size: 13px;
          }

          .search-wrapper {
            max-width: 200px;
          }

          .search-bar {
            padding: 5px 14px;
            gap: 8px;
          }

          .search-btn {
            width: 30px;
            height: 30px;
          }

          .icon-btn {
            width: 38px;
            height: 38px;
          }

          .mobile-menu-btn {
            width: 38px;
            height: 38px;
          }

          .cart-badge {
            font-size: 10px;
            padding: 2px 5px;
            min-width: 16px;
          }
        }

        /* EXTRA SMALL MOBILE - 375px */
        @media (max-width: 375px) {
          .header {
            padding: 8px 10px;
            gap: 6px;
          }

          .logo {
            height: 40px;
          }

          .search-bar {
            padding: 7px 12px;
            gap: 6px;
          }

          .search-input {
            font-size: 12px;
          }

          .search-input::placeholder {
            font-size: 12px;
          }

          .search-btn {
            width: 28px;
            height: 28px;
          }

          .icon-btn,
          .mobile-menu-btn {
            width: 36px;
            height: 36px;
          }
        }

        /* MINIMUM SUPPORT - 320px */
        @media (max-width: 320px) {
          .header {
            padding: 8px 8px;
            gap: 4px;
          }

          .logo {
            height: 28px;
          }

          .search-bar {
            padding: 6px 10px;
            gap: 6px;
          }

          .search-input {
            font-size: 11px;
          }

          .search-input::placeholder {
            font-size: 11px;
          }

          .search-btn {
            width: 26px;
            height: 26px;
          }

          .search-btn svg {
            width: 14px;
            height: 14px;
          }

          .icon-btn,
          .mobile-menu-btn {
            width: 34px;
            height: 34px;
          }

          .icon-btn svg,
          .mobile-menu-btn svg {
            width: 18px;
            height: 18px;
          }

          .cart-badge {
            font-size: 9px;
            padding: 1px 4px;
            min-width: 14px;
            top: -2px;
            right: -2px;
          }
        }

        /* ACCESSIBILITY */
        .search-btn:focus,
        .icon-btn:focus,
        .profile-box:focus,
        .mobile-menu-btn:focus,
        .close-menu-btn:focus {
          outline: 3px solid var(--primary-pink);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}),r.jsxs("div",{className:"header-sticky-container",children:[r.jsx(th,{}),r.jsx("header",{className:"header-wrapper",children:r.jsxs("div",{className:"header",children:[r.jsx("div",{className:"logo-container",children:r.jsx("img",{src:"assets/logo.png",alt:"Seach Clothing & Printing",className:"logo"})}),r.jsx("div",{className:"search-wrapper",children:r.jsxs("div",{className:"search-bar",children:[r.jsx("input",{type:"text",placeholder:"Search products...",className:"search-input",value:v,onChange:N=>_(N.target.value),onKeyPress:z}),r.jsx("button",{className:"search-btn",onClick:O,"aria-label":"Search",children:r.jsx(J0,{size:18})})]})}),r.jsxs("div",{className:"right",children:[r.jsx("button",{className:"icon-btn","aria-label":"Secure checkout",children:r.jsx(wd,{size:20})}),r.jsx("button",{className:"icon-btn","aria-label":"Wishlist",children:r.jsx(pr,{size:20})}),r.jsxs("button",{className:"icon-btn cart-btn","aria-label":"Shopping cart",children:[r.jsx(Gn,{size:20}),r.jsx("span",{className:"cart-badge",children:"3"})]}),r.jsxs("button",{className:"profile-box","aria-label":"User profile",children:[r.jsx("span",{className:"profile-name",children:"Ryman Alex"}),r.jsx("div",{className:"avatar",children:r.jsx(dr,{size:20})})]})]}),r.jsx("button",{className:"mobile-menu-btn",onClick:()=>p(!0),"aria-label":"Open menu",children:r.jsx(Z0,{size:20})})]})}),r.jsx("div",{className:`category-nav-wrapper ${H?"hidden":""}`,children:r.jsx(Dd,{})})]}),r.jsx("div",{className:`mobile-overlay ${B?"open":""}`,onClick:()=>p(!1)}),r.jsxs("div",{className:`mobile-menu ${B?"open":""}`,children:[r.jsxs("div",{className:"mobile-menu-header",children:[r.jsx("span",{className:"mobile-menu-title",children:"Menu"}),r.jsx("button",{className:"close-menu-btn",onClick:()=>p(!1),"aria-label":"Close menu",children:r.jsx(Rd,{size:20})})]}),r.jsxs("div",{className:"mobile-menu-profile",children:[r.jsx("div",{className:"avatar",children:r.jsx(dr,{size:24})}),r.jsxs("div",{className:"mobile-profile-info",children:[r.jsx("h3",{children:"Ryman Alex"}),r.jsx("p",{children:"View Profile"})]})]}),r.jsxs("div",{className:"mobile-menu-actions",children:[r.jsxs("button",{className:"mobile-menu-item",children:[r.jsx(pr,{size:20}),r.jsx("span",{children:"Wishlist"})]}),r.jsxs("button",{className:"mobile-menu-item",children:[r.jsx(wd,{size:20}),r.jsx("span",{children:"Secure Checkout"})]}),r.jsxs("button",{className:"mobile-menu-item",children:[r.jsx(dr,{size:20}),r.jsx("span",{children:"Account Settings"})]})]}),r.jsxs("div",{className:"menu-section-divider",children:[r.jsx("div",{className:"divider-line"}),r.jsx("span",{className:"divider-text",children:"Browse Categories"}),r.jsx("div",{className:"divider-line"})]}),r.jsxs("div",{className:"mobile-menu-categories",children:[r.jsx("div",{className:"category-section-title",children:"Categories"}),r.jsx(Dd,{isMobileMenuOpen:B})]})]})]})},eh=()=>r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        :root {
          --primary-pink: #E91E63;
          --primary-gold: #F7B500;
          --neutral-dark: #2C3E50;
          --neutral-medium: #7F8C8D;
          --neutral-light: #F8F8F8;
          --white: #FFFFFF;
          --transition: all 0.25s ease;
          --container-max-width: 1280px;
          --container-padding: 48px;
        }

        .footer-wrapper {
          width: 100%;
          background: linear-gradient(180deg, var(--white) 0%, var(--neutral-light) 100%);
          margin-top: 60px;
          padding-top: 48px;
          border-top: 4px solid transparent;
          border-image: linear-gradient(90deg, var(--primary-pink), var(--primary-gold)) 1;
        }

        .footer {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 var(--container-padding);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
          padding-bottom: 40px;
        }

        /* COLUMN HEADINGS */
        .footer h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* LINKS */
        .footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer li {
          margin-bottom: 12px;
          color: var(--neutral-dark);
          font-size: 15px;
          cursor: pointer;
          transition: var(--transition);
          padding-left: 0;
        }

        .footer li:hover {
          color: var(--primary-pink);
          transform: translateX(4px);
        }

        /* CONTACT DETAILS */
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 15px;
          color: var(--neutral-dark);
          line-height: 1.5;
        }

        .contact-item svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--primary-pink);
        }

        .contact-item a {
          color: var(--neutral-dark);
          text-decoration: none;
          transition: var(--transition);
        }

        .contact-item a:hover {
          color: var(--primary-pink);
        }

        /* SOCIAL ICONS */
        .social-row {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .social-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          border: 2px solid var(--neutral-light);
          color: var(--neutral-dark);
          text-decoration: none;
        }

        .social-icon:hover {
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          border-color: transparent;
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(233, 30, 99, 0.3);
        }

        /* COPYRIGHT BAR */
        .copyright {
          margin-top: 0;
          padding: 20px var(--container-padding);
          text-align: center;
          background: linear-gradient(135deg, rgba(233, 30, 99, 0.05), rgba(247, 181, 0, 0.05));
          color: var(--neutral-medium);
          font-size: 14px;
          border-top: 1px solid rgba(233, 30, 99, 0.1);
          line-height: 1.6;
        }

        .copyright a {
          color: var(--primary-pink);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition);
        }

        .copyright a:hover {
          color: var(--primary-gold);
        }

        /* TABLET RESPONSIVE */
        @media (max-width: 1024px) {
          .footer-wrapper {
            --container-padding: 32px;
          }

          .footer {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        /* MOBILE RESPONSIVE - CLEAN SINGLE COLUMN */
        @media (max-width: 768px) {
          .footer-wrapper {
            --container-padding: 24px;
            margin-top: 48px;
            padding-top: 40px;
          }

          .footer {
            margin-left: 15px;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }

          .footer h3 {
            font-size: 17px;
            margin-bottom: 16px;
            padding-bottom: 10px;
            border-bottom: 2px solid rgba(233, 30, 99, 0.1);
          }

          .footer li {
            font-size: 14px;
            margin-bottom: 11px;
          }

          .contact-item {
            font-size: 14px;
            margin-bottom: 14px;
          }

          .social-row {
            gap: 14px;
          }

          .social-icon {
            width: 46px;
            height: 46px;
          }

          .copyright {
            font-size: 13px;
            padding: 20px 24px;
            line-height: 1.7;
          }
        }

        @media (max-width: 480px) {
          .footer-wrapper {
            --container-padding: 20px;
            padding-top: 36px;
          }

          .footer {
            grid-template-columns: 1fr;
            gap: 36px;
          }


          .footer h3 {
            font-size: 16px;
            margin-bottom: 14px;
            padding-bottom: 8px;
          }

          .footer li {
            margin-left: 20px;
            font-size: 13px;
            margin-bottom: 10px;
          }

          .contact-item {
            font-size: 13px;
            margin-bottom: 12px;
            gap: 10px;
          }

          .social-row {
            gap: 12px;
          }

          .social-icon {
            width: 44px;
            height: 44px;
          }

          .copyright {
            font-size: 12px;
            padding: 18px 20px;
          }
        }

        @media (max-width: 375px) {
          .footer-wrapper {
            --container-padding: 16px;
          }

          .footer {
            gap: 32px;
          }

          .footer h3 {
            font-size: 15px;
            margin-bottom: 12px;
          }

          .footer li,
          .contact-item {
            font-size: 12px;
          }

          .social-icon {
            width: 42px;
            height: 42px;
          }

          .social-row {
            gap: 10px;
          }
        }

        @media (max-width: 320px) {
          .footer-wrapper {
            --container-padding: 14px;
            padding-top: 28px;
          }

          .footer {
            gap: 28px;
            padding-bottom: 28px;
          }

          .footer h3 {
            font-size: 14px;
            margin-bottom: 10px;
            padding-bottom: 6px;
          }

          .footer li,
          .contact-item {
            font-size: 11px;
            margin-bottom: 9px;
          }

          .social-icon {
            width: 40px;
            height: 40px;
          }

          .copyright {
            font-size: 11px;
            padding: 16px 14px;
          }
        }

        /* ACCESSIBILITY */
        .footer li:focus,
        .social-icon:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}),r.jsxs("div",{className:"footer-wrapper",children:[r.jsxs("div",{className:"footer",children:[r.jsxs("div",{children:[r.jsx("h3",{children:"Company"}),r.jsxs("ul",{children:[r.jsx("li",{children:"About Us"}),r.jsx("li",{children:"Why Choose Us"}),r.jsx("li",{children:"Printing Technology"}),r.jsx("li",{children:"Contact"}),r.jsx("li",{children:"Careers"})]})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Services"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Document Printing"}),r.jsx("li",{children:"Marketing Prints"}),r.jsx("li",{children:"Clothing & Apparel"}),r.jsx("li",{children:"Personalized Gifts"}),r.jsx("li",{children:"Large Format Printing"}),r.jsx("li",{children:"Bulk Orders"})]})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Support"}),r.jsxs("ul",{children:[r.jsx("li",{children:"FAQs"}),r.jsx("li",{children:"Order Tracking"}),r.jsx("li",{children:"Shipping & Delivery"}),r.jsx("li",{children:"Returns & Refunds"}),r.jsx("li",{children:"Artwork Guidelines"}),r.jsx("li",{children:"Size Charts"})]})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Contact Us"}),r.jsxs("div",{className:"contact-item",children:[r.jsx(K0,{size:18}),r.jsx("a",{href:"tel:+27987654321",children:"+27 98765 43210"})]}),r.jsxs("div",{className:"contact-item",children:[r.jsx(Y0,{size:18}),r.jsx("a",{href:"mailto:support@seachprinting.com",children:"support@seachprinting.com"})]}),r.jsxs("div",{className:"contact-item",children:[r.jsx(q0,{size:18}),r.jsxs("span",{children:["7 Grysbkleen Noord,",r.jsx("br",{}),"Rustenburg, South Africa"]})]}),r.jsxs("div",{className:"social-row",children:[r.jsx("a",{href:"https://facebook.com",className:"social-icon","aria-label":"Facebook",children:r.jsx(O0,{size:20})}),r.jsx("a",{href:"https://instagram.com",className:"social-icon","aria-label":"Instagram",children:r.jsx(C0,{size:20})}),r.jsx("a",{href:"https://twitter.com",className:"social-icon","aria-label":"Twitter",children:r.jsx($0,{size:20})}),r.jsx("a",{href:"https://linkedin.com",className:"social-icon","aria-label":"LinkedIn",children:r.jsx(R0,{size:20})})]})]})]}),r.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," Seach Clothing & Printing. All rights reserved.",r.jsx("br",{}),"Powered by"," ",r.jsx("a",{href:"https://software.pedzaworks.com",target:"_blank",rel:"noopener noreferrer",children:"Pedzaworks Software Solutions"})]})]})]}),lh=()=>{const v=["assets/print2.jpg","assets/print1.jpg","assets/print3.jpg"],[_,B]=At.useState(0),p=At.useRef(null),H=()=>{p.current=setTimeout(()=>{B(O=>(O+1)%v.length)},5e3)};At.useEffect(()=>(H(),()=>{p.current&&clearTimeout(p.current)}),[_]);const L=O=>{B(O)},tt=()=>{B(O=>(O-1+v.length)%v.length)},pt=()=>{B(O=>(O+1)%v.length)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        :root {
          --primary-pink: #E91E63;
          --primary-gold: #F7B500;
          --neutral-dark: #2C3E50;
          --white: #FFFFFF;
          --container-max-width: 1280px;
          --container-padding: 48px;
          --transition: all 0.3s ease;
        }

        /* FULL WIDTH BACKGROUND */
        .carousel-outer {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 20px 0 0 0;
          background: #ffffff;
        }

        /* MATCHES HEADER WIDTH */
        .carousel-inner {
          width: 100%;
          max-width: var(--container-max-width);
          padding: 0 var(--container-padding);
        }

        /* IMAGE AREA CONTAINER */
        .carousel-wrapper {
          width: 100%;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          background: #f5f5f5;
        }

        /* PRINTO-STYLE ASPECT RATIO - Shorter/Wider */
        .carousel-aspect-ratio {
          position: relative;
          width: 100%;
          padding-bottom: 35%; /* Shorter like Printo ~2.85:1 ratio */
          overflow: hidden;
        }

        .carousel-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel-slide {
          min-width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #000;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* SUBTLE GRADIENT OVERLAY */
        .carousel-slide::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.05) 0%,
            transparent 30%,
            transparent 70%,
            rgba(0, 0, 0, 0.15) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        /* NAVIGATION ARROWS */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: var(--transition);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .carousel-arrow:hover {
          background: var(--white);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 16px rgba(233, 30, 99, 0.3);
        }

        .carousel-arrow.prev {
          left: 24px;
        }

        .carousel-arrow.next {
          right: 24px;
        }

        .carousel-arrow svg {
          width: 24px;
          height: 24px;
          color: var(--neutral-dark);
        }

        /* DOTS */
        .carousel-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 2;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: var(--transition);
          border: 2px solid transparent;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }

        .dot.active {
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          transform: scale(1.3);
          box-shadow: 0 2px 8px rgba(233, 30, 99, 0.5);
        }

        /* LARGE DESKTOP */
        @media (min-width: 1440px) {
          .carousel-aspect-ratio {
            padding-bottom: 32%; /* Wider on large screens */
          }
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .carousel-inner {
            --container-padding: 32px;
          }

          .carousel-aspect-ratio {
            padding-bottom: 40%;
          }

          .carousel-arrow {
            width: 44px;
            height: 44px;
          }

          .carousel-arrow.prev {
            left: 20px;
          }

          .carousel-arrow.next {
            right: 20px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .carousel-inner {
            --container-padding: 16px;
          }

          .carousel-wrapper {
            border-radius: 12px;
          }

          .carousel-aspect-ratio {
            padding-bottom: 50%;
          }

          .carousel-arrow {
            width: 40px;
            height: 40px;
          }

          .carousel-arrow.prev {
            left: 16px;
          }

          .carousel-arrow.next {
            right: 16px;
          }

          .carousel-arrow svg {
            width: 20px;
            height: 20px;
          }

          .carousel-dots {
            bottom: 16px;
            gap: 10px;
          }

          .dot {
            width: 10px;
            height: 10px;
          }
        }

        @media (max-width: 480px) {
          .carousel-wrapper {
            border-radius: 10px;
          }

          .carousel-aspect-ratio {
            padding-bottom: 60%;
          }

          .carousel-arrow {
            width: 36px;
            height: 36px;
          }

          .carousel-arrow.prev {
            left: 12px;
          }

          .carousel-arrow.next {
            right: 12px;
          }

          .carousel-dots {
            bottom: 12px;
            gap: 8px;
          }

          .dot {
            width: 8px;
            height: 8px;
          }
        }

        @media (max-width: 375px) {
          .carousel-inner {
            --container-padding: 12px;
          }

          .carousel-aspect-ratio {
            padding-bottom: 65%;
          }
        }

        @media (max-width: 320px) {
          .carousel-inner {
            --container-padding: 10px;
          }

          .carousel-wrapper {
            border-radius: 8px;
          }

          .carousel-aspect-ratio {
            padding-bottom: 70%;
          }

          .carousel-arrow {
            width: 32px;
            height: 32px;
          }
        }

        /* ACCESSIBILITY */
        .carousel-arrow:focus,
        .dot:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .carousel-container {
            transition: none;
          }

          .dot,
          .carousel-arrow {
            transition: none;
          }
        }
      `}),r.jsx("div",{className:"carousel-outer",children:r.jsx("div",{className:"carousel-inner",children:r.jsxs("div",{className:"carousel-wrapper",children:[r.jsx("div",{className:"carousel-aspect-ratio",children:r.jsx("div",{className:"carousel-container",style:{transform:`translateX(-${_*100}%)`},children:v.map((O,z)=>r.jsx("div",{className:"carousel-slide",children:r.jsx("img",{src:O,alt:`Printing service showcase ${z+1}`,className:"carousel-image",loading:z===0?"eager":"lazy"})},z))})}),r.jsx("button",{className:"carousel-arrow prev",onClick:tt,"aria-label":"Previous slide",type:"button",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),r.jsx("button",{className:"carousel-arrow next",onClick:pt,"aria-label":"Next slide",type:"button",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),r.jsx("div",{className:"carousel-dots",children:v.map((O,z)=>r.jsx("button",{className:`dot ${_===z?"active":""}`,onClick:()=>L(z),"aria-label":`Go to slide ${z+1}`,type:"button"},z))})]})})})]})},ih=[{title:"Document Printing",img:"assets/document.jpg"},{title:"Marketing Prints",img:"assets/marketing.webp"},{title:"Clothing & Apparel",img:"assets/apparel.jpg"},{title:"Personalized Gifts",img:"assets/gifts.jpg"},{title:"Large Format & Outdoor",img:"assets/outdoor.jpg"}],nh=()=>r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        :root {
          --container-max-width: 1280px;
          --container-padding: 32px;
        }

        .category-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 40px 0;
        }

        .category-container {
          width: 100%;
          max-width: var(--container-max-width);
          padding: 0 var(--container-padding);
        }

        .category-title {
          text-align: center;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #2c3e50;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
        }

        .category-card {
          cursor: pointer;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-6px);
        }

        .category-image {
          width: 100%;
          height: 220px;
          border-radius: 24px;
          object-fit: cover;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
          transition: 0.3s ease;
        }

        .category-card:hover .category-image {
          opacity: 0.85;
        }

        .category-name {
          margin-top: 12px;
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .category-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .category-image {
            height: 190px;
          }
        }

        @media (max-width: 768px) {
          .category-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .category-image {
            height: 170px;
          }
        }

        @media (max-width: 480px) {
          .category-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .category-image {
            height: 150px;
            border-radius: 18px;
          }
        }
      `}),r.jsx("div",{className:"category-section",children:r.jsxs("div",{className:"category-container",children:[r.jsx("h2",{className:"category-title",children:"Categories"}),r.jsx("div",{className:"category-grid",children:ih.map((v,_)=>r.jsxs("div",{className:"category-card",children:[r.jsx("img",{src:v.img,alt:v.title,className:"category-image"}),r.jsx("p",{className:"category-name",children:v.title})]},_))})]})})]}),uh=[{title:"Documents Printing",description:"Assignments, Textbooks & Project work",price:"From $6",img:"assets/document.jpg",tag:"Best Seller"},{title:"Custom T-Shirts",description:"Perfect for events, branding & gifts",price:"From $6",img:"assets/t-shirt.jpg",tag:"Best Seller"},{title:"PVC Banners",description:"Durable outdoor promotional banners",price:"From $12",img:"assets/pvc.avif",tag:"Popular"},{title:"Church Uniforms",description:"Custom church wear & fabric sublimation",price:"From $10",img:"assets/pvc.avif",tag:null},{title:"Photo Mugs",description:"Personalized mugs for any occasion",price:"From $5",img:"assets/gifts.jpg",tag:null},{title:"Certificates",description:"High-quality official document printing",price:"From $3",img:"assets/certificate.jpg",tag:null},{title:"Business Cards",description:"Premium quality business cards",price:"From $4",img:"assets/business.jpg",tag:"Popular"},{title:"Custom Hoodies",description:"Warm & stylish branded hoodies",price:"From $15",img:"assets/hoodies.jpg",tag:"New"}],ch=()=>r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        :root {
          --container-max-width: 1280px;
          --container-padding: 48px;
          --primary-pink: #E91E63;
          --primary-gold: #F7B500;
          --neutral-dark: #2C3E50;
          --neutral-medium: #7F8C8D;
          --neutral-light: #F8F8F8;
          --white: #FFFFFF;
          --transition: all 0.3s ease;
        }

        .products-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 60px 0;
          background: var(--white);
        }

        .products-container {
          width: 100%;
          max-width: var(--container-max-width);
          padding: 0 var(--container-padding);
        }

        /* SECTION HEADER */
        .products-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .products-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 12px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .products-subtitle {
          font-size: 16px;
          color: var(--neutral-medium);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* GRID - 4 COLUMNS ON DESKTOP */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* PRODUCT CARD */
        .product-card {
          background: var(--white);
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
          position: relative;
          border: 1px solid transparent;
          display: grid;
          grid-template-rows: auto 1fr;
          height: 100%;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(233, 30, 99, 0.15);
          border-color: rgba(233, 30, 99, 0.2);
        }

        /* IMAGE CONTAINER */
        .product-img-container {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
          background: var(--neutral-light);
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: var(--transition);
        }

        .product-card:hover .product-img {
          transform: scale(1.08);
        }

        /* PRODUCT TAG */
        .product-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 2;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        /* WISHLIST BUTTON */
        .wishlist-btn {
          position: absolute;
          top: 12px;
          left: 12px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          opacity: 0;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .product-card:hover .wishlist-btn {
          opacity: 1;
        }

        .wishlist-btn:hover {
          background: var(--white);
          transform: scale(1.15);
        }

        .wishlist-btn svg {
          width: 18px;
          height: 18px;
          color: var(--primary-pink);
        }

        /* PRODUCT CONTENT */
        .product-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .product-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--neutral-dark);
          line-height: 1.3;
          margin: 0;
        }

        .product-description {
          font-size: 13px;
          color: var(--neutral-medium);
          line-height: 1.5;
          margin: 0;
        }

        /* PRODUCT FOOTER - SIDE BY SIDE */
        .product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: auto;
        }

        .product-price {
          font-size: 18px;
          color: var(--primary-pink);
          font-weight: 700;
          white-space: nowrap;
        }

        .product-btn {
          flex: 1;
          padding: 10px 16px;
          border: none;
          border-radius: 50px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .product-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(233, 30, 99, 0.4);
        }

        .product-btn svg {
          width: 16px;
          height: 16px;
        }

        /* EXTRA LARGE DESKTOP */
        @media (min-width: 1600px) {
          .products-grid {
            gap: 28px;
          }

          .product-img-container {
            height: 280px;
          }

          .product-content {
            padding: 20px;
            gap: 12px;
          }

          .product-title {
            font-size: 17px;
          }

          .product-description {
            font-size: 14px;
          }

          .product-price {
            font-size: 20px;
          }

          .product-btn {
            padding: 11px 18px;
            font-size: 14px;
          }
        }

        /* LARGE DESKTOP */
        @media (min-width: 1440px) and (max-width: 1599px) {
          .products-title {
            font-size: 34px;
          }

          .product-img-container {
            height: 270px;
          }

          .product-price {
            font-size: 19px;
          }
        }

        /* STANDARD DESKTOP */
        @media (min-width: 1280px) and (max-width: 1439px) {
          .products-grid {
            gap: 22px;
          }

          .product-img-container {
            height: 250px;
          }

          .product-price {
            font-size: 17px;
          }
        }

        /* SMALL DESKTOP / LARGE TABLET */
        @media (max-width: 1279px) and (min-width: 1025px) {
          .products-container {
            --container-padding: 40px;
          }

          .products-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .product-img-container {
            height: 240px;
          }

          .product-price {
            font-size: 16px;
          }
        }

        /* TABLET */
        @media (max-width: 1024px) and (min-width: 769px) {
          .products-container {
            --container-padding: 32px;
          }

          .products-section {
            padding: 48px 0;
          }

          .products-header {
            margin-bottom: 40px;
          }

          .products-title {
            font-size: 28px;
          }

          .products-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .product-img-container {
            height: 220px;
          }

          .product-content {
            padding: 16px;
          }

          .product-title {
            font-size: 15px;
          }

          .product-description {
            font-size: 12px;
          }

          .product-price {
            font-size: 16px;
          }

          .product-btn {
            font-size: 12px;
          }
        }

        /* MOBILE - 2 COLUMNS */
        @media (max-width: 768px) {
          .products-container {
            --container-padding: 16px;
          }

          .products-section {
            padding: 40px 0;
          }

          .products-header {
            margin-bottom: 32px;
          }

          .products-title {
            font-size: 24px;
          }

          .products-subtitle {
            font-size: 14px;
          }

          .products-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }

          .product-img-container {
            height: 180px;
          }

          .product-content {
            padding: 14px;
            gap: 8px;
          }

          .product-title {
            font-size: 14px;
          }

          .product-description {
            font-size: 12px;
          }

          .product-footer {
            gap: 8px;
          }

          .product-price {
            font-size: 15px;
          }

          .product-btn {
            padding: 9px 12px;
            font-size: 11px;
            gap: 4px;
          }

          .product-btn svg {
            width: 14px;
            height: 14px;
          }

          .wishlist-btn {
            opacity: 1;
            width: 34px;
            height: 34px;
            top: 10px;
            left: 10px;
          }

          .wishlist-btn svg {
            width: 16px;
            height: 16px;
          }

          .product-tag {
            top: 10px;
            right: 10px;
            padding: 4px 10px;
            font-size: 10px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .products-section {
            padding: 36px 0;
          }

          .products-header {
            margin-bottom: 28px;
          }

          .products-title {
            font-size: 22px;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .product-img-container {
            height: 170px;
          }

          .product-content {
            padding: 12px;
          }

          .product-title {
            font-size: 13px;
          }

          .product-description {
            font-size: 11px;
          }

          .product-price {
            font-size: 14px;
          }

          .product-btn {
            padding: 8px 10px;
            font-size: 10px;
          }
        }

        /* EXTRA SMALL MOBILE */
        @media (max-width: 375px) {
          .products-container {
            --container-padding: 12px;
          }

          .products-section {
            padding: 32px 0;
          }

          .products-title {
            font-size: 20px;
          }

          .products-subtitle {
            font-size: 13px;
          }

          .products-grid {
            gap: 12px;
          }

          .product-img-container {
            height: 160px;
          }

          .product-content {
            padding: 10px;
            gap: 6px;
          }

          .product-footer {
            gap: 6px;
          }

          .product-price {
            font-size: 13px;
          }

          .product-btn {
            padding: 7px 8px;
            font-size: 9px;
          }
        }

        /* TINY MOBILE */
        @media (max-width: 320px) {
          .products-title {
            font-size: 18px;
          }

          .products-grid {
            gap: 10px;
          }

          .product-img-container {
            height: 140px;
          }

          .product-title {
            font-size: 12px;
          }

          .product-description {
            font-size: 10px;
          }

          .product-price {
            font-size: 12px;
          }

          .product-btn {
            padding: 6px 8px;
            font-size: 9px;
          }
        }

        /* ACCESSIBILITY */
        .product-btn:focus,
        .wishlist-btn:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}),r.jsx("div",{className:"products-section",children:r.jsxs("div",{className:"products-container",children:[r.jsxs("div",{className:"products-header",children:[r.jsx("h2",{className:"products-title",children:"Popular Products"}),r.jsx("p",{className:"products-subtitle",children:"Discover our most loved printing and customization services"})]}),r.jsx("div",{className:"products-grid",children:uh.map((v,_)=>r.jsxs("div",{className:"product-card",children:[r.jsxs("div",{className:"product-img-container",children:[r.jsx("img",{src:v.img,className:"product-img",alt:v.title,loading:_<4?"eager":"lazy"}),r.jsx("button",{className:"wishlist-btn","aria-label":"Add to wishlist",children:r.jsx(pr,{})}),v.tag&&r.jsx("div",{className:"product-tag",children:v.tag})]}),r.jsxs("div",{className:"product-content",children:[r.jsx("h3",{className:"product-title",children:v.title}),r.jsx("p",{className:"product-description",children:v.description}),r.jsxs("div",{className:"product-footer",children:[r.jsx("span",{className:"product-price",children:v.price}),r.jsxs("button",{className:"product-btn",children:[r.jsx(Gn,{}),r.jsx("span",{children:"Customize"})]})]})]})]},_))})]})})]}),rh=[{title:"Custom T-Shirts",description:"Perfect for branding, teams, and events",img:"/apparel/tshirt.jpg",big:!0,tag:"Most Popular"},{title:"Custom Hoodies",description:"Warm, stylish, and fully customizable",img:"/apparel/hoodie.jpg",tag:"Trending"},{title:"Sports Jerseys",description:"Match kits, team wear & performance fabrics",img:"/apparel/jersey.jpg",tag:null},{title:"Sublimated T-Shirts",description:"Durable, vibrant full-print sublimation",img:"/apparel/sublimated.jpg",big:!0,tag:"Premium"},{title:"Church Uniforms",description:"Custom church wear & fabric sublimation",img:"/apparel/church.jpg",tag:null},{title:"Uniforms & Workwear",description:"Corporate uniforms, school wear, staff outfits",img:"/apparel/uniform.jpg",tag:null}],fh=()=>r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        :root {
          --container-max-width: 1280px;
          --container-padding: 48px;
          --primary-pink: #E91E63;
          --primary-gold: #F7B500;
          --neutral-dark: #2C3E50;
          --neutral-medium: #7F8C8D;
          --neutral-light: #F8F8F8;
          --white: #FFFFFF;
          --transition: all 0.3s ease;
        }

        .apparel-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 60px 0;
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
        }

        .apparel-container {
          width: 100%;
          max-width: var(--container-max-width);
          padding: 0 var(--container-padding);
        }

        /* SECTION HEADER - CENTERED */
        .apparel-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .apparel-title {
          font-size: 32px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        /* GRID - 4 COLUMNS */
        .apparel-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* APPAREL CARD - FIXED STRUCTURE */
        .apparel-card {
          background: var(--white);
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
          display: grid;
          grid-template-rows: auto 1fr;
          position: relative;
          border: 1px solid transparent;
          height: 100%;
        }

        .apparel-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(233, 30, 99, 0.15);
          border-color: rgba(233, 30, 99, 0.2);
        }

        .apparel-card.big {
          grid-column: span 2;
        }

        /* IMAGE CONTAINER */
        .apparel-img-container {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
          background: var(--neutral-light);
        }

        .apparel-card.big .apparel-img-container {
          height: 300px;
        }

        .apparel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: var(--transition);
        }

        .apparel-card:hover .apparel-img {
          transform: scale(1.08);
        }

        /* TAG */
        .apparel-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        /* CONTENT - FIXED GAPS */
        .apparel-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .apparel-title-card {
          font-size: 16px;
          font-weight: 700;
          color: var(--neutral-dark);
          line-height: 1.3;
          margin: 0;
        }

        .apparel-card.big .apparel-title-card {
          font-size: 18px;
        }

        .apparel-description {
          font-size: 13px;
          color: var(--neutral-medium);
          line-height: 1.5;
          margin: 0;
        }

        .apparel-btn {
          width: 100%;
          padding: 10px 16px;
          border: none;
          border-radius: 50px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: auto;
        }

        .apparel-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(233, 30, 99, 0.4);
        }

        .apparel-btn svg {
          width: 16px;
          height: 16px;
        }

        /* EXTRA LARGE DESKTOP */
        @media (min-width: 1600px) {
          .apparel-title {
            font-size: 36px;
          }

          .apparel-grid {
            gap: 28px;
          }

          .apparel-img-container {
            height: 280px;
          }

          .apparel-card.big .apparel-img-container {
            height: 320px;
          }

          .apparel-content {
            padding: 20px;
            gap: 12px;
          }

          .apparel-title-card {
            font-size: 17px;
          }

          .apparel-card.big .apparel-title-card {
            font-size: 20px;
          }

          .apparel-description {
            font-size: 14px;
          }

          .apparel-btn {
            padding: 11px 18px;
            font-size: 14px;
          }
        }

        /* LARGE DESKTOP */
        @media (min-width: 1440px) and (max-width: 1599px) {
          .apparel-title {
            font-size: 34px;
          }

          .apparel-img-container {
            height: 270px;
          }

          .apparel-card.big .apparel-img-container {
            height: 310px;
          }
        }

        /* STANDARD DESKTOP */
        @media (min-width: 1280px) and (max-width: 1439px) {
          .apparel-grid {
            gap: 22px;
          }

          .apparel-img-container {
            height: 250px;
          }

          .apparel-card.big .apparel-img-container {
            height: 290px;
          }
        }

        /* SMALL DESKTOP / LARGE TABLET */
        @media (max-width: 1279px) and (min-width: 1025px) {
          .apparel-container {
            --container-padding: 40px;
          }

          .apparel-header {
            margin-bottom: 40px;
          }

          .apparel-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .apparel-card.big {
            grid-column: span 1;
          }

          .apparel-img-container,
          .apparel-card.big .apparel-img-container {
            height: 240px;
          }
        }

        /* TABLET */
        @media (max-width: 1024px) and (min-width: 769px) {
          .apparel-container {
            --container-padding: 32px;
          }

          .apparel-section {
            padding: 48px 0;
          }

          .apparel-header {
            margin-bottom: 36px;
          }

          .apparel-title {
            font-size: 28px;
          }

          .apparel-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .apparel-card.big {
            grid-column: span 1;
          }

          .apparel-img-container,
          .apparel-card.big .apparel-img-container {
            height: 220px;
          }

          .apparel-content {
            padding: 16px;
          }

          .apparel-title-card,
          .apparel-card.big .apparel-title-card {
            font-size: 15px;
          }

          .apparel-description {
            font-size: 12px;
          }
        }

        /* MOBILE - 2 COLUMNS */
        @media (max-width: 768px) {
          .apparel-container {
            --container-padding: 16px;
          }

          .apparel-section {
            padding: 40px 0;
          }

          .apparel-header {
            margin-bottom: 32px;
          }

          .apparel-title {
            font-size: 24px;
          }

          .apparel-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .apparel-card.big {
            grid-column: span 1;
          }

          .apparel-img-container,
          .apparel-card.big .apparel-img-container {
            height: 180px;
          }

          .apparel-content {
            padding: 14px;
            gap: 8px;
          }

          .apparel-title-card,
          .apparel-card.big .apparel-title-card {
            font-size: 14px;
          }

          .apparel-description {
            font-size: 12px;
          }

          .apparel-btn {
            padding: 9px 14px;
            font-size: 12px;
            gap: 5px;
          }

          .apparel-btn svg {
            width: 14px;
            height: 14px;
          }

          .apparel-tag {
            top: 10px;
            right: 10px;
            padding: 4px 10px;
            font-size: 10px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .apparel-section {
            padding: 36px 0;
          }

          .apparel-header {
            margin-bottom: 28px;
          }

          .apparel-title {
            font-size: 22px;
          }

          .apparel-grid {
            gap: 14px;
          }

          .apparel-img-container,
          .apparel-card.big .apparel-img-container {
            height: 170px;
          }

          .apparel-content {
            padding: 12px;
          }

          .apparel-title-card,
          .apparel-card.big .apparel-title-card {
            font-size: 13px;
          }

          .apparel-description {
            font-size: 11px;
          }
        }

        /* EXTRA SMALL MOBILE */
        @media (max-width: 375px) {
          .apparel-container {
            --container-padding: 12px;
          }

          .apparel-section {
            padding: 32px 0;
          }

          .apparel-title {
            font-size: 20px;
          }

          .apparel-grid {
            gap: 12px;
          }

          .apparel-img-container,
          .apparel-card.big .apparel-img-container {
            height: 160px;
          }

          .apparel-content {
            padding: 10px;
            gap: 6px;
          }

          .apparel-btn {
            padding: 8px 12px;
            font-size: 11px;
          }
        }

        /* TINY MOBILE */
        @media (max-width: 320px) {
          .apparel-title {
            font-size: 18px;
          }

          .apparel-grid {
            gap: 10px;
          }

          .apparel-img-container,
          .apparel-card.big .apparel-img-container {
            height: 140px;
          }

          .apparel-title-card,
          .apparel-card.big .apparel-title-card {
            font-size: 12px;
          }

          .apparel-description {
            font-size: 10px;
          }
        }

        /* ACCESSIBILITY */
        .apparel-btn:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}),r.jsx("div",{className:"apparel-section",children:r.jsxs("div",{className:"apparel-container",children:[r.jsx("div",{className:"apparel-header",children:r.jsx("h2",{className:"apparel-title",children:"Clothing & Apparel Spotlight"})}),r.jsx("div",{className:"apparel-grid",children:rh.map((v,_)=>r.jsxs("div",{className:`apparel-card ${v.big?"big":""}`,children:[r.jsxs("div",{className:"apparel-img-container",children:[r.jsx("img",{src:v.img,alt:v.title,className:"apparel-img",loading:_<4?"eager":"lazy"}),v.tag&&r.jsx("div",{className:"apparel-tag",children:v.tag})]}),r.jsxs("div",{className:"apparel-content",children:[r.jsx("h3",{className:"apparel-title-card",children:v.title}),r.jsx("p",{className:"apparel-description",children:v.description}),r.jsxs("button",{className:"apparel-btn",children:[r.jsx("span",{children:"Customize Now"}),r.jsx(E0,{})]})]})]},_))})]})})]}),oh=[{title:"Custom Mugs",description:"Perfect for gifts, events, and branding",img:"/gifts/mug.jpg",tag:"Best Seller"},{title:"Personalized Bottles",description:"Durable stainless steel and plastic bottles",img:"/gifts/bottle.jpg",tag:"Popular"},{title:"Keyholders",description:"Engraved and printed keyholders",img:"/gifts/keyholder.jpg",tag:null},{title:"Custom Pillows",description:"Soft, vibrant, and fully customizable",img:"/gifts/pillow.jpg",tag:null},{title:"Canvas Prints",description:"High-quality stretched canvas wall art",img:"/gifts/canvas.jpg",tag:"Trending"},{title:"Coasters & Mousepads",description:"Personalized desk essentials",img:"/gifts/mousepad.jpg",tag:null},{title:"Stationery",description:"High-quality stretched canvas wall art",img:"/gifts/canvas.jpg",tag:"Trending"},{title:"Canvas Prints",description:"High-quality stretched canvas wall art",img:"/gifts/canvas.jpg",tag:"Trending"}],sh=()=>r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        :root {
          --container-max-width: 1280px;
          --container-padding: 48px;
          --primary-pink: #E91E63;
          --primary-gold: #F7B500;
          --neutral-dark: #2C3E50;
          --neutral-medium: #7F8C8D;
          --neutral-light: #F8F8F8;
          --white: #FFFFFF;
          --transition: all 0.3s ease;
        }

        .gifts-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 60px 0;
          background: var(--white);
        }

        .gifts-container {
          width: 100%;
          max-width: var(--container-max-width);
          padding: 0 var(--container-padding);
        }

        /* SECTION HEADER */
        .gifts-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .gifts-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 12px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .gifts-subtitle {
          font-size: 16px;
          color: var(--neutral-medium);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* GRID - 4 COLUMNS */
        .gifts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* GIFT CARD */
        .gifts-card {
          background: var(--white);
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
          position: relative;
          border: 1px solid transparent;
          display: grid;
          grid-template-rows: auto 1fr;
          height: 100%;
        }

        .gifts-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(233, 30, 99, 0.15);
          border-color: rgba(233, 30, 99, 0.2);
        }

        /* IMAGE CONTAINER */
        .gifts-img-container {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
          background: var(--neutral-light);
        }

        .gifts-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: var(--transition);
        }

        .gifts-card:hover .gifts-img {
          transform: scale(1.08);
        }

        /* GIFT TAG */
        .gifts-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 2;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        /* WISHLIST BUTTON */
        .wishlist-btn {
          position: absolute;
          top: 12px;
          left: 12px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          opacity: 0;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .gifts-card:hover .wishlist-btn {
          opacity: 1;
        }

        .wishlist-btn:hover {
          background: var(--white);
          transform: scale(1.15);
        }

        .wishlist-btn svg {
          width: 18px;
          height: 18px;
          color: var(--primary-pink);
        }

        /* GIFT CONTENT */
        .gifts-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .gifts-title-card {
          font-size: 16px;
          font-weight: 700;
          color: var(--neutral-dark);
          line-height: 1.3;
          margin: 0;
        }

        .gifts-description {
          font-size: 13px;
          color: var(--neutral-medium);
          line-height: 1.5;
          margin: 0;
        }

        /* GIFT FOOTER */
        .gifts-footer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
        }

        .gifts-btn {
          width: 100%;
          padding: 10px 16px;
          border: none;
          border-radius: 50px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .gifts-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(233, 30, 99, 0.4);
        }

        .gifts-btn svg {
          width: 16px;
          height: 16px;
        }

        /* EXTRA LARGE DESKTOP */
        @media (min-width: 1600px) {
          .gifts-grid {
            gap: 28px;
          }

          .gifts-img-container {
            height: 280px;
          }

          .gifts-content {
            padding: 20px;
            gap: 12px;
          }

          .gifts-title-card {
            font-size: 17px;
          }

          .gifts-description {
            font-size: 14px;
          }

          .gifts-btn {
            padding: 11px 18px;
            font-size: 14px;
          }
        }

        /* LARGE DESKTOP */
        @media (min-width: 1440px) and (max-width: 1599px) {
          .gifts-title {
            font-size: 34px;
          }

          .gifts-img-container {
            height: 270px;
          }
        }

        /* STANDARD DESKTOP */
        @media (min-width: 1280px) and (max-width: 1439px) {
          .gifts-grid {
            gap: 22px;
          }

          .gifts-img-container {
            height: 250px;
          }
        }

        /* SMALL DESKTOP / LARGE TABLET */
        @media (max-width: 1279px) and (min-width: 1025px) {
          .gifts-container {
            --container-padding: 40px;
          }

          .gifts-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .gifts-img-container {
            height: 240px;
          }
        }

        /* TABLET */
        @media (max-width: 1024px) and (min-width: 769px) {
          .gifts-container {
            --container-padding: 32px;
          }

          .gifts-section {
            padding: 48px 0;
          }

          .gifts-header {
            margin-bottom: 40px;
          }

          .gifts-title {
            font-size: 28px;
          }

          .gifts-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .gifts-img-container {
            height: 220px;
          }

          .gifts-content {
            padding: 16px;
          }

          .gifts-title-card {
            font-size: 15px;
          }

          .gifts-description {
            font-size: 12px;
          }
        }

        /* MOBILE - 2 COLUMNS */
        @media (max-width: 768px) {
          .gifts-container {
            --container-padding: 16px;
          }

          .gifts-section {
            padding: 40px 0;
          }

          .gifts-header {
            margin-bottom: 32px;
          }

          .gifts-title {
            font-size: 24px;
          }

          .gifts-subtitle {
            font-size: 14px;
          }

          .gifts-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .gifts-img-container {
            height: 180px;
          }

          .gifts-content {
            padding: 14px;
            gap: 8px;
          }

          .gifts-title-card {
            font-size: 14px;
          }

          .gifts-description {
            font-size: 12px;
          }

          .gifts-footer {
            gap: 8px;
          }

          .gifts-btn {
            padding: 9px 14px;
            font-size: 12px;
            gap: 5px;
          }

          .gifts-btn svg {
            width: 14px;
            height: 14px;
          }

          .wishlist-btn {
            opacity: 1;
            width: 34px;
            height: 34px;
            top: 10px;
            left: 10px;
          }

          .wishlist-btn svg {
            width: 16px;
            height: 16px;
          }

          .gifts-tag {
            top: 10px;
            right: 10px;
            padding: 4px 10px;
            font-size: 10px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .gifts-section {
            padding: 36px 0;
          }

          .gifts-header {
            margin-bottom: 28px;
          }

          .gifts-title {
            font-size: 22px;
          }

          .gifts-grid {
            gap: 14px;
          }

          .gifts-img-container {
            height: 170px;
          }

          .gifts-content {
            padding: 12px;
          }

          .gifts-title-card {
            font-size: 13px;
          }

          .gifts-description {
            font-size: 11px;
          }
        }

        /* EXTRA SMALL MOBILE */
        @media (max-width: 375px) {
          .gifts-container {
            --container-padding: 12px;
          }

          .gifts-section {
            padding: 32px 0;
          }

          .gifts-title {
            font-size: 20px;
          }

          .gifts-subtitle {
            font-size: 13px;
          }

          .gifts-grid {
            gap: 12px;
          }

          .gifts-img-container {
            height: 160px;
          }

          .gifts-content {
            padding: 10px;
            gap: 6px;
          }

          .gifts-btn {
            padding: 8px 12px;
            font-size: 11px;
          }
        }

        /* TINY MOBILE */
        @media (max-width: 320px) {
          .gifts-title {
            font-size: 18px;
          }

          .gifts-grid {
            gap: 10px;
          }

          .gifts-img-container {
            height: 140px;
          }

          .gifts-title-card {
            font-size: 12px;
          }

          .gifts-description {
            font-size: 10px;
          }
        }

        /* ACCESSIBILITY */
        .gifts-btn:focus,
        .wishlist-btn:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}),r.jsx("div",{className:"gifts-section",children:r.jsxs("div",{className:"gifts-container",children:[r.jsxs("div",{className:"gifts-header",children:[r.jsx("h2",{className:"gifts-title",children:"Personalized Gifts & Merchandise"}),r.jsx("p",{className:"gifts-subtitle",children:"Create memorable gifts for every occasion"})]}),r.jsx("div",{className:"gifts-grid",children:oh.map((v,_)=>r.jsxs("div",{className:"gifts-card",children:[r.jsxs("div",{className:"gifts-img-container",children:[r.jsx("img",{src:v.img,className:"gifts-img",alt:v.title,loading:_<4?"eager":"lazy"}),r.jsx("button",{className:"wishlist-btn","aria-label":"Add to wishlist",children:r.jsx(w0,{})}),v.tag&&r.jsx("div",{className:"gifts-tag",children:v.tag})]}),r.jsxs("div",{className:"gifts-content",children:[r.jsx("h3",{className:"gifts-title-card",children:v.title}),r.jsx("p",{className:"gifts-description",children:v.description}),r.jsx("div",{className:"gifts-footer",children:r.jsxs("button",{className:"gifts-btn",children:[r.jsx(Gn,{}),r.jsx("span",{children:"Customize"})]})})]})]},_))})]})})]}),dh=[{title:"PVC Banners",description:"Durable outdoor promotional banners",img:"/largeformat/pvc-banner.jpg",tag:"Popular"},{title:"Posters",description:"High-quality poster printing",img:"/largeformat/posters.jpg",tag:null},{title:"Roll-Up Banners",description:"Portable display solutions",img:"/largeformat/rollup.jpg",tag:null},{title:"Vehicle Branding",description:"Professional vehicle wraps & decals",img:"/largeformat/vehicle-branding.jpg",tag:"Trending"},{title:"Stickers (Vinyl / Car)",description:"Custom vinyl stickers & car decals",img:"/largeformat/stickers.jpg",tag:null},{title:"Signboards",description:"Custom signage for businesses",img:"/largeformat/signboard.jpg",tag:"Best Seller"},{title:"Wallpapers",description:"Custom signage for businesses",img:"/largeformat/signboard.jpg",tag:"Best Seller"},{title:"Window Graphics",description:"Custom signage for businesses",img:"/largeformat/signboard.jpg",tag:"Best Seller"}],ph=()=>r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        :root {
          --container-max-width: 1280px;
          --container-padding: 48px;
          --primary-pink: #E91E63;
          --primary-gold: #F7B500;
          --neutral-dark: #2C3E50;
          --neutral-medium: #7F8C8D;
          --neutral-light: #F8F8F8;
          --white: #FFFFFF;
          --transition: all 0.3s ease;
        }

        .lf-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 60px 0;
          background: var(--white);
        }

        .lf-container {
          width: 100%;
          max-width: var(--container-max-width);
          padding: 0 var(--container-padding);
        }

        /* SECTION HEADER */
        .lf-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .lf-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 12px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .lf-subtitle {
          font-size: 16px;
          color: var(--neutral-medium);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* GRID - 4 COLUMNS */
        .lf-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* LF CARD */
        .lf-card {
          background: var(--white);
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
          position: relative;
          border: 1px solid transparent;
          display: grid;
          grid-template-rows: auto 1fr;
          height: 100%;
        }

        .lf-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(233, 30, 99, 0.15);
          border-color: rgba(233, 30, 99, 0.2);
        }

        /* IMAGE CONTAINER */
        .lf-img-container {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
          background: var(--neutral-light);
        }

        .lf-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: var(--transition);
        }

        .lf-card:hover .lf-img {
          transform: scale(1.08);
        }

        /* LF TAG */
        .lf-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 2;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        /* WISHLIST BUTTON */
        .wishlist-btn {
          position: absolute;
          top: 12px;
          left: 12px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          opacity: 0;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .lf-card:hover .wishlist-btn {
          opacity: 1;
        }

        .wishlist-btn:hover {
          background: var(--white);
          transform: scale(1.15);
        }

        .wishlist-btn svg {
          width: 18px;
          height: 18px;
          color: var(--primary-pink);
        }

        /* LF CONTENT */
        .lf-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .lf-title-card {
          font-size: 16px;
          font-weight: 700;
          color: var(--neutral-dark);
          line-height: 1.3;
          margin: 0;
        }

        .lf-description {
          font-size: 13px;
          color: var(--neutral-medium);
          line-height: 1.5;
          margin: 0;
        }

        /* LF FOOTER */
        .lf-footer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
        }

        .lf-btn {
          width: 100%;
          padding: 10px 16px;
          border: none;
          border-radius: 50px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .lf-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(233, 30, 99, 0.4);
        }

        .lf-btn svg {
          width: 16px;
          height: 16px;
        }

        /* EXTRA LARGE DESKTOP */
        @media (min-width: 1600px) {
          .lf-grid {
            gap: 28px;
          }

          .lf-img-container {
            height: 280px;
          }

          .lf-content {
            padding: 20px;
            gap: 12px;
          }

          .lf-title-card {
            font-size: 17px;
          }

          .lf-description {
            font-size: 14px;
          }

          .lf-btn {
            padding: 11px 18px;
            font-size: 14px;
          }
        }

        /* LARGE DESKTOP */
        @media (min-width: 1440px) and (max-width: 1599px) {
          .lf-title {
            font-size: 34px;
          }

          .lf-img-container {
            height: 270px;
          }
        }

        /* STANDARD DESKTOP */
        @media (min-width: 1280px) and (max-width: 1439px) {
          .lf-grid {
            gap: 22px;
          }

          .lf-img-container {
            height: 250px;
          }
        }

        /* SMALL DESKTOP / LARGE TABLET */
        @media (max-width: 1279px) and (min-width: 1025px) {
          .lf-container {
            --container-padding: 40px;
          }

          .lf-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .lf-img-container {
            height: 240px;
          }
        }

        /* TABLET */
        @media (max-width: 1024px) and (min-width: 769px) {
          .lf-container {
            --container-padding: 32px;
          }

          .lf-section {
            padding: 48px 0;
          }

          .lf-header {
            margin-bottom: 40px;
          }

          .lf-title {
            font-size: 28px;
          }

          .lf-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .lf-img-container {
            height: 220px;
          }

          .lf-content {
            padding: 16px;
          }

          .lf-title-card {
            font-size: 15px;
          }

          .lf-description {
            font-size: 12px;
          }
        }

        /* MOBILE - 2 COLUMNS */
        @media (max-width: 768px) {
          .lf-container {
            --container-padding: 16px;
          }

          .lf-section {
            padding: 40px 0;
          }

          .lf-header {
            margin-bottom: 32px;
          }

          .lf-title {
            font-size: 24px;
          }

          .lf-subtitle {
            font-size: 14px;
          }

          .lf-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .lf-img-container {
            height: 180px;
          }

          .lf-content {
            padding: 14px;
            gap: 8px;
          }

          .lf-title-card {
            font-size: 14px;
          }

          .lf-description {
            font-size: 12px;
          }

          .lf-footer {
            gap: 8px;
          }

          .lf-btn {
            padding: 9px 14px;
            font-size: 12px;
            gap: 5px;
          }

          .lf-btn svg {
            width: 14px;
            height: 14px;
          }

          .wishlist-btn {
            opacity: 1;
            width: 34px;
            height: 34px;
            top: 10px;
            left: 10px;
          }

          .wishlist-btn svg {
            width: 16px;
            height: 16px;
          }

          .lf-tag {
            top: 10px;
            right: 10px;
            padding: 4px 10px;
            font-size: 10px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .lf-section {
            padding: 36px 0;
          }

          .lf-header {
            margin-bottom: 28px;
          }

          .lf-title {
            font-size: 22px;
          }

          .lf-grid {
            gap: 14px;
          }

          .lf-img-container {
            height: 170px;
          }

          .lf-content {
            padding: 12px;
          }

          .lf-title-card {
            font-size: 13px;
          }

          .lf-description {
            font-size: 11px;
          }
        }

        /* EXTRA SMALL MOBILE */
        @media (max-width: 375px) {
          .lf-container {
            --container-padding: 12px;
          }

          .lf-section {
            padding: 32px 0;
          }

          .lf-title {
            font-size: 20px;
          }

          .lf-subtitle {
            font-size: 13px;
          }

          .lf-grid {
            gap: 12px;
          }

          .lf-img-container {
            height: 160px;
          }

          .lf-content {
            padding: 10px;
            gap: 6px;
          }

          .lf-btn {
            padding: 8px 12px;
            font-size: 11px;
          }
        }

        /* TINY MOBILE */
        @media (max-width: 320px) {
          .lf-title {
            font-size: 18px;
          }

          .lf-grid {
            gap: 10px;
          }

          .lf-img-container {
            height: 140px;
          }

          .lf-title-card {
            font-size: 12px;
          }

          .lf-description {
            font-size: 10px;
          }
        }

        /* ACCESSIBILITY */
        .lf-btn:focus,
        .wishlist-btn:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}),r.jsx("section",{className:"lf-section",children:r.jsxs("div",{className:"lf-container",children:[r.jsxs("div",{className:"lf-header",children:[r.jsx("h2",{className:"lf-title",children:"Large Format & Outdoor Printing"}),r.jsx("p",{className:"lf-subtitle",children:"Professional large-scale printing for impactful displays"})]}),r.jsx("div",{className:"lf-grid",children:dh.map((v,_)=>r.jsxs("div",{className:"lf-card",children:[r.jsxs("div",{className:"lf-img-container",children:[r.jsx("img",{src:v.img,className:"lf-img",alt:v.title,loading:_<4?"eager":"lazy"}),r.jsx("button",{className:"wishlist-btn","aria-label":"Add to wishlist",children:r.jsx(X0,{})}),v.tag&&r.jsx("div",{className:"lf-tag",children:v.tag})]}),r.jsxs("div",{className:"lf-content",children:[r.jsx("h3",{className:"lf-title-card",children:v.title}),r.jsx("p",{className:"lf-description",children:v.description}),r.jsx("div",{className:"lf-footer",children:r.jsxs("button",{className:"lf-btn",children:[r.jsx(Gn,{}),r.jsx("span",{children:"Get Quote"})]})})]})]},_))})]})})]});function gh(){return r.jsxs(r.Fragment,{children:[r.jsx(ah,{}),r.jsx(lh,{}),r.jsx(nh,{}),r.jsx(ch,{}),r.jsx(fh,{}),r.jsx(sh,{}),r.jsx(ph,{}),r.jsx(eh,{})]})}m0.createRoot(document.getElementById("root")).render(r.jsx(r0.StrictMode,{children:r.jsx(gh,{})}));
