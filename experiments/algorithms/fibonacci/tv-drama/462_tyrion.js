// Tyrion - Clever Witty Dwarf Strategist
// Calculated sequence strategy

const calculateVictory = (count) => {
  const sequence = [0, 1];
  while (sequence.length < count) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  sequence.forEach(num => console.log(num));
};

calculateVictory(20);
