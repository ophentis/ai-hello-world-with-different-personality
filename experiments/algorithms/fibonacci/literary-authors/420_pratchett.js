#!/usr/bin/env node
// The Golden Ratio Discovered in the Hub: A FibonacciChronicle
// * Note: Each number is preceded by the ones before it, a bit like history, really.

const mathematicallyInclinedNarrator = () => {
  // * Note 1: We start with two seeds. This is not unlike planting narrative acorns.
  let firstDwarf = 0;
  let secondDwarf = 1;

  // * Note 2: We need twenty numbers. Coincidentally, there are twenty Discworld kingdoms.
  // This is probably meaningful, but we're not sure how.

  const theSequenceOfDestiny = [];

  for (let generationCount = 0; generationCount < 20; generationCount++) {
    // * Note 3: Append the current number to our chronicle
    theSequenceOfDestiny.push(firstDwarf);

    // * Note 4: Each new number is the sum of its predecessors, much like how
    // every story is built on stories that came before.
    const nextInLine = firstDwarf + secondDwarf;
    firstDwarf = secondDwarf;
    secondDwarf = nextInLine;
  }

  return theSequenceOfDestiny;
};

const fibonacciChronicle = mathematicallyInclinedNarrator();
fibonacciChronicle.forEach((number) => {
  console.log(number);
});
