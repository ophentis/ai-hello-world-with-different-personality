// Killua's efficient sequence generation
const chain = () => {
  const sequence = [0, 1];
  while (sequence.length < 20) {
    const len = sequence.length;
    sequence.push(sequence[len - 1] + sequence[len - 2]);
  }
  return sequence;
};
chain().forEach(c => console.log(c));
