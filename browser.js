// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,b,"e"),n=s.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):f.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,O=isNaN,S=Array.isArray;function _(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function E(e){var r,t,n,o,a,c,f,l,s,p,g,d,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",f=1,l=0;l<e.length;l++)if("string"==typeof(n=e[l]))c+=n;else{if(r=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),c+=n.arg||"",f+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){var r,t;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return E.apply(null,r)}var P,A=Object.prototype,V=A.toString,F=A.__defineGetter__,N=A.__defineSetter__,C=A.__lookupGetter__,$=A.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};var B=P;function L(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function R(e){return"number"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return G&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function Z(e,r){return null!=e&&X.call(e,r)}var M="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof M?M.toStringTag:"",H=W()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[Y],r=Z(e,Y);try{e[Y]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return U.call(e)},z=Number,D=z.prototype.toString,q=W();function J(e){return"object"==typeof e&&(e instanceof z||(q?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function K(e){return R(e)||J(e)}L(K,"isPrimitive",R),L(K,"isObject",J);var Q=Number.POSITIVE_INFINITY,ee=z.NEGATIVE_INFINITY,re=Math.floor;function te(e){return re(e)===e}function ne(e){return e<Q&&e>ee&&te(e)}function ie(e){return R(e)&&ne(e)}function oe(e){return J(e)&&ne(e.valueOf())}function ae(e){return ie(e)||oe(e)}function ue(e){return ie(e)&&e>0}function ce(e){return oe(e)&&e.valueOf()>0}function fe(e){return ue(e)||ce(e)}L(ae,"isPrimitive",ie),L(ae,"isObject",oe),L(fe,"isPrimitive",ue),L(fe,"isObject",ce);var le=void 0!==Object.getOwnPropertyNames,se=Object,pe=se.getOwnPropertyNames;function ge(e){return Object.keys(Object(e))}var de,he=void 0!==Object.keys;function ye(e){return"[object Arguments]"===H(e)}de=function(){return ye(arguments)}();var be=de;function ve(e){return"string"==typeof e}var we=String.prototype.valueOf,me=W();function je(e){return"object"==typeof e&&(e instanceof String||(me?function(e){try{return we.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function Oe(e){return ve(e)||je(e)}function Se(e){return e!=e}function _e(e){return R(e)&&Se(e)}function Ee(e){return J(e)&&Se(e.valueOf())}function Te(e){return _e(e)||Ee(e)}L(Oe,"isPrimitive",ve),L(Oe,"isObject",je),L(Te,"isPrimitive",_e),L(Te,"isObject",Ee);var ke,xe=Object.prototype.propertyIsEnumerable,Ie=!xe.call("beep","0");function Pe(e,r){var t;return null!=e&&(!(t=xe.call(e,r))&&Ie&&Oe(e)?!_e(r=+r)&&ie(r)&&r>=0&&r<e.length:t)}ke=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};var Ae,Ve=ke;Ae=be?ye:function(e){return null!==e&&"object"==typeof e&&!Ve(e)&&"number"==typeof e.length&&te(e.length)&&e.length>=0&&e.length<=4294967295&&Z(e,"callee")&&!Pe(e,"callee")};var Fe=Ae,Ne=Array.prototype.slice;function Ce(e){return null!==e&&"object"==typeof e}var $e=function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ve(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ce);L(Ce,"isObjectLikeArray",$e);var Be=Pe((function(){}),"prototype"),Le=!Pe({toString:null},"toString"),Re=9007199254740991;function Ge(e,r,t){var n,i,o;if(!("object"==typeof(o=e)&&null!==o&&"number"==typeof o.length&&te(o.length)&&o.length>=0&&o.length<=Re||ve(e)))throw new TypeError(I("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!ie(t))throw new TypeError(I("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Te(r)){for(;i<n;i++)if(Te(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var We=/./;function Ue(e){return"boolean"==typeof e}var Xe=Boolean,Ze=Boolean.prototype.toString,Me=W();function Ye(e){return"object"==typeof e&&(e instanceof Xe||(Me?function(e){try{return Ze.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function He(e){return Ue(e)||Ye(e)}L(He,"isPrimitive",Ue),L(He,"isObject",Ye);var ze="object"==typeof self?self:null,De="object"==typeof window?window:null,qe="object"==typeof globalThis?globalThis:null,Je=function(e){if(arguments.length){if(!Ue(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(qe)return qe;if(ze)return ze;if(De)return De;throw new Error("unexpected error. Unable to resolve global object.")}(),Ke=Je.document&&Je.document.childNodes,Qe=Int8Array;function er(){return/^\s*function\s*([^(]*)/i}var rr=/^\s*function\s*([^(]*)/i;function tr(e){var r,t,n,i;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=rr.exec(n.toString()))return r[1]}return Ce(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(er,"REGEXP",rr);var nr="function"==typeof We||"object"==typeof Qe||"function"==typeof Ke?function(e){return tr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?tr(e).toLowerCase():r};function ir(e){return e.constructor&&e.constructor.prototype===e}var or,ar=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ur="undefined"==typeof window?void 0:window,cr=function(){var e;if("undefined"===nr(ur))return!1;for(e in ur)try{-1===Ge(ar,e)&&Z(ur,e)&&null!==ur[e]&&"object"===nr(ur[e])&&ir(ur[e])}catch(e){return!0}return!1}(),fr="undefined"!=typeof window,lr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];or=he?function(){return 2!==(ge(arguments)||"").length}(1,2)?function(e){return Fe(e)?ge(Ne.call(e)):ge(e)}:ge:function(e){var r,t,n,i,o,a,u;if(i=[],Fe(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!Z(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof e)&&!Ce(e))return i;t=Be&&n}for(o in e)t&&"prototype"===o||!Z(e,o)||i.push(String(o));if(Le)for(r=function(e){if(!1===fr&&!cr)return ir(e);try{return ir(e)}catch(e){return!1}}(e),u=0;u<lr.length;u++)a=lr[u],r&&"constructor"===a||!Z(e,a)||i.push(String(a));return i};var sr,pr=or;sr=le?function(e){return pe(se(e))}:function(e){return pr(se(e))};var gr,dr,hr=sr,yr=Object.getPrototypeOf;dr=Object.getPrototypeOf,gr="function"===nr(dr)?yr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===H(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var br=gr;function vr(e){return null==e?null:(e=se(e),br(e))}function wr(e,r){var t;for(t=0;t<e.length;t++)if(e[t]===r)return!0;return!1}return function(e,r){var t,n,i,o,a,u;if(arguments.length>1){if(!ue(r))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("1Un45",r));o=r}else o=9007199254740991;if(null==e)return[];for(n=vr(e),t=[],a=1;n&&a<=o;){for(i=hr(n),u=0;u<i.length;u++)!1===wr(t,i[u])&&t.push(i[u]);n=vr(n),a+=1}return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).inheritedPropertyNames=r();
//# sourceMappingURL=browser.js.map
