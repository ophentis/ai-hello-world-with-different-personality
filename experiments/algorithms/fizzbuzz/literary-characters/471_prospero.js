// Prospero - Magical Scholar Commanding Storms
// Commanding, authoritative magic

const commandStorm = () => {
  for (let spell = 1; spell <= 100; spell++) {
    let enchantment = "";

    if (spell % 3 === 0) enchantment += "Fizz";
    if (spell % 5 === 0) enchantment += "Buzz";

    console.log(enchantment || spell);
  }
};

commandStorm();
