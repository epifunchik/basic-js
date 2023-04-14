const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
let num = n.toString().split('');
let result = [];
result[0] = (num.slice(0, num.length - 1)).join('')
for (let i = 1; i < num.length; i++){
    result[i] = (num.slice(0, i - 1) + num.slice(i, num.length)).replaceAll(',', '')
}
return Number(result.sort((a, b) => b - a).splice(0, 1)[0])
}


module.exports = {
  deleteDigit
};
