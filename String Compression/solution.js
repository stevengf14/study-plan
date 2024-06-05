/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let n = chars.length;
    if (n === 1) {
        return 1;
    }
    let last = chars[0];
    var string = last;
    let repeatedChars = 1;
    for (let i = 1; i < n; i++) {
        if (chars[i] === last) {
            repeatedChars++;
        } else {
            if (repeatedChars === 1) {
                string += chars[i];
            } else {
                string += repeatedChars;
                string += chars[i];
            }
            repeatedChars = 1;
            last = chars[i];
        }
        if (i == n - 1 && repeatedChars > 1) {
            string += repeatedChars;
        }
    }
    for (let i = 0; i < string.length; i++) {
        chars[i] = string.charAt(i);
    }
    return string.length;
};
