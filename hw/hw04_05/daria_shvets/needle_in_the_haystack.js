function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return `found the needle at position ${i}`;
        };
    }
    // return haystack.forEach((element, index) => {
    //     if (element === "needle") {
    //         return `found the needle at position ${index}`;
    //     }
    // })

}




console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3','needle', true, false]));

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript