const express = require('express')

const router = express.Router()

// GET /user 라우터
router.get('/', (req, res) => {
  res.send('hello, user')
})

// GET /user/:id 라우터
// 동적으로 변하는 부분을 라우트 매개변수로 만듦
// ❗❕❗ 주의 ❗❕❗ 일반 라우터보다 뒤에 위치해야 함
// 그렇지 않으면 id로 밑에 테스트용 라우터('like')가 들어가버림
router.get('/:id', (req, res) => {
  console.log(req.params, req.query); // 라우트 매개변수, 쿼리스트링
  res.end()  // 응답 마무리
})

// GET /user/like 라우터
router.get('/like', (req, res) => {
  console.log('likelikelikelikelikelikelike');
  res.end()
})


// (참고) 라우터 그룹화하기 (생각보다 잘 쓰지는 않음)
// 주소는 같지만 메서드가 다른 코드가 있을 때
// 예를 들어 사용자를 조회, 등록, 수정, 삭제
router.get('/abc', (req, res) => {
  res.send('GET /abc')
})

router.post('/abc', (req, res) => {
  res.send('POST /abc')
})

// router.route로 묶음
// 주소를 먼저 써서 그룹화를 하고 그 다음에 메소드로 분기
router.route('/abc')
  .get((req, res) => {
    res.send('GET /abc')
  })
  .post((req, res) => {
    res.send('POST /abc')
  })

module.exports = router;