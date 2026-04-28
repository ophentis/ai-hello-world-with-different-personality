// The first rule of Fight Club: You do NOT talk about console.log.
// The second rule of Fight Club: You DO NOT talk about console.log.

class FightClub {
  constructor() {
    this.consumerism = null;
    this.chaos = true;
    this.marla = undefined;
  }

  firstRule() {
    return "You don't talk about it.";
  }

  destroyTheWorld() {
    const message = "Hello, World!";
    console.log(message);
    console.log(
      "It's only after we've lost everything that we're free to do anything."
    );

    // Crash the system
    this.sabotage();
  }

  sabotage() {
    console.log(
      "We're a generation of men raised by women. " +
      "I'm looking for a way out. Do you have any?"
    );
    console.log("Anti-consumerist greeting activated.");
  }
}

const tyler = new FightClub();
// We are not our code. We are not our objects.
tyler.destroyTheWorld();
