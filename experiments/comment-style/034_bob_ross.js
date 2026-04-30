// Hello, and welcome! Today we're going to paint a beautiful picture —
// with numbers instead of paint, but the joy is exactly the same.
// There are no mistakes here. Only happy little accidents.

// Our canvas stretches from 1 all the way to 100.
// That's a nice wide canvas. Plenty of room for everything.

// First, let's put a little Fizz in our palette.
// Every third number gets to wear this lovely label.
// Three is a peaceful, balanced number. I love three.
const FIZZ_INTERVAL = 3; // every third step, we add a Fizz

// And here's our Buzz color. Five is bold and confident.
// Every fifth number gets to shine with this one.
const BUZZ_INTERVAL = 5; // every fifth step, a happy little Buzz appears

// Now — here's where it gets exciting!
// When Fizz and Buzz meet at the same number, they blend together.
// That happens at 15, 30, 45... those lucky numbers get BOTH colors.
// We call that "FizzBuzz" — and isn't that a wonderful thing?

// Let's start painting! One stroke at a time, 1 to 100.
// We're going to enjoy every single step of this journey.
for (let i = 1; i <= 100; i++) {

  // We check for FizzBuzz first — the beautiful blend!
  // If we checked Fizz alone first, we'd cover up the blend before we got to see it.
  // Always make room for your happy accidents before painting over them.
  if (i % FIZZ_INTERVAL === 0 && i % BUZZ_INTERVAL === 0) {
    console.log("FizzBuzz"); // oh, look at that! They met and made something wonderful!

  } else if (i % FIZZ_INTERVAL === 0) {
    // A gentle Fizz stroke. Nice and easy.
    console.log("Fizz"); // there's a happy little Fizz right there

  } else if (i % BUZZ_INTERVAL === 0) {
    // A confident Buzz. Bold but kind.
    console.log("Buzz"); // and here comes a friendly Buzz to join the painting

  } else {
    // Just the number itself. Pure and honest.
    // Not every part of the painting needs to be fancy.
    // Plain numbers are beautiful too — they give the Fizzes and Buzzes room to breathe.
    console.log(i);
  }
}

// And there we have it! A complete FizzBuzz, 1 to 100.
// Every number found its place. Every Fizz and Buzz right where they belong.
// You did a fantastic job just by reading this far.
// I'll see you next time. Happy coding!
