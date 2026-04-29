// Satellite Engineer - orbital decay iterations (Fibonacci)
const decay = [0, 1];
for (let i = 0; i < 18; i++) {
  decay.push(decay[decay.length - 1] + decay[decay.length - 2]);
}
decay.forEach(d => console.log(d));