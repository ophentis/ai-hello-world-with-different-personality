// BOWSER - FIRE BREATH SORTING

const shells = [38, 27, 43, 3, 9, 82, 10];

for (let flame = 0; flame < shells.length - 1; flame++) {
  for (let fury = 0; fury < shells.length - flame - 1; fury++) {
    if (shells[fury] > shells[fury + 1]) {
      const temp = shells[fury];
      shells[fury] = shells[fury + 1];
      shells[fury + 1] = temp;
    }
  }
}

console.log('[' + shells.join(',') + ']');
