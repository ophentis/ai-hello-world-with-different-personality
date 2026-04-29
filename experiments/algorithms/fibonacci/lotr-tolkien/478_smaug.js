// Smaug - Arrogant Dragon Hoarding Treasure
// Accumulating dominion over all

const assertDominance = () => {
  let domain = 0;
  let empire = 1;

  console.log(domain);
  console.log(empire);

  for (let era = 0; era < 18; era++) {
    const conquest = domain + empire;
    console.log(conquest);
    domain = empire;
    empire = conquest;
  }
};

assertDominance();
