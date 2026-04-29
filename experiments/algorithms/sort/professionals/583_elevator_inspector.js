// Elevator car loads - arrange by weight capacity
// Safety margin calculations for each floor

const carLoads = [82, 43, 10, 27, 38, 3, 9];

function sortByCapacity(loads) {
  const sorted = [];
  const copy = [...loads];

  while (copy.length > 0) {
    let minWeight = Infinity;
    let minIndex = -1;
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] < minWeight) {
        minWeight = copy[i];
        minIndex = i;
      }
    }
    sorted.push(copy[minIndex]);
    copy.splice(minIndex, 1);
  }

  return sorted;
}

console.log('[' + sortByCapacity(carLoads).join(',') + ']');
