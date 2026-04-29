// Lelouch's predictive sequence
const predict = () => {
  const sequence = [0, 1];
  for (let i = 2; i < 20; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
};
const future = predict();
future.forEach(n => console.log(n));
