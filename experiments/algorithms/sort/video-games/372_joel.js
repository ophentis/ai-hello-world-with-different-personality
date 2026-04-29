// Joel sorts with no-nonsense efficiency
const texasArray = [38, 27, 43, 3, 9, 82, 10];
const joelLength = texasArray.length;

for (let protectivePass = 0; protectivePass < joelLength - 1; protectivePass++) {
  for (let joelIdx = 0; joelIdx < joelLength - protectivePass - 1; joelIdx++) {
    if (texasArray[joelIdx] > texasArray[joelIdx + 1]) {
      const joelSwap = texasArray[joelIdx];
      texasArray[joelIdx] = texasArray[joelIdx + 1];
      texasArray[joelIdx + 1] = joelSwap;
    }
  }
}

console.log('[' + texasArray.join(',') + ']');
