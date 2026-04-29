// Born this way sort. Theatrical. Accept your algorithm as it is.
// Quick sort with theatrical flair. Avant-garde efficiency.

function bornThisWaySort(arr, low, high) {
  if (low < high) {
    const monsterball = partition(arr, low, high);
    bornThisWaySort(arr, low, monsterball - 1);
    bornThisWaySort(arr, monsterball + 1, high);
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

const monsters = [38, 27, 43, 3, 9, 82, 10];
bornThisWaySort(monsters, 0, monsters.length - 1);
console.log('[' + monsters.join(',') + ']');
