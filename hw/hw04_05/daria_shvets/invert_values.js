function invert(array) {
    // const invertedArr = array.map(n => n === 0 ? 0 : -n);
    // return invertedArr;
    return array.map(n=> -1 * n);
}


console.log(invert([1, 2, -1, 0]))

// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript