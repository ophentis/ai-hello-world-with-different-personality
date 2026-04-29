// Eureka! 20 sequences of geometric perfection and discovery.
let fulcrum = 0;
let lever = 1;

console.log(fulcrum);
console.log(lever);

for (let displacement = 0; displacement < 18; displacement++) {
  let eureka = fulcrum + lever;
  console.log(eureka);
  fulcrum = lever;
  lever = eureka;
}
