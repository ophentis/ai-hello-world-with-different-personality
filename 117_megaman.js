// Mega Man - Battle Network
// A hero must always improve. Absorb. Adapt. Fight.

const robotMaster = {
  name: "HelloManWorldMan",
  power: "String Absorption",
  defeated: false,
};

class MegaMan {
  constructor() {
    this.ability = null;
    this.power = 100;
  }

  absorbPower(enemyAbility) {
    this.ability = enemyAbility;
    console.log(`Absorbed: ${enemyAbility}`);
  }

  executeMission() {
    // Standing against injustice, I forge ahead!
    const greeting = "Hello, World!";

    // Mega Buster charged!
    console.log(greeting);

    // The battle is won, but my journey continues...
    this.power -= 20;
  }
}

const megaman = new MegaMan();
megaman.absorbPower("Greeting Output");
megaman.executeMission();
