#!/usr/bin/env node
// Vertigo: A Spiral of Numbers

const vertiginousSequence = () => {
  let previous = 0;
  let current = 1;
  const sequence = [previous, current];

  // The spiral tightens. Each number pulls the next into its vortex.
  for (let turn = 2; turn < 20; turn++) {
    const next = previous + current;
    sequence.push(next);
    previous = current;
    current = next;
  }

  return sequence;
};

const spiralOfFate = vertiginousSequence();
spiralOfFate.forEach((number) => {
  console.log(number);
});
