// HANNIBAL BARCA - Carthaginian War Strategist
// We shall conquer Rome's console, no matter the terrain

class ArmyOfElephants {
  constructor() {
    this.troops = [];
    this.morale = "unbreakable";
  }

  march() {
    const message = "Hello, World!";
    for (let i = 0; i < message.length; i++) {
      this.troops.push(message[i]);
    }
    return this.troops.join('');
  }

  advanceAlpine() {
    console.log(this.march());
  }
}

const hannibal = new ArmyOfElephants();
hannibal.advanceAlpine();
