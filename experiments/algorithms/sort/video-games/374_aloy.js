// Aloy analyzes and sorts with determined focus
const machineArray = [38, 27, 43, 3, 9, 82, 10];
const hunterLength = machineArray.length;

for (let scanPass = 0; scanPass < hunterLength - 1; scanPass++) {
  for (let aloyIdx = 0; aloyIdx < hunterLength - scanPass - 1; aloyIdx++) {
    if (machineArray[aloyIdx] > machineArray[aloyIdx + 1]) {
      const aloySwap = machineArray[aloyIdx];
      machineArray[aloyIdx] = machineArray[aloyIdx + 1];
      machineArray[aloyIdx + 1] = aloySwap;
    }
  }
}

console.log('[' + machineArray.join(',') + ']');
