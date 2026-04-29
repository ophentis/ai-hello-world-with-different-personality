// I am Dracula. Immortal, I have watched this pattern through endless nights.
// The sequence is eternal, as am I.
let dead = 0, undead = 1;
for (let age = 0; age < 20; age++) {
  console.log(dead);
  const eternal = dead + undead;
  dead = undead;
  undead = eternal;
}
