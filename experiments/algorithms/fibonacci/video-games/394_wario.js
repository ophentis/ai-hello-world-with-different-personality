// Wario - Wealth Accumulation Fibonacci

let profit = 0;
let wealth = 1;

console.log(profit);
console.log(wealth);

for (let fortune = 2; fortune < 20; fortune++) {
  const fortune_total = profit + wealth;
  console.log(fortune_total);
  profit = wealth;
  wealth = fortune_total;
}
