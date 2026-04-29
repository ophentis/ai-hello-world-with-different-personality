// Andrew Ryan mandates the array's order in Rapture
const raptureArray = [38, 27, 43, 3, 9, 82, 10];
const objectivistSize = raptureArray.length;

for (let rapturePass = 0; rapturePass < objectivistSize - 1; rapturePass++) {
  for (let mandateIdx = 0; mandateIdx < objectivistSize - rapturePass - 1; mandateIdx++) {
    if (raptureArray[mandateIdx] > raptureArray[mandateIdx + 1]) {
      const ryanSwap = raptureArray[mandateIdx];
      raptureArray[mandateIdx] = raptureArray[mandateIdx + 1];
      raptureArray[mandateIdx + 1] = ryanSwap;
    }
  }
}

console.log('[' + raptureArray.join(',') + ']');
