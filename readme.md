# dat-string-key [![Travis](https://img.shields.io/travis/joehand/dat-string-key.svg?style=flat-square)](https://travis-ci.org/joehand/dat-string-key) [![npm](https://img.shields.io/npm/v/dat-string-key.svg?style=flat-square)](https://npmjs.org/package/dat-string-key)

Might return a Dat string key

* **valid string/buffer**: Returns a dat key as a string
* **invalid key**: Throws error
* **null**: Returns null

Check out [dat-key-as](https://github.com/joehand/dat-key-as) to get keys as strings or buffers!

## Usage

```js
var strKeyMaybe = require('dat-string-key')

var key = strKeyMaybe(new Buffer(process.argv[2], 'hex'))

try {
  console.log('maybe a key: key valid or null', strKeyMaybe(key))
} catch (e) {
  console.log('key not valid')
}
```

## License

MIT
