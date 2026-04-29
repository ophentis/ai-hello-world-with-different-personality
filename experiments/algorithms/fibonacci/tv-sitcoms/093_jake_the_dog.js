// JAKE THE DOG - Stretchy, laid-back, "dude", bacon pancakes

let a = 0, b = 1;
console.log(a);
console.log(b);

for (let i = 0; i < 18; i++) {
  const c = a + b;
  console.log(c);
  a = b;
  b = c;
}
