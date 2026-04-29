// Fibonacci in screenprints. The same sequence, printed 20 times.
// Pop art: industrial, repetitive, mass-produced beauty.

let number = 0;
let nextNumber = 1;

for (let frame = 0; frame < 20; frame++) {
  console.log(number);
  const temp = number + nextNumber;
  number = nextNumber;
  nextNumber = temp;
}
