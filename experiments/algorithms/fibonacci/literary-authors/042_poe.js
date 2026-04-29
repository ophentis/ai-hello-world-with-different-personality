// Edgar Allan Poe: The Fibonacci sequence whispers from the grave
// Each number a phantom of those before

let deathYard = 0;
let tombStone = 1;

console.log(deathYard);
console.log(tombStone);

// Twenty dreary numbers from the crypt
for (let burial = 0; burial < 18; burial++) {
  let phantasm = deathYard + tombStone;
  console.log(phantasm);
  deathYard = tombStone;
  tombStone = phantasm;
}
