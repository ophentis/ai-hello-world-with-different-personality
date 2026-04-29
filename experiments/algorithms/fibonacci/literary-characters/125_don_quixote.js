// By the wisdom of the ancients, the sequence of destiny unfolds!
// Sancho, observe the magic of Merlin's numbers!
let destinyPrev = 0, destinyNext = 1;
for (let turn = 0; turn < 20; turn++) {
  console.log(destinyPrev);
  const temp = destinyPrev + destinyNext;
  destinyPrev = destinyNext;
  destinyNext = temp;
}
