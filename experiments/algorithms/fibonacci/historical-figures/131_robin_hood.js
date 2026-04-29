// In Sherwood, the arrows of fate follow the Fibonacci arc
// Each strike leads to the next in perfect sequence
let arrowBefore = 0, arrowAfter = 1;
for (let shot = 0; shot < 20; shot++) {
  console.log(arrowBefore);
  const nextShot = arrowBefore + arrowAfter;
  arrowBefore = arrowAfter;
  arrowAfter = nextShot;
}
