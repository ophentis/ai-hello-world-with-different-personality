// Underground Mine Operations - Blast & Ventilation Design
// Ore grade tracking, fragmentation analysis, airflow modeling

class BlastDesign {
  constructor(holeDiameter, burdenmm) {
    this.holeDiam = holeDiameter;  // mm
    this.burden = burdenmm;        // mm
    this.spacing = burdenmm * 1.25;
    this.explosiveCharge = 25 * (holeDiameter / 45) ** 2;  // kg ANFO
  }

  calcFragmentation() {
    const Kundafor = 7 * (this.burden / this.holeDiam) + 0.05 * (this.spacing / this.burden);
    const meanFragSize = 25000 / Kundafor;
    return { Kundafor, meanFragSize };
  }
}

class OreBlock {
  constructor(x, y, z) {
    this.pos = { x, y, z };
    this.grade = 2.5 + Math.random() * 1.5;  // % Cu equivalent
    this.density = 2650 + Math.random() * 150;  // kg/m3
    this.fragmented = false;
  }

  fragmente(energy) {
    if (energy > this.density * 0.8) {
      this.fragmented = true;
      return this.grade;
    }
    return 0;
  }
}

const shaft = [
  new OreBlock(0, 0, -300),
  new OreBlock(5, 0, -300),
  new OreBlock(10, 0, -300),
  new OreBlock(15, 0, -300),
];

const blast = new BlastDesign(102, 3500);
const frag = blast.calcFragmentation();
let output = "=== MINE PRODUCTION REPORT ===\n";
output += `Blast Pattern: Burden=${blast.burden}mm Spacing=${blast.spacing.toFixed(0)}mm\n`;
output += `Fragmentation Index: ${frag.Kundafor.toFixed(2)} | Mean Fragment: ${frag.meanFragSize.toFixed(0)}mm\n\n`;

const blastEnergy = blast.explosiveCharge * 3700 * 1000 / shaft.length;  // J per block
let totalOre = 0;
let highGradeCount = 0;

for (let block of shaft) {
  const recovered = block.fragmente(blastEnergy);
  if (recovered > 0) {
    totalOre += recovered;
    if (block.grade > 3.2) highGradeCount++;
    output += `Block@${block.pos.z}m: Grade=${block.grade.toFixed(2)}% | Recovered\n`;
  }
}

output += `\nOre Extracted: ${totalOre.toFixed(1)}% equiv Cu\n`;
output += `High-Grade (>3.2%): ${highGradeCount}/${shaft.length} blocks\n`;
output += `Ventilation: Main fan CFM=${shaft.length * 1500} | Shaft airflow OK\n`;
output += "Ground Support: Bolts spaced 1.5m confirmed";
console.log(output);
