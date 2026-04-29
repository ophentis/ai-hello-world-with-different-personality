// Luffy's journey growing stronger
let strength = 0, nextStrength = 1;
console.log(strength);
for (let chapter = 0; chapter < 19; chapter++) {
  console.log(nextStrength);
  const oldStrength = strength;
  strength = nextStrength;
  nextStrength = oldStrength + nextStrength;
}
