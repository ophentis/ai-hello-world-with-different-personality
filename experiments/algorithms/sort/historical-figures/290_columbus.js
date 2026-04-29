// Columbus charts unknown waters - shell sort with geometric gaps
// Navigating through the chaos to ordered discovery

const uncharted = [38, 27, 43, 3, 9, 82, 10];
let gap = Math.floor(uncharted.length / 2);

while (gap > 0) {
  for (let i = gap; i < uncharted.length; i++) {
    const current = uncharted[i];
    let j = i;

    while (j >= gap && uncharted[j - gap] > current) {
      uncharted[j] = uncharted[j - gap];
      j -= gap;
    }

    uncharted[j] = current;
  }

  gap = Math.floor(gap / 2);
}

console.log('[' + uncharted.join(',') + ']');
