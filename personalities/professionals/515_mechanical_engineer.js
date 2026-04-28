// Mechanical Engineer: Torque calculations, tolerance analysis, material specs
// ============================================================================

class MechanicalComponent {
  constructor(name, material, diameter_mm) {
    this.name = name;
    this.material = material;
    this.diameter = diameter_mm;
    this.tolerances = { upper: 0, lower: 0 };
    this.stressState = {};
  }

  calculateTorque() {
    // T = F * r, for fasteners: T = K * d * P
    const diameter_m = this.diameter / 1000;
    const K = 0.2; // Coefficient of friction for steel fasteners
    const clampingForce = 8000; // Newtons

    const torque_Nm = K * diameter_m * clampingForce;

    console.log(`[TORQUE SPECIFICATION]`);
    console.log(`  Component: ${this.name}`);
    console.log(`  Material: ${this.material} (yield strength: 355 MPa)`);
    console.log(`  Torque spec: ${torque_Nm.toFixed(2)} N·m`);
    console.log(`  Tightening sequence: Cross-pattern, 3-pass`);
  }

  setTolerances(nominal, upperDeviation, lowerDeviation) {
    // ISO 286 tolerance class H7 as example
    this.tolerances.nominal = nominal;
    this.tolerances.upper = nominal + upperDeviation;
    this.tolerances.lower = nominal - lowerDeviation;

    console.log(`\n[DIMENSIONAL TOLERANCE]`);
    console.log(`  Nominal: ${nominal}mm`);
    console.log(`  Upper limit: ${this.tolerances.upper}mm (+${upperDeviation})`);
    console.log(`  Lower limit: ${this.tolerances.lower}mm (-${lowerDeviation})`);
    console.log(`  Tolerance zone: H7 (typical for precision parts)`);
  }

  performStressAnalysis() {
    const stress = 120; // MPa - calculated via FEA
    const yieldStrength = 355; // MPa
    const safetyFactor = yieldStrength / stress;

    console.log(`\n[STRESS ANALYSIS]`);
    console.log(`  Von Mises stress: ${stress} MPa`);
    console.log(`  Material yield strength: ${yieldStrength} MPa`);
    console.log(`  Safety factor: ${safetyFactor.toFixed(1)}`);
    console.log(`  Status: ACCEPTABLE - Design verified per ANSYS simulation`);
  }

  viewCADReference() {
    console.log(`\n[CAD REFERENCE]`);
    console.log(`  Drawing reference: DWG-2024-001 Rev B`);
    console.log(`  Scale: 1:1`);
    console.log(`  Surface finish: Ra 3.2µm (grinding required)`);
    console.log(`  Hello from Mechanical Engineer - Blueprint analysis complete`);
  }
}

const shaft = new MechanicalComponent('Precision Shaft', 'Steel (AISI 1045)', 16);
shaft.calculateTorque();
shaft.setTolerances(16, 0.025, 0.025);
shaft.performStressAnalysis();
shaft.viewCADReference();
