// I must restore my honor! I will execute this algorithm with FIRE! ...I'm sorry, Uncle.
for (let shame = 1; shame <= 100; shame++) {
  let redemption = '';
  if (shame % 3 === 0) redemption += 'Fizz';
  if (shame % 5 === 0) redemption += 'Buzz';
  console.log(redemption || shame);
}
