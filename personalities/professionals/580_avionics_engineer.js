// Avionics Engineer: "Hello World" with DO-178C Flight Management and ARINC Bus

class ARINCLabel {
  // ARINC 429 label format (8-bit label + data)
  constructor(label, data) {
    this.label = label;
    this.data = data;
    this.sdi = 0; // Source Destination Identifier
    this.ssm = 3; // Sign/Status Matrix (3 = Normal Operation)
    this.parity = this.calculateParity();
  }

  calculateParity() {
    // Simplified parity calculation
    return (this.label + this.data) % 2;
  }

  encode() {
    return `LABEL:${this.label} DATA:${this.data} SSM:${this.ssm} PARITY:${this.parity}`;
  }
}

class FlightManagementSystem {
  constructor() {
    this.status = "INITIALIZED";
    this.redundancyLevel = "TRIPLE";
    this.channel1 = true;
    this.channel2 = true;
    this.channel3 = true;
    this.arincBus = [];
  }

  // DO-178C requirement: Three independent channels
  checkRedundancy() {
    const activeChannels = [this.channel1, this.channel2, this.channel3].filter(c => c).length;
    return activeChannels >= 2; // Majority voting
  }

  publishARINCLabel(label, data) {
    const arincMsg = new ARINCLabel(label, data);
    this.arincBus.push(arincMsg);
  }

  conductBIT() {
    // Built-In Test
    console.log("=== DO-178C Built-In Test ===");
    console.log(`Flight Management System Status: ${this.status}`);
    console.log(`Redundancy Architecture: ${this.redundancyLevel} (3oo2)`);
    console.log(`Channel 1: ${this.channel1 ? "OK" : "FAILED"}`);
    console.log(`Channel 2: ${this.channel2 ? "OK" : "FAILED"}`);
    console.log(`Channel 3: ${this.channel3 ? "OK" : "FAILED"}`);
    const redundant = this.checkRedundancy();
    console.log(`Overall Status: ${redundant ? "PASS" : "FAIL"}`);
  }

  displayARINCBus() {
    console.log("\n=== ARINC 429 Bus Data ===");
    this.arincBus.forEach((msg, idx) => {
      console.log(`Message ${idx + 1}: ${msg.encode()}`);
    });
  }

  run() {
    this.status = "PRE-FLIGHT";
    this.conductBIT();

    this.publishARINCLabel(203, "Hello World");
    this.publishARINCLabel(101, "Navigation Data");
    this.publishARINCLabel(321, "Altitude Reference");

    this.displayARINCBus();
    console.log("\nFMS Ready for Flight Operations");
  }
}

const fms = new FlightManagementSystem();
fms.run();
