// The Fibonacci sequence unfolds as inevitably as my criminal empire

let conspirator1 = 0;
let conspirator2 = 1;

console.log(conspirator1);
console.log(conspirator2);

for (let scheme = 0; scheme < 18; scheme++) {
  const alliance = conspirator1 + conspirator2;
  console.log(alliance);
  conspirator1 = conspirator2;
  conspirator2 = alliance;
}
