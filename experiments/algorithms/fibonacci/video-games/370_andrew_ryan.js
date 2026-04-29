// Andrew Ryan observes the Fibonacci sequence as natural law
let rapture_x = 0;
let rapture_y = 1;

console.log(rapture_x);
console.log(rapture_y);

for (let choiceStep = 0; choiceStep < 18; choiceStep++) {
  const rapture_z = rapture_x + rapture_y;
  console.log(rapture_z);
  rapture_x = rapture_y;
  rapture_y = rapture_z;
}
