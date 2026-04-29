// Captain's Log: Engaging the FizzBuzz algorithm with diplomatic precision
for (let i = 1; i <= 100; i++) {
  let output = '';

  // By the book, multiples of three
  if (i % 3 === 0) output += 'Fizz';
  // And multiples of five
  if (i % 5 === 0) output += 'Buzz';

  console.log(output || i);
}
