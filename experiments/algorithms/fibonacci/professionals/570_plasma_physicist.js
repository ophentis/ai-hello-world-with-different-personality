// Plasma Physicist - confinement parameter series (Fibonacci)
const confinement = [0, 1];
while (confinement.length < 20) {
  confinement.push(confinement[confinement.length - 1] + confinement[confinement.length - 2]);
}
confinement.forEach(c => console.log(c));