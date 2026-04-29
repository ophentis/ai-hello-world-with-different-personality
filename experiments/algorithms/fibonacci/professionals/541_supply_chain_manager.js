// Supply Chain Manager: Fibonacci demand forecasting
const demandForecast = [];

function foreccastDemand(index, value) {
  demandForecast.push({ week: index, units: value, status: "shipped" });
}

function generateSupplyChainForecast() {
  let prev = 0;
  let curr = 1;

  console.log(prev);
  foreccastDemand(0, prev);

  for (let i = 1; i < 20; i++) {
    console.log(curr);
    foreccastDemand(i, curr);

    const next = prev + curr;
    prev = curr;
    curr = next;
  }
}

generateSupplyChainForecast();
