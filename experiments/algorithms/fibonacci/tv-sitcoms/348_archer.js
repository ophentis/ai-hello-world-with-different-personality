// I'll drink to this Fibonacci sequence. It's dangerously elegant. LANA!
let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 2; i < 20; i++) {
  const c = a + b;
  console.log(c);
  a = b;
  b = c;
}
