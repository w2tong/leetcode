/**
 * @param {string} s
 * @return {boolean}
 */
function isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
};

var isPalindrome = function (s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (!isAlphaNumeric(s[left])) {
            left++;
        }
        else if (!isAlphaNumeric(s[right])) {
            right--;
        }
        else {
            if (s[left++] !== s[right--]) {
                return false;
            }
        }
    }
    return true;
};