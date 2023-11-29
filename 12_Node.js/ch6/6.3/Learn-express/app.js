const express = require('express')
const path = require('path')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const session = require('express-session')

dotenv.config();

// 라우터 가져오기
const indexRouter = require('./routes') // indexRouter 가져오기(/index는 생략 가능)
const userRouter = require('./routes/user') // userRouter
const shopRouter = require('./routes/shop')
const subRouter = require('./routes/board/sub')

const app = express();

// 초기 세팅
app.set('port', process.env.PORT || 3002)

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



// 라우터 분리하기 
// 개발을 하다보면 app.get(),  app.post() 등이 계속 늘어나는데
// 이걸 app.js같은 하나의 파일에 계속 쓰다보면 코드가 길어지고 복잡해짐. (=> 코드 수정 및 유지보수에 어려움)
// 라우터(API)들을 다른 파일로 추출하는 것이 좋다.
// 1) route 폴더 생성
// 2) '/', '/user'로 들어오는 요청을 모아놓을 파일 생성
// 3) router 설정 -> 라우터(API) 작성(이 때 app을 전부 router로 변경)
// 4) router 내보내기 (module.exports) -> app.js에서 가져오기(require)



// GET 라우터
// app.get('/', (req, res) => {
//   res.send('hihihihi')
// })

// 분리한 라우터들을 미들웨어로 등록
app.use('/', indexRouter); // '/'로 요청이 들어오면 indexRouter로 
app.use('/user', userRouter); // '/user'로 요청이 들어오면 userRouter로 
app.use('/shop', shopRouter)
app.use('/board/sub', subRouter)

// Quiz2: 아래 라우터(API)들을 분리해보기(다른 파일로 추출)
// app.get('/shop/shirts', (req, res) => {
//   res.send('셔츠 판매 페이지');
// });

// app.get('/shop/pants', (req, res) => {
//   res.send('바지 판매 페이지');
// });

// app.get('/board/sub/notice', (req, res) => {
//   res.send('공지사항 게시판');
// });
// app.get('/board/sub/qna', (req, res) => {
//   res.send('문의 게시판');
// });




app.use((req, res, next) => { // 404 에러 처리
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

