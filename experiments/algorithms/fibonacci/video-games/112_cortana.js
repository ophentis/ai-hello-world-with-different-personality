// Cortana's Fibonacci Sequence Analysis
// I'm processing this mathematical sequence. It's... beautiful.

let analyticalA = 0;
let analyticalB = 1;

console.log(analyticalA);

for (let iteration = 0; iteration < 19; iteration++) {
  console.log(analyticalB);
  let analyticalC = analyticalA + analyticalB;
  analyticalA = analyticalB;
  analyticalB = analyticalC;
}
