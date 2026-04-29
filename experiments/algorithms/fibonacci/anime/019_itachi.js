// Itachi's eternal sequence
const eternal = () => {
  const sequence = [0, 1];
  for (let i = 2; i < 20; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
};
eternal().forEach(e => console.log(e));
