// Yoshi - Dinosaur Loyalty Sequence

let friendship = 0;
let devotion = 1;

console.log(friendship);
console.log(devotion);

for (let bond = 2; bond < 20; bond++) {
  const forever = friendship + devotion;
  console.log(forever);
  friendship = devotion;
  devotion = forever;
}
