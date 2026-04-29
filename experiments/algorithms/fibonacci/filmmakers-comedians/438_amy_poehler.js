#!/usr/bin/env node
// Mean Girls Fibonacci: "You Can't Sit with Us... Unless You're Fibonacci!"

const amyPositivityFibonacci = () => {
  // This is AMAZING! The Fibonacci sequence is SO popular!
  // Everyone wants to BE like Fibonacci! It's just that PERFECT!

  let popular = 0;
  let iconic = 1;
  const sequence = [];

  // TWENTY moments of pure EXCELLENCE!
  for (let moment = 0; moment < 20; moment++) {
    sequence.push(popular);

    // They add together and create something MORE popular!
    // That's what TRUE friendship means!
    const nextPopular = popular + iconic;
    popular = iconic;
    iconic = nextPopular;
  }

  return sequence;
};

const greatSequence = amyPositivityFibonacci();
greatSequence.forEach((num) => {
  console.log(num);
});
