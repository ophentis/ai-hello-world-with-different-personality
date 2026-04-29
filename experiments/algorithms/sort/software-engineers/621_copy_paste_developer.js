// Found this on stack overflow - sorting numbers
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const arr = [82, 43, 10, 27, 38, 3, 9];
arr.sort((a, b) => a - b);
console.log(JSON.stringify(arr));
