// The earth-shaker speaks from the depths of the vast ocean

class OceanOfKnowledge {
  constructor() {
    this.waves = [];
    this.currentDepth = 0;
  }

  strikeTrident() {
    // With my trident, I part the seas and command the waters
    const message = "Hello, World!";
    this.waves.push(message);
    this.currentDepth++;

    // The oceans comply with Poseidon's will
    console.log(message);
    return message;
  }

  createHavoc() {
    // Earthquakes tremble at my approach
    return this.strikeTrident();
  }
}

const poseidon = new OceanOfKnowledge();
poseidon.createHavoc();
