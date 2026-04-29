// Loki's chaos - Bogo sort, the random mischief algorithm
// Shuffle until order emerges from pure chaos

const chaos = [38, 27, 43, 3, 9, 82, 10];

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

while (!isSorted(chaos)) {
  shuffle(chaos);
}

console.log('[' + chaos.join(',') + ']');
