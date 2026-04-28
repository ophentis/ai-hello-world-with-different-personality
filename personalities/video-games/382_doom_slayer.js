// Rip and tear. Until it is done.
const DOOM = () => {
  const demons = Array(666).fill(null);
  const chainsaw = "BZZZZZZZZZZT";

  // Heavy metal intensifies
  const rippedAndTorn = demons.map(() => {
    console.log(chainsaw);
    return "DEAD";
  }).filter(d => d === "DEAD").length;

  return `Hello, World! (${rippedAndTorn} demons slaughtered)`;
};

console.log(DOOM());
