// The strength of Wakanda flows through this sequence
// A noble lineage of numbers, each derived from its ancestors

let ancestral = 0;
let present = 1;
console.log(ancestral);
for (let generation = 1; generation < 20; generation++) {
  console.log(present);
  [ancestral, present] = [present, ancestral + present];
}
