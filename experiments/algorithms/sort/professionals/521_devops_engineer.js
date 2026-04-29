// DevOps: infrastructure-as-code style, idempotent operations
const workload = {
  data: [82, 43, 10, 27, 38, 3, 9],
  sortStrategy: 'ascending'
};

function reconcileState(spec) {
  const sorted = [...spec.data].sort((a, b) => a - b);
  return sorted;
}

const desiredState = reconcileState(workload);
console.log(`[${desiredState.join(',')}]`);
