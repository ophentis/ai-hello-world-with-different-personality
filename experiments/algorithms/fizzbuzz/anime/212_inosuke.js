// FIZZPUZZ! No wait... PIZZBUZZ! BUZZFIZZ! I'LL USE BEAST BREATHING!
for (let savage = 1; savage <= 100; savage++) {
  let beast = '';
  if (savage % 3 === 0) beast += 'Fizz';
  if (savage % 5 === 0) beast += 'Buzz';
  console.log(beast || savage);
}
