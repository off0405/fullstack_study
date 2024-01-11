export async function GET(req, {params}) {
  // Dynamic Route
  console.log(params.id);

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
  const todo = await res.json()

  return Response.json({ todo })
}