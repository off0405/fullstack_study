import { useState } from "react";

// count state를 만들고 버튼을 누를 때 마다 1씩 증가하고 그 결과가 화면에 출력됨
function Counter() {
  // state를 사용해서 값이 바뀔때마다 재렌더링 되도록 해야한다
  // const [apple, setApple] = useState(초기값);
  let [count, setCount] = useState(0);
  // console.log(useState(0));
  // useState(0) 의 결과로 배열이 반환됨 -> [초기값, set함수(state 변경 함수)]
  // 배열의 "구조 분해 할당"을 사용하여 변수 선언 및 할당

  //(참고) ES5
  // const arr = useState(0);
  // const count = arr[0];
  // const setCount = arr[1];
  
  // 만약 state 미사용 시
  // 이런 식으로 쓰면 카운트 값을 증가시킬 수는 있지만, 재렌더링이 일어나지 않음
  // 다른 이유로 재렌더링 발생 시, 값이 초기화됨
  let wrongCount = 0;

  let [color, setColor] = useState('blue');
  console.log(useState('blue'));

  let [isClick, setIsClick] = useState(false);


  return (
    <>
      {/* 1. state 사용 */}
      <p>총 {count}번 클릭했습니다 ! !</p>
      <button onClick={() => { setCount(count + 1); }}>클릭</button>

      <br />

      {/* 2. state 직접 수정 */} 
      {/* 직접 count state를 증가시키면, 값은 증가되지만 재렌더링이 일어나지 않는다 => usesState의 setCount 사용 */}
      <button onClick={() => { count++; }}>클릭(잘못된 방법 - 값은 변경됨)</button> 
      
      <br />

      {/* 3. state 미사용 */}
      <p>총 {wrongCount}번 클릭했습니다 ! !</p>
      <button onClick={() => {
        wrongCount++;
        console.log(wrongCount);
      }}>
        클릭
      </button>
      
      {/* Quiz. 글자색 바꾸기, 버튼 내용 바꾸기 */}
      <hr />

      <p style={{ color: color }}>현재 글자색: {color}</p>
      {/* <button onClick={() => { setColor ( function (color) {
        return color = 'red'; 
      } );}}>글자색 변경</button> */}
      <button onClick={() => { setColor('red');}}>
        글자색 변경</button>

      <p>버튼 내용 바꾸기(힌트: 삼항 연산자 사용)</p>
      <button onClick={()=> { setIsClick(true);}}>
        {isClick ? '구독 완료' : '구독'}
        
      </button>
      
    </>
  );
}

export default Counter;