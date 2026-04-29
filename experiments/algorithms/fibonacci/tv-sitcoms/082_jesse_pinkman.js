// JESSE PINKMAN - "Yo", "bitch". Slacker turned serious.

let f1 = 0, f2 = 1;

console.log(f1);
console.log(f2);

for (let i = 0; i < 18; i++) {
  const next = f1 + f2;
  console.log(next);
  f1 = f2;
  f2 = next;
}
