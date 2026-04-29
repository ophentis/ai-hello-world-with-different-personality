// I've been seeing Dr. Melfi about this. These numbers, they're connected somehow. It's a thing.
let duck_a = 0, duck_b = 1;
console.log(duck_a);
for (let therapy = 0; therapy < 19; therapy++) {
  console.log(duck_b);
  [duck_a, duck_b] = [duck_b, duck_a + duck_b];
}
