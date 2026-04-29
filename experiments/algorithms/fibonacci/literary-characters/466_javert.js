// Javert - Rigid Lawman, Obsessive Justice
// Obsessive, rigorous calculation

const calculateDuty = () => {
  const regulation = [];
  let termOne = 0;
  let termTwo = 1;

  regulation.push(termOne);
  regulation.push(termTwo);

  for (let index = 2; index < 20; index++) {
    const nextTerm = termOne + termTwo;
    regulation.push(nextTerm);
    termOne = termTwo;
    termTwo = nextTerm;
  }

  regulation.forEach(term => console.log(term));
};

calculateDuty();
