// Wakanda Forever! The FizzBuzz algorithm
// With the strength of Wakandan technology and innovation

for (let i = 1; i <= 100; i++) {
  let output = '';
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  console.log(output || i);
}
