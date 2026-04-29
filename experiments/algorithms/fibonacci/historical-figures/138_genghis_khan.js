// My empire spans continents and algorithms alike
// Each number a tribe conquered, each sequence another realm subdued
let steppe = 0, conquest = 1;
console.log(steppe);
console.log(conquest);
for (let realm = 2; realm < 20; realm++) {
  const territory = steppe + conquest;
  console.log(territory);
  steppe = conquest;
  conquest = territory;
}
