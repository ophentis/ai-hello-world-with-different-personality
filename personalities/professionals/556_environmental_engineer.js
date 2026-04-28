// Environmental Compliance & Remediation
// Emissions monitoring, EPA Title V, water treatment, stormwater

class PointSource {
  constructor(name, flowRate, pollutantMass) {
    this.name = name;
    this.flowCFM = flowRate;     // cubic feet per minute
    this.pollutant = pollutantMass;  // g/hour
    this.tempK = 273 + 120;
  }

  getEmissionRate() {
    return (this.pollutant / this.flowCFM) * 35.3147;  // mg/m³
  }

  getPLERatio() {
    const permitLimit = 45;  // mg/m³ (example NAAQS)
    return this.getEmissionRate() / permitLimit;
  }
}

class WaterTreatmentPlant {
  constructor() {
    this.influentBOD = 250;    // mg/L
    this.influentSS = 350;     // mg/L
    this.nitrogenIN = 45;      // mg/L
    this.phosphorusIN = 8;     // mg/L
  }

  primaryTreatment(retention_hrs) {
    // Gravity settling
    this.influentSS *= 0.75;   // Remove 25% SS
    this.influentBOD *= 0.85;  // Remove 15% BOD
  }

  biologicalTreatment() {
    // MLSS activated sludge
    this.influentBOD *= 0.90;  // Remove 90% BOD (cumulative)
    this.nitrogenIN *= 0.80;   // Nitrification-denitrification
    this.phosphorusIN *= 0.75; // Chemical or bio-P removal
  }

  getEffluent() {
    return {
      BOD: this.influentBOD,
      SS: this.influentSS,
      N: this.nitrogenIN,
      P: this.phosphorusIN
    };
  }

  meetsPermit() {
    const limits = { BOD: 30, SS: 30, N: 10, P: 1 };
    const effluent = this.getEffluent();
    return Object.keys(limits).every(k => effluent[k] <= limits[k]);
  }
}

// Stack emissions monitoring
const stack1 = new PointSource("Boiler_1", 50000, 125);
const stack2 = new PointSource("Furnace_A", 32000, 78);
const wastewater = new WaterTreatmentPlant();

let output = "=== ENVIRONMENTAL COMPLIANCE REPORT ===\n";
output += "EPA Title V - Permitted Emissions:\n";
output += `${stack1.name}: ${stack1.getEmissionRate().toFixed(2)} mg/m³ (PLE: ${(stack1.getPLERatio()*100).toFixed(1)}%)\n`;
output += `${stack2.name}: ${stack2.getEmissionRate().toFixed(2)} mg/m³ (PLE: ${(stack2.getPLERatio()*100).toFixed(1)}%)\n\n`;

wastewater.primaryTreatment(2.5);
wastewater.biologicalTreatment();

const effluent = wastewater.getEffluent();
output += "POTW Discharge Quality:\n";
output += `BOD: ${effluent.BOD.toFixed(1)} mg/L (Limit: 30)\n`;
output += `TSS: ${effluent.SS.toFixed(1)} mg/L (Limit: 30)\n`;
output += `TN:  ${effluent.N.toFixed(1)} mg/L (Limit: 10)\n`;
output += `TP:  ${effluent.P.toFixed(2)} mg/L (Limit: 1)\n`;
output += `Permit Status: ${wastewater.meetsPermit() ? 'COMPLIANT' : 'NON-COMPLIANT'}\n\n`;
output += "Stormwater: Retention pond volume 45 acre-ft (25-yr/24-hr event)";
console.log(output);
