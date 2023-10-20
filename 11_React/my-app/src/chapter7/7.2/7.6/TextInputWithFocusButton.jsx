import { useRef } from "react";

function TextInputWithFocusButton(props) {

  const inputEl = useRef(null);
  console.log(inputEl); // 레퍼런스 객체라 부르는 자바스크립트 일반 객체를 반환함

  const onButtonClick = () => {
    // inputEl.current는 text input 객체를 담고 있다...
    inputEl.current.focus(); // 실제 input에 접근하여 강제 포커스 !
  }
  
  
  return(
    <>
      {/* ref 속성에 inputEl을 넣어 주기만 하면 해당 DOM 에 접근 가능 */}
      {/* 마치 document.querySelector()와 같음 */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default TextInputWithFocusButton;