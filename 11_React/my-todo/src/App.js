import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";
import { useRef, useState } from "react";
import TodoList from "./components/TodoList";


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

  // todos 배열에 새 객체를 추가하기 위한 함수 정의
  // 새 객체를 만들때 마다 id값에 1씩 더해줘야 하는데 useRef를 사용하여 변수 생성
  // id 값은 렌더링되는 정보가 아님(화면에 보이지도 않고, 값이 바뀐다고 해서 컴포넌트가 재렌더링 될 필요도 없어서 useRef()사용 할 거야~)
  const nextId = useRef(4);

  const handleInsert = (text) => {
    const todo = {
      id: nextId.current,
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
    setTodos(todos.concat(todo)); // concat: 배열을 결합해서 새로운 배열로 반환해줌
    nextId.current += 1; //nextId.current = nextId.current + 1;
  }

  // todos 배열에서 id값으로 항목을 지우기 위한 함수 정의
  const handleRemove = (id) => { // 내가 클릭한 요소의 id
    // 방법1
    const copyTodos = [...todos];
    const targetIndex = todos.findIndex((todo)=>{return todo.id === id;}); //todo.id = todo안의 id들
    copyTodos.splice(targetIndex, 1);
    setTodos(copyTodos);
  }
  
  

  return (
    // <Reset />
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos} onRemove={handleRemove}/>
      </TodoTemplate>
    </>
  );
}

export default App;
