import React from 'react';

// 하위(자식) 엘리먼트를 감싸서 카드 현태로 보여주는 범용적인 컴포넌트
function Card(props) {
  const { title, backgroundColor, children } = props;

  return (
    <div style={{
      margin: 8,
      padding: 8,
      borderRadius: 8,
      boxShadow: '0px 0px 4px gray',
      backgroundColor: backgroundColor || 'lightgray'
      // backgroundColor에 falsy 값이 들어오면 기본값으로 lightgray를 사용
    }}>
      {/* 조건부 렌더링 */}
      {title &&
      <h1 style={{ borderBottom: '1px solid gray' }}>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;