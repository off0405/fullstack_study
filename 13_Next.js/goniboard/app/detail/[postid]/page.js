import { connect } from "@/database"
import { ObjectId } from "mongodb"

export default async function Detail(props) {
  console.log(props);
  const { params } = props;

  const client = await connect
  const db = await client.db('board')
  const post = await db.collection('post').findOne({ _id: new ObjectId(params.postid) })
  console.log(post);
  
  return (
    // <div>
    //   <h4>상세페이지</h4>
    //   <h4>글 제목</h4>
    //   <p>내용</p>
    // </div>
    <div>
      <h4>상세페이지</h4>
      <h4>{ post.title }</h4>
      <p>{ post.content }</p>
    </div>
  )
}