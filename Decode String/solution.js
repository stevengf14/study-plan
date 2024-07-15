/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let countStack = [];
    let stringStack = [];
    let currentString = '';
    let k = 0;

    for (let ch of s) {
        if (!isNaN(ch)) {
            k = k * 10 + Number(ch);
        } else if (ch === '[') {
            countStack.push(k);
            stringStack.push(currentString);
            currentString = '';
            k = 0;
        } else if (ch === ']') {
            let decodedString = stringStack.pop();
            let repeatTimes = countStack.pop();
            decodedString += currentString.repeat(repeatTimes);
            currentString = decodedString;
        } else {
            currentString += ch;
        }
    }
    return currentString;
};
