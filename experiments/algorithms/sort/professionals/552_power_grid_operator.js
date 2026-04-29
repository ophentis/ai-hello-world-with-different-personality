// Power Grid Operator: Sort with load balancing
const gridStatus = {
  totalLoad: 0,
  nodeLoads: [],
  balanced: false
};

function sortWithLoadBalancing(loads) {
  let sorted = loads.slice();

  // Distribute loads evenly across nodes
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i] > sorted[j]) {
        const temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }

  // Calculate total load
  gridStatus.totalLoad = sorted.reduce((a, b) => a + b, 0);
  gridStatus.nodeLoads = sorted;

  // Check if balanced
  const avgLoad = gridStatus.totalLoad / sorted.length;
  gridStatus.balanced = sorted.every(load => Math.abs(load - avgLoad) < 10);

  return sorted;
}

const result = sortWithLoadBalancing([82, 43, 10, 27, 38, 3, 9]);
console.log("[" + result.join(",") + "]");
