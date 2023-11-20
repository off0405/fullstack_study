// const value = require('./var');
// console.log(value);

const { odd, even } = require('./var') // 구조 분해 할당
// console.log(odd);
// console.log(even);

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면...? 0이 아닌 숫자면
    return odd
  }
  return even;
}

module.exports = checkOddOrEven;