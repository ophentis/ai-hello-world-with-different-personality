// Like my chicken empire, this array requires careful attention to detail.
const disorganized = [38, 27, 43, 3, 9, 82, 10];
const organized = disorganized.sort((x, y) => x > y ? 1 : x < y ? -1 : 0);
console.log(JSON.stringify(organized));
