/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let n = s.length;
    if (n == 0)
        return true;
    let pointer = new Array(n);

    let index = 0;
    for (let i = 0; i < t.length; i++) {
        if (t.charAt(i) == s.charAt(index)) {
            pointer[index] = true;
            index++;
        }
        if (index >= n) break;
    }

    for (let b of pointer) {
        if (!b) {
            return false;
        }
    }
    return true;
}
