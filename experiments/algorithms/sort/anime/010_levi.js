// Levi: Titan-level precision in sorting
const shiftAlertFormation = (positions) => {
  const n = positions.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (positions[j] > positions[j + 1]) {
        const swap = positions[j];
        positions[j] = positions[j + 1];
        positions[j + 1] = swap;
      }
    }
  }
  return positions;
};
const order = shiftAlertFormation([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + order.join(',') + ']');
