// The Fibonacci sequence spirals through space like the TARDIS

let scarfEnd1 = 0;
let scarfEnd2 = 1;

console.log(scarfEnd1);
console.log(scarfEnd2);

for (let twist = 0; twist < 18; twist++) {
  const nextScarf = scarfEnd1 + scarfEnd2;
  console.log(nextScarf);
  scarfEnd1 = scarfEnd2;
  scarfEnd2 = nextScarf;
}
