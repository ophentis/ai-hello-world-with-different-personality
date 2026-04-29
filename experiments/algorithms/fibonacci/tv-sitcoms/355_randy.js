// I am Lorde ya ya ya... and I computed this Fibonacci sequence!
let randyA = 0, randyB = 1;
console.log(randyA);
console.log(randyB);
for (let i = 2; i < 20; i++) {
  const randyC = randyA + randyB;
  console.log(randyC);
  randyA = randyB;
  randyB = randyC;
}
