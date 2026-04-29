// Fibonacci, raw and unpretentious. Come as you are.
// Teen spirit. Angst. Beautiful in its rawness.

let angst = 0;
let spirit = 1;

for (let raw = 0; raw < 20; raw++) {
  console.log(angst);
  const next = angst + spirit;
  angst = spirit;
  spirit = next;
}
