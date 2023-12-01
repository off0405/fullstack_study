document.getElementById('write-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const title = e.target.title.value;
  const content = e.target.content.value;
  // if (!title) {
  //   return alert('제목을 입력하세요')
  // }
  try {
    const result = await axios.post('/post/write', { title, content })
    if (!result.data.flag) {
      return alert(result.data.message)
    }
    location.href = '/post'

  } catch (error) {
    console.error(error);
  }

  e.target.title.value = ''
  e.target.content.value = ''
})