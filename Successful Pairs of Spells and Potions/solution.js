/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b); // Sort the potions array
    const result = [];

    for (let i = 0; i < spells.length; i++) {
        let spell = spells[i];
        let low = 0, high = potions.length - 1;

        // Binary search to find the minimum potion that forms a successful pair
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (spell * potions[mid] >= success) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        result.push(potions.length - low);
    }
    return result;
};
