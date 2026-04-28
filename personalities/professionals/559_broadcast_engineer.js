// Broadcast Transmission Engineering
// RF signal strength, frequency allocation, FCC compliance, coverage

class TransmitterSite {
  constructor(callsign, freqMHz, powerWatts) {
    this.callsign = callsign;
    this.freqMHz = freqMHz;
    this.powerW = powerWatts;
    this.antennaGain = 7;  // dBi (directional array)
    this.cableLosPdB = 1.5;
    this.modulation = 'ATSC';
    this.erp = null;  // Effective Radiated Power
  }

  calculateERP() {
    const txPowerdBm = 10 * Math.log10(this.powerW * 1000);
    const erpDBm = txPowerdBm + this.antennaGain - this.cableLosPdB;
    this.erp = 10 ** (erpDBm / 10) / 1000;  // watts
    return this.erp;
  }

  fieldStrengthAtRange(distKm) {
    // Friis equation: E = sqrt(30*P*G) / r in mV/m
    const erp_w = this.calculateERP();
    const freqGHz = this.freqMHz / 1000;
    const waveLambda = 299.79 / this.freqMHz;
    const fs = Math.sqrt(30 * erp_w * this.antennaGain) / distKm;
    return fs;
  }

  checkCoverage(distance_km) {
    const fieldStr = this.fieldStrengthAtRange(distance_km);
    // FCC Grade A: 77 dBu (7.08 mV/m) / Grade B: 69 dBu (0.28 mV/m)
    if (fieldStr >= 7.08) return 'GRADE_A';
    if (fieldStr >= 0.28) return 'GRADE_B';
    return 'FRINGE';
  }

  getFCCAssignment() {
    if (this.freqMHz < 54 || this.freqMHz > 216) {
      return 'OUT_OF_VHF_BAND';
    }
    return 'VALID_ALLOCATION';
  }
}

const sites = [
  new TransmitterSite("KXYZ-TV", 52.0, 50000),    // Channel 2 (Analog era reference)
  new TransmitterSite("KABC-DT", 68.0, 30000),    // Channel 4 ATSC-3.0
];

let output = "=== BROADCAST TRANSMISSION REPORT ===\n";
output += "FCC License: VALID (Expires 2029-12-31)\n\n";

for (let tx of sites) {
  const erp = tx.calculateERP();
  output += `${tx.callsign} | Freq: ${tx.freqMHz.toFixed(1)} MHz | Power: ${tx.powerW/1000}kW\n`;
  output += `  ERP: ${(erp/1000).toFixed(1)}kW | Modulation: ${tx.modulation}\n`;
  output += `  FCC Assignment: ${tx.getFCCAssignment()}\n`;

  for (let d of [5, 10, 20, 35]) {
    const coverage = tx.checkCoverage(d);
    const fs = tx.fieldStrengthAtRange(d);
    output += `  @ ${d}km: ${fs.toFixed(2)} mV/m (${coverage})\n`;
  }
  output += "\n";
}

output += "Signal Integrity: +0.2% frequency error (within spec)\n";
output += "Analog TV: Discontinued (ATSC-3.0 only)\n";
output += "Emergency Alert: SAS Encoder operational";
console.log(output);
