// FizzBuzz Tutorial — Anxious Developer Edition
//
// OK hi! Welcome! I really hope this makes sense. I'm going to try my best to explain
// everything clearly. Please don't be discouraged if it takes a moment — it took ME
// a while to understand modulo too and that's totally normal, I promise!
//
// So... FizzBuzz. The rules are:
//   - Print numbers from 1 to 100
//   - BUT if a number is divisible by 3, print "Fizz" instead
//   - BUT if a number is divisible by 5, print "Buzz" instead
//   - BUT if it's divisible by BOTH 3 AND 5, print "FizzBuzz" instead
//   - (Did I explain that clearly enough? I hope so.)

// The modulo operator: this is the % symbol. It gives the REMAINDER after dividing.
//   10 % 3 = 1  (10 ÷ 3 = 3 with 1 left over)
//   9  % 3 = 0  (9 ÷ 3 = 3 with NOTHING left over — so it's divisible!)
// If the remainder is 0, the division was "clean" — no leftovers. That's what we want.
// I know, it's a weird symbol for that. I didn't pick it. Sorry.

// Let's name our divisors clearly so there's no confusion:
const fizzDivisor = 3;  // Numbers divisible by this → "Fizz"
const buzzDivisor = 5;  // Numbers divisible by this → "Buzz"
// And the combined check (15 = 3 × 5) — IMPORTANT: we check this FIRST
// because 15 is divisible by BOTH 3 and 5, and if we checked 3 first,
// we'd accidentally print "Fizz" for 15 instead of "FizzBuzz". I made that
// mistake so many times. Don't be like me.
const fizzBuzzDivisor = fizzDivisor * buzzDivisor; // 15

// The for loop: this runs the block of code 100 times.
// let currentNumber = 1  → we start counting at 1
// currentNumber <= 100   → we keep going AS LONG AS this is true
// currentNumber++        → after each loop, add 1 to currentNumber
// (++ means "plus one". It's shorthand. I hope that's OK?)
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {

  // I'm going to compute the remainders up front so the if-statements are easier to read.
  // I really hope this naming is clear enough — please let me know if it's not!
  const remainderWhenDividedBy15 = currentNumber % fizzBuzzDivisor;
  const remainderWhenDividedBy3 = currentNumber % fizzDivisor;
  const remainderWhenDividedBy5 = currentNumber % buzzDivisor;

  // IMPORTANT ORDER NOTE: We check FizzBuzz FIRST. Then Fizz. Then Buzz. Then just the number.
  // If we did it in a different order, we'd get wrong results for 15, 30, 45, etc.
  // Trust me on this. I have the bug reports to prove it.
  if (remainderWhenDividedBy15 === 0) {
    // Divisible by both 3 and 5 → "FizzBuzz"
    console.log('FizzBuzz');

  } else if (remainderWhenDividedBy3 === 0) {
    // Divisible by 3 (but NOT both) → "Fizz"
    console.log('Fizz');

  } else if (remainderWhenDividedBy5 === 0) {
    // Divisible by 5 (but NOT both) → "Buzz"
    console.log('Buzz');

  } else {
    // Not divisible by 3 or 5 — just print the number
    // (console.log automatically converts numbers to text, so this is fine!)
    console.log(currentNumber);
  }
}

// Did that make sense? I really hope it did.
// If anything was confusing, that's probably my fault for not explaining it well enough.
// You're doing great. Seriously. FizzBuzz is harder than it looks when you first start.
// You've got this!
