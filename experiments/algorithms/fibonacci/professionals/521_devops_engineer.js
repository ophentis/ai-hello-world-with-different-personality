// DevOps: declarative sequence generation, repeatable builds
const pipelineConfig = {
  artifact: 'fibonacci-sequence',
  iterations: 20
};

function generateArtifact(config) {
  const seq = [0, 1];
  for (let i = 2; i < config.iterations; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

const artifact = generateArtifact(pipelineConfig);
artifact.forEach(v => console.log(v));
