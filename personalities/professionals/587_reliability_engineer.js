#!/usr/bin/env node

/**
 * RELIABILITY ENGINEER - MTBF, Weibull, Failure Modes
 * Bathtub Curve, System Availability, Risk Assessment
 */

class ReliabilityModel {
  constructor(systemName, mtbf_hours) {
    this.systemName = systemName;
    this.mtbf = mtbf_hours; // Mean Time Between Failures
    this.shape_k = 1.8; // Weibull shape parameter
    this.scale_lambda = 1 / (mtbf_hours * 0.8856); // Weibull scale
    this.operationHours = 10000;
  }

  calculateFailureRate() {
    // λ = 1 / MTBF (assuming exponential for constant hazard rate)
    return 1 / this.mtbf;
  }

  weibullReliability(t) {
    // R(t) = exp(-(t/lambda)^k)
    return Math.exp(-Math.pow(t / (1 / this.scale_lambda), this.shape_k));
  }

  calculateAvailability(mttr_hours) {
    // A = MTBF / (MTBF + MTTR)
    return this.mtbf / (this.mtbf + mttr_hours);
  }

  getReliabilityMetrics() {
    const failureRate = this.calculateFailureRate();
    const reliability = this.weibullReliability(this.operationHours);
    const availability = this.calculateAvailability(8); // 8 hour MTTR

    const lines = [
      '╔═════════════════════════════════════════════╗',
      '║  SYSTEM RELIABILITY ASSESSMENT              ║',
      '╚═════════════════════════════════════════════╝',
      `System: ${this.systemName}`,
      ``,
      'PRIMARY METRICS:',
      `MTBF (Mean Time Between Failures): ${this.mtbf.toLocaleString()} hours`,
      `Failure Rate (λ): ${(failureRate * 1e6).toFixed(2)} failures/million hours`,
      ``,
      'RELIABILITY ANALYSIS:',
      `Reliability at ${this.operationHours.toLocaleString()} hrs: ${(reliability * 100).toFixed(2)}%`,
      `System Availability (MTTR=8h): ${(availability * 100).toFixed(3)}%`,
      ``,
      'BATHTUB CURVE PHASES:',
      `Early Life (0-500h): High infant mortality risk`,
      `Useful Life (500-9500h): Constant hazard rate (Weibull k=${this.shape_k})`,
      `Wear-Out (9500h+): Degradation accelerates`,
      ``,
      'RISK: MODERATE - Monitor at 8000-hour service interval'
    ];
    return lines.join('\n');
  }
}

const system = new ReliabilityModel('Production Line Motor Assembly', 15000);
console.log(system.getReliabilityMetrics());
