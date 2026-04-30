// Hey! So I just learned FizzBuzz last week and my mentor said I should write it down
// in a way that explains it for other people who are just starting out.
// I remember being confused by some parts, so I'll try to explain those specifically!
// Here goes nothing...

// So the goal is: count from 1 to 100, but:
//   - instead of saying "3" you say "Fizz" (and 6, 9, 12, anything divisible by 3)
//   - instead of saying "5" you say "Buzz" (and 10, 15... wait — 15 is also divisible by 3!)
//   - when it's divisible by BOTH 3 and 5 (like 15, 30, 45...) you say "FizzBuzz"
//   - for everything else, just say the number

// The part that confused me: what does "divisible by" even mean in code??
// Answer: use the % operator! It's called "modulo" (or "mod" for short).
// % gives you the REMAINDER after dividing.
//   9 % 3 = 0   → 9 divided by 3 is exactly 3, no leftovers → divisible!
//   10 % 3 = 1  → 10 divided by 3 is 3 with 1 leftover → NOT divisible
// So if (number % 3 === 0) is the way to say "number is divisible by 3"
// The === means "is exactly equal to" (use === not == in JavaScript, trust me)

// I'm using const for values that don't change (like our divisors)
// and let for the loop counter (because it changes each loop!)
const fizzDivisor = 3;  // numbers divisible by this say "Fizz"
const buzzDivisor = 5;  // numbers divisible by this say "Buzz"

// IMPORTANT THING I LEARNED THE HARD WAY:
// You have to check if it's divisible by BOTH first (before checking 3 or 5 alone).
// Why? Because 15 is divisible by both 3 and 5. If you check "divisible by 3" first,
// your code prints "Fizz" for 15 and never gets to "FizzBuzz". I made this mistake!
// So we check 15 (= 3 * 5) first.

// The for loop — this repeats code for each number from 1 to 100
// let i = 1         → start the counter at 1
// i <= 100          → keep going as long as i is 100 or less
// i++               → after each loop, add 1 to i (i++ is shorthand for i = i + 1)
for (let i = 1; i <= 100; i++) {

  // Check FizzBuzz first (divisible by BOTH) — see above for why!
  if (i % (fizzDivisor * buzzDivisor) === 0) {
    // fizzDivisor * buzzDivisor = 3 * 5 = 15
    console.log('FizzBuzz');

  } else if (i % fizzDivisor === 0) {
    // divisible by 3, but we already know it's NOT divisible by both
    console.log('Fizz');

  } else if (i % buzzDivisor === 0) {
    // divisible by 5, but not by both
    console.log('Buzz');

  } else {
    // not divisible by 3 or 5 — just print the number
    // (console.log works with numbers directly, no need to convert to text)
    console.log(i);
  }
}

// And that's it! I was honestly surprised how short it is once you understand modulo.
// If you're confused about anything, the parts that tripped me up were:
//   1. What % does (remainder, not percent!)
//   2. Why you check FizzBuzz (both) BEFORE checking Fizz or Buzz alone
//   3. === vs == (always use === in JavaScript)
// Good luck! You've got this. It took me like 3 tries to get it right, so don't stress.
