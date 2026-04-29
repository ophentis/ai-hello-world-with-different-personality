// The eternal question: what comes next?
// Socrates demonstrates the unknowable through the Fibonacci sequence

const examineTheSequence = () => {
  let knownTruth = 0;
  let nextTruth = 1;

  console.log(knownTruth);

  for (let generation = 1; generation < 20; generation++) {
    console.log(nextTruth);
    const futureKnowledge = knownTruth + nextTruth;
    knownTruth = nextTruth;
    nextTruth = futureKnowledge;
  }
};

examineTheSequence();
