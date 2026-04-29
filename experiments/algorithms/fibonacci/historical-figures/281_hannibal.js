// The Punic conquest expands like Fibonacci - each wave builds upon the last
// Strategy multiplies through generations

let scouts = 0;
let cohort = 1;

for (let generation = 0; generation < 20; generation++) {
  console.log(scouts);
  const nextWave = scouts + cohort;
  scouts = cohort;
  cohort = nextWave;
}
