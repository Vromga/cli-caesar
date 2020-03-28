const getLoopLetters = require('./loopLetters');
const ASCII_CODE_LETTER = require('./constant');

function decrypt(str, rot) {
    const arrFromStr = str.split('');
    const decryptedArr = [];
    arrFromStr.forEach(l => {
        const codeChar = l.charCodeAt(0);
        if (codeChar <= ASCII_CODE_LETTER.module.Z_CODE_LETTER && codeChar >= ASCII_CODE_LETTER.module.A_CODE_LETTER) {
            if (codeChar - rot >= ASCII_CODE_LETTER.module.A_CODE_LETTER) {
                decryptedArr.push(String.fromCharCode(codeChar - rot));
            } else {
                decryptedArr.push(String.fromCharCode(getLoopLetters.module(codeChar, rot, 'upDecrypt')));
            }
        } else if (codeChar <= ASCII_CODE_LETTER.module.z_CODE_LETTER && codeChar >= ASCII_CODE_LETTER.module.a_CODE_LETTER) {
            if (codeChar - rot >= ASCII_CODE_LETTER.module.a_CODE_LETTER) {
                decryptedArr.push(String.fromCharCode(codeChar - rot));
            } else {
                decryptedArr.push(String.fromCharCode(getLoopLetters.module(codeChar, rot, 'lowDecrypt')));
            }
        } else {
            decryptedArr.push(l)
        }
    });
    return decryptedArr.join('');
}

module.exports = decrypt;
