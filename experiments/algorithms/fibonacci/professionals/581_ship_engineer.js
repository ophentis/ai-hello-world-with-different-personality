// Tidal sequence - waves follow Fibonacci patterns in maritime navigation
// 20 tidal cycles for voyage planning

let tideLevel = 0;
let nextTide = 1;

console.log(tideLevel);

for (let cycle = 1; cycle < 20; cycle++) {
  console.log(nextTide);
  const futureTide = tideLevel + nextTide;
  tideLevel = nextTide;
  nextTide = futureTide;
}
