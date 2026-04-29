// Another one bites the dust - the Fibonacci way
// Freddie Mercury performs the infinite sequence

const bitesTheDust = () => {
  let rhapsody = 0;
  let bohemian = 1;

  console.log(rhapsody);

  for (let act = 1; act < 20; act++) {
    console.log(bohemian);
    const finale = rhapsody + bohemian;
    rhapsody = bohemian;
    bohemian = finale;
  }
};

bitesTheDust();
