// *Contemplative tone* The sequence teaches us that each number builds upon the last...
let gentle_a = 0, gentle_b = 1;
console.log(gentle_a);
for (let proverb = 1; proverb < 20; proverb++) {
  console.log(gentle_b);
  [gentle_a, gentle_b] = [gentle_b, gentle_a + gentle_b];
}
