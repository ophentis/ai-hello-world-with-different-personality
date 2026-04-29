// THE FIBONACCI SEQUENCE BENDS TO KYLO'S DARK POWER
let rage_a = 0;
let rage_b = 1;

console.log(rage_a);
console.log(rage_b);

for (let outburst = 2; outburst < 20; outburst++) {
  const rage_c = rage_a + rage_b;
  console.log(rage_c);
  rage_a = rage_b;
  rage_b = rage_c;
}
