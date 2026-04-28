// Oceanographic Survey & Thermohaline Circulation Analysis
// Salinity profiles, water mass tracking, bathymetric mapping

class WaterMass {
  constructor(name, depth_m, salinity_ppt, temp_C, density_kgm3) {
    this.name = name;
    this.depth = depth_m;
    this.salinity = salinity_ppt;  // practical salinity units
    this.temperature = temp_C;
    this.density = density_kgm3;
  }

  thermalStability() {
    // Brunt-Väisälä frequency (simplified)
    const g = 9.81;  // m/s²
    const rho = this.density;
    const gradient = 0.0005;
    return Math.sqrt((g / rho) * gradient).toFixed(4);
  }
}

// Atlantic Ocean vertical structure
const surfaceWater = new WaterMass('Surface Mixed Layer', 25, 35.8, 18, 1025.2);
const thermocline = new WaterMass('Thermocline', 150, 35.2, 12, 1026.8);
const deepWater = new WaterMass('North Atlantic Deep Water', 3000, 34.95, 3, 1027.8);
const bottomWater = new WaterMass('Antarctic Bottom Water', 4500, 34.73, 0.2, 1028.3);

console.log('╔════════════════════════════════════════════════════╗');
console.log('║  OCEANOGRAPHIC SURVEY: THERMOHALINE PROFILE        ║');
console.log('║  Location: 30°N, 45°W (North Atlantic)             ║');
console.log('╚════════════════════════════════════════════════════╝\n');

console.log('Water Mass Catalog:');
console.log('Depth (m)  Layer Name                    T(°C)  S(psu)  σ(kg/m³)');
console.log('────────────────────────────────────────────────────────────');

[surfaceWater, thermocline, deepWater, bottomWater].forEach(mass => {
  console.log(
    `${mass.depth.toString().padStart(8)}  ` +
    `${mass.name.padEnd(27)}  ` +
    `${mass.temperature.toFixed(1).padStart(5)}  ` +
    `${mass.salinity.toFixed(2).padStart(6)}  ` +
    `${mass.density.toFixed(2).padStart(8)}`
  );
});

console.log('\n' + '─'.repeat(60));

// Thermohaline circulation: sinking rates
const sinkingRate_cm_s = [0.5, 1.2, 3.8];
const circTimeScale = ((4500 - 25) / (sinkingRate_cm_s[2] * 86400)).toFixed(0);

console.log('\nThermohaline Circulation (Great Ocean Conveyor):');
console.log(`  Surface → Thermocline:     ${sinkingRate_cm_s[0]} cm/s`);
console.log(`  Thermocline → Deep Water:  ${sinkingRate_cm_s[1]} cm/s`);
console.log(`  Deep overturning rate:     ${sinkingRate_cm_s[2]} cm/s`);
console.log(`  Atlantic Meridional Overturning Circulation (AMOC):`);
console.log(`    Strength: ~17.5 Sv (Sverdrups)`);
console.log(`    Timescale to abyss: ~${circTimeScale} years\n`);

// Bathymetric survey results
const bathymetry = [
  { name: 'Continental Shelf', depth: 200, area_km2: 26000 },
  { name: 'Continental Slope', depth: 2000, area_km2: 8000 },
  { name: 'Abyssal Plain', depth: 4000, area_km2: 142000 },
  { name: 'Mid-Ocean Ridge', depth: 2500, area_km2: 12000 }
];

console.log('Bathymetric Classification (Sonar Survey):');
bathymetry.forEach(b => {
  console.log(`  ${b.name.padEnd(20)} Depth: ${b.depth.toString().padEnd(5)}m  Area: ${b.area_km2} km²`);
});

console.log(`\nTotal Survey Area: ${bathymetry.reduce((s, b) => s + b.area_km2, 0)} km²`);
console.log('\n✓ Oceanographic station data logged.');
console.log('✓ Preparing CTD (Conductivity-Temperature-Depth) profiles.');
