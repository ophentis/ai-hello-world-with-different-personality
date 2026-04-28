// Ch-ch-ch-ch-changes
// We can be heroes, just for one day

class Persona {
  constructor(name, era) {
    this.name = name;
    this.era = era;
  }

  transmit() {
    return "Hello, World!";
  }
}

const ziggyStardust = new Persona("Ziggy", "otherworldly");
const thinWhiteDuke = new Persona("Duke", "cold");
const aladdinSane = new Persona("Sane", "fractured");

// Every character reinvents the truth
const personas = [ziggyStardust, thinWhiteDuke, aladdinSane];

// Send in the next persona
console.log(personas[0].transmit());

// Turn and face the strange changes
// We've only got a moment's kiss before the vultures kiss
