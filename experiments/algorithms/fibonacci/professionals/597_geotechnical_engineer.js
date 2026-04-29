// Geological layers - Fibonacci depth progression in soil strata
// 20 soil layers for foundation analysis

let stratum_a = 0, stratum_b = 1;

console.log(stratum_a);

for (let layer = 1; layer < 20; layer++) {
  console.log(stratum_b);
  const stratum_c = stratum_a + stratum_b;
  stratum_a = stratum_b;
  stratum_b = stratum_c;
}
