// Just do the simple work, one step at a time. That's all we can do.

for (let number = 1; number <= 100; number++) {
  let result = '';

  // Even the smallest task matters, if it's done with care
  if (number % 3 === 0) {
    result += 'Fizz';
  }
  if (number % 5 === 0) {
    result += 'Buzz';
  }

  console.log(result || number);
}
