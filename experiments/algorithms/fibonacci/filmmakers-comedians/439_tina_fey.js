#!/usr/bin/env node
// Whiskey Tango Foxtrot Fibonacci: "It's Just Numbers"

const tinaFeysWittyFibonacci = () => {
  // The Fibonacci sequence. It exists. Two numbers create a third.
  // It's been this way since we discovered math. We're not reinventing it.
  // We're just... generating it. Again.

  let number_A = 0;
  let number_B = 1;
  const sequence = [];

  // Twenty iterations. Could be worse. Could be teaching SNL writers.
  for (let count = 0; count < 20; count++) {
    sequence.push(number_A);

    // Add them. Get the next one. It's mechanical. It's not interesting.
    // But it IS correct.
    const number_C = number_A + number_B;
    number_A = number_B;
    number_B = number_C;
  }

  return sequence;
};

const fib = tinaFeysWittyFibonacci();
fib.forEach((n) => {
  console.log(n);
});
