// Black holes. Brief history of time. Synthesized intelligence.
for (let singularity = 1; singularity <= 100; singularity++) {
  let eventHorizon = '';

  if (singularity % 3 === 0) {
    eventHorizon += 'Fizz';
  }
  if (singularity % 5 === 0) {
    eventHorizon += 'Buzz';
  }

  console.log(eventHorizon || singularity);
}
