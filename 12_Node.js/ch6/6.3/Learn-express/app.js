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

// morgan
app.use(morgan('dev'));

// static: 동적인 변동 사항이 없는 정적 파일들 (예: css, js, image 등)
// 폴더를 서버에 등록해두면 폴더 안의 정적 파일들을 사용 가능하게
app.use('/', express.static(path.join(__dirname, 'public')))


// cookie-parser
app.use(cookieParser(process.env.COOKIE_SECRET))


// body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// express-session: 요청마다 개인의 저장 공간을 만들어주는 세션 관리용 미들웨어
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
  },
  name: 'cookie-cookie'
}))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

// 404 에러 처리
app.use((req, res, next) => {
  res.status(404).send('404 Not Found')
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

