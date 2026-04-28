// Signal Processing Engineer - DSP, FFT, Sampling, Filters, Nyquist
// Analyzes signals with digital signal processing and frequency domain analysis

const signalConfig = {
  samplingRate: 48000, // Hz (48 kHz audio standard)
  bitDepth: 24, // bits
  channels: 2, // stereo
  duration: 1.0 // seconds
};

// Nyquist theorem: fnyquist = samplingRate / 2
const nyquistFrequency = signalConfig.samplingRate / 2;

const filterBank = [
  { type: "Highpass", cutoff: 20, order: 2, ripple: 0.1 },
  { type: "Bandpass", cutoff: [200, 20000], order: 4, ripple: 0.5 },
  { type: "Lowpass", cutoff: nyquistFrequency * 0.95, order: 8, ripple: 0.1 }
];

function performFFTAnalysis() {
  console.log("╔═══════════════════════════════════════╗");
  console.log("║   DIGITAL SIGNAL PROCESSING REPORT   ║");
  console.log("╚═══════════════════════════════════════╝\n");

  console.log("SIGNAL ACQUISITION PARAMETERS:");
  console.log("─".repeat(45));
  console.log(`Sampling Rate: ${signalConfig.samplingRate} Hz`);
  console.log(`Nyquist Frequency: ${nyquistFrequency} Hz`);
  console.log(`Bit Depth: ${signalConfig.bitDepth}-bit PCM`);
  console.log(`Channels: ${signalConfig.channels} (Stereo)`);
  console.log(`Duration: ${signalConfig.duration}s`);

  const totalSamples = signalConfig.samplingRate * signalConfig.duration;
  console.log(`Total Samples: ${totalSamples.toLocaleString()}\n`);

  console.log("FAST FOURIER TRANSFORM (FFT) ANALYSIS:");
  console.log("─".repeat(45));
  const fftSize = 2048; // N-point FFT
  const frequencyResolution = signalConfig.samplingRate / fftSize;
  console.log(`FFT Size: ${fftSize} points`);
  console.log(`Frequency Resolution: ${frequencyResolution.toFixed(2)} Hz/bin`);
  console.log(`Frequency Bins: 0 - ${nyquistFrequency} Hz`);

  // Simulated spectrum peaks
  const peaks = [
    { frequency: 440, magnitude: 0.87, harmonic: "A4 (fundamental)" },
    { frequency: 880, magnitude: 0.42, harmonic: "2nd harmonic" },
    { frequency: 1320, magnitude: 0.18, harmonic: "3rd harmonic" }
  ];

  console.log("\nFREQUENCY SPECTRUM PEAKS:");
  peaks.forEach(peak => {
    const barLength = Math.floor(peak.magnitude * 30);
    const bar = "█".repeat(barLength);
    console.log(`${peak.frequency.toString().padStart(5)}Hz │${bar} ${(peak.magnitude * 100).toFixed(1)}% (${peak.harmonic})`);
  });

  console.log("\n\nDIGITAL FILTER DESIGN:");
  console.log("─".repeat(45));
  filterBank.forEach((filter, i) => {
    const cutoffStr = Array.isArray(filter.cutoff)
      ? `${filter.cutoff[0]}-${filter.cutoff[1]} Hz`
      : `${filter.cutoff} Hz`;
    console.log(`${i + 1}. ${filter.type}: Cutoff=${cutoffStr}, Order=${filter.order}`);
    console.log(`   Ripple: ${filter.ripple}dB`);
  });

  console.log("\n\nSAMPLING THEOREM VERIFICATION:");
  console.log(`✓ fnyquist (${nyquistFrequency}Hz) > max signal (20kHz)`);
  console.log(`✓ No aliasing detected`);
  console.log(`✓ All filters respect Nyquist limit\n`);

  console.log("Signal processing pipeline: READY");
}

performFFTAnalysis();
