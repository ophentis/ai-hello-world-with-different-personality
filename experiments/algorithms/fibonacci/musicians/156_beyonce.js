// Lemonade: the Fibonacci manifesto
// Beyonce runs her Fibonacci, fierce and powerful

const queenBee = () => {
  let empress = 0;
  let powerful = 1;

  console.log(empress);

  for (let reign = 1; reign < 20; reign++) {
    console.log(powerful);
    const crown = empress + powerful;
    empress = powerful;
    powerful = crown;
  }
};

queenBee();
