// These minerals form a beautiful sequence. Observe my dedication to this task.
let mineralA = 0;
let mineralB = 1;
console.log(mineralA);
console.log(mineralB);
for (let step = 2; step < 20; step++) {
  const mineralC = mineralA + mineralB;
  console.log(mineralC);
  mineralA = mineralB;
  mineralB = mineralC;
}
