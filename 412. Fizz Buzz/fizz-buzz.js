/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i.toString())
    }
    for (let i = 3; i <= n; i += 3) {
        arr[i - 1] = 'Fizz';
    }
    for (let i = 5; i <= n; i += 5) {
        arr[i - 1] = 'Buzz';
    }
    for (let i = 15; i <= n; i += 15) {
        arr[i - 1] = 'FizzBuzz';
    }
    return arr;
};