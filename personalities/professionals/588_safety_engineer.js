#!/usr/bin/env node

/**
 * SAFETY ENGINEER - OSHA Compliance & Hazard Management
 * Incident Analysis, PPE Requirements, Regulatory Adherence
 */

class SafetyProgram {
  constructor(facility) {
    this.facility = facility;
    this.totalEmployees = 125;
    this.incidentsLTI = 2; // Lost Time Incidents
    this.lostWorkDays = 47;
    this.hoursWorked = 250000; // annual
    this.hazards = [];
  }

  identifyHazards() {
    return [
      { hazard: 'Machinery - Rotating Equipment', risk: 'HIGH', control: 'Guard + Lockout/Tagout' },
      { hazard: 'Fall - Height > 6 ft', risk: 'HIGH', control: 'Harness + Anchor + 100% Tie-off' },
      { hazard: 'Chemical Exposure', risk: 'MEDIUM', control: 'Ventilation + SDS Review + PPE' },
      { hazard: 'Noise > 85 dB', risk: 'MEDIUM', control: 'Hearing Protection + Audiometric Tests' },
      { hazard: 'Slip/Trip/Fall', risk: 'MEDIUM', control: 'Housekeeping + Non-skid Surfaces' }
    ];
  }

  calculateTCER() {
    // Total Case Incident Rate = (cases / hours worked) * 200,000
    const cases = this.incidentsLTI;
    return (cases / this.hoursWorked) * 200000;
  }

  calculateLTIR() {
    // Lost Time Incident Rate = (LTI / hours worked) * 200,000
    return (this.incidentsLTI / this.hoursWorked) * 200000;
  }

  generateSafetyReport() {
    const tcer = this.calculateTCER();
    const ltir = this.calculateLTIR();
    const hazards = this.identifyHazards();

    const lines = [
      '┌──────────────────────────────────────────────────┐',
      '│  OSHA SAFETY COMPLIANCE & INCIDENT REPORT        │',
      '└──────────────────────────────────────────────────┘',
      `Facility: ${this.facility}`,
      `Employees: ${this.totalEmployees} | Annual Hours: ${this.hoursWorked.toLocaleString()}`,
      ``,
      'INCIDENT METRICS (YTD):',
      `Total Case Incident Rate (TCIR): ${tcer.toFixed(2)} per 200k hours`,
      `Lost Time Incident Rate (LTIR): ${ltir.toFixed(2)} per 200k hours`,
      `Lost Work Days: ${this.lostWorkDays}`,
      ``,
      'HAZARD ASSESSMENT (Hierarchy of Controls):',
      ...hazards.map(h => `  [${h.risk}] ${h.hazard}`),
      `    → ${hazards[0].control}`,
      ``,
      'PPE REQUIREMENTS:',
      '  ✓ Hard hat (Class E) in construction zones',
      '  ✓ Safety glasses with side shields (ANSI Z87.1)',
      '  ✓ Steel-toed boots (ASTM F-75)',
      '  ✓ High-visibility vests in active areas',
      ``,
      'STATUS: IN COMPLIANCE - Target LTIR < 2.0 ✓'
    ];
    return lines.join('\n');
  }
}

const safety = new SafetyProgram('Industrial Manufacturing Complex');
console.log(safety.generateSafetyReport());
