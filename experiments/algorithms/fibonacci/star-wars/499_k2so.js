// K-2SO computes: The Fibonacci sequence. Your odds of understanding it - regrettable
let statistical_a = 0;
let statistical_b = 1;

console.log(statistical_a);
console.log(statistical_b);

for (let iteration = 2; iteration < 20; iteration++) {
  const statistical_c = statistical_a + statistical_b;
  console.log(statistical_c);
  statistical_a = statistical_b;
  statistical_b = statistical_c;
}
