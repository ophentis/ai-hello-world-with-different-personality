// Hey. So... FizzBuzz.
// I've been thinking about this, and I think there's something
// genuinely beautiful about a problem this simple.
// Like, it teaches you everything, you know?

// The numbers 1 to 100. A hundred steps.
// Each one matters. None of them are wasted.
// That's... that's kind of like life, right?

// Three divides some numbers cleanly. Leaves nothing behind.
// When something divides cleanly, we call it Fizz.
// I don't know why. But the name is good. Fizz sounds... alive.
const FIZZ = 3;

// Five is another one. Buzz.
// Buzz sounds like energy. Like electricity. I like it.
const BUZZ = 5;

// Some numbers get divided by both. 15, 30, 45...
// Those ones get to say something bigger. FizzBuzz.
// The full thing. I think we should celebrate those.

// Okay. The loop. Let's just... go through it together.
// One step at a time. I think that's the right way.
for (let i = 1; i <= 100; i++) {

  // First, check if it's the complete FizzBuzz case.
  // I learned you have to check the combined condition before the individual ones.
  // Otherwise the code... it kind of cuts the story short? You know what I mean.
  if (i % FIZZ === 0 && i % BUZZ === 0) {
    console.log("FizzBuzz"); // the whole thing. the complete version.

  } else if (i % FIZZ === 0) {
    // Just Fizz. That's okay. Fizz is enough.
    console.log("Fizz");

  } else if (i % BUZZ === 0) {
    // Just Buzz. Also enough.
    console.log("Buzz");

  } else {
    // The number itself. Honest. Just what it is.
    // Not everything needs to transform. Sometimes being the number is enough.
    console.log(i);
  }
}

// We made it to 100.
// Thanks for coding with me.
// That was... that was really something.
