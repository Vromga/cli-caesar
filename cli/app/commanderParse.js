const { program } = require('commander');
const isNumeric = require('./isNumber');


program
    .option('-s, --shift <num>', 'a shift')
    .option('-i, --input <filename>', 'an input file')
    .option('-o, --output <filename>', 'an output file')
    .option('-a, --action <action>', 'an action encrypt/decode');

program.parse(process.argv);

const regexp = /\w*txt$/i;

const parseCommandLine = {
    action: '',
    shift: '',
    input: '',
    output: ''
};

function startParseCommandLine() {

    if (program.action) parseCommandLine.action = program.action;
    if (program.shift) parseCommandLine.shift = program.shift;
    if (program.output) parseCommandLine.output = program.output;
    if (program.input) parseCommandLine.input = program.input;

    if (parseCommandLine.action !== 'encode' && parseCommandLine.action !== 'decode') {
        process.stderr.write('Invalid query params. Missed --action.');
        process.exit(400);
    }
    if (!isNumeric(parseCommandLine.shift)) {
        process.stderr.write('Invalid query params. Missed or not number --shift.');
        process.exit(400);
    }

    if (!regexp.test(parseCommandLine.input) || !regexp.test(parseCommandLine.output)) {
        if (parseCommandLine.input === '' || parseCommandLine.output === '') return;
        process.stderr.write('Invalid file. Use *.txt format');
        process.exit(400);
    }

}
module.exports = { parseCommandLine, startParseCommandLine };