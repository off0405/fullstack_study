const express = require('express')
const { ObjectId } = require('mongodb')

const { client } = require('../database')
const db = client.db('board');


const router = express.Router()

// 글 목록 기능 기능만들기
// GET /post 라우터
router.get('/', async (req, res) => {
  const posts = await db.collection('post').find({}).toArray(); // 컬렉션의 모든 document를 출력하는 법 !
  console.log(posts);

  // 글 목록 페이지 만들어서 데이터 뿌리기   웹페이지에 서버(DB) 데이터 꽂아 넣기 => 템플릿 엔진 사용
  // res.render('list')

  // 서버 데이터를 ejs 파일에 넣으려면
  // 1) ejs 파일로 데이터 전달
  // 2) ejs 파일 안에서 <%= 데이터%>
  // 3) ejs 문법으로 HTML 안에서도 JS 사용하려면 <% 자바스크립트 코드 %>
  res.render('list', { posts })
})


// 글 작성 기능 만들기
// 사용자가 작성한 글을 DB에 저장해주기
// 1) 글 작성 페이지에서 작성한 내용을 서버로 전송
// 2) 서버는 전달받은 내용을 검사(유효성 검사)
// 프론트와 더불어 이중 체크 해주면 좋음
// => 프론트엔드 코드 및 데이터는 위조가 가능하기 때문
// => 또는 POSTMAN 같은 툴을 써서 요청을 보내면 프론트의 유효성 검사를 안거침
// 3) 이상 없으면 DB에 저장

// GET /post/write 라우터
router.get('/write', (req, res) => {
  res.render('write')
})


// POST / post / write 라우터
router.post('/write', async (req, res, next) => {
  console.log(req.body); // 클라이언트가 보낸 데이터 -> 요청 본문에 담김 -> body-parser가 분석해서 req.body에 객체로 저장

  // DB 예외 처리
  try {
    const title = req.body.title // input의 name 속성
    const content = req.body.content
    // 유효성 검사 추가하기
    // 제목이 비어있으면 저장 안함
    if (!title) {
      res.json({
        flag: false,
        message: '제목을 입력하세요'
      })
    } else {
      // Quiz. DB에 저장하기
      await db.collection('post').insertOne({ title, content })
      // res.redirect('/post'); // 동기식 요청이면 다른 페이지로 이동

      // 비동기식Ajax 요청이면 성공 데이터와 함께 응답
      // 응답으로 redirect와 render는 사용 안하는게 좋음
      res.json({
        flag: true,
        message: '등록 성공'
      })

    }
  } catch (err) {
    // 예외 처리는 정답이 없음. 회사/팀의 룰 또는 기획 의도에 따라 달라짐
    err.status = 500;
    next(err)
  }
})

// 글 상세보기 만들기
// /post/글id 입력하면 해당 글의 상세 페이지를 보여줌
// 1) /post/글id 요청 보내기
// 2) { _id: 글id } 조건으로 글을 DB에서 찾아서
// 3) 해당 글을 ejs 파일에 꽂아서 보내줌

router.get('/:id', async (req, res, next) => {
  // res.render('detail');;;;;;;;;;;;;;;;;;;;;;;;

  // DB에서 글 가져오기
  // 테스트
  // const post = await db.collection('post').findOne({ _id: '656837893a18065a3d472ae2' })
  // _id에 문자열 쓰는건 몽구스에서만 가능
  // const post = await db.collection('post').findOne({ _id: new ObjectId('656837893a18065a3d472ae2') }) // objectId 객체로 만듦

  // 예외 처리하기
  // 1) url 잘못 입력 시
  // 2) 데이터를 못찾을 시 (잘못된 id) => null을 반환

  try {
    // 실제: 라우트 매개변수에 입력한 값
    const post = await db.collection('post').findOne({ _id: new ObjectId(req.params.id) }) // objectId 객체로 만듦
    console.log(post)

    // 2)번에 대한 예외 처리
    if (!post) {
      const error = new Error('있을게 없다')
      error.status = 404;
      next(error)
    }

    // Quiz. 데이터 꽂아서 보내고 바인딩하기
    res.render('detail', { post })

  } catch (err) { // 1)번에 대한 예외 처리
    err.message = '되돌아가라.'
    err.status = 400; // 응답코드 400번대는 클라이언트 에러
    // 400 : 유저의 잘못된 문법으로 서버가 요청을 이해할 수 없을 때
    next(err)
  }
})

// 글 수정 기능
// 1) 수정 버튼 누르면 수정 페이지로
// 2) 수정 페이지에는 기존 글이 채워져있음
// 3) 전송 누르면 입력한 내용으로 DB 글 수정
// a, form 태그 사용 시 단점: 동기식이라 새로고침 발생 => 비동기식 Ajax 방식 사용해보기
router.get('/edit/:id', async (req, res, next) => {
  // DB에서 글 가져오기
  try {
    const post = await db.collection('post').findOne({ _id: new ObjectId(req.params.id) }) // objectId 객체로 만듦
    console.log(post)

    if (!post) {
      const error = new Error('있을게 없다')
      error.status = 404;
      next(error)
    }

    res.render('edit', { post })

  } catch (err) {
    err.message = '되돌아가라.'
    err.status = 400;
    next(err)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const title = req.body.title
    const content = req.body.content

    // 어떤 document를 찾아서, 어떤 내용으로 수정할지 인자값 2개 전달
    await db.collection('post').updateOne({
      _id: new ObjectId(req.params.id)
    }, {
      $set: { title, content }
    })

    res.json({
      flag: true,
      message: '수정 성공'
    })
  } catch (err) {
    console.error(err);

    // 보통 CSR 방식으로 개발 시 응답으로 json 데이터를 내려줌
    res.json({
      flag: false,
      message: '수정 실패'
    })
  }
})

// 글 삭제 기능 만들기
// 1) 
router.delete('/:id', async (req, res, next) => {
  try {
    await db.collection('post').deleteOne({})
  } catch (error) {

  }
})



// 비동기❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕❗❕
// 새로고침 없이 서버랑 대화


module.exports = router;
