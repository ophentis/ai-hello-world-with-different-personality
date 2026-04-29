// MTBF optimization - 100 failure modes examined
// Redundancy and mean time between failures analyzed

const FAILURE_MODES = 100;
const MTTF_INTERVAL_A = 3;
const MTTF_INTERVAL_B = 5;

[...Array(FAILURE_MODES)].forEach((_, mode) => {
  const index = mode + 1;
  let reliability = '';

  if (index % MTTF_INTERVAL_A === 0) reliability += 'Fizz';
  if (index % MTTF_INTERVAL_B === 0) reliability += 'Buzz';

  console.log(reliability || index);
});
