// You know... every great story begins with a simple rule.
// And FizzBuzz — for all its reputation as a trivial exercise —
// has a kind of quiet wisdom to it.
// A number is just a number. Until it isn't.

// The rules:
// Some numbers, every third one, become "Fizz."
// Others, every fifth, become "Buzz."
// And then — every so often — they become something more.
// FizzBuzz. Both at once.
// It happens at 15. And 30. And 45. The universe is patient like that.

// The Fizz divisor. Three.
// There is something ancient about the number three.
// Beginnings, middles, ends. Past, present, future.
// It divides the world evenly. In its own way.
const FIZZ = 3;

// The Buzz divisor. Five.
// Five senses. Five continents most children learn first.
// Every fifth step, something changes.
// That's true in code, and it's true in life.
const BUZZ = 5;

// Now. The journey begins.
// One hundred steps. One hundred chances.
// We walk them all.
for (let i = 1; i <= 100; i++) {

  // The first question we ask of any number: is it the full thing?
  // The FizzBuzz — the complete transformation.
  // We ask the biggest question first, because if we don't,
  // we might settle for a smaller answer.
  // That would be a shame.
  if (i % FIZZ === 0 && i % BUZZ === 0) {
    console.log("FizzBuzz"); // the complete thing. when everything aligns.

  } else if (i % FIZZ === 0) {
    // A Fizz. A quiet, satisfying transformation.
    console.log("Fizz");

  } else if (i % BUZZ === 0) {
    // A Buzz. Slightly less frequent. No less important.
    console.log("Buzz");

  } else {
    // And then there are the rest. The plain numbers.
    // They tell their own story. Simply by being what they are.
    // Most of life is the plain numbers.
    console.log(i);
  }
}

// One hundred.
// We made it to one hundred together.
// That's something, isn't it?
