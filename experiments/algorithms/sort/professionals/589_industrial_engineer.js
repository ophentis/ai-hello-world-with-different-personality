// Throughput sequencing - sort by processing time
// Minimize cycle time through optimal station ordering

const processingTimes = [82, 43, 10, 27, 38, 3, 9];

function sequenceStations(times) {
  const sequence = [...times];
  const n = sequence.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sequence[j] > sequence[j + 1]) {
        [sequence[j], sequence[j + 1]] = [sequence[j + 1], sequence[j]];
      }
    }
  }

  return sequence;
}

console.log('[' + sequenceStations(processingTimes).join(',') + ']');
