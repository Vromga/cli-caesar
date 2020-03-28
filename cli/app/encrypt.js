const getLoopLetters = require('./loopLetters');
const ASCII_CODE_LETTER = require('./constant');

function encrypt(str, rot) {
    const arrFromStr = str.split('');
    const encryptedArr = [];
    arrFromStr.forEach(l => {
        const codeChar = l.charCodeAt(0);
        if (codeChar <= ASCII_CODE_LETTER.module.Z_CODE_LETTER && codeChar >= ASCII_CODE_LETTER.module.A_CODE_LETTER) {
            if (codeChar + rot <= ASCII_CODE_LETTER.module.Z_CODE_LETTER) {
                encryptedArr.push(String.fromCharCode(codeChar + rot));
            } else {
                encryptedArr.push(String.fromCharCode(getLoopLetters.module(codeChar, rot, 'upEncrypt')));
            }
        } else if (codeChar <= ASCII_CODE_LETTER.module.z_CODE_LETTER && codeChar >= ASCII_CODE_LETTER.module.a_CODE_LETTER) {
            if (codeChar + rot <= ASCII_CODE_LETTER.module.z_CODE_LETTER) {
                encryptedArr.push(String.fromCharCode(codeChar + rot));
            } else {
                encryptedArr.push(String.fromCharCode(getLoopLetters.module(codeChar, rot, 'lowEncrypt')));
            }
        } else {
            encryptedArr.push(l)
        }
    });
    return encryptedArr.join('');
}

module.exports = encrypt;
