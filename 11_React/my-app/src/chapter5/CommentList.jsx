import Comment from "./Comment";


const comments = [
  {
    name: '지숙',
    content: '피아노를 쳐보아요'
  },
  {
    name: '미선',
    content: '중량을 쳐보아요'
  },
  {
    name: '윤주',
    content: '배드민턴을 쳐보아요'
  },
  {
    name: '코나',
    content: '긁혔어요'
  }
];

// 댓글들을 포함하는 컴포넌트


function CommentList(props) {
  return (
    <div>
      {/* <Comment name="Ari" content="Hi" />
      <Comment name="Bill" content="Hello"/>
      <Comment name="Cat" content="Good"/> */}

      {/* 배열을 동적으로 렌더링해야 할 때에는 배열의 map()함수 사용 
      map(): 배열 안에 있는 각 요소를 이용하여 새로운 배열을 만듦 
      일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 만들어주면 됨*/}
      {comments.map((comment, index) => {
        return (
          <Comment key={index} name={comment.name} content={comment.content} />
        );
      })}

      {/* map()함수의 결과 */}
      {[
        <Comment key={0} name='지숙' content='피아노를 쳐보아요' />,
        <Comment key={1} name='미선' content='중량을 쳐보아요' />,
        <Comment key={2} name='윤주' content='배드민턴을 쳐보아요' />,
        <Comment key={3} name='코나' content='긁혔어요' />
      ]}

      {/* 코드 단축 시  */}
      {comments.map((comment, index) =>
        (<Comment key={index} name={comment.name} content={comment.content} />))}
    </div>
  );
}

export default CommentList;