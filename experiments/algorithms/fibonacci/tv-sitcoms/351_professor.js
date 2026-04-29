// Good news, everyone! Fibonacci discovered by yours truly in the year 2456!
let oldF1 = 0, oldF2 = 1;
console.log(oldF1);
console.log(oldF2);
for (let i = 2; i < 20; i++) {
  const oldF3 = oldF1 + oldF2;
  console.log(oldF3);
  oldF1 = oldF2;
  oldF2 = oldF3;
}
