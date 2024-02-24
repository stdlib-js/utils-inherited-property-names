// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,h,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,y,"$1."),n=s.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,O=isNaN,S=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,t,n,o,a,c,f,l,s,p,g,y,b;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,y=n.padRight,b=void 0,(b=g-p.length)<0?p:p=y?p+m(b):m(b)+p)),c+=n.arg||"",f+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function x(r){var e,t;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return _.apply(null,e)}var P,A=Object.prototype,V=A.toString,F=A.__defineGetter__,N=A.__defineSetter__,C=A.__lookupGetter__,$=A.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var L=P;function B(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function R(r){return"number"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return G&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&U.call(r,e)}var Z="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Z?Z.toStringTag:"";var H=W()?function(r){var e,t,n;if(null==r)return M.call(r);t=r[Y],e=X(r,Y);try{r[Y]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return M.call(r)},z=Number,D=z.prototype.toString;var q=W();function J(r){return"object"==typeof r&&(r instanceof z||(q?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function K(r){return R(r)||J(r)}B(K,"isPrimitive",R),B(K,"isObject",J);var Q=Number.POSITIVE_INFINITY,rr=z.NEGATIVE_INFINITY,er=Math.floor;function tr(r){return er(r)===r}function nr(r){return r<Q&&r>rr&&tr(r)}function ir(r){return R(r)&&nr(r)}function or(r){return J(r)&&nr(r.valueOf())}function ar(r){return ir(r)||or(r)}function ur(r){return ir(r)&&r>0}function cr(r){return or(r)&&r.valueOf()>0}function fr(r){return ur(r)||cr(r)}B(ar,"isPrimitive",ir),B(ar,"isObject",or),B(fr,"isPrimitive",ur),B(fr,"isObject",cr);var lr=void 0!==Object.getOwnPropertyNames,sr=Object,pr=sr.getOwnPropertyNames;function gr(r){return Object.keys(Object(r))}var yr=void 0!==Object.keys;function br(r){return"[object Arguments]"===H(r)}var dr=function(){return br(arguments)}();function hr(r){return"string"==typeof r}var vr=String.prototype.valueOf;var wr=W();function mr(r){return"object"==typeof r&&(r instanceof String||(wr?function(r){try{return vr.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function jr(r){return hr(r)||mr(r)}function Or(r){return r!=r}function Sr(r){return R(r)&&Or(r)}function Er(r){return J(r)&&Or(r.valueOf())}function _r(r){return Sr(r)||Er(r)}B(jr,"isPrimitive",hr),B(jr,"isObject",mr),B(_r,"isPrimitive",Sr),B(_r,"isObject",Er);var kr=Object.prototype.propertyIsEnumerable;var Ir,Tr=!kr.call("beep","0");Ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var xr,Pr=Ir;xr=dr?br:function(r){return null!==r&&"object"==typeof r&&!Pr(r)&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=4294967295&&X(r,"callee")&&!function(r,e){var t;return null!=r&&(!(t=kr.call(r,e))&&Tr&&jr(r)?!Sr(e=+e)&&ir(e)&&e>=0&&e<r.length:t)}(r,"callee")};var Ar=xr,Vr=Array.prototype.slice;function Fr(r){return null!==r&&"object"==typeof r}var Nr=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Fr);function Cr(r){return r!=r}function $r(r){return R(r)&&Cr(r)}function Lr(r){return J(r)&&Cr(r.valueOf())}function Br(r){return $r(r)||Lr(r)}B(Fr,"isObjectLikeArray",Nr),B(Br,"isPrimitive",$r),B(Br,"isObject",Lr);var Rr=Object.prototype.propertyIsEnumerable;var Gr=!Rr.call("beep","0");function Wr(r,e){var t;return null!=r&&(!(t=Rr.call(r,e))&&Gr&&jr(r)?!$r(e=+e)&&ir(e)&&e>=0&&e<r.length:t)}var Mr=Wr((function(){}),"prototype"),Ur=!Wr({toString:null},"toString");function Xr(r){return r!=r}function Zr(r){return R(r)&&Xr(r)}function Yr(r){return J(r)&&Xr(r.valueOf())}function Hr(r){return Zr(r)||Yr(r)}B(Hr,"isPrimitive",Zr),B(Hr,"isObject",Yr);var zr=9007199254740991;function Dr(r,e,t){var n,i,o;if(!(o=r,"object"==typeof o&&null!==o&&"number"==typeof o.length&&tr(o.length)&&o.length>=0&&o.length<=zr||hr(r)))throw new TypeError(x("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!ir(t))throw new TypeError(x("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Hr(e)){for(;i<n;i++)if(Hr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var qr=/./;function Jr(r){return"boolean"==typeof r}var Kr=Boolean,Qr=Boolean.prototype.toString;var re=W();function ee(r){return"object"==typeof r&&(r instanceof Kr||(re?function(r){try{return Qr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function te(r){return Jr(r)||ee(r)}B(te,"isPrimitive",Jr),B(te,"isObject",ee);var ne="object"==typeof self?self:null,ie="object"==typeof window?window:null,oe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ae="object"==typeof oe?oe:null,ue="object"==typeof globalThis?globalThis:null;var ce=function(r){if(arguments.length){if(!Jr(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ue)return ue;if(ne)return ne;if(ie)return ie;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=ce.document&&ce.document.childNodes,le=Int8Array;function se(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;function ge(r){return null!==r&&"object"==typeof r}B(se,"REGEXP",pe);var ye=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ge);function be(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pe.exec(n.toString()))return e[1]}return ge(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(ge,"isObjectLikeArray",ye);var de="function"==typeof qr||"object"==typeof le||"function"==typeof fe?function(r){return be(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?be(r).toLowerCase():e};function he(r){return r.constructor&&r.constructor.prototype===r}var ve=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],we="undefined"==typeof window?void 0:window;var me=function(){var r;if("undefined"===de(we))return!1;for(r in we)try{-1===Dr(ve,r)&&X(we,r)&&null!==we[r]&&"object"===de(we[r])&&he(we[r])}catch(r){return!0}return!1}(),je="undefined"!=typeof window;var Oe,Se=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Oe=yr?function(){return 2!==(gr(arguments)||"").length}(1,2)?function(r){return Ar(r)?gr(Vr.call(r)):gr(r)}:gr:function(r){var e,t,n,i,o,a,u;if(i=[],Ar(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!X(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Fr(r))return i;t=Mr&&n}for(o in r)t&&"prototype"===o||!X(r,o)||i.push(String(o));if(Ur)for(e=function(r){if(!1===je&&!me)return he(r);try{return he(r)}catch(r){return!1}}(r),u=0;u<Se.length;u++)a=Se[u],e&&"constructor"===a||!X(r,a)||i.push(String(a));return i};var Ee,_e=Oe;Ee=lr?function(r){return pr(sr(r))}:function(r){return _e(sr(r))};var ke=Ee,Ie=Object;var Te,xe,Pe=Object.getPrototypeOf;xe=Object.getPrototypeOf,Te="function"===de(xe)?Pe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ae=Te;function Ve(r){return null==r?null:(r=Ie(r),Ae(r))}function Fe(r,e){var t;for(t=0;t<r.length;t++)if(r[t]===e)return!0;return!1}function Ne(r,e){var t,n,i,o,a,u;if(arguments.length>1){if(!ur(e))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1Un45",e));o=e}else o=9007199254740991;if(null==r)return[];for(n=Ve(r),t=[],a=1;n&&a<=o;){for(i=ke(n),u=0;u<i.length;u++)!1===Fe(t,i[u])&&t.push(i[u]);n=Ve(n),a+=1}return t}export{Ne as default};
//# sourceMappingURL=mod.js.map
