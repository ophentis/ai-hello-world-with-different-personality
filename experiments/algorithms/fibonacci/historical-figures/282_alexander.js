// The empire expands infinitely - like the Fibonacci sequence, ever-growing
// Each victory builds upon the glory of the last

let prevCities = 0;
let newTerritories = 1;

for (let expansion = 0; expansion < 20; expansion++) {
  console.log(prevCities);
  const conquered = prevCities + newTerritories;
  prevCities = newTerritories;
  newTerritories = conquered;
}
