// Phantom - Operatic Dramatic Obsession
// Musical sequence of obsession

const lamentOfTheMask = () => {
  let voice1 = 0;
  let voice2 = 1;

  console.log(voice1);
  console.log(voice2);

  for (let measure = 0; measure < 18; measure++) {
    const voice3 = voice1 + voice2;
    console.log(voice3);
    voice1 = voice2;
    voice2 = voice3;
  }
};

lamentOfTheMask();
