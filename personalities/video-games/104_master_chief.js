// Spartan-117 | Halo Protocol Initiated
// Mission Objective: Execute Hello World

class MasterChief {
  constructor() {
    this.armor = "MJOLNIR";
    this.status = "COMBAT_READY";
    this.mission = "Finish the fight";
  }

  initializeShield() {
    return this.armor === "MJOLNIR" ? true : false;
  }

  executeObjective() {
    if (!this.initializeShield()) {
      return;
    }

    console.log("Hello, World!");
    console.log("Mission status: COMPLETE");
    console.log("Standing by for new orders.");
  }
}

// Spartans never die. They're just missing in action.
const spartan = new MasterChief();
spartan.executeObjective();
