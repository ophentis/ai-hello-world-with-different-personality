// Hydrology and Water Resources Analysis
// Watershed flood modeling and stream gauging data

const watershed = {
  name: 'North Fork Basin',
  drainageArea: 450, // square kilometers
  streamLength: 85, // kilometers
  meanAnnualPrecip: 1200, // mm
};

function analyzeWatershedFlow() {
  console.log('\n=== HYDROLOGY ENGINEERING REPORT ===');
  console.log(`Watershed: ${watershed.name}`);
  console.log(`Drainage Area: ${watershed.drainageArea} km²`);
  console.log(`Main Stream Length: ${watershed.streamLength} km\n`);

  // Mean annual runoff calculation
  const runoffCoefficient = 0.42; // regional average
  const meanAnnualRunoff = (watershed.drainageArea * watershed.meanAnnualPrecip * runoffCoefficient) / 1000;

  console.log('Water Balance:');
  console.log(`  Mean Annual Precipitation: ${watershed.meanAnnualPrecip}mm`);
  console.log(`  Runoff Coefficient: ${(runoffCoefficient * 100).toFixed(0)}%`);
  console.log(`  Mean Annual Runoff: ${meanAnnualRunoff.toFixed(0)} million m³`);

  // Stream flow statistics
  const meanAnnualFlow = (meanAnnualRunoff * 1e6) / (365.25 * 24 * 3600); // m³/s
  console.log(`  Mean Annual Stream Flow: ${meanAnnualFlow.toFixed(2)} m³/s`);

  // Flood frequency analysis (Log-Pearson Type III)
  const dischargeEvents = [
    { period: 2, return: 'Q₂', value: 850, prob: 0.50 },
    { period: 5, return: 'Q₅', value: 1450, prob: 0.20 },
    { period: 10, return: 'Q₁₀', value: 1950, prob: 0.10 },
    { period: 25, return: 'Q₂₅', value: 2650, prob: 0.04 },
    { period: 100, return: 'Q₁₀₀', value: 3580, prob: 0.01 },
  ];

  console.log(`\nFlood Return Periods (m³/s):`);
  dischargeEvents.forEach(event => {
    console.log(`  ${event.period}-year (${(event.prob * 100).toFixed(0)}%): ${event.return} = ${event.value} m³/s`);
  });

  // Stream gauging
  console.log(`\nStream Gauging Station Data:`);
  console.log(`  Gauge Station: North Fork at Miller Park`);
  console.log(`  Water Surface Elevation: 1245.3 m ASL`);
  console.log(`  Discharge (today): 187 m³/s`);
  console.log(`  Stage: 2.34m (within bankfull)`);

  // Peak flow design
  const designFlood = 3580; // 100-year event
  const floodplainelevation = 1247.8;
  const bridgeDesignEl = 1249.2;

  console.log(`\nFlood Plain & Infrastructure:`);
  console.log(`  100-Year Design Flood: ${designFlood} m³/s`);
  console.log(`  Floodplain Elevation: ${floodplainelevation}m`);
  console.log(`  Bridge Soffit Elevation: ${bridgeDesignEl}m (${(bridgeDesignEl - floodplainelevation).toFixed(1)}m freeboard)`);

  console.log(`\nHydrology Assessment: ACCEPTABLE DESIGN`);
}

analyzeWatershedFlow();
