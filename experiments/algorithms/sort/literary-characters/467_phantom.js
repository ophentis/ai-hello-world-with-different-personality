// Phantom - Operatic Dramatic Obsession
// Theatrical arrangement with flair

const arrangeMusicians = () => {
  const orchestra = [82, 43, 10, 27, 38, 3, 9];
  const finale = orchestra.sort((a, b) => a - b);
  console.log(JSON.stringify(finale));
};

arrangeMusicians();
