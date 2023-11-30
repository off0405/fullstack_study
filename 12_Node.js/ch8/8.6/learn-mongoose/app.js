const express = require('express')
const path = require('path')
const morgan = require('morgan')

const connect = require('./schemas/index')
const indexRouter = require('./routes')
const usersRouter = require('./routes/users')
const commentsRouter = require('./routes/comments')

const app = express()
app.set('port', process.env.PORT || 3003)
app.set('view engine', 'ejs') // view engine의 확장자 지정
connect(); // 몽고디비에 연결

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/comments', commentsRouter)

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없어용`); //req.method = get 혹은 post ... 
  error.status = 404;
  next(error)
})

app.use((err, req, res, next) => {
  console.error(err);
  // 템플릿 엔진 변수 생성
  // res.locals는 앱이 사용하는 템플릿 엔진의 종류에 상관 없이 전달됨
  // 이 객체에 담은 값들은 템플릿 엔진에서 마음껏 갖다 쓸 수 있다.
  // 템플릿에서는 '전역'이므로 앞에 아무것도 붙일 필요가 없음
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {} // 운영(배포) 버전에서는 에러 객체를 안보여주기 위해 
  res.status(err.status || 500) // err.status에 값이 있으면 그걸 보여주고 || 아니면 500 넣어줌
  res.render('error')
})




app.listen(app.get('port'), (req, res) => {
  console.log(app.get('port'), '번 포트에서 대기중');
})