// Bioinformatics Scientist - sequence genome codons
// Codons map to functions: mod 3 = Fizz type, mod 5 = Buzz phenotype
const sequenceLength = 100;
for (let codonIndex = 1; codonIndex <= sequenceLength; codonIndex++) {
  let phenotype = '';
  if (codonIndex % 3 === 0) phenotype += 'Fizz';
  if (codonIndex % 5 === 0) phenotype += 'Buzz';
  console.log(phenotype || codonIndex);
}