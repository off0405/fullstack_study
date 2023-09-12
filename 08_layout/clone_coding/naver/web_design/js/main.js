// 이미지 슬라이드 쇼 만들기
const slides = document.querySelectorAll('#slides > img');
const prev = document.querySelector('#prev'); // All이 아님
const next = document.querySelector('#next'); // All이 아님
console.log(slides);

// 슬라이드 쇼에 있는 이미지 3개 중에서 하나가 표시되면, 나머지 이미지는 모두 숨김
// 이전 또는 다음 버튼을 클릭하면! 이전 이미지나 다음 이미지를 보여줌
// 슬라이드 번호를 저장할 변수 current 선언

let current = 0;

// current 값에 따라 현재 이미지를 보여주는 showSlides() 함수 생성----------------------------
function showSlides(n) {
  slides.forEach(function (slideEl) {
    slideEl.style.display = 'none';
  });
  slides[n].style.display = 'block';
};

// showSlides(n); ->테스트

// 1. 모든 이미지를 화면에서 감춤
// 2. n번째 이미지만 화면에 표시
// slideEl = 이미지들의 목록 이름


//이전 이미지를 보여주는 prevSlide() 함수----------------------------
  //current 값이 0보다 크면 이전 인덱스로
  //그렇지 않으면(0 이미지) 마지막 인덱스로
function prevSlide() {
  if (current > 0) {
    current = current -1;
  } else {
    // current = 2; // 하드코딩
    current = slides.length - 1; // 배열에서 마지막 인덱스로 갈 때 많이 씀
  }

  showSlides(current);  //계산된 current값을 보여줌
}




//다음 이미지를 보여주는 nextSlide() 함수----------------------------
  //current 값이 2보다 작으면 다음 인덱스로
  //그렇지 않으면(2 이미지) 첫번째 인덱스로
function nextSlide() {
  if (current < slides.length -1) {
    current = current + 1
  } else {
    current = 0;
  }

  showSlides(current);  //계산된 current값을 보여줌
}


showSlides(current); // 첫화면 이미지 표시

// 버튼 이벤트 연결----------------------------
prev.addEventListener('click', prevSlide); //이전 이미지 표시
next.addEventListener('click', nextSlide); //다음 이미지 표시




// (참고)
// 이미지 슬라이드 쇼를 자동으로 바꾸는 방법
// const slides = document.querySelectorAll('#slides > img');
// let current = 0;

// function showSlides() {
//   slides.forEach(function (slideEl) {
//     slideEl.style.display = 'none'; // 모든 이미지 감춤
//   });
//   current++; // 다음 이미지로 이동
//   if (current > slides.length) { // 마지막 이미지라면
//     current = 1; // 첫 번째로 이동
//   }
//   slides[current - 1].style.display = "block"; // 현재 위치 이미지 표시
//   setTimeout(showSlides, 2000); // 2초마다 showSlides 함수 반복 실행 
// }

// showSlides(); // 기본적으로 첫 번째 이미지 표시