// 🤍util 모듈: 각종 편의 기능을 모아둔 모듈
const util = require('util');
const crypto = require('crypto');

// 라이브러리를 만들었을 때
// 내가 만든 함수에 문제가 있거나 더 이상 쓰지 않는다고 기존 코드를 지우면 안됨!
// 이미 쓰고 있는 사람들이 있기에 문제 발생
// 삭제 대신 함수가 deprecated 처리되었음을 알려줌
// 충분히 시간이 흐르고 더이상 사람들이 쓰지 않을 때쯤 라이브러리 버전을 올리면서 삭제
const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);

// 🤍프로미스 패턴으로 점점 바뀌는 추세이지만 여전히 콜백 패턴으로 남아있는 함수들도 많음
// 이 때 🤍promisify로 콜백 패턴을 프로미스 패턴으로 바꿔줄 수 있음
// randomBytes(바이트 수, 콜백): 암호화된 난수 데이터를 생성
crypto.randomBytes(64, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('base64'));
});

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString('base64'));
  })
  .catch((err) => {
    console.error(err);
  })

// 프로미스 바꿨으니 async/await 사용도 가능
const asyncss = async randomBytesPromise => {
  try {
    console.log(buf.toString('base64'));
  } catch (error) {
    console.error(error);
  }
}
asyncss();