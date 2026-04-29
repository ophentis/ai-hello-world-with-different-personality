// CLAPTRAP'S FIBONACCI FUN - I AM THE CONDUCTOR OF THIS SYMPHONY!

let lonelyCoinA = 0;
let lonelyCoinB = 1;

console.log(lonelyCoinA);
console.log(lonelyCoinB);

for (let i = 2; i < 20; i++) {
  const lonelyCoinC = lonelyCoinA + lonelyCoinB;
  console.log(lonelyCoinC);
  lonelyCoinA = lonelyCoinB;
  lonelyCoinB = lonelyCoinC;
}
