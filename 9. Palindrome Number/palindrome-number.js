/**
 * @param {number} x
 * @return {boolean}
 */

// Without coverting x to string;
var isPalindrome = function (x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
    let num = x;
    let reverse = 0;
    while (num > reverse) {
        reverse = reverse * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return num === reverse || num === Math.floor(reverse / 10);
};

// With converting x to string
var isPalindrome2 = function (x) {
    const str = x.toString();
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left++] !== str[right--]) return false;
    }
    return true;
};