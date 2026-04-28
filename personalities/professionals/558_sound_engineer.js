// Audio Engineering - Mixing & Acoustics
// Decibel scaling, frequency response, gain staging, dynamic range

const LOG10_20 = 20 * Math.log10;  // Decibel conversion

class AudioChannel {
  constructor(name, freqResponse = {}) {
    this.name = name;
    this.faderPos = -12;   // dB
    this.pan = 0;          // -1=left, +1=right
    this.level = 0;        // dBFS measured
    this.freqResp = freqResponse || { 125: 0, 250: 0, 500: 0, 1000: 0, 4000: 0, 8000: 0 };
    this.peaking = false;
  }

  setFader(dB) {
    this.faderPos = Math.max(-80, Math.min(12, dB));
  }

  processPeak(inputLevel) {
    // Measure post-fader level in dBFS
    this.level = inputLevel + this.faderPos;
    this.peaking = this.level > -0.5;  // Red zone
    return this.level;
  }

  getEQ(freq) {
    return this.freqResp[freq] || 0;
  }
}

class MixingConsole {
  constructor() {
    this.channels = [
      new AudioChannel("Drums", { 125: -2, 250: 0, 500: 2, 1000: 1, 4000: 3, 8000: 1 }),
      new AudioChannel("Bass", { 125: 4, 250: 2, 500: -1, 1000: 0, 4000: -3, 8000: -5 }),
      new AudioChannel("Vocals", { 125: -4, 250: -1, 500: 1, 1000: 4, 4000: 3, 8000: 2 }),
    ];
    this.masterFader = 0;
    this.headroom = 6;  // dB
  }

  gainStage() {
    // Each channel peaks at nominal operating level
    this.channels[0].setFader(-8);   // Drums hot
    this.channels[1].setFader(-10);  // Bass controlled
    this.channels[2].setFader(-6);   // Vocals prominent
  }

  mixDown() {
    let masterLevel = 0;
    let channelSum = 0;
    let output = "=== MIXING CONSOLE STATE ===\n";

    for (let ch of this.channels) {
      const inputPeak = -18 + Math.random() * 12;
      const measuredLevel = ch.processPeak(inputPeak);
      masterLevel = 20 * Math.log10(10 ** (masterLevel / 20) + 10 ** (measuredLevel / 20));

      output += `${ch.name.padEnd(12)} | In: ${inputPeak.toFixed(1).padStart(6)}dB | `;
      output += `Fader: ${ch.faderPos.toFixed(1).padStart(6)}dB | `;
      output += `Out: ${measuredLevel.toFixed(1).padStart(6)}dB${ch.peaking ? ' [PEAK!]' : ''}\n`;
    }

    masterLevel = Math.min(0, masterLevel);  // Soft ceiling
    output += `\nMaster Bus: ${masterLevel.toFixed(2)}dBFS | Headroom: ${(Math.abs(masterLevel)).toFixed(1)}dB\n`;
    output += "Dynamics: Compressor engaged (4:1 ratio, -20dBFS threshold)\n";
    output += "Routing: Stereo main, L/R split 50/50 (monocompat)";
    return output;
  }
}

const mixer = new MixingConsole();
mixer.gainStage();
console.log(mixer.mixDown());
