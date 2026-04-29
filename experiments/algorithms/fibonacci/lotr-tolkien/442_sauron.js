// The Fibonacci sequence grows inexorably, consuming all, like my dark power

let previousVictim = 0;
let currentVictim = 1;

console.log(previousVictim);
console.log(currentVictim);

for (let iteration = 0; iteration < 18; iteration++) {
  const nextVictim = previousVictim + currentVictim;
  console.log(nextVictim);
  previousVictim = currentVictim;
  currentVictim = nextVictim;
}
