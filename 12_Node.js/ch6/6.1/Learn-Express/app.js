// express로 서버 만들기 연습

const express = require('express'); // express 내부적으로 http 모듈을 쓰고 있음
const path = require('path');

const app = express(); // express로부터 app을 하나 가져옴
// app.set(키, 값): 서버에 전역 속성 설정
app.set('port', process.env.PORT || 3000) // 서버가 실행될 포트 지정(환경변수 없으면 기본값 3000으로)

// 미들웨어
// app.use(미들웨어)로 미들웨어 장착, 안에 들어가는 콜백 함수가 미들웨어
// 보통 직접 만들기보다는 필요한 미들웨어 라이브러리를 받아서 사용
app.use((req, res, next) => {
  // 서버로 요청을 보낼 때마다 실행됨
  console.log('모든 요청에 실행하고 싶어요');
  next(); // 다음 실행 흐름(다음 미들웨어 또는 라우터)으로 넘기는 역할(팬딩상태 해결)
})

// 특정 요청에서만 실행되는 미들웨어
app.use('/about', (req, res, next) => {
  console.log('/about 요청에서만 실행');
  next(); // 다음 미들웨어 또는 특정 라우터(app.get('/about'))로 넘어감
});

// 미들웨어 여러 개 사용하기
app.use((req, res, next) => {
  console.log('1 요청에 실행하고 싶어요')
  next();
}, (req, res, next) => {
  console.log('2 요청에 실행하고 싶어요')
  next();
}, (req, res, next) => {
  console.log('3 요청에 실행하고 싶어요')
  next();
})

// 라우팅 하기(라우터 만들기)
// app.get('요청주소', 콜백): '주소'로 GET 요청이 올 때 콜백 함수에 어떤 동작을 할 지 지정
app.get('/', (req, res) => { // GET 요청이고 url이 '/' 일 때
  // 공통 로직 존재 시 중복 코드 발생 = 미들웨어 MiddleWare
  // console.log('모든 요청에 실행하고 싶어요');

  // 응답 내려주기
  // res.send('<h1>hello express</h1>'); // res.writeHead(200, {}) + res.end()를 합친 것 !

  // 🤍 html 파일 서빙하기
  res.sendFile(path.join(__dirname, '/index.html')) // 알아서 fs 모듈로 html 파일을 읽어서 부름( fs.readfile 어쪼고 저쪼고 )
});

// Quiz. 라우팅
// 누가 /about으로 GET 요청을 하면 'about 페이지 입니다'라고 보여주기
// 누가 /login 으로 POST 요청을 하면 'login 성공'라고 응답 내려주기

app.get('/about', (req, res) => {
  // console.log('모든 요청에 실행하고 싶어요');
  res.send('about 페이지 입니다')
})

app.post('/login', (req, res) => {
  // console.log('모든 요청에 실행하고 싶어요');
  // 로그인 처리 코드
  res.send('login 성공')
})


// 라우트 매개변수 (= URL Parameter = route parameter)
// req.params





// 서버 연결
// app.listen(포트번호, 콜백): 몇 번 포트에서 서버를 실행할지 지정. (콜백: 서버가 연결되면 실행될 함수)
// app.listen(3000'), () => { // 하드코딩 방식 지양
app.listen(app.get('port'), () => {
  console.log('익스프레스 서버 실행');
})
// 🥦서버 실행법 3가지
// 1) node app.js
// 2) nodemon app
// 3) npm start (package.json/"script"에 매크로처럼 추가해주기)