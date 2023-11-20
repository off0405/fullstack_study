// Node의 CommonJS 모듈 시스템

const odd = '홀수입니다.'
const even = '짝수입니다.'

// 선언한 변수들을 다른 파일에서 쓸 수 있게 모듈로 만들기
// module.exports는 파일 안에서 "단 한 번" 만 쓸 수 있음
// module.exports = odd; // 이렇게 쓰면 한 개만 내보낼 수 있다

// 여러 개를 내보내려면 객체를 moduel.exports에 대입
module.exports = {
  odd: odd,
  even
}

// 참고만 할 것 ↓
// exports.odd = odd;
// exports.even = even;
// 이렇게 쓰면 module 키워드 생략 가능
// 혼용은 하지 말아라~
// module.exports === exports === {} 초기값이 빈 객체