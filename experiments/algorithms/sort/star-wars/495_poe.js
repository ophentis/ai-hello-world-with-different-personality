// Poe's hotshot approach - quick, daring, and cocky
const targets = [82, 43, 10, 27, 38, 3, 9];

// I could do this with my eyes closed. Watch this.
for (let pass = 0; pass < targets.length; pass++) {
  for (let check = pass + 1; check < targets.length; check++) {
    if (targets[check] < targets[pass]) {
      const temp = targets[pass];
      targets[pass] = targets[check];
      targets[check] = temp;
    }
  }
}

console.log('[' + targets.join(',') + ']');
