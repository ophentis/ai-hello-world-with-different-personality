// Pragmatic tech lead approach: simple, readable, maintainable
// Balanced between clarity and performance

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';

    // Check divisibility - straightforward logic
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';

    // Fall back to number if no output
    console.log(output || i);
  }
}

fizzbuzz();
