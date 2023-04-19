/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function (s) {
    const maxInt = 2147483648;
    // Trim spaces and get sign
    s = s.trim();
    let negative = false;
    if (s[0] === '-') {
        s = s.slice(1);
        negative = true;
    }
    else if (s[0] === '+') s = s.slice(1);

    // Parse int
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i]) || s[i] === ' ') break;
        num = num * 10 + Number(s[i]);
        // Return if larger than 32 bit int
        if (num >= maxInt) {
            if (negative) return -maxInt;
            return maxInt - 1;
        }
    }
    if (negative) return -num;
    return num;
};