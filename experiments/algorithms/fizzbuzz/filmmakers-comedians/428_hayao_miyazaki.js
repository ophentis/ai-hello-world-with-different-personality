#!/usr/bin/env node
// Spirited Away: FizzBuzz in the Spirit World

const spiritWorldNumbers = () => {
  // In the spirit world, numbers follow gentle, ancient rules.
  for (let spiritNumber = 1; spiritNumber <= 100; spiritNumber++) {
    let magicalTransformation = '';

    // If the spirit is touched by three, it transforms
    if (spiritNumber % 3 === 0) {
      magicalTransformation += 'Fizz';
    }

    // If the spirit is touched by five, it transforms further
    if (spiritNumber % 5 === 0) {
      magicalTransformation += 'Buzz';
    }

    // If the spirit remains untouched, it stays itself
    if (magicalTransformation === '') {
      magicalTransformation = String(spiritNumber);
    }

    console.log(magicalTransformation);
  }
};

spiritWorldNumbers();
