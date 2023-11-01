## Redux 사용 순서
0. Redux Toolkit and React-Redux 설치하기
npm install @reduxjs/toolkit react-redux

1. Redux Store 만들기 (app/store.js) 💙 configureStore

2. 리액트에 Redux Store 제공하기 (index.js) 💙 Provider

3. Redux State Slice 만들기 (features/counter/counterSlice.js)

4. Redux Store에 Slice Reducers 추가하기 (app/store.js)

5. 리액트 컴포넌트에서 Redux State와 Actions 사용하기 (features/counter/Counter.js)

## <연습>
1. ProductList 컴포넌트
- text input 하나 만들고 상품명 입력 받기
- 상품 추가 버튼을 누르면 productList 전역 상태에 추가되고 
추가된 상품 리스트가 화면에 렌더링 되도록 만들기
- ProductList 컴포넌트는 ReduxTestApp에서 Counter 밑에 렌더링

2. productSlice 
- 상태 이름: product
- 초기 상태로 productList: [] 배열 만들기
- 리듀서로 상품 하나를 추가하는 addToProductList 정의