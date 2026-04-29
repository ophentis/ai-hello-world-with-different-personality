// Joker: Why so serious? Chaos reigns in the output!
// Let's put a number on a smile... and divisibility!

for (let punchline = 1; punchline <= 100; punchline++) {
  let joke = '';

  // Three: the trigger to my giggle
  if (punchline % 3 === 0) {
    joke = 'Fizz';
  }

  // Five: the punchline's setup
  if (punchline % 5 === 0) {
    joke += 'Buzz';
  }

  // Sometimes the number IS the joke, see?
  if (!joke) {
    joke = punchline;
  }

  console.log(joke);
}
