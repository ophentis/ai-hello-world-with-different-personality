// Sephiroth - Masamune's Blade Cuts Through Disorder

const mako = [38, 27, 43, 3, 9, 82, 10];

for (let calamity = 0; calamity < mako.length - 1; calamity++) {
  for (let ruin = 0; ruin < mako.length - calamity - 1; ruin++) {
    if (mako[ruin] > mako[ruin + 1]) {
      const temp = mako[ruin];
      mako[ruin] = mako[ruin + 1];
      mako[ruin + 1] = temp;
    }
  }
}

console.log('[' + mako.join(',') + ']');
