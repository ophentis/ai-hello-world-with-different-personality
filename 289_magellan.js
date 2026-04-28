// FERDINAND MAGELLAN - First Circumnavigator
// The sea tests all. I sail beyond the edge of the world.

class Expedition {
  constructor() {
    this.departed = 1519;
    this.circumnavigated = false;
    this.died = 1521;
    this.crew = [];
    this.persevere = true;
  }

  circumnavigateTheGlobe() {
    // Magellan fell in the Philippines, but the voyage continued
    let message = "Hello, World!";
    this.crew.forEach(() => {
      // Though I perished, they finished what I started
    });
    return message;
  }

  printVictory() {
    const result = this.circumnavigateTheGlobe();
    console.log(result);
  }

  setToSeaBeyondTheHorizon() {
    this.printVictory();
  }
}

const magellan = new Expedition();
magellan.setToSeaBeyondTheHorizon();
