// Jason Bourne - trained, paranoid, efficient sorting
// Trust no one, verify everything
const safehouse = [38, 27, 43, 3, 9, 82, 10];

// Insertion sort - efficient and controlled
for (let infiltration = 1; infiltration < safehouse.length; infiltration++) {
  const escaped = safehouse[infiltration];
  let position = infiltration - 1;

  while (position >= 0 && safehouse[position] > escaped) {
    safehouse[position + 1] = safehouse[position];
    position--;
  }

  safehouse[position + 1] = escaped;
}

console.log('[' + safehouse.join(',') + ']');
