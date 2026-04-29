// Traffic Engineer: Sort with intersection flow optimization
const intersectionData = {
  trafficFlow: [],
  clearanceTime: 0,
  allClear: false
};

function optimizeIntersectionFlow(vehicles) {
  let sorted = vehicles.slice();

  // Sort vehicles by priority (ascending = lowest priority first)
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i] > sorted[j]) {
        const temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }

  intersectionData.trafficFlow = sorted;
  intersectionData.clearanceTime = sorted.length * 2; // 2 seconds per vehicle

  return sorted;
}

const result = optimizeIntersectionFlow([82, 43, 10, 27, 38, 3, 9]);
console.log("[" + result.join(",") + "]");
