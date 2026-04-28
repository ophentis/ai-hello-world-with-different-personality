#!/usr/bin/env node
/**
 * Anesthesiologist's Perioperative Protocol
 * Drug dosing per kg, MAC values, airway management, hemodynamic monitoring
 */

console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║  PERIOPERATIVE ANESTHESIA RECORD                         ║');
console.log('║  Case: Elective Laparoscopic Cholecystectomy             ║');
console.log('╚═══════════════════════════════════════════════════════════╝\n');

// Patient parameters
const patientName = 'J. Smith';
const age = 62;
const weightKg = 82;
const heightCm = 172;
const asa = 'II';
const bmi = (weightKg / ((heightCm / 100) ** 2)).toFixed(1);

console.log(`Patient: ${patientName} | Age: ${age} | Weight: ${weightKg} kg`);
console.log(`Height: ${heightCm} cm | BMI: ${bmi}`);
console.log(`ASA Classification: ${asa} (Mild systemic disease)\n`);

// Pre-operative labs & airway assessment
console.log('=== AIRWAY ASSESSMENT ===\n');
console.log('Mallampati Score: Class II (soft palate visible)');
console.log('Thyromental Distance: 6.8 cm (>6 = favorable)');
console.log('Jaw Protrusion: Normal');
console.log('Neck Range of Motion: Full');
console.log('Predicted Intubation: EASY\n');

// Drug calculations (per kg)
console.log('=== INDUCTION & MAINTENANCE DRUGS (Calculated Doses) ===\n');

// Induction agents
const propofol_mgPerKg = 2.0;
const propofol_mg = weightKg * propofol_mgPerKg;

const rocuronium_mgPerKg = 0.6; // intubating dose
const rocuronium_mg = weightKg * rocuronium_mgPerKg;

const remifentanil_mcgPerKg = 1.0;
const remifentanil_mcg = weightKg * remifentanil_mcgPerKg;

console.log('Induction Phase:');
console.log(`  • Propofol: ${propofol_mgPerKg} mg/kg × ${weightKg} kg = ${propofol_mg.toFixed(0)} mg IV`);
console.log(`  • Rocuronium (intubating): ${rocuronium_mgPerKg} mg/kg × ${weightKg} kg = ${rocuronium_mg.toFixed(0)} mg IV`);
console.log(`  • Remifentanil: ${remifentanil_mcgPerKg} mcg/kg × ${weightKg} kg = ${remifentanil_mcg.toFixed(0)} mcg IV bolus\n`);

// Maintenance anesthetic
const sevoflurane_mac = 2.0; // Minimum Alveolar Concentration (%)
const targetMacAwake = sevoflurane_mac * 0.6; // 60% of MAC for surgery

console.log('Maintenance Phase:');
console.log(`  • Sevoflurane: ${targetMacAwake.toFixed(2)} MAC (target 0.6-1.0 MAC)`);
console.log(`  • Nitrous Oxide: 60% (0.6 × 50% = 0.3 MAC equivalent)`);
console.log(`  • Remifentanil infusion: 0.15 mcg/kg/min continuous`);
console.log(`  • Combined MAC: ${(targetMacAwake + 0.3).toFixed(2)} (adequate for surgery)\n`);

// Monitoring parameters
console.log('=== INTRAOPERATIVE MONITORING ===\n');
console.log('Time\tHR\tBP\t\tEtCO2\tSpO2\tTemp\tMAC\tStatus');
console.log('----\t--\t--\t\t-----\t----\t----\t---\t------');

const monitoring = [
  { time: '10:00', hr: 72, sbp: 128, dbp: 78, etco2: 38, spo2: 99, temp: 37.0, mac: 0.0 },
  { time: '10:05', hr: 68, sbp: 115, dbp: 72, etco2: 36, spo2: 98, temp: 36.8, mac: 0.65 },
  { time: '10:30', hr: 70, sbp: 120, dbp: 75, etco2: 37, spo2: 99, temp: 36.5, mac: 0.68 },
  { time: '10:45', hr: 66, sbp: 118, dbp: 74, etco2: 38, spo2: 99, temp: 36.2, mac: 0.64 },
];

monitoring.forEach(m => {
  console.log(`${m.time}\t${m.hr}\t${m.sbp}/${m.dbp}\t\t${m.etco2}\t${m.spo2}\t${m.temp}\t${m.mac}\tStable`);
});

// Emergence protocol
console.log('\n=== EMERGENCE & RECOVERY PROTOCOL ===\n');
console.log('T-15 min: Taper sevoflurane to 0.5 MAC');
console.log('T-5 min: Discontinue sevoflurane completely');
console.log('T-2 min: Discontinue remifentanil infusion');
console.log('T-0: Allow spontaneous ventilation, confirm adequate resp. effort');
console.log('T+1: Reverse rocuronium with sugammadex (2.0 mg/kg = 164 mg IV STAT)\n');

// Reversal agents
const sugammadex_mgPerKg = 2.0;
const sugammadex_mg = weightKg * sugammadex_mgPerKg;

console.log(`Reversal Agent (Sugammadex): ${sugammadex_mgPerKg} mg/kg × ${weightKg} kg = ${sugammadex_mg.toFixed(0)} mg IV`);
console.log('Post-reversal Assessment:');
console.log('  ✓ Train-of-four > 90% (confirmed)')
console.log('  ✓ Spontaneous ventilation adequate');
console.log('  ✓ Protective airway reflexes present\n');

// Extubation & PACU admission
console.log('Extubation Time: 10:52 (12 minutes after reversal)');
console.log('Sent to PACU with stable vitals');
console.log('Pain control: Acetaminophen 1000 mg scheduled × 4 hours PRN');

console.log('\nCase Duration: 52 minutes | Emergence: Smooth & Uneventful');
