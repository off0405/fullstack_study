import styled, { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 추가
import 'react-toastify/dist/ReactToastify.min.css'; // react toastify CSS 추가
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";


const GlobalStyle = createGlobalStyle`
  /* 글로벌(공통) 스타일 */
  body {
    box-sizing: border-box;
  }

  #root {
    text-align: center; // 디자인 편하게 하려고 꼼수...
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

// const StyledButton = styled(Button)`
//   width: 500px;
// `

function App() {

  return (
    <>
      <GlobalStyle />
      {/* 부트스트랩 연습 */}
      {/* <Button variant="primary">Primary</Button>
      <button type="button" class="btn btn-primary">Primary</button> */}

      {/* 헤더 영역: 상단 네비게이션 바 */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index: index route(여기서는 default child Route) */}
          <Route index element={<Main />} />
          {/* 상품별 상세페이지 여러 개를 라우팅 하려면? URL 파라미터 사용
            예: /detail/1로 접속하면 productId에 1이 담기도록 설정 */}
          <Route path="detail/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>

      {/* 토스트 하나로 재사용 */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        pauseOnFocusLoss={false}
        theme="dark" />


    </>
  );
}

export default App;

// Bootstrap
// 레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css,js 라이브러리
// 리액트 용이 따로 있는데 나는 기존 것이 익숙하다 싶으면 기존 부트스트랩 사용해도 무관
// https://react-bootstrap.netlify.app/

// 패키지 설치 및 index.js/StrictMode 제거
// npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios