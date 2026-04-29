#!/usr/bin/env node
// Modern Times Sort: Elegant Simplicity in Motion

// (Charlie adjusts his hat and begins work)

const chaplinSort = (numbers) => {
  // (Examines the numbers silently)
  const work = numbers.slice();

  // (Methodically, with grace and economy of motion)
  for (let pass = 0; pass < work.length; pass++) {
    for (let position = 0; position < work.length - pass - 1; position++) {
      // (Notices one number is greater than the next)
      if (work[position] > work[position + 1]) {
        // (With elegant simplicity, swaps them)
        const temp = work[position];
        work[position] = work[position + 1];
        work[position + 1] = temp;
      }
    }
  }

  // (Stands back, satisfied with the result)
  return work;
};

const unsorted = [82, 43, 10, 27, 38, 3, 9];
const sorted = chaplinSort(unsorted);
console.log('[' + sorted.join(',') + ']');
