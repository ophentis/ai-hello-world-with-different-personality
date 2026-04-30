// DEADPOOL'S CODING TUTORIAL: FIZZBUZZ EDITION
// *leans against fourth wall*
// Oh hey! Didn't see you there. I'm Deadpool. Wade Wilson. The Merc with a Mouth.
// And apparently also a coding tutor now? Life comes at you fast.
//
// So. FizzBuzz. It's like the "Hello World" of job interviews.
// Everyone acts like it's trivial and then 30% of candidates mess it up.
// I'm going to teach you how to NOT be that 30%. Let's GO.
//
// WAIT. Before we start — quick disclaimer:
// This tutorial may contain: recursion jokes, unnecessary violence references,
// chimichanga mentions, and one (1) unnecessary function that exists purely for fun.
// You've been warned. Also hi, reader of source code.

// THE RULES (Yes, Deadpool follows rules. Sometimes.)
//   Count 1 to 100. Print each number.
//   EXCEPT: multiples of 3 → "Fizz"
//   EXCEPT: multiples of 5 → "Buzz"
//   EXCEPT: multiples of BOTH → "FizzBuzz" (the big kahuna, check this FIRST)
//   Otherwise: just the number. Easy. Except people get it wrong ALL THE TIME.

// THE MODULO OPERATOR: your new best friend
// % gives you the remainder after division. That's it. That's the whole thing.
//   15 % 3 = 0   (15 ÷ 3 = 5, no leftovers, clean kill)
//   15 % 5 = 0   (15 ÷ 5 = 3, also clean)
//   7  % 3 = 1   (7 ÷ 3 = 2 with 1 left over — not divisible, move along)
// Zero remainder = "yes, divisible." Non-zero = "nope, not this one."

// Named constants because even I have standards:
const FIZZ_DIVISOR = 3;       // Three. Like my healing factor regeneration cycles.
const BUZZ_DIVISOR = 5;       // Five. Like my number of chimichangas per sitting. Minimum.
const START = 1;              // Where the fun begins
const END = 100;              // Where it ends. Like my enemies. (Too dark? Too dark.)

// Here's a completely unnecessary but delightful helper function.
// Does this need to be a function? No. Is it here anyway? YES. BECAUSE YOLO.
// A function is a named block of code you can reuse. This one decides what to say.
function whatDoWeYell(number) {
  // CHECK FIZZBUZZ FIRST. This is the most important lesson of the whole tutorial.
  // 15 is divisible by BOTH 3 and 5. If you check 3 first, you get "Fizz" for 15.
  // That's WRONG. It's like wearing only HALF a costume. Unacceptable.
  if (number % (FIZZ_DIVISOR * BUZZ_DIVISOR) === 0) {
    return 'FizzBuzz'; // MAXIMUM CHAOS. Beautiful.
  }

  if (number % FIZZ_DIVISOR === 0) {
    return 'Fizz'; // Classic.
  }

  if (number % BUZZ_DIVISOR === 0) {
    return 'Buzz'; // Also classic.
  }

  // None of the above? Just the number. Boring but necessary.
  return String(number); // "String()" turns the number into text. Not relevant to chimichangas.
}

// THE LOOP. This is where we actually do the thing.
// for (setup; keep-going-while-this-is-true; do-this-each-time) { ...code... }
// It's really just: start at 1, keep going until we hit 100, add 1 each time.
// It's not complicated. I wrote it in five seconds. I also regenerate from bullet wounds, so.

for (let currentNumber = START; currentNumber <= END; currentNumber++) {
  // Call our unnecessarily fun helper function and print the result
  console.log(whatDoWeYell(currentNumber));
}

// AND THAT'S FIZZBUZZ.
// Loops: check. Modulo: check. Conditionals: check. Priority order: CHECK.
// If you got confused anywhere, re-read the comments. They're funnier the second time.
// Now go ace that interview. Or become a mercenary. Both are viable career paths.
// *backflips out of tutorial*
// ...I'm still in the file though. Scroll up. I'll always be here.
