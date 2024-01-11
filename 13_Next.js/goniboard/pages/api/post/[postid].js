// /api/post로 POST 요청하면 글 작성 기능 완성하기 (form 태그 동기식으로 )

import { connect } from "@/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client =  await connect
  const db = await client.db('board')
  
  
  if (req.method === 'DELETE') {
    try {
      console.log(req.query);
      const result = await db.collection('post').deleteOne({ _id: new ObjectId(req.query.postid) })

      if (result.deletedCount === 0 ) {
        throw new Error('삭제 실패')
      }
      
      res.json({
        flag: true,
        message: '삭제 성공'
      })
    } catch (error) {
      console.error(error);
      res.status(500).json({
        flag: true,
        message: error.message
      })
    }
    
  }
}