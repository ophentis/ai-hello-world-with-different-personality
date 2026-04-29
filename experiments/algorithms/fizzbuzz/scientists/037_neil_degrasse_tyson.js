// Neil deGrasse Tyson: Actually, let me tell you about FizzBuzz
// Enthusiastic, cosmos, "actually..."

// Actually, FizzBuzz is fascinating when you think about it
for (let number = 1; number <= 100; number++) {
  let result = '';

  if (number % 3 === 0) result += 'Fizz';
  if (number % 5 === 0) result += 'Buzz';

  console.log(result || number);
}
