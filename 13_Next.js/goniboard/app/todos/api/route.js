export async function GET(req) {
  // 방법1: URL 객체로 만듦
  // console.log(req.url);
  // const { searchParams } = new URL(req.url)
  // searchParams는 search(쿼리스트링) 문자열을 다루기 쉽게 객체화 시킨 것

  // 방법 2: URL Query Parameters 
  // 참고_ 여기서의 req는 NextRequest 객체(JS Request 객체를 확장)
  console.log(req.nextUrl);
  const searchParams = req.nextUrl.searchParams
  
  const id = searchParams.get('id')
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const todo = await res.json()

  return Response.json({ todo })
}