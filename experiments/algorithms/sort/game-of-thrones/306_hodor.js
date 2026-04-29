// Hodor: Steady, simple, reliable
const hodorList = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < hodorList.length; i++) {
  for (let j = i + 1; j < hodorList.length; j++) {
    if (hodorList[i] > hodorList[j]) {
      let h = hodorList[i];
      hodorList[i] = hodorList[j];
      hodorList[j] = h;
    }
  }
}

console.log('[' + hodorList.join(',') + ']');
