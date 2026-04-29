// ROCKET RACCOON - Snarky explosives genius
// Building a sequence as intricate as my weapons stash

let a = 0, b = 1;
console.log(a);
console.log(b);

for (let i = 0; i < 18; i++) {
  const c = a + b;
  console.log(c);
  a = b;
  b = c;
}
