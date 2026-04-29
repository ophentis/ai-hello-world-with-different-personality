#!/usr/bin/env node
// Mrs. Doubtfire Sort: "How Do You Feel About Your Sorting Needs?"

const mrsDoubtfireSort = (messy) => {
  // Oh dearie, let me help you organize this mess! *does voice*
  // You've got numbers here looking like my kitchen after a dinner party!

  const organized = messy.slice();
  let stillWorkToDo = true;

  while (stillWorkToDo) {
    stillWorkToDo = false;

    for (let position = 0; position < organized.length - 1; position++) {
      // "Hello dearie, do you need to move over there?"
      if (organized[position] > organized[position + 1]) {
        const temp = organized[position];
        organized[position] = organized[position + 1];
        organized[position + 1] = temp;
        stillWorkToDo = true;
      }
    }
  }

  return organized;
};

const chaotic = [82, 43, 10, 27, 38, 3, 9];
const sorted = mrsDoubtfireSort(chaotic);
console.log('[' + sorted.join(',') + ']');
