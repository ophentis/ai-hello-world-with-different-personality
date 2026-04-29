#!/usr/bin/env node
// Kill List: A Sort That Doesn't Miss a Beat

const theHitList = [82, 43, 10, 27, 38, 3, 9];

const killListSort = (targetArray) => {
  // You ever hear the one about bubble sort? It's brilliant.
  // It goes through the list, and if the first guy is bigger than the second guy,
  // they switch places. Simple. Elegant. Violent in its own way.

  const assassins = targetArray.slice();
  let jobsRemaining = true;

  while (jobsRemaining) {
    jobsRemaining = false;

    for (let position = 0; position < assassins.length - 1; position++) {
      if (assassins[position] > assassins[position + 1]) {
        const tempContract = assassins[position];
        assassins[position] = assassins[position + 1];
        assassins[position + 1] = tempContract;
        jobsRemaining = true;
      }
    }
  }

  return assassins;
};

const sortedHitList = killListSort(theHitList);
console.log('[' + sortedHitList.join(',') + ']');
