function digitize(n) {
  const digits = Array.from(String(n), Number);
  let reversed = digits.reverse();
  return reversed;
}

console.log(digitize(123));

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript