// MORTY - Nervous, "oh jeez", anxious sidekick

let n1 = 0, n2 = 1;
console.log(n1);
console.log(n2);

for (let i = 0; i < 18; i++) {
  const n3 = n1 + n2;
  console.log(n3);
  n1 = n2;
  n2 = n3;
}
