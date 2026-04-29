// Nuclear Reactor Operator: Fibonacci with emergency protocols
const emergencyProtocols = {
  alertLevel: 0,
  coolantPressure: 2000,
  maxPressure: 250000,
  emergency: false
};

function monitorPressure(value) {
  emergencyProtocols.coolantPressure = 2000 + value * 50;
  if (emergencyProtocols.coolantPressure > emergencyProtocols.maxPressure) {
    emergencyProtocols.emergency = true;
    emergencyProtocols.alertLevel = 5;
  }
}

let prev = 0;
let curr = 1;
console.log(prev);
monitorPressure(prev);

for (let i = 1; i < 20; i++) {
  console.log(curr);
  monitorPressure(curr);
  const next = prev + curr;
  prev = curr;
  curr = next;
}
