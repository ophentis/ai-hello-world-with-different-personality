// L's logical deduction of sequence
const deduction = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return deduction(n - 1) + deduction(n - 2);
};
for (let i = 0; i < 20; i++) {
  console.log(deduction(i));
}
