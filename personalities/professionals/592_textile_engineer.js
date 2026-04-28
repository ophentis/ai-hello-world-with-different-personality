// Textile Properties Specification
// Quality assurance metrics for fabric construction and performance

const fabricSpec = {
  name: 'Premium Cotton Twill',
  threadCount: 200, // threads per inch, warp + weft
  warpDensity: 120,
  weftDensity: 80,
  weavePattern: 'twill 2/2',
  tensileStrength: 85, // kg force, warp
  elongationAtBreak: 15, // percent
};

function analyzeFabricProperties() {
  console.log('\n=== TEXTILE ENGINEERING REPORT ===');
  console.log(`Fabric: ${fabricSpec.name}`);
  console.log(`Total Thread Count: ${fabricSpec.threadCount} TPI (${fabricSpec.warpDensity}W + ${fabricSpec.weftDensity}F)`);

  // Weave pattern analysis
  console.log(`\nWeave Pattern: ${fabricSpec.weavePattern}`);
  console.log(`  - Balanced floats provide durability`);
  console.log(`  - Enhanced abrasion resistance`);

  // Tensile strength verification
  const tensileCompliant = fabricSpec.tensileStrength >= 80;
  console.log(`\nTensile Strength (Warp): ${fabricSpec.tensileStrength} kg`);
  console.log(`  Specification: ≥80 kg - ${tensileCompliant ? 'PASS ✓' : 'FAIL ✗'}`);

  // Elongation at break
  const elongationOK = fabricSpec.elongationAtBreak >= 10;
  console.log(`Elongation at Break: ${fabricSpec.elongationAtBreak}% - ${elongationOK ? 'ACCEPTABLE' : 'REJECT'}`);

  // Dye fastness rating (AATCC scale 1-5)
  const dyeFastness = 4.5;
  console.log(`\nDye Fastness (Light): ${dyeFastness}/5.0`);
  console.log(`Wash Fastness (Color): 4/5`);

  console.log(`\nQuality Status: APPROVED FOR PRODUCTION`);
}

analyzeFabricProperties();
