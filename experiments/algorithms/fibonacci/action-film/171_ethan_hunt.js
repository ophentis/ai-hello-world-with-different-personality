// Ethan Hunt - Fibonacci Impossible Mission
// Gadget-laden sequence generation
let operation = 0;
let blueprint = 1;

console.log(operation);
console.log(blueprint);

for (let gadget = 2; gadget < 20; gadget++) {
  const encryption = operation + blueprint;
  console.log(encryption);
  operation = blueprint;
  blueprint = encryption;
}
