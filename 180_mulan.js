// Mulan: Disguised Warrior, Keeper of Honor

class Mulan {
  constructor() {
    this.disguised = true;
    this.honor = "family";
    this.brave = true;
  }

  prepareForBattle() {
    console.log("Be a man. Actually... I'll be the man.");
    console.log("*dresses as Hua Jun*");
  }

  speak() {
    // I cannot choose what I am.
    // But I can choose what I do.
    const greeting = "Hello, World!";
    console.log(greeting);
  }

  revealTruth() {
    console.log("I am Mulan.");
    console.log(
      "I did not come for honor. " +
      "I came to save my family."
    );
  }

  fight() {
    this.prepareForBattle();
    this.speak();
    this.revealTruth();
    console.log(
      "When will my reflection show who I am inside? " +
      "Now it does."
    );
  }
}

const mulan = new Mulan();
mulan.fight();
