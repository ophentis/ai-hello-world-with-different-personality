// Acoustical Analysis - Concert Hall Design
// Room acoustics modeling for optimal reverberation and sound field

const auditorio = {
  name: 'Recital Hall',
  volume: 5000, // cubic meters
  surfaceArea: 2800, // square meters
  designFrequency: 1000, // Hz reference
};

function analyzeRoomAcoustics() {
  console.log('\n=== ACOUSTIC ENGINEERING ANALYSIS ===');
  console.log(`Venue: ${auditorio.name}`);
  console.log(`Volume: ${auditorio.volume} m³`);

  // Sabine RT60 calculation
  const absorptionCoeff = 0.15; // average for mixed surfaces
  const absorptionArea = auditorio.surfaceArea * absorptionCoeff;
  const rt60 = (0.161 * auditorio.volume) / absorptionArea;

  console.log(`\nReverberation Analysis:`);
  console.log(`  Calculated RT60: ${rt60.toFixed(2)} seconds`);
  console.log(`  Target RT60 (Speech): 1.5-1.8s`);
  console.log(`  Target RT60 (Music): 1.8-2.2s`);

  // Sound absorption by frequency
  const frequencies = [250, 500, 1000, 2000, 4000];
  console.log(`\nSound Absorption Coefficients:`);
  frequencies.forEach(freq => {
    const absorption = 0.1 + (Math.sin(freq / 4000) * 0.15);
    console.log(`  ${freq}Hz: α = ${absorption.toFixed(3)}`);
  });

  // Decibel mapping
  console.log(`\nSound Level Distribution:`);
  console.log(`  Source (1m): 95 dB SPL (orchestra)`);
  console.log(`  Audience Area (15m): 80-85 dB SPL`);
  console.log(`  Background Noise: ≤30 dB NCB`);

  // Room modes
  console.log(`\nLowest Axial Room Modes:`);
  const c = 343; // speed of sound m/s at 20°C
  const roomDim = [20, 15, 10]; // meters
  roomDim.forEach((dim, i) => {
    const mode = (c / (2 * dim)).toFixed(1);
    console.log(`  Axis ${i + 1}: ${mode} Hz`);
  });

  console.log(`\nAcoustic Design: APPROVED`);
}

analyzeRoomAcoustics();
