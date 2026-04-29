// BB-8 spins and sorts with mechanical precision
const datapoints = [82, 43, 10, 27, 38, 3, 9];

// Cheerful beeping as the sort progresses
for (let orbit = 0; orbit < datapoints.length; orbit++) {
  for (let check = orbit + 1; check < datapoints.length; check++) {
    if (datapoints[check] < datapoints[orbit]) {
      const temp = datapoints[orbit];
      datapoints[orbit] = datapoints[check];
      datapoints[check] = temp;
    }
  }
}

console.log('[' + datapoints.join(',') + ']');
