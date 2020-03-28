const stream = require('stream');
const fs = require('fs');
const commandParse = require('./app/commanderParse');
const EncryptTransform = require('./app/encryptTransform');
const DecryptTransform = require('./app/decryptTransform');

function init() {
    commandParse.startParseCommandLine();
    let readStream;
    let writeStream;

    if (commandParse.parseCommandLine.input === '') {
        readStream = process.stdin;
    } else {
        readStream = fs.createReadStream(commandParse.parseCommandLine.input);
    }

    if (commandParse.parseCommandLine.output === '') {
        writeStream = process.stdout;
    } else {
        writeStream = fs.createWriteStream(commandParse.parseCommandLine.output, { flags: 'a' });
    }

    if (commandParse.parseCommandLine.action === 'encode') {
        stream.pipeline(
            readStream,
            new EncryptTransform,
            writeStream,
            err => {
                if (err) {
                    process.stderr.write('File not found, check path.');
                    process.exit(400);
                }
                else console.log('Finished encrypt');
            }
        )
    } else if (commandParse.parseCommandLine.action === 'decode') {
        stream.pipeline(
            readStream,
            new DecryptTransform,
            writeStream,
            err => {
                if (err) {
                    process.stderr.write('File not found, check path.');
                    process.exit(400);
                }
                else console.log('Finished decrypt');
            }
        )
    }


}

init();
