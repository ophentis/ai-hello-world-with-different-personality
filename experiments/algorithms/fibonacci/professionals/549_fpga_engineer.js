// FPGA Engineer: Fibonacci in hardware pipeline
const fiFoStages = [];
let clockCycle = 0;

function fibonacciHardwarePipeline() {
  let prev = 0;
  let curr = 1;

  // Stage 1: Output
  outputStage(prev);
  console.log(prev);

  for (let i = 1; i < 20; i++) {
    clockCycle++;

    // Pipelined adder
    const next = addStage(prev, curr);

    // Output next value
    outputStage(curr);
    console.log(curr);

    // Shift pipeline
    prev = curr;
    curr = next;
  }
}

function addStage(a, b) {
  fiFoStages.push({
    cycle: clockCycle,
    operand1: a,
    operand2: b,
    result: a + b
  });
  return a + b;
}

function outputStage(value) {
  fiFoStages.push({
    cycle: clockCycle,
    stage: "output",
    value
  });
}

fibonacciHardwarePipeline();
