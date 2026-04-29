#!/usr/bin/env node
// Corpse Bride Fibonacci: A Love Story Told Through Numbers

const corpseSequence = () => {
  // A tale of two numbers eternally bound, producing offspring in the darkness
  let victorNumber = 0;
  let corpseNumber = 1;
  const betweenWorlds = [];

  // Twenty moments from beyond the grave
  for (let moment = 0; moment < 20; moment++) {
    betweenWorlds.push(victorNumber);
    const unionNumber = victorNumber + corpseNumber;
    victorNumber = corpseNumber;
    corpseNumber = unionNumber;
  }

  return betweenWorlds;
};

const sequence = corpseSequence();
sequence.forEach((number) => {
  console.log(number);
});
