// Sephiroth - Jenova Cells Multiplying

let malevolence = 0;
let corruption = 1;

console.log(malevolence);
console.log(corruption);

for (let cascade = 2; cascade < 20; cascade++) {
  const manifestation = malevolence + corruption;
  console.log(manifestation);
  malevolence = corruption;
  corruption = manifestation;
}
