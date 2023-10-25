import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';



function PalcePage(props) {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Place Page</h1>
      <button onClick={()=>{ navigate('/') }}>to Main Page..</button>
    </div>
  );
}

export default PalcePage;