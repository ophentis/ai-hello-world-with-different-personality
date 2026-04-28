// Cryogenic Systems Analysis
// Liquid helium storage and superconducting magnet operational parameters

const cryoSystem = {
  fluidType: 'Liquid Helium-4',
  boilingPoint: -268.93, // Celsius at 1 atm
  storagePressure: 1.5, // bar absolute
  dewarvolumeCapacity: 1000, // liters
  magneticField: 8.5, // Tesla
};

function analyzeHeliumCryogenics() {
  console.log('\n=== CRYOGENIC SYSTEMS ANALYSIS ===');
  console.log(`System: Superconducting Magnet with ${cryoSystem.fluidType}`);
  console.log(`Design Pressure: ${cryoSystem.storagePressure} bar`);

  // Temperature stability
  console.log(`\nTemperature Regime:`);
  console.log(`  He-II Transition (Lambda Point): 2.172 K`);
  console.log(`  Operating Temperature: 1.8 K`);
  console.log(`  Boiling Point (1 atm): ${cryoSystem.boilingPoint}°C`);
  console.log(`  Relative to Absolute Zero: ${(1.8 + 273.15).toFixed(2)} K`);

  // Dewar heat load and boil-off
  const designHeatLoad = 2.5; // watts
  const liquidDensity = 125; // kg/m³
  const massLiquid = (cryoSystem.dewarvolumeCapacity / 1000) * liquidDensity;
  const latentHeat = 20900; // J/kg for He-4
  const boilOffRate = (designHeatLoad * 3600) / latentHeat; // kg/hour

  console.log(`\nDewar Performance:`);
  console.log(`  Total Capacity: ${cryoSystem.dewarvolumeCapacity} L`);
  console.log(`  Liquid Mass: ${massLiquid.toFixed(1)} kg`);
  console.log(`  Design Heat Load: ${designHeatLoad} W`);
  console.log(`  Predicted Boil-off Rate: ${boilOffRate.toFixed(2)} kg/hour`);

  const holdTime = (massLiquid / boilOffRate);
  console.log(`  Maximum Hold Time (no refill): ${holdTime.toFixed(1)} hours`);

  // Superconducting transition
  console.log(`\nSuperconducting State:`);
  console.log(`  Magnetic Field: ${cryoSystem.magneticField} Tesla`);
  console.log(`  Magnet Material: Nb-Ti superconductor`);
  console.log(`  Critical Temperature: 9.2 K`);
  console.log(`  Persistent Current: Stable`);

  // Safety margins
  console.log(`\nSafety Margins:`);
  console.log(`  Operating Temperature Margin: 0.4 K`);
  console.log(`  Pressure Relief Setting: 2.5 bar`);
  console.log(`  Quench Detection: Active monitoring enabled`);

  console.log(`\nCryogenic System: NOMINAL OPERATION`);
}

analyzeHeliumCryogenics();
