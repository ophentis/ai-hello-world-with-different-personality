#!/usr/bin/env node

/**
 * INDUSTRIAL ENGINEER - Process Optimization & Lean Manufacturing
 * Six Sigma, Throughput, Time Motion Study, Waste Elimination
 */

class ProductionLineAnalysis {
  constructor() {
    this.stationA_time = 2.5; // minutes
    this.stationB_time = 3.2;
    this.stationC_time = 1.8;
    this.stationD_time = 4.1; // BOTTLENECK
    this.cycleTime = 0;
    this.dailyTarget = 280; // units/day
    this.wasteTypes = {
      overproduction: 12,
      inventory: 45,
      motion: 18,
      waiting: 89
    };
  }

  calculateBottleneck() {
    const times = [
      this.stationA_time,
      this.stationB_time,
      this.stationC_time,
      this.stationD_time
    ];
    return Math.max(...times);
  }

  calculateThroughput() {
    this.cycleTime = this.calculateBottleneck();
    const unitsPerMinute = 1 / this.cycleTime;
    const unitsPerDay = unitsPerMinute * 480; // 8-hour shift
    return {
      cycleTime: this.cycleTime,
      throughput: Math.floor(unitsPerDay),
      efficiency: (Math.floor(unitsPerDay) / this.dailyTarget * 100).toFixed(1)
    };
  }

  analyzeWaste() {
    const totalWaste = Object.values(this.wasteTypes).reduce((a, b) => a + b);
    return {
      total: totalWaste,
      breakdown: {
        'Muri (Overburden)': this.wasteTypes.overproduction,
        'Mura (Unevenness)': this.wasteTypes.inventory,
        'Muda (Waste)': this.wasteTypes.motion + this.wasteTypes.waiting
      }
    };
  }

  generateProcessReport() {
    const throughput = this.calculateThroughput();
    const waste = this.analyzeWaste();

    const lines = [
      '╔═══════════════════════════════════════════╗',
      '║  LEAN MANUFACTURING PROCESS ANALYSIS     ║',
      '╚═══════════════════════════════════════════╝',
      ``,
      'PRODUCTION LINE LAYOUT:',
      `Station A: ${this.stationA_time}m | Station B: ${this.stationB_time}m`,
      `Station C: ${this.stationC_time}m | Station D: ${this.stationD_time}m ◄─ BOTTLENECK`,
      ``,
      'THROUGHPUT METRICS:',
      `Current Cycle Time: ${throughput.cycleTime.toFixed(1)} min/unit`,
      `Daily Throughput: ${throughput.throughput} units/day`,
      `Target: ${this.dailyTarget} units/day`,
      `Line Efficiency: ${throughput.efficiency}%`,
      ``,
      'WASTE ANALYSIS (8M Methodology):',
      `Total Waste Minutes/Day: ${waste.total}`,
      `  - Muri: ${waste.breakdown['Muri (Overburden)']}m (${(waste.breakdown['Muri (Overburden)']/waste.total*100).toFixed(0)}%)`,
      `  - Mura: ${waste.breakdown['Mura (Unevenness)']}m (${(waste.breakdown['Mura (Unevenness)']/waste.total*100).toFixed(0)}%)`,
      `  - Muda: ${waste.breakdown['Muda (Waste)']}m (${(waste.breakdown['Muda (Waste)']/waste.total*100).toFixed(0)}%)`,
      ``,
      'KAIZEN OPPORTUNITY:',
      'Reduce Station D cycle time by 1.2m via tooling optimization → +22 units/day'
    ];
    return lines.join('\n');
  }
}

const production = new ProductionLineAnalysis();
console.log(production.generateProcessReport());
