// Commander Shepard commands the array into order
const commandArray = [38, 27, 43, 3, 9, 82, 10];
const missionLength = commandArray.length;

for (let missionPass = 0; missionPass < missionLength - 1; missionPass++) {
  for (let shepardIdx = 0; shepardIdx < missionLength - missionPass - 1; shepardIdx++) {
    if (commandArray[shepardIdx] > commandArray[shepardIdx + 1]) {
      const shepardSwap = commandArray[shepardIdx];
      commandArray[shepardIdx] = commandArray[shepardIdx + 1];
      commandArray[shepardIdx + 1] = shepardSwap;
    }
  }
}

console.log('[' + commandArray.join(',') + ']');
