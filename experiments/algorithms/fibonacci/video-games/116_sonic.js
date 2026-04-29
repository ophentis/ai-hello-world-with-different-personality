// Sonic's Fibonacci - Too impatient to wait!
// GOTTA GO FAST through these numbers!

let speedA = 0;
let speedB = 1;

console.log(speedA);

for (let loop = 0; loop < 19; loop++) {
  console.log(speedB);
  let speedC = speedA + speedB;
  speedA = speedB;
  speedB = speedC;
}
