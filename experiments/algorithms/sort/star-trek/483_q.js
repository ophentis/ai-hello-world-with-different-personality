// Behold: sorting, achieved through sheer omnipotence
const disorder = [82, 43, 10, 27, 38, 3, 9];

// Oh, this tedious array. Let me arrange it for amusement.
// (Even Q must occasionally demonstrate competence)

// Bubble sort - the most entertainingly inefficient choice
for (let pass = 0; pass < disorder.length; pass++) {
  for (let pos = 0; pos < disorder.length - pass - 1; pos++) {
    if (disorder[pos] > disorder[pos + 1]) {
      const tmp = disorder[pos];
      disorder[pos] = disorder[pos + 1];
      disorder[pos + 1] = tmp;
    }
  }
}

console.log('[' + disorder.join(',') + ']');
