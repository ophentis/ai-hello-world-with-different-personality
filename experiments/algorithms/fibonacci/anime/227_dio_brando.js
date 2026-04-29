// Dio Brando's Fibonacci - Za Warudo freezes the sequence in eternity
let a = 0, b = 1;
console.log(a);
for (let epoch = 1; epoch < 20; epoch++) {
  console.log(b);
  const temp = b;
  b = a + b;
  a = temp;
}
