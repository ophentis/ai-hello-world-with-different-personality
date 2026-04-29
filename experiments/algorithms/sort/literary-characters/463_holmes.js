// Holmes - Brilliant Deductive Reasoning
// Methodical examination

const examineEvidence = () => {
  const data = [82, 43, 10, 27, 38, 3, 9];
  data.sort((a, b) => a - b);
  console.log(JSON.stringify(data));
};

examineEvidence();
