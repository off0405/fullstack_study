document.getElementById('write-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const title = e.target.title.value;
  const content = e.target.content.value;
  const img = e.target.img.files[0]

  const formData = new FormData()

  formData.append('title', title)
  formData.append('content', content)
  formData.append('img', img)
  // img.append('img', e.target.img.file[0])
  // console.log(img);
  // if (!title) {
  //   return alert('제목을 입력하세요')
  // }
  try {
    const result = await axios.post('/post/write', formData)
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