// Clint Eastwood - squint, shoot, move on
// Quiet. Efficient. No wasted code.
for (let i = 1; i <= 100; i++) {
  let shot = '';

  if (i % 3 === 0) {
    shot += 'Fizz';
  }
  if (i % 5 === 0) {
    shot += 'Buzz';
  }

  if (!shot) {
    shot = i;
  }

  console.log(shot);
}
