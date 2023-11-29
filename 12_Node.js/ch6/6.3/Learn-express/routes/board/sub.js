const express = require('express')
const router = express.Router()

router.get('/notice', (req, res) => {
  res.send('공지사항 게시판')
})

router.get('/qna', (req, res) => {
  res.send('문의 게시판')
})

router.get('/:others', (req, res) => {
  res.send(`${req.params.others} 페이지 입니다`)
})

module.exports = router