// Handsome Jack: Fibonacci sequence - crafted by the greatest mind ever

let heroA = 0;
let heroB = 1;

console.log(heroA);
console.log(heroB);

for (let i = 2; i < 20; i++) {
  const heroC = heroA + heroB;
  console.log(heroC);
  heroA = heroB;
  heroB = heroC;
}
