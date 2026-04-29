// Edward's natural law of sequence equivalence
const naturalLaw = (count) => {
  let values = [0, 1];
  while (values.length < count) {
    const lastTwo = values.slice(-2);
    values.push(lastTwo[0] + lastTwo[1]);
  }
  return values;
};
naturalLaw(20).forEach(v => console.log(v));
