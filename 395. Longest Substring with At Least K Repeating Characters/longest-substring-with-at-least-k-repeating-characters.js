/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const aCharCode = 'a'.charCodeAt(0);
var longestSubstring = function (s, k) {
    let max = 0;
    for (let numUniqueTarget = 1; numUniqueTarget <= 26; numUniqueTarget++) {
        max = Math.max(max, longestSubstringWithNUniqueChars(s, k, numUniqueTarget));
    }
    return max
};

var longestSubstringWithNUniqueChars = function (s, k, numUniqueTarget) {
    const map = new Array(26).fill(0);
    let numUnique = 0; // counter 1
    let numNoLessThanK = 0; // counter 2
    let begin = 0, end = 0;
    let max = 0;

    while (end < s.length) {
        if (map[s.charCodeAt(end) - aCharCode]++ == 0) numUnique++; // increment map[c] after this statement
        if (map[s.charCodeAt(end++) - aCharCode] == k) numNoLessThanK++; // inc end after this statement

        while (numUnique > numUniqueTarget) {
            if (map[s.charCodeAt(begin) - aCharCode]-- == k) numNoLessThanK--; // decrement map[c] after this statement
            if (map[s.charCodeAt(begin++) - aCharCode] == 0) numUnique--; // inc begin after this statement
        }

        // if we found a string where the number of unique chars equals our target
        // and all those chars are repeated at least K times then update max
        if (numUnique == numUniqueTarget && numUnique == numNoLessThanK)
            max = Math.max(end - begin, max);
    }
    console.log(numUniqueTarget);
    console.log(map);
    return max;
}