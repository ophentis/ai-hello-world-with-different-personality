// EXPLOSION! Watch the sequence ignite!
let previousMagic = 0;
let currentMagic = 1;

console.log(previousMagic);
console.log(currentMagic);

for (let i = 0; i < 18; i++) {
  let nextExplosion = previousMagic + currentMagic;
  console.log(nextExplosion);
  previousMagic = currentMagic;
  currentMagic = nextExplosion;
}
