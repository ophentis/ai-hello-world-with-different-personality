// Tony Montana - aggressive sorting
// "Say hello to my little friend"
const empire = [38, 27, 43, 3, 9, 82, 10];

// Quicksort - fast, aggressive, all-in approach
function tonymontana_sort(cartel, low = 0, high = empire.length - 1) {
  if (low < high) {
    const wall = partition(cartel, low, high);
    tonymontana_sort(cartel, low, wall - 1);
    tonymontana_sort(cartel, wall + 1, high);
  }
}

function partition(scarface, low, high) {
  const littlefriend = scarface[high];
  let wall = low - 1;

  for (let i = low; i < high; i++) {
    if (scarface[i] <= littlefriend) {
      wall++;
      const temp = scarface[wall];
      scarface[wall] = scarface[i];
      scarface[i] = temp;
    }
  }

  const temp = scarface[wall + 1];
  scarface[wall + 1] = scarface[high];
  scarface[high] = temp;
  return wall + 1;
}

tonymontana_sort(empire);
console.log('[' + empire.join(',') + ']');
