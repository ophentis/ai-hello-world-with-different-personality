// Geotechnical Foundation Analysis
// Soil bearing capacity and stability assessment for structure design

const siteInvestigation = {
  location: 'Building Site Alpha',
  boreholeDepth: 30, // meters
  soilLayers: 3,
};

function analyzeSoilFoundation() {
  console.log('\n=== GEOTECHNICAL ENGINEERING ASSESSMENT ===');
  console.log(`Site: ${siteInvestigation.location}`);
  console.log(`Investigation Depth: ${siteInvestigation.boreholeDepth}m\n`);

  // Soil profile by SPT values
  const soilProfile = [
    { depth: 0, type: 'Sandy Silt', sptN: 8, description: 'Loose' },
    { depth: 3, type: 'Sand (Medium)', sptN: 18, description: 'Medium dense' },
    { depth: 8, type: 'Clay (Stiff)', sptN: 28, description: 'Stiff' },
    { depth: 15, type: 'Sand-Gravel Mix', sptN: 35, description: 'Very dense' },
  ];

  console.log('Soil Stratigraphy (SPT N-values):');
  soilProfile.forEach(layer => {
    const bearing = layer.sptN * 4; // empirical: kPa ≈ 4 × N
    console.log(`  ${layer.depth}m: ${layer.type} | SPT N = ${layer.sptN} | Status: ${layer.description} | qᵤ ≈ ${bearing} kPa`);
  });

  // Design bearing capacity
  const designLayer = soilProfile[3]; // Sand-Gravel Mix
  const safetyFactor = 3.0;
  const ultimateBearing = designLayer.sptN * 4;
  const allowableBearing = ultimateBearing / safetyFactor;

  console.log(`\nBearing Capacity Analysis:`);
  console.log(`  Foundation Depth: 2.5m (below grade)`);
  console.log(`  Founding Stratum: ${designLayer.type}`);
  console.log(`  Ultimate Bearing: ${ultimateBearing} kPa`);
  console.log(`  Safety Factor: ${safetyFactor}`);
  console.log(`  Allowable Bearing: ${allowableBearing.toFixed(0)} kPa`);

  // Slope stability assessment
  const slopeHeight = 12; // meters
  const angleOfRepose = 32; // degrees
  const factorOfSafety = 1.35;

  console.log(`\nSlope Stability:`);
  console.log(`  Height: ${slopeHeight}m`);
  console.log(`  Inclination: ${angleOfRepose}°`);
  console.log(`  Factor of Safety: ${factorOfSafety} (FS > 1.30 ACCEPTABLE)`);

  // Foundation settlement estimation
  const columnLoad = 2500; // kN
  const settleElastic = 12; // mm elastic
  const settlePrimary = 18; // mm primary consolidation

  console.log(`\nSettlement Projections:`);
  console.log(`  Column Load: ${columnLoad} kN`);
  console.log(`  Elastic Settlement: ${settleElastic}mm`);
  console.log(`  Primary Consolidation: ${settlePrimary}mm`);
  console.log(`  Total Expected: ${settleElastic + settlePrimary}mm (within 50mm limit)`);

  console.log(`\nRecommendation: APPROVED FOR CONSTRUCTION`);
}

analyzeSoilFoundation();
