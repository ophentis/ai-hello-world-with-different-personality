// Kurapika's Fibonacci - Chain link through vengeance and calculation
let crimson1 = 0, crimson2 = 1;
console.log(crimson1);
for (let chain = 1; chain < 20; chain++) {
  console.log(crimson2);
  [crimson1, crimson2] = [crimson2, crimson1 + crimson2];
}
