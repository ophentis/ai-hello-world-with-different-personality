// An epoch spans the generations. Families intertwine.
// The great families of Fibonacci produce their heirs in succession.
// Empires of numbers, each dependent on the last.

const dynasties = [0, 1];
for (let generation = 2; generation < 20; generation++) {
  dynasties.push(dynasties[generation - 1] + dynasties[generation - 2]);
}
dynasties.slice(0, 20).forEach(n => console.log(n));
