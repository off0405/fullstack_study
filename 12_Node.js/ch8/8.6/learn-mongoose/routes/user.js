const express = require('express')

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


module.exports = router;