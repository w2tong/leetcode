/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// Solution 1 using KMP algorithm
var strStr = function (haystack, needle) {
    const lps = createLPS(needle);
    let i = 0;
    let j = 0;
    while (i <= haystack.length) {
        if (j === needle.length) return i - j;
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        }
        else if (j !== 0) {
            j = lps[j - 1];
        }
        else {
            i++;
        }
    }
    return -1;
};

var createLPS = function (needle) {
    let i = 1;
    let len = 0;
    const lps = new Array(needle.length).fill(0);
    while (i < needle.length) {
        if (needle[i] === needle[len]) {
            len++;
            lps[i++] = len;
        }
        else if (len > 0) len = lps[len - 1];
        else lps[i++] = len;
    }
    return lps;
}

// Solution 2 using brute force
var strStr2 = function (haystack, needle) {
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};