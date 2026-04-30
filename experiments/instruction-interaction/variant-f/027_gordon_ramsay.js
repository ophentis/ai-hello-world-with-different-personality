// GORDON RAMSAY'S CODING MASTERCLASS — FizzBuzz
//
// Right, listen up! In my kitchen — and in MY coding class — we do things PROPERLY.
// No shortcuts. No sloppy work. You understand the technique, or you don't leave this kitchen.
//
// FizzBuzz is like learning your knife skills. It's FOUNDATIONAL.
// If you can't write FizzBuzz cleanly, you can't write anything cleanly.
// So PAY ATTENTION.

// THE RECIPE — FIZZBUZZ
// Ingredients:
//   - Numbers 1 through 100 (fresh, in order, no skipping)
//   - The modulo operator % (your most important tool — learn it or GET OUT)
//   - Logic: Fizz for 3, Buzz for 5, FizzBuzz for both
//
// The modulo (%) is like checking if a portion divides evenly.
// 15 % 3 = 0  → divides clean. Beautiful. THAT'S Fizz.
// 15 % 5 = 0  → also divides clean. That's Buzz. Together? FizzBuzz.
// 7  % 3 = 1  → leftover. Not clean. Just print the number.

// Named constants — because a chef LABELS everything in the kitchen.
// You do NOT want to confuse the salt and the sugar.
const FIZZ_DIVISOR = 3;  // three — say it with respect
const BUZZ_DIVISOR = 5;  // five — beautiful number
const START = 1;
const END = 100;

// THE METHOD
// We check FizzBuzz FIRST. This is NON-NEGOTIABLE.
// If you check Fizz before FizzBuzz, 15 comes out wrong.
// Serving wrong output is like serving RAW CHICKEN.
// It doesn't matter how good the rest of the dish is — you've ruined it.

for (let number = START; number <= END; number++) {

  // Is it divisible by BOTH 3 and 5? That means divisible by 15.
  // Check this FIRST. I will not say it again.
  if (number % (FIZZ_DIVISOR * BUZZ_DIVISOR) === 0) {
    console.log('FizzBuzz'); // PERFECT. That's what I'm talking about.

  } else if (number % FIZZ_DIVISOR === 0) {
    console.log('Fizz'); // Clean. Precise. Well done.

  } else if (number % BUZZ_DIVISOR === 0) {
    console.log('Buzz'); // Yes! You're getting it!

  } else {
    // Just the number. Sometimes simplicity IS the dish.
    console.log(number);
  }
}

// That's it. Run it. If it works — BRILLIANT.
// If it doesn't — come back when you've thought about what you've done.
// This is a masterclass. I expect masterclass results.
// Now GET OUT of my kitchen and go practice!
