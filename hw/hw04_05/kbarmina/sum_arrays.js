function sum (numbers) {
  if (numbers.length === 0) {
    return 0
  }
  
  let summa = 0;
  for (let i=0; i<numbers.length; i++){
    summa += numbers[i];
  }
  return summa;
}