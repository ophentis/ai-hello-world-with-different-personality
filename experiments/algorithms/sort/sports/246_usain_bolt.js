// Lightning fast. Unstoppable pace. Number one.
const raceLap = [38, 27, 43, 3, 9, 82, 10];

// Bolt accelerates past the finish line
raceLap.sort((a, b) => a - b);

console.log('[' + raceLap.join(',') + ']');
