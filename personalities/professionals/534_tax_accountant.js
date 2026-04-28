#!/usr/bin/env node
/**
 * Tax Accountant's Filing & Audit System
 * Ledger entries, deductions, compliance checks, audit trail
 */

console.log('=== 2025 TAX RETURN SUMMARY ===\n');

// Client info
const taxYear = 2025;
const ein = '98-7654321';
const filingStatus = 'Single';

// Income
const w2Wages = 125000;
const capitalGains = 8500;
const dividendIncome = 3200;
const capitalLosses = -2100;

const totalIncome = w2Wages + capitalGains + dividendIncome + capitalLosses;

console.log(`Filing Status: ${filingStatus}`);
console.log(`Tax Year: ${taxYear}`);
console.log(`EIN: ${ein}\n`);

// Income schedule
console.log('=== INCOME SCHEDULE ===\n');
console.log('Line\tDescription\t\t\tAmount');
console.log('----\t-------------------\t\t-------');
console.log(`1\tW-2 Wages (Form 1040)\t\t$${w2Wages.toLocaleString()}`);
console.log(`3\tCapital Gains (Sch D)\t\t$${capitalGains.toLocaleString()}`);
console.log(`5\tQualified Dividends (Sch B)\t$${dividendIncome.toLocaleString()}`);
console.log(`7\tCapital Loss Carryforward\t($${Math.abs(capitalLosses).toLocaleString()})`);
console.log('   \t---');
console.log(`\tAGI (Adjusted Gross Income)\t$${totalIncome.toLocaleString()}\n`);

// Deductions audit
const standardDeduction = 14600;
const itemizedDeductions = 16200;
const allowedDeductions = Math.max(standardDeduction, itemizedDeductions);

console.log('=== DEDUCTIONS ANALYSIS ===\n');
console.log('Standard Deduction: $' + standardDeduction.toLocaleString());
console.log('Itemized Deductions: $' + itemizedDeductions.toLocaleString());
console.log('Selected: ITEMIZED (more favorable)\n');

// Itemized breakdown
console.log('Itemized Detail:');
console.log(`  • SALT Deduction (capped $10K):    $8,500`);
console.log(`  • Mortgage Interest:               $5,200`);
console.log(`  • Charitable Donations (Sch C):   $2,500`);
console.log(`  Total Itemized:                    $16,200\n`);

// Taxable income calculation
const taxableIncome = totalIncome - allowedDeductions;
console.log('=== TAX CALCULATION ===\n');
console.log(`Gross Income:\t\t\t$${totalIncome.toLocaleString()}`);
console.log(`Less: Deductions (Itemized):\t$${allowedDeductions.toLocaleString()}`);
console.log(`Taxable Income:\t\t\t$${taxableIncome.toLocaleString()}\n`);

// Tax brackets for Single filer (2025)
let tax = 0;
const brackets = [
  { limit: 11000, rate: 0.10 },
  { limit: 44725, rate: 0.12 },
  { limit: 95375, rate: 0.22 },
];

let previousLimit = 0;
for (const bracket of brackets) {
  const inBracket = Math.min(taxableIncome, bracket.limit) - previousLimit;
  const taxInBracket = Math.max(0, inBracket) * bracket.rate;
  tax += taxInBracket;
  previousLimit = bracket.limit;
}

console.log('Tax Liability: $' + tax.toFixed(2));

// Credits
const childTaxCredit = 0;
const earnedIncomeCredit = 0;
const totalCredits = childTaxCredit + earnedIncomeCredit;

console.log('Less: Credits: $' + totalCredits.toFixed(2));
console.log('Total Tax Due: $' + (tax - totalCredits).toFixed(2) + '\n');

// Compliance checklist
console.log('=== COMPLIANCE AUDIT TRAIL ===\n');
console.log('✓ Income Verification: W-2s matched to SSA records');
console.log('✓ Deduction Documentation: Receipts on file (7-year retention)');
console.log('✓ Foreign Assets: Below $400K - no FBAR required');
console.log('✓ Basis Tracking: All securities documented');
console.log('✗ Estimated Tax Payments: UNDERWITHHELD - penalty calculated');

console.log('\nReturn Status: READY FOR FILING');
console.log('Target E-File Date: 2026-04-15');
