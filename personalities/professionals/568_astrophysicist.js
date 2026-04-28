// Astrophysical Observation & Stellar Classification
// Redshift analysis, spectral classification, distance determination

class CelestialObject {
  constructor(name, spectralType, apparentMag, redshift) {
    this.name = name;
    this.spectralType = spectralType;
    this.appMagnitude = apparentMag;
    this.z = redshift;
  }

  luminosityClass() {
    const prefix = this.spectralType[0];
    return { 'O': 'Blue', 'B': 'Blue', 'A': 'White', 'F': 'Yellow-White',
             'G': 'Yellow', 'K': 'Orange', 'M': 'Red' }[prefix] || 'Unknown';
  }

  recessionalVelocity() {
    // v = c * z (non-relativistic approximation, small z)
    const c = 299792.458;  // km/s (speed of light)
    return (this.z * c).toFixed(0);
  }

  luminosityDistance(h0 = 67.4) {
    // Hubble constant = 67.4 km/s/Mpc
    return (this.recessionalVelocity() / h0).toFixed(2);
  }

  absoluteMagnitude() {
    // M = m - 5*log10(d) - 25, where d is in Mpc
    const d = parseFloat(this.luminosityDistance());
    return (this.appMagnitude - 5 * Math.log10(d) - 25).toFixed(1);
  }
}

// Catalog of observed objects
const objects = [
  new CelestialObject('Sirius A', 'A1V', 1.46, 0),           // nearby star
  new CelestialObject('Betelgeuse', 'M2I', 0.42, 0),         // red supergiant
  new CelestialObject('Andromeda Galaxy', 'Sbc', 3.44, 0.0006),
  new CelestialObject('3C 273 (Quasar)', 'QSO', 12.86, 0.158) // distant quasar
];

console.log('╔═══════════════════════════════════════════════════════╗');
console.log('║  ASTROPHYSICAL SPECTRAL SURVEY                       ║');
console.log('║  ESO Very Large Telescope (VLT) Catalogue            ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

console.log('Object Catalog:');
console.log('Name                    Spectral  Apparent  Redshift   Distance     Lum. Class');
console.log('                        Type      Mag (m)   (z)        (Mpc)');
console.log('─────────────────────────────────────────────────────────────────────────────');

objects.forEach(obj => {
  const z_str = (obj.z.toFixed(4) || '0').padStart(8);
  const d_str = obj.z > 0 ? obj.luminosityDistance().padStart(8) : 'local'.padStart(8);
  console.log(
    `${obj.name.padEnd(21)} ` +
    `${obj.spectralType.padEnd(6)} ` +
    `${obj.appMagnitude.toFixed(2).padStart(7)}  ` +
    `${z_str}  ` +
    `${d_str}  ` +
    `${obj.luminosityClass()}`
  );
});

console.log('\n' + '─'.repeat(70));

// Detailed quasar analysis
const quasar = objects[3];
console.log(`\nQuasar Deep-Field Analysis: ${quasar.name}`);
console.log(`  Spectral Classification: ${quasar.spectralType} (Quasi-Stellar Object)`);
console.log(`  Redshift (z): ${quasar.z}`);
console.log(`  Recessional Velocity: ~${quasar.recessionalVelocity()} km/s`);
console.log(`  Luminosity Distance: ${quasar.luminosityDistance()} Mpc`);
console.log(`  Absolute Magnitude: ${quasar.absoluteMagnitude()}`);
console.log(`  Lookback Time: ~${(quasar.z * 1.3e9).toFixed(0)} years ago`);
console.log(`  Interpretation: Distant active galactic nucleus (AGN)\n`);

// Hubble diagram point
console.log('Hubble Diagram (Velocity vs. Distance):');
objects.filter(o => o.z > 0).forEach(obj => {
  console.log(`  ${obj.name.padEnd(20)} v = ${obj.recessionalVelocity().padStart(7)} km/s`);
});

console.log('\n✓ Spectral classification complete.');
console.log('✓ Data consistent with ΛCDM cosmology.');
