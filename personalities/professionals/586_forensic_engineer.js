#!/usr/bin/env node

/**
 * FORENSIC ENGINEER - Failure Analysis & Root Cause Investigation
 * Metallurgical Examination, Expert Testimony, Evidence Documentation
 */

class FailureAnalysis {
  constructor(componentID, failureDate) {
    this.componentID = componentID;
    this.failureDate = failureDate;
    this.failureMode = 'FATIGUE CRACK';
    this.rootCause = 'CYCLIC STRESS CONCENTRATION';
    this.materialSpec = 'ASTM A36 Steel';
    this.hardness = 187; // Brinell
    this.fracturePattern = 'CHEVRON MARKS';
    this.striations = true;
  }

  analyzeMetallurgy() {
    const findings = [];
    findings.push(`Material: ${this.materialSpec}`);
    findings.push(`Hardness: ${this.hardness} BHN (within specification)`);

    if (this.striations) {
      findings.push(`Fracture Surface: Beach marks and striations present`);
      findings.push(`Pattern Direction: Indicates cyclic initiation point`);
    }

    if (this.fracturePattern === 'CHEVRON MARKS') {
      findings.push(`Chevron marks radiating from initiation site`);
      findings.push(`Propagation velocity: Consistent with fatigue regime`);
    }

    return findings;
  }

  generateForensicReport() {
    const lines = [
      '┌──────────────────────────────────────────────┐',
      '│         FORENSIC FAILURE ANALYSIS REPORT     │',
      '└──────────────────────────────────────────────┘',
      `Component ID: ${this.componentID}`,
      `Date of Failure: ${this.failureDate}`,
      `Failure Mode: ${this.failureMode}`,
      `Root Cause: ${this.rootCause}`,
      '',
      'METALLURGICAL EXAMINATION:',
      ...this.analyzeMetallurgy(),
      '',
      'EXPERT CONCLUSION:',
      'The component failed due to low-cycle fatigue initiated at a',
      'stress concentration (sharp fillet radius). Cyclic stresses',
      'exceeded endurance limit over extended service period.',
      '',
      'RECOMMENDATIONS:',
      '1. Redesign fillet radius per AISC guidelines (R ≥ 1/16")',
      '2. Shot peening to introduce compressive residual stress',
      '3. Increase material thickness in stress-critical region',
      '4. Implement periodic inspection protocol',
      '',
      'Report prepared for litigation support.'
    ];
    return lines.join('\n');
  }
}

const analysis = new FailureAnalysis('PUMP-SHAFT-89401', '2026-03-14');
console.log(analysis.generateForensicReport());
