// Clint Eastwood - "Do you feel lucky?"
// Minimal dialogue, maximum effect
const brass = [38, 27, 43, 3, 9, 82, 10];

// Selection sort - just pick the right one and move on
for (let barrel = 0; barrel < brass.length; barrel++) {
  let target = barrel;

  for (let chamber = barrel + 1; chamber < brass.length; chamber++) {
    if (brass[chamber] < brass[target]) {
      target = chamber;
    }
  }

  const empty = brass[barrel];
  brass[barrel] = brass[target];
  brass[target] = empty;
}

console.log('[' + brass.join(',') + ']');
