// In the great panorama of FizzBuzz, many forces converge.
// The historical sweep of numbers from one to one hundred.
// Each affected by forces beyond its control. Yet each significant.

const TOTAL_ITERATIONS = 100;

for (let i = 1; i <= TOTAL_ITERATIONS; i++) {
  let narrative = "";
  // The invisible hand of divisibility guides all.
  if (i % 3 === 0) narrative += "Fizz";
  if (i % 5 === 0) narrative += "Buzz";
  // War and peace exist in each iteration.
  console.log(narrative || i);
}
