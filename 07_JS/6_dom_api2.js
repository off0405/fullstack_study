// HTML에서 해당 요소를 검색하여 찾은 "모든"요소들을 반환한다.
const boxE1s = document.querySelectorAll('.box');
console.log(boxE1s); // 요소들의 리스트(목록)가 반환됨. => 앞에서 사용한 DOM API들을 바로 쓸 수가 없음.
// (참고) 정확히는 유사배열(Array-like): 인덱스와 length property가 있어서 배열처럼 보이는 객체.

// forEach() 메소드 사용: 배열에서 각 요소에 대한 반복 처리를 수행.
// 인수(인자값)으로 반복을 돌면서 꺼내온 요소를 처리하는 함수 작성.
// 처리 함수 작성 시 매개변수(현재 가져온 요소, 요소의 인덱스) <= 순서가 중요★
boxE1s.forEach(function (boxE1, index) {
  console.log(index, boxE1);

  boxE1.classList.add(`order-${index + 1}`)
});

// 요소의 내용 확인 및 수정
const boxE1 = document.querySelector('.box');
console.log(boxE1.textContent); // 요소의 내용을 출력

boxE1.textContent = 'change!';
console.log(boxE1.textContent);
// (참고) innerHTML, innerText