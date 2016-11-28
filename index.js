var encoding = require('dat-encoding')

module.exports = function (key) {
  return key
    ? Buffer.isBuffer(key)
      ? encoding.encode(key)
      : encoding.encode(encoding.decode(key)) // throws for bad string keys
    : null
}
