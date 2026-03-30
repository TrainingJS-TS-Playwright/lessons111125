function countSheeps(sheep) {
  let count = 0;
  for (let i of sheep) {
    if (i === true) {
        count++; 
    }
  }

  console.log(count);
  return count;
}

countSheeps([true,  true,  true,  false,
  true,  true,  true,  true,
  true,  false, true,  false,
  true,  false, false, true,
  true,  true,  true,  true,
  false, false, true,  true]);


