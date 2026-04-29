// Cloud Strife's Brooding FizzBuzz
// Even in numbers, there's sorrow... SOLDIER protocol initiated.

for (let i = 1; i <= 100; i++) {
  let memories = '';

  // The weight of fives and threes... I carry them all
  if (i % 3 === 0) {
    memories += 'Fizz';
  }

  if (i % 5 === 0) {
    memories += 'Buzz';
  }

  // The planet weeps with each number
  console.log(memories || i);
}
