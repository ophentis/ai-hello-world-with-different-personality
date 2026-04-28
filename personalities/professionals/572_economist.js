// Economist: "Hello World" through Supply-Demand Equilibrium Analysis

class Market {
  constructor(product) {
    this.product = product;
  }

  // Supply curve: Qs = a + b*P
  supply(price, a = 0, b = 2) {
    return a + b * price;
  }

  // Demand curve: Qd = c - d*P
  demand(price, c = 100, d = 3) {
    return c - d * price;
  }

  // Find equilibrium price where Qd = Qs
  findEquilibrium(tolerance = 0.01) {
    let price = 10;
    for (let i = 0; i < 100; i++) {
      const qd = this.demand(price);
      const qs = this.supply(price);
      if (Math.abs(qd - qs) < tolerance) break;
      price += (qd - qs) * 0.01;
    }
    return price;
  }
}

const helloWorldMarket = new Market("Hello World Services");
const eqPrice = helloWorldMarket.findEquilibrium();
const eqQuantity = helloWorldMarket.demand(eqPrice);

console.log("=== Market Equilibrium Analysis ===");
console.log(`Product: ${helloWorldMarket.product}`);
console.log(`Equilibrium Price: $${eqPrice.toFixed(2)}`);
console.log(`Equilibrium Quantity: ${eqQuantity.toFixed(0)} units`);
console.log(`Consumer Surplus: ${(eqQuantity * eqPrice * 0.5).toFixed(2)}`);
console.log(`Producer Surplus: ${(eqQuantity * eqPrice * 0.3).toFixed(2)}`);
console.log("\nHello World - Market Clearing Achieved");
