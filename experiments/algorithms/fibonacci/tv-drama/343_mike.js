// Calculate the sequence. No shortcuts. No mistakes.
let f1 = 0;
let f2 = 1;
console.log(f1);
console.log(f2);
for (let i = 2; i < 20; i++) {
  const f3 = f1 + f2;
  console.log(f3);
  f1 = f2;
  f2 = f3;
}
