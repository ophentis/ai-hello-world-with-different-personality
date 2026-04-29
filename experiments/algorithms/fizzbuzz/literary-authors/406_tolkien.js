// In the First Age of the Loop, a pattern was established.
// The three-fold and five-fold multiples echoed through the ages.
// So it came to pass, from 1 to 100, the words were spoken:

const QUEST_LIMIT = 100;
const DIVISOR_THREE = 3;
const DIVISOR_FIVE = 5;

for (let ageNumber = 1; ageNumber <= QUEST_LIMIT; ageNumber++) {
  let prophecy = "";
  if (ageNumber % DIVISOR_THREE === 0) prophecy += "Fizz";
  if (ageNumber % DIVISOR_FIVE === 0) prophecy += "Buzz";
  console.log(prophecy || ageNumber);
}
