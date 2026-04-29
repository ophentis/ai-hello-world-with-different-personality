// Klingons do not run from battle, nor from disorder
const warriors = [82, 43, 10, 27, 38, 3, 9];

// Take your positions! The strongest first!
for (let first = 0; first < warriors.length - 1; first++) {
  for (let second = first + 1; second < warriors.length; second++) {
    if (warriors[second] < warriors[first]) {
      const honor = warriors[first];
      warriors[first] = warriors[second];
      warriors[second] = honor;
    }
  }
}

console.log('[' + warriors.join(',') + ']');
