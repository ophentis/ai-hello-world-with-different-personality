#!/usr/bin/env node
// Inglourious FibonacciS: A Flashback to Golden Ratio Revenge

const revengeSequence = () => {
  // This is the thing about Fibonacci. It doesn't forgive. It doesn't forget.
  // Every number is the sum of the ones before it. That's just math. That's revenge.

  let priorNumber = 0;
  let currentNumber = 1;
  const theList = [];

  for (let chapter = 0; chapter < 20; chapter++) {
    theList.push(priorNumber);
    const nextNumber = priorNumber + currentNumber;
    priorNumber = currentNumber;
    currentNumber = nextNumber;
  }

  return theList;
};

const sequence = revengeSequence();
sequence.forEach((num) => {
  console.log(num);
});
