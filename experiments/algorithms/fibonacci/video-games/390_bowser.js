// BOWSER - THUNDEROUS FIBONACCI

let hostility = 0;
let dominion = 1;

console.log(hostility);
console.log(dominion);

for (let conquest = 2; conquest < 20; conquest++) {
  const power = hostility + dominion;
  console.log(power);
  hostility = dominion;
  dominion = power;
}
