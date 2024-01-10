import Link from "next/link"
import DetailButton from "./DetailButton"

export default function ListItem(props) {
  const { post } = props
  return(
      <div className="list-item">
        {/* 페이지를 이동하는 방법(1) - Link 컴포넌트 */}
        {/* Link 컴포넌트를 사용하여 '/detail/글id'로 이동 */}
      <h4>
        <Link href={`/detail/${post._id}`}>
          {post.title}
        </Link>
      </h4>
      
        {/* 페이지를 이동하는 방법 (2) - useRouter */}
      <DetailButton postid={post._id.toString()} />
        <p>{post.content}</p>
      </div>
  )
}

// 상세페이지 만들기
// 1) 글 제목 누르면 상세 페이지로 이동
// 2) DB에서 해당 게시글 가져와서 보여주기
// => 이때 상세페이지 URL은? /detail/123
// => React: URL 파라미터, Express: 라우트 파라미터
// => Next.js: Dynamic Routes를 사용 -> 파일 또는 폴더 이름을 대괄호로 묶어 생성 []
// 그 외
// \[변수명1]\[변수명2]\[변수명3]
// [...변수명]: Catch-all
// [[...변수명]]: Optional Catch-all
