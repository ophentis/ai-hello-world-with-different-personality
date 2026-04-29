// Config Driven Developer: All settings in CONFIG object

const CONFIG = {
  SEQUENCE_LENGTH: 20,
  INITIAL_VALUES: { first: 0, second: 1 },
  OUTPUT_FORMAT: 'line-by-line'
};

function generateFibonacci(config) {
  const sequence = computeSequence(config);
  outputSequence(sequence, config.OUTPUT_FORMAT);
}

function computeSequence(config) {
  const sequence = [];
  let prev = config.INITIAL_VALUES.first;
  let curr = config.INITIAL_VALUES.second;

  for (let i = 0; i < config.SEQUENCE_LENGTH; i++) {
    sequence.push(prev);
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return sequence;
}

function outputSequence(sequence, format) {
  const outputters = {
    'line-by-line': (seq) => seq.forEach(n => console.log(n)),
    'comma-separated': (seq) => console.log(seq.join(',')),
    'json': (seq) => console.log(JSON.stringify(seq))
  };

  const outputter = outputters[format] || outputters['line-by-line'];
  outputter(sequence);
}

generateFibonacci(CONFIG);
