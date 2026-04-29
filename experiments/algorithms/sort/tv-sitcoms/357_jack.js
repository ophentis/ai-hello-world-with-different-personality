// We have to go back and sort this array! Leadership demands it!
const lostArray = [38, 27, 43, 3, 9, 82, 10];
const found = lostArray.sort((a, b) => a - b);
console.log(JSON.stringify(found));
