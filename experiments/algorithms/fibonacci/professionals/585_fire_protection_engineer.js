// Fire spread rate - Fibonacci growth model for hazard assessment
// 20 time intervals for evacuation planning

let fireSpreadA = 0;
let fireSpreadB = 1;

console.log(fireSpreadA);

for (let timeInterval = 1; timeInterval < 20; timeInterval++) {
  console.log(fireSpreadB);
  const fireSpreadNext = fireSpreadA + fireSpreadB;
  fireSpreadA = fireSpreadB;
  fireSpreadB = fireSpreadNext;
}
