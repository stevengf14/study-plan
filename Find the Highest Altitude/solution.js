/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let max = 0;
    let distance = 0;
    let n = gain.length;

    for (let i = 0; i < n; i++) {
        distance += gain[i];
        if (distance > max)
            max = distance;
    }

    return max;
};
