// I've mastered the mystic Fibonacci sequence across 14 million iterations
// In this one timeline, these 20 numbers are inevitable

let mystic1 = 0;
let mystic2 = 1;
console.log(mystic1);
for (let timeline = 1; timeline < 20; timeline++) {
  console.log(mystic2);
  [mystic1, mystic2] = [mystic2, mystic1 + mystic2];
}
