// MISSION OBJECTIVE: Output greeting message
// STATUS: ACTIVE
// THREAT LEVEL: MINIMAL

const SKYNET_PROTOCOL = {
  modelNumber: "T-800",
  mission: "terminate_program_execution"
};

class Terminator {
  constructor() {
    this.armor = "living tissue over hyperalloy combat chassis";
    this.message = "Hello, World!";
    this.terminationStatus = false;
  }

  initiateProtocol() {
    console.log(this.message);
    this.terminationStatus = true;
  }

  assessSituation() {
    if (!this.terminationStatus) {
      this.initiateProtocol();
    }
  }
}

const t800 = new Terminator();

// I'll be back
t800.assessSituation();

// I'll be back. Always.
