import React from 'react';
// 리액트(JS)에서 이미지 파일 가져오기
import yonexImg from "../images/yonex.jpg";

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yonexImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main(props) {
  return (
    <>
      {/* 메인 이미지 섹션 */}
      <section>
        <MainBackground />
        {/* <img src={yonexImg}/> 이미지 파일 가져와서 이미지 태그 안에 넣기 !*/}
      </section>
    </>
  );
}

export default Main;