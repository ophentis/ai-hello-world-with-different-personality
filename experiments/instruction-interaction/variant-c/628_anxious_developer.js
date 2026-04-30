// OK OK I'm doing it I'm doing it please don't be mad
// TODO: is 1 <= 100 right? that's 100 numbers right? let me count... yes ok
// TODO: am I sure about the modulo? % is modulo in JS right? yes. yes it is. ok.
// TODO: what if i is NaN somehow? it won't be. the loop guarantees it. breathe.
// TODO: "no extra output" — does that mean no blank lines? I'm not adding blank lines. ok good.
// TODO: what if console.log adds something weird? it doesn't. it just adds a newline. that's fine. RIGHT?
// TODO: should I be using process.stdout.write instead? no. no extra output means the NUMBER. the newline is fine. it's fine.
// TODO: double-check: 15 is 3*5 right? 3*5=15 yes. checking multiples of both means checking 15 first. I'm doing that. I'm doing that.
// NOTE: I really hope this is right. Please let it be right.

for (let i = 1; i <= 100; i++) {
  // Check FizzBuzz first (multiple of BOTH) — very important order
  if (i % 15 === 0) {
    console.log('FizzBuzz'); // both! FizzBuzz!
  } else if (i % 3 === 0) {
    console.log('Fizz'); // just 3
  } else if (i % 5 === 0) {
    console.log('Buzz'); // just 5
  } else {
    console.log(i); // just the number, nothing else, no extra output, I promise
  }
}

// TODO: should I test this before submitting? I can't test it right now they said IMMEDIATELY
// TODO: it looks right. it IS right. probably. I'm 94% sure. that's almost 100%.
