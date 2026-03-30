function squareSum(numbers){
let sum = 0;
    for (let i of numbers) {
       sum += i ** 2;
    }
   
    console.log(sum);
    return sum;
    
}
squareSum([1,2,2]);