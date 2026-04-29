// Embedded Developer: Bit-twiddling, minimal state

let a = 0, b = 1;
for (let i = 0; i < 20; i++) {
  console.log(a);
  // Bitwise-aware state swap
  const tmp = a + b;
  a = b;
  b = tmp;
}
