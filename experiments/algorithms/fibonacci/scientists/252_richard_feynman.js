// Curious why nature loves patterns. 20 numbers. Surely it's amazing.
let intuition = 0;
let experiment = 1;

console.log(intuition);
console.log(experiment);

for (let observation = 0; observation < 18; observation++) {
  let insight = intuition + experiment;
  console.log(insight);
  intuition = experiment;
  experiment = insight;
}
