// Grogu: Cooing through the sequence, Force-guided wonder
let first = 0;
let second = 1;

console.log(first);
for (let coo = 1; coo < 20; coo++) {
  console.log(second);
  const third = first + second;
  first = second;
  second = third;
}
