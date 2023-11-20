import { odd, even } from "./var.mjs";
import checkNumber from "./func.mjs"; // 작명 가능


function checkStringOddorEven(string) {
  if (string.length % 2) { // 홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(4));

