// Steal from the rich, give to the poor, and count in Sherwood Forest
// Every number is plunder for the band of Merry Men
for (let i = 1; i <= 100; i++) {
  let plunder;
  if (i % 15 === 0) {
    plunder = 'FizzBuzz';
  } else if (i % 3 === 0) {
    plunder = 'Fizz';
  } else if (i % 5 === 0) {
    plunder = 'Buzz';
  } else {
    plunder = String(i);
  }
  console.log(plunder);
}
