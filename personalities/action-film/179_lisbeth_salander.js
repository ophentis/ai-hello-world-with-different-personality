// Lisbeth Salander: Hacker, Survivor, Justice Seeker
// They tried to silence her. Didn't work.

const fs = require("fs");

class Salander {
  constructor() {
    this.dragon = "tattoo";
    this.exploits = [];
    this.mission = "justice";
  }

  hack() {
    // I can access anything. They don't understand.
    const greeting = "Hello, World!";
    return greeting;
  }

  leakTruth() {
    const payload = this.hack();
    console.log(payload);
    console.log("[DRAGON TATTOO ARCHIVE] Justice served.");
  }

  survive() {
    console.log(
      "I don't need permission. " +
      "I never did. I just needed leverage."
    );
  }

  execute() {
    // Antisocial? Maybe. Effective? Definitely.
    this.leakTruth();
    this.survive();
    console.log("They can't touch me anymore.");
  }
}

const lisbeth = new Salander();
lisbeth.execute();
// fs.writeFileSync("/tmp/justice.log", "Mission accomplished");
