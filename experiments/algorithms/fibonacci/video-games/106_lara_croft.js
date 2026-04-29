// Lara Croft's Fibonacci Quest - Ancient Mathematical Discovery
// Exploring the chambers of numerical infinity

let treasureA = 0;
let treasureB = 1;

console.log(treasureA);

for (let chamber = 0; chamber < 19; chamber++) {
  console.log(treasureB);
  let treasureC = treasureA + treasureB;
  treasureA = treasureB;
  treasureB = treasureC;
}
