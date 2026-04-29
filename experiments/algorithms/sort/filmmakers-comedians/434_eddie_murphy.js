#!/usr/bin/env node
// 48 Hrs. Sort: "This Whole Mess is MY Problem"

const mortyRankinSort = (messyNumbers) => {
  // Listen up! I'm only gonna explain this ONCE. This whole sorting operation?
  // It's MY problem now. So here's what we gonna do, baby!

  const numbers = messyNumbers.slice();
  let keepGoing = true;

  // We gonna keep goin' until this thing is SORTED, you hear me?
  while (keepGoing) {
    keepGoing = false;

    for (let position = 0; position < numbers.length - 1; position++) {
      // If this number is bigger than that one? THEY SWITCH! BAM!
      if (numbers[position] > numbers[position + 1]) {
        const temp = numbers[position];
        numbers[position] = numbers[position + 1];
        numbers[position + 1] = temp;
        keepGoing = true;
      }
    }
  }

  return numbers;
};

const crazyArray = [82, 43, 10, 27, 38, 3, 9];
const sortedArray = mortyRankinSort(crazyArray);
console.log('[' + sortedArray.join(',') + ']');
