// 🤍fs 모듈: 파일 시스템에 접근하는 모듈
// 브라우저에서는 접근이 안되는데 노드에서는 가능 
// 파일 / 폴더 생성, 삭제, 읽기, 쓰기 가능

// 콜백 방식 대신 프로미스 방식으로 사용 가능(fs 모듈 자체적으로 지원함)
const fs = require('fs').promises;

// 파일 읽기
// 인자값: 파일 경로
fs.readFile('./readme.txt')
  .then((data) => {
    console.log(data); // 바이너리 데이터(2진법)가 출력됨 - 컴퓨터가 다룰 수 있는 데이터(0 또는 1)
    console.log(data.toString());
  })
  .catch((err) => { console.error(err); })

// const a = async () => {
//   try {
//     const data = await fs.readFile('./readme.txt')
//     console.log(data.toString());
//   } catch (error) {
//     console.error(error);
//   }
// }

a();


// 🤍toString() 함수 : 사람이 읽을 수 있게 바꿈


