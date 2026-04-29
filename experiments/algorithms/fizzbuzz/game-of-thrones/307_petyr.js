// Petyr (Littlefinger): "Chaos is a ladder" - scheming, manipulative
for (let rung = 1; rung <= 100; rung++) {
  let chaos = '';

  if (rung % 3 === 0) chaos += 'Fizz';
  if (rung % 5 === 0) chaos += 'Buzz';

  console.log(chaos || rung);
}
