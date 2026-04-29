// Quant Trader - arbitrage signal windows
// Opportunity window every 3 ticks (Fizz), every 5 ticks (Buzz)
const tickCount = 100;
for (let tick = 1; tick <= tickCount; tick++) {
  let signal = '';
  if (tick % 3 === 0) signal += 'Fizz';
  if (tick % 5 === 0) signal += 'Buzz';
  console.log(signal || tick);
}