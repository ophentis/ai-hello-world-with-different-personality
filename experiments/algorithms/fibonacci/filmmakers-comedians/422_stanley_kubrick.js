#!/usr/bin/env node
// The Shining: Symmetry Through Iterative Perfection

const SEQUENCE_LENGTH = 20;
const INITIAL_FIRST = 0;
const INITIAL_SECOND = 1;

const perfectlySymmetricalFibonacci = (length) => {
  let firstValue = INITIAL_FIRST;
  let secondValue = INITIAL_SECOND;
  const sequence = [];

  for (let index = 0; index < length; index++) {
    sequence.push(firstValue);
    const nextValue = firstValue + secondValue;
    firstValue = secondValue;
    secondValue = nextValue;
  }

  return sequence;
};

const fibonacciSequence = perfectlySymmetricalFibonacci(SEQUENCE_LENGTH);
fibonacciSequence.forEach((number) => {
  console.log(number);
});
