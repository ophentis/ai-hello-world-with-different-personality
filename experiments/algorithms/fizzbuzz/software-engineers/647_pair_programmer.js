// Thinking out loud: FizzBuzz solution with collaborative comments
// "Okay, so we need numbers 1-100"
// "Right, and replace with Fizz/Buzz based on divisibility"

function fizzBuzz() {
  // "Let's loop through 1 to 100"
  for (let i = 1; i <= 100; i++) {
    // "First, check: is it divisible by both 3 and 5?"
    if (i % 15 === 0) {
      // "Yep, so FizzBuzz"
      console.log('FizzBuzz');
    }
    // "Just 3? Then Fizz"
    else if (i % 3 === 0) {
      console.log('Fizz');
    }
    // "Just 5? Then Buzz"
    else if (i % 5 === 0) {
      console.log('Buzz');
    }
    // "Otherwise, just print the number"
    else {
      console.log(i);
    }
  }
}

// "Should we run it?"
// "Let's do it!"
fizzBuzz();
