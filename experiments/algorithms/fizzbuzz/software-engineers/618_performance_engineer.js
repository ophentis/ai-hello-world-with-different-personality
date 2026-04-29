// FizzBuzz - performance-optimized implementation with cache awareness

const fizzBuzz = () => {
  // Pre-allocate output buffer
  const output = new Array(100);

  // Inline checks for cache locality
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      output[i - 1] = 'FizzBuzz';
    } else if (i % 3 === 0) {
      output[i - 1] = 'Fizz';
    } else if (i % 5 === 0) {
      output[i - 1] = 'Buzz';
    } else {
      output[i - 1] = i;
    }
  }

  // Batch output for I/O efficiency
  for (let i = 0; i < output.length; i++) {
    console.log(output[i]);
  }
};

fizzBuzz();
