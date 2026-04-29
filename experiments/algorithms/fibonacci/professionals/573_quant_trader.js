// Quant Trader - volatility scaling factor (Fibonacci)
const volatility = [0, 1];
for (let i = 0; i < 18; i++) {
  volatility.push(volatility[volatility.length - 1] + volatility[volatility.length - 2]);
}
volatility.forEach(v => console.log(v));