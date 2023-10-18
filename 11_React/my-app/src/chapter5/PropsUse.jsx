import Footer from "./5.3/Footer";
import Header from "./5.3/Header";
import Layout from "./5.3/Layout";
import Profile from "./Profile";

function PropsUse() {
  return (
    <>
      {/* <Profile 
        키-값 쌍의 형태로 자식 컴포넌트에 props를 전달할 수 있음
        정수, 변수, 다른 컴포넌트 등 값을 넣을 때는 {}로 감싼다
        문자열은 {} 생략 가능 
        />  */}
      <Profile
        viewCount={300}
        name='HK'
        introduction='안녕하세요 나는 HK' />



      <Layout
        width={2500}
        height={1440}
        // props로 다른 컴포넌트를 넘기는 것도 가능
        header={
          <Header title="고니의 블로그입니다." />
        }
        footer={
          <Footer />
        }
      />
    </>
  );
}

export default PropsUse;