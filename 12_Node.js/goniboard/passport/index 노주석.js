// const passport = require('passport')
// const local = require('./localStrategy') // 로컬 로그인 전략( = 로그인 시 어떻게 처리할지 동작을 작성해주는거야 )

// const { ObjectId } = require('mongodb')

// const { client } = require('../database')
// const db = client.db('board') // board 데이터베이스에 연결

// module.exports = () => { // app.js 의 passportConfig();로 실행됨

//   passport.serializeUser((user, done) => {
//     console.log(user); // 로그인 중인 사용자 정보

//     done(null, user._id) // _id만 저장
//   });

//   passport.deserializeUser(async (id, done) => {
//     console.log(id); // 세션에 저장한 내용

//     try {
//       const user = await db.collection('user').findOne({ _id: new ObjectId(id) })
//       done(null, user) // req.user에 저장
//     } catch (err) {
//       done(err)
//     }
//   });

//   local()
// }
