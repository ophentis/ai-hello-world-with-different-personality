#!/usr/bin/env node
// The Sorting Hat of Ankh-Morpork: A Narrative Journey Through Chaos
// * Note: Inspired by actual sorting, but with better footnotes

const chaosBecomesOrder = (theUnsortedRabble) => {
  // * Note 1: We use bubble sort because it's narratively satisfying.
  // Everyone gets a chance to move closer to their destiny, even if it takes ages.

  let theChroniclesOfSorting = theUnsortedRabble.slice();
  let anotherPassWasNeeded = true;

  // * Note 2: The algorithm continues until equilibrium is reached, or until it gives up.
  while (anotherPassWasNeeded) {
    anotherPassWasNeeded = false;
    for (let currentCharacter = 0; currentCharacter < theChroniclesOfSorting.length - 1; currentCharacter++) {
      // * Note 3: If the left number is larger than the right, they swap positions.
      // This is basically social mobility.
      if (theChroniclesOfSorting[currentCharacter] > theChroniclesOfSorting[currentCharacter + 1]) {
        const temporaryPlaceholder = theChroniclesOfSorting[currentCharacter];
        theChroniclesOfSorting[currentCharacter] = theChroniclesOfSorting[currentCharacter + 1];
        theChroniclesOfSorting[currentCharacter + 1] = temporaryPlaceholder;
        anotherPassWasNeeded = true;
      }
    }
  }

  return theChroniclesOfSorting;
};

const unsortedNobility = [82, 43, 10, 27, 38, 3, 9];
const sortedByFate = chaosBecomesOrder(unsortedNobility);
console.log('[' + sortedByFate.join(',') + ']');
