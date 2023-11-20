// this: 최상위 스코프(최상위 객체)
// 브라우저에서는 this는 window 객체임
// Node에서는 module.exports를 가리킴!
console.log(this);
console.log(this === module.exports);
console.log(this === exports);
// console.log(this === 132);

function whatIsThis() {
  console.log('function', this === exports, this === global);
  // global: 전역 객체
  console.log(global);
}

whatIsThis();