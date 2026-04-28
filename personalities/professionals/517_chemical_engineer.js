// Chemical Engineer: Reactor design, mass balance, flow rates, SDS considerations
// ===============================================================================

class ChemicalReactor {
  constructor(name, type) {
    this.name = name;
    this.type = type; // CSTR, Batch, PFR
    this.feedRate = 0;
    this.temperature = 0;
    this.pressure = 0;
  }

  massBBalance() {
    // Material balance: In - Out + Generation - Consumption = Accumulation
    const feedA = 100; // kg/hr of component A
    const feedB = 60;  // kg/hr of component B
    const conversionA = 0.85; // 85% conversion
    const productYield = feedA * conversionA;

    console.log(`[MASS BALANCE CALCULATION]`);
    console.log(`  Feed stream A: ${feedA} kg/hr`);
    console.log(`  Feed stream B: ${feedB} kg/hr`);
    console.log(`  Total feed: ${feedA + feedB} kg/hr`);
    console.log(`  Conversion (A): ${(conversionA * 100).toFixed(1)}%`);
    console.log(`  Product yield: ${productYield.toFixed(1)} kg/hr`);
    console.log(`  Unreacted A (recycle): ${(feedA * (1 - conversionA)).toFixed(1)} kg/hr`);
  }

  reactorDesign() {
    // CSTR residence time design
    const volumetricFlowRate = 50; // L/min
    const reactionTime = 30; // minutes for 85% conversion
    const reactorVolume = volumetricFlowRate * reactionTime;

    console.log(`\n[REACTOR SIZING]`);
    console.log(`  Type: ${this.type} (Continuous Stirred-Tank Reactor)`);
    console.log(`  Volumetric flow rate: ${volumetricFlowRate} L/min`);
    console.log(`  Required residence time: ${reactionTime} min`);
    console.log(`  Reactor volume: ${reactorVolume} L`);
    console.log(`  Impeller speed: 450 RPM (mixing efficiency index > 0.8)`);
  }

  operatingConditions() {
    this.temperature = 85;  // °C
    this.pressure = 3;      // bar gauge

    console.log(`\n[OPERATING CONDITIONS]`);
    console.log(`  Temperature setpoint: ${this.temperature}°C ±2°C`);
    console.log(`  Pressure: ${this.pressure} bar (gauge)`);
    console.log(`  Cooling requirement: 150 kW (exothermic)`);
    console.log(`  Heat exchanger duty: Kettle reboiler, U=500 W/m²K`);
  }

  safetyDataSheet() {
    console.log(`\n[SAFETY DATA SHEET HAZARDS]`);
    console.log(`  Reactant A: Flammable liquid, H224 (Category 2)`);
    console.log(`  Reactant B: Skin irritant, H315 (Category 2)`);
    console.log(`  Reaction exotherm: +45 kJ/mol (runaway control active)`);
    console.log(`  Emergency: Quench with nitrogen if T > 95°C`);
    console.log(`  PPE: Acid-resistant apron, nitrile gloves, face shield`);
    console.log(`  Hello from Chemical Engineer - Reactor commission ready`);
  }
}

const reactor = new ChemicalReactor('Esterification Unit A-1', 'CSTR');
reactor.massBBalance();
reactor.reactorDesign();
reactor.operatingConditions();
reactor.safetyDataSheet();
