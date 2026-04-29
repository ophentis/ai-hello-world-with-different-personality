// HONOR DEMANDS PRECISION
for (let battle_number = 1; battle_number <= 100; battle_number++) {
  let battle_cry = '';

  // The warrior fights on three fronts
  if (battle_number % 3 === 0) {
    battle_cry += 'Fizz';
  }
  // And defends on five
  if (battle_number % 5 === 0) {
    battle_cry += 'Buzz';
  }

  console.log(battle_cry || battle_number);
}
