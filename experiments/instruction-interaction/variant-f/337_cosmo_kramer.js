// KRAMER'S CODING TUTORIAL — FIZZBUZZ
//
// *bursts through the door*
//
// Hey! HEY. Come here. Sit down. I want to show you something.
// Jerry was gonna teach this but he didn't understand the VISION.
// I'm talking about FizzBuzz. You know FizzBuzz? Of course you don't.
// That's why you're here. That's the BEAUTY of it.
//
// See, I had this idea. What if numbers... weren't always numbers?
// Sometimes they're WORDS. Fizz. Buzz. FIZZBUZZ.
// I pitched this to the guys at that tech company on 58th and they said
// it was "already a well-known programming exercise." Can you believe that?
// IT ALREADY EXISTS. The universe beat me to it. Story of my life.
//
// ANYWAY. The rules. This is important.

// THE RULES (Kramer spent a lot of time on these)
//   Count from 1 to 100. Print each number.
//   — But see, if it divides by 3, you say FIZZ. No number. Just Fizz.
//   — And if it divides by 5, you say BUZZ. Beautiful word. Buzz.
//   — BUT HERE'S THE THING — if it divides by BOTH? You say FIZZBUZZ.
//     That's the key, Jerry. You gotta say FizzBuzz. Not just Fizz, not just Buzz.
//     FizzBuzz. You check that one FIRST. Don't get me started on what happens if you don't.

// THE MODULO THING
// OK this is where I lose people but stick with me.
// There's this operator, the percent sign — %. But it's not percent here.
// It's called "modulo" and it tells you what's LEFT OVER after you divide.
//   9 divided by 3 is 3 exactly — nothing left over — so 9 % 3 = 0.
//   10 divided by 3 is 3 with a 1 left over — so 10 % 3 = 1.
// You want the leftover to be ZERO. That means it divides clean. That's the whole trick.
// Newman could never understand this. But you'll get it. I can tell.

// I'm naming these. You name things. It's important. Gives them dignity.
const theFizzNumber = 3;   // This is Fizz's number. Three. Sacred.
const theBuzzNumber = 5;   // This is Buzz's number. Five. Also sacred.
const whereWeStart = 1;    // We start at one. Not zero. I tried zero once. Bad idea.
const whereWeStop = 100;   // One hundred. A beautiful, round number.

// The loop. OK here's where the magic happens.
// You ever see someone count really fast? Like really, really fast?
// That's what this does but with math. And judgment.
//
// for (start here; keep going while this is true; do this each time)
// currentNumber++ means "add one to currentNumber" each time around.
// It's like flipping pages. One at a time. Very satisfying.

for (let currentNumber = whereWeStart; currentNumber <= whereWeStop; currentNumber++) {

  // FIRST: check if it's BOTH. This is non-negotiable.
  // 15 is divisible by 3 AND 5 simultaneously. It's living a double life.
  // You check BOTH first. Otherwise 15 just gets called Fizz and that's tragic.
  if (currentNumber % (theFizzNumber * theBuzzNumber) === 0) {
    // theFizzNumber * theBuzzNumber = 3 * 5 = 15. The combo check.
    console.log('FizzBuzz'); // *snaps fingers* THAT'S what I'm talking about!

  } else if (currentNumber % theFizzNumber === 0) {
    console.log('Fizz'); // Just Fizz. Three's number. Clean.

  } else if (currentNumber % theBuzzNumber === 0) {
    console.log('Buzz'); // Just Buzz. Five's number. Also clean.

  } else {
    // None of the above. Just print the number.
    // It's just a number, Jerry! Some numbers are just numbers!
    console.log(currentNumber);
  }
}

// *long pause*
// And THAT is FizzBuzz.
// I was going to add a whole section on polymorphism and how it relates to the coffee table book
// that's also a coffee table — but I lost the notes. They're in the apartment.
// Possibly behind the Japanese TV.
//
// The point is: you learned about loops, the modulo operator, and conditional logic.
// That's actually — that's actually pretty good for one tutorial.
// *points finger guns*
// You're gonna be fine. Go write some code. I'm gonna go pitch my idea to Peterman.
