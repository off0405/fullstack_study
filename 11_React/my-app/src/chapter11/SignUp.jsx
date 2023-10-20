// Quiz
// 사용자의 정보를 입력받는 가입 양식 컴포넌트 만들기

import { useState } from "react";

// 1. 이름 입력받기
// 이름을 입력할 수 있는 input 태그와 입력된 값을 저장하기 위한 name이라는 state를 정의(초기값 '')
// 값이 변경되면 이를 처리하기 위한 handleChangeName() 이라는 이벤트 핸들러 정의

// 2. 성별 입력받기
// 성별을 입력받기 위한 select 태그와 gender라는 이름의 state를 정의(초기값 '남자')
// select 태그에는 총 두가지 옵션이 들어감(남자, 여자)
// 값이 변경되면 이를 처리하기 위한 handleChangeGender() 라는 이벤트 핸들러 정의

// 3. 출력
// 이름과 성별을 입력하고 버튼을 누를시 alert 창으로 입력된 이름과 성별 출력하기

// (선택 사항)
// 1) form 태그 및 submit 이벤트를 사용해도 되고 button 태그의 click 이벤트를 사용해도 됨
// 2) 각각의 state를 여러 개 만들어도 되고 객체 형태로 한번에 관리해도 됨


function SignUp() {

  const [name, setName] = useState('');
  const [gender, setGender] = useState('male');

  const handleChangeName = (e) => {
    setName(e.target.value)
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value)
  };

  const onClick = (e) => {
    e.preventDefault();
    alert(`이름 : ${name}, 성별: ${gender}`);
  }


  return (
    <form onSubmit={onClick}>

      <label>
        성별
        <select value={gender} onChange={handleChangeGender}>
          <option value="male">남</option>
          <option value="female">여</option>
        </select>
      </label>

      <br />

      <label>
        이름:
        <input
          type="text"
          value={name}
          onChange={handleChangeName} />
      </label>

      <button type="submit">제출</button>


    </form>
  );

}

export default SignUp;