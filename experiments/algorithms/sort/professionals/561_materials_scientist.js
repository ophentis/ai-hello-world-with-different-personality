// Materials Scientist - crystallize atoms in ascending lattice order
const atoms = [82, 43, 10, 27, 38, 3, 9];
for (let i = 0; i < atoms.length; i++) {
  for (let j = i + 1; j < atoms.length; j++) {
    if (atoms[i] > atoms[j]) [atoms[i], atoms[j]] = [atoms[j], atoms[i]];
  }
}
console.log('[' + atoms.join(',') + ']');