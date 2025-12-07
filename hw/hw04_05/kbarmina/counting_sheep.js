function countSheeps(sheep) {
   if(sheep.length==0 || sheep==[undefined] || sheep==[null] || sheep==[false]){
      return 0;
    }
  
  let result = 0;
  for (let i=0; i<sheep.length; i++){
    if (sheep[i]==true){
      result += 1;
    }
  }
  return result;
    
}