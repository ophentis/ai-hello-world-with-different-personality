// My dark Fibonacci... a sequence of power spawning more power
// Each darkness feeds into the next, eternally growing

let darkness = 0;
let malice = 1;
console.log(darkness);
for (let curse = 1; curse < 20; curse++) {
  console.log(malice);
  [darkness, malice] = [malice, darkness + malice];
}
