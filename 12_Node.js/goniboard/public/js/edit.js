// 글 수정

document.getElementById('edit-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const id = e.target.id.value;
  const title = e.target.title.value;
  const content = e.target.content.value;
  try {
    const result = await axios.patch(`/post/${id}`, { title, content })
    if (!result.data.flag) {
      return alert(result.data.message)
    }
    location.href = '/post'

  } catch (error) {
    console.error(error);
  }

})