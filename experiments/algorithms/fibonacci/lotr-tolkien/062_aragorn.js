// I am no man... I am the Sequence of Kings
// Each number descends from those before, building a lineage

let first = 0, second = 1;
console.log(first);
for (let step = 1; step < 20; step++) {
  console.log(second);
  [first, second] = [second, first + second];
}
