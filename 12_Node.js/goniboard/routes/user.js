const express = require('express')
const bcrypt = require('bcrypt')

const { client } = require('../database')
const db = client.db('board') // board 데이터베이스에 연결

const router = express.Router();

// 회원 기능 만들기(가장 범용적이고 전통적인 session 방식)
// 1) 회원 가입 기능
// 2) 로그인 기능(DB에 있는 데이터와 일치하는지 비교)
// 3) 로그인 성공 시 세션 만들기
// 4) 로그인 완료 시 사용자에게 세션 ID가 담긴 쿠키(세션쿠키)를 보내줌
// -> 브라우저 쿠키 저장소에 저장
// 5) 로그인이 필요한 곳 (예: 마이페이지)에서 로그인 여부를 확인하고 로그인 상태이면 페이지를 내려줌

// 로그인, 로그아웃을 직접 구현할 수도 있지만
// 세션과 쿠키 처리 등 복잡한 작업이 많으므로 검증된 모듈 사용
// passport 라이브러리, 이름처럼 우리의 서비스를 사용할 수 있게 해주는 여구너 같은 역할

// passport 관련 패키지 설치
// npm install passport passport-local
// passport : 회원 인증 메인 라이브러리
// passport-local : 아이디, 비번을 이용한 세션 인증 방식으로 회원 인증하는 서브 라이브러리
// 참고로 ) passport 이용 시 JWT, 소셜 로그인도 구현 가능!

// GET /user/register 라우터
router.get('/register', (req, res) => {
  res.render('register')
})

// Quiz. 회원 가입 기능 만들기
// 1) 회원 가입 페이지 만들기
// 2) 서버는 전송받은 아이디, 비번을 회원 DB(유저 collection('user'))에 저장
// /public/js/register.js
// /POST /user/register 라우터 작성

router.post('/register', async (req, res) => {
  // const { username, password } = req.body; // 구조 분해 할당으로 가져오기
  const username = req.body.username
  const password = req.body.password

  try {
    // 비번을 그냥 넣을 때
    // await db.collection('user').insertOne({ username, password })

    // 회원 가입 예외 처리 추가
    // 기존에 같은 아이디로 가입한 사용자가 있으면 에러 처리
    // username이 이미 DB에 있는지 조회
    const existUser = await db.collection('user').findOne({ username })
    if (existUser) {
      throw new Error('존재하는 사용자');
    }


    // 비번을 해싱해서 저장해보기
    // npm install bcrypt
    // 두번째 인자값: 해싱을 얼마나 복잡하게 할지
    // 숫자가 커질수록 비밀번호를 알아내기 어려워지지만 암호화 시간도 같이 길어짐
    const hash = await bcrypt.hash(password, 12) // 최소 10이상 추천, 31까지 사용 가능 
    await db.collection('user').insertOne({
      username,
      password: hash
    })

    res.json({
      flag: true,
      message: '회원 가입 성공 '
    })

  } catch (error) {
    console.error(error);
    res.json({
      flag: false,
      message: error.message
    })
  }
})
module.exports = router;