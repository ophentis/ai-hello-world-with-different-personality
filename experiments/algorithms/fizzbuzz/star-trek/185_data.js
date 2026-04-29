// DATA: Fascinating. I shall process this algorithm with optimal precision.
for (let iteration = 1; iteration <= 100; iteration++) {
  let result = '';
  // Divisible by three is divisible by three
  if (iteration % 3 === 0) result += 'Fizz';
  // Divisible by five is divisible by five
  if (iteration % 5 === 0) result += 'Buzz';
  console.log(result || iteration);
}
