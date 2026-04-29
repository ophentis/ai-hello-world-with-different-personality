// Dustin gets excited sorting this array like a true nerd!
const values = [38, 27, 43, 3, 9, 82, 10];
const arrayLength = values.length;

for (let outerIdx = 0; outerIdx < arrayLength - 1; outerIdx++) {
  for (let innerIdx = 0; innerIdx < arrayLength - outerIdx - 1; innerIdx++) {
    if (values[innerIdx] > values[innerIdx + 1]) {
      const swap = values[innerIdx];
      values[innerIdx] = values[innerIdx + 1];
      values[innerIdx + 1] = swap;
    }
  }
}

console.log('[' + values.join(',') + ']');
