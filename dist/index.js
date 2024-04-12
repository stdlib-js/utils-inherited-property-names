"use strict";var m=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var f=m(function(E,v){
var p=require('@stdlib/constants-float64-max-safe-integer/dist'),g=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,h=require('@stdlib/utils-property-names/dist'),o=require('@stdlib/utils-get-prototype-of/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist');function q(i,r){var e;for(e=0;e<i.length;e++)if(i[e]===r)return!0;return!1}function l(i,r){var e,t,a,s,u,n;if(arguments.length>1){if(!g(r))throw new TypeError(c('1Un45',r));s=r}else s=p;if(i==null)return[];for(t=o(i),e=[],u=1;t&&u<=s;){for(a=h(t),n=0;n<a.length;n++)q(e,a[n])===!1&&e.push(a[n]);t=o(t),u+=1}return e}v.exports=l
});var d=f();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
