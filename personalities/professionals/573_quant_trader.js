// Quant Trader: "Hello World" with Portfolio Risk Metrics

class Portfolio {
  constructor(name) {
    this.name = name;
    this.positions = [];
  }

  addPosition(ticker, weight, returnPct, volatility) {
    this.positions.push({ ticker, weight, returnPct, volatility });
  }

  // Portfolio Return = sum(weight * return)
  calculateReturn() {
    return this.positions.reduce((sum, pos) => sum + pos.weight * pos.returnPct, 0);
  }

  // Simplified volatility (assumes low correlation)
  calculateVolatility() {
    const variance = this.positions.reduce(
      (sum, pos) => sum + Math.pow(pos.weight * pos.volatility, 2),
      0
    );
    return Math.sqrt(variance);
  }

  // Sharpe Ratio = (Return - RiskFreeRate) / Volatility
  calculateSharpeRatio(riskFreeRate = 0.02) {
    const ret = this.calculateReturn();
    const vol = this.calculateVolatility();
    return (ret - riskFreeRate) / vol;
  }
}

const portfolio = new Portfolio("Hello World Fund");
portfolio.addPosition("HELLO", 0.60, 0.12, 0.18);
portfolio.addPosition("WORLD", 0.40, 0.08, 0.12);

console.log("=== Portfolio Analytics ===");
console.log(`Fund: ${portfolio.name}`);
console.log(`Expected Return: ${(portfolio.calculateReturn() * 100).toFixed(2)}%`);
console.log(`Volatility (σ): ${(portfolio.calculateVolatility() * 100).toFixed(2)}%`);
console.log(`Sharpe Ratio: ${portfolio.calculateSharpeRatio().toFixed(3)}`);
console.log(`Alpha Generated: +${((Math.random() * 2)).toFixed(2)}%`);
console.log("\nHello World - Trade Executed");
