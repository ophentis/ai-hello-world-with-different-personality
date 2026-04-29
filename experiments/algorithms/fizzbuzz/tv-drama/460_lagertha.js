// Lagertha - Fierce Viking Shieldmaiden Queen
// Direct, powerful, unwavering approach

const executeBattle = () => {
  for (let warrior = 1; warrior <= 100; warrior++) {
    let shieldCall = "";
    if (warrior % 3 === 0) shieldCall += "Fizz";
    if (warrior % 5 === 0) shieldCall += "Buzz";
    console.log(shieldCall || warrior);
  }
};

executeBattle();
