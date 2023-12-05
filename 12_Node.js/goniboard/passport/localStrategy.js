const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const { client } = require('../database')
const db = client.db('board')

module.exports = () => {
  // 첫번째 인자값: 전략 옵션을 설정 가능
  // 예: 
  // username, password 외 다른 속성명(req.body.name)을 쓰고 싶을 때
  // 두번째 인자값: 실제 전략(=로그인 시 어떻게 처리할지 동작)을 수행하는 함수
  passport.use(new LocalStrategy({
    usernameField: 'username', // ex)email ... 
    passwordField: 'password',
    passReqToCallback: false // => 아이디 비번 외에 다른 것도 제출 받아서 검증하고 싶을 때 참고
  }, async (username, password, done) => { // passport.authenticate('local')() 사용 시 호출되는 콜백함수
    try {
      //  사용자가 입력한 아이디(usernmae), 비번(password)을 검사하는 코드를 적는 곳. 기존에 있는거랑 중복확인
      const existUser = await db.collection('user').findOne({ username })
      if (!existUser) { // 일치하는 아이디가 없으면
        return done(null, false, { message: '가입되지 않은 회원입니다' }) // 회원 인증 실패 시 두번째 인자값에 false를 넣어준다.그래야 앞에 !user 이프문 코드 실행
      }

      // 해싱할 비번(사용자가 입력한 비번)과 해싱된 비번(DB에 저장된 비번)을 비교
      const result = await bcrypt.compare(password, existUser.password);
      if (!result) { // 비번이 틀리면
        return done(null, false, { message: '비밀번호가 일치하지 않습니다' })
      }

      // 아이디, 비번 일치 시
      return done(null, existUser) // db에서 꺼내온 사용자 정보를 그대로 넣어줌
    } catch (err) {
      console.error(err);
      done(err)
    }

  }));
}