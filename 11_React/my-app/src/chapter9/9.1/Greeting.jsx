function UserGreeing(props) {
  return <h1>Welcome Back !</h1>;
}

function GuestGreeing(props) {
  return <h1>Please sign up</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  // 로그인 여부에 따라 두 개의 컴포넌트를 선택적으로 보여줌
  if (isLoggedIn) {
    return <UserGreeing />;
  } // 불필요한 else문은 굳이 안씀 
  return <GuestGreeing />;
  


}

export default Greeting;