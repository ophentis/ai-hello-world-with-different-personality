// Wheatley attempts to sort but gets confused halfway through
const confusedArray = [38, 27, 43, 3, 9, 82, 10];
const wheatleyLength = confusedArray.length;

for (let bumblePass = 0; bumblePass < wheatleyLength - 1; bumblePass++) {
  for (let britishIdx = 0; britishIdx < wheatleyLength - bumblePass - 1; britishIdx++) {
    if (confusedArray[britishIdx] > confusedArray[britishIdx + 1]) {
      const wheatleySwap = confusedArray[britishIdx];
      confusedArray[britishIdx] = confusedArray[britishIdx + 1];
      confusedArray[britishIdx + 1] = wheatleySwap;
    }
  }
}

console.log('[' + confusedArray.join(',') + ']');
