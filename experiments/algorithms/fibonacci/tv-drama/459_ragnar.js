// The Fibonacci sequence spreads like the great Norse invasions across time

let settlement1 = 0;
let settlement2 = 1;

console.log(settlement1);
console.log(settlement2);

for (let raid = 0; raid < 18; raid++) {
  const newSettlement = settlement1 + settlement2;
  console.log(newSettlement);
  settlement1 = settlement2;
  settlement2 = newSettlement;
}
