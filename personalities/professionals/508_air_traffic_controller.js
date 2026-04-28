// AIR TRAFFIC CONTROL TOWER - TOWER FREQ 118.5
// Sector: Approach Control Vector
// Traffic Load: MODERATE

const AirTrafficControl = {
  activeFlight: null,
  nextCallsign: null,

  vectorInbound: function() {
    console.log('[ATC] Good morning. This is Center on 118.5.');
    console.log('[ATC] We have traffic inbound. Standby for vectors.\n');
  },

  radarContact: function() {
    console.log('[ATC] Radar contact. Say your callsign and altitude.');
    console.log('[PILOT] Center, this is "Hello World" at flight level 350.');
    console.log('[ATC] Hello World, welcome to our sector. Roger, FL350.\n');
  },

  issueClearing: function() {
    console.log('[ATC] Hello World, you are cleared to proceed.');
    console.log('[ATC] Maintain current altitude and heading.');
    console.log('[ATC] Turn left heading 270. Descend and maintain 3000 feet.');
    console.log('[PILOT] Left 270, descend 3000, Hello World.\n');
  },

  sequenceApproach: function() {
    console.log('[ATC] Hello World, approach control. Expect ILS 28 Left.');
    console.log('[ATC] Current wind: 260 at 12 gusts 18. Visibility: 10 miles.');
    console.log('[PILOT] Roger, ILS 28 Left. Hello World.\n');
  },

  clearForLanding: function() {
    console.log('[ATC] Hello World, you are number one for landing.');
    console.log('[ATC] Clear for landing runway 28 Left.');
    console.log('[PILOT] Clear for landing, 28 Left. Hello World, going around.');
    console.log('[ATC] Thank you. Good day.\n');
  }
};

console.log('=== AIR TRAFFIC CONTROL TOWER ===\n');
AirTrafficControl.vectorInbound();
AirTrafficControl.radarContact();
AirTrafficControl.issueClearing();
AirTrafficControl.sequenceApproach();
AirTrafficControl.clearForLanding();
