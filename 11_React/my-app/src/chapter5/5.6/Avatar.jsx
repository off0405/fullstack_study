function Avatar(props) {
  return(
    //컴포넌트로 추출 했으므로 Commnet에서만 쓰이는게 아니기에 author보다 user라는 일반적인 단어로 바꿔주기
    <img className="avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
      style={{
        width: 50,
        height: 50,
        borderRadius: '50%'
      }}
    />
  );
}

export default Avatar;