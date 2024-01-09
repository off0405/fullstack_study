const { MongoClient } = require('mongodb');

// MongoDB 연결 설정하기
// DB 주소 찾는 법: Atlas - Databas > Connect > Drivers
// mongodb+srv://root:<password>@cluster0.sqvq6zj.mongodb.net/?retryWrites=true&w=majority

const { MONGO_ID, MONGO_PASSWORD } = process.env;
const url = `mongodb+srv://root:root2023@cluster0.sqvq6zj.mongodb.net`
const client = new MongoClient(url);

const connect = async () => {
  try {
    await client.connect(); // MongoDB 서버에 연결
    console.log('몽고디비 연결 성공~');
  } catch (error) {
    console.error('몽고디비 연결 에러', error);
  }
}

module.exports = { client, connect }


PORT=8088
COOKIE_SECRET=goniboardsecret
MONGO_ID=root
MONGO_PASSWORD=root2023
AWS_ACCESS_KEY=AKIA4QDOVY7NETKZNV24
AWS_SECRET_KEY=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