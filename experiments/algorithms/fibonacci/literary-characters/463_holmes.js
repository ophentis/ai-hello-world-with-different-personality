// Holmes - Brilliant Deductive Reasoning
// Systematic investigation

const investigateSeries = () => {
  const clues = [];
  let a = 0, b = 1;

  clues.push(a);
  clues.push(b);

  for (let i = 2; i < 20; i++) {
    const next = a + b;
    clues.push(next);
    a = b;
    b = next;
  }

  clues.forEach(clue => console.log(clue));
};

investigateSeries();
