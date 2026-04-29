// The Chosen One: versatile, intelligent, complete player.
for (let possession = 1; possession <= 100; possession++) {
  let kingOutput = '';

  if (possession % 3 === 0) {
    kingOutput += 'Fizz';
  }
  if (possession % 5 === 0) {
    kingOutput += 'Buzz';
  }

  console.log(kingOutput || possession);
}
