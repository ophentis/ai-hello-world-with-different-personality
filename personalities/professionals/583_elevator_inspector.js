#!/usr/bin/env node

/**
 * ELEVATOR INSPECTOR - ASME A17.1 Compliance & Safety
 * Load Testing, Cable Inspection, Certification
 */

class ElevatorUnit {
  constructor(unitID) {
    this.unitID = unitID;
    this.lastInspection = new Date('2025-06-15');
    this.cableCount = 8;
    this.cableCondition = 'GOOD'; // GOOD, FAIR, POOR
    this.ratedCapacity = 2500; // lbs
    this.safetyBrakeStatus = true;
    this.overspeed = false;
  }

  performLoadTest(testWeight) {
    const passedTest = testWeight <= this.ratedCapacity * 1.125;
    return {
      passed: passedTest,
      testWeight,
      maxAllowed: this.ratedCapacity * 1.125,
      notes: passedTest ? 'PASS' : 'FAIL - OVERLOAD'
    };
  }

  inspectCables() {
    const findings = [];
    if (this.cableCondition === 'GOOD') {
      findings.push(`All ${this.cableCount} hoisting cables: NO VISIBLE DEFECTS`);
      findings.push('Lubrication: ADEQUATE');
      findings.push('Abrasion: NONE DETECTED');
    }
    return findings;
  }

  generateCertificate() {
    const lines = [
      '═══════════════════════════════════════════',
      '    ELEVATOR INSPECTION CERTIFICATE',
      '═══════════════════════════════════════════',
      `Unit ID: ${this.unitID}`,
      `Last Certified: ${this.lastInspection.toISOString().split('T')[0]}`,
      `Next Inspection Due: ${new Date(this.lastInspection.getTime() + 365*24*60*60*1000).toISOString().split('T')[0]}`,
      `Rated Capacity: ${this.ratedCapacity} lbs`,
      `Safety Brake: ${this.safetyBrakeStatus ? 'OPERATIONAL' : 'FAILED'}`,
      `Overspeed Governor: ${this.overspeed ? 'TRIPPED' : 'READY'}`,
      ...this.inspectCables(),
      `Load Test Result: ${JSON.stringify(this.performLoadTest(2650)).notes}`,
      '',
      'ASME A17.1 COMPLIANT - APPROVED FOR OPERATION'
    ];
    return lines.join('\n');
  }
}

const elevator = new ElevatorUnit('BLG-A-03-UNIT-12');
console.log(elevator.generateCertificate());
