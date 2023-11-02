import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearSelectedProduct, getSelectedProducts, selectSelectedProduct } from '../features/product/productSlice';
import styled, { keyframes } from 'styled-components';
import { toast } from 'react-toastify';
import TabContents from '../components/TabContents';


// 스타일드 컴포넌트를 이요한 애니메이션 속성 적용
const highlight = keyframes` // 25_animation.html 에서 확인
  from{ background-color: #cff4fc; }
  50%{ background-color: #e8f7fa; }
  to{ background-color: #cff4fc; }
`;

const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
`






function ProductDetail(props) {
  // URL 파라미터 가져오기
  const { productId } = useParams();   // useParams(): 입력한 값을 가져오기
  const dispatch = useDispatch(); // 스토어에 액션을 보낼 때  <-> useSelector
  const product = useSelector(selectSelectedProduct);

  // 숫자 포맷 적용 "INTL"
  const formatter = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' });


  const [alert, setAlert] = useState(true);  // info alert 창 상태
  const [orderCount, setOrderCount] = useState(1); // 주문 수량 상태 
  const [showTabIndex, setShowTabIndex] = useState(0); // 탭 구현 state
  const [showTab, setShowTab] = useState('detail'); // 탭 상태 state


  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고 
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/off0405/db-shop/products/${productId}`)
        dispatch(getSelectedProducts(response.data));

      } catch (error) {
        console.error(error);
      }
    }
    fetchProductById();

    // 상세 페이지가 언마운트 될 때 전역 상태 초기화
    return () => {
      dispatch(clearSelectedProduct());
    }
  }, []);


  useEffect(() => {
    const timeout = setTimeout(() => { setAlert(false) }, 3000);  // 화면에서 보여지는 "상태"에 관한 함수라서 useEffct에서 작성...
    return () => { // const timeout & return = 불필요하게 타이머가 계쏙 쌓이는 것을 정리
      clearTimeout(timeout);
    }
  }, []);


  const handleChangeOrderCount = (e) => {
    if (isNaN(e.target.value)) {   // 숫자 외 입력 시 유효성 검사
      toast.error('숫자를 입력해 주세요');
      return; // 함수 끝내버리기
    }
    setOrderCount(Number(e.target.value))
  }



  // 없는 상품일 때 예외 처리
  if (!product) {
    return null; // 아무것도 렌더링하지 않음
  }

  const { imagePath, title, content, price } = product; // 순서 주의 ❕ 앞의 if문으로 있는지 없는지 검사

  return (
    <Container className='pt-3'>
      {/* Alert을 띄우고 3초 뒤에 사라지게 만들기
        힌트: 처음 렌더링 됐을 때 setTimeout으로 타이머 설정 */}

      {alert ? (<StyledAlert variant="info" onClose={() => setAlert(false)} dismissible>현재 34명이 이 상품을 보고 있습니다.</StyledAlert>) : null}



      <Row>
        {/* Quiz. 데이터 바인딩(연동)   */}
        <Col md={6}>
          <img src={imagePath} width="80%" />
        </Col>

        <Col md={6}>
          <h4 className='pt-5'>{title}</h4>
          <p>{content}</p>
          <p>{formatter.format(price)}원</p>

          <Col md={4} className='m-auto mb-3'>
            <Form.Control type="text" value={orderCount} onChange={handleChangeOrderCount} />
          </Col>


          <Button variant='primary'>주문하기</Button>
        </Col>
      </Row>

      {/* 탭 버튼 UI 만들기 */}
      <Nav variant="tabs" defaultActiveKey="link-0" className='my-3'>
        <Nav.Item>
          {/* <Nav.Link eventKey="link-0" onClick={() => setShowTabIndex(0)}>상세정보</Nav.Link> */}
          <Nav.Link eventKey="link-0" onClick={() => setShowTab('detail')}>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* <Nav.Link eventKey="link-1" onClick={() => setShowTabIndex(1)}>리뷰</Nav.Link> */}
          <Nav.Link eventKey="link-1" onClick={() => setShowTab('review')}>리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* <Nav.Link eventKey="link-2" onClick={() => setShowTabIndex(2)}>Q&amp;A</Nav.Link> */}
          <Nav.Link eventKey="link-2" onClick={() => setShowTab('q&a')}>Q&amp;A</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* <Nav.Link eventKey="link-3" onClick={() => setShowTabIndex(3)}>반품/교환정보</Nav.Link> */}
          <Nav.Link eventKey="link-3" onClick={() => setShowTab('exchange')}>반품/교환정보</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* 탭 내용을 다 만들어 놓고 조건부 렌더링하면 됨 */}
      {/* 방법 1: 삼항 연산자 사용 (가독성 나빠용😡) */}
      {/* {showTabIndex === 0
        ? <div>탭 내용 1</div>
        : showTabIndex === 1
          ? <div>탭 내용 2</div>
          : showTabIndex === 2
            ? <div>탭 내용 3</div>
            : showTabIndex === 3
              ? <div>탭 내용 4</div>
              : null
      } */}

      {/* 방법 2: 컴포넌트로 추출 */}
      {/* <TabContents showTabIndex={showTabIndex} /> */}

      {/* 방법 3: 배열이나 객체 형태로 만들어서 조건부 렌더링(편법) 하기 - 실무 사용 */}
      {/* 배열 형태 */}
      {/* {
        [
          <div>탭 내용1</div>,
          <div>탭 내용2</div>,
          <div>탭 내용3</div>,
          <div>탭 내용4</div>
        ][showTabIndex]
      } */}

      {/* 객체 형태 */}
      {
        {
          'detail': <div>탭 내용1</div>,
          'review': <div>탭 내용2</div>,
          'q&a': <div>탭 내용3</div>,
          'exchange': <div>탭 내용4</div>,
        }[showTab]  // 객체 변수에 접근할 때는 [] 사용해서 찾아주기
      }

    </Container>
  );
}

export default ProductDetail;