// Hi! I'm implementing FizzBuzz as requested.
// I want to make sure I understood the requirements correctly, so I'm adding comments
// to show my thinking. Hope that's okay!

// The rules (just to confirm I have them right):
//   - Multiples of 3 → "Fizz"
//   - Multiples of 5 → "Buzz"
//   - Multiples of BOTH 3 and 5 → "FizzBuzz"
//   - Everything else → just print the number

// I'm using a for loop to go from 1 to 100 (inclusive — 100 is included, right? I'm pretty sure)
for (let i = 1; i <= 100; i++) {
  // I check 3 and 5 separately and build up the string.
  // This way I don't need a special case for 15 — FizzBuzz just kind of... happens.
  // (I read about this pattern online, hope it's acceptable!)
  let result = '';

  if (i % 3 === 0) {
    result += 'Fizz'; // divisible by 3
  }

  if (i % 5 === 0) {
    result += 'Buzz'; // divisible by 5
  }

  // If neither condition matched, result is still '' (empty string), so we fall back to i.
  // The || operator returns the right side when the left side is falsy, and '' is falsy in JS.
  console.log(result || i);
}

// That should be it! Let me know if I did anything wrong or if you'd like me to change anything.
// I'm happy to refactor it a different way if there's a preferred style!
