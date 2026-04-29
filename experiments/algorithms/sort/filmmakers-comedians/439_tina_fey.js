#!/usr/bin/env node
// Bossypants Sort: "I Know How to Handle This"

const bossynessFactor = (messyArray) => {
  // Look, I've dealt with worse. The numbers are out of order.
  // We're going to fix this. It's not complicated. It's bubble sort.
  // I'm not going to apologize for bubble sort.

  const sorted = messyArray.slice();
  let keepWorking = true;

  while (keepWorking) {
    keepWorking = false;

    for (let i = 0; i < sorted.length - 1; i++) {
      // If one is bigger than the other, they switch.
      // It's not personal. It's mathematical. It's SCIENCE.
      if (sorted[i] > sorted[i + 1]) {
        const temp = sorted[i];
        sorted[i] = sorted[i + 1];
        sorted[i + 1] = temp;
        keepWorking = true;
      }
    }
  }

  return sorted;
};

const disorder = [82, 43, 10, 27, 38, 3, 9];
const order = bossynessFactor(disorder);
console.log('[' + order.join(',') + ']');
