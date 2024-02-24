// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,b,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,h,"$1."),n=s.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,O=isNaN,S=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,t,n,o,a,c,f,l,s,p,g,h,y;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,y=void 0,(y=g-p.length)<0?p:p=h?p+m(y):m(y)+p)),c+=n.arg||"",f+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function x(r){var e,t;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return _.apply(null,e)}var P,A=Object.prototype,V=A.toString,F=A.__defineGetter__,N=A.__defineSetter__,C=A.__lookupGetter__,$=A.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var L=P;function B(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function R(r){return"number"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return G&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,U=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&U.call(r,e)}var Z="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Z?Z.toStringTag:"",H=W()?function(r){var e,t,n;if(null==r)return M.call(r);t=r[Y],e=X(r,Y);try{r[Y]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return M.call(r)},z=Number,D=z.prototype.toString,q=W();function J(r){return"object"==typeof r&&(r instanceof z||(q?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function K(r){return R(r)||J(r)}B(K,"isPrimitive",R),B(K,"isObject",J);var Q=Number.POSITIVE_INFINITY,rr=z.NEGATIVE_INFINITY,er=Math.floor;function tr(r){return er(r)===r}function nr(r){return r<Q&&r>rr&&tr(r)}function ir(r){return R(r)&&nr(r)}function or(r){return J(r)&&nr(r.valueOf())}function ar(r){return ir(r)||or(r)}function ur(r){return ir(r)&&r>0}function cr(r){return or(r)&&r.valueOf()>0}function fr(r){return ur(r)||cr(r)}B(ar,"isPrimitive",ir),B(ar,"isObject",or),B(fr,"isPrimitive",ur),B(fr,"isObject",cr);var lr=void 0!==Object.getOwnPropertyNames,sr=Object,pr=sr.getOwnPropertyNames;function gr(r){return Object.keys(Object(r))}var hr,yr=void 0!==Object.keys;function dr(r){return"[object Arguments]"===H(r)}hr=function(){return dr(arguments)}();var br=hr;function vr(r){return"string"==typeof r}var wr=String.prototype.valueOf,mr=W();function jr(r){return"object"==typeof r&&(r instanceof String||(mr?function(r){try{return wr.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function Or(r){return vr(r)||jr(r)}function Sr(r){return r!=r}function Er(r){return R(r)&&Sr(r)}function _r(r){return J(r)&&Sr(r.valueOf())}function Tr(r){return Er(r)||_r(r)}B(Or,"isPrimitive",vr),B(Or,"isObject",jr),B(Tr,"isPrimitive",Er),B(Tr,"isObject",_r);var kr,Ir=Object.prototype.propertyIsEnumerable,xr=!Ir.call("beep","0");kr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var Pr,Ar=kr;Pr=br?dr:function(r){return null!==r&&"object"==typeof r&&!Ar(r)&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=4294967295&&X(r,"callee")&&!function(r,e){var t;return null!=r&&(!(t=Ir.call(r,e))&&xr&&Or(r)?!Er(e=+e)&&ir(e)&&e>=0&&e<r.length:t)}(r,"callee")};var Vr=Pr,Fr=Array.prototype.slice;function Nr(r){return null!==r&&"object"==typeof r}var Cr=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Ar(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Nr);function $r(r){return r!=r}function Lr(r){return R(r)&&$r(r)}function Br(r){return J(r)&&$r(r.valueOf())}function Rr(r){return Lr(r)||Br(r)}B(Nr,"isObjectLikeArray",Cr),B(Rr,"isPrimitive",Lr),B(Rr,"isObject",Br);var Gr=Object.prototype.propertyIsEnumerable,Wr=!Gr.call("beep","0");function Mr(r,e){var t;return null!=r&&(!(t=Gr.call(r,e))&&Wr&&Or(r)?!Lr(e=+e)&&ir(e)&&e>=0&&e<r.length:t)}var Ur=Mr((function(){}),"prototype"),Xr=!Mr({toString:null},"toString");function Zr(r){return r!=r}function Yr(r){return R(r)&&Zr(r)}function Hr(r){return J(r)&&Zr(r.valueOf())}function zr(r){return Yr(r)||Hr(r)}B(zr,"isPrimitive",Yr),B(zr,"isObject",Hr);var Dr=9007199254740991;function qr(r,e,t){var n,i,o;if(!("object"==typeof(o=r)&&null!==o&&"number"==typeof o.length&&tr(o.length)&&o.length>=0&&o.length<=Dr||vr(r)))throw new TypeError(x("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!ir(t))throw new TypeError(x("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(zr(e)){for(;i<n;i++)if(zr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Jr=/./;function Kr(r){return"boolean"==typeof r}var Qr=Boolean,re=Boolean.prototype.toString,ee=W();function te(r){return"object"==typeof r&&(r instanceof Qr||(ee?function(r){try{return re.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function ne(r){return Kr(r)||te(r)}B(ne,"isPrimitive",Kr),B(ne,"isObject",te);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof globalThis?globalThis:null,ue=function(r){if(arguments.length){if(!Kr(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ae)return ae;if(ie)return ie;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}(),ce=ue.document&&ue.document.childNodes,fe=Int8Array;function le(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;function pe(r){return null!==r&&"object"==typeof r}B(le,"REGEXP",se);var ge=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Ar(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pe);function he(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=se.exec(n.toString()))return e[1]}return pe(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(pe,"isObjectLikeArray",ge);var ye="function"==typeof Jr||"object"==typeof fe||"function"==typeof ce?function(r){return he(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?he(r).toLowerCase():e};function de(r){return r.constructor&&r.constructor.prototype===r}var be,ve=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],we="undefined"==typeof window?void 0:window,me=function(){var r;if("undefined"===ye(we))return!1;for(r in we)try{-1===qr(ve,r)&&X(we,r)&&null!==we[r]&&"object"===ye(we[r])&&de(we[r])}catch(r){return!0}return!1}(),je="undefined"!=typeof window,Oe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];be=yr?function(){return 2!==(gr(arguments)||"").length}(1,2)?function(r){return Vr(r)?gr(Fr.call(r)):gr(r)}:gr:function(r){var e,t,n,i,o,a,u;if(i=[],Vr(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!X(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof r)&&!Nr(r))return i;t=Ur&&n}for(o in r)t&&"prototype"===o||!X(r,o)||i.push(String(o));if(Xr)for(e=function(r){if(!1===je&&!me)return de(r);try{return de(r)}catch(r){return!1}}(r),u=0;u<Oe.length;u++)a=Oe[u],e&&"constructor"===a||!X(r,a)||i.push(String(a));return i};var Se,Ee=be;Se=lr?function(r){return pr(sr(r))}:function(r){return Ee(sr(r))};var _e,Te,ke=Se,Ie=Object,xe=Object.getPrototypeOf;Te=Object.getPrototypeOf,_e="function"===ye(Te)?xe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Pe=_e;function Ae(r){return null==r?null:(r=Ie(r),Pe(r))}function Ve(r,e){var t;for(t=0;t<r.length;t++)if(r[t]===e)return!0;return!1}return function(r,e){var t,n,i,o,a,u;if(arguments.length>1){if(!ur(e))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1Un45",e));o=e}else o=9007199254740991;if(null==r)return[];for(n=Ae(r),t=[],a=1;n&&a<=o;){for(i=ke(n),u=0;u<i.length;u++)!1===Ve(t,i[u])&&t.push(i[u]);n=Ae(n),a+=1}return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).inheritedPropertyNames=e();
//# sourceMappingURL=browser.js.map
