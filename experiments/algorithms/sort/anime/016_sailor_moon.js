// Sailor Moon's guardian arrangement
const moonPower = (warriors) => {
  for (let i = 0; i < warriors.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < warriors.length; j++) {
      if (warriors[j] < warriors[minIdx]) {
        minIdx = j;
      }
    }
    [warriors[i], warriors[minIdx]] = [warriors[minIdx], warriors[i]];
  }
  return warriors;
};
const healed = moonPower([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + healed.join(',') + ']');
