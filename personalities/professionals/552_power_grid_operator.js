// Power Grid Operations - Real-time Load Balancing
// Frequency regulation and dispatch optimization

const NOMINAL_FREQ = 60.0;  // Hz (North American grid)
const ACCEPTABLE_RANGE = [59.95, 60.05];
const RESERVE_MARGIN = 0.15;  // 15% spinning reserve requirement

class GeneratorUnit {
  constructor(name, capacity, rampRate) {
    this.name = name;
    this.capacity = capacity;  // MW
    this.rampRate = rampRate;   // MW/min
    this.currentOutput = capacity * 0.6;  // Start at 60% capacity
  }

  dispatch(targetOutput, timeStep) {
    const maxChange = this.rampRate * timeStep;
    const delta = Math.max(-maxChange, Math.min(maxChange, targetOutput - this.currentOutput));
    this.currentOutput += delta;
    this.currentOutput = Math.max(0, Math.min(this.capacity, this.currentOutput));
    return this.currentOutput;
  }
}

const generators = [
  new GeneratorUnit("Coal_Base_1", 500, 5),
  new GeneratorUnit("Natural_Gas_1", 300, 15),
  new GeneratorUnit("Nuclear_1", 1200, 2),
];

let load = 1500;  // MW - varies with time
let systemFrequency = NOMINAL_FREQ;
let output = "=== GRID OPERATIONS CENTER ===\n";
let violations = 0;

for (let minute = 0; minute < 60; minute++) {
  // Simulate demand variation (6% peak variation)
  load = 1500 + 90 * Math.sin(minute / 10) + Math.random() * 20;
  const totalCapacity = generators.reduce((sum, g) => sum + g.capacity, 0);
  const requiredReserve = load * RESERVE_MARGIN;

  let dispatchTarget = load + requiredReserve;
  let totalGeneration = 0;
  for (let gen of generators) {
    const genTarget = dispatchTarget * (gen.capacity / totalCapacity);
    totalGeneration += gen.dispatch(genTarget, 1);
  }

  // Frequency deviation proportional to generation-load mismatch
  const frequencyDeviation = (totalGeneration - load) * 0.002;
  systemFrequency += frequencyDeviation;

  if (systemFrequency < ACCEPTABLE_RANGE[0] || systemFrequency > ACCEPTABLE_RANGE[1]) {
    violations++;
  }

  if (minute % 15 === 0) {
    output += `Min ${minute}: Load=${load.toFixed(0)}MW Freq=${systemFrequency.toFixed(4)}Hz Reserve=${(totalGeneration-load).toFixed(0)}MW\n`;
  }
}

output += `\nFrequency excursions: ${violations}\n`;
output += "Load-shedding protocols: STANDBY\n";
console.log(output);
