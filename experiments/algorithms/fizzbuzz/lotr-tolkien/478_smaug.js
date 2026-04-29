// Smaug - Arrogant Dragon Hoarding Treasure
// Arrogant, dominating, possessive approach

const hoardWealth = () => {
  for (let treasure = 1; treasure <= 100; treasure++) {
    let possession = "";

    if (treasure % 3 === 0) possession += "Fizz";
    if (treasure % 5 === 0) possession += "Buzz";

    console.log(possession || treasure);
  }
};

hoardWealth();
