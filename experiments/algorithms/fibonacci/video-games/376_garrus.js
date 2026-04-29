// Garrus takes a shot at the Fibonacci sequence
let tuarian_x = 0;
let tuarian_y = 1;

console.log(tuarian_x);
console.log(tuarian_y);

for (let snipeStep = 0; snipeStep < 18; snipeStep++) {
  const tuarian_z = tuarian_x + tuarian_y;
  console.log(tuarian_z);
  tuarian_x = tuarian_y;
  tuarian_y = tuarian_z;
}
