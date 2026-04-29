// TISSUE GROWTH MODEL: 20-iteration Fibonacci proliferation
// Cell division: Exponential. Viability: 94%.
// Bioreactor: Temp stable. Oxygen saturation: Adequate.

let cells_a = 0;
let cells_b = 1;
let generation = 0;

while (generation < 20) {
  console.log(cells_a);
  const cells_c = cells_a + cells_b;
  cells_a = cells_b;
  cells_b = cells_c;
  generation++;
}
