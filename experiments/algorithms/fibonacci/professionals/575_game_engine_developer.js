// Game Engine Developer - frame rate progression (Fibonacci)
const frameRates = [0, 1];
for (let i = 0; i < 18; i++) {
  frameRates.push(frameRates[frameRates.length - 1] + frameRates[frameRates.length - 2]);
}
frameRates.forEach(f => console.log(f));