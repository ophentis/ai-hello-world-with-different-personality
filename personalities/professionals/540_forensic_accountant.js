#!/usr/bin/env node
/**
 * Forensic Accountant's Fraud Investigation System
 * Money trail reconstruction, anomaly detection, Benford's Law, audit flags
 */

console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║  FORENSIC ACCOUNTING INVESTIGATION REPORT                ║');
console.log('║  Case: ABC Corp Expense Fraud Analysis                  ║');
console.log('╚═══════════════════════════════════════════════════════════╝\n');

// Investigation scope
const companyName = 'ABC Corporation Inc.';
const caseNumber = 'FA-2026-1847';
const investigationPeriod = '2023-01-01 to 2025-12-31';
const suspectedAmount = 487500;

console.log(`Company: ${companyName}`);
console.log(`Case Number: ${caseNumber}`);
console.log(`Period: ${investigationPeriod}`);
console.log(`Suspected Fraud Amount: $${suspectedAmount.toLocaleString()}\n`);

// Money trail analysis
console.log('=== TRANSACTION MONEY TRAIL (High-Risk Vendors) ===\n');

const transactions = [
  { vendor: 'TechSolutions LLC', date: '2024-03-15', amount: 45000, description: 'Cloud Services' },
  { vendor: 'TechSolutions LLC', date: '2024-03-22', amount: 45000, description: 'Maintenance' },
  { vendor: 'TechSolutions LLC', date: '2024-04-01', amount: 45000, description: 'Support' },
  { vendor: 'Global Consulting', date: '2024-05-10', amount: 38500, description: 'Advisory' },
  { vendor: 'Global Consulting', date: '2024-06-12', amount: 38500, description: 'Strategy' },
  { vendor: 'Apex Ventures', date: '2024-07-20', amount: 275500, description: 'Partnership Fee' },
];

console.log('Vendor\t\t\tDate\t\tAmount\t\tDescription');
console.log('------\t\t\t----\t\t------\t\t-----------');
transactions.forEach(t => {
  console.log(`${t.vendor.padEnd(20)}\t${t.date}\t$${t.amount.toLocaleString()}\t${t.description}`);
});

// Beneficial ownership research
console.log('\n=== BENEFICIAL OWNERSHIP INVESTIGATION ===\n');
console.log('TechSolutions LLC:');
console.log('  → Registered Agent: David Chen (CFO\'s cousin)');
console.log('  → Address: 1847 Offshore Lane (shell location)');
console.log('  → Bank: Cayman Islands account (high risk jurisdiction)\n');

console.log('Global Consulting:');
console.log('  → Owner: Maria Santos (ex-employee, terminated 2023)');
console.log('  → Registered 1 month after her termination');
console.log('  → No verifiable services provided\n');

console.log('Apex Ventures:');
console.log('  → Beneficial Owner: Unknown (nominee corp)');
console.log('  → Delaware registered (jurisdiction of secrecy)');
console.log('  → Single $275.5K transaction - NO OTHER ACTIVITY\n');

// Benford's Law analysis
console.log('=== BENFORD\'S LAW ANOMALY DETECTION ===\n');

const benford = {
  digit: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  expectedPercent: [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6],
  observedPercent: [8.2, 12.1, 15.4, 18.7, 19.2, 14.1, 7.8, 3.2, 1.3],
};

console.log('First Digit Analysis (Expense Ledger - 847 transactions):\n');
console.log('Digit\tBenford Expected\tObserved\tVariance\tFlag');
console.log('-----\t----------------\t--------\t--------\t----');

let chiSquared = 0;
for (let i = 0; i < 9; i++) {
  const variance = (benford.observedPercent[i] - benford.expectedPercent[i]).toFixed(1);
  const flag = Math.abs(benford.observedPercent[i] - benford.expectedPercent[i]) > 5 ? '⚠️ ANOMALY' : '✓';
  console.log(`${benford.digit[i]}\t${benford.expectedPercent[i].toFixed(1)}%\t\t${benford.observedPercent[i].toFixed(1)}%\t${variance}\t${flag}`);

  const expected = (benford.expectedPercent[i] / 100) * 847;
  const observed = (benford.observedPercent[i] / 100) * 847;
  chiSquared += ((observed - expected) ** 2) / expected;
}

console.log(`\nChi-Squared Statistic: ${chiSquared.toFixed(2)} (Critical value: 15.51 at α=0.05)`);
console.log('Result: SIGNIFICANT DEVIATION - Consistent with fraud pattern\n');

// Audit trail red flags
console.log('=== AUDIT FLAGS & ANOMALIES ===\n');

const flags = [
  { flag: 'Round dollar amounts', severity: 'HIGH', count: 6, explanation: 'All TechSolutions/Global invoices = exactly $45K and $38.5K' },
  { flag: 'Same day payments', severity: 'HIGH', count: 4, explanation: 'Invoice and payment dated same day (unusual)' },
  { flag: 'Sequential transactions', severity: 'HIGH', count: 3, explanation: 'Identical amounts within 7-day intervals' },
  { flag: 'Missing supporting docs', severity: 'CRITICAL', count: 1, explanation: 'Apex Ventures $275.5K: NO invoices, POs, or contracts' },
  { flag: 'Approver overrides', severity: 'HIGH', count: 5, explanation: 'All flagged by automated controls; CFO force-approved' },
  { flag: 'Offshore jurisdiction', severity: 'MEDIUM', count: 2, explanation: 'Payment accounts in high-risk tax havens' },
];

flags.forEach(f => {
  console.log(`[${f.severity}] ${f.flag}`);
  console.log(`         Count: ${f.count} | ${f.explanation}\n`);
});

// Conclusion
console.log('=== INVESTIGATIVE CONCLUSION ===\n');
console.log('FINDING: Evidence of systematic fraud detected');
console.log(`Amount: $${suspectedAmount.toLocaleString()} appears to be diverted via shell entities`);
console.log(`Method: Fictitious invoicing → offshore accounts → beneficial owner unknown`);
console.log(`Perpetrators: CFO (primary), Accounts Payable Manager (secondary)\n`);

console.log('RECOMMENDATION: Refer to law enforcement for criminal investigation');
console.log('Civil Recovery Potential: $487,500 + treble damages + attorney fees');
console.log('Timeline to Trial: 18-24 months (civil); 3-5 years (criminal)\n');

console.log('Report Prepared: 2026-04-28');
console.log('Certified Fraud Examiner: J. Patterson, CFE #47821');
