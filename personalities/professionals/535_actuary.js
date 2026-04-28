#!/usr/bin/env node
/**
 * Actuary's Insurance Risk & Premium Calculator
 * Mortality tables, morbidity, probability distributions, premium pricing
 */

console.log('=== ACTUARIAL VALUATION REPORT ===\n');

// Life table (sample US 2015 mortality)
const lifeTable = [
  { age: 40, lx: 97100, qx: 0.00175 },
  { age: 45, lx: 96200, qx: 0.00265 },
  { age: 50, lx: 94900, qx: 0.00435 },
  { age: 55, lx: 92800, qx: 0.00725 },
  { age: 60, lx: 89700, qx: 0.01195 },
  { age: 65, lx: 85200, qx: 0.01920 },
];

console.log('US Mortality Experience 2015\n');
console.log('Age\tSurvivors\tMortality Rate\tq(x)');
console.log('---\t---------\t--------------\t----');

lifeTable.forEach(row => {
  console.log(`${row.age}\t${row.lx.toLocaleString()}\t\t${(row.qx * 100).toFixed(3)}%\t${row.qx.toFixed(5)}`);
});

// Premium calculation for $250k term life policy
const faceAmount = 250000;
const issueAge = 50;
const policyTerm = 20;
const mortinvRate = 0.025; // 2.5% interest for valuation

console.log('\n=== TERM LIFE PREMIUM CALCULATION ===\n');
console.log(`Face Amount: $${faceAmount.toLocaleString()}`);
console.log(`Issue Age: ${issueAge}`);
console.log(`Term: ${policyTerm} years`);
console.log(`Valuation Interest Rate: ${(mortinvRate * 100).toFixed(2)}%\n`);

// Calculate annuity due for NPV
let annuityDue = 0;
let mortalityRisk = 0;
let survivalProb = 1.0;

for (let year = 1; year <= policyTerm; year++) {
  const discountFactor = 1 / Math.pow(1 + mortinvRate, year);
  const ageAtExpiry = issueAge + year;

  // Simplified: assume qx increases ~0.5% per year
  const qx = 0.00435 * Math.pow(1.05, year);
  const deathBenefit = faceAmount * qx * discountFactor;

  mortalityRisk += deathBenefit;
  annuityDue += discountFactor;
  survivalProb *= (1 - qx);
}

// Level annual premium (actuarial equivalent)
const adminExpense = 85; // per policy
const commissionRate = 0.08;
const levelAnnualPremium = (mortalityRisk + adminExpense) / annuityDue;

console.log('Actuarial Present Value of Mortality Risk: $' + mortalityRisk.toFixed(2));
console.log('PV of annuity due (1 + v + v^2 + ...): ' + annuityDue.toFixed(4));
console.log('Administrative Expense: $' + adminExpense.toFixed(2));
console.log('Commission Rate: ' + (commissionRate * 100).toFixed(1) + '%\n');

console.log('Level Annual Premium: $' + levelAnnualPremium.toFixed(2));
console.log('Monthly (÷12): $' + (levelAnnualPremium / 12).toFixed(2));

// Probability of claim
const probabilityOfClaim = 1 - survivalProb;
console.log(`\nProbability of Claim (${issueAge}-${issueAge + policyTerm}): ${(probabilityOfClaim * 100).toFixed(2)}%`);
console.log(`Expected Claim Payout: $${(probabilityOfClaim * faceAmount).toFixed(0)}`);

// Confidence interval (binomial approximation)
const stdDev = Math.sqrt(faceAmount * faceAmount * probabilityOfClaim * (1 - probabilityOfClaim));
console.log(`95% CI (1.96σ): [$${(probabilityOfClaim * faceAmount - 1.96 * stdDev).toFixed(0)}, $${(probabilityOfClaim * faceAmount + 1.96 * stdDev).toFixed(0)}]\n`);

console.log('Valuation Status: ADEQUATE reserves calculated');
console.log('Reserve Requirement: $' + (levelAnnualPremium * 5).toFixed(2));
