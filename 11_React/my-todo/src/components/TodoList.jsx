import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';



const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto; // 넘치면 스크롤
`

// todos 배열을 props로 받아오기 map()함수를 사용해 여러 개의 TodoListItem 컴포넌트로 변환해 보여줌
function TodoList(props) {
  console.log(props);
  const { id, todos, onRemove, onToggle } = props;

  return (
    <TodoListWrapper>
      {/* <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/> */}

      {/* Quiz. map()함수 이용하여 TodoListItem으로 이루어진 배열로 변환하여 반복 렌더링 */}
      {todos.map((todo)=>{
        console.log(todo);
        return <TodoListItem text = {todo.text} checked = {todo.checked} id = {todo.id} onRemove={onRemove}  onToggle={onToggle}/>
        // TodoListItem{todos={todo}}
      })}
    </TodoListWrapper>
  );
}

export default TodoList;