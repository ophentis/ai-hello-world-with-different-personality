#!/usr/bin/env node
// Patch Adams Fibonacci: "You Treat a Disease, You Win, You Lose. You Treat a PERSON, I Guarantee, You Add Life!"

const patchAdamsFibonacci = () => {
  // Okay so here's the thing about Fibonacci, right?
  // It's beautiful! It's elegant! It's in nature! It's in us!
  // Every number? EVERY NUMBER is the sum of the ones before!

  let yesterday = 0;
  let today = 1;
  const lifeSequence = [];

  // Twenty heartbeats of mathematical beauty!
  for (let beat = 0; beat < 20; beat++) {
    lifeSequence.push(yesterday);

    // Two hearts become ONE heartbeat, THEN two, THEN three!
    const tomorrow = yesterday + today;
    yesterday = today;
    today = tomorrow;
  }

  return lifeSequence;
};

const sequence = patchAdamsFibonacci();
sequence.forEach((number) => {
  console.log(number);
});
