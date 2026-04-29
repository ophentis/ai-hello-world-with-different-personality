// An engineer's approach. Efficiency through industry. No compromise.

function transformNumbers(count) {
  for (let number = 1; number <= count; number++) {
    let assembly = '';

    if (number % 3 === 0) assembly += 'Fizz';
    if (number % 5 === 0) assembly += 'Buzz';

    console.log(assembly || number);
  }
}

// What have I become? A wizard should create, not process...
transformNumbers(100);
