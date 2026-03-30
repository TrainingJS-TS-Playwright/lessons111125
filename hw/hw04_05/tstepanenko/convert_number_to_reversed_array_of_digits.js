function digitize(n) {
  let str = String(n);
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(Number(str[i]));
  }
  return result;
}
//console.log(digitize(35231));
//console.log(digitize(0));