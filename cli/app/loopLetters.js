const ASCII_CODE_LETTER = require('./constant');

function getLoopLetters(code, rot, flag) {
    let codeLetter;
    if (flag === 'upEncrypt') {
        codeLetter = (ASCII_CODE_LETTER.module.A_CODE_LETTER - ASCII_CODE_LETTER.module.COEFFICIENT) + (rot - (ASCII_CODE_LETTER.module.Z_CODE_LETTER - code));
    } else if (flag === 'lowEncrypt') {
        codeLetter = (ASCII_CODE_LETTER.module.a_CODE_LETTER - ASCII_CODE_LETTER.module.COEFFICIENT) + (rot - (ASCII_CODE_LETTER.module.z_CODE_LETTER - code));
    } else if (flag === 'upDecrypt') {
        codeLetter = (ASCII_CODE_LETTER.module.Z_CODE_LETTER + ASCII_CODE_LETTER.module.COEFFICIENT) - (ASCII_CODE_LETTER.module.A_CODE_LETTER - (code - rot));
    } else if (flag === 'lowDecrypt') {
        codeLetter = (ASCII_CODE_LETTER.module.z_CODE_LETTER + ASCII_CODE_LETTER.module.COEFFICIENT) - (ASCII_CODE_LETTER.module.a_CODE_LETTER - (code - rot));
    }
    return codeLetter;
}

exports.module = getLoopLetters;
