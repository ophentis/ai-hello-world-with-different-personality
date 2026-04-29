// Mobile Developer: Memory efficient, no unnecessary allocations

const arr = [82, 43, 10, 27, 38, 3, 9];
// Sort in-place style (but JS doesn't truly sort in-place)
arr.sort((a, b) => a - b);
// Minimal memory overhead
console.log(JSON.stringify(arr));
