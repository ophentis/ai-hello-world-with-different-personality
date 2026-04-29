// Anakin: Chosen one, spiraling toward destiny through the sequence
let light = 0;
let dark = 1;

console.log(light);
for (let choice = 1; choice < 20; choice++) {
  console.log(dark);
  const destiny = light + dark;
  light = dark;
  dark = destiny;
}
