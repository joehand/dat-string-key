var test = require('tape')
var encoding = require('dat-encoding')

var stringKeyMaybe = require('.')

var keys = [
  {type: 'valid', key: 'a6848dd4f5515f70b4c20c484d7b348ce71f711d8f94b07d919f0acc068d165d'},
  {type: 'valid', key: new Buffer('a6848dd4f5515f70b4c20c484d7b348ce71f711d8f94b07d919f0acc068d165d', 'hex')},
  {type: 'invalid', key: new Buffer('key-me-maybe', 'hex')},
  {type: 'null', key: null}
]

test('keys maybe turn into buffers', function (t) {
  keys.forEach(function (key) {
    if (key.type === 'invalid') {
      t.throws(function () { stringKeyMaybe(key.key) }, 'invalid key throws error')
    } else if (key.type === 'valid') {
      t.ok(encoding.decode(stringKeyMaybe(key.key)), 'valid key is now valid str')
    } else {
      t.equal(stringKeyMaybe(key.key), null, 'null key is still null')
    }
  })
  t.end()
})
