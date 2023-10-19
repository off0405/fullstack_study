import { useState } from "react";
import Greeting from "../9.1/Greeting";

function LoginControlRefactoring() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


function LoginButton(props) {
  return(
    <button onClick={props.onClick}>Login</button>
  );
}

function LogOutButton(props) {
  return(
    <button onClick={props.onClick}>Logout</button>
  );
}

  const handleLoginClick = () => { // 로그인 버튼 클릭했을때 실행될 함수
    setIsLoggedIn(true);
  };

  const handleLogOutClick = () => { // 로그인 버튼 클릭했을때 실행될 함수
    setIsLoggedIn(false);
  };


// if문 사용 + button 변수에 컴포넌트 대입(결과적으로 리액트 엘리먼트가 저장됨)
// JSX 내부에서 조건부 렌더링 해도 됨. 이 방법을 더 많이 쓰는데 JSX 내부에서는 if문 사용 불가 => 삼항 연산자 또는 논리 연산자 를 사용해야 함...

  return(
    <>
      {/* Greeting 컴포넌트의 재사용 */}
      <Greeting isLoggedIn = {isLoggedIn}/>
      {isLoggedIn 
      ? <LogOutButton onClick={handleLogOutClick}/>
      : <LoginButton onClick={handleLoginClick}/>
      }
    </>
  );
}

export default LoginControlRefactoring;