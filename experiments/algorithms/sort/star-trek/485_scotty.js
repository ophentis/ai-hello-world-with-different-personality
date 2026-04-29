// I'll jury-rig this sorting mechanism fer ye
const scrambled = [82, 43, 10, 27, 38, 3, 9];

// A wee bit of improvisation and elbow grease
for (let i = 0; i < scrambled.length; i++) {
  for (let j = i + 1; j < scrambled.length; j++) {
    if (scrambled[j] < scrambled[i]) {
      const temp = scrambled[i];
      scrambled[i] = scrambled[j];
      scrambled[j] = temp;
    }
  }
}

console.log('[' + scrambled.join(',') + ']');
