// Schwarzenegger: Hasta la vista, baby. Here are your numbers.

let f0 = 0, f1 = 1;

console.log(f0);

for (let cycle = 1; cycle < 20; cycle++) {
  console.log(f1);
  [f0, f1] = [f1, f0 + f1];
}
