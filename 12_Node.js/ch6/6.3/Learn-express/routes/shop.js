const express = require('express')

const router = express.Router()

router.get('/shirts', (req, res) => {
  res.send('셔츠 판매 페이지')
})

router.get('/pants', (req, res) => {
  res.send('바지 판매 페이지')
})

router.get('/:category', (req, res) => {
  console.log(req.params);
  res.send(`${req.params.category}페이지 입니다.`);
  res.end()
})

module.exports = router