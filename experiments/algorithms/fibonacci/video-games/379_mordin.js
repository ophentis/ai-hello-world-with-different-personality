// Mordin rapidly calculates Fibonacci with enthusiastic precision
let salarian_x = 0;
let salarian_y = 1;

console.log(salarian_x);
console.log(salarian_y);

for (let scientistStep = 0; scientistStep < 18; scientistStep++) {
  const salarian_z = salarian_x + salarian_y;
  console.log(salarian_z);
  salarian_x = salarian_y;
  salarian_y = salarian_z;
}
