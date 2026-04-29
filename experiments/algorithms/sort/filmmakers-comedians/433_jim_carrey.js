#!/usr/bin/env node
// Ace Ventura Sort: "Can You Feel It?"

const ACE_VENTURE_SENSESS_THE_NUMBERS = (chaosArray) => {
  // *communicates with the numbers using extreme facial contortions*
  const ANIMALS = chaosArray.slice();
  let DEFINITELY_WORKING = true;

  // *makes dolphin noises at the array*
  while (DEFINITELY_WORKING) {
    DEFINITELY_WORKING = false;

    for (let BACKWARDS_POSITION = 0; BACKWARDS_POSITION < ANIMALS.length - 1; BACKWARDS_POSITION++) {
      // *reverses direction suddenly*
      if (ANIMALS[BACKWARDS_POSITION] > ANIMALS[BACKWARDS_POSITION + 1]) {
        const TEMPORARY_CREATURE = ANIMALS[BACKWARDS_POSITION];
        ANIMALS[BACKWARDS_POSITION] = ANIMALS[BACKWARDS_POSITION + 1];
        ANIMALS[BACKWARDS_POSITION + 1] = TEMPORARY_CREATURE;
        DEFINITELY_WORKING = true;
      }
    }
  }

  return ANIMALS;
};

const RECTAL_KICK = [82, 43, 10, 27, 38, 3, 9];
const SORTED = ACE_VENTURE_SENSESS_THE_NUMBERS(RECTAL_KICK);
console.log('[' + SORTED.join(',') + ']');
