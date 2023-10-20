import { useState } from "react";

const students = [
  {
    id: '1',
    name: '김재현',
    email: 'geoblo@naver.com'
  },
  {
    id: '2',
    name: '유재석',
    email: 'you@example.com'
  },
  {
    id: '3',
    name: '이이경',
    email: '22kyung@example.com'
  },
  {
    id: '4',
    name: '이미주',
    email: 'joo@example.com'
  }
];

// console.log(list);

function AttendanceBook() {
  
// const [list, setList] = useState(students);


// map 함수 =  배열 속의 각각의 원소에 대해, "어떤 특정한 작업을 반복"할 때 쓰는 함수입니다.
  return(
    <ul>
      {students.map((e)=>{
        return <li key={e.id}>{e.name} ({e.email})</li>
      })}
    </ul>
  );
}

export default AttendanceBook;