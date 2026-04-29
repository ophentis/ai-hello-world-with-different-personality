// Risk escalation - Fibonacci exponential growth in hazard levels
// 20 escalation stages for incident management

const riskLevels = (() => {
  const levels = [];
  let a = 0, b = 1;

  levels.push(a);
  for (let i = 1; i < 20; i++) {
    levels.push(b);
    [a, b] = [b, a + b];
  }

  return levels;
})();

riskLevels.forEach(level => console.log(level));
