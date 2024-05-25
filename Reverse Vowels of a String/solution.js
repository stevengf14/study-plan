/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let foundVowels = [];
    [...s].forEach(c => {
        if (vowels.includes(c)) {
            foundVowels.push(c);
        }
    })
    foundVowels.reverse();

    let result = s.split("");
    let vowelIndex=0;
    for (let i=0; i < result.length; i++) {
        if (foundVowels.includes(result[i])) {
            result[i] = foundVowels[vowelIndex];
            vowelIndex++;
        }
    };

    return result.join("");
};
