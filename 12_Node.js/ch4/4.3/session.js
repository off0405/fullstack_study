const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// 문자열로 된 쿠키를 객체로 바꿔주는 함수
const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const session = {} // 데이터 저장용 세션 객체 생성


http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie) // mycookie=test; => { mycookie: 'test }

  console.log(req.url);
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const url = new URL(req.url, 'http://localhost:8085'); // 상대 경로 앞에 붙여줄 base url
    const name = url.searchParams.get('name') // 쿼리스트링에서 name을 추출
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 5) // 테스트: 1분 뒤 쿠키 삭제됨 => 로그인 풀림

    console.log(name); // 한글 일 때 encodeURIComponent로 인코딩 안하면 쿠키에 이상한 문자가 들어갔다고 에러가 발생해요 ~

    //세션 사용하기
    const uniqueInt = Date.now(); // 세션 키(세션 ID) 만들기: 현재 시간(고유한 값)을 사용해 임의로 생성
    session[uniqueInt] = {
      name,
      expires
    } // 서버 메모리에 세션 저장


    res.writeHead(302, { // 302: 리다이렉션
      Location: '/', // 이 주소로 돌려보내라
      'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
    });
    // 쿠키 옵션
    // Expires: 만료 기한, 브라우저가 자동으로 서버에 쿠키를 보내주는데 만료된 쿠키는 제거되서 안보내짐, 안적으면 세션 쿠키가 됨
    // HttpOnly: JS에서 쿠키에 접근하지 못하게 설정, 보안상 설정하는 것이 좋음
    // Path: 경로../, 즉, 루트 아래에 있는 주소에서 이 쿠키를 다 쓸 수 있음
    res.end()

    // name이라는 쿠키가 있는 경우
  } else if (cookies.session && session[cookies.session]?.expires > new Date()) { // 만료되면 쿠키에서 제거되겠지만 한번 더 엄격하게 검사
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end(`${session[cookies.session].name}님 안녕하세요~`)

    // name이라는 쿠키가 없는 경우(처음 접속 시, 로그아웃 상태)
  } else {
    try {
      const data = await fs.readFile(path.join(__dirname, 'cookie2.html'))
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(data)
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.end(error)

    }

  }

})
  .listen(8085, () => {
    console.log('8085번 포트에서 서버 대기 중입니다~');
  })


// 개념 이해를 돕기 위한 간단한 예제이므로 실제론 보안상 문제가 있음
// 실 서버에서는 세션을 직접 구현하지 않음
// 추후 6장에서 실무에서 세션을 어떻게 쓰는지 (express-session) 다시 다룰 예정

// 여기까지 서버를 만들면서
// 노드에서 제공하는 방식(http 모듈)으로는 서버 코드가 너무 복잡하고, 유지 보수하기도 힘듦,
// 코드를 깔끔하고 유지 보수하기 편하게 해주는 Express 프레임워크를 사용할 예정