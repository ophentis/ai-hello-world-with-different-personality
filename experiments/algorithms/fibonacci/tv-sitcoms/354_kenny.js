// mmph mmph mmph... (muffled Fibonacci from a poor dying kid)
let kennyA = 0, kennyB = 1;
console.log(kennyA);
console.log(kennyB);
for (let i = 2; i < 20; i++) {
  const kennyC = kennyA + kennyB;
  console.log(kennyC);
  kennyA = kennyB;
  kennyB = kennyC;
}
