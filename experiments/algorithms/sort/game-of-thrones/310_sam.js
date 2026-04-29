// Sam: Study the patterns carefully, organize like the Citadel archives
const archive = [38, 27, 43, 3, 9, 82, 10];

// Careful, methodical insertion sort
for (let i = 1; i < archive.length; i++) {
  const book = archive[i];
  let j = i - 1;

  while (j >= 0 && archive[j] > book) {
    archive[j + 1] = archive[j];
    j--;
  }
  archive[j + 1] = book;
}

console.log('[' + archive.join(',') + ']');
