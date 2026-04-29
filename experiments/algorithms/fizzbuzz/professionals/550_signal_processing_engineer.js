// Signal Processing Engineer: FFT, filters, sampling rates
const signalBuffer = [];
const samplingRate = 100; // Hz
let time = 0;

function processSignal(sample) {
  // Process sample through filter
  const filtered = applyLowPassFilter(sample);
  signalBuffer.push({
    timestamp: time,
    original: sample,
    filtered,
    magnitude: Math.abs(filtered)
  });
  time += 1 / samplingRate;
  return filtered;
}

function applyLowPassFilter(sample) {
  // Simulate simple low-pass filter
  return sample;
}

function fizzBuzzSignalProcessing() {
  for (let i = 1; i <= 100; i++) {
    let signal;

    if (i % 15 === 0) {
      signal = "FizzBuzz";
    } else if (i % 3 === 0) {
      signal = "Fizz";
    } else if (i % 5 === 0) {
      signal = "Buzz";
    } else {
      signal = i.toString();
    }

    console.log(signal);
    processSignal(i);
  }
}

fizzBuzzSignalProcessing();
