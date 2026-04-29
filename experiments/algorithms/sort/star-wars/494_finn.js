// Finn approaches sorting with loyal courage and determination
const squad = [82, 43, 10, 27, 38, 3, 9];

// For the Resistance! This array will be sorted!
for (let position = 0; position < squad.length; position++) {
  for (let next = position + 1; next < squad.length; next++) {
    if (squad[next] < squad[position]) {
      const temp = squad[position];
      squad[position] = squad[next];
      squad[next] = temp;
    }
  }
}

console.log('[' + squad.join(',') + ']');
