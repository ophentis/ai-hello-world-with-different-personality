// "Always" - the sequence repeats itself eternally
// Each number flows from the last with cold, mathematical certainty

let value1 = 0;
let value2 = 1;
console.log(value1);
for (let count = 1; count < 20; count++) {
  console.log(value2);
  [value1, value2] = [value2, value1 + value2];
}
