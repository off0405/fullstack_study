
import { odd, even } from "./var.mjs";

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면...? 0이 아닌 숫자면
    return odd
  }
  return even;
}

export default checkOddOrEven;
// default export
// 파일 안에서 단 한번만 쓸 수 있음
// impot 시 작명 가능! ( import 할 때 )