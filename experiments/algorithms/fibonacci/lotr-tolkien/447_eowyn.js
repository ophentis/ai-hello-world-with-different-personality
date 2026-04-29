// Courage grows. Each number is built upon the strength of those before.

let heartA = 0;
let heartB = 1;

console.log(heartA);
console.log(heartB);

for (let battle = 0; battle < 18; battle++) {
  const heartNext = heartA + heartB;
  console.log(heartNext);
  heartA = heartB;
  heartB = heartNext;
}
