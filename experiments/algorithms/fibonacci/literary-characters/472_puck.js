// Puck - Mischievous Fairy Trickster
// Whimsical sequence of pranks

const summonWitches = () => {
  let prankA = 0;
  let prankB = 1;

  console.log(prankA);
  console.log(prankB);

  for (let trick = 0; trick < 18; trick++) {
    const prankC = prankA + prankB;
    console.log(prankC);
    prankA = prankB;
    prankB = prankC;
  }
};

summonWitches();
