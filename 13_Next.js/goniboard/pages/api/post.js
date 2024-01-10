// /api/post로 POST 요청하면 글 작성 기능 완성하기 (form 태그 동기식으로 )


import { connect } from "@/database";

export default async function handler(req, res) {
  const client =  await connect
  const db =   await client.db('board')
  
  if (req.method === 'POST') {
    const title = req.body.title
    const content = req.body.content
    // 데이터 유효성 검사
    if (!title) {
      return res.status(500).json({ flag: false, message: '제목을 입력하세요'})
    }

    if (!content) {
      return res.status(500).json({ flag: false, message: '내용을 입력하세요'})
    }

    // DB 에외처리
    try {

      await db.collection('post').insertOne({ title, content })

      // 응답과 동시에 페이지를 이동시키기
      res.redirect(302, '/list') // 응답코드 생략 시 기본값: 307(Temporary redirect)
      // res.status(200).json({ message: 'postpost!' })
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ flag: false, message: '등록 실패' })
    }
  }
}