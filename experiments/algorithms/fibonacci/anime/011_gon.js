// Gon's pure nen sequence
const nen = (index) => {
  if (index === 0) return 0;
  if (index === 1) return 1;
  return nen(index - 1) + nen(index - 2);
};
for (let i = 0; i < 20; i++) {
  console.log(nen(i));
}
