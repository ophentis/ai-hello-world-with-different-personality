// Degradation progression - Fibonacci acceleration of material decay
// 20 time stages for corrosion modeling

let corrosion_p = 0, corrosion_q = 1;

console.log(corrosion_p);

for (let timeStep = 1; timeStep < 20; timeStep++) {
  console.log(corrosion_q);
  const corrosion_r = corrosion_p + corrosion_q;
  corrosion_p = corrosion_q;
  corrosion_q = corrosion_r;
}
