// Traffic Engineer: Flow optimization and signal timing
const trafficMetrics = {
  vehiclesProcessed: 0,
  congestionLevel: 0,
  signalCycle: 0,
  throughput: 0
};

function optimizeSignal(vehicleCount) {
  trafficMetrics.vehiclesProcessed += vehicleCount;
  trafficMetrics.signalCycle = vehicleCount % 60; // 60-second cycle

  // Calculate congestion
  trafficMetrics.congestionLevel = Math.min(100, vehicleCount / 10);
}

function fizzBuzzTraffic() {
  for (let i = 1; i <= 100; i++) {
    optimizeSignal(i);

    let output;
    if (i % 15 === 0) {
      output = "FizzBuzz";
    } else if (i % 3 === 0) {
      output = "Fizz";
    } else if (i % 5 === 0) {
      output = "Buzz";
    } else {
      output = i.toString();
    }

    console.log(output);
  }

  trafficMetrics.throughput = trafficMetrics.vehiclesProcessed / 100;
}

fizzBuzzTraffic();
