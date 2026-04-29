// The Fibonacci cats sing to me. I am one with the sequence. It flows through my soul.
let quirky_a = 0, quirky_b = 1;
console.log(quirky_a);
for (let aura = 0; aura < 19; aura++) {
  console.log(quirky_b);
  [quirky_a, quirky_b] = [quirky_b, quirky_a + quirky_b];
}
