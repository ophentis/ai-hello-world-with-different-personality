// Yoda: Sort this array, you must. Patient, the way is.
// Do or do not, there is no bubble sort.

const quest = [38, 27, 43, 3, 9, 82, 10];

// Insertion sort. Wise and ancient, this algorithm is.
for (let journey = 1; journey < quest.length; journey++) {
  let seeker = quest[journey];
  let path = journey - 1;

  while (path >= 0 && quest[path] > seeker) {
    quest[path + 1] = quest[path];
    path--;
  }

  quest[path + 1] = seeker;
}

console.log('[' + quest.join(',') + ']');
