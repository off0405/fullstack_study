// 글 삭제 시
document.querySelectorAll('.delete').forEach((deleteBtn, index) => {
  deleteBtn.addEventListener('click', async (e) => {
    try {
      // const id = e.target.dataset.id;
      const result = await axios.delete(`/post/${e.target.dataset.id}`)
      console.log(result);

      if (!result.data.flag) {
        return alert(result.data.message)
      }

      if (result.status) {
        // 왜 새로고침을 해야 삭제된 결과가 반영될까?
        // => 삭제 성공 시 HTML도 제거하는 코드 작성 (CSR방식)
        e.target.parentElement.parentElement.remove();

        // => 아니면 '/post'로 요청 을 보내서 새롭게 글 목록을 받아옴(SSR 방식, 새로고침 발생)
        // location.href = '/post'
      } else {
        alert(result.data.message)
        throw new Error(`api error: ${result.response.status} ${result.response.statusText}`)
      }


      // 리액트에서는? state를 바꾼다

    } catch (err) {
      console.error(err);
    }
  });
});

// 참고 HTML 보여주는 법 2가지
// 1) 서버에서 다 만들어서 보내기 css
// 2) 서버는 데이터만 보내고 브라우저에서 완성하기(CSR)
// ajax를 쓰면 서버가 보낸 데이터만 받아 js로 html 동적으로 만들어서 현재 페이지에 csr 구현 가능

document.querySelector('.search-btn').addEventListener('click', async (e) => {
  const keyword = document.querySelector('.search').value
  location.href = `/post/search?keyword=${keyword}` // URL 생성으로 알아서 GET요청 해서 서버로 가게 됌
})