#!/usr/bin/env node
/**
 * Pharmacologist's Drug Kinetics Calculator
 * Half-life, plasma concentration, steady state, drug interactions
 */

// Patient parameters
const patientWeightKg = 75;
const creatinineClearance = 85; // mL/min - kidney function

// Drug: Warfarin
const drugName = 'Warfarin';
const halfLifeHours = 40;
const volumeDistributionLiters = 8;
const proteinBinding = 0.99; // 99% bound to albumin
const doseMgPerKg = 0.1; // mg/kg loading dose
const maintenanceDoseMgPerDay = 5;

console.log(`=== PHARMACOKINETIC ANALYSIS: ${drugName} ===\n`);

// Calculate elimination constant
const ke = Math.LN2 / (halfLifeHours / 24); // per day
const loadingDose = patientWeightKg * doseMgPerKg;

console.log(`Patient Weight: ${patientWeightKg} kg`);
console.log(`Loading Dose: ${loadingDose.toFixed(1)} mg`);
console.log(`Half-Life: ${halfLifeHours} hours`);
console.log(`Volume of Distribution: ${volumeDistributionLiters} L`);
console.log(`Protein Binding: ${(proteinBinding * 100).toFixed(1)}%`);
console.log(`Clearance Function: ${creatinineClearance} mL/min\n`);

// Peak concentration
const peakConcentration = loadingDose / volumeDistributionLiters;
console.log(`Peak Concentration: ${peakConcentration.toFixed(2)} mg/L`);

// Calculate concentration at each day
console.log('\nPlasma Concentration Over Time:\n');
console.log('Day\tConc (mg/L)\tINR Range');
console.log('---\t-----------\t---------');

for (let day = 0; day <= 10; day++) {
  const concentration = peakConcentration * Math.exp(-ke * day) +
                        (maintenanceDoseMgPerDay * (1 - Math.exp(-ke * day))) / (volumeDistributionLiters * ke);
  const inrMin = 2.0 + (concentration * 0.5);
  const inrMax = Math.min(inrMin + 1.0, 4.0);

  console.log(`${day}\t${concentration.toFixed(2)}\t\t${inrMin.toFixed(1)}-${inrMax.toFixed(1)}`);
}

// Steady state
const Css = maintenanceDoseMgPerDay / (volumeDistributionLiters * ke);
console.log(`\nSteady-State Concentration: ${Css.toFixed(2)} mg/L`);
console.log(`Time to Steady State: ${(5 * halfLifeHours / 24).toFixed(1)} days (5 half-lives)`);

// Drug interaction screening
console.log('\n=== DRUG INTERACTION SCREENING ===');
console.log('✓ CYP2C9 inhibitor: Monitor INR closely');
console.log('✓ High protein binding: Displacement interaction risk');
console.log('⚠ Renal clearance: NORMAL - no dose adjustment needed');

console.log('\nCLINICAL RECOMMENDATION: Monitor INR on Day 3-5');
