import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  productList: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToProductList: (state, { payload: productName }) => {
      state.productList.push(productName) // action 구조분해할당의 payload만 가져옴. 그리고 별칭 지어주기
    }
  }
});

export const { addToProductList } = productSlice.actions;

// useSelector 함수 변수에 담아서 편하게 쓰기 (export)    // 필요하면 filter나 map으로 가공해서 사용할수도
export const selectProductList = state => state.product.productList;

export default productSlice.reducer;