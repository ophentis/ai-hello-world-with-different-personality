// Mark Twain: Folksy wisdom with a wink and a grin
// If it swims, flies, or divides evenly, call it by name

for (let number = 1; number <= 100; number++) {
  let verdict = '';

  // Divisible by three, mark it Fizz and be done
  if (number % 3 === 0) {
    verdict = 'Fizz';
  }

  // Five's the ticket to Buzz
  if (number % 5 === 0) {
    verdict += 'Buzz';
  }

  // Otherwise, the truth needs no embellishment
  if (verdict === '') {
    verdict = number;
  }

  console.log(verdict);
}
