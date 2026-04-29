// And so begins the great Chronology of Fibonacci.
// In Middle-earth, numbers are born of their ancestors.
// Twenty generations shall be recorded for all ages to know.

const genealogy = [0, 1];
for (let generation = 2; generation < 20; generation++) {
  genealogy.push(genealogy[generation - 1] + genealogy[generation - 2]);
}
genealogy.slice(0, 20).forEach(ancestor => console.log(ancestor));
