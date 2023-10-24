import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;

  /* 테마 사용 시 ThemeProvider! */
  background-color: ${props => props.theme.teal};
`;

const Block = styled.div`   
  padding: ${props => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${props => props.backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const blockItems = [
  {
    label: '1',
    padding: '1rem',
    backgroundColor: 'red'
  },
  {
    label: '2',
    padding: '3rem',
    backgroundColor: 'green'
  },
  {
    label: '3',
    padding: '2rem',
    backgroundColor: 'blue'
  },
]


function Blocks(props) {
  return (
    <Wrapper>
      {/* Quiz. 배열 반복 렌더링 및 스타일링 완성 */}
      {blockItems.map((blockItem)=>
      {return (
        <Block 
        key={blockItem.label} 
        padding= {blockItem.padding} 
        backgroundColor= {blockItem.backgroundColor}
        >
          {blockItem.label}
        </Block>
        );
      })}
    </Wrapper>
  );
}

export default Blocks;