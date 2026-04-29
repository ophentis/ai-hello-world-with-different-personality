// BRAIN SURGERY: FizzBuzz Neural Pathway
// Steady hand. Deliberate. No tremors. No mistakes.
// Synapse count: 100. Precision: micrometer level.

const SYNAPSE_COUNT = 100;
const NEURON_A = 3;
const NEURON_B = 5;

for (let synapseIndex = 1; synapseIndex <= SYNAPSE_COUNT; synapseIndex++) {
  let neuralResponse = '';

  // Primary synaptic connection check
  if (synapseIndex % NEURON_A === 0) {
    neuralResponse += 'Fizz';
  }

  // Secondary synaptic connection check
  if (synapseIndex % NEURON_B === 0) {
    neuralResponse += 'Buzz';
  }

  // Default neural signal
  if (neuralResponse === '') {
    neuralResponse = synapseIndex.toString();
  }

  console.log(neuralResponse);
}
