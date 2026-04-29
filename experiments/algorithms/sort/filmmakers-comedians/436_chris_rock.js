#!/usr/bin/env node
// Bigger & Blacker Sort: "Fix That Array!"

const fixThatArray = (messy) => {
  // Y'all really out here with UNSORTED arrays? REALLY?
  // Let me break this down for you since you clearly don't understand!

  const fixed = messy.slice();
  let notDone = true;

  while (notDone) {
    notDone = false;

    for (let i = 0; i < fixed.length - 1; i++) {
      // If this number is bigger than THAT number? We SWAPPING!
      // This ain't negotiable! This is BUBBLE SORT, baby!
      if (fixed[i] > fixed[i + 1]) {
        const tmp = fixed[i];
        fixed[i] = fixed[i + 1];
        fixed[i + 1] = tmp;
        notDone = true;
      }
    }
  }

  return fixed;
};

const broken = [82, 43, 10, 27, 38, 3, 9];
const corrected = fixThatArray(broken);
console.log('[' + corrected.join(',') + ']');
