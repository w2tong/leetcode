/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const aCharCode = 'a'.charCodeAt(0);
    const letters = new Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        letters[magazine.charCodeAt(i) - aCharCode]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (--letters[ransomNote.charCodeAt(i) - aCharCode] < 0) return false
    }
    return true;
};