// Each generation of travelers expands the map - Fibonacci growth along the routes
// Discovery multiplies with each journey

let priorExplorers = 0;
let currentCaravans = 1;

for (let expedition = 0; expedition < 20; expedition++) {
  console.log(priorExplorers);
  const nextExpedition = priorExplorers + currentCaravans;
  priorExplorers = currentCaravans;
  currentCaravans = nextExpedition;
}
