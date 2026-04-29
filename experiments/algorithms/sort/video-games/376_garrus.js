// Garrus calibrates the array with sniper precision
const calibratedArray = [38, 27, 43, 3, 9, 82, 10];
const tuarianLength = calibratedArray.length;

for (let sniperPass = 0; sniperPass < tuarianLength - 1; sniperPass++) {
  for (let garrusIdx = 0; garrusIdx < tuarianLength - sniperPass - 1; garrusIdx++) {
    if (calibratedArray[garrusIdx] > calibratedArray[garrusIdx + 1]) {
      const garrusSwap = calibratedArray[garrusIdx];
      calibratedArray[garrusIdx] = calibratedArray[garrusIdx + 1];
      calibratedArray[garrusIdx + 1] = garrusSwap;
    }
  }
}

console.log('[' + calibratedArray.join(',') + ']');
