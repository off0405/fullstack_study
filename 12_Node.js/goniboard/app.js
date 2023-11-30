const express = require('express')
const path = require('path')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const session = require('express-session')

// 기본적인 서버 구조 작성하기
// 1) dotenv 설정
dotenv.config();

// 라우터 가져오기
const indexRouter = require('./routes/index')
const postRouter = require('./routes/post.js')

// DB 연결 함수 가져오기
const { connect } = require('./database')
connect(); // 몽고DB에 연결


const app = express();

app.set('port', process.env.PORT || 8088)
app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public'))) // '/' 생략 가능
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
  },
  name: 'cookie-cookie'
}))


// 라우터를 미들웨어로 등록
app.use('/', indexRouter);
app.use('/post', postRouter);


app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없어용`);
  error.status = 404;
  next(error)
})

app.use((err, req, res, next) => {
  console.error(err);
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})



// 서버 연결
app.listen(app.get('port'), () => {
  console.log(`${app.get('port')} 번에서 익스프레스 서버 실행`);
})
