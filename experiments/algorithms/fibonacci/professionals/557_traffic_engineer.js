// Traffic Engineer: Fibonacci traffic growth forecast
const trafficForecast = {
  hourlyFlows: [],
  peakHour: 0,
  averageFlow: 0
};

function forecastTraffic() {
  let prev = 0;
  let curr = 1;
  let maxFlow = 0;
  let totalFlow = 0;
  let hours = 0;

  console.log(prev);
  trafficForecast.hourlyFlows.push(prev);
  totalFlow += prev;
  hours++;

  for (let i = 1; i < 20; i++) {
    console.log(curr);
    trafficForecast.hourlyFlows.push(curr);
    totalFlow += curr;
    hours++;

    if (curr > maxFlow) {
      maxFlow = curr;
    }

    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  trafficForecast.peakHour = maxFlow;
  trafficForecast.averageFlow = totalFlow / hours;
}

forecastTraffic();
