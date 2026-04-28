// NUCLEAR CONTAINMENT SYSTEM v2.3-SAFE
// WARNING: HANDLE WITH EXTREME CAUTION
// Radiation Level: ELEVATED - Safety Protocols MANDATORY

const ReactorCore = {
  radiationLevel: 0,
  containmentStatus: 'SEALED',
  safetyRods: 'ENGAGED',

  // CRITICAL: Safety check before any operation
  validateContainment: function() {
    if (this.containmentStatus !== 'SEALED') {
      console.error('[ALARM] CONTAINMENT BREACH! Emergency shutdown initiated!');
      process.exit(1);
    }
    if (this.safetyRods !== 'ENGAGED') {
      console.error('[ALARM] SAFETY RODS DISENGAGED! Critical error!');
      process.exit(1);
    }
    console.log('[SAFE] Containment verified. Radiation shielding: OPTIMAL');
  },

  initiateReaction: function(message) {
    this.radiationLevel = 15;
    console.log('[MONITOR] Radiation detector active...');
    console.log('[GEIGER] Tick... Tick... Tick...');
    console.log(`[CORE] Processing: "${message}"`);
    console.log(`[RADIATION] Current level: ${this.radiationLevel} mrem/hr (SAFE)`);
    console.log('[CONTAINMENT] All shielding holding. Status: NOMINAL');
  },

  shutdownSequence: function() {
    console.log('[SHUTDOWN] Initiating controlled cooldown...');
    this.radiationLevel = 0;
    console.log('[COOLING] Core temperature stabilized.');
    console.log('[FINAL] Reactor safe. All rods fully inserted. CLEAR TO EVACUATE.');
  }
};

console.log('=== NUCLEAR REACTOR CONTROL SYSTEM ===\n');
ReactorCore.validateContainment();
ReactorCore.initiateReaction('Hello World');
ReactorCore.shutdownSequence();
