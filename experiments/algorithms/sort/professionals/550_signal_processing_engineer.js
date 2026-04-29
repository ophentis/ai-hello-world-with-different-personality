// Signal Processing Engineer: Sort with spectral analysis
const spectrum = {
  frequencies: [],
  magnitude: 0
};

function analyzeSignal(array) {
  // Treat array as discrete signal
  const signal = array.slice();

  // Apply sorting as signal conditioning
  for (let i = 0; i < signal.length - 1; i++) {
    for (let j = i + 1; j < signal.length; j++) {
      if (signal[i] > signal[j]) {
        const temp = signal[i];
        signal[i] = signal[j];
        signal[j] = temp;
      }
    }
  }

  // Compute magnitude spectrum
  let magnitude = 0;
  for (let i = 0; i < signal.length; i++) {
    magnitude += signal[i] * signal[i];
  }

  spectrum.magnitude = Math.sqrt(magnitude);
  spectrum.frequencies = signal;

  return signal;
}

const result = analyzeSignal([82, 43, 10, 27, 38, 3, 9]);
console.log("[" + result.join(",") + "]");
