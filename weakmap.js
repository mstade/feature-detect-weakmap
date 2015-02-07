/* Tests copied from https://github.com/kangax/compat-table

Copyright (c) 2010-2013 Juriy Zaytsev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

exports.feature = 'WeakMap'

exports.tests =
[ [ 'basic functionality', function() {
    var key = {};
    var weakmap = new WeakMap();
    weakmap.set(key, 123);
    return weakmap.has(key) && weakmap.get(key) === 123;
  } ]
, [ 'constructor arguments', function() {
    var key1 = {};
    var key2 = {};
    var weakmap = new WeakMap([[key1, 123], [key2, 456]]);
    return weakmap.has(key1) && weakmap.get(key1) === 123 &&
           weakmap.has(key2) && weakmap.get(key2) === 456;
  } ]
, [ 'WeakMap.prototype.set returns this', function() {
    var weakmap = new WeakMap();
    var key = {};
    return weakmap.set(key, 0) === weakmap;
  } ]
, [ 'WeakMap.prototype.delete', function() {
    return typeof WeakMap.prototype.delete === "function";
  } ]
, [ 'Support frozen objects as keys', function() {
    var f = Object.freeze({});
    var m = new WeakMap;
    m.set(f, 42);
    return m.get(f) === 42;
  }]
]