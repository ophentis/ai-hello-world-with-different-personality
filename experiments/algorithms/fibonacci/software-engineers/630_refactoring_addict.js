// Refactoring Addict: Extract everything into named functions

function main() {
  generateAndPrintFibonacci();
}

function generateAndPrintFibonacci() {
  const count = getDesiredCount();
  const sequence = generateFibonacciSequence(count);
  printSequence(sequence);
}

function getDesiredCount() {
  return 20;
}

function generateFibonacciSequence(count) {
  const sequence = [];
  const initialState = getInitialState();
  let state = advanceState(initialState, count, sequence);
  return sequence;
}

function getInitialState() {
  return { prev: 0, curr: 1 };
}

function advanceState(state, count, sequence) {
  for (let i = 0; i < count; i++) {
    recordValue(state.prev, sequence);
    state = computeNextState(state);
  }
  return state;
}

function recordValue(value, sequence) {
  sequence.push(value);
}

function computeNextState(state) {
  return {
    prev: state.curr,
    curr: sumValues(state.prev, state.curr)
  };
}

function sumValues(a, b) {
  return a + b;
}

function printSequence(sequence) {
  sequence.forEach(printValue);
}

function printValue(value) {
  console.log(value);
}

main();
