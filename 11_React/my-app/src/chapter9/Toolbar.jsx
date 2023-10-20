const styles = {
  wrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid gray'
  },

  greeting: {
    marginRight: 8
  }
};

function onClickLogIn(props) {
  return(
    <button onClick={props.onClick}>로그인</button>
  )
}
function onClickLogOut(props) {
  return(
    <button onClick={props.onClick}>로그아웃</button>
  )
}

let button;
if (isLoggedIn) {
  button = <onClickLogOut onClick={handleClickLogOut} />
} else {
  button = <onClickLogIn onClick={handleClickLogin} />
}

function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogOut } = props;
  console.log(props);

  return(
  <div style={styles.wrapper}>
    {/* Quiz. 
      로그인 . 로그아웃 버튼 누를 때 마다 isLoggedIn 값이 바뀌고  
      로그인 . 로그아웃 버튼이 바뀌도록 조건부 렌더링
      로그인 상태이면 인사말이 나오도록 조건부 렌더링 
      */}
    <span style={styles.greeting}>환영합니다</span>

    <button onClick={onClickLogin}>로그아웃</button>
    <button onClick={onClickLogOut}>로그인</button>
  </div>
  );
}

export default Toolbar;
