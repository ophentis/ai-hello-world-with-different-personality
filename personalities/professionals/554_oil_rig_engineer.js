// Oil Rig Operations - Wellbore & Blowout Pressure Management
// Drilling parameters, mud weight, formation pressure

class WellboreSimulation {
  constructor() {
    this.depthMeters = 0;
    this.mudWeightSG = 1.15;      // Specific gravity (water = 1.0)
    this.porePressuregradient = 0.0108;  // PSI/ft (1 ft seawater ~0.445 PSI)
    this.fractureGradient = 0.018;
    this.drillBitDepth = 0;
    this.circulation = false;
    this.standpipePressure = 0;
  }

  advanceBit(depthIncrease) {
    this.drillBitDepth += depthIncrease;
    this.depthMeters += depthIncrease * 0.3048;
  }

  calculateDownholePress() {
    const ftDepth = this.depthMeters / 0.3048;
    const hydrostatic = this.mudWeightSG * 0.0519 * ftDepth;  // PSI = SG * 0.0519 * depth_ft
    const formation = this.porePressuregradient * ftDepth;
    return { hydrostatic, formation };
  }

  setPumpPressure(psi) {
    this.standpipePressure = psi;
    if (this.circulation) {
      const downhole = this.calculateDownholePress();
      const totalPressure = this.standpipePressure + downhole.hydrostatic;
      return totalPressure;
    }
    return 0;
  }

  checkBlowoutRisk() {
    const press = this.calculateDownholePress();
    const fracturePressure = this.fractureGradient * (this.drillBitDepth / 0.3048);
    const hydrostatic = this.mudWeightSG * 0.0519 * (this.drillBitDepth / 0.3048);

    if (hydrostatic < press.formation) {
      return "UNDERBALANCED - KICK RISK";
    }
    if (hydrostatic > fracturePressure) {
      return "OVERBALANCED - LOSS ZONE RISK";
    }
    return "SAFE";
  }
}

const well = new WellboreSimulation();
let output = "=== OFFSHORE WELLBORE LOG ===\n";
let kickDetected = false;

for (let stand = 0; stand < 80; stand++) {
  well.advanceBit(10);
  well.circulation = true;
  well.setPumpPressure(800 + Math.random() * 50);

  if (stand % 5 === 0) {
    const press = well.calculateDownholePress();
    const riskStatus = well.checkBlowoutRisk();
    output += `Stand ${stand}: Depth=${well.depthMeters.toFixed(0)}m | Mud=${well.mudWeightSG.toFixed(2)} SG | Form.Pres=${press.formation.toFixed(0)}PSI | Risk: ${riskStatus}\n`;

    if (riskStatus === "UNDERBALANCED - KICK RISK") {
      output += `  --> INCREASE MUD WEIGHT to ${(well.mudWeightSG + 0.05).toFixed(2)} SG\n`;
      well.mudWeightSG += 0.05;
      kickDetected = true;
    }
  }

  if (well.drillBitDepth > 2000) break;
}

if (kickDetected) {
  output += "\n[INCIDENT] Kick managed - BOP procedures ready\n";
}
output += "\nWell Status: SECURE";
console.log(output);
