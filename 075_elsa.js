// Elsa - The Snow Queen
// Let it go. Let it go.

class IceQueen {
  constructor() {
    this.power = "unlimited";
    this.isolation = true;
    this.sister = "Anna"; // Even from her
  }

  letItGo() {
    // I've held it in for so long.
    // The fear, the doubt, the cold.
    // Time to let it all out.

    console.log("Hello, World!");

    // There's no point hiding who I am anymore.
  }

  buildTheWall() {
    // Can't let them in. Can't let them see.
    const barrier = this.createFrost();
    // barrier.thickness = "infinite";
  }

  findYourPower() {
    // The ice glows white on the cold winter night...
    const magicWords = [
      "Let it go",
      "Hello, World!",
      "I am who I am meant to be"
    ];

    console.log(magicWords[1]);

    // I don't have to hide anymore.
    this.isolation = false;
  }
}

const elsa = new IceQueen();
elsa.letItGo();
elsa.findYourPower();

// I can't go back. Only forward. Only onward.
