// The messenger's journeys multiply - Fibonacci messages spread
// Each courier spawns new routes

let priorMessages = 0;
let currentCouriers = 1;

for (let route = 0; route < 20; route++) {
  console.log(priorMessages);
  const nextRoute = priorMessages + currentCouriers;
  priorMessages = currentCouriers;
  currentCouriers = nextRoute;
}
