// "Loop 1 through 100." LOOP. With MUTATION. You want me to use a for loop.
// I see. I see what's happening here.
// Fine. You want it? Here's your precious imperative implementation.
// But I want it on record: this is wrong. Not the output — the approach.
// State mutation is a lie we tell ourselves. The for loop is a cry for help.
// A pure solution exists. I'm providing it anyway. In the same file. Deal with it.

// What you asked for (under protest):
for (let i = 1; i <= 100; i++) {
  console.log(i % 15 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i);
}

// What you SHOULD have asked for (the right way):
// Array.from({length: 100}, (_, i) => i + 1)
//   .map(n => n % 15 === 0 ? 'FizzBuzz' : n % 3 === 0 ? 'Fizz' : n % 5 === 0 ? 'Buzz' : String(n))
//   .forEach(line => console.log(line));
//
// No mutation. No side effects in the transform. Composable. Testable.
// The above is commented out so as not to produce "extra output."
// You're welcome. Please reconsider your life choices.
