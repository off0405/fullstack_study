import React from 'react';
import { Col } from 'react-bootstrap';

function ProductListItem(props) {
  const { prod } = props;
  const { imagePath, title, price } = prod;

  return (


    <Col md={4}>
      {/* Quiz: 
        1) 반복적인 상품 아이템을 src/components/ProductListItem 컴포넌트로 만들기
        2) productList 배열을 반복하며 ProductListItem 컴포넌트를 렌더링 하기
        3) 상품 정보를 props로 넘겨서 데이터 바인딩 하기
      */}
      <img src={imagePath} width="80%" />
      <h4>{title}</h4>
      <p>{price}</p>
    </Col>
  );
}

export default ProductListItem;

