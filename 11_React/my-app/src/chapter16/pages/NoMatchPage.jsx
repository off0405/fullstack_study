import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const NoMatchPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 64px;
`

function NoMatchPage(props) {
  const navigate = useNavigate();

  return (
    <NoMatchPageWrapper>
      <h1>404 Not Found</h1>
      <button onClick={()=>{ navigate('/') }}>To Main</button>
    </NoMatchPageWrapper>
  );
}

export default NoMatchPage;