// Fermentation progression - Fibonacci bacterial growth in food science
// 20 fermentation stages for flavor development

let ferment_a = 0, ferment_b = 1;

console.log(ferment_a);

for (let stage = 1; stage < 20; stage++) {
  console.log(ferment_b);
  const ferment_c = ferment_a + ferment_b;
  ferment_a = ferment_b;
  ferment_b = ferment_c;
}
