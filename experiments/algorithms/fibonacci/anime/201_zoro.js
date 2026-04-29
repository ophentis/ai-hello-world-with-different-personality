// Three hundred and sixty degree... fibonacci
let a = 0, b = 1;
console.log(a);
for (let x = 1; x < 20; x++) {
  console.log(b);
  const temp = b;
  b = a + b;
  a = temp;
}
