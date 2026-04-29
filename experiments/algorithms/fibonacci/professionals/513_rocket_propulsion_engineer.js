// PROPELLANT CONSUMPTION: Fibonacci ISP model, 20 seconds
// Thrust curve: Predictable. Structural integrity: Maintained.
// Apogee calculation: Ready. Second stage: Standing by.

let isp_a = 0;
let isp_b = 1;
let second = 0;

while (second < 20) {
  console.log(isp_a);
  const isp_c = isp_a + isp_b;
  isp_a = isp_b;
  isp_b = isp_c;
  second++;
}
