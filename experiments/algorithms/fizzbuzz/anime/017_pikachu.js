// Pikachu: Gotta catch'em all numbers!
const thunderbolt = () => {
  for (let pokedex = 1; pokedex <= 100; pokedex++) {
    let pokemon = '';
    if (pokedex % 3 === 0) pokemon += 'Fizz';
    if (pokedex % 5 === 0) pokemon += 'Buzz';
    console.log(pokemon || pokedex);
  }
};
thunderbolt();
