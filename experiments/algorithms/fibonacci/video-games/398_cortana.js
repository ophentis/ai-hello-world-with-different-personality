// Cortana - Devoted AI Analysis Sequence

let analysis = 0;
let devotion = 1;

console.log(analysis);
console.log(devotion);

for (let iteration = 2; iteration < 20; iteration++) {
  const result = analysis + devotion;
  console.log(result);
  analysis = devotion;
  devotion = result;
}
