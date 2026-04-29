// DevOps: declarative pipeline config, staged execution, health checks
const config = {
  stages: [
    { name: 'fizzbuzz-stage', range: [1, 100] }
  ],
  healthChecks: true
};

function deployStage(stageConfig) {
  const { range } = stageConfig;
  const [start, end] = range;

  for (let i = start; i <= end; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

config.stages.forEach(deployStage);
