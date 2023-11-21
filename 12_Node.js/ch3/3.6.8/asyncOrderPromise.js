const fs = require('fs').promises

console.log('시작');

// fs.readFile('./readme.txt')
//   .then((data) => {
//     console.log('1번', data.toString());
//     return fs.readFile('./readme.txt')
//   })
//   .then((data) => {
//     console.log('2번', data.toString());
//     return fs.readFile('./readme.txt')
//   })
//   .then((data) => {
//     console.log('3번', data.toString());
//     return fs.readFile('./readme.txt')
//   })
//   .then((data) => {
//     console.log('4번', data.toString());
//     return fs.readFile('./readme.txt')
//   })

//   .catch(err => console.error(err))



console.log('끝');

// 프로미스 사용으로 콜백 지옥 해결

// Q. async / await로 리팩터링
// const main = fs.readFile('./readme.txt')

const main = async () => {
  try {
    let data = await fs.readFile('./readme.txt')
    console.log('1번', data.toString());

    data = await fs.readFile('./readme.txt')
    console.log('2번', data.toString());

    data = await fs.readFile('./readme.txt')
    console.log('3번', data.toString());

    data = await fs.readFile('./readme.txt')
    console.log('4번', data.toString());
  } catch (error) {
    console.error(error);
  }
}

main();


// 🤍 비동기 메소드로 순서를 유지하는 방식이 동시성도 살리고 순서도 지키는 좋은 방법
