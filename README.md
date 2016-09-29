# equalish

Shallow compare A to B, where A[key] can be a RegExp.

![npm](https://img.shields.io/npm/v/equalish.svg)

```bash
$ npm install --save equalish
```

### equalish(a, b, [compare])

```javascript
// Objects
equalish({ one:1, two:2 }, { one:1, two:2 }); // => true
equalish({ one:1 }, { one:1, two:2 });  // => false

// RegExps
equalish({ three:/three/i }, { three:'THREE' }); // => true

// Arrays
equalish([1, 2, 3], [1, 2, 3]); // => true
equalish([1, 2, 3], [1, 2, 4]); // => false

// Use a custom "compare" function.
equalish({ one:'ONE' }, { one:'ONE' }, (a, b) => {
  return a.toLowerCase() === b.toLowerCase();
}); // => true
```

## License

(The MIT License)

Copyright (c) 2016 [John Flesch](http://fles.ch).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
