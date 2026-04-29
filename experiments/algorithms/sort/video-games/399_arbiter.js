// Arbiter - Reformed Elite Honor Sorting

const warriors = [38, 27, 43, 3, 9, 82, 10];

for (let quest = 0; quest < warriors.length - 1; quest++) {
  for (let battle = 0; battle < warriors.length - quest - 1; battle++) {
    if (warriors[battle] > warriors[battle + 1]) {
      const temp = warriors[battle];
      warriors[battle] = warriors[battle + 1];
      warriors[battle + 1] = temp;
    }
  }
}

console.log('[' + warriors.join(',') + ']');
