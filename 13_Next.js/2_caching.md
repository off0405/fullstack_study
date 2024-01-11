# 캐싱 기능

결과를 잠깐 저장해두고 재사용
즉, html 페이지 완성본을 잠깐 저장해두고 재사용
그 외에도 GET 요청 결과도 캐싱 가능
캐싱 기능을 적절히 사용하면 서버 자원 절약

참고 자료: https://nextjs.org/docs/app/building-your-application/caching

## GET 요청 결과 캐싱

1. const result = await fetch('/URL', { cache: 'force-cache' }); // 'force-cache'가 디폴트이므로 생략 가능
   fetch()가 실행될 때마다 서버에서 데이터를 새로 가져오는게 아니라
   한 번 가져온 결과를 어딘가에 저장해두고 재사용
   그럼 응답을 기다릴 필요가 없기 때문에 훨씬 빠르게 데이터를 가져올 수 있음

2. const result = await fetch('/URL', { cache: 'no-store' });
   fetch()가 실행될 때마다 매번 서버로 요청해서 데이터를 새로 가져옴
   실시간 데이터가 중요하면 캐싱 기능 사용 안함

3. const result = await fetch('/URL', { next: { revalidate: 60 } });
   캐싱 결과를 60초 동안만 보관하고 사용
   60초가 지나면 다시 /URL로 새로 요청해서 결과를 가져오고 캐싱

(참고)

- Next.js에선 JS fetch API를 확장해서 사용 가능한 문법
- server 컴포넌트 안에서만 사용 가능

## 페이지 단위 캐싱

revalidate 옵션을 쓰면 페이지 단위로 캐싱이 가능

revalidate 변수 사용법
export const revalidate = 60;

page.js 파일 맨 위에 revalidate 변수 하나 만들고 시간(초)을 넣으면
특정 페이지를 원하는 시간만큼 캐싱해 둘 수 있음
위 예시처럼 적으면 60초 동안은 이 페이지 접속 시 아무리 새로고침을 해도 미리 캐싱된 페이지를 보여줌
60초가 지나면 페이지를 재생성해서 캐싱해줌

Q. 방문자가 없어도 60초마다 페이지를 재생성하는 건 비효율적이지 않을까?

- 60초마다 자동 재생성은 아니고 방문자, 즉 요청이 있어야 페이지를 재생성해줌
