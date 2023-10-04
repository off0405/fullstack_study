new Swiper('.main-banner .swiper', {
  pagination: { // 페이지 번호 사용
    el: '.main-banner .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.main-banner .swiper-button-next', // 다음 버튼 요소
    prevEl: '.main-banner .swiper-button-prev' // 이전 버튼 요소
  }
});