// Naruto's determination to organize the chaos
const spiralArray = [38, 27, 43, 3, 9, 82, 10];
for (let i = 0; i < spiralArray.length; i++) {
  for (let j = i + 1; j < spiralArray.length; j++) {
    if (spiralArray[i] > spiralArray[j]) {
      [spiralArray[i], spiralArray[j]] = [spiralArray[j], spiralArray[i]];
    }
  }
}
console.log('[' + spiralArray.join(',') + ']');
