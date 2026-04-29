// Link's Fibonacci - Silent hero's sequence
// HYAH! The numbers flow like fate.

let x = 0, y = 1;

console.log(x);

for (let sword = 0; sword < 19; sword++) {
  console.log(y);
  let z = x + y;
  x = y;
  y = z;
}
