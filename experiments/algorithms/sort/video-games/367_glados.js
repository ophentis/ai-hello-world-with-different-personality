// GLaDOS compels the array into order through testing
const testSubjects = [38, 27, 43, 3, 9, 82, 10];
const testChamberSize = testSubjects.length;

for (let testPhase = 0; testPhase < testChamberSize - 1; testPhase++) {
  for (let testIdx = 0; testIdx < testChamberSize - testPhase - 1; testIdx++) {
    if (testSubjects[testIdx] > testSubjects[testIdx + 1]) {
      const testSwap = testSubjects[testIdx];
      testSubjects[testIdx] = testSubjects[testIdx + 1];
      testSubjects[testIdx + 1] = testSwap;
    }
  }
}

console.log('[' + testSubjects.join(',') + ']');
