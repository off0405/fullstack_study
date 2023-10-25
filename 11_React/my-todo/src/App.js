import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";
import { useEffect, useRef, useState } from "react";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";


// 패키지 설치
// npm install styled-components styled-reset react-icons

// 패키지 설명
// 1) styled-reset: reset css
// 2) react-icons: 리액트에서 다양한 아이콘을 쓸 수 있는 라이브러리
// SVG 형태의 아이콘을 리액트 컴포넌트처럼 쉽게 사용
// props 또는 css 스타일로 커스텀 가능
// 아이콘 리스트와 사용법은 공식 문서 참고 : https://react-icons.github.io/react-icons/

// 글로벌(공통) 스타일 적용과 reset css 적용
// 글로벌(공통) 스타일 작성은 index.css에서 해도 무관하지만, 
// styled-components를 사용해서 적용을 하고 싶다면
// createGlobalStyle을 이용하여 컴포넌트를 만들고 가장 첫번째로 렌더링하면 됨~
const GlobalStyle = createGlobalStyle`
  /* reset css */
  ${reset}


  /* 글로벌(공통) 스타일 */
  body {
    background: #e9ecef;
  }
`;




function App() {
  // todos 배열 안에 객체 형태로 데이터가 존재
  // id, 내용, 완료 여부 
  // TodoList에 props로 전달

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '수업 교안 작성하기',
      checked: true
    },
    {
      id: 2,
      text: '시험 채점하기',
      checked: true
    },
    {
      id: 3,
      text: '단계별 실습 예제 만들기',
      checked: false
    },
  ]);

  //  로컬스토리지에서 가져오기
  

  // 로컬 스토리지에 저장(주의: DB가 아니다. DB처럼 쓰면 안된다)
  // 추가, 수정, 삭제 각 함수에 넣어도 되지만, useEffect()를 활용하면 한번에 처리 가능 !
  // todos가 변경될 때 마다 실행..........
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])



  // todos 배열에 새 객체를 추가하기 위한 함수 정의 -------------------------------
  // 새 객체를 만들때 마다 id값에 1씩 더해줘야 하는데 useRef를 사용하여 변수 생성
  // id 값은 렌더링되는 정보가 아님(화면에 보이지도 않고, 값이 바뀐다고 해서 컴포넌트가 재렌더링 될 필요도 없어서 useRef()사용 할 거야~)
  const nextId = useRef(4);

  const handleInsert = (text) => {
    const todo = {
      // id: nextId.current,
      id: uuidv4(),
      text, // text: text
      checked: false
    }

    // 방법 1
    // const copyTodos = [...todos];
    // copyTodos.push(todo);
    // setTodos(copyTodos); // 새로운 배열을 만들어 넣어줌 

    // nextId.current += 1; //nextId.current = nextId.current + 1;


    // 편법
    // setTodos([...todos, todo]);

    // 방법2 - 배열의 메소드 이용
    // 불변성을 지키면서 배열의 요소를 추가해야 할 때 concat() 활용
    // concat: 배열을 결합해서 새로운 배열로 반환해줌

    setTodos(todos.concat(todo)); 
    nextId.current += 1; //nextId.current = nextId.current + 1;
  }

  // todos 배열에서 id값으로 항목을 지우기 위한 함수 정의
  const handleRemove = (id) => { // 내가 클릭한 요소의 id
    // 방법1
    // const copyTodos = [...todos];
    // const targetIndex = todos.findIndex((todo)=>{return todo.id === id;}); //todo.id = todo안의 id들
    // copyTodos.splice(targetIndex, 1);
    // setTodos(copyTodos);

    // 방법2 - 배열의 메소드 이용
    // 불변성을 지키면서 배열의 요소를 제거해야 할 때 filter() 활용
    setTodos(todos.filter( todo => todo.id !== id ));
  }
  
  // 수정 -------------------------
  // todos 배열의 특정 요소를 수정하기 위한 함수 정의 
  const handleToggle = (id) => {
    // 방법1
    // const copyTodos = [...todos]
    // const target = todos.find(todo => todo.id === id);
    // // console.log(target);
    // target.checked = !target.checked
    // const targetIndex = todos.findIndex(todo => todo.id === id);
    // copyTodos[targetIndex] = target;
    // setTodos(copyTodos);


    // 방법2 - 배열의 메소드 활용
    // 불변성을 지키면서 배열의 특정 요소를 업데이트 해야 할 때
    setTodos(todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
    
    
  }
  
  

  return (
    // <Reset />
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
      </TodoTemplate>
    </>
  );
}

export default App;





// HTML 웹 스토리지란?
// 브라우저에서 제공하는 데이터 저장소
// 사용자의 브라우저 내에 로컬로 데이터를 저장할 수 있음
// key-value 형태로 저장
// 최대 5MB까지 문자만 저장가능
// 콘솔 창에서 연습해보기

// 웹 스토리지는 origin(도메인 및 프로토콜)당입니다. 
// 같은 출처의 모든 페이지는 동일한 데이터를 저장하고 액세스할 수 있습니다.

// HTML 웹 스토리지 객체
// HTML 웹 스토리지는 클라이언트에 데이터를 저장하기 위한 두 가지 객체를 제공합니다.
// window.localStorage - 만료 날짜 없이 데이터를 저장
// window.sessionStorage - 한 세션에 대한 데이터 저장(브라우저 탭을 닫으면 데이터가 손실됨)