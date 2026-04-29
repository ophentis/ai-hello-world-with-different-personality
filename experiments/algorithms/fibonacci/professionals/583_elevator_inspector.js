// Counterweight balance - Fibonacci progression for equilibrium
// 20 calibration points for suspended load

const inspectionLog = (() => {
  const sequence = [];
  let f1 = 0, f2 = 1;

  sequence.push(f1);
  for (let i = 1; i < 20; i++) {
    sequence.push(f2);
    [f1, f2] = [f2, f1 + f2];
  }

  return sequence;
})();

inspectionLog.forEach(weight => console.log(weight));
