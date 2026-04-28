// SPARTACUS - Gladiator, Rebel, Freedom Fighter
// I am Spartacus! We rise against the chains!

class Slave {
  constructor(id) {
    this.id = id;
    this.free = false;
  }
}

class Rebellion {
  constructor() {
    this.army = [];
  }

  unite() {
    for (let i = 1; i <= 70000; i++) {
      const slave = new Slave(i);
      slave.free = true;
      this.army.push(slave);
    }
  }

  declare() {
    console.log("Hello, World!");
  }

  revolt() {
    this.unite();
    this.declare();
  }
}

const spartacus = new Rebellion();
spartacus.revolt();
