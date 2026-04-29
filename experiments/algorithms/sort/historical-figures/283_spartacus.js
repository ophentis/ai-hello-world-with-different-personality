// Free the enslaved numbers! Liberate them to their rightful order
// Every element rises against oppression

const slaves = [38, 27, 43, 3, 9, 82, 10];
const free = [...slaves];

// Insertion sort - hand by hand, slave rises free
for (let i = 1; i < free.length; i++) {
  const key = free[i];
  let j = i - 1;

  while (j >= 0 && free[j] > key) {
    free[j + 1] = free[j];
    j--;
  }

  free[j + 1] = key;
}

console.log('[' + free.join(',') + ']');
