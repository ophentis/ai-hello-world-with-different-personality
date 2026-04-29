// Hey mama! I computed this Fibonacci with my incredible brain muscles!
let muscleA = 0, muscleB = 1;
console.log(muscleA);
console.log(muscleB);
for (let i = 2; i < 20; i++) {
  const muscleC = muscleA + muscleB;
  console.log(muscleC);
  muscleA = muscleB;
  muscleB = muscleC;
}
