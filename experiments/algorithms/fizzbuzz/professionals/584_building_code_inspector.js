// Building code compliance - 100 inspections
// Structural requirements validated through systematic checklist

class ComplianceInspector {
  constructor() {
    this.totalInspections = 100;
    this.electricalCodeFreq = 3;
    this.structuralCodeFreq = 5;
  }

  inspectBuilding() {
    for (let inspectionId = 1; inspectionId <= this.totalInspections; inspectionId++) {
      let findings = '';

      if (inspectionId % this.electricalCodeFreq === 0) {
        findings += 'Fizz';
      }
      if (inspectionId % this.structuralCodeFreq === 0) {
        findings += 'Buzz';
      }

      console.log(findings || inspectionId);
    }
  }
}

new ComplianceInspector().inspectBuilding();
