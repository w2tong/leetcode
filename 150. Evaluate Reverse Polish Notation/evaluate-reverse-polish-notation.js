/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    for (let t of tokens) {
        if (!isNaN(t)) {
            stack.push(Number(t));
        }
        else {
            num2 = stack.pop();
            num1 = stack.pop();
            switch (t) {
                case '+':
                    stack.push(num1 + num2);
                    break;
                case '-':
                    stack.push(num1 - num2);
                    break;
                case '*':
                    stack.push(num1 * num2);
                    break;
                case '/':
                    stack.push(Math.trunc(num1 / num2));
                    break;
            }
        }
    }
    return stack[0];
};