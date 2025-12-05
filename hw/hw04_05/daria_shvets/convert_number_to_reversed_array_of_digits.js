function digitize(n) {
  // let digits = Array.from(String(n), Number);
  // let reversed = digits.reverse();
  // return reversed;
  return Array.from(String(n), Number).reverse();
  return Array.digitize(n).reverse();
}

console.log(digitize(123));

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript