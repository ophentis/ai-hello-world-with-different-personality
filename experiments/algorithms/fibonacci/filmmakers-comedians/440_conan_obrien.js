// The Fibonacci sequence: where each number is the sum of the previous two.
// Much like my career: built on mistakes and bad decisions.
let embarrassingFirst = 0;
let embarrassingSecond = 1;

// Print them like a monologue
console.log(embarrassingFirst);
console.log(embarrassingSecond);

// Keep digging the hole for 18 more
for (let i = 0; i < 18; i++) {
  const nextEmbarrassment = embarrassingFirst + embarrassingSecond;
  console.log(nextEmbarrassment);
  embarrassingFirst = embarrassingSecond;
  embarrassingSecond = nextEmbarrassment;
}
