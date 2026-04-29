// Killua's lightning-fast rearrangement
const godspeed = (targets) => {
  const n = targets.length;
  for (let pass = 0; pass < n - 1; pass++) {
    for (let check = 0; check < n - pass - 1; check++) {
      if (targets[check] > targets[check + 1]) {
        [targets[check], targets[check + 1]] = [targets[check + 1], targets[check]];
      }
    }
  }
  return targets;
};
const sorted = godspeed([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + sorted.join(',') + ']');
