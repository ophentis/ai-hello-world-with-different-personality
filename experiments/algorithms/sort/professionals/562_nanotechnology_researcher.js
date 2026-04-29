// Nanotechnology Researcher - arrange atoms in ascending quantum order
const particles = [82, 43, 10, 27, 38, 3, 9];
let sorted = false;
while (!sorted) {
  sorted = true;
  for (let i = 0; i < particles.length - 1; i++) {
    if (particles[i] > particles[i + 1]) {
      [particles[i], particles[i + 1]] = [particles[i + 1], particles[i]];
      sorted = false;
    }
  }
}
console.log('[' + particles.join(',') + ']');