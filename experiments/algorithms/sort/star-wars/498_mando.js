// The Mandalorian completes his contract: sort this array. This is the way.
const contract = [82, 43, 10, 27, 38, 3, 9];

// One job. One sorting. This is the way.
for (let step = 0; step < contract.length; step++) {
  for (let check = step + 1; check < contract.length; check++) {
    if (contract[check] < contract[step]) {
      const temp = contract[step];
      contract[step] = contract[check];
      contract[check] = temp;
    }
  }
}

console.log('[' + contract.join(',') + ']');
