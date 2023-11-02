import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: null,

};


// thunk를 이용한 비동기 작업 처리하기
// thunk 미들웨어 : 액션을 dispatch 했을 때 reducer에서 처리하기에 앞서 사전에 지정된 작업을 실행해줌
// action과 reducer 중간에 끼어있는 중간자 역할, action -> (미들웨어) -> reducer 
// 주로 API 요청 같은 비동기 작업을 수행할 때 사용

// thunk를 이용한 비동기 작업 처리 시 이점?
// 🔸 API 요청에 대한 상태 관리 쉽게 가능(요청 시작 - "로딩중" / 요청 성공 또는 실패 시 "로딩 끝"을 명시)
// 🔸 요청이 성공 시 응답 상태관리 / 실패시 에러 상태 관리가 쉬움

// createAsyncThunk() : 비동기 작업을 처리하는 action 생성 함수를 반환해줍니다
export const getMoreProductsAsync = createAsyncThunk(

);



// 상품 정보를 담을 slice 만들기
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.productList = action.payload;
    },
    getSelectedProducts: (state, action) => {
      state.selectedProduct = action.payload;
    },

    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },

    addMoreProduct: (state, action) => {
      state.productList.push(...action.payload);
      // state.productList = [...state.productList, ...action.payload]
    }

  }
});

// 액션 생성 함수
export const { getAllProducts, getSelectedProducts, clearSelectedProduct, addMoreProduct } = productSlice.actions;

// 선택자 함수
export const selectProductList = (state) => state.product.productList;
export const selectSelectedProduct = (state) => state.product.selectedProduct;

// 리듀서 함수들
export default productSlice.reducer;

