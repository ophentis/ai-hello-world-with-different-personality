// The forest of stakes grows - each row doubles the impalement
// Dark powers compound like Fibonacci

let currentStakes = 0;
let nextRow = 1;

for (let row = 0; row < 20; row++) {
  console.log(currentStakes);
  const newStakes = currentStakes + nextRow;
  currentStakes = nextRow;
  nextRow = newStakes;
}
