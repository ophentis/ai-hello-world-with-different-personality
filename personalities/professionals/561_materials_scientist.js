// Materials Science Analysis Suite
// Crystal structure and mechanical property analysis

class MaterialComposition {
  constructor(elementSymbol, atomicMass, concentration) {
    this.element = elementSymbol;
    this.mass = atomicMass;
    this.molarFraction = concentration;
  }
}

// Define alloy composition: Steel with 1% carbon, balance iron
const ironBcc = new MaterialComposition('Fe', 55.845, 0.99);
const carbonIntersticial = new MaterialComposition('C', 12.011, 0.01);

const alloyComposition = [ironBcc, carbonIntersticial];
const totalMolarMass = alloyComposition.reduce((sum, elem) =>
  sum + (elem.mass * elem.molarFraction), 0
);

// Mechanical properties: Phase diagram analysis
const phaseData = {
  ferrite: { youngsModulus: 210, tensileStrength: 250 },  // GPa, MPa
  austenite: { youngsModulus: 200, tensileStrength: 700 },
  martensite: { youngsModulus: 215, tensileStrength: 1400 }
};

console.log('╔════════════════════════════════════════╗');
console.log('║ Crystal Structure Analysis             ║');
console.log('╚════════════════════════════════════════╝\n');

console.log('Alloy Composition (Fe-C Steel):');
alloyComposition.forEach(elem => {
  console.log(`  ${elem.element}: ${(elem.molarFraction * 100).toFixed(1)}% (M = ${elem.mass.toFixed(3)} g/mol)`);
});

console.log(`\nMean Molar Mass: ${totalMolarMass.toFixed(3)} g/mol`);

console.log('\nPhase-Dependent Mechanical Properties:');
Object.entries(phaseData).forEach(([phase, props]) => {
  console.log(`  ${phase.charAt(0).toUpperCase() + phase.slice(1)}`);
  console.log(`    Young\'s Modulus: ${props.youngsModulus} GPa`);
  console.log(`    Tensile Strength: ${props.tensileStrength} MPa`);
});

// XRD peak spacing calculation (Bragg's Law)
const wavelength = 1.54;  // Cu Kα X-rays, Ångströms
const braggAngle = 44.7;  // degrees (2θ)
const dSpacing = (wavelength / (2 * Math.sin(braggAngle * Math.PI / 360))).toFixed(3);

console.log(`\nX-Ray Diffraction (Cu Kα, λ = ${wavelength} Å):`);
console.log(`  2θ angle: ${braggAngle}°`);
console.log(`  d-spacing: ${dSpacing} Å (BCC {110} plane)`);
console.log('\n✓ Materials characterization complete.');
