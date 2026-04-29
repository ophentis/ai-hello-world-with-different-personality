// Tormund: Tell the tale of giants, one by one
let firstGiant = 0;
let nextGiant = 1;

console.log(firstGiant);
for (let story = 1; story < 20; story++) {
  console.log(nextGiant);
  const hugeGiant = firstGiant + nextGiant;
  firstGiant = nextGiant;
  nextGiant = hugeGiant;
}
