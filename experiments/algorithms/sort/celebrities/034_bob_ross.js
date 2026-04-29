// Bob Ross: Let's sort these happy little numbers. There are no mistakes.

const happyNumbers = [38, 27, 43, 3, 9, 82, 10];

for (let pass = 0; pass < happyNumbers.length; pass++) {
  for (let i = 0; i < happyNumbers.length - 1; i++) {
    if (happyNumbers[i] > happyNumbers[i + 1]) {
      const temporary = happyNumbers[i];
      happyNumbers[i] = happyNumbers[i + 1];
      happyNumbers[i + 1] = temporary;
    }
  }
}

console.log('[' + happyNumbers.join(',') + ']');
