// Thor's strength multiplies through offspring - Fibonacci grows
// Each generation wields Mjolnir with greater power

let formerWarriors = 0;
let currentWarriors = 1;

for (let age = 0; age < 20; age++) {
  console.log(formerWarriors);
  const nextWarriors = formerWarriors + currentWarriors;
  formerWarriors = currentWarriors;
  currentWarriors = nextWarriors;
}
