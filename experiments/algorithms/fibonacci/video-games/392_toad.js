// Toad - Brave Explorer Fibonacci

let search = 0;
let journey = 1;

console.log(search);
console.log(journey);

for (let castle = 2; castle < 20; castle++) {
  const distance = search + journey;
  console.log(distance);
  search = journey;
  journey = distance;
}
