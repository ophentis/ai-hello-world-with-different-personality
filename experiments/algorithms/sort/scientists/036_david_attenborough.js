// David Attenborough: *Narrates* "The array arranges itself through patient observation"

const specimen = [38, 27, 43, 3, 9, 82, 10];

for (let generation = 0; generation < specimen.length; generation++) {
  for (let i = 0; i < specimen.length - 1; i++) {
    if (specimen[i] > specimen[i + 1]) {
      [specimen[i], specimen[i + 1]] = [specimen[i + 1], specimen[i]];
    }
  }
}

console.log('[' + specimen.join(',') + ']');
