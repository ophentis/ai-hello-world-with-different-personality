// Hi! Yes! Absolutely! Thank you for asking — I want to make sure I do this
// exactly right. So just to confirm my understanding:
// - Numbers 1 to 100 (inclusive, so that means we start at 1 and end AT 100, not 99)
// - Divisible by 3 → "Fizz"
// - Divisible by 5 → "Buzz"
// - Divisible by BOTH 3 and 5 → "FizzBuzz" (I know this one's a common gotcha!)
// - Otherwise → the number itself
// Okay! I think I've got it. Let me implement this now:

for (let i = 1; i <= 100; i++) {
  // I'm checking divisible-by-both first because if I check 3 first and print
  // "Fizz", I'll never get to check if it's also divisible by 5. My mentor
  // explained this in my first week. I haven't forgotten!
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    // Just print the number. I'm using console.log which adds a newline
    // automatically, so each one will be on its own line like you asked!
    console.log(i);
  }
}

// Done! I tested it in my head: 1 prints 1, 2 prints 2, 3 prints Fizz,
// 4 prints 4, 5 prints Buzz... and 15 should print FizzBuzz. I'm pretty sure
// that's right? Let me know if you need me to change anything!
