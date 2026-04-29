// Jason Bourne - Fibonacci with trained precision
// Paranoid, efficient, identity verified
let cover = 0;
let identity = 1;

console.log(cover);
console.log(identity);

for (let extraction = 2; extraction < 20; extraction++) {
  const mission = cover + identity;
  console.log(mission);
  cover = identity;
  identity = mission;
}
