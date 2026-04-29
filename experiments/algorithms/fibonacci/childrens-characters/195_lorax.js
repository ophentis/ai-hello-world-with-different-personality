// THE LORAX: This growing sequence must be protected and preserved for generations!
let seed1 = 0, seed2 = 1;
console.log(seed1);
for (let growth = 1; growth < 20; growth++) {
  console.log(seed2);
  [seed1, seed2] = [seed2, seed1 + seed2];
}
