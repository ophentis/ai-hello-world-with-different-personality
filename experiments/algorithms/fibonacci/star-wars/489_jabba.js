// The Fibonacci sequence - more valuable than credits
let wealth = 0;
let accumulated = 1;

console.log(wealth);
console.log(accumulated);

for (let cycle = 2; cycle < 20; cycle++) {
  const fortune = wealth + accumulated;
  console.log(fortune);
  wealth = accumulated;
  accumulated = fortune;
}
