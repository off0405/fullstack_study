import { connect } from "@/database";

export default async function handler(req, res) {

  const client =  await connect
  const db =   await client.db('board')


  if (req.method === 'GET') {
    const posts =  await db.collection('post').find().toArray()
    
    res.status(200).json({ message: 'zzzz!', posts })
  }

  
  console.log(posts);

  // query string 확인
  console.log(req.query);

  

  // GET/POST 요청에 따라 다른 코드를 실행하고 싶으면?
  // if문 또는 switch문 사용
  // if (req.method === 'GET') {
    
  // }

}