const mongoose = require('mongoose')

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema // type: mongoose.Schema.Types.ObjectId
const commentSchema = new Schema({

  commenter: {
    type: ObjectId, // ObjectId는 몽고디비의 데이터 타입
    require: true,
    ref: 'User', // 어떤(users) 컬렉션의 ObjectId인지 관계를 설정 => JOIN 같은 기능을 사용할 수 있음
  },
  comment: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comment', commentSchema) // 'Comment'는 comments 라는 컬렉션으로 변환됨

