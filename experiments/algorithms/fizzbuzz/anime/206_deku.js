// *muttering* FizzBuzz... interesting pattern... divisible by 3... divisible by 5... combinatorial analysis...
for (let val = 1; val <= 100; val++) {
  let analysis = '';
  if (val % 3 === 0) analysis += 'Fizz';
  if (val % 5 === 0) analysis += 'Buzz';
  console.log(analysis || val);
}
