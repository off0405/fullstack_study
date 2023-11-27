const express = require('express');
const path = require('path');
const dotenv = require('dotenv')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

// dotenv: 다덴부~ 환경 변수(시스템에 따른 설정값이나 비밀키 등) 설정
// http://localhost:3001
// 별도의 파일로 관리하는 이유는 보안과 설정의 편의성 때문
// 1차 보안: 소스코드가 털리면 코드 안에 적어둔 비밀키나 서명 등이 같이 유출됨(하드코딩 지양)
// 2차 보안: .env는 github나 구글드라이브에 올리지 않는다!
dotenv.config(); // 주로 맨 위에 작성(그래야 밑에서 쓸 수 있으니까)


const app = express();

app.set('port', process.env.PORT || 3000);

// morgan: 요청과 응답을 기록하는 미들웨어
// 클라이언트에서 어떤 요청이 왔는지 서버에서 어떻게 응답했는지 정보가 서버에 기록됨
// GET / 304 4.968 ms -
// GET요청 / 주소(경로) 응답코드 응답에걸린시간 응답길이(바이트)
app.use(morgan('dev')); // 개발 시 사용
// app.use(morgan('combined')); // 배포 시 사용 - ip주소, 날짜/시간, 브라우저 정보 등 더 자세히 기록됨


// 🎃Static 미들웨어 (Express 제공)
// static 파일들을 제공하는 미들웨어다
// static: 동적인 변동 사항이 없는 정적 파일들 (예: css, js, image 등)
// 폴더를 서버에 등록해두면 폴더 안의 정적 파일들을 사용 가능~
// app.use('요청 경로', express.static('실제 경로'));
// 😁필수로 들어가는 설정입니다~
app.use('/', express.static(path.join(__dirname, 'public')))
// 예: localhost:3000/hello.css 로 요청이 들어오면 => 실제 위치는 learn-express/public/hello.css

// (참고) 미들웨어끼리 순서 중요(성능적인 문제)
// => 단순히 정적 리소스만 제공하면 되는데 뒤에 위치하면 불필요한 미들웨어들이 실행됨
// 예: 요청에 따라 static 미들웨어의 실행이 달라짐
// localhost:3000/about.png -> /public 폴더 안에 해당 파일이 있으면 제공하고 여기서 끝
// localhost:3000/about -> next()가 호출되어 다음 미들웨어 또는 /about 라우터까지 내려감

// cookie-parser: 쿠키 관련 조작들이 편해짐
// app.use(cookieParser([비밀키]))
// 서명(암호화)된 쿠키
// 브라우저에 저장된 쿠키를 해커들이 못쓰게끔 서명을 붙임 (근데 모든 쿠키를 서명 하지는 않음)
app.use(cookieParser(process.env.COOKIE_SECRET))

// body-parser: 옛날에는 body-parser를 많이 썼지만 요새는 express에 내장되어서 안씀..
// 요청 본문에 담겨오는 데이터가 알아서 파싱됨
// 😁아래 2개는 거의 필수로 들어가는 설정입니다~
app.use(express.json()); // 클라이언트에서 json 데이터를 보냈을 때 파싱해서 req.body에 넣어줌
app.use(express.urlencoded({ extended: true }))
// 클라이언트에서 FormData를 보냈을 때(form을 submit 할 때) 파싱해서 req.body에 넣어줌
// extended: 쿼리스트링을 어떻게 처리할지(true면 qs 패키지를, false면 querystring 내장 모듈을 사용)
// true를 추천, qs > querystring 보다 편의 및 강력한 기능 지원
// 다만 FormData로 파일을 보내는 경우 urlencoded()로 처리 못함 => 이 때는 multer 사용


app.get('/', (req, res) => {
  // 쿠키 사용하기
  // 이전 방식: 임의로 만든 parseCookies() 함수 사용해서 객체로 변환
  console.log(req.cookies); // 쿠키 문자열이 { mycookie: 'test' } 객체 형태로 알아서 파싱이 되어있음
  console.log(req.signedCookies); // 서명(암호화)된 쿠키

  // 쿠키 설정하기🍪
  // 이전 방식: 'Set-cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
  // 위 문자열 쓴 것을 메서드로 쉽게 사용
  // res.cookie(키, 값, [옵션]);
  res.cookie('name', 'hahahaha', {
    expires: new Date(Date.now() + 5 * 60 * 1000), // 5분 뒤 // 쿠키 만료 기한
    httpOnly: true, // JS로 쿠키 조작 못하게 막아줌
    path: '/', // ('/') = 모든 경로에서 쿠키를 사용할 수 있게끔!
    signed: true, // 서명(암호화) 옵션: 쿠키 뒤에 서명이 붙음
    // secure: true, // HTTPS일 경우에만 쿠키가 전송됨
  })


  console.log(req.cookies); // 쿠키 문자열이 { mycookie: 'test' } 객체 형태로 알아서 파싱이 되어있음

  // 쿠키 지우기
  // res.clearCookie(키, [옵션])
  // res.clearCookie('name');
  // res.clearCookie('name', 'goni', {
  //   expires: new Date(Date.now() + 5 * 60 * 1000),
  //   httpOnly: true, 
  //   path: '/',
  //   signed: true, 
  // })

  // req.body: 요청 본문에 담겨오는 데이터를 바로 쓸 수 있음
  console.log(req.body.name);
  console.log('----------------'); // 나중에 직접 테스트 해볼것

  res.sendFile(path.join(__dirname, '/index.html'))
})



app.post('/', (req, res) => {
  console.log(req.body);
})


// ajax
app.post('/', (req, res) => {
  console.log(req.body.username);
})

app.listen(app.get('port'), () => {
  console.log(`${app.get('port')} 번에서 익스프레스 서버 실행`);
})