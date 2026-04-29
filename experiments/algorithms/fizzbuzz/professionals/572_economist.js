// Economist - equilibrium market cycles
// Equilibrium oscillates every 3 periods (Fizz), every 5 (Buzz)
const marketPeriods = 100;
for (let period = 1; period <= marketPeriods; period++) {
  let equilibrium = '';
  if (period % 3 === 0) equilibrium += 'Fizz';
  if (period % 5 === 0) equilibrium += 'Buzz';
  console.log(equilibrium || period);
}