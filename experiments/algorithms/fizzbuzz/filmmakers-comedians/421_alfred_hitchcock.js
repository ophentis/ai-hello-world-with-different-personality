#!/usr/bin/env node
// A Study in Suspense: The FizzBuzz Technique
// Directed by: Alfred Hitchcock

const suspensefulCounter = (() => {
  let i = 1;
  return () => {
    let result = '';

    // The tension builds...
    if (i % 3 === 0) {
      result += 'Fizz';
    }
    // ...and here's the twist
    if (i % 5 === 0) {
      result += 'Buzz';
    }
    // The unexpected revelation
    if (result === '') {
      result = String(i);
    }

    const output = result;
    i++;
    return output;
  };
})();

// One hundred scenes. Each one builds upon the last.
for (let scene = 0; scene < 100; scene++) {
  console.log(suspensefulCounter());
}
