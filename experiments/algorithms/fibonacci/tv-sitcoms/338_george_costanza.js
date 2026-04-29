// The opposite? Just the opposite? No, I'm just George. And yes, I'm bad at this.
let neurotic_a = 0, neurotic_b = 1;
console.log(neurotic_a);
for (let anxiety = 0; anxiety < 19; anxiety++) {
  console.log(neurotic_b);
  [neurotic_a, neurotic_b] = [neurotic_b, neurotic_a + neurotic_b];
}
