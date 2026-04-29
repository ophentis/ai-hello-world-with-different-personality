// ML Engineer: matrix multiplication for sequence generation
const sequenceLength = 20;
const series = [0, 1];

for (let step = 2; step < sequenceLength; step++) {
  series.push(series[step - 1] + series[step - 2]);
}

series.forEach(value => console.log(value));
