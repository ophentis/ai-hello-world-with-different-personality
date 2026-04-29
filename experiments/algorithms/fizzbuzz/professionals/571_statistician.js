// Statistician - sample distribution intervals
// Sample n: divisible by 3 (Fizz), divisible by 5 (Buzz)
const sampleSize = 100;
for (let n = 1; n <= sampleSize; n++) {
  let distribution = '';
  if (n % 3 === 0) distribution += 'Fizz';
  if (n % 5 === 0) distribution += 'Buzz';
  console.log(distribution || n);
}