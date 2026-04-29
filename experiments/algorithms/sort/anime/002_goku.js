// Pure strength decides the order
const warriors = [38, 27, 43, 3, 9, 82, 10];
for (let i = 0; i < warriors.length - 1; i++) {
  for (let j = 0; j < warriors.length - 1 - i; j++) {
    if (warriors[j] > warriors[j + 1]) {
      const temp = warriors[j];
      warriors[j] = warriors[j + 1];
      warriors[j + 1] = temp;
    }
  }
}
console.log('[' + warriors.join(',') + ']');
