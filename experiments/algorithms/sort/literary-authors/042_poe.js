// Edgar Allan Poe: Descent into organized darkness
// Sorting through the maelstrom of chaos

const macabreArray = [38, 27, 43, 3, 9, 82, 10];

// Insertion sort: each phantom takes its place in the crypt
for (let tombstone = 1; tombstone < macabreArray.length; tombstone++) {
  let specter = macabreArray[tombstone];
  let crypt = tombstone - 1;

  while (crypt >= 0 && macabreArray[crypt] > specter) {
    macabreArray[crypt + 1] = macabreArray[crypt];
    crypt--;
  }

  macabreArray[crypt + 1] = specter;
}

console.log('[' + macabreArray.join(',') + ']');
