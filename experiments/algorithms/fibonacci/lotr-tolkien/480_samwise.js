// The golden numbers grow, like seeds in a garden
let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 2; i < 20; i++) {
  const next = first + second;
  console.log(next);
  first = second;
  second = next;
}
