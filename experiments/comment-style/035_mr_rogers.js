// Hello, neighbor. Won't you come and sit with me for a moment?
// We're going to write a computer program together today.
// I think you'll find it's not so difficult when we take it one step at a time.

// This program is called FizzBuzz.
// It asks a very friendly question of each number from 1 to 100:
// "Are you a multiple of 3? Or 5? Or both?"
// And each number gives its own honest answer.
// I think that's a really lovely thing. Every number gets to speak.

// Some numbers are multiples of three.
// That means three fits into them evenly — like chairs that fit perfectly at a table.
// We'll call those numbers "Fizz."
const FIZZ = 3; // every number that three fits into evenly

// Some numbers are multiples of five.
// Five fits into them perfectly. We'll call those "Buzz."
const BUZZ = 5; // every number that five fits into evenly

// And some special numbers — like 15, and 30, and 45 —
// they're multiples of BOTH three AND five.
// Those get to say "FizzBuzz." The whole thing.
// Isn't it wonderful when two things come together like that?

// Now let's visit each number, one by one.
// We start at 1, and we go all the way to 100.
// No rushing. Each number deserves our full attention.
for (let i = 1; i <= 100; i++) {

  // We ask the most complete question first:
  // "Are you special in BOTH ways?"
  // It's important to recognize people — and numbers — fully before we simplify them.
  if (i % FIZZ === 0 && i % BUZZ === 0) {
    console.log("FizzBuzz"); // the most complete answer

  } else if (i % FIZZ === 0) {
    // This number is a friend of three.
    console.log("Fizz"); // what a nice, fizzy number

  } else if (i % BUZZ === 0) {
    // This number is a friend of five.
    console.log("Buzz"); // a buzzy number — I like that

  } else {
    // This number just is what it is.
    // And that is perfectly fine.
    // You don't have to be a Fizz or a Buzz to matter.
    // Just being yourself is enough.
    console.log(i);
  }
}

// We made it all the way to 100 together.
// I'm proud of you for that.
// You are special, just the way you are.
// And so is every number in this neighborhood.
