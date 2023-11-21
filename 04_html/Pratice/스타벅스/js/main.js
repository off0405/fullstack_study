// 검색 영역(.search) 클릭 시 강제 포커스 및 제어
// 검색 영역 찾기
const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input'); // 문서 전체에서 찾지 말고 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('input');

// 검색 영역을 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus(); // 포커스 강제 적용
});

// input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // HTML 속성을 추가하는 메소드
});

// input 요소에 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // HTML 속성을 추가하는 메소드
});

// 스크롤 시 전역 배지(고정 배너) 숨기기
// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');

// 페이지 최상단으로 이동
const toTopEl = document.querySelector('#to-top');
// toTopEl.addEventListener('click', function () {
//   gsap.to(window, 0.6, {
//     scrollTo: 0 //페이지에 0px 지정(최상단)으로 이동, ScrollToPlugin을 HTML에 연결해야 사용 가능한 옵션
//   });
// })


// 페이지에 스크롤 이벤트를 추가!-------------------------------------------------------------------------------------------------
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  // console.log(window.scrollY); // (y축으로 얼마나 스크롤 했는지) 페이지 스크롤 위치

  // Quiz:
  // 페이지 스크롤 위치가 500px을 넘으면 배지 요소를 숨기고,
  // 페이지 스크롤 위치가 500px을 넘지 않으면 배지 요소 보이기!
  if (window.scrollY > 500) {
    // badgeEl.style.display = 'none';

    // gsap 적용
    // gsap.to(요소, 지속시간, 옵션: {}) 메소드: CSS 속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });

    // 상단 이동 버튼 보이기
    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0// x축으로 0px 지점으로 이동(제자리)
    })
  } else {
    // badgeEl.style.display = 'block';

    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });

    // 상단 이동 버튼 숨기기
    gsap.to(toTopEl, 0.6, {
      opacity: 0,
      x: 100// x축으로 100px 지점으로 이동(숨겨짐)
    })
  }
});

// 순차적으로 VISUAL 섹션 내 요소 보이기
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
// console.log(fadeEls);
// 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션: {})
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * 0.7 // 0.7s, 1.4s, 2.1s, 2.8s
    // delay: 몇 초 뒤에 실행될 것인가?
  });
});

// 공지사항 수직 슬라이드 기능
// new 키워드로 Swiper 객체를 생성 => 슬라이드 기능을 생성
// new Swiper(선택자, 옵션: {});
// 첫번째 인자값: 슬라이드 기능을 적용할 요소의 선택자
// 두번째 인자값: 다양한 옵션을 객체 데이터로 전달(다른 옵션들은 API 페이지 참고)
new Swiper('.notice .swiper', {
  direction: 'vertical', // 수직 슬라이드
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  autoplay: true // 자동 재생 여부
});

// 프로모션 수평 슬라이드 기능
new Swiper('.promotion .swiper', {
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜(기본값: 3000)
  },
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 10, // 슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.promotion .swiper-button-next', // 다음 버튼 요소
    prevEl: '.promotion .swiper-button-prev' // 이전 버튼 요소
  }
});

// 프로모션 섹션 토글 기능
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionToggleIcon = promotionToggleBtn.querySelector('.material-icons');

// Quiz
// 토글 버튼을 클릭했을 때 아래 기능을 실행
// 프로모션 요소에 'hide'라는 클래스 값이 있으면 보임 처리!('hide' 클래스를 제거하고 아이콘 모양을 'upload'로 설정)
// 그렇지 않으면 숨김 처리!('hide' 클래스를 추가하고 아이콘 모양을 'download'로 설정)
promotionToggleBtn.addEventListener('click', function () {
  // 실행할 코드들
  if (promotionEl.classList.contains('hide')) {
    // 보임 처리!
    promotionEl.classList.remove('hide');
    promotionToggleIcon.textContent = 'upload'; // 아이콘 모양 바꾸기
  } else {
    // 숨김 처리!
    promotionEl.classList.add('hide');
    promotionToggleIcon.textContent = 'download'; // 아이콘 모양 바꾸기
  }
});




// 유튜브 섹션 위에 부유 요소 애니메이션 처리
// gsap.to(요소, 지속시간, 옵션: {})
// 옵션 참고: https://greensock.com/docs/v3/GSAP/gsap.to()
gsap.to('.floating1', 1.5, {
  delay: 1, // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정
  y: 15, // 수직으로 얼마나 움직일지 설정(translateY(수치); 와 같음)
  repeat: -1, // 몇 번 반복하는지를 설정, -1은 무한 반복
  yoyo: true, // 한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut // 타이밍 함수 적용, 느리게-빠르게-느리게
});
gsap.to('.floating2', 2, {
  delay: 0.5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});
gsap.to('.floating3', 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

// ScrollMagic 사용
// 그 외 scrollreveal
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8 // 화면의 80% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});



// 어워즈 섹션 슬라이드
new Swiper('.awards .swiper', {
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  autoplay: true,
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 30, // 슬라이드 사이 여백(간격) px
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.awards .swiper-button-next', // 다음 버튼 요소
    prevEl: '.awards .swiper-button-prev' // 이전 버튼 요소
  }
});




//현재 연도 표시-------------------------------------------
//날짜 정보를 가진 JS의 Date 객체를 활용 (JS가 기본으로 제공하는 객체)
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 현재 연도의 정보가 숫자 데이터로 반환됨