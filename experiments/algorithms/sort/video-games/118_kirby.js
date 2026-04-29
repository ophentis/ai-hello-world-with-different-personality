// Kirby's Cute Sort - Absorb and organize!
// Poyo! Even sorting is fun!

const cuteNumbers = [38, 27, 43, 3, 9, 82, 10];

// Cycle sort - cute but effective, never wastes a move
function cuteSort(arr) {
  for (let cycleStart = 0; cycleStart < arr.length - 1; cycleStart++) {
    let item = arr[cycleStart];
    let pos = cycleStart;

    for (let i = cycleStart + 1; i < arr.length; i++) {
      if (arr[i] < item) pos++;
    }

    if (pos === cycleStart) continue;

    while (item === arr[pos]) pos++;

    let temp = arr[pos];
    arr[pos] = item;
    item = temp;

    while (pos !== cycleStart) {
      pos = cycleStart;

      for (let i = cycleStart + 1; i < arr.length; i++) {
        if (arr[i] < item) pos++;
      }

      while (item === arr[pos]) pos++;

      temp = arr[pos];
      arr[pos] = item;
      item = temp;
    }
  }
}

cuteSort(cuteNumbers);
console.log('[' + cuteNumbers.join(',') + ']');
