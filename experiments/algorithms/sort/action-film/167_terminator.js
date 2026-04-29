// Terminator - "I'll be back" with sorted data
// Relentless, systematic, unstoppable
const systemattack = [38, 27, 43, 3, 9, 82, 10];

// Quicksort - divide and conquer, relentless
function terminatorSort(resistance, low = 0, high = resistance.length - 1) {
  if (low < high) {
    const wall = partition(resistance, low, high);
    terminatorSort(resistance, low, wall - 1);
    terminatorSort(resistance, wall + 1, high);
  }
}

function partition(killing_spree, low, high) {
  const pivot = killing_spree[high];
  let wall = low - 1;

  for (let i = low; i < high; i++) {
    if (killing_spree[i] <= pivot) {
      wall++;
      const temp = killing_spree[wall];
      killing_spree[wall] = killing_spree[i];
      killing_spree[i] = temp;
    }
  }

  const temp = killing_spree[wall + 1];
  killing_spree[wall + 1] = killing_spree[high];
  killing_spree[high] = temp;
  return wall + 1;
}

terminatorSort(systemattack);
console.log('[' + systemattack.join(',') + ']');
