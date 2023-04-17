/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    for (const p of s) {
        if (p === '(' || p === '{' || p === '[') {
            stack.push(p);
        }
        else {
            const open = stack.pop();
            if (
                p === ')' && open !== '(' ||
                p === '}' && open !== '{' ||
                p === ']' && open !== '['
            ) return false;
        }
    }
    return stack.length === 0;
};