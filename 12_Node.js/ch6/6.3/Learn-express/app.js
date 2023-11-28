const express = require('express')
const path = require('path')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const session = require('express-session')

dotenv.config();

const app = express();

// 초기 세팅
app.set('port', process.env.PORT || 3000)

app.use(morgan('dev')); // morgan
app.use('/', express.static(path.join(__dirname, 'public'))) // static: 폴더를 서버에 등록해두면 폴더 안의 정적 파일들을 사용 가능하게
app.use(cookieParser(process.env.COOKIE_SECRET)) // cookie-parser
app.use(express.json()) // body-parser
app.use(express.urlencoded({ extended: true }))
app.use(session({ // express-session: 요청마다 개인의 저장 공간을 만들어주는 세션 관리용 미들웨어
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
  },
  name: 'cookie-cookie'
}))
app.use((req, res, next) => { // 404 에러 처리
  res.status(404).send('404 Not Found')
})


// 라우터 분리하기 
// 개발을 하다보면 app.get(),  app.post() 등이 계속 늘어나는데
// 이걸 app.js같은 하나의 파일에 계속 쓰다보면 코드가 길어지고 복잡해짐. (=> 코드 수정 및 유지보수에 어려움)
// 라우터(API)들을 다른 파일로 추출하는 것이 좋다.
// 1) route 폴더 생성
// 2) '/', '/user'로 들어오는 요청을 모아놓을 파일 생성




// GET 라우터
app.get('/', (req, res) => {
  res.send('hihihihi')
})


// 에러 처리
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('errrrrror')
})


// 서버 연결
app.listen(app.get('port'), () => {
  console.log(`${app.get('port')} 번에서 익스프레스 서버 실행`);
})

