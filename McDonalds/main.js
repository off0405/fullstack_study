

//.menu li 에 커서를 올렸을 때 .menu-open 클래스가 block을 가졌으면 참
//.menu-open 클래스가 block을 가지지 않았으면 클래스에 hide 추가

const menu = document.querySelector('.menu li')
const menuOpen = document.querySelector('.menu-open')

menu.addEventListener('mousever', function () {
  if (menuOpen.classList.contains('hide')) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
})




// //토글 버튼을 클릭 했을 때, 아래 기능을 실행
// //프로모션 요소에 'hide' 라는 클래스 값이 있으면(contain) 보임 처리('hide'클래스를 제거하고, 아이콘 모양을 'upload'로 설정)
// //그렇지 않으면 숨김처리('hide'클래스를 추가하고, 아이콘 모양을 'download'로 설정)


// promotionToggleBtn.addEventListener('click', function () {
//   if (promotionEl.classList.contains('hide')) {
//     promotionEl.classList.remove('hide');
//     promotionToggleIcon.textContent = 'upload';
//     ;

//   } else {
//     promotionEl.classList.add('hide');
//     promotionToggleIcon.textContent = 'download';
//   }
  
// });
