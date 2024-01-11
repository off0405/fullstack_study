import { connect } from "@/database"
import ListItem from "./ListItem";

export default async function List() {
  // 참고) DB 입출력 코드는 server 컴포넌트에서만 쓰기
  const client = await connect
  const db = await client.db('board')
  let posts = await db.collection('post').find().toArray()
  console.log(posts); // 수정 전

  // 경고 해결하기: Only plain objects can be passed to Client Components from SErver Components.
  posts = posts.map((post) => {
    post._id = post._id.toString()
    return post
  })
  console.log(posts); // 수정 후

  
  return (
    <div className="list-bg">
      {/* <div className="list-item">
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
      </div> */}

        {/* {posts.map((post, index) => {
          return (
            <div key={post._id.toString()} className="list-item">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
        )
        })} */}
        {posts.map((post) => {
          return (
            // <ListItem key={post._id.toString()} title={post.title} content = {post.content} />
            <ListItem key={post._id.toString()} post={post} />
        )
        })}
      
      {/* ListItem 컴포넌트로 추출 */}
    </div>
  )
}


// 글 목록 기능 만들기
// 1) /list로 접속 시 글 목록 페이지
// /app/list/page.js
// 2) DB에서 글 목록 가져오기