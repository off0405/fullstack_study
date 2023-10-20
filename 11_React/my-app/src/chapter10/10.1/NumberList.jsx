const numbers = [1, 2, 3, 4, 5];

function NumberList() {
  // 배열을 반복 렌더링 할때는 key 속성을 필수로 넣어야 함
  // 여기서는 임시로 배열의 index를 넣음
  const listItems = numbers.map((number, index) => {
    return <li key={index}>{number}</li>;
  });

  return (
    <>
      <ul>
        {listItems}
      </ul>

      <ul>
        {numbers.map((number, index) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>
    </>
  );
}

export default NumberList;