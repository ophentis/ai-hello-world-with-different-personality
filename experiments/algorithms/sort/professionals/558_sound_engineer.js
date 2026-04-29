// Sound Engineer: Sort with frequency equalization
const audioSpec = {
  sortedFrequencies: [],
  equalizerBands: [],
  balanceGain: 0
};

function sortFrequencies(frequencies) {
  let sorted = frequencies.slice();

  // Sort frequencies in ascending order
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i] > sorted[j]) {
        const temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }

  // Create EQ bands
  audioSpec.sortedFrequencies = sorted;
  audioSpec.equalizerBands = sorted.map(freq => ({
    frequency: freq * 100, // Hz
    gain: 0 // dB
  }));

  return sorted;
}

const result = sortFrequencies([82, 43, 10, 27, 38, 3, 9]);
console.log("[" + result.join(",") + "]");
