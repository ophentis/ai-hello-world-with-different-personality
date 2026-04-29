// Oceanographer - map ocean current flows
// Current type A emerges at 3-interval boundaries (Fizz), type B at 5 (Buzz)
const depthGradient = 100;
for (let depth = 1; depth <= depthGradient; depth++) {
  let currentType = '';
  if (depth % 3 === 0) currentType += 'Fizz';
  if (depth % 5 === 0) currentType += 'Buzz';
  console.log(currentType || depth);
}