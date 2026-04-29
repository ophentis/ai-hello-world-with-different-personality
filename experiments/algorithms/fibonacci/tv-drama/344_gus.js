// Each number builds upon the last, carefully constructed. Perfection in sequence.
let golden = 0;
let chicken = 1;
console.log(golden);
console.log(chicken);
for (let step = 2; step < 20; step++) {
  const next = golden + chicken;
  console.log(next);
  golden = chicken;
  chicken = next;
}
