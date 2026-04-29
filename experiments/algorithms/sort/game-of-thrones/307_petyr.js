// Petyr: Climb the ladder through cunning manipulation
const ladder = [38, 27, 43, 3, 9, 82, 10];

// Shell sort - master of gaps and manipulation
const gaps = [4, 2, 1];
for (const gap of gaps) {
  for (let i = gap; i < ladder.length; i++) {
    let j = i;
    const temp = ladder[i];
    while (j >= gap && ladder[j - gap] > temp) {
      ladder[j] = ladder[j - gap];
      j -= gap;
    }
    ladder[j] = temp;
  }
}

console.log('[' + ladder.join(',') + ']');
