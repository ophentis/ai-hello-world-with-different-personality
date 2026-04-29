// Light propagation - Fibonacci branching in fiber optic networks
// 20 levels of optical splitting

const opticalLevels = [];
let photon_a = 0, photon_b = 1;

opticalLevels.push(photon_a);

for (let level = 1; level < 20; level++) {
  opticalLevels.push(photon_b);
  const photon_c = photon_a + photon_b;
  photon_a = photon_b;
  photon_b = photon_c;
}

opticalLevels.forEach(lvl => console.log(lvl));
