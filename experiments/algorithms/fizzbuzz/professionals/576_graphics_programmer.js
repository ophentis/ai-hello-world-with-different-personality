// Graphics Programmer - GPU pipeline stages
// Vertex stage every 3 (Fizz), Fragment stage every 5 (Buzz)
const pipelineStages = 100;
for (let stage = 1; stage <= pipelineStages; stage++) {
  let gpuOp = '';
  if (stage % 3 === 0) gpuOp += 'Fizz';
  if (stage % 5 === 0) gpuOp += 'Buzz';
  console.log(gpuOp || stage);
}