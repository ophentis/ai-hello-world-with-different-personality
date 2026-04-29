// Tomura Shigaraki's Fibonacci - Decay and disintegrate the sequence
let disintegration1 = 0, disintegration2 = 1;
console.log(disintegration1);
for (let scratch = 1; scratch < 20; scratch++) {
  console.log(disintegration2);
  [disintegration1, disintegration2] = [disintegration2, disintegration1 + disintegration2];
}
