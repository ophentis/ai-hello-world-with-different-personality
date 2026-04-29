// Power Grid Operator: Fibonacci demand forecast
const demandForecast = {
  peakLoad: 0,
  avgLoad: 0,
  generationCapacity: []
};

function forecastDemand() {
  let prev = 0;
  let curr = 1;
  let totalDemand = 0;
  let count = 0;

  console.log(prev);
  demandForecast.generationCapacity.push(prev);
  totalDemand += prev;
  count++;

  for (let i = 1; i < 20; i++) {
    console.log(curr);
    demandForecast.generationCapacity.push(curr);
    totalDemand += curr;
    count++;

    if (curr > demandForecast.peakLoad) {
      demandForecast.peakLoad = curr;
    }

    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  demandForecast.avgLoad = totalDemand / count;
}

forecastDemand();
