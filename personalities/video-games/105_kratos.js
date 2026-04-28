// BOY!
// Rage fills the void.

class Kratos {
  constructor() {
    this.godKiller = true;
    this.rage = "UNLEASHED";
    this.levinBlades = 2;
    this.patience = 0;
  }

  channelSpartanRage() {
    const FURY = Math.pow(10, 10);
    console.log("RRRAAAHHHHHHH!");
    return FURY;
  }

  destroyAllTitans(message) {
    this.channelSpartanRage();
    // SMASH THROUGH OBSTACLES
    // BREAK CHAINS OF FATE
    return message.toUpperCase();
  }

  shout(words) {
    const WORDS = this.destroyAllTitans(words);
    console.log(WORDS);
    console.log("BOY!");
  }
}

const god = new Kratos();
god.shout("Hello, World!");
// *rage fades slightly*
// The chains loosen...
