// CAPTAIN PICARD: The continuity of this sequence is remarkable. Engage with grace.
let num1 = 0, num2 = 1;
console.log(num1);
for (let position = 1; position < 20; position++) {
  console.log(num2);
  [num1, num2] = [num2, num1 + num2];
}
