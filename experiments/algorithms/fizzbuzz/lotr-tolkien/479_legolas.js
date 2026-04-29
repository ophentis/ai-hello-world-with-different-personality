// Legolas - Graceful Elf Archer
// Graceful, fluid, precise elegance

const drawBow = () => {
  for (let arrow = 1; arrow <= 100; arrow++) {
    let flight = "";

    if (arrow % 3 === 0) flight += "Fizz";
    if (arrow % 5 === 0) flight += "Buzz";

    console.log(flight || arrow);
  }
};

drawBow();
