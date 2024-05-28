/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const words = s.trim().split(" ");
    words.reverse();

    let reverseWords = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            reverseWords += words[i].trim() + " ";
        }

    }

    return reverseWords.trim();
};
