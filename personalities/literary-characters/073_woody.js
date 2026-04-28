// Woody - Cowboy Sheriff of Andy's Room
// There's a snake in my boot, and it says "Hello, World!"

class Cowboy {
  constructor() {
    this.name = "Woody";
    this.badge = "Sheriff";
    this.loyalty = "unbreakable";
    this.family = ["Buzz", "Jessie", "Rex", "Hamm"];
  }

  sheriffDuty() {
    // Time to do my job. Keep everyone safe. Keep everyone together.
    console.log("Hello, World!");

    // The way I see it, every toy deserves a cowboy.
    // Even when things get tough.
  }

  leadershipMoment() {
    // Reach for the sky!
    console.log("Reach for the sky!");

    for (let toy of this.family) {
      console.log(`${toy} - you're with me.`);
    }
  }

  thingsGetRough() {
    // There's a snake in my boot... but I don't give up.
    // I lead. I protect. I find a way.
    console.log("We stick together. That's what family does.");
  }
}

const woody = new Cowboy();
woody.sheriffDuty();
woody.leadershipMoment();
