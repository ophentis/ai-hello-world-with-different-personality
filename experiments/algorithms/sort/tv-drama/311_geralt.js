// Geralt: Track and hunt down each monster with precision
const contracts = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < contracts.length; i++) {
  for (let j = i + 1; j < contracts.length; j++) {
    if (contracts[i] > contracts[j]) {
      let temp = contracts[i];
      contracts[i] = contracts[j];
      contracts[j] = temp;
    }
  }
}

console.log('[' + contracts.join(',') + ']');
