// Anubis guides each soul generation - Fibonacci growth through eternity
// The dead accumulate, balanced on the scale

let previousSouls = 0;
let currentSouls = 1;

for (let age = 0; age < 20; age++) {
  console.log(previousSouls);
  const nextSouls = previousSouls + currentSouls;
  previousSouls = currentSouls;
  currentSouls = nextSouls;
}
