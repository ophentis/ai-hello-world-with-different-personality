#!/usr/bin/env node
/**
 * Emergency Room Physician - Triage & Clinical Decision Support
 * STAT orders, vital signs monitoring, differential diagnosis
 */

console.log('╔══════════════════════════════════════════════════════════╗');
console.log('║  EMERGENCY DEPARTMENT - PATIENT ASSESSMENT             ║');
console.log('║  Chief Complaint: Chest Pain with Dyspnea              ║');
console.log('╚══════════════════════════════════════════════════════════╝\n');

// Patient demographics
const patientMRN = 'E-2026-847623';
const age = 58;
const sex = 'M';
const riskFactors = ['HTN', 'Hyperlipidemia', 'Smoking (30 pk-yr)'];

console.log(`MRN: ${patientMRN} | Age: ${age}y/o ${sex}`);
console.log(`Risk Factors: ${riskFactors.join(', ')}\n`);

// Vital signs trending
console.log('=== VITAL SIGNS MONITORING (Real-time) ===\n');
console.log('Time\tHR\tBP\t\tRR\tSPO2\tTemp\tStatus');
console.log('----\t--\t--\t\t--\t----\t----\t------');

const vitalSigns = [
  { time: '14:32', hr: 108, sbp: 168, dbp: 98, rr: 22, spo2: 94, temp: 98.6 },
  { time: '14:37', hr: 115, sbp: 175, dbp: 102, rr: 24, spo2: 92, temp: 98.8 },
  { time: '14:42', hr: 122, sbp: 182, dbp: 105, rr: 26, spo2: 89, temp: 99.1 },
];

vitalSigns.forEach(v => {
  const alert = v.spo2 < 90 ? ' ⚠️ CRITICAL' : '';
  console.log(`${v.time}\t${v.hr}\t${v.sbp}/${v.dbp}\t\t${v.rr}\t${v.spo2}\t${v.temp}${alert}`);
});

// Clinical assessment
console.log('\n=== PHYSICAL EXAMINATION ===\n');
console.log('Appearance: Diaphoretic, anxious, in distress');
console.log('Heart: Tachycardic, regular rhythm, no murmurs');
console.log('Lungs: Diminished bases bilaterally, crackles present');
console.log('Extremities: Cool, pale, 2+ edema ankles\n');

// STAT orders issued
console.log('=== STAT ORDERS (IMMEDIATE) ===\n');

const statOrders = [
  { order: '12-lead ECG', priority: 'STAT', triage: 'ACS protocol' },
  { order: 'Troponin I, serial', priority: 'STAT', triage: 'MI rule-out' },
  { order: 'BNP (B-type Natriuretic Peptide)', priority: 'STAT', triage: 'CHF assessment' },
  { order: 'CBC, CMP, D-dimer', priority: 'STAT', triage: 'PE/sepsis screen' },
  { order: 'Lactate level', priority: 'STAT', triage: 'Tissue perfusion' },
  { order: 'Portable CXR', priority: 'STAT', triage: 'Pulmonary imaging' },
];

statOrders.forEach(o => {
  console.log(`✓ ${o.order.padEnd(30)} [${o.priority}] → ${o.triage}`);
});

// Differential diagnosis ranking
console.log('\n=== DIFFERENTIAL DIAGNOSIS (Ranked) ===\n');
console.log('Likelihood\tDiagnosis\t\tKey Findings\t\t\tAction');
console.log('---------\t---------\t\t----------\t\t\t------');
console.log('HIGH\t\tAcute MI\t\tCP, dyspnea, diaphoresis → ECG STAT, cardiology consult');
console.log('HIGH\t\tAcute CHF\t\tCrackles, edema, BNP ↑ → Diuretic STAT (Lasix)');
console.log('MODERATE\tPulmonary Embolism\tDyspnea, tachycardia, ↓SPO2 → D-dimer, CTA chest');
console.log('MODERATE\tHypertensive Crisis\tBP 182/105, CP → Monitor, consider labetalol');
console.log('LOW\t\tPneumonia\t\tCXR findings, fever → Blood cultures, antibiotics\n');

// Immediate interventions
console.log('=== IMMEDIATE INTERVENTIONS ===\n');
console.log('□ High-flow O2 (target SPO2 >94%)');
console.log('✓ Continuous pulse oximetry monitoring');
console.log('✓ Continuous cardiac monitoring (12-lead done)');
console.log('□ IV access × 2 (large bore for potential intervention)');
console.log('□ Aspirin 325 mg PO (if no contraindications) - PENDING ECG');
console.log('□ Nitroglycerin SL 0.4 mg (reassess in 5 min) - PENDING ECG');

// Disposition
console.log('\n=== DISPOSITION ===\n');
console.log('Triage Level: 2 (EMERGENT)');
console.log('Assigned Area: Chest Pain Observation Unit');
console.log('Monitoring: Continuous telemetry × 24 hours minimum');
console.log('Cardiology: Notified - Standby for cath lab readiness');

console.log('\nNext Reassessment: 5 minutes (post-intervention)');
