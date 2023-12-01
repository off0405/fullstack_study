// 글 삭제 시
document.querySelectorAll('.delete').forEach((deleteBtn, index) => {
  deleteBtn.addEventListener('click', async (e) => {
    try {
      // const id = e.target.dataset.id;
      const result = await axios.delete(`/post/${e.target.dataset.id}`)
      console.log(result);

      if (result.status) {
        // 왜 새로고침을 해야 삭제된 결과가 반영될까?
        // => 삭제 성공 시 HTML도 제거하는 코드 작성 (CSR방식)
        e.target.parentElement.parentElement.remove();

        // => 아니면 '/post'로 요청을 보내서 새롭게 글 목록을 받아옴(SSR 방식, 새로고침 발생)
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