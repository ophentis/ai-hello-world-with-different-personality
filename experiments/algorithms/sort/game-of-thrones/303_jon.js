// Jon: Steady, honorable sorting through duty at the Wall
const wallNumbers = [38, 27, 43, 3, 9, 82, 10];

let sorted = false;
while (!sorted) {
  sorted = true;
  for (let i = 0; i < wallNumbers.length - 1; i++) {
    if (wallNumbers[i] > wallNumbers[i + 1]) {
      let temp = wallNumbers[i];
      wallNumbers[i] = wallNumbers[i + 1];
      wallNumbers[i + 1] = temp;
      sorted = false;
    }
  }
}

console.log('[' + wallNumbers.join(',') + ']');
