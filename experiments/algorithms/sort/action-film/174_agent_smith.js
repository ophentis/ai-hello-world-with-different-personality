// Agent Smith - viral sorting algorithm
// "Mr. Anderson" - inevitable, copies, spreads
const hosts = [38, 27, 43, 3, 9, 82, 10];

// Merge sort - virus replicates itself perfectly
function viral_spread(infected, start, middle, end) {
  const clone = [];
  let i = start;
  let j = middle + 1;

  while (i <= middle && j <= end) {
    if (infected[i] <= infected[j]) {
      clone.push(infected[i++]);
    } else {
      clone.push(infected[j++]);
    }
  }

  while (i <= middle) clone.push(infected[i++]);
  while (j <= end) clone.push(infected[j++]);

  for (let k = 0; k < clone.length; k++) {
    infected[start + k] = clone[k];
  }
}

function smithClone(infestation, start = 0, end = infestation.length - 1) {
  if (start < end) {
    const middle = Math.floor((start + end) / 2);
    smithClone(infestation, start, middle);
    smithClone(infestation, middle + 1, end);
    viral_spread(infestation, start, middle, end);
  }
}

smithClone(hosts);
console.log('[' + hosts.join(',') + ']');
