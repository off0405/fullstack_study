const express = require('express')
const path = require('path')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use((req, res, next) => {
  console.log('모든 요청에 실행하고 싶어요');
  next()
})

app.use('/about', (req, res, next) => {
  console.log('1 요청에 실행하고 싶어요')
  next();
}, (req, res, next) => {
  console.log('2 요청에 실행하고 싶어요')
  next();
}, (req, res, next) => {
  console.log('3 요청에 실행하고 싶어요')
  next();
})


// 에러 발생 next(error)로 에러 미들웨어로 보내주기
app.use((req, res, next) => {
  try {
    next()
  } catch (error) {
    next(error)
  }
})


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})


app.get('/about', (req, res) => {
  res.send('about 페이지 입니다')
})


app.post('/login', (req, res) => {
  // console.log('모든 요청에 실행하고 싶어요');
  // 로그인 처리 코드
  res.send('login 성공')
})


// 라우트 매개변수 URL parameter
app.get('/category/:name', (req, res) => {
  res.send(`hello ${req.params.name}`)
})


// 와일드카드
// app.get('*', (req, res) => {
//   res.send('모든 GET 요청에 대해 처리합니다');
// });


//에러 처리 500
app.use((err, req, res, next) => {
  // console.log(asdf); // 에러 테스트용! 테스트 끝나면 주석 처리 꼭해주기
  res.status(500).send('<p>에러가 나서 보여주는 내용용</p>')
})

//에러 처리 404
app.use((req, res, next) => {
  res.status(404).send('404 못찾겠어요~')
})



// 서버 연결
app.listen(app.get('port'), () => {
  console.log('익스프레스 서버 실행');
})