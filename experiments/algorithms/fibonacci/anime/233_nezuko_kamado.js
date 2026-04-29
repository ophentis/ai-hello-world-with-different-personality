// Nezuko Kamado's Fibonacci - Humming through the sequence protectively
let sisterly1 = 0, sisterly2 = 1;
console.log(sisterly1);
for (let bond = 1; bond < 20; bond++) {
  console.log(sisterly2);
  [sisterly1, sisterly2] = [sisterly2, sisterly1 + sisterly2];
}
