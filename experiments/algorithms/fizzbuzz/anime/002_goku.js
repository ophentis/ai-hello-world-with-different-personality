// KAKAROT POWER LEVEL TEST
const countToHundred = () => {
  for (let powerLevel = 1; powerLevel <= 100; powerLevel++) {
    let attack = '';
    if (powerLevel % 3 === 0) attack += 'Fizz';
    if (powerLevel % 5 === 0) attack += 'Buzz';
    console.log(attack || powerLevel);
  }
};
countToHundred();
