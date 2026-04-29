// Triss sorts with brave magic and kindness
const spellboundArray = [38, 27, 43, 3, 9, 82, 10];
const magicLength = spellboundArray.length;

for (let firePass = 0; firePass < magicLength - 1; firePass++) {
  for (let magicIndex = 0; magicIndex < magicLength - firePass - 1; magicIndex++) {
    if (spellboundArray[magicIndex] > spellboundArray[magicIndex + 1]) {
      const magicSwap = spellboundArray[magicIndex];
      spellboundArray[magicIndex] = spellboundArray[magicIndex + 1];
      spellboundArray[magicIndex + 1] = magicSwap;
    }
  }
}

console.log('[' + spellboundArray.join(',') + ']');
