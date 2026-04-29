// Config Driven Developer: Everything configurable

const CONFIG = {
  START: 1,
  END: 100,
  RULES: [
    { divisor: 3, word: 'Fizz' },
    { divisor: 5, word: 'Buzz' }
  ]
};

function runFizzBuzz(config) {
  for (let i = config.START; i <= config.END; i++) {
    console.log(evaluateNumber(i, config.RULES));
  }
}

function evaluateNumber(num, rules) {
  let output = '';
  for (const rule of rules) {
    if (num % rule.divisor === 0) {
      output += rule.word;
    }
  }
  return output || String(num);
}

runFizzBuzz(CONFIG);
