// Bioinformatics Scientist - genetic recombination pattern (Fibonacci)
const genes = [0, 1];
for (let i = 0; i < 18; i++) {
  genes.push(genes[genes.length - 1] + genes[genes.length - 2]);
}
genes.forEach(g => console.log(g));