const fs = require('fs').promises

// 파일 생성
// 인자값: 만들 파일의 경로와 파일명, 파일에 작성할 내용
fs.writeFile('./writeme.txt', '글이 입력됩니당');