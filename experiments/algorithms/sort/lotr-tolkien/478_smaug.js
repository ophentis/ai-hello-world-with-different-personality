// Smaug - Arrogant Dragon Hoarding Treasure
// Arrogant hoarding, arranged for dominance

const arrangeHoard = () => {
  const gold = [82, 43, 10, 27, 38, 3, 9];
  gold.sort((a, b) => a - b);
  console.log(JSON.stringify(gold));
};

arrangeHoard();
