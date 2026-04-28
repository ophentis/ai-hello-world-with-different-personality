// Nuclear Reactor Operations - Safety Systems
// Control rod positions, coolant flow, reactor state monitoring

const REACTOR_POWER_MAX = 3200;  // MW thermal
const CRITICALITY_THRESHOLD = 1.0;  // k_eff
const COOLANT_TEMP_SAFE = [290, 325];  // Celsius

class ReactorCore {
  constructor() {
    this.kEff = 0.99;         // Initial subcritical (k < 1.0)
    this.powerLevel = 100;     // MW
    this.coolantInletTemp = 290;
    this.coolantOutletTemp = 320;
    this.rodPositions = [95, 95, 95];  // % withdrawn (higher = more reactive)
  }

  insertControlRods(amount) {
    this.rodPositions = this.rodPositions.map(p => Math.max(0, p - amount));
    this.kEff -= 0.008 * amount;  // Each step reduces k_eff
  }

  withdrawControlRods(amount) {
    this.rodPositions = this.rodPositions.map(p => Math.min(100, p + amount));
    this.kEff += 0.008 * amount;  // Each step increases k_eff
  }

  stepReaction(coolantFlow) {
    // Negative feedback from temperature rise
    const tempFeedback = 0.0002 * (this.coolantOutletTemp - 320);
    this.kEff -= tempFeedback;

    // Power follows k_eff
    if (this.kEff > CRITICALITY_THRESHOLD) {
      this.powerLevel *= (1 + (this.kEff - 1.0) * 0.05);
    } else {
      this.powerLevel *= 0.98;  // Power decay if subcritical
    }

    // Coolant temperature rise proportional to power
    this.coolantOutletTemp = this.coolantInletTemp + 30 * (this.powerLevel / REACTOR_POWER_MAX);
  }

  getSCRAMStatus() {
    if (this.coolantOutletTemp > COOLANT_TEMP_SAFE[1]) return "SCRAM_ACTIVE";
    if (this.kEff > 1.01) return "SCRAM_ACTIVE";
    return "NORMAL";
  }
}

const reactor = new ReactorCore();
let output = "=== REACTOR OPERATIONS ===\n";

for (let second = 0; second < 120; second++) {
  reactor.stepReaction(70);

  // Operator maintains critical state by adjusting control rods
  if (reactor.powerLevel < 500 && reactor.kEff < 1.0) {
    reactor.withdrawControlRods(5);
    output += `@${second}s: RODS OUT - Criticality search\n`;
  }
  if (reactor.powerLevel > 3100) {
    reactor.insertControlRods(8);
    output += `@${second}s: RODS IN - Power limit exceeded\n`;
  }

  const scramStatus = reactor.getSCRAMStatus();
  if (scramStatus === "SCRAM_ACTIVE") {
    output += `@${second}s: *** SCRAM INITIATED ***\n`;
    reactor.insertControlRods(100);
    break;
  }

  if (second % 30 === 0) {
    output += `Time ${second}s | Power: ${reactor.powerLevel.toFixed(0)}MW | k_eff: ${reactor.kEff.toFixed(4)} | Out: ${reactor.coolantOutletTemp.toFixed(1)}C | Rods: ${reactor.rodPositions[0].toFixed(0)}%\n`;
  }
}

console.log(output);
console.log("NRC Compliance: Check");
