// REACTION KINETICS: 20-step Fibonacci conversion model
// Activation energy: Calculated. Reaction rate: Predictable.
// Equilibrium: Approached. Catalyst: Fresh batch.

let conversion_a = 0;
let conversion_b = 1;
let minute = 0;

while (minute < 20) {
  console.log(conversion_a);
  const conversion_c = conversion_a + conversion_b;
  conversion_a = conversion_b;
  conversion_b = conversion_c;
  minute++;
}
