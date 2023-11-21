const fs = require('fs').promises

// 파일 생성
// 인자값: 만들 파일의 경로와 파일명, 파일에 작성할 내용
// fs.writeFile('./writeme.txt', '글이 입력됩니당')
//   .then(() => {
//     return fs.readFile('./writeme.txt') // 파일을 만든 후 바로 읽어보기
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.toString());
//   })
//   .catch((err) => { console.error(err); })

async function fsWriteFile() {
  await fs.writeFile('./writeme.txt', '글이 입력됩니다다다')
  const data = await fs.readFile('./writeme.txt')
  console.log(data.toString());
}

fsWriteFile()