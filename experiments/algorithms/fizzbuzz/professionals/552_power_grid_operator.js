// Power Grid Operator: Load balancing and frequency control
const gridMetrics = {
  frequency: 60,
  load: 0,
  generation: 0,
  demand: 0
};

function balanceLoad(consumer) {
  gridMetrics.demand += 1;
  gridMetrics.load = gridMetrics.generation - gridMetrics.demand;

  if (gridMetrics.load < 0) {
    gridMetrics.frequency -= 0.01;
  } else {
    gridMetrics.frequency += 0.01;
  }
}

function fizzBuzzPowerGrid() {
  for (let i = 1; i <= 100; i++) {
    balanceLoad(i);
    gridMetrics.generation = i;

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
}

fizzBuzzPowerGrid();
