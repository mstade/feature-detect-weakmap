Feature detect: WeakMap
=======================

This library detects at installation time whether your current environment supports [WeakMap][1].

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap

Usage
-----

```bash
npm install --save feature-detect-weakmap
```

If WeakMap is supported, nothing happens, but if not the preinstall script will print an error and exit with a non-zero value. This package exports nothing, and is useless as a runtime dependency.

---

License: [MIT](http://mstade.mit-license.org/)