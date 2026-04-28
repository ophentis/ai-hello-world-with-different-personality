#!/usr/bin/env node
/**
 * NTSB Air Crash Investigator - Accident Analysis System
 * Black box data reconstruction, wreckage forensics, probable cause determination
 */

console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║  NATIONAL TRANSPORTATION SAFETY BOARD (NTSB)             ║');
console.log('║  Accident Investigation Report - Preliminary Data       ║');
console.log('╚═══════════════════════════════════════════════════════════╝\n');

// Aircraft data
const aircraftType = 'Boeing 737-800';
const registration = 'N12345';
const flightNumber = 'AA456';
const departureAirport = 'JFK';
const destinationAirport = 'LAX';

console.log(`Aircraft: ${aircraftType} (Registration: ${registration})`);
console.log(`Flight: ${flightNumber} (${departureAirport} → ${destinationAirport})`);
console.log(`Accident Date: 2026-04-28 14:32 UTC`);
console.log(`Location: Lat 40.8826°N, Lon 73.8765°W`);
console.log(`Fatalities: 147 | Serious Injuries: 12 | Minor Injuries: 8\n`);

// Flight data recorder parameters
console.log('=== FLIGHT DATA RECORDER ANALYSIS ===\n');
console.log('Time (UTC)\tAltitude (ft)\tVS (fpm)\tIAS (kt)\tPitch (°)\tRoll (°)');
console.log('----------\t-----------\t-------\t-------\t-------\t-------');

const flightData = [
  { time: '14:25:00', alt: 35000, vs: 0, ias: 470, pitch: 1.5, roll: 0.2 },
  { time: '14:26:30', alt: 34800, vs: -200, ias: 480, pitch: 2.1, roll: 0.8 },
  { time: '14:27:45', alt: 33200, vs: -1800, ias: 410, pitch: -8.3, roll: 15.2 },
  { time: '14:28:30', alt: 28500, vs: -4200, ias: 320, pitch: -22.1, roll: 42.5 },
  { time: '14:29:15', alt: 12000, vs: -3800, ias: 250, pitch: -18.5, roll: 68.2 },
];

flightData.forEach(row => {
  console.log(`${row.time}\t${row.alt.toString().padStart(5)}\t\t${row.vs.toString().padStart(5)}\t${row.ias}\t${row.pitch.toFixed(1)}\t${row.roll.toFixed(1)}`);
});

// Cockpit voice recorder
console.log('\n=== COCKPIT VOICE RECORDER (TRANSCRIPT) ===\n');
console.log('14:25:08 CAPTAIN: "Traffic advisory, two o\'clock, twelve miles"');
console.log('14:25:15 F/O: "Got him in sight"');
console.log('14:27:32 CAPTAIN: "Autopilot disconnect... unusual control input"');
console.log('14:27:45 F/O: "Aircraft not responding as expected"');
console.log('14:28:12 CAPTAIN: "Emergency descent, mayday, mayday"');
console.log('14:28:45 [SOUND: Stall warning (continuous tone)]');
console.log('14:29:22 [SOUND: Impact with terrain]\n');

// Wreckage analysis
console.log('=== WRECKAGE & FORENSIC FINDINGS ===\n');
console.log('Primary Debris Field: 1.2 square miles');
console.log('Maximum Impact Crater: 65 feet diameter, 18 feet deep');
console.log('\nStructural Condition:');
console.log('  • Fuselage: Severely fragmented; maximum piece 12 feet');
console.log('  • Wings: Found 0.3 nm from main wreckage');
console.log('  • Engines: N1 fan blade fractures indicate flame-out');
console.log('  • Flight Control Surfaces: Excessive damage, unable to determine position\n');

// Maintenance records
console.log('=== MAINTENANCE HISTORY (Last 30 Days) ===\n');
console.log('2026-04-15: 400-hour inspection - COMPLETE (no issues noted)');
console.log('2026-04-18: Flight control rigging check - DEFER (not critical)');
console.log('2026-04-20: Autopilot servo calibration - DEFER\n');

// Preliminary findings
console.log('=== PRELIMINARY FINDINGS ===\n');
console.log('1. Aircraft departed level flight at 14:27:30 UTC');
console.log('2. Unusual pitch and roll inputs in FDR data suggest loss of control');
console.log('3. Stall warning sequence detected at 14:28:40');
console.log('4. Descent from 33,200 ft to terrain in 1 minute 45 seconds');
console.log('5. Deferred maintenance item (autopilot servo) under investigation\n');

// Probable cause framework
console.log('=== PROBABLE CAUSE ANALYSIS (Draft) ===\n');
console.log('Contributing Factors:');
console.log('  ✗ Pilot error (primary focus - inappropriate flight control inputs)');
console.log('  ~ Autopilot failure (deferred maintenance - insufficient evidence)');
console.log('  ~ Weather (clear conditions - ruled out)');
console.log('  ~ Mechanical failure (ongoing inspection)\n');

console.log('Investigation Status: ONGOING - Final report expected 18 months');
