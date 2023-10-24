import React, { useState } from 'react';
import Dialog from './Dialog';

function SignUpDialog(props) {

  const [login, setLogin] = useState('');

  const handleChange = (e) => {
    setLogin(e.target.value)
  }
  
  const handleSignUp = (e) => {
    alert(`탑승을 환영합니다, ${login}`);
  }

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleSignUp(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  
  return (
      <Dialog
        title = "화성 탐사 프로그램"
        message = "당신의 이름은?"
      >
        <input type="text" value={login} onChange={handleChange} onKeyDown={handleOnKeyPress}/>
        <button onClick={handleSignUp} >가입하세요~</button>
      </Dialog>
  );
}

export default SignUpDialog;