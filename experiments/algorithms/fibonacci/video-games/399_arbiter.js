// Arbiter - Were It So Easy - Fibonacci of Redemption

let legacy = 0;
let redemption = 1;

console.log(legacy);
console.log(redemption);

for (let path = 2; path < 20; path++) {
  const salvation = legacy + redemption;
  console.log(salvation);
  legacy = redemption;
  redemption = salvation;
}
