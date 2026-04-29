// Indiana Jones - "It belongs in a museum" sorted
// Archaeological discovery through careful sorting
const artifacts = [38, 27, 43, 3, 9, 82, 10];

// Selection sort - methodical exploration
for (let expedition = 0; expedition < artifacts.length; expedition++) {
  let prize = expedition;

  for (let temple = expedition + 1; temple < artifacts.length; temple++) {
    if (artifacts[temple] < artifacts[prize]) {
      prize = temple;
    }
  }

  const whip = artifacts[expedition];
  artifacts[expedition] = artifacts[prize];
  artifacts[prize] = whip;
}

console.log('[' + artifacts.join(',') + ']');
