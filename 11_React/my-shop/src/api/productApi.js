import axios from "axios"
// 상품과 관련된 api 요청 함수들을 정의
// 가독성도 좋고, 여러 곳에서 재사용 할 수 있도록 함수로 만듦


// 상품 목록 조회
export const getProducts = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/off0405/db-shop/products')

    if (response.status === 200) { // 요청에 대한 응답의 상태가 OK(200) 일때만 결과를 리턴 
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못되었을 때 등
    console.error(error);
  }
}




// 특정 상품 조회
export const getProductsById = async (id) => {
  try {
    const response = await axios.get(`https://my-json-server.typicode.com/off0405/db-shop/products/${id}`)

    if (response.status === 200) { // 요청에 대한 응답의 상태가 OK(200) 일때만 결과를 리턴 
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못되었을 때 등
    console.error(error);
  }
}






// 상품 더보기
export const getMoreProducts = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/off0405/db-shop/more-products')

    if (response.status === 200) { // 요청에 대한 응답의 상태가 OK(200) 일때만 결과를 리턴 
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못되었을 때 등
    console.error(error);
  }
}



// 만약 서버로 데이터를 보내야 한다면...? = post
// json-server 이용시 테스트 가능
export const orderProduct = async (productId, orderCount) => {
  try {
    const response = await axios.post(`https://my-json-server.typicode.com/off0405/db-shop/product-order`, { productId, orderCount })

    if (response.status === 200) { // 요청에 대한 응답의 상태가 OK(200) 일때만 결과를 리턴 
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못되었을 때 등
    console.error(error);
  }
}
