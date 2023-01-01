// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-names@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function n(t,e){var s;for(s=0;s<t.length;s++)if(t[s]===e)return!0;return!1}function o(o,m){var d,l,f,p,h,j;if(arguments.length>1){if(!e(m))throw new TypeError(i("0kF4I",m));p=m}else p=t;if(null==o)return[];for(l=r(o),d=[],h=1;l&&h<=p;){for(f=s(l),j=0;j<f.length;j++)!1===n(d,f[j])&&d.push(f[j]);l=r(l),h+=1}return d}export{o as default};
//# sourceMappingURL=index.mjs.map
