#!/usr/bin/env node
// Site Reliability Engineer: Hello World with SLO monitoring
// Availability first - error budgets matter

const SERVICE = 'hello-world-service';
const SLO_TARGET = 99.9;
const ERROR_BUDGET_DAYS = 30;
const INCIDENTS_THIS_MONTH = 0;

class SREHealthCheck {
  constructor(serviceName) {
    this.service = serviceName;
    this.uptime = 99.95;
    this.errorBudgetRemaining = 100 - ((100 - this.uptime) * ERROR_BUDGET_DAYS);
  }

  checkSLO() {
    if (this.uptime >= SLO_TARGET) {
      console.log(`✓ SLO Met: ${this.uptime}% >= ${SLO_TARGET}%`);
    } else {
      console.log(`✗ SLO Breach: ${this.uptime}% < ${SLO_TARGET}%`);
    }
  }

  alertOnThreshold() {
    if (this.errorBudgetRemaining < 50) {
      console.log('⚠ ALERT: Error budget below 50% - incident response triggered');
    }
  }

  report() {
    console.log(`\n[${new Date().toISOString()}] ${this.service} Status Report`);
    console.log(`Uptime: ${this.uptime}%`);
    console.log(`Error Budget Remaining: ${this.errorBudgetRemaining.toFixed(2)}%`);
    console.log(`Incidents This Month: ${INCIDENTS_THIS_MONTH}`);
  }
}

const sre = new SREHealthCheck(SERVICE);
console.log('=== SRE Monitoring Dashboard ===\n');
sre.checkSLO();
sre.alertOnThreshold();
sre.report();
console.log('\nHello World - System operating within acceptable parameters.');
