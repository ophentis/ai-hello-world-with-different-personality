// Schwarzenegger: "Come with me if you want to sort"

const inputArray = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < inputArray.length; i++) {
  for (let j = i + 1; j < inputArray.length; j++) {
    if (inputArray[i] > inputArray[j]) {
      const tmp = inputArray[i];
      inputArray[i] = inputArray[j];
      inputArray[j] = tmp;
    }
  }
}

console.log('[' + inputArray.join(',') + ']');
