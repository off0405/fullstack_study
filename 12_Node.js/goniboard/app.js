const express = require('express')
const path = require('path')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

// 기본적인 서버 구조 작성하기
// 1) dotenv 설정
dotenv.config();

// 라우터 가져오기
const indexRouter = require('./routes/index')
const postRouter = require('./routes/post.js')
const userRouter = require('./routes/user.js')

// DB 연결 함수 가져오기
const { connect } = require('./database')
// ./passport/index.js 가져오기
const passportConfig = require('./passport')


const app = express();
passportConfig(); // 패스포트 설정 실행
app.set('port', process.env.PORT || 8088)
app.set('view engine', 'ejs')
connect(); // 몽고DB에 연결

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
}))

// passport 미들웨어 설정
app.use(passport.initialize()) // 요청 객체에 passport 설정을 심음(req.isAuthenticated, req.login, req.logout 등)
app.use(passport.session()) // req.session 객체에 passport 정보를 저장
// req.session 객체는 express-session에서 생성하는 것이므로 passport 미들웨어는 express-session 미들웨어보다 뒤에 연결해야 한다...

// res.locals.user 속성에 req.user 정보 넣기를 미들웨어로 등록
// => 템플릿 엔진에서 user 객체를 통해 로그인한 사용자 정보에 접근할 수 있음
app.use((req, res, next) => {
  res.locals.user = req.user;
  next()
})





// 라우터를 미들웨어로 등록
app.use('/', indexRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);


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


// 이미지 업로드 기능 만들기
// 이미지 첨부를 위한 file input을 이용하여 서버로 이미지를 전송하면 서버 콤퓨타 하드에 저장
// -> 서버 컴퓨터의 용량에 문제가 생기거나 서버를 배포하는 곳에 따라 하드 사용이 어려울 수 있음
// -> 보통 AWS S3 같은 파일 저장용 클라우드 서비스를 이용
// 클라우드 서비스: AWS, GCP, MS Azure
// 참고로 AWS 첫 가입시 카드 등록까지 마치면 1년 동안 프리 티어


// 1) 글 작성 페이지에 file input 하나 만듦
// 2) 서버는 전송된 이미지를 S3에 업로드
// npm install multer multer-s3 @aws-sdk/client-s3
// multer: 전송된 파일을 다룰 수 있도록 도와줌. multipart/form-data를 파싱(분석)해줌
// multer-s3: 파일을 S3에 업로드 할 수 있도록 도와줌
// @aws-sdk/clinet-s3: Node.js 환경에서 AWS S3를 쓸 때 필요

// 3) 업로드 완료 시 생성되는 URL을 DB에 글과 함께 저장할거야
// 4) 나중에 이미지 필요할 때 DB에 저장한 URL 꺼내쓰기