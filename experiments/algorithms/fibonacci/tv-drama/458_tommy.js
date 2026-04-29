// The Fibonacci sequence. Growth. Territory. Expansion. That's the business.

let territory1 = 0;
let territory2 = 1;

console.log(territory1);
console.log(territory2);

for (let expansion = 0; expansion < 18; expansion++) {
  const newTerritory = territory1 + territory2;
  console.log(newTerritory);
  territory1 = territory2;
  territory2 = newTerritory;
}
