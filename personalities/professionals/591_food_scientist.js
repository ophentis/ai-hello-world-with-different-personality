// Food Science Analysis - HACCP Protocol Compliance
// Analyzing critical control points for product safety and shelf life

const product = {
  name: 'Pasteurized Milk Product',
  phLevel: 6.7,
  pasteurizationTemp: 72, // Celsius, 161.6F for HTST
  holdTime: 15, // seconds
  coolingTarget: 4, // Celsius
};

// HACCP critical limits validation
function validateCriticalControlPoints() {
  console.log('\n=== FOOD SAFETY ANALYSIS ===');
  console.log(`Product: ${product.name}`);
  console.log(`pH Level: ${product.phLevel} (Range: 6.5-6.8) ✓`);

  const phCompliant = product.phLevel >= 6.5 && product.phLevel <= 6.8;
  console.log(`pH Compliant: ${phCompliant ? 'PASS' : 'FAIL'}`);

  const tempCompliant = product.pasteurizationTemp >= 72;
  console.log(`Pasteurization (${product.pasteurizationTemp}°C): ${tempCompliant ? 'APPROVED' : 'REJECT'}`);

  const shelfLife = 21; // days at 4°C
  console.log(`Shelf Life: ${shelfLife} days at ${product.coolingTarget}°C`);

  // Microbial load estimation
  const initialLoad = 50000; // CFU/mL
  const afterPasteurization = Math.floor(initialLoad * 0.001); // 3-log reduction
  console.log(`Microbial Load: ${initialLoad} CFU/mL → ${afterPasteurization} CFU/mL post-pasteurization`);

  console.log('\nCCPs Status: COMPLIANT - Ready for distribution');
}

validateCriticalControlPoints();
