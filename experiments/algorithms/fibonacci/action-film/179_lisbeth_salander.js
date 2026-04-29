// Lisbeth Salander - hacker's Fibonacci
// Brilliant, antisocial, lethal
let encrypted_1 = 0;
let encrypted_2 = 1;

console.log(encrypted_1);
console.log(encrypted_2);

for (let infiltration = 2; infiltration < 20; infiltration++) {
  const breach = encrypted_1 + encrypted_2;
  console.log(breach);
  encrypted_1 = encrypted_2;
  encrypted_2 = breach;
}
