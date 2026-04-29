#!/usr/bin/env node
// Real Husbands of Hollywood Sort: "I Got This!"

const iGotThisSort = (array) => {
  // *rubs hands together*
  // Y'all see these numbers? I'm SMALL but I SORT FAST!
  // Watch me organize this! This is MY LANE!

  const sorted = array.slice();
  let workToDo = true;

  while (workToDo) {
    workToDo = false;

    for (let spot = 0; spot < sorted.length - 1; spot++) {
      // When this number is bigger? We FIXING IT! RIGHT NOW!
      if (sorted[spot] > sorted[spot + 1]) {
        const temp = sorted[spot];
        sorted[spot] = sorted[spot + 1];
        sorted[spot + 1] = temp;
        workToDo = true;
      }
    }
  }

  return sorted;
};

const crazy = [82, 43, 10, 27, 38, 3, 9];
const fixed = iGotThisSort(crazy);
console.log('[' + fixed.join(',') + ']');
