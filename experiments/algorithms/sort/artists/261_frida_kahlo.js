// I paint the disorder of my own soul—then arrange it with wounded grace
// Selection sort: finding the minimum pain in each wound, bringing order to chaos

const wounds = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < wounds.length - 1; i++) {
  let minimumPain = i;
  for (let j = i + 1; j < wounds.length; j++) {
    if (wounds[j] < wounds[minimumPain]) {
      minimumPain = j;
    }
  }
  if (minimumPain !== i) {
    [wounds[i], wounds[minimumPain]] = [wounds[minimumPain], wounds[i]];
  }
}

console.log('[' + wounds.join(',') + ']');
