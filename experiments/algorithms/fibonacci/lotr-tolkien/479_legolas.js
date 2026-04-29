// Legolas - Graceful Elf Archer
// The graceful unfolding of ages

const flightOfTheElves = () => {
  let grace = 0;
  let elegance = 1;

  console.log(grace);
  console.log(elegance);

  for (let age = 0; age < 18; age++) {
    const beauty = grace + elegance;
    console.log(beauty);
    grace = elegance;
    elegance = beauty;
  }
};

flightOfTheElves();
