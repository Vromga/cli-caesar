const stream = require('stream');
const decrypt = require('./decrypt');
const commandParse = require('./commanderParse');


class DecryptTransform extends stream.Transform {
    _transform(chunk, encoding, callback) {
        callback(null, Buffer.from(decrypt(chunk.toString('utf-8'), +commandParse.parseCommandLine.shift)));
    }
}

module.exports = DecryptTransform;