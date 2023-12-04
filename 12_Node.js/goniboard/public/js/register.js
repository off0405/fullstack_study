// Quiz. 회원 가입 기능 만들기
// 1) 회원 가입 페이지 만들기
// 2) 서버는 전송받은 아이디, 비번을 회원 DB(유저 collection('user'))에 저장
// /public/js/register.js
// /POST /user/register 라우터 작성

document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const username = e.target.username.value;
  const password = e.target.password.value;

  if (!username) {
    return alert('아이디를 입력하세요')
  }
  if (!password) {
    return alert('비밀번호를 입력하세요')
  }
  try {
    await axios.post('/user/register', { username, password })
    if (!result.data.flag) {
      return alert(result.data.message);
    }
    location.href = '/'

  } catch (error) {
    console.error(error);
  }

  e.target.username.value = ''
  e.target.password.value = ''

})