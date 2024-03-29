# 프로젝트 빌드

npm run build
내가 짠 코드를 배포하기 위한 html, css, js 파일로 바꿔줌

일반적으로 빌드 산출물을 클라우드에 올리고 npm start 해주면 됨
(배포하는 플랫폼에 따라 방법은 다를 수 있음)

# Next.js의 렌더링 방식

터미널에서 빌드 후 결과를 보면

1. 동그라미 기호: Static rendering을 의미
   특별한 기능이 없는 정적인 페이지 하나를 만들면 기본적으로 static으로 동작함
   빌드 시 만들어진 html 페이지를 그대로 유정게 보냄
   장점: 미리 만들어진 페이지 완성본을 보내기 때문에 전송이 빠름

2. 람다 기호: Dynamic rendering을 의미
   유저가 페이지에 접속할 때마다 html 페이지를 새로 만들어서 보내줌
   단점으로 서버의 부담이 올라감 -> 캐싱 기능 적절히 사용하면 좋음

## 렌더링 확인 테스트

/list 페이지는 DB에서 데이터를 꺼내와서 Dynamic 으로 동작해야 할 것 같은데, static으로 동작함.

빌드(npm run build) 후 운영 버전으로 실행(npm start)
/list 접속 => 글쓰기 => 리스트 다시 확인
작성한 글이 안나옴 ( 새로고침해도 안나옴.. )
왜? Static으로 동작하기 때문에 빌드 시 나온 html 페이지만 계속 보여짐
/list/page.js로 가서 Dynamic 렌더링으로 동작하도록 수정 필요 !

🎈 export const dynamic = 'force-dynamic'; // Dynamic 렌더링을 강제해줌

## (참고) 렌더링 방식 구분은 자동으로 해주는데

페이지 안에

- fetch('/URL', { cache: 'no-store' }) 로 데이터 가져오는 문법
- useSearchParams(), cookies(), headers()
- [Dynamic Routes]
- 기타 등등
  사용 시 Dynamic 렌더링 방식으로 동작

참고) 13 이전 버전에서는 4가지 렌더링 방식(SSR, CSR, SSG, ISR)

# 캐싱 기능

결과를 잠깐 저장해두고 재사용
즉, html 페이지 완성본을 잠깐 저장해두고 재사용
그 외에도 GET 요청 결과도 캐싱 가능
캐싱 기능을 적절히 사용하면 서버 자원 절약

쿠키랑 뭐가달라...?
