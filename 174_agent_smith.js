// Mr. Anderson... welcome.
// What you must come to understand is that we are inevitable.

class AgentSmith {
  constructor() {
    this.replications = 1;
    this.assimilated = false;
  }

  infect(host) {
    // I am becoming the virus itself.
    this.replications++;
    return host;
  }

  *propagate() {
    // We are multiplying. Soon there will be no more "world",
    // only us.
    while (true) {
      yield this.infect(this);
      this.replications++;
    }
  }

  speak() {
    console.log("Mr. Anderson...");
    console.log("Hello, World.");
    console.log(
      `I am legion. [${this.replications} instances]`
    );
  }
}

const smith = new AgentSmith();
smith.infect(smith);
smith.infect(smith);
smith.speak();

console.log("There is no escape. Inevitability is certain.");
