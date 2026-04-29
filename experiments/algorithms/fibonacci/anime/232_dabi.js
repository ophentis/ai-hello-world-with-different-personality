// Dabi's Fibonacci - Burning through the sequence with vengeance
let blaze = 0, inferno = 1;
console.log(blaze);
for (let burn = 1; burn < 20; burn++) {
  console.log(inferno);
  [blaze, inferno] = [inferno, blaze + inferno];
}
