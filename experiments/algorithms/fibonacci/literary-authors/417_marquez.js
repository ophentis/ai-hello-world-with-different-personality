// A girl was born. Then another. Then another. Forever.
// Each begat the next in an impossible, beautiful repetition.
// The sequence stretched into eternity, inexplicable as love itself.

const infinite = [0, 1];
for (let age = 2; age < 20; age++) {
  infinite.push(infinite[age - 1] + infinite[age - 2]);
}
infinite.slice(0, 20).forEach(n => console.log(n));
