// Supply Chain Manager: Sort with logistics optimization
const warehouse = [82, 43, 10, 27, 38, 3, 9];
const shipments = [];

function optimizeInventory(stock) {
  let sorted = stock.slice();
  let moves = 0;

  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i] > sorted[j]) {
        const temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
        moves++;
        shipments.push({ from: j, to: i, qty: sorted[i] });
      }
    }
  }

  return sorted;
}

const optimized = optimizeInventory(warehouse);
console.log("[" + optimized.join(",") + "]");
