const express = require('express')

const { client } = require('../database')
const db = client.db('board'); // 자동 생성되므로 굳이 MongoDB에 새로 생성할 필요가 없다. board 데이터베이스에 연결


const router = express.Router()

router.get('/', (req, res) => {
  res.render('main.ejs')
})

// GET /insert
// DB에 데이터 저장하기 테스트 - 테스트 후 삭제
router.get('/insert', async (req, res) => {
  try {
    await db.collection('post').insertOne({
      title: '제발 들어가라',
      comment: '들어갔니?'
    })
    res.send('데이터 저장 완료');
  } catch (error) {
    console.error(error);
  }
})

// DB에 데이터 전체삭제하기
router.get('/delete-all', async (req, res) => {
  try {
    await db.collection('post').deleteMany({})
    res.send('데이터 전체 삭제 완료');
  } catch (error) {
    console.error(error);
  }
})

// GET /cors
router.get('/cors', (req, res) => {
  // res.setHeader('Access-Controll-Allow-Origin', 'http://localhost:3000')
  res.send('데이터 응답 테스트')
})




// DB에 댓글 전체삭제하기
router.get('/delete-all-comment', async (req, res) => {
  try {
    await db.collection('comment').deleteMany({})
    res.send('데이터 전체 삭제 완료');
  } catch (error) {
    console.error(error);
  }
})

// Quiz: /time으로 접속하면 현재 서버의 날짜/시간을 보여주는 기능 만들기
// time.ejs로 웹페이지 만들ㅇ서ㅓ 그 안에 서버의 시간을 넣어 보내주면 됨

router.get('/time', (req, res) => {
  res.render('time.ejs', { date: new Date() })
})

module.exports = router;