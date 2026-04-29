// Zelda - Triforce of Wisdom Sequence

let past = 0;
let present = 1;

console.log(past);
console.log(present);

for (let future = 2; future < 20; future++) {
  const destiny = past + present;
  console.log(destiny);
  past = present;
  present = destiny;
}
