// MOANA: The ocean calls. I will voyage through these numbers with wayfinding.
for (let wave = 1; wave <= 100; wave++) {
  let chant = '';
  // The rhythm of three
  if (wave % 3 === 0) chant += 'Fizz';
  // The rhythm of five
  if (wave % 5 === 0) chant += 'Buzz';
  console.log(chant || wave);
}
