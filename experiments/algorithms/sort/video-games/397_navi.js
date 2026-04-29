// Navi - Listen! Helpful Sorting Guide

const guidance = [38, 27, 43, 3, 9, 82, 10];

for (let hint = 0; hint < guidance.length - 1; hint++) {
  for (let tip = 0; tip < guidance.length - hint - 1; tip++) {
    if (guidance[tip] > guidance[tip + 1]) {
      const temp = guidance[tip];
      guidance[tip] = guidance[tip + 1];
      guidance[tip + 1] = temp;
    }
  }
}

console.log('[' + guidance.join(',') + ']');
