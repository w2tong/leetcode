/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let str = '';
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        if (i >= 0) sum += parseInt(a[i]);
        if (j >= 0) sum += parseInt(b[j])
        str = sum % 2 + str;
        carry = sum >> 1;
        i--;
        j--;
    }
    return str;
};