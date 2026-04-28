// SILENT RUNNING PROTOCOL - USS ENTERPRISE SSN-701
// Operation Status: CLASSIFIED
// Sonar Configuration: PASSIVE ONLY (Silent Running Engaged)

const SubmarineCommand = {
  depth: 0,
  sonarActive: false,
  silentRunning: true,
  crew: 140,

  diveSequence: function() {
    console.log('[CAPTAIN] All hands, prepare for dive.');
    console.log('[BALLAST] Opening main vents. Plane rigging.');
    console.log('[SONAR] Going passive. Sonar operator: maintain listening watch.');

    for (let d = 0; d <= 400; d += 100) {
      this.depth = d;
      console.log(`  ...[DEPTH] ${d} feet... [RATE] 2 knots descent...`);
    }

    this.silentRunning = true;
    console.log('[COMMAND] We are now at silent running depth.\n');
  },

  sonarPing: function(message) {
    console.log('[SONAR] Sonar Operator: Detecting acoustic signature...');
    console.log(`[PING] Bearing 270°, Range estimated 5,000 yards.`);
    console.log(`[CLASSIFIED] Message intercept: "${message}"`);
    console.log('[HYDROPHONE] Signal strength: Strong. Bearing: steady.\n');
  },

  surfaceSequence: function() {
    console.log('[CAPTAIN] Surface the boat. Prepare for emergency blow.');
    console.log('[BALLAST] Venting main ballast to air.');
    for (let d = 400; d >= 0; d -= 100) {
      this.depth = d;
      console.log(`  ...[DEPTH] ${d} feet...`);
    }
    console.log('[BRIDGE] Broaching surface. Periscope up. All clear, surface.');
    console.log('[CAPTAIN] Welcome home, crew. Mission accomplished.');
  }
};

console.log('=== SILENT RUNNING SUBMARINE OPERATIONS ===\n');
SubmarineCommand.diveSequence();
SubmarineCommand.sonarPing('Hello World');
SubmarineCommand.surfaceSequence();
