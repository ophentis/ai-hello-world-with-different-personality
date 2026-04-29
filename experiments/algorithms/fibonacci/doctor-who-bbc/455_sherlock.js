// Fibonacci. A sequence of obvious mathematical progression. Bored.

let dataPoint1 = 0;
let dataPoint2 = 1;

console.log(dataPoint1);
console.log(dataPoint2);

for (let iteration = 0; iteration < 18; iteration++) {
  const conclusion = dataPoint1 + dataPoint2;
  console.log(conclusion);
  dataPoint1 = dataPoint2;
  dataPoint2 = conclusion;
}
