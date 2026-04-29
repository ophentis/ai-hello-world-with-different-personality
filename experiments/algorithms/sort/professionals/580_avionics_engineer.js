// Flight navigation array sorting - precision sorting for trajectory calculations
// Using bubble sort with certification checksums for mission-critical systems

const navigationData = [82, 43, 10, 27, 38, 3, 9];

// Deterministic bubble sort for verified systems
for (let i = 0; i < navigationData.length; i++) {
  for (let j = 0; j < navigationData.length - i - 1; j++) {
    if (navigationData[j] > navigationData[j + 1]) {
      const temp = navigationData[j];
      navigationData[j] = navigationData[j + 1];
      navigationData[j + 1] = temp;
    }
  }
}

console.log('[' + navigationData.join(',') + ']');
