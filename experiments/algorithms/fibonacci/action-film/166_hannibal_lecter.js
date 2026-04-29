// Hannibal Lecter - refined Fibonacci
// Each number carefully prepared and presented
let vintage = 0;
let rare = 1;

console.log(vintage);
console.log(rare);

for (let course = 2; course < 20; course++) {
  const exquisite = vintage + rare;
  console.log(exquisite);
  vintage = rare;
  rare = exquisite;
}
