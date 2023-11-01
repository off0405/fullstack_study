import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToProductList, selectProductList } from './productSlice';

function ProductList(props) {

  const product = useSelector(selectProductList)
  const dispatch = useDispatch();
  console.log(product);

  const [addProduct, setAddProduct] = useState('');

  const handleAddProduct = () => {
    dispatch(addToProductList(addProduct))
    setAddProduct('')
  }

  return (
    <>
      <p>
        상품 추가:
        <input
          type="text"
          value={addProduct}
          onChange={(e) => setAddProduct(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') { handleAddProduct() }
          }}
        />
        <button
          type='button'
          onClick={handleAddProduct}
        >
          추가
        </button>
      </p>

      <p>상품 목록</p>
      <ul>
        {product.map((e) => { return <li>{e}</li> })}
      </ul>
    </>
  );
}

export default ProductList;