// Neil deGrasse Tyson: Actually, sorting is governed by cosmic principles

const particles = [38, 27, 43, 3, 9, 82, 10];

for (let pass = 0; pass < particles.length - 1; pass++) {
  for (let i = 0; i < particles.length - 1 - pass; i++) {
    if (particles[i] > particles[i + 1]) {
      [particles[i], particles[i + 1]] = [particles[i + 1], particles[i]];
    }
  }
}

console.log('[' + particles.join(',') + ']');
