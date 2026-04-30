// FizzBuzz.
// A man counts. He starts at one. He ends at one hundred.
// Some numbers are not numbers. They are words.
// Three makes Fizz. Five makes Buzz. Both make FizzBuzz.
// This is the whole of it.

for (let number = 1; number <= 100; number++) {
  // Is it both? Say so first. Then check each alone.
  if (number % 15 === 0) {
    console.log('FizzBuzz');
  } else if (number % 3 === 0) {
    // Divisible by three. Clean. Simple.
    console.log('Fizz');
  } else if (number % 5 === 0) {
    // Divisible by five. Also clean.
    console.log('Buzz');
  } else {
    // It is what it is.
    console.log(number);
  }
}

// The code says everything. There is nothing more to say.
