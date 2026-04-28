#!/usr/bin/env node
/**
 * Epidemiologist's Disease Surveillance System
 * Tracking R0, generation time, and outbreak dynamics
 */

// Basic reproduction number (R0) - average secondary cases per infected
const R0 = 2.5;

// Generation time in days
const generationTime = 5;

// Initial case count
let casesDay0 = 1;

// Contact tracing efficacy
const tracingRate = 0.65;

// Calculate exponential growth curve
console.log('=== OUTBREAK SURVEILLANCE REPORT ===\n');
console.log(`Basic Reproduction Number (R0): ${R0}`);
console.log(`Generation Time: ${generationTime} days\n`);
console.log('Projected Case Trajectory (Exponential Model):\n');

let cumulativeCases = 0;
console.log('Day\tProjected Cases\tNew Cases');
console.log('---\t---------------\t---------');

for (let day = 0; day <= 30; day += 5) {
  const projectedCases = Math.round(casesDay0 * Math.pow(R0, day / generationTime));
  const newCases = day === 0 ? casesDay0 : Math.round(projectedCases - cumulativeCases);
  cumulativeCases = projectedCases;

  console.log(`${day}\t${projectedCases}\t\t${newCases}`);
}

// Contact tracing capacity
console.log('\n=== CONTACT TRACING ANALYSIS ===\n');
const contactsPerCase = 12;
const casesDay10 = Math.round(casesDay0 * Math.pow(R0, 10 / generationTime));
const contactsIdentified = Math.round(casesDay10 * contactsPerCase * tracingRate);

console.log(`Secondary contacts per case: ${contactsPerCase}`);
console.log(`Expected cases on Day 10: ${casesDay10}`);
console.log(`Contacts traced (${Math.round(tracingRate * 100)}% efficiency): ${contactsIdentified}`);

// Doubling time
const doublingTime = (generationTime * Math.log(2)) / Math.log(R0);
console.log(`\nDoubling Time: ${doublingTime.toFixed(2)} days`);

console.log('\nStatus: SURVEILLANCE ACTIVE');
