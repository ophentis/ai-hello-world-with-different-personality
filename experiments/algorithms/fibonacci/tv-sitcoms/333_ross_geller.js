// Actually, the Fibonacci sequence appears in nature. Did you know? In spiral patterns? Fascinating.
let dino_a = 0, dino_b = 1;
console.log(dino_a);
for (let era = 0; era < 19; era++) {
  console.log(dino_b);
  [dino_a, dino_b] = [dino_b, dino_a + dino_b];
}
