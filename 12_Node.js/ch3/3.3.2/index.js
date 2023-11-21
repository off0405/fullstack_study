const { odd, even } = require('./var') // 구조 분해 할당 시 속성명, 변수명 일치시켜야
const checkNumber = require('./func') // 변수 명은 내 마음대로 지을 수 있음


function checkStringOddorEven(string) {
  if (string.length % 2) { // 홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(10));

console.log(checkStringOddorEven('가나다'));