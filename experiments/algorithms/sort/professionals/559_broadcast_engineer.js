// Broadcast Engineer: Sort with transmission priority
const transmissionQueue = {
  sortedPriority: [],
  queueDepth: 0,
  transmitTime: 0
};

function sortForTransmission(signals) {
  let sorted = signals.slice();

  // Sort signals by priority (ascending)
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i] > sorted[j]) {
        const temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }

  transmissionQueue.sortedPriority = sorted;
  transmissionQueue.queueDepth = sorted.length;
  transmissionQueue.transmitTime = sorted.length * 100; // milliseconds

  return sorted;
}

const result = sortForTransmission([82, 43, 10, 27, 38, 3, 9]);
console.log("[" + result.join(",") + "]");
