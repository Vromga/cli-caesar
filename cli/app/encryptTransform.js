const stream = require('stream');
const encrypt = require('./encrypt');
const commandParse = require('./commanderParse');


class EncryptTransform extends stream.Transform {
    _transform(chunk, encoding, callback) {
        callback(null, Buffer.from(encrypt(chunk.toString('utf-8'), +commandParse.parseCommandLine.shift)));
    }
}

module.exports = EncryptTransform;