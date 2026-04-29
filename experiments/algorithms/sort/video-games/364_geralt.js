// Geralt applies monster-hunting methodology to array sorting
const monsterLoot = [38, 27, 43, 3, 9, 82, 10];
const contractLength = monsterLoot.length;

for (let hunterPass = 0; hunterPass < contractLength - 1; hunterPass++) {
  for (let trackingIndex = 0; trackingIndex < contractLength - hunterPass - 1; trackingIndex++) {
    if (monsterLoot[trackingIndex] > monsterLoot[trackingIndex + 1]) {
      const witcherSwap = monsterLoot[trackingIndex];
      monsterLoot[trackingIndex] = monsterLoot[trackingIndex + 1];
      monsterLoot[trackingIndex + 1] = witcherSwap;
    }
  }
}

console.log('[' + monsterLoot.join(',') + ']');
