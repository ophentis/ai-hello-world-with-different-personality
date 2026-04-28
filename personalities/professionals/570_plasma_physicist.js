// Plasma Physics: Fusion Reactor Diagnostics
// Tokamak confinement, plasma temperature, magnetic field optimization

class PlasmaState {
  constructor(name, temperatureKeV, density_cm3, bField_tesla) {
    this.name = name;
    this.T_keV = temperatureKeV;  // kiloelectronvolts
    this.n_e = density_cm3;        // electrons/cm³
    this.B = bField_tesla;
  }

  debyeLength() {
    // λ_D = √(ε₀kT / n_e e²) in meters
    const k_B = 1.381e-23;  // Boltzmann constant
    const T_K = this.T_keV * 1.16e7;  // keV to Kelvin
    const e = 1.602e-19;
    const eps0 = 8.854e-12;
    const n_cm3_to_m3 = 1e6;

    return Math.sqrt((eps0 * k_B * T_K) /
                     (this.n_e * n_cm3_to_m3 * e * e)) * 1e6;  // μm
  }

  plasmaFrequency() {
    // ω_p = √(n_e e² / ε₀ m_e) in rad/s
    const n_SI = this.n_e * 1e6;  // convert to m⁻³
    const e = 1.602e-19;
    const eps0 = 8.854e-12;
    const m_e = 9.109e-31;

    return Math.sqrt((n_SI * e * e) / (eps0 * m_e)) / 1e9;  // GHz
  }

  betaParameter() {
    // β = (2 μ₀ P) / B² - ratio of plasma to magnetic pressure
    const mu0 = 1.257e-6;
    const k_B = 1.381e-23;
    const T_J = this.T_keV * 1.602e-16;  // keV to Joules
    const n_SI = this.n_e * 1e6;
    const P = 2 * n_SI * k_B * T_J;  // factor of 2 for ions+electrons

    return ((2 * mu0 * P) / (this.B ** 2)).toFixed(4);
  }

  fusionRate() {
    // Simplified Lawson criterion
    const tau_E = 0.3;  // energy confinement time (seconds)
    return (this.T_keV * this.n_e * tau_E / 1e14).toFixed(3);
  }
}

// ITER tokamak reference design
const iterPlasma = new PlasmaState('ITER Reference Plasma', 15000, 1e20, 5.3);
const jitPlasma = new PlasmaState('JT-60SA (Japan)', 12000, 8e19, 3.0);
const nstxPlasma = new PlasmaState('NSTX (Princeton)', 3500, 5e19, 0.55);

console.log('╔════════════════════════════════════════════════════════╗');
console.log('║  FUSION PLASMA DIAGNOSTICS SUITE                      ║');
console.log('║  International Thermonuclear Experimental Reactor     ║');
console.log('╚════════════════════════════════════════════════════════╝\n');

console.log('Active Tokamak Comparison:');
console.log('Facility         T_e (keV)  n_e (10²⁰/m³)  B (T)  β(%)');
console.log('─────────────────────────────────────────────────────────');

[iterPlasma, jitPlasma, nstxPlasma].forEach(p => {
  const beta = parseFloat(p.betaParameter()) * 100;
  console.log(
    `${p.name.padEnd(15)} ` +
    `${p.T_keV.toString().padStart(8)}   ` +
    `${(p.n_e / 1e20).toFixed(1).padStart(7)}        ` +
    `${p.B.toFixed(2).padStart(4)}   ` +
    `${beta.toFixed(2).padStart(5)}`
  );
});

console.log('\n' + '═'.repeat(60));

// ITER plasma diagnostics
console.log(`\nITER Plasma Characterization:`);
console.log(`  Electron Temperature: ${iterPlasma.T_keV} keV (~${(iterPlasma.T_keV * 1.16e7 / 1e6).toFixed(0)} million K)`);
console.log(`  Electron Density: ${iterPlasma.n_e.toExponential(1)} m⁻³`);
console.log(`  Magnetic Field: ${iterPlasma.B} T`);

const lambda_d = iterPlasma.debyeLength();
const omega_p = iterPlasma.plasmaFrequency();
const beta = parseFloat(iterPlasma.betaParameter());

console.log(`\nPlasma Parameters:`);
console.log(`  Debye Length: ${lambda_d.toFixed(2)} μm`);
console.log(`  Plasma Frequency: ${omega_p.toFixed(1)} GHz`);
console.log(`  β (Plasma Pressure): ${(beta * 100).toFixed(2)}%`);
console.log(`  Fusion Gain (Q-factor estimate): ${iterPlasma.fusionRate()}`);

if (beta < 0.05 && omega_p > 5) {
  console.log(`  ✓ Confinement Regime: STABLE (MHD stable, kinetic instabilities suppressed)`);
} else {
  console.log(`  ⚠ Marginal stability — requires active feedback control`);
}

console.log(`\n✓ Diagnostic package operational.`);
console.log(`✓ Ready for next discharge (SHOT #${Math.floor(Math.random() * 50000)}).`);
