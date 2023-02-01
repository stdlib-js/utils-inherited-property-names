<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# inheritedPropertyNames

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's inherited enumerable and non-enumerable property names.



<section class="usage">

## Usage

To use in Observable,

```javascript
inheritedPropertyNames = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-property-names@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var inheritedPropertyNames = require( 'path/to/vendor/umd/utils-inherited-property-names/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-property-names@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.inheritedPropertyNames;
})();
</script>
```

#### inheritedPropertyNames( obj\[, level] )

Returns an `array` of an object's inherited enumerable and non-enumerable property names.

```javascript
function Foo() {
    this.a = 'b';
    return this;
}

Foo.prototype.beep = 'boop';

var f = new Foo();
var keys = inheritedPropertyNames( f );
// e.g., returns [ 'beep', ... ]
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

```javascript
var inherit = require( '@stdlib/utils-inherit' );

function Bar() {
    return this;
}

Bar.prototype.boop = 'beep';

function Foo() {
    Bar.call( this );
    this.a = 'b';
    return this;
}

inherit( Foo, Bar );
Foo.prototype.beep = 'boop';

var f = new Foo();
var keys = inheritedPropertyNames( f, 1 );
// e.g., returns [ 'beep', ... ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Name order is not guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-property-names@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'qux'
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];
defineProperty( Foo.prototype, 'bip', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'bop'
});

var obj = new Foo();
var keys = inheritedPropertyNames( obj );

console.log( keys );
// e.g., => [ 'foo', 'bip', ... ]

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/inherited-keys`][@stdlib/utils/inherited-keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-property-descriptors`][@stdlib/utils/inherited-property-descriptors]</span><span class="delimiter">: </span><span class="description">return an object's inherited property descriptors.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-property-symbols`][@stdlib/utils/inherited-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/property-names`][@stdlib/utils/property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/property-names-in`][@stdlib/utils/property-names-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable and non-enumerable property names.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-inherited-property-names.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-inherited-property-names

[test-image]: https://github.com/stdlib-js/utils-inherited-property-names/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-inherited-property-names/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-inherited-property-names/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-inherited-property-names?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-inherited-property-names.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-inherited-property-names/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-inherited-property-names/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-inherited-property-names/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-inherited-property-names/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-inherited-property-names/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inherited-property-names/main/LICENSE

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/inherited-keys]: https://github.com/stdlib-js/utils-inherited-keys/tree/umd

[@stdlib/utils/inherited-property-descriptors]: https://github.com/stdlib-js/utils-inherited-property-descriptors/tree/umd

[@stdlib/utils/inherited-property-symbols]: https://github.com/stdlib-js/utils-inherited-property-symbols/tree/umd

[@stdlib/utils/property-names]: https://github.com/stdlib-js/utils-property-names/tree/umd

[@stdlib/utils/property-names-in]: https://github.com/stdlib-js/utils-property-names-in/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
