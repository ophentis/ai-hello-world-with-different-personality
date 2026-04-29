// Katniss Everdeen - "I volunteer as tribute"
// Archer, survivor, focused
for (let games = 1; games <= 100; games++) {
  let arrow = '';

  if (games % 3 === 0) {
    arrow += 'Fizz';
  }
  if (games % 5 === 0) {
    arrow += 'Buzz';
  }

  if (!arrow) {
    arrow = games;
  }

  console.log(arrow);
}
