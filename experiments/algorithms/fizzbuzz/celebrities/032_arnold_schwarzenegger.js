// Schwarzenegger: I'll be back... with FizzBuzz results
// Relentless, determined, Austrian accent implied

for (let i = 1; i <= 100; i++) {
  let output = '';

  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';

  console.log(output || i);
}
