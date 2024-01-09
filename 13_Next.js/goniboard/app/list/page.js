import { connect } from "@/database"

export default async function List() {
  // 참고) DB 입출력 코드는 server 컴포넌트에서만 쓰기
  const client = await connect
  const db = await client.db('board')
  const posts = await db.collection('post').find().toArray()
  console.log(posts);
  
  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>글 제목</h4>
        <p>글 내용</p>
      </div>
      <div className="list-item">
        <h4>글 제목</h4>
        <p>글 내용</p>
      </div>
      <div className="list-item">
        <h4>글 제목</h4>
        <p>글 내용</p>
      </div>
    </div>
  )
}


// 글 목록 기능 만들기
// 1) /list로 접속 시 글 목록 페이지
// /app/list/page.js
// 2) DB에서 글 목록 가져오기