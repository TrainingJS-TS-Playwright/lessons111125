function digitize(n) {
  let digits = n.toString().split('').reverse().map(Number);
  return digits;
}