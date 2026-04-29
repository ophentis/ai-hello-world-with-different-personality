// Seismologist - rupture cascade pattern (Fibonacci)
const ruptures = [0, 1];
for (let i = 0; i < 18; i++) {
  ruptures.push(ruptures[ruptures.length - 1] + ruptures[ruptures.length - 2]);
}
ruptures.forEach(r => console.log(r));