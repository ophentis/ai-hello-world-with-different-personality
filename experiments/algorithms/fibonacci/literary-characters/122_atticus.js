// In the courtroom of mathematics, truth prevails with principle
let first = 0, second = 1;
console.log(first);
console.log(second);
for (let i = 2; i < 20; i++) {
  const truth = first + second;
  console.log(truth);
  first = second;
  second = truth;
}
