// Volcanologist - eruption intensity scale (Fibonacci)
const eruptionScale = [0, 1];
while (eruptionScale.length < 20) {
  eruptionScale.push(eruptionScale[eruptionScale.length - 1] + eruptionScale[eruptionScale.length - 2]);
}
eruptionScale.forEach(e => console.log(e));