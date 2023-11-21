//🤍 path 모듈: 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈
// 운영체제별로 경로 구분자가 달라도 쉽게 처리 가능
const path = require('path');

const string = __filename // 현재 파일 경로

console.log(path.sep); // 경로 구분자 (역슬래쉬\)
console.log(path.delimiter); // 환경 변수 구분자 (세미콜론;) 

console.log('-------------------------------------------------------');
console.log('path.dirname()', path.dirname(string)); // 폴더 명 추출
console.log('path.extname()', path.extname(string)); // 확장자 추출
console.log('path.basename()', path.basename(string)); // 파일명 추출
console.log('path.basename - extname()', path.basename(string, path.extname(string))); // 파일명에서 확장자 빼는 방법


console.log('-------------------------------------------------------');
console.log('path.parse():', path.parse(string)); // 파일 경로를 각각의 요소들로 분해해서 객체로 나타냄
console.log('path.format():', path.format({ // 객체를 파일 경로로 다시 합치기
  dir: 'C:\\users\\goni',
  name: 'path',
  ext: '.js'
}));

console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\\path.js')); // 구분자를 실수로 잘못 적어도 경로를 os에 맞춰 정상적으로 만들어줌

console.log('-------------------------------------------------------');
console.log('path.isAbsolute(C: \\):', path.isAbsolute('C:\\')); // 절대 경로인지 판별
console.log('path.isAbsolute(./ home):', path.isAbsolute('./home')); // 절대 경로인지 판별


console.log('-------------------------------------------------------');
console.log(__dirname); // 현재 폴더(directory) 경로 
console.log(__dirname + '/test.js');
console.log(path.join(__dirname, '/text.js')); // /test.js의 절대경로를 무시하고 상대경로로 처리(자주 사용)
console.log(path.resolve(__dirname, '/text.js')); // /test.js를 절대경로로 처리 ('/'가 있으면 앞에 경로 무시 !)

console.log('-------------------------------------------------------');

console.log(path.relative('C:\\users\\goni\\path.js', 'C:\\')); // 첫번째 인자에서 두번째 인자까지의 사대적 위치 알려줌