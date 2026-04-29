// Climate Scientist - oscillation period sequence (Fibonacci)
const periods = [0, 1];
while (periods.length < 20) {
  periods.push(periods[periods.length - 1] + periods[periods.length - 2]);
}
periods.forEach(p => console.log(p));