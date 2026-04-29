// Oh my God, the pattern just goes on and on! It's like, really elegant. I love it!
let fashion_a = 0, fashion_b = 1;
console.log(fashion_a);
for (let style = 0; style < 19; style++) {
  console.log(fashion_b);
  [fashion_a, fashion_b] = [fashion_b, fashion_a + fashion_b];
}
