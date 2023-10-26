import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { css } from 'styled-components';

// 페이지
import MainPage from './component/page/MainPage';
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

// 일반적으로 라우팅은 App 컴포넌트에 구현하게 되는데 
// App 컴포넌트가 가장 처음 렌더링 되는 최상위 컴포넌트라서 

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`



function App() {
  return (
    <BrowserRouter>
    <MainTitleText>민희 블로그</MainTitleText>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/post-write' element={<PostWritePage/>}/>
        <Route path='/post/:postId' element={<PostViewPage/>}/>
        {/* 여기서 :postId는 동적으로 변하는 파라미터를 위한 값 => URL 파라미터 */}
        {/* 경로에 콜론(:)을 쓰고 파라미터명을 입력하면 연결된 컴포넌트에서 useParams 훅을 사용해 postId 이름으로 해당 값을 가져올 수 있음 */}

        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
