// url 모듈: 인터넷 주소를 쉽게 조작하도록 도와주는 모듈
const url = require('url');
console.log(url);

const { URL } = url;

// 참고로 URL은 노드 내장 객체이기도 해서 require 안하고 바로 사용 가능
new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');