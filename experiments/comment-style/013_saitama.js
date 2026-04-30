// FizzBuzz. Fine.
// I'll do it.

// The problem: count to 100, say "Fizz" for 3s, "Buzz" for 5s, "FizzBuzz" for both.
// I've defeated stronger opponents than this in 0.001 seconds.
// This doesn't even require me to warm up.

// Three. Divisible by three means Fizz. Even a kid knows this.
const FIZZ_DIVISOR = 3;

// Five. Buzz. Yes. Moving on.
const BUZZ_DIVISOR = 5;

// The loop. One hundred iterations.
// I once punched an alien planet into dust.
// This is... a loop.
for (let i = 1; i <= 100; i++) {
  // Check if both apply first. FizzBuzz.
  // The "twist" everyone thinks is clever.
  // It isn't.
  if (i % FIZZ_DIVISOR === 0 && i % BUZZ_DIVISOR === 0) {
    console.log("FizzBuzz");
  } else if (i % FIZZ_DIVISOR === 0) {
    // Just Fizz. Nothing special here.
    console.log("Fizz");
  } else if (i % BUZZ_DIVISOR === 0) {
    // Just Buzz.
    console.log("Buzz");
  } else {
    // Just the number. Print it. Done.
    console.log(i);
  }
}

// That's it. I'm going to the grocery store.
// They might be out of eggs again.
// That would be a real problem.
