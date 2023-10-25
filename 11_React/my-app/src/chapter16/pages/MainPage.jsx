import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MainPage(props) {
  // 사용자가 직접 경로를 쳐서 이동하는 경우는 드물다
  // 페이지 이동을 위한 useNavigate() 훅을 제공
  // 사용법
  // navigate(/'경로');
  // navitage(1); 또는 navitage(- 1); => 앞으로 가기, 뒤로 가기
  const navigate = useNavigate();


  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        <li onClick={()=>{ navigate('/places') }}>place</li>
        <li onClick={() => { navigate('/games') }}>game</li>

        {/* a태그 역할의 Link 컴포넌터~ 
          차이점?
          a태그의 기본 동작은 페이지를 이동시키면서, 페이지를 아예 새로 불러옴(새로고침)
          그렇게되면 리액트 앱이 지니고 있는 상태들도 초기화되고,
          렌더링된 컴포넌트도 모두 사라지고 새로 렌더링을 하게됨 (언마운팅 -> 마운팅)

          link 컴포넌트는 새로고침을 막음
          => a태그 사용이 필요하다면 Link 컴포넌트를 사용해봅시다!
          */}
          <li>
            <Link to="/places">🚗Place</Link>
          </li>
          <li>
            <Link to="/places">🎴Game</Link>
          </li>
        
      </ul>
    </div>
  );
}

export default MainPage;