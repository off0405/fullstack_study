// 3. Redux State Slice 만들기

import { createSlice } from "@reduxjs/toolkit";

// state 초기값으로 원시값, 배열, 객체 등 모든 데이터 사용 가능해요
// 아래와 같이 객체로 사용하는게 제일 좋다(가독성도 좋고 state 관리 및 변경이 편해요)
const initialState = {
  value: 0
}


// 전역 state 만드는 방법
// useState()랑 비슷한 역할을 하는데 Redux에서는 state 하나를 slice라고 부릅니다
// creatSlice() 함수: state이름, 초기값 설정, 액션 및 리듀서 함수를 만드는 것을 도와줍니다.
// createSlice()의 인자값으로 name, initialState, reducers 속성을 갖는 객체를 넣습니다.
export const counterSlice = createSlice({
  name: 'counter', // state 이름(action 이름을 만드는 데에도 쓰여요)
  initialState, // state의 초기값(위에서 객체 형태로 정의)  // initialState: initialState


  // reducer : state를 변경하는 함수들을 정의하고 관련된 action을 생성
  // Re(act State Pro)ducer => Reducer
  // 현재 state와 action 객체를 파라미터로 받아오고 필요한 경우 상태를 업데이트하고 새 상태를 반환하는 함수

  reducers: {
    increment: (state) => {  // 첫번째 파라미터: 현재 state를 받아옴
      state.value += 1; // 배열 또는 객체의 경우에도 직접 수정하는 형태로 작성이 가능 ❕ ❕ ❕
      // 실제로는 상태를 직접 변경하지 않고 내부적으로 state 복사본을 만들어서 그 복사본을 변경하고 새로운 상태를 반환까지~
      // 가능한 이유? immer 라이브러리가 내장되어 '불변성 관리'를 해줌
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => { // 두번째 파라미터: action 객체 = { type: 발생한 액션의 타입 , payload(화물): 전달 데이터 }
      console.log(action);
      state.value += action.payload;

    }
  }
});

// 각 리듀서에 대한 액션 생성 함수들이 객체 형태로 들어있어요
// 액션 생성 함수: 해당 액션 객체를 만들어준다...
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 위에서 정의한 reducer 함수들
export default counterSlice.reducer;



// 정리 --------------------------------------------------
// 앞으로 Redux의 state를 변경하려면?
// 1) state 변경 함수(reduce)를 만들기
// 2) 다른데서 사용할 수 있게 export 해주기
// 3) 수정을 원할 때 그 함수를 실행해달라고 store에 요청을 해야됨 => dispatch() 함수를 사용해서~ Store에 action을 보낸당.

// 쉽게 이벤트에 비유하자면,
// 이벤트 -> 해당 이벤트 핸들러
// 액션 -> 해당 리듀서