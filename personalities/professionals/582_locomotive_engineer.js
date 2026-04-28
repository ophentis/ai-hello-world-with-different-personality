#!/usr/bin/env node

/**
 * LOCOMOTIVE ENGINEER - Train Operations Authority
 * Throttle, Air Brakes, Signal Aspect Compliance
 */

class LocomotiveControl {
  constructor() {
    this.throttleNotch = 0; // 0-8 notches
    this.airBrakePressure = 90; // PSI
    this.trainAirBrakePressure = 90; // PSI
    this.currentSignal = 'RED'; // RED, YELLOW, GREEN, CLEAR
    this.speedMPH = 0;
  }

  advanceThrottle(notches) {
    this.throttleNotch = Math.min(8, this.throttleNotch + notches);
    this.speedMPH = this.throttleNotch * 12.5;
  }

  serviceAirBrake() {
    // Gradual reduction - service brake
    this.trainAirBrakePressure = Math.max(60, this.trainAirBrakePressure - 15);
    this.speedMPH = Math.max(0, this.speedMPH - 8);
  }

  emergencyStop() {
    this.throttleNotch = 0;
    this.trainAirBrakePressure = 0; // Full emergency app
    this.speedMPH = 0;
  }

  getDashboardStatus() {
    const safeToMove = this.currentSignal !== 'RED' && this.throttleNotch <= 3;
    const lines = [
      '╔═══════════════════════════════════╗',
      '║  LOCOMOTIVE ENGINEER CONSOLE      ║',
      '╚═══════════════════════════════════╝',
      `Throttle Notch: ${this.throttleNotch}/8 (${this.speedMPH} MPH)`,
      `Signal Aspect: [ ${this.currentSignal} ]`,
      `Locomotive Air: ${this.airBrakePressure} PSI`,
      `Train Air: ${this.trainAirBrakePressure} PSI`,
      `Authority to Proceed: ${safeToMove ? 'YES' : 'WAIT FOR GREEN'}`,
      `Track Warrant: CLEAR TO MILEPOST 156.4`
    ];
    return lines.join('\n');
  }
}

const loco = new LocomotiveControl();
loco.currentSignal = 'CLEAR';
loco.advanceThrottle(3);
console.log(loco.getDashboardStatus());
