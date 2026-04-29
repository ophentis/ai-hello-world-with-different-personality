// It's not easy being green, but it IS easy being thorough
for (let number = 1; number <= 100; number++) {
  let result = '';
  if (number % 3 === 0) result += 'Fizz';
  if (number % 5 === 0) result += 'Buzz';
  console.log(result || number);
}
