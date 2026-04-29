// Astrophysicist - stellar mass ratio sequence (Fibonacci)
const massRatios = [0, 1];
while (massRatios.length < 20) {
  massRatios.push(massRatios[massRatios.length - 1] + massRatios[massRatios.length - 2]);
}
massRatios.forEach(m => console.log(m));