// The voyage that circled the globe - stable sort maintains the course
// Stable insertion sort - reliability across the seven seas

const fleet = [38, 27, 43, 3, 9, 82, 10];

for (let ship = 1; ship < fleet.length; ship++) {
  const cargo = fleet[ship];
  let position = ship - 1;

  while (position >= 0 && fleet[position] > cargo) {
    fleet[position + 1] = fleet[position];
    position--;
  }

  fleet[position + 1] = cargo;
}

console.log('[' + fleet.join(',') + ']');
