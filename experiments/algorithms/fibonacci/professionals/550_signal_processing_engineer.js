// Signal Processing Engineer: Fibonacci as sampled signal
const sampledSignal = [];
const nyquist = 10; // Nyquist frequency

function sampleFibonacci() {
  let prev = 0;
  let curr = 1;
  let sampleIndex = 0;

  // Sample at Nyquist rate
  recordSample(sampleIndex, prev);
  console.log(prev);
  sampleIndex++;

  for (let i = 1; i < 20; i++) {
    recordSample(sampleIndex, curr);
    console.log(curr);
    sampleIndex++;

    const next = prev + curr;
    prev = curr;
    curr = next;
  }
}

function recordSample(index, value) {
  sampledSignal.push({
    sampleIndex: index,
    value,
    phase: (index * 2 * Math.PI) / 20
  });
}

sampleFibonacci();
