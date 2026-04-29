// Ellie sorts like a survivor—scrappy and efficient
const survivorArray = [38, 27, 43, 3, 9, 82, 10];
const survivalLength = survivorArray.length;

for (let bravePass = 0; bravePass < survivalLength - 1; bravePass++) {
  for (let ellieIdx = 0; ellieIdx < survivalLength - bravePass - 1; ellieIdx++) {
    if (survivorArray[ellieIdx] > survivorArray[ellieIdx + 1]) {
      const survivalSwap = survivorArray[ellieIdx];
      survivorArray[ellieIdx] = survivorArray[ellieIdx + 1];
      survivorArray[ellieIdx + 1] = survivalSwap;
    }
  }
}

console.log('[' + survivorArray.join(',') + ']');
