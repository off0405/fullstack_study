import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function GamePage(props) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Game Page</h1>
        <ul>
          <li>
            <Link to="/games/hot">🔥Hot Game</Link>
          </li>
          <li>
            <Link to="/games/new">✨New Game</Link>
          </li>
        </ul>
      
      {/* Nested Route의 자식 엘리먼트를 해당 위치에 보여주는 역할 */}
      <Outlet />
        
      <button onClick={()=>{ navigate('/') }}>to Main Page..</button>

    </div>
  );
}

export default GamePage;