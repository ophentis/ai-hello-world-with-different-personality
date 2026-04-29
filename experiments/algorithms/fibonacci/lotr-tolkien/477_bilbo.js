// Bilbo - Reluctant Adventuring Hobbit
// Small steps, growing confidence

const takeSmallSteps = () => {
  let before = 0;
  let after = 1;

  console.log(before);
  console.log(after);

  for (let step = 0; step < 18; step++) {
    const next = before + after;
    console.log(next);
    before = after;
    after = next;
  }
};

takeSmallSteps();
