#!/usr/bin/env node
// 2001: A FizzBuzz Odyssey - Taking 127 Consecutive Takes of Perfection

const ITERATION_MIN = 1;
const ITERATION_MAX = 100;
const DIVISOR_FIRST = 3;
const DIVISOR_SECOND = 5;
const FIZZ_TOKEN = 'Fizz';
const BUZZ_TOKEN = 'Buzz';

const meticulousFizzBuzz = (minValue, maxValue) => {
  for (let currentIteration = minValue; currentIteration <= maxValue; currentIteration++) {
    let outputString = '';

    const isDivisibleByThree = (currentIteration % DIVISOR_FIRST === 0);
    const isDivisibleByFive = (currentIteration % DIVISOR_SECOND === 0);

    if (isDivisibleByThree) {
      outputString += FIZZ_TOKEN;
    }
    if (isDivisibleByFive) {
      outputString += BUZZ_TOKEN;
    }
    if (outputString === '') {
      outputString = String(currentIteration);
    }

    console.log(outputString);
  }
};

meticulousFizzBuzz(ITERATION_MIN, ITERATION_MAX);
