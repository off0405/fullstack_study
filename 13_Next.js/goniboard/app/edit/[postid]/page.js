import { connect } from "@/database"
import { ObjectId } from "mongodb";

export default async function Edit(props) {

  const { params } = props;

  const client = await connect
  const db = await client.db('board')
  const posts = await db.collection('post').findOne({ _id: new ObjectId(params.postid) })
  console.log(posts);

  return (
    <>
    <div className="p-20">
      <h4>수정하기</h4>
        <form id="edit-form" action="/api/post/edit" method="post">
        <input type="hidden" name="id" defaultValue={posts._id.toString()}/>
        <label htmlFor="title">제목</label>
        <input type="text" id="title" name="title" defaultValue={posts.title}/>
        <label htmlFor="content">내용</label>
        <input type="text" id="content" name="content" defaultValue={posts.content}/>
        <button type="submit">수정</button>
      </form>
    </div>
    </>
  )
}

// quiz.
// /api/post/edit로 POST 요청하면 글 수정 기능 완성하기