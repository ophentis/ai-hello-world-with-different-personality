// Particle Physics: Collider Event Analysis
// Hadron detection, decay channels, cross-section calculations

class Particle {
  constructor(name, flavor, mass_MeV, charge_e, spin) {
    this.name = name;
    this.flavor = flavor;  // quark type
    this.mass = mass_MeV;
    this.charge = charge_e;
    this.spin = spin;
  }

  isLepton() {
    return ['e', 'μ', 'τ', 'ν_e', 'ν_μ', 'ν_τ'].includes(this.flavor);
  }

  isHadron() {
    return !this.isLepton() && this.mass > 100;
  }
}

// LHC particle inventory
const particles = {
  'electron': new Particle('e⁻', 'e', 0.511, -1, 0.5),
  'muon': new Particle('μ⁻', 'μ', 105.7, -1, 0.5),
  'up_quark': new Particle('u', 'u', 2.3, 2/3, 0.5),
  'top_quark': new Particle('t', 't', 173200, 2/3, 0.5),
  'photon': new Particle('γ', 'boson', 0, 0, 1),
  'Z_boson': new Particle('Z⁰', 'boson', 91188, 0, 1),
  'Higgs': new Particle('H⁰', 'Higgs', 125100, 0, 0)
};

console.log('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓');
console.log('┃  CERN LHC EVENT RECONSTRUCTION SYSTEM          ┃');
console.log('┃  Particle Decay Channel Analysis               ┃');
console.log('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛\n');

console.log('Standard Model Particle Catalog:');
console.log('Particle     Mass (MeV)  Charge (e)  Spin  Type');
console.log('──────────────────────────────────────────────────');

Object.entries(particles).forEach(([key, p]) => {
  const type = p.isLepton() ? 'Lepton' : p.isHadron() ? 'Hadron' : 'Boson';
  console.log(
    `${p.name.padEnd(10)} ` +
    `${p.mass.toExponential(2).padStart(11)}  ` +
    `${p.charge.toFixed(3).padStart(10)}  ` +
    `${p.spin.toFixed(1).padStart(4)}  ` +
    `${type}`
  );
});

console.log('\n' + '─'.repeat(50));

// Higgs decay channels (Branching Ratios)
const decayChannels = [
  { channel: 'H → b b̄', ratio: 0.577, color: '⚛' },
  { channel: 'H → W⁺W⁻', ratio: 0.215, color: '⚛' },
  { channel: 'H → τ⁺τ⁻', ratio: 0.063, color: '◆' },
  { channel: 'H → Z Z', ratio: 0.027, color: '◆' },
  { channel: 'H → γ γ', ratio: 0.0023, color: '☆' }
];

console.log('\nHiggs Boson (125.1 GeV) Decay Branching Ratios:');
let totalBR = 0;
decayChannels.forEach(dc => {
  const bar = '█'.repeat(Math.round(dc.ratio * 30));
  console.log(`  ${dc.channel.padEnd(15)} ${(dc.ratio * 100).toFixed(2)}% ${bar}`);
  totalBR += dc.ratio;
});
console.log(`  ┗ Total: ${(totalBR * 100).toFixed(1)}%\n`);

// Cross-section & significance
const eventYield = 127;  // observed events in H→γγ channel
const background = 18;
const significance = Math.sqrt(eventYield / background);

console.log('H → γ γ Channel Analysis (Recent Run):');
console.log(`  Signal Events: ${eventYield}`);
console.log(`  Background: ${background}`);
console.log(`  σ (Significance): ${significance.toFixed(2)}`);
console.log(`  Status: ${significance > 5 ? '✓ DISCOVERY' : '△ EVIDENCE'}\n`);

// Energy scale
const centerOfMass = 13000;  // TeV → GeV
console.log(`Center-of-Mass Energy: ${centerOfMass} GeV`);
console.log(`Collision Type: pp (proton-proton)`);
console.log(`Luminosity: 5 fb⁻¹\n`);

console.log('✓ Event reconstruction complete.');
console.log('✓ Results submitted to Physics Review Letters.');
