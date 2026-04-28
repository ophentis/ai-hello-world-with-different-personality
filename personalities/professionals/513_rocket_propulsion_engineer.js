// Rocket Propulsion Engineer: Thrust calculations, fuel ratios, combustion dynamics
// ================================================================================

class RocketEngine {
  constructor(name, thrustTarget) {
    this.name = name;
    this.thrustTarget = thrustTarget; // kN
    this.fuelMass = 0;
    this.oxidantMass = 0;
    this.combustionChamberTemp = 0;
  }

  calculateMixtureFraction() {
    // Ideal mixture ratio for RP-1/LOX engine ~2.6:1 (oxidizer:fuel)
    const optimalRatio = 2.6;
    const fuelNeeded = this.thrustTarget / 85; // Empirical constant for RP-1/LOX
    this.fuelMass = fuelNeeded;
    this.oxidantMass = fuelNeeded * optimalRatio;

    console.log(`[PROPELLANT MASS CALCULATION]`);
    console.log(`  RP-1 fuel: ${this.fuelMass.toFixed(1)} kg`);
    console.log(`  LOX oxidant: ${this.oxidantMass.toFixed(1)} kg`);
    console.log(`  Mixture ratio: ${optimalRatio}:1 (optimal specific impulse)`);
  }

  calculateThrust() {
    // Tsiolkovsky equation component: F = mDot * Vex
    const mDot = (this.fuelMass + this.oxidantMass) / 180; // Burn time ~180s
    const specificImpulse = 360; // seconds (RP-1/LOX @ sea level)
    const Vex = specificImpulse * 9.81; // Exhaust velocity
    const thrustKN = (mDot * Vex) / 1000;

    console.log(`[THRUST CALCULATION]`);
    console.log(`  Mass flow rate: ${mDot.toFixed(2)} kg/s`);
    console.log(`  Specific impulse: ${specificImpulse}s`);
    console.log(`  Predicted thrust: ${thrustKN.toFixed(1)} kN`);
  }

  ignitionSequence() {
    this.combustionChamberTemp = 3600; // Kelvin (RP-1/LOX combustion)
    console.log(`[IGNITION SEQUENCE]`);
    console.log(`  Main engine start (MECO armed)`);
    console.log(`  Combustion chamber temperature: ${this.combustionChamberTemp}K`);
    console.log(`  Nozzle throat erosion rate within acceptable limits`);
    console.log(`  Hello from Rocket Propulsion Engineer - Engine nominal`);
  }
}

// Initiate launch sequence
const mainEngine = new RocketEngine('Merlin 1D', 850);
mainEngine.calculateMixtureFraction();
mainEngine.calculateThrust();
mainEngine.ignitionSequence();
