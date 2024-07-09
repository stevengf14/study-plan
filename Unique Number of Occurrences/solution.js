/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const occurrences = new Map();
    for (const num of arr) {
        occurrences.set(num, (occurrences.get(num) || 0) + 1);
    }

    const values = new Set();
    for (const value of occurrences.values()) {
        if (values.has(value))
            return false;
        values.add(value);
    }
    return true;
};
