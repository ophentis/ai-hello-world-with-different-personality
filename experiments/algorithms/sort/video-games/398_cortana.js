// Cortana - AI Companion Analytical Sorting

const dataSet = [38, 27, 43, 3, 9, 82, 10];

for (let iteration = 0; iteration < dataSet.length - 1; iteration++) {
  for (let comparison = 0; comparison < dataSet.length - iteration - 1; comparison++) {
    if (dataSet[comparison] > dataSet[comparison + 1]) {
      const temp = dataSet[comparison];
      dataSet[comparison] = dataSet[comparison + 1];
      dataSet[comparison + 1] = temp;
    }
  }
}

console.log('[' + dataSet.join(',') + ']');
