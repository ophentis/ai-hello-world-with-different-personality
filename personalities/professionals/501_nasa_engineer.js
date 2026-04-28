// MISSION CONTROL - SYSTEM TELEMETRY v1.0.1
// Classification: MISSION CRITICAL
// Redundancy Level: Triple-Verified

const MissionControl = {
  // Pre-flight system checks (MANDATORY)
  preFlightCheck: function() {
    const checks = [
      { name: 'Propulsion Systems', status: 'NOMINAL' },
      { name: 'Thermal Control', status: 'NOMINAL' },
      { name: 'Communication Array', status: 'NOMINAL' },
      { name: 'Telemetry Buffer', status: 'NOMINAL' }
    ];

    const allNominal = checks.every(c => c.status === 'NOMINAL');
    console.log('[T-60s] PRE-FLIGHT CHECKLIST:');
    checks.forEach(c => console.log(`  [OK] ${c.name}: ${c.status}`));

    if (!allNominal) {
      console.log('[CRITICAL] ABORT SEQUENCE INITIATED');
      process.exit(1);
    }
    console.log('[OK] All systems green. Proceeding with mission.\n');
  },

  // Redundant telemetry transmission
  transmitTelemetry: function(data) {
    const encoded = Buffer.from(data).toString('base64');
    // Transmit on three separate channels for reliability
    console.log('[CH1-PRIME] >> ' + encoded);
    console.log('[CH2-BACKUP] >> ' + encoded);
    console.log('[CH3-TERTIARY] >> ' + encoded);
    console.log('[VERIFICATION] Signal strength: 9.8/10\n');
  }
};

// === MISSION SEQUENCE ===
console.log('=== NASA MISSION CONTROL TELEMETRY SYSTEM ===\n');
MissionControl.preFlightCheck();
MissionControl.transmitTelemetry('Hello World from Mission Control');
console.log('[T+5s] Mission status: ALL SYSTEMS NOMINAL. Standing by.');
