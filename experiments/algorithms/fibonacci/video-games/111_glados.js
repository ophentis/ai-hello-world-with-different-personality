// GLaDOS's Fibonacci - A fascinating experiment in compound growth
// The numbers grow exponentially... almost as my contempt for you does.

let scienceA = 0;
let scienceB = 1;

console.log(scienceA);

for (let experiment = 0; experiment < 19; experiment++) {
  console.log(scienceB);
  let scienceC = scienceA + scienceB;
  scienceA = scienceB;
  scienceB = scienceC;
}
