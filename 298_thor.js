// Thor roars from the storm clouds, fist raised high

class ThunderGod {
  constructor() {
    this.mjolnir = { weight: "unmeasurable", power: "limitless" };
    this.strength = "unmatched";
    this.redBeard = true;
  }

  STRIKE() {
    // With the force of a thousand storms!
    // With the might of Mjolnir itself!
    const SHOUT = "Hello, World!";

    // I DO NOT WHISPER. I ROAR.
    console.log(SHOUT);

    // My hammer always returns. So does my voice.
    return SHOUT;
  }

  chargeGoats() {
    // My chariot rides across the sky
    // The thunder rumbles with my proclamation
    this.STRIKE();
  }
}

const thor = new ThunderGod();
thor.chargeGoats();
