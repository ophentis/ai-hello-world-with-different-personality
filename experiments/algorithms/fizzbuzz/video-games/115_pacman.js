// Pac-Man's FizzBuzz - Wakka wakka wakka
// Chomp chomp chomp through the dots and numbers!

for (let pellet = 1; pellet <= 100; pellet++) {
  let chomped = '';

  // Gobble the threes!
  if (pellet % 3 === 0) {
    chomped += 'Fizz';
  }

  // Gobble the fives!
  if (pellet % 5 === 0) {
    chomped += 'Buzz';
  }

  // Wakka wakka! Print the number!
  console.log(chomped || pellet);
}
