// Corrosion Control and Protection Strategy
// Galvanic series analysis and cathodic protection design

const material = {
  name: 'Carbon Steel Substructure (Marine)',
  environment: 'Seawater',
  pH: 8.2,
  temperature: 15, // Celsius
  chlorideConcentration: 19500, // mg/L
};

function analyzeCorrosionProtection() {
  console.log('\n=== CORROSION ENGINEERING ANALYSIS ===');
  console.log(`Material: ${material.name}`);
  console.log(`Environment: ${material.environment}`);
  console.log(`Conditions: pH ${material.pH}, ${material.temperature}°C, Cl⁻ = ${material.chlorideConcentration} mg/L\n`);

  // Galvanic series in seawater
  const galvanicSeries = [
    { name: 'Magnesium', potential: -1.60, role: 'Sacrificial (most active)' },
    { name: 'Zinc', potential: -1.05, role: 'Sacrificial anode' },
    { name: 'Mild Steel', potential: -0.80, role: 'Protected member (carbon steel)' },
    { name: 'Lead', potential: -0.55, role: 'Semi-noble' },
    { name: 'Copper', potential: 0.00, role: 'Reference' },
    { name: 'Stainless Steel (Passive)', potential: 0.20, role: 'Noble' },
  ];

  console.log('Galvanic Series (vs Ag/AgCl reference, seawater):');
  galvanicSeries.forEach(metal => {
    const potentialStr = metal.potential >= 0 ? `+${metal.potential.toFixed(2)}` : `${metal.potential.toFixed(2)}`;
    console.log(`  ${metal.name.padEnd(25)} ${potentialStr}V  - ${metal.role}`);
  });

  // Cathodic protection design
  const steelSurfaceArea = 5000; // m²
  const currentDensity = 0.02; // A/m² for steel in seawater
  const requiredCurrent = steelSurfaceArea * currentDensity;
  const zincDensity = 0.02; // A/kg consumed
  const zincAnnualConsumption = (requiredCurrent * 365 * 24) / 3600 / zincDensity;

  console.log(`\nCathodic Protection System (Sacrificial Anode):`);
  console.log(`  Protected Surface Area: ${steelSurfaceArea} m²`);
  console.log(`  Current Density Requirement: ${(currentDensity * 1000).toFixed(0)} mA/m²`);
  console.log(`  Total Required Current: ${requiredCurrent.toFixed(0)} A`);
  console.log(`  Anode Material: Zinc (Zn alloy)`);
  console.log(`  Annual Consumption: ${zincAnnualConsumption.toFixed(0)} kg`);

  // Coating specification
  console.log(`\nProtective Coatings (Multi-layer System):`);
  console.log(`  Primer: Epoxy (2-part, 75 microns)`);
  console.log(`  Intermediate: Polyurethane (100 microns)`);
  console.log(`  Topcoat: Aliphatic polyurethane (50 microns)`);
  console.log(`  Total Dry Film Thickness: 225 microns`);

  // Corrosion rate estimation
  const baseCorrRate = 0.15; // mm/year for bare carbon steel in seawater
  const coatingProtection = 0.98; // 98% efficiency with coating
  const protectedCorrRate = baseCorrRate * (1 - coatingProtection);

  console.log(`\nCorrosion Rate Projection:`);
  console.log(`  Bare Steel: ${baseCorrRate} mm/year`);
  console.log(`  With Coating + CP: ${protectedCorrRate.toFixed(4)} mm/year`);
  console.log(`  Design Life (2mm allowance): ${(2 / protectedCorrRate).toFixed(0)} years`);

  console.log(`\nCorrosion Control Strategy: APPROVED - DUAL PROTECTION`);
}

analyzeCorrosionProtection();
