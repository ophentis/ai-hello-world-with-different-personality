#!/usr/bin/env node
// Leslie Knope's Perfect Sort: "This is Going to be SPECTACULAR!"

const leslieKnopesSort = (unsorted) => {
  // Oh my gosh! This array is PERFECT! And we're gonna make it even MORE perfect!
  // I BELIEVE in this array! I BELIEVE in sorting!

  const organized = unsorted.slice();
  let stillPossible = true;

  while (stillPossible) {
    stillPossible = false;

    for (let position = 0; position < organized.length - 1; position++) {
      // If this number is bigger than that one, we're gonna make it RIGHT!
      // Because that's what TEAM EFFORT is all about!
      if (organized[position] > organized[position + 1]) {
        const temporary = organized[position];
        organized[position] = organized[position + 1];
        organized[position + 1] = temporary;
        stillPossible = true;
      }
    }
  }

  return organized;
};

const needsSorting = [82, 43, 10, 27, 38, 3, 9];
const beautifullyOrganized = leslieKnopesSort(needsSorting);
console.log('[' + beautifullyOrganized.join(',') + ']');
