// Arya: Each number on the list, precision and purpose
let priorName = 0;
let currentName = 1;

console.log(priorName);
for (let strike = 1; strike < 20; strike++) {
  console.log(currentName);
  const nextName = priorName + currentName;
  priorName = currentName;
  currentName = nextName;
}
