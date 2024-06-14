/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let max = 0;
    let current = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s.charAt(i))) {
            current++;
        }
    }
    max = current;
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s.charAt(i))) {
            current++;
        }
        if (vowels.has(s.charAt(i - k))) {
            current--;
        }
        max = Math.max(current, max);
    }
    return max;
};
