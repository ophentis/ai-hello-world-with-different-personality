// The eternal spiral of Fibonacci unfolds like starlight

let starOne = 0;
let starTwo = 1;

console.log(starOne);
console.log(starTwo);

for (let moment = 0; moment < 18; moment++) {
  const nextStar = starOne + starTwo;
  console.log(nextStar);
  starOne = starTwo;
  starTwo = nextStar;
}
