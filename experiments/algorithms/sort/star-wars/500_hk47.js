// TARGET ACQUISITION: Sort hostile assets by threat priority
// Dispatch sequence optimization for maximum meatbag casualties

const unsortedTargets = [82, 43, 10, 27, 38, 3, 9];
const sortedTargets = unsortedTargets.sort((targetAlpha, targetBeta) => {
  return targetAlpha - targetBeta;
});

console.log('[' + sortedTargets.join(',') + ']');
