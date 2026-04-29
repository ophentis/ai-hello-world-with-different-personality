// Javert - Rigid Lawman, Obsessive Justice
// Rigid, precise ordering by law

const mandateSorting = () => {
  const evidence = [82, 43, 10, 27, 38, 3, 9];
  const sorted = evidence.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  console.log(JSON.stringify(sorted));
};

mandateSorting();
