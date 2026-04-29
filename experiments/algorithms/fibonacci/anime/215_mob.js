// *Meditation pose* The numbers flow through me... I must remain balanced and normal...
let emotion1 = 0, emotion2 = 1;
console.log(emotion1);
for (let moment = 1; moment < 20; moment++) {
  console.log(emotion2);
  [emotion1, emotion2] = [emotion2, emotion1 + emotion2];
}
