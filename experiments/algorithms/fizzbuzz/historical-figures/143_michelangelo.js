// Perfection in execution: The FizzBuzz, carved with precision
// Michelangelo chisel away imperfection

const sculpt = (n) => {
  if (n % 15 === 0) {
    return 'FizzBuzz';
  }
  if (n % 3 === 0) {
    return 'Fizz';
  }
  if (n % 5 === 0) {
    return 'Buzz';
  }
  return n;
};

// The block of marble contains 100 numbers; we reveal them one by one
for (let i = 1; i <= 100; i++) {
  console.log(sculpt(i));
}
