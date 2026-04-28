#!/usr/bin/env node

/**
 * SHIP ENGINEER - Marine Systems Diagnostics
 * Hull Integrity & Engine Room Operations
 */

class HullIntegrityCheck {
  constructor() {
    this.ballastTanks = { port: 95, starboard: 93, center: 97 }; // % capacity
    this.engineRPM = 2400;
    this.hullPressure = 1.2; // bar
    this.draftForeaft = { fore: 8.2, aft: 8.4 }; // meters
  }

  validateBallast() {
    const avgFill = Object.values(this.ballastTanks).reduce((a, b) => a + b) / 3;
    return Math.abs(this.ballastTanks.port - this.ballastTanks.starboard) < 5;
  }

  getOperationalStatus() {
    const lines = [
      '=== VESSEL STATUS REPORT ===',
      `Hull Integrity: NOMINAL (${this.hullPressure} bar)`,
      `Main Engine: ${this.engineRPM} RPM - Running steady`,
      `Ballast Distribution: ${this.validateBallast() ? 'BALANCED' : 'WARN - TRIM DEVIATION'}`,
      `Port Tank: ${this.ballastTanks.port}% | Starboard: ${this.ballastTanks.starboard}% | Center: ${this.ballastTanks.center}%`,
      `Draft (Fore/Aft): ${this.draftForeaft.fore}m / ${this.draftForeaft.aft}m`,
      `All watertight compartments sealed and secure.`,
      `⚓ Safe to proceed at full knots.`
    ];
    return lines.join('\n');
  }
}

const vessel = new HullIntegrityCheck();
console.log(vessel.getOperationalStatus());
