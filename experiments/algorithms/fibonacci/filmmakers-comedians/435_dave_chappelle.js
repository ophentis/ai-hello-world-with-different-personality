#!/usr/bin/env node
// Equanimity Fibonacci: "Real Numbers"

const keepingItReal = () => {
  // See, Fibonacci is real, man. It's NATURE. Two numbers create a third.
  // That's life! That's how we all got here!
  // And then those numbers create MORE numbers. It's a chain, bro.

  let first = 0;
  let second = 1;
  const reality = [];

  // Twenty real moments
  for (let moment = 0; moment < 20; moment++) {
    reality.push(first);

    // Two become one. One becomes three. It's math, but it's REAL.
    const third = first + second;
    first = second;
    second = third;
  }

  return reality;
};

const sequence = keepingItReal();
sequence.forEach((number) => {
  console.log(number);
});
